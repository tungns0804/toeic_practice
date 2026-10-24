import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface RichSegment {
  kind: 'text' | 'strong' | 'mark';
  text: string;
}

/**
 * Tách chuỗi nội dung thành các đoạn trơn / `**đậm**` / `[[đánh dấu]]`.
 *
 * Tự tách rồi vẽ bằng phần tử Angular chứ không đổi sang HTML rồi gán innerHTML:
 * nội dung bài học không bao giờ được hiểu như mã HTML, kể cả khi ai đó lỡ gõ dấu
 * `<` vào câu ví dụ.
 */
export function parseRichText(source: string): RichSegment[] {
  const segments: RichSegment[] = [];
  let last = 0;
  for (const match of source.matchAll(/\*\*(.+?)\*\*|\[\[(.+?)\]\]/g)) {
    const start = match.index ?? 0;
    if (start > last) segments.push({ kind: 'text', text: source.slice(last, start) });
    segments.push(
      match[1] !== undefined ? { kind: 'strong', text: match[1] } : { kind: 'mark', text: match[2] },
    );
    last = start + match[0].length;
  }
  if (last < source.length) segments.push({ kind: 'text', text: source.slice(last) });
  return segments;
}

/**
 * Vẽ một đoạn chữ nội dung có đánh dấu.
 *
 * `tone` chỉ có nghĩa với `[[…]]` trong ví dụ lỗi sai: đỏ gạch ngang ở câu sai,
 * xanh ở câu đã sửa.
 */
@Component({
  selector: 'app-rich-text',
  // Viết liền một dòng cho từng nhánh: xuống dòng giữa các thẻ sẽ chèn thêm dấu
  // cách vào giữa chữ đậm và dấu câu đứng ngay sau nó.
  template: `@for (segment of segments(); track $index) {@switch (segment.kind) {@case ('strong') {<strong>{{ segment.text }}</strong>}@case ('mark') {<mark class="gc-mark" [class.is-wrong]="tone() === 'wrong'" [class.is-right]="tone() === 'right'">{{ segment.text }}</mark>}@default {<ng-container>{{ segment.text }}</ng-container>}}}`,
  host: { class: 'gc-rich' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichText {
  readonly text = input.required<string>();
  readonly tone = input<'wrong' | 'right' | null>(null);

  readonly segments = computed(() => parseRichText(this.text()));
}
