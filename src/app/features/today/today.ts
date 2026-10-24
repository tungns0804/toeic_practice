import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ActivityStore } from '../../core/activity/activity-store';
import { GOAL_CHOICES } from '../../core/activity/activity.model';
import { EXERCISES } from '../../core/exercises/exercise.model';
import { PASSIVE_SENTENCES } from '../../core/exercises/passive-sentences';
import { GrammarProgressStore } from '../../core/grammar/grammar-progress-store';
import { LanguageStore } from '../../core/i18n/language-store';
import type { MessageKey } from '../../core/i18n/messages';
import { LESSON_KIND_ROUTE, localized } from '../../core/models/lesson.model';
import { FavoriteStore } from '../../core/services/favorite-store';
import { LessonStore } from '../../core/services/lesson-store';
import { Icon, type IconName } from '../../shared/icon';

/** Tên thứ trong tuần, 0 = Chủ nhật. Viết ra đủ bảy khoá để kiểm kiểu được từng khoá. */
const DAY_OF_WEEK: readonly MessageKey[] = [
  'streak.dow.0',
  'streak.dow.1',
  'streak.dow.2',
  'streak.dow.3',
  'streak.dow.4',
  'streak.dow.5',
  'streak.dow.6',
];

/** Một việc trong "Kế hoạch hôm nay". */
interface PlanItem {
  id: string;
  icon: IconName;
  title: string;
  detail: string;
  percent: number;
  done: boolean;
  path: string[];
  actionKey: MessageKey;
}

/** Một phần có mục ★, hiện ở khối cuối trang. */
interface FavoriteSection {
  id: string;
  name: string;
  link: string[];
  count: number;
}

/**
 * Trang Hôm nay — trang mở đầu của ứng dụng, dựng theo trang cùng tên của dự án
 * minano_nihongo.
 *
 * Trên cùng là CHUỖI NGÀY HỌC và KẾ HOẠCH HÔM NAY: chuỗi là động lực quay lại mỗi
 * ngày, kế hoạch trả lời "hôm nay làm gì". Tiếp theo là THỐNG KÊ HỌC TẬP (tổng số
 * câu, tỉ lệ đúng, số ngày học, tiến độ khoá ngữ pháp, biểu đồ 30 ngày), rồi lối
 * tắt tới bốn khu và các mục đã đánh dấu ★.
 *
 * Chỉ ĐỌC dữ liệu của các kho sẵn có — không tính lại gì theo cách riêng, nên con
 * số ở đây luôn khớp với trang chi tiết.
 */
