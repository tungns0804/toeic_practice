/**
 * Chấm câu trả lời gõ tay.
 *
 * Khó nhất ở đây là VIẾT TẮT của tiếng Anh: "she's worked" và "she has worked" là
 * cùng một câu, nhưng "she is worked" thì lại là một câu SAI (nhầm hoàn thành với
 * bị động) — mà cả ba đều đi qua cùng một dấu nháy. Xem `expandVariants` bên dưới
 * để biết cách phân biệt.
 */

/** Ngăn cách các cách trả lời tương đương trong một ô đáp án: "hoãn/ trì hoãn". */
export const ALTERNATIVE_SEPARATOR = /[/;]/;

/**
 * Dấu câu được bỏ qua khi chấm câu dài.
 *
 * KHÔNG có dấu nháy đơn: nó là một phần của viết tắt ("don't"), bỏ đi thì "don't"
 * thành "don t" và mọi phép so khớp viết tắt bên dưới hỏng hết.
 */
const PUNCTUATION = /[,.!?;:"“”«»()[\]{}…—–-]/g;

/** Mọi kiểu dấu nháy đơn quy về một: bàn phím thường cho ', Word cho ’. */
const APOSTROPHES = /[’‘`´]/g;

/** Viết tắt có dạng bất quy tắc, phải xử lý trước quy tắc chung `n't`. */
const IRREGULAR_CONTRACTIONS: readonly (readonly [RegExp, string])[] = [
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bcan't\b/g, 'can not'],
  [/\bcannot\b/g, 'can not'],
  [/\blet's\b/g, 'let us'],
  [/\bain't\b/g, 'am not'],
];

/** Viết tắt chỉ có MỘT cách hiểu — bung thẳng, không cần rẽ nhánh. */
const UNAMBIGUOUS_CONTRACTIONS: readonly (readonly [RegExp, string])[] = [
  [/n't\b/g, ' not'],
  [/'re\b/g, ' are'],
  [/'ve\b/g, ' have'],
  [/'ll\b/g, ' will'],
  [/'m\b/g, ' am'],
];

/**
 * Viết tắt có NHIỀU cách hiểu. Mỗi cách sinh ra một nhánh riêng thay vì chọn bừa
 * một nghĩa: chọn bừa thì "she's worked" (= has) sẽ bị bung thành "she is worked"
 * và không khớp với đáp án "she has worked" — chấm sai một câu đúng.
 *
 * Nhánh "s" của `'s` là dấu SỞ HỮU: nó bỏ đúng dấu nháy và giữ lại chữ s, biến
 * "last year's accounts" thành "last years accounts" — nhờ đó người gõ thiếu dấu
 * nháy sở hữu vẫn được tính đúng. Nhánh này KHÔNG làm lẫn "is" với "has": hai chữ
 * đó viết đầy đủ thì không có dấu nháy nào để bung, nên "she is worked" vẫn bị
 * chấm sai khi đáp án là "she has worked".
 *
 * `'d` không có nhánh tương ứng vì tiếng Anh không có dạng sở hữu nào viết như thế.
 */
const AMBIGUOUS_CONTRACTIONS: readonly (readonly [RegExp, readonly string[]])[] = [
  [/'s\b/g, [' is', ' has', 's']],
  [/'d\b/g, [' would', ' had']],
];

/** Trần số nhánh, phòng câu có quá nhiều dấu nháy làm số tổ hợp nổ theo cấp số nhân. */
const MAX_VARIANTS = 16;

export interface CompareOptions {
  /** Bỏ qua dấu thanh tiếng Việt khi so khớp. */
  ignoreDiacritics: boolean;
  /**
   * Bỏ qua dấu câu. Bật cho câu dài — sai chỉ vì thiếu một dấu phẩy thì không
   * phản ánh việc dịch đúng hay sai.
   */
  ignorePunctuation: boolean;
}

/** Bỏ dấu thanh tiếng Việt: "trì hoãn" -> "tri hoan". Chữ đ/Đ xử lý riêng vì NFD không tách nó. */
export function stripDiacritics(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/**
 * Tách một ô đáp án thành các cách trả lời được chấp nhận.
 * "hoãn/ trì hoãn" -> ["hoãn/ trì hoãn", "hoãn", "trì hoãn"]
 *
 * Bản thân chuỗi gốc luôn nằm đầu danh sách để người gõ đầy đủ vẫn được tính đúng.
 */
export function acceptedAnswersOf(answer: string): string[] {
  const full = answer.trim();
  const parts = full
    .split(ALTERNATIVE_SEPARATOR)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  return [...new Set([full, ...parts])].filter((item) => item.length > 0);
}

/**
 * Đưa chuỗi về các dạng chuẩn để so sánh.
 *
 * Trả về một MẢNG chứ không phải một chuỗi: một câu có viết tắt nhập nhằng
 * ("she's") tương ứng với nhiều câu đầy đủ khác nhau, và ta chưa biết người học
 * định nói cái nào. Phép so khớp ở `isAnswerCorrect` chỉ cần hai bên có chung một
 * dạng là đủ.
 */
export function normalizeVariants(value: string, options: CompareOptions): string[] {
  const base = String(value ?? '')
    .normalize('NFC')
    .replace(APOSTROPHES, "'")
    .toLowerCase();

  return expandVariants(base).map((variant) => finish(variant, options));
}

/** Bung viết tắt thành mọi cách hiểu có thể. */
function expandVariants(text: string): string[] {
  let single = text;
  for (const [pattern, replacement] of IRREGULAR_CONTRACTIONS) {
    single = single.replace(pattern, replacement);
  }
  for (const [pattern, replacement] of UNAMBIGUOUS_CONTRACTIONS) {
    single = single.replace(pattern, replacement);
  }

  let variants = [single];
  for (const [pattern, replacements] of AMBIGUOUS_CONTRACTIONS) {
    // Không có dấu nháy loại này thì khỏi nhân đôi số nhánh.
    if (!pattern.test(single)) {
      pattern.lastIndex = 0;
      continue;
    }
    pattern.lastIndex = 0;

    const next: string[] = [];
    for (const variant of variants) {
      for (const replacement of replacements) {
        if (next.length >= MAX_VARIANTS) break;
        next.push(variant.replace(pattern, replacement));
      }
    }
    variants = next;
  }

  return [...new Set(variants)];
}

/** Bước cuối: bỏ dấu câu, gom khoảng trắng, bỏ dấu tiếng Việt nếu được yêu cầu. */
function finish(text: string, options: CompareOptions): string {
  let out = text;
  if (options.ignorePunctuation) out = out.replace(PUNCTUATION, ' ');
  // Dấu nháy còn sót lại là dấu sở hữu đứng cuối từ ("the managers' room") — bỏ đi
  // để người gõ thiếu nó vẫn được tính đúng.
  out = out.replace(/'/g, '');
  out = out.replace(/\s+/g, ' ').trim();
  if (options.ignoreDiacritics) out = stripDiacritics(out);
  return out;
}

/** Câu trả lời gõ tay có khớp một trong các đáp án được chấp nhận không. */
export function isAnswerCorrect(
  input: string,
  acceptedAnswers: readonly string[],
  options: CompareOptions,
): boolean {
  const inputVariants = new Set(normalizeVariants(input, options).filter((item) => item.length > 0));
  if (inputVariants.size === 0) return false;

  return acceptedAnswers.some((answer) =>
    normalizeVariants(answer, options).some((variant) => inputVariants.has(variant)),
  );
}
