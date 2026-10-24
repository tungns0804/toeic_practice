import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'dangling-modifiers',
  intro: {
    vi: 'Một bổ ngữ đặt sai chỗ có thể làm câu mang nghĩa vô lý: "Nằm trên tầng thượng, khách có thể ngắm cảng". Bài này dạy quy tắc **chủ ngữ ngầm**, vị trí của **only/almost/even/just/nearly** và trạng từ bổ nghĩa cả câu, những điểm Part 5 hay kiểm tra bằng câu chọn **chủ ngữ** hoặc chọn **trạng từ đúng vị trí**.',
    en: 'A modifier in the wrong place can make a sentence absurd: "Located on the top floor, guests can enjoy harbor views". This lesson covers the **implied-subject** rule, the position of **only/almost/even/just/nearly** and sentence adverbs, which Part 5 tests by asking you to pick the right **subject** or the **adverb that fits the position**.',
  },
  mistakes: [
    {
      wrong: 'Reviewing the contract, [[several errors were found by Ms. Lund]].',
      right: 'Reviewing the contract, [[Ms. Lund found several errors]].',
      explanation: {
        vi: 'Người **xem xét** hợp đồng là Ms. Lund, nên cô ấy phải là chủ ngữ của mệnh đề chính. Câu sai ngụ ý "các lỗi" đi xem hợp đồng.',
        en: 'The person **reviewing** the contract is Ms. Lund, so she must be the subject of the main clause. The wrong version implies the errors reviewed the contract.',
      },
    },
    {
      wrong: 'Located on the top floor, [[guests can enjoy]] views of the harbor.',
      right: 'Located on the top floor, [[the restaurant offers]] views of the harbor.',
      explanation: {
        vi: 'Thứ **nằm trên tầng thượng** là nhà hàng, không phải khách. Chủ ngữ ngay sau dấu phẩy phải là thứ mà cụm phân từ mô tả.',
        en: 'What **is located on the top floor** is the restaurant, not the guests. The subject right after the comma must be what the participial phrase describes.',
      },
    },
    {
      wrong: 'Our support team [[almost answered all]] customer e-mails within an hour.',
      right: 'Our support team [[answered almost all]] customer e-mails within an hour.',
      explanation: {
        vi: '**almost** phải đứng ngay trước từ nó bổ nghĩa. "almost answered" nghĩa là suýt trả lời nhưng chưa trả lời; ý đúng là trả lời **gần như tất cả** → **almost all**.',
        en: '**almost** must sit right before the word it modifies. "almost answered" means they nearly answered but did not; the intended meaning is **almost all** e-mails.',
      },
    },
    {
      wrong: '[[Ideal]], all invoices should be paid within thirty days of receipt.',
      right: '[[Ideally]], all invoices should be paid within thirty days of receipt.',
      explanation: {
        vi: 'Từ đứng đầu câu, trước dấu phẩy, bình luận cho cả mệnh đề phía sau là **trạng từ câu** → **Ideally** (lý tưởng nhất là). Tính từ ideal không đứng một mình như vậy.',
        en: 'A word at the start, before a comma, commenting on the whole clause is a **sentence adverb** → **Ideally**. The adjective ideal cannot stand alone there.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quy tắc chủ ngữ ngầm', en: 'The implied-subject rule' },
      body: {
        vi: 'Cụm phân từ đầu câu (V-ing, V3, Having V3) không có chủ ngữ riêng. Người đọc luôn hiểu chủ ngữ ngầm của nó là **chủ ngữ của mệnh đề chính** đứng ngay sau dấu phẩy. Nếu hai chủ ngữ này không khớp, ta có **bổ ngữ treo** (dangling modifier): câu sai ngữ pháp và thường vô lý về nghĩa.',
        en: 'An opening participial phrase (V-ing, V3, Having V3) has no subject of its own. Readers always take its implied subject to be **the subject of the main clause** right after the comma. If the two do not match, we have a **dangling modifier**: the sentence is ungrammatical and often absurd.',
      },
      table: {
        head: [
          { vi: 'Câu bị treo (sai)', en: 'Dangling (wrong)' },
          { vi: 'Câu đúng', en: 'Correct' },
          { vi: 'Ai làm hành động?', en: 'Who does the action?' },
        ],
        rows: [
          ['Having signed the lease, the office was ready for us.', 'Having signed the lease, we moved into the office.', { vi: 'chúng tôi ký hợp đồng thuê', en: 'we signed the lease' }],
          ['Founded in 1995, customers trust our brand.', 'Founded in 1995, our brand is trusted by customers.', { vi: 'thương hiệu được thành lập', en: 'the brand was founded' }],
          ['Walking into the lobby, the new artwork caught my eye.', 'Walking into the lobby, I noticed the new artwork.', { vi: 'tôi bước vào sảnh', en: 'I walked into the lobby' }],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Kiểm tra nhanh: ghép chủ ngữ mệnh đề chính vào cụm phân từ thành câu đầy đủ ("the office signed the lease"?). Nghe vô lý → câu bị treo.',
          en: 'Quick check: put the main subject into the participial phrase as a full clause ("the office signed the lease"?). If it sounds absurd, the modifier dangles.',
        },
      },
    },
    {
      heading: { vi: 'Hai cách sửa câu bị treo', en: 'Two ways to fix a dangling modifier' },
      points: [
        {
          vi: '**Cách 1 – đổi chủ ngữ mệnh đề chính** thành người/vật thực hiện hành động trong cụm: Having checked the figures, **the accountant** approved the budget.',
          en: '**Fix 1 – change the main subject** to the one who performs the action in the phrase: Having checked the figures, **the accountant** approved the budget.',
        },
        {
          vi: '**Cách 2 – biến cụm thành mệnh đề đầy đủ** có chủ ngữ riêng: After **the accountant had checked** the figures, the budget was approved.',
          en: '**Fix 2 – turn the phrase into a full clause** with its own subject: After **the accountant had checked** the figures, the budget was approved.',
        },
        {
          vi: 'Quy tắc này cũng áp dụng cho cụm có liên từ (While waiting…, Once approved…) và cụm to V đầu câu: **To apply**, **applicants** must submit a résumé (không phải "a résumé must be submitted").',
          en: 'The same rule applies to phrases with a conjunction (While waiting…, Once approved…) and to opening to-infinitives: **To apply**, **applicants** must submit a résumé (not "a résumé must be submitted").',
        },
      ],
      examples: [
        {
          en: 'Having missed the last train, **Ms. Tran** took a taxi back to the hotel.',
          vi: 'Vì lỡ chuyến tàu cuối, cô Tran đã đi taxi về khách sạn.',
        },
        {
          en: 'Because **Ms. Tran** had missed the last train, the hotel sent a car to pick her up.',
          vi: 'Vì cô Tran đã lỡ chuyến tàu cuối, khách sạn đã cho xe đến đón cô.',
        },
      ],
    },
    {
      heading: { vi: 'Bổ ngữ đặt sai vị trí', en: 'Misplaced modifiers' },
      body: {
        vi: 'Ngay cả khi có chủ ngữ phù hợp, một cụm bổ nghĩa đặt xa từ nó mô tả cũng làm câu sai nghĩa. Nguyên tắc: đặt cụm bổ nghĩa **sát** danh từ nó bổ nghĩa.',
        en: 'Even with a suitable subject, a modifying phrase placed far from the word it describes can distort the meaning. The rule: put the modifier **right next to** the noun it describes.',
      },
      examples: [
        {
          en: 'On Monday, we shipped **the chairs ordered by the hotel**.',
          vi: 'Vào thứ Hai, chúng tôi đã giao những chiếc ghế mà khách sạn đặt.',
        },
        {
          en: 'The staff handed out **brochures printed on recycled paper** to the visitors.',
          vi: 'Nhân viên phát cho khách tham quan những tờ giới thiệu được in trên giấy tái chế.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Câu "The staff handed out brochures to the visitors **printed on recycled paper**" bị đặt sai vị trí: cụm phân từ đứng sát **the visitors** nên đọc thành "khách tham quan được in trên giấy tái chế". Hãy giữ danh từ và phần bổ nghĩa của nó đi liền nhau.',
          en: 'In "The staff handed out brochures to the visitors **printed on recycled paper**", the modifier is misplaced: it sits next to **the visitors**, so it reads as if the visitors were printed on recycled paper. Keep a noun and its modifier together.',
        },
      },
    },
    {
      heading: { vi: 'Vị trí của only, almost, even, just, nearly', en: 'Where only, almost, even, just and nearly go' },
      body: {
        vi: 'Các trạng từ "giới hạn" này bổ nghĩa cho từ đứng **ngay sau** chúng. Đổi vị trí là đổi nghĩa, nên trong văn viết hãy đặt chúng sát từ cần nhấn.',
        en: 'These "limiting" adverbs modify the word **right after** them. Moving them changes the meaning, so in writing place them directly before the word you want to target.',
      },
      table: {
        head: [
          { vi: 'Câu', en: 'Sentence' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['Only Mr. Diaz approved the budget.', { vi: 'Chỉ ông Diaz duyệt, không ai khác', en: 'Nobody else approved it' }],
          ['Mr. Diaz approved only the budget.', { vi: 'Ông ấy chỉ duyệt ngân sách, không duyệt gì khác', en: 'He approved nothing else' }],
          ['Almost all of the rooms are booked.', { vi: 'Gần như tất cả các phòng đã được đặt', en: 'Very nearly every room is taken' }],
          ['The repairs cost nearly $5,000.', { vi: 'Gần 5.000 đô (chưa tới)', en: 'A little under $5,000' }],
          ['Even new hires can use the system.', { vi: 'Ngay cả nhân viên mới cũng dùng được', en: 'New hires too, surprisingly' }],
          ['The package arrived just after noon.', { vi: 'Đến ngay sau buổi trưa một chút', en: 'Very soon after noon' }],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: '**almost / nearly** không đứng trực tiếp trước danh từ số nhiều: KHÔNG nói "almost employees". Phải là **almost all** employees, **almost every** employee, hoặc **most** employees. Chúng đi với all, every, no, always, never, số lượng và động từ (almost missed the flight = suýt lỡ).',
          en: '**almost / nearly** cannot go directly before a plural noun: NOT "almost employees". Say **almost all** employees, **almost every** employee, or **most** employees. They combine with all, every, no, always, never, numbers and verbs (almost missed the flight = nearly missed it).',
        },
      },
    },
    {
      heading: { vi: 'Trạng từ câu và trạng từ bổ nghĩa động từ', en: 'Sentence adverbs vs verb adverbs' },
      body: {
        vi: '**Trạng từ câu** (Unfortunately, Fortunately, Ideally, Hopefully, Apparently, Surprisingly, Clearly, Generally) bình luận cho **cả mệnh đề**, thường đứng đầu câu và có dấu phẩy. **Trạng từ bổ nghĩa động từ** (carefully, quickly, clearly…) mô tả **cách** hành động diễn ra, thường đứng sau động từ/tân ngữ hoặc trước động từ chính.',
        en: '**Sentence adverbs** (Unfortunately, Fortunately, Ideally, Hopefully, Apparently, Surprisingly, Clearly, Generally) comment on the **whole clause** and usually open the sentence with a comma. **Verb adverbs** (carefully, quickly, clearly…) describe **how** the action happens and usually follow the verb/object or come before the main verb.',
      },
      examples: [
        {
          en: '**Unfortunately**, the keynote speaker has canceled her appearance.',
          vi: 'Thật không may, diễn giả chính đã hủy buổi xuất hiện của mình.',
        },
        {
          en: '**Clearly**, the new layout has improved traffic in the store.',
          vi: 'Rõ ràng là cách bố trí mới đã giúp cửa hàng đông khách hơn.',
        },
        {
          en: 'The trainer explained the safety procedures **clearly**.',
          vi: 'Người hướng dẫn đã giải thích các quy trình an toàn một cách rõ ràng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chỗ trống đầu câu, ngay trước dấu phẩy, sau đó là một mệnh đề hoàn chỉnh → chọn **trạng từ** (-ly), không chọn tính từ hay danh từ cùng gốc.',
          en: 'A blank at the very start, right before a comma and followed by a complete clause → choose the **adverb** (-ly), not the adjective or noun with the same root.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu bổ ngữ trong Part 5', en: 'Attacking modifier items in Part 5' },
      points: [
        {
          vi: 'Chỗ trống là **chủ ngữ** sau một cụm phân từ: hỏi "ai/cái gì làm (hoặc chịu) hành động trong cụm?" và loại mọi lựa chọn không thể làm việc đó.',
          en: 'The blank is the **subject** after a participial phrase: ask "who or what does (or receives) the action in the phrase?" and eliminate every option that cannot.',
        },
        {
          vi: 'Chỗ trống là **phân từ** đầu câu: nhìn chủ ngữ mệnh đề chính, tự làm → V-ing, bị làm → V3 (bài 14.2).',
          en: 'The blank is the opening **participle**: look at the main subject; it does the action → V-ing, receives it → V3 (lesson 14.2).',
        },
        {
          vi: 'Trước **all / every / số lượng** → almost / nearly; trước danh từ số nhiều trơn → most.',
          en: 'Before **all / every / a number** → almost / nearly; before a bare plural noun → most.',
        },
        {
          vi: 'Đầu câu + dấu phẩy + mệnh đề hoàn chỉnh → trạng từ câu, chọn theo nghĩa (Unfortunately, Ideally, Hopefully).',
          en: 'Sentence start + comma + complete clause → a sentence adverb, chosen by meaning (Unfortunately, Ideally, Hopefully).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Having reviewed all twelve proposals, ------- selected the design submitted by Arden Studio.',
      options: ['the final decision', 'the submission deadline', 'the selection committee', 'the design contest'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ phải là người đã **xem xét** mười hai đề xuất và **chọn** thiết kế → **the selection committee**. Quyết định, hạn nộp hay cuộc thi không thể tự xem xét hồ sơ, nên sẽ thành bổ ngữ treo.',
        en: 'The subject must be whoever **reviewed** the twelve proposals and **selected** the design → **the selection committee**. A decision, a deadline or a contest cannot review anything, so they would leave the phrase dangling.',
      },
      translation: 'Sau khi xem xét cả mười hai đề xuất, ban tuyển chọn đã chọn thiết kế do Arden Studio gửi.',
    },
    {
      sentence: '------- the instructions in the manual, Mr. Patel assembled the display shelves in under an hour.',
      options: ['Followed', 'Following', 'Follows', 'Follow'],
      answer: 1,
      explanation: {
        vi: 'Chủ ngữ **Mr. Patel** là người **làm theo** hướng dẫn (chủ động, có tân ngữ **the instructions**) → **Following**. Followed là bị động, sẽ ngụ ý ông Patel "bị làm theo".',
        en: 'The subject **Mr. Patel** is the one **following** the instructions (active, with the object **the instructions**) → **Following**. Followed is passive and would mean Mr. Patel was followed.',
      },
      translation: 'Làm theo hướng dẫn trong sách, ông Patel đã lắp xong các kệ trưng bày trong chưa đầy một giờ.',
    },
    {
      sentence: 'Located just five minutes from the airport, ------- is ideal for travelers with early morning flights.',
      options: ['our guests', 'you', 'many travelers', 'the Skyview Hotel'],
      answer: 3,
      explanation: {
        vi: 'Thứ **nằm cách sân bay năm phút** phải là một địa điểm → **the Skyview Hotel**; động từ số ít **is** cũng khớp. our guests, you, many travelers vừa sai nghĩa (người không "được đặt" ở đâu) vừa không hợp với **is**.',
        en: 'What **is located five minutes from the airport** must be a place → **the Skyview Hotel**; the singular **is** agrees too. our guests, you and many travelers are not located anywhere and do not match **is**.',
      },
      translation: 'Nằm cách sân bay chỉ năm phút, khách sạn Skyview là lựa chọn lý tưởng cho những du khách có chuyến bay sáng sớm.',
    },
    {
      sentence: '------- all of the seats for the annual charity dinner have already been reserved.',
      options: ['Most', 'Mostly', 'Almost', 'Much'],
      answer: 2,
      explanation: {
        vi: 'Trước **all** cần trạng từ chỉ mức độ gần trọn vẹn → **Almost** all. Most không đứng trước all ("most all" không đúng chuẩn), mostly và much cũng không bổ nghĩa cho all.',
        en: 'Before **all** we need the adverb meaning "very nearly" → **Almost** all. Most cannot precede all ("most all" is non-standard), and neither mostly nor much modifies all.',
      },
      translation: 'Gần như toàn bộ ghế cho bữa tiệc từ thiện thường niên đã được đặt trước.',
    },
    {
      sentence: 'The new label printer is so easy to set up that ------- first-time users can have it running in minutes.',
      options: ['even', 'ever', 'still', 'yet'],
      answer: 0,
      explanation: {
        vi: '**even** đứng ngay trước **first-time users** để nhấn mạnh điều bất ngờ: ngay cả người mới dùng lần đầu cũng làm được. ever, still, yet không đứng trước cụm danh từ với nghĩa này.',
        en: '**even** sits right before **first-time users** to stress the surprise: even beginners can do it. ever, still and yet cannot precede a noun phrase with this meaning.',
      },
      translation: 'Máy in nhãn mới dễ cài đặt đến mức ngay cả người dùng lần đầu cũng có thể cho nó chạy trong vài phút.',
    },
    {
      sentence: '-------, the shipment was held at customs, so the store will open a week later than planned.',
      options: ['Unfortunate', 'Unfortunately', 'Misfortune', 'Unfortunateness'],
      answer: 1,
      explanation: {
        vi: 'Đầu câu, trước **dấu phẩy**, sau đó là mệnh đề hoàn chỉnh → cần trạng từ câu bình luận cho cả sự việc → **Unfortunately**. Unfortunate là tính từ, không đứng một mình ở vị trí này.',
        en: 'At the start, before a **comma**, followed by a complete clause → a sentence adverb commenting on the whole event → **Unfortunately**. Unfortunate is an adjective and cannot stand alone there.',
      },
      translation: 'Thật không may, lô hàng bị giữ lại ở hải quan, nên cửa hàng sẽ khai trương muộn hơn dự kiến một tuần.',
    },
    {
      sentence: '-------, new employees should finish the online safety course before their first shift on the factory floor.',
      options: ['Ideal', 'Idealize', 'Idealism', 'Ideally'],
      answer: 3,
      explanation: {
        vi: 'Từ đầu câu, trước **dấu phẩy**, nêu tình huống lý tưởng cho cả mệnh đề → trạng từ câu **Ideally**. Ideal là tính từ, Idealize là động từ, Idealism là danh từ.',
        en: 'The word before the **comma** describes the ideal situation for the whole clause → the sentence adverb **Ideally**. Ideal is an adjective, Idealize a verb, Idealism a noun.',
      },
      translation: 'Lý tưởng nhất là nhân viên mới nên hoàn thành khóa học an toàn trực tuyến trước ca làm việc đầu tiên tại xưởng.',
    },
    {
      sentence: '-------, the merger will be completed by the end of the year, pending approval from regulators.',
      options: ['Hopefully', 'Carefully', 'Heavily', 'Narrowly'],
      answer: 0,
      explanation: {
        vi: 'Cần trạng từ câu thể hiện **mong đợi** của người viết về cả sự việc → **Hopefully**. Carefully, Heavily, Narrowly là trạng từ chỉ cách thức/mức độ của hành động, không thể bình luận cho cả câu như vậy.',
        en: "We need a sentence adverb expressing the writer's **hope** about the whole event → **Hopefully**. Carefully, Heavily and Narrowly describe how an action is done and cannot comment on the whole clause like this.",
      },
      translation: 'Hy vọng là thương vụ sáp nhập sẽ hoàn tất trước cuối năm, trong khi chờ cơ quan quản lý phê duyệt.',
    },
    {
      sentence: 'The renovation of the east wing took ------- eight months, twice as long as the contractor had estimated.',
      options: ['nearest', 'nearby', 'nearly', 'closely'],
      answer: 2,
      explanation: {
        vi: 'Đứng trước con số **eight months** để chỉ "gần, xấp xỉ" → **nearly**. nearby nghĩa là "ở gần" (vị trí), closely nghĩa là "chặt chẽ, sát sao", đều sai nghĩa.',
        en: 'Before the number **eight months**, meaning "almost" → **nearly**. nearby means "close in location" and closely means "carefully, tightly", so both have the wrong meaning.',
      },
      translation: 'Việc cải tạo cánh phía đông mất gần tám tháng, lâu gấp đôi so với ước tính của nhà thầu.',
    },
    {
      sentence: 'Impressed by her presentation, ------- offered Ms. Kowalski a position in the strategy department.',
      options: ['the position', 'the hiring panel', 'her presentation', 'the offer'],
      answer: 1,
      explanation: {
        vi: 'Chủ ngữ phải là người **bị ấn tượng** và **đưa ra** lời mời làm việc → **the hiring panel**. Chọn her presentation sẽ thành bổ ngữ treo vô lý: bài thuyết trình tự thấy ấn tượng với chính nó rồi mời người khác vào làm.',
        en: 'The subject must be whoever **was impressed** and **offered** the job → **the hiring panel**. Choosing her presentation creates an absurd dangling modifier: the presentation would be impressed by itself and make a job offer.',
      },
      translation: 'Ấn tượng với bài thuyết trình của cô ấy, hội đồng tuyển dụng đã mời cô Kowalski vào làm ở phòng chiến lược.',
    },
  ],
};
