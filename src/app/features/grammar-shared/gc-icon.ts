import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type GcIconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'book-open'
  | 'check'
  | 'check-circle'
  | 'chevron-down'
  | 'circle'
  | 'clock'
  | 'flame'
  | 'info'
  | 'lightbulb'
  | 'lock'
  | 'pen'
  | 'rotate'
  | 'trophy'
  | 'triangle-alert'
  | 'x'
  | 'x-circle'
  | 'zap';

/**
 * Bộ biểu tượng nét mảnh của khoá ngữ pháp (vẽ theo phong cách Lucide, như bản gốc).
 *
 * SVG nội tuyến chứ không dùng font biểu tượng hay emoji: emoji mỗi hệ điều hành
 * vẽ một kiểu, còn nét SVG ăn theo `currentColor` nên tự đổi màu theo chữ quanh nó
 * và theo tông sáng/tối. Kích thước do CSS quyết định (mặc định 1em, lớp `.gc-icon`).
 *
 * Luôn `aria-hidden`: biểu tượng ở đây chỉ đi kèm chữ, không bao giờ đứng một mình
 * mang nghĩa — chỗ nào chỉ có biểu tượng thì phần tử cha phải tự có nhãn.
 */
@Component({
  selector: 'app-gc-icon',
  template: `
    <svg
      class="gc-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-left') {
          <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        }
        @case ('book-open') {
          <path d="M12 7v14" />
          <path
            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
          />
        }
        @case ('check') {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ('check-circle') {
          <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('circle') {
          <circle cx="12" cy="12" r="9" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        }
        @case ('flame') {
          <path
            d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"
          />
        }
        @case ('info') {
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        }
        @case ('lightbulb') {
          <path
            d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
          />
          <path d="M9 18h6" /><path d="M10 22h4" />
        }
        @case ('lock') {
          <rect width="16" height="11" x="4" y="11" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
        }
        @case ('pen') {
          <path d="M12 20h9" />
          <path
            d="M16.38 3.62a1 1 0 0 1 3 3L7.37 18.64a2 2 0 0 1-.86.5l-2.87.84a.5.5 0 0 1-.62-.62l.84-2.87a2 2 0 0 1 .5-.86z"
          />
        }
        @case ('rotate') {
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
        }
        @case ('trophy') {
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        }
        @case ('triangle-alert') {
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" /><path d="M12 17h.01" />
        }
        @case ('x') {
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        }
        @case ('x-circle') {
          <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />
        }
        @case ('zap') {
          <path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
          />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      line-height: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GcIcon {
  readonly name = input.required<GcIconName>();
}
