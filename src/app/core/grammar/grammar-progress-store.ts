import { Injectable, computed, signal } from '@angular/core';

import { readJson, removeKey, writeJson } from '../services/local-storage';
import { GRAMMAR_LESSONS, GrammarLessonEntry } from './grammar-catalog';
import { GRAMMAR_PASS_RATIO, GRAMMAR_STEPS } from './grammar.model';

const STORAGE_KEY = 'toeic-practice:grammar-progress';

/** Giữ tối đa bấy nhiêu lần làm gần nhất mỗi bài. Số lần làm thì vẫn đếm đủ. */
const HISTORY_LIMIT = 30;

/** XP cho mỗi câu đúng, và thưởng thêm cho lần đầu tiên đạt một bài. */
const XP_PER_CORRECT = 10;
const XP_FIRST_PASS_BONUS = 50;

/** Một lần làm phần luyện tập đã nộp xong. */
export interface GrammarAttempt {
  /** Thời điểm nộp, dạng ISO. */
  at: string;
  correct: number;
  total: number;
  durationMs: number;
}

/**
 * Một lượt luyện tập: thứ tự câu, thứ tự lựa chọn trong từng câu, và câu trả lời.
 *
 * Lưu cả thứ tự đã trộn chứ không chỉ câu trả lời: tải lại trang giữa chừng thì
 * phải hiện lại ĐÚNG những lựa chọn ở đúng chỗ cũ, nếu không người học thấy đáp
 * án mình vừa chọn nhảy sang ô khác.
 */
export interface GrammarRun {
  /** Vị trí trong lượt → chỉ số câu trong bài. */
  order: number[];
  /** Với từng vị trí trong lượt: vị trí hiển thị → chỉ số lựa chọn gốc. */
  optionOrders: number[][];
  /** Với từng vị trí trong lượt: chỉ số lựa chọn GỐC đã chọn, null = chưa trả lời. */
  answers: (number | null)[];
  /** Câu đang làm (vị trí trong lượt). */
  current: number;
  startedAt: string;
}

export interface GrammarLessonProgress {
  /** Bước xa nhất đã mở, theo chỉ số trong GRAMMAR_STEPS. */
  maxStep: number;
  /** Tổng số lần đã nộp bài — đếm đủ kể cả khi lịch sử bị cắt bớt. */
  attemptCount: number;
  /** Các lần làm gần nhất, cũ trước mới sau. */
  history: GrammarAttempt[];
  bestCorrect: number;
  passed: boolean;
  passedAt: string | null;
  /** Lượt đang làm dở, null nếu không có. */
  draft: GrammarRun | null;
  /** Lượt vừa nộp gần nhất, để bước Kết quả vẽ lại được sau khi tải lại trang. */
  lastRun: GrammarRun | null;
}

interface GrammarProgressState {
  lessons: Record<string, GrammarLessonProgress>;
  xp: number;
}

/** Kết quả của một lần nộp bài, để màn hình Kết quả nói được chuyện gì vừa xảy ra. */
export interface GrammarAttemptOutcome {
  attemptNumber: number;
  correct: number;
  total: number;
  passed: boolean;
  /** Lần này là lần ĐẦU TIÊN bài được tính đạt — bài kế tiếp vừa mở khoá. */
  firstPass: boolean;
  isNewBest: boolean;
  xpGained: number;
}

const EMPTY_LESSON: GrammarLessonProgress = {
  maxStep: 0,
  attemptCount: 0,
  history: [],
  bestCorrect: 0,
  passed: false,
  passedAt: null,
  draft: null,
  lastRun: null,
};

/**
 * Tiến độ khoá ngữ pháp, lưu trong localStorage.
 *
 * Khác với ba khu luyện tập còn lại (mỗi lần luyện là một lần mới, không lưu gì
 * ngoài ★), khoá ngữ pháp là một LỘ TRÌNH: bài sau chỉ mở khi bài trước đạt, nên
 * bắt buộc phải nhớ bài nào đã đạt. Đã nhớ thì nhớ luôn những thứ người học muốn
 * xem lại: đã làm mỗi bài bao nhiêu lần, điểm từng lần, điểm cao nhất, đang dừng ở
 * bước nào, lượt nào đang làm dở.
 */
@Injectable({ providedIn: 'root' })
export class GrammarProgressStore {
  private readonly state = signal<GrammarProgressState>(sanitize(readJson<unknown>(STORAGE_KEY, null)));

  readonly xp = computed(() => this.state().xp);

