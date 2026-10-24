import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-past-perfect',
  intro: {
    vi: 'Quá khứ hoàn thành (**had + V3**) diễn tả việc đã xảy ra TRƯỚC một mốc thời gian hoặc một hành động khác trong quá khứ. Trong Part 5/6, bạn nhận ra nó nhờ **by the time** + quá khứ đơn, **by** + mốc quá khứ, before/after hay **for** + khoảng thời gian kéo tới một mốc quá khứ, và đề thường đặt nó cạnh has + V3 hoặc will have + V3 để gây nhiễu.',
    en: 'The Past Perfect (**had + V3**) describes something that happened BEFORE a time or another action in the past. In Part 5/6 you spot it from **by the time** + past simple, **by** + a past time, before/after or **for** + a period running up to a past point, and the test usually places it next to has + V3 or will have + V3 as distractors.',
  },
  mistakes: [
    {
      wrong: 'By the time the courier arrived, we [[have packed]] all the orders.',
      right: 'By the time the courier arrived, we [[had packed]] all the orders.',
      explanation: {
        vi: '**By the time** + quá khứ đơn (**arrived**) đặt mốc ở quá khứ, nên việc xong trước mốc đó phải dùng quá khứ hoàn thành **had packed**. have packed (hiện tại hoàn thành) chỉ nối với hiện tại.',
        en: '**By the time** + the past simple (**arrived**) sets a past reference point, so an action completed before that point takes the Past Perfect **had packed**. have packed (Present Perfect) links only to the present.',
      },
    },
    {
      wrong: 'Brightway Foods [[had opened]] its first store in Manila in 2009.',
      right: 'Brightway Foods [[opened]] its first store in Manila in 2009.',
      explanation: {
        vi: 'Câu chỉ có một sự việc với mốc cụ thể **in 2009**, không có hành động quá khứ nào khác để so sánh → dùng quá khứ đơn. Đừng dùng had + V3 chỉ vì sự việc đã xảy ra từ lâu.',
        en: 'The sentence has a single event with a specific time, **in 2009**, and no other past action to compare it with → use the past simple. Do not use had + V3 just because the event happened long ago.',
      },
    },
    {
      wrong: 'The sales manager had [[went]] home before the client called back.',
      right: 'The sales manager had [[gone]] home before the client called back.',
      explanation: {
        vi: 'Sau **had** phải là V3 (quá khứ phân từ). **went** là V2 của go; V3 là **gone**.',
        en: 'After **had** we need the V3 (past participle). **went** is the V2 of go; the V3 is **gone**.',
      },
    },
    {
      wrong: 'Ms. Arnaud [[has been working]] at the bank for 20 years when she retired.',
      right: 'Ms. Arnaud [[had been working]] at the bank for 20 years when she retired.',
      explanation: {
        vi: 'Khoảng thời gian **for 20 years** kéo dài tới một mốc QUÁ KHỨ (**when she retired**) → **had been working**. has been working chỉ dùng khi việc kéo dài tới hiện tại.',
        en: 'The period **for 20 years** runs up to a PAST point (**when she retired**) → **had been working**. has been working is only for something that continues up to now.',
      },
    },
    {
      wrong: 'Since 2020, the company [[had expanded]] into five new markets, and it now employs 900 people.',
      right: 'Since 2020, the company [[has expanded]] into five new markets, and it now employs 900 people.',
      explanation: {
        vi: 'Khoảng thời gian **since 2020** kéo dài tới HIỆN TẠI (**now**), không có mốc quá khứ nào phía sau → hiện tại hoàn thành **has expanded**. had + V3 cần một mốc trong quá khứ.',
        en: 'The period **since 2020** runs up to the PRESENT (**now**), with no later past point → Present Perfect **has expanded**. had + V3 needs a point in the past.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Cấu trúc và ý nghĩa cốt lõi', en: 'Form and core meaning' },
      body: {
        vi: 'Quá khứ hoàn thành có dạng **had + V3** và dùng **had** cho mọi chủ ngữ (I, she, they, the company…). Nó diễn tả một việc đã xảy ra, thường là đã xong, TRƯỚC một mốc thời gian hoặc một hành động khác cũng nằm trong quá khứ: có thể gọi là "quá khứ của quá khứ".',
        en: 'The Past Perfect is **had + V3**, with **had** for every subject (I, she, they, the company…). It describes something that happened, usually something completed, BEFORE a time or another action that is also in the past: the "past of the past".',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Công thức', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Khẳng định', en: 'Affirmative' }, 'S + had + V3', 'The client had signed the contract.'],
          [{ vi: 'Phủ định', en: 'Negative' }, "S + had not (hadn't) + V3", "The client hadn't signed the contract."],
          [{ vi: 'Nghi vấn', en: 'Question' }, 'Had + S + V3…?', 'Had the client signed the contract?'],
          [{ vi: 'Tiếp diễn', en: 'Continuous' }, 'S + had been + V-ing', 'The client had been waiting for an hour.'],
        ],
      },
      examples: [
        {
          en: 'When the board met on Friday, the CFO **had** already **prepared** the budget forecast.',
          vi: 'Khi hội đồng quản trị họp vào thứ Sáu thì giám đốc tài chính đã chuẩn bị xong bản dự báo ngân sách.',
        },
        {
          en: 'The hotel **had had** three different owners before the Aldana Group bought it.',
          vi: 'Khách sạn đã qua tay ba chủ sở hữu khác nhau trước khi Tập đoàn Aldana mua lại.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: "**had had** là đúng ngữ pháp (had + V3 của have). Còn **'d** có thể là had hoặc would: **'d + V3** = had (She'd left), **'d + động từ nguyên mẫu** = would (She'd leave); riêng **'d better** là had better.",
          en: "**had had** is correct (had + the V3 of have). And **'d** can stand for had or would: **'d + V3** = had (She'd left), **'d + base verb** = would (She'd leave); the one exception is **'d better**, which means had better.",
        },
      },
    },
    {
      heading: {
        vi: 'Khi nào dùng: việc xảy ra trước một mốc quá khứ',
        en: 'When to use it: an action before a past reference point',
      },
      body: {
        vi: 'Khi có hai việc trong quá khứ, việc xảy ra TRƯỚC dùng **had + V3**, việc xảy ra SAU (thường là mốc đang kể) dùng **quá khứ đơn**. Mốc quá khứ có thể là một hành động (when/before/after/by the time + quá khứ đơn) hoặc một thời điểm (by 2020, by then, by the end of last month).',
        en: 'When two things happened in the past, the EARLIER one takes **had + V3** and the LATER one, usually the point the story has reached, takes the **past simple**. The reference point can be an action (when/before/after/by the time + past simple) or a time (by 2020, by then, by the end of last month).',
      },
      points: [
        {
          vi: 'Phải có một **mốc quá khứ** để so sánh, nêu rõ hoặc hiểu ngầm từ ngữ cảnh. Không có mốc đó thì dùng quá khứ đơn, dù sự việc đã xảy ra từ rất lâu.',
          en: 'There must be a **past reference point** to compare with, stated or clear from context. Without one, use the past simple, however long ago the event was.',
        },
        {
          vi: 'Kể các việc theo đúng thứ tự xảy ra thì chỉ cần quá khứ đơn: She checked in, unpacked and went to the meeting. had + V3 chỉ cần khi câu **lùi lại** nói về một việc sớm hơn mốc đang kể.',
          en: 'Events told in the order they happened need only the past simple: She checked in, unpacked and went to the meeting. had + V3 is needed when the sentence **steps back** to something earlier than the point being described.',
        },
        {
          vi: 'Với **when**, thì của mệnh đề chính quyết định thứ tự: quá khứ đơn = xảy ra đúng lúc đó hoặc ngay sau đó; had + V3 = đã xảy ra từ trước.',
          en: 'With **when**, the main-clause tense sets the order: past simple = it happened at that moment or right after; had + V3 = it had already happened before.',
        },
      ],
      examples: [
        {
          en: 'When Ms. Ferreira arrived, the meeting **ended**.',
          vi: 'Khi cô Ferreira đến thì cuộc họp kết thúc (cô vừa đến là cuộc họp kết thúc).',
        },
        {
          en: 'When Ms. Ferreira arrived, the meeting **had ended**.',
          vi: 'Khi cô Ferreira đến thì cuộc họp đã kết thúc từ trước (cô đến muộn).',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Câu chỉ có MỘT sự việc với mốc cụ thể (in 2009, last week, two years ago) thì dùng quá khứ đơn: Our firm **opened** its first branch in 2009, không phải had opened.',
          en: 'A sentence with ONE event and a specific time (in 2009, last week, two years ago) takes the past simple: Our firm **opened** its first branch in 2009, not had opened.',
        },
      },
    },
    {
      heading: { vi: 'Các dấu hiệu thường đi kèm', en: 'Common signals' },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Ghi chú', en: 'Note' },
        ],
        rows: [
          [
            { vi: 'by the time + quá khứ đơn', en: 'by the time + past simple' },
            'By the time we reached the pier, the ferry **had left**.',
            {
              vi: 'Việc đã XONG trước mốc ở mệnh đề chính dùng had + V3; bản thân mệnh đề by the time dùng quá khứ đơn.',
              en: 'An action already COMPLETED before the point takes had + V3 in the main clause; the by the time clause itself takes the past simple.',
            },
          ],
          [
            { vi: 'by + mốc quá khứ', en: 'by + a past time' },
            'By the end of last month, we **had hired** 40 new staff.',
            {
              vi: 'Mốc phải ở quá khứ (by 2023, by then, by last Friday). by + mốc tương lai thì dùng will have + V3 (bài 4.6).',
              en: 'The time must be in the past (by 2023, by then, by last Friday). by + a future time takes will have + V3 (lesson 4.6).',
            },
          ],
          [
            'before / after',
            'The guests **had checked out** before the cleaning crew arrived.',
            {
              vi: 'Liên từ đã cho thấy thứ tự nên quá khứ đơn cũng đúng: The guests checked out before the crew arrived.',
              en: 'The conjunction already shows the order, so the past simple is also correct: The guests checked out before the crew arrived.',
            },
          ],
          [
            { vi: 'when + quá khứ đơn', en: 'when + past simple' },
            'When the auditor called, Ms. Lee **had** already **gone** home.',
            {
              vi: 'had + V3 = xảy ra trước lúc đó; quá khứ đơn = xảy ra đúng lúc đó hoặc ngay sau.',
              en: 'had + V3 = before that moment; past simple = at that moment or right after.',
            },
          ],
          [
            'already / just / never / not yet',
            'The truck **had just left** when the client called to change the address.',
            {
              vi: 'Trạng từ đứng giữa had và V3: had already/just/never + V3; had not yet + V3.',
              en: 'The adverb goes between had and the V3: had already/just/never + V3; had not yet + V3.',
            },
          ],
          [
            'realize / discover / find out + that',
            'She **realized** that she **had left** her badge at home.',
            {
              vi: 'Dùng had + V3 khi việc được phát hiện đã xảy ra trước lúc phát hiện.',
              en: 'Use had + V3 when what was discovered had happened before the moment of discovery.',
            },
          ],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Gặp **by the time**, hãy nhìn thì của chính mệnh đề by the time: quá khứ đơn → mệnh đề chính **had + V3**; hiện tại đơn → mệnh đề chính **will have + V3** (bài 4.6).',
          en: 'When you see **by the time**, check the tense inside the by the time clause itself: past simple → main clause **had + V3**; present simple → main clause **will have + V3** (lesson 4.6).',
        },
      },
    },
    {
      heading: {
        vi: 'Phân biệt với quá khứ đơn và hiện tại hoàn thành',
        en: 'Past Perfect vs. Past Simple and Present Perfect',
      },
      table: {
        head: [
          { vi: 'Thì', en: 'Tense' },
          { vi: 'Mốc so sánh', en: 'Anchored to' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'Present Perfect (have/has + V3)',
            { vi: 'Nối với HIỆN TẠI: tính đến bây giờ', en: 'Linked to NOW: up to the present' },
            'We **have hired** 40 people so far this year.',
          ],
          [
            'Past Simple (V2)',
            { vi: 'Một thời điểm đã kết thúc trong quá khứ', en: 'A finished time in the past' },
            'We **hired** 40 people last year.',
          ],
          [
            'Past Perfect (had + V3)',
            { vi: 'TRƯỚC một mốc khác trong quá khứ', en: 'BEFORE another point in the past' },
            'By June last year, we **had hired** 40 people.',
          ],
        ],
      },
      points: [
        {
          vi: 'Khi cả câu chuyện lùi về quá khứ, các dấu hiệu quen thuộc của hiện tại hoàn thành (for, since, already, never — bài 4.2) chuyển sang đi với **had + V3**: By 2020, Ms. Ishikawa **had worked** at the firm for eight years.',
          en: 'When the whole story is set in the past, the familiar Present Perfect signals (for, since, already, never — lesson 4.2) go with **had + V3**: By 2020, Ms. Ishikawa **had worked** at the firm for eight years.',
        },
        {
          vi: '**have/has + V3** không đi với mốc hay mệnh đề quá khứ như by last year hoặc by the time + quá khứ đơn. Ngược lại, **had + V3** cần một mốc quá khứ, nên không thay được hiện tại hoàn thành khi câu tính đến hiện tại (now, so far, this year).',
          en: '**have/has + V3** cannot go with a past time or clause such as by last year or by the time + past simple. Conversely, **had + V3** needs a past point, so it cannot replace the Present Perfect when the sentence counts up to now (now, so far, this year).',
        },
      ],
      examples: [
        {
          en: 'Mr. Bauer **has managed** the Lyon office since 2019.',
          vi: 'Ông Bauer quản lý văn phòng Lyon từ năm 2019 đến nay.',
        },
        {
          en: 'Mr. Bauer **had managed** the Lyon office for six years when he moved to Paris.',
          vi: 'Ông Bauer đã quản lý văn phòng Lyon được sáu năm thì chuyển sang Paris.',
        },
      ],
    },
    {
      heading: {
        vi: 'Quá khứ hoàn thành tiếp diễn (had been V-ing)',
        en: 'Past Perfect Continuous (had been V-ing)',
      },
      body: {
        vi: '**had been + V-ing** nhấn mạnh một hoạt động KÉO DÀI liên tục cho tới một mốc quá khứ, thường đi với **for/since** + thời gian và when/before/by the time + quá khứ đơn. Nó cũng dùng cho hoạt động vừa dừng ngay trước mốc quá khứ và còn để lại dấu vết.',
        en: '**had been + V-ing** stresses an activity that CONTINUED up to a past point, usually with **for/since** + a time expression and when/before/by the time + past simple. It is also used for an activity that had just stopped before the past point and left visible results.',
      },
      points: [
        {
          vi: 'Kéo dài tới mốc quá khứ: Our team **had been testing** the app for six weeks before it launched.',
          en: 'Up to a past point: Our team **had been testing** the app for six weeks before it launched.',
        },
        {
          vi: 'Vừa dừng, còn dấu vết: The printer was hot because it **had been running** all morning.',
          en: 'Just stopped, with visible results: The printer was hot because it **had been running** all morning.',
        },
        {
          vi: 'Với động từ chỉ hoạt động như work, live, wait, **had + V3** + for cũng đúng (She had worked there for ten years when she retired); had been V-ing chỉ nhấn mạnh quá trình liên tục.',
          en: 'With activity verbs such as work, live and wait, **had + V3** + for is also correct (She had worked there for ten years when she retired); had been V-ing simply stresses the ongoing process.',
        },
        {
          vi: 'Khi nêu KẾT QUẢ hoặc SỐ LƯỢNG đã hoàn tất thì dùng had + V3: By noon, the clerk **had processed** 200 orders (thường không nói had been processing 200 orders).',
          en: 'For a completed RESULT or QUANTITY, use had + V3: By noon, the clerk **had processed** 200 orders (had been processing 200 orders is not normally used).',
        },
        {
          vi: 'Động từ trạng thái (know, own, belong, believe) không dùng tiếp diễn: They **had known** each other for years, không nói had been knowing.',
          en: 'Stative verbs (know, own, belong, believe) are not used in the continuous: They **had known** each other for years, not had been knowing.',
        },
      ],
      examples: [
        {
          en: 'Mr. Szabo **had been waiting** in the lobby for 40 minutes before the receptionist noticed him.',
          vi: 'Ông Szabo đã đợi ở sảnh 40 phút thì lễ tân mới để ý đến ông.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng nhầm **had been + V-ing** (tiếp diễn, chủ động: The staff had been writing the report) với **had been + V3** (bị động: The report had been written — bài 6.1).',
          en: 'Do not confuse **had been + V-ing** (continuous, active: The staff had been writing the report) with **had been + V3** (passive: The report had been written — lesson 6.1).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu quá khứ hoàn thành trong Part 5', en: 'Attacking Past Perfect items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các thì của cùng một động từ → tìm **mốc thời gian** trước khi dịch: by the time, by + mốc, before/after, when, for + khoảng thời gian.',
          en: 'Four options are tenses of one verb → find the **time cue** before translating: by the time, by + a time, before/after, when, for + a period.',
        },
        {
          vi: '**by the time + quá khứ đơn** hoặc **by + mốc quá khứ** → mệnh đề chính là **had + V3**. Nếu chỗ trống nằm TRONG mệnh đề by the time còn mệnh đề chính đã là had + V3 → chọn quá khứ đơn.',
          en: '**by the time + past simple** or **by + a past time** → the main clause is **had + V3**. If the blank is INSIDE the by the time clause and the main clause is already had + V3 → choose the past simple.',
        },
        {
          vi: '**for + khoảng thời gian** kéo tới **when/before + quá khứ đơn** → **had been V-ing** (hoặc had + V3); loại have/has been V-ing vì việc không kéo dài tới hiện tại.',
          en: '**for + a period** running up to **when/before + past simple** → **had been V-ing** (or had + V3); rule out have/has been V-ing because the activity does not continue to now.',
        },
        {
          vi: 'Cả câu nằm trong quá khứ → loại ngay các lựa chọn hiện tại (V-s, has/have + V3) và tương lai (will, will have).',
          en: 'The whole sentence is set in the past → rule out present options (V-s, has/have + V3) and future ones (will, will have) at once.',
        },
        {
          vi: 'Sau **had** luôn là V3: had begun, had chosen, had written, không phải had began (động từ bất quy tắc ở bài 4.3). Dạng tiếp diễn là had **been** + V-ing.',
          en: 'After **had** always comes the V3: had begun, had chosen, had written, not had began (irregular verbs are in lesson 4.3). The continuous form is had **been** + V-ing.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Ví dụ: By the time the shipment arrived, the store ------- its holiday sale. (A) has started (B) will have started (C) had started (D) starts. Mệnh đề by the time có **arrived** (quá khứ đơn) → chọn (C) had started.',
          en: 'Example: By the time the shipment arrived, the store ------- its holiday sale. (A) has started (B) will have started (C) had started (D) starts. The by the time clause has **arrived** (past simple) → choose (C) had started.',
        },
      },
    },
  ],
  questions: [
    {
      sentence:
        'By the time the auditors arrived on Monday morning, the finance team ------- all the expense reports for the quarter.',
      options: ['had compiled', 'will have compiled', 'has compiled', 'compiles'],
      answer: 0,
      explanation: {
        vi: '**By the time** + quá khứ đơn **arrived** đặt mốc ở quá khứ, nên việc xong trước mốc đó dùng **had compiled**. will have compiled đi với by the time + hiện tại đơn (mốc tương lai); has compiled không đi với mốc quá khứ.',
        en: '**By the time** + the past simple **arrived** sets a past reference point, so the action completed before it takes **had compiled**. will have compiled goes with by the time + present simple (a future point); has compiled cannot go with a past point.',
      },
      translation: 'Khi các kiểm toán viên đến vào sáng thứ Hai thì nhóm tài chính đã tổng hợp xong mọi báo cáo chi phí của quý.',
    },
    {
      sentence: 'By the time the keynote speaker ------- the stage, most of the attendees had already found their seats.',
      options: ['takes', 'took', 'has taken', 'will take'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề chính đã là quá khứ hoàn thành **had already found**, nên mệnh đề **by the time** dùng quá khứ đơn → **took**. takes/will take nói về hiện tại/tương lai; has taken không khớp với mốc quá khứ.',
        en: 'The main clause is already in the Past Perfect, **had already found**, so the **by the time** clause takes the past simple → **took**. takes/will take refer to the present/future; has taken does not fit a past reference point.',
      },
      translation: 'Khi diễn giả chính bước lên sân khấu thì phần lớn người tham dự đã tìm được chỗ ngồi.',
    },
    {
      sentence: 'By the end of last year, Fairmont Logistics ------- distribution centers in six countries across Southeast Asia.',
      options: ['has opened', 'opens', 'had opened', 'will have opened'],
      answer: 2,
      explanation: {
        vi: '**By the end of last year** là một mốc trong quá khứ → **had opened**. has opened không đi với thời gian đã kết thúc như last year; will have opened dành cho mốc tương lai (by the end of next year).',
        en: '**By the end of last year** is a point in the past → **had opened**. has opened cannot go with a finished time like last year; will have opened is for a future point (by the end of next year).',
      },
      translation: 'Tính đến cuối năm ngoái, Fairmont Logistics đã mở các trung tâm phân phối tại sáu quốc gia ở Đông Nam Á.',
    },
    {
      sentence: 'Ms. Delgado ------- three other job offers before she finally accepted the position at Norhaven Bank.',
      options: ['will turn down', 'has turned down', 'turns down', 'had turned down'],
      answer: 3,
      explanation: {
        vi: 'Việc từ chối xảy ra **before she finally accepted** (quá khứ đơn), tức là sớm hơn một hành động quá khứ → **had turned down**. has turned down nối với hiện tại nên không khớp với accepted.',
        en: 'The refusals happened **before she finally accepted** (past simple), earlier than another past action → **had turned down**. has turned down links to the present, so it clashes with accepted.',
      },
      translation: 'Cô Delgado đã từ chối ba lời mời làm việc khác trước khi cuối cùng nhận vị trí tại Ngân hàng Norhaven.',
    },
    {
      sentence: 'The two companies began combining their payroll systems only after the board ------- the merger.',
      options: ['had approved', 'has approved', 'will approve', 'approves'],
      answer: 0,
      explanation: {
        vi: 'Việc phê duyệt xảy ra TRƯỚC việc **began** (quá khứ đơn) ở mệnh đề chính → **had approved**. has approved, will approve và approves đều là thì hiện tại hoặc tương lai, không khớp với một chuỗi sự việc đã xảy ra trong quá khứ.',
        en: 'The approval came BEFORE **began** (past simple) in the main clause → **had approved**. has approved, will approve and approves are present or future forms, which clash with a sequence of events that is already in the past.',
      },
      translation: 'Hai công ty chỉ bắt đầu hợp nhất hệ thống tính lương sau khi hội đồng quản trị đã phê duyệt việc sáp nhập.',
    },
    {
      sentence:
        'Representatives from Kestrel Air and Vantage Hotels ------- for nearly a year when they finally reached an agreement on the partnership terms.',
      options: ['have been negotiating', 'will be negotiating', 'had been negotiating', 'are negotiating'],
      answer: 2,
      explanation: {
        vi: '**for nearly a year** kéo dài tới mốc quá khứ **when they finally reached** → **had been negotiating**. have been negotiating nghĩa là việc đàm phán kéo dài tới hiện tại, mâu thuẫn với reached.',
        en: '**for nearly a year** runs up to the past point **when they finally reached** → **had been negotiating**. have been negotiating would mean the talks continue up to now, which clashes with reached.',
      },
      translation:
        'Đại diện của Kestrel Air và Vantage Hotels đã đàm phán gần một năm thì cuối cùng mới đạt được thỏa thuận về các điều khoản hợp tác.',
    },
    {
      sentence: 'Mr. Mensah had ------- the regional sales office for eight years before he was transferred to headquarters in Lagos.',
      options: ['being managed', 'been managing', 'be managing', 'managing'],
      answer: 1,
      explanation: {
        vi: 'Câu có **for eight years** và **before he was transferred** → quá khứ hoàn thành tiếp diễn: had + **been** + V-ing → **been managing**. had managing, had be managing, had being managed đều không phải dạng đúng.',
        en: 'With **for eight years** and **before he was transferred**, this is the Past Perfect Continuous: had + **been** + V-ing → **been managing**. had managing, had be managing and had being managed are not valid forms.',
      },
      translation: 'Ông Mensah đã quản lý văn phòng kinh doanh khu vực suốt tám năm trước khi được điều chuyển về trụ sở chính ở Lagos.',
    },
    {
      sentence:
        "By the time the CEO arrived at the shareholders' meeting, the vote on the new board members had already -------.",
      options: ['began', 'begin', 'beginning', 'begun'],
      answer: 3,
      explanation: {
        vi: 'Sau **had (already)** phải là V3. begin – began – **begun**: began là V2 (quá khứ đơn), đúng cái bẫy quen thuộc; begin và beginning không đứng sau had.',
        en: 'After **had (already)** we need the V3. begin – began – **begun**: began is the V2 (past simple), the classic trap; begin and beginning cannot follow had.',
      },
      translation: 'Khi giám đốc điều hành đến cuộc họp cổ đông thì cuộc bỏ phiếu bầu thành viên hội đồng quản trị mới đã bắt đầu.',
    },
    {
      sentence: 'When Ms. Lindgren reached the airline check-in counter, she realized that she ------- her passport in the hotel safe.',
      options: ['has left', 'had left', 'is leaving', 'will leave'],
      answer: 1,
      explanation: {
        vi: 'Việc để quên hộ chiếu xảy ra TRƯỚC lúc cô **realized** (quá khứ đơn) → **had left**. has left gắn với hiện tại, không khớp với chuỗi sự việc đang kể ở quá khứ.',
        en: 'Leaving the passport happened BEFORE she **realized** (past simple) → **had left**. has left is tied to the present and does not fit a sequence of events told in the past.',
      },
      translation: 'Khi đến quầy làm thủ tục của hãng bay, cô Lindgren mới nhận ra mình đã để quên hộ chiếu trong két sắt khách sạn.',
    },
    {
      sentence: 'The airport shuttle ------- when the last group of conference guests came down to the hotel lobby.',
      options: ['is just departing', 'will just depart', 'had just departed', 'has just departed'],
      answer: 2,
      explanation: {
        vi: 'Xe rời đi ngay trước mốc quá khứ **when … came down** (quá khứ đơn) → **had just departed**, với just đứng giữa had và V3. has just departed nối với hiện tại nên không đi được với came; is just departing và will just depart đều sai thì.',
        en: 'The shuttle left shortly before the past point **when … came down** (past simple) → **had just departed**, with just between had and the V3. has just departed links to the present, so it cannot go with came; is just departing and will just depart are the wrong tenses.',
      },
      translation: 'Xe đưa đón ra sân bay vừa rời đi thì nhóm khách dự hội nghị cuối cùng mới xuống tới sảnh khách sạn.',
    },
  ],
};
