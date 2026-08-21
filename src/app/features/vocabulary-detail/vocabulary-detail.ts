import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import {
  Lesson,
  LocalizedText,
  POS_SHORT_KEY,
  VocabularyWord,
  localized,
} from '../../core/models/lesson.model';
import {
  AnswerMode,
  DEFAULT_MAX_WRONG_ATTEMPTS,
  PracticeConfig,
  PracticeScope,
  VOCAB_DIRECTIONS,
  VocabDirection,
  vocabDirectionInfo,
} from '../../core/models/practice.model';
import { orderQuestions } from '../../core/practice/build-questions';
import { findClozeSpan } from '../../core/practice/cloze';
import { buildVocabularyQuestions } from '../../core/practice/vocabulary-questions';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';
import { PracticeSessionStore } from '../../core/services/practice-session-store';
import { matchesSearch, normalizeSearch } from '../../core/utils/search';

const LIMIT_CHOICES = [10, 20, 30, 50] as const;

@Component({
  selector: 'app-vocabulary-detail',
  imports: [RouterLink, T],
  templateUrl: './vocabulary-detail.html',
  styleUrl: './vocabulary-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(LessonStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly session = inject(PracticeSessionStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly directions = VOCAB_DIRECTIONS;
  readonly posShortKey = POS_SHORT_KEY;

  readonly lessonId = signal('');
  readonly lesson = signal<Lesson | null>(null);
  readonly loading = signal(true);

  // --- Thiết lập luyện tập ---
  readonly direction = signal<VocabDirection>('en-vi');
  readonly answerMode = signal<AnswerMode>('choice');
  readonly scope = signal<PracticeScope>('all');
  readonly questionLimit = signal<number | null>(null);
  readonly shuffleQuestions = signal(true);
  readonly showHint = signal(false);
  readonly ignoreDiacritics = signal(false);

  // --- Bộ lọc bảng ---
  readonly search = signal('');
  readonly onlyFavorites = signal(false);

  readonly notFound = computed(() => !this.loading() && this.lesson() === null);
  readonly words = computed<VocabularyWord[]>(() => this.lesson()?.words ?? []);
  readonly currentDirection = computed(() => vocabDirectionInfo(this.direction()));

  private readonly favoriteIds = computed(() => {
    void this.favoriteStore.counts();
    return new Set(this.favoriteStore.idsOf(this.lessonId()));
  });

  readonly favoriteCount = computed(
    () => this.words().filter((word) => this.favoriteIds().has(word.id)).length,
  );

  readonly pool = computed<VocabularyWord[]>(() =>
    this.scope() === 'favorite'
      ? this.words().filter((word) => this.favoriteIds().has(word.id))
      : this.words(),
  );

  /**
   * Số câu hỏi dựng được.
   *
   * Chiều "điền từ" bỏ qua những từ mà câu ví dụ không chứa chính từ đó (xem
   * `findClozeSpan`), nên con số này có thể nhỏ hơn số từ trong phạm vi. Tính
   * đúng ở đây thì dòng "sẽ luyện N câu" không hứa hão.
   */
  private readonly usableCount = computed(() => {
    if (this.direction() !== 'cloze') return this.pool().length;
    return this.pool().filter((word) => word.example && findClozeSpan(word.example, word.word))
      .length;
  });

  readonly plannedQuestionCount = computed(() => {
    const limit = this.questionLimit();
    return limit === null ? this.usableCount() : Math.min(limit, this.usableCount());
  });

  readonly canStart = computed(() => this.plannedQuestionCount() > 0);

  readonly limitChoices = computed(() =>
    LIMIT_CHOICES.filter((limit) => limit < this.usableCount()),
  );

  // --- Bảng tra cứu ---

  readonly filteredWords = computed<VocabularyWord[]>(() => {
    const base = this.onlyFavorites()
      ? this.words().filter((word) => this.favoriteIds().has(word.id))
      : this.words();
    const keyword = normalizeSearch(this.search());
    if (!keyword) return base;
    return base.filter((word) =>
      matchesSearch(
        `${word.word} ${word.ipa} ${word.meaning} ${word.example} ${word.exampleVi}`,
        keyword,
      ),
    );
  });

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

    this.direction.set('en-vi');
    this.answerMode.set('choice');
    this.scope.set('all');
    this.questionLimit.set(null);
    this.search.set('');
    this.onlyFavorites.set(false);
  }

  /** Chữ của một cặp hai ngôn ngữ, theo ngôn ngữ đang chọn. */
  localizedText(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }

  // --- Sự kiện thiết lập ---

  setDirection(direction: VocabDirection): void {
    this.direction.set(direction);
    this.questionLimit.set(null);
  }

  setAnswerMode(answerMode: AnswerMode): void {
    this.answerMode.set(answerMode);
  }

  setScope(scope: PracticeScope): void {
    this.scope.set(scope);
    this.questionLimit.set(null);
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

  isFavorite(wordId: string): boolean {
    return this.favoriteIds().has(wordId);
  }

  toggleFavorite(wordId: string): void {
    this.favoriteStore.toggle(this.lessonId(), wordId);
  }

  clearFavorites(): void {
    const count = this.favoriteCount();
    if (count === 0) return;
    if (confirm(this.lang.t('favorite.confirmClear', { count }))) {
      this.favoriteStore.clearSet(this.lessonId());
      if (this.scope() === 'favorite') this.scope.set('all');
      this.onlyFavorites.set(false);
    }
  }

  // --- Bắt đầu luyện ---

  start(): void {
    const lesson = this.lesson();
    if (!lesson || !this.canStart()) return;

    const config: PracticeConfig = {
      lessonId: lesson.id,
      lessonKind: 'vocabulary',
      scope: this.scope(),
      answerMode: this.answerMode(),
      questionLimit: this.questionLimit(),
      shuffle: this.shuffleQuestions(),
      maxWrongAttempts: DEFAULT_MAX_WRONG_ATTEMPTS,
      ignoreDiacritics: this.ignoreDiacritics(),
      showHint: this.showHint(),
      direction: this.direction(),
      tenseMode: 'vi-en',
      tensePointId: null,
      exercise: null,
      passiveMode: 'to-passive',
    };

    const questions = orderQuestions(
      buildVocabularyQuestions(this.pool(), this.words(), config),
      config,
    );

    if (this.session.start({ id: lesson.id, name: lesson.name }, config, questions)) {
      void this.router.navigate(['/practice']);
    }
  }
}