  readonly completedCount = computed(
    () => GRAMMAR_LESSONS.filter((entry) => this.state().lessons[entry.id]?.passed).length,
  );

  readonly totalCount = GRAMMAR_LESSONS.length;

  readonly percent = computed(() => Math.round((this.completedCount() / this.totalCount) * 100));

  /** Tổng số lần nộp bài trên cả khoá. */
  readonly totalAttempts = computed(() =>
    Object.values(this.state().lessons).reduce((sum, lesson) => sum + lesson.attemptCount, 0),
  );

  /**
   * Bài nên học tiếp: bài đầu tiên chưa đạt theo thứ tự lộ trình.
   * null khi đã đạt hết cả khoá.
   */
  readonly nextLesson = computed<GrammarLessonEntry | null>(
    () => GRAMMAR_LESSONS.find((entry) => !this.state().lessons[entry.id]?.passed) ?? null,
  );

  /**
   * Số bài đã ĐẠT trong hôm nay (có ít nhất một lần nộp đạt, tính theo giờ máy) —
   * mục "Đạt một bài ngữ pháp" trong kế hoạch hôm nay ở trang Hôm nay.
   */
  readonly passedToday = computed(() => {
    const today = dayKey(new Date());
    return Object.values(this.state().lessons).filter((lesson) =>
      lesson.history.some(
        (attempt) =>
          dayKey(new Date(attempt.at)) === today && attempt.correct / attempt.total >= GRAMMAR_PASS_RATIO,
      ),
    ).length;
  });

  lesson(id: string): GrammarLessonProgress {
    return this.state().lessons[id] ?? EMPTY_LESSON;
  }

  isPassed(id: string): boolean {
    return this.lesson(id).passed;
  }

  /**
   * Bài đã mở chưa: bài đầu tiên luôn mở, bài khác mở khi bài liền trước đã đạt.
   *
   * Bài nào đã có tiến độ thì cũng coi là mở, kể cả khi bài trước chưa đạt: điều đó
   * chỉ xảy ra khi mục lục được sắp xếp lại, và khoá mất một bài người học đã làm
   * dở là phạt họ vì một thay đổi họ không gây ra.
   */
  isUnlocked(entry: GrammarLessonEntry): boolean {
    if (entry.index === 0) return true;
    const previous = GRAMMAR_LESSONS[entry.index - 1];
    if (this.isPassed(previous.id)) return true;
    const own = this.lesson(entry.id);
    return own.attemptCount > 0 || own.maxStep > 0;
  }

  /** Số bài đã đạt trong một chương. */
  passedInChapter(chapterId: string): number {
    return GRAMMAR_LESSONS.filter(
      (entry) => entry.chapter.id === chapterId && this.isPassed(entry.id),
    ).length;
  }

  /** Ghi nhận người học đã mở tới bước `step` (chỉ số trong GRAMMAR_STEPS). */
  reachStep(id: string, step: number): void {
    const clamped = Math.max(0, Math.min(step, GRAMMAR_STEPS.length - 1));
    if (this.lesson(id).maxStep >= clamped) return;
    this.patchLesson(id, (lesson) => ({ ...lesson, maxStep: clamped }));
  }

  saveDraft(id: string, run: GrammarRun): void {
    this.patchLesson(id, (lesson) => ({ ...lesson, draft: run }));
  }

  discardDraft(id: string): void {
    if (!this.lesson(id).draft) return;
    this.patchLesson(id, (lesson) => ({ ...lesson, draft: null }));
  }

  /** Nộp bài: ghi lần làm, cộng XP, đánh dấu ngày học, xét đạt. */
  recordAttempt(id: string, run: GrammarRun, correct: number, total: number): GrammarAttemptOutcome {
    const before = this.lesson(id);
    const now = new Date();
    const passed = total > 0 && correct / total >= GRAMMAR_PASS_RATIO;
    const firstPass = passed && !before.passed;
    const isNewBest = before.attemptCount === 0 || correct > before.bestCorrect;
    const xpGained = correct * XP_PER_CORRECT + (firstPass ? XP_FIRST_PASS_BONUS : 0);

    const attempt: GrammarAttempt = {
      at: now.toISOString(),
      correct,
      total,
      durationMs: Math.max(0, now.getTime() - Date.parse(run.startedAt)),
    };

    this.state.update((state) => {
      const lesson = state.lessons[id] ?? EMPTY_LESSON;
      const next: GrammarLessonProgress = {
        ...lesson,
        maxStep: GRAMMAR_STEPS.length - 1,
        attemptCount: lesson.attemptCount + 1,
        history: [...lesson.history, attempt].slice(-HISTORY_LIMIT),
        bestCorrect: Math.max(lesson.bestCorrect, correct),
        passed: lesson.passed || passed,
        passedAt: lesson.passedAt ?? (passed ? attempt.at : null),
        draft: null,
        lastRun: run,
      };
      return {
        lessons: { ...state.lessons, [id]: next },
        xp: state.xp + xpGained,
      };
    });
    this.persist();

    return {
      attemptNumber: before.attemptCount + 1,
      correct,
      total,
      passed,
      firstPass,
      isNewBest,
      xpGained,
    };
  }

