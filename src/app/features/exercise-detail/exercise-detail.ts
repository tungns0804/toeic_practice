import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  ExerciseInfo,
  PASSIVE_KINDS,
  PASSIVE_KIND_LABEL_KEY,
  PASSIVE_MODES,
  PassiveKind,
  PassiveMode,
  PassiveSentence,
  exerciseInfo,
  exerciseModeInfo,
} from '../../core/exercises/exercise.model';
import { PASSIVE_FORMULAS, PASSIVE_SENTENCES, passiveFormula } from '../../core/exercises/passive-sentences';
import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { LocalizedText, localized } from '../../core/models/lesson.model';
import {
  DEFAULT_MAX_WRONG_ATTEMPTS,
  PracticeConfig,
  PracticeScope,
} from '../../core/models/practice.model';
import { orderQuestions } from '../../core/practice/build-questions';
import { buildPassiveQuestions, countPassiveQuestions } from '../../core/practice/passive-questions';
import { FavoriteStore } from '../../core/services/favorite-store';
import { PracticeSessionStore } from '../../core/services/practice-session-store';
import { matchesSearch, normalizeSearch } from '../../core/utils/search';

const LIMIT_CHOICES = [10, 20, 30, 50] as const;

@Component({
  selector: 'app-exercise-detail',
  imports: [RouterLink, T],
  templateUrl: './exercise-detail.html',
  styleUrl: './exercise-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly session = inject(PracticeSessionStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly modes = PASSIVE_MODES;
  readonly formulas = PASSIVE_FORMULAS;
  readonly kinds = PASSIVE_KINDS;
  readonly kindLabelKey = PASSIVE_KIND_LABEL_KEY;

  readonly exerciseId = signal('');
  readonly info = signal<ExerciseInfo | null>(null);

  // --- Thiết lập luyện tập ---
  readonly mode = signal<PassiveMode>('to-passive');
  readonly scope = signal<PracticeScope>('all');
  /** Các dạng câu được đem ra hỏi. Bỏ trống hết là không hợp lệ nên luôn giữ ≥ 1. */
  readonly selectedKinds = signal<PassiveKind[]>([...PASSIVE_KINDS]);
  readonly questionLimit = signal<number | null>(null);
  readonly shuffleQuestions = signal(true);
  readonly showHint = signal(false);

  // --- Bộ lọc bảng ---
  readonly search = signal('');
  readonly onlyFavorites = signal(false);

  readonly notFound = computed(() => this.info() === null);

  private readonly favoriteIds = computed(() => {
    void this.favoriteStore.counts();
    return new Set(this.favoriteStore.idsOf(this.exerciseId()));
  });

  private readonly kindSet = computed(() => new Set(this.selectedKinds()));

  /** Câu trong các dạng đang chọn. */
  readonly kindSentences = computed<PassiveSentence[]>(() =>
    PASSIVE_SENTENCES.filter((sentence) => this.kindSet().has(sentence.kind)),
  );

  /**
   * Số câu của từng dạng, tính trên TOÀN BỘ dữ liệu chứ không trừ đi dạng đang
   * chọn: con số trên nút phải đứng yên khi bật tắt các dạng, nếu không người
   * dùng sẽ tưởng dữ liệu vừa biến mất.
   */
  readonly kindCounts = computed<Record<PassiveKind, number>>(() => {
    const counts = { standard: 0, modal: 0, twoObjects: 0, phrasal: 0, byOmitted: 0 };
    for (const sentence of PASSIVE_SENTENCES) counts[sentence.kind]++;
    return counts;
  });

  readonly favoriteCount = computed(
    () => this.kindSentences().filter((sentence) => this.favoriteIds().has(sentence.id)).length,
  );

  readonly totalFavoriteCount = computed(
    () => PASSIVE_SENTENCES.filter((sentence) => this.favoriteIds().has(sentence.id)).length,
  );

  readonly pool = computed<PassiveSentence[]>(() =>
    this.scope() === 'favorite'
      ? this.kindSentences().filter((sentence) => this.favoriteIds().has(sentence.id))
      : this.kindSentences(),
  );

  /**
   * Số câu hỏi sẽ dựng được.
   *
   * KHÔNG bằng số câu trong phạm vi: chiều "Bị → Chủ" bỏ qua câu không đảo ngược
   * được, còn chiều "Trộn" sinh hai câu cho mỗi mục đảo ngược được. Phép đếm đó
   * nằm cùng chỗ với phép dựng câu hỏi (`countPassiveQuestions`) để hai bên không
   * bao giờ nói khác nhau.
   */
  private readonly usableCount = computed(() => countPassiveQuestions(this.pool(), this.mode()));

  readonly plannedQuestionCount = computed(() => {
    const limit = this.questionLimit();
    return limit === null ? this.usableCount() : Math.min(limit, this.usableCount());
  });

  readonly canStart = computed(() => this.plannedQuestionCount() > 0);

  readonly limitChoices = computed(() =>
    LIMIT_CHOICES.filter((limit) => limit < this.usableCount()),
  );

  // --- Bảng tra cứu ---

  readonly filteredSentences = computed<PassiveSentence[]>(() => {
    const base = this.onlyFavorites()
      ? this.kindSentences().filter((sentence) => this.favoriteIds().has(sentence.id))
      : this.kindSentences();
    const keyword = normalizeSearch(this.search());
    if (!keyword) return base;
    return base.filter((sentence) =>
      matchesSearch(`${sentence.active} ${sentence.passive} ${sentence.vietnamese}`, keyword),
    );
  });

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('id') ?? '';
      this.exerciseId.set(id);
      this.load(id);
    });
  }

  private load(id: string): void {
    this.info.set(exerciseInfo(id));
    this.mode.set('to-passive');
    this.scope.set('all');
    this.selectedKinds.set([...PASSIVE_KINDS]);
    this.questionLimit.set(null);
    this.search.set('');
    this.onlyFavorites.set(false);
  }

  // --- Sự kiện thiết lập ---

  setMode(mode: PassiveMode): void {
    this.mode.set(mode);
    this.questionLimit.set(null);
    this.fixScope();
  }

  setScope(scope: PracticeScope): void {
    this.scope.set(scope);
    this.questionLimit.set(null);
  }

  isKindSelected(kind: PassiveKind): boolean {
    return this.kindSet().has(kind);
  }

  toggleKind(kind: PassiveKind): void {
    const current = this.selectedKinds();
    // Luôn phải còn ít nhất một dạng: bỏ hết thì bảng trống trơn mà không rõ vì sao.
    if (current.includes(kind) && current.length === 1) return;

    const next = current.includes(kind)
      ? current.filter((item) => item !== kind)
      : [...current, kind];
    // Giữ đúng thứ tự khai báo để nút không nhảy chỗ theo thứ tự bấm.
    this.selectedKinds.set(PASSIVE_KINDS.filter((item) => next.includes(item)));
    this.questionLimit.set(null);
    this.fixScope();
  }

  setQuestionLimit(limit: number | null): void {
    this.questionLimit.set(limit);
  }

  toggleShuffle(event: Event): void {
    this.shuffleQuestions.set((event.target as HTMLInputElement).checked);
  }

  toggleShowHint(event: Event): void {
    this.showHint.set((event.target as HTMLInputElement).checked);
  }

  /** Phạm vi ★ có thể rỗng đi sau khi đổi dạng câu hoặc đổi chiều — quay về "Toàn bộ". */
  private fixScope(): void {
    if (this.scope() === 'favorite' && this.pool().length === 0) this.scope.set('all');
  }

  // --- Bộ lọc bảng ---

  onSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.search.set('');
  }

  toggleOnlyFavorites(event: Event): void {
    this.onlyFavorites.set((event.target as HTMLInputElement).checked);
  }

  // --- Favorite ---

  isFavorite(sentenceId: string): boolean {
    return this.favoriteIds().has(sentenceId);
  }

  toggleFavorite(sentenceId: string): void {
    this.favoriteStore.toggle(this.exerciseId(), sentenceId);
  }

  clearFavorites(): void {
    const count = this.totalFavoriteCount();
    if (count === 0) return;
    if (confirm(this.lang.t('favorite.confirmClear', { count }))) {
      this.favoriteStore.clearSet(this.exerciseId());
      if (this.scope() === 'favorite') this.scope.set('all');
      this.onlyFavorites.set(false);
    }
  }

  // --- Hiển thị ---

  localizedText(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }

  /** Tên thì của một câu, để hiện trong cột "Thì" của bảng tra cứu. */
  formulaName(sentence: PassiveSentence): string {
    const formula = passiveFormula(sentence.formulaId);
    return formula ? this.localizedText(formula.name) : sentence.formulaId;
  }

  // --- Bắt đầu luyện ---

  start(): void {
    const info = this.info();
    if (!info || !this.canStart()) return;

    const config: PracticeConfig = {
      lessonId: info.id,
      lessonKind: 'exercise',
      scope: this.scope(),
      // Bài tập này chỉ có chế độ gõ đáp án — xem khoá 'exercise.typingOnly'.
      answerMode: 'typing',
      questionLimit: this.questionLimit(),
      shuffle: this.shuffleQuestions(),
      maxWrongAttempts: DEFAULT_MAX_WRONG_ATTEMPTS,
      // Đáp án luôn là tiếng Anh nên tuỳ chọn bỏ dấu tiếng Việt không có việc gì làm.
      ignoreDiacritics: false,
      showHint: this.showHint(),
      // Ba trường dưới đây thuộc về hai khu kia. PracticeConfig là một khối thiết
      // lập đầy đủ chứ không phải union theo loại bài, nên trường nào cũng phải có
      // giá trị.
      direction: 'en-vi',
      tenseMode: 'vi-en',
      tensePointId: null,
      exercise: info.id,
      passiveMode: this.mode(),
    };

    const questions = orderQuestions(buildPassiveQuestions(this.pool(), config), config);

    if (this.session.start({ id: info.id, name: this.lang.t(info.nameKey) }, config, questions)) {
      void this.router.navigate(['/practice']);
    }
  }
}
