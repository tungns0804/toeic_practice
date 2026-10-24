import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { GrammarContentStore } from '../../core/grammar/grammar-content-store';
import { GRAMMAR_LESSONS, findGrammarLesson } from '../../core/grammar/grammar-catalog';
import {
  GrammarAttemptOutcome,
  GrammarLessonProgress,
  GrammarProgressStore,
  GrammarRun,
} from '../../core/grammar/grammar-progress-store';
import {
  GRAMMAR_PASS_RATIO,
  GRAMMAR_QUESTIONS_PER_LESSON,
  GRAMMAR_STEPS,
  GrammarCalloutKind,
  GrammarCell,
  GrammarLessonContent,
  GrammarStep,
} from '../../core/grammar/grammar.model';
import { ActivityStore } from '../../core/activity/activity-store';
import { LanguageStore } from '../../core/i18n/language-store';
import type { MessageKey } from '../../core/i18n/messages';
import { LocalizedText, localized } from '../../core/models/lesson.model';
import { shuffle } from '../../core/utils/random';
import { GcIcon, GcIconName } from '../grammar-shared/gc-icon';
import { GrammarSidebar } from '../grammar-shared/grammar-sidebar';
import { ProgressRing } from '../grammar-shared/progress-ring';
import { RichText } from '../grammar-shared/rich-text';
import { GRAMMAR_STEP_LABEL } from '../grammar-shared/step-labels';

const LETTERS = ['A', 'B', 'C', 'D'] as const;
const BLANK = '-------';

const CALLOUT: Record<GrammarCalloutKind, { icon: GcIconName; labelKey: MessageKey }> = {
  tip: { icon: 'lightbulb', labelKey: 'grammar.callout.tip' },
  warning: { icon: 'triangle-alert', labelKey: 'grammar.callout.warning' },
  info: { icon: 'info', labelKey: 'grammar.callout.info' },
};

/** Tách câu hỏi thành phần trước và sau chỗ trống, để vẽ chỗ trống thành một ô riêng. */
function splitBlank(sentence: string): [string, string] {
  const at = sentence.indexOf(BLANK);
  return at < 0 ? [sentence, ''] : [sentence.slice(0, at), sentence.slice(at + BLANK.length)];
}

/** Lượt mới: trộn thứ tự câu và thứ tự lựa chọn của từng câu. */
function createRun(lesson: GrammarLessonContent): GrammarRun {
  const order = shuffle(lesson.questions.map((_, index) => index));
  return {
    order,
    optionOrders: order.map(() => shuffle([0, 1, 2, 3])),
    answers: order.map(() => null),
    current: 0,
    startedAt: new Date().toISOString(),
  };
}

/** Lượt đã lưu có còn khớp với nội dung bài hiện tại không (nội dung có thể đã được sửa). */
function fitsLesson(run: GrammarRun | null, lesson: GrammarLessonContent): run is GrammarRun {
  const count = lesson.questions.length;
  return (
    run !== null &&
    run.order.length === count &&
    new Set(run.order).size === count &&
    run.order.every((index) => index < count) &&
    run.optionOrders.every((order) => order.length === 4 && new Set(order).size === 4 && order.every((i) => i < 4)) &&
    run.answers.every((answer) => answer === null || answer < 4)
  );
}

/** Bước mở ra khi vào bài: đang làm dở thì về đúng câu đó; đã nộp bài thì xem kết quả. */
function initialStep(record: GrammarLessonProgress): GrammarStep {
  if (record.draft) return 'practice';
  if (record.lastRun && record.attemptCount > 0) return 'result';
  return GRAMMAR_STEPS[Math.min(record.maxStep, 2)];
}

/**
 * Trang một bài học (`/grammar/:id`): Ví dụ lỗi sai → Lý thuyết → Luyện tập → Kết quả.
 *
 * Mọi thứ người học làm ở đây đều được lưu qua `GrammarProgressStore` ngay lúc xảy
 * ra: mở tới bước nào, từng câu trả lời của lượt đang làm, kết quả mỗi lần nộp. Tải
 * lại trang hay đóng máy giữa chừng thì quay lại vẫn đúng chỗ cũ.
 */
@Component({
  selector: 'app-grammar-lesson',
  imports: [RouterLink, GcIcon, GrammarSidebar, ProgressRing, RichText],
  templateUrl: './grammar-lesson.html',
  styleUrls: ['./grammar-lesson.css', './grammar-lesson-practice.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onKeydown($event)' },
})
export class GrammarLesson {
  private readonly route = inject(ActivatedRoute);
  private readonly progress = inject(GrammarProgressStore);
  private readonly activity = inject(ActivityStore);
  private readonly contentStore = inject(GrammarContentStore);
  private readonly lang = inject(LanguageStore);

