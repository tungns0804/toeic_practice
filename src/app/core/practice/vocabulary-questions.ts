import { MESSAGES, type MessageKey } from '../i18n/messages';
import { LocalizedText, POS_LABEL_KEY, VocabularyWord } from '../models/lesson.model';
import {
  CHOICE_COUNT,
  PracticeConfig,
  PracticeQuestion,
  QuestionSubject,
  limitAttempts,
  vocabDirectionInfo,
} from '../models/practice.model';
import { acceptedAnswersOf } from '../utils/answer-check';
import { shuffle } from '../utils/random';
import { blankOut, findClozeSpan } from './cloze';

function subjectOf(word: VocabularyWord): QuestionSubject {
  return {
    id: word.id,
    title: word.word,
    subtitle: word.meaning,
    recap: [
      { labelKey: 'practice.recap.word', value: word.word, valueText: null, english: true },
      ...(word.ipa
        ? [{ labelKey: 'practice.recap.ipa' as MessageKey, value: word.ipa, valueText: null, english: true }]
        : []),
      { labelKey: 'practice.recap.pos', value: '', valueText: posText(word), english: false },
      { labelKey: 'practice.recap.meaning', value: word.meaning, valueText: null, english: false },
      ...(word.example
        ? [
            {
              labelKey: 'practice.recap.example' as MessageKey,
              value: word.example,
              valueText: null,
              english: true,
            },
          ]
        : []),
      ...(word.exampleVi
        ? [
            {
              labelKey: 'practice.recap.vietnamese' as MessageKey,
              value: word.exampleVi,
              valueText: null,
              english: false,
            },
          ]
        : []),
    ],
  };
}

/**
 * Từ loại hiện ở phần phản hồi phải đổi theo ngôn ngữ giao diện ("Danh từ" /
 * "Noun"), nhưng `RecapItem.valueText` nhận một CẶP CHỮ chứ không nhận khoá thông
 * điệp — nó được thiết kế cho dữ liệu bài học (tên thì), không cho chuỗi giao diện.
 *
 * Đọc thẳng bảng MESSAGES chứ không đi qua `LanguageStore`: đây là dữ liệu tĩnh,
 * và câu hỏi được dựng một lần rồi dùng lại suốt phiên — nếu chụp lấy ngôn ngữ
 * đang chọn ở thời điểm dựng thì đổi ngôn ngữ giữa chừng sẽ không có tác dụng.
 */
function posText(word: VocabularyWord): LocalizedText {
  return MESSAGES[POS_LABEL_KEY[word.pos]];
}

const ANSWER_PROMPT_KEY: Record<'english' | 'vietnamese', MessageKey> = {
  english: 'practice.answerPrompt.english',
  vietnamese: 'practice.answerPrompt.vietnamese',
};

/**
 * Dựng câu hỏi cho bài từ vựng.
 *
 * @param pool Các từ đem ra hỏi (toàn bộ band hoặc chỉ nhóm ★).
 * @param allWords Toàn bộ từ của band — dùng làm nguồn đáp án nhiễu, để khi chỉ
 *   luyện vài từ ★ thì câu trắc nghiệm vẫn đủ 4 lựa chọn.
 */
export function buildVocabularyQuestions(
  pool: readonly VocabularyWord[],
  allWords: readonly VocabularyWord[],
  config: PracticeConfig,
): PracticeQuestion[] {
  const info = vocabDirectionInfo(config.direction);

  if (info.id === 'cloze') return buildClozeQuestions(pool, allWords, config);

  const toEnglish = info.id === 'vi-en';

  return pool.map((word) => {
    const prompt = toEnglish ? word.meaning : word.word;
    const correctAnswer = toEnglish ? word.word : word.meaning;
    const choices =
      config.answerMode === 'choice'
        ? buildChoices(word, correctAnswer, allWords, (candidate) =>
            toEnglish ? candidate.word : candidate.meaning,
          )
        : [];

    return {
      subject: subjectOf(word),
      labelKey: info.labelKey,
      prompt,
      promptIsEnglish: !toEnglish,
      hint: config.showHint ? hintFor(word, toEnglish) : null,
      correctAnswer,
      labels: null,
      acceptedAnswers: acceptedAnswersOf(correctAnswer),
      answerIsEnglish: toEnglish,
      answerPromptKey: ANSWER_PROMPT_KEY[toEnglish ? 'english' : 'vietnamese'],
      choices,
      // Một từ đơn thì dấu câu gần như không có; nhưng nghĩa tiếng Việt hay kèm
      // dấu phẩy ("hoãn, trì hoãn") nên vẫn bỏ qua để không chấm sai vì dấu.
      ignorePunctuation: true,
      isSentence: false,
      maxWrongAttempts: limitAttempts(config.maxWrongAttempts, config.answerMode, choices.length),
    };
  });
}

