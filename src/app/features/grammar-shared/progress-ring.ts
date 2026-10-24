import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Bán kính vẽ trong hệ toạ độ 100×100 của SVG. */
const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Vòng tiến độ: vòng nền mờ + cung tô theo phần trăm, chữ ở giữa do nơi dùng
 * truyền vào bằng nội dung con.
 *
 * Màu và độ dày lấy từ biến CSS của phần tử cha (`--ring-track`, `--ring-fill`,
 * `--ring-width`) để cùng một component dùng được trên nền xanh của thẻ "Bài tiếp
 * theo" lẫn trên nền trắng của màn hình kết quả.
 */
@Component({
  selector: 'app-progress-ring',
  template: `
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle class="track" cx="50" cy="50" [attr.r]="radius" />
      <circle
        class="fill"
        cx="50"
        cy="50"
        [attr.r]="radius"
        [attr.stroke-dasharray]="circumference"
        [attr.stroke-dashoffset]="offset()"
      />
    </svg>
    <div class="label"><ng-content /></div>
  `,
  styles: `
    :host {
      position: relative;
      display: inline-grid;
      place-items: center;
      flex-shrink: 0;
      width: var(--ring-size, 88px);
      height: var(--ring-size, 88px);
    }

    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      /* Cung bắt đầu từ đỉnh vòng chứ không từ phía bên phải. */
      transform: rotate(-90deg);
    }

    circle {
      fill: none;
      stroke-width: var(--ring-width, 8);
    }

    .track {
      stroke: var(--ring-track, rgb(255 255 255 / 25%));
    }

    .fill {
      stroke: var(--ring-fill, #fff);
      stroke-linecap: round;
      transition: stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .label {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.1;
      text-align: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressRing {
  /** 0–100. */
  readonly percent = input(0);

  protected readonly radius = RADIUS;
  protected readonly circumference = CIRCUMFERENCE;

  /**
   * 0% vẫn để lộ một chấm nhỏ thay vì trống trơn: vòng rỗng hoàn toàn trông như
   * component chưa vẽ xong, còn một chấm ở đỉnh cho biết "đây là vạch xuất phát".
   */
  protected readonly offset = computed(() => {
    const clamped = Math.max(0, Math.min(100, this.percent()));
    const visible = clamped === 0 ? 0.5 : clamped;
    return CIRCUMFERENCE * (1 - visible / 100);
  });
}