  readonly t = this.lang.t.bind(this.lang);
  readonly letters = LETTERS;
  readonly questionsPerLesson = GRAMMAR_QUESTIONS_PER_LESSON;
  readonly callout = CALLOUT;

  readonly lessonId = signal('');
  readonly content = signal<GrammarLessonContent | null>(null);
  readonly status = signal<'loading' | 'ready' | 'error'>('loading');

  readonly entry = computed(() => findGrammarLesson(this.lessonId()) ?? null);
  readonly record = computed(() => this.progress.lesson(this.lessonId()));
  readonly unlocked = computed(() => {
    const entry = this.entry();
    return entry ? this.progress.isUnlocked(entry) : false;
  });

  readonly previousEntry = computed(() => {
    const entry = this.entry();
    return entry && entry.index > 0 ? GRAMMAR_LESSONS[entry.index - 1] : null;
  });

  readonly nextEntry = computed(() => {
    const entry = this.entry();
    return entry ? (GRAMMAR_LESSONS[entry.index + 1] ?? null) : null;
  });

  readonly nextUnlocked = computed(() => {
    const next = this.nextEntry();
    return next ? this.progress.isUnlocked(next) : false;
  });

  readonly title = computed(() => {
    const entry = this.entry();
    return entry ? localized(entry.meta.title, this.lang.language()) : '';
  });

  readonly passNeeded = computed(() =>
    Math.ceil(GRAMMAR_PASS_RATIO * (this.content()?.questions.length ?? GRAMMAR_QUESTIONS_PER_LESSON)),
  );

  // ── Bước ────────────────────────────────────────────────────────────────

  readonly step = signal<GrammarStep>('mistakes');
  readonly stepIndex = computed(() => GRAMMAR_STEPS.indexOf(this.step()));

  readonly steps = computed(() => {
    const record = this.record();
    const active = this.stepIndex();
    return GRAMMAR_STEPS.map((id, index) => ({
      id,
      number: index + 1,
      labelKey: GRAMMAR_STEP_LABEL[id],
      active: index === active,
      done: id === 'result' ? record.passed : index < record.maxStep,
      reachable: this.canOpen(id, record),
    }));
  });

  // ── Luyện tập ───────────────────────────────────────────────────────────

  /** Lượt đang làm (chưa nộp). */
  readonly run = signal<GrammarRun | null>(null);
  /** Kết quả của lần nộp VỪA XONG trong phiên này — để nói "+30 XP", "Kỷ lục mới". */
  readonly outcome = signal<GrammarAttemptOutcome | null>(null);
  /** Lượt vừa được khôi phục từ lần trước (hiện một dòng nhắc nhỏ). */
  readonly resumed = signal(false);

  readonly current = computed(() => {
    const run = this.run();
    const lesson = this.content();
    if (!run || !lesson) return null;
    const pos = run.current;
    const question = lesson.questions[run.order[pos]];
    const chosen = run.answers[pos];
    const [before, after] = splitBlank(question.sentence);
    const options = run.optionOrders[pos].map((original, display) => ({
      letter: LETTERS[display],
      text: question.options[original],
      original,
      isCorrect: original === question.answer,
      isChosen: chosen === original,
    }));
    return {
      pos,
      number: pos + 1,
      total: run.order.length,
      question,
      before,
      after,
      options,
      answered: chosen !== null,
      correct: chosen === question.answer,
      chosenText: chosen === null ? '' : question.options[chosen],
      correctOption: options.find((option) => option.isCorrect)!,
    };
  });

  /** Bọc trong mảng một phần tử để `@for … track pos` dựng lại khối câu hỏi mỗi khi đổi câu. */
  readonly currentList = computed(() => {
    const current = this.current();
    return current ? [current] : [];
  });

  /** Chấm tròn cho từng câu trong lượt: chưa làm / đúng / sai / đang xem. */
  readonly dots = computed(() => {
    const run = this.run();
    const lesson = this.content();
    if (!run || !lesson) return [];
    const firstOpen = this.firstUnanswered(run);
    return run.answers.map((answer, pos) => ({
      pos,
      number: pos + 1,
      state: answer === null ? 'todo' : answer === lesson.questions[run.order[pos]].answer ? 'right' : 'wrong',
      current: pos === run.current,
      reachable: answer !== null || pos === firstOpen,
    }));
  });

