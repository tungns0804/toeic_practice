import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXERCISES } from '../../core/exercises/exercise.model';
import { PASSIVE_SENTENCES } from '../../core/exercises/passive-sentences';
import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { FavoriteStore } from '../../core/services/favorite-store';

@Component({
  selector: 'app-exercise-list',
  imports: [RouterLink, T],
  templateUrl: './exercise-list.html',
  styleUrl: './exercise-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseList {
  private readonly favoriteStore = inject(FavoriteStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly exercises = EXERCISES;

  /**
   * Số mục của từng bài tập.
   *
   * Là một bảng tra theo id chứ không phải một con số: thêm bài tập thứ hai mà
   * quên khai ở đây thì thẻ của nó hiện "0 câu" — sai rõ ràng và sửa được ngay,
   * thay vì lặng lẽ hiện số câu của bài tập kia.
   */
  private readonly counts: Record<string, number> = {
    'the-bi-dong': PASSIVE_SENTENCES.length,
  };

  countOf(id: string): number {
    return this.counts[id] ?? 0;
  }

  favoriteCount(id: string): number {
    return this.favoriteStore.counts()[id] ?? 0;
  }
}
