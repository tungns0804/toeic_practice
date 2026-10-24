import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'pronouns-reference',
  intro: {
    vi: 'Khi bốn lựa chọn là những đại từ khác số, khác loại (its / their, that / those, one / ones, another / others…), đề đang hỏi: chỗ trống **thay cho danh từ nào** và danh từ đó số ít hay số nhiều? Bài này dạy bạn tìm danh từ được thay thế, kỹ năng gặp thường xuyên ở Part 5 và nhất là Part 6, nơi danh từ gốc có thể nằm ở câu trước.',
    en: 'When the four options are pronouns that differ in number or type (its / their, that / those, one / ones, another / others...), the test is asking which **noun the blank replaces** and whether that noun is singular or plural. This lesson teaches you to find the noun being replaced, a skill tested often in Part 5 and especially in Part 6, where the original noun may sit in the previous sentence.',
  },
  mistakes: [
    {
      wrong: 'The museum has extended [[their]] opening hours for the summer season.',
      right: 'The museum has extended [[its]] opening hours for the summer season.',
      explanation: {
        vi: 'Đại từ phải hoà hợp số với danh từ nó thay. **The museum** là danh từ số ít chỉ vật, tổ chức → tính từ sở hữu **its**; **their** chỉ dùng cho danh từ số nhiều.',
        en: 'A pronoun must agree in number with the noun it replaces. **The museum** is a singular noun for a thing or organization → the possessive **its**; **their** is only for plural nouns.',
      },
    },
    {
      wrong: 'The prices at our new branch are lower than [[that]] at the main store.',
      right: 'The prices at our new branch are lower than [[those]] at the main store.',
      explanation: {
        vi: 'Từ thay thế trong phép so sánh phải khớp với danh từ đã nhắc: **prices** số nhiều → **those**. **that** chỉ thay cho danh từ số ít hoặc không đếm được.',
        en: 'The substitute in a comparison must match the noun already mentioned: plural **prices** → **those**. **that** only replaces a singular or uncountable noun.',
      },
    },
    {
      wrong: 'Everyone in the accounting department [[have]] received the new login details.',
      right: 'Everyone in the accounting department [[has]] received the new login details.',
      explanation: {
        vi: '**Everyone** mang nghĩa "tất cả mọi người" nhưng về ngữ pháp là số ít, nên động từ phải là **has**, không phải have.',
        en: '**Everyone** means "all the people", but grammatically it is singular, so the verb must be **has**, not have.',
      },
    },
    {
      wrong: 'The blue folders are sold out, but we still have some red [[one]].',
      right: 'The blue folders are sold out, but we still have some red [[ones]].',
      explanation: {
        vi: '**one / ones** thay cho danh từ đếm được và phải khớp số: **folders** số nhiều, lại có **some** đứng trước → **ones**. one là số ít, cần a đứng trước (a red one).',
        en: '**one / ones** replace a countable noun and must match its number: **folders** is plural and is preceded by **some** → **ones**. one is singular and would need a (a red one).',
      },
    },
    {
      wrong: 'We are also reviewing [[others]] suppliers in the region.',
      right: 'We are also reviewing [[other]] suppliers in the region.',
      explanation: {
        vi: '**others** là đại từ, luôn đứng một mình. Khi có danh từ số nhiều theo sau thì phải dùng **other** (other suppliers).',
        en: '**others** is a pronoun and always stands alone. Before a plural noun, use **other** (other suppliers).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Đại từ hoà hợp với danh từ nó thay thế', en: 'Agreement with the antecedent' },
      body: {
        vi: 'Đại từ ngôi thứ ba (it, its, they, them, their…) luôn thay cho một danh từ đã xuất hiện trước đó, gọi là **tiền ngữ**. Đại từ phải khớp với tiền ngữ về **số** (ít hay nhiều) và về loại (người hay vật). Ở Part 6, tiền ngữ có thể nằm ở câu trước, nên phải đọc ngược lên để tìm.',
        en: 'A third-person pronoun (it, its, they, them, their...) always replaces a noun that appeared earlier, called its **antecedent**. The pronoun must match the antecedent in **number** (singular or plural) and in type (person or thing). In Part 6 the antecedent may sit in the previous sentence, so read back to find it.',
      },
      table: {
        head: [
          { vi: 'Tiền ngữ', en: 'Antecedent' },
          { vi: 'Đại từ', en: 'Pronouns' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Danh từ số ít chỉ vật, nơi chốn, tổ chức', en: 'Singular noun for a thing, place or organization' },
            'it / its / itself',
            'The factory has doubled its output.',
          ],
          [
            { vi: 'Danh từ không đếm được', en: 'Uncountable noun' },
            'it / its / itself',
            'The new equipment was expensive, but it saves time.',
          ],
          [
            { vi: 'Danh từ số nhiều (người hoặc vật)', en: 'Plural noun (people or things)' },
            'they / them / their / themselves',
            'The tenants said their rent had risen.',
          ],
          [
            { vi: 'Một người, đã rõ giới tính', en: 'One person whose gender is known' },
            'he / him / his, she / her',
            'Mr. Okafor said he would sign the lease.',
          ],
          [
            { vi: 'Một người chưa rõ giới tính (a customer, each applicant)', en: 'One person of unknown gender (a customer, each applicant)' },
            'he or she, his or her / they, their',
            'Each applicant should bring his or her (their) ID.',
          ],
        ],
      },
      examples: [
        {
          en: 'Customers liked the new **phones** but complained about **their** battery life.',
          vi: 'Khách hàng thích những chiếc điện thoại mới nhưng phàn nàn về thời lượng pin của chúng.',
        },
        {
          en: '**Fenwick Logistics** announced that **it** will open a new depot and double **its** fleet next year.',
          vi: 'Fenwick Logistics thông báo sẽ mở thêm một kho bãi mới và tăng gấp đôi đội xe vào năm tới.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Tên công ty và danh từ chỉ tổ chức (the company, the firm, the bank, the hotel) là số ít dù bên trong có nhiều người → trong văn viết kiểu TOEIC dùng **it / its**, không dùng they / their. Đừng chọn đại từ theo danh từ đứng GẦN chỗ trống nhất: hãy hỏi "của ai, của cái gì?" rồi kiểm tra động từ của tiền ngữ (has → số ít, have → số nhiều). Danh từ tập hợp như staff, committee: xem bài 3.5.',
          en: 'Company names and organization nouns (the company, the firm, the bank, the hotel) are singular even though they contain many people → in TOEIC-style writing use **it / its**, not they / their. Do not pick the pronoun by the noun NEAREST the blank: ask "whose? of what?" and check the antecedent\'s verb (has → singular, have → plural). For collective nouns such as staff and committee, see lesson 3.5.',
        },
      },
    },
    {
      heading: { vi: 'that / those thay cho danh từ đã nhắc', en: 'that / those for a noun already mentioned' },
      body: {
        vi: 'Trong câu so sánh, tiếng Anh tránh lặp lại danh từ bằng cách dùng **that** (thay danh từ số ít hoặc không đếm được) và **those** (thay danh từ số nhiều). Theo sau that / those gần như luôn có một cụm bổ nghĩa: **of** + danh từ, một cụm giới từ khác, một quá khứ phân từ hoặc một mệnh đề quan hệ.',
        en: 'In comparisons, English avoids repeating a noun by using **that** (for a singular or uncountable noun) and **those** (for a plural noun). that / those are almost always followed by a modifier: **of** + noun, another prepositional phrase, a past participle or a relative clause.',
      },
      points: [
        {
          vi: 'Chọn that hay those theo danh từ ĐƯỢC THAY ở vế trước, không theo danh từ đứng sau of: The **rates** of Company A are lower than **those** of Company B.',
          en: 'Choose that or those by the noun BEING REPLACED in the first part, not by the noun after of: The **rates** of Company A are lower than **those** of Company B.',
        },
        {
          vi: 'Không dùng **it, them, this, these** trước of để thay danh từ: "higher than it of…", "lower than them of…" đều sai.',
          en: 'Do not use **it, them, this or these** before of to replace a noun: "higher than it of...", "lower than them of..." are both wrong.',
        },
        {
          vi: '**those who** + động từ số nhiều = những người mà (people who). Dạng rút gọn hay gặp: those interested, those attending, those present. Không viết "them who".',
          en: '**those who** + plural verb = people who. Common shortened forms: those interested, those attending, those present. Never write "them who".',
        },
      ],
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Thay cho', en: 'Replaces' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'that of / that in / that for',
            { vi: 'Danh từ số ít hoặc không đếm được đã nhắc', en: 'A singular or uncountable noun already mentioned' },
            'The cost of rail freight is lower than that of air freight.',
          ],
          [
            'those of / those on / those + V3',
            { vi: 'Danh từ số nhiều đã nhắc', en: 'A plural noun already mentioned' },
            'The rooms on the top floor are larger than those on the first floor.',
          ],
          [
            'those who + plural verb',
            { vi: 'Những người mà', en: 'People who' },
            'Those who complete the survey will receive a voucher.',
          ],
        ],
      },
      examples: [
        {
          en: "This year's sales figures are higher than **those** of last year.",
          vi: 'Doanh số năm nay cao hơn doanh số năm ngoái.',
        },
        {
          en: '**Those** interested in working the night shift should speak to Ms. Ivanova.',
          vi: 'Những ai muốn làm ca đêm vui lòng trao đổi với cô Ivanova.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Đề hay đặt **that / those / it / them** cạnh nhau sau than, twice, compared with, similar to…: dò ngược lên tìm danh từ được so sánh, xem nó số ít hay số nhiều là chọn được ngay. Phần song song của phép so sánh (the price of A … that of B) được luyện thêm ở bài 16.2.',
          en: 'The test often puts **that / those / it / them** side by side after than, twice, compared with, similar to...: read back to the noun being compared, check whether it is singular or plural, and the answer is clear. The parallel side of such comparisons (the price of A ... that of B) is practiced further in lesson 16.2.',
        },
      },
    },
    {
      heading: { vi: 'one / ones thay cho danh từ đếm được', en: 'one / ones for countable nouns' },
      body: {
        vi: '**one** thay cho một danh từ đếm được số ít, **ones** thay cho danh từ đếm được số nhiều, để khỏi lặp lại danh từ đó. Chúng thường đứng sau tính từ (a cheaper one, the new ones), sau this / that / which (this one, which ones) hoặc trước một cụm bổ nghĩa (the one on the left, the ones that arrived today).',
        en: '**one** replaces a singular countable noun and **ones** a plural countable noun, so the noun is not repeated. They usually follow an adjective (a cheaper one, the new ones) or this / that / which (this one, which ones), or come before a modifier (the one on the left, the ones that arrived today).',
      },
      points: [
        {
          vi: '**one** đứng một mình mang nghĩa a/an + danh từ: "Do you need a charger? I have **one**." Khi có tính từ thì số ít vẫn phải giữ từ hạn định: **a** new one, không phải "new one".',
          en: '**one** on its own means a/an + noun: "Do you need a charger? I have **one**." With an adjective, a singular still needs its determiner: **a** new one, not "new one".',
        },
        {
          vi: 'Tính từ + chỗ trống mà phía trước không có từ hạn định nào (hoặc chỉ có some, any, these…) → chỉ có thể là **ones**: some cheaper ones, lighter ones.',
          en: 'Adjective + blank with no determiner before it (or only some, any, these...) → it can only be **ones**: some cheaper ones, lighter ones.',
        },
        {
          vi: '**it** = chính vật đã nhắc; **one** = một vật khác cùng loại. I lost my badge, so I need a new **one** (một thẻ khác). / I lost my badge, but I found **it** in my car (chính cái thẻ đó).',
          en: '**it** = the very thing already mentioned; **one** = another thing of the same kind. I lost my badge, so I need a new **one** (a different badge). / I lost my badge, but I found **it** in my car (that same badge).',
        },
        {
          vi: 'Không dùng one / ones cho danh từ không đếm được: We bought new equipment because the old **equipment** kept breaking down (không nói "the old one").',
          en: 'Do not use one / ones for uncountable nouns: We bought new equipment because the old **equipment** kept breaking down (not "the old one").',
        },
      ],
      examples: [
        {
          en: 'This laptop is too slow, so I asked the IT department for a faster **one**.',
          vi: 'Chiếc máy tính xách tay này chạy quá chậm nên tôi đã xin bộ phận IT một chiếc nhanh hơn.',
        },
        {
          en: 'The brochures on the counter are outdated; please hand out the **ones** in the storage room.',
          vi: 'Các tờ rơi trên quầy đã cũ; vui lòng phát những tờ đang để trong kho.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy hay gặp: tính từ + **one** mà phía trước không có a, the, this, another, each… "We ordered new one" là sai; phải là "a new one" (một cái) hoặc "new ones" (nhiều cái).',
          en: 'A common trap: adjective + **one** with no a, the, this, another, each... before it. "We ordered new one" is wrong; it must be "a new one" (one item) or "new ones" (several).',
        },
      },
    },
    {
      heading: { vi: 'another, other, others, the other, the others', en: 'another, other, others, the other, the others' },
      body: {
        vi: 'Năm dạng này khác nhau ở hai điểm: **xác định hay không** (có the hay không) và **có danh từ theo sau hay đứng một mình**. Hãy nhìn từ đứng ngay sau chỗ trống trước, rồi mới xét nghĩa.',
        en: 'These five forms differ in two ways: **specific or not** (with or without the) and **followed by a noun or standing alone**. Look at the word right after the blank first, then consider the meaning.',
      },
      points: [
        {
          vi: '**other** chỉ đi với danh từ đếm được số ít khi có từ hạn định đứng trước: the other branch, any other way, no other option, every other week.',
          en: '**other** takes a singular countable noun only when a determiner comes before it: the other branch, any other way, no other option, every other week.',
        },
        {
          vi: '**others** và **the others** là đại từ, không có danh từ theo sau: "others employees" là sai → other employees.',
          en: '**others** and **the others** are pronouns with no noun after them: "others employees" is wrong → other employees.',
        },
        {
          vi: 'Các cặp hay gặp: **one … the other** (nhóm chỉ có hai); **one … another** (nhóm hơn hai, chưa kể hết); **some … others** (không xác định); **some … the others** (phần còn lại của một nhóm xác định).',
          en: 'Common pairs: **one ... the other** (a group of exactly two); **one ... another** (more than two, not all mentioned); **some ... others** (not specific); **some ... the others** (the rest of a specific group).',
        },
        {
          vi: 'another + số đếm + danh từ số nhiều (another two weeks): xem bài 2.1. each other / one another: xem bài 5.2.',
          en: 'another + number + plural noun (another two weeks): see lesson 2.1. each other / one another: see lesson 5.2.',
        },
      ],
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Theo sau là', en: 'Followed by' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'another',
            { vi: 'Danh từ đếm được số ít, hoặc đứng một mình', en: 'A singular countable noun, or nothing' },
            { vi: 'Một … khác, thêm một (không xác định)', en: 'One more, a different one (not specific)' },
            'Could you send me another copy of the invoice?',
          ],
          [
            'other',
            { vi: 'Danh từ số nhiều hoặc không đếm được', en: 'A plural or uncountable noun' },
            { vi: 'Những … khác (không xác định)', en: 'Different ones (not specific)' },
            'We also compared prices from other suppliers.',
          ],
          [
            'others',
            { vi: 'Không có gì (đại từ)', en: 'Nothing (pronoun)' },
            { vi: 'Những người, vật khác (không xác định)', en: 'Other people or things (not specific)' },
            'Some staff drive to work; others take the train.',
          ],
          [
            'the other',
            { vi: 'Danh từ số ít hoặc số nhiều, hoặc đứng một mình', en: 'A singular or plural noun, or nothing' },
            { vi: 'Cái, người còn lại (xác định); với số nhiều: tất cả số còn lại', en: 'The remaining one (specific); with a plural noun: all the rest' },
            'One elevator is working, but the other is being repaired.',
          ],
          [
            'the others',
            { vi: 'Không có gì (đại từ)', en: 'Nothing (pronoun)' },
            { vi: 'Tất cả những người, vật còn lại (xác định)', en: 'All the remaining people or things (specific)' },
            'Only two of the five speakers have arrived; the others are stuck in traffic.',
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: '**another** = an + other, nên không có "the another" và không đi với danh từ số nhiều (trừ khi có số đếm chen giữa). Khi câu đã cho biết chỉ có HAI thứ (two branches, both), thứ còn lại là **the other**, không phải another.',
          en: '**another** = an + other, so there is no "the another", and it does not take a plural noun (unless a number comes in between). When the sentence says there are only TWO items (two branches, both), the remaining one is **the other**, not another.',
        },
      },
    },
    {
      heading: { vi: 'Đại từ bất định và whoever', en: 'Indefinite pronouns and whoever' },
      body: {
        vi: 'Các đại từ bất định **anyone / anybody / anything, someone / somebody / something, everyone / everybody / everything, no one / nobody / nothing** đều là SỐ ÍT về ngữ pháp, nên động từ theo sau chia số ít, kể cả khi everyone mang nghĩa "tất cả mọi người".',
        en: 'The indefinite pronouns **anyone / anybody / anything, someone / somebody / something, everyone / everybody / everything, no one / nobody / nothing** are all grammatically SINGULAR, so the verb after them is singular, even when everyone means "all the people".',
      },
      points: [
        {
          vi: 'Động từ số ít: Everyone **has** a company phone. / Nobody **knows** the password. / Something **is** wrong with the printer.',
          en: 'Singular verb: Everyone **has** a company phone. / Nobody **knows** the password. / Something **is** wrong with the printer.',
        },
        {
          vi: 'Đại từ quay lại chỉ everyone, anyone, someone: tiếng Anh hiện đại chấp nhận **their** (his or her trang trọng hơn), nhưng động từ vẫn số ít: Everyone **has** submitted **their** report.',
          en: 'A pronoun referring back to everyone, anyone or someone: modern English accepts **their** (his or her is more formal), but the verb stays singular: Everyone **has** submitted **their** report.',
        },
        {
          vi: 'Tính từ đứng SAU đại từ bất định: something **new**, anyone **interested**, nothing **unusual**.',
          en: 'Adjectives come AFTER an indefinite pronoun: something **new**, anyone **interested**, nothing **unusual**.',
        },
        {
          vi: 'someone / something thường dùng trong câu khẳng định; anyone / anything trong câu phủ định, câu hỏi, câu điều kiện. anyone trong câu khẳng định nghĩa là "bất kỳ ai": Anyone can use the fitness center.',
          en: 'someone / something are usual in affirmative sentences; anyone / anything in negatives, questions and if-clauses. In an affirmative sentence anyone means "any person at all": Anyone can use the fitness center.',
        },
        {
          vi: '**whoever** = anyone who. Tự nó đã mở một mệnh đề nên theo sau là động từ ngay, chia số ít: **Whoever** arrives first should unlock the office. anyone muốn làm việc này phải có who: **Anyone who** arrives first… Không viết "whoever who".',
          en: '**whoever** = anyone who. It opens a clause by itself, so a verb follows it directly, in the singular: **Whoever** arrives first should unlock the office. anyone needs who to do the same job: **Anyone who** arrives first... Never write "whoever who".',
        },
      ],
      examples: [
        {
          en: '**Everyone** who registers before May 1 **receives** a free parking pass.',
          vi: 'Mọi người đăng ký trước ngày 1 tháng 5 đều được tặng một thẻ đỗ xe miễn phí.',
        },
        {
          en: 'The account will be assigned to **whoever** has the most experience with the client.',
          vi: 'Tài khoản khách hàng này sẽ được giao cho người nào có nhiều kinh nghiệm làm việc với khách hàng đó nhất.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Sau giới từ vẫn dùng **whoever** nếu nó làm chủ ngữ của động từ theo sau (to whoever has…). whoever còn được học kỹ hơn trong mệnh đề danh từ (bài 15.2) và với nghĩa "dù ai đi nữa" (bài 13.3).',
          en: 'Even after a preposition, use **whoever** when it is the subject of the following verb (to whoever has...). whoever is covered in more depth with noun clauses (lesson 15.2) and in the sense "no matter who" (lesson 13.3).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu đại từ thay thế trong Part 5', en: 'Attacking reference items in Part 5' },
      points: [
        {
          vi: 'Lựa chọn khác số, khác loại (its / their / it / they) → tìm tiền ngữ: hỏi "của ai, của cái gì?" rồi dò ngược lên; xác định số ít hay số nhiều nhờ đuôi -s và động từ đi kèm danh từ đó.',
          en: 'Options differing in number or type (its / their / it / they) → find the antecedent: ask "whose? of what?" and read back; decide singular or plural from the -s ending and the verb that goes with that noun.',
        },
        {
          vi: 'Chỗ trống sau than, twice, compared with, similar to… và trước of hoặc một cụm bổ nghĩa → **that** (danh từ số ít, không đếm được) hoặc **those** (số nhiều), theo danh từ ở vế trước.',
          en: 'A blank after than, twice, compared with, similar to... and before of or another modifier → **that** (singular or uncountable noun) or **those** (plural), depending on the noun in the first part.',
        },
        {
          vi: 'Chỗ trống + who + động từ số nhiều → **Those**. Chỗ trống + động từ chia thì ngay, không có who, mà câu còn một động từ chính nữa → **Whoever**.',
          en: 'Blank + who + plural verb → **Those**. Blank + a finite verb straight after it, with no who, and another main verb later in the sentence → **Whoever**.',
        },
        {
          vi: 'Chỗ trống sau tính từ hoặc this / which mà không có danh từ theo sau → **one** (số ít, có a / the / this… đứng trước) hoặc **ones** (số nhiều).',
          en: 'A blank after an adjective or this / which with no noun following → **one** (singular, with a / the / this... before it) or **ones** (plural).',
        },
        {
          vi: 'Họ other: nhìn từ đứng sau chỗ trống (danh từ số ít, danh từ số nhiều hay không có gì), rồi xét câu đã cho biết tổng số chưa (two, both → the other).',
          en: 'The other family: look at what follows the blank (a singular noun, a plural noun or nothing), then check whether the sentence gives the total (two, both → the other).',
        },
        {
          vi: 'Chủ ngữ là everyone, someone, anyone, nobody… → động từ số ít. Ngược lại, động từ số ít hay số nhiều sau chỗ trống cũng là manh mối để chọn đại từ.',
          en: 'A subject such as everyone, someone, anyone or nobody → singular verb. Conversely, a singular or plural verb after the blank is a clue for choosing the pronoun.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The new accounting software has received positive reviews, mainly because ------- interface is simple and intuitive.',
      options: ['its', 'their', 'it', 'they'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống đứng trước danh từ **interface** nên cần tính từ sở hữu, và nó thay cho **The new accounting software**, danh từ không đếm được, số ít → **its**. their cần một tiền ngữ số nhiều, mà reviews thì không có "giao diện"; it và they không đứng trước danh từ được.',
        en: 'The blank comes before the noun **interface**, so it needs a possessive adjective, and it refers back to **The new accounting software**, a singular, uncountable noun → **its**. their needs a plural antecedent, and reviews do not have an interface; it and they cannot come before a noun.',
      },
      translation: 'Phần mềm kế toán mới nhận được nhiều đánh giá tích cực, chủ yếu vì giao diện của nó đơn giản và dễ sử dụng.',
    },
    {
      sentence: 'The shipping rates of Corvin Express are considerably lower than ------- of other regional couriers.',
      options: ['that', 'those', 'them', 'ones'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống thay cho danh từ đã nhắc **shipping rates** (số nhiều) trong phép so sánh **than … of** → **those**. that chỉ thay danh từ số ít hoặc không đếm được; them không đứng trước of theo cách này, còn ones cần từ hạn định hoặc tính từ đi trước.',
        en: 'The blank replaces the plural noun **shipping rates** in the comparison **than ... of** → **those**. that only replaces a singular or uncountable noun; them cannot be used before of like this, and ones needs a determiner or adjective before it.',
      },
      translation: 'Giá cước vận chuyển của Corvin Express thấp hơn đáng kể so với giá cước của các hãng chuyển phát khu vực khác.',
    },
    {
      sentence: 'The storage capacity of the new warehouse in Busan is almost twice ------- of the old facility.',
      options: ['those', 'it', 'that', 'this'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống thay cho **storage capacity** (danh từ số ít, không đếm được) trong cấu trúc **twice … of** → **that**. those chỉ thay danh từ số nhiều; it và this không dùng trước of để thay danh từ.',
        en: 'The blank replaces **storage capacity** (singular, uncountable) in the pattern **twice ... of** → **that**. those only replaces plural nouns; it and this are not used before of to replace a noun.',
      },
      translation: 'Sức chứa của nhà kho mới ở Busan gần gấp đôi sức chứa của cơ sở cũ.',
    },
    {
      sentence: '------- who wish to attend the product launch must register online by Friday.',
      options: ['Them', 'Whoever', 'Anyone', 'Those'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là **who wish**, động từ wish ở dạng số nhiều → **Those** who (= những người mà). Anyone đi với động từ số ít (anyone who wishes); Whoever đã bao hàm who nên không có "whoever who"; Them không làm chủ ngữ được.',
        en: 'The blank is followed by **who wish**, with the plural verb wish → **Those** who (= the people who). Anyone takes a singular verb (anyone who wishes); Whoever already contains who, so "whoever who" is wrong; Them cannot be a subject.',
      },
      translation: 'Những ai muốn tham dự buổi ra mắt sản phẩm phải đăng ký trực tuyến trước thứ Sáu.',
    },
    {
      sentence: 'These folding chairs are too heavy to move easily, so the event planner ordered lighter ------- for the garden reception.',
      options: ['one', 'ones', 'them', 'those'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống thay cho **folding chairs** và đứng sau tính từ **lighter** mà không có mạo từ → phải là **ones** (số nhiều). one là số ít, cần a đứng trước (a lighter one); them và those không đứng sau tính từ.',
        en: 'The blank replaces **folding chairs** and follows the adjective **lighter** with no article → it must be plural **ones**. one is singular and would need a (a lighter one); them and those cannot follow an adjective.',
      },
      translation: 'Những chiếc ghế gấp này quá nặng, khó di chuyển, nên người tổ chức sự kiện đã đặt những chiếc nhẹ hơn cho buổi tiệc ngoài vườn.',
    },
    {
      sentence: 'Wexford Bank has two branches in the city center: one is on Main Street, and ------- is next to the central station.',
      options: ['the other', 'another', 'other', 'others'],
      answer: 0,
      explanation: {
        vi: 'Câu nói rõ có **two branches** và đã nhắc **one**, nên chi nhánh thứ hai là cái còn lại, xác định → **the other**. another ngụ ý vẫn còn chi nhánh khác, trái với "hai chi nhánh"; other không đứng một mình, còn others là số nhiều.',
        en: 'The sentence says there are **two branches** and has already mentioned **one**, so the second is the specific remaining one → **the other**. another implies more remain, which clashes with "two branches"; other cannot stand alone, and others is plural.',
      },
      translation: 'Ngân hàng Wexford có hai chi nhánh ở trung tâm thành phố: một chi nhánh nằm trên phố Main, chi nhánh còn lại nằm cạnh nhà ga trung tâm.',
    },
    {
      sentence: 'Some guests eat breakfast in the hotel restaurant, while ------- choose to have it delivered to their rooms.',
      options: ['other', 'another', 'the other', 'others'],
      answer: 3,
      explanation: {
        vi: 'Câu mở đầu bằng **Some guests**; vế sau nói về những khách khác (không xác định) và chỗ trống làm chủ ngữ của động từ số nhiều **choose** → đại từ **others**. other phải có danh từ theo sau; another và the other là số ít, sẽ phải đi với chooses.',
        en: 'The sentence opens with **Some guests**; the second clause refers to other, unspecified guests, and the blank is the subject of the plural verb **choose** → the pronoun **others**. other needs a noun after it; another and the other are singular and would need chooses.',
      },
      translation: 'Một số khách ăn sáng tại nhà hàng của khách sạn, trong khi những người khác chọn gọi bữa sáng mang lên phòng.',
    },
    {
      sentence: 'If the proposed date is not convenient for you, please let us know, and we will suggest ------- date.',
      options: ['another', 'other', 'others', 'the others'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống là danh từ đếm được số ít **date** → **another** (= một ngày khác). other không đi với danh từ đếm được số ít khi không có từ hạn định đứng trước; others và the others là đại từ, không có danh từ theo sau.',
        en: 'The blank is followed by the singular countable noun **date** → **another** (= a different date). other cannot take a singular countable noun without a determiner before it; others and the others are pronouns and take no noun after them.',
      },
      translation: 'Nếu ngày đề xuất không thuận tiện cho quý khách, vui lòng báo cho chúng tôi, và chúng tôi sẽ đề xuất một ngày khác.',
    },
    {
      sentence: '------- in the finance department has been asked to complete the online security training by Friday.',
      options: ['All', 'Everyone', 'Those', 'Both'],
      answer: 1,
      explanation: {
        vi: 'Động từ **has been asked** chia số ít → chủ ngữ phải là **Everyone**, đại từ bất định luôn đi với động từ số ít. Those, Both và All (khi chỉ người) đều mang nghĩa số nhiều, phải đi với have been asked.',
        en: 'The verb **has been asked** is singular → the subject must be **Everyone**, an indefinite pronoun that always takes a singular verb. Those, Both and All (referring to people) are plural and would need have been asked.',
      },
      translation: 'Mọi người trong phòng tài chính đều đã được yêu cầu hoàn thành khoá đào tạo bảo mật trực tuyến trước thứ Sáu.',
    },
    {
      sentence: '------- submits the most creative slogan for the campaign will receive a weekend stay at the Harborview Resort.',
      options: ['Anyone', 'Someone', 'Whoever', 'Those'],
      answer: 2,
      explanation: {
        vi: 'Câu có hai động từ chia thì **submits** và **will receive** nhưng không có who → chỗ trống phải tự mở một mệnh đề làm chủ ngữ: **Whoever** (= anyone who). Anyone và Someone cần who mới nối được với submits; Those là số nhiều và cũng thiếu who.',
        en: 'The sentence has two finite verbs, **submits** and **will receive**, but no who → the blank must open a clause that acts as the subject: **Whoever** (= anyone who). Anyone and Someone would need who to connect to submits; Those is plural and also lacks who.',
      },
      translation: 'Ai gửi khẩu hiệu sáng tạo nhất cho chiến dịch sẽ nhận được một kỳ nghỉ cuối tuần tại khu nghỉ dưỡng Harborview.',
    },
  ],
};
