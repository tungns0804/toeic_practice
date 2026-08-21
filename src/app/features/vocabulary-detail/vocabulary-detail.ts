import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import {
  Lesson,
  LocalizedText,
  MULTIWORD_KINDS,
  POS_SHORT_KEY,
  PARTS_OF_SPEECH,
  PartOfSpeech,
  VocabularyWord,
  isMultiword,
  localized,
} from '../../core/models/lesson.model';
import type { MessageKey } from '../../core/i18n/messages';
import {
  AnswerMode,
  DEFAULT_MAX_WRONG_ATTEMPTS,
  PracticeConfig,
  PracticeScope,
  SCOPE_LABEL_KEY,
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


  /**
   * Khung thiết lập đang mở hay đang thu gọn.
   *
   * Mặc định THU GỌN. Trước đây nó luôn mở, chiếm gần trọn màn hình đầu tiên —
   * người vào đọc lý thuyết hoặc tra bảng phải cuộn qua một bức tường điều khiển
   * mới tới được nội dung. Phần lớn người học bấm thẳng "Bắt đầu luyện" với thiết
   * lập mặc định, nên thứ họ cần thấy trước là nút đó, không phải sáu nhóm tuỳ chọn.
   */
  readonly setupOpen = signal(false);

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
  /**
   * Từ loại được đem ra hỏi. Rỗng = không lọc, hỏi tất cả.
   *
   * Tách hẳn khỏi `posFilter` của bảng tra cứu bên dưới: hai thứ trả lời hai câu
   * hỏi khác nhau ("tôi muốn NHÌN gì" và "tôi muốn LUYỆN gì"), và trộn chung thì
   * lọc bảng để tra một từ sẽ vô tình thu hẹp luôn cả phiên luyện sắp tới.
   */
  readonly practiceKinds = signal<PartOfSpeech[]>([]);

  // --- Bộ lọc bảng ---
  readonly search = signal('');
  readonly onlyFavorites = signal(false);
  /** null = không lọc theo từ loại. */
  readonly posFilter = signal<PartOfSpeech | null>(null);

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

  private readonly practiceKindSet = computed(() => new Set(this.practiceKinds()));

  readonly pool = computed<VocabularyWord[]>(() => {
    const base =
      this.scope() === 'favorite'
        ? this.words().filter((word) => this.favoriteIds().has(word.id))
        : this.words();

    const kinds = this.practiceKindSet();
    return kinds.size === 0 ? base : base.filter((word) => kinds.has(word.pos));
  });

  /** Từ loại có mặt trong band này, kèm số lượng — dùng cho các nút lọc. */
  private readonly kindCounts = computed(() => {
    const counts = new Map<PartOfSpeech, number>();
    for (const word of this.words()) counts.set(word.pos, (counts.get(word.pos) ?? 0) + 1);
    return counts;
  });

  readonly practiceKindOptions = computed(() =>
    PARTS_OF_SPEECH.filter((pos) => (this.kindCounts().get(pos) ?? 0) > 0).map((pos) => ({
      pos,
      count: this.kindCounts().get(pos) ?? 0,
      multiword: isMultiword(pos),
    })),
  );

  /** Năm nhóm cụm nhiều từ có mặt trong band này. */
  private readonly availableMultiword = computed(() =>
    MULTIWORD_KINDS.filter((pos) => (this.kindCounts().get(pos) ?? 0) > 0),
  );

  readonly multiwordCount = computed(() =>
    this.words().filter((word) => isMultiword(word.pos)).length,
  );

  /** Nút "Chỉ cụm nhiều từ" đang bật khi và chỉ khi đúng năm nhóm đó được chọn. */
  readonly multiwordOnly = computed(() => {
    const selected = this.practiceKindSet();
    const available = this.availableMultiword();
    return (
      selected.size > 0 &&
      selected.size === available.length &&
      available.every((pos) => selected.has(pos))
    );
  });

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

  /** Nhãn tóm tắt thiết lập, hiện khi khung đang thu gọn. */
  readonly summaryKeys = computed<MessageKey[]>(() => [
    this.currentDirection().shortKey,
    this.answerMode() === 'choice' ? 'setup.answerMode.choice' : 'setup.answerMode.typing',
    SCOPE_LABEL_KEY[this.scope()],
    // Đang lọc từ loại thì phải nói ra ngay ở dòng tóm tắt, nếu không người dùng
    // mở lại trang sau và không hiểu vì sao chỉ còn 25 câu thay vì 113.
    ...(this.multiwordOnly()
      ? (['setup.multiwordOnly'] as MessageKey[])
      : this.practiceKinds().map((pos) => POS_SHORT_KEY[pos])),
  ]);

  readonly limitChoices = computed(() =>
    LIMIT_CHOICES.filter((limit) => limit < this.usableCount()),
  );

  // --- Bảng tra cứu ---

  /**
   * Các từ loại thực sự CÓ trong band này, kèm số lượng.
   *
   * Dựng từ dữ liệu chứ không liệt kê cứng bảy từ loại: band nào không có giới từ
   * thì không hiện nút "Giới từ (0)" để bấm vào rồi nhận bảng trống.
   */
  readonly posOptions = computed(() =>
    PARTS_OF_SPEECH.map((pos) => ({
      pos,
      count: this.words().filter((word) => word.pos === pos).length,
    })).filter((item) => item.count > 0),
  );

  readonly filteredWords = computed<VocabularyWord[]>(() => {
    let base = this.onlyFavorites()
      ? this.words().filter((word) => this.favoriteIds().has(word.id))
      : this.words();

    const pos = this.posFilter();
    if (pos) base = base.filter((word) => word.pos === pos);

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
    this.posFilter.set(null);
    this.practiceKinds.set([]);
  }

  /** Chữ của một cặp hai ngôn ngữ, theo ngôn ngữ đang chọn. */
  localizedText(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }


  toggleSetup(): void {
    this.setupOpen.update((open) => !open);
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

  isPracticeKind(pos: PartOfSpeech): boolean {
    return this.practiceKindSet().has(pos);
  }

  togglePracticeKind(pos: PartOfSpeech): void {
    const current = this.practiceKinds();
    const next = current.includes(pos)
      ? current.filter((item) => item !== pos)
      : [...current, pos];
    // Giữ đúng thứ tự khai báo để nút không nhảy chỗ theo thứ tự bấm.
    this.practiceKinds.set(PARTS_OF_SPEECH.filter((item) => next.includes(item)));
    this.questionLimit.set(null);
  }

  clearPracticeKinds(): void {
    this.practiceKinds.set([]);
    this.questionLimit.set(null);
  }

  /** Bật/tắt nhanh cả năm nhóm cụm nhiều từ cùng lúc. */
  toggleMultiwordOnly(): void {
    this.practiceKinds.set(this.multiwordOnly() ? [] : [...this.availableMultiword()]);
    this.questionLimit.set(null);
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

  /** Bấm lại đúng từ loại đang chọn thì bỏ lọc — không cần thêm nút "Tất cả". */
  togglePos(pos: PartOfSpeech): void {
    this.posFilter.update((current) => (current === pos ? null : pos));
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
