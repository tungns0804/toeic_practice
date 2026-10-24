import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-future-perfect',
  intro: {
    vi: 'Bài này dạy hai thì tương lai "nâng cao": tương lai hoàn thành (**will have + V3**) cho việc sẽ XONG trước một mốc tương lai, và tương lai tiếp diễn (**will be + V-ing**) cho việc sẽ ĐANG diễn ra vào một thời điểm tương lai. Trong Part 5/6, đề thường cài dấu hiệu như **by + mốc tương lai**, **by the time + hiện tại đơn** hay **this time next week**, rồi đặt đáp án cạnh had + V3, has + V3 và các thì quá khứ để gây nhiễu.',
    en: 'This lesson covers two "advanced" future tenses: the Future Perfect (**will have + V3**) for something that will be COMPLETE before a future point, and the Future Continuous (**will be + V-ing**) for something that will be IN PROGRESS at a future moment. In Part 5/6 the test usually plants a cue such as **by + a future time**, **by the time + present simple** or **this time next week**, then surrounds the key with had + V3, has + V3 and past tenses as distractors.',
  },
  mistakes: [
    {
      wrong: 'By the time the new CEO takes office next May, the board [[had approved]] the restructuring plan.',
      right: 'By the time the new CEO takes office next May, the board [[will have approved]] the restructuring plan.',
      explanation: {
        vi: 'Mệnh đề **by the time** dùng hiện tại đơn (**takes**) và có **next May** → mốc ở TƯƠNG LAI, nên việc xong trước mốc đó dùng **will have approved**. Với by the time, had + V3 chỉ dùng khi mệnh đề by the time ở quá khứ đơn (bài 4.4).',
        en: 'The **by the time** clause uses the present simple (**takes**) and **next May** → the reference point is in the FUTURE, so the action completed before it takes **will have approved**. With by the time, had + V3 is used only when the by the time clause is in the past simple (lesson 4.4).',
      },
    },
    {
      wrong: 'By the end of the decade, Orion Motors will [[has]] produced more than one million electric vehicles.',
      right: 'By the end of the decade, Orion Motors will [[have]] produced more than one million electric vehicles.',
      explanation: {
        vi: 'Sau **will** luôn là động từ nguyên mẫu, nên dùng **have** cho mọi chủ ngữ, kể cả chủ ngữ số ít như Orion Motors. Không có dạng will has hay will had.',
        en: 'After **will** the verb is always in its base form, so it is **have** for every subject, even a singular one like Orion Motors. There is no will has or will had.',
      },
    },
    {
      wrong: 'By next Monday, the movers will have [[took]] all the furniture to our new office downtown.',
      right: 'By next Monday, the movers will have [[taken]] all the furniture to our new office downtown.',
      explanation: {
        vi: 'Sau **will have** phải là V3 (quá khứ phân từ). **took** là V2 của take; V3 là **taken**.',
        en: 'After **will have** we need the V3 (past participle). **took** is the V2 of take; the V3 is **taken**.',
      },
    },
    {
      wrong: 'At 10 a.m. tomorrow, Ms. Mwangi will be [[interview]] candidates for the senior accountant position.',
      right: 'At 10 a.m. tomorrow, Ms. Mwangi will be [[interviewing]] candidates for the senior accountant position.',
      explanation: {
        vi: 'Tương lai tiếp diễn là **will be + V-ing**: việc phỏng vấn sẽ đang diễn ra vào **10 a.m. tomorrow**. Sau will be không dùng động từ nguyên mẫu, và cũng không dùng V3 vì phía sau còn tân ngữ **candidates**.',
        en: 'The Future Continuous is **will be + V-ing**: the interviews will be in progress at **10 a.m. tomorrow**. A base verb cannot follow will be, and neither can a V3 here, because the object **candidates** follows.',
      },
    },
    {
      wrong: 'By the end of this month, Mr. Duarte [[will work]] at the Grand Marina Hotel for twenty years.',
      right: 'By the end of this month, Mr. Duarte [[will have worked]] at the Grand Marina Hotel for twenty years.',
      explanation: {
        vi: '**By the end of this month** + **for twenty years**: khoảng thời gian TÍCH LUỸ tính đến một mốc tương lai → **will have worked** (hoặc will have been working). will work chỉ nói việc sẽ xảy ra, không cho thấy thời gian đã tích luỹ đến mốc.',
        en: '**By the end of this month** + **for twenty years**: a period ACCUMULATED up to a future point → **will have worked** (or will have been working). will work only says something will happen; it cannot express time built up to that point.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Tương lai hoàn thành: cấu trúc và ý nghĩa', en: 'Future Perfect: form and meaning' },
      body: {
        vi: 'Tương lai hoàn thành có dạng **will have + V3**, dùng **will have** cho mọi chủ ngữ. Hãy hình dung bạn đứng ở một mốc trong tương lai rồi nhìn lại: việc đó đã HOÀN TẤT trước hoặc đúng vào mốc ấy. Vì vậy câu luôn cần một mốc tương lai, nêu rõ (by Friday, by the time…) hoặc hiểu ngầm từ ngữ cảnh.',
        en: 'The Future Perfect is **will have + V3**, with **will have** for every subject. Imagine standing at a point in the future and looking back: the action is already COMPLETE before or at that point. So the sentence always needs a future reference point, stated (by Friday, by the time…) or clear from context.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Công thức', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Khẳng định', en: 'Affirmative' }, 'S + will have + V3', 'The team will have finished the audit by May.'],
          [{ vi: 'Phủ định', en: 'Negative' }, "S + will not (won't) have + V3", "The team won't have finished the audit by May."],
          [{ vi: 'Nghi vấn', en: 'Question' }, 'Will + S + have + V3…?', 'Will the team have finished the audit by May?'],
        ],
      },
      examples: [
        {
          en: 'By the time the store opens on Saturday morning, the staff **will have restocked** every shelf.',
          vi: 'Đến lúc cửa hàng mở cửa vào sáng thứ Bảy, nhân viên sẽ bổ sung hàng xong cho tất cả các kệ.',
        },
        {
          en: 'By next April, Ms. Brennan **will have completed** her MBA in Milan.',
          vi: 'Đến tháng Tư năm sau, cô Brennan sẽ hoàn thành chương trình MBA ở Milan.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Hai lỗi hình thức hay gặp: sau **will** luôn là **have** nguyên mẫu (không có will has / will had), và sau **have** phải là V3: will have **taken**, **chosen**, **written**, không phải took, chose, wrote.',
          en: 'Two common form errors: **will** is always followed by the base form **have** (never will has / will had), and **have** must be followed by the V3: will have **taken**, **chosen**, **written**, not took, chose, wrote.',
        },
      },
    },
    {
      heading: { vi: 'Dấu hiệu của tương lai hoàn thành', en: 'Future Perfect signals' },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Ghi chú', en: 'Note' },
        ],
        rows: [
          [
            { vi: 'by + mốc tương lai', en: 'by + a future time' },
            'By next Friday, we **will have shipped** all pending orders.',
            {
              vi: 'by = "chậm nhất là, trước hoặc đúng lúc". Mốc phải ở tương lai: by tomorrow, by next week, by June 30, by then. Đừng nhầm với until (kéo dài tới, bài 7.1).',
              en: 'by = "no later than, before or at". The time must be in the future: by tomorrow, by next week, by June 30, by then. Do not confuse it with until (continuing up to, lesson 7.1).',
            },
          ],
          [
            'by the end of next / this…',
            'By the end of next quarter, the firm **will have opened** five new branches.',
            {
              vi: 'Rất hay gặp trong Part 5: by the end of next month / next year / this week. Với last (by the end of last year) thì dùng had + V3 (bài 4.4).',
              en: 'Very common in Part 5: by the end of next month / next year / this week. With last (by the end of last year), use had + V3 (lesson 4.4).',
            },
          ],
          [
            { vi: 'by the time + hiện tại đơn', en: 'by the time + present simple' },
            'By the time you **arrive**, the shuttle bus **will have left**.',
            {
              vi: 'Mệnh đề by the time dùng hiện tại đơn, không dùng will (bài 4.7); mệnh đề chính dùng will have + V3. when + hiện tại đơn cũng tạo mốc tương lai tương tự: When she retires, she will have worked here for 30 years.',
              en: 'The by the time clause takes the present simple, not will (lesson 4.7); the main clause takes will have + V3. when + present simple sets a future point in the same way: When she retires, she will have worked here for 30 years.',
            },
          ],
          [
            { vi: 'for + khoảng thời gian (tính đến mốc tương lai)', en: 'for + a period (up to a future point)' },
            'By June, Ms. Ruiz **will have managed** the Lima branch for a decade.',
            {
              vi: 'Thời gian TÍCH LUỸ đến một mốc tương lai → will have + V3 (hoặc will have been + V-ing), không dùng will + V.',
              en: 'Time ACCUMULATED up to a future point → will have + V3 (or will have been + V-ing), not will + V.',
            },
          ],
          [
            'already',
            'By noon, the courier **will have already collected** the parcels.',
            {
              vi: 'already đứng sau will hoặc sau have đều đúng: will already have collected = will have already collected.',
              en: 'already can go after will or after have: will already have collected = will have already collected.',
            },
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong giao tiếp, **will + V** đôi khi vẫn đi với by + mốc tương lai, như một lời hứa về hạn chót: I will send the contract by Friday. Nhưng khi có **for + khoảng thời gian**, **already**, hay khi câu nhấn mạnh việc đã HOÀN TẤT tính đến mốc, dạng đúng là **will have + V3**, và đây là đáp án đề TOEIC chọn cho by + mốc tương lai.',
          en: 'In everyday English, **will + V** is sometimes used with by + a future time as a promise about a deadline: I will send the contract by Friday. But with **for + a period** or **already**, or when the sentence stresses that something will be COMPLETE by that point, the correct form is **will have + V3**, and that is the answer TOEIC chooses for by + a future time.',
        },
      },
    },
    {
      heading: { vi: 'Tương lai tiếp diễn (will be + V-ing)', en: 'Future Continuous (will be + V-ing)' },
      body: {
        vi: 'Tương lai tiếp diễn có dạng **will be + V-ing**, dùng cho mọi chủ ngữ. Nó diễn tả một việc **sẽ đang diễn ra** tại một thời điểm cụ thể trong tương lai: việc đó bắt đầu trước thời điểm ấy và lúc ấy vẫn chưa kết thúc.',
        en: 'The Future Continuous is **will be + V-ing**, used with every subject. It describes something that **will be in progress** at a specific moment in the future: it starts before that moment and has not finished yet at that moment.',
      },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['this time next week / tomorrow / next month', 'This time next week, our sales team **will be attending** the trade fair in Frankfurt.'],
          ['at + time + tomorrow / on + day', 'At 3 p.m. tomorrow, Mr. Ilunga **will be meeting** the suppliers from Ghana.'],
          ['at that time / then', "Please don't call at noon, as I **will be having** lunch with a client then."],
        ],
      },
      points: [
        {
          vi: 'Một việc đang diễn ra thì việc khác xen vào: When you **arrive** at the airport, our driver **will be waiting** at Exit B. Mệnh đề when dùng hiện tại đơn (bài 4.7).',
          en: 'An action in progress when something else happens: When you **arrive** at the airport, our driver **will be waiting** at Exit B. The when clause takes the present simple (lesson 4.7).',
        },
        {
          vi: 'Trong thông báo, will be + V-ing còn diễn tả việc sẽ diễn ra theo kế hoạch, nghe lịch sự và khách quan: The store **will be closing** early on December 24. Câu hỏi Will you **be using** the projector this afternoon? là cách hỏi lịch sự về kế hoạch của người khác.',
          en: 'In announcements, will be + V-ing also presents a planned event in a polite, neutral way: The store **will be closing** early on December 24. The question Will you **be using** the projector this afternoon? is a polite way to ask about someone\'s plans.',
        },
        {
          vi: 'Động từ trạng thái (know, own, belong, need, seem) không dùng tiếp diễn: This time next month, the new manager **will know** every client by name, không nói will be knowing (bài 4.1).',
          en: 'Stative verbs (know, own, belong, need, seem) are not used in the continuous: This time next month, the new manager **will know** every client by name, not will be knowing (lesson 4.1).',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**will be + V-ing** (chủ động: The crew will be painting the lobby) khác **will be + V3** (bị động: The lobby will be painted, chương 6). Sau will be mà phía sau còn tân ngữ thì gần như chắc chắn là V-ing, trừ bị động của động từ có hai tân ngữ như give, offer, send: Staff will be given a bonus.',
          en: '**will be + V-ing** (active: The crew will be painting the lobby) is different from **will be + V3** (passive: The lobby will be painted, chapter 6). If an object follows will be + the verb, it is almost always V-ing, except in passives of two-object verbs such as give, offer and send: Staff will be given a bonus.',
        },
      },
    },
    {
      heading: {
        vi: 'Tương lai hoàn thành tiếp diễn (will have been + V-ing): chỉ cần nhận biết',
        en: 'Future Perfect Continuous (will have been + V-ing): recognition only',
      },
      body: {
        vi: '**will have been + V-ing** nhấn mạnh một hoạt động kéo dài LIÊN TỤC cho tới một mốc tương lai. Nó thường đi với **for + khoảng thời gian** và một mốc tương lai (by…, by the time + hiện tại đơn). Trong Part 5, bạn chủ yếu cần nhận ra đủ bốn phần của cấu trúc và biết nó cần một mốc TƯƠNG LAI.',
        en: '**will have been + V-ing** stresses an activity that continues WITHOUT A BREAK up to a future point. It usually comes with **for + a period** and a future reference point (by…, by the time + present simple). In Part 5 you mainly need to recognise all four parts of the pattern and know that it needs a FUTURE point.',
      },
      points: [
        {
          vi: 'Bốn phần cố định: will + have + been + V-ing. Sai một phần là sai cả cụm: không viết will have being working hay will been working.',
          en: 'Four fixed parts: will + have + been + V-ing. Get one part wrong and the whole form is wrong: not will have being working or will been working.',
        },
        {
          vi: 'Với động từ chỉ hoạt động như work, live, operate, **will have + V3** + for cũng đúng: By June, she will have worked here for ten years. Dạng tiếp diễn chỉ nhấn mạnh quá trình liên tục.',
          en: 'With activity verbs such as work, live and operate, **will have + V3** + for is also correct: By June, she will have worked here for ten years. The continuous form simply stresses the ongoing process.',
        },
        {
          vi: 'Khi nêu KẾT QUẢ hoặc SỐ LƯỢNG hoàn tất thì dùng will have + V3: By Friday, we **will have interviewed** 30 applicants (thường không nói will have been interviewing 30 applicants).',
          en: 'For a completed RESULT or QUANTITY, use will have + V3: By Friday, we **will have interviewed** 30 applicants (will have been interviewing 30 applicants is not normally used).',
        },
        {
          vi: 'Động từ trạng thái không dùng tiếp diễn: By May, the two partners **will have known** each other for 20 years.',
          en: 'Stative verbs are not used in the continuous: By May, the two partners **will have known** each other for 20 years.',
        },
      ],
      examples: [
        {
          en: 'By the end of this year, Bellmare Ferries **will have been operating** the island route for half a century.',
          vi: 'Tính đến cuối năm nay, hãng phà Bellmare sẽ khai thác tuyến ra đảo được nửa thế kỷ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng nhầm **will have been + V-ing** (chủ động, tiếp diễn: The engineers will have been testing the system) với **will have been + V3** (bị động: The system will have been tested by May, chương 6).',
          en: 'Do not confuse **will have been + V-ing** (active, continuous: The engineers will have been testing the system) with **will have been + V3** (passive: The system will have been tested by May, chapter 6).',
        },
      },
    },
    {
      heading: { vi: 'Phân biệt các dạng tương lai', en: 'Telling the future forms apart' },
      body: {
        vi: 'Cùng một tình huống: đoàn kiểm toán bắt đầu làm việc lúc 8 giờ sáng thứ Hai và dự kiến làm trong ba ngày. Mỗi dạng động từ cho thấy một góc nhìn khác về thời gian.',
        en: 'One situation: the auditors start work at 8 a.m. on Monday and expect to spend three days on the job. Each verb form shows a different view of time.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Ý nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'will + V',
            { vi: 'Việc sẽ xảy ra (bài 4.5)', en: 'Something that will happen (lesson 4.5)' },
            'The auditors **will review** our accounts next week.',
          ],
          [
            'will be + V-ing',
            { vi: 'Đang diễn ra tại một thời điểm tương lai', en: 'In progress at a future moment' },
            'At 10 a.m. on Monday, the auditors **will be reviewing** our accounts.',
          ],
          [
            'will have + V3',
            { vi: 'Đã xong trước hoặc đúng một mốc tương lai', en: 'Complete by a future point' },
            'By Wednesday evening, the auditors **will have reviewed** all our accounts.',
          ],
          [
            'will have been + V-ing',
            { vi: 'Kéo dài liên tục tới một mốc tương lai', en: 'Continuing up to a future point' },
            'By Wednesday evening, the auditors **will have been reviewing** our accounts for three days.',
          ],
          [
            'had + V3',
            { vi: 'Đã xong trước một mốc QUÁ KHỨ (bài 4.4)', en: 'Complete before a PAST point (lesson 4.4)' },
            'By the end of last week, the auditors **had reviewed** all our accounts.',
          ],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Khi đề cho cả will be + V-ing và will have + V3: thời điểm kiểu **at 10 a.m. tomorrow / this time next week** mà việc đang dở dang → **will be + V-ing**; mốc **by… / by the time…** mà việc đã xong → **will have + V3**. Còn việc chỉ bắt đầu đúng lúc đó (The meeting will start at 10 a.m.) thì dùng will + V.',
          en: 'When the options include both will be + V-ing and will have + V3: a moment such as **at 10 a.m. tomorrow / this time next week** with the action unfinished → **will be + V-ing**; a point **by… / by the time…** with the action complete → **will have + V3**. An action that simply starts at that moment (The meeting will start at 10 a.m.) takes will + V.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu tương lai hoàn thành / tiếp diễn trong Part 5', en: 'Attacking Future Perfect / Continuous items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các thì của cùng một động từ → tìm **dấu hiệu thời gian** trước khi dịch: by + mốc, by the end of, by the time, this time next week, at + giờ + tomorrow.',
          en: 'Four options are tenses of one verb → find the **time cue** before translating: by + a time, by the end of, by the time, this time next week, at + a time + tomorrow.',
        },
        {
          vi: '**by + mốc tương lai**, **by the end of next…**, **by the time + hiện tại đơn** → **will have + V3**. Loại had + V3 (mốc quá khứ) và has/have + V3 (chỉ tính tới hiện tại).',
          en: '**by + a future time**, **by the end of next…**, **by the time + present simple** → **will have + V3**. Rule out had + V3 (past point) and has/have + V3 (up to now only).',
        },
        {
          vi: 'Có thêm **for + khoảng thời gian** tính đến mốc tương lai → **will have + V3** hoặc **will have been + V-ing**; loại have/has been V-ing (tính tới hiện tại) và had been V-ing (tính tới mốc quá khứ).',
          en: 'With **for + a period** up to a future point → **will have + V3** or **will have been + V-ing**; rule out have/has been V-ing (up to now) and had been V-ing (up to a past point).',
        },
        {
          vi: '**this time next week**, **at + giờ + tomorrow** và việc đang dở dang → **will be + V-ing**. Loại was/were + V-ing: đó là quá khứ tiếp diễn (at this time yesterday).',
          en: '**this time next week**, **at + a time + tomorrow** and an unfinished action → **will be + V-ing**. Rule out was/were + V-ing: that is the past continuous (at this time yesterday).',
        },
        {
          vi: 'Chỗ trống ngay sau **will have** → V3; ngay sau **will be** mà còn tân ngữ phía sau → V-ing; ngay sau **will** → have / be nguyên mẫu.',
          en: 'Blank right after **will have** → V3; right after **will be** with an object following → V-ing; right after **will** → the base form have / be.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Ví dụ: By the time the auditors arrive next week, we ------- all the receipts. (A) had scanned (B) have scanned (C) will have scanned (D) were scanning. Mệnh đề by the time có **arrive** (hiện tại đơn) và **next week** → chọn (C) will have scanned.',
          en: 'Example: By the time the auditors arrive next week, we ------- all the receipts. (A) had scanned (B) have scanned (C) will have scanned (D) were scanning. The by the time clause has **arrive** (present simple) and **next week** → choose (C) will have scanned.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'By the end of next month, Kestrel Airways ------- self-service check-in kiosks at all of its domestic airports.',
      options: ['will have installed', 'has installed', 'had installed', 'was installing'],
      answer: 0,
      explanation: {
        vi: '**By the end of next month** là một mốc trong TƯƠNG LAI, việc lắp đặt xong trước mốc đó → **will have installed**. had installed chỉ dùng với mốc quá khứ (by the end of last month); has installed và was installing không đi với mốc tương lai.',
        en: '**By the end of next month** is a point in the FUTURE, and the installation will be complete by then → **will have installed**. had installed is only for a past point (by the end of last month); has installed and was installing cannot go with a future point.',
      },
      translation: 'Đến cuối tháng sau, hãng hàng không Kestrel Airways sẽ lắp xong ki-ốt tự làm thủ tục tại tất cả các sân bay nội địa của hãng.',
    },
    {
      sentence: 'By the time Ms. Varga retires next June, she ------- at Lindell Pharmaceuticals for thirty-two years.',
      options: ['had worked', 'has worked', 'will have worked', 'is working'],
      answer: 2,
      explanation: {
        vi: '**By the time** + hiện tại đơn **retires** (kèm **next June**) đặt mốc ở tương lai, và **for thirty-two years** là thời gian tích luỹ đến mốc đó → **will have worked**. had worked là bẫy: chỉ đúng khi mốc ở quá khứ (by the time she retired); has worked chỉ tính đến hiện tại.',
        en: '**By the time** + the present simple **retires** (with **next June**) sets a future point, and **for thirty-two years** is the time accumulated up to it → **will have worked**. had worked is the trap: it fits only a past point (by the time she retired); has worked counts only up to now.',
      },
      translation: 'Đến khi bà Varga nghỉ hưu vào tháng Sáu năm sau, bà sẽ làm việc tại Lindell Pharmaceuticals được ba mươi hai năm.',
    },
    {
      sentence: 'By the time the delegates from Seoul arrive next Monday, our technicians ------- all the interpreting equipment in the main hall.',
      options: ['tested', 'had tested', 'have been testing', 'will have tested'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề **by the time** dùng hiện tại đơn **arrive** và có **next Monday** → mốc tương lai; việc kiểm tra xong trước mốc đó → **will have tested**. had tested chỉ đúng khi mệnh đề by the time ở quá khứ đơn (arrived); tested và have been testing không đi với mốc tương lai.',
        en: 'The **by the time** clause uses the present simple **arrive** with **next Monday** → a future point; the testing will be complete before it → **will have tested**. had tested fits only when the by the time clause is in the past simple (arrived); tested and have been testing cannot go with a future point.',
      },
      translation: 'Đến lúc đoàn đại biểu từ Seoul đến vào thứ Hai tuần sau, các kỹ thuật viên của chúng tôi sẽ kiểm tra xong toàn bộ thiết bị phiên dịch ở hội trường chính.',
    },
    {
      sentence: 'By the end of this week, the hiring committee will have ------- three finalists for the regional manager position.',
      options: ['chose', 'chosen', 'choose', 'choosing'],
      answer: 1,
      explanation: {
        vi: 'Sau **will have** phải là V3 (quá khứ phân từ): choose → chose → **chosen**. chose là V2 nên không đứng sau have; choose và choosing không tạo được thì hoàn thành.',
        en: 'After **will have** we need the V3 (past participle): choose → chose → **chosen**. chose is the V2 and cannot follow have; choose and choosing cannot form a perfect tense.',
      },
      translation: 'Đến cuối tuần này, hội đồng tuyển dụng sẽ chọn xong ba ứng viên vào vòng cuối cho vị trí quản lý khu vực.',
    },
    {
      sentence: 'This time next week, Mr. Halvorsen ------- the opening session of the international logistics summit in Rotterdam.',
      options: ['chaired', 'has chaired', 'had been chairing', 'will be chairing'],
      answer: 3,
      explanation: {
        vi: '**This time next week** chỉ một thời điểm cụ thể trong tương lai, lúc đó phiên họp đang diễn ra → tương lai tiếp diễn **will be chairing**. chaired, has chaired và had been chairing đều là dạng quá khứ hoặc hoàn thành, mâu thuẫn với next week.',
        en: '**This time next week** points to a specific future moment when the session will be under way → the Future Continuous **will be chairing**. chaired, has chaired and had been chairing are past or perfect forms that clash with next week.',
      },
      translation: 'Vào giờ này tuần sau, ông Halvorsen sẽ đang chủ trì phiên khai mạc của hội nghị thượng đỉnh logistics quốc tế ở Rotterdam.',
    },
    {
      sentence: 'Ms. Achebe cannot meet the auditors at 2 p.m. tomorrow because she ------- a video conference with investors in Nairobi at that time.',
      options: ['will be holding', 'was holding', 'has been holding', 'had held'],
      answer: 0,
      explanation: {
        vi: '**at 2 p.m. tomorrow** và **at that time** cho thấy cuộc họp trực tuyến sẽ đang diễn ra vào thời điểm tương lai đó → **will be holding**. was holding là quá khứ tiếp diễn, chỉ hợp với thời điểm quá khứ (at 2 p.m. yesterday).',
        en: '**at 2 p.m. tomorrow** and **at that time** show the video conference will be in progress at that future moment → **will be holding**. was holding is the past continuous and fits only a past moment (at 2 p.m. yesterday).',
      },
      translation: 'Cô Achebe không thể gặp các kiểm toán viên lúc 2 giờ chiều mai vì vào lúc đó cô sẽ đang họp trực tuyến với các nhà đầu tư ở Nairobi.',
    },
    {
      sentence: 'At 9 a.m. on Thursday, the maintenance crew will be ------- the elevators in the east wing, so please use the stairs.',
      options: ['inspect', 'inspected', 'inspecting', 'inspection'],
      answer: 2,
      explanation: {
        vi: 'Sau **will be** cần V-ing để tạo thì tương lai tiếp diễn, và phía sau còn tân ngữ **the elevators** → **inspecting**. inspected sẽ tạo câu bị động, không thể có tân ngữ theo sau; inspect là nguyên mẫu, inspection là danh từ.',
        en: 'After **will be** we need V-ing to form the Future Continuous, and the object **the elevators** follows → **inspecting**. inspected would make the clause passive, which cannot take an object here; inspect is a base verb and inspection a noun.',
      },
      translation: 'Lúc 9 giờ sáng thứ Năm, đội bảo trì sẽ đang kiểm tra thang máy ở khu phía đông, vì vậy vui lòng đi cầu thang bộ.',
    },
    {
      sentence: 'By next March, the research team at Corvale Biotech ------- on the new allergy medication for ten years.',
      options: ['had been working', 'will have been working', 'have been working', 'were working'],
      answer: 1,
      explanation: {
        vi: '**By next March** là mốc tương lai, và **for ten years** nhấn mạnh quá trình kéo dài liên tục tới mốc đó → **will have been working**. had been working chỉ đúng với mốc quá khứ; have been working chỉ tính tới hiện tại.',
        en: '**By next March** is a future point, and **for ten years** stresses an activity continuing up to it → **will have been working**. had been working fits only a past point; have been working counts only up to now.',
      },
      translation: 'Tính đến tháng Ba năm sau, nhóm nghiên cứu của Corvale Biotech sẽ nghiên cứu loại thuốc chống dị ứng mới được mười năm.',
    },
    {
      sentence: 'By next spring, Ridgeway Bank ------- more than forty of its smaller branches into digital service centers.',
      options: ['converted', 'had converted', 'will have converted', 'has been converting'],
      answer: 2,
      explanation: {
        vi: '**By next spring** là mốc tương lai, việc chuyển đổi sẽ hoàn tất trước mốc đó → **will have converted**. converted và had converted là quá khứ; has been converting chỉ tính tới hiện tại, không đi với by + mốc tương lai.',
        en: '**By next spring** is a future point, and the conversion will be complete by then → **will have converted**. converted and had converted are past forms; has been converting counts only up to now and cannot go with by + a future time.',
      },
      translation: 'Đến mùa xuân năm sau, Ngân hàng Ridgeway sẽ chuyển đổi xong hơn bốn mươi chi nhánh nhỏ thành trung tâm dịch vụ số.',
    },
    {
      sentence: "By the end of next week's trade fair, more than 3,000 buyers ------- our exhibition booth.",
      options: ['will be visiting', 'have visited', 'had visited', 'will have visited'],
      answer: 3,
      explanation: {
        vi: "**By the end of next week's trade fair** là mốc tương lai, và **more than 3,000 buyers** là tổng số tích luỹ đến mốc đó → **will have visited**. will be visiting (đang diễn ra) vô lý vì lúc ấy hội chợ đã kết thúc; have visited và had visited không đi với mốc tương lai.",
        en: "**By the end of next week's trade fair** is a future point, and **more than 3,000 buyers** is a total built up by then → **will have visited**. will be visiting (in progress) makes no sense once the fair has ended; have visited and had visited cannot go with a future point.",
      },
      translation: 'Tính đến khi hội chợ thương mại tuần sau kết thúc, sẽ có hơn 3.000 người mua ghé thăm gian hàng triển lãm của chúng tôi.',
    },
  ],
};
