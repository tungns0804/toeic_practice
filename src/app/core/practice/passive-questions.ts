import {
  PASSIVE_KIND_LABEL_KEY,
  PassiveMode,
  PassiveSentence,
} from '../exercises/exercise.model';
import { passiveFormula } from '../exercises/passive-sentences';
import { MESSAGES } from '../i18n/messages';
import type { MessageKey } from '../i18n/messages';
import type { LocalizedText } from '../models/lesson.model';
import { PracticeConfig, PracticeQuestion, QuestionSubject } from '../models/practice.model';

function subjectOf(sentence: PassiveSentence): QuestionSubject {
  const formula = passiveFormula(sentence.formulaId);
  return {
    id: sentence.id,
    title: sentence.passive,
    subtitle: sentence.vietnamese,
    recap: [
      { labelKey: 'practice.recap.active', value: sentence.active, valueText: null, english: true },
      {
        labelKey: 'practice.recap.passive',
        value: sentence.passive,
        valueText: null,
        english: true,
      },
      {
        labelKey: 'practice.recap.vietnamese',
        value: sentence.vietnamese,
        valueText: null,
        english: false,
      },
      ...(formula
        ? [
            {
              labelKey: 'practice.recap.tense' as MessageKey,
              value: '',
              valueText: formula.name,
              english: false,
            },
            {
              labelKey: 'practice.recap.formula' as MessageKey,
              value: formula.passive,
              valueText: null,
              english: true,
            },
          ]
        : []),
      {
        labelKey: 'practice.recap.note',
        value: '',
        valueText: sentence.note ?? kindText(sentence),
        english: false,
      },
    ],
  };
}

/** Câu không có ghi chú riêng thì ít nhất cũng cho biết nó thuộc dạng nào. */
function kindText(sentence: PassiveSentence): LocalizedText {
  return MESSAGES[PASSIVE_KIND_LABEL_KEY[sentence.kind]];
}

/**
 * Dựng câu hỏi cho bài tập thể bị động.
 *
 * Bài này KHÔNG có chế độ trắc nghiệm (xem `exercise.typingOnly` trong bảng thông
 * điệp): bốn câu dài để chọn thì đọc lướt là ra đáp án mà chưa cần biết đổi câu.
 *
 * Chiều "Bị → Chủ" chỉ hỏi những câu `reversible` — câu đã lược bỏ "by ..." thì
 * không có cách nào dựng lại đúng chủ ngữ, hỏi là bắt người học đoán mò.
 */
export function buildPassiveQuestions(
  pool: readonly PassiveSentence[],
  config: PracticeConfig,
): PracticeQuestion[] {
  const mode = config.passiveMode;

  return pool.flatMap((sentence) => {
    const questions: PracticeQuestion[] = [];

    if (mode === 'to-passive' || mode === 'mixed') {
      questions.push(toPassiveQuestion(sentence, config));
    }
    if ((mode === 'to-active' || mode === 'mixed') && sentence.reversible) {
      questions.push(toActiveQuestion(sentence, config));
    }
    if (mode === 'vi-passive') {
      questions.push(viToPassiveQuestion(sentence, config));
    }

    return questions;
  });
}

/** Số câu mà một mục sinh ra ở chiều đang chọn — dùng để hiện trước "sẽ luyện N câu". */
export function countPassiveQuestions(
  pool: readonly PassiveSentence[],
  mode: PassiveMode,
): number {
  switch (mode) {
    case 'to-active':
      return pool.filter((sentence) => sentence.reversible).length;
    case 'mixed':
      return pool.length + pool.filter((sentence) => sentence.reversible).length;
    default:
      return pool.length;
  }
}

function toPassiveQuestion(sentence: PassiveSentence, config: PracticeConfig): PracticeQuestion {
  const formula = passiveFormula(sentence.formulaId);
  return {
    subject: subjectOf(sentence),
    labelKey: 'practice.label.toPassive',
    prompt: sentence.active,
    promptIsEnglish: true,
    hint: config.showHint && formula ? formula.passive : null,
    correctAnswer: sentence.passive,
    labels: null,
    acceptedAnswers: [sentence.passive],
    answerIsEnglish: true,
    answerPromptKey: 'practice.answerPrompt.passive',
    choices: [],
    ignorePunctuation: true,
    isSentence: true,
    maxWrongAttempts: Math.max(1, config.maxWrongAttempts),
  };
}

function toActiveQuestion(sentence: PassiveSentence, config: PracticeConfig): PracticeQuestion {
  const formula = passiveFormula(sentence.formulaId);
  return {
    subject: subjectOf(sentence),
    labelKey: 'practice.label.toActive',
    prompt: sentence.passive,
    promptIsEnglish: true,
    hint: config.showHint && formula ? formula.active : null,
    correctAnswer: sentence.active,
    labels: null,
    acceptedAnswers: [sentence.active],
    answerIsEnglish: true,
    answerPromptKey: 'practice.answerPrompt.active',
    choices: [],
    ignorePunctuation: true,
    isSentence: true,
    maxWrongAttempts: Math.max(1, config.maxWrongAttempts),
  };
}

function viToPassiveQuestion(sentence: PassiveSentence, config: PracticeConfig): PracticeQuestion {
  const formula = passiveFormula(sentence.formulaId);
  return {
    subject: subjectOf(sentence),
    labelKey: 'practice.label.viToPassive',
    prompt: sentence.vietnamese,
    promptIsEnglish: false,
    hint: config.showHint && formula ? formula.passive : null,
    correctAnswer: sentence.passive,
    labels: null,
    acceptedAnswers: [sentence.passive],
    answerIsEnglish: true,
    answerPromptKey: 'practice.answerPrompt.passive',
    choices: [],
    ignorePunctuation: true,
    isSentence: true,
    maxWrongAttempts: Math.max(1, config.maxWrongAttempts),
  };
}
