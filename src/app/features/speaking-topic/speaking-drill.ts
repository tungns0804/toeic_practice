import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

import { ActivityStore } from '../../core/activity/activity-store';
import { LanguageStore } from '../../core/i18n/language-store';
import type { MessageKey } from '../../core/i18n/messages';
import { SpeakingStore } from '../../core/speaking/speaking-store';
import {
  type ExampleSegment,
  type SpeakingPhrase,
  type SpeakingTopic,
  POS_ABBR,
  exampleSegments,
} from '../../core/speaking/speaking.model';
import { pickRandom, shuffle } from '../../core/utils/random';
import { SpeakButton } from '../../shared/speak-button';

/**
 * Dạng câu hỏi:
 *  - enVi     thấy cụm tiếng Anh → chọn nghĩa tiếng Việt
 *  - viEn     thấy nghĩa tiếng Việt → chọn cụm tiếng Anh
 *  - meaning  thấy định nghĩa (theo ngôn ngữ giao diện) → chọn cụm
 *  - cloze    câu ví dụ bị khoét cụm từ → chọn cụm hợp chỗ trống
 */
type DrillKind = 'enVi' | 'viEn' | 'meaning' | 'cloze';

/** Dạng người học chọn ở màn hình bắt đầu; "mixed" xoay vòng cả bốn dạng. */
export type DrillMode = 'mixed' | 'enVi' | 'viEn' | 'cloze';

const MODES: readonly { id: DrillMode; key: MessageKey }[] = [
  { id: 'mixed', key: 'speaking.drill.mode.mixed' },
  { id: 'enVi', key: 'speaking.drill.mode.enVi' },
  { id: 'viEn', key: 'speaking.drill.mode.viEn' },
  { id: 'cloze', key: 'speaking.drill.mode.cloze' },
];

const MIXED_ORDER: readonly DrillKind[] = ['enVi', 'viEn', 'meaning', 'cloze'];

interface DrillItem {
  readonly phrase: SpeakingPhrase;
  readonly kind: DrillKind;
  readonly options: readonly SpeakingPhrase[];
  readonly segments: readonly ExampleSegment[];
}

const OPTION_COUNT = 4;

/**
 * Luyện cụm từ của một chủ đề trước khi trả lời câu hỏi: mỗi cụm một câu trắc
 * nghiệm, theo dạng người học chọn (Anh → Việt, Việt → Anh, điền chỗ trống, hoặc
 * trộn cả bốn dạng).
 * Phương án nhiễu lấy từ chính chủ đề đó, nên câu nào cũng là một lần ôn lại
 * bốn cụm cùng lúc.
 */
@Component({
  selector: 'app-speaking-drill',
  imports: [SpeakButton],
  templateUrl: './speaking-drill.html',
  styleUrl: './speaking-drill.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onKey($event)' },
})
export class SpeakingDrill {
  private readonly lang = inject(LanguageStore);
  private readonly store = inject(SpeakingStore);
  private readonly activity = inject(ActivityStore);

  readonly topic = input.required<SpeakingTopic>();
  readonly toQuestions = output<void>();

  protected readonly t = this.lang.t.bind(this.lang);
  protected readonly language = this.lang.language;
  protected readonly posAbbr = POS_ABBR;

  protected readonly modes = MODES;
  protected readonly mode = signal<DrillMode>('mixed');
  protected readonly phase = signal<'intro' | 'run' | 'done'>('intro');
  protected readonly items = signal<readonly DrillItem[]>([]);
  protected readonly index = signal(0);
  protected readonly picked = signal<string | null>(null);
  /** Id các cụm đã trả lời sai trong lượt này. */
  protected readonly missed = signal<readonly string[]>([]);

  protected readonly best = computed(() => this.store.vocabBest(this.topic().id));
  protected readonly current = computed(() => this.items()[this.index()] ?? null);
  protected readonly correctCount = computed(() => this.items().length - this.missed().length);
  protected readonly missedPhrases = computed(() => {
    const ids = new Set(this.missed());
    return this.topic().phrases.filter((phrase) => ids.has(phrase.id));
  });
  protected readonly isLast = computed(() => this.index() === this.items().length - 1);

  protected start(only?: readonly string[]): void {
    const all = this.topic().phrases;
    const pool = only ? all.filter((phrase) => only.includes(phrase.id)) : all;
    const mode = this.mode();
    // Xáo xong mới chia dạng câu, để dạng của mỗi cụm đổi theo từng lượt.
    const items = shuffle(pool).map<DrillItem>((phrase, i) => ({
      phrase,
      kind: mode === 'mixed' ? MIXED_ORDER[i % MIXED_ORDER.length] : mode,
      options: shuffle([
        phrase,
        ...pickRandom(
          all.filter((other) => other.id !== phrase.id),
          OPTION_COUNT - 1,
        ),
      ]),
      segments: exampleSegments(phrase.example),
    }));
    this.items.set(items);
    this.index.set(0);
    this.picked.set(null);
    this.missed.set([]);
    this.phase.set('run');
  }

  protected pick(option: SpeakingPhrase): void {
    const item = this.current();
    if (!item || this.picked() !== null) return;
    this.picked.set(option.id);
    const correct = option.id === item.phrase.id;
    if (!correct) this.missed.update((ids) => [...ids, item.phrase.id]);
    this.activity.recordAnswer(correct);
  }

  protected next(): void {
    if (this.picked() === null) return;
    if (!this.isLast()) {
      this.index.update((i) => i + 1);
      this.picked.set(null);
      return;
    }
    // Chỉ lượt đủ mọi cụm mới tính điểm cao nhất: lượt ôn lại vài câu sai mà
    // đúng hết thì không phải là "thuộc cả chủ đề".
    if (this.items().length === this.topic().phrases.length) {
      this.store.recordVocabScore(this.topic().id, {
        correct: this.correctCount(),
        total: this.items().length,
      });
    }
    this.phase.set('done');
  }

  /** Chữ hiện trên phương án: nghĩa tiếng Việt ở dạng Anh → Việt, còn lại là cụm tiếng Anh. */
  protected optionLabel(item: DrillItem, option: SpeakingPhrase): string {
    return item.kind === 'enVi' ? option.short : option.phrase;
  }

  protected optionState(option: SpeakingPhrase): 'correct' | 'wrong' | 'idle' {
    const picked = this.picked();
    const item = this.current();
    if (picked === null || !item) return 'idle';
    if (option.id === item.phrase.id) return 'correct';
    return option.id === picked ? 'wrong' : 'idle';
  }

  protected onKey(event: KeyboardEvent): void {
    if (this.phase() !== 'run' || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('input, textarea, select, [contenteditable]')) return;

    const item = this.current();
    if (!item) return;
    const n = Number(event.key);
    if (n >= 1 && n <= item.options.length) {
      event.preventDefault();
      this.pick(item.options[n - 1]);
    } else if (event.key === 'Enter' && this.picked() !== null) {
      // Không để Enter còn "bấm" tiếp vào nút đang có focus.
      event.preventDefault();
      this.next();
    }
  }
}
