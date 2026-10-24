import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { ActivityStore } from './core/activity/activity-store';
import { LanguageStore } from './core/i18n/language-store';
import type { MessageKey } from './core/i18n/messages';
import { T } from './core/i18n/t';
import { NAV_GROUPS, groupOf, pathOf } from './core/navigation';
import { NavigationProgress } from './core/services/navigation-progress';
import { ThemeStore } from './core/services/theme-store';
import { Icon } from './shared/icon';

/** Cuộn quá ngưỡng này thì nút "lên đầu trang" hiện ra (đơn vị: px). */
const BACK_TO_TOP_AT = 700;

/** Trang không thuộc nhóm menu nào vẫn cần một tên trên breadcrumb. */
const CRUMB_OUTSIDE_NAV: Partial<Record<string, MessageKey>> = {
  practice: 'route.practice',
  result: 'route.result',
};

/**
 * Khung ứng dụng, dựng theo bố cục của ByeTOEIC và dự án minano_nihongo: thanh bên
 * giữ menu, cột phải là thanh trên cùng (breadcrumb, chip chuỗi ngày, ngôn ngữ, tông
 * màu) và nội dung. Điện thoại thay thanh bên bằng thanh menu đáy.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgTemplateOutlet, T, Icon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly theme = inject(ThemeStore);
  protected readonly lang = inject(LanguageStore);
  private readonly router = inject(Router);

  /**
   * Đang chuyển trang hay không. Mọi màn hình đều nạp động, nên bấm menu là phải
   * chờ tải tệp — không báo gì thì người dùng tưởng cú bấm bị trượt.
   */
  protected readonly navigating = inject(NavigationProgress).active;

  protected readonly t = this.lang.t.bind(this.lang);

  protected readonly navGroups = NAV_GROUPS;
  protected readonly activity = inject(ActivityStore);

  /** Chú thích của chip 🔥: chuỗi mấy ngày, hôm nay đã làm bao nhiêu câu. */
  protected readonly streakChipLabel = computed(() =>
    this.t('streak.chip', {
      count: this.activity.streak().current,
      answered: this.activity.today().answered,
      goal: this.activity.goal(),
    }),
  );

  /** URL hiện tại, cập nhật sau mỗi lần chuyển trang xong. */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Nhóm menu đang mở; null ở màn hình luyện tập và kết quả. */
  protected readonly group = computed(() => groupOf(this.url()));

  /** Tên hiện sau "TOEIC 990 /" trên thanh trên cùng. */
  protected readonly crumbKey = computed<MessageKey | null>(() => {
    const group = this.group();
    if (group) return group.labelKey;
    const segment = pathOf(this.url()).split('/').find(Boolean) ?? '';
    return CRUMB_OUTSIDE_NAV[segment] ?? null;
  });

  /**
   * Đã cuộn đủ xa để cần nút quay lên đầu chưa. Trang lý thuyết một nhóm thì dài
   * hơn chục màn hình, và bảng 40 từ vựng cũng vậy.
   */
  protected readonly scrolledDown = signal(false);

  /** Chính thẻ <header>, để đo chiều cao thật của nó. Xem `trackHeaderHeight`. */
  private readonly headerRef = viewChild.required<ElementRef<HTMLElement>>('appHeader');

  constructor() {
    afterNextRender(() => this.trackHeaderHeight());

    if (typeof window === 'undefined') return;

    const update = () => this.scrolledDown.set(window.scrollY > BACK_TO_TOP_AT);
    update();
    // passive: trình duyệt khỏi phải chờ xem hàm này có gọi preventDefault không,
    // nên cuộn không bị khựng. Không cần gỡ bỏ: component gốc sống hết vòng đời trang.
    window.addEventListener('scroll', update, { passive: true });
  }

  /**
   * Đo chiều cao thật của header rồi ghi vào biến CSS `--header-h`, thay vì viết sẵn
   * một con số cho mỗi breakpoint: chiều cao đổi theo khổ màn hình, tai thỏ và độ
   * dài chữ của từng ngôn ngữ. Các chỗ dính (thanh bên khoá ngữ pháp, thanh tiến độ
   * lúc luyện tập, scroll-padding) đều đọc biến này.
   */
  private trackHeaderHeight(): void {
    const header = this.headerRef().nativeElement;
    const apply = () => {
      const height = Math.round(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-h', `${height}px`);
    };
    apply();
    new ResizeObserver(apply).observe(header);
  }

  /**
   * Không truyền `behavior: 'smooth'`: để mặc định thì trình duyệt dùng
   * `scroll-behavior` của base.css, mà chỗ đó đã bọc trong
   * `prefers-reduced-motion: no-preference`.
   */
  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  /** Đưa focus vào vùng nội dung chính (cần `tabindex="-1"` trên <main>). */
  protected focusMain(): void {
    document.getElementById('main-content')?.focus();
  }
}
