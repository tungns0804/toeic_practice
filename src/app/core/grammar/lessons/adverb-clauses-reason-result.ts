import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'adverb-clauses-reason-result',
  intro: {
    vi: 'Bài này dạy ba nhóm mệnh đề trạng ngữ: **nguyên nhân** (because, since, as, now that, in that), **mục đích** (so that, in order that) và **kết quả** (so … that, such … that). Part 5/6 hay cho bốn lựa chọn so / such / very / too hoặc so that / in order to / because of, và chỉ cấu trúc ngay sau chỗ trống mới quyết định đáp án.',
    en: 'This lesson covers three groups of adverb clauses: **reason** (because, since, as, now that, in that), **purpose** (so that, in order that) and **result** (so … that, such … that). Parts 5 and 6 often offer so / such / very / too or so that / in order to / because of, and only the structure right after the blank decides the answer.',
  },
  mistakes: [
    {
      wrong: 'The workshop was [[so]] an informative session that everyone stayed late.',
      right: 'The workshop was [[such]] an informative session that everyone stayed late.',
      explanation: {
        vi: 'Sau chỗ trống là cụm danh từ có mạo từ **an informative session** → dùng **such**. **so** chỉ đứng trước tính từ hoặc trạng từ đứng một mình (so informative that…).',
        en: 'The blank is followed by a noun phrase with an article, **an informative session** → use **such**. **so** only comes before an adjective or adverb on its own (so informative that…).',
      },
    },
    {
      wrong: 'The new label printer is [[such]] fast that it prints a full batch in seconds.',
      right: 'The new label printer is [[so]] fast that it prints a full batch in seconds.',
      explanation: {
        vi: 'Sau chỗ trống chỉ có tính từ **fast**, không có danh từ → dùng **so**. such phải đi kèm một danh từ (such a fast printer).',
        en: 'Only the adjective **fast** follows the blank, with no noun → use **so**. such must be followed by a noun (such a fast printer).',
      },
    },
    {
      wrong: 'There were [[such many]] applicants that the interviews lasted three days.',
      right: 'There were [[so many]] applicants that the interviews lasted three days.',
      explanation: {
        vi: 'Trước **many, much** (và few, little khi chỉ số lượng) dùng **so**, không dùng such. Riêng **a lot of** thì đi với such: such a lot of applicants.',
        en: 'Before **many, much** (and few, little as quantity words), use **so**, not such. Only **a lot of** takes such: such a lot of applicants.',
      },
    },
    {
      wrong: 'Please arrive ten minutes early [[so as]] the session can start on time.',
      right: 'Please arrive ten minutes early [[so that]] the session can start on time.',
      explanation: {
        vi: 'Phía sau là một mệnh đề có chủ ngữ riêng (**the session can start**) → cần liên từ **so that**. **so as** chỉ dùng trong so as to + động từ nguyên mẫu (bài 9.3).',
        en: 'A clause with its own subject follows (**the session can start**) → the conjunction **so that** is needed. **so as** only appears in so as to + base verb (lesson 9.3).',
      },
    },
    {
      wrong: '[[Now]] the merger is complete, the two sales teams will share one office.',
      right: '[[Now that]] the merger is complete, the two sales teams will share one office.',
      explanation: {
        vi: 'Muốn nối mệnh đề với nghĩa "vì giờ đây" thì cần liên từ **now that**. **now** đứng một mình chỉ là trạng từ, không nối được hai mệnh đề.',
        en: 'To join a clause with the meaning "because now", use the conjunction **now that**. **now** on its own is just an adverb and cannot join two clauses.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Liên từ chỉ nguyên nhân', en: 'Conjunctions of reason' },
      body: {
        vi: 'Mọi liên từ dưới đây đều theo sau bởi **chủ ngữ + động từ**. Chúng gần nghĩa nhau (vì, bởi vì) nhưng khác sắc thái và vị trí. Còn because of / due to + cụm danh từ là giới từ, đã học ở bài 8.2.',
        en: 'Every conjunction below is followed by **subject + verb**. They are close in meaning (because) but differ in nuance and position. because of / due to + noun phrase are prepositions, covered in lesson 8.2.',
      },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Sắc thái và vị trí', en: 'Nuance and position' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'because',
            { vi: 'Nêu lý do trực tiếp, thường là thông tin mới; hay đứng sau mệnh đề chính', en: 'States the reason directly, often new information; usually follows the main clause' },
            'The flight was canceled because the pilot was ill.',
          ],
          [
            'since / as',
            { vi: 'Lý do người nghe đã biết hoặc hiển nhiên; hay đứng đầu câu, trang trọng hơn', en: 'A reason the listener already knows or that is obvious; often opens the sentence; more formal' },
            'Since the office is closed on Monday, we will meet on Tuesday.',
          ],
          [
            'now that',
            { vi: 'Vì giờ đây (một tình huống mới vừa xảy ra)', en: 'Because now (a new situation has just arisen)' },
            'Now that the system is online, orders ship faster.',
          ],
          [
            'in that',
            { vi: 'Ở chỗ là, xét ở điểm là: giải thích một nhận định đúng theo nghĩa nào; luôn đứng SAU mệnh đề chính, trang trọng', en: 'In the sense that: explains in what way a statement is true; always FOLLOWS the main clause; formal' },
            'The plan is risky in that it relies on one supplier.',
          ],
        ],
      },
      examples: [
        {
          en: '**As** the conference room was already booked, the training took place in the cafeteria.',
          vi: 'Vì phòng hội nghị đã có người đặt, buổi đào tạo được tổ chức ở nhà ăn.',
        },
        {
          en: '**Now that** the new payroll system is in place, employees receive their pay slips by email.',
          vi: 'Vì giờ đây đã có hệ thống tính lương mới, nhân viên nhận phiếu lương qua email.',
        },
        {
          en: 'The proposal is attractive **in that** it reduces shipping costs without raising prices.',
          vi: 'Đề xuất này hấp dẫn ở chỗ nó giảm chi phí vận chuyển mà không tăng giá bán.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**since** và **as** còn là liên từ thời gian (bài 13.1). Nếu mệnh đề chính không ở hiện tại hoàn thành và câu đang giải thích lý do thì since mang nghĩa "vì". Câu trả lời cho câu hỏi "Why…?" thường dùng **because**, không dùng since/as.',
          en: '**since** and **as** are also time conjunctions (lesson 13.1). If the main clause is not in the Present Perfect and the sentence is giving a reason, since means "because". A direct answer to "Why…?" normally uses **because**, not since/as.',
        },
      },
    },
    {
      heading: { vi: 'Mục đích: so that và in order that', en: 'Purpose: so that and in order that' },
      points: [
        {
          vi: '**so that / in order that + S + can/will** (+ động từ nguyên mẫu) khi mệnh đề chính ở hiện tại hoặc tương lai.',
          en: '**so that / in order that + S + can/will** (+ base verb) when the main clause is present or future.',
        },
        {
          vi: '**so that / in order that + S + could/would** khi mệnh đề chính ở quá khứ.',
          en: '**so that / in order that + S + could/would** when the main clause is in the past.',
        },
        {
          vi: '**in order that** trang trọng hơn và ít gặp hơn **so that**. Cả hai đều cần một MỆNH ĐỀ; nếu phía sau là động từ nguyên mẫu thì dùng in order to / so as to (bài 9.3).',
          en: '**in order that** is more formal and less common than **so that**. Both need a CLAUSE; if a base verb follows, use in order to / so as to (lesson 9.3).',
        },
        {
          vi: 'Mệnh đề mục đích cũng có thể dùng hiện tại đơn (so that everyone knows the new schedule), nhưng dạng có can/will/could/would là dạng đề thi hay kiểm tra nhất.',
          en: 'A purpose clause can also take the present simple (so that everyone knows the new schedule), but the forms with can/will/could/would are the ones the test checks most.',
        },
      ],
      examples: [
        {
          en: 'We send reminder emails two days before each appointment **so that** clients **can** reschedule if necessary.',
          vi: 'Chúng tôi gửi email nhắc lịch hai ngày trước mỗi cuộc hẹn để khách hàng có thể đổi lịch nếu cần.',
        },
        {
          en: 'The director moved the meeting to Friday **so that** the regional managers **could** attend.',
          vi: 'Giám đốc dời cuộc họp sang thứ Sáu để các quản lý khu vực có thể tham dự.',
        },
        {
          en: 'All invoices must include a reference number **in order that** payments **can** be processed promptly.',
          vi: 'Mọi hoá đơn phải ghi số tham chiếu để các khoản thanh toán có thể được xử lý nhanh chóng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Phân biệt **so that** (để mà, chỉ mục đích) với **so** đứng một mình sau dấu phẩy (vì vậy, chỉ kết quả, bài 8.1): We left early, so we caught the train = chúng tôi đi sớm nên đã kịp tàu.',
          en: 'Tell **so that** (purpose: in order that) from **so** alone after a comma (result: therefore, lesson 8.1): We left early, so we caught the train = we left early and as a result caught the train.',
        },
      },
    },
    {
      heading: { vi: 'Kết quả với so … that', en: 'Result with so … that' },
      body: {
        vi: '**so** + tính từ/trạng từ + **that** + mệnh đề kết quả: "quá… đến nỗi…". Với danh từ, so chỉ đi qua các từ chỉ lượng: **so many/few** + danh từ đếm được số nhiều, **so much/little** + danh từ không đếm được. Trong văn nói có thể lược **that**.',
        en: '**so** + adjective/adverb + **that** + result clause: "so … that …". With nouns, so only works through quantity words: **so many/few** + plural countable noun, **so much/little** + uncountable noun. In speech, **that** can be dropped.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['so + adjective + that', 'The demand was so high that we ran out of stock.'],
          ['so + adverb + that', 'The team worked so quickly that it finished early.'],
          ['so many / few + plural noun + that', 'So few people registered that the tour was canceled.'],
          ['so much / little + uncountable noun + that', 'There was so much traffic that the driver arrived late.'],
        ],
      },
      examples: [
        {
          en: 'The instructions were **so** clear **that** nobody needed to call technical support.',
          vi: 'Hướng dẫn rõ ràng đến mức không ai cần gọi bộ phận hỗ trợ kỹ thuật.',
        },
        {
          en: 'The new branch attracted **so many** customers **that** it hired five more cashiers.',
          vi: 'Chi nhánh mới thu hút nhiều khách hàng đến mức phải tuyển thêm năm nhân viên thu ngân.',
        },
      ],
    },
    {
      heading: { vi: 'Kết quả với such … that', en: 'Result with such … that' },
      points: [
        {
          vi: '**such a/an** + (tính từ) + danh từ đếm được SỐ ÍT + that: such a long delay that…',
          en: '**such a/an** + (adjective) + SINGULAR countable noun + that: such a long delay that…',
        },
        {
          vi: '**such** + (tính từ) + danh từ SỐ NHIỀU hoặc KHÔNG ĐẾM ĐƯỢC + that (không có a/an): such low prices that…, such good service that…',
          en: '**such** + (adjective) + PLURAL or UNCOUNTABLE noun + that (no a/an): such low prices that…, such good service that…',
        },
        {
          vi: '**such a lot of** + danh từ + that cũng đúng (nhưng không nói such many/much).',
          en: '**such a lot of** + noun + that is also correct (but not such many/much).',
        },
        {
          vi: 'Nhận biết: dạng trang trọng **so + tính từ + a/an + danh từ** (so large an order that…) có cùng nghĩa với such a large order that…',
          en: 'For recognition: the formal pattern **so + adjective + a/an + noun** (so large an order that…) means the same as such a large order that…',
        },
      ],
      examples: [
        {
          en: 'It was **such a** busy week **that** the accounting team worked through the weekend.',
          vi: 'Đó là một tuần bận rộn đến mức nhóm kế toán phải làm việc xuyên cuối tuần.',
        },
        {
          en: 'The hotel offers **such** comfortable rooms **that** many guests book again every year.',
          vi: 'Khách sạn có phòng thoải mái đến mức nhiều khách năm nào cũng đặt lại.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**very** và **too** không đi với mệnh đề "that" chỉ kết quả: "very busy that…" là sai. **too** đi với to V (too busy to attend, bài 9.3).',
          en: '**very** and **too** cannot introduce a "that" result clause: "very busy that…" is wrong. **too** goes with to V (too busy to attend, lesson 9.3).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu nguyên nhân – mục đích – kết quả ở Part 5', en: 'Tackling reason, purpose and result items in Part 5' },
      points: [
        {
          vi: 'Lựa chọn là so / such / very / too và phía sau có **that + mệnh đề** → loại very, too. Còn so hay such: nhìn ngay sau chỗ trống.',
          en: 'Options so / such / very / too with **that + clause** later in the sentence → cross out very and too. Then choose so or such by looking right after the blank.',
        },
        {
          vi: 'Sau chỗ trống là tính từ/trạng từ đứng một mình, hoặc many/much/few/little → **so**. Là a/an hoặc tính từ + danh từ → **such**.',
          en: 'An adjective/adverb on its own, or many/much/few/little, after the blank → **so**. a/an, or adjective + noun → **such**.',
        },
        {
          vi: 'Câu có can/could/will/would ở vế sau và nghĩa "để mà" → **so that / in order that**. Nếu phía sau là động từ nguyên mẫu → in order to.',
          en: 'A second clause with can/could/will/would and the meaning "in order that" → **so that / in order that**. If a base verb follows instead → in order to.',
        },
        {
          vi: 'Chỉ còn các liên từ nguyên nhân → đọc nghĩa: tình huống mới (now that), giải thích "ở chỗ" sau một nhận định (in that), lý do chung (because/since/as).',
          en: 'If only reason conjunctions remain → read for meaning: a new situation (now that), an explanation "in the sense that" after a statement (in that), a general reason (because/since/as).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: '------- the renovation of the lobby is finished, the hotel can accept large group bookings again.',
      options: ['So that', 'Even though', 'Now that', 'In order that'],
      answer: 2,
      explanation: {
        vi: 'Việc cải tạo vừa xong tạo ra tình huống mới, là lý do khách sạn nhận đoàn trở lại → **Now that** (vì giờ đây). So that và In order that chỉ mục đích, không hợp nghĩa; Even though chỉ sự tương phản.',
        en: 'The finished renovation is a new situation that explains why the hotel can take groups again → **Now that**. So that and In order that express purpose, which does not fit; Even though expresses contrast.',
      },
      translation: 'Vì giờ đây việc cải tạo sảnh đã xong, khách sạn có thể nhận lại các đặt phòng theo đoàn lớn.',
    },
    {
      sentence: 'The keynote speech was ------- popular that the organizers added a second session in the afternoon.',
      options: ['too', 'very', 'such', 'so'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là tính từ **popular** đứng một mình, phía sau có **that** + mệnh đề kết quả → **so**. such cần danh từ; very và too không đi với that chỉ kết quả.',
        en: 'The blank is followed by the adjective **popular** alone, then **that** + a result clause → **so**. such needs a noun; very and too cannot introduce a that result clause.',
      },
      translation: 'Bài phát biểu chính được yêu thích đến mức ban tổ chức phải thêm một phiên thứ hai vào buổi chiều.',
    },
    {
      sentence: "It was ------- a productive meeting that the team finalized next year's budget an hour early.",
      options: ['very', 'such', 'so', 'too'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là **a productive meeting** (a + tính từ + danh từ số ít) → **such**. so không đứng ngay trước a; very và too không đứng trước a và không đi với that chỉ kết quả.',
        en: 'The blank is followed by **a productive meeting** (a + adjective + singular noun) → **such**. so cannot come right before a; very and too cannot come before a or introduce a that result clause.',
      },
      translation: 'Đó là một cuộc họp hiệu quả đến mức cả nhóm chốt xong ngân sách năm sau sớm một tiếng.',
    },
    {
      sentence: 'The store received so ------- complaints about its new return policy that management decided to revise it.',
      options: ['much', 'little', 'many', 'few'],
      answer: 2,
      explanation: {
        vi: '**complaints** là danh từ đếm được số nhiều → many hoặc few; ban quản lý phải sửa chính sách nên số khiếu nại phải NHIỀU → **many**. much và little chỉ đi với danh từ không đếm được; few trái nghĩa với kết quả.',
        en: '**complaints** is a plural countable noun → many or few; management revised the policy, so there must have been A LOT → **many**. much and little only go with uncountable nouns; few contradicts the result.',
      },
      translation: 'Cửa hàng nhận được nhiều khiếu nại về chính sách đổi trả mới đến mức ban quản lý quyết định sửa đổi nó.',
    },
    {
      sentence: 'There was so ------- interest in the evening tax workshop that it was canceled two days before the event.',
      options: ['few', 'little', 'much', 'many'],
      answer: 1,
      explanation: {
        vi: '**interest** là danh từ không đếm được → much hoặc little; buổi hội thảo bị huỷ nên mức quan tâm phải ÍT → **little**. much trái nghĩa với việc bị huỷ; few và many chỉ đi với danh từ đếm được số nhiều.',
        en: '**interest** is uncountable → much or little; the workshop was canceled, so interest must have been LOW → **little**. much contradicts the cancellation; few and many only go with plural countable nouns.',
      },
      translation: 'Hội thảo thuế buổi tối nhận được quá ít sự quan tâm đến mức bị huỷ trước sự kiện hai ngày.',
    },
    {
      sentence: 'Mr. Lindqvist reserved a larger training room ------- all forty new employees could sit comfortably.',
      options: ['because of', 'in order to', 'so that', 'despite'],
      answer: 2,
      explanation: {
        vi: 'Phía sau là mệnh đề có chủ ngữ riêng và **could** (mệnh đề chính ở quá khứ), nghĩa "để mà" → **so that**. in order to cần động từ nguyên mẫu; because of và despite là giới từ, không đi với mệnh đề.',
        en: 'A clause with its own subject and **could** follows (the main clause is past), meaning "in order that" → **so that**. in order to needs a base verb; because of and despite are prepositions and cannot take a clause.',
      },
      translation: 'Anh Lindqvist đặt một phòng đào tạo lớn hơn để cả bốn mươi nhân viên mới có thể ngồi thoải mái.',
    },
    {
      sentence: 'Please submit vacation requests at least two weeks in advance ------- the scheduling team can arrange coverage.',
      options: ['in order that', 'in order to', 'because of', 'so as to'],
      answer: 0,
      explanation: {
        vi: 'Phía sau là mệnh đề **the scheduling team can arrange** (chủ ngữ + can + V) chỉ mục đích → **in order that**. in order to và so as to phải đi với động từ nguyên mẫu; because of là giới từ.',
        en: 'What follows is the clause **the scheduling team can arrange** (subject + can + verb) expressing purpose → **in order that**. in order to and so as to need a base verb; because of is a preposition.',
      },
      translation: 'Vui lòng nộp đơn xin nghỉ phép trước ít nhất hai tuần để nhóm xếp lịch có thể bố trí người làm thay.',
    },
    {
      sentence: 'The new accounting software is superior to the old system ------- it processes payroll in half the time.',
      options: ['so that', 'in that', 'unless', 'even though'],
      answer: 1,
      explanation: {
        vi: 'Vế sau giải thích phần mềm mới tốt hơn **ở chỗ nào** (xử lý lương nhanh gấp đôi) → **in that**. so that chỉ mục đích, không hợp với một nhận định; unless và even though làm câu mâu thuẫn.',
        en: 'The second clause explains **in what way** the new software is better (it runs payroll twice as fast) → **in that**. so that expresses purpose, which does not fit a statement of quality; unless and even though make the sentence contradictory.',
      },
      translation: 'Phần mềm kế toán mới vượt trội hơn hệ thống cũ ở chỗ nó xử lý bảng lương chỉ mất một nửa thời gian.',
    },
    {
      sentence: '------- the CEO is traveling overseas this week, the quarterly strategy review has been moved to next Monday.',
      options: ['Even though', 'So that', 'Unless', 'As'],
      answer: 3,
      explanation: {
        vi: 'Việc giám đốc đi công tác là **lý do** cuộc họp bị dời → **As** (= because). Even though chỉ tương phản, trái logic; So that chỉ mục đích; Unless chỉ điều kiện phủ định, không hợp nghĩa.',
        en: "The CEO's trip is the **reason** the review was moved → **As** (= because). Even though expresses contrast, which is illogical; So that expresses purpose; Unless sets a negative condition, which makes no sense here.",
      },
      translation: 'Vì tổng giám đốc đi công tác nước ngoài tuần này, buổi đánh giá chiến lược quý đã được dời sang thứ Hai tới.',
    },
    {
      sentence: 'Westfield Logistics offers ------- competitive rates that many online retailers have switched to its delivery service.',
      options: ['such', 'so', 'very', 'too'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống là **competitive rates** (tính từ + danh từ số nhiều, không có a/an) và có **that** + mệnh đề kết quả → **such**. so chỉ đứng trước tính từ không kèm danh từ; very và too không đi với that chỉ kết quả.',
        en: 'The blank is followed by **competitive rates** (adjective + plural noun, no a/an) and then **that** + a result clause → **such**. so only comes before an adjective without a noun; very and too cannot introduce a that result clause.',
      },
      translation: 'Westfield Logistics đưa ra mức giá cạnh tranh đến mức nhiều nhà bán lẻ trực tuyến đã chuyển sang dùng dịch vụ giao hàng của công ty.',
    },
  ],
};
