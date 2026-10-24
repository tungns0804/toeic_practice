import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageStore } from '../../core/i18n/language-store';
import { T } from '../../core/i18n/t';
import { SpeakingStore } from '../../core/speaking/speaking-store';
import { SPEAKING_TOPICS } from '../../core/speaking/speaking-topics';

@Component({
  selector: 'app-speaking-list',
  imports: [RouterLink, T],
  templateUrl: './speaking-list.html',
  styleUrl: './speaking-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakingList {
  private readonly lang = inject(LanguageStore);
  protected readonly store = inject(SpeakingStore);

  protected readonly t = this.lang.t.bind(this.lang);
  protected readonly language = this.lang.language;
  protected readonly topics = SPEAKING_TOPICS;
}
