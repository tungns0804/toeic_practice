import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'noun-clauses-that',
  intro: {
    vi: 'Mệnh đề **that** biến cả một câu hoàn chỉnh thành một "danh từ" để làm tân ngữ, chủ ngữ hay bổ ngữ cho tính từ và danh từ. Part 5 hay hỏi chọn **that** hay **what**, chọn **It** làm chủ ngữ giả, hoặc bỏ giới từ thừa trước **that**.',
    en: 'A **that**-clause turns a complete sentence into a "noun" that can act as an object, a subject, or a complement of an adjective or noun. Part 5 often asks you to choose **that** or **what**, to pick **It** as a dummy subject, or to drop an unnecessary preposition before **that**.',
  },
  mistakes: [
    {
      wrong: 'The manager confirmed [[what]] the budget had been approved.',
      right: 'The manager confirmed [[that]] the budget had been approved.',
      explanation: {
        vi: 'Sau chỗ trống là một mệnh đề đã ĐỦ chủ ngữ và động từ (**the budget had been approved**), nên dùng **that**. **what** chỉ đi với mệnh đề còn thiếu chủ ngữ hoặc tân ngữ.',
        en: 'The clause after the blank is already COMPLETE (**the budget had been approved**), so use **that**. **what** only introduces a clause that is missing a subject or object.',
      },
    },
    {
      wrong: 'We are confident [[about]] the new system will reduce costs.',
      right: 'We are confident [[that]] the new system will reduce costs.',
      explanation: {
        vi: '**confident about** chỉ đi với danh từ (confident about the plan). Muốn nối cả một mệnh đề thì dùng **confident that** + S + V.',
        en: '**confident about** is followed only by a noun (confident about the plan). To attach a whole clause, use **confident that** + S + V.',
      },
    },
    {
      wrong: 'Several staff members were unaware [[of that]] the office would close early.',
      right: 'Several staff members were unaware [[that]] the office would close early.',
      explanation: {
        vi: 'Mệnh đề **that** không đứng sau giới từ. Ta nói **unaware of** + danh từ, nhưng **unaware that** + mệnh đề.',
        en: 'A **that**-clause cannot follow a preposition. We say **unaware of** + noun, but **unaware that** + clause.',
      },
    },
    {
      wrong: '[[This]] is expected that the merger will be completed by June.',
      right: '[[It]] is expected that the merger will be completed by June.',
      explanation: {
        vi: 'Khi mệnh đề **that** được đẩy ra cuối câu, vị trí chủ ngữ phải là chủ ngữ giả **It**, không phải This hay That.',
        en: 'When the **that**-clause is moved to the end, the subject slot must be filled by the dummy subject **It**, not This or That.',
      },
    },
    {
      wrong: 'The client [[said]] us that the order would be cancelled.',
      right: 'The client [[told]] us that the order would be cancelled.',
      explanation: {
        vi: '**say** không có tân ngữ chỉ người đứng ngay sau (say that…). Muốn nêu người nghe thì dùng **tell / inform / notify / assure** + người + **that**.',
        en: '**say** takes no personal object directly after it (say that…). To name the listener, use **tell / inform / notify / assure** + person + **that**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Mệnh đề that là gì', en: 'What a that-clause is' },
      body: {
        vi: 'Mệnh đề danh từ với **that** có dạng **that + S + V** và là một câu HOÀN CHỈNH (không thiếu thành phần nào). **that** ở đây không mang nghĩa gì, chỉ là "cái móc" để cả mệnh đề đứng vào vị trí của một danh từ.',
        en: 'A noun clause with **that** has the form **that + S + V** and is a COMPLETE sentence (nothing is missing). Here **that** carries no meaning; it is simply the "hook" that lets the whole clause fill a noun position.',
      },
      table: {
        head: [
          { vi: 'Vị trí', en: 'Position' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Tân ngữ của động từ', en: 'Object of a verb' }, 'The survey shows that customers prefer online booking.'],
          [{ vi: 'Chủ ngữ (thường đổi sang It … that)', en: 'Subject (usually rewritten as It … that)' }, 'That the store closed early annoyed shoppers.'],
          [{ vi: 'Sau tính từ', en: 'After an adjective' }, 'We are sure that the venue is available.'],
          [{ vi: 'Sau danh từ (giải thích nội dung danh từ)', en: 'After a noun (stating its content)' }, 'The rumor that the CEO will resign is false.'],
        ],
      },
    },
    {
      heading: { vi: 'That-clause làm tân ngữ của động từ', en: 'That-clauses as verb objects' },
      points: [
        {
          vi: 'Động từ tường thuật và nhận thức hay gặp: **announce, confirm, indicate, ensure, report, state, reveal, show, find, believe, expect, realize, note, mention, explain** + that.',
          en: 'Common reporting and thinking verbs: **announce, confirm, indicate, ensure, report, state, reveal, show, find, believe, expect, realize, note, mention, explain** + that.',
        },
        {
          vi: 'Nhóm BẮT BUỘC có người nghe làm tân ngữ: **inform, notify, assure, remind, tell, convince** + người + that.',
          en: 'Verbs that REQUIRE a listener as object: **inform, notify, assure, remind, tell, convince** + person + that.',
        },
        {
          vi: 'Nhóm KHÔNG có tân ngữ chỉ người ngay sau: **say, announce, explain, mention** + that (muốn nêu người nghe thì thêm **to**: explain **to** the staff that…).',
          en: 'Verbs that take NO personal object directly: **say, announce, explain, mention** + that (to name the listener, add **to**: explain **to** the staff that…).',
        },
      ],
      examples: [
        {
          en: 'The CEO **announced that** the company would open two new branches in Da Nang.',
          vi: 'Tổng giám đốc thông báo rằng công ty sẽ mở thêm hai chi nhánh tại Đà Nẵng.',
        },
        {
          en: 'Please **ensure that** all visitors sign in at the front desk.',
          vi: 'Vui lòng đảm bảo rằng mọi khách đến đều đăng ký tại quầy lễ tân.',
        },
        {
          en: 'The landlord **notified the tenants that** the elevator would be repaired on Monday.',
          vi: 'Chủ nhà thông báo cho người thuê rằng thang máy sẽ được sửa vào thứ Hai.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong văn nói, **that** sau tân ngữ thường được lược (I think the price is fair). Nhưng câu Part 5 thường giữ **that**, và KHÔNG được lược khi mệnh đề đứng đầu câu.',
          en: 'In speech, **that** after a verb is often dropped (I think the price is fair). Part 5 sentences usually keep it, and it can NEVER be dropped when the clause begins the sentence.',
        },
      },
    },
    {
      heading: { vi: 'That-clause làm chủ ngữ và cấu trúc It … that', en: 'That-clauses as subjects and the It … that pattern' },
      body: {
        vi: 'Mệnh đề **that** có thể làm chủ ngữ và động từ chính chia số ít. Tuy vậy câu như thế khá nặng, nên tiếng Anh thường đưa mệnh đề ra cuối và đặt chủ ngữ giả **It** ở đầu: **It is + tính từ / V3 + that + S + V**.',
        en: 'A **that**-clause can be the subject, with a singular main verb. Because such sentences feel heavy, English usually moves the clause to the end and puts the dummy subject **It** in front: **It is + adjective / V3 + that + S + V**.',
      },
      table: {
        head: [
          { vi: 'Mẫu', en: 'Pattern' },
          { vi: 'Từ hay gặp', en: 'Common words' },
        ],
        rows: [
          ['It is + adjective + that', 'clear, obvious, likely, unlikely, possible, true, surprising, fortunate'],
          ['It is + V3 + that', 'expected, believed, reported, estimated, announced, known, said'],
          ['It + verb + that', 'It appears that…, It seems that…, It turns out that…'],
        ],
      },
      examples: [
        {
          en: '**That the merger failed** surprised most shareholders.',
          vi: 'Việc vụ sáp nhập thất bại khiến hầu hết cổ đông bất ngờ.',
        },
        {
          en: '**It is likely that** fuel prices will rise again this winter.',
          vi: 'Nhiều khả năng giá nhiên liệu sẽ lại tăng vào mùa đông này.',
        },
        {
          en: '**It is estimated that** the renovation will cost about two million dollars.',
          vi: 'Người ta ước tính việc cải tạo sẽ tốn khoảng hai triệu đô la.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Chủ ngữ giả luôn là **It**, không dùng This, That hay What. Riêng các tính từ yêu cầu như **essential, important, necessary** + that thì động từ sau đó ở dạng nguyên mẫu (bài 15.3).',
          en: 'The dummy subject is always **It**, never This, That or What. After demand adjectives such as **essential, important, necessary** + that, the following verb takes the base form (lesson 15.3).',
        },
      },
    },
    {
      heading: { vi: 'That-clause sau tính từ', en: 'That-clauses after adjectives' },
      body: {
        vi: 'Các tính từ chỉ hiểu biết, chắc chắn hay cảm xúc có thể nhận một mệnh đề **that** phía sau. Điểm cần nhớ: giới từ đi kèm tính từ (**of, about**) BIẾN MẤT khi theo sau là mệnh đề.',
        en: 'Adjectives of knowledge, certainty or feeling can take a **that**-clause. Key point: the preposition that normally goes with the adjective (**of, about**) DISAPPEARS when a clause follows.',
      },
      table: {
        head: [
          { vi: 'Tính từ + danh từ', en: 'Adjective + noun' },
          { vi: 'Tính từ + mệnh đề', en: 'Adjective + clause' },
        ],
        rows: [
          ['aware of the risk', 'aware that the plan is risky'],
          ['confident about / of success', 'confident that the project will succeed'],
          ['sure / certain of the date', 'sure / certain that the date is correct'],
          ['concerned about the delay', 'concerned that the shipment will be late'],
          ['pleased with the results', 'pleased that sales have improved'],
        ],
      },
      examples: [
        {
          en: 'The organizers are **confident that** the event will attract over 500 visitors.',
          vi: 'Ban tổ chức tin chắc rằng sự kiện sẽ thu hút hơn 500 khách tham quan.',
        },
        {
          en: 'Investors were **concerned that** the factory might not meet its deadline.',
          vi: 'Các nhà đầu tư lo ngại rằng nhà máy có thể không kịp hạn chót.',
        },
      ],
    },
    {
      heading: { vi: 'The fact that và the + danh từ + that', en: 'The fact that and the + noun + that' },
      body: {
        vi: 'Một số danh từ có thể được giải thích nội dung bằng mệnh đề **that** đi ngay sau: **the fact, the news, the idea, the belief, the possibility, the assurance, the announcement, the claim, the rumor** + that. Vì mệnh đề **that** không đứng sau giới từ, khi cần dùng giới từ (despite, due to) ta chèn **the fact that**.',
        en: 'Some nouns can have their content spelled out by a **that**-clause right after them: **the fact, the news, the idea, the belief, the possibility, the assurance, the announcement, the claim, the rumor** + that. Since a **that**-clause cannot follow a preposition, we insert **the fact that** when a preposition (despite, due to) is needed.',
      },
      examples: [
        {
          en: '**The news that** the plant will hire 200 workers pleased local officials.',
          vi: 'Tin nhà máy sẽ tuyển 200 công nhân khiến chính quyền địa phương hài lòng.',
        },
        {
          en: 'Sales remained strong **despite the fact that** prices increased in May.',
          vi: 'Doanh số vẫn mạnh dù giá đã tăng vào tháng Năm.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Phân biệt với mệnh đề quan hệ (bài 12.1): trong **the news that he reported**, mệnh đề thiếu tân ngữ của reported và **that** thay được bằng **which**. Trong **the news that the plant will hire 200 workers**, mệnh đề đầy đủ, **that** KHÔNG thay bằng which được.',
          en: 'Do not confuse this with a relative clause (lesson 12.1): in **the news that he reported**, the clause lacks the object of reported and **that** can become **which**. In **the news that the plant will hire 200 workers**, the clause is complete and **that** can NOT become which.',
        },
      },
    },
    {
      heading: { vi: 'Phân biệt that và what', en: 'That versus what' },
      body: {
        vi: 'Đây là cặp bị hỏi nhiều nhất. Hãy nhìn phần đứng SAU chỗ trống: đủ thành phần thì chọn **that**, thiếu chủ ngữ hoặc tân ngữ thì chọn **what** (= the thing that, xem bài 15.2).',
        en: 'This is the most frequently tested pair. Look at what comes AFTER the blank: if the clause is complete, choose **that**; if it lacks a subject or object, choose **what** (= the thing that, see lesson 15.2).',
      },
      table: {
        head: [
          { vi: 'Câu', en: 'Sentence' },
          { vi: 'Phân tích', en: 'Analysis' },
        ],
        rows: [
          ['She said that the files were ready.', { vi: 'the files were ready đã đủ → that', en: 'the files were ready is complete → that' }],
          ['She explained what the client wanted.', { vi: 'wanted thiếu tân ngữ → what', en: 'wanted has no object → what' }],
          ['What surprised us was the low price.', { vi: 'surprised thiếu chủ ngữ → what', en: 'surprised has no subject → what' }],
        ],
      },
    },
    {
      heading: { vi: 'Cách xử lý câu that-clause trong Part 5', en: 'How to attack that-clause items in Part 5' },
      points: [
        {
          vi: 'Lựa chọn có **that / what / which**: kiểm tra mệnh đề sau chỗ trống. Đầy đủ → **that**; thiếu chủ ngữ/tân ngữ → **what**; có danh từ đứng trước và thiếu thành phần → đại từ quan hệ.',
          en: 'Options with **that / what / which**: check the clause after the blank. Complete → **that**; missing a subject/object → **what**; a noun before it plus a gap → a relative pronoun.',
        },
        {
          vi: 'Tính từ đứng trước chỗ trống, sau chỗ trống là S + V → chọn **that**, loại giới từ (of, about).',
          en: 'Adjective before the blank and S + V after it → choose **that**, reject prepositions (of, about).',
        },
        {
          vi: 'Chỗ trống đầu câu, theo sau là **is + tính từ/V3 + that** → chọn **It**.',
          en: 'Blank at the start followed by **is + adjective/V3 + that** → choose **It**.',
        },
        {
          vi: 'Chỗ trống đầu câu, theo sau là một mệnh đề đầy đủ RỒI tới động từ chính → chọn **That** (mệnh đề làm chủ ngữ).',
          en: 'Blank at the start followed by a complete clause AND THEN the main verb → choose **That** (a subject clause).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The quarterly report ------- that online sales rose by twelve percent over the previous three months.',
      options: ['indicates', 'indicating', 'indication', 'to indicate'],
      answer: 0,
      explanation: {
        vi: 'Câu chưa có động từ chính cho chủ ngữ **The quarterly report**, và mệnh đề **that** cần một động từ để làm tân ngữ → **indicates**. indicating và to indicate không làm động từ chính được.',
        en: 'The subject **The quarterly report** has no main verb yet, and the **that**-clause needs a verb to be its object → **indicates**. indicating and to indicate cannot serve as the main verb.',
      },
      translation: 'Báo cáo quý cho thấy doanh số trực tuyến đã tăng mười hai phần trăm trong ba tháng qua.',
    },
    {
      sentence: 'Mr. Patel confirmed ------- the conference room had been reserved for Thursday afternoon.',
      options: ['what', 'that', 'which', 'whose'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề sau chỗ trống đã đủ chủ ngữ và động từ (**the conference room had been reserved**) và làm tân ngữ của **confirmed** → **that**. what cần một mệnh đề còn thiếu thành phần.',
        en: 'The clause after the blank is complete (**the conference room had been reserved**) and is the object of **confirmed** → **that**. what needs a clause with a missing element.',
      },
      translation: 'Ông Patel xác nhận rằng phòng hội nghị đã được đặt cho chiều thứ Năm.',
    },
    {
      sentence: 'Ms. Ito is confident ------- the new branch will become profitable within its first year.',
      options: ['of', 'about', 'that', 'for'],
      answer: 2,
      explanation: {
        vi: 'Sau tính từ **confident** là cả một mệnh đề (**the new branch will become…**) → dùng **that**. of và about chỉ đi với danh từ, không đứng trước S + V.',
        en: 'The adjective **confident** is followed by a full clause (**the new branch will become…**) → use **that**. of and about take only a noun, not S + V.',
      },
      translation: 'Bà Ito tin chắc rằng chi nhánh mới sẽ có lãi ngay trong năm đầu tiên.',
    },
    {
      sentence: '------- the merger was called off at the last minute surprised many industry analysts.',
      options: ['What', 'Because', 'It', 'That'],
      answer: 3,
      explanation: {
        vi: 'Động từ chính **surprised** cần chủ ngữ, và chủ ngữ là cả mệnh đề đầy đủ **the merger was called off…** → **That**. Because sẽ làm surprised mất chủ ngữ; What cần mệnh đề thiếu thành phần.',
        en: 'The main verb **surprised** needs a subject, and the subject is the complete clause **the merger was called off…** → **That**. Because would leave surprised without a subject; What needs a clause with a gap.',
      },
      translation: 'Việc thương vụ sáp nhập bị huỷ vào phút chót khiến nhiều nhà phân tích trong ngành bất ngờ.',
    },
    {
      sentence: '------- is expected that the new warehouse will begin operating in early March.',
      options: ['This', 'It', 'That', 'What'],
      answer: 1,
      explanation: {
        vi: 'Mẫu **___ is expected that + S + V**: mệnh đề that đã bị đưa ra cuối, chỗ trống là chủ ngữ giả → **It**. This, That, What không làm chủ ngữ giả.',
        en: 'In the pattern **___ is expected that + S + V**, the that-clause has been moved to the end, so the blank is the dummy subject → **It**. This, That and What cannot act as dummy subjects.',
      },
      translation: 'Dự kiến nhà kho mới sẽ bắt đầu hoạt động vào đầu tháng Ba.',
    },
    {
      sentence: 'Despite the fact ------- the hotel was fully booked, the manager found a room for the keynote speaker.',
      options: ['that', 'which', 'what', 'whether'],
      answer: 0,
      explanation: {
        vi: '**the fact that** + mệnh đề đầy đủ (**the hotel was fully booked**) giải thích nội dung của fact → **that**. which là đại từ quan hệ, cần mệnh đề thiếu thành phần.',
        en: '**the fact that** + a complete clause (**the hotel was fully booked**) states the content of fact → **that**. which is a relative pronoun and needs a clause with a gap.',
      },
      translation: 'Dù khách sạn đã kín phòng, người quản lý vẫn tìm được một phòng cho diễn giả chính.',
    },
    {
      sentence: 'The ------- that the factory will expand next year has created optimism in the local community.',
      options: ['announce', 'announced', 'announcement', 'announcing'],
      answer: 2,
      explanation: {
        vi: 'Sau **The** và trước mệnh đề **that** giải thích nội dung cần một danh từ làm chủ ngữ cho **has created** → **announcement** (the announcement that…).',
        en: 'After **The** and before a content **that**-clause, a noun is needed as the subject of **has created** → **announcement** (the announcement that…).',
      },
      translation: 'Thông báo rằng nhà máy sẽ mở rộng vào năm tới đã mang lại sự lạc quan cho cộng đồng địa phương.',
    },
    {
      sentence: 'During the meeting, the client explained ------- she needed for the product launch in Singapore.',
      options: ['that', 'if', 'whose', 'what'],
      answer: 3,
      explanation: {
        vi: 'Động từ **needed** trong mệnh đề sau chỗ trống còn THIẾU tân ngữ → dùng **what** (= the things that). that chỉ đi với mệnh đề đầy đủ.',
        en: 'The verb **needed** in the clause after the blank has NO object → use **what** (= the things that). that only introduces a complete clause.',
      },
      translation: 'Trong cuộc họp, khách hàng đã giải thích những gì cô ấy cần cho buổi ra mắt sản phẩm tại Singapore.',
    },
    {
      sentence: 'The airline ------- passengers that the flight to Seoul would depart two hours late.',
      options: ['said', 'announced', 'explained', 'informed'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là tân ngữ chỉ người **passengers** rồi mới tới **that** → cần động từ dạng **inform + người + that**. said, announced, explained không nhận tân ngữ chỉ người ngay sau.',
        en: 'The blank is followed by the personal object **passengers** and then **that** → the verb must follow **inform + person + that**. said, announced and explained do not take a personal object directly.',
      },
      translation: 'Hãng hàng không thông báo cho hành khách rằng chuyến bay đi Seoul sẽ khởi hành trễ hai tiếng.',
    },
    {
      sentence: 'It is widely ------- that the central bank will raise interest rates next quarter.',
      options: ['believe', 'believed', 'believing', 'belief'],
      answer: 1,
      explanation: {
        vi: 'Mẫu **It is + V3 + that** (người ta tin rằng…) → **believed**. believing sẽ tạo thể chủ động vô nghĩa với chủ ngữ giả It; belief là danh từ, không đứng sau trạng từ widely.',
        en: 'The pattern **It is + V3 + that** (it is believed that…) → **believed**. believing would give a meaningless active form with dummy It; belief is a noun and cannot follow the adverb widely.',
      },
      translation: 'Nhiều người tin rằng ngân hàng trung ương sẽ tăng lãi suất vào quý tới.',
    },
  ],
};
