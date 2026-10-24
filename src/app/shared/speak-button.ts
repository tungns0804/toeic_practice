import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

import { LanguageStore } from '../core/i18n/language-store';
import { Icon } from './icon';

const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

/**
 * Nút 🔊 đọc to một từ / cụm tiếng Anh bằng giọng đọc có sẵn của trình duyệt
 * (Web Speech API), để người học nghe đúng cách phát âm bên cạnh phiên âm IPA.
 *
 * Không có tệp âm thanh nào đi kèm: giọng đọc lấy từ hệ điều hành, nên chất
 * lượng tuỳ máy. Trình duyệt không hỗ trợ thì nút không hiện.
 */
@Component({
  selector: 'app-speak',
  imports: [Icon],
  template: `
    @if (supported) {
      <button
        type="button"
        class="speak-btn"
        [class.is-speaking]="speaking()"
        (click)="speak($event)"
        [title]="label()"
        [attr.aria-label]="label()"
      >
        <app-icon name="volume" />
      </button>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .speak-btn {
      display: inline-grid;
      place-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid var(--border);
      border-radius: 50%;
      background: var(--bg-subtle);
      color: var(--accent);
      font-size: 0.85rem;
      transition: background-color var(--dur) var(--ease), border-color var(--dur) var(--ease);
    }

    .speak-btn:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
    }

    .speak-btn.is-speaking {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakButton {
  private readonly lang = inject(LanguageStore);

  readonly text = input.required<string>();

  protected readonly supported = supported;
  protected readonly speaking = signal(false);

  protected label(): string {
    return this.lang.t('speaking.listen', { text: this.text() });
  }

  protected speak(event: Event): void {
    // Nút có thể nằm trong thẻ bấm được hoặc <summary>: không để cú bấm lan ra ngoài.
    event.stopPropagation();
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(this.text());
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    const voice = synth.getVoices().find((v) => v.lang === 'en-US') ?? synth.getVoices().find((v) => v.lang.startsWith('en'));
    if (voice) utterance.voice = voice;
    utterance.onend = utterance.onerror = () => this.speaking.set(false);
    this.speaking.set(true);
    synth.speak(utterance);
  }
}
