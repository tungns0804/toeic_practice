import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-time-clauses',
  intro: {
    vi: 'Khi câu nói về tương lai, động từ sau **when, as soon as, once, until, by the time…** chia ở thì **hiện tại** chứ không dùng will; will chỉ nằm ở mệnh đề chính. Part 5/6 kiểm tra điểm này rất đều đặn: đặt "will + V" cạnh đáp án hiện tại đơn, hoặc để trống ở mệnh đề chính và chờ bạn chọn nhầm thì.',
    en: 'When a sentence is about the future, the verb after **when, as soon as, once, until, by the time…** goes in a **present** tense, not will; will belongs only in the main clause. Part 5/6 tests this point regularly: it sets "will + verb" next to a present simple key, or leaves the blank in the main clause and waits for you to pick the wrong tense.',
  },
  mistakes: [
    {
      wrong: 'We will ship the replacement parts as soon as your payment [[will clear]].',
      right: 'We will ship the replacement parts as soon as your payment [[clears]].',
      explanation: {
        vi: 'Sau liên từ thời gian **as soon as**, việc trong tương lai chia ở **hiện tại đơn**, không dùng will. Chỉ mệnh đề chính (**will ship**) mới mang will.',
        en: 'After the time conjunction **as soon as**, a future event takes the **present simple**, not will. Only the main clause (**will ship**) carries will.',
      },
    },
    {
      wrong: 'Please keep the original receipt until the refund [[will be processed]].',
      right: 'Please keep the original receipt until the refund [[is processed]].',
      explanation: {
        vi: 'Mệnh đề sau **until** chỉ tương lai nên dùng thì hiện tại; ở dạng bị động là **is processed** (hoặc has been processed), không phải will be processed.',
        en: 'The clause after **until** refers to the future, so it takes a present tense; in the passive that is **is processed** (or has been processed), not will be processed.',
      },
    },
    {
      wrong: 'Once the board [[will have approved]] the budget, the hiring process will begin.',
      right: 'Once the board [[has approved]] the budget, the hiring process will begin.',
      explanation: {
        vi: 'Muốn nhấn mạnh việc phải XONG trước, mệnh đề thời gian dùng **hiện tại hoàn thành** (has approved), không dùng tương lai hoàn thành will have approved.',
        en: 'To stress that the action must be FINISHED first, the time clause uses the **Present Perfect** (has approved), not the future perfect will have approved.',
      },
    },
    {
      wrong: 'I [[send]] you the quarterly sales report as soon as I get the final figures.',
      right: 'I [[will send]] you the quarterly sales report as soon as I get the final figures.',
      explanation: {
        vi: 'Thì hiện tại chỉ thay cho will ở mệnh đề THỜI GIAN. Mệnh đề chính là một lời hứa trong tương lai nên vẫn phải dùng **will send**.',
        en: 'The present replaces will only in the TIME clause. The main clause is a promise about the future, so it still needs **will send**.',
      },
    },
    {
      wrong: 'When the client [[calls]] yesterday, Ms. Reyes was in a meeting with the auditors.',
      right: 'When the client [[called]] yesterday, Ms. Reyes was in a meeting with the auditors.',
      explanation: {
        vi: 'Hai mệnh đề phải cùng khung thời gian: **yesterday** và **was** đều chỉ quá khứ, nên mệnh đề when dùng quá khứ đơn **called**. Hiện tại đơn chỉ thay cho tương lai, không thay cho quá khứ.',
        en: 'Both clauses must share one time frame: **yesterday** and **was** point to the past, so the when clause takes the past simple **called**. The present simple stands in for the future, never for the past.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quy tắc gốc: không dùng will trong mệnh đề thời gian', en: 'The core rule: no will in a time clause' },
      body: {
        vi: 'Mệnh đề thời gian là mệnh đề mở đầu bằng một liên từ như **when, as soon as, once, after, before, until, by the time, while**. Khi cả câu nói về tương lai, động từ trong mệnh đề thời gian chia ở **hiện tại đơn** (hoặc hiện tại hoàn thành), còn **will** chỉ nằm ở mệnh đề chính. Quy tắc này đúng với mọi liên từ thời gian, kể cả whenever, the moment, every time; nghĩa và cách chọn từng liên từ được học ở bài 13.1.',
        en: 'A time clause is a clause that begins with a conjunction such as **when, as soon as, once, after, before, until, by the time, while**. When the whole sentence is about the future, the verb in the time clause goes in the **present simple** (or Present Perfect), and **will** appears only in the main clause. The rule holds for every time conjunction, including whenever, the moment and every time; what each conjunction means is covered in lesson 13.1.',
      },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Mệnh đề thời gian (hiện tại)', en: 'Time clause (present)' },
          { vi: 'Mệnh đề chính (tương lai)', en: 'Main clause (future)' },
        ],
        rows: [
          ['when', 'when the new director **starts**', 'we will hold a welcome lunch'],
          ['as soon as', 'as soon as the shipment **clears** customs', 'we will move it to our warehouse'],
          ['once', 'once the lease **is signed**', 'the tenants will receive their keys'],
          ['after', 'after the guests **check** out', 'housekeeping will clean the rooms'],
          ['before', 'before the auditors **arrive**', 'please organize all the receipts'],
          ['until', 'until the elevator **is repaired**', 'staff will use the stairs'],
          ['by the time', 'by the time the store **opens**', 'the shelves will be fully stocked'],
          ['while', 'while the manager **is** abroad', 'Mr. Kim will sign all invoices'],
        ],
      },
      examples: [
        {
          en: 'We **will contact** you as soon as your order **is** ready for pickup.',
          vi: 'Chúng tôi sẽ liên lạc với quý khách ngay khi đơn hàng sẵn sàng để nhận.',
        },
        {
          en: 'When the new branch **opens** in March, it **will employ** about forty people.',
          vi: 'Khi chi nhánh mới khai trương vào tháng Ba, chi nhánh này sẽ tuyển khoảng bốn mươi người.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Người Việt hay dịch từng chữ "khi hàng **sẽ** đến" nên dễ thêm will vào mệnh đề thời gian. Hãy nhớ: trong tiếng Anh, dấu hiệu tương lai chỉ xuất hiện MỘT lần, ở mệnh đề chính.',
          en: 'Learners often translate word for word from Vietnamese and put will in both clauses. Remember: in English the future is marked only ONCE, in the main clause.',
        },
      },
    },
    {
      heading: {
        vi: 'Hiện tại đơn hay hiện tại hoàn thành trong mệnh đề thời gian',
        en: 'Present simple or Present Perfect in the time clause',
      },
      body: {
        vi: 'Cả hai đều đúng ngữ pháp khi nói về tương lai. **Hiện tại hoàn thành** (have/has + V3) nhấn mạnh việc trong mệnh đề thời gian phải XONG HẲN rồi việc ở mệnh đề chính mới diễn ra, nên hay đi với after, once, as soon as, when, until. Nó KHÔNG dùng được khi hai việc diễn ra cùng lúc; khi đó dùng hiện tại đơn hoặc hiện tại tiếp diễn (thường sau while).',
        en: 'Both are correct for future meaning. The **Present Perfect** (have/has + V3) stresses that the action in the time clause must be fully COMPLETED before the main action happens, so it often goes with after, once, as soon as, when and until. It cannot be used when the two actions happen at the same time; then use the present simple or present continuous (often after while).',
      },
      table: {
        head: [
          { vi: 'Ý muốn nói', en: 'Meaning' },
          { vi: 'Dạng động từ', en: 'Verb form' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Một mốc trong tương lai', en: 'A point in the future' }, 'V / V-s', 'when the client **arrives**'],
          [{ vi: 'Việc phải xong trước', en: 'Must be finished first' }, 'have/has + V3', 'once we **have checked** the figures'],
          [{ vi: 'Việc đang diễn ra cùng lúc', en: 'In progress at the same time' }, 'am/is/are + V-ing', 'while the system **is being updated**'],
          [{ vi: 'Bị động', en: 'Passive' }, 'am/is/are + V3; has/have been + V3', 'until the invoice **has been paid**'],
        ],
      },
      examples: [
        {
          en: 'Ms. Grant will review the proposal after she **has spoken** with the legal team.',
          vi: 'Cô Grant sẽ xem xét bản đề xuất sau khi đã trao đổi với bộ phận pháp lý.',
        },
        {
          en: 'While the lobby **is being renovated**, guests will use the side entrance.',
          vi: 'Trong lúc sảnh đang được cải tạo, khách sẽ sử dụng lối vào bên hông.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Mệnh đề thời gian không bao giờ dùng **will have + V3** hay **will be + V-ing**. Đề hay đặt "will have completed" làm bẫy ngay cạnh đáp án đúng "have completed".',
          en: 'A time clause never takes **will have + V3** or **will be + V-ing**. The test often places "will have completed" as a trap right next to the correct "have completed".',
        },
      },
    },
    {
      heading: {
        vi: 'Mệnh đề chính: will, câu mệnh lệnh và các dạng tương lai khác',
        en: 'The main clause: will, imperatives and other future forms',
      },
      body: {
        vi: 'Mệnh đề chính mang nghĩa tương lai thật sự, nên dùng **will + V**, be going to, **câu mệnh lệnh** (Please + V), động từ khuyết thiếu (can, should, must + V) hoặc will have + V3 / will be + V-ing (bài 4.6). Không dùng hiện tại đơn ở mệnh đề chính cho một quyết định hay lời hứa: "I send you the file when…" là sai.',
        en: 'The main clause carries the real future meaning, so it takes **will + verb**, be going to, an **imperative** (Please + verb), a modal (can, should, must + verb) or will have + V3 / will be + V-ing (lesson 4.6). Do not use the present simple in the main clause for a decision or a promise: "I send you the file when…" is wrong.',
      },
      points: [
        {
          vi: 'Mệnh đề thời gian có thể đứng đầu câu (theo sau là **dấu phẩy**) hoặc đứng sau mệnh đề chính (thường không có dấu phẩy). Vị trí không làm thay đổi cách chia thì.',
          en: 'The time clause can open the sentence (followed by a **comma**) or come after the main clause (usually with no comma). Its position does not change the tenses.',
        },
        {
          vi: 'Trước khi chọn, xác định chỗ trống nằm ở mệnh đề NÀO: mệnh đề chứa liên từ thời gian → thì hiện tại; mệnh đề còn lại → will, câu mệnh lệnh hoặc động từ khuyết thiếu.',
          en: 'Before choosing, find WHICH clause the blank is in: the clause with the time conjunction → a present tense; the other clause → will, an imperative or a modal.',
        },
      ],
      examples: [
        {
          en: 'As soon as the survey results come in, our analysts **will prepare** a summary.',
          vi: 'Ngay khi có kết quả khảo sát, các chuyên viên phân tích của chúng tôi sẽ soạn một bản tóm tắt.',
        },
        {
          en: '**Please lock** the filing cabinet before you go home.',
          vi: 'Vui lòng khoá tủ hồ sơ trước khi về.',
        },
        {
          en: 'Guests **can collect** their keys once the rooms have been cleaned.',
          vi: 'Khách có thể nhận chìa khoá sau khi phòng đã được dọn xong.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Câu mệnh lệnh cũng là dấu hiệu tương lai: thấy **Please call, Remember to, Make sure** ở mệnh đề chính thì mệnh đề thời gian chia hiện tại.',
          en: 'An imperative is also a future signal: with **Please call, Remember to, Make sure** in the main clause, the time clause takes a present tense.',
        },
      },
    },
    {
      heading: { vi: 'Phối hợp thì giữa hai mệnh đề', en: 'Matching the tenses of the two clauses' },
      body: {
        vi: 'Quy tắc "hiện tại thay cho will" chỉ dành cho tương lai. Muốn chọn đúng, hãy xác định khung thời gian của cả câu từ mệnh đề còn lại hoặc từ trạng từ thời gian, rồi chia hai mệnh đề cho khớp nhau.',
        en: 'The "present instead of will" rule is only for the future. To choose correctly, work out the time frame of the whole sentence from the other clause or from a time expression, then make the two clauses match.',
      },
      table: {
        head: [
          { vi: 'Khung thời gian', en: 'Time frame' },
          { vi: 'Mệnh đề thời gian', en: 'Time clause' },
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Tương lai', en: 'Future' },
            { vi: 'Hiện tại đơn / hiện tại hoàn thành', en: 'Present simple / Present Perfect' },
            { vi: 'will + V, câu mệnh lệnh, can/should + V', en: 'will + verb, imperative, can/should + verb' },
            'When the CEO **visits**, we **will show** her the new assembly line.',
          ],
          [
            { vi: 'Quá khứ', en: 'Past' },
            { vi: 'Quá khứ đơn (hoặc quá khứ hoàn thành)', en: 'Past simple (or Past Perfect)' },
            { vi: 'Quá khứ đơn, quá khứ tiếp diễn, quá khứ hoàn thành', en: 'Past simple, past continuous, Past Perfect' },
            'After the merger **was announced**, the share price **rose** sharply.',
          ],
          [
            { vi: 'Thói quen, quy định chung', en: 'Habit or general rule' },
            { vi: 'Hiện tại đơn', en: 'Present simple' },
            { vi: 'Hiện tại đơn', en: 'Present simple' },
            'When guests **check** out after noon, the hotel **charges** a late fee.',
          ],
        ],
      },
      points: [
        {
          vi: 'Quá khứ: when + quá khứ đơn cắt ngang một việc đang diễn ra (was/were + V-ing, bài 4.3); by the time + quá khứ đơn → mệnh đề chính had + V3 (bài 4.4).',
          en: 'Past: when + past simple interrupts an action in progress (was/were + V-ing, lesson 4.3); by the time + past simple → main clause had + V3 (lesson 4.4).',
        },
        {
          vi: 'Thói quen: cả hai vế đều hiện tại đơn vì câu nói về điều luôn lặp lại, không nói về một lần cụ thể trong tương lai.',
          en: 'Habit: both clauses take the present simple because the sentence describes something that always happens, not one particular future event.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng để hiện tại đơn "lan" sang quá khứ: thấy **yesterday, last week** hay một động từ quá khứ ở vế kia thì mệnh đề thời gian cũng phải chia quá khứ.',
          en: 'Do not let the present simple spread into the past: if you see **yesterday, last week** or a past-tense verb in the other clause, the time clause must be past too.',
        },
      },
    },
    {
      heading: { vi: 'Khi nào "when" được đi với will?', en: 'When can "when" take will?' },
      body: {
        vi: 'Quy tắc trên chỉ áp dụng cho mệnh đề **trạng ngữ** chỉ thời gian, tức mệnh đề trả lời câu hỏi "việc ở mệnh đề chính xảy ra lúc nào?". Khi **when** mở đầu một mệnh đề **danh từ** làm tân ngữ của know, ask, confirm, tell, wonder, decide…, nó mang nghĩa "khi nào, vào lúc nào" và dùng **will** bình thường (bài 15.2). Mệnh đề quan hệ bổ nghĩa cho danh từ (the date when…) cũng vậy.',
        en: 'The rule applies only to **adverb** clauses of time, that is, clauses that answer "when does the main action happen?". When **when** introduces a **noun** clause as the object of know, ask, confirm, tell, wonder, decide…, it means "at what time" and takes **will** normally (lesson 15.2). The same goes for a relative clause that modifies a noun (the date when…).',
      },
      examples: [
        {
          en: 'The supplier has not confirmed **when** the parts **will arrive**.',
          vi: 'Nhà cung cấp chưa xác nhận khi nào linh kiện sẽ đến.',
        },
        {
          en: 'We will inspect the parts **when** they **arrive**.',
          vi: 'Chúng tôi sẽ kiểm tra linh kiện khi chúng đến.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo thử: thay cả mệnh đề when bằng "it". Nếu câu vẫn đứng được (has not confirmed it) thì đó là mệnh đề danh từ, dùng will được. Còn **as soon as, once, until, before, after, by the time** luôn mở đầu mệnh đề trạng ngữ, nên không bao giờ đi với will khi nói về tương lai.',
          en: 'Quick test: replace the whole when clause with "it". If the sentence still works (has not confirmed it), it is a noun clause and will is fine. **as soon as, once, until, before, after, by the time** always begin adverb clauses, so they never take will for the future.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu mệnh đề thời gian ở Part 5', en: 'Tackling time-clause items in Part 5' },
      points: [
        {
          vi: 'Câu có liên từ thời gian và bốn lựa chọn là các thì của cùng một động từ → đây là câu phối hợp thì.',
          en: 'A time conjunction in the sentence and four options that are tenses of one verb → it is a tense-matching item.',
        },
        {
          vi: 'Xác định chỗ trống thuộc mệnh đề nào: mệnh đề có liên từ là mệnh đề thời gian, vế còn lại là mệnh đề chính.',
          en: 'Find which clause the blank belongs to: the clause with the conjunction is the time clause; the other is the main clause.',
        },
        {
          vi: 'Tìm khung thời gian ở vế kia: will, câu mệnh lệnh, next/tomorrow → tương lai; động từ quá khứ, yesterday/last → quá khứ; hiện tại đơn mô tả quy trình chung → thói quen.',
          en: 'Find the time frame in the other clause: will, an imperative, next/tomorrow → future; a past verb, yesterday/last → past; a present simple describing a routine → habit.',
        },
        {
          vi: 'Chỗ trống trong mệnh đề thời gian + khung tương lai → loại ngay mọi lựa chọn có will (will, will be, will have). Nếu còn hai dạng hiện tại, kiểm tra hoà hợp chủ ngữ và chủ động/bị động.',
          en: 'Blank in the time clause + future frame → cross out every option with will (will, will be, will have). If two present forms remain, check subject-verb agreement and active/passive.',
        },
        {
          vi: 'Chỗ trống ở mệnh đề chính + mệnh đề thời gian chia hiện tại với nghĩa tương lai → chọn will + V (hoặc dạng tương lai khác), không chọn quá khứ hay hiện tại hoàn thành.',
          en: 'Blank in the main clause + a time clause in the present with future meaning → choose will + verb (or another future form), not a past tense or the Present Perfect.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Ví dụ: The technician will restart the server once the update ------- downloaded. (A) will be (B) is (C) was (D) being. Chỗ trống nằm sau **once**, vế chính có **will restart** → tương lai → chọn (B) is.',
          en: 'Example: The technician will restart the server once the update ------- downloaded. (A) will be (B) is (C) was (D) being. The blank follows **once** and the main clause has **will restart** → future → choose (B) is.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Once all the job applications ------- reviewed, the HR manager will contact the shortlisted candidates by phone.',
      options: ['will have been', 'have been', 'had been', 'will be'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống nằm sau **Once**, mệnh đề chính có **will contact** → tương lai, nên mệnh đề thời gian dùng thì hiện tại: hiện tại hoàn thành bị động **have been reviewed** (xem xét xong hết rồi mới liên hệ). will have been và will be có will nên sai; had been là quá khứ.',
        en: 'The blank follows **Once** and the main clause has **will contact** → future, so the time clause takes a present tense: the Present Perfect passive **have been reviewed** (all reviewed before any calls). will have been and will be contain will, so they are wrong; had been is past.',
      },
      translation: 'Sau khi tất cả hồ sơ ứng tuyển đã được xem xét xong, trưởng phòng nhân sự sẽ gọi điện cho các ứng viên lọt vào danh sách rút gọn.',
    },
    {
      sentence: 'After the new payroll software is installed next week, employees ------- able to download their pay slips online.',
      options: ['were', 'will be', 'have been', 'being'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề thời gian **After … is installed next week** đã chia hiện tại đơn để chỉ tương lai; chỗ trống nằm ở mệnh đề chính nên cần **will be**. were là quá khứ, mâu thuẫn với **next week**; have been không đi với mốc tương lai; being không làm được động từ chính.',
        en: 'The time clause **After … is installed next week** already uses the present simple for the future; the blank is in the main clause, so it needs **will be**. were is past and clashes with **next week**; have been cannot go with a future point; being cannot be the main verb.',
      },
      translation: 'Sau khi phần mềm tính lương mới được cài đặt vào tuần tới, nhân viên sẽ có thể tải phiếu lương của mình qua mạng.',
    },
    {
      sentence: 'Ms. Patel will not approve any travel requests until the finance department ------- its revised budget.',
      options: ['has submitted', 'will have submitted', 'had submitted', 'will submit'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính **will not approve** chỉ tương lai, chỗ trống nằm sau **until** nên dùng thì hiện tại; **has submitted** nhấn mạnh ngân sách phải nộp xong trước. will have submitted và will submit sai vì có will trong mệnh đề thời gian; had submitted là quá khứ.',
        en: 'The main clause **will not approve** refers to the future and the blank follows **until**, so a present tense is needed; **has submitted** stresses that the budget must be in first. will have submitted and will submit are wrong because they put will in the time clause; had submitted is past.',
      },
      translation: 'Cô Patel sẽ không duyệt bất kỳ đề nghị đi công tác nào cho đến khi phòng tài chính nộp xong bản ngân sách đã điều chỉnh.',
    },
    {
      sentence: "Construction of the new parking garage will begin as soon as the city's building permits -------.",
      options: ['will be issued', 'were issued', 'are issued', 'issue'],
      answer: 2,
      explanation: {
        vi: 'Sau **as soon as**, với mệnh đề chính **will begin** chỉ tương lai → dùng hiện tại đơn. Giấy phép "được cấp" nên phải là bị động **are issued**. will be issued có will; were issued là quá khứ; issue là chủ động, sai nghĩa.',
        en: 'After **as soon as**, with the main clause **will begin** referring to the future → present simple. Permits are issued by someone, so the passive **are issued** is needed. will be issued contains will; were issued is past; issue is active and makes no sense.',
      },
      translation: 'Việc xây dựng bãi đỗ xe mới sẽ bắt đầu ngay khi giấy phép xây dựng của thành phố được cấp.',
    },
    {
      sentence: 'By the time the delegates ------- in Singapore, the organizers will have printed all the name badges.',
      options: ['arrive', 'will arrive', 'arrived', 'had arrived'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính **will have printed** chỉ một mốc trong tương lai, nên mệnh đề **By the time** dùng hiện tại đơn **arrive**. will arrive là lỗi điển hình (thêm will vào mệnh đề thời gian); arrived và had arrived là quá khứ, không khớp với vế tương lai.',
        en: 'The main clause **will have printed** points to a future moment, so the **By the time** clause takes the present simple **arrive**. will arrive is the classic error (will in a time clause); arrived and had arrived are past and do not match the future main clause.',
      },
      translation: 'Đến lúc các đại biểu tới Singapore thì ban tổ chức sẽ in xong toàn bộ thẻ đeo tên.',
    },
    {
      sentence: 'Please return your visitor badge to the security desk before you ------- the building.',
      options: ['will leave', 'leave', 'left', 'leaving'],
      answer: 1,
      explanation: {
        vi: 'Câu mệnh lệnh **Please return** hướng tới tương lai, nên mệnh đề sau **before** dùng hiện tại đơn **leave**. will leave sai vì có will; left là quá khứ; "you leaving" thiếu động từ chia thì.',
        en: 'The imperative **Please return** looks ahead to the future, so the clause after **before** takes the present simple **leave**. will leave is wrong because of will; left is past; "you leaving" has no finite verb.',
      },
      translation: 'Vui lòng trả lại thẻ khách cho quầy bảo vệ trước khi quý khách rời khỏi tòa nhà.',
    },
    {
      sentence: 'While Mr. Dubois ------- at the trade fair in Milan next week, Ms. Lin will handle his client calls.',
      options: ['will be', 'was', 'has been', 'is'],
      answer: 3,
      explanation: {
        vi: 'Có **next week** và mệnh đề chính **will handle** → tương lai; mệnh đề sau **While** dùng hiện tại đơn **is**. will be có will; was là quá khứ; has been không dùng được vì hai việc diễn ra CÙNG LÚC, không phải việc này xong rồi mới đến việc kia.',
        en: 'With **next week** and the main clause **will handle** → future; the clause after **While** takes the present simple **is**. will be contains will; was is past; has been does not work because the two actions happen AT THE SAME TIME, not one after the other.',
      },
      translation: 'Trong thời gian ông Dubois dự hội chợ thương mại ở Milan vào tuần tới, cô Lin sẽ thay ông xử lý các cuộc gọi của khách hàng.',
    },
    {
      sentence: "When the fire alarm ------- during yesterday's board meeting, everyone left the conference room calmly.",
      options: ['sounds', 'will sound', 'sounded', 'has sounded'],
      answer: 2,
      explanation: {
        vi: "**yesterday's** và động từ **left** cho thấy cả câu ở quá khứ, nên mệnh đề **When** cũng dùng quá khứ đơn **sounded**. Hiện tại đơn sounds chỉ thay cho tương lai, không thay cho quá khứ; has sounded không đi với mốc quá khứ.",
        en: "**yesterday's** and the verb **left** put the whole sentence in the past, so the **When** clause also takes the past simple **sounded**. The present simple sounds replaces only the future, never the past; has sounded cannot go with a past time.",
      },
      translation: 'Khi chuông báo cháy vang lên trong cuộc họp hội đồng quản trị hôm qua, mọi người đã bình tĩnh rời khỏi phòng họp.',
    },
    {
      sentence: "The marketing team ------- the campaign results to the board as soon as next month's sales figures are available.",
      options: ['presented', 'has presented', 'presenting', 'will present'],
      answer: 3,
      explanation: {
        vi: "Mệnh đề thời gian **as soon as … are available** chia hiện tại đơn và có **next month's** → tương lai; chỗ trống ở mệnh đề chính nên dùng **will present**. presented và has presented mâu thuẫn với khung tương lai; presenting không làm được động từ chính.",
        en: "The time clause **as soon as … are available** is in the present simple and contains **next month's** → future; the blank is in the main clause, so it takes **will present**. presented and has presented clash with the future frame; presenting cannot be the main verb.",
      },
      translation: 'Nhóm marketing sẽ trình bày kết quả chiến dịch với ban giám đốc ngay khi có số liệu doanh số của tháng tới.',
    },
    {
      sentence: 'When a customer ------- a complaint through our website, the system automatically sends a confirmation email.',
      options: ['files', 'will file', 'filed', 'filing'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính **automatically sends** (hiện tại đơn) mô tả một quy trình luôn lặp lại, nên mệnh đề **When** cũng dùng hiện tại đơn **files** (chủ ngữ số ít a customer). filed là quá khứ, không khớp với vế chính; will file sai vì mệnh đề thời gian không dùng will.',
        en: 'The main clause **automatically sends** (present simple) describes a routine that always happens, so the **When** clause also takes the present simple **files** (singular subject a customer). filed is past and does not match the main clause; will file is wrong because a time clause does not take will.',
      },
      translation: 'Khi khách hàng gửi khiếu nại qua trang web của chúng tôi, hệ thống tự động gửi một email xác nhận.',
    },
  ],
};
