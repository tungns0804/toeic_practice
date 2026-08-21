/**
 * Tìm chỗ để khoét trong câu ví dụ cho dạng "điền từ".
 *
 * Vấn đề: từ vựng lưu ở dạng nguyên thể ("negotiate") nhưng câu ví dụ dùng dạng đã
 * chia ("negotiated", "negotiating"). So khớp nguyên văn thì gần như câu nào cũng
 * trượt, mà khoét sai chỗ thì câu hỏi trở nên vô nghĩa.
 *
 * Cách làm: sinh ra các dạng biến đổi THƯỜNG GẶP của từ rồi tìm dạng nào có mặt
 * trong câu. Không có dạng nào khớp thì trả về null — từ đó bị loại khỏi phiên
 * "điền từ" thay vì tạo ra một câu hỏi hỏng. Động từ bất quy tắc (buy → bought)
 * rơi vào nhánh này, và đó là đánh đổi có ý thức: thà thiếu vài câu còn hơn khoét
 * nhầm một chỗ nào đó trong câu.
 */

export interface ClozeSpan {
  /** Vị trí bắt đầu trong câu gốc. */
  start: number;
  /** Vị trí ngay sau ký tự cuối. */
  end: number;
  /** Đúng đoạn chữ bị khoét, giữ nguyên hoa thường như trong câu. */
  text: string;
}

/** Ký tự đứng thay chỗ bị khoét. */
export const CLOZE_BLANK = '______';

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/** Các dạng biến đổi thường gặp của một từ đơn. */
function inflectionsOf(word: string): string[] {
  const base = word.toLowerCase();
  const forms = new Set<string>([base]);

  if (base.length < 2) return [...forms];

  const last = base[base.length - 1];
  const beforeLast = base[base.length - 2];
  const stem = base.slice(0, -1);

  forms.add(`${base}s`);
  forms.add(`${base}es`);
  forms.add(`${base}ed`);
  forms.add(`${base}ing`);
  forms.add(`${base}d`);
  // Tính từ so sánh cũng hay xuất hiện trong câu ví dụ: quick → quicker/quickest.
  forms.add(`${base}er`);
  forms.add(`${base}est`);
  // Danh từ ghép sang tính từ / trạng từ: quick → quickly, care → careful.
  forms.add(`${base}ly`);

  if (last === 'e') {
    // negotiate → negotiating / negotiated / negotiator
    forms.add(`${stem}ing`);
    forms.add(`${stem}ed`);
    forms.add(`${stem}or`);
    forms.add(`${stem}ion`);
  }

  if (last === 'y' && !VOWELS.has(beforeLast)) {
    // apply → applies / applied / applying
    forms.add(`${stem}ies`);
    forms.add(`${stem}ied`);
    forms.add(`${stem}ier`);
    forms.add(`${stem}iest`);
    forms.add(`${stem}ily`);
  }

  // plan → planned / planning: phụ âm cuối được gấp đôi khi trước nó là một
  // nguyên âm đơn. Điều kiện này bỏ sót vài trường hợp (visit → visited, không
  // gấp đôi) nhưng thừa còn hơn thiếu: cả hai dạng đều nằm trong danh sách tìm.
  if (!VOWELS.has(last) && VOWELS.has(beforeLast) && !VOWELS.has(base[base.length - 3] ?? 'a')) {
    forms.add(`${base}${last}ed`);
    forms.add(`${base}${last}ing`);
  }

  return [...forms];
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Tìm trong `sentence` đoạn ứng với `word`.
 *
 * Với cụm từ nhiều tiếng ("take over"), thử cả cụm nguyên văn trước, rồi mới thử
 * biến đổi riêng tiếng ĐẦU của cụm ("took over", "taking over") — phần đuôi của
 * cụm không đổi nên giữ nguyên.
 */
export function findClozeSpan(sentence: string, word: string): ClozeSpan | null {
  const trimmed = word.trim();
  if (!trimmed || !sentence) return null;

  const pieces = trimmed.split(/\s+/);
  const candidates = new Set<string>();

  if (pieces.length === 1) {
    for (const form of inflectionsOf(trimmed)) candidates.add(form);
  } else {
    candidates.add(trimmed.toLowerCase());
    const [head, ...rest] = pieces;
    const tail = rest.join(' ').toLowerCase();
    for (const form of inflectionsOf(head)) candidates.add(`${form} ${tail}`);
  }

  // Dạng dài trước: "negotiating" phải được thử trước "negotiate", nếu không
  // "\bnegotiate\b" sẽ không khớp mà lại chặn mất dạng dài đứng sau nó.
  const ordered = [...candidates].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${ordered.map(escapeRegExp).join('|')})\\b`, 'i');
  const match = pattern.exec(sentence);
  if (!match || match.index < 0) return null;

  return { start: match.index, end: match.index + match[0].length, text: match[0] };
}

/** Thay đoạn tìm được bằng chỗ trống. */
export function blankOut(sentence: string, span: ClozeSpan): string {
  return `${sentence.slice(0, span.start)}${CLOZE_BLANK}${sentence.slice(span.end)}`;
}
