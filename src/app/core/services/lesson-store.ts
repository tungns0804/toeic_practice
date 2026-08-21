import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import type { MessageKey } from '../i18n/messages';
import {
  Lesson,
  LessonIndexEntry,
  LessonKind,
  LessonSummary,
  LocalizedText,
  PARTS_OF_SPEECH,
  PartOfSpeech,
  TenseExample,
  TensePoint,
  VocabularyWord,
} from '../models/lesson.model';

const LESSONS_BASE_PATH = 'lessons/';

export type LoadStatus = 'idle' | 'loading' | 'ready' | 'error';

/** Ghép đường dẫn tài nguyên theo <base href> để chạy đúng cả khi deploy vào thư mục con. */
function assetUrl(path: string): string {
  const base = typeof document !== 'undefined' && document.baseURI ? document.baseURI : '/';
  return new URL(path, base).href;
}

/**
 * Nguồn nội dung của ứng dụng: `public/lessons/*.json` do `npm run generate` sinh
 * ra từ `data-source/`.
 *
 * Mọi thứ đọc từ file đều đi qua một hàm `sanitize*`: file JSON là dữ liệu ngoài
 * chương trình, và một trường thiếu hay sai kiểu phải làm hỏng đúng MỘT mục chứ
 * không được làm sập cả trang.
 */
@Injectable({ providedIn: 'root' })
export class LessonStore {
  private readonly http = inject(HttpClient);

  private readonly index = signal<LessonIndexEntry[]>([]);

  /** Nội dung đã tải, tránh gọi mạng lại khi quay lại cùng một mục. */
  private readonly loaded = new Map<string, Lesson>();
  private indexRequest: Promise<void> | null = null;

  readonly status = signal<LoadStatus>('idle');
  /** Khoá thông điệp lỗi, để hiển thị theo ngôn ngữ đang chọn. */
  readonly errorKey = signal<MessageKey | null>(null);

  readonly summaries = computed<LessonSummary[]>(() =>
    this.index().map((entry) => ({
      id: entry.id,
      name: entry.name,
      description: entry.description ?? '',
      kind: entry.kind,
      itemCount: entry.itemCount,
      ...(typeof entry.exampleCount === 'number' ? { exampleCount: entry.exampleCount } : {}),
      ...(typeof entry.bandFrom === 'number' ? { bandFrom: entry.bandFrom } : {}),
      ...(typeof entry.bandTo === 'number' ? { bandTo: entry.bandTo } : {}),
    })),
  );

  /** Tóm tắt của riêng một loại nội dung, theo đúng thứ tự trong index.json. */
  summariesOfKind(kind: LessonKind): LessonSummary[] {
    return this.summaries().filter((item) => item.kind === kind);
  }

  /** Tải `lessons/index.json`. Gọi nhiều lần chỉ thực sự chạy một lần. */
  loadIndex(force = false): Promise<void> {
    if (force) {
      this.indexRequest = null;
      this.loaded.clear();
    }
    this.indexRequest ??= this.fetchIndex();
    return this.indexRequest;
  }

  private async fetchIndex(): Promise<void> {
    this.status.set('loading');
    this.errorKey.set(null);

    try {
      const file = await firstValueFrom(
        this.http.get<unknown>(assetUrl(`${LESSONS_BASE_PATH}index.json`)),
      );
      this.index.set(sanitizeIndex(file));
      this.status.set('ready');
    } catch {
      this.index.set([]);
      this.status.set('error');
      this.errorKey.set('error.lessonIndex');
    }
  }

  /** Lấy nội dung đầy đủ của một mục. Trả về null nếu không tìm thấy. */
  async getLesson(id: string): Promise<Lesson | null> {
    const cached = this.loaded.get(id);
    if (cached) return cached;

    await this.loadIndex();

    const entry = this.index().find((item) => item.id === id);
    if (!entry?.file) return null;

    try {
      const raw = await firstValueFrom(
        this.http.get<unknown>(assetUrl(`${LESSONS_BASE_PATH}${entry.file}`)),
      );
      const lesson = sanitizeLesson(raw);
      if (!lesson) return null;
      this.loaded.set(id, lesson);
      return lesson;
    } catch {
      return null;
    }
  }
}

const KNOWN_KINDS: readonly LessonKind[] = ['vocabulary', 'tense', 'exercise'];

function sanitizeKind(raw: unknown): LessonKind {
  return KNOWN_KINDS.includes(raw as LessonKind) ? (raw as LessonKind) : 'vocabulary';
}

function sanitizePos(raw: unknown): PartOfSpeech {
  return PARTS_OF_SPEECH.includes(raw as PartOfSpeech) ? (raw as PartOfSpeech) : 'noun';
}

function text(raw: unknown): string {
  return typeof raw === 'string' ? raw : '';
}

/** Cặp chữ hai ngôn ngữ. Thiếu một vế thì lấy vế kia bù vào, còn hơn hiện ô trống. */
function sanitizeLocalized(raw: unknown): LocalizedText | null {
  if (!raw || typeof raw !== 'object') return null;
  const { vi, en } = raw as Record<string, unknown>;
  const viText = text(vi);
  const enText = text(en);
  if (!viText && !enText) return null;
  return { vi: viText || enText, en: enText || viText };
}

function sanitizeLocalizedList(raw: unknown): LocalizedText[] {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((item) => {
    const parsed = sanitizeLocalized(item);
    return parsed ? [parsed] : [];
  });
}

/** Danh sách chuỗi: bỏ phần tử không phải chuỗi và phần tử rỗng. */
function sanitizeTextList(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((item): item is string => typeof item === 'string' && item.length > 0);
}

