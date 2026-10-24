import type { MessageKey } from '../i18n/messages';
import type { LocalizedText } from '../models/lesson.model';

/**
 * Kiểu dữ liệu của khu LUYỆN NÓI: mỗi chủ đề gồm một bộ cụm từ cần học trước và
 * một bộ câu hỏi chia theo ba phần của bài thi nói.
 *
 * Nguồn: "Sách từ vựng bổ trợ" và "Sách giải đề speaking" của Luan Nguyen (19 chủ
 * đề). Câu hỏi, cụm từ, nghĩa tiếng Anh và câu ví dụ giữ nguyên theo sách; bản
 * tiếng Việt là bản dịch thêm cho người học.
 */

export type SpeakingPhraseType = 'collocation' | 'idiom' | 'phrase' | 'phrasalVerb';

export const PHRASE_TYPE_KEY: Record<SpeakingPhraseType, MessageKey> = {
  collocation: 'speaking.type.collocation',
  idiom: 'speaking.type.idiom',
  phrase: 'speaking.type.phrase',
  phrasalVerb: 'speaking.type.phrasalVerb',
};

/** Từ loại, theo cách ghi của từ điển: (n) (v) (adj) (adv). */
export type SpeakingPos = 'noun' | 'verb' | 'adj' | 'adv';

export const POS_ABBR: Record<SpeakingPos, string> = {
  noun: 'n',
  verb: 'v',
  adj: 'adj',
  adv: 'adv',
};

export const POS_KEY: Record<SpeakingPos, MessageKey> = {
  noun: 'speaking.pos.noun',
  verb: 'speaking.pos.verb',
  adj: 'speaking.pos.adj',
  adv: 'speaking.pos.adv',
};

/** Một từ trong cụm, kèm từ loại và nghĩa tiếng Việt. */
export interface SpeakingWord {
  readonly word: string;
  /** Phiên âm IPA giọng Mỹ, có hai dấu gạch chéo: /ˈskedʒuːl/. */
  readonly ipa: string;
  readonly pos: SpeakingPos;
  readonly vi: string;
}

export interface SpeakingPhrase {
  /** Duy nhất trong chủ đề; dùng làm khoá lưu "câu sai" của phần luyện từ. */
  readonly id: string;
  readonly phrase: string;
  /** Phiên âm IPA của cả cụm, giọng Mỹ như kho từ vựng của app. */
  readonly ipa: string;
  /** Loại cụm (collocation, idiom…) — theo sách. */
  readonly type: SpeakingPhraseType;
  /** Từ loại của CẢ cụm khi dùng trong câu: cụm danh từ hay cụm động từ. */
  readonly pos: SpeakingPos;
  /** Nghĩa ngắn tiếng Việt, kiểu một dòng trong sổ từ vựng. */
  readonly short: string;
  /** Nghĩa từng từ trong cụm. */
  readonly words: readonly SpeakingWord[];
  readonly meaning: LocalizedText;
  /**
   * Câu ví dụ, phần chứa cụm từ bọc trong `[[...]]`. Phần đó được tô đậm ở bảng
   * từ và bị khoét thành chỗ trống ở câu hỏi điền từ. Bọc cả dạng đã chia (passed
   * … with flying colors) chứ không chỉ dạng gốc, để câu khoét ra vẫn đúng ngữ pháp
   * với đáp án là cụm từ gốc.
   */
  readonly example: string;
  /** Bản dịch tiếng Việt của câu ví dụ. */
  readonly exampleVi: string;
}

export type SpeakingPart = 1 | 2 | 3;

export interface SpeakingQuestion {
  /** Duy nhất trong chủ đề; là khoá lưu câu trả lời, nên KHÔNG được đổi về sau. */
  readonly id: string;
  readonly part: SpeakingPart;
  readonly number: number;
  readonly text: string;
  readonly textVi: string;
}

export interface SpeakingTopic {
  readonly id: string;
  readonly number: number;
  readonly title: LocalizedText;
  readonly phrases: readonly SpeakingPhrase[];
  readonly questions: readonly SpeakingQuestion[];
}

/** Một nhánh của sơ đồ "Cách phát triển câu trả lời". */
export interface AnswerStrategy {
  readonly id: 'reason' | 'result' | 'example' | 'emotion' | 'benefit';
  readonly name: LocalizedText;
  readonly structures: readonly string[];
  readonly example: string;
}

/** Ghép `[[...]]` của câu ví dụ thành các đoạn để tô đậm hoặc khoét trống. */
export interface ExampleSegment {
  readonly text: string;
  readonly target: boolean;
}

export function exampleSegments(example: string): ExampleSegment[] {
  return example
    .split(/(\[\[[^\]]+\]\])/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('[[')
        ? { text: part.slice(2, -2), target: true }
        : { text: part, target: false },
    );
}
