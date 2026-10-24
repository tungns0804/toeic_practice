/**
 * Mục lục khoá ngữ pháp: 18 chương, 59 bài, học tuần tự từ trên xuống.
 *
 * Thứ tự trong mảng CHÍNH LÀ lộ trình: bài sau chỉ mở khi bài liền trước đã đạt
 * (xem `GrammarProgressStore`). Mã bài ("1.1", "4.7") suy từ vị trí chứ không viết
 * tay, nên chèn thêm một bài vào giữa chương thì mã tự dồn lại cho đúng.
 *
 * `id` thì KHÔNG được đổi: tiến độ đã lưu của người học gắn vào id, và id cũng là
 * tên file nội dung trong `lessons/`.
 *
 * `scope` là ghi chú cho người soạn nội dung, không hiện ra giao diện. Các bài
 * cùng chương phải chia nhau kiến thức theo đúng ghi chú này, không bài nào dạy
 * lại bài khác.
 */

import type { GrammarChapter } from './grammar.model';

export const GRAMMAR_CHAPTERS: readonly GrammarChapter[] = [
  {
    id: 'word-forms',
    title: 'Word Forms',
    lessons: [
      {
        id: 'word-forms-suffix',
        title: {
          vi: 'Nhận biết Word Form qua Suffix (Hậu tố nhận dạng từ loại)',
          en: 'Recognising Word Forms by Suffix',
        },
        scope:
          'Hậu tố của danh từ (-tion/-sion, -ment, -ness, -ity, -ance/-ence, -er/-or, -ee, -ist, -ship), tính từ (-able/-ible, -ive, -ful, -less, -ous, -al, -ic, -ent/-ant, -ary), động từ (-ize, -ify, -en, -ate) và trạng từ (-ly). Ngoại lệ: tính từ tận cùng -ly (friendly, costly, timely), danh từ tận cùng -al (approval, proposal, arrival, rental), -ive làm danh từ (representative, initiative). Câu hỏi: nhìn hậu tố để chọn đúng từ loại khi cả bốn lựa chọn cùng gốc.',
      },
      {
        id: 'word-forms-position',
        title: {
          vi: 'Chọn đúng Word Form theo vị trí trong câu (Word Form by Sentence Position)',
          en: 'Choosing Word Forms by Sentence Position',
        },
        scope:
          'Vị trí quyết định từ loại: sau mạo từ/tính từ sở hữu/giới từ → danh từ; giữa mạo từ và danh từ → tính từ; sau linking verb (be, become, remain, seem) → tính từ; trước/sau động từ thường, giữa trợ động từ và động từ chính, trước tính từ/trạng từ khác → trạng từ; sau chủ ngữ → động từ; danh từ làm tân ngữ. Không dạy lại bảng hậu tố của bài 1.1, chỉ dùng nó.',
      },
      {
        id: 'word-forms-confused',
        title: {
          vi: 'Phân biệt các Word Form dễ nhầm lẫn (Commonly Confused Word Forms)',
          en: 'Commonly Confused Word Forms',
        },
        scope:
          'Cặp tính từ cùng gốc khác nghĩa: considerable/considerate, economic/economical, reliable/reliant, successful/successive, sensible/sensitive, comprehensive/comprehensible, respectable/respective, confident/confidential, industrial/industrious. Trạng từ hai dạng khác nghĩa: late/lately, hard/hardly, high/highly, near/nearly, close/closely, short/shortly. KHÔNG dạy tính từ -ing/-ed (chương 14) và KHÔNG dạy danh từ chỉ người/vật (bài 2.2).',
      },
    ],
  },
  {
    id: 'nouns',
    title: 'Nouns',
    lessons: [
      {
        id: 'nouns-countable',
        title: {
          vi: 'Danh từ đếm được và không đếm được (Countable & Uncountable Nouns)',
          en: 'Countable & Uncountable Nouns',
        },
        scope:
          'Danh từ không đếm được hay gặp trong TOEIC: equipment, information, advice, furniture, luggage/baggage, merchandise, feedback, machinery, clothing, stationery, research, access, permission. Từ hạn định đi kèm: many/much, few/little, a few/a little, a number of/an amount of, each/every/another + danh từ số ít, several/various/numerous/a variety of + số nhiều. Danh từ đếm được số ít luôn cần từ hạn định.',
      },
      {
        id: 'nouns-compound-person',
        title: {
          vi: 'Danh từ ghép và danh từ chỉ người – vật (Compound Nouns & Person vs. Thing Nouns)',
          en: 'Compound Nouns & Person vs. Thing Nouns',
        },
        scope:
          'Danh từ ghép hay gặp (safety regulations, application form, customer satisfaction, sales representative, expiration date, performance evaluation); danh từ đầu thường ở số ít. Phân biệt danh từ chỉ người với danh từ chỉ việc/vật cùng gốc: applicant/application, accountant/accounting, attendee/attendance, supervisor/supervision, consultant/consultation, participant/participation, employer/employee/employment; người số ít đếm được cần mạo từ.',
      },
    ],
  },
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    lessons: [
      {
        id: 'sva-basics',
        title: {
          vi: 'Nguyên tắc hòa hợp chủ ngữ – động từ (Basic Subject-Verb Agreement)',
          en: 'Basic Subject-Verb Agreement',
        },
        scope:
          'Quy tắc nền: chủ ngữ số ít → động từ thêm -s/es, is/was/has; số nhiều → nguyên mẫu, are/were/have. Tìm danh từ chính của cụm chủ ngữ. Chủ ngữ là V-ing, to V hoặc mệnh đề (What we need, That the price rose) → số ít. Động từ khuyết thiếu không chia. KHÔNG dạy cụm xen giữa (bài 3.2), lượng từ (3.3), chủ ngữ ghép (3.4).',
      },
      {
        id: 'sva-intervening',
        title: {
          vi: 'Chủ ngữ bị ngăn cách bởi cụm từ (Subjects Separated by Phrases)',
          en: 'Subjects Separated by Phrases',
        },
        scope:
          'Cụm giới từ xen giữa (The list of candidates is…), along with/as well as/together with/in addition to/accompanied by không làm chủ ngữ thành số nhiều, mệnh đề quan hệ và cụm phân từ chen giữa chủ ngữ với động từ chính, chủ ngữ dài nhiều tầng.',
      },
      {
        id: 'sva-quantifiers',
        title: {
          vi: 'Hòa hợp với từ chỉ số lượng (Agreement with Quantifiers)',
          en: 'Agreement with Quantifiers',
        },
        scope:
          'each/every/either/neither (+ of the + số nhiều) → số ít; one of the + danh từ số nhiều → số ít; a number of → số nhiều, the number of → số ít; all/most/some/half/part/percent of + danh từ: động từ theo danh từ sau "of"; none of; any/no + danh từ; many a.',
      },
      {
        id: 'sva-compound-subjects',
        title: {
          vi: 'Chủ ngữ ghép với and, or, nor (Compound Subjects)',
          en: 'Compound Subjects',
        },
        scope:
          'A and B → số nhiều (trừ khi cùng chỉ một người/vật: The president and CEO is…); both A and B → số nhiều; either A or B, neither A nor B, not only A but also B, A or B → động từ hoà hợp với chủ ngữ GẦN nhất; each/every + A and B → số ít.',
      },
      {
        id: 'sva-special-nouns',
        title: {
          vi: 'Danh từ tập hợp và danh từ đặc biệt (Collective & Special Nouns)',
          en: 'Collective & Special Nouns',
        },
        scope:
          'Danh từ tập hợp (staff, committee, team, board, management, audience) thường số ít trong tiếng Anh Mỹ; police/people/personnel/the elderly luôn số nhiều; danh từ tận cùng -s mà số ít (news, economics, series, means, statistics khi là môn học); số tiền, khoảng thời gian, khoảng cách là một khối → số ít; tên công ty, tên sách/dự án → số ít.',
      },
      {
        id: 'sva-inversion-there',
        title: {
          vi: 'Hòa hợp trong câu đảo và cấu trúc There + be (Inversion & There + be)',
          en: 'Inversion & There + be',
        },
        scope:
          'There is/are, there has/have been: động từ theo danh từ đứng SAU; câu đảo mở đầu bằng cụm tính từ/phân từ hay gặp trong thư: Attached is/are…, Enclosed is/are…, Included are…; đảo sau cụm trạng từ nơi chốn; động từ trong mệnh đề quan hệ hoà hợp với tiền ngữ (one of the employees who ARE…, the only one of the employees who IS…).',
      },
    ],
  },
  {
    id: 'verb-tenses',
    title: 'Verb Tenses',
    lessons: [
      {
        id: 'tenses-present',
        title: {
          vi: 'Hiện tại đơn và hiện tại tiếp diễn (Present Simple vs. Present Continuous)',
          en: 'Present Simple vs. Present Continuous',
        },
        scope:
          'Hiện tại đơn: thói quen, sự thật, lịch trình (usually, every, often, regularly, generally). Hiện tại tiếp diễn: đang diễn ra, tạm thời, xu hướng (currently, at the moment, now, presently, these days). Động từ trạng thái không dùng tiếp diễn (belong, consist, require, own, know, seem).',
      },
      {
        id: 'tenses-present-perfect',
        title: {
          vi: 'Hiện tại hoàn thành và hoàn thành tiếp diễn (Present Perfect & Present Perfect Continuous)',
          en: 'Present Perfect & Present Perfect Continuous',
        },
        scope:
          'have/has + V3 và have/has been + V-ing. Dấu hiệu: since + mốc, for + khoảng, already, yet, just, recently, lately, so far, to date, over/in the past/last + khoảng thời gian, ever/never, this is the first time. Phân biệt với quá khứ đơn (có mốc quá khứ cụ thể thì không dùng hoàn thành).',
      },
      {
        id: 'tenses-past',
        title: {
          vi: 'Quá khứ đơn và quá khứ tiếp diễn (Past Simple vs. Past Continuous)',
          en: 'Past Simple vs. Past Continuous',
        },
        scope:
          'Quá khứ đơn với ago, last, yesterday, in + năm, when + mốc quá khứ; động từ bất quy tắc hay gặp. Quá khứ tiếp diễn: hành động đang diễn ra thì bị cắt ngang (was doing … when … did), while + tiếp diễn, at this time yesterday.',
      },
      {
        id: 'tenses-past-perfect',
        title: {
          vi: 'Quá khứ hoàn thành (Past Perfect)',
          en: 'Past Perfect',
        },
        scope:
          'had + V3 cho hành động xảy ra trước một mốc/hành động khác trong quá khứ; by the time + quá khứ đơn, before/after, already/just trong quá khứ; quá khứ hoàn thành tiếp diễn (had been V-ing) cho khoảng thời gian kéo dài tới một mốc quá khứ.',
      },
      {
        id: 'tenses-future',
        title: {
          vi: 'Các cách diễn đạt tương lai (Future Forms)',
          en: 'Future Forms',
        },
        scope:
          'will (quyết định, dự đoán, hứa), be going to (dự định, dấu hiệu sẵn có), hiện tại tiếp diễn cho kế hoạch đã sắp xếp, hiện tại đơn cho lịch trình cố định, be about to, be scheduled/set/due to. Dấu hiệu: tomorrow, next, soon, in + khoảng thời gian, upcoming.',
      },
      {
        id: 'tenses-future-perfect',
        title: {
          vi: 'Tương lai hoàn thành và tương lai tiếp diễn (Future Perfect & Future Continuous)',
          en: 'Future Perfect & Future Continuous',
        },
        scope:
          'will have + V3 với by + mốc tương lai, by the time + hiện tại đơn, by the end of next…; will be + V-ing cho hành động đang diễn ra tại một thời điểm tương lai (this time next week, at 3 p.m. tomorrow); will have been V-ing (nhận biết).',
      },
      {
        id: 'tenses-time-clauses',
        title: {
          vi: 'Thì trong mệnh đề thời gian (Tenses in Time Clauses)',
          en: 'Tenses in Time Clauses',
        },
        scope:
          'Sau when, as soon as, once, after, before, until, by the time, while chỉ tương lai thì dùng hiện tại đơn hoặc hiện tại hoàn thành, KHÔNG dùng will; mệnh đề chính vẫn dùng will/câu mệnh lệnh. Phối hợp thì giữa hai mệnh đề. Bài này dạy CHỌN THÌ; nghĩa của từng liên từ thời gian để dành cho bài 13.1.',
      },
      {
        id: 'tenses-signals',
        title: {
          vi: 'Nhận diện thì qua dấu hiệu thời gian (Tense Signals Review)',
          en: 'Tense Signals Review',
        },
        scope:
          'Bài tổng hợp chương: chiến lược làm câu chọn thì trong Part 5/6 — tìm trạng từ thời gian, so khớp chủ ngữ số ít/nhiều, loại bị động/chủ động; trộn mọi thì đã học. Câu hỏi trộn đủ các thì, mỗi câu có dấu hiệu rõ ràng duy nhất.',
      },
    ],
  },
  {
    id: 'pronouns',
    title: 'Pronoun and Pronoun References',
    lessons: [
      {
        id: 'pronouns-case',
        title: {
          vi: 'Đại từ nhân xưng, tân ngữ và sở hữu (Subject, Object & Possessive Pronouns)',
          en: 'Subject, Object & Possessive Pronouns',
        },
        scope:
          'Bảng I/me/my/mine/myself đủ các ngôi. Chủ ngữ dùng đại từ chủ ngữ; sau động từ và giới từ dùng tân ngữ; tính từ sở hữu đứng trước danh từ; đại từ sở hữu đứng một mình (mine, theirs); of + đại từ sở hữu (a colleague of mine). KHÔNG dạy đại từ phản thân (bài 5.2).',
      },
      {
        id: 'pronouns-reflexive',
        title: {
          vi: 'Đại từ phản thân (Reflexive Pronouns)',
          en: 'Reflexive Pronouns',
        },
        scope:
          'myself…themselves: tân ngữ trùng chủ ngữ, nhấn mạnh (The CEO herself…), by oneself = on one\'s own = alone, introduce/familiarize/avail oneself; phân biệt với each other/one another; lỗi dùng phản thân thay cho tân ngữ thường.',
      },
      {
        id: 'pronouns-reference',
        title: {
          vi: 'Đại từ thay thế và sự nhất quán (Pronoun Reference & Agreement)',
          en: 'Pronoun Reference & Agreement',
        },
        scope:
          'Đại từ hoà hợp số với danh từ nó thay (the company → its, the employees → their); that/those thay danh từ đã nhắc (those of, that of), those who; one/ones; another/other/others/the other/the others; đại từ bất định (anyone, someone, everyone + động từ số ít; whoever).',
      },
    ],
  },
  {
    id: 'passive-voice',
    title: 'The Passive Voice',
    lessons: [
      {
        id: 'passive-forms',
        title: {
          vi: 'Cấu trúc câu bị động qua các thì (Passive Forms Across Tenses)',
          en: 'Passive Forms Across Tenses',
        },
        scope:
          'be + V3 ở mọi thì (is done, is being done, has been done, was done, will be done…), modal + be + V3, to be V3, being V3. Nội động từ (occur, happen, arrive, emerge, rise, remain) không có bị động. Câu hỏi: chọn đúng DẠNG bị động theo thì.',
      },
      {
        id: 'passive-active-choice',
        title: {
          vi: 'Chọn chủ động hay bị động (Choosing Active or Passive)',
          en: 'Choosing Active or Passive',
        },
        scope:
          'Phép thử tân ngữ: sau chỗ trống có tân ngữ → chủ động, không có → thường bị động; chủ ngữ là vật chịu tác động; bị động với hai tân ngữ (be given, be sent, be offered); bị động + giới từ cố định (be located in, be committed to, be interested in, be satisfied with); be expected/required/scheduled/advised to + V.',
      },
    ],
  },
  {
    id: 'prepositions',
    title: 'Prepositions and Prepositional Phrases',
    lessons: [
      {
        id: 'prepositions-time-place',
        title: {
          vi: 'Giới từ chỉ thời gian và nơi chốn (Prepositions of Time & Place)',
          en: 'Prepositions of Time & Place',
        },
        scope:
          'in/on/at cho thời gian và nơi chốn; by (hạn chót) vs until (kéo dài tới); for/during/since/within/throughout/over; between/among; across/along/through/toward; beside/next to/opposite; from…to/through.',
      },
      {
        id: 'prepositions-phrases',
        title: {
          vi: 'Cụm giới từ và collocation thường gặp (Prepositional Phrases & Collocations)',
          en: 'Prepositional Phrases & Collocations',
        },
        scope:
          'Cụm giới từ cố định: in charge of, on behalf of, in accordance with, according to, prior to, due to, in addition to, in response to, as of, ahead of, regardless of, in favor of. Động từ + giới từ (comply with, apply for, account for, depend on), tính từ + giới từ (responsible for, eligible for, familiar with, aware of), danh từ + giới từ (demand for, increase in, access to).',
      },
    ],
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions and Prepositions',
    lessons: [
      {
        id: 'conjunctions-coordinating',
        title: {
          vi: 'Liên từ kết hợp và liên từ tương quan (Coordinating & Correlative Conjunctions)',
          en: 'Coordinating & Correlative Conjunctions',
        },
        scope:
          'FANBOYS (for, and, nor, but, or, yet, so) và nghĩa của từng từ; cặp tương quan both…and, either…or, neither…nor, not only…but (also), whether…or; trạng từ liên kết (however, therefore, moreover, otherwise, consequently) và dấu câu đi kèm. KHÔNG dạy song song cấu trúc (chương 16).',
      },
      {
        id: 'conjunctions-vs-prepositions',
        title: {
          vi: 'Phân biệt liên từ và giới từ (Conjunctions vs. Prepositions)',
          en: 'Conjunctions vs. Prepositions',
        },
        scope:
          'Liên từ + mệnh đề, giới từ + danh từ/V-ing: because vs because of/due to/owing to; although/even though vs despite/in spite of/notwithstanding; while vs during; unless; in case vs in case of; before/after/since dùng được cả hai vai. Câu hỏi: nhìn phía sau chỗ trống là mệnh đề hay cụm danh từ.',
      },
    ],
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds and Infinitives',
    lessons: [
      {
        id: 'verbs-gerund-infinitive',
        title: {
          vi: 'Động từ đi với V-ing hoặc to V (Verbs + Gerund / Infinitive)',
          en: 'Verbs + Gerund / Infinitive',
        },
        scope:
          'Động từ + V-ing: avoid, consider, recommend, suggest, postpone, delay, finish, mind, include, involve, discontinue. Động từ + to V: agree, decide, plan, hope, intend, afford, aim, fail, offer, refuse, strive, hesitate. Động từ đổi nghĩa: stop, remember, forget, try, regret. Động từ + tân ngữ + to V (ask, encourage, allow, require, remind, enable).',
      },
      {
        id: 'gerunds-after-prepositions',
        title: {
          vi: 'V-ing sau giới từ và "to" là giới từ (Gerunds after Prepositions)',
          en: 'Gerunds after Prepositions',
        },
        scope:
          'Giới từ + V-ing (before leaving, by signing, without notifying, instead of); "to" là giới từ: look forward to, be committed/dedicated/devoted to, object to, be used/accustomed to, contribute to, with a view to, in addition to; phân biệt be used to V-ing với used to V; V-ing làm chủ ngữ.',
      },
      {
        id: 'infinitives-purpose',
        title: {
          vi: 'To V chỉ mục đích và to V sau tính từ, danh từ (Infinitives of Purpose & after Adjectives/Nouns)',
          en: 'Infinitives of Purpose & after Adjectives/Nouns',
        },
        scope:
          'in order to/so as to/to + V chỉ mục đích; tính từ + to V (be eager/able/likely/willing/hesitant to), It is + tính từ + to V; danh từ + to V (the ability/decision/opportunity/effort to); the first/last/only + to V; too…to, enough to; động từ sai khiến make/let/have + V nguyên mẫu, help + (to) V.',
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles',
    lessons: [
      {
        id: 'articles-a-an-the',
        title: {
          vi: 'Mạo từ a/an và the (Indefinite & Definite Articles)',
          en: 'Indefinite & Definite Articles',
        },
        scope:
          'a/an theo ÂM đầu (an hour, an MBA, a university, a one-time fee); a/an cho lần đầu nhắc, the cho thứ đã xác định/duy nhất/so sánh nhất/số thứ tự; danh từ đếm được số ít bắt buộc có từ hạn định; the + danh từ + of.',
      },
      {
        id: 'articles-zero',
        title: {
          vi: 'Không dùng mạo từ và các trường hợp đặc biệt (Zero Article & Special Cases)',
          en: 'Zero Article & Special Cases',
        },
        scope:
          'Không mạo từ với danh từ số nhiều/không đếm được nói chung, bữa ăn, phương tiện (by train, by email), các cụm cố định (go to work, at home, in person, on time); the + tính từ chỉ nhóm người; a few/few, a little/little; such a/quite a; mạo từ với tên riêng, tên công ty.',
      },
    ],
  },
  {
    id: 'comparisons',
    title: 'Comparisons',
    lessons: [
      {
        id: 'comparisons-comparative-superlative',
        title: {
          vi: 'So sánh hơn và so sánh nhất (Comparative & Superlative)',
          en: 'Comparative & Superlative',
        },
        scope:
          '-er/more + than; the -est/most (+ in/of/ever); bất quy tắc (good/better/best, bad/worse/worst, far/farther/further, little/less/least); trạng từ nhấn so sánh hơn (much, far, even, still, a lot, significantly, considerably — KHÔNG dùng very); one of the + so sánh nhất + danh từ số nhiều; the + so sánh hơn…, the + so sánh hơn…; the + so sánh hơn + of the two.',
      },
      {
        id: 'comparisons-equality',
        title: {
          vi: 'So sánh bằng và các cấu trúc đặc biệt (Equality & Special Comparisons)',
          en: 'Equality & Special Comparisons',
        },
        scope:
          'as + tính/trạng từ + as, not as/so … as; as many/much + danh từ + as; số lần (twice/three times as … as); the same (noun) as, similar to, different from, compared to/with; less … than, the least; superior/inferior/prior/preferable to; prefer A to B, would rather … than.',
      },
    ],
  },
  {
    id: 'adjective-clauses',
    title: 'Adjective Clauses',
    lessons: [
      {
        id: 'relative-pronouns',
        title: {
          vi: 'Đại từ quan hệ who, which, that, whose, whom (Relative Pronouns)',
          en: 'Relative Pronouns',
        },
        scope:
          'Chọn đại từ quan hệ theo tiền ngữ (người/vật) và vai trò (chủ ngữ/tân ngữ/sở hữu): who, whom, which, that, whose + danh từ; phân biệt whose với who\'s; đại từ quan hệ làm tân ngữ có thể lược. KHÔNG dạy dấu phẩy xác định/không xác định (bài 12.2).',
      },
      {
        id: 'relative-clauses-defining',
        title: {
          vi: 'Mệnh đề quan hệ xác định và không xác định (Defining vs. Non-defining Clauses)',
          en: 'Defining vs. Non-defining Clauses',
        },
        scope:
          'Dấu phẩy và ý nghĩa; không dùng that sau dấu phẩy; which thay cả mệnh đề trước; giới từ + whom/which (to whom, in which); lượng từ + of whom/which (most of whom, some of which); động từ trong mệnh đề quan hệ hoà hợp với tiền ngữ.',
      },
      {
        id: 'relative-clauses-reduced',
        title: {
          vi: 'Rút gọn mệnh đề quan hệ và trạng từ quan hệ (Reduced Clauses & Relative Adverbs)',
          en: 'Reduced Clauses & Relative Adverbs',
        },
        scope:
          'Rút gọn bằng V-ing (chủ động), V3 (bị động), to V (sau the first/only/last); where/when/why và tương đương giới từ + which (where = in which); lược đại từ quan hệ tân ngữ. Câu hỏi hay gặp: "the documents ------- by the manager" chọn reviewed/reviewing.',
      },
    ],
  },
  {
    id: 'adverb-clauses',
    title: 'Adverb Clauses',
    lessons: [
      {
        id: 'adverb-clauses-time',
        title: {
          vi: 'Mệnh đề trạng ngữ chỉ thời gian (Adverb Clauses of Time)',
          en: 'Adverb Clauses of Time',
        },
        scope:
          'NGHĨA và cách chọn liên từ thời gian: when, while, as, as soon as, once, until/till, before, after, since, by the time, whenever, the moment. Phân biệt until với by the time, since với for. Cách chia thì trong mệnh đề thời gian đã có ở bài 4.7 — chỉ nhắc lại một dòng.',
      },
      {
        id: 'adverb-clauses-reason-result',
        title: {
          vi: 'Mệnh đề chỉ nguyên nhân, mục đích và kết quả (Reason, Purpose & Result)',
          en: 'Reason, Purpose & Result',
        },
        scope:
          'Nguyên nhân: because, since, as, now that, in that; mục đích: so that, in order that (+ can/could/will/would); kết quả: so + tính/trạng từ + that, such (a/an) + (tính từ) + danh từ + that, so many/much/few/little + danh từ + that.',
      },
      {
        id: 'adverb-clauses-contrast',
        title: {
          vi: 'Mệnh đề nhượng bộ và tương phản (Concession & Contrast)',
          en: 'Concession & Contrast',
        },
        scope:
          'although/though/even though, even if, while/whereas (tương phản hai vế), no matter how/what/who, however + tính từ + S + V, whatever/whoever; tính từ/trạng từ + as/though + S + V (Hard as he tried…). KHÔNG dạy despite/in spite of (đã có ở bài 8.2).',
      },
      {
        id: 'adverb-clauses-condition',
        title: {
          vi: 'Liên từ điều kiện và rút gọn mệnh đề trạng ngữ (Conditional Connectors & Reduced Clauses)',
          en: 'Conditional Connectors & Reduced Clauses',
        },
        scope:
          'if, unless, provided/providing (that), as long as, only if, in case, in the event that, otherwise, or else; rút gọn mệnh đề trạng ngữ: when/while/before/after/since + V-ing, once/if/unless/when + V3 (once approved, unless otherwise noted, if necessary). KHÔNG dạy các loại câu điều kiện 1-2-3 (chương 18).',
      },
    ],
  },
  {
    id: 'modifiers',
    title: 'Modifiers and Dangling Participles',
    lessons: [
      {
        id: 'participle-adjectives',
        title: {
          vi: 'Phân từ làm tính từ: V-ing và V-ed (Participial Adjectives)',
          en: 'Participial Adjectives',
        },
        scope:
          'V-ing mang nghĩa chủ động/gây ra cảm xúc, V3/-ed mang nghĩa bị động/chịu cảm xúc: interesting/interested, satisfying/satisfied, confusing/confused; phân từ đứng trước danh từ hay gặp: the attached file, the enclosed form, a detailed report, an experienced staff member, the remaining items, rising costs, the existing system, a leading company, the revised schedule.',
      },
      {
        id: 'participle-phrases',
        title: {
          vi: 'Cụm phân từ đầu câu (Participial Phrases)',
          en: 'Participial Phrases',
        },
        scope:
          'Cụm phân từ đầu câu và giữa câu: V-ing (chủ động), V3 (bị động: Located in…, Founded in 1990…), Having + V3 (hoàn thành trước); chọn V-ing hay V3 dựa vào chủ ngữ của mệnh đề chính; cụm phân từ cuối câu chỉ kết quả (…, resulting in…).',
      },
      {
        id: 'dangling-modifiers',
        title: {
          vi: 'Bổ ngữ treo và vị trí bổ ngữ (Dangling & Misplaced Modifiers)',
          en: 'Dangling & Misplaced Modifiers',
        },
        scope:
          'Chủ ngữ ngầm của cụm phân từ phải trùng chủ ngữ mệnh đề chính, cách sửa câu bị treo; vị trí của only/almost/even/just/nearly; trạng từ bổ nghĩa cho cả câu (Unfortunately, Ideally) vs trạng từ bổ nghĩa động từ; câu hỏi chọn chủ ngữ hoặc dạng phân từ phù hợp.',
      },
    ],
  },
  {
    id: 'noun-clauses',
    title: 'Noun Clauses',
    lessons: [
      {
        id: 'noun-clauses-that',
        title: {
          vi: 'Mệnh đề danh từ với that (That-Clauses)',
          en: 'That-Clauses',
        },
        scope:
          'that-clause làm tân ngữ (announce/confirm/indicate/ensure that), làm chủ ngữ (That the merger failed surprised…), sau tính từ (be aware/confident/sure that), the fact that, It is + tính từ/V3 + that (It is expected that…), the + danh từ + that (the news that). Phân biệt that (mệnh đề danh từ) với what.',
      },
      {
        id: 'noun-clauses-wh-whether',
        title: {
          vi: 'Mệnh đề danh từ với wh- và whether/if (Wh- & Whether Clauses)',
          en: 'Wh- & Whether Clauses',
        },
        scope:
          'what = the thing that; trật tự câu hỏi gián tiếp (Do you know where the office IS); whether vs if (sau giới từ, đầu câu, whether or not, whether to V chỉ dùng whether); whoever/whatever/whichever làm chủ ngữ hoặc tân ngữ; how + tính từ.',
      },
      {
        id: 'noun-clauses-subjunctive',
        title: {
          vi: 'Câu giả định sau động từ và tính từ yêu cầu (Subjunctive after Demand Verbs)',
          en: 'Subjunctive after Demand Verbs',
        },
        scope:
          'recommend/suggest/insist/require/request/ask/propose/demand that + S + V nguyên mẫu (không -s, be cho mọi ngôi, not + V cho phủ định); It is essential/imperative/vital/necessary/important/mandatory that + S + V nguyên mẫu; danh từ tương ứng (the recommendation that…).',
      },
    ],
  },
  {
    id: 'parallel-structures',
    title: 'Parallel Structures',
    lessons: [
      {
        id: 'parallel-coordinators',
        title: {
          vi: 'Cấu trúc song song với and, but, or (Parallelism with Coordinators)',
          en: 'Parallelism with Coordinators',
        },
        scope:
          'Các thành phần nối bằng and/but/or phải cùng dạng: danh từ – danh từ, tính từ – tính từ, động từ cùng thì, V-ing – V-ing, to V – (to) V; danh sách ba thành phần; mẹo nhìn thành phần đã có ở vế bên kia để chọn dạng từ.',
      },
      {
        id: 'parallel-correlatives',
        title: {
          vi: 'Song song với liên từ tương quan và phép so sánh (Parallelism with Correlatives & Comparisons)',
          en: 'Parallelism with Correlatives & Comparisons',
        },
        scope:
          'both…and, not only…but also, either…or, neither…nor, whether…or: hai vế cùng dạng và vị trí cặp từ; rather than, instead of, as well as; so sánh song song (than/as + cùng dạng: To reserve online is cheaper than to call; the price of A vs that of B).',
      },
      {
        id: 'parallel-consistency',
        title: {
          vi: 'Song song về thì, thể và dạng từ (Parallel Tense, Voice & Word Form)',
          en: 'Parallel Tense, Voice & Word Form',
        },
        scope:
          'Vị ngữ ghép phải đồng nhất thì và thể (was reviewed and approved), chuỗi tính từ/trạng từ cùng loại (efficient and reliable, quickly and accurately), danh từ trừu tượng cùng loại; bài tổng hợp chương với câu hỏi trộn.',
      },
    ],
  },
  {
    id: 'modals',
    title: 'Modals and Modal-Like Verbs',
    lessons: [
      {
        id: 'modals-core',
        title: {
          vi: 'Động từ khuyết thiếu cơ bản (Core Modals)',
          en: 'Core Modals',
        },
        scope:
          'can, could, may, might, must, should, will, would, shall: modal + V nguyên mẫu, không chia, không to; nghĩa khả năng, xin phép, bắt buộc, lời khuyên, đề nghị lịch sự (Would you mind…, Could you…); must vs mustn\'t vs don\'t have to; modal + be + V3 (bị động) và modal + be + V-ing.',
      },
      {
        id: 'modals-semi',
        title: {
          vi: 'Cụm động từ tình thái (Semi-modals)',
          en: 'Semi-modals',
        },
        scope:
          'have to/has to/had to, be able to, ought to, had better (+ V, not to V), be supposed to, be allowed/permitted to, need to/needn\'t, would rather + V, used to; chia thì với semi-modal (will have to, has been able to); phân biệt với modal thuần.',
      },
      {
        id: 'modals-perfect',
        title: {
          vi: 'Modal hoàn thành và suy luận (Perfect Modals & Deduction)',
          en: 'Perfect Modals & Deduction',
        },
        scope:
          'must have V3 (chắc chắn đã), can\'t/couldn\'t have V3 (không thể đã), may/might/could have V3 (có lẽ đã), should/ought to have V3 (lẽ ra nên), needn\'t have V3; suy luận ở hiện tại (must be, can\'t be, may be); modal hoàn thành bị động (should have been sent).',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditional Sentences and Wishes',
    lessons: [
      {
        id: 'conditionals-zero-first',
        title: {
          vi: 'Câu điều kiện loại 0 và loại 1 (Zero & First Conditionals)',
          en: 'Zero & First Conditionals',
        },
        scope:
          'Loại 0: If + hiện tại đơn, hiện tại đơn (sự thật, quy trình). Loại 1: If + hiện tại đơn, will/can/may/should + V hoặc câu mệnh lệnh; If + should (lịch sự) ; không dùng will trong mệnh đề if (trừ will = sẵn lòng). Câu hỏi chọn dạng động từ đúng ở mỗi mệnh đề.',
      },
      {
        id: 'conditionals-second',
        title: {
          vi: 'Câu điều kiện loại 2 (Second Conditional)',
          en: 'Second Conditional',
        },
        scope:
          'If + quá khứ đơn (were cho mọi ngôi), would/could/might + V: giả định trái hiện tại hoặc khó xảy ra; If I were you (lời khuyên); phân biệt với loại 1 theo mức độ có thật.',
      },
      {
        id: 'conditionals-third-mixed',
        title: {
          vi: 'Câu điều kiện loại 3 và câu hỗn hợp (Third & Mixed Conditionals)',
          en: 'Third & Mixed Conditionals',
        },
        scope:
          'Loại 3: If + had V3, would/could/might have V3 (trái quá khứ). Hỗn hợp: If + had V3, would + V (now); If + quá khứ đơn, would have V3. Dấu hiệu thời gian quyết định loại.',
      },
      {
        id: 'conditionals-inversion',
        title: {
          vi: 'Đảo ngữ câu điều kiện (Inverted Conditionals: Should, Were, Had)',
          en: 'Inverted Conditionals: Should, Were, Had',
        },
        scope:
          'Should + S + V (= If … should, rất hay gặp trong thư: Should you have any questions…), Were + S + to V / Were + S + …, Had + S + V3; Were it not for / Had it not been for, But for / Without + danh từ; otherwise.',
      },
      {
        id: 'wishes',
        title: {
          vi: 'Câu ước và cấu trúc giả định khác (Wishes, If only, It\'s time, As if)',
          en: 'Wishes, If only, It\'s time, As if',
        },
        scope:
          'wish/if only + quá khứ đơn (ước hiện tại), + had V3 (ước quá khứ), + would/could V (mong điều khác thay đổi); It\'s (high/about) time + S + quá khứ đơn / for + O + to V; as if/as though + quá khứ (giả định); would rather + S + quá khứ đơn.',
      },
    ],
  },
];

/** Một bài học kèm vị trí của nó trong lộ trình. */
export interface GrammarLessonEntry {
  id: string;
  /** Mã hiển thị, ví dụ "4.7". */
  code: string;
  /** Vị trí trong toàn khoá, bắt đầu từ 0 — dùng để xét mở khoá tuần tự. */
  index: number;
  chapter: GrammarChapter;
  /** Số thứ tự chương, bắt đầu từ 1. */
  chapterNumber: number;
  meta: GrammarChapter['lessons'][number];
}

/** Toàn bộ bài học trải phẳng theo đúng thứ tự học. */
export const GRAMMAR_LESSONS: readonly GrammarLessonEntry[] = GRAMMAR_CHAPTERS.flatMap(
  (chapter, chapterIndex) =>
    chapter.lessons.map((meta, lessonIndex) => ({
      id: meta.id,
      code: `${chapterIndex + 1}.${lessonIndex + 1}`,
      index: 0,
      chapter,
      chapterNumber: chapterIndex + 1,
      meta,
    })),
).map((entry, index) => ({ ...entry, index }));

const BY_ID = new Map(GRAMMAR_LESSONS.map((entry) => [entry.id, entry]));

export function findGrammarLesson(id: string): GrammarLessonEntry | undefined {
  return BY_ID.get(id);
}
