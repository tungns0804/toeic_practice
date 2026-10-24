import { Injectable, signal } from '@angular/core';

import { readJson, writeJson } from '../services/local-storage';

const STORAGE_KEY = 'toeic-practice:speaking';

export interface SavedAnswer {
  readonly text: string;
  /** Thời điểm lưu (ms kể từ epoch), để hiện "Đã lưu lúc 14:32". */
  readonly savedAt: number;
}

export interface VocabScore {
  readonly correct: number;
  readonly total: number;
}

interface SpeakingState {
  /** { [topicId]: { [questionId]: câu trả lời } } */
  answers: Record<string, Record<string, SavedAnswer>>;
  /** Điểm cao nhất của phần luyện từ, theo chủ đề. */
  vocabBest: Record<string, VocabScore>;
}

/**
 * Câu trả lời người học tự viết cho từng câu hỏi luyện nói, và điểm luyện từ.
 *
 * Khác với kết quả luyện tập trắc nghiệm (không lưu), câu trả lời ở đây là BÀI
 * LÀM của người học — mất nó là mất công sức thật — nên được ghi xuống
 * localStorage ngay khi lưu.
 */
@Injectable({ providedIn: 'root' })
export class SpeakingStore {
  private readonly state = signal<SpeakingState>(sanitize(readJson<unknown>(STORAGE_KEY, {})));

  answerOf(topicId: string, questionId: string): SavedAnswer | null {
    return this.state().answers[topicId]?.[questionId] ?? null;
  }

  /** Số câu đã có câu trả lời (không rỗng) của một chủ đề. */
  answeredCount(topicId: string): number {
    return Object.values(this.state().answers[topicId] ?? {}).filter((a) => a.text.trim()).length;
  }

  vocabBest(topicId: string): VocabScore | null {
    return this.state().vocabBest[topicId] ?? null;
  }

  /** Ghi câu trả lời. Chuỗi rỗng (sau khi bỏ khoảng trắng) nghĩa là xoá. */
  saveAnswer(topicId: string, questionId: string, text: string): boolean {
    return this.update((current) => {
      const topic = { ...(current.answers[topicId] ?? {}) };
      if (text.trim()) {
        topic[questionId] = { text, savedAt: Date.now() };
      } else {
        delete topic[questionId];
      }
      return { ...current, answers: { ...current.answers, [topicId]: topic } };
    });
  }

  /** Chỉ giữ điểm cao nhất, so theo tỉ lệ đúng. */
  recordVocabScore(topicId: string, score: VocabScore): void {
    const best = this.vocabBest(topicId);
    if (best && best.correct / best.total >= score.correct / score.total) return;
    this.update((current) => ({
      ...current,
      vocabBest: { ...current.vocabBest, [topicId]: score },
    }));
  }

  private update(mutate: (current: SpeakingState) => SpeakingState): boolean {
    const next = mutate(this.state());
    this.state.set(next);
    return writeJson(STORAGE_KEY, next);
  }
}

/** Bảo vệ trước dữ liệu localStorage hỏng hoặc do phiên bản cũ ghi ra. */
function sanitize(raw: unknown): SpeakingState {
  const state: SpeakingState = { answers: {}, vocabBest: {} };
  if (!isRecord(raw)) return state;

  if (isRecord(raw['answers'])) {
    for (const [topicId, topic] of Object.entries(raw['answers'])) {
      if (!isRecord(topic)) continue;
      const clean: Record<string, SavedAnswer> = {};
      for (const [questionId, answer] of Object.entries(topic)) {
        if (isRecord(answer) && typeof answer['text'] === 'string' && answer['text'].trim()) {
          const savedAt = typeof answer['savedAt'] === 'number' ? answer['savedAt'] : 0;
          clean[questionId] = { text: answer['text'], savedAt };
        }
      }
      state.answers[topicId] = clean;
    }
  }

  if (isRecord(raw['vocabBest'])) {
    for (const [topicId, score] of Object.entries(raw['vocabBest'])) {
      if (
        isRecord(score) &&
        typeof score['correct'] === 'number' &&
        typeof score['total'] === 'number' &&
        score['total'] > 0
      ) {
        state.vocabBest[topicId] = { correct: score['correct'], total: score['total'] };
      }
    }
  }
  return state;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
