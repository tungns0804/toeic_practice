import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'adverb-clauses-time',
  intro: {
    vi: 'Bài này dạy **nghĩa** của các liên từ thời gian (when, while, as soon as, until, by the time, since…) để chọn đúng từ nối hai mệnh đề. Trong Part 5/6, bốn lựa chọn thường đều là liên từ hợp ngữ pháp, nên chỉ có nghĩa và thì của mệnh đề chính mới giúp bạn loại trừ.',
    en: 'This lesson teaches the **meaning** of time conjunctions (when, while, as soon as, until, by the time, since…) so you can pick the right word to join two clauses. In Parts 5 and 6 all four options are often grammatical conjunctions, so only their meaning and the tense of the main clause let you eliminate the wrong ones.',
  },
  mistakes: [
    {
      wrong: 'Please wait in the reception area [[by the time]] your name is called.',
      right: 'Please wait in the reception area [[until]] your name is called.',
      explanation: {
        vi: '**wait** là hành động kéo dài, nên cần **until** (cho đến khi). **by the time** nghĩa là "trước hoặc muộn nhất là lúc", đi với một việc phải HOÀN THÀNH trước mốc đó.',
        en: '**wait** is an ongoing action, so it needs **until**. **by the time** means "before or at the latest when" and goes with an action that must be COMPLETED before that point.',
      },
    },
    {
      wrong: 'Online sales have doubled [[for]] the company redesigned its website.',
      right: 'Online sales have doubled [[since]] the company redesigned its website.',
      explanation: {
        vi: 'Sau chỗ trống là một mệnh đề chỉ MỐC bắt đầu (the company redesigned…) nên dùng **since**. **for** chỉ đi với một KHOẢNG thời gian (for two years), không đi với mệnh đề.',
        en: 'The blank is followed by a clause giving a STARTING POINT (the company redesigned…), so **since** is needed. **for** only takes a LENGTH of time (for two years), not a clause.',
      },
    },
    {
      wrong: 'The client must sign the contract [[until]] the project starts.',
      right: 'The client must sign the contract [[before]] the project starts.',
      explanation: {
        vi: '**until** chỉ đi với hành động kéo dài liên tục đến một mốc. **sign** là hành động xảy ra một lần, nên phải dùng **before** (trước khi).',
        en: '**until** only works with an action that continues up to a point. **sign** happens once, so **before** is needed.',
      },
    },
    {
      wrong: '[[While]] the shipment arrives, the warehouse staff will check every box.',
      right: '[[As soon as]] the shipment arrives, the warehouse staff will check every box.',
      explanation: {
        vi: '**while** cần một hành động kéo dài diễn ra song song. **arrive** xảy ra trong chốc lát, nên dùng **as soon as** (ngay khi) hoặc when.',
        en: '**while** needs an ongoing action that runs alongside the main one. **arrive** happens in a moment, so use **as soon as** or when.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Mệnh đề trạng ngữ chỉ thời gian là gì', en: 'What an adverb clause of time is' },
      body: {
        vi: 'Mệnh đề trạng ngữ chỉ thời gian = **liên từ thời gian + chủ ngữ + động từ**, trả lời câu hỏi "việc chính xảy ra khi nào?". Nó có thể đứng đầu câu (có **dấu phẩy** ngăn cách) hoặc đứng sau mệnh đề chính (thường không có dấu phẩy). Nhắc lại một dòng từ bài 4.7: khi nói về tương lai, mệnh đề thời gian dùng hiện tại đơn/hiện tại hoàn thành, không dùng will.',
        en: 'An adverb clause of time = **time conjunction + subject + verb**, answering the question "when does the main action happen?". It can open the sentence (followed by a **comma**) or follow the main clause (usually with no comma). A one-line reminder from lesson 4.7: for the future, the time clause takes the present simple or Present Perfect, not will.',
      },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['when', { vi: 'khi, vào lúc', en: 'at the time that' }, 'when the meeting ended'],
          ['while / as', { vi: 'trong khi (hai việc song song)', en: 'during the time that' }, 'while the system is updating'],
          ['as soon as / the moment (that)', { vi: 'ngay khi', en: 'immediately after' }, 'as soon as the order ships'],
          ['once', { vi: 'một khi, sau khi (việc trước đã xong)', en: 'after / as soon as (something is done)' }, 'once the form is approved'],
          ['before / after', { vi: 'trước khi / sau khi', en: 'earlier than / later than' }, 'before the guests arrive'],
          ['until / till', { vi: 'cho đến khi', en: 'up to the time that' }, 'until the store closes'],
          ['by the time', { vi: 'trước lúc, muộn nhất là lúc', en: 'before or at the time that' }, 'by the time the CEO arrives'],
          ['since', { vi: 'từ khi (đến nay)', en: 'from that point until now' }, 'since she joined the firm'],
          ['whenever', { vi: 'bất cứ khi nào, mỗi khi', en: 'every time that / at any time that' }, 'whenever a client calls'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**before, after, until, since** còn là giới từ (before the meeting, since 2020): phân biệt hai vai này ở bài 8.2. Bài này chỉ bàn chuyện chọn liên từ theo NGHĨA.',
          en: '**before, after, until, since** are also prepositions (before the meeting, since 2020): the two roles are compared in lesson 8.2. This lesson is only about choosing the conjunction by MEANING.',
        },
      },
    },
    {
      heading: { vi: 'Hai việc cùng lúc: when, while, as', en: 'Two things at the same time: when, while, as' },
      points: [
        {
          vi: '**when** dùng được cho cả một thời điểm lẫn một khoảng thời gian: nó có thể mở đầu việc ngắn xen vào (when + quá khứ đơn) hoặc việc đang diễn ra (when + quá khứ tiếp diễn).',
          en: '**when** works for both a point and a period of time: it can introduce the short action that interrupts (when + past simple) or the action in progress (when + past continuous).',
        },
        {
          vi: '**while** chỉ đi với hành động hoặc trạng thái KÉO DÀI (thường ở thì tiếp diễn hoặc với động từ như be, stay, work). Không dùng while với việc xảy ra trong chốc lát (arrive, start, sign).',
          en: '**while** only goes with an action or state that LASTS (often in a continuous tense, or with verbs such as be, stay, work). Do not use while with a momentary event (arrive, start, sign).',
        },
        {
          vi: '**as** = while/when, nhấn mạnh hai việc diễn ra ĐỒNG THỜI, hoặc một sự thay đổi diễn ra song song (As demand grew, prices rose).',
          en: '**as** = while/when, stressing that two things happen AT THE SAME TIME, or that one change runs alongside another (As demand grew, prices rose).',
        },
      ],
      examples: [
        {
          en: 'The power went out **when** Mr. Ferreira was printing the contracts.',
          vi: 'Mất điện đúng lúc anh Ferreira đang in hợp đồng.',
        },
        {
          en: '**While** the conference hall is being repainted, all seminars will take place on the third floor.',
          vi: 'Trong thời gian hội trường được sơn lại, mọi buổi hội thảo sẽ diễn ra ở tầng ba.',
        },
        {
          en: '**As** the number of online orders increased, the company opened a second warehouse.',
          vi: 'Khi lượng đơn hàng trực tuyến tăng lên, công ty mở thêm một kho hàng thứ hai.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**as** và **since** còn có nghĩa "vì" (bài 13.2), còn **while** còn có nghĩa "trong khi đó / mặc dù" (bài 13.3). Hãy dựa vào ngữ cảnh: nếu câu không nói về thời gian, đó không còn là liên từ thời gian.',
          en: '**as** and **since** can also mean "because" (lesson 13.2), and **while** can also mean "whereas / although" (lesson 13.3). Use the context: if the sentence is not about timing, the word is not working as a time conjunction.',
        },
      },
    },
    {
      heading: { vi: 'Ngay khi và mỗi khi: as soon as, the moment, once, whenever', en: 'Immediately and every time: as soon as, the moment, once, whenever' },
      points: [
        {
          vi: '**as soon as** và **the moment (that)** = ngay khi, việc chính xảy ra liền sau việc trong mệnh đề thời gian.',
          en: '**as soon as** and **the moment (that)** = immediately after; the main action follows the time-clause event straight away.',
        },
        {
          vi: '**once** = một khi / sau khi, nhấn mạnh việc trong mệnh đề thời gian phải XONG thì việc chính mới diễn ra; vì vậy hay đi với hiện tại hoàn thành hoặc bị động (once the payment has been received).',
          en: '**once** = after / as soon as, stressing that the time-clause event must be DONE before the main action can happen; that is why it often takes the Present Perfect or a passive (once the payment has been received).',
        },
        {
          vi: '**whenever** = mỗi khi / bất cứ khi nào, dùng cho việc lặp lại hoặc thời điểm tùy ý; mệnh đề chính thường ở hiện tại đơn (thói quen, quy định) hoặc là lời mời (Call us whenever you need help).',
          en: '**whenever** = every time that / at any time that, used for repeated events or any time someone chooses; the main clause is often in the present simple (a routine or rule) or is an invitation (Call us whenever you need help).',
        },
      ],
      examples: [
        {
          en: 'Ms. Yilmaz called the supplier **the moment** she noticed the error on the invoice.',
          vi: 'Chị Yilmaz gọi cho nhà cung cấp ngay khi phát hiện ra lỗi trên hoá đơn.',
        },
        {
          en: '**Once** the new hires have completed their safety training, they will receive their access cards.',
          vi: 'Sau khi nhân viên mới hoàn tất khoá huấn luyện an toàn, họ sẽ nhận thẻ ra vào.',
        },
        {
          en: 'The inventory software updates automatically **whenever** a sale is recorded.',
          vi: 'Phần mềm quản lý hàng tồn kho tự động cập nhật mỗi khi một giao dịch bán được ghi nhận.',
        },
      ],
    },
    {
      heading: { vi: 'until hay by the time; until hay before', en: 'until or by the time; until or before' },
      body: {
        vi: '**until** = việc chính KÉO DÀI liên tục rồi dừng đúng ở mốc đó, nên đi với động từ kéo dài (wait, stay, remain, keep, continue). Dạng **not … until** nghĩa là "mãi đến khi… mới": việc chính chỉ bắt đầu từ mốc đó. **by the time** = việc chính đã HOÀN THÀNH trước hoặc đúng lúc mốc đó, nên mệnh đề chính thường ở thì hoàn thành: will have + V3 (tương lai) hoặc had + V3 (quá khứ).',
        en: '**until** = the main action CONTINUES up to that point and stops there, so it goes with verbs that last (wait, stay, remain, keep, continue). The pattern **not … until** means "only when…": the main action starts only at that point. **by the time** = the main action is COMPLETED before or at that point, so the main clause is often in a perfect tense: will have + V3 (future) or had + V3 (past).',
      },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'until',
            { vi: 'Hành động kéo dài, hoặc phủ định (not … until)', en: 'An ongoing action, or a negative (not … until)' },
            'The shop stays open until the last customer leaves.',
          ],
          [
            'by the time',
            { vi: 'Hành động hoàn thành: will have / had + V3', en: 'A completed action: will have / had + V3' },
            'By the time we arrived, the bus had left.',
          ],
          [
            'before',
            { vi: 'Hành động xảy ra một lần, trước mốc', en: 'A one-off action, earlier than the point' },
            'Sign the form before you leave.',
          ],
        ],
      },
      examples: [
        {
          en: 'The new menu will not be introduced **until** the chef has tested every dish.',
          vi: 'Thực đơn mới sẽ chưa được đưa ra cho đến khi bếp trưởng thử xong mọi món.',
        },
        {
          en: '**By the time** the trade show opens, our team will have set up the display booth.',
          vi: 'Trước lúc hội chợ thương mại khai mạc, đội của chúng tôi sẽ dựng xong gian trưng bày.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy **will have + V3** hoặc **had + V3** ở mệnh đề chính → nghĩ ngay đến **by the time**. Thấy động từ kéo dài (wait, remain, stay) hoặc **not** → nghĩ đến **until**.',
          en: 'See **will have + V3** or **had + V3** in the main clause → think **by the time**. See a lasting verb (wait, remain, stay) or **not** → think **until**.',
        },
      },
    },
    {
      heading: { vi: 'since và for', en: 'since and for' },
      points: [
        {
          vi: '**since** + MỐC thời gian: có thể là cụm từ (since March) hoặc mệnh đề (since she joined the company). Mệnh đề sau since thường ở quá khứ đơn, còn mệnh đề chính ở hiện tại hoàn thành (has/have + V3).',
          en: '**since** + a STARTING POINT: either a phrase (since March) or a clause (since she joined the company). The since clause is usually in the past simple, while the main clause is in the Present Perfect (has/have + V3).',
        },
        {
          vi: '**for** + KHOẢNG thời gian (for three years, for a long time). for ở đây là giới từ, KHÔNG nối mệnh đề.',
          en: '**for** + a LENGTH of time (for three years, for a long time). Here for is a preposition and does NOT introduce a clause.',
        },
        {
          vi: 'Cấu trúc hay gặp: **It has been / It is** + khoảng thời gian + **since** + quá khứ đơn (It has been six months since we last met).',
          en: 'A common pattern: **It has been / It is** + length of time + **since** + past simple (It has been six months since we last met).',
        },
      ],
      examples: [
        {
          en: 'Mr. Adeyemi has led the logistics department **since** the firm opened its Nairobi office.',
          vi: 'Anh Adeyemi điều hành bộ phận hậu cần từ khi công ty mở văn phòng ở Nairobi.',
        },
        {
          en: 'The two companies have been partners **for** more than a decade.',
          vi: 'Hai công ty đã là đối tác của nhau hơn mười năm.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng ghép **since** với một khoảng thời gian ("since three years" là sai) và đừng để **for** đứng trước một mệnh đề có chủ ngữ và động từ.',
          en: 'Do not put **since** before a length of time ("since three years" is wrong), and do not put **for** before a clause with a subject and a verb.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu liên từ thời gian ở Part 5', en: 'Tackling time-conjunction items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là liên từ/giới từ và phía sau chỗ trống là một mệnh đề → loại giới từ thuần (during, for) trước.',
          en: 'Four options that are conjunctions/prepositions and a clause after the blank → first cross out pure prepositions (during, for).',
        },
        {
          vi: 'Nhìn thì của mệnh đề chính: hiện tại hoàn thành → since; will have / had + V3 → by the time; quá khứ đơn với việc đang diễn ra → when/as/while.',
          en: 'Look at the tense of the main clause: Present Perfect → since; will have / had + V3 → by the time; past simple with an action in progress → when/as/while.',
        },
        {
          vi: 'Nhìn động từ: việc kéo dài hoặc phủ định → until; việc xảy ra trong chốc lát → when, as soon as, once, before, after (không dùng while/until).',
          en: 'Look at the verbs: an ongoing action or a negative → until; a momentary event → when, as soon as, once, before, after (not while/until).',
        },
        {
          vi: 'Cuối cùng đọc lại cả câu với đáp án để chắc nghĩa hợp lý: "mỗi khi" (whenever), "ngay khi" (as soon as/the moment) hay "sau khi xong" (once).',
          en: 'Finally, reread the whole sentence with your choice to make sure the meaning fits: "every time" (whenever), "immediately" (as soon as / the moment) or "after it is done" (once).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Passengers are asked to remain in their seats ------- the bus has come to a complete stop.',
      options: ['since', 'until', 'by the time', 'while'],
      answer: 1,
      explanation: {
        vi: '**remain in their seats** là hành động kéo dài và dừng lại khi xe dừng hẳn → **until**. by the time cần một việc phải hoàn thành trước mốc; while không đi với hiện tại hoàn thành chỉ việc đã xong; since (từ khi) cần mệnh đề chính ở hiện tại hoàn thành, còn hiểu là "vì" thì vô lý.',
        en: '**remain in their seats** is an ongoing action that ends when the bus stops → **until**. by the time needs an action completed before the point; while does not fit a Present Perfect describing a finished event; since as a time word needs a Present Perfect main clause, and read as "because" it is illogical.',
      },
      translation: 'Hành khách được yêu cầu ngồi yên tại chỗ cho đến khi xe buýt dừng hẳn.',
    },
    {
      sentence: "------- the auditors arrive on Monday, the accounting team will have organized all of last year's receipts.",
      options: ['During', 'While', 'By the time', 'Until'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề chính dùng **will have organized** (tương lai hoàn thành): việc phải xong trước mốc → **By the time**. Until cần hành động kéo dài; while không hợp với động từ tức thời arrive; During là giới từ, không đi với mệnh đề.',
        en: 'The main clause uses **will have organized** (future perfect): the job must be done before that point → **By the time**. Until needs an ongoing action; while does not fit the momentary verb arrive; During is a preposition and cannot take a clause.',
      },
      translation: 'Trước lúc các kiểm toán viên đến vào thứ Hai, nhóm kế toán sẽ sắp xếp xong toàn bộ biên lai của năm ngoái.',
    },
    {
      sentence: 'Ms. Okafor has managed the Lagos branch ------- she transferred from the head office in 2019.',
      options: ['since', 'during', 'until', 'whenever'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính ở hiện tại hoàn thành **has managed**, mệnh đề sau chỗ trống là mốc bắt đầu trong quá khứ (**in 2019**) → **since**. during là giới từ, không đi với mệnh đề; until và whenever không hợp với hiện tại hoàn thành ở đây.',
        en: 'The main clause is in the Present Perfect (**has managed**) and the clause after the blank gives a past starting point (**in 2019**) → **since**. during is a preposition and cannot take a clause; until and whenever do not fit the Present Perfect here.',
      },
      translation: 'Chị Okafor quản lý chi nhánh Lagos từ khi chị chuyển từ trụ sở chính sang vào năm 2019.',
    },
    {
      sentence: 'Mr. Haddad has supervised the night shift ------- nearly six years and knows every machine on the floor.',
      options: ['since', 'while', 'when', 'for'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là KHOẢNG thời gian **nearly six years** (không có động từ) → giới từ **for**. since cần một mốc (since 2020); while và when là liên từ, phải có mệnh đề theo sau.',
        en: 'The blank is followed by a LENGTH of time, **nearly six years**, with no verb → the preposition **for**. since needs a starting point (since 2020); while and when are conjunctions and need a clause.',
      },
      translation: 'Anh Haddad đã giám sát ca đêm gần sáu năm và nắm rõ từng máy móc trong xưởng.',
    },
    {
      sentence: '------- the elevators are being serviced this afternoon, visitors should use the stairs near the east entrance.',
      options: ['As soon as', 'By the time', 'While', 'Until'],
      answer: 2,
      explanation: {
        vi: '**are being serviced** là việc đang diễn ra trong một khoảng thời gian, song song với việc dùng cầu thang → **While**. As soon as chỉ thời điểm tức thì; Until và By the time làm câu mang nghĩa "dùng cầu thang trước khi bảo trì", trái với ý câu.',
        en: '**are being serviced** is an action in progress over a period, running alongside the use of the stairs → **While**. As soon as marks an instant; Until and By the time would mean using the stairs before the servicing, which contradicts the sentence.',
      },
      translation: 'Trong thời gian thang máy được bảo trì chiều nay, khách vui lòng đi cầu thang gần lối vào phía đông.',
    },
    {
      sentence: 'The sales team began calling clients ------- the new price list was approved by the board.',
      options: ['the moment', 'until', 'by the time', 'during'],
      answer: 0,
      explanation: {
        vi: '**began calling** xảy ra ngay sau khi bảng giá được duyệt → **the moment** (= as soon as). until cần hành động kéo dài, không đi với began; by the time ở quá khứ cần had + V3; during là giới từ, không đi với mệnh đề.',
        en: '**began calling** happened right after the price list was approved → **the moment** (= as soon as). until needs an ongoing action, not began; by the time in the past needs had + V3; during is a preposition and cannot take a clause.',
      },
      translation: 'Nhóm bán hàng bắt đầu gọi cho khách hàng ngay khi bảng giá mới được hội đồng quản trị phê duyệt.',
    },
    {
      sentence: '------- the lease has been signed by both parties, the deposit will be transferred within three business days.',
      options: ['Until', 'While', 'Although', 'Once'],
      answer: 3,
      explanation: {
        vi: '**has been signed** nhấn mạnh việc ký phải XONG rồi mới chuyển tiền cọc → **Once** (một khi / sau khi). While cần việc đang diễn ra; Until cho nghĩa ngược lại; Although chỉ sự tương phản, không hợp nghĩa.',
        en: '**has been signed** stresses that the signing must be FINISHED before the deposit is sent → **Once**. While needs an action in progress; Until gives the opposite meaning; Although expresses contrast, which does not fit.',
      },
      translation: 'Một khi hợp đồng thuê đã được hai bên ký, tiền đặt cọc sẽ được chuyển trong vòng ba ngày làm việc.',
    },
    {
      sentence: "The security system sends an alert to the manager's phone ------- someone enters the server room after hours.",
      options: ['until', 'whenever', 'by the time', 'since'],
      answer: 1,
      explanation: {
        vi: 'Hiện tại đơn **sends** mô tả việc lặp lại: MỖI KHI có người vào phòng thì gửi cảnh báo → **whenever**. until cần hành động kéo dài; by the time cần thì hoàn thành; since cần hiện tại hoàn thành và một mốc quá khứ.',
        en: 'The present simple **sends** describes a repeated event: an alert goes out EVERY TIME someone enters → **whenever**. until needs an ongoing action; by the time needs a perfect tense; since needs the Present Perfect and a past starting point.',
      },
      translation: 'Hệ thống an ninh gửi cảnh báo đến điện thoại của quản lý mỗi khi có người vào phòng máy chủ ngoài giờ làm việc.',
    },
    {
      sentence: 'Refunds will not be issued ------- the returned merchandise has been inspected by our quality team.',
      options: ['while', 'until', 'during', 'whenever'],
      answer: 1,
      explanation: {
        vi: 'Cấu trúc **not … until** = "mãi đến khi… mới": chỉ hoàn tiền sau khi kiểm tra xong → **until**. while không đi với hiện tại hoàn thành chỉ việc đã xong; during là giới từ; whenever không hợp nghĩa.',
        en: 'The pattern **not … until** means "only when…": refunds come only after the inspection → **until**. while does not fit a Present Perfect describing a finished event; during is a preposition; whenever makes no sense here.',
      },
      translation: 'Tiền hoàn lại sẽ chỉ được chuyển sau khi hàng trả lại đã được nhóm kiểm định chất lượng kiểm tra.',
    },
    {
      sentence: '------- Ms. Romero was presenting the quarterly figures, the projector suddenly stopped working.',
      options: ['Until', 'By the time', 'Since', 'As'],
      answer: 3,
      explanation: {
        vi: '**was presenting** là việc đang diễn ra thì máy chiếu hỏng (**suddenly stopped**) → **As** (= when/while). By the time cần had + V3; Until không hợp nghĩa; Since chỉ thời gian thì cần hiện tại hoàn thành, còn hiểu là "vì" thì vô nghĩa.',
        en: '**was presenting** is the action in progress when the projector failed (**suddenly stopped**) → **As** (= when/while). By the time needs had + V3; Until makes no sense; Since as a time word needs the Present Perfect, and read as "because" it is illogical.',
      },
      translation: 'Đúng lúc chị Romero đang trình bày số liệu quý thì máy chiếu đột nhiên ngừng hoạt động.',
    },
  ],
};
