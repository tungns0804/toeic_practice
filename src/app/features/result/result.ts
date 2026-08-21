import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import {
  LESSON_KIND_ROUTE,
  LessonKind,
  LocalizedText,
  localized,
} from '../../core/models/lesson.model';
import { QuestionResult, describeConfigKeys } from '../../core/models/practice.model';
import { reshuffleChoices } from '../../core/practice/build-questions';
import { FavoriteStore } from '../../core/services/favorite-store';
import { PracticeSessionStore } from '../../core/services/practice-session-store';

type ResultFilter = 'all' | 'wrong' | 'retried';

@Component({
  selector: 'app-result',
  imports: [T],
  templateUrl: './result.html',
  styleUrl: './result.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Result {
  private readonly session = inject(PracticeSessionStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly lang = inject(LanguageStore);
  private readonly router = inject(Router);

  readonly t = this.lang.t.bind(this.lang);

  readonly summary = this.session.summary;
  readonly filter = signal<ResultFilter>('all');
  readonly favoritesJustAdded = signal(0);

  readonly configBadgeKeys = computed(() => {
    const config = this.summary()?.config;
    return config ? describeConfigKeys(config) : [];
  });

  readonly accuracy = computed(() => {
    const summary = this.summary();
    if (!summary || summary.total === 0) return 0;
    return Math.round((summary.correctCount / summary.total) * 100);
  });

  /** Câu trả lời sai — cũng chính là các mục nên đánh dấu để luyện lại. */
  readonly wrongResults = computed<QuestionResult[]>(
    () => this.summary()?.results.filter((r) => !r.isCorrect) ?? [],
  );

  /** Câu đúng nhưng phải thử lại vài lần — vẫn là dấu hiệu chưa nhớ chắc. */
  readonly retriedResults = computed<QuestionResult[]>(
    () => this.summary()?.results.filter((r) => r.isCorrect && r.wrongAttempts > 0) ?? [],
  );

  readonly visibleResults = computed<QuestionResult[]>(() => {
    switch (this.filter()) {
      case 'wrong':
        return this.wrongResults();
      case 'retried':
        return this.retriedResults();
      default:
        return this.summary()?.results ?? [];
    }
  });

  readonly durationText = computed(() => {
    const totalSeconds = Math.max(0, Math.round((this.summary()?.durationMs ?? 0) / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return minutes > 0
      ? this.lang.t('result.minutesSeconds', { minutes, seconds })
      : this.lang.t('result.seconds', { seconds });
  });

  readonly scoreTone = computed(() => {
    const value = this.accuracy();
    if (value >= 90) return 'great';
    if (value >= 70) return 'ok';
    return 'low';
  });

  /**
   * Số mục sai chưa được đánh dấu ★.
   * Đếm theo MỤC chứ không theo câu: chiều "trộn" của bài bị động hỏi một câu hai
   * lượt, sai cả hai lượt thì vẫn chỉ là một mục cần ôn lại.
   */
  readonly unmarkedWrongIds = computed(() => {
    void this.favoriteStore.counts();
    const summary = this.summary();
    if (!summary) return [];

    const ids = new Set(this.wrongResults().map((r) => r.question.subject.id));
    return [...ids].filter((id) => !this.favoriteStore.isFavorite(summary.lessonId, id));
  });

  /** Chữ của một cặp hai ngôn ngữ, theo ngôn ngữ đang chọn. */
  localizedText(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }

  /** Chữ hiển thị của một giá trị trong kết quả (câu nhận diện thì lưu id của thì). */
  answerText(item: QuestionResult, value: string): string {
    const label = item.question.labels?.[value];
    return label ? localized(label, this.lang.language()) : value;
  }

  correctAnswerText(item: QuestionResult): string {
    return this.answerText(item, item.question.correctAnswer);
  }

  attemptsText(item: QuestionResult): string {
    return item.attempts.map((a) => this.answerText(item, a)).join(' · ');
  }

  setFilter(value: ResultFilter): void {
    this.filter.set(value);
  }

  isFavorite(subjectId: string): boolean {
    void this.favoriteStore.counts();
    const setId = this.summary()?.lessonId;
    return !!setId && this.favoriteStore.isFavorite(setId, subjectId);
  }

  toggleFavorite(subjectId: string): void {
    const setId = this.summary()?.lessonId;
    if (!setId) return;
    this.favoriteStore.toggle(setId, subjectId);
  }

  /** Đánh dấu ★ toàn bộ mục bị sai để lần sau luyện riêng nhóm này. */
  markWrongAsFavorite(): void {
    const summary = this.summary();
    if (!summary) return;

    const added = this.unmarkedWrongIds().length;
    this.favoriteStore.add(
      summary.lessonId,
      this.wrongResults().map((r) => r.question.subject.id),
    );
    this.favoritesJustAdded.set(added);
  }

  /** Luyện lại chỉ những câu vừa sai, giữ nguyên thiết lập cũ. */
  retryWrong(): void {
    this.restart(this.wrongResults());
  }

  /** Làm lại toàn bộ phiên vừa rồi với cùng thiết lập. */
  retryAll(): void {
    this.restart(this.summary()?.results ?? []);
  }

  private restart(results: readonly QuestionResult[]): void {
    const lesson = this.session.lesson();
    const summary = this.summary();
    if (!lesson || !summary || results.length === 0) return;

    // Trộn lại thứ tự đáp án để không nhớ vị trí đáp án của lần trước.
    const questions = results.map((r) => reshuffleChoices(r.question));
    if (this.session.start(lesson, summary.config, questions)) {
      void this.router.navigate(['/practice']);
    }
  }

  /**
   * Quay lại đúng màn hình của phần vừa luyện.
   *
   * Tra bảng theo `config.lessonKind` chứ không đoán theo id: id chỉ là một chuỗi
   * bất kỳ, và bảng `LESSON_KIND_ROUTE` khai đủ mọi loại nên thêm khu thứ tư mà
   * quên khai thì TypeScript báo lỗi ngay tại chỗ khai, chứ không đẩy người dùng
   * tới một đường dẫn không tồn tại.
   */
  backToSection(): void {
    const summary = this.summary();
    this.session.clearSummary();
    if (!summary) {
      void this.router.navigate(['/']);
      return;
    }

    const kind: LessonKind = summary.config.lessonKind;
    void this.router.navigate([LESSON_KIND_ROUTE[kind], summary.lessonId]);
  }

  backHome(): void {
    this.session.clearSummary();
    void this.router.navigate(['/']);
  }
}