@Component({
  selector: 'app-today',
  imports: [RouterLink, Icon],
  templateUrl: './today.html',
  styleUrl: './today.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Today {
  private readonly lang = inject(LanguageStore);
  private readonly lessons = inject(LessonStore);
  private readonly favorites = inject(FavoriteStore);
  private readonly grammar = inject(GrammarProgressStore);
  protected readonly activity = inject(ActivityStore);

  protected readonly t = this.lang.t.bind(this.lang);
  protected readonly goalChoices = GOAL_CHOICES;

  // ── Chuỗi ngày ──────────────────────────────────────────────────────────

  protected readonly streak = this.activity.streak;
  protected readonly goal = this.activity.goal;
  protected readonly answered = computed(() => this.activity.today().answered);
  protected readonly goalPercent = computed(() =>
    Math.min(100, Math.round((this.answered() / this.goal()) * 100)),
  );

  /** Bảy ngày gần nhất kèm tên thứ — vẽ thành dải chấm tròn. */
  protected readonly week = computed(() =>
    this.activity.week().map((day) => ({
      ...day,
      // DayNumber là số ngày từ 1970-01-01 (thứ Năm): +4 ra thứ trong tuần, 0 = Chủ nhật.
      label: DAY_OF_WEEK[(day.day + 4) % 7],
    })),
  );

  /** Dòng nhắc dưới con số chuỗi, theo trạng thái hôm nay. */
  protected readonly streakHint = computed(() => {
    const remaining = this.activity.remaining();
    switch (this.streak().state) {
      case 'done':
        return this.t('streak.state.done');
      case 'at-risk':
        return this.t('streak.state.atRisk', { count: remaining });
      default:
        return this.t('streak.state.none', { count: remaining });
    }
  });

  // ── Kế hoạch hôm nay ────────────────────────────────────────────────────

  /** Bài ngữ pháp nên học tiếp — đích của cả hai việc trong kế hoạch. */
  private readonly nextGrammar = computed(() => this.grammar.nextLesson());

  protected readonly plan = computed<PlanItem[]>(() => {
    const next = this.nextGrammar();
    const nextPath = next ? ['/grammar', next.id] : ['/grammar'];
    const passedToday = this.grammar.passedToday();
    return [
      {
        id: 'goal',
        icon: 'target',
        title: this.t('plan.goal', { goal: this.goal() }),
        detail: this.t('plan.goal.detail', { answered: this.answered() }),
        percent: this.goalPercent(),
        done: this.activity.today().met,
        path: nextPath,
        actionKey: 'plan.go.learn',
      },
      {
        id: 'grammar',
        icon: 'cap',
        title: next
          ? this.t('plan.grammar', { code: next.code, title: localized(next.meta.title, this.lang.language()) })
          : this.t('plan.grammar.allDone'),
        detail: this.t('plan.grammar.detail', {
          passed: this.grammar.completedCount(),
          total: this.grammar.totalCount,
        }),
        percent: passedToday > 0 || !next ? 100 : 0,
        done: passedToday > 0 || !next,
        path: nextPath,
        actionKey: 'plan.go.grammar',
      },
    ];
  });

  protected readonly planDone = computed(() => this.plan().every((item) => item.done));

  // ── Thống kê học tập ────────────────────────────────────────────────────

  protected readonly totals = this.activity.totals;
  protected readonly accuracy = computed(() => {
    const { answered, correct } = this.totals();
    return answered > 0 ? Math.round((correct / answered) * 100) : null;
  });
  protected readonly grammarPassed = this.grammar.completedCount;
  protected readonly grammarTotal = this.grammar.totalCount;
  protected readonly xp = this.grammar.xp;

  /**
   * Biểu đồ cột 30 ngày: số câu mỗi ngày, kèm vạch mục tiêu hiện tại.
   *
   * Thang đo lấy theo ngày nhiều nhất HOẶC mục tiêu, cái nào lớn hơn — để vạch mục
   * tiêu luôn nằm trong khung, và một ngày làm 200 câu không đè bẹp mọi ngày khác
   * xuống thành vạch kẻ.
   */
  protected readonly chart = computed(() => {
    const days = this.activity.last30();
    const goal = this.goal();
    const max = Math.max(goal, ...days.map((day) => day.answered));
    const format = new Intl.DateTimeFormat(this.lang.language() === 'vi' ? 'vi-VN' : 'en-GB', {
      day: 'numeric',
      month: 'numeric',
    });
    return {
      goalPercent: (goal / max) * 100,
      max,
      hasData: days.some((day) => day.answered > 0),
      bars: days.map((day) => {
        // DayNumber đếm theo UTC của ngày theo giờ máy, nên đổi lại bằng UTC.
        const date = new Date(day.day * 86_400_000);
        const label = format.format(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        return {
          ...day,
          label,
          height: (day.answered / max) * 100,
          tip: this.t('stats.chart.tip', { date: label, answered: day.answered, correct: day.correct }),
        };
      }),
    };
  });

  // ── Bốn khu học ─────────────────────────────────────────────────────────

  protected readonly tenseCount = computed(() =>
    this.lessons.summariesOfKind('tense').reduce((sum, item) => sum + item.itemCount, 0),
  );
  protected readonly wordCount = computed(() =>
    this.lessons.summariesOfKind('vocabulary').reduce((sum, item) => sum + item.itemCount, 0),
  );
  protected readonly sentenceCount = PASSIVE_SENTENCES.length;

  // ── Mục ★ ───────────────────────────────────────────────────────────────

  /**
   * Các phần đang có mục ★, để quay lại đúng chỗ còn nợ mà không phải đi dò từng
   * khu. `FavoriteStore` chỉ biết id, nên tên và đường dẫn tra ngược lại từ nội
   * dung tải từ file (band từ vựng, nhóm thì) và bài tập cài trong mã nguồn.
   */
  protected readonly favoriteSections = computed<FavoriteSection[]>(() => {
    const counts = this.favorites.counts();
    const fromLessons = this.lessons.summaries().flatMap((summary): FavoriteSection[] => {
      const count = counts[summary.id] ?? 0;
      return count > 0
        ? [
            {
              id: summary.id,
              name: localized(summary.name, this.lang.language()),
              link: [LESSON_KIND_ROUTE[summary.kind], summary.id],
              count,
            },
          ]
        : [];
    });
    const fromExercises = EXERCISES.flatMap((exercise): FavoriteSection[] => {
      const count = counts[exercise.id] ?? 0;
      return count > 0
        ? [{ id: exercise.id, name: this.t(exercise.nameKey), link: ['/exercise', exercise.id], count }]
        : [];
    });
    return [...fromLessons, ...fromExercises];
  });

  protected readonly totalFavorites = this.favorites.totalCount;

  constructor() {
    this.activity.refreshDay();
    void this.lessons.loadIndex();
  }

  setGoal(goal: number): void {
    this.activity.setGoal(goal);
  }
}
