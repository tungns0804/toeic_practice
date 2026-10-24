/**
 * Toàn bộ chữ hiển thị của ứng dụng, hai ngôn ngữ đặt cạnh nhau để dễ soát.
 *
 * Quy ước:
 *  - Khoá đặt theo màn hình: `home.*`, `tense.*`, `vocab.*`, `practice.*`, `result.*`.
 *  - Chỗ cần chèn giá trị dùng `{ten}`, ví dụ `Câu {current}/{total}`.
 *  - Vài khoá có vi và en giống hệt nhau (Present Perfect, TOEIC…) là cố ý: đó là
 *    thuật ngữ tiếng Anh, giữ nguyên ở cả hai ngôn ngữ.
 *
 * KHÔNG dịch nội dung bài học (nghĩa tiếng Việt của từ vựng, câu ví dụ) — đó là dữ
 * liệu học, không phải giao diện.
 */

export const LANGUAGES = ['vi', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAME: Record<Language, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
};

/** Nhãn ngắn hiện trên nút chuyển ngôn ngữ. */
export const LANGUAGE_SHORT: Record<Language, string> = {
  vi: 'VI',
  en: 'EN',
};

type Entry = { vi: string; en: string };

export const MESSAGES = {
  // ── Chung ──────────────────────────────────────────────────────────────
  'common.retry': { vi: 'Thử lại', en: 'Retry' },
  'common.all': { vi: 'Tất cả', en: 'All' },
  'common.search': { vi: 'Tìm kiếm', en: 'Search' },
  'common.clear': { vi: 'Xoá ô tìm kiếm', en: 'Clear search' },

  // ── Vỏ ứng dụng ────────────────────────────────────────────────────────
  'app.title': { vi: 'Luyện thi TOEIC 990', en: 'TOEIC 990 Practice' },
  'app.namePrefix': { vi: 'Luyện thi', en: 'Practice' },
  'app.nav': { vi: 'Điều hướng chính', en: 'Main navigation' },
  'app.nav.today': { vi: 'Hôm nay', en: 'Today' },
  'app.nav.tense': { vi: 'Các thì', en: 'Tenses' },
  'app.nav.vocabulary': { vi: 'Từ vựng', en: 'Vocabulary' },
  'app.nav.exercise': { vi: 'Bài tập', en: 'Drills' },
  'app.nav.grammar': { vi: 'Ngữ pháp', en: 'Grammar' },
  'app.language.switch': { vi: 'Chuyển sang {name}', en: 'Switch to {name}' },
  'app.breadcrumb': { vi: 'Bạn đang ở', en: 'You are here' },
  'app.navigating': { vi: 'Đang mở trang…', en: 'Opening page…' },
  'app.skipToContent': { vi: 'Tới nội dung chính', en: 'Skip to main content' },
  'app.backToTop': { vi: 'Lên đầu trang', en: 'Back to top' },

  // ── Giao diện sáng/tối ─────────────────────────────────────────────────
  'theme.system': { vi: 'Tự động', en: 'Auto' },
  'theme.light': { vi: 'Sáng', en: 'Light' },
  'theme.dark': { vi: 'Tối', en: 'Dark' },
  'theme.night': { vi: 'Đèn đêm', en: 'Night light' },
  'theme.title': {
    vi: 'Giao diện: {current} — bấm để chuyển sang {next}',
    en: 'Theme: {current} — click to switch to {next}',
  },

  // ── Tiêu đề tab trình duyệt ────────────────────────────────────────────
  'route.tense': { vi: 'Các thì tiếng Anh', en: 'English tenses' },
  'route.tenseDetail': { vi: 'Nhóm thì', en: 'Tense group' },
  'route.vocabulary': { vi: 'Từ vựng theo band', en: 'Vocabulary by band' },
  'route.vocabularyDetail': { vi: 'Band từ vựng', en: 'Vocabulary band' },
  'route.exercise': { vi: 'Bài tập chuyên đề', en: 'Focused drills' },
  'route.exerciseDetail': { vi: 'Bài tập', en: 'Drill' },
  'route.practice': { vi: 'Đang luyện tập', en: 'Practising' },
  'route.result': { vi: 'Kết quả', en: 'Result' },
  'route.grammar': { vi: 'Khóa ngữ pháp', en: 'Grammar course' },
  'route.grammarLesson': { vi: 'Bài học ngữ pháp', en: 'Grammar lesson' },

  // ── Trang Hôm nay ──────────────────────────────────────────────────────
  'today.title': { vi: 'Hôm nay học gì?', en: 'What shall we study today?' },
  'today.subtitle': {
    vi: 'Giữ chuỗi ngày học, đi tiếp bài ngữ pháp đang dở, và xem mình đã tiến tới đâu.',
    en: 'Keep your streak, continue the grammar lesson you left off, and see how far you have come.',
  },
  'today.skills.title': { vi: 'Các khu học', en: 'Study areas' },

  // ── Chuỗi ngày học (core/activity) ─────────────────────────────────────
  'streak.title': { vi: 'Chuỗi ngày học', en: 'Study streak' },
  'streak.unit': { vi: 'ngày liên tiếp', en: 'days in a row' },
  'streak.state.done': { vi: 'Hôm nay đã giữ chuỗi — tuyệt vời! 🎉', en: 'Streak kept for today — great work! 🎉' },
  'streak.state.atRisk': {
    vi: 'Còn {count} câu nữa để giữ chuỗi hôm nay',
    en: '{count} more questions to keep your streak today',
  },
  'streak.state.none': {
    vi: 'Trả lời {count} câu hôm nay để bắt đầu chuỗi',
    en: 'Answer {count} questions today to start a streak',
  },
  'streak.today': { vi: 'Hôm nay', en: 'Today' },
  'streak.todayCount': { vi: '{answered}/{goal} câu', en: '{answered}/{goal} questions' },
  'streak.best': { vi: 'Kỷ lục: {count} ngày', en: 'Best: {count} days' },
  'streak.weekAria': { vi: 'Bảy ngày gần nhất', en: 'The last seven days' },
  'streak.dayMet': { vi: 'đạt mục tiêu', en: 'goal met' },
  'streak.dayMissed': { vi: 'chưa đạt', en: 'goal not met' },
  'streak.dow.0': { vi: 'CN', en: 'Sun' },
  'streak.dow.1': { vi: 'T2', en: 'Mon' },
  'streak.dow.2': { vi: 'T3', en: 'Tue' },
  'streak.dow.3': { vi: 'T4', en: 'Wed' },
  'streak.dow.4': { vi: 'T5', en: 'Thu' },
  'streak.dow.5': { vi: 'T6', en: 'Fri' },
  'streak.dow.6': { vi: 'T7', en: 'Sat' },
  'streak.goal': { vi: 'Mục tiêu mỗi ngày (câu)', en: 'Daily goal (questions)' },
  'streak.how.title': { vi: 'Chuỗi ngày tính thế nào?', en: 'How does the streak work?' },
  'streak.how.body': {
    vi: 'Mỗi câu bạn trả lời xong — đúng hay sai, ở bất kỳ khu nào: khoá ngữ pháp, các thì, từ vựng, bài tập — đều được đếm. Đủ {goal} câu trong ngày là giữ được chuỗi. Hôm nay chưa học thì chuỗi vẫn còn tới hết ngày; bỏ trọn một ngày thì chuỗi về 0, nhưng kỷ lục vẫn được giữ. Đổi mục tiêu chỉ áp dụng từ hôm nay.',
    en: 'Every question you finish — right or wrong, in any area: the grammar course, tenses, vocabulary or drills — counts. Reach {goal} questions in a day to keep the streak. If you have not studied yet today, the streak survives until the day ends; skip a whole day and it resets to 0, but your best is kept. A new goal only applies from today.',
  },
  'streak.chip': {
    vi: 'Chuỗi {count} ngày · hôm nay {answered}/{goal} câu',
    en: '{count}-day streak · today {answered}/{goal} questions',
  },

  // ── Kế hoạch hôm nay ───────────────────────────────────────────────────
  'plan.title': { vi: 'Kế hoạch hôm nay', en: "Today's plan" },
  'plan.goal': { vi: 'Trả lời {goal} câu', en: 'Answer {goal} questions' },
  'plan.goal.detail': { vi: 'Đã làm {answered} câu', en: '{answered} answered so far' },
  'plan.grammar': { vi: 'Đạt bài {code}: {title}', en: 'Pass lesson {code}: {title}' },
  'plan.grammar.allDone': {
    vi: 'Đã đạt toàn bộ khoá ngữ pháp',
    en: 'Every grammar lesson passed',
  },
  'plan.grammar.detail': {
    vi: 'Khoá ngữ pháp: {passed}/{total} bài đạt',
    en: 'Grammar course: {passed}/{total} lessons passed',
  },
  'plan.allDone': {
    vi: 'Xong kế hoạch hôm nay — hẹn gặp lại ngày mai! 🎉',
    en: "Today's plan is done — see you tomorrow! 🎉",
  },
  'plan.go.learn': { vi: 'Học tiếp', en: 'Keep going' },
  'plan.go.grammar': { vi: 'Vào bài', en: 'Open lesson' },

  // ── Thống kê học tập ───────────────────────────────────────────────────
  'stats.title': { vi: 'Thống kê học tập', en: 'Study statistics' },
  'stats.answered': { vi: 'Câu đã làm', en: 'Questions answered' },
  'stats.accuracy': { vi: 'Tỉ lệ đúng', en: 'Accuracy' },
  'stats.activeDays': { vi: 'Ngày đã học', en: 'Days studied' },
  'stats.bestStreak': { vi: 'Chuỗi dài nhất', en: 'Longest streak' },
  'stats.days': { vi: '{count} ngày', en: '{count} days' },
  'stats.grammar': { vi: 'Bài ngữ pháp đạt', en: 'Grammar lessons passed' },
  'stats.xp': { vi: 'Điểm XP', en: 'XP' },
  'stats.chart.title': { vi: 'Số câu mỗi ngày · 30 ngày gần nhất', en: 'Questions per day · last 30 days' },
  'stats.chart.goal': { vi: 'Vạch đứt: mục tiêu {goal} câu', en: 'Dashed line: goal of {goal}' },
  'stats.chart.tip': {
    vi: '{date}: {answered} câu, đúng {correct}',
    en: '{date}: {answered} answered, {correct} right',
  },
  'stats.chart.empty': {
    vi: 'Chưa có dữ liệu — mỗi câu bạn làm sẽ hiện thành một cột ở đây.',
    en: 'No data yet — every question you answer shows up as a bar here.',
  },

  // ── Thẻ các khu học (trang Hôm nay) ───────────────────────────────────
  'home.card.tense.title': { vi: 'Các thì tiếng Anh', en: 'English tenses' },
  'home.card.tense.desc': {
    vi: 'Công thức, dấu hiệu nhận biết, lỗi hay gặp của 12 thì. Học xong luyện dịch Việt → Anh và Anh → Việt ngay trên câu ví dụ.',
    en: 'Formulas, signal words and common mistakes for all 12 tenses, then translate the example sentences both ways.',
  },
  'home.card.vocabulary.title': { vi: 'Từ vựng theo band', en: 'Vocabulary by band' },
  'home.card.vocabulary.desc': {
    vi: 'Từ vựng chia theo band điểm TOEIC, từ nền tảng tới band 990. Mỗi band có bảng tra cứu và bài luyện riêng.',
    en: 'Words grouped by TOEIC score band, from the basics up to 990. Every band has its own table and practice.',
  },
  'home.card.exercise.title': { vi: 'Bài tập chuyên đề', en: 'Focused drills' },
  'home.card.exercise.desc': {
    vi: 'Bài tập cho từng điểm ngữ pháp riêng lẻ, bắt đầu với thể bị động — chuyển câu chủ động ↔ bị động và dịch câu bị động.',
    en: 'One drill per grammar point, starting with the passive voice — convert active ↔ passive and translate passive sentences.',
  },
  'home.card.grammar.title': { vi: 'Khóa ngữ pháp', en: 'Grammar course' },
  'home.card.grammar.desc': {
    vi: '18 chương, 59 bài học tuần tự cho Part 5 & 6. Mỗi bài: ví dụ lỗi sai, lý thuyết và 10 câu luyện tập có chấm điểm. Tiến độ và số lần làm được lưu lại.',
    en: '18 chapters and 59 sequential lessons for Parts 5 & 6. Each lesson: common mistakes, theory and 10 scored questions. Your progress and attempts are saved.',
  },
  'home.stat.grammar': { vi: '{passed}/{total} bài đạt', en: '{passed}/{total} lessons passed' },
  'home.stat.tenses': { vi: '{count} thì', en: '{count} tenses' },
  'home.stat.words': { vi: '{count} từ', en: '{count} words' },
  'home.stat.sentences': { vi: '{count} câu', en: '{count} sentences' },
  'home.favorites.title': { vi: 'Mục đã đánh dấu ★', en: 'Starred items' },
  'home.favorites.empty': {
    vi: 'Chưa đánh dấu ★ mục nào. Trong lúc luyện, bấm ★ ở câu sai để gom lại thành nhóm ôn riêng.',
    en: 'Nothing starred yet. While practising, star the items you miss to build your own review set.',
  },
  'home.favorites.count': { vi: '{count} mục', en: '{count} items' },

  // ── Khu các thì ────────────────────────────────────────────────────────
  'tense.listTitle': { vi: 'Các thì tiếng Anh', en: 'English tenses' },
  'tense.listLead': {
    vi: 'Mười hai thì chia theo ba mốc thời gian. Mỗi nhóm là một trang lý thuyết đầy đủ kèm bài luyện dịch hai chiều.',
    en: 'Twelve tenses across three time frames. Each group is a full reference page plus two-way translation practice.',
  },
  'tense.groupCount': { vi: '{count} thì', en: '{count} tenses' },
  'tense.exampleCount': { vi: '{count} câu ví dụ', en: '{count} example sentences' },
  'tense.affirmative': { vi: 'Khẳng định', en: 'Affirmative' },
  'tense.negative': { vi: 'Phủ định', en: 'Negative' },
  'tense.question': { vi: 'Nghi vấn', en: 'Question' },
  'tense.usage': { vi: 'Cách dùng', en: 'Usage' },
  'tense.signals': { vi: 'Dấu hiệu nhận biết', en: 'Signal words' },
  'tense.notes': { vi: 'Lưu ý / lỗi hay gặp', en: 'Notes & common mistakes' },
  'tense.examples': { vi: 'Câu ví dụ', en: 'Examples' },
  'tense.toc': { vi: 'Trong nhóm này', en: 'In this group' },
  'tense.practiceThis': { vi: 'Luyện riêng thì này', en: 'Drill this tense only' },
  'tense.practiceLine': { vi: 'Luyện câu này', en: 'Drill this sentence' },
  'tense.notFound': { vi: 'Không tìm thấy nhóm thì này.', en: 'Tense group not found.' },

  // ── Khu từ vựng ────────────────────────────────────────────────────────
  'vocab.listTitle': { vi: 'Từ vựng theo band', en: 'Vocabulary by band' },
  'vocab.listLead': {
    vi: 'Từ vựng chia theo band điểm TOEIC. Học lần lượt từ band thấp lên: band sau giả định bạn đã nắm band trước.',
    en: 'Words grouped by TOEIC score band. Work upwards — each band assumes the ones below it.',
  },
  'vocab.wordCount': { vi: '{count} từ', en: '{count} words' },
  'vocab.col.word': { vi: 'Từ', en: 'Word' },
  'vocab.col.ipa': { vi: 'Phiên âm', en: 'IPA' },
  'vocab.col.pos': { vi: 'Từ loại', en: 'Part of speech' },
  'vocab.col.meaning': { vi: 'Nghĩa tiếng Việt', en: 'Vietnamese meaning' },
  'vocab.col.example': { vi: 'Ví dụ', en: 'Example' },
  'vocab.notFound': { vi: 'Không tìm thấy band từ vựng này.', en: 'Vocabulary band not found.' },
  'vocab.searchPlaceholder': {
    vi: 'Tìm theo từ, nghĩa hoặc ví dụ…',
    en: 'Search by word, meaning or example…',
  },
  'vocab.showing': { vi: 'Hiện {shown}/{total} từ', en: 'Showing {shown}/{total} words' },
  'vocab.noMatch': { vi: 'Không có từ nào khớp', en: 'No matching words' },
  'vocab.noMatchHint': {
    vi: 'Thử từ khoá ngắn hơn, hoặc tắt bộ lọc ★.',
    en: 'Try a shorter keyword, or turn off the ★ filter.',
  },
  'vocab.onlyFavorites': { vi: 'Chỉ hiện mục ★', en: 'Only starred items' },
  'vocab.filterPos': { vi: 'Lọc theo từ loại', en: 'Filter by part of speech' },

  // ── Từ loại ────────────────────────────────────────────────────────────
  'pos.noun': { vi: 'Danh từ', en: 'Noun' },
  'pos.verb': { vi: 'Động từ', en: 'Verb' },
  'pos.adjective': { vi: 'Tính từ', en: 'Adjective' },
  'pos.adverb': { vi: 'Trạng từ', en: 'Adverb' },
  'pos.preposition': { vi: 'Giới từ', en: 'Preposition' },
  'pos.conjunction': { vi: 'Liên từ', en: 'Conjunction' },
  'pos.phrasalVerb': { vi: 'Cụm động từ', en: 'Phrasal verb' },
  'pos.verbPrep': { vi: 'Động từ + giới từ', en: 'Verb + preposition' },
  'pos.prepPhrase': { vi: 'Cụm giới từ', en: 'Prepositional phrase' },
  'pos.compoundNoun': { vi: 'Danh từ ghép', en: 'Compound noun' },
  'pos.collocation': { vi: 'Kết hợp từ', en: 'Collocation' },
  'pos.noun.short': { vi: 'D.từ', en: 'n.' },
  'pos.verb.short': { vi: 'Đ.từ', en: 'v.' },
  'pos.adjective.short': { vi: 'T.từ', en: 'adj.' },
  'pos.adverb.short': { vi: 'Tr.từ', en: 'adv.' },
  'pos.preposition.short': { vi: 'G.từ', en: 'prep.' },
  'pos.conjunction.short': { vi: 'L.từ', en: 'conj.' },
  'pos.phrasalVerb.short': { vi: 'Cụm đ.từ', en: 'phr. v' },
  'pos.verbPrep.short': { vi: 'Đ.từ + g.từ', en: 'v + prep' },
  'pos.prepPhrase.short': { vi: 'Cụm g.từ', en: 'prep. phr' },
  'pos.compoundNoun.short': { vi: 'D.từ ghép', en: 'cmp. n' },
  'pos.collocation.short': { vi: 'Kết hợp', en: 'colloc.' },

  // ── Khu bài tập chuyên đề ──────────────────────────────────────────────
  'exercise.listTitle': { vi: 'Bài tập chuyên đề', en: 'Focused drills' },
  'exercise.listLead': {
    vi: 'Mỗi bài tập nhắm đúng một điểm ngữ pháp, gom câu của nhiều thì lại để luyện tới khi thành phản xạ.',
    en: 'Each drill targets exactly one grammar point, pulling sentences from every tense until the pattern becomes automatic.',
  },
  'exercise.passive.name': { vi: 'Thể bị động', en: 'Passive voice' },
  'exercise.passive.desc': {
    vi: 'Chuyển câu chủ động sang bị động và ngược lại, qua đủ 12 thì cùng các dạng đặc biệt (động từ khuyết thiếu, hai tân ngữ, cụm động từ).',
    en: 'Convert active to passive and back across all 12 tenses, plus the special cases: modals, two objects and phrasal verbs.',
  },
  'exercise.sentenceCount': { vi: '{count} câu', en: '{count} sentences' },
  'exercise.notFound': { vi: 'Không tìm thấy bài tập này.', en: 'Drill not found.' },
  'exercise.reference': { vi: 'Bảng tra cứu', en: 'Reference table' },
  'exercise.kindFilter': { vi: 'Dạng câu', en: 'Sentence pattern' },
  'exercise.searchPlaceholder': {
    vi: 'Tìm theo câu chủ động, bị động hoặc nghĩa…',
    en: 'Search active, passive or meaning…',
  },
  'exercise.showing': { vi: 'Hiện {shown}/{total} câu', en: 'Showing {shown}/{total} sentences' },
  'exercise.col.active': { vi: 'Chủ động', en: 'Active' },
  'exercise.col.passive': { vi: 'Bị động', en: 'Passive' },
  'exercise.col.tense': { vi: 'Thì', en: 'Tense' },
  'exercise.typingOnly': {
    vi: 'Bài tập này chỉ có chế độ gõ đáp án: bốn câu dài để chọn thì đọc lướt là ra, không phải tự đặt câu.',
    en: 'This drill is typing-only: picking from four long sentences can be done by skimming, without building the sentence yourself.',
  },
  'exercise.formula.title': { vi: 'Công thức bị động theo thì', en: 'Passive formula by tense' },
  'exercise.formula.note': {
    vi: 'Bị động luôn là be + V3/V-ed. Chỉ có "be" đổi theo thì, còn V3 thì đứng yên.',
    en: 'The passive is always be + V3/past participle. Only "be" changes with the tense; V3 never moves.',
  },

  // ── Nhóm bị động đặc biệt ──────────────────────────────────────────────
  'passive.kind.standard': { vi: 'Cơ bản', en: 'Standard' },
  'passive.kind.modal': { vi: 'Động từ khuyết thiếu', en: 'Modal verb' },
  'passive.kind.twoObjects': { vi: 'Hai tân ngữ', en: 'Two objects' },
  'passive.kind.phrasal': { vi: 'Cụm động từ', en: 'Phrasal verb' },
  'passive.kind.byOmitted': { vi: 'Lược bỏ "by"', en: '"by" omitted' },

  // ── Chiều luyện: từ vựng ───────────────────────────────────────────────
  'direction.en-vi': { vi: 'Tiếng Anh → Nghĩa tiếng Việt', en: 'English → Vietnamese' },
  'direction.en-vi.short': { vi: 'Anh → Việt', en: 'EN → VI' },
  'direction.vi-en': { vi: 'Nghĩa tiếng Việt → Tiếng Anh', en: 'Vietnamese → English' },
  'direction.vi-en.short': { vi: 'Việt → Anh', en: 'VI → EN' },
  'direction.cloze': { vi: 'Điền từ vào câu ví dụ', en: 'Fill the gap in the example' },
  'direction.cloze.short': { vi: 'Điền từ', en: 'Gap fill' },

  // ── Chiều luyện: các thì ───────────────────────────────────────────────
  'tenseMode.vi-en': { vi: 'Dịch Việt → Anh', en: 'Translate VI → EN' },
  'tenseMode.vi-en.short': { vi: 'Việt → Anh', en: 'VI → EN' },
  'tenseMode.vi-en.example': {
    vi: 'Cho "Cô ấy đã làm việc ở đây từ năm 2019." → gõ "She has worked here since 2019."',
    en: 'Given the Vietnamese sentence → type "She has worked here since 2019."',
  },
  'tenseMode.en-vi': { vi: 'Dịch Anh → Việt', en: 'Translate EN → VI' },
  'tenseMode.en-vi.short': { vi: 'Anh → Việt', en: 'EN → VI' },
  'tenseMode.en-vi.example': {
    vi: 'Cho "She has worked here since 2019." → gõ nghĩa tiếng Việt.',
    en: 'Given "She has worked here since 2019." → type the Vietnamese meaning.',
  },
  'tenseMode.identify': { vi: 'Nhận diện thì', en: 'Identify the tense' },
  'tenseMode.identify.short': { vi: 'Nhận diện thì', en: 'Identify tense' },
  'tenseMode.identify.example': {
    vi: 'Cho "She has worked here since 2019." → chọn "Hiện tại hoàn thành".',
    en: 'Given "She has worked here since 2019." → choose "Present Perfect".',
  },
  'tenseMode.conjugate': { vi: 'Chia động từ theo thì', en: 'Conjugate to the tense' },
  'tenseMode.conjugate.short': { vi: 'Chia động từ', en: 'Conjugate' },
  'tenseMode.conjugate.example': {
    vi: 'Cho "She (work) here since 2019." → gõ "has worked".',
    en: 'Given "She (work) here since 2019." → type "has worked".',
  },

  // ── Chiều luyện: thể bị động ───────────────────────────────────────────
  'passiveMode.to-passive': { vi: 'Chủ động → Bị động', en: 'Active → Passive' },
  'passiveMode.to-passive.short': { vi: 'Chủ → Bị', en: 'Act → Pass' },
  'passiveMode.to-passive.example': {
    vi: 'Cho "The manager signed the contract." → gõ "The contract was signed by the manager."',
    en: 'Given "The manager signed the contract." → type "The contract was signed by the manager."',
  },
  'passiveMode.to-active': { vi: 'Bị động → Chủ động', en: 'Passive → Active' },
  'passiveMode.to-active.short': { vi: 'Bị → Chủ', en: 'Pass → Act' },
  'passiveMode.to-active.example': {
    vi: 'Cho "The contract was signed by the manager." → gõ "The manager signed the contract."',
    en: 'Given "The contract was signed by the manager." → type "The manager signed the contract."',
  },
  'passiveMode.vi-passive': { vi: 'Dịch Việt → câu bị động', en: 'Vietnamese → passive sentence' },
  'passiveMode.vi-passive.short': { vi: 'Việt → Bị động', en: 'VI → Passive' },
  'passiveMode.vi-passive.example': {
    vi: 'Cho nghĩa tiếng Việt → gõ câu bị động tiếng Anh.',
    en: 'Given the Vietnamese meaning → type the English passive sentence.',
  },
  'passiveMode.mixed': { vi: 'Trộn hai chiều', en: 'Both directions mixed' },
  'passiveMode.mixed.short': { vi: 'Trộn', en: 'Mixed' },
  'passiveMode.mixed.example': {
    vi: 'Mỗi câu được hỏi hai lượt: một lượt chuyển sang bị động, một lượt chuyển ngược lại.',
    en: 'Every sentence is asked twice: once to the passive, once back to the active.',
  },

  // ── Thiết lập luyện tập ────────────────────────────────────────────────
  'setup.title': { vi: 'Thiết lập luyện tập', en: 'Practice setup' },
  'setup.direction': { vi: 'Chiều luyện', en: 'Direction' },
  'setup.mode': { vi: 'Dạng câu hỏi', en: 'Question type' },
  'setup.answerMode': { vi: 'Cách trả lời', en: 'Answer mode' },
  'setup.answerMode.choice': { vi: 'Trắc nghiệm', en: 'Multiple choice' },
  'setup.answerMode.typing': { vi: 'Gõ đáp án', en: 'Typing' },
  'setup.scope': { vi: 'Phạm vi', en: 'Scope' },
  'setup.posFilter': { vi: 'Chỉ luyện từ loại', en: 'Practise only these kinds' },
  'setup.posFilter.all': { vi: 'Mọi từ loại', en: 'All kinds' },
  'setup.multiwordOnly': { vi: 'Chỉ cụm nhiều từ', en: 'Multi-word only' },
  'setup.multiwordHint': {
    vi: 'Gộp nhanh năm nhóm cụm: cụm động từ, động từ + giới từ, cụm giới từ, danh từ ghép và kết hợp từ.',
    en: 'A shortcut for all five multi-word kinds: phrasal verbs, verb + preposition, prepositional phrases, compound nouns and collocations.',
  },
  'setup.limit': { vi: 'Số câu', en: 'Number of questions' },
  'setup.limit.all': { vi: 'Tất cả', en: 'All' },
  'setup.options': { vi: 'Tuỳ chọn', en: 'Options' },
  'setup.shuffle': { vi: 'Trộn thứ tự câu hỏi', en: 'Shuffle question order' },
  'setup.ignoreDiacritics': {
    vi: 'Bỏ qua dấu tiếng Việt khi chấm',
    en: 'Ignore Vietnamese diacritics when marking',
  },
  'setup.ignoreDiacritics.hint': {
    vi: 'Chỉ áp dụng cho đáp án tiếng Việt ở chế độ gõ.',
    en: 'Only applies to Vietnamese answers in typing mode.',
  },
  'setup.showHint': { vi: 'Hiện gợi ý dưới câu hỏi', en: 'Show a hint under the question' },
  'setup.customize': { vi: 'Tuỳ chỉnh', en: 'Customize' },
  'setup.collapse': { vi: 'Thu gọn', en: 'Collapse' },
  'setup.start': { vi: 'Bắt đầu luyện', en: 'Start practice' },
  'setup.plan': { vi: 'Sẽ luyện {count} câu', en: '{count} questions in this session' },
  'setup.empty': {
    vi: 'Không có mục nào trong phạm vi đang chọn.',
    en: 'No items in the selected scope.',
  },

  'scope.all': { vi: 'Toàn bộ', en: 'Everything' },
  'scope.favorite': { vi: 'Đã đánh dấu ★', en: 'Starred ★' },
  'scope.single': { vi: 'Một mục', en: 'Single item' },
  'scope.all.count': { vi: 'Toàn bộ ({count})', en: 'Everything ({count})' },
  'scope.favorite.count': { vi: '★ Đã đánh dấu ({count})', en: '★ Starred ({count})' },

  'favorite.clear': { vi: 'Bỏ đánh dấu tất cả', en: 'Clear all stars' },
  'favorite.confirmClear': {
    vi: 'Bỏ đánh dấu ★ của {count} mục trong phần này?',
    en: 'Remove the ★ from {count} items in this section?',
  },
  'favorite.star': { vi: 'Đánh dấu ★', en: 'Star this item' },
  'favorite.starTitle': {
    vi: 'Đánh dấu để luyện riêng nhóm này về sau',
    en: 'Star it to drill this group separately later',
  },

  // ── Màn hình luyện tập ─────────────────────────────────────────────────
  'practice.progress': { vi: 'Câu {current}/{total}', en: 'Question {current}/{total}' },
  'practice.progressAria': {
    vi: 'Tiến độ: câu {current} trên {total}',
    en: 'Progress: question {current} of {total}',
  },
  'practice.correctSoFar': { vi: 'Đúng {count}', en: '{count} correct' },
  'practice.quit': { vi: 'Thoát', en: 'Quit' },
  'practice.confirmQuit': {
    vi: 'Thoát giữa chừng? Kết quả của phiên này sẽ không được tính.',
    en: 'Quit now? This session will not be scored.',
  },
  'practice.check': { vi: 'Kiểm tra', en: 'Check' },
  'practice.giveUp': { vi: 'Xem đáp án', en: 'Show answer' },
  'practice.next': { vi: 'Câu tiếp theo', en: 'Next question' },
  'practice.seeResult': { vi: 'Xem kết quả', en: 'See result' },
  'practice.correct': { vi: 'Chính xác!', en: 'Correct!' },
  'practice.correctAfter': { vi: '(sau {count} lần sai)', en: '(after {count} wrong tries)' },
  'practice.wrong': { vi: 'Chưa đúng', en: 'Not correct' },
  'practice.yourAnswer': { vi: 'Bạn trả lời:', en: 'Your answer:' },
  'practice.answer': { vi: 'Đáp án:', en: 'Answer:' },
  'practice.lastAnswer': { vi: 'Vừa trả lời:', en: 'Last answer:' },
  'practice.attempts': {
    vi: 'Sai {count}/{max} lần — còn {left} lượt',
    en: '{count}/{max} wrong — {left} tries left',
  },
  'practice.placeholder': { vi: 'Gõ đáp án…', en: 'Type your answer…' },
  'practice.hintChoice': { vi: 'Chọn đáp án, hoặc bấm phím', en: 'Pick an answer, or press' },
  'practice.hintTyping': { vi: 'Gõ đáp án rồi bấm', en: 'Type your answer and press' },
  'practice.hintMax': { vi: 'Tối đa {max} lần sai.', en: 'Up to {max} wrong tries.' },
  'practice.spacePrefix': { vi: 'Hoặc bấm', en: 'Or press' },
  'practice.spaceHintNext': { vi: 'để sang câu tiếp theo.', en: 'for the next question.' },
  'practice.spaceHintResult': { vi: 'để xem kết quả.', en: 'to see the result.' },
  'practice.punctuationNote': {
    vi: 'Dấu câu và chữ hoa/thường không ảnh hưởng kết quả chấm.',
    en: 'Punctuation and letter case do not affect marking.',
  },
  'practice.contractionNote': {
    vi: 'Viết tắt được chấp nhận: "she is" và "she\'s" đều đúng.',
    en: 'Contractions are accepted: "she is" and "she\'s" both count.',
  },

  'practice.answerPrompt.english': { vi: 'Từ tiếng Anh', en: 'English word' },
  'practice.answerPrompt.vietnamese': { vi: 'Nghĩa tiếng Việt', en: 'Vietnamese meaning' },
  'practice.answerPrompt.sentenceEnglish': { vi: 'Câu tiếng Anh', en: 'English sentence' },
  'practice.answerPrompt.sentenceVietnamese': { vi: 'Câu tiếng Việt', en: 'Vietnamese sentence' },
  'practice.answerPrompt.tenseName': { vi: 'Tên thì', en: 'Tense name' },
  'practice.answerPrompt.verbForm': { vi: 'Dạng động từ', en: 'Verb form' },
  'practice.answerPrompt.passive': { vi: 'Câu bị động', en: 'Passive sentence' },
  'practice.answerPrompt.active': { vi: 'Câu chủ động', en: 'Active sentence' },

  'practice.label.cloze': { vi: 'Điền từ còn thiếu', en: 'Fill in the missing word' },
  'practice.label.conjugate': {
    vi: 'Chia động từ trong ngoặc cho đúng thì',
    en: 'Put the verb in brackets into the right tense',
  },
  'practice.label.identify': { vi: 'Câu này ở thì nào?', en: 'Which tense is this?' },
  'practice.label.toPassive': {
    vi: 'Chuyển sang thể bị động',
    en: 'Rewrite in the passive voice',
  },
  'practice.label.toActive': {
    vi: 'Chuyển sang thể chủ động',
    en: 'Rewrite in the active voice',
  },
  'practice.label.viToPassive': {
    vi: 'Dịch sang câu bị động tiếng Anh',
    en: 'Translate into an English passive sentence',
  },

  'practice.recap.word': { vi: 'Từ', en: 'Word' },
  'practice.recap.ipa': { vi: 'Phiên âm', en: 'IPA' },
  'practice.recap.pos': { vi: 'Từ loại', en: 'Part of speech' },
  'practice.recap.meaning': { vi: 'Nghĩa', en: 'Meaning' },
  'practice.recap.example': { vi: 'Ví dụ', en: 'Example' },
  'practice.recap.english': { vi: 'Tiếng Anh', en: 'English' },
  'practice.recap.vietnamese': { vi: 'Tiếng Việt', en: 'Vietnamese' },
  'practice.recap.tense': { vi: 'Thì', en: 'Tense' },
  'practice.recap.formula': { vi: 'Công thức', en: 'Formula' },
  'practice.recap.active': { vi: 'Chủ động', en: 'Active' },
  'practice.recap.passive': { vi: 'Bị động', en: 'Passive' },
  'practice.recap.note': { vi: 'Lưu ý', en: 'Note' },

  // ── Màn hình kết quả ───────────────────────────────────────────────────
  'result.title': { vi: 'Kết quả luyện tập', en: 'Session result' },
  'result.fraction': { vi: 'Đúng {correct}/{total}', en: '{correct}/{total} correct' },
  'result.perfect': { vi: 'Đúng ngay lần đầu', en: 'Right first time' },
  'result.retried': { vi: 'Đúng sau khi thử lại', en: 'Right after retries' },
  'result.wrong': { vi: 'Sai', en: 'Wrong' },
  'result.duration': { vi: 'Thời gian', en: 'Time' },
  'result.seconds': { vi: '{seconds} giây', en: '{seconds}s' },
  'result.minutesSeconds': { vi: '{minutes} phút {seconds} giây', en: '{minutes}m {seconds}s' },
  'result.retryWrong': { vi: 'Luyện lại {count} câu sai', en: 'Retry {count} wrong' },
  'result.retryAll': { vi: 'Làm lại toàn bộ', en: 'Retry all' },
  'result.markWrong': { vi: 'Đánh dấu ★ các câu sai', en: 'Star the wrong ones' },
  'result.markedNotice': {
    vi: 'Đã đánh dấu ★ {count} mục. Lần sau chọn phạm vi "Đã đánh dấu ★" để luyện riêng nhóm này.',
    en: 'Starred {count} items. Next time pick the "Starred ★" scope to drill just this group.',
  },
  'result.allMarked': {
    vi: 'Mọi mục sai đều đã được đánh dấu ★.',
    en: 'Every missed item is already starred.',
  },
  'result.flawless': {
    vi: 'Đúng cả {count} câu, không sai câu nào.',
    en: 'All {count} questions correct — nothing missed.',
  },
  'result.streak.met': {
    vi: 'Đạt mục tiêu hôm nay! Chuỗi {count} ngày liên tiếp 🎉',
    en: "Today's goal reached! {count}-day streak 🎉",
  },
  'result.streak.done': {
    vi: 'Hôm nay {answered} câu · chuỗi {count} ngày đang giữ vững',
    en: 'Today {answered} questions · {count}-day streak going strong',
  },
  'result.streak.remaining': {
    vi: 'Hôm nay {answered}/{goal} câu · còn {remaining} câu nữa để giữ chuỗi',
    en: 'Today {answered}/{goal} · {remaining} more to keep your streak',
  },
  'result.backToSection': { vi: 'Về phần vừa luyện', en: 'Back to the section' },
  'result.home': { vi: 'Trang chủ', en: 'Home' },
  'result.details': { vi: 'Chi tiết từng câu', en: 'Question by question' },
  'result.filter.all': { vi: 'Tất cả ({count})', en: 'All ({count})' },
  'result.filter.wrong': { vi: 'Sai ({count})', en: 'Wrong ({count})' },
  'result.filter.retried': { vi: 'Thử lại ({count})', en: 'Retried ({count})' },
  'result.yourAnswers': { vi: 'Bạn đã trả lời:', en: 'You answered:' },
  'result.noAnswer': { vi: 'Không trả lời', en: 'No answer' },
  'result.empty': { vi: 'Không có câu nào trong bộ lọc này.', en: 'No questions match this filter.' },

  // ── Khoá ngữ pháp ──────────────────────────────────────────────────────
  'grammar.sidebar.title': { vi: 'Nội dung khóa học', en: 'Course content' },
  'grammar.sidebar.progress': { vi: 'Tiến độ', en: 'Progress' },
  'grammar.sidebar.nav': { vi: 'Danh sách bài học', en: 'Lesson list' },
  'grammar.sidebar.locked': {
    vi: 'Hoàn thành bài trước để mở khóa',
    en: 'Pass the previous lesson to unlock',
  },
  'grammar.sidebar.lockedShort': { vi: 'đang khoá', en: 'locked' },
  'grammar.sidebar.passedShort': { vi: 'đã đạt', en: 'passed' },

  'grammar.course.title': {
    vi: 'Bạn sẽ học được gì ở khóa học này?',
    en: 'What will you learn in this course?',
  },
  'grammar.course.lead': {
    vi: 'Khóa học gồm {chapters} chương ngữ pháp trọng tâm và {lessons} bài học tuần tự, bao trùm toàn bộ điểm ngữ pháp thường gặp trong TOEIC Part 5 & 6. Mỗi bài đều có lý thuyết, ví dụ và luyện tập có chấm điểm.',
    en: 'The course has {chapters} core grammar chapters and {lessons} sequential lessons covering every grammar point that regularly appears in TOEIC Parts 5 & 6. Each lesson comes with theory, examples and scored practice.',
  },
  'grammar.course.nextLesson': { vi: 'Bài tiếp theo', en: 'Next lesson' },
  'grammar.course.nextMeta': { vi: 'Chương {chapter} · {count} Q', en: 'Chapter {chapter} · {count} Q' },
  'grammar.course.start': { vi: 'Bắt đầu', en: 'Start' },
  'grammar.course.continue': { vi: 'Tiếp tục', en: 'Continue' },
  'grammar.course.allDone': { vi: 'Hoàn thành toàn bộ khóa học! 🎉', en: 'Course complete! 🎉' },
  'grammar.course.allDoneHint': {
    vi: 'Tuyệt vời! Ôn tập thường xuyên để nhớ lâu hơn.',
    en: 'Great work! Review regularly to make it stick.',
  },
  'grammar.course.review': { vi: 'Ôn lại từ đầu', en: 'Review from the start' },
  'grammar.course.ringLabel': {
    vi: 'Đã hoàn thành {percent}% khóa học',
    en: '{percent}% of the course completed',
  },
  'grammar.course.lesson0': { vi: 'Bài 0 · Tổng quan', en: 'Lesson 0 · Overview' },
  'grammar.course.flowTitle': {
    vi: 'Mỗi bài học diễn ra theo lộ trình',
    en: 'Every lesson follows the same path',
  },
  'grammar.course.topicsTitle': {
    vi: 'Các chủ đề ngữ pháp bạn sẽ chinh phục',
    en: 'The grammar topics you will master',
  },
  'grammar.course.passedCount': { vi: '{passed}/{total} bài đạt', en: '{passed}/{total} lessons passed' },
  'grammar.course.lessonCount': { vi: '{count} bài', en: '{count} lessons' },
  'grammar.course.chapterProgress': { vi: '{passed}/{count} bài', en: '{passed}/{count} lessons' },
  'grammar.course.reset': { vi: 'Xoá toàn bộ tiến độ', en: 'Reset all progress' },
  'grammar.course.resetConfirm': {
    vi: 'Xoá toàn bộ tiến độ khoá ngữ pháp (bài đã đạt, lịch sử làm bài, XP, chuỗi ngày học)? Không thể hoàn tác.',
    en: 'Reset all grammar course progress (passed lessons, attempt history, XP, study streak)? This cannot be undone.',
  },

  'grammar.stat.streak': { vi: '{count} ngày', en: '{count}-day streak' },
  'grammar.stat.streakTitle': {
    vi: 'Chuỗi ngày học của cả app — mỗi ngày trả lời đủ số câu mục tiêu ở bất kỳ khu nào',
    en: 'App-wide study streak — answer your daily goal of questions in any area to keep it going',
  },
  'grammar.stat.xp': { vi: '{count} Điểm XP', en: '{count} XP' },
  'grammar.stat.xpTitle': {
    vi: 'Điểm kinh nghiệm: 10 XP mỗi câu đúng, thưởng 50 XP khi đạt một bài lần đầu',
    en: 'Experience points: 10 XP per correct answer, plus 50 XP the first time you pass a lesson',
  },

  'grammar.step.mistakes': { vi: 'Ví dụ lỗi sai', en: 'Common mistakes' },
  'grammar.step.theory': { vi: 'Lý thuyết', en: 'Theory' },
  'grammar.step.practice': { vi: 'Luyện tập', en: 'Practice' },
  'grammar.step.result': { vi: 'Kết quả', en: 'Result' },

  'grammar.lesson.back': { vi: 'Khóa ngữ pháp', en: 'Grammar course' },
  'grammar.lesson.crumbs': { vi: 'Vị trí bài học', en: 'Lesson location' },
  'grammar.lesson.chapter': { vi: 'Chương {number} · {title}', en: 'Chapter {number} · {title}' },
  'grammar.lesson.code': { vi: 'Bài {code}', en: 'Lesson {code}' },
  'grammar.lesson.passed': { vi: 'Đã đạt', en: 'Passed' },
  'grammar.lesson.attempts': { vi: 'Đã làm {count} lần', en: 'Attempts: {count}' },
  'grammar.lesson.best': { vi: 'Cao nhất {best}/{total}', en: 'Best {best}/{total}' },
  'grammar.lesson.steps': { vi: 'Các bước của bài học', en: 'Lesson steps' },
  'grammar.lesson.stepLocked': {
    vi: 'Bắt đầu luyện tập ở bước Lý thuyết để mở bước này',
    en: 'Start the practice from the Theory step to open this one',
  },
  'grammar.lesson.loading': { vi: 'Đang tải bài học…', en: 'Loading lesson…' },
  'grammar.lesson.loadError': {
    vi: 'Không tải được nội dung bài học. Kiểm tra kết nối mạng rồi thử lại.',
    en: 'Could not load the lesson. Check your connection and try again.',
  },
  'grammar.lesson.notFound': { vi: 'Không tìm thấy bài học này.', en: 'Lesson not found.' },
  'grammar.lesson.pager': { vi: 'Chuyển bài', en: 'Lesson navigation' },
  'grammar.lesson.prev': { vi: 'Bài trước', en: 'Previous lesson' },
  'grammar.lesson.next': { vi: 'Bài sau', en: 'Next lesson' },

  'grammar.locked.title': { vi: 'Bài học đang khoá', en: 'This lesson is locked' },
  'grammar.locked.text': {
    vi: 'Hoàn thành bài {code} · {title} với tối thiểu {need}/{total} câu đúng để mở khoá bài này.',
    en: 'Pass lesson {code} · {title} with at least {need}/{total} correct answers to unlock this one.',
  },
  'grammar.locked.go': { vi: 'Đến bài {code}', en: 'Go to lesson {code}' },

  'grammar.mistakes.lead': {
    vi: 'Những lỗi người học hay mắc nhất ở chủ điểm này. Nhìn kỹ chỗ được tô màu trước khi vào phần lý thuyết.',
    en: 'The mistakes learners make most often with this point. Look closely at the highlighted words before moving on to the theory.',
  },
  'grammar.mistakes.wrong': { vi: 'Sai', en: 'Wrong' },
  'grammar.mistakes.right': { vi: 'Đúng', en: 'Right' },
  'grammar.mistakes.next': { vi: 'Tiếp theo: Lý thuyết', en: 'Next: Theory' },

  'grammar.theory.start': { vi: 'Bắt đầu luyện tập', en: 'Start practice' },
  'grammar.theory.resume': { vi: 'Tiếp tục luyện tập', en: 'Resume practice' },
  'grammar.callout.tip': { vi: 'Mẹo', en: 'Tip' },
  'grammar.callout.warning': { vi: 'Bẫy cần tránh', en: 'Watch out' },
  'grammar.callout.info': { vi: 'Ghi nhớ', en: 'Remember' },

  'grammar.practice.lead': {
    vi: '{count} câu hỏi kiểu TOEIC Part 5. Đúng tối thiểu {need}/{count} câu để đạt và mở khoá bài tiếp theo.',
    en: '{count} TOEIC Part 5-style questions. Get at least {need}/{count} right to pass and unlock the next lesson.',
  },
  'grammar.practice.history': {
    vi: 'Bạn đã làm bài này {count} lần, cao nhất {best}/{total} câu đúng.',
    en: 'You have taken this {count} times; your best is {best}/{total}.',
  },
  'grammar.practice.start': { vi: 'Bắt đầu làm bài', en: 'Start' },
  'grammar.practice.retry': { vi: 'Làm lại', en: 'Try again' },
  'grammar.practice.reviewTheory': { vi: 'Ôn lại lý thuyết', en: 'Review the theory' },
  'grammar.practice.questionOf': { vi: 'Câu {current}/{total}', en: 'Question {current}/{total}' },
  'grammar.practice.tally': { vi: 'Đúng {right} · Sai {wrong}', en: '{right} right · {wrong} wrong' },
  'grammar.practice.goTo': { vi: 'Đến câu {number}', en: 'Go to question {number}' },
  'grammar.practice.resumed': {
    vi: 'Đang tiếp tục lượt làm dở lần trước.',
    en: 'Picking up your unfinished attempt.',
  },
  'grammar.practice.options': { vi: 'Các lựa chọn', en: 'Answer choices' },
  'grammar.practice.correct': { vi: 'Chính xác!', en: 'Correct!' },
  'grammar.practice.incorrect': {
    vi: 'Chưa đúng — đáp án là ({letter}) {answer}',
    en: 'Not quite — the answer is ({letter}) {answer}',
  },
  'grammar.practice.translation': { vi: 'Dịch nghĩa', en: 'Translation' },
  'grammar.practice.prev': { vi: 'Câu trước', en: 'Previous' },
  'grammar.practice.next': { vi: 'Câu tiếp theo', en: 'Next question' },
  'grammar.practice.submit': { vi: 'Nộp bài và xem kết quả', en: 'Submit and see results' },
  'grammar.practice.shortcuts': {
    vi: 'Phím tắt: 1–4 hoặc A–D để chọn đáp án, Enter để sang câu tiếp.',
    en: 'Shortcuts: 1–4 or A–D to choose, Enter for the next question.',
  },

  'grammar.result.attempt': { vi: 'Kết quả lần làm thứ {number}', en: 'Attempt {number} result' },
  'grammar.result.passed': { vi: 'Đạt rồi! 🎉', en: 'Passed! 🎉' },
  'grammar.result.failed': { vi: 'Chưa đạt', en: 'Not passed yet' },
  'grammar.result.score': { vi: '{correct}/{total} câu đúng', en: '{correct}/{total} correct' },
  'grammar.result.need': {
    vi: 'Cần đúng tối thiểu {need}/{total} câu để đạt. Xem lại các câu sai bên dưới rồi thử lại nhé.',
    en: 'You need at least {need}/{total} to pass. Go over the missed questions below and try again.',
  },
  'grammar.result.unlocked': { vi: 'Bài {code} đã được mở khoá.', en: 'Lesson {code} is now unlocked.' },
  'grammar.result.mastered': {
    vi: 'Bạn đã nắm chắc chủ điểm này.',
    en: 'You have this grammar point down.',
  },
  'grammar.result.courseDone': {
    vi: 'Bạn đã hoàn thành bài cuối cùng của khoá học!',
    en: 'You have finished the last lesson of the course!',
  },
  'grammar.result.xp': { vi: '+{count} XP', en: '+{count} XP' },
  'grammar.result.newBest': { vi: 'Kỷ lục mới', en: 'New best' },
  'grammar.result.nextLesson': { vi: 'Bài tiếp theo: {code}', en: 'Next lesson: {code}' },
  'grammar.result.backToCourse': { vi: 'Về trang khoá học', en: 'Back to the course' },
  'grammar.result.details': { vi: 'Chi tiết từng câu', en: 'Question by question' },
  'grammar.result.yourAnswer': { vi: 'Bạn chọn', en: 'Your answer' },
  'grammar.result.correctAnswer': { vi: 'Đáp án', en: 'Answer' },
  'grammar.result.none': {
    vi: 'Chưa có kết quả nào cho bài này. Làm phần luyện tập để xem kết quả.',
    en: 'No results for this lesson yet. Take the practice to see one.',
  },

  'grammar.history.title': { vi: 'Lịch sử làm bài', en: 'Attempt history' },
  'grammar.history.attempt': { vi: 'Lần', en: 'Attempt' },
  'grammar.history.date': { vi: 'Thời điểm', en: 'Date' },
  'grammar.history.score': { vi: 'Điểm', en: 'Score' },
  'grammar.history.duration': { vi: 'Thời gian làm', en: 'Time taken' },
  'grammar.history.trimmed': {
    vi: 'Chỉ hiện {count} lần gần nhất.',
    en: 'Showing the latest {count} attempts.',
  },

  // ── Lỗi ────────────────────────────────────────────────────────────────
  'error.lessonIndex': {
    vi: 'Không tải được danh sách bài học. Chạy "npm run generate" rồi tải lại trang.',
    en: 'Could not load the lesson index. Run "npm run generate" and reload the page.',
  },
  'error.notFoundHint': {
    vi: 'Đường dẫn có thể đã cũ. Quay lại danh sách để chọn mục khác.',
    en: 'The link may be out of date. Go back to the list and pick another item.',
  },
} as const satisfies Record<string, Entry>;

export type MessageKey = keyof typeof MESSAGES;
