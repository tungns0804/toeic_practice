import type { MessageKey } from '../i18n/messages';
import { LocalizedText, TenseExampleRef, TensePoint } from '../models/lesson.model';
import {
  CHOICE_COUNT,
  PracticeConfig,
  PracticeQuestion,
  QuestionSubject,
  limitAttempts,
  tenseModeInfo,
} from '../models/practice.model';
import { acceptedAnswersOf } from '../utils/answer-check';
import { shuffle } from '../utils/random';

/** Chỗ trống thay cho cụm động từ ở dạng "chia động từ". */
const VERB_BLANK = '______';

function subjectOf(ref: TenseExampleRef): QuestionSubject {
  const { example, point } = ref;
  return {
    id: example.id,
    title: example.english,
    subtitle: example.vietnamese,
    recap: [
      { labelKey: 'practice.recap.english', value: example.english, valueText: null, english: true },
      {
        labelKey: 'practice.recap.vietnamese',
        value: example.vietnamese,
        valueText: null,
        english: false,
      },
      { labelKey: 'practice.recap.tense', value: '', valueText: point.name, english: false },
      {
        labelKey: 'practice.recap.formula',
        value: point.affirmative,
        valueText: null,
        english: true,
      },
      ...(example.note
        ? [
            {
              labelKey: 'practice.recap.note' as MessageKey,
              value: example.note,
              valueText: null,
              english: false,
            },
          ]
        : []),
    ],
  };
}

/**
 * Dựng câu hỏi cho khu CÁC THÌ.
 *
 * @param pool  Các câu ví dụ đem ra hỏi (cả nhóm, một thì, hoặc chỉ nhóm ★).
 * @param allPoints Toàn bộ thì của nhóm — nguồn đáp án nhiễu cho dạng "nhận diện thì".
 */
export function buildTenseQuestions(
  pool: readonly TenseExampleRef[],
  allPoints: readonly TensePoint[],
  config: PracticeConfig,
): PracticeQuestion[] {
  switch (config.tenseMode) {
    case 'identify':
      return buildIdentifyQuestions(pool, allPoints, config);
    case 'conjugate':
      return buildConjugateQuestions(pool, config);
    default:
      return buildTranslateQuestions(pool, config);
  }
}

/** Dịch cả câu, hai chiều. Không có trắc nghiệm — xem `TenseModeInfo.supportsChoice`. */
function buildTranslateQuestions(
  pool: readonly TenseExampleRef[],
  config: PracticeConfig,
): PracticeQuestion[] {
  const toEnglish = config.tenseMode === 'vi-en';
  const info = tenseModeInfo(config.tenseMode);

  return pool.map((ref) => {
    const { example, point } = ref;
    const correctAnswer = toEnglish ? example.english : example.vietnamese;

    return {
      subject: subjectOf(ref),
      labelKey: info.labelKey,
      prompt: toEnglish ? example.vietnamese : example.english,
      promptIsEnglish: !toEnglish,
      // Gợi ý là tên thì + công thức: đủ để biết phải dùng cấu trúc nào mà vẫn
      // phải tự đặt câu. Chỉ có ích ở chiều Việt → Anh.
      hint: config.showHint && toEnglish ? `${point.name.en} — ${point.affirmative}` : null,
      correctAnswer,
      labels: null,
      // Cả câu là MỘT đáp án: không tách theo dấu / như bài từ vựng, vì dấu / hoàn
      // toàn có thể là một phần của câu.
      acceptedAnswers: [correctAnswer],
      answerIsEnglish: toEnglish,
      answerPromptKey: toEnglish
        ? 'practice.answerPrompt.sentenceEnglish'
        : 'practice.answerPrompt.sentenceVietnamese',
      choices: [],
      ignorePunctuation: true,
      isSentence: true,
      maxWrongAttempts: Math.max(1, config.maxWrongAttempts),
    };
  });
}

/**
 * "Câu này ở thì nào?" — đáp án là ID của thì, chữ hiển thị lấy từ `labels` nên
 * đổi ngôn ngữ giữa phiên vẫn đúng.
 */
