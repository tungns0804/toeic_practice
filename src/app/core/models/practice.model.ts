import type { MessageKey } from '../i18n/messages';
import type { ExerciseId, PassiveMode } from '../exercises/exercise.model';
import { exerciseModeInfo } from '../exercises/exercise.model';
import type { LessonKind, LocalizedText } from './lesson.model';

/**
 * Các chiều luyện của bài TỪ VỰNG.
 *  - en-vi : hiện từ tiếng Anh, trả lời nghĩa tiếng Việt
 *  - vi-en : hiện nghĩa tiếng Việt, trả lời từ tiếng Anh
 *  - cloze : hiện câu ví dụ đã khoét chỗ, điền lại từ còn thiếu
 *
 * `cloze` chỉ dùng được với từ có câu ví dụ CHỨA chính từ đó (kể cả ở dạng đã
 * biến đổi: negotiate → negotiated). Từ nào không đạt sẽ bị loại khỏi phiên —
 * xem `findClozeSpan` trong `core/practice/cloze.ts`.
 */
export type VocabDirection = 'en-vi' | 'vi-en' | 'cloze';

/** Bốn dạng câu hỏi của khu CÁC THÌ. */
export type TenseMode = 'vi-en' | 'en-vi' | 'identify' | 'conjugate';

/** Cách người dùng trả lời. */
export type AnswerMode = 'choice' | 'typing';

/**
 * Phạm vi luyện tập.
 *  - all      : toàn bộ mục trong phần đang mở
 *  - favorite : chỉ các mục đã đánh dấu ★
 *  - single   : đúng một mục do người học bấm chọn, không đi qua khung thiết lập
 *
 * `single` không có nút riêng ở khung thiết lập — nó tới từ nút luyện đặt ngay
 * trên từng câu ví dụ. Vẫn phải là một giá trị của phạm vi để màn hình kết quả
 * gọi tên đúng phiên vừa làm thay vì hiện "Toàn bộ" cho một câu.
 */
export type PracticeScope = 'all' | 'favorite' | 'single';

export const SCOPE_LABEL_KEY: Record<PracticeScope, MessageKey> = {
  all: 'scope.all',
  favorite: 'scope.favorite',
  single: 'scope.single',
};

export interface VocabDirectionInfo {
  id: VocabDirection;
  labelKey: MessageKey;
  shortKey: MessageKey;
  /** Đáp án là tiếng Anh (quyết định nhãn ô nhập và cách nhắc viết tắt). */
  answerIsEnglish: boolean;
  /** Chiều này có cho bật gợi ý không (gợi ý là từ loại + phiên âm). */
  supportsHint: boolean;
}

export const VOCAB_DIRECTIONS: readonly VocabDirectionInfo[] = [
  {
    id: 'en-vi',
    labelKey: 'direction.en-vi',
    shortKey: 'direction.en-vi.short',
    answerIsEnglish: false,
    supportsHint: true,
  },
  {
    id: 'vi-en',
    labelKey: 'direction.vi-en',
    shortKey: 'direction.vi-en.short',
    answerIsEnglish: true,
    supportsHint: true,
  },
  {
    id: 'cloze',
    labelKey: 'direction.cloze',
    shortKey: 'direction.cloze.short',
    answerIsEnglish: true,
    // Gợi ý của chiều này sẽ là chính nghĩa tiếng Việt của từ cần điền.
    supportsHint: true,
  },
];

export function vocabDirectionInfo(id: VocabDirection): VocabDirectionInfo {
  return VOCAB_DIRECTIONS.find((item) => item.id === id) ?? VOCAB_DIRECTIONS[0];
}

export interface TenseModeInfo {
  id: TenseMode;
  labelKey: MessageKey;
  shortKey: MessageKey;
  exampleKey: MessageKey;
  /**
   * Dạng này có chạy được ở chế độ trắc nghiệm không.
   *
   * Dịch cả câu thì KHÔNG: bốn câu dài để chọn thì đọc lướt là ra đáp án mà chẳng
   * phải dịch gì. Chỉ "nhận diện thì" và "chia động từ" mới có đáp án đủ ngắn để
   * bày ra bốn lựa chọn có ý nghĩa.
   */
  supportsChoice: boolean;
}

