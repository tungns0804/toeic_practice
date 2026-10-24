import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { LanguageStore } from '../../core/i18n/language-store';
import type { MessageKey } from '../../core/i18n/messages';
import { T } from '../../core/i18n/t';
import { SpeakingStore } from '../../core/speaking/speaking-store';
import { ANSWER_STRATEGIES, findSpeakingTopic } from '../../core/speaking/speaking-topics';
import {
  PHRASE_TYPE_KEY,
  POS_ABBR,
  POS_KEY,
  type SpeakingPart,
  type SpeakingQuestion,
  exampleSegments,
} from '../../core/speaking/speaking.model';
import { SpeakingAnswer } from './speaking-answer';
import { SpeakingDrill } from './speaking-drill';

type Step = 'vocab' | 'drill' | 'questions';

const STEPS: readonly { id: Step; key: MessageKey }[] = [
  { id: 'vocab', key: 'speaking.step.vocab' },
  { id: 'drill', key: 'speaking.step.drill' },
  { id: 'questions', key: 'speaking.step.questions' },
];

const PART_DESC: Record<SpeakingPart, MessageKey> = {
  1: 'speaking.partDesc.1',
  2: 'speaking.partDesc.2',
  3: 'speaking.partDesc.3',
};

/**
 * Một chủ đề luyện nói, đi theo ba bước: học cụm từ → luyện cụm từ → viết câu trả
 * lời. Lần đầu mở thì vào bước 1; đã luyện từ rồi thì vào thẳng phần câu hỏi.
 */
@Component({
  selector: 'app-speaking-topic',
  imports: [RouterLink, T, SpeakingAnswer, SpeakingDrill],
  templateUrl: './speaking-topic.html',
  styleUrl: './speaking-topic.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakingTopicPage {
  private readonly lang = inject(LanguageStore);
  protected readonly store = inject(SpeakingStore);

  private readonly id = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id'))),
  );

  protected readonly t = this.lang.t.bind(this.lang);
  protected readonly language = this.lang.language;
  protected readonly steps = STEPS;
  protected readonly strategies = ANSWER_STRATEGIES;
  protected readonly typeKey = PHRASE_TYPE_KEY;
  protected readonly posAbbr = POS_ABBR;
  protected readonly posKey = POS_KEY;
  protected readonly partDesc = PART_DESC;
  protected readonly segmentsOf = exampleSegments;

  protected readonly topic = computed(() => findSpeakingTopic(this.id()));

  /**
   * Chỉ đặt lại khi đổi CHỦ ĐỀ. Điểm luyện từ đọc trong untracked: nếu không, vừa
   * luyện xong lần đầu (điểm được ghi) là bước tự nhảy sang Câu hỏi, người học
   * không kịp thấy màn hình kết quả.
   */
  protected readonly step = linkedSignal<Step>(() => {
    const topic = this.topic();
    return topic && untracked(() => this.store.vocabBest(topic.id)) ? 'questions' : 'vocab';
  });

  protected readonly parts = computed(() => {
    const groups = new Map<SpeakingPart, SpeakingQuestion[]>();
    for (const question of this.topic()?.questions ?? []) {
      groups.set(question.part, [...(groups.get(question.part) ?? []), question]);
    }
    return [...groups].map(([part, questions]) => ({ part, questions }));
  });

  protected readonly copied = signal(false);

  protected go(step: Step): void {
    this.step.set(step);
    window.scrollTo({ top: 0 });
  }

  /** Chép mọi câu hỏi kèm câu trả lời đã lưu, để dán sang chỗ khác ôn lại. */
  protected async copyAll(): Promise<void> {
    const topic = this.topic();
    if (!topic) return;
    const lines = [`Topic ${topic.number}: ${topic.title.en}`];
    for (const { part, questions } of this.parts()) {
      lines.push('', `PART ${part}`);
      for (const question of questions) {
        const answer = this.store.answerOf(topic.id, question.id)?.text.trim() ?? '';
        lines.push('', `Q${question.number}. ${question.text}`, answer || '—');
      }
    }
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      /* Trình duyệt chặn clipboard: không có gì để báo thêm, nút vẫn bấm lại được. */
    }
  }
}