function buildIdentifyQuestions(
  pool: readonly TenseExampleRef[],
  allPoints: readonly TensePoint[],
  config: PracticeConfig,
): PracticeQuestion[] {
  const labels: Record<string, LocalizedText> = {};
  for (const point of allPoints) labels[point.id] = point.name;

  return pool.map((ref) => {
    const { example, point } = ref;
    const choices =
      config.answerMode === 'choice' ? buildTenseChoices(point, allPoints) : [];

    return {
      subject: subjectOf(ref),
      labelKey: 'practice.label.identify',
      prompt: example.english,
      promptIsEnglish: true,
      hint: config.showHint ? point.affirmative : null,
      correctAnswer: point.id,
      labels,
      // Ở chế độ gõ, chấp nhận cả tên tiếng Anh lẫn tên tiếng Việt của thì.
      acceptedAnswers: [
        ...acceptedAnswersOf(point.name.en),
        ...acceptedAnswersOf(point.name.vi),
      ],
      answerIsEnglish: false,
      answerPromptKey: 'practice.answerPrompt.tenseName',
      choices,
      ignorePunctuation: true,
      isSentence: false,
      maxWrongAttempts: limitAttempts(config.maxWrongAttempts, config.answerMode, choices.length),
    };
  });
}

/**
 * "Chia động từ trong ngoặc": câu hiện ra với cụm động từ bị khoét và động từ
 * nguyên thể đặt trong ngoặc.
 *
 * Câu ví dụ nào không khai báo `verb`/`conjugated` thì BỎ QUA — dựng bừa một chỗ
 * khoét từ câu chữ là cách chắc chắn nhất để khoét nhầm.
 */
function buildConjugateQuestions(
  pool: readonly TenseExampleRef[],
  config: PracticeConfig,
): PracticeQuestion[] {
  return pool.flatMap((ref): PracticeQuestion[] => {
    const { example, point } = ref;
    if (!example.verb || !example.conjugated) return [];

    const index = example.english.toLowerCase().indexOf(example.conjugated.toLowerCase());
    if (index < 0) return [];

    const prompt =
      example.english.slice(0, index) +
      `${VERB_BLANK} (${example.verb})` +
      example.english.slice(index + example.conjugated.length);

    const choices =
      config.answerMode === 'choice' ? buildFormChoices(example.conjugated, pool) : [];

    return [
      {
        subject: subjectOf(ref),
        labelKey: 'practice.label.conjugate',
        prompt,
        promptIsEnglish: true,
        hint: config.showHint ? `${point.name.en} — ${point.affirmative}` : null,
        correctAnswer: example.conjugated,
        labels: null,
        acceptedAnswers: [example.conjugated],
        answerIsEnglish: true,
        answerPromptKey: 'practice.answerPrompt.verbForm',
        choices,
        ignorePunctuation: true,
        isSentence: false,
        maxWrongAttempts: limitAttempts(config.maxWrongAttempts, config.answerMode, choices.length),
      },
    ];
  });
}

/** Ba thì khác trong cùng nhóm làm đáp án nhiễu. */
function buildTenseChoices(correct: TensePoint, allPoints: readonly TensePoint[]): string[] {
  const distractors = shuffle(allPoints.filter((point) => point.id !== correct.id))
    .slice(0, CHOICE_COUNT - 1)
    .map((point) => point.id);
  return shuffle([correct.id, ...distractors]);
}

/**
 * Đáp án nhiễu cho dạng chia động từ: các cụm động từ ĐÃ CHIA của những câu khác
 * trong cùng phiên.
 *
 * Vì sao lấy từ câu khác chứ không tự sinh các dạng sai của chính động từ đó: các
 * dạng tự sinh ("worked", "is working", "has worked") gần như luôn đúng ngữ pháp
 * ở đâu đó, nên bốn lựa chọn sẽ khác nhau đúng ở cái mà đề đang hỏi — trong khi
 * mục tiêu là nhận ra thì, chứ không phải chọn giữa bốn biến thể của một động từ.
 */
function buildFormChoices(correct: string, pool: readonly TenseExampleRef[]): string[] {
  const key = (text: string) => text.trim().toLowerCase();
  const used = new Set([key(correct)]);
  const distractors: string[] = [];

  for (const ref of shuffle(pool)) {
    if (distractors.length >= CHOICE_COUNT - 1) break;
    const text = ref.example.conjugated;
    if (!text || used.has(key(text))) continue;
    used.add(key(text));
    distractors.push(text);
  }

  return shuffle([correct, ...distractors]);
}
