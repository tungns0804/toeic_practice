import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-signals',
  intro: {
    vi: 'Bài tổng hợp chương 4: thay vì học riêng từng thì, bạn luyện một quy trình ba bước cho mọi câu chọn thì trong Part 5/6: tìm **dấu hiệu thời gian**, so khớp **chủ ngữ số ít/số nhiều**, rồi kiểm tra **chủ động hay bị động**. Câu luyện tập trộn đủ các thì đã học, mỗi câu có một dấu hiệu quyết định duy nhất.',
    en: 'This chapter review moves from single tenses to one three-step routine for every tense item in Part 5/6: find the **time signal**, match the **singular or plural subject**, then check **active or passive**. The practice items mix all the tenses you have learned, and each one has a single deciding cue.',
  },
  mistakes: [
    {
      wrong: 'Since Mr. Ito [[has joined]] the company in 2020, our online sales have doubled.',
      right: 'Since Mr. Ito [[joined]] the company in 2020, our online sales have doubled.',
      explanation: {
        vi: 'Mệnh đề sau **since** nêu MỐC bắt đầu và có **in 2020** (mốc quá khứ đã kết thúc) → quá khứ đơn **joined**. Hiện tại hoàn thành thuộc về mệnh đề chính: sales **have doubled**.',
        en: 'The clause after **since** names the STARTING POINT and contains **in 2020**, a finished past time → Past Simple **joined**. The Present Perfect belongs in the main clause: sales **have doubled**.',
      },
    },
    {
      wrong: 'The printer broke down last Monday, and a technician [[will repair]] it the next day.',
      right: 'The printer broke down last Monday, and a technician [[repaired]] it the next day.',
      explanation: {
        vi: '**the next day** (ngày hôm sau) được tính từ mốc **last Monday** đã qua, nên vẫn là quá khứ → **repaired**. Chỉ **next + thời gian** không có the (next week, next Monday) mới tính từ hôm nay và chỉ tương lai.',
        en: '**the next day** counts from **last Monday**, which is already past, so it is still past → **repaired**. Only **next + time** without the (next week, next Monday) counts from today and points to the future.',
      },
    },
    {
      wrong: 'The new safety procedures for the warehouse [[was]] explained to all staff yesterday.',
      right: 'The new safety procedures for the warehouse [[were]] explained to all staff yesterday.',
      explanation: {
        vi: '**yesterday** cho đúng thì quá khứ, nhưng danh từ chính của chủ ngữ là **procedures** (số nhiều) → **were**. Đừng chia theo **warehouse**: nó đứng sát động từ nhưng chỉ nằm trong cụm giới từ.',
        en: '**yesterday** gives the right tense, the past, but the head of the subject is **procedures** (plural) → **were**. Do not agree with **warehouse**: it sits next to the verb but belongs to a prepositional phrase.',
      },
    },
    {
      wrong: 'The main conference room [[will clean]] before the board meeting tomorrow morning.',
      right: 'The main conference room [[will be cleaned]] before the board meeting tomorrow morning.',
      explanation: {
        vi: '**tomorrow morning** cho đúng thì tương lai, nhưng phòng họp không tự dọn dẹp được và sau động từ không có tân ngữ → bị động **will be cleaned**.',
        en: '**tomorrow morning** gives the right tense, the future, but a room cannot clean anything and no object follows the verb → passive **will be cleaned**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Ba bước giải một câu chọn thì', en: 'Three steps for any tense item' },
      body: {
        vi: 'Câu chọn thì rất dễ nhận ra: bốn lựa chọn là cùng một động từ ở các dạng khác nhau (reviews / is reviewing / has reviewed / was reviewed…). Đừng vội dịch cả câu; hãy đi lần lượt ba bước dưới đây, mỗi bước loại bớt những lựa chọn sai.',
        en: 'Tense items are easy to spot: all four options are one verb in different forms (reviews / is reviewing / has reviewed / was reviewed...). Do not rush to translate the whole sentence; go through the three steps below, and each step removes some wrong options.',
      },
      table: {
        head: [
          { vi: 'Bước', en: 'Step' },
          { vi: 'Tự hỏi', en: 'Ask yourself' },
          { vi: 'Loại được', en: 'What it rules out' },
        ],
        rows: [
          [
            { vi: '1. Thời gian', en: '1. Time' },
            { vi: 'Câu có dấu hiệu thời gian nào? Xét cả trạng từ, cụm giới từ, mệnh đề thời gian và thì của mệnh đề còn lại.', en: 'What time signal is there? Check adverbs, prepositional phrases, time clauses and the tense of the other clause.' },
            { vi: 'Các thì mâu thuẫn với dấu hiệu', en: 'Tenses that clash with the signal' },
          ],
          [
            { vi: '2. Chủ ngữ', en: '2. Subject' },
            { vi: 'Danh từ chính của chủ ngữ là số ít hay số nhiều?', en: 'Is the head noun of the subject singular or plural?' },
            { vi: 'Dạng chia sai số: is/are, has/have, was/were, V/V-s', en: 'Forms with the wrong number: is/are, has/have, was/were, V/V-s' },
          ],
          [
            { vi: '3. Chủ động / bị động', en: '3. Voice' },
            { vi: 'Sau chỗ trống có tân ngữ không? Chủ ngữ tự làm hay chịu tác động?', en: 'Is there an object after the blank? Does the subject act or receive the action?' },
            { vi: 'Dạng chủ động hoặc bị động không hợp', en: 'The wrong voice, active or passive' },
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Thử với câu: Since January, the two hotels ------- 30 new staff members. (A) hires (B) has hired (C) have hired (D) have been hired. Bước 1: **Since January** → hiện tại hoàn thành, loại (A). Bước 2: **hotels** số nhiều → loại (B). Bước 3: sau chỗ trống có tân ngữ **30 new staff members** → chủ động, loại (D). Đáp án: (C) have hired.',
          en: 'Try it: Since January, the two hotels ------- 30 new staff members. (A) hires (B) has hired (C) have hired (D) have been hired. Step 1: **Since January** → Present Perfect, so (A) is out. Step 2: **hotels** is plural → (B) is out. Step 3: the object **30 new staff members** follows → active, so (D) is out. Answer: (C) have hired.',
        },
      },
    },
    {
      heading: { vi: 'Bảng dấu hiệu thời gian của cả chương', en: 'Chapter map of time signals' },
      body: {
        vi: 'Mỗi dấu hiệu dưới đây đã được học kỹ trong một bài riêng của chương; bảng này gom chúng lại để bạn tra nhanh khi làm đề.',
        en: 'Each signal below was covered in detail in its own lesson of this chapter; this table puts them together for quick reference while you practise.',
      },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Thì thường dùng', en: 'Usual tense' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'usually, often, always, regularly, generally, every + day/week…',
            { vi: 'Hiện tại đơn (bài 4.1)', en: 'Present Simple (lesson 4.1)' },
            'Ms. Ruiz **reviews** the payroll every Friday.',
          ],
          [
            'now, currently, at the moment, right now, these days',
            { vi: 'Hiện tại tiếp diễn (bài 4.1)', en: 'Present Continuous (lesson 4.1)' },
            'The IT team **is updating** the server at the moment.',
          ],
          [
            'since + point, for + period (until now), so far, to date, over the past + period, ever, never',
            { vi: 'Hiện tại hoàn thành (bài 4.2)', en: 'Present Perfect (lesson 4.2)' },
            'We **have hired** six engineers so far this year.',
          ],
          [
            'ago, yesterday, last + time, in + past year',
            { vi: 'Quá khứ đơn (bài 4.3)', en: 'Past Simple (lesson 4.3)' },
            'The firm **moved** to Osaka three years ago.',
          ],
          [
            'while…, at this time yesterday, (long action) when + past simple (short action)',
            { vi: 'Quá khứ tiếp diễn (bài 4.3)', en: 'Past Continuous (lesson 4.3)' },
            'He **was printing** the slides when the power went out.',
          ],
          [
            'by the time + past simple, by + past point (by 2019, by the end of last year)',
            { vi: 'Quá khứ hoàn thành (bài 4.4)', en: 'Past Perfect (lesson 4.4)' },
            'By the time the client called, we **had shipped** the order.',
          ],
          [
            'tomorrow, next + time, soon, upcoming, in + period (from now)',
            { vi: 'Các dạng tương lai: will, be going to… (bài 4.5)', en: 'Future forms: will, be going to... (lesson 4.5)' },
            'The new branch **will open** next month.',
          ],
          [
            'by + future point, by the time + present simple, by the end of next + time',
            { vi: 'Tương lai hoàn thành (bài 4.6)', en: 'Future Perfect (lesson 4.6)' },
            'By June 30, we **will have hired** ten new interns.',
          ],
          [
            'this time next week, at + clock time + tomorrow',
            { vi: 'Tương lai tiếp diễn (bài 4.6)', en: 'Future Continuous (lesson 4.6)' },
            'At 3 p.m. tomorrow, Ms. Kim **will be flying** to Seoul.',
          ],
          [
            'when, as soon as, once, until, before, after + future meaning',
            { vi: 'Hiện tại đơn / hiện tại hoàn thành trong mệnh đề thời gian (bài 4.7)', en: 'Present Simple / Present Perfect in the time clause (lesson 4.7)' },
            'We will call you as soon as the parts **arrive**.',
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Một dấu hiệu chỉ giúp loại những thì mâu thuẫn với nó, chứ không phải lúc nào cũng chỉ đúng một thì. Ví dụ, **tomorrow** đi được với will, be going to, hiện tại tiếp diễn và tương lai tiếp diễn; đề Part 5 thường chỉ đặt một trong số đó vào bốn lựa chọn.',
          en: 'A signal only helps you rule out the tenses that clash with it; it does not always point to exactly one tense. For example, **tomorrow** works with will, be going to, the present continuous and the future continuous; a Part 5 item normally puts only one of them among the options.',
        },
      },
    },
    {
      heading: { vi: 'Những dấu hiệu dễ đánh lừa', en: 'Signals that can mislead' },
      points: [
        {
          vi: '**recently** đi được với cả quá khứ đơn lẫn hiện tại hoàn thành (She **recently joined** / **has recently joined** our team). Riêng nó chưa đủ để chọn thì; hãy tìm thêm dấu hiệu khác.',
          en: '**recently** works with both the Past Simple and the Present Perfect (She **recently joined** / **has recently joined** our team). On its own it cannot decide the tense; look for another cue.',
        },
        {
          vi: '**already, just, yet** không chỉ thuộc về hiện tại hoàn thành: khi mốc tham chiếu ở quá khứ thì dùng quá khứ hoàn thành (When we arrived, the seminar **had already started**).',
          en: '**already, just, yet** do not belong only to the Present Perfect: when the reference point is in the past, use the Past Perfect (When we arrived, the seminar **had already started**).',
        },
        {
          vi: '**in**: **in 2019** → quá khứ; **in two weeks** (hai tuần nữa, tính từ bây giờ) → tương lai; **in the past two weeks** → hiện tại hoàn thành.',
          en: '**in**: **in 2019** → past; **in two weeks** (two weeks from now) → future; **in the past two weeks** → Present Perfect.',
        },
        {
          vi: '**last**: **last year** → quá khứ đơn; **for the last three years** (khoảng kéo dài tới nay) → thường dùng hiện tại hoàn thành.',
          en: '**last**: **last year** → Past Simple; **for the last three years** (a period running up to now) → usually the Present Perfect.',
        },
        {
          vi: '**next week** (không có the) tính từ hôm nay → tương lai; **the next day / the following week** tính từ một mốc khác, nên trong câu kể chuyện quá khứ vẫn dùng quá khứ.',
          en: '**next week** (no the) counts from today → future; **the next day / the following week** counts from another point, so in a past narrative it still takes a past tense.',
        },
        {
          vi: '**since** còn có nghĩa "vì" (= because); khi đó nó không đòi hiện tại hoàn thành: **Since** the printer is broken, please use the one on the third floor.',
          en: '**since** can also mean "because"; in that case it does not require the Present Perfect: **Since** the printer is broken, please use the one on the third floor.',
        },
        {
          vi: '**now, currently** đi với động từ trạng thái (own, require, belong…) thì vẫn dùng hiện tại đơn: The company now **owns** five hotels in the region.',
          en: '**now, currently** with a stative verb (own, require, belong...) still take the Present Simple: The company now **owns** five hotels in the region.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Câu có **since + mệnh đề** chứa hai thì khác nhau: mệnh đề sau since nêu mốc bắt đầu nên thường dùng quá khứ đơn, còn mệnh đề chính mới dùng hiện tại hoàn thành: Since Ms. Diaz **joined** the team, sales **have doubled**. Đề hay đặt chỗ trống ở mệnh đề sau since để bẫy người chỉ nhớ "since → have V3".',
          en: 'A sentence with **since + clause** contains two different tenses: the since-clause names the starting point, so it usually takes the Past Simple, while the main clause takes the Present Perfect: Since Ms. Diaz **joined** the team, sales **have doubled**. The test likes to put the blank in the since-clause to trap anyone who only remembers "since → have V3".',
        },
      },
    },
    {
      heading: { vi: 'Bước 2: so khớp chủ ngữ số ít / số nhiều', en: 'Step 2: matching a singular or plural subject' },
      body: {
        vi: 'Dấu hiệu thời gian thường chỉ loại được hai lựa chọn; hai lựa chọn còn lại hay cùng một thì nhưng khác số (has/have, was/were). Không phải thì nào cũng đổi theo chủ ngữ, nên cần biết thì nào "lộ" số ít hay số nhiều.',
        en: 'The time signal often rules out only two options; the remaining two are frequently the same tense in different numbers (has/have, was/were). Not every tense changes with the subject, so you need to know which ones show singular or plural.',
      },
      table: {
        head: [
          { vi: 'Thì', en: 'Tense' },
          { vi: 'Chủ ngữ số ít', en: 'Singular subject' },
          { vi: 'Chủ ngữ số nhiều', en: 'Plural subject' },
        ],
        rows: [
          [{ vi: 'Hiện tại đơn', en: 'Present Simple' }, 'works / is', 'work / are'],
          [{ vi: 'Hiện tại tiếp diễn', en: 'Present Continuous' }, 'is working', 'are working'],
          [
            { vi: 'Hiện tại hoàn thành (kể cả dạng tiếp diễn)', en: 'Present Perfect (simple and continuous)' },
            'has worked / has been working',
            'have worked / have been working',
          ],
          [{ vi: 'Quá khứ đơn', en: 'Past Simple' }, 'worked (be → was)', 'worked (be → were)'],
          [{ vi: 'Quá khứ tiếp diễn', en: 'Past Continuous' }, 'was working', 'were working'],
          [
            { vi: 'Quá khứ hoàn thành, các dạng với will', en: 'Past Perfect, forms with will' },
            'had worked, will work, will have worked',
            { vi: 'Giống hệt số ít', en: 'Same as singular' },
          ],
        ],
      },
      examples: [
        {
          en: 'The **manager** of the two stores **has** approved the new schedule.',
          vi: 'Quản lý của hai cửa hàng đã duyệt lịch làm việc mới.',
        },
        {
          en: 'The **invoices** from our main supplier **were** paid yesterday.',
          vi: 'Các hoá đơn của nhà cung cấp chính đã được thanh toán hôm qua.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Tìm danh từ chính của chủ ngữ và bỏ qua cụm giới từ chen giữa (bài 3.2): danh từ đứng sát động từ (stores, supplier) thường là bẫy. Với had và will, chủ ngữ không giúp được gì, nên phải quay lại dấu hiệu thời gian.',
          en: 'Find the head noun of the subject and skip any prepositional phrase in between (lesson 3.2): the noun right before the verb (stores, supplier) is often a trap. With had and will the subject cannot help, so go back to the time signal.',
        },
      },
    },
    {
      heading: { vi: 'Bước 3: chủ động hay bị động', en: 'Step 3: active or passive' },
      points: [
        {
          vi: 'Sau chỗ trống có tân ngữ (một cụm danh từ) → chọn dạng **chủ động**.',
          en: 'An object (a noun phrase) follows the blank → choose the **active** form.',
        },
        {
          vi: 'Sau chỗ trống không có tân ngữ và chủ ngữ là thứ chịu tác động → chọn **bị động be + V3**.',
          en: 'No object follows the blank and the subject receives the action → choose the **passive be + V3**.',
        },
        {
          vi: 'Thì của câu bị động nằm ở phần **be**: is/are + V3 (hiện tại đơn), has/have been + V3 (hiện tại hoàn thành), was/were + V3 (quá khứ đơn), will be + V3 (tương lai)… Vì thế phần be này vẫn phải qua bước 1 và bước 2.',
          en: 'The tense of a passive lives in the **be** part: is/are + V3 (Present Simple), has/have been + V3 (Present Perfect), was/were + V3 (Past Simple), will be + V3 (future)... So that be part must still pass steps 1 and 2.',
        },
        {
          vi: 'Nội động từ như arrive, occur, happen, rise không có tân ngữ nhưng cũng không bao giờ ở dạng bị động: The parcel **arrived** yesterday, không phải was arrived.',
          en: 'Intransitive verbs such as arrive, occur, happen and rise take no object, yet they are never passive: The parcel **arrived** yesterday, not was arrived.',
        },
      ],
      examples: [
        {
          en: 'The finance committee **has approved** the new travel budget.',
          vi: 'Uỷ ban tài chính đã phê duyệt ngân sách công tác mới.',
        },
        {
          en: 'The new travel budget **has been approved** by the finance committee.',
          vi: 'Ngân sách công tác mới đã được uỷ ban tài chính phê duyệt.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phép thử tân ngữ có ngoại lệ: động từ đi với hai tân ngữ (give, send, offer…) vẫn còn một danh từ phía sau khi ở dạng bị động: Ms. Lee **was given** a new laptop. Chương 6 sẽ học kỹ các dạng bị động và cách chọn thể.',
          en: 'The object test has an exception: verbs with two objects (give, send, offer...) still have a noun after them in the passive: Ms. Lee **was given** a new laptop. Chapter 6 covers passive forms and the choice of voice in detail.',
        },
      },
    },
    {
      heading: { vi: 'Part 6: dấu hiệu nằm ngoài câu', en: 'Part 6: the signal may be outside the sentence' },
      body: {
        vi: 'Trong Part 6, câu chứa chỗ trống nhiều khi không có trạng từ thời gian nào. Dấu hiệu nằm ở ngày ghi trên thư, ở tiêu đề, hoặc ở câu ngay trước và ngay sau, nên hãy đọc những câu đó trước khi chọn thì.',
        en: 'In Part 6, the sentence with the blank often has no time adverb at all. The signal lies in the date of the message, the subject line, or the sentences just before and after, so read them before choosing a tense.',
      },
      points: [
        {
          vi: 'So ngày gửi thư với ngày diễn ra sự việc: sự việc sau ngày gửi → tương lai; trước ngày gửi → quá khứ.',
          en: 'Compare the date of the message with the date of the event: after the message date → future; before it → past.',
        },
        {
          vi: 'Lời mời đăng ký, hạn chót (please register by…, we look forward to seeing you) → sự việc chưa diễn ra.',
          en: 'Invitations and deadlines (please register by..., we look forward to seeing you) → the event has not happened yet.',
        },
        {
          vi: 'Lời cảm ơn vì đã tham dự, đã mua hàng (thank you for attending…) → sự việc đã diễn ra.',
          en: 'Thanks for attending or for a purchase (thank you for attending...) → the event has already happened.',
        },
      ],
      examples: [
        {
          en: '(Notice dated June 2) The renovated fitness center **will reopen** on June 15.',
          vi: '(Thông báo ngày 2 tháng 6) Phòng tập thể hình sau khi cải tạo sẽ mở cửa trở lại vào ngày 15 tháng 6.',
        },
        {
          en: 'Thank you for visiting our booth at the trade show. Many visitors **asked** about our new cordless drill.',
          vi: 'Cảm ơn quý khách đã ghé gian hàng của chúng tôi tại hội chợ. Nhiều khách tham quan đã hỏi về mẫu máy khoan không dây mới.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Đừng chọn thì chỉ vì câu "nghe ổn" khi đọc riêng: tách khỏi đoạn văn thì cả will reopen lẫn reopened đều đúng ngữ pháp. Trong Part 6, ngữ cảnh mới là thứ quyết định.',
          en: 'Do not choose a tense just because the sentence "sounds fine" on its own: out of context, both will reopen and reopened are grammatical. In Part 6, the context is what decides.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chọn thì trong Part 5', en: 'Attacking tense items in Part 5' },
      points: [
        {
          vi: 'Nhận diện: bốn lựa chọn là một động từ ở các thì hoặc thể khác nhau → đây là câu chọn thì, khác với câu từ loại (chương 1).',
          en: 'Spot it: four options are one verb in different tenses or voices → it is a tense item, not a word-form item (chapter 1).',
        },
        {
          vi: 'Gạch chân mọi dấu hiệu thời gian ở CẢ HAI mệnh đề; thì của mệnh đề kia (arrived, will forward…) cũng là một dấu hiệu.',
          en: 'Underline every time signal in BOTH clauses; the tense of the other clause (arrived, will forward...) is a signal too.',
        },
        {
          vi: 'Loại ngay dạng không làm được động từ chính: V-ing đứng một mình, to + V, V3 bất quy tắc thiếu have/be (taken, written).',
          en: 'Rule out forms that cannot be the main verb straight away: a bare V-ing, to + V, an irregular V3 without have/be (taken, written).',
        },
        {
          vi: 'Loại các thì mâu thuẫn với dấu hiệu trước, rồi mới xét số ít/số nhiều và chủ động/bị động cho những lựa chọn còn lại.',
          en: 'Remove the tenses that clash with the signal first, then check singular/plural and active/passive for what is left.',
        },
        {
          vi: 'Nhớ các cặp quen thuộc: by the time + quá khứ đơn → had V3; by the time + hiện tại đơn → will have V3; since + mốc → have/has V3 ở mệnh đề chính; when / as soon as mang nghĩa tương lai → hiện tại đơn, không dùng will.',
          en: 'Remember the familiar pairs: by the time + Past Simple → had V3; by the time + Present Simple → will have V3; since + a point → have/has V3 in the main clause; when / as soon as with future meaning → Present Simple, not will.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Còn hai lựa chọn cùng hợp với dấu hiệu thời gian? Đừng đoán: đề thường giấu bẫy số ít/số nhiều hoặc bẫy chủ động/bị động ngay giữa hai lựa chọn đó, nên hãy làm tiếp bước 2 và bước 3.',
          en: 'Two options still fit the time signal? Do not guess: the test usually hides a singular/plural or active/passive trap between exactly those two, so carry on with steps 2 and 3.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'The winners of the design competition ------- at a ceremony in Milan last Saturday.',
      options: ['announced', 'was announced', 'were announced', 'have been announced'],
      answer: 2,
      explanation: {
        vi: '**last Saturday** → quá khứ đơn, loại have been announced. Danh từ chính **winners** số nhiều → were, loại was announced. Sau chỗ trống không có tân ngữ và người thắng cuộc là đối tượng được công bố → bị động **were announced**; announced (chủ động) thiếu tân ngữ.',
        en: '**last Saturday** → Past Simple, so have been announced is out. The head noun **winners** is plural → were, so was announced is out. No object follows and the winners receive the action → passive **were announced**; active announced would need an object.',
      },
      translation: 'Những người thắng cuộc thi thiết kế đã được công bố tại một buổi lễ ở Milan vào thứ Bảy tuần trước.',
    },
    {
      sentence: 'The supervisor of the two warehouses ------- the inventory records every Friday afternoon.',
      options: ['review', 'reviews', 'is reviewed', 'reviewing'],
      answer: 1,
      explanation: {
        vi: '**every Friday afternoon** chỉ việc làm định kỳ → hiện tại đơn. Danh từ chính là **supervisor** (số ít), không phải warehouses → **reviews**. review sai số; is reviewed là bị động trong khi phía sau còn tân ngữ the inventory records; reviewing không làm được động từ chính.',
        en: '**every Friday afternoon** shows a routine → Present Simple. The head noun is **supervisor** (singular), not warehouses → **reviews**. review has the wrong number; is reviewed is passive although the object the inventory records follows; reviewing cannot be the main verb.',
      },
      translation: 'Người giám sát hai nhà kho kiểm tra sổ sách tồn kho vào chiều thứ Sáu hằng tuần.',
    },
    {
      sentence: 'By the end of next quarter, Orvis Electronics ------- more than 500 charging stations across the country.',
      options: ['installed', 'has installed', 'will have installed', 'had installed'],
      answer: 2,
      explanation: {
        vi: '**By the end of next quarter** là một mốc tương lai, và việc lắp đặt sẽ hoàn tất trước mốc đó → tương lai hoàn thành **will have installed**. had installed dùng cho mốc quá khứ (by the end of last quarter); installed và has installed không đi với mốc tương lai.',
        en: '**By the end of next quarter** is a future point, and the installing will be complete by then → Future Perfect **will have installed**. had installed is for a past point (by the end of last quarter); installed and has installed cannot go with a future point.',
      },
      translation: 'Đến cuối quý sau, Orvis Electronics sẽ lắp đặt xong hơn 500 trạm sạc trên khắp cả nước.',
    },
    {
      sentence: 'Since opening in 2021, the Lyon office ------- three major government contracts.',
      options: ['has won', 'wins', 'will win', 'is winning'],
      answer: 0,
      explanation: {
        vi: '**Since opening in 2021** (since + mốc) → khoảng thời gian từ năm 2021 đến nay, kèm một kết quả đã đếm được → hiện tại hoàn thành **has won**. wins và is winning là thì hiện tại, không đi với since + mốc; will win chỉ tương lai.',
        en: '**Since opening in 2021** (since + a starting point) → a period from 2021 up to now, with a counted result → Present Perfect **has won**. wins and is winning are present tenses that do not go with since + a point; will win refers to the future.',
      },
      translation: 'Kể từ khi khai trương năm 2021, văn phòng Lyon đã giành được ba hợp đồng lớn với chính phủ.',
    },
    {
      sentence: 'Please use the stairs on the east side because technicians ------- the main elevator at the moment.',
      options: ['repair', 'repaired', 'will have repaired', 'are repairing'],
      answer: 3,
      explanation: {
        vi: '**at the moment** (ngay lúc này) → hành động đang diễn ra, dùng hiện tại tiếp diễn **are repairing**. repair (hiện tại đơn) chỉ thói quen, không đi với at the moment; repaired và will have repaired lệch thời gian.',
        en: '**at the moment** → an action in progress now, so the Present Continuous **are repairing**. repair (Present Simple) describes routines and does not go with at the moment; repaired and will have repaired point to the wrong time.',
      },
      translation: 'Vui lòng dùng cầu thang phía đông vì các kỹ thuật viên đang sửa thang máy chính.',
    },
    {
      sentence: 'Mr. Castillo ------- a video conference with clients in Toronto when the office lost power yesterday afternoon.',
      options: ['were leading', 'was leading', 'has led', 'will be leading'],
      answer: 1,
      explanation: {
        vi: '**when + quá khứ đơn** (lost power) và **yesterday afternoon** → hành động đang diễn ra thì bị cắt ngang, dùng quá khứ tiếp diễn. Chủ ngữ **Mr. Castillo** số ít → **was leading**; were leading sai số, còn has led và will be leading lệch thời gian.',
        en: '**when + Past Simple** (lost power) and **yesterday afternoon** → an action in progress that was interrupted takes the Past Continuous. The subject **Mr. Castillo** is singular → **was leading**; were leading has the wrong number, and has led and will be leading point to the wrong time.',
      },
      translation: 'Ông Castillo đang chủ trì cuộc họp trực tuyến với khách hàng ở Toronto thì văn phòng bị mất điện vào chiều hôm qua.',
    },
    {
      sentence: 'The results of the customer satisfaction survey ------- to all department heads next Monday.',
      options: ['will be sent', 'will send', 'sent', 'were sent'],
      answer: 0,
      explanation: {
        vi: '**next Monday** → tương lai, loại sent và were sent. Kết quả khảo sát không tự gửi được, và sau chỗ trống không có tân ngữ → bị động **will be sent**. will send là chủ động nên cần một tân ngữ phía sau.',
        en: '**next Monday** → future, so sent and were sent are out. Results cannot send anything, and no object follows the blank → passive **will be sent**. will send is active and would need an object.',
      },
      translation: 'Kết quả khảo sát mức độ hài lòng của khách hàng sẽ được gửi tới tất cả trưởng bộ phận vào thứ Hai tuần sau.',
    },
    {
      sentence: 'By the time the auditors arrived on Monday, the finance team ------- all of the required documents.',
      options: ['has gathered', 'gathers', 'will have gathered', 'had gathered'],
      answer: 3,
      explanation: {
        vi: '**By the time + quá khứ đơn** (arrived) → việc hoàn tất trước mốc quá khứ đó dùng quá khứ hoàn thành **had gathered**. will have gathered chỉ đi với by the time + hiện tại đơn (arrive); has gathered không gắn với một mốc quá khứ.',
        en: '**By the time + Past Simple** (arrived) → the action completed before that past point takes the Past Perfect **had gathered**. will have gathered pairs with by the time + Present Simple (arrive); has gathered cannot attach to a past point.',
      },
      translation: 'Trước khi các kiểm toán viên đến vào thứ Hai, nhóm tài chính đã tập hợp xong toàn bộ tài liệu cần thiết.',
    },
    {
      sentence: 'Mr. Lambert will forward the revised contract to the client as soon as the legal team ------- it.',
      options: ['will approve', 'approves', 'approved', 'had approved'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề chính dùng **will forward** (tương lai), còn chỗ trống nằm sau **as soon as** → mệnh đề thời gian dùng hiện tại đơn **approves** (bài 4.7). will approve là bẫy: không dùng will sau as soon as; approved và had approved là quá khứ.',
        en: 'The main clause uses **will forward** (future), and the blank follows **as soon as** → the time clause takes the Present Simple **approves** (lesson 4.7). will approve is the trap: will is not used after as soon as; approved and had approved are past.',
      },
      translation: 'Ông Lambert sẽ chuyển hợp đồng đã sửa cho khách hàng ngay khi nhóm pháp chế phê duyệt.',
    },
    {
      sentence: 'This time next week, Ms. Hoang ------- the new distribution center in Rotterdam with the logistics team.',
      options: ['was touring', 'has toured', 'had been touring', 'will be touring'],
      answer: 3,
      explanation: {
        vi: '**This time next week** → hành động sẽ đang diễn ra tại một thời điểm trong tương lai, dùng tương lai tiếp diễn **will be touring**. was touring và had been touring là quá khứ; has toured không đi với mốc tương lai.',
        en: '**This time next week** → an action that will be in progress at a future moment, so the Future Continuous **will be touring**. was touring and had been touring are past forms; has toured cannot go with a future time.',
      },
      translation: 'Vào giờ này tuần sau, cô Hoang sẽ đang cùng nhóm hậu cần tham quan trung tâm phân phối mới ở Rotterdam.',
    },
  ],
};