export const TENSE_MODES: readonly TenseModeInfo[] = [
  {
    id: 'vi-en',
    labelKey: 'tenseMode.vi-en',
    shortKey: 'tenseMode.vi-en.short',
    exampleKey: 'tenseMode.vi-en.example',
    supportsChoice: false,
  },
  {
    id: 'en-vi',
    labelKey: 'tenseMode.en-vi',
    shortKey: 'tenseMode.en-vi.short',
    exampleKey: 'tenseMode.en-vi.example',
    supportsChoice: false,
  },
  {
    id: 'identify',
    labelKey: 'tenseMode.identify',
    shortKey: 'tenseMode.identify.short',
    exampleKey: 'tenseMode.identify.example',
    supportsChoice: true,
  },
  {
    id: 'conjugate',
    labelKey: 'tenseMode.conjugate',
    shortKey: 'tenseMode.conjugate.short',
    exampleKey: 'tenseMode.conjugate.example',
    supportsChoice: true,
  },
];

export function tenseModeInfo(id: TenseMode): TenseModeInfo {
  return TENSE_MODES.find((item) => item.id === id) ?? TENSE_MODES[0];
}

/** Số lần trả lời sai tối đa trước khi hiện đáp án và tính sai câu đó. */
export const DEFAULT_MAX_WRONG_ATTEMPTS = 4;

/** Số lựa chọn của một câu trắc nghiệm (1 đúng + 3 nhiễu). */
export const CHOICE_COUNT = 4;

/**
 * Toàn bộ thiết lập của một phiên.
 *
 * Là MỘT khối đầy đủ chứ không phải union theo loại bài: trường nào cũng phải có
 * giá trị, kể cả trường không liên quan tới loại đang luyện. Đổi lại, mọi chỗ
 * nhận `PracticeConfig` (session store, màn hình kết quả) không phải rẽ nhánh
 * kiểu trước khi đọc một trường.
 */
export interface PracticeConfig {
  lessonId: string;
  lessonKind: LessonKind;
  scope: PracticeScope;
  answerMode: AnswerMode;
  /** null = luyện toàn bộ mục trong phạm vi đã chọn. */
  questionLimit: number | null;
  shuffle: boolean;
  maxWrongAttempts: number;
  /** Bỏ qua dấu tiếng Việt khi so khớp (chỉ áp dụng cho đáp án tiếng Việt gõ tay). */
  ignoreDiacritics: boolean;
  /** Hiện gợi ý dưới câu hỏi (nội dung gợi ý tuỳ loại bài). */
  showHint: boolean;

  // --- Riêng bài từ vựng ---
  direction: VocabDirection;

  // --- Riêng khu các thì ---
  tenseMode: TenseMode;
  /**
   * Chỉ luyện đúng một thì trong nhóm, null = cả nhóm.
   * Tới từ nút "Luyện riêng thì này" ở trang lý thuyết.
   */
  tensePointId: string | null;

  // --- Riêng khu bài tập chuyên đề ---
  /** Bài tập đang luyện, null với mọi phần khác. */
  exercise: ExerciseId | null;
  passiveMode: PassiveMode;
}

/** Một dòng thông tin hiện lại ở phần phản hồi sau khi chấm xong. */
export interface RecapItem {
  labelKey: MessageKey;
  /** Giá trị hiển thị thẳng (từ dữ liệu bài học). Để rỗng khi dùng `valueText`. */
  value: string;
  /** Khi có, giá trị đổi theo ngôn ngữ — dùng cho tên thì, tên dạng bị động. */
  valueText: LocalizedText | null;
  /** Giá trị là tiếng Anh: hiển thị bằng kiểu chữ dành cho câu tiếng Anh. */
  english: boolean;
}

/**
 * Mục đang được hỏi, đã tách khỏi kiểu dữ liệu gốc (từ vựng, câu ví dụ hay câu
 * bị động) để màn hình luyện tập và màn hình kết quả dùng chung được cho cả ba khu.
 */
export interface QuestionSubject {
  /** Id của từ vựng / câu ví dụ — dùng làm khoá ★. */
  id: string;
  title: string;
  subtitle: string;
  recap: RecapItem[];
}

