import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ActivityStore } from '../../core/activity/activity-store';
import { GRAMMAR_CHAPTERS, GRAMMAR_LESSONS } from '../../core/grammar/grammar-catalog';
import { GrammarProgressStore } from '../../core/grammar/grammar-progress-store';
import { GRAMMAR_QUESTIONS_PER_LESSON, GRAMMAR_STEPS } from '../../core/grammar/grammar.model';
import { LanguageStore } from '../../core/i18n/language-store';
import { localized } from '../../core/models/lesson.model';
import { GcIcon } from '../grammar-shared/gc-icon';
import { GrammarSidebar } from '../grammar-shared/grammar-sidebar';
import { ProgressRing } from '../grammar-shared/progress-ring';
import { GRAMMAR_STEP_LABEL } from '../grammar-shared/step-labels';

/**
 * Trang tổng quan khoá ngữ pháp (`/grammar`).
 *
 * Bố cục theo đúng bản gốc: thanh "Nội dung khóa học" bên trái; bên phải là lời
 * giới thiệu, thẻ xanh "Bài tiếp theo" (vòng tiến độ, chuỗi ngày, XP), và thẻ "Bài
 * 0 · Tổng quan" với lộ trình bốn bước cùng lưới 18 chương.
 */
@Component({
  selector: 'app-grammar-course',
  imports: [RouterLink, GcIcon, GrammarSidebar, ProgressRing],
  templateUrl: './grammar-course.html',
  styleUrl: './grammar-course.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrammarCourse {
  private readonly progress = inject(GrammarProgressStore);
  private readonly activity = inject(ActivityStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);

  readonly chapterCount = GRAMMAR_CHAPTERS.length;
  readonly lessonCount = GRAMMAR_LESSONS.length;
  readonly questionsPerLesson = GRAMMAR_QUESTIONS_PER_LESSON;
  readonly steps = GRAMMAR_STEPS.map((step) => GRAMMAR_STEP_LABEL[step]);

  readonly completed = this.progress.completedCount;
  readonly percent = this.progress.percent;
  /** Chuỗi ngày học CHUNG của cả app (chip 🔥 trên thanh trên cùng), không đếm riêng cho khoá này. */
  readonly streak = computed(() => this.activity.streak().current);
  readonly xp = this.progress.xp;

  /** Bài cho thẻ "Bài tiếp theo"; null khi đã đạt cả khoá. */
  readonly next = computed(() => {
    const entry = this.progress.nextLesson();
    if (!entry) return null;
    const own = this.progress.lesson(entry.id);
    return {
      id: entry.id,
      code: entry.code,
      chapterNumber: entry.chapterNumber,
      title: localized(entry.meta.title, this.lang.language()),
      // Đã mở bài hoặc đang làm dở thì nút ghi "Tiếp tục" thay vì "Bắt đầu".
      started: own.maxStep > 0 || own.attemptCount > 0 || own.draft !== null,
    };
  });

  /**
   * Lưới chương. Bấm một chương thì vào bài nên học tiếp TRONG chương đó: bài đầu
   * tiên chưa đạt mà đã mở; chương chưa mở bài nào thì vào bài đầu chương (trang
   * bài sẽ giải thích vì sao nó đang khoá); chương đã đạt hết thì vào bài đầu để ôn.
   */
  readonly chapters = computed(() => {
    // Đọc tiến độ để lưới tự vẽ lại khi vừa đạt một bài.
    this.progress.completedCount();
    return GRAMMAR_CHAPTERS.map((chapter, index) => {
      const lessons = GRAMMAR_LESSONS.filter((entry) => entry.chapter.id === chapter.id);
      const passed = lessons.filter((entry) => this.progress.isPassed(entry.id)).length;
      const target =
        lessons.find((entry) => !this.progress.isPassed(entry.id) && this.progress.isUnlocked(entry)) ??
        lessons[0];
      return {
        id: chapter.id,
        number: index + 1,
        title: chapter.title,
        total: lessons.length,
        passed,
        done: passed === lessons.length,
        targetId: target.id,
      };
    });
  });

  readonly hasProgress = computed(
    () => this.progress.totalAttempts() > 0 || this.progress.xp() > 0 || this.completed() > 0,
  );

  resetProgress(): void {
    if (window.confirm(this.t('grammar.course.resetConfirm'))) {
      this.progress.resetAll();
    }
  }
}