/**
 * Dạng "điền từ": hiện câu ví dụ đã khoét mất chính từ đang học.
 *
 * Từ nào không tìm được chỗ khoét thì BỎ QUA — xem `findClozeSpan`. Vì thế số câu
 * của dạng này có thể ít hơn số từ trong phạm vi, và màn hình thiết lập phải tính
 * trước con số đó thay vì lấy thẳng số từ.
 */
function buildClozeQuestions(
  pool: readonly VocabularyWord[],
  allWords: readonly VocabularyWord[],
  config: PracticeConfig,
): PracticeQuestion[] {
  return pool.flatMap((word): PracticeQuestion[] => {
    const span = word.example ? findClozeSpan(word.example, word.word) : null;
    if (!span) return [];

    const correctAnswer = span.text;
    const choices =
      config.answerMode === 'choice'
        ? buildChoices(word, correctAnswer, allWords, (candidate) => candidate.word)
        : [];

    return [
      {
        subject: subjectOf(word),
        labelKey: 'practice.label.cloze',
        prompt: blankOut(word.example, span),
        promptIsEnglish: true,
        // Gợi ý là nghĩa tiếng Việt của từ cần điền: đủ để lần ra từ, không lộ mặt chữ.
        hint: config.showHint ? word.meaning : null,
        correctAnswer,
        labels: null,
        // Chấp nhận cả dạng nguyên thể lẫn dạng đã chia trong câu: mục tiêu của
        // dạng này là nhớ ra TỪ, không phải kiểm tra chia động từ.
        acceptedAnswers: [...new Set([correctAnswer, word.word])],
        answerIsEnglish: true,
        answerPromptKey: 'practice.answerPrompt.english',
        choices,
        ignorePunctuation: true,
        isSentence: false,
        maxWrongAttempts: limitAttempts(config.maxWrongAttempts, config.answerMode, choices.length),
      },
    ];
  });
}

/** Gợi ý: từ loại + phiên âm khi hỏi xuôi, từ loại + chữ cái đầu khi hỏi ngược. */
function hintFor(word: VocabularyWord, toEnglish: boolean): string | null {
  if (!toEnglish) return word.ipa || null;
  // Hỏi ngược (Việt → Anh) thì gợi chữ cái đầu và độ dài: đủ để bật ra từ đang ở
  // đầu lưỡi, không đủ để đoán bừa.
  const first = word.word.trim()[0] ?? '';
  if (!first) return null;
  return `${first}${'·'.repeat(Math.max(0, word.word.trim().length - 1))}`;
}

function buildChoices(
  word: VocabularyWord,
  correctAnswer: string,
  allWords: readonly VocabularyWord[],
  valueOf: (candidate: VocabularyWord) => string,
): string[] {
  const key = (text: string) => text.trim().toLowerCase();
  const used = new Set([key(correctAnswer)]);
  const distractors: string[] = [];

  // Ưu tiên từ CÙNG TỪ LOẠI làm đáp án nhiễu: bốn lựa chọn mà chỉ có một danh từ
  // thì loại trừ được ngay mà không cần biết nghĩa.
  const sameKind = allWords.filter((item) => item.pos === word.pos);
  for (const candidate of [...shuffle(sameKind), ...shuffle(allWords)]) {
    if (distractors.length >= CHOICE_COUNT - 1) break;
    if (candidate.id === word.id) continue;

    const text = valueOf(candidate);
    if (!text || used.has(key(text))) continue;

    used.add(key(text));
    distractors.push(text);
  }

  return shuffle([correctAnswer, ...distractors]);
}
