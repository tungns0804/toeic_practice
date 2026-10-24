import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

import { LanguageStore } from '../../core/i18n/language-store';
import { SpeakingStore } from '../../core/speaking/speaking-store';
import type { SpeakingQuestion } from '../../core/speaking/speaking.model';

/** Ngừng gõ bao lâu thì tự lưu (ms). */
const AUTOSAVE_DELAY = 1200;

/**
 * Một câu hỏi luyện nói kèm ô viết câu trả lời.
 *
 * Lưu theo ba đường, để không bao giờ mất bài: tự lưu khi ngừng gõ, lưu khi rời ô,
 * và nút Lưu / Ctrl+S cho người muốn chắc chắn. Rời trang khi còn chữ chưa lưu thì
 * lưu nốt lúc component bị huỷ.
 */
@Component({
  selector: 'app-speaking-answer',
  template: `
    <article class="card q-card" [class.has-answer]="!!saved()">
      <div class="card-body stack stack-sm">
        <header class="q-head">
          <span class="badge badge-accent tnum">{{ t('speaking.questionNumber', { number: question().number }) }}</span>
          <h3 class="q-text" [id]="headingId()">{{ question().text }}</h3>
          <p class="q-vi muted small">{{ question().textVi }}</p>
        </header>

        <textarea
          class="textarea q-input"
          rows="4"
          spellcheck="true"
          lang="en"
          [attr.aria-labelledby]="headingId()"
          [placeholder]="t('speaking.answer.placeholder')"
          [value]="draft()"
          (input)="onInput($any($event.target).value)"
          (blur)="flush()"
          (keydown.control.s)="saveNow($event)"
          (keydown.meta.s)="saveNow($event)"
        ></textarea>

        <footer class="q-foot row small">
          <span class="faint tnum">{{ t('speaking.answer.words', { count: wordCount() }) }}</span>
          <span class="q-status" [attr.data-state]="status()" aria-live="polite">
            @switch (status()) {
              @case ('saved') {
                ✓ {{ t('speaking.answer.savedAt', { time: savedTime() }) }}
              }
              @case ('dirty') {
                {{ t('speaking.answer.unsaved') }}
              }
              @case ('failed') {
                {{ t('speaking.answer.saveFailed') }}
              }
            }
          </span>
          <span class="spacer"></span>
          @if (draft() || saved()) {
            <button type="button" class="btn btn-ghost btn-sm" (click)="clear()">
              {{ t('speaking.answer.clear') }}
            </button>
          }
          <button
            type="button"
            class="btn btn-primary btn-sm"
            [disabled]="status() !== 'dirty' && status() !== 'failed'"
            (click)="flush()"
          >
            {{ t('speaking.answer.save') }}
          </button>
        </footer>
      </div>
    </article>
  `,
  styleUrl: './speaking-answer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakingAnswer {
  private readonly store = inject(SpeakingStore);
  private readonly lang = inject(LanguageStore);

  readonly topicId = input.required<string>();
  readonly question = input.required<SpeakingQuestion>();

  protected readonly t = this.lang.t.bind(this.lang);

  protected readonly saved = computed(() => this.store.answerOf(this.topicId(), this.question().id));

  /** Chữ đang có trong ô; khởi tạo lại từ bản đã lưu nếu đổi sang câu khác. */
  protected readonly draft = linkedSignal(() => this.saved()?.text ?? '');

  private readonly failed = signal(false);

  protected readonly headingId = computed(() => `q-${this.topicId()}-${this.question().id}`);

  protected readonly dirty = computed(() => {
    const savedText = this.saved()?.text ?? '';
    // Ô chỉ toàn khoảng trắng mà chưa từng lưu thì không có gì để lưu.
    return this.draft().trim() ? this.draft() !== savedText : savedText !== '';
  });

  protected readonly status = computed<'saved' | 'dirty' | 'failed' | 'empty'>(() => {
    if (this.failed()) return 'failed';
    if (this.dirty()) return 'dirty';
    return this.saved() ? 'saved' : 'empty';
  });

  protected readonly wordCount = computed(() => {
    const words = this.draft().trim().split(/\s+/).filter(Boolean);
    return words.length;
  });

  protected readonly savedTime = computed(() => {
    const at = this.saved()?.savedAt;
    if (!at) return '—';
    const locale = this.lang.language() === 'vi' ? 'vi-VN' : 'en-GB';
    const date = new Date(at);
    const sameDay = date.toDateString() === new Date().toDateString();
    return sameDay
      ? date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
      : date.toLocaleString(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  });

  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.flush());
  }

  protected onInput(value: string): void {
    this.draft.set(value);
    this.cancelTimer();
    this.timer = setTimeout(() => this.flush(), AUTOSAVE_DELAY);
  }

  protected saveNow(event: Event): void {
    event.preventDefault();
    this.flush();
  }

  /** Ghi bản nháp xuống bộ nhớ nếu nó khác bản đã lưu. */
  protected flush(): void {
    this.cancelTimer();
    if (!this.dirty() && !this.failed()) return;
    this.failed.set(!this.store.saveAnswer(this.topicId(), this.question().id, this.draft()));
  }

  protected clear(): void {
    if (!confirm(this.t('speaking.answer.clearConfirm'))) return;
    this.draft.set('');
    this.flush();
  }

  private cancelTimer(): void {
    if (this.timer !== null) clearTimeout(this.timer);
    this.timer = null;
  }
}
