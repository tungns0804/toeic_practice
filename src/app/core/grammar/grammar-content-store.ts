import { Injectable } from '@angular/core';

import type { GrammarLessonContent } from './grammar.model';
import { GRAMMAR_LESSON_LOADERS } from './lesson-loaders';

/**
 * Tải nội dung từng bài theo yêu cầu và giữ lại trong bộ nhớ.
 *
 * Giữ lời hứa (Promise) chứ không giữ kết quả: bấm hai bài liền nhau lúc chunk
 * đầu chưa về thì lần bấm thứ hai dùng lại đúng lời hứa đang chờ, không tải đôi.
 * Tải hỏng thì bỏ lời hứa đó đi để lần sau được thử lại.
 */
@Injectable({ providedIn: 'root' })
export class GrammarContentStore {
  private readonly cache = new Map<string, Promise<GrammarLessonContent>>();

  load(id: string): Promise<GrammarLessonContent> {
    const cached = this.cache.get(id);
    if (cached) return cached;

    const loader = GRAMMAR_LESSON_LOADERS[id];
    if (!loader) return Promise.reject(new Error(`Unknown grammar lesson: ${id}`));

    const pending = loader().then((module) => module.LESSON);
    pending.catch(() => this.cache.delete(id));
    this.cache.set(id, pending);
    return pending;
  }
}
