import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'noun-clauses-wh-whether',
  intro: {
    vi: 'Mệnh đề danh từ mở đầu bằng từ để hỏi (**what, where, how…**), **whether/if** hay **whoever/whatever/whichever** xuất hiện đều đặn ở Part 5 và Part 6. Bài này dạy bạn chọn đúng từ mở đầu và đúng **trật tự S + V** trong câu hỏi gián tiếp.',
    en: 'Noun clauses that begin with question words (**what, where, how…**), **whether/if** or **whoever/whatever/whichever** appear regularly in Parts 5 and 6. This lesson teaches you to choose the right opening word and the correct **S + V order** in indirect questions.',
  },
  mistakes: [
    {
      wrong: 'Could you tell me where [[is the shipping department]]?',
      right: 'Could you tell me where [[the shipping department is]]?',
      explanation: {
        vi: 'Trong câu hỏi gián tiếp, mệnh đề sau từ để hỏi giữ trật tự câu kể **S + V**, không đảo động từ lên trước chủ ngữ.',
        en: 'In an indirect question, the clause after the question word keeps statement order **S + V**; the verb does not move in front of the subject.',
      },
    },
    {
      wrong: '[[That]] our customers want most is faster delivery.',
      right: '[[What]] our customers want most is faster delivery.',
      explanation: {
        vi: '**want** trong mệnh đề chủ ngữ còn thiếu tân ngữ, nên phải dùng **what** (= the thing that). **that** chỉ đi với mệnh đề đầy đủ.',
        en: '**want** in the subject clause has no object, so we need **what** (= the thing that). **that** only introduces a complete clause.',
      },
    },
    {
      wrong: 'Our final decision depends on [[if]] the client approves the budget.',
      right: 'Our final decision depends on [[whether]] the client approves the budget.',
      explanation: {
        vi: 'Sau giới từ (**on**) chỉ dùng **whether**, không dùng **if**.',
        en: 'After a preposition (**on**), only **whether** is possible, not **if**.',
      },
    },
    {
      wrong: 'The committee will decide [[if]] to extend the registration deadline.',
      right: 'The committee will decide [[whether]] to extend the registration deadline.',
      explanation: {
        vi: 'Trước **to + V** chỉ dùng **whether**: decide whether to extend. **if to** luôn sai.',
        en: 'Before **to + verb**, only **whether** works: decide whether to extend. **if to** is always wrong.',
      },
    },
    {
      wrong: 'The trip will be given to [[whomever]] sells the most units this quarter.',
      right: 'The trip will be given to [[whoever]] sells the most units this quarter.',
      explanation: {
        vi: 'Chọn whoever hay whomever theo vai trò BÊN TRONG mệnh đề: từ cần điền làm chủ ngữ của **sells**, nên dùng **whoever**, dù đứng sau giới từ **to**.',
        en: 'Choose whoever or whomever by its role INSIDE the clause: it is the subject of **sells**, so use **whoever**, even though it follows the preposition **to**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Mệnh đề danh từ với wh- và whether', en: 'Noun clauses with wh- words and whether' },
      body: {
        vi: 'Ngoài **that** (bài 15.1), mệnh đề danh từ còn mở đầu bằng **what, who, which, when, where, why, how**, **whether/if** và các từ **-ever**. Chúng đứng được ở mọi vị trí của danh từ: chủ ngữ, tân ngữ, sau giới từ, sau **be**.',
        en: 'Besides **that** (lesson 15.1), noun clauses can begin with **what, who, which, when, where, why, how**, **whether/if** and the **-ever** words. They can fill any noun position: subject, object, after a preposition, after **be**.',
      },
      table: {
        head: [
          { vi: 'Vị trí', en: 'Position' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Chủ ngữ', en: 'Subject' }, 'How the data was collected is unclear.'],
          [{ vi: 'Tân ngữ của động từ', en: 'Object of a verb' }, 'The manual explains how the printer should be cleaned.'],
          [{ vi: 'Sau giới từ', en: 'After a preposition' }, 'We talked about where the event should be held.'],
          [{ vi: 'Sau be', en: 'After be' }, 'The problem is when the parts will arrive.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Mệnh đề danh từ làm chủ ngữ được tính như một đơn vị số ít: **What we need is** more staff; **How the data was collected is** unclear.',
          en: 'A noun clause used as a subject counts as one singular unit: **What we need is** more staff; **How the data was collected is** unclear.',
        },
      },
    },
    {
      heading: { vi: 'What = the thing(s) that', en: 'What = the thing(s) that' },
      body: {
        vi: '**what** tự chứa luôn "danh từ" trong nó (= the thing that / the things that), nên mệnh đề sau **what** luôn THIẾU chủ ngữ hoặc tân ngữ. Đây là điểm phân biệt **what** với **that** (mệnh đề đầy đủ) và với **which** (cần một danh từ đứng trước làm tiền ngữ, bài 12.1).',
        en: '**what** contains its own "noun" (= the thing that / the things that), so the clause after **what** always LACKS a subject or object. This separates **what** from **that** (complete clause) and from **which** (which needs a noun before it as its antecedent, lesson 12.1).',
      },
      table: {
        head: [
          { vi: 'Câu', en: 'Sentence' },
          { vi: 'Giải thích', en: 'Explanation' },
        ],
        rows: [
          ['What caused the delay was a power outage.', { vi: 'caused thiếu chủ ngữ → what', en: 'caused lacks a subject → what' }],
          ['Please send me what you have prepared.', { vi: 'prepared thiếu tân ngữ → what', en: 'prepared lacks an object → what' }],
          ['Please send me the slides which you have prepared.', { vi: 'có tiền ngữ the slides → which (không dùng what)', en: 'antecedent the slides → which (not what)' }],
        ],
      },
      examples: [
        {
          en: '**What** the auditors found was a series of minor billing errors.',
          vi: 'Điều các kiểm toán viên phát hiện ra là một loạt lỗi nhỏ trong việc lập hoá đơn.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không bao giờ có danh từ đứng ngay trước **what** làm tiền ngữ: "the report what you sent" là sai, phải là **the report that/which you sent**.',
          en: 'A noun never stands right before **what** as its antecedent: "the report what you sent" is wrong; it must be **the report that/which you sent**.',
        },
      },
    },
    {
      heading: { vi: 'Trật tự từ trong câu hỏi gián tiếp', en: 'Word order in indirect questions' },
      body: {
        vi: 'Khi câu hỏi nằm bên trong một câu khác (Do you know…, Please tell me…, I wonder…), phần sau từ để hỏi trở về trật tự câu kể **S + V**: không đảo trợ động từ, không dùng **do/does/did**.',
        en: 'When a question sits inside another sentence (Do you know…, Please tell me…, I wonder…), the part after the question word returns to statement order **S + V**: no inversion and no **do/does/did**.',
      },
      table: {
        head: [
          { vi: 'Câu hỏi trực tiếp', en: 'Direct question' },
          { vi: 'Câu hỏi gián tiếp', en: 'Indirect question' },
        ],
        rows: [
          ['Where is the office?', 'Do you know where the office is?'],
          ['When does the seminar start?', 'Please tell me when the seminar starts.'],
          ['Why did the order fail?', 'We are trying to find out why the order failed.'],
          ['Has the invoice been paid?', 'I wonder whether the invoice has been paid.'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Nếu chính từ để hỏi là chủ ngữ, trật tự vẫn là "từ để hỏi + động từ" như câu hỏi gốc: Do you know **who approved** the request? / Nobody knows **what happened** to the package.',
          en: 'If the question word itself is the subject, the order stays "question word + verb" as in the original: Do you know **who approved** the request? / Nobody knows **what happened** to the package.',
        },
      },
    },
    {
      heading: { vi: 'Whether và if', en: 'Whether versus if' },
      body: {
        vi: '**whether** và **if** đều mang nghĩa "liệu… có… không". Sau các động từ như **ask, know, wonder, check, see, decide, determine** thì dùng được cả hai. Ngoài ra chỉ có **whether** mới đứng được trong các vị trí sau:',
        en: '**whether** and **if** both introduce an indirect yes/no question. After verbs such as **ask, know, wonder, check, see, decide, determine**, either is fine. In the following positions, only **whether** is possible:',
      },
      table: {
        head: [
          { vi: 'Vị trí', en: 'Position' },
          { vi: 'Chỉ dùng whether', en: 'Whether only' },
        ],
        rows: [
          [{ vi: 'Sau giới từ', en: 'After a preposition' }, 'It depends on whether the client agrees.'],
          [{ vi: 'Đầu câu, làm chủ ngữ', en: 'At the start, as subject' }, 'Whether the plan works is uncertain.'],
          [{ vi: 'Trước to + V', en: 'Before to + verb' }, 'She is deciding whether to accept the offer.'],
          [{ vi: 'Ngay trước or not', en: 'Directly before or not' }, 'Tell us whether or not you will attend.'],
          [{ vi: 'Sau be (văn viết chuẩn)', en: 'After be (formal written English)' }, 'The question is whether we can afford it.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**or not** đặt ở cuối mệnh đề thì dùng được với cả hai (Let me know if you can come or not), nhưng **if or not** đứng liền nhau thì luôn sai.',
          en: '**or not** at the end of the clause works with both (Let me know if you can come or not), but **if or not** side by side is always wrong.',
        },
      },
    },
    {
      heading: { vi: 'Whoever, whatever, whichever', en: 'Whoever, whatever, whichever' },
      body: {
        vi: 'Các từ **-ever** mở đầu một mệnh đề danh từ mang nghĩa "bất cứ ai / bất cứ thứ gì / bất cứ cái nào (trong số đã biết)". Cả mệnh đề có thể làm chủ ngữ hoặc tân ngữ của câu chính. (Nghĩa nhượng bộ "dù ai/dù gì đi nữa" thuộc bài 13.3.)',
        en: 'The **-ever** words open a noun clause meaning "anyone who / anything that / any one (of a known set) that". The whole clause can be the subject or object of the main sentence. (The concessive meaning "no matter who/what" belongs to lesson 13.3.)',
      },
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['whoever', { vi: 'bất cứ ai (= anyone who)', en: 'anyone who' }, 'Whoever arrives first should unlock the office.'],
          ['whatever (+ noun)', { vi: 'bất cứ thứ gì (= anything that)', en: 'anything that' }, 'We will provide whatever support you need.'],
          ['whichever (+ noun)', { vi: 'bất cứ cái nào trong số có sẵn', en: 'any one of a limited set' }, 'Choose whichever room suits your group.'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'whoever hay whomever do vai trò BÊN TRONG mệnh đề quyết định, không phải từ đứng trước nó. **Give it to whoever needs it** (whoever là chủ ngữ của needs) dù đứng sau giới từ to. TOEIC gần như luôn chọn **whoever**.',
          en: 'Whoever versus whomever depends on the role INSIDE the clause, not on the word before it. **Give it to whoever needs it** (whoever is the subject of needs) even after the preposition to. TOEIC almost always wants **whoever**.',
        },
      },
    },
    {
      heading: { vi: 'How + tính từ / trạng từ', en: 'How + adjective / adverb' },
      body: {
        vi: '**how** có thể đi liền với tính từ hoặc trạng từ để hỏi mức độ: **how long, how often, how soon, how much, how many, how large, how quickly**. Cụm này giữ nguyên ở đầu mệnh đề, sau đó vẫn là **S + V**. Sau **be** (hoặc động từ nối như seem, look, become) thì dùng tính từ, sau động từ thường thì dùng trạng từ.',
        en: '**how** can join an adjective or adverb to ask about degree: **how long, how often, how soon, how much, how many, how large, how quickly**. The phrase stays at the front of the clause, followed by **S + V**. After **be** (or a linking verb such as seem, look, become) use an adjective; after an ordinary verb use an adverb.',
      },
      examples: [
        {
          en: 'The survey asks customers **how satisfied** they are with our delivery service.',
          vi: 'Bản khảo sát hỏi khách hàng mức độ hài lòng của họ với dịch vụ giao hàng của chúng tôi.',
        },
        {
          en: 'The supervisor noted **how quickly** the new hires learned the system.',
          vi: 'Người giám sát ghi nhận nhân viên mới học cách dùng hệ thống nhanh đến mức nào.',
        },
        {
          en: 'Please estimate **how many** guests will attend the reception.',
          vi: 'Vui lòng ước tính bao nhiêu khách sẽ dự tiệc chiêu đãi.',
        },
      ],
    },
    {
      heading: { vi: 'Cách xử lý câu wh-/whether trong Part 5', en: 'How to attack wh-/whether items in Part 5' },
      points: [
        {
          vi: 'Mệnh đề sau chỗ trống THIẾU chủ ngữ/tân ngữ và không có danh từ đứng trước → **what** (hoặc whoever/whatever nếu nghĩa là "bất cứ").',
          en: 'The clause after the blank LACKS a subject/object and no noun stands before it → **what** (or whoever/whatever for "any").',
        },
        {
          vi: 'Mệnh đề đầy đủ, nghĩa "liệu có… không": sau giới từ, đầu câu, trước to V, trước or not → chỉ **whether**.',
          en: 'Complete clause meaning "whether or not": after a preposition, at the start, before to V, before or not → **whether** only.',
        },
        {
          vi: 'Bốn lựa chọn là cùng các từ nhưng khác trật tự → chọn trật tự câu kể **S + V**, loại phương án có do/does/did hoặc đảo ngữ.',
          en: 'Four options with the same words in different orders → choose statement order **S + V**; reject options with do/does/did or inversion.',
        },
        {
          vi: 'Sau **how** + chỗ trống + S + **be**/động từ nối → tính từ; + S + động từ thường → trạng từ.',
          en: 'After **how** + blank + S + **be**/linking verb → adjective; + S + ordinary verb → adverb.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: "------- impressed the judges most was the team's detailed plan for reducing packaging waste.",
      options: ['That', 'What', 'Which', 'Whether'],
      answer: 1,
      explanation: {
        vi: 'Động từ **impressed** trong mệnh đề chủ ngữ còn thiếu chủ ngữ và trước đó không có tiền ngữ → **What** (= the thing that). Which cần danh từ đứng trước; That và Whether cần mệnh đề đầy đủ.',
        en: 'The verb **impressed** in the subject clause has no subject, and there is no antecedent → **What** (= the thing that). Which needs a noun before it; That and Whether need a complete clause.',
      },
      translation: 'Điều gây ấn tượng nhất với ban giám khảo là kế hoạch chi tiết của đội nhằm giảm rác thải bao bì.',
    },
    {
      sentence: 'Please let the front desk know what time ------- so that a taxi can be arranged.',
      options: ['does your flight depart', 'did your flight depart', 'departs your flight', 'your flight departs'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề **what time…** nằm trong câu **let… know**, tức là câu hỏi gián tiếp → trật tự câu kể **S + V**: **your flight departs**. Hai phương án có does/did là trật tự câu hỏi trực tiếp.',
        en: 'The clause **what time…** is inside **let… know**, so it is an indirect question → statement order **S + V**: **your flight departs**. The options with does/did use direct-question order.',
      },
      translation: 'Vui lòng cho quầy lễ tân biết chuyến bay của quý khách cất cánh lúc mấy giờ để chúng tôi sắp xếp taxi.',
    },
    {
      sentence: 'The board has not yet reached a decision on ------- the Osaka office should be relocated.',
      options: ['if', 'that', 'whether', 'what'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống đứng sau giới từ **on** và mở đầu một mệnh đề đầy đủ mang nghĩa "liệu có… không" → chỉ **whether** được. if không đứng sau giới từ; that không theo sau giới từ.',
        en: 'The blank follows the preposition **on** and opens a complete yes/no clause → only **whether** works. if cannot follow a preposition, and neither can that.',
      },
      translation: 'Hội đồng quản trị vẫn chưa đưa ra quyết định về việc có nên dời văn phòng Osaka hay không.',
    },
    {
      sentence: 'The marketing director is still deciding ------- to launch the campaign in April or wait until May.',
      options: ['whether', 'if', 'that', 'what'],
      answer: 0,
      explanation: {
        vi: 'Trước **to + V** (to launch) chỉ dùng **whether**, và cặp **whether… or** nêu hai khả năng. **if to** luôn sai.',
        en: 'Before **to + verb** (to launch) only **whether** is possible, and **whether… or** presents two choices. **if to** is always wrong.',
      },
      translation: 'Giám đốc marketing vẫn đang cân nhắc nên tung chiến dịch vào tháng Tư hay đợi đến tháng Năm.',
    },
    {
      sentence: '------- the new pricing strategy will succeed or not depends largely on customer response.',
      options: ['That', 'If', 'Whether', 'What'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề làm **chủ ngữ** của **depends** và có **or not** → chỉ **Whether** được. If không mở đầu mệnh đề chủ ngữ; That không đi với or not.',
        en: 'The clause is the **subject** of **depends** and contains **or not** → only **Whether** works. If cannot open a subject clause, and That cannot combine with or not.',
      },
      translation: 'Chiến lược giá mới có thành công hay không phụ thuộc phần lớn vào phản ứng của khách hàng.',
    },
    {
      sentence: 'The bonus will be awarded to ------- achieves the highest sales figures this quarter.',
      options: ['whose', 'anyone', 'whomever', 'whoever'],
      answer: 3,
      explanation: {
        vi: 'Từ cần điền làm **chủ ngữ** của **achieves** bên trong mệnh đề → **whoever** (= anyone who). whomever là dạng tân ngữ; anyone thiếu who.',
        en: 'The word is the **subject** of **achieves** inside the clause → **whoever** (= anyone who). whomever is an object form; anyone would need who.',
      },
      translation: 'Tiền thưởng sẽ được trao cho bất kỳ ai đạt doanh số cao nhất trong quý này.',
    },
    {
      sentence: 'Customers may choose ------- payment plan best suits their monthly budget.',
      options: ['whoever', 'whichever', 'however', 'wherever'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng trước danh từ **payment plan**, chọn trong số các gói có sẵn → **whichever** + danh từ. whoever chỉ người và không đứng trước danh từ.',
        en: 'The blank precedes the noun **payment plan**, a choice from a set of available plans → **whichever** + noun. whoever refers to people and cannot precede a noun.',
      },
      translation: 'Khách hàng có thể chọn bất kỳ gói thanh toán nào phù hợp nhất với ngân sách hằng tháng của mình.',
    },
    {
      sentence: 'Before signing the lease, Mr. Kim wanted to know how ------- the office space actually is.',
      options: ['largely', 'largeness', 'enlarge', 'large'],
      answer: 3,
      explanation: {
        vi: 'Cụm **how + ___** đứng trước **the office space is**; sau **be** cần tính từ → **how large**. largely là trạng từ, không làm bổ ngữ cho be.',
        en: 'The phrase **how + ___** precedes **the office space is**; after **be** an adjective is needed → **how large**. largely is an adverb and cannot complement be.',
      },
      translation: 'Trước khi ký hợp đồng thuê, ông Kim muốn biết diện tích văn phòng thực sự rộng đến mức nào.',
    },
    {
      sentence: "The consultant's report clearly describes ------- the company must do to cut its operating costs.",
      options: ['that', 'which', 'what', 'whether'],
      answer: 2,
      explanation: {
        vi: 'Động từ **do** trong mệnh đề còn thiếu tân ngữ và trước chỗ trống không có danh từ làm tiền ngữ → **what**. which cần tiền ngữ; that và whether cần mệnh đề đầy đủ.',
        en: 'The verb **do** in the clause has no object and there is no antecedent noun before the blank → **what**. which needs an antecedent; that and whether need a complete clause.',
      },
      translation: 'Báo cáo của chuyên gia tư vấn mô tả rõ những gì công ty phải làm để cắt giảm chi phí hoạt động.',
    },
    {
      sentence: 'The hotel concierge will gladly arrange ------- guests need during their stay, from theater tickets to car rentals.',
      options: ['whatever', 'whoever', 'however', 'whenever'],
      answer: 0,
      explanation: {
        vi: 'Cả **arrange** và **need** đều thiếu tân ngữ chỉ vật (theater tickets, car rentals) → **whatever** (= anything that). whenever không làm tân ngữ được; whoever chỉ người.',
        en: 'Both **arrange** and **need** lack an object, and the items are things (theater tickets, car rentals) → **whatever** (= anything that). whenever cannot be an object; whoever refers to people.',
      },
      translation: 'Nhân viên hỗ trợ khách của khách sạn sẵn lòng sắp xếp bất cứ thứ gì khách cần trong thời gian lưu trú, từ vé xem kịch đến thuê xe.',
    },
  ],
};
