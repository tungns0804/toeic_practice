import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'calendar'
  | 'clock'
  | 'chart'
  | 'star'
  | 'check'
  | 'flame'
  | 'book'
  | 'target'
  | 'cap'
  | 'clipboard'
  | 'globe'
  | 'contrast'
  | 'sun'
  | 'moon'
  | 'candle'
  | 'mic'
  | 'volume';

/**
 * Biểu tượng nét mảnh, vẽ bằng SVG nội tuyến.
 *
 * Vì sao không dùng ký tự (◐ ☀ 🕯) như trước: thanh bên thu gọn chỉ còn biểu
 * tượng, nên biểu tượng phải trông giống nhau trên mọi máy. Ký tự thì mỗi font vẽ
 * một kiểu — 🕯 là ô vuông rỗng trên nhiều máy Windows — và đổi `<html lang>` là
 * trình duyệt chọn font khác, nút nhảy kích thước.
 *
 * Màu lấy `currentColor`, cỡ lấy theo `font-size` của chỗ đặt (1.25em), nên nơi
 * gọi chỉnh bằng CSS như chỉnh chữ.
 */
@Component({
  selector: 'app-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('calendar') {
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 10h17" />
          <path d="M8 3v4M16 3v4" />
          <path d="m9 15 2 2 4-4" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        }
        @case ('chart') {
          <path d="M3.5 3.5v17h17" />
          <path d="M8 16v-4M12.5 16V8M17 16v-6" />
        }
        @case ('star') {
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z" />
        }
        @case ('check') {
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        }
        @case ('flame') {
          <path
            d="M12 21.5c-4 0-7-2.7-7-6.6 0-3.3 2.2-5.4 3.6-7.2.3 1.6 1 2.8 2.2 3.6-.2-3.4 1.2-6.5 3.9-8.8.2 3 1.6 4.8 3 6.6 1.3 1.6 2.3 3.3 2.3 5.6 0 4-3 6.8-8 6.8z"
          />
          <path d="M12 21.5c-1.9 0-3.3-1.3-3.3-3.1 0-1.7 1.3-2.8 2.3-4 .4 1 1 1.6 1.8 2 .2-1 .8-1.9 1.6-2.5.6 1.4 1 2.4 1 3.4 0 2.4-1.6 4.2-3.4 4.2z" />
        }
        @case ('book') {
          <path d="M2.5 5.5H9a3 3 0 0 1 3 3V20a2.5 2.5 0 0 0-2.5-2.5h-7z" />
          <path d="M21.5 5.5H15a3 3 0 0 0-3 3V20a2.5 2.5 0 0 1 2.5-2.5h7z" />
        }
        @case ('target') {
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        }
        @case ('cap') {
          <path d="M22 9 12 4 2 9l10 5z" />
          <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
          <path d="M22 9v6" />
        }
        @case ('clipboard') {
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
          <path d="m9 13 2 2 4-4" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
        }
        @case ('contrast') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
        }
        @case ('mic') {
          <rect x="9" y="2.5" width="6" height="12" rx="3" />
          <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
          <path d="M12 17.5v4" />
        }
        @case ('volume') {
          <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
          <path d="M15.5 9a4 4 0 0 1 0 6" />
          <path d="M18 6.5a7.5 7.5 0 0 1 0 11" />
        }
        @case ('candle') {
          <path d="M12 2.5c2 2.4 3 4.1 3 5.6a3 3 0 0 1-6 0c0-1.5 1-3.2 3-5.6z" />
          <rect x="8.5" y="13" width="7" height="8.5" rx="1" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-grid;
      place-items: center;
      width: 1.25em;
      height: 1.25em;
      flex-shrink: 0;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
}
