import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';

@Component({
  selector: 'app-tense-list',
  imports: [RouterLink, T],
  templateUrl: './tense-list.html',
  styleUrl: './tense-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenseList {
  private readonly store = inject(LessonStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly status = this.store.status;
  readonly errorKey = this.store.errorKey;

  readonly groups = computed(() => this.store.summariesOfKind('tense'));

  /** Số mục ★ của một nhóm, hiện trên thẻ để biết chỗ nào còn nợ. */
  favoriteCount(id: string): number {
    // Đọc signal counts để computed của template chạy lại khi ★ đổi.
    return this.favoriteStore.counts()[id] ?? 0;
  }

  constructor() {
    void this.store.loadIndex();
  }

  retry(): void {
    void this.store.loadIndex(true);
  }
}
