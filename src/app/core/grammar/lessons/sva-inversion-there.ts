import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-inversion-there',
  intro: {
    vi: 'Bài này dạy cách chia động từ khi chủ ngữ thật đứng SAU động từ: cấu trúc **There + be**, câu đảo mở đầu bằng **Attached / Enclosed / Included** hoặc cụm nơi chốn, và động từ trong mệnh đề quan hệ sau **one of the … who**. Ở Part 5 và Part 6, đây là những câu chọn is/are, has/have rất dễ sai vì danh từ đứng sát chỗ trống lại không phải chủ ngữ.',
    en: 'This lesson shows how to choose the verb when the real subject comes AFTER it: **There + be**, inverted sentences opening with **Attached / Enclosed / Included** or a place phrase, and the verb in a relative clause after **one of the … who**. In Part 5 and Part 6 these is/are, has/have items are easy to miss because the noun right next to the blank is not the subject.',
  },
  mistakes: [
    {
      wrong: 'There [[has]] a staff meeting in Conference Room B every Monday.',
      right: 'There [[is]] a staff meeting in Conference Room B every Monday.',
      explanation: {
        vi: 'Tiếng Việt nói "có một cuộc họp", nhưng tiếng Anh diễn đạt "có" bằng **There + be**, không dùng have/has. Danh từ phía sau là **a staff meeting** (số ít) nên dùng **is**.',
        en: 'English expresses existence with **There + be**, never with have/has (a common slip when translating from Vietnamese). The noun after it, **a staff meeting**, is singular, so use **is**.',
      },
    },
    {
      wrong: 'There [[is]] several reasons why the shipment was delayed.',
      right: 'There [[are]] several reasons why the shipment was delayed.',
      explanation: {
        vi: '**There** chỉ là chủ ngữ giả. Chủ ngữ thật là **several reasons** đứng sau động từ, số nhiều → **are**.',
        en: '**There** is only a dummy subject. The real subject is **several reasons**, which follows the verb and is plural → **are**.',
      },
    },
    {
      wrong: 'Attached [[is]] the revised floor plans for the new branch office.',
      right: 'Attached [[are]] the revised floor plans for the new branch office.',
      explanation: {
        vi: 'Trong câu đảo mở đầu bằng **Attached**, chủ ngữ là cụm đứng sau động từ: **the revised floor plans** (số nhiều) → **are**.',
        en: 'In an inverted sentence that opens with **Attached**, the subject is the phrase after the verb: **the revised floor plans** (plural) → **are**.',
      },
    },
    {
      wrong: 'Among the guests at the gala [[was]] two members of the city council.',
      right: 'Among the guests at the gala [[were]] two members of the city council.',
      explanation: {
        vi: 'Sau cụm mở đầu **Among the guests at the gala**, chủ ngữ thật là **two members** đứng sau động từ → **were**. Danh từ trong cụm giới từ (guests, gala) không bao giờ là chủ ngữ.',
        en: 'After the opening phrase **Among the guests at the gala**, the real subject is **two members**, placed after the verb → **were**. A noun inside a prepositional phrase (guests, gala) is never the subject.',
      },
    },
    {
      wrong: 'Mr. Tanaka is one of the engineers who [[has]] designed the new assembly line.',
      right: 'Mr. Tanaka is one of the engineers who [[have]] designed the new assembly line.',
      explanation: {
        vi: '**who** thay cho **the engineers** (số nhiều), không thay cho one: nhiều kỹ sư đã thiết kế, ông Tanaka là một trong số đó. Vì vậy động từ trong mệnh đề quan hệ chia số nhiều: **have** designed.',
        en: '**who** refers to **the engineers** (plural), not to one: several engineers did the design and Mr. Tanaka is one of them. So the verb in the relative clause is plural: **have** designed.',
      },
    },
  ],
  theory: [
    {
      heading: {
        vi: 'There + be: động từ theo danh từ đứng SAU',
        en: 'There + be: the verb agrees with the noun AFTER it',
      },
      body: {
        vi: '**There** chỉ là chủ ngữ giả, bản thân nó không có số ít hay số nhiều. Chủ ngữ thật là cụm danh từ đứng SAU động từ, nên muốn chọn is hay are thì phải nhìn về phía sau chỗ trống chứ không nhìn về phía trước.',
        en: '**There** is only a dummy subject and has no number of its own. The real subject is the noun phrase AFTER the verb, so to choose between is and are you must look past the blank, not before it.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Danh từ theo sau', en: 'Noun that follows' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'There is / There was',
            { vi: 'Số ít hoặc không đếm được', en: 'Singular or uncountable' },
            'There is a shuttle bus to the airport every hour.',
          ],
          ['There are / There were', { vi: 'Số nhiều', en: 'Plural' }, 'There were forty applicants for the position.'],
          [
            'There has been',
            { vi: 'Số ít hoặc không đếm được', en: 'Singular or uncountable' },
            'There has been a change to the meeting schedule.',
          ],
          ['There have been', { vi: 'Số nhiều', en: 'Plural' }, 'There have been two power outages this week.'],
          [
            'There will be / There may be',
            {
              vi: 'Số ít hoặc số nhiều: be sau động từ khuyết thiếu giữ nguyên',
              en: 'Singular or plural: be stays the same after a modal',
            },
            'There will be three workshops in the afternoon.',
          ],
        ],
      },
      examples: [
        {
          en: 'There **are** two new openings in the accounting department.',
          vi: 'Phòng kế toán đang có hai vị trí mới cần tuyển.',
        },
        {
          en: 'There **has been** a slight delay in processing refund requests.',
          vi: 'Việc xử lý các yêu cầu hoàn tiền đã bị chậm trễ đôi chút.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng dịch "có" thành **have/has**: "There have a meeting today" là câu sai, phải nói **There is a meeting today**. **There have been** chỉ đúng khi đó là thì Present Perfect của be và theo sau là danh từ số nhiều.',
          en: 'Do not use **have/has** to mean "there is": "There have a meeting today" is wrong; say **There is a meeting today**. **There have been** is correct only as the Present Perfect of be, followed by a plural noun.',
        },
      },
    },
    {
      heading: {
        vi: 'Danh từ không đếm được, lượng từ và cụm danh từ dài sau There',
        en: 'Uncountable nouns, quantifiers and long noun phrases after There',
      },
      points: [
        {
          vi: 'Danh từ không đếm được (**equipment, information, furniture, luggage, feedback, research, merchandise**) luôn đi với động từ số ít: There **is** some new information about the merger.',
          en: 'Uncountable nouns (**equipment, information, furniture, luggage, feedback, research, merchandise**) always take a singular verb: There **is** some new information about the merger.',
        },
        {
          vi: 'Với **a lot of / lots of / plenty of**, động từ theo danh từ đứng sau: There **is** a lot of paperwork, nhưng There **are** a lot of forms. (Các lượng từ khác như some, no, none of: bài 3.3.)',
          en: 'With **a lot of / lots of / plenty of**, the verb follows the noun after them: There **is** a lot of paperwork, but There **are** a lot of forms. (Other quantifiers such as some, no, none of: lesson 3.3.)',
        },
        {
          vi: 'Với cụm "danh từ + of + danh từ", động từ theo danh từ ĐẦU (danh từ chính), không theo danh từ sau of: There **is** a box of samples at reception, nhưng There **are** two boxes of samples at reception. Các lượng từ như a lot of ở ý trên là ngoại lệ. (Quy tắc danh từ chính: bài 3.2.)',
          en: 'In a "noun + of + noun" phrase, the verb follows the FIRST noun (the head noun), not the noun after of: There **is** a box of samples at reception, but There **are** two boxes of samples at reception. Quantifiers such as a lot of in the point above are the exception. (Head-noun rule: lesson 3.2.)',
        },
        {
          vi: '**There seem(s) to be / There appear(s) to be**: seem và appear cũng hoà hợp với danh từ phía sau: There **seem** to be two errors in this invoice.',
          en: '**There seem(s) to be / There appear(s) to be**: seem and appear also agree with the noun that follows: There **seem** to be two errors in this invoice.',
        },
      ],
      examples: [
        {
          en: 'There **is** still a great deal of interest in the downtown property.',
          vi: 'Hiện vẫn có rất nhiều người quan tâm đến bất động sản ở khu trung tâm.',
        },
        {
          en: "There **appears** to be a problem with the hotel's booking system.",
          vi: 'Dường như hệ thống đặt phòng của khách sạn đang gặp sự cố.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Khi sau There là một chuỗi danh từ nối bằng and, người bản ngữ thường hoà hợp động từ với danh từ ĐẦU TIÊN: There **is** a printer and two scanners on this floor. Dạng are cũng có người dùng, và đề TOEIC hầu như không hỏi trường hợp này.',
          en: 'When a list joined by and follows There, native speakers often make the verb agree with the FIRST noun: There **is** a printer and two scanners on this floor. Some writers use are instead, and TOEIC hardly ever tests this case.',
        },
      },
    },
    {
      heading: {
        vi: 'Câu đảo trong thư: Attached / Enclosed / Included…',
        en: 'Inversion in letters: Attached / Enclosed / Included…',
      },
      body: {
        vi: 'Trong e-mail và thư công việc, người viết hay đưa quá khứ phân từ (V3) hoặc cụm tính từ lên đầu câu để nhấn mạnh: **Attached / Enclosed / Included / Listed below** + be + CHỦ NGỮ THẬT. Thực chất đây là câu bình thường bị đảo trật tự: "The agenda is attached" → "Attached is the agenda", nên be vẫn chia theo chủ ngữ đứng sau nó.',
        en: 'In e-mails and business letters, writers often move a past participle or adjective phrase to the front for emphasis: **Attached / Enclosed / Included / Listed below** + be + REAL SUBJECT. It is an ordinary sentence in reverse order: "The agenda is attached" → "Attached is the agenda", so be still agrees with the subject that follows it.',
      },
      table: {
        head: [
          { vi: 'Câu đảo', en: 'Inverted sentence' },
          { vi: 'Chủ ngữ thật', en: 'Real subject' },
          { vi: 'Trật tự thường', en: 'Normal order' },
        ],
        rows: [
          ['Attached is the agenda for Monday.', 'the agenda → is', 'The agenda for Monday is attached.'],
          [
            'Enclosed are two vouchers for the hotel spa.',
            'two vouchers → are',
            'Two vouchers for the hotel spa are enclosed.',
          ],
          [
            'Included in the price are two breakfast coupons.',
            'two breakfast coupons → are',
            'Two breakfast coupons are included in the price.',
          ],
          ['Listed below are the new office hours.', 'the new office hours → are', 'The new office hours are listed below.'],
          [
            'Also attached is a copy of the invoices.',
            'a copy (of the invoices) → is',
            'A copy of the invoices is also attached.',
          ],
          [
            'Available on request is a full price list.',
            'a full price list → is',
            'A full price list is available on request.',
          ],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: '**Attached please find… / Please find attached… / Attached you will find…** không phải câu đảo: please find là câu mệnh lệnh, còn you will find đã có chủ ngữ you. Trong các câu này không có is/are nào cần chia.',
          en: '**Attached please find… / Please find attached… / Attached you will find…** are not inversions: please find is an imperative, and you will find already has the subject you. There is no is/are to choose in these sentences.',
        },
      },
    },
    {
      heading: {
        vi: 'Đảo ngữ sau cụm trạng từ nơi chốn',
        en: 'Inversion after a place adverbial',
      },
      body: {
        vi: 'Khi câu mở đầu bằng cụm chỉ nơi chốn (**Here, On the top floor, Next to the lobby, Across the street, Among the guests**…), động từ có thể đứng TRƯỚC chủ ngữ. Động từ hoà hợp với danh từ đứng sau nó, không phải với danh từ nằm trong cụm nơi chốn.',
        en: 'When a sentence opens with a place phrase (**Here, On the top floor, Next to the lobby, Across the street, Among the guests**…), the verb can come BEFORE the subject. The verb agrees with the noun after it, not with the noun inside the place phrase.',
      },
      points: [
        {
          vi: 'Động từ hay gặp trong kiểu đảo này: **be, stand, sit, lie, hang, come**: Across the street **stands** the new convention center.',
          en: 'Verbs typically used in this pattern: **be, stand, sit, lie, hang, come**: Across the street **stands** the new convention center.',
        },
        {
          vi: '**Here** cũng gây đảo khi chủ ngữ là danh từ: Here **are** the keys to your office.',
          en: '**Here** also triggers inversion when the subject is a noun: Here **are** the keys to your office.',
        },
        {
          vi: 'Chỉ đảo khi chủ ngữ là danh từ. Nếu chủ ngữ là đại từ thì giữ trật tự thường: Here **it is**, Here **they are** (không nói "Here is it").',
          en: 'Inversion happens only with a noun subject. With a pronoun subject, keep normal order: Here **it is**, Here **they are** (not "Here is it").',
        },
      ],
      examples: [
        {
          en: 'On the top floor of the building **are** the offices of the senior partners.',
          vi: 'Trên tầng cao nhất của toà nhà là văn phòng của các đối tác cấp cao.',
        },
        {
          en: 'Among the guests at the product launch **was** the mayor of Fairview.',
          vi: 'Trong số khách mời tại buổi ra mắt sản phẩm có ngài thị trưởng thành phố Fairview.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Cụm nơi chốn thường kết thúc bằng một danh từ nằm sát chỗ trống (như the building ở ví dụ trên). Đây chính là bẫy: danh từ đứng sau giới từ không bao giờ là chủ ngữ. Bỏ qua cả cụm, chia động từ theo danh từ đứng SAU chỗ trống.',
          en: 'A place phrase often ends with a noun right next to the blank (like the building in the example above). That is the trap: a noun after a preposition is never the subject. Skip the whole phrase and agree the verb with the noun AFTER the blank.',
        },
      },
    },
    {
      heading: {
        vi: 'Động từ trong mệnh đề quan hệ: one of the … who',
        en: 'The verb in a relative clause: one of the … who',
      },
      body: {
        vi: 'Động từ sau **who / which / that** hoà hợp với tiền ngữ, tức danh từ mà đại từ quan hệ thay thế (quy tắc chung ở bài 12.2). Đề TOEIC hay gài bẫy ở cụm **one of the + danh từ số nhiều + who/that**: tiền ngữ là danh từ số nhiều chứ không phải one. Còn động từ CHÍNH của câu mở đầu bằng One of the… thì vẫn số ít (bài 3.3).',
        en: 'The verb after **who / which / that** agrees with its antecedent, the noun the relative pronoun stands for (general rule in lesson 12.2). TOEIC likes to set a trap with **one of the + plural noun + who/that**: the antecedent is the plural noun, not one. The MAIN verb of a sentence that starts with One of the… is still singular (lesson 3.3).',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Tiền ngữ của who/that', en: 'Antecedent of who/that' },
          { vi: 'Động từ trong mệnh đề quan hệ', en: 'Verb in the relative clause' },
        ],
        rows: [
          [
            'one of the employees who …',
            {
              vi: 'the employees (số nhiều): nhiều người làm việc đó, người này là một trong số họ',
              en: 'the employees (plural): several people do it, and this person is one of them',
            },
            'are / have / work',
          ],
          [
            'the only one of the employees who …',
            {
              vi: 'the only one (số ít): chỉ một người duy nhất làm việc đó',
              en: 'the only one (singular): just one person does it',
            },
            'is / has / works',
          ],
          [
            'one of the products that …',
            { vi: 'the products (số nhiều)', en: 'the products (plural)' },
            'are / have / sell',
          ],
        ],
      },
      examples: [
        {
          en: 'Ms. Huang is one of the managers who **have** completed the leadership program.',
          vi: 'Bà Huang là một trong những quản lý đã hoàn thành chương trình đào tạo lãnh đạo.',
        },
        {
          en: 'Ms. Huang is the only one of the managers who **has** completed the leadership program.',
          vi: 'Bà Huang là quản lý duy nhất đã hoàn thành chương trình đào tạo lãnh đạo.',
        },
        {
          en: 'One of the printers that **are** on the third floor **is** out of order.',
          vi: 'Một trong những chiếc máy in ở tầng ba đang bị hỏng.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong văn nói, người bản ngữ đôi khi nói "one of the people who is…", nhưng trong văn viết chuẩn và trong đề TOEIC, động từ chia theo danh từ số nhiều. Mẹo kiểm tra: đổi câu thành "Of the managers who have completed the program, Ms. Huang is one."',
          en: 'In speech, native speakers sometimes say "one of the people who is…", but standard written English and TOEIC use the plural verb. A quick check: rephrase as "Of the managers who have completed the program, Ms. Huang is one."',
        },
      },
    },
    {
      heading: { vi: 'Cách xử lý dạng này trong Part 5', en: 'How to attack these items in Part 5' },
      points: [
        {
          vi: 'Chỗ trống là is/are, has/have, was/were và câu mở đầu bằng **There, Here, Attached, Enclosed, Included** hoặc một cụm nơi chốn → chủ ngữ nằm SAU chỗ trống, đừng nhìn về phía trước.',
          en: 'The blank is is/are, has/have or was/were and the sentence opens with **There, Here, Attached, Enclosed, Included** or a place phrase → the subject is AFTER the blank; do not look backwards.',
        },
        {
          vi: 'Tìm danh từ chính của cụm phía sau: a list of the hotels → **list** (số ít). Danh từ không đếm được → số ít.',
          en: 'Find the head noun of the phrase that follows: a list of the hotels → **list** (singular). An uncountable noun → singular.',
        },
        {
          vi: 'Có **since, for the past…, over the past…, so far** → chọn has been/have been trước, rồi mới xét số ít hay số nhiều.',
          en: 'If you see **since, for the past…, over the past…, so far** → narrow it to has been/have been first, then decide singular or plural.',
        },
        {
          vi: 'Chỗ trống ngay sau who/which/that → tìm tiền ngữ: **one of the + danh từ số nhiều** → số nhiều; **the only one of** → số ít. Đại từ their/its phía sau cũng là dấu hiệu.',
          en: 'A blank right after who/which/that → find the antecedent: **one of the + plural noun** → plural; **the only one of** → singular. A later their/its is another clue.',
        },
        {
          vi: 'Loại ngay have/has đứng một mình sau There (There have a…), và loại V-ing (being, having) vì chỗ trống cần một động từ đã chia.',
          en: 'Eliminate have/has standing alone after There (There have a…) and V-ing forms (being, having), because the blank needs a finite verb.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'There ------- still some unused office equipment in the storage room on the third floor.',
      options: ['is', 'are', 'have', 'were'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ thật đứng sau động từ là **equipment**, danh từ không đếm được nên luôn số ít → **is**. are và were là số nhiều; have không dùng sau There để nói "có".',
        en: 'The real subject after the verb is **equipment**, an uncountable noun, so it is always singular → **is**. are and were are plural; have is never used after There to express existence.',
      },
      translation: 'Vẫn còn một số thiết bị văn phòng chưa dùng đến trong phòng kho ở tầng ba.',
    },
    {
      sentence: 'Since the online booking system was introduced, there ------- fewer complaints about double reservations.',
      options: ['has been', 'have been', 'was', 'is'],
      answer: 1,
      explanation: {
        vi: '**Since** + mốc quá khứ báo hiệu thì Present Perfect, và chủ ngữ thật **fewer complaints** là số nhiều → **have been**. has been sai số; was và is vừa sai thì vừa sai số.',
        en: '**Since** + a past point signals the Present Perfect, and the real subject **fewer complaints** is plural → **have been**. has been has the wrong number; was and is have the wrong tense and number.',
      },
      translation: 'Kể từ khi hệ thống đặt phòng trực tuyến được đưa vào sử dụng, số khiếu nại về việc đặt phòng trùng đã giảm đi.',
    },
    {
      sentence: 'Over the past two quarters, there ------- a noticeable drop in the number of items returned by customers.',
      options: ['have been', 'are', 'has been', 'were'],
      answer: 2,
      explanation: {
        vi: '**Over the past two quarters** cần thì Present Perfect. Chủ ngữ thật là **a noticeable drop** (số ít), còn items chỉ nằm trong cụm of phía sau → **has been**. have been là bẫy cho ai nhìn vào items.',
        en: '**Over the past two quarters** calls for the Present Perfect. The real subject is **a noticeable drop** (singular); items sits inside the of-phrase → **has been**. have been is the trap for anyone who looks at items.',
      },
      translation: 'Trong hai quý vừa qua, số lượng hàng bị khách trả lại đã giảm rõ rệt.',
    },
    {
      sentence: 'Attached ------- copies of the receipts you need to submit with your travel expense report.',
      options: ['is', 'has', 'was', 'are'],
      answer: 3,
      explanation: {
        vi: 'Câu đảo mở đầu bằng **Attached**: chủ ngữ thật là **copies** (số nhiều) đứng sau chỗ trống → **are**. is và was là số ít; has không tạo được cấu trúc này.',
        en: 'This inverted sentence opens with **Attached**: the real subject is **copies** (plural), which follows the blank → **are**. is and was are singular; has cannot form this structure.',
      },
      translation: 'Đính kèm là bản sao các biên lai mà bạn cần nộp cùng báo cáo chi phí công tác.',
    },
    {
      sentence: 'Enclosed ------- a list of the hotels that offer discounted rates to conference participants.',
      options: ['are', 'is', 'were', 'have'],
      answer: 1,
      explanation: {
        vi: 'Sau **Enclosed**, chủ ngữ thật là **a list** (số ít); the hotels và participants chỉ là phần bổ nghĩa → **is**. are là bẫy cho ai chia động từ theo hotels.',
        en: 'After **Enclosed**, the real subject is **a list** (singular); the hotels and participants are only modifiers → **is**. are traps anyone who makes the verb agree with hotels.',
      },
      translation: 'Gửi kèm theo đây là danh sách các khách sạn có giá ưu đãi cho người tham dự hội nghị.',
    },
    {
      sentence: 'Included in the monthly rent ------- all utilities except high-speed internet service.',
      options: ['is', 'are', 'has', 'was'],
      answer: 1,
      explanation: {
        vi: 'Cấu trúc **Included in the monthly rent** + be + chủ ngữ. Chủ ngữ thật là **all utilities** (số nhiều) → **are**. internet service đứng sau except, không phải chủ ngữ, nên is và was đều sai.',
        en: 'Pattern: **Included in the monthly rent** + be + subject. The real subject is **all utilities** (plural) → **are**. internet service comes after except and is not the subject, so is and was are wrong.',
      },
      translation: 'Tiền thuê hằng tháng đã bao gồm mọi khoản phí tiện ích, trừ dịch vụ internet tốc độ cao.',
    },
    {
      sentence: 'Next to the elevators on each floor ------- a small kitchen that employees may use during breaks.',
      options: ['are', 'were', 'is', 'have'],
      answer: 2,
      explanation: {
        vi: 'Câu mở đầu bằng cụm nơi chốn **Next to the elevators on each floor**, nên chủ ngữ đứng sau động từ: **a small kitchen** (số ít) → **is**. are là bẫy vì elevators số nhiều đứng trước chỗ trống.',
        en: 'The sentence opens with the place phrase **Next to the elevators on each floor**, so the subject follows the verb: **a small kitchen** (singular) → **is**. are is the trap set by the plural elevators before the blank.',
      },
      translation: 'Cạnh thang máy ở mỗi tầng có một gian bếp nhỏ mà nhân viên có thể sử dụng trong giờ nghỉ.',
    },
    {
      sentence: 'Among the items damaged during shipping ------- two of the display cabinets ordered by our Osaka store.',
      options: ['were', 'was', 'has', 'is'],
      answer: 0,
      explanation: {
        vi: 'Sau cụm mở đầu **Among the items damaged during shipping**, chủ ngữ thật đứng sau động từ là **two (of the display cabinets)**, số nhiều → **were**, động từ số nhiều duy nhất trong bốn lựa chọn. was là bẫy cho ai chia theo **shipping** (số ít) đứng sát chỗ trống; is và has cũng đều số ít.',
        en: 'After the opening phrase **Among the items damaged during shipping**, the real subject after the verb is **two (of the display cabinets)**, which is plural → **were**, the only plural verb among the options. was traps anyone who agrees the verb with **shipping** (singular), right before the blank; is and has are singular too.',
      },
      translation: 'Trong số các mặt hàng bị hư hỏng khi vận chuyển có hai chiếc tủ trưng bày mà cửa hàng Osaka của chúng tôi đã đặt.',
    },
    {
      sentence: 'Mr. Okafor is one of the sales representatives who ------- exceeded their targets for three consecutive quarters.',
      options: ['has', 'is', 'having', 'have'],
      answer: 3,
      explanation: {
        vi: '**who** thay cho **the sales representatives** (số nhiều), không thay cho one, nên động từ số nhiều → **have** exceeded; đại từ **their** phía sau xác nhận điều đó. has là bẫy cho ai nhìn vào one; having không làm động từ của mệnh đề được.',
        en: '**who** refers to **the sales representatives** (plural), not to one, so the verb is plural → **have** exceeded; the later **their** confirms it. has traps anyone who looks at one; having cannot be the verb of the clause.',
      },
      translation: 'Ông Okafor là một trong những nhân viên kinh doanh đã vượt chỉ tiêu ba quý liên tiếp.',
    },
    {
      sentence: 'Ms. Lindqvist is the only one of the applicants who ------- fluent in both Mandarin and Spanish.',
      options: ['is', 'are', 'be', 'being'],
      answer: 0,
      explanation: {
        vi: 'Với **the only one of the applicants who**, tiền ngữ của who là **the only one** (một người duy nhất) → số ít **is**. are chỉ đúng nếu câu là "one of the applicants who…".',
        en: 'In **the only one of the applicants who**, the antecedent of who is **the only one** (a single person) → singular **is**. are would be right only in "one of the applicants who…".',
      },
      translation: 'Cô Lindqvist là ứng viên duy nhất thông thạo cả tiếng Quan Thoại lẫn tiếng Tây Ban Nha.',
    },
  ],
};
