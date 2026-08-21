import type { Language, MessageKey } from '../i18n/messages';

/**
 * Một chuỗi có sẵn cả hai ngôn ngữ, đến từ DỮ LIỆU chứ không phải bảng thông điệp.
 *
 * Tên các thì là ví dụ điển hình: "Present Perfect" / "Hiện tại hoàn thành" nằm
 * trong file bài học, nên không thể là `MessageKey`. Nhưng chúng vẫn phải đổi theo
 * ngôn ngữ giao diện, nên cũng không thể là một chuỗi trơn.
 */
export interface LocalizedText {
  vi: string;
  en: string;
}

export function localized(text: LocalizedText, language: Language): string {
  return text[language];
}

// ── Từ vựng ──────────────────────────────────────────────────────────────

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'phrase'
  | 'preposition'
  | 'conjunction';

export const PARTS_OF_SPEECH: readonly PartOfSpeech[] = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'phrase',
  'preposition',
  'conjunction',
];

export const POS_LABEL_KEY: Record<PartOfSpeech, MessageKey> = {
  noun: 'pos.noun',
  verb: 'pos.verb',
  adjective: 'pos.adjective',
  adverb: 'pos.adverb',
  phrase: 'pos.phrase',
  preposition: 'pos.preposition',
  conjunction: 'pos.conjunction',
};

export const POS_SHORT_KEY: Record<PartOfSpeech, MessageKey> = {
  noun: 'pos.noun.short',
  verb: 'pos.verb.short',
  adjective: 'pos.adjective.short',
  adverb: 'pos.adverb.short',
  phrase: 'pos.phrase.short',
  preposition: 'pos.preposition.short',
  conjunction: 'pos.conjunction.short',
};

/** Một từ vựng. Trùng cấu trúc với phần tử trong `public/lessons/<id>.json`. */
export interface VocabularyWord {
  /**
   * Id ổn định, sinh từ nội dung (xem `scripts/lesson-core.mjs`). Dùng làm khoá ★.
   *
   * Băm từ RIÊNG `word`, không gồm nghĩa: sửa lại nghĩa tiếng Việt cho sát hơn thì
   * id giữ nguyên, dấu ★ của từ đó không mất.
   */
  id: string;
  /** Từ tiếng Anh, ví dụ "negotiate". */
  word: string;
  /** Phiên âm IPA, ví dụ "/nɪˈɡoʊʃieɪt/". Chuỗi rỗng nghĩa là chưa có. */
  ipa: string;
  pos: PartOfSpeech;
  /** Nghĩa tiếng Việt. Nhiều nghĩa tương đương ngăn nhau bằng dấu / hoặc ; */
  meaning: string;
  /** Câu ví dụ tiếng Anh có dùng từ này. Chuỗi rỗng nghĩa là chưa có. */
  example: string;
  /** Nghĩa tiếng Việt của câu ví dụ. Chuỗi rỗng nghĩa là chưa có. */
  exampleVi: string;
}

// ── Các thì ──────────────────────────────────────────────────────────────

/** Một câu ví dụ của một thì — luôn có cặp Anh/Việt để dịch qua lại. */
export interface TenseExample {
  /** Băm từ RIÊNG câu tiếng Anh: sửa bản dịch không làm mất ★ của câu. */
  id: string;
  english: string;
  vietnamese: string;
  /**
   * Động từ chính ở dạng nguyên thể, ví dụ "work". Dùng cho dạng câu hỏi "chia
   * động từ": câu hỏi che đúng cụm động từ này đi và bắt người học điền lại.
   * Rỗng nghĩa là câu này không dùng được cho dạng đó.
   */
  verb: string;
  /**
   * Cụm động từ đã chia đúng như nó xuất hiện trong `english`, ví dụ "has worked".
   * Rỗng nghĩa là không dùng được cho dạng "chia động từ".
   */
  conjugated: string;
  /**
   * Ghi chú ngắn cho riêng câu này, null nếu không có.
   *
   * Là cặp hai ngôn ngữ vì đây là lời GIẢI THÍCH của ứng dụng ("chủ ngữ số ít nên
   * động từ thêm -s"), không phải ngữ liệu. Trường `vietnamese` ngay bên trên thì
   * ngược lại: nó chính là thứ người học đang tập dịch nên luôn là tiếng Việt.
   */
  note: LocalizedText | null;
}

