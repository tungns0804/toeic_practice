import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GRAMMAR_CHAPTERS, GRAMMAR_LESSONS, findGrammarLesson } from '../../core/grammar/grammar-catalog';
import { GrammarProgressStore } from '../../core/grammar/grammar-progress-store';
import { LanguageStore } from '../../core/i18n/language-store';
import { localized } from '../../core/models/lesson.model';
import { GcIcon } from './gc-icon';

type LessonState = 'passed' | 'open' | 'locked';

/**
 * Thanh "Nội dung khóa học": tiến độ cả khoá và danh sách 18 chương xổ ra được.
 *
 * Dùng chung cho trang tổng quan lẫn trang bài học. Ở trang bài học, chương chứa
 * bài đang mở tự xổ ra và bài đó được tô nền, để người học luôn biết mình đang ở
 * đâu trong lộ trình 59 bài.
 *
 * Dưới 1024px nó thành một khối thu gọn nằm trên nội dung: mặc định ĐÓNG, vì trên
 * điện thoại một danh sách 59 dòng mở sẵn sẽ đẩy bài học xuống dưới cả chục màn hình.
 */
@Component({
  selector: 'app-grammar-sidebar',
  imports: [RouterLink, GcIcon],
  templateUrl: './grammar-sidebar.html',
  styleUrl: './grammar-sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrammarSidebar {
  private readonly progress = inject(GrammarProgressStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);

  /** Id bài đang mở; null ở trang tổng quan. */
  readonly currentId = input<string | null>(null);

  readonly completed = this.progress.completedCount;
  readonly total = this.progress.totalCount;
  readonly percent = this.progress.percent;

  /** Danh sách đang mở trên màn hình hẹp. Màn hình rộng thì luôn hiện, bỏ qua cờ này. */
  readonly mobileOpen = signal(false);

  /** Các chương đang xổ ra. */
  private readonly expanded = signal<ReadonlySet<string>>(new Set());

  readonly chapters = computed(() => {
    const language = this.lang.language();
    const current = this.currentId();
    const open = this.expanded();
    // Đọc tiến độ để danh sách tự vẽ lại khi vừa đạt một bài.
    this.progress.completedCount();

    return GRAMMAR_CHAPTERS.map((chapter, chapterIndex) => {
      const lessons = GRAMMAR_LESSONS.filter((entry) => entry.chapter.id === chapter.id).map(
        (entry) => {
          const state: LessonState = this.progress.isPassed(entry.id)
            ? 'passed'
            : this.progress.isUnlocked(entry)
              ? 'open'
              : 'locked';
          return {
            id: entry.id,
            code: entry.code,
            title: localized(entry.meta.title, language),
            state,
            current: entry.id === current,
          };
        },
      );
      return {
        id: chapter.id,
        number: chapterIndex + 1,
        title: chapter.title,
        passed: lessons.filter((lesson) => lesson.state === 'passed').length,
        lessons,
        open: open.has(chapter.id),
      };
    });
  });

  constructor() {
    // Xổ sẵn chương của bài đang mở; ở trang tổng quan thì xổ chương của bài nên
    // học tiếp. Chỉ THÊM vào tập đang mở chứ không thay cả tập, để chuyển bài
    // không làm đóng những chương người học vừa tự mở ra.
    effect(() => {
      const id = this.currentId() ?? this.progress.nextLesson()?.id ?? GRAMMAR_LESSONS[0].id;
      const chapterId = findGrammarLesson(id)?.chapter.id;
      if (!chapterId) return;
      this.expanded.update((current) =>
        current.has(chapterId) ? current : new Set([...current, chapterId]),
      );
    });
  }

  toggleChapter(id: string): void {
    this.expanded.update((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  /** Chọn một bài trên điện thoại thì thu danh sách lại để nhường chỗ cho bài học. */
  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
