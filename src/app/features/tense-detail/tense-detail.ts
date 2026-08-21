import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import {
  Lesson,
  LocalizedText,
  TenseExample,
  TenseExampleRef,
  TensePoint,
  flattenTenseExamples,
  localized,
} from '../../core/models/lesson.model';
import {
  AnswerMode,
  DEFAULT_MAX_WRONG_ATTEMPTS,
  PracticeConfig,
  PracticeScope,
  TENSE_MODES,
  TenseMode,
  tenseModeInfo,
} from '../../core/models/practice.model';
import { orderQuestions } from '../../core/practice/build-questions';
import { buildTenseQuestions } from '../../core/practice/tense-questions';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';
import { PracticeSessionStore } from '../../core/services/practice-session-store';

/** Các mốc số câu cho phép chọn nhanh. */
const LIMIT_CHOICES = [10, 20, 30, 50] as const;

@Component({
  selector: 'app-tense-detail',
  imports: [RouterLink, T],
  templateUrl: './tense-detail.html',
  styleUrl: './tense-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenseDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(LessonStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly session = inject(PracticeSessionStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly modes = TENSE_MODES;

  readonly lessonId = signal('');
  readonly lesson = signal<Lesson | null>(null);
  readonly loading = signal(true);

  // --- Thiết lập luyện tập ---
  readonly mode = signal<TenseMode>('vi-en');
  readonly answerMode = signal<AnswerMode>('typing');
  readonly scope = signal<PracticeScope>('all');
  readonly questionLimit = signal<number | null>(null);
  readonly shuffleQuestions = signal(true);
  readonly showHint = signal(false);
  readonly ignoreDiacritics = signal(false);
  /** null = luyện cả nhóm; có giá trị = chỉ luyện đúng một thì. */
  readonly onlyPointId = signal<string | null>(null);

  readonly notFound = computed(() => !this.loading() && this.lesson() === null);
  readonly points = computed<TensePoint[]>(() => this.lesson()?.tensePoints ?? []);
  readonly currentMode = computed(() => tenseModeInfo(this.mode()));

  /** Chỉ hai dạng có đáp án đủ ngắn mới bày ra bốn lựa chọn được. */
  readonly supportsChoice = computed(() => this.currentMode().supportsChoice);

  /** Đọc qua signal của FavoriteStore để danh sách tự cập nhật khi bấm sao. */
  private readonly favoriteIds = computed(() => {
    void this.favoriteStore.counts();
    return new Set(this.favoriteStore.idsOf(this.lessonId()));
  });

  /** Toàn bộ câu ví dụ của nhóm, đã trải phẳng và giữ đường dẫn ngược lên thì. */
  readonly allExamples = computed<TenseExampleRef[]>(() => flattenTenseExamples(this.points()));

  /** Câu ví dụ trong phạm vi thì đang chọn (cả nhóm, hoặc đúng một thì). */
  private readonly scopedExamples = computed<TenseExampleRef[]>(() => {
    const pointId = this.onlyPointId();
    return pointId === null
      ? this.allExamples()
      : this.allExamples().filter((ref) => ref.point.id === pointId);
  });

  /** Số câu trong phạm vi thì đang chọn — con số trên nút "Toàn bộ". */
  readonly scopedExamplesCount = computed(() => this.scopedExamples().length);

  /**
   * Số câu ★, đếm trên phạm vi thì đang chọn chứ không phải cả nhóm: nút "★ Đã
   * đánh dấu (N)" phải nói đúng số câu mà bấm vào sẽ luyện.
   */
  readonly favoriteCount = computed(
    () => this.scopedExamples().filter((ref) => this.favoriteIds().has(ref.example.id)).length,
  );

  /** Số câu ★ của cả nhóm — dùng cho nút "Bỏ đánh dấu tất cả". */
  readonly totalFavoriteCount = computed(
    () => this.allExamples().filter((ref) => this.favoriteIds().has(ref.example.id)).length,
  );

  /** Tập câu sẽ đem ra hỏi, sau khi áp cả phạm vi thì lẫn phạm vi ★. */
  readonly pool = computed<TenseExampleRef[]>(() => {
    const base = this.scopedExamples();
    return this.scope() === 'favorite'
      ? base.filter((ref) => this.favoriteIds().has(ref.example.id))
      : base;
  });

  /**
   * Số câu hỏi dựng được, CHƯA áp giới hạn số câu.
   *
   * Dạng "chia động từ" chỉ dùng được với câu có khai báo cụm động từ đã chia, nên
   * con số này KHÔNG bằng số câu trong phạm vi. Tính đúng ở đây thì dòng "sẽ luyện
   * N câu" nói thật, thay vì hứa 24 câu rồi chỉ hỏi 22.
   */
  private readonly usableCount = computed(() =>
    this.mode() === 'conjugate'
      ? this.pool().filter((ref) => ref.example.verb && ref.example.conjugated).length
      : this.pool().length,
  );

  readonly plannedQuestionCount = computed(() => {
    const limit = this.questionLimit();
    return limit === null ? this.usableCount() : Math.min(limit, this.usableCount());
  });

  readonly canStart = computed(() => this.plannedQuestionCount() > 0);

  /** Chỉ hiện mốc nhỏ hơn tổng số câu — mốc "50" khi chỉ có 24 câu là vô nghĩa. */
  readonly limitChoices = computed(() =>
    LIMIT_CHOICES.filter((limit) => limit < this.usableCount()),
  );

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('id') ?? '';
      this.lessonId.set(id);
      void this.load(id);
    });
  }

  private async load(id: string): Promise<void> {
    this.loading.set(true);
    this.lesson.set(await this.store.getLesson(id));
    this.loading.set(false);

    // Mở nhóm khác thì đặt lại toàn bộ thiết lập: "chỉ luyện thì X" của nhóm cũ
    // trỏ tới một thì không còn tồn tại ở nhóm này.
    this.mode.set('vi-en');
    this.answerMode.set('typing');
    this.scope.set('all');
    this.questionLimit.set(null);
    this.onlyPointId.set(null);
  }

  // --- Sự kiện thiết lập ---

  setMode(mode: TenseMode): void {
    this.mode.set(mode);
    this.questionLimit.set(null);
    // Dịch cả câu thì không có trắc nghiệm — quay về gõ đáp án thay vì để nút
    // "Trắc nghiệm" sáng mà không có tác dụng gì.
    if (!tenseModeInfo(mode).supportsChoice) this.answerMode.set('typing');
  }

  setAnswerMode(answerMode: AnswerMode): void {
    if (answerMode === 'choice' && !this.supportsChoice()) return;
    this.answerMode.set(answerMode);
  }

  setScope(scope: PracticeScope): void {
    this.scope.set(scope);
    this.questionLimit.set(null);
  }

  setOnlyPoint(pointId: string | null): void {
    this.onlyPointId.set(pointId);
    this.questionLimit.set(null);
    // Phạm vi ★ có thể rỗng đi sau khi thu hẹp về một thì.
    if (this.scope() === 'favorite' && this.pool().length === 0) this.scope.set('all');
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

  toggleIgnoreDiacritics(event: Event): void {
    this.ignoreDiacritics.set((event.target as HTMLInputElement).checked);
  }

  // --- Favorite ---

  isFavorite(exampleId: string): boolean {
    return this.favoriteIds().has(exampleId);
  }

  toggleFavorite(exampleId: string): void {
    this.favoriteStore.toggle(this.lessonId(), exampleId);
  }

  clearFavorites(): void {
    const count = this.totalFavoriteCount();
    if (count === 0) return;
    if (confirm(this.lang.t('favorite.confirmClear', { count }))) {
      this.favoriteStore.clearSet(this.lessonId());
      if (this.scope() === 'favorite') this.scope.set('all');
    }
  }

  // --- Hiển thị ---

  /**
   * Chữ của một cặp hai ngôn ngữ, theo ngôn ngữ đang chọn.
   *
   * Đọc `this.lang.language()` (một signal) nên template gọi hàm này sẽ tự vẽ lại
   * khi người dùng đổi ngôn ngữ — khác với việc chụp lấy ngôn ngữ một lần lúc nạp.
   */
  localizedText(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }

  /** Tên thì theo ngôn ngữ đang chọn. */
  pointName(point: TensePoint): string {
    return this.localizedText(point.name);
  }

  pointSummary(point: TensePoint): string {
    return this.localizedText(point.summary);
  }

  // --- Bắt đầu luyện ---

  /** Bắt đầu với đúng thiết lập đang hiện trên màn hình. */
  start(): void {
    this.startWith(this.pool(), this.scope());
  }

  /**
   * "Luyện riêng thì này" — đặt phạm vi về đúng thì đó rồi bắt đầu ngay.
   *
   * Đặt `onlyPointId` chứ không chỉ lọc tại chỗ: sau khi luyện xong quay lại
   * trang, khung thiết lập vẫn đang hiển thị đúng phạm vi vừa luyện.
   */
  startPoint(point: TensePoint): void {
    this.setOnlyPoint(point.id);
    const pool = this.allExamples().filter((ref) => ref.point.id === point.id);
    this.startWith(pool, 'all');
  }

  /** Nút luyện đặt ngay trên một câu ví dụ: chỉ hỏi đúng câu đó. */
  startSingle(example: TenseExample): void {
    const ref = this.allExamples().find((item) => item.example.id === example.id);
    if (ref) this.startWith([ref], 'single');
  }

  private startWith(pool: readonly TenseExampleRef[], scope: PracticeScope): void {
    const lesson = this.lesson();
    if (!lesson || pool.length === 0) return;

    const config: PracticeConfig = {
      lessonId: lesson.id,
      lessonKind: 'tense',
      scope,
      answerMode: this.supportsChoice() ? this.answerMode() : 'typing',
      // Luyện một câu thì giới hạn số câu không còn ý nghĩa gì.
      questionLimit: scope === 'single' ? null : this.questionLimit(),
      shuffle: scope === 'single' ? false : this.shuffleQuestions(),
      maxWrongAttempts: DEFAULT_MAX_WRONG_ATTEMPTS,
      ignoreDiacritics: this.ignoreDiacritics(),
      showHint: this.showHint(),
      direction: 'en-vi',
      tenseMode: this.mode(),
      tensePointId: this.onlyPointId(),
      exercise: null,
      passiveMode: 'to-passive',
    };

    const questions = orderQuestions(
      buildTenseQuestions(pool, this.points(), config),
      config,
    );

    if (this.session.start({ id: lesson.id, name: lesson.name }, config, questions)) {
      void this.router.navigate(['/practice']);
    }
  }
}