function sanitizeIndex(raw: unknown): LessonIndexEntry[] {
  const lessons: unknown = (raw as { lessons?: unknown } | null)?.lessons;
  if (!Array.isArray(lessons)) return [];

  return lessons.flatMap((entry): LessonIndexEntry[] => {
    if (!entry || typeof entry !== 'object') return [];
    const { id, name, file, itemCount, description, kind, exampleCount, bandFrom, bandTo } =
      entry as Record<string, unknown>;
    if (typeof id !== 'string' || !id) return [];
    if (typeof file !== 'string' || !file) return [];
    return [
      {
        id,
        file,
        name: typeof name === 'string' && name ? name : id,
        description: text(description),
        kind: sanitizeKind(kind),
        itemCount: typeof itemCount === 'number' ? itemCount : 0,
        ...(typeof exampleCount === 'number' ? { exampleCount } : {}),
        ...(typeof bandFrom === 'number' ? { bandFrom } : {}),
        ...(typeof bandTo === 'number' ? { bandTo } : {}),
      },
    ];
  });
}

function sanitizeWords(raw: unknown): VocabularyWord[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<string>();

  return raw.flatMap((item): VocabularyWord[] => {
    if (!item || typeof item !== 'object') return [];
    const { id, word, ipa, pos, meaning, example, exampleVi } = item as Record<string, unknown>;
    if (typeof id !== 'string' || typeof word !== 'string' || typeof meaning !== 'string') {
      return [];
    }
    if (!id || !word || !meaning || seen.has(id)) return [];
    seen.add(id);
    return [
      {
        id,
        word,
        ipa: text(ipa),
        pos: sanitizePos(pos),
        meaning,
        example: text(example),
        exampleVi: text(exampleVi),
      },
    ];
  });
}

/**
 * Câu ví dụ. `seen` dùng chung cho cả nhóm thì (không phải từng thì) vì id là khoá
 * của dấu ★ — hai câu trùng id thì bấm sao ở câu này sẽ sáng luôn ở câu kia.
 */
function sanitizeExamples(raw: unknown, seen: Set<string>): TenseExample[] {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item): TenseExample[] => {
    if (!item || typeof item !== 'object') return [];
    const { id, english, vietnamese, verb, conjugated, note } = item as Record<string, unknown>;
    if (typeof id !== 'string' || typeof english !== 'string' || typeof vietnamese !== 'string') {
      return [];
    }
    if (!id || !english || !vietnamese || seen.has(id)) return [];
    seen.add(id);
    return [
      {
        id,
        english,
        vietnamese,
        verb: text(verb),
        conjugated: text(conjugated),
        note: text(note),
      },
    ];
  });
}

function sanitizeTensePoints(raw: unknown): TensePoint[] {
  if (!Array.isArray(raw)) return [];
  const seenPointIds = new Set<string>();
  const seenExampleIds = new Set<string>();

  return raw.flatMap((item): TensePoint[] => {
    if (!item || typeof item !== 'object') return [];
    const {
      id,
      name,
      summary,
      affirmative,
      negative,
      question,
      usages,
      signals,
      notes,
      examples,
    } = item as Record<string, unknown>;

    if (typeof id !== 'string' || !id || seenPointIds.has(id)) return [];
    const parsedName = sanitizeLocalized(name);
    if (!parsedName) return [];

    const parsedExamples = sanitizeExamples(examples, seenExampleIds);
    // Thì không còn ví dụ nào thì không luyện được, và trang lý thuyết cũng cụt —
    // bỏ hẳn còn hơn hiện ra một mục rỗng.
    if (parsedExamples.length === 0) return [];
    seenPointIds.add(id);

    return [
      {
        id,
        name: parsedName,
        summary: sanitizeLocalized(summary) ?? { vi: '', en: '' },
        affirmative: text(affirmative),
        negative: text(negative),
        question: text(question),
        usages: sanitizeLocalizedList(usages),
        signals: sanitizeTextList(signals),
        notes: sanitizeLocalizedList(notes),
        examples: parsedExamples,
      },
    ];
  });
}

/** Số mục của một bài, tuỳ loại mà đếm mảng nào. */
function countItems(lesson: Pick<Lesson, 'kind' | 'words' | 'tensePoints'>): number {
  // Nhóm thì đếm theo số THÌ chứ không theo số câu ví dụ: "4 thì" là thứ người học
  // nhìn vào để biết bài nặng hay nhẹ, còn số ví dụ chỉ là hệ quả.
  return lesson.kind === 'tense' ? lesson.tensePoints.length : lesson.words.length;
}

function sanitizeLesson(raw: unknown): Lesson | null {
  if (!raw || typeof raw !== 'object') return null;
  const { id, name, description, kind, words, tensePoints, bandFrom, bandTo } = raw as Record<
    string,
    unknown
  >;
  if (typeof id !== 'string' || !id) return null;

  const lessonKind = sanitizeKind(kind);
  const parsedWords = lessonKind === 'vocabulary' ? sanitizeWords(words) : [];
  const parsedPoints = lessonKind === 'tense' ? sanitizeTensePoints(tensePoints) : [];
  const itemCount = countItems({ kind: lessonKind, words: parsedWords, tensePoints: parsedPoints });
  if (itemCount === 0) return null;

  return {
    id,
    name: typeof name === 'string' && name ? name : id,
    description: text(description),
    kind: lessonKind,
    itemCount,
    ...(typeof bandFrom === 'number' ? { bandFrom } : {}),
    ...(typeof bandTo === 'number' ? { bandTo } : {}),
    words: parsedWords,
    tensePoints: parsedPoints,
  };
}