export interface PracticeQuestion {
  subject: QuestionSubject;
  /** Nhãn nhỏ phía trên câu hỏi. */
  labelKey: MessageKey;
  prompt: string;
  /** Câu hỏi viết bằng tiếng Anh — quyết định kiểu chữ khi hiển thị. */
  promptIsEnglish: boolean;
  /** Gợi ý hiện dưới câu hỏi, null nếu không bật. */
  hint: string | null;
  /**
   * Đáp án đúng ở dạng giá trị ỔN ĐỊNH, không phụ thuộc ngôn ngữ.
   * Với câu nhận diện thì, đây là id của thì ("present-perfect"), còn chữ hiển thị
   * lấy từ `labels`.
   */
  correctAnswer: string;
  /**
   * Bảng tra chữ hiển thị của các giá trị ổn định (lựa chọn trắc nghiệm và đáp án
   * đúng). null nghĩa là hiển thị thẳng giá trị.
   */
  labels: Record<string, LocalizedText> | null;
  /** Các cách viết được chấp nhận khi gõ tay. */
  acceptedAnswers: string[];
  /** Đáp án là tiếng Anh: nhắc quy tắc viết tắt và dùng kiểu chữ tiếng Anh. */
  answerIsEnglish: boolean;
  /** Nhãn ô nhập ở chế độ gõ đáp án. */
  answerPromptKey: MessageKey;
  /** Danh sách lựa chọn cho chế độ trắc nghiệm; rỗng ở chế độ gõ. */
  choices: string[];
  /**
   * Bỏ qua dấu câu khi chấm. Bật cho câu dài: gõ đúng cả dấu phẩy trong một câu
   * mười mấy từ thì sai vì lý do không liên quan tới việc dịch.
   */
  ignorePunctuation: boolean;
  /**
   * Câu hỏi là một CÂU chứ không phải một từ — màn hình luyện tập dùng cỡ chữ nhỏ
   * hơn và ô nhập nhiều dòng.
   */
  isSentence: boolean;
  /** Số lần sai tối đa của riêng câu này. */
  maxWrongAttempts: number;
}

export type QuestionStatus = 'pending' | 'correct' | 'revealed';

export interface QuestionState {
  status: QuestionStatus;
  wrongAttempts: number;
  attempts: string[];
}

export interface QuestionResult {
  question: PracticeQuestion;
  isCorrect: boolean;
  /** Đúng ngay lần thử đầu tiên. */
  isPerfect: boolean;
  wrongAttempts: number;
  attempts: string[];
}

export interface SessionSummary {
  lessonId: string;
  lessonName: LocalizedText;
  config: PracticeConfig;
  total: number;
  correctCount: number;
  wrongCount: number;
  perfectCount: number;
  durationMs: number;
  results: QuestionResult[];
}

/**
 * Trắc nghiệm chỉ có (số lựa chọn − 1) đáp án sai, nên không thể sai nhiều hơn thế:
 * chọn hết đáp án sai là đã lộ đáp án đúng, lúc đó phải tính là sai luôn.
 */
export function limitAttempts(
  configured: number,
  answerMode: AnswerMode,
  choiceCount: number,
): number {
  return answerMode === 'choice'
    ? Math.max(1, Math.min(configured, choiceCount - 1))
    : Math.max(1, configured);
}

/** Khoá nhãn ngắn của kiểu luyện tập, hiện trên thanh tiến độ khi đang làm bài. */
export function sessionShortKey(config: PracticeConfig): MessageKey {
  switch (config.lessonKind) {
    case 'exercise':
      return exerciseModeInfo(config.passiveMode).shortKey;
    case 'tense':
      return tenseModeInfo(config.tenseMode).shortKey;
    case 'vocabulary':
      return vocabDirectionInfo(config.direction).shortKey;
  }
}

/** Các khoá mô tả thiết lập của một phiên, dùng cho badge ở màn hình kết quả. */
export function describeConfigKeys(config: PracticeConfig): MessageKey[] {
  return [
    config.answerMode === 'choice' ? 'setup.answerMode.choice' : 'setup.answerMode.typing',
    SCOPE_LABEL_KEY[config.scope],
    sessionShortKey(config),
    ...(config.showHint ? (['setup.showHint'] as MessageKey[]) : []),
  ];
}
