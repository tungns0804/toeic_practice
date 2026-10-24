import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conjunctions-coordinating',
  intro: {
    vi: 'Bài này dạy bảy liên từ kết hợp **FANBOYS**, năm cặp liên từ tương quan (both … and, either … or…) và các trạng từ liên kết như **however, therefore** cùng dấu câu đi kèm. Trong Part 5 và Part 6, đề hay bỏ trống một nửa của cặp từ, hoặc bắt bạn chọn giữa so, but, however, therefore dựa vào NGHĨA và DẤU CÂU quanh chỗ trống.',
    en: 'This lesson covers the seven coordinating conjunctions (**FANBOYS**), the five correlative pairs (both … and, either … or…) and conjunctive adverbs such as **however** and **therefore** with their punctuation. In Parts 5 and 6, the test often blanks out one half of a pair, or makes you choose between so, but, however and therefore based on the MEANING and the PUNCTUATION around the blank.',
  },
  mistakes: [
    {
      wrong: 'Both the sales department [[or]] the legal team must approve the new contract.',
      right: 'Both the sales department [[and]] the legal team must approve the new contract.',
      explanation: {
        vi: '**Both** chỉ đi với **and**: both A and B (cả A lẫn B). **or** là nửa sau của **either**, không ghép với both.',
        en: '**Both** only pairs with **and**: both A and B. **or** is the partner of **either** and never goes with both.',
      },
    },
    {
      wrong: 'Neither the courier [[or]] the warehouse staff could locate the missing package.',
      right: 'Neither the courier [[nor]] the warehouse staff could locate the missing package.',
      explanation: {
        vi: '**Neither** phải đi với **nor**, không đi với or. Cặp neither … nor nghĩa là "cả hai đều không".',
        en: '**Neither** must pair with **nor**, not or. neither … nor means "not one and not the other".',
      },
    },
    {
      wrong: 'The new laptop is not only lighter [[and]] also faster than the old model.',
      right: 'The new laptop is not only lighter [[but]] also faster than the old model.',
      explanation: {
        vi: 'Cặp đúng là **not only … but (also)** (không những … mà còn). Dùng **and** thay cho **but** là lỗi rất hay gặp.',
        en: 'The correct pair is **not only … but (also)**. Using **and** instead of **but** is a very common mistake.',
      },
    },
    {
      wrong: 'Heavy fog closed the airport, [[but]] our flight to Osaka was canceled.',
      right: 'Heavy fog closed the airport, [[so]] our flight to Osaka was canceled.',
      explanation: {
        vi: 'Sương mù đóng cửa sân bay là NGUYÊN NHÂN, chuyến bay bị huỷ là KẾT QUẢ, nên cần **so** (vì vậy), không phải **but** (tương phản).',
        en: 'The fog closing the airport is the CAUSE and the cancellation is the RESULT, so we need **so**, not the contrast word **but**.',
      },
    },
    {
      wrong: 'The shipment arrived two days late, [[however]] the client did not complain.',
      right: 'The shipment arrived two days late, [[but]] the client did not complain.',
      explanation: {
        vi: '**however** là trạng từ liên kết, không nối được hai mệnh đề chỉ bằng dấu phẩy. Dùng liên từ **but**, hoặc viết "late; however, the client…".',
        en: '**however** is a conjunctive adverb and cannot join two clauses with just a comma. Use the conjunction **but**, or write "late; however, the client…".',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Bảy liên từ kết hợp: FANBOYS', en: 'The seven coordinating conjunctions: FANBOYS' },
      body: {
        vi: 'Liên từ kết hợp nối hai thành phần NGANG HÀNG: hai từ, hai cụm từ hoặc hai mệnh đề độc lập. Có đúng bảy từ, ghép chữ cái đầu thành **FANBOYS**: **for, and, nor, but, or, yet, so**. Câu hỏi Part 5 về nhóm này chủ yếu kiểm tra NGHĨA: hai vế quan hệ với nhau thế nào (thêm ý, tương phản, nguyên nhân, kết quả, lựa chọn).',
        en: 'A coordinating conjunction joins two EQUAL parts: two words, two phrases or two independent clauses. There are exactly seven, whose initials spell **FANBOYS**: **for, and, nor, but, or, yet, so**. Part 5 items on this group mainly test MEANING: how the two parts relate (addition, contrast, reason, result, choice).',
      },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'for',
            { vi: 'vì, bởi vì: nêu LÝ DO (trang trọng, chỉ nối hai mệnh đề)', en: 'because: gives a REASON (formal, joins clauses only)' },
            'Ms. Lee left the meeting early, **for** she had a flight to catch.',
          ],
          ['and', { vi: 'và: THÊM ý', en: 'and: ADDS information' }, 'The suite has a kitchen **and** a private balcony.'],
          [
            'nor',
            { vi: 'cũng không: thêm một ý PHỦ ĐỊNH nữa', en: 'and not: adds another NEGATIVE idea' },
            'The tenant did not pay the rent, **nor** did he return our calls.',
          ],
          ['but', { vi: 'nhưng: TƯƠNG PHẢN', en: 'but: CONTRAST' }, 'The office is small **but** well equipped.'],
          [
            'or',
            { vi: 'hoặc, hay: LỰA CHỌN; sau câu mệnh lệnh: "nếu không thì"', en: 'or: CHOICE; after a command: "otherwise"' },
            'You can collect the parcel today **or** tomorrow.',
          ],
          [
            'yet',
            { vi: 'nhưng, vậy mà: tương phản TRÁI VỚI MONG ĐỢI', en: 'but surprisingly: UNEXPECTED contrast' },
            'The workshop was expensive, **yet** it sold out within a day.',
          ],
          [
            'so',
            { vi: 'vì vậy, nên: KẾT QUẢ (chỉ nối hai mệnh đề)', en: 'therefore: RESULT (joins clauses only)' },
            'The elevator was out of service, **so** the movers used the stairs.',
          ],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: '**for** và **so** ngược chiều nhau: for đứng trước NGUYÊN NHÂN, so đứng trước KẾT QUẢ. "The train was late, **so** I took a taxi" = "I took a taxi, **for** the train was late".',
          en: '**for** and **so** point in opposite directions: for introduces the CAUSE, so introduces the RESULT. "The train was late, **so** I took a taxi" = "I took a taxi, **for** the train was late".',
        },
      },
    },
    {
      heading: { vi: 'Vị trí và dấu phẩy của FANBOYS', en: 'Position and commas with FANBOYS' },
      points: [
        {
          vi: 'Nối hai từ hoặc hai cụm từ: KHÔNG cần dấu phẩy: fast **and** reliable, by phone **or** by email.',
          en: 'Joining two words or two phrases: NO comma is needed: fast **and** reliable, by phone **or** by email.',
        },
        {
          vi: 'Nối hai mệnh đề độc lập: thường đặt dấu phẩy TRƯỚC liên từ: mệnh đề 1**, so** mệnh đề 2. Với hai mệnh đề rất ngắn, dấu phẩy có thể lược.',
          en: 'Joining two independent clauses: a comma usually goes BEFORE the conjunction: clause 1**, so** clause 2. With two very short clauses, the comma may be dropped.',
        },
        {
          vi: 'FANBOYS đứng GIỮA hai vế mà nó nối, nên không dùng được theo mẫu "liên từ + mệnh đề 1, mệnh đề 2" như although hay because: "**But** sales rose, profits fell" là câu sai.',
          en: 'FANBOYS stand BETWEEN the two parts they join, so they cannot follow the pattern "conjunction + clause 1, clause 2" the way although or because can: "**But** sales rose, profits fell" is wrong.',
        },
        {
          vi: '**nor** thường theo sau một vế phủ định; khi nor nối hai mệnh đề, mệnh đề sau phải ĐẢO NGỮ (trợ động từ đứng trước chủ ngữ): The firm has not raised prices, **nor does it plan** to.',
          en: '**nor** usually follows a negative; when nor joins two clauses, the second clause is INVERTED (auxiliary before subject): The firm has not raised prices, **nor does it plan** to.',
        },
        {
          vi: '**or** sau một câu mệnh lệnh (hoặc câu có must/should) mang nghĩa "nếu không thì": Book early, **or** you may not get a room.',
          en: '**or** after a command (or a sentence with must/should) means "otherwise": Book early, **or** you may not get a room.',
        },
      ],
      examples: [
        {
          en: 'The package was fragile, **so** the courier asked for a signature.',
          vi: 'Kiện hàng dễ vỡ, vì vậy người giao hàng yêu cầu ký nhận.',
        },
        {
          en: 'Our team has not finished the audit, **nor** has it received the bank statements.',
          vi: 'Nhóm chúng tôi chưa hoàn thành đợt kiểm toán, và cũng chưa nhận được sao kê ngân hàng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**and, but, or, yet** (và **nor** sau một vế phủ định) nối được cả hai từ hay hai cụm từ: simple **yet** effective. Còn **for** và **so** (nghĩa "vì vậy") chỉ nối hai MỆNH ĐỀ, nên khi chỗ trống nằm giữa hai tính từ hay hai danh từ, loại ngay for và so.',
          en: '**and, but, or, yet** (and **nor** after a negative) can join two words or phrases: simple **yet** effective. But **for** and **so** (meaning "therefore") join only CLAUSES, so when the blank sits between two adjectives or two nouns, rule out for and so at once.',
        },
      },
    },
    {
      heading: { vi: 'Năm cặp liên từ tương quan', en: 'The five correlative pairs' },
      body: {
        vi: 'Liên từ tương quan luôn đi THÀNH CẶP: nửa đầu đứng trước vế thứ nhất, nửa sau đứng trước vế thứ hai. Part 5 thường cho sẵn một nửa và bỏ trống nửa kia, nên chỉ cần thuộc đúng cặp là chọn được trong vài giây.',
        en: 'Correlative conjunctions always come IN PAIRS: the first half goes before the first element, the second half before the second element. Part 5 usually gives you one half and blanks out the other, so knowing the pairs lets you answer in seconds.',
      },
      table: {
        head: [
          { vi: 'Cặp', en: 'Pair' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'both … and',
            { vi: 'cả … lẫn …', en: 'the one and the other' },
            'The contract was signed by **both** the buyer **and** the seller.',
          ],
          [
            'either … or',
            { vi: 'hoặc … hoặc … (một trong hai)', en: 'one or the other' },
            'You can pay **either** in full **or** in three installments.',
          ],
          [
            'neither … nor',
            { vi: 'không … cũng không … (cả hai đều không)', en: 'not the one and not the other' },
            'The hotel offers **neither** parking **nor** an airport shuttle.',
          ],
          [
            'not only … but (also)',
            { vi: 'không những … mà còn …', en: 'not just the first but the second too' },
            'The course is **not only** free **but also** fully online.',
          ],
          [
            'whether … or',
            { vi: 'dù … hay …; liệu … hay …', en: 'no matter which; which of the two' },
            'Every parcel is inspected, **whether** it ships by air **or** by sea.',
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không bao giờ "ghép chéo" hai nửa của các cặp khác nhau: **both … or**, **neither … or**, **either … nor**, **not only … and**, **whether … nor** đều SAI.',
          en: 'Never mix halves from different pairs: **both … or**, **neither … or**, **either … nor**, **not only … and** and **whether … nor** are all WRONG.',
        },
      },
    },
    {
      heading: { vi: 'Những điểm tinh tế của cặp tương quan', en: 'Fine points of the correlative pairs' },
      points: [
        {
          vi: '**neither … nor** đã mang nghĩa phủ định, nên động từ để ở dạng KHẲNG ĐỊNH: Neither the CEO nor the CFO **attended** the dinner (không viết "did not attend").',
          en: '**neither … nor** is already negative, so the verb stays AFFIRMATIVE: Neither the CEO nor the CFO **attended** the dinner (not "did not attend").',
        },
        {
          vi: '**not only … but also**: chữ also có thể lược (not only cheap **but** reliable) hoặc thay bằng **as well** ở cuối (not only cheap but reliable **as well**).',
          en: '**not only … but also**: also can be dropped (not only cheap **but** reliable) or replaced by **as well** at the end (not only cheap but reliable **as well**).',
        },
        {
          vi: 'Khi **Not only** đứng ĐẦU câu và theo sau là cả một mệnh đề, mệnh đề đó phải đảo ngữ: **Not only did** the hotel renovate its rooms, **but** it **also** opened a new spa.',
          en: 'When **Not only** opens the sentence and is followed by a whole clause, that clause is inverted: **Not only did** the hotel renovate its rooms, **but** it **also** opened a new spa.',
        },
        {
          vi: '**whether … or** mở đầu vế phụ "dù … hay …" (thường đứng đầu câu, có dấu phẩy ngăn với mệnh đề chính), hoặc đứng sau decide, ask, know… với nghĩa "liệu … hay …" (mệnh đề danh từ, bài 15.2). Có thể dùng **whether or not**.',
          en: '**whether … or** opens a "no matter which" clause (often at the start, set off from the main clause by a comma), or follows decide, ask, know… meaning "which of the two" (noun clauses, lesson 15.2). **whether or not** is also possible.',
        },
        {
          vi: '**either … or** chỉ nêu hai lựa chọn; nó không mở đầu được một vế phụ đứng trước mệnh đề chính. Vị trí "------- A or B, mệnh đề chính" luôn thuộc về **Whether**.',
          en: '**either … or** simply presents two options; it cannot open a dependent clause placed before the main clause. The slot "------- A or B, main clause" always belongs to **Whether**.',
        },
      ],
      examples: [
        {
          en: '**Whether** you stay one night **or** a full week, breakfast is included in the rate.',
          vi: 'Dù quý khách ở một đêm hay cả tuần, bữa sáng đều đã bao gồm trong giá phòng.',
        },
        {
          en: 'The new scanner is **not only** faster **but also** easier to maintain.',
          vi: 'Máy quét mới không những nhanh hơn mà còn dễ bảo trì hơn.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Cách chia động từ khi chủ ngữ nối bằng các cặp này (both … and → số nhiều; either … or, neither … nor → theo chủ ngữ gần nhất) đã học ở bài 3.4. Yêu cầu hai vế phải cùng dạng (song song) sẽ học ở bài 16.2.',
          en: 'Verb agreement with subjects joined by these pairs (both … and → plural; either … or, neither … nor → the nearer subject) was covered in lesson 3.4. The rule that both halves must match in form (parallelism) comes in lesson 16.2.',
        },
      },
    },
    {
      heading: {
        vi: 'Trạng từ liên kết: however, therefore, moreover, otherwise, consequently',
        en: 'Conjunctive adverbs: however, therefore, moreover, otherwise, consequently',
      },
      body: {
        vi: 'Trạng từ liên kết nối Ý giữa hai câu, nhưng về ngữ pháp nó là TRẠNG TỪ chứ không phải liên từ, nên không tự nối được hai mệnh đề. Mỗi từ có một "người anh em" FANBOYS gần nghĩa.',
        en: 'A conjunctive adverb links the IDEAS of two sentences, but grammatically it is an ADVERB, not a conjunction, so it cannot join two clauses on its own. Each one has a FANBOYS "twin" with a similar meaning.',
      },
      table: {
        head: [
          { vi: 'Trạng từ liên kết', en: 'Conjunctive adverb' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'FANBOYS gần nghĩa', en: 'FANBOYS twin' },
          { vi: 'Từ cùng nhóm', en: 'Similar words' },
        ],
        rows: [
          ['however', { vi: 'tuy nhiên', en: 'contrast' }, 'but', 'nevertheless'],
          ['therefore / consequently', { vi: 'do đó, vì vậy, kết quả là', en: 'result' }, 'so', 'as a result, thus'],
          ['moreover', { vi: 'hơn nữa, ngoài ra', en: 'addition' }, 'and', 'furthermore, in addition'],
          ['otherwise', { vi: 'nếu không thì', en: 'condition: if not' }, 'or', '—'],
        ],
      },
      examples: [
        {
          en: 'The hotel is fully booked on Friday. **However**, rooms are still available on Saturday.',
          vi: 'Khách sạn đã kín phòng vào thứ Sáu. Tuy nhiên, vẫn còn phòng vào thứ Bảy.',
        },
        {
          en: 'Fuel prices rose sharply in May; **consequently**, several airlines raised their fares.',
          vi: 'Giá nhiên liệu tăng mạnh trong tháng Năm; do đó, nhiều hãng hàng không đã tăng giá vé.',
        },
        {
          en: 'Please confirm your attendance by Monday; **otherwise**, your seat may be given to another guest.',
          vi: 'Vui lòng xác nhận tham dự trước thứ Hai; nếu không, chỗ ngồi của quý vị có thể được nhường cho khách khác.',
        },
      ],
    },
    {
      heading: { vi: 'Dấu câu đi kèm trạng từ liên kết', en: 'Punctuation with conjunctive adverbs' },
      points: [
        {
          vi: 'Trạng từ liên kết mở đầu mệnh đề thứ hai thì đứng sau **dấu chấm** hoặc **dấu chấm phẩy**, và thường có dấu phẩy theo sau.',
          en: 'A conjunctive adverb that opens the second clause follows a **period** or a **semicolon**, and is usually followed by a comma.',
        },
        {
          vi: 'Nó cũng có thể chen giữa mệnh đề (đặt giữa hai dấu phẩy) hoặc đứng cuối câu: The new rate, **however**, applies only to members.',
          en: 'It can also sit inside the clause (between two commas) or at the end: The new rate, **however**, applies only to members.',
        },
        {
          vi: 'Có thể dùng FANBOYS và trạng từ liên kết cùng lúc, vì khi đó liên từ đảm nhận việc nối: The supplier raised its prices, **and therefore** we changed vendors.',
          en: 'A FANBOYS word and a conjunctive adverb can appear together, because the conjunction then does the joining: The supplier raised its prices, **and therefore** we changed vendors.',
        },
      ],
      table: {
        head: [
          { vi: 'Mẫu câu', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Đúng / sai', en: 'Correct?' },
        ],
        rows: [
          ['Clause. However, clause.', 'The fee is high. **However,** it includes meals.', { vi: 'Đúng', en: 'Correct' }],
          ['Clause; however, clause.', 'The fee is high; **however,** it includes meals.', { vi: 'Đúng', en: 'Correct' }],
          ['Subject, however, verb …', 'The fee, **however,** includes meals.', { vi: 'Đúng (chen giữa câu)', en: 'Correct (mid-sentence)' }],
          ['Clause, but clause.', 'The fee is high, **but** it includes meals.', { vi: 'Đúng (dùng FANBOYS)', en: 'Correct (FANBOYS)' }],
          [
            'Clause, however clause.',
            'The fee is high, **however** it includes meals.',
            { vi: 'SAI: nối hai mệnh đề chỉ bằng dấu phẩy', en: 'WRONG: comma splice' },
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy kinh điển: chỗ trống đứng sau **dấu phẩy** và theo sau là một mệnh đề hoàn chỉnh → chọn FANBOYS (but, so…), loại however, therefore, consequently. Chỗ trống đứng sau dấu chấm hoặc dấu chấm phẩy và có dấu phẩy theo sau → chọn trạng từ liên kết.',
          en: 'The classic trap: the blank follows a **comma** and is followed by a full clause → choose a FANBOYS word (but, so…) and rule out however, therefore and consequently. The blank follows a period or semicolon and is followed by a comma → choose a conjunctive adverb.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu liên từ trong Part 5', en: 'Solving conjunction items in Part 5' },
      points: [
        {
          vi: 'Tìm nửa cặp đã có trong câu (both, either, neither, not only, whether, hoặc and/or/nor/but also ở phía sau) → chọn đúng nửa còn lại.',
          en: 'Look for half a pair already in the sentence (both, either, neither, not only, whether, or a later and/or/nor/but also) → pick its exact partner.',
        },
        {
          vi: 'Nhìn dấu câu quanh chỗ trống: ", ------- + mệnh đề" → FANBOYS; ". -------," hoặc "; -------," hoặc chen giữa chủ ngữ và động từ ", -------," → trạng từ liên kết.',
          en: 'Check the punctuation around the blank: ", ------- + clause" → FANBOYS; ". -------," or "; -------," or ", -------," between subject and verb → conjunctive adverb.',
        },
        {
          vi: 'Thấy đảo ngữ ngay sau chỗ trống (nor **did** it…, Not only **has** the firm…) → đó là dấu hiệu của **nor** hoặc **Not only**.',
          en: 'Inversion right after the blank (nor **did** it…, Not only **has** the firm…) → that signals **nor** or **Not only**.',
        },
        {
          vi: 'Cuối cùng mới xét nghĩa: thêm ý (and, moreover), tương phản (but, yet, however), kết quả (so, therefore, consequently), lý do (for), lựa chọn hoặc điều kiện (or, otherwise), thêm ý phủ định (nor).',
          en: 'Only then decide by meaning: addition (and, moreover), contrast (but, yet, however), result (so, therefore, consequently), reason (for), choice or condition (or, otherwise), another negative (nor).',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Khi bốn lựa chọn trộn liên từ với trạng từ CÙNG NGHĨA (so / therefore / consequently), nghĩa không giúp gì được: hãy quyết định bằng DẤU CÂU.',
          en: 'When the options mix conjunctions and adverbs with the SAME meaning (so / therefore / consequently), meaning cannot help you: decide by the PUNCTUATION.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Both the main lobby ------- the guest lounge will be repainted while the hotel is closed in January.',
      options: ['or', 'and', 'nor', 'but'],
      answer: 1,
      explanation: {
        vi: 'Đã có **Both** ở đầu câu nên nửa còn lại phải là **and** (both A and B = cả A lẫn B). or đi với either, nor đi với neither, còn but không bao giờ ghép với both.',
        en: '**Both** at the start of the sentence calls for **and** (both A and B). or pairs with either, nor pairs with neither, and but never pairs with both.',
      },
      translation: 'Cả sảnh chính lẫn phòng chờ dành cho khách sẽ được sơn lại trong thời gian khách sạn đóng cửa vào tháng Một.',
    },
    {
      sentence: 'Travel expenses can be submitted ------- through the online portal or in person at the finance office.',
      options: ['both', 'neither', 'not only', 'either'],
      answer: 3,
      explanation: {
        vi: 'Phía sau có **or** (through the online portal **or** in person) nên nửa đầu của cặp là **either**: hoặc nộp trực tuyến, hoặc nộp trực tiếp. both phải đi với and, neither phải đi với nor, còn not only đi với but (also).',
        en: 'The **or** later in the sentence (through the online portal **or** in person) needs **either** as its partner. both pairs with and, neither with nor, and not only with but (also).',
      },
      translation: 'Chi phí công tác có thể được nộp qua cổng thông tin trực tuyến hoặc nộp trực tiếp tại phòng tài chính.',
    },
    {
      sentence: 'Neither the original invoice ------- the revised quote included the cost of installation.',
      options: ['nor', 'or', 'and', 'but'],
      answer: 0,
      explanation: {
        vi: '**Neither** luôn đi với **nor** (neither A nor B = cả A lẫn B đều không). "neither … or" là lỗi ghép cặp mà đề rất hay dùng làm bẫy; and thì đi với both.',
        en: '**Neither** always pairs with **nor** (neither A nor B). "neither … or" is a mismatched pair the test loves to use as a trap; and goes with both.',
      },
      translation: 'Cả hoá đơn gốc lẫn bảng báo giá đã sửa đều không tính chi phí lắp đặt.',
    },
    {
      sentence: 'The new booking system not only reduces waiting times ------- also lowers the workload of our front-desk staff.',
      options: ['and', 'so', 'but', 'or'],
      answer: 2,
      explanation: {
        vi: 'Phía trước đã có **not only**, ngay sau chỗ trống là **also** → điền **but** để có cặp not only … but also (không những … mà còn). "not only … and also" là lỗi thường gặp nhưng sai.',
        en: '**not only** appears earlier and **also** follows the blank → **but** completes not only … but also. "not only … and also" is a common mistake but is wrong.',
      },
      translation: 'Hệ thống đặt chỗ mới không những giảm thời gian chờ mà còn giảm khối lượng công việc cho nhân viên lễ tân của chúng tôi.',
    },
    {
      sentence: '------- guests pay by credit card or in cash, a receipt will be sent to their registered email address.',
      options: ['Either', 'Whether', 'Both', 'Neither'],
      answer: 1,
      explanation: {
        vi: 'Vế đầu có **or** (by credit card **or** in cash) và đứng trước mệnh đề chính sau **dấu phẩy** → cần **Whether** (dù … hay …). Either … or không mở đầu được một vế phụ đứng trước mệnh đề chính; Both và Neither thì sai cặp với or.',
        en: 'The first part contains **or** (by credit card **or** in cash) and comes before the main clause after a **comma** → **Whether** (no matter which). Either … or cannot open a dependent clause before a main clause, and Both and Neither do not pair with or.',
      },
      translation: 'Dù khách thanh toán bằng thẻ tín dụng hay bằng tiền mặt, biên lai sẽ được gửi đến địa chỉ email mà khách đã đăng ký.',
    },
    {
      sentence: 'The company picnic has been moved to the hotel ballroom, ------- heavy rain is forecast for Saturday afternoon.',
      options: ['so', 'yet', 'nor', 'for'],
      answer: 3,
      explanation: {
        vi: 'Vế sau (**heavy rain is forecast**) là NGUYÊN NHÂN của việc dời buổi dã ngoại vào phòng tiệc → **for** (vì). so đứng trước kết quả nên đảo ngược logic (dời địa điểm không thể gây ra mưa); yet chỉ tương phản; nor cần vế trước phủ định và đảo ngữ.',
        en: 'The second clause (**heavy rain is forecast**) is the REASON for moving the picnic indoors → **for** (because). so introduces a result, which reverses the logic (moving the venue cannot cause rain); yet signals contrast; nor needs a negative first clause and inversion.',
      },
      translation: 'Buổi dã ngoại của công ty đã được dời vào phòng tiệc của khách sạn, vì dự báo trời sẽ mưa to vào chiều thứ Bảy.',
    },
    {
      sentence: 'Customers describe the redesigned checkout page as simple ------- effective, and online orders have risen since its launch.',
      options: ['yet', 'so', 'for', 'nor'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống nối hai TÍNH TỪ **simple** và **effective** với ý tương phản nhẹ ("đơn giản mà hiệu quả") → **yet**. for và so (nghĩa "vì vậy") chỉ nối hai mệnh đề, còn nor cần một vế phủ định đi trước.',
        en: 'The blank joins two ADJECTIVES, **simple** and **effective**, with a light contrast ("simple but effective") → **yet**. for and so (meaning "therefore") join only clauses, and nor needs a negative before it.',
      },
      translation: 'Khách hàng nhận xét trang thanh toán được thiết kế lại đơn giản mà hiệu quả, và số đơn hàng trực tuyến đã tăng kể từ khi ra mắt.',
    },
    {
      sentence: 'The printer on the third floor is being repaired, ------- employees should use the one near the reception desk until Friday.',
      options: ['therefore', 'consequently', 'so', 'however'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống đứng sau **dấu phẩy** và trước một mệnh đề hoàn chỉnh (employees should use…), nên phải là liên từ kết hợp **so** (vì vậy). therefore và consequently cùng nghĩa nhưng là trạng từ liên kết, không nối hai mệnh đề bằng dấu phẩy được; however còn sai cả về nghĩa.',
        en: 'The blank follows a **comma** and comes before a full clause (employees should use…), so it needs the coordinating conjunction **so**. therefore and consequently mean the same but are conjunctive adverbs and cannot join two clauses with just a comma; however is also wrong in meaning.',
      },
      translation: 'Máy in ở tầng ba đang được sửa, vì vậy nhân viên nên dùng máy in gần quầy lễ tân cho đến thứ Sáu.',
    },
    {
      sentence: 'All visitors must sign in at the security desk; -------, they will not be allowed past the lobby.',
      options: ['otherwise', 'moreover', 'therefore', 'however'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống đứng sau **dấu chấm phẩy** và trước dấu phẩy → cần trạng từ liên kết. Nghĩa: phải đăng ký ở quầy an ninh, NẾU KHÔNG sẽ không được vào → **otherwise**. therefore và however không hợp logic, còn moreover chỉ thêm một ý cùng chiều.',
        en: 'The blank follows a **semicolon** and comes before a comma → a conjunctive adverb is needed. Meaning: visitors must sign in; IF NOT, they will be refused entry → **otherwise**. therefore and however make no sense here, and moreover merely adds a similar point.',
      },
      translation: 'Tất cả khách đến thăm phải đăng ký tại quầy an ninh; nếu không, họ sẽ không được phép đi qua khu vực sảnh.',
    },
    {
      sentence: 'The revised refund policy, -------, does not apply to items purchased during the clearance sale.',
      options: ['but', 'yet', 'so', 'however'],
      answer: 3,
      explanation: {
        vi: 'Chỗ trống nằm giữa **hai dấu phẩy**, chen giữa chủ ngữ (The revised refund policy) và động từ (does not apply). Chỉ trạng từ liên kết như **however** chen được vào vị trí này; but, yet, so là liên từ, phải đứng giữa hai vế mà chúng nối.',
        en: 'The blank sits between **two commas**, splitting the subject (The revised refund policy) from the verb (does not apply). Only a conjunctive adverb like **however** can be inserted there; but, yet and so are conjunctions and must stand between the parts they join.',
      },
      translation: 'Tuy nhiên, chính sách hoàn tiền mới sửa đổi không áp dụng cho các mặt hàng mua trong đợt bán thanh lý.',
    },
  ],
};