  /** Xoá sạch tiến độ cả khoá. */
  resetAll(): void {
    this.state.set(emptyState());
    removeKey(STORAGE_KEY);
  }

  private patchLesson(id: string, mutate: (lesson: GrammarLessonProgress) => GrammarLessonProgress): void {
    this.state.update((state) => ({
      ...state,
      lessons: { ...state.lessons, [id]: mutate(state.lessons[id] ?? EMPTY_LESSON) },
    }));
    this.persist();
  }

  private persist(): void {
    writeJson(STORAGE_KEY, this.state());
  }
}

/** Ngày theo giờ MÁY người học, không theo UTC: học lúc 6 giờ sáng ở Việt Nam vẫn là "hôm nay". */
function dayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function emptyState(): GrammarProgressState {
  return { lessons: {}, xp: 0 };
}

// ── Đọc dữ liệu cũ một cách phòng thủ ─────────────────────────────────────
// localStorage có thể bị sửa tay, bị phiên bản cũ ghi ra, hoặc hỏng giữa chừng.
// Trường nào sai kiểu thì bỏ trường đó, không để cả khoá học sập theo.

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function toCount(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
}

function isIndexList(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((item) => Number.isInteger(item) && item >= 0);
}

function sanitizeRun(raw: unknown): GrammarRun | null {
  if (!isRecord(raw)) return null;
  const { order, optionOrders, answers, current, startedAt } = raw;
  if (!isIndexList(order) || !Array.isArray(optionOrders) || !Array.isArray(answers)) return null;
  if (optionOrders.length !== order.length || answers.length !== order.length) return null;
  if (!optionOrders.every(isIndexList)) return null;
  if (!answers.every((item) => item === null || (Number.isInteger(item) && item >= 0))) return null;
  if (typeof startedAt !== 'string' || Number.isNaN(Date.parse(startedAt))) return null;
  return {
    order,
    optionOrders: optionOrders as number[][],
    answers: answers as (number | null)[],
    current: Math.min(toCount(current), Math.max(0, order.length - 1)),
    startedAt,
  };
}

function sanitizeAttempt(raw: unknown): GrammarAttempt | null {
  if (!isRecord(raw) || typeof raw['at'] !== 'string') return null;
  const total = toCount(raw['total']);
  if (total === 0) return null;
  return {
    at: raw['at'],
    correct: Math.min(toCount(raw['correct']), total),
    total,
    durationMs: toCount(raw['durationMs']),
  };
}

function sanitizeLesson(raw: unknown): GrammarLessonProgress | null {
  if (!isRecord(raw)) return null;
  const history = Array.isArray(raw['history'])
    ? raw['history'].map(sanitizeAttempt).filter((item): item is GrammarAttempt => item !== null)
    : [];
  return {
    maxStep: Math.min(toCount(raw['maxStep']), GRAMMAR_STEPS.length - 1),
    attemptCount: Math.max(toCount(raw['attemptCount']), history.length),
    history: history.slice(-HISTORY_LIMIT),
    bestCorrect: toCount(raw['bestCorrect']),
    passed: raw['passed'] === true,
    passedAt: typeof raw['passedAt'] === 'string' ? raw['passedAt'] : null,
    draft: sanitizeRun(raw['draft']),
    lastRun: sanitizeRun(raw['lastRun']),
  };
}

function sanitize(raw: unknown): GrammarProgressState {
  if (!isRecord(raw)) return emptyState();
  const lessons: Record<string, GrammarLessonProgress> = {};
  if (isRecord(raw['lessons'])) {
    for (const [id, value] of Object.entries(raw['lessons'])) {
      const lesson = sanitizeLesson(value);
      if (lesson) lessons[id] = lesson;
    }
  }
  return { lessons, xp: toCount(raw['xp']) };
}
