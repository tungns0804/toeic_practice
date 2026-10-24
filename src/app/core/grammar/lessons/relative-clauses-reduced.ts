import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'relative-clauses-reduced',
  intro: {
    vi: 'Bài này dạy cách **rút gọn mệnh đề quan hệ** thành V-ing, V3 hoặc to V, và cách dùng **trạng từ quan hệ** where / when / why. Câu kinh điển của Part 5 là "the documents ------- by the manager": chọn reviewed hay reviewing chỉ mất vài giây nếu bạn biết hỏi danh từ đó làm hay chịu hành động.',
    en: 'This lesson shows how to **reduce relative clauses** to an -ing form, a past participle or to + verb, and how to use the **relative adverbs** where / when / why. The classic Part 5 item is "the documents ------- by the manager": choosing reviewed or reviewing takes seconds once you ask whether the noun does the action or receives it.',
  },
  mistakes: [
    {
      wrong: 'The samples [[testing]] by the quality control team showed no defects.',
      right: 'The samples [[tested]] by the quality control team showed no defects.',
      explanation: {
        vi: 'Mẫu sản phẩm **được** đội kiểm soát chất lượng kiểm tra (có **by**) → nghĩa bị động → rút gọn bằng V3 **tested** (= which were tested).',
        en: 'The samples **were tested** by the quality control team (note **by**) → passive meaning → reduce with the past participle **tested** (= which were tested).',
      },
    },
    {
      wrong: 'Visitors [[wished]] to tour the factory must sign a safety waiver.',
      right: 'Visitors [[wishing]] to tour the factory must sign a safety waiver.',
      explanation: {
        vi: 'Khách tham quan tự **mong muốn** (chủ động), nên rút gọn bằng **wishing** (= who wish). wished sẽ biến thành động từ chính thứ hai của câu, trong khi câu đã có **must sign**.',
        en: 'The visitors do the **wishing** (active), so reduce with **wishing** (= who wish). wished would become a second main verb, but the sentence already has **must sign**.',
      },
    },
    {
      wrong: 'Mr. Haines was the first applicant [[submitting]] a complete portfolio.',
      right: 'Mr. Haines was the first applicant [[to submit]] a complete portfolio.',
      explanation: {
        vi: 'Sau **the first / the last / the only** + danh từ, mệnh đề quan hệ được rút gọn bằng **to V**: the first applicant to submit (= who submitted).',
        en: 'After **the first / the last / the only** + noun, the relative clause is reduced to **to + verb**: the first applicant to submit (= who submitted).',
      },
    },
    {
      wrong: 'The resort [[which]] we held our annual retreat has a private beach.',
      right: 'The resort [[where]] we held our annual retreat has a private beach.',
      explanation: {
        vi: 'Mệnh đề **we held our annual retreat** đã đủ chủ ngữ và tân ngữ, chỉ thiếu thông tin nơi chốn → **where** (= at which). which cần một chỗ trống trong mệnh đề để thay vào.',
        en: 'The clause **we held our annual retreat** already has its subject and object; only the place is missing → **where** (= at which). which needs a gap in the clause to fill.',
      },
    },
    {
      wrong: 'The building [[where]] our firm leased in March needs a new roof.',
      right: 'The building [[which]] our firm leased in March needs a new roof.',
      explanation: {
        vi: '**leased** thiếu tân ngữ (thuê cái gì?) → cần đại từ quan hệ làm tân ngữ: **which** (hoặc that). where không làm tân ngữ được.',
        en: '**leased** has no object (leased what?) → we need a relative pronoun as the object: **which** (or that). where can not be an object.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Rút gọn mệnh đề quan hệ chủ ngữ', en: 'Reducing a subject relative clause' },
      body: {
        vi: 'Khi who / which / that làm **chủ ngữ** của mệnh đề, ta có thể bỏ đại từ quan hệ (và bỏ cả **be** nếu có) rồi đưa động từ về dạng phân từ. Cụm rút gọn vẫn đứng ngay SAU danh từ mà nó bổ nghĩa.',
        en: 'When who / which / that is the **subject** of its clause, we can drop the pronoun (and **be**, if there is one) and turn the verb into a participle. The reduced phrase still comes right AFTER the noun it describes.',
      },
      table: {
        head: [
          { vi: 'Mệnh đề đầy đủ', en: 'Full clause' },
          { vi: 'Dạng rút gọn', en: 'Reduced form' },
          { vi: 'Khi nào dùng', en: 'When to use it' },
        ],
        rows: [
          ['guests who stay three nights', 'guests staying three nights', { vi: 'V-ing: danh từ TỰ thực hiện hành động (chủ động)', en: '-ing: the noun DOES the action (active)' }],
          ['the parts which were made in Korea', 'the parts made in Korea', { vi: 'V3: danh từ CHỊU hành động (bị động)', en: 'Past participle: the noun RECEIVES the action (passive)' }],
          ['the first woman who led the firm', 'the first woman to lead the firm', { vi: 'to V: sau the first / last / only / next, so sánh nhất', en: 'to + verb: after the first / last / only / next, superlatives' }],
          ['the items that are on sale', 'the items on sale', { vi: 'Bỏ who/which + be trước cụm giới từ hoặc tính từ', en: 'Drop who/which + be before a prepositional or adjective phrase' }],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Cụm phân từ đứng ĐẦU câu (Located in…, Founded in 1990…) là bài 14.2; phân từ đứng TRƯỚC danh từ (the attached file) là bài 14.1. Bài này chỉ xét cụm rút gọn đứng ngay sau danh từ.',
          en: 'Participle phrases at the START of a sentence (Located in…, Founded in 1990…) are lesson 14.2; participles BEFORE a noun (the attached file) are lesson 14.1. This lesson covers only reduced phrases right after a noun.',
        },
      },
    },
    {
      heading: { vi: 'V-ing hay V3: danh từ làm hay chịu hành động?', en: '-ing or past participle: does the noun act or receive the action?' },
      points: [
        {
          vi: 'Sau chỗ trống có **tân ngữ** (danh từ, cụm danh từ) → thường là **V-ing**: companies **employing** 500 workers.',
          en: 'An **object** (noun phrase) follows the blank → usually **-ing**: companies **employing** 500 workers.',
        },
        {
          vi: 'Sau chỗ trống có **by + người/tổ chức**, hoặc ngoại động từ không có tân ngữ → **V3**: the report **prepared** by Ms. Wu.',
          en: '**by + agent** follows the blank, or a transitive verb has no object → **past participle**: the report **prepared** by Ms. Wu.',
        },
        {
          vi: 'Nội động từ (travel, arrive, work, remain) không có dạng bị động → chỉ rút gọn bằng **V-ing**.',
          en: 'Intransitive verbs (travel, arrive, work, remain) have no passive → they reduce only to **-ing**.',
        },
      ],
      examples: [
        {
          en: 'Anyone **attending** the workshop should bring a laptop.',
          vi: 'Bất kỳ ai tham dự buổi hội thảo nên mang theo máy tính xách tay.',
        },
        {
          en: 'The furniture **ordered** last week will be delivered on Thursday.',
          vi: 'Đồ nội thất đặt tuần trước sẽ được giao vào thứ Năm.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Dạng V-ing rút gọn dùng cho hành động đang diễn ra, thường xuyên hoặc trạng thái. Với MỘT hành động chủ động đã kết thúc trong quá khứ, người ta thường giữ nguyên mệnh đề: the man **who called** yesterday, không nói "the man calling yesterday".',
          en: 'The reduced -ing form is for ongoing or habitual actions and states. For a SINGLE finished active action in the past, keep the full clause: the man **who called** yesterday, not "the man calling yesterday".',
        },
      },
    },
    {
      heading: { vi: 'to V sau the first / the last / the only', en: 'to + verb after the first / the last / the only' },
      body: {
        vi: 'Sau **the first, the second, the last, the only, the next** hoặc một tính từ so sánh nhất + danh từ, mệnh đề quan hệ chủ ngữ được rút gọn bằng **to V**. Nếu nghĩa bị động, dùng **to be + V3**.',
        en: 'After **the first, the second, the last, the only, the next** or a superlative + noun, a subject relative clause reduces to **to + verb**. With a passive meaning, use **to be + past participle**.',
      },
      examples: [
        {
          en: 'Ms. Romero was the only manager **to finish** the course with honors.',
          vi: 'Cô Romero là người quản lý duy nhất hoàn thành khóa học với thành tích xuất sắc.',
        },
        {
          en: 'The Denver branch will be the next office **to be renovated**.',
          vi: 'Chi nhánh Denver sẽ là văn phòng tiếp theo được cải tạo.',
        },
      ],
    },
    {
      heading: { vi: 'Trạng từ quan hệ where / when / why', en: 'Relative adverbs where / when / why' },
      body: {
        vi: 'Trạng từ quan hệ bổ nghĩa cho danh từ chỉ nơi chốn, thời gian, lý do và tương đương với **giới từ + which**. Khác với which, mệnh đề sau where / when / why đã ĐỦ thành phần (có chủ ngữ, có tân ngữ nếu động từ cần).',
        en: 'Relative adverbs describe nouns of place, time and reason, and they equal **preposition + which**. Unlike which, the clause after where / when / why is already COMPLETE (it has a subject, and an object if the verb needs one).',
      },
      table: {
        head: [
          { vi: 'Trạng từ', en: 'Adverb' },
          { vi: 'Tiền ngữ', en: 'Antecedent' },
          { vi: 'Tương đương', en: 'Equivalent' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['where', { vi: 'Nơi chốn', en: 'Place' }, 'in / at / on which', 'the office where (= in which) I work'],
          ['when', { vi: 'Thời gian', en: 'Time' }, 'on / in / at which', 'the day when (= on which) the store opens'],
          ['why', { vi: 'Lý do (the reason)', en: 'Reason (the reason)' }, 'for which', 'the reason why (= for which) sales fell'],
        ],
      },
      examples: [
        {
          en: 'The hall **where** the gala will take place holds 800 guests.',
          vi: 'Hội trường nơi tổ chức buổi dạ tiệc chứa được 800 khách.',
        },
        {
          en: 'The board approved the plan in the week **when** the merger was announced.',
          vi: 'Hội đồng quản trị phê duyệt kế hoạch vào đúng tuần công bố việc sáp nhập.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo phân biệt: che chỗ trống và đọc mệnh đề phía sau. Thiếu tân ngữ (the company purchased ___) → **which / that**. Đủ thành phần (the ceremony will take place) → **where / when / why**, hoặc **giới từ + which**. Không bao giờ viết "in where".',
          en: 'Quick test: cover the blank and read the clause after it. An object is missing (the company purchased ___) → **which / that**. The clause is complete (the ceremony will take place) → **where / when / why**, or **preposition + which**. Never write "in where".',
        },
      },
    },
    {
      heading: { vi: 'Lược đại từ tân ngữ khác rút gọn mệnh đề chủ ngữ', en: 'Omitting an object pronoun vs. reducing a subject clause' },
      points: [
        {
          vi: 'Đại từ làm **tân ngữ** thì chỉ cần bỏ đi, động từ giữ nguyên thì: the report **(that) Mr. Lee wrote**.',
          en: 'An **object** pronoun is simply dropped, and the verb keeps its tense: the report **(that) Mr. Lee wrote**.',
        },
        {
          vi: 'Đại từ làm **chủ ngữ** thì phải đổi động từ sang V-ing / V3 / to V: the report **written by Mr. Lee**.',
          en: 'A **subject** pronoun requires changing the verb to -ing / past participle / to + verb: the report **written by Mr. Lee**.',
        },
        {
          vi: '**when** và **why** sau the day / the reason cũng có thể được lược hoặc thay bằng that: the day **(that)** we moved, the reason **(that)** he resigned.',
          en: '**when** and **why** after the day / the reason can also be dropped or replaced by that: the day **(that)** we moved, the reason **(that)** he resigned.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không trộn hai cách: "the report Mr. Lee written" là sai. Có chủ ngữ riêng (Mr. Lee) thì động từ phải chia thì (wrote).',
          en: 'Do not mix the two: "the report Mr. Lee written" is wrong. If the clause has its own subject (Mr. Lee), the verb must be finite (wrote).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu rút gọn trong Part 5', en: 'Attacking reduced-clause items in Part 5' },
      points: [
        {
          vi: 'Câu đã có động từ chính, chỗ trống nằm ngay sau một danh từ → cần dạng rút gọn, không phải động từ chia thì.',
          en: 'The sentence already has a main verb and the blank follows a noun → you need a reduced form, not a finite verb.',
        },
        {
          vi: 'Có tân ngữ sau chỗ trống → V-ing; có by hoặc ngoại động từ thiếu tân ngữ → V3; trước đó có the first / only / last → to V.',
          en: 'An object follows the blank → -ing; by follows, or a transitive verb lacks its object → past participle; the first / only / last comes before → to + verb.',
        },
        {
          vi: 'Bốn lựa chọn là where / when / which / why → che chỗ trống, xem mệnh đề sau đủ hay thiếu thành phần, rồi xem tiền ngữ là nơi chốn, thời gian hay lý do.',
          en: 'Options are where / when / which / why → cover the blank, check whether the clause after it is complete or has a gap, then check whether the antecedent is a place, a time or a reason.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'All contracts ------- by the legal department must be returned to Ms. Chen by Thursday afternoon.',
      options: ['reviewed', 'reviewing', 'review', 'to review'],
      answer: 0,
      explanation: {
        vi: 'Câu đã có động từ chính **must be returned**; hợp đồng **được** phòng pháp lý xem xét (**by**) → V3 **reviewed** (= which were reviewed). reviewing mang nghĩa chủ động, nhưng hợp đồng không tự xem xét.',
        en: 'The sentence already has its main verb **must be returned**; the contracts are reviewed **by** the legal department → the past participle **reviewed** (= which were reviewed). reviewing is active, but contracts do not review anything.',
      },
      translation: 'Tất cả hợp đồng đã được phòng pháp lý xem xét phải được gửi lại cho cô Chen trước chiều thứ Năm.',
    },
    {
      sentence: 'Passengers ------- to Chicago on Flight 208 should proceed to Gate 14 for boarding.',
      options: ['travel', 'traveled', 'traveling', 'travels'],
      answer: 2,
      explanation: {
        vi: 'Động từ chính là **should proceed**, nên chỗ trống là cụm rút gọn bổ nghĩa cho **Passengers**. Hành khách tự đi (chủ động) và **travel** là nội động từ → **traveling** (= who are traveling). traveled không có nghĩa bị động.',
        en: 'The main verb is **should proceed**, so the blank is a reduced phrase describing **Passengers**. The passengers do the traveling, and **travel** is intransitive → **traveling** (= who are traveling). traveled cannot be passive.',
      },
      translation: 'Hành khách bay đến Chicago trên chuyến bay 208 vui lòng đến cửa số 14 để lên máy bay.',
    },
    {
      sentence: 'Companies ------- more than 500 full-time workers must submit an annual workplace safety report.',
      options: ['employ', 'employing', 'employed', 'employment'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống có tân ngữ **more than 500 full-time workers** và câu đã có **must submit** → rút gọn chủ động **employing** (= that employ). employed cần nghĩa bị động, mà phía sau lại có tân ngữ.',
        en: 'The object **more than 500 full-time workers** follows, and the sentence already has **must submit** → the active reduction **employing** (= that employ). employed would be passive, yet an object follows.',
      },
      translation: 'Các công ty sử dụng hơn 500 lao động toàn thời gian phải nộp báo cáo an toàn lao động hằng năm.',
    },
    {
      sentence: 'Ms. Alvarez was the first employee ------- the new leadership training program offered by headquarters.',
      options: ['completing', 'completed', 'to complete', 'completes'],
      answer: 2,
      explanation: {
        vi: 'Sau **the first** + danh từ, mệnh đề quan hệ rút gọn bằng **to V** → **to complete** (= who completed). completed và completes sẽ là động từ chính thứ hai; completing không dùng sau the first.',
        en: 'After **the first** + noun, the relative clause reduces to **to + verb** → **to complete** (= who completed). completed and completes would be a second main verb; completing is not used after the first.',
      },
      translation: 'Cô Alvarez là nhân viên đầu tiên hoàn thành chương trình đào tạo lãnh đạo mới do trụ sở chính tổ chức.',
    },
    {
      sentence: 'The hotel ------- the awards ceremony will take place has recently added a larger ballroom.',
      options: ['which', 'where', 'when', 'whose'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề **the awards ceremony will take place** đã đủ thành phần, tiền ngữ **The hotel** là nơi chốn → **where** (= at which). which cần một chỗ thiếu trong mệnh đề; when chỉ thời gian; whose cần danh từ theo sau.',
        en: 'The clause **the awards ceremony will take place** is complete and the antecedent **The hotel** is a place → **where** (= at which). which needs a gap in the clause; when is for time; whose needs a noun after it.',
      },
      translation: 'Khách sạn nơi diễn ra lễ trao giải vừa xây thêm một phòng tiệc lớn hơn.',
    },
    {
      sentence: 'The memo specifies the date ------- the new pricing policy will take effect at all branches.',
      options: ['when', 'where', 'which', 'why'],
      answer: 0,
      explanation: {
        vi: 'Tiền ngữ **the date** chỉ thời gian và mệnh đề sau đã đủ thành phần → **when** (= on which). which thiếu giới từ (phải là on which); where chỉ nơi chốn; why chỉ lý do.',
        en: 'The antecedent **the date** is a time and the clause after it is complete → **when** (= on which). which lacks a preposition (it would need on which); where is for places; why is for reasons.',
      },
      translation: 'Bản thông báo nêu rõ ngày chính sách giá mới có hiệu lực tại tất cả các chi nhánh.',
    },
    {
      sentence: 'The office ------- which the job interviews will be conducted is on the second floor of the annex.',
      options: ['where', 'of', 'to', 'in'],
      answer: 3,
      explanation: {
        vi: 'Phỏng vấn được tiến hành **trong** văn phòng → **in which** (= where). "where which" sai vì where đã bao hàm giới từ; of / to không hợp nghĩa với be conducted.',
        en: 'Interviews are conducted **in** an office → **in which** (= where). "where which" is wrong because where already contains the preposition; of / to do not fit be conducted.',
      },
      translation: 'Văn phòng nơi tiến hành các buổi phỏng vấn tuyển dụng nằm ở tầng hai của tòa nhà phụ.',
    },
    {
      sentence: 'Ms. Kim explained the reason ------- the product launch had been postponed until next quarter.',
      options: ['where', 'which', 'when', 'why'],
      answer: 3,
      explanation: {
        vi: 'Sau **the reason** và mệnh đề đã đủ thành phần → **why** (= for which). which thiếu giới từ (phải là for which); where và when không hợp với lý do.',
        en: 'After **the reason**, with a complete clause following → **why** (= for which). which lacks a preposition (it would need for which); where and when do not fit a reason.',
      },
      translation: 'Cô Kim đã giải thích lý do buổi ra mắt sản phẩm bị hoãn đến quý sau.',
    },
    {
      sentence: "The budget proposal ------- at yesterday's meeting will be revised before it is sent to the client.",
      options: ['discussing', 'discussed', 'discusses', 'to discuss'],
      answer: 1,
      explanation: {
        vi: 'Đề xuất ngân sách **được** thảo luận, và ngoại động từ discuss không có tân ngữ phía sau → V3 **discussed** (= which was discussed). discussing cần tân ngữ; discusses là động từ chính thứ hai.',
        en: 'The budget proposal **was discussed**, and the transitive verb discuss has no object after it → the past participle **discussed** (= which was discussed). discussing would need an object; discusses would be a second main verb.',
      },
      translation: 'Bản đề xuất ngân sách được thảo luận trong cuộc họp hôm qua sẽ được chỉnh sửa trước khi gửi cho khách hàng.',
    },
    {
      sentence: 'The factory ------- the company purchased last year will be converted into a distribution warehouse.',
      options: ['where', 'when', 'which', 'whose'],
      answer: 2,
      explanation: {
        vi: '**purchased** thiếu tân ngữ (công ty mua cái gì?) → cần đại từ quan hệ làm tân ngữ: **which**. Đây là bẫy: tiền ngữ là nơi chốn nhưng where không làm tân ngữ được; whose cần danh từ theo sau.',
        en: '**purchased** has no object (the company bought what?) → we need a relative pronoun as the object: **which**. The trap: the antecedent is a place, but where cannot be an object; whose needs a noun after it.',
      },
      translation: 'Nhà máy mà công ty mua năm ngoái sẽ được chuyển đổi thành kho phân phối.',
    },
  ],
};
