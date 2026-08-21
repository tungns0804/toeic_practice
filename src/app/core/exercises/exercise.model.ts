/**
 * Khu "Bài tập chuyên đề" — mỗi bài nhắm đúng một điểm ngữ pháp.
 *
 * Vì sao tách khỏi hai khu kia: khu Các thì đi theo trục thời gian, khu Từ vựng đi
 * theo band điểm; còn bài tập ở đây cắt NGANG cả hai — một bài thể bị động gom câu
 * của đủ mười mấy thì lại. Nhét nó vào một trong hai khu kia thì nó không thuộc về
 * mục nào cả.
 *
 * Dữ liệu nằm thẳng trong mã nguồn (`passive-sentences.ts`) chứ không đi qua
 * `data-source/` + `npm run generate`: đây là chức năng cố định của ứng dụng, và
 * mỗi câu cần cả bốn trường (chủ động, bị động, nghĩa, nhóm công thức) khớp nhau —
 * thứ mà một file .txt phẳng không kiểm tra nổi còn TypeScript thì có.
 */

import type { MessageKey } from '../i18n/messages';
import type { LocalizedText } from '../models/lesson.model';

/**
 * Id của bài tập. Dùng làm luôn:
 *  - đoạn cuối đường dẫn `/exercise/<id>`
 *  - khoá lưu danh sách ★
 * nên KHÔNG đổi tuỳ tiện: đổi là mất hết ★ của bài tập đó.
 */
export type ExerciseId = 'the-bi-dong';

/** Các chiều hỏi của bài thể bị động. */
export type PassiveMode = 'to-passive' | 'to-active' | 'vi-passive' | 'mixed';

export interface PassiveModeInfo {
  id: PassiveMode;
  labelKey: MessageKey;
  shortKey: MessageKey;
  exampleKey: MessageKey;
}

export const PASSIVE_MODES: readonly PassiveModeInfo[] = [
  {
    id: 'to-passive',
    labelKey: 'passiveMode.to-passive',
    shortKey: 'passiveMode.to-passive.short',
    exampleKey: 'passiveMode.to-passive.example',
  },
  {
    id: 'to-active',
    labelKey: 'passiveMode.to-active',
    shortKey: 'passiveMode.to-active.short',
    exampleKey: 'passiveMode.to-active.example',
  },
  {
    id: 'vi-passive',
    labelKey: 'passiveMode.vi-passive',
    shortKey: 'passiveMode.vi-passive.short',
    exampleKey: 'passiveMode.vi-passive.example',
  },
  {
    id: 'mixed',
    labelKey: 'passiveMode.mixed',
    shortKey: 'passiveMode.mixed.short',
    exampleKey: 'passiveMode.mixed.example',
  },
];

export function exerciseModeInfo(id: PassiveMode): PassiveModeInfo {
  return PASSIVE_MODES.find((mode) => mode.id === id) ?? PASSIVE_MODES[0];
}

/**
 * Dạng đặc biệt của câu bị động. Dùng để lọc khi luyện và để gắn nhãn trong bảng
 * tra cứu — người học thường chỉ vướng ở đúng một dạng (hay nhất là "hai tân ngữ").
 */
export type PassiveKind = 'standard' | 'modal' | 'twoObjects' | 'phrasal' | 'byOmitted';

export const PASSIVE_KINDS: readonly PassiveKind[] = [
  'standard',
  'modal',
  'twoObjects',
  'phrasal',
  'byOmitted',
];

export const PASSIVE_KIND_LABEL_KEY: Record<PassiveKind, MessageKey> = {
  standard: 'passive.kind.standard',
  modal: 'passive.kind.modal',
  twoObjects: 'passive.kind.twoObjects',
  phrasal: 'passive.kind.phrasal',
  byOmitted: 'passive.kind.byOmitted',
};

/** Một dòng của bảng công thức bị động theo thì. */
export interface PassiveFormula {
  id: string;
  name: LocalizedText;
  /** Công thức câu chủ động, ví dụ "S + V(s/es) + O". */
  active: string;
  /** Công thức câu bị động, ví dụ "S + am/is/are + V3 (+ by O)". */
  passive: string;
  /** Ví dụ minh hoạ ngắn cho đúng công thức này. */
  example: string;
}

/**
 * Một câu của bài tập.
 *
 * `id` băm từ chính câu CHỦ ĐỘNG (xem `passive-sentences.ts`): ổn định, đọc được
 * khi soi localStorage, và không câu nào trùng câu nào.
 */
export interface PassiveSentence {
  id: string;
  /** Trỏ tới một dòng trong `PASSIVE_FORMULAS`. */
  formulaId: string;
  kind: PassiveKind;
  active: string;
  passive: string;
  /** Nghĩa tiếng Việt (dịch theo câu bị động). */
  vietnamese: string;
  /**
   * Câu này có chuyển ngược từ bị động về chủ động được không.
   *
   * Câu lược bỏ "by ..." thì KHÔNG: "The meeting was cancelled." không cho biết ai
   * huỷ, nên mọi câu chủ động dựng lại đều là đoán mò. Đưa nó vào chiều "Bị → Chủ"
   * là bắt người học đoán đúng cái từ mà đề bài đã cố tình bỏ đi.
   */
  reversible: boolean;
  /** Ghi chú ngắn cho riêng câu này. Rỗng nếu không có. */
  note: LocalizedText | null;
}

/** Mô tả một bài tập, dùng để dựng thẻ ở trang danh sách. */
export interface ExerciseInfo {
  id: ExerciseId;
  nameKey: MessageKey;
  descKey: MessageKey;
  /** Khoá đếm số mục ("{count} câu"). */
  unitKey: MessageKey;
}

export const EXERCISES: readonly ExerciseInfo[] = [
  {
    id: 'the-bi-dong',
    nameKey: 'exercise.passive.name',
    descKey: 'exercise.passive.desc',
    unitKey: 'exercise.sentenceCount',
  },
];

export function exerciseInfo(id: string): ExerciseInfo | null {
  return EXERCISES.find((item) => item.id === id) ?? null;
}
