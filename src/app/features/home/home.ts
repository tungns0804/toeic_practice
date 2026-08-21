import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXERCISES } from '../../core/exercises/exercise.model';
import { PASSIVE_SENTENCES } from '../../core/exercises/passive-sentences';
import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { LESSON_KIND_ROUTE } from '../../core/models/lesson.model';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';

/** Một phần có mục ★, hiện ở khối tóm tắt cuối trang chủ. */
interface FavoriteSection {
  id: string;
  name: string;
  /** Đường dẫn tới màn hình chi tiết của phần đó. */
  link: string[];
  count: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, T],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly store = inject(LessonStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly status = this.store.status;
  readonly errorKey = this.store.errorKey;

  /** Tổng số thì trong cả ba nhóm — con số trên thẻ "Các thì". */
  readonly tenseCount = computed(() =>
    this.store.summariesOfKind('tense').reduce((sum, item) => sum + item.itemCount, 0),
  );

  readonly wordCount = computed(() =>
    this.store.summariesOfKind('vocabulary').reduce((sum, item) => sum + item.itemCount, 0),
  );

  readonly sentenceCount = PASSIVE_SENTENCES.length;

  /**
   * Các phần đang có mục ★, để quay lại đúng chỗ còn nợ mà không phải đi dò từng khu.
   *
   * Gộp cả nội dung tải từ file (band từ vựng, nhóm thì) lẫn bài tập cài trong mã
   * nguồn: `FavoriteStore` chỉ biết id chứ không biết id đó thuộc khu nào, nên tên
   * và đường dẫn phải tra ngược lại từ hai nguồn đó.
   */
  readonly favoriteSections = computed<FavoriteSection[]>(() => {
    const counts = this.favoriteStore.counts();

    const fromLessons = this.store.summaries().flatMap((summary): FavoriteSection[] => {
      const count = counts[summary.id] ?? 0;
      return count > 0
        ? [
            {
              id: summary.id,
              name: summary.name,
              link: [LESSON_KIND_ROUTE[summary.kind], summary.id],
              count,
            },
          ]
        : [];
    });

    const fromExercises = EXERCISES.flatMap((exercise): FavoriteSection[] => {
      const count = counts[exercise.id] ?? 0;
      return count > 0
        ? [
            {
              id: exercise.id,
              // Đọc qua `lang.t` nên khối này tự dịch lại khi đổi ngôn ngữ.
              name: this.lang.t(exercise.nameKey),
              link: ['/exercise', exercise.id],
              count,
            },
          ]
        : [];
    });

    return [...fromLessons, ...fromExercises];
  });

  readonly totalFavorites = this.favoriteStore.totalCount;

  constructor() {
    void this.store.loadIndex();
  }

  retry(): void {
    void this.store.loadIndex(true);
  }
}