  readonly tally = computed(() => {
    const dots = this.dots();
    return {
      right: dots.filter((dot) => dot.state === 'right').length,
      wrong: dots.filter((dot) => dot.state === 'wrong').length,
    };
  });

  readonly allAnswered = computed(() => this.run()?.answers.every((answer) => answer !== null) ?? false);

  // ── Kết quả ─────────────────────────────────────────────────────────────

  readonly review = computed(() => {
    const lesson = this.content();
    const run = this.record().lastRun;
    if (!lesson || !run || !fitsLesson(run, lesson)) return null;
    const items = run.order.map((index, pos) => {
      const question = lesson.questions[index];
      const chosen = run.answers[pos];
      const [before, after] = splitBlank(question.sentence);
      return {
        number: pos + 1,
        question,
        before,
        after,
        chosenText: chosen === null ? null : question.options[chosen],
        correctText: question.options[question.answer],
        isCorrect: chosen === question.answer,
      };
    });
    const correct = items.filter((item) => item.isCorrect).length;
    return {
      items,
      correct,
      total: items.length,
      percent: Math.round((correct / items.length) * 100),
      passed: correct / items.length >= GRAMMAR_PASS_RATIO,
    };
  });

  /** Lịch sử các lần làm, mới nhất lên đầu, kèm số thứ tự thật của từng lần. */
  readonly history = computed(() => {
    const record = this.record();
    const offset = record.attemptCount - record.history.length;
    const format = new Intl.DateTimeFormat(this.lang.language() === 'vi' ? 'vi-VN' : 'en-GB', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
    return record.history
      .map((attempt, index) => ({
        number: offset + index + 1,
        date: format.format(new Date(attempt.at)),
        correct: attempt.correct,
        total: attempt.total,
        passed: attempt.correct / attempt.total >= GRAMMAR_PASS_RATIO,
        duration: this.formatDuration(attempt.durationMs),
        best: attempt.correct === record.bestCorrect,
      }))
      .reverse();
  });

  readonly historyTrimmed = computed(() => this.record().attemptCount > this.record().history.length);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('id') ?? '';
      const record = this.progress.lesson(id);
      this.lessonId.set(id);
      this.content.set(null);
      this.outcome.set(null);
      this.run.set(record.draft);
      this.resumed.set(record.draft !== null && record.draft.answers.some((answer) => answer !== null));
      this.step.set(initialStep(record));
      void this.load(id);
    });
  }

  // ── Nạp nội dung ─────────────────────────────────────────────────────────

  async load(id: string): Promise<void> {
    const entry = findGrammarLesson(id);
    if (!entry || !this.progress.isUnlocked(entry)) {
      this.status.set('ready');
      return;
    }
    this.status.set('loading');
    try {
      const lesson = await this.contentStore.load(id);
      if (this.lessonId() !== id) return; // đã chuyển sang bài khác trong lúc chờ
      // Nội dung bài có thể đã được sửa sau lần làm trước (thêm/bớt câu): lượt cũ
      // không còn khớp thì bỏ đi, nếu không các câu trả lời sẽ trỏ nhầm câu hỏi.
      if (this.run() && !fitsLesson(this.run(), lesson)) {
        this.run.set(null);
        this.resumed.set(false);
        this.progress.discardDraft(id);
        if (this.step() === 'practice') this.step.set('theory');
      }
      this.content.set(lesson);
      this.status.set('ready');
    } catch {
      if (this.lessonId() === id) this.status.set('error');
    }
  }

  retry(): void {
    void this.load(this.lessonId());
  }

  // ── Điều hướng giữa các bước ─────────────────────────────────────────────

  /**
   * Bước nào bấm vào được: hai bước đọc (lỗi sai, lý thuyết) luôn mở — người đã
   * vững có thể đi thẳng vào lý thuyết; Luyện tập mở khi đã bắt đầu một lượt hoặc
   * đã từng tới đó; Kết quả mở khi đã nộp bài ít nhất một lần.
   */
  private canOpen(step: GrammarStep, record: GrammarLessonProgress): boolean {
    switch (step) {
      case 'mistakes':
      case 'theory':
        return true;
      case 'practice':
        return record.maxStep >= 2 || this.run() !== null;
      case 'result':
        return record.lastRun !== null && record.attemptCount > 0;
    }
  }

  goToStep(step: GrammarStep): void {
    if (!this.canOpen(step, this.record())) return;
    this.step.set(step);
    this.progress.reachStep(this.lessonId(), Math.min(GRAMMAR_STEPS.indexOf(step), 2));
    this.scrollToTop();
  }

  /** Vào bước luyện tập: tiếp tục lượt đang dở nếu có, không thì bắt đầu lượt mới. */
  startPractice(): void {
    if (!this.run()) this.newRun();
    this.goToStep('practice');
  }

  restart(): void {
    this.newRun();
    this.outcome.set(null);
    this.goToStep('practice');
  }

  private newRun(): void {
    const lesson = this.content();
    if (!lesson) return;
    const run = createRun(lesson);
    this.run.set(run);
    this.resumed.set(false);
    this.progress.saveDraft(this.lessonId(), run);
  }

  // ── Trả lời câu hỏi ─────────────────────────────────────────────────────

  choose(original: number): void {
    const run = this.run();
    if (!run || run.answers[run.current] !== null) return;
    const answers = [...run.answers];
    answers[run.current] = original;
    this.resumed.set(false);
    this.updateRun({ ...run, answers });
    // Mỗi câu chỉ trả lời được một lần, nên đây cũng là lúc nó chấm xong: đếm vào
    // chuỗi ngày học như câu ở mọi khu khác.
    const lesson = this.content();
    if (lesson) this.activity.recordAnswer(original === lesson.questions[run.order[run.current]].answer);
  }

  goToQuestion(pos: number): void {
    const run = this.run();
    if (!run || pos < 0 || pos >= run.order.length) return;
    if (run.answers[pos] === null && pos !== this.firstUnanswered(run)) return;
    this.updateRun({ ...run, current: pos });
  }

  /** Sang câu tiếp: câu kế tiếp nếu đã trả lời, không thì câu đầu tiên còn bỏ trống. */
  nextQuestion(): void {
    const run = this.run();
    if (!run || run.answers[run.current] === null) return;
    const next = run.current + 1 < run.order.length ? run.current + 1 : this.firstUnanswered(run);
    if (next >= 0) this.updateRun({ ...run, current: next });
  }

  submit(): void {
    const run = this.run();
    const lesson = this.content();
    if (!run || !lesson || !this.allAnswered()) return;
    const correct = run.order.filter((index, pos) => run.answers[pos] === lesson.questions[index].answer).length;
    const outcome = this.progress.recordAttempt(this.lessonId(), run, correct, run.order.length);
    this.outcome.set(outcome);
    this.run.set(null);
    this.resumed.set(false);
    this.step.set('result');
    this.scrollToTop();
  }

  private updateRun(run: GrammarRun): void {
    this.run.set(run);
    this.progress.saveDraft(this.lessonId(), run);
  }

  private firstUnanswered(run: GrammarRun): number {
    return run.answers.findIndex((answer) => answer === null);
  }

  /**
   * Phím tắt khi đang làm bài: 1–4 hoặc A–D chọn đáp án, Enter sang câu tiếp.
   *
   * Bỏ qua khi đang giữ phím bổ trợ (Ctrl+D là đánh dấu trang, không phải chọn D)
   * và khi Enter rơi vào một nút đang có focus — nút đó tự xử lý cú bấm, xử lý thêm
   * ở đây là nhảy hai câu một lúc.
   */
  onKeydown(event: KeyboardEvent): void {
    if (this.step() !== 'practice' || !this.run()) return;
    if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
    const target = event.target as HTMLElement | null;
    if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

    const current = this.current();
    if (!current) return;

    if (event.key === 'Enter') {
      if (target?.tagName === 'BUTTON' || target?.tagName === 'A') return;
      if (!current.answered) return;
      event.preventDefault();
      if (this.allAnswered() && current.pos === current.total - 1) this.submit();
      else this.nextQuestion();
      return;
    }

    const key = event.key.toLowerCase();
    const display = ['1', '2', '3', '4'].indexOf(key) >= 0 ? Number(key) - 1 : ['a', 'b', 'c', 'd'].indexOf(key);
    if (display < 0 || current.answered) return;
    event.preventDefault();
    this.choose(current.options[display].original);
  }

  // ── Tiện ích cho template ────────────────────────────────────────────────

  tx(text: LocalizedText): string {
    return localized(text, this.lang.language());
  }

  cell(value: GrammarCell): string {
    return typeof value === 'string' ? value : localized(value, this.lang.language());
  }

  private formatDuration(ms: number): string {
    const total = Math.max(1, Math.round(ms / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return minutes > 0
      ? this.t('result.minutesSeconds', { minutes, seconds })
      : this.t('result.seconds', { seconds });
  }

  private scrollToTop(): void {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  }
}
