import { PracticeConfig, PracticeQuestion } from '../models/practice.model';
import { shuffle } from '../utils/random';

/**
 * Trộn và cắt danh sách câu hỏi theo thiết lập.
 *
 * Làm SAU khi đã sinh câu hỏi chứ không làm trên danh sách mục, vì có chiều sinh
 * nhiều câu cho mỗi mục (chiều "trộn" của bài bị động sinh hai câu mỗi mục) — cắt
 * sớm sẽ làm lệch tỉ lệ giữa hai chiều.
 *
 * Cả ba khu đều gọi hàm này, nên hai tuỳ chọn "Trộn thứ tự" và "Số câu" có ý nghĩa
 * y hệt nhau ở mọi nơi.
 */
export function orderQuestions(
  questions: readonly PracticeQuestion[],
  config: PracticeConfig,
): PracticeQuestion[] {
  const ordered = config.shuffle ? shuffle(questions) : [...questions];

  return config.questionLimit !== null && config.questionLimit > 0
    ? ordered.slice(0, config.questionLimit)
    : ordered;
}

/**
 * Trộn lại thứ tự đáp án của một câu đã làm.
 * Dùng khi luyện lại câu sai để người học không nhớ vị trí đáp án của lần trước.
 */
export function reshuffleChoices(question: PracticeQuestion): PracticeQuestion {
  return question.choices.length > 0
    ? { ...question, choices: shuffle(question.choices) }
    : question;
}