/** Một thì: tên, công thức, cách dùng, dấu hiệu nhận biết và câu ví dụ. */
export interface TensePoint {
  /** Id ổn định trong phạm vi toàn ứng dụng, ví dụ "present-perfect". */
  id: string;
  /** Tên thì, hai ngôn ngữ. */
  name: LocalizedText;
  /** Một câu tóm tắt ý nghĩa (tiếng Việt và tiếng Anh). */
  summary: LocalizedText;
  /** Công thức khẳng định, ví dụ "S + have/has + V3". */
  affirmative: string;
  negative: string;
  question: string;
  /** Các cách dùng. */
  usages: LocalizedText[];
  /** Dấu hiệu nhận biết, ví dụ "since", "for", "already". Là tiếng Anh nên không dịch. */
  signals: string[];
  /** Lưu ý và lỗi hay gặp. */
  notes: LocalizedText[];
  examples: TenseExample[];
}

/**
 * Một câu ví dụ đã gắn kèm thì sinh ra nó.
 *
 * Câu ví dụ nằm lồng hai tầng (nhóm → thì → ví dụ), nhưng lúc luyện tập cần một
 * danh sách phẳng để trộn và cắt. Kiểu này giữ lại đường dẫn ngược lên để câu hỏi
 * vẫn hiện được tên thì và công thức làm gợi ý.
 */
export interface TenseExampleRef {
  example: TenseExample;
  point: TensePoint;
}

/** Trải phẳng toàn bộ câu ví dụ của một nhóm thì, giữ nguyên thứ tự trong bài. */
export function flattenTenseExamples(points: readonly TensePoint[]): TenseExampleRef[] {
  return points.flatMap((point) => point.examples.map((example) => ({ example, point })));
}

// ── Bài học ──────────────────────────────────────────────────────────────

/**
 * Loại nội dung. `exercise` KHÔNG bao giờ tới từ file bài học — đó là bài tập
 * chuyên đề cài sẵn trong mã nguồn (xem `core/exercises/`). Loại này có mặt ở đây
 * vì phiên luyện của nó đi qua đúng `PracticeConfig` và đúng màn hình luyện tập /
 * kết quả như hai loại kia.
 */
export type LessonKind = 'vocabulary' | 'tense' | 'exercise';

/** Đường dẫn màn hình danh sách của từng loại. */
export const LESSON_KIND_ROUTE: Record<LessonKind, string> = {
  vocabulary: '/vocabulary',
  tense: '/tenses',
  exercise: '/exercise',
};

/** Bài học đầy đủ. Tuỳ `kind` mà dùng `words` hay `tensePoints`. */
export interface Lesson {
  id: string;
  /** Tên hiển thị, hai ngôn ngữ (xem `LocalizedText`). */
  name: LocalizedText;
  description: LocalizedText;
  kind: LessonKind;
  /** Số mục trong bài: số từ vựng, hoặc số thì. */
  itemCount: number;
  /**
   * Khoảng điểm TOEIC của band từ vựng, ví dụ [450, 600]. Chỉ bài từ vựng mới có.
   * Dùng để hiện nhãn "Band 450–600" và để xếp thứ tự.
   */
  bandFrom?: number;
  bandTo?: number;
  words: VocabularyWord[];
  tensePoints: TensePoint[];
}

/** Thông tin tóm tắt để hiển thị ở màn hình danh sách (chưa cần tải nội dung). */
export interface LessonSummary {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  kind: LessonKind;
  itemCount: number;
  bandFrom?: number;
  bandTo?: number;
  /** Số câu ví dụ — chỉ nhóm thì mới có, dùng cho dòng đếm trên thẻ. */
  exampleCount?: number;
}

/**
 * Một dòng của file `public/lessons/index.json` do `npm run generate` sinh ra.
 * File đó là một object `{ generatedAt, lessons: LessonIndexEntry[] }`.
 */
export interface LessonIndexEntry {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  kind: LessonKind;
  itemCount: number;
  exampleCount?: number;
  bandFrom?: number;
  bandTo?: number;
  file: string;
}
