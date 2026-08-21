import { stripDiacritics } from './answer-check';

/**
 * Chuẩn hoá từ khoá tìm kiếm: thường hoá, bỏ dấu tiếng Việt, gom khoảng trắng.
 *
 * Bỏ dấu là chủ ý: gõ "hop dong" phải tìm ra "hợp đồng". Người học đang tra cứu
 * nhanh giữa lúc luyện, không ai muốn phải bật bộ gõ tiếng Việt chỉ để lọc bảng.
 */
export function normalizeSearch(value: string): string {
  return stripDiacritics(String(value ?? '').normalize('NFC').toLowerCase())
    .replace(/\s+/g, ' ')
    .trim();
}

/** `haystack` có chứa từ khoá đã chuẩn hoá không. Từ khoá rỗng thì luôn đúng. */
export function matchesSearch(haystack: string, normalizedKeyword: string): boolean {
  if (!normalizedKeyword) return true;
  return normalizeSearch(haystack).includes(normalizedKeyword);
}
