import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-quantifiers',
  intro: {
    vi: 'Khi chủ ngữ mở đầu bằng một từ chỉ số lượng (each, one of, a number of, most of, none of…), động từ chia số ít hay số nhiều không còn hiển nhiên nữa, và Part 5, Part 6 rất hay đặt bẫy ở đây. Bài này cho bạn biết lượng từ nào luôn đi với động từ số ít, lượng từ nào đi với số nhiều, và lượng từ nào để **danh từ sau of** quyết định.',
    en: 'When a subject starts with a quantifier (each, one of, a number of, most of, none of...), it is no longer obvious whether the verb is singular or plural, and Part 5 and Part 6 love to set traps here. This lesson shows which quantifiers always take a singular verb, which take a plural verb, and which let the **noun after of** decide.',
  },
  mistakes: [
    {
      wrong: 'Each of the shortlisted candidates [[have]] submitted a portfolio.',
      right: 'Each of the shortlisted candidates [[has]] submitted a portfolio.',
      explanation: {
        vi: 'Chủ ngữ thật là **Each**, không phải **candidates**. **Each of the + danh từ số nhiều** luôn đi với động từ số ít → **has**.',
        en: 'The real subject is **Each**, not **candidates**. **Each of the + plural noun** always takes a singular verb → **has**.',
      },
    },
    {
      wrong: 'One of the printers on the third floor [[need]] new toner.',
      right: 'One of the printers on the third floor [[needs]] new toner.',
      explanation: {
        vi: 'Trong **one of the + danh từ số nhiều**, chủ ngữ là **one** nên động từ chia số ít → **needs**. Danh từ printers chỉ cho biết đó là "một trong số những cái nào".',
        en: 'In **one of the + plural noun**, the subject is **one**, so the verb is singular → **needs**. The noun printers only tells us "one out of which group".',
      },
    },
    {
      wrong: 'The number of late deliveries [[have]] fallen this quarter.',
      right: 'The number of late deliveries [[has]] fallen this quarter.',
      explanation: {
        vi: '**The number of** nghĩa là "con số, số lượng"; một con số thì chia số ít → **has fallen**. Chỉ **a number of** (= many) mới đi với động từ số nhiều.',
        en: '**The number of** means "the figure, the count"; one figure takes a singular verb → **has fallen**. Only **a number of** (= many) takes a plural verb.',
      },
    },
    {
      wrong: 'A number of tenants [[has]] complained about the noise from the construction site.',
      right: 'A number of tenants [[have]] complained about the noise from the construction site.',
      explanation: {
        vi: '**A number of** là cách nói khác của **many** (nhiều), nên chủ ngữ mang nghĩa số nhiều → **have complained**.',
        en: '**A number of** is another way of saying **many**, so the subject is plural → **have complained**.',
      },
    },
    {
      wrong: 'Sixty percent of the marketing budget [[have]] already been spent.',
      right: 'Sixty percent of the marketing budget [[has]] already been spent.',
      explanation: {
        vi: 'Với **percent of**, động từ chia theo danh từ đứng sau **of**. **budget** là danh từ số ít → **has**.',
        en: 'With **percent of**, the verb agrees with the noun after **of**. **budget** is a singular noun → **has**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Each, every, either, neither: luôn số ít', en: 'Each, every, either, neither: always singular' },
      body: {
        vi: 'Bốn từ này nhìn sự vật **từng cái một**, nên động từ đi sau chúng chia số ít, kể cả khi theo sau là **of the + danh từ số nhiều**. Danh từ số nhiều đứng sát động từ chỉ là phần bổ sung; chủ ngữ thật vẫn là each, either hay neither.',
        en: 'These four words look at things **one at a time**, so the verb after them is singular, even when they are followed by **of the + plural noun**. The plural noun next to the verb is only extra information; the real subject is still each, either or neither.',
      },
      points: [
        {
          vi: '**every** không đứng ngay trước **of**: phải nói **every one of the rooms**, không nói "every of the rooms". Cụm every one of cũng đi với động từ số ít.',
          en: '**every** cannot come directly before **of**: say **every one of the rooms**, not "every of the rooms". every one of also takes a singular verb.',
        },
        {
          vi: '**either** = một trong hai (cái nào cũng được), **neither** = không cái nào trong hai. Cả hai chỉ dùng khi nói về hai sự vật.',
          en: '**either** = one of the two (it does not matter which), **neither** = not one of the two. Both are used only when talking about two things.',
        },
      ],
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Động từ', en: 'Verb' },
        ],
        rows: [
          ['each / every + singular noun', 'Each room has a minibar.', { vi: 'Số ít', en: 'Singular' }],
          ['each of the + plural noun', 'Each of the rooms has a minibar.', { vi: 'Số ít', en: 'Singular' }],
          ['every one of the + plural noun', 'Every one of the rooms has a minibar.', { vi: 'Số ít', en: 'Singular' }],
          ['either / neither + singular noun', 'Neither room has a minibar.', { vi: 'Số ít', en: 'Singular' }],
          [
            'either / neither of the + plural noun',
            'Neither of the rooms has a minibar.',
            { vi: 'Số ít (văn viết, đáp án TOEIC)', en: 'Singular (formal writing, the TOEIC key)' },
          ],
        ],
      },
      examples: [
        {
          en: '**Each of the** sales associates **receives** a commission statement at the end of the month.',
          vi: 'Mỗi nhân viên bán hàng đều nhận bảng kê hoa hồng vào cuối tháng.',
        },
        {
          en: '**Neither** delivery **option is** available for addresses outside the city.',
          vi: 'Cả hai phương án giao hàng đều không áp dụng cho địa chỉ ngoài thành phố.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Hai trường hợp cần cẩn thận. (1) Khi **each** đứng SAU một chủ ngữ số nhiều, động từ chia theo chủ ngữ đó: The suites **each have** a private balcony. (2) Trong văn nói, người bản xứ đôi khi dùng động từ số nhiều sau **either of / neither of**, nhưng văn viết trang trọng và đáp án TOEIC dùng số ít.',
          en: 'Two cases need care. (1) When **each** comes AFTER a plural subject, the verb agrees with that subject: The suites **each have** a private balcony. (2) In speech, native speakers sometimes use a plural verb after **either of / neither of**, but formal writing and the TOEIC answer key use the singular.',
        },
      },
    },
    {
      heading: { vi: 'One of the + danh từ số nhiều: động từ số ít', en: 'One of the + plural noun: singular verb' },
      body: {
        vi: 'Trong cụm **one of the / our / these + danh từ số nhiều**, chủ ngữ thật là **one**, nên động từ chia số ít. Đồng thời, danh từ sau **one of** phải ở số nhiều, vì "một trong số" thì phải chọn ra từ nhiều cái. Đề có thể kiểm tra một trong hai chỗ: động từ (has/have) hoặc danh từ (branch/branches).',
        en: 'In **one of the / our / these + plural noun**, the real subject is **one**, so the verb is singular. At the same time, the noun after **one of** must be plural, because "one of" picks one out of several. A question may test either spot: the verb (has/have) or the noun (branch/branches).',
      },
      examples: [
        {
          en: '**One** of our **branches** in Osaka **has** extended its opening hours.',
          vi: 'Một trong các chi nhánh của chúng tôi ở Osaka đã kéo dài giờ mở cửa.',
        },
        {
          en: '**One** of the **elevators** in the north tower **is** out of service until Friday.',
          vi: 'Một trong các thang máy ở tòa tháp phía bắc ngừng hoạt động đến thứ Sáu.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Cụm **one of the + danh từ số nhiều + who/that…** có thêm một động từ trong mệnh đề quan hệ, và động từ ấy theo một quy tắc khác. Phần này học ở bài 3.6.',
          en: 'In **one of the + plural noun + who/that...**, the verb inside the relative clause follows a different rule. That is covered in lesson 3.6.',
        },
      },
    },
    {
      heading: { vi: 'A number of và the number of', en: 'A number of vs. the number of' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Động từ', en: 'Verb' },
        ],
        rows: [
          [
            'a number of + plural noun',
            { vi: 'nhiều, một số (gần nghĩa many, several)', en: 'many, several' },
            { vi: 'Số nhiều', en: 'Plural' },
          ],
          [
            'the number of + plural noun',
            { vi: 'số lượng, con số', en: 'the figure, the count' },
            { vi: 'Số ít', en: 'Singular' },
          ],
        ],
      },
      examples: [
        {
          en: '**A number of** passengers **have** requested vegetarian meals on the return flight.',
          vi: 'Một số hành khách đã yêu cầu suất ăn chay trên chuyến bay về.',
        },
        {
          en: '**The number of** passengers **has** doubled since the airline added a daily flight to Singapore.',
          vi: 'Số lượng hành khách đã tăng gấp đôi kể từ khi hãng bay thêm một chuyến mỗi ngày đến Singapore.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo nhớ: **the number** chính là "con số", mà một con số thì số ít; còn **a number of** chỉ là cách nói khác của **many**, nên số nhiều. **The number of** hay đi với các động từ chỉ sự thay đổi như increase, rise, double, decline, fall.',
          en: 'Memory tip: **the number** is "the figure", and one figure is singular; **a number of** is just another way of saying **many**, so it is plural. **The number of** often goes with verbs of change such as increase, rise, double, decline and fall.',
        },
      },
    },
    {
      heading: {
        vi: 'All, most, some, half, percent…: nhìn danh từ sau of',
        en: 'All, most, some, half, percent...: look at the noun after of',
      },
      body: {
        vi: 'Với **all, most, some, half, part, a lot, the rest**, phân số (two-thirds, a quarter) và **percent**, bản thân lượng từ không quyết định số ít hay số nhiều. Động từ chia theo danh từ đứng sau **of**: danh từ số ít hoặc không đếm được → động từ số ít; danh từ số nhiều → động từ số nhiều.',
        en: 'With **all, most, some, half, part, a lot, the rest**, fractions (two-thirds, a quarter) and **percent**, the quantifier itself does not decide the number. The verb agrees with the noun after **of**: a singular or uncountable noun takes a singular verb; a plural noun takes a plural verb.',
      },
      points: [
        {
          vi: '**all, most, some, half** còn đứng thẳng trước danh từ, không cần of; quy tắc vẫn vậy: **Most employees are**…, **All information is**…, **Some equipment needs**…',
          en: '**all, most, some, half** can also come straight before a noun without of; the rule is the same: **Most employees are**..., **All information is**..., **Some equipment needs**...',
        },
        {
          vi: '**part of** thường đi với danh từ số ít hoặc không đếm được: **Part of the lobby is** closed for repairs.',
          en: '**part of** usually goes with a singular or uncountable noun: **Part of the lobby is** closed for repairs.',
        },
        {
          vi: '**percent** không thêm -s sau con số: forty percent, không viết "forty percents".',
          en: '**percent** takes no -s after a number: forty percent, not "forty percents".',
        },
      ],
      table: {
        head: [
          { vi: 'Lượng từ', en: 'Quantifier' },
          { vi: '+ danh từ số ít / không đếm được', en: '+ singular / uncountable noun' },
          { vi: '+ danh từ số nhiều', en: '+ plural noun' },
        ],
        rows: [
          ['all of the', 'All of the furniture is new.', 'All of the chairs are new.'],
          ['most of the', 'Most of the budget has been spent.', 'Most of the invoices have been paid.'],
          ['some of the', 'Some of the luggage was lost.', 'Some of the suitcases were lost.'],
          ['half of the', 'Half of the warehouse is empty.', 'Half of the shelves are empty.'],
          ['X percent of the', 'Thirty percent of the revenue comes from exports.', 'Thirty percent of the buyers come from Asia.'],
          ['the rest of the', 'The rest of the money goes to charity.', 'The rest of the tickets go on sale today.'],
        ],
      },
      examples: [
        {
          en: 'Two-thirds of the conference **budget has** already been allocated to the venue.',
          vi: 'Hai phần ba ngân sách hội nghị đã được phân bổ cho địa điểm tổ chức.',
        },
        {
          en: 'Most of the **applicants have** at least three years of experience in logistics.',
          vi: 'Phần lớn ứng viên có ít nhất ba năm kinh nghiệm trong ngành hậu cần.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy hay gặp: danh từ không đếm được mang nghĩa "nhiều thứ" như equipment, furniture, information, merchandise, luggage vẫn là danh từ số ít về mặt ngữ pháp → **Most of the merchandise is** on sale, không phải "are".',
          en: 'A common trap: uncountable nouns that refer to "many things", such as equipment, furniture, information, merchandise and luggage, are still grammatically singular → **Most of the merchandise is** on sale, not "are".',
        },
      },
    },
    {
      heading: { vi: 'None of, no/any + danh từ, many a', en: 'None of, no/any + noun, many a' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Động từ', en: 'Verb' },
        ],
        rows: [
          ['none of the + uncountable noun', 'None of the information was confidential.', { vi: 'Số ít', en: 'Singular' }],
          [
            'none of the + plural noun',
            'None of the samples was / were damaged.',
            { vi: 'Cả hai đều đúng; số ít trang trọng hơn', en: 'Both are correct; singular is more formal' },
          ],
          ['no / any + singular or uncountable noun', 'No deposit is required.', { vi: 'Số ít', en: 'Singular' }],
          ['no / any + plural noun', 'No pets are allowed in the guest rooms.', { vi: 'Số nhiều', en: 'Plural' }],
          [
            'many a + singular noun',
            'Many a client has praised our service.',
            { vi: 'Số ít (văn phong trang trọng)', en: 'Singular (formal style)' },
          ],
        ],
      },
      points: [
        {
          vi: '**no** và **any** không tự quyết định số ít hay số nhiều: động từ theo danh từ ngay sau chúng. Đừng nghĩ "no = không có gì" nên phải chia số ít: **No complaints have been received** mới đúng.',
          en: '**no** and **any** do not decide the number themselves: the verb follows the noun right after them. Do not assume "no = nothing" means singular: **No complaints have been received** is correct.',
        },
        {
          vi: '**many a** trông giống "many" nhưng luôn đi với danh từ số ít và động từ số ít. Cấu trúc này trang trọng và ít gặp, nhưng là một bẫy kinh điển.',
          en: '**many a** looks like "many" but always takes a singular noun and a singular verb. It is formal and rare, but a classic trap.',
        },
      ],
      examples: [
        {
          en: '**None of the equipment** in the clearance sale **comes** with a warranty.',
          vi: 'Không thiết bị nào trong đợt thanh lý có kèm bảo hành.',
        },
        {
          en: '**Any** unused **vacation days are** carried over to the following year.',
          vi: 'Mọi ngày nghỉ phép chưa dùng đều được chuyển sang năm sau.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Với **none of the + danh từ số nhiều**, cả động từ số ít lẫn số nhiều đều được chấp nhận trong tiếng Anh hiện đại, nên đề TOEIC hiếm khi bắt bạn chọn giữa hai dạng này. Nếu sau none of là danh từ không đếm được thì chắc chắn dùng số ít.',
          en: 'With **none of the + plural noun**, both singular and plural verbs are accepted in modern English, so the TOEIC rarely makes you choose between them. If the noun after none of is uncountable, the verb is definitely singular.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu hòa hợp với lượng từ trong Part 5', en: 'Attacking quantifier agreement in Part 5' },
      points: [
        {
          vi: 'Các lựa chọn là cùng một động từ ở dạng số ít và số nhiều (has/have, is/are, submits/submit) → tìm từ chỉ số lượng ở đầu chủ ngữ, đừng chỉ nhìn danh từ đứng sát chỗ trống.',
          en: 'The options are one verb in singular and plural forms (has/have, is/are, submits/submit) → find the quantifier at the start of the subject; do not just look at the noun next to the blank.',
        },
        {
          vi: 'Xếp lượng từ vào một trong ba nhóm: luôn số ít (each, every, either, neither, one of, the number of, many a); luôn số nhiều (a number of, cũng như many, several, few + danh từ số nhiều); nhìn danh từ phía sau (all, most, some, half, part, percent, phân số, the rest, none of, no/any).',
          en: 'Put the quantifier into one of three groups: always singular (each, every, either, neither, one of, the number of, many a); always plural (a number of, like many, several, few + plural noun); look at the noun that follows (all, most, some, half, part, percent, fractions, the rest, none of, no/any).',
        },
        {
          vi: 'Nếu chỗ trống nằm ở lượng từ (Each / Most / One…), làm ngược lại: xem động từ đang ở số ít hay số nhiều rồi chọn lượng từ khớp.',
          en: 'If the blank is the quantifier itself (Each / Most / One...), work backwards: check whether the verb is singular or plural, then pick the quantifier that fits.',
        },
        {
          vi: 'Loại các dạng không làm động từ chính được (V-ing, to V, quá khứ phân từ đứng một mình); nếu vẫn còn hai lựa chọn, xét thì dựa vào dấu hiệu thời gian.',
          en: 'Eliminate forms that cannot be the main verb (V-ing, to-infinitive, a past participle on its own); if two options remain, choose the tense from the time markers.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo nhanh: lấy tay che cụm "of the + danh từ" khi lượng từ thuộc nhóm luôn số ít, và che lượng từ khi nó thuộc nhóm "nhìn danh từ phía sau".',
          en: 'Quick trick: cover the "of the + noun" part when the quantifier is in the always-singular group, and cover the quantifier when it is in the look-at-the-noun group.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Each of the regional managers ------- a sales report to the head office by the fifth of every month.',
      options: ['submits', 'submit', 'submitting', 'to submit'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ bắt đầu bằng **Each of**, nên động từ chia số ít → **submits**. submit là dạng số nhiều, dễ bị chọn vì danh từ managers đứng sát chỗ trống; submitting và to submit không phải động từ chia.',
        en: 'The subject starts with **Each of**, so the verb is singular → **submits**. submit is the plural form, tempting because managers sits right before the blank; submitting and to submit are not finite verbs.',
      },
      translation: 'Mỗi quản lý khu vực đều nộp báo cáo doanh số cho trụ sở chính chậm nhất vào ngày mùng 5 hằng tháng.',
    },
    {
      sentence: 'All of the furniture in our new showroom ------- from small family workshops in northern Italy.',
      options: ['come', 'comes', 'coming', 'to come'],
      answer: 1,
      explanation: {
        vi: 'Với **All of**, động từ chia theo danh từ sau of: **furniture** là danh từ không đếm được, luôn số ít → **comes**. come là bẫy vì "all" và furniture gợi cảm giác "nhiều món đồ"; coming và to come không phải động từ chia.',
        en: 'With **All of**, the verb agrees with the noun after of: **furniture** is uncountable and always singular → **comes**. come is the trap because "all" and furniture suggest "many pieces"; coming and to come are not finite verbs.',
      },
      translation: 'Toàn bộ đồ nội thất trong phòng trưng bày mới của chúng tôi đều đến từ các xưởng gia đình nhỏ ở miền bắc nước Ý.',
    },
    {
      sentence: 'Neither hotel on our shortlist ------- a shuttle service to the convention center, so we will need to rent a bus.',
      options: ['provide', 'providing', 'provides', 'are providing'],
      answer: 2,
      explanation: {
        vi: '**Neither** + danh từ số ít (hotel) → động từ số ít **provides**. provide và are providing là dạng số nhiều; providing đứng một mình không làm động từ chính được.',
        en: '**Neither** + a singular noun (hotel) → the singular verb **provides**. provide and are providing are plural forms; providing on its own cannot be the main verb.',
      },
      translation: 'Cả hai khách sạn trong danh sách rút gọn của chúng tôi đều không có dịch vụ xe đưa đón đến trung tâm hội nghị, nên chúng tôi sẽ phải thuê xe buýt.',
    },
    {
      sentence: 'One of our largest ------- has agreed to extend the delivery deadline by two weeks.',
      options: ['supplier', 'suppliers', 'supply', 'supplied'],
      answer: 1,
      explanation: {
        vi: 'Sau **One of our** phải là danh từ số nhiều → **suppliers**; động từ has agreed chia số ít vì chủ ngữ thật là One. supplier và supply ở số ít nên không đứng sau one of được; supplied không phải danh từ.',
        en: 'After **One of our**, the noun must be plural → **suppliers**; the verb has agreed is singular because the real subject is One. supplier and supply are singular, so they cannot follow one of; supplied is not a noun.',
      },
      translation: 'Một trong những nhà cung cấp lớn nhất của chúng tôi đã đồng ý lùi hạn giao hàng thêm hai tuần.',
    },
    {
      sentence: "A number of guests ------- that the hotel's fitness center should stay open later on weekends.",
      options: ['has suggested', 'suggesting', 'to suggest', 'have suggested'],
      answer: 3,
      explanation: {
        vi: '**A number of** (= many) đi với danh từ số nhiều và động từ số nhiều → **have suggested**. has suggested là bẫy dành cho người nhầm với "the number of"; suggesting và to suggest không phải động từ chia.',
        en: '**A number of** (= many) takes a plural noun and a plural verb → **have suggested**. has suggested is the trap for anyone who confuses it with "the number of"; suggesting and to suggest are not finite verbs.',
      },
      translation: 'Một số khách đã đề nghị phòng tập thể dục của khách sạn mở cửa muộn hơn vào cuối tuần.',
    },
    {
      sentence: 'The number of online orders ------- steadily since the company redesigned its website last spring.',
      options: ['have risen', 'rising', 'to rise', 'has risen'],
      answer: 3,
      explanation: {
        vi: '**The number of** chỉ một con số → động từ số ít **has risen** (since cho biết cần thì hiện tại hoàn thành). have risen sai vì chia theo orders, trong khi chủ ngữ thật là The number.',
        en: '**The number of** refers to one figure → the singular verb **has risen** (since calls for the Present Perfect). have risen is wrong because it agrees with orders, while the real subject is The number.',
      },
      translation: 'Số lượng đơn hàng trực tuyến đã tăng đều đặn kể từ khi công ty thiết kế lại trang web vào mùa xuân năm ngoái.',
    },
    {
      sentence: 'Part of the shipment from Rotterdam ------- damaged during unloading, so the client has requested a partial refund.',
      options: ['was', 'were', 'being', 'been'],
      answer: 0,
      explanation: {
        vi: 'Với **Part of**, động từ chia theo danh từ sau of: **shipment** là danh từ số ít → **was**. were là dạng số nhiều; being và been đứng một mình không làm động từ chính được.',
        en: 'With **Part of**, the verb agrees with the noun after of: **shipment** is singular → **was**. were is plural; being and been cannot be the main verb on their own.',
      },
      translation: 'Một phần lô hàng từ Rotterdam đã bị hư hại trong lúc dỡ hàng, nên khách hàng đã yêu cầu hoàn tiền một phần.',
    },
    {
      sentence: 'About forty percent of our customers now ------- their orders through the mobile app instead of the website.',
      options: ['place', 'places', 'placing', 'to place'],
      answer: 0,
      explanation: {
        vi: 'Sau **percent of**, động từ theo danh từ đứng sau of: **customers** số nhiều → **place**. places sai vì coi "forty percent" là một khối số ít, trong khi danh từ quyết định là customers.',
        en: 'After **percent of**, the verb follows the noun after of: **customers** is plural → **place**. places is wrong because it treats "forty percent" as a singular unit, while the deciding noun is customers.',
      },
      translation: 'Khoảng bốn mươi phần trăm khách hàng của chúng tôi hiện đặt hàng qua ứng dụng di động thay vì trang web.',
    },
    {
      sentence: '------- of the laptops in the training room have been upgraded with the latest security software.',
      options: ['Each', 'One', 'Most', 'Every'],
      answer: 2,
      explanation: {
        vi: 'Động từ **have been** ở số nhiều, nên cần lượng từ để danh từ số nhiều laptops quyết định → **Most**. Each of và One of luôn đi với động từ số ít (has been); every không đứng ngay trước of.',
        en: 'The verb **have been** is plural, so we need a quantifier that lets the plural noun laptops decide → **Most**. Each of and One of always take a singular verb (has been); every cannot come directly before of.',
      },
      translation: 'Phần lớn máy tính xách tay trong phòng đào tạo đã được nâng cấp phần mềm bảo mật mới nhất.',
    },
    {
      sentence: 'No changes ------- been made to the contract since the client signed it in March.',
      options: ['has', 'having', 'have', 'to have'],
      answer: 2,
      explanation: {
        vi: 'Sau **No**, động từ chia theo danh từ: **changes** số nhiều → **have**. has là bẫy vì "no" nghe như "không có cái nào"; having và to have không phải động từ chia.',
        en: 'After **No**, the verb agrees with the noun: **changes** is plural → **have**. has is the trap because "no" sounds like "not a single one"; having and to have are not finite verbs.',
      },
      translation: 'Chưa có thay đổi nào được thực hiện đối với hợp đồng kể từ khi khách hàng ký vào tháng Ba.',
    },
  ],
};
