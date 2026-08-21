import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';

@Component({
  selector: 'app-vocabulary-list',
  imports: [RouterLink, T],
  templateUrl: './vocabulary-list.html',
  styleUrl: './vocabulary-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyList {
  private readonly store = inject(LessonStore);
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly status = this.store.status;
  readonly errorKey = this.store.errorKey;

  readonly bands = computed(() => this.store.summariesOfKind('vocabulary'));

  favoriteCount(id: string): number {
    return this.favoriteStore.counts()[id] ?? 0;
  }

  constructor() {
    void this.store.loadIndex();
  }

  retry(): void {
    void this.store.loadIndex(true);
  }
}
