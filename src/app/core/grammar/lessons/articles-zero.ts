import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'articles-zero',
  intro: {
    vi: 'Nhiều câu Part 5 và Part 6 có đáp án đúng là **không dùng mạo từ**: danh từ nói chung chung, bữa ăn, phương tiện sau **by**, các cụm cố định như **in person**, **on time**, và hầu hết tên công ty. Bài này dạy các trường hợp đó, cùng the + tính từ chỉ nhóm người, a few/few và trật tự **such a / quite a**.',
    en: 'Many Part 5 and Part 6 items are answered by using **no article**: nouns used in a general sense, meals, means of transport after **by**, fixed phrases such as **in person** and **on time**, and most company names. This lesson covers those cases, plus the + adjective for groups of people, a few/few and the word order of **such a / quite a**.',
  },
  mistakes: [
    {
      wrong: 'Most of our staff commute by [[the train]] from the suburbs.',
      right: 'Most of our staff commute by [[train]] from the suburbs.',
      explanation: {
        vi: '**by + phương tiện** chỉ cách đi lại, danh từ đứng trơ không mạo từ: by train, by bus, by car.',
        en: '**by + means of transport** describes how you travel, and the noun stands bare: by train, by bus, by car.',
      },
    },
    {
      wrong: 'Studies show that [[the remote work]] can improve employee satisfaction.',
      right: 'Studies show that [[remote work]] can improve employee satisfaction.',
      explanation: {
        vi: 'Nói về làm việc từ xa **nói chung**, không phải một công việc cụ thể → danh từ không đếm được đứng trơ, không có the.',
        en: 'The sentence is about remote work **in general**, not a specific job → the uncountable noun stands bare, without the.',
      },
    },
    {
      wrong: 'The museum offers free admission to [[the elderlies]] on weekdays.',
      right: 'The museum offers free admission to [[the elderly]] on weekdays.',
      explanation: {
        vi: '**the + tính từ** chỉ cả nhóm người và đã mang nghĩa số nhiều; tính từ không bao giờ thêm -s: the elderly, the unemployed.',
        en: '**the + adjective** names a whole group of people and is already plural in meaning; the adjective never takes -s: the elderly, the unemployed.',
      },
    },
    {
      wrong: 'Ms. Vance made [[a such]] strong impression at her final interview.',
      right: 'Ms. Vance made [[such a]] strong impression at her final interview.',
      explanation: {
        vi: 'Trật tự đúng là **such + a/an + (tính từ) + danh từ số ít**: such a strong impression, không bao giờ "a such".',
        en: 'The correct order is **such + a/an + (adjective) + singular noun**: such a strong impression, never "a such".',
      },
    },
    {
      wrong: 'We signed a three-year contract with [[the Hanwell Logistics]] last month.',
      right: 'We signed a three-year contract with [[Hanwell Logistics]] last month.',
      explanation: {
        vi: 'Hầu hết tên công ty là tên riêng nên không có mạo từ: **Hanwell Logistics**, không phải "the Hanwell Logistics".',
        en: 'Most company names are proper nouns and take no article: **Hanwell Logistics**, not "the Hanwell Logistics".',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Nói chung chung: số nhiều và không đếm được đứng trơ', en: 'General statements: bare plural and uncountable nouns' },
      body: {
        vi: 'Khi nói về một loại người, vật hay khái niệm **nói chung**, danh từ số nhiều và danh từ không đếm được đứng một mình, không có the. Chỉ thêm **the** khi danh từ đã được xác định cụ thể (bài 10.1). Danh từ đếm được số ít thì không bao giờ đứng trơ theo cách này.',
        en: 'When talking about a type of person, thing or idea **in general**, plural and uncountable nouns stand alone, without the. Add **the** only when the noun is specifically identified (lesson 10.1). A singular countable noun can never stand bare like this.',
      },
      table: {
        head: [
          { vi: 'Nói chung (không mạo từ)', en: 'General (no article)' },
          { vi: 'Cụ thể (có the)', en: 'Specific (with the)' },
        ],
        rows: [
          ['Customers expect fast delivery.', 'The customers in our loyalty program receive free delivery.'],
          ['Training improves productivity.', 'The training we received last week was very useful.'],
          ['Prices usually rise in December.', 'The prices on this list include tax.'],
        ],
      },
      examples: [
        {
          en: '**Online reviews** have a strong influence on where travelers book.',
          vi: 'Các đánh giá trực tuyến có ảnh hưởng lớn đến nơi du khách đặt phòng.',
        },
        {
          en: '**Clear communication** is essential when managing teams in different time zones.',
          vi: 'Giao tiếp rõ ràng là điều thiết yếu khi quản lý các nhóm ở những múi giờ khác nhau.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy có cụm **of…**, mệnh đề **that/who…** hay ngữ cảnh chỉ rõ "những cái nào" theo sau danh từ → thường cần the. Không có gì giới hạn, câu nói về cả một loại → để trơ.',
          en: 'If an **of...** phrase, a **that/who...** clause or the context says exactly which ones → the is usually needed. If nothing limits the noun and the sentence is about a whole class → leave it bare.',
        },
      },
    },
    {
      heading: { vi: 'Bữa ăn, phương tiện và các cụm cố định', en: 'Meals, transport and fixed phrases' },
      points: [
        {
          vi: '**Bữa ăn** không mạo từ: have lunch, after breakfast, discuss it over dinner. Có tính từ đứng trước thì thường thêm a: a working lunch, a formal dinner.',
          en: '**Meals** take no article: have lunch, after breakfast, discuss it over dinner. With an adjective in front, a is usual: a working lunch, a formal dinner.',
        },
        {
          vi: '**by + phương tiện / cách liên lạc / cách thanh toán**: by train, by plane, by taxi, by email, by phone, by courier, by credit card. Ngoại lệ: **on foot**.',
          en: '**by + transport / means of contact / means of payment**: by train, by plane, by taxi, by email, by phone, by courier, by credit card. Exception: **on foot**.',
        },
        {
          vi: 'Khi danh từ có từ hạn định thì không dùng by mà đổi giới từ: **in** my car, **on** the 8:15 train, **on** the phone.',
          en: 'Once the noun has a determiner, by is replaced by another preposition: **in** my car, **on** the 8:15 train, **on** the phone.',
        },
      ],
      table: {
        head: [
          { vi: 'Cụm cố định', en: 'Fixed phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['go to work / at work / leave work', { vi: 'đi làm / ở chỗ làm / tan làm', en: 'travel to / be at / leave your workplace' }],
          ['at home / go home', { vi: 'ở nhà / về nhà (không có to)', en: 'in your house / return to your house (no to)' }],
          ['in person', { vi: 'trực tiếp, đích thân', en: 'physically present, face to face' }],
          ['on time / in time', { vi: 'đúng giờ / kịp lúc', en: 'at the planned time / early enough' }],
          ['in advance', { vi: 'trước, sớm', en: 'beforehand' }],
          ['on business / in charge of', { vi: 'đi công tác / phụ trách', en: 'for work purposes / responsible for' }],
        ],
      },
      examples: [
        {
          en: 'Ms. Ferreira prefers to pay suppliers **by bank transfer**.',
          vi: 'Cô Ferreira thích thanh toán cho nhà cung cấp bằng chuyển khoản ngân hàng.',
        },
        {
          en: 'The documents must be signed **in person** at our Dalton Road office.',
          vi: 'Các giấy tờ phải được ký trực tiếp tại văn phòng của chúng tôi trên đường Dalton.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đây là những ngoại lệ của quy tắc "danh từ đếm được số ít phải có từ hạn định". Thêm the hay a vào (by the train, in the person, on the time) đều sai.',
          en: 'These are exceptions to the rule that a singular countable noun needs a determiner. Adding the or a (by the train, in the person, on the time) is wrong.',
        },
      },
    },
    {
      heading: { vi: 'the + tính từ chỉ nhóm người', en: 'the + adjective for groups of people' },
      body: {
        vi: '**the + tính từ** chỉ cả một nhóm người có chung đặc điểm: the elderly (người cao tuổi), the unemployed (người thất nghiệp), the disabled (người khuyết tật), the young, the rich, the poor. Cụm này mang nghĩa số nhiều.',
        en: '**the + adjective** names a whole group of people who share a quality: the elderly, the unemployed, the disabled, the young, the rich, the poor. The phrase is plural in meaning.',
      },
      points: [
        {
          vi: 'Động từ chia số nhiều: The unemployed **are** eligible for free training.',
          en: 'The verb is plural: The unemployed **are** eligible for free training.',
        },
        {
          vi: 'Không thêm -s vào tính từ và không bỏ the: không nói "the elderlies" hay "help unemployed find work".',
          en: 'Never add -s to the adjective and never drop the: not "the elderlies" or "help unemployed find work".',
        },
        {
          vi: 'Muốn nói về một người thì thêm danh từ: an elderly customer, an unemployed worker.',
          en: 'To talk about one person, add a noun: an elderly customer, an unemployed worker.',
        },
      ],
      examples: [
        {
          en: 'The new bus route makes it easier for **the elderly** to reach the hospital.',
          vi: 'Tuyến xe buýt mới giúp người cao tuổi đến bệnh viện dễ dàng hơn.',
        },
      ],
    },
    {
      heading: { vi: 'a few / few, a little / little: chữ a đổi nghĩa', en: 'a few / few, a little / little: the a changes the meaning' },
      body: {
        vi: 'Ở hai cặp này, có hay không có **a** làm đổi hẳn nghĩa: **a few / a little** = có một ít (ý tích cực); **few / little** = rất ít, hầu như không (ý tiêu cực). few đi với danh từ đếm được số nhiều, little với danh từ không đếm được (bài 2.1).',
        en: 'In these two pairs, having **a** or not changes the meaning completely: **a few / a little** = some (positive); **few / little** = hardly any (negative). few goes with plural countable nouns, little with uncountable ones (lesson 2.1).',
      },
      points: [
        {
          vi: '**quite a few** = khá nhiều (không phải "ít"): Quite a few guests asked about late checkout.',
          en: '**quite a few** = a fairly large number (not "a small number"): Quite a few guests asked about late checkout.',
        },
        {
          vi: 'Sau **very** chỉ dùng few/little (very few, very little); sau **only** thường dùng a few/a little (only a few, only a little).',
          en: 'After **very**, only few/little are used (very few, very little); after **only**, a few/a little are normal (only a few, only a little).',
        },
      ],
      examples: [
        {
          en: "We still have **a little** time before the client arrives, so let's review the slides.",
          vi: 'Chúng ta vẫn còn một chút thời gian trước khi khách hàng đến, nên hãy xem lại các trang chiếu.',
        },
        {
          en: 'There is **little** demand for printed catalogs these days.',
          vi: 'Ngày nay hầu như không còn nhu cầu về catalogue in.',
        },
      ],
    },
    {
      heading: { vi: 'such a và quite a', en: 'such a and quite a' },
      body: {
        vi: '**such** và **quite** đứng TRƯỚC mạo từ a/an, không đứng sau. Với danh từ số nhiều hoặc không đếm được thì không có a.',
        en: '**such** and **quite** come BEFORE a/an, not after it. With plural or uncountable nouns there is no a.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['such + a/an + (adj) + singular noun', 'such a busy week, such an efficient team'],
          ['such + (adj) + plural / uncountable noun', 'such long delays, such positive feedback'],
          ['quite + a/an + (adj) + singular noun', 'quite a challenge, quite a long wait'],
        ],
      },
      examples: [
        {
          en: 'It was **such a** pleasure to work with your design team on this project.',
          vi: 'Thật là một niềm vui khi được làm việc với nhóm thiết kế của quý vị trong dự án này.',
        },
        {
          en: 'Opening three stores in one month was **quite an** achievement for a small company.',
          vi: 'Mở ba cửa hàng trong một tháng là một thành tích khá ấn tượng đối với một công ty nhỏ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**so** đi với tính từ đứng một mình (so busy), **such** đi với cụm danh từ (such a busy week): không nói "so busy week" hay "a such busy week". Cấu trúc such … that chỉ kết quả học ở bài 13.2.',
          en: '**so** goes with an adjective alone (so busy), **such** with a noun phrase (such a busy week): not "so busy week" or "a such busy week". The result pattern such ... that is covered in lesson 13.2.',
        },
      },
    },
    {
      heading: { vi: 'Mạo từ với tên riêng và tên công ty', en: 'Articles with proper names and company names' },
      table: {
        head: [
          { vi: 'Không mạo từ', en: 'No article' },
          { vi: 'Có the', en: 'With the' },
        ],
        rows: [
          [
            { vi: 'Tên người, tên công ty: Ms. Ortega, Hanwell Logistics, Ardent Pharmaceuticals', en: 'People and companies: Ms. Ortega, Hanwell Logistics, Ardent Pharmaceuticals' },
            { vi: 'Tên có of: the Bank of Canada, the University of Melbourne', en: 'Names with of: the Bank of Canada, the University of Melbourne' },
          ],
          [
            { vi: 'Hầu hết quốc gia, thành phố: Japan, Brazil, Singapore', en: 'Most countries and cities: Japan, Brazil, Singapore' },
            { vi: 'Quốc gia dạng số nhiều hoặc có chữ chỉ thể chế: the Netherlands, the Philippines, the United States, the UK', en: 'Plural names or names with a word like States/Kingdom: the Netherlands, the Philippines, the United States, the UK' },
          ],
          [
            { vi: 'Đường phố, sân bay, công viên: Main Street, Heathrow Airport, Central Park', en: 'Streets, airports, parks: Main Street, Heathrow Airport, Central Park' },
            { vi: 'Khách sạn, bảo tàng, nhà hát: the Grand Plaza Hotel, the National Museum', en: 'Hotels, museums, theaters: the Grand Plaza Hotel, the National Museum' },
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Tên công ty đứng trơ ngay cả khi chứa danh từ số nhiều hay chữ chung: **Brightway Freight** announced…, **Pinecrest Foods** has hired… Chỉ dùng the khi nó thuộc tên chính thức hoặc khi tên làm tính từ cho một danh từ chung: **the** Hanwell warehouse, **the** Ardent sales team.',
          en: 'Company names stand bare even when they contain a plural or common word: **Brightway Freight** announced..., **Pinecrest Foods** has hired... Use the only when it is part of the official name or when the name modifies a common noun: **the** Hanwell warehouse, **the** Ardent sales team.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu không mạo từ trong Part 5', en: 'Attacking zero-article items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là cùng một danh từ với/không có a, the, -s → xem động từ chia số ít hay số nhiều, và câu nói chung chung hay về cái cụ thể.',
          en: 'Four options showing one noun with or without a, the, -s → check whether the verb is singular or plural, and whether the sentence is general or specific.',
        },
        {
          vi: 'Thấy **by, in, on, at, over** đứng trước chỗ trống → nghĩ ngay tới cụm cố định: by train, in person, on time, at home, over lunch.',
          en: 'See **by, in, on, at, over** before the blank → think of fixed phrases at once: by train, in person, on time, at home, over lunch.',
        },
        {
          vi: 'Chỗ trống chỉ một nhóm người mà các lựa chọn là tính từ → chọn **the + tính từ** không -s.',
          en: 'The blank names a group of people and the options are adjectives → choose **the + adjective** with no -s.',
        },
        {
          vi: 'Lựa chọn có such/so/quite và a → such/quite đứng trước a; so chỉ đi với tính từ không có danh từ theo sau.',
          en: 'Options mixing such/so/quite with a → such/quite come before a; so only goes with an adjective that has no noun after it.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'According to a recent industry survey, ------- prefer to book hotel rooms online rather than by phone.',
      options: ['traveler', 'a traveler', 'travelers', 'the traveler'],
      answer: 2,
      explanation: {
        vi: 'Động từ **prefer** không có -s nên chủ ngữ phải số nhiều; câu nói về du khách **nói chung** → danh từ số nhiều đứng trơ **travelers**. a traveler, the traveler là số ít, cần prefers; traveler đứng trơ là sai.',
        en: 'The verb **prefer** has no -s, so the subject must be plural; the sentence is about travelers **in general** → the bare plural **travelers**. a traveler and the traveler are singular and would need prefers; a bare traveler is wrong.',
      },
      translation: 'Theo một khảo sát gần đây trong ngành, du khách thích đặt phòng khách sạn trực tuyến hơn là qua điện thoại.',
    },
    {
      sentence: 'Our consultants believe that ------- is the key to keeping talented employees in a competitive job market.',
      options: ['training', 'the trainings', 'a training', 'trainings'],
      answer: 0,
      explanation: {
        vi: '**training** là danh từ không đếm được, ở đây nói về đào tạo **nói chung** → đứng trơ, đi với động từ số ít **is**. a training sai vì không dùng a với danh từ không đếm được; trainings và the trainings không hợp với **is**.',
        en: '**training** is uncountable and is used here **in general** → it stands bare and takes the singular verb **is**. a training is wrong because a cannot go with an uncountable noun; trainings and the trainings do not agree with **is**.',
      },
      translation: 'Các chuyên gia tư vấn của chúng tôi tin rằng đào tạo là chìa khóa để giữ chân nhân viên giỏi trong một thị trường việc làm cạnh tranh.',
    },
    {
      sentence: 'Mr. Silva usually travels to the Rotterdam office by ------- because it is faster than driving.',
      options: ['a train', 'the train', 'trains', 'train'],
      answer: 3,
      explanation: {
        vi: '**by + phương tiện** chỉ cách đi lại, danh từ đứng trơ: **by train**. by a train, by the train, by trains đều không phải cách nói chuẩn.',
        en: '**by + means of transport** describes how someone travels, and the noun stands bare: **by train**. by a train, by the train and by trains are not standard.',
      },
      translation: 'Anh Silva thường đến văn phòng Rotterdam bằng tàu hỏa vì đi như vậy nhanh hơn lái xe.',
    },
    {
      sentence: 'Applicants who live near our head office are encouraged to submit their documents in ------- at the reception desk.',
      options: ['a person', 'person', 'the person', 'persons'],
      answer: 1,
      explanation: {
        vi: '**in person** (trực tiếp) là cụm cố định không mạo từ. in a person, in the person, in persons đều sai, dù person là danh từ đếm được.',
        en: '**in person** (face to face) is a fixed phrase with no article. in a person, in the person and in persons are all wrong, even though person is countable.',
      },
      translation: 'Ứng viên sống gần trụ sở chính được khuyến khích nộp hồ sơ trực tiếp tại quầy lễ tân.',
    },
    {
      sentence: 'The city has opened a new employment center to help ------- find jobs in the manufacturing sector.',
      options: ['unemployed', 'an unemployed', 'the unemployed', 'the unemployeds'],
      answer: 2,
      explanation: {
        vi: '**the + tính từ** chỉ cả nhóm người: **the unemployed** (những người thất nghiệp), làm tân ngữ của **help**. unemployed đứng trơ và an unemployed thiếu danh từ; the unemployeds sai vì tính từ không thêm -s.',
        en: '**the + adjective** names a whole group: **the unemployed**, the object of **help**. A bare unemployed and an unemployed lack a noun; the unemployeds is wrong because an adjective never takes -s.',
      },
      translation: 'Thành phố đã mở một trung tâm việc làm mới để giúp người thất nghiệp tìm việc trong ngành sản xuất.',
    },
    {
      sentence: 'The new lunch menu has been popular, and quite ------- customers have asked for the recipe for our lemon tart.',
      options: ['a few', 'few', 'a little', 'little'],
      answer: 0,
      explanation: {
        vi: '**quite a few** = khá nhiều, hợp với **has been popular** và đi với danh từ số nhiều **customers**. "quite few" không phải cụm chuẩn; a little / little chỉ đi với danh từ không đếm được.',
        en: '**quite a few** = a fairly large number, which fits **has been popular** and goes with the plural noun **customers**. "quite few" is not a standard phrase; a little / little only go with uncountable nouns.',
      },
      translation: 'Thực đơn bữa trưa mới rất được ưa chuộng, và khá nhiều khách hàng đã hỏi công thức món bánh tart chanh của chúng tôi.',
    },
    {
      sentence: 'Thank you for organizing ------- enjoyable retirement party for Mr. Jensen last Friday evening.',
      options: ['so', 'such', 'a such', 'such an'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là cụm danh từ số ít đếm được **enjoyable retirement party** → **such an** (an vì enjoyable bắt đầu bằng nguyên âm). so không đứng trước cụm danh từ; such thiếu an; a such sai trật tự.',
        en: 'The blank is followed by a singular countable noun phrase, **enjoyable retirement party** → **such an** (an because enjoyable starts with a vowel sound). so cannot come before a noun phrase; such lacks an; a such has the wrong order.',
      },
      translation: 'Cảm ơn bạn đã tổ chức một buổi tiệc chia tay nghỉ hưu thật vui cho ông Jensen vào tối thứ Sáu tuần trước.',
    },
    {
      sentence: 'Finding a venue for 500 guests on short notice was ------- challenge for the events team.',
      options: ['such', 'quite a', 'very', 'a quite'],
      answer: 1,
      explanation: {
        vi: '**challenge** là danh từ đếm được số ít, không có tính từ đi kèm → **quite a challenge** (một thử thách không nhỏ). such thiếu a; very không bổ nghĩa cho danh từ; "a quite" chỉ đi được khi có tính từ chen giữa (a quite difficult task).',
        en: '**challenge** is a singular countable noun with no adjective → **quite a challenge**. such lacks a; very cannot modify a noun; "a quite" is only possible with an adjective in between (a quite difficult task).',
      },
      translation: 'Tìm được địa điểm cho 500 khách trong thời gian gấp là một thử thách không nhỏ đối với nhóm tổ chức sự kiện.',
    },
    {
      sentence: 'The two directors will review the quarterly sales targets over ------- at a restaurant near the office this Friday.',
      options: ['lunch', 'a lunches', 'the lunches', 'lunches'],
      answer: 0,
      explanation: {
        vi: 'Tên bữa ăn không có mạo từ: **over lunch** (trong lúc ăn trưa). a lunches sai vì a không đi với số nhiều; the lunches và lunches sai nghĩa vì **this Friday** cho thấy chỉ có một bữa trưa.',
        en: 'Meals take no article: **over lunch** (while having lunch). a lunches is wrong because a cannot go with a plural; the lunches and lunches clash with the meaning, since **this Friday** shows there is only one lunch.',
      },
      translation: 'Hai giám đốc sẽ xem xét các chỉ tiêu doanh số quý trong bữa trưa tại một nhà hàng gần văn phòng vào thứ Sáu này.',
    },
    {
      sentence: 'Last year ------- opened three new distribution centers in Southeast Asia to shorten delivery times.',
      options: ['the Brightway Freight', 'a Brightway Freight', 'Brightway Freight', 'Brightway Freights'],
      answer: 2,
      explanation: {
        vi: 'Tên công ty là tên riêng, đứng trơ không mạo từ: **Brightway Freight**. the và a không đứng trước tên công ty theo cách này; Brightway Freights sai vì tên riêng không tự thêm -s.',
        en: 'A company name is a proper noun and stands bare: **Brightway Freight**. Neither the nor a goes before a company name like this; Brightway Freights is wrong because you cannot add -s to a proper name.',
      },
      translation: 'Năm ngoái Brightway Freight đã mở ba trung tâm phân phối mới ở Đông Nam Á để rút ngắn thời gian giao hàng.',
    },
  ],
};
