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
  'app.tagline': {
    vi: 'Thì · Từ vựng theo band · Bài tập chuyên đề',
    en: 'Tenses · Vocabulary by band · Focused drills',
  },
  'app.nav': { vi: 'Điều hướng chính', en: 'Main navigation' },
  'app.nav.home': { vi: 'Trang chủ', en: 'Home' },
  'app.nav.tense': { vi: 'Các thì', en: 'Tenses' },
  'app.nav.vocabulary': { vi: 'Từ vựng', en: 'Vocabulary' },
  'app.nav.exercise': { vi: 'Bài tập', en: 'Drills' },
  'app.language.switch': { vi: 'Chuyển sang {name}', en: 'Switch to {name}' },
  'app.skipToContent': { vi: 'Tới nội dung chính', en: 'Skip to main content' },
  'app.backToTop': { vi: 'Lên đầu trang', en: 'Back to top' },

  // ── Giao diện sáng/tối ─────────────────────────────────────────────────
  'theme.system': { vi: 'Tự động', en: 'Auto' },
  'theme.light': { vi: 'Sáng', en: 'Light' },
  'theme.dark': { vi: 'Tối', en: 'Dark' },
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

  // ── Trang chủ ──────────────────────────────────────────────────────────
  'home.title': { vi: 'Luyện thi TOEIC 990', en: 'TOEIC 990 Practice' },
  'home.lead': {
    vi: 'Ba khu luyện tập độc lập: nắm chắc 12 thì, mở rộng từ vựng theo band điểm, và luyện riêng từng chuyên đề ngữ pháp hay sai.',
    en: 'Three independent areas: master the 12 tenses, grow vocabulary band by band, and drill the grammar points that cost the most points.',
  },
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
  'home.card.open': { vi: 'Mở →', en: 'Open →' },
  'home.stat.tenses': { vi: '{count} thì', en: '{count} tenses' },
  'home.stat.words': { vi: '{count} từ', en: '{count} words' },
  'home.stat.sentences': { vi: '{count} câu', en: '{count} sentences' },
  'home.tips.title': { vi: 'Cách dùng hiệu quả', en: 'How to get the most out of it' },
  'home.tips.1': {
    vi: 'Đọc lý thuyết một thì, rồi luyện ngay phần dịch của chính thì đó — nhớ công thức mà không tự đặt được câu thì vào phòng thi vẫn sai.',
    en: 'Read one tense, then immediately drill its translations — a formula you cannot turn into a sentence still fails on test day.',
  },
  'home.tips.2': {
    vi: 'Từ nào sai thì bấm ★. Lần sau chọn phạm vi "Đã đánh dấu ★" để chỉ luyện đúng nhóm đó.',
    en: 'Star (★) whatever you get wrong, then set the scope to "Starred" next time to drill exactly those items.',
  },
  'home.tips.3': {
    vi: 'Chế độ gõ đáp án khó hơn trắc nghiệm nhiều nhưng sát với Part 5–6 hơn. Trắc nghiệm chỉ nên dùng ở lượt làm quen đầu tiên.',
    en: 'Typing is much harder than multiple choice but far closer to Parts 5–6. Keep multiple choice for the first pass only.',
  },
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
  'pos.phrase': { vi: 'Cụm từ', en: 'Phrase' },
  'pos.preposition': { vi: 'Giới từ', en: 'Preposition' },
  'pos.conjunction': { vi: 'Liên từ', en: 'Conjunction' },
  'pos.noun.short': { vi: 'D.từ', en: 'n.' },
  'pos.verb.short': { vi: 'Đ.từ', en: 'v.' },
  'pos.adjective.short': { vi: 'T.từ', en: 'adj.' },
  'pos.adverb.short': { vi: 'Tr.từ', en: 'adv.' },
  'pos.phrase.short': { vi: 'Cụm', en: 'phr.' },
  'pos.preposition.short': { vi: 'G.từ', en: 'prep.' },
  'pos.conjunction.short': { vi: 'L.từ', en: 'conj.' },

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
  'result.backToSection': { vi: 'Về phần vừa luyện', en: 'Back to the section' },
  'result.home': { vi: 'Trang chủ', en: 'Home' },
  'result.details': { vi: 'Chi tiết từng câu', en: 'Question by question' },
  'result.filter.all': { vi: 'Tất cả ({count})', en: 'All ({count})' },
  'result.filter.wrong': { vi: 'Sai ({count})', en: 'Wrong ({count})' },
  'result.filter.retried': { vi: 'Thử lại ({count})', en: 'Retried ({count})' },
  'result.yourAnswers': { vi: 'Bạn đã trả lời:', en: 'You answered:' },
  'result.noAnswer': { vi: 'Không trả lời', en: 'No answer' },
  'result.empty': { vi: 'Không có câu nào trong bộ lọc này.', en: 'No questions match this filter.' },

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
