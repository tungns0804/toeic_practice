import type { LocalizedText } from '../models/lesson.model';

/**
 * Kiểu dữ liệu của KHOÁ NGỮ PHÁP: 18 chương, 59 bài học tuần tự.
 *
 * Tách làm hai tầng:
 *  - MỤC LỤC (`grammar-catalog.ts`): tên chương, tên bài, phạm vi từng bài. Nhỏ, nạp
 *    ngay cùng màn hình khoá học vì thanh bên và bản đồ chương cần đủ 59 tên bài.
 *  - NỘI DUNG (`lessons/<id>.ts`): ví dụ lỗi sai, lý thuyết, 10 câu luyện tập. Mỗi
 *    bài là một chunk riêng, chỉ tải khi người học mở đúng bài đó.
 *
 * Nội dung nằm trong TypeScript chứ không trong `data-source/`: một bài có ba khối
 * cấu trúc lồng nhau (bảng, ví dụ, câu hỏi bốn lựa chọn), thứ mà trình biên dịch
 * kiểm tra hộ được còn file văn bản phẳng thì không. Phần TypeScript không diễn
 * đạt được (đúng 10 câu, đáp án nằm trong khoảng, chỗ trống xuất hiện đúng một lần…)
 * do `scripts/verify-grammar.mjs` lo.
 *
 * Chữ trong nội dung hỗ trợ hai dấu đánh dấu, đều vẽ bằng `<app-rich-text>` chứ
 * không qua innerHTML:
 *  - `**chữ đậm**`  nhấn mạnh trong lý thuyết, giải thích và câu ví dụ.
 *  - `[[chỗ sai]]`  chỉ dùng trong `GrammarMistake.wrong` / `.right`: tô đỏ chỗ sai ở
 *                   câu sai và tô xanh chỗ đã sửa ở câu đúng.
 */

/** Chương: tên là thuật ngữ tiếng Anh, giữ nguyên ở cả hai ngôn ngữ (như sách TOEIC). */
export interface GrammarChapter {
  /** Slug ổn định, ví dụ `word-forms`. */
  id: string;
  title: string;
  lessons: readonly GrammarLessonMeta[];
}

export interface GrammarLessonMeta {
  /** Slug ổn định, đồng thời là tên file trong `lessons/`. Đổi id là mất tiến độ đã lưu. */
  id: string;
  title: LocalizedText;
  /**
   * Phạm vi của bài, viết cho NGƯỜI SOẠN nội dung chứ không hiện ra giao diện: các
   * bài cùng chương phải chia nhau kiến thức, không bài nào nói lại bài khác.
   */
  scope: string;
}

/** Một lỗi sai điển hình, hiện ở bước đầu tiên của bài học. */
export interface GrammarMistake {
  /** Câu sai, chỗ sai bọc trong `[[…]]`. */
  wrong: string;
  /** Câu đã sửa, chỗ đã sửa bọc trong `[[…]]`. */
  right: string;
  explanation: LocalizedText;
}

/** Một ô bảng: chữ tiếng Anh (công thức, ví dụ) viết thẳng, chữ giải thích viết hai ngôn ngữ. */
export type GrammarCell = string | LocalizedText;

export interface GrammarTable {
  head: readonly LocalizedText[];
  rows: readonly (readonly GrammarCell[])[];
}

export interface GrammarExample {
  /** Câu tiếng Anh, phần đang minh hoạ bọc trong `**…**`. */
  en: string;
  /** Nghĩa tiếng Việt — là NGỮ LIỆU nên không dịch sang tiếng Anh. */
  vi: string;
}

export type GrammarCalloutKind = 'tip' | 'warning' | 'info';

export interface GrammarCallout {
  kind: GrammarCalloutKind;
  text: LocalizedText;
}

/**
 * Một mục lý thuyết. Mọi khối đều tuỳ chọn, nhưng phải có ít nhất một khối ngoài
 * tiêu đề; thứ tự hiển thị cố định: đoạn văn → gạch đầu dòng → bảng → ví dụ → hộp lưu ý.
 */
export interface GrammarTheorySection {
  heading: LocalizedText;
  body?: LocalizedText;
  points?: readonly LocalizedText[];
  table?: GrammarTable;
  examples?: readonly GrammarExample[];
  callout?: GrammarCallout;
}

/** Câu hỏi kiểu TOEIC Part 5: một câu có chỗ trống `-------` và bốn lựa chọn. */
export interface GrammarQuestion {
  sentence: string;
  options: readonly [string, string, string, string];
  /** Vị trí đáp án đúng trong `options`. Thứ tự lựa chọn được trộn lại mỗi lần làm. */
  answer: 0 | 1 | 2 | 3;
  explanation: LocalizedText;
  /** Nghĩa tiếng Việt của câu đã điền đáp án đúng. */
  translation: string;
}

export interface GrammarLessonContent {
  /** Phải trùng với id trong mục lục. */
  id: string;
  /** Một hai câu mở đầu bước lý thuyết: bài này dạy gì, gặp ở đâu trong đề. */
  intro: LocalizedText;
  mistakes: readonly GrammarMistake[];
  theory: readonly GrammarTheorySection[];
  questions: readonly GrammarQuestion[];
}

/** Số câu luyện tập của mỗi bài — bản đồ khoá học hiện "10 Q" mà không phải tải nội dung. */
export const GRAMMAR_QUESTIONS_PER_LESSON = 10;

/** Tỉ lệ đúng tối thiểu để tính là ĐẠT và mở khoá bài kế tiếp. */
export const GRAMMAR_PASS_RATIO = 0.7;

/** Bốn bước của một bài học, theo đúng thứ tự. */
export const GRAMMAR_STEPS = ['mistakes', 'theory', 'practice', 'result'] as const;
export type GrammarStep = (typeof GRAMMAR_STEPS)[number];
