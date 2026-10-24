import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'parallel-coordinators',
  intro: {
    vi: 'Bài này dạy quy tắc **song song**: các thành phần nối bằng **and, but, or** phải cùng một dạng ngữ pháp. Trong Part 5, đề thường bỏ trống một thành phần của cặp hoặc danh sách; bạn chỉ cần nhìn thành phần đã có ở vế bên kia là biết phải chọn dạng từ nào.',
    en: 'This lesson teaches **parallelism**: items joined by **and, but, or** must share the same grammatical form. In Part 5, the test usually blanks out one item of a pair or a list; you simply look at the item already on the other side to know which form to choose.',
  },
  mistakes: [
    {
      wrong: 'The new receptionist is friendly, organized, and [[efficiency]].',
      right: 'The new receptionist is friendly, organized, and [[efficient]].',
      explanation: {
        vi: '**friendly** và **organized** là tính từ, nên thành phần cuối của danh sách cũng phải là tính từ: **efficient**, không phải danh từ **efficiency**.',
        en: '**friendly** and **organized** are adjectives, so the last item in the list must be an adjective too: **efficient**, not the noun **efficiency**.',
      },
    },
    {
      wrong: 'Our warehouse staff will check each order and [[shipped]] it within 24 hours.',
      right: 'Our warehouse staff will check each order and [[ship]] it within 24 hours.',
      explanation: {
        vi: '**will** đứng chung cho cả hai động từ: will check and (will) ship. Sau will là động từ nguyên mẫu, nên phải là **ship**.',
        en: '**will** is shared by both verbs: will check and (will) ship. A base verb follows will, so it must be **ship**.',
      },
    },
    {
      wrong: 'The workshop covers writing sales reports and [[to give]] presentations.',
      right: 'The workshop covers writing sales reports and [[giving]] presentations.',
      explanation: {
        vi: 'Vế đầu là V-ing **writing**, nên vế sau cũng phải là V-ing **giving**. Không trộn V-ing với to V trong cùng một cặp.',
        en: 'The first item is the -ing form **writing**, so the second must be **giving** too. Do not mix an -ing form with a to-infinitive in one pair.',
      },
    },
    {
      wrong: 'Please sign both copies of the lease and [[returning]] them to our office.',
      right: 'Please sign both copies of the lease and [[return]] them to our office.',
      explanation: {
        vi: 'Đây là câu mệnh lệnh: **sign** là động từ nguyên mẫu, nên động từ nối sau **and** cũng phải là nguyên mẫu **return**.',
        en: 'This is an imperative: **sign** is a base verb, so the verb after **and** must also be the base form **return**.',
      },
    },
    {
      wrong: 'The agent handled every call quickly and [[polite]].',
      right: 'The agent handled every call quickly and [[politely]].',
      explanation: {
        vi: '**quickly** là trạng từ bổ nghĩa cho **handled**, nên từ nối với nó cũng phải là trạng từ **politely**.',
        en: '**quickly** is an adverb modifying **handled**, so the word paired with it must also be an adverb: **politely**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Song song là gì?', en: 'What is parallelism?' },
      body: {
        vi: '**and** (và), **but** (nhưng) và **or** (hoặc) nối những thành phần NGANG HÀNG. Vì ngang hàng nên chúng phải cùng dạng và cùng chức năng: danh từ đi với danh từ, tính từ với tính từ, động từ với động từ cùng dạng. Nghĩa của từng liên từ đã học ở bài 8.1; bài này chỉ tập trung vào DẠNG của các thành phần được nối.',
        en: '**and**, **but** and **or** join EQUAL items. Because they are equal, they must share the same form and function: noun with noun, adjective with adjective, verb with verb in the same form. The meaning of each conjunction was covered in lesson 8.1; this lesson focuses only on the FORM of the joined items.',
      },
      examples: [
        {
          en: 'The new office is **spacious** and **bright**.',
          vi: 'Văn phòng mới rộng rãi và sáng sủa.',
        },
        {
          en: 'Applications can be submitted **in person** or **by mail**.',
          vi: 'Hồ sơ có thể được nộp trực tiếp hoặc qua đường bưu điện.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Song song không có nghĩa là hai vế phải giống hệt nhau về số từ. "**accuracy** and **attention to detail**" vẫn song song, vì cả hai đều là cụm danh từ.',
          en: 'Parallel does not mean the items must have the same number of words. "**accuracy** and **attention to detail**" is still parallel because both are noun phrases.',
        },
      },
    },
    {
      heading: { vi: 'Danh từ, tính từ, trạng từ', en: 'Nouns, adjectives and adverbs' },
      table: {
        head: [
          { vi: 'Loại thành phần', en: 'Type of item' },
          { vi: 'Đúng', en: 'Correct' },
          { vi: 'Sai', en: 'Wrong' },
        ],
        rows: [
          [{ vi: 'Danh từ – danh từ', en: 'Noun – noun' }, 'the cost and the quality', 'the cost and the qualified'],
          [{ vi: 'Tính từ – tính từ', en: 'Adjective – adjective' }, 'affordable and convenient', 'affordable and convenience'],
          [{ vi: 'Trạng từ – trạng từ', en: 'Adverb – adverb' }, 'carefully and thoroughly', 'carefully and thorough'],
          [{ vi: 'Cụm giới từ – cụm giới từ', en: 'Prepositional phrase – prepositional phrase' }, 'by phone or by e-mail', 'by phone or e-mailing'],
        ],
      },
      examples: [
        {
          en: 'The survey measured customer **satisfaction** and **loyalty**.',
          vi: 'Cuộc khảo sát đo mức độ hài lòng và lòng trung thành của khách hàng.',
        },
        {
          en: 'The conference room is small but **well equipped**.',
          vi: 'Phòng hội nghị nhỏ nhưng được trang bị đầy đủ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy hay gặp nhất: một bên là tính từ, chỗ trống lại có danh từ cùng gốc (convenient / convenience, efficient / efficiency). Hãy xem từ ở vế bên kia là loại gì rồi chọn đúng loại đó.',
          en: 'The most common trap: one side is an adjective and the options include a noun from the same root (convenient / convenience, efficient / efficiency). Check what the other item is and choose that same type.',
        },
      },
    },
    {
      heading: { vi: 'Động từ: cùng thì, cùng dạng', en: 'Verbs: same tense, same form' },
      body: {
        vi: 'Khi một chủ ngữ có hai hay ba động từ nối bằng and/or/but, các động từ đó thường cùng thì. Nếu có một trợ động từ hoặc động từ khuyết thiếu đứng chung (will, can, must, should, has…), nó áp dụng cho mọi động từ phía sau, nên các động từ đó phải ở dạng mà trợ động từ ấy đòi hỏi.',
        en: 'When one subject has two or three verbs joined by and/or/but, the verbs are usually in the same tense. If an auxiliary or modal is shared (will, can, must, should, has…), it applies to every verb that follows, so those verbs must take the form that auxiliary requires.',
      },
      table: {
        head: [
          { vi: 'Trường hợp', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Hiện tại đơn', en: 'Present simple' }, 'She plans the budget and approves all purchases.'],
          [{ vi: 'Quá khứ đơn', en: 'Past simple' }, 'He called the client and confirmed the order.'],
          [{ vi: 'Động từ khuyết thiếu + nguyên mẫu', en: 'Modal + base verb' }, 'Guests can check in online or pay at the desk.'],
          [{ vi: 'Câu mệnh lệnh', en: 'Imperative' }, 'Fill out the form and attach a receipt.'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thì và thể (chủ động/bị động) của vị ngữ ghép, cùng các trường hợp được phép đổi thì, được học kỹ ở bài 16.3.',
          en: 'Tense and voice in compound predicates, including when the tense is allowed to change, are covered in detail in lesson 16.3.',
        },
      },
    },
    {
      heading: { vi: 'V-ing – V-ing và to V – (to) V', en: '-ing with -ing, to V with (to) V' },
      points: [
        {
          vi: 'Vế đầu là **V-ing** thì vế sau cũng là **V-ing**: enjoys meeting clients and traveling abroad.',
          en: 'If the first item is an **-ing form**, the next one is an **-ing form** too: enjoys meeting clients and traveling abroad.',
        },
        {
          vi: 'Vế đầu là **to V** thì vế sau là **to V** hoặc chỉ **V nguyên mẫu** (to được hiểu ngầm): plans to hire more staff and (to) open a new branch.',
          en: 'If the first item is a **to-infinitive**, the next one is **to V** or just the **base verb** (to is understood): plans to hire more staff and (to) open a new branch.',
        },
        {
          vi: 'Không trộn hai dạng: "to hire staff and **opening** a branch" là sai.',
          en: 'Never mix the two: "to hire staff and **opening** a branch" is wrong.',
        },
      ],
      examples: [
        {
          en: 'The role involves **answering** customer inquiries and **processing** refunds.',
          vi: 'Vị trí này bao gồm việc trả lời thắc mắc của khách hàng và xử lý hoàn tiền.',
        },
        {
          en: 'The goal is **to reduce** waste and **improve** efficiency on the production line.',
          vi: 'Mục tiêu là giảm lãng phí và nâng cao hiệu suất trên dây chuyền sản xuất.',
        },
      ],
    },
    {
      heading: { vi: 'Danh sách ba thành phần', en: 'Lists of three items' },
      body: {
        vi: 'Danh sách có dạng **A, B, and C** (hoặc A, B, or C): liên từ chỉ đứng trước thành phần cuối, dấu phẩy trước and có thể có hoặc không. Cả ba thành phần đều phải cùng dạng; đề thường bỏ trống thành phần giữa hoặc cuối.',
        en: 'A list takes the form **A, B, and C** (or A, B, or C): the conjunction comes only before the last item, and the comma before and is optional. All three items must share one form; the test usually blanks out the middle or the last item.',
      },
      examples: [
        {
          en: 'The package includes **airfare**, **hotel accommodation**, and **daily breakfast**.',
          vi: 'Trọn gói bao gồm vé máy bay, chỗ ở khách sạn và bữa sáng hằng ngày.',
        },
        {
          en: 'Our technicians **install**, **test**, and **maintain** every unit we sell.',
          vi: 'Các kỹ thuật viên của chúng tôi lắp đặt, kiểm tra và bảo trì mọi thiết bị chúng tôi bán.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Khi chỗ trống nằm giữa danh sách, hãy nhìn CẢ hai thành phần hai bên: nếu chúng cùng dạng thì chỗ trống chắc chắn cũng phải mang dạng đó.',
          en: 'When the blank sits in the middle of a list, look at BOTH neighbouring items: if they share a form, the blank must take that form too.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu song song trong Part 5', en: 'How to attack parallel items in Part 5' },
      points: [
        {
          vi: 'Thấy **and, but, or** sát chỗ trống (hoặc dấu phẩy của một danh sách) → nghĩ ngay đến song song.',
          en: 'See **and, but, or** right next to the blank (or the commas of a list) → think parallelism.',
        },
        {
          vi: 'Tìm thành phần ở vế bên kia và xác định nó là danh từ, tính từ, trạng từ, động từ chia thì, V-ing hay to V.',
          en: 'Find the item on the other side and decide whether it is a noun, adjective, adverb, finite verb, -ing form or to-infinitive.',
        },
        {
          vi: 'Kiểm tra hai vế có cùng chức năng không: cùng bổ nghĩa cho một danh từ, cùng làm tân ngữ của một động từ, hay cùng dùng chung một trợ động từ.',
          en: 'Check that the two items share a function: modifying the same noun, acting as objects of the same verb, or sharing the same auxiliary.',
        },
        {
          vi: 'Chọn lựa chọn có cùng dạng, rồi đọc lại cả câu để chắc chắn nghĩa hợp lý.',
          en: 'Pick the option with the matching form, then reread the sentence to make sure the meaning works.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không phải and nào cũng nối hai từ: and cũng có thể nối hai mệnh đề đầy đủ (The hotel is small, **but its rooms are spacious**). Khi đó mỗi vế là một mệnh đề có chủ ngữ riêng, không cần cùng dạng từ.',
          en: 'Not every and joins two words: it can also join two full clauses (The hotel is small, **but its rooms are spacious**). Then each side is a clause with its own subject, and no word-form match is needed.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'The position requires creativity, patience, and ------- with spreadsheet software.',
      options: ['familiarity', 'familiar', 'familiarize', 'familiarly'],
      answer: 0,
      explanation: {
        vi: 'Danh sách **creativity, patience, and …** gồm các danh từ, nên thành phần cuối cũng phải là danh từ → **familiarity** (sự thành thạo). familiar là tính từ, không song song với hai danh từ trước.',
        en: 'The list **creativity, patience, and …** is made of nouns, so the last item must be a noun → **familiarity**. familiar is an adjective and is not parallel with the two nouns.',
      },
      translation: 'Vị trí này đòi hỏi sự sáng tạo, tính kiên nhẫn và sự thành thạo phần mềm bảng tính.',
    },
    {
      sentence: 'Guests often describe the staff at the Harbor View Hotel as courteous and -------.',
      options: ['attention', 'attentively', 'attentive', 'attend'],
      answer: 2,
      explanation: {
        vi: '**courteous** là tính từ, nên từ nối sau **and** cũng phải là tính từ → **attentive** (chu đáo). attentively là trạng từ, attention là danh từ.',
        en: '**courteous** is an adjective, so the word after **and** must be an adjective too → **attentive**. attentively is an adverb and attention a noun.',
      },
      translation: 'Khách thường mô tả nhân viên Khách sạn Harbor View là lịch sự và chu đáo.',
    },
    {
      sentence: 'Last Monday, the facilities manager inspected the elevators and ------- a repair technician.',
      options: ['contacts', 'contacted', 'contacting', 'will contact'],
      answer: 1,
      explanation: {
        vi: '**Last Monday** và động từ **inspected** ở quá khứ đơn, nên động từ thứ hai cũng phải ở quá khứ đơn → **contacted**. will contact mâu thuẫn với mốc thời gian quá khứ.',
        en: '**Last Monday** and the verb **inspected** are past simple, so the second verb must be past simple too → **contacted**. will contact clashes with the past time marker.',
      },
      translation: 'Thứ Hai tuần trước, quản lý cơ sở vật chất đã kiểm tra thang máy và liên hệ với một kỹ thuật viên sửa chữa.',
    },
    {
      sentence: 'Applicants must complete the online form and ------- a copy of their resume by May 15.',
      options: ['attaching', 'attached', 'attaches', 'attach'],
      answer: 3,
      explanation: {
        vi: '**must** đứng chung cho cả hai động từ: must complete and (must) attach. Sau must là động từ nguyên mẫu → **attach**. attached không đi được sau must khi không có be.',
        en: '**must** is shared by both verbs: must complete and (must) attach. A base verb follows must → **attach**. attached cannot follow must without be.',
      },
      translation: 'Ứng viên phải điền mẫu đơn trực tuyến và đính kèm một bản sơ yếu lý lịch trước ngày 15 tháng 5.',
    },
    {
      sentence: "Ms. Patel's responsibilities include scheduling interviews, ------- new hires, and updating payroll records.",
      options: ['training', 'train', 'trains', 'to train'],
      answer: 0,
      explanation: {
        vi: 'Hai thành phần hai bên là **scheduling** và **updating** (V-ing), nên thành phần giữa cũng phải là V-ing → **training**. to train không song song với hai V-ing.',
        en: 'The items on either side, **scheduling** and **updating**, are -ing forms, so the middle item must be one too → **training**. to train is not parallel with them.',
      },
      translation: 'Công việc của cô Patel bao gồm sắp xếp lịch phỏng vấn, đào tạo nhân viên mới và cập nhật hồ sơ bảng lương.',
    },
    {
      sentence: 'The new software allows managers to track expenses and ------- monthly budgets more accurately.',
      options: ['preparing', 'preparation', 'prepare', 'preparer'],
      answer: 2,
      explanation: {
        vi: 'Vế đầu là **to track**; vế sau dùng **to V** hoặc V nguyên mẫu (to hiểu ngầm) → **prepare**. preparing không song song với to track.',
        en: 'The first item is **to track**; the second takes to V or the base verb (to is understood) → **prepare**. preparing is not parallel with to track.',
      },
      translation: 'Phần mềm mới cho phép các quản lý theo dõi chi phí và lập ngân sách hằng tháng chính xác hơn.',
    },
    {
      sentence: 'The customer service team responded to the complaint quickly and -------.',
      options: ['profession', 'professional', 'professionalism', 'professionally'],
      answer: 3,
      explanation: {
        vi: '**quickly** là trạng từ bổ nghĩa cho **responded**, nên từ nối sau **and** cũng phải là trạng từ → **professionally**. professional là tính từ, không bổ nghĩa cho động từ.',
        en: '**quickly** is an adverb modifying **responded**, so the word after **and** must also be an adverb → **professionally**. professional is an adjective and cannot modify a verb.',
      },
      translation: 'Đội chăm sóc khách hàng đã phản hồi khiếu nại một cách nhanh chóng và chuyên nghiệp.',
    },
    {
      sentence: 'The meeting room on the third floor is small but -------, with seating for twelve and a large screen.',
      options: ['function', 'functional', 'functionally', 'functioned'],
      answer: 1,
      explanation: {
        vi: '**small** là tính từ đứng sau **is**, nên từ nối sau **but** cũng phải là tính từ → **functional** (tiện dụng). functionally là trạng từ, function là danh từ.',
        en: '**small** is an adjective after **is**, so the word after **but** must be an adjective too → **functional**. functionally is an adverb and function a noun.',
      },
      translation: 'Phòng họp trên tầng ba tuy nhỏ nhưng tiện dụng, có chỗ ngồi cho mười hai người và một màn hình lớn.',
    },
    {
      sentence: 'Our maintenance crew cleans the lobby, ------- the windows, and empties the trash bins every evening.',
      options: ['polish', 'polishes', 'polishing', 'polished'],
      answer: 1,
      explanation: {
        vi: 'Hai động từ hai bên là **cleans** và **empties** (hiện tại đơn, ngôi thứ ba số ít), nên động từ giữa cũng phải là **polishes**. polish thiếu -es, polished sai thì.',
        en: 'The verbs on either side, **cleans** and **empties**, are present simple third person singular, so the middle verb must be **polishes**. polish lacks the -es and polished is the wrong tense.',
      },
      translation: 'Đội bảo trì của chúng tôi lau dọn sảnh, đánh bóng cửa kính và đổ thùng rác mỗi tối.',
    },
    {
      sentence: 'The survey asked customers to rate the quality and ------- of our delivery service.',
      options: ['reliability', 'reliable', 'reliably', 'rely'],
      answer: 0,
      explanation: {
        vi: '**the quality** là danh từ, và cả hai cùng đứng trước **of our delivery service**, nên chỗ trống cũng phải là danh từ → **reliability** (độ tin cậy). reliable là tính từ.',
        en: '**the quality** is a noun, and both items share **of our delivery service**, so the blank must be a noun too → **reliability**. reliable is an adjective.',
      },
      translation: 'Cuộc khảo sát đề nghị khách hàng đánh giá chất lượng và độ tin cậy của dịch vụ giao hàng của chúng tôi.',
    },
  ],
};
