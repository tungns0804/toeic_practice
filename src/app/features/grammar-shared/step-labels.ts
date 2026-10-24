import type { GrammarStep } from '../../core/grammar/grammar.model';
import type { MessageKey } from '../../core/i18n/messages';

/** Nhãn của bốn bước — dùng chung cho dải lộ trình ở trang tổng quan và thanh bước trong bài học. */
export const GRAMMAR_STEP_LABEL: Record<GrammarStep, MessageKey> = {
  mistakes: 'grammar.step.mistakes',
  theory: 'grammar.step.theory',
  practice: 'grammar.step.practice',
  result: 'grammar.step.result',
};
