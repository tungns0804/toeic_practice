import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'prepositions-phrases',
  intro: {
    vi: 'Mỗi đề Part 5 và Part 6 thường có vài câu chỉ hỏi đúng một giới từ, và đáp án không suy ra được bằng logic mà phải thuộc **collocation**: cụm giới từ cố định (on behalf of, in accordance with) hoặc giới từ đi kèm động từ, tính từ, danh từ (comply with, eligible for, demand for). Bài này hệ thống những cụm hay gặp nhất và cách nhận ra chúng trong đề.',
    en: 'Every Part 5 and Part 6 has a few items that test a single preposition, and the answer cannot be worked out by logic: you have to know the **collocation**, either a fixed prepositional phrase (on behalf of, in accordance with) or the preposition that goes with a verb, adjective or noun (comply with, eligible for, demand for). This lesson organizes the most frequent ones and shows how to spot them on the test.',
  },
  mistakes: [
    {
      wrong: 'All contractors must comply [[to]] the updated safety regulations on site.',
      right: 'All contractors must comply [[with]] the updated safety regulations on site.',
      explanation: {
        vi: 'Động từ **comply** luôn đi với **with** (comply with the rules). Đừng để **adhere to**, một động từ cùng nghĩa nhưng dùng to, đánh lừa bạn.',
        en: 'The verb **comply** always takes **with** (comply with the rules). Do not let **adhere to**, a verb with the same meaning that takes to, mislead you.',
      },
    },
    {
      wrong: 'Refunds are processed in accordance [[to]] the terms of your rental agreement.',
      right: 'Refunds are processed in accordance [[with]] the terms of your rental agreement.',
      explanation: {
        vi: 'Cụm cố định là **in accordance with**. Chữ to chỉ có trong cụm gần nghĩa **according to**; trộn hai cụm thành in accordance to là lỗi rất hay gặp.',
        en: 'The fixed phrase is **in accordance with**. The word to belongs to the similar phrase **according to**; blending the two into in accordance to is a very common error.',
      },
    },
    {
      wrong: 'Part-time staff are not eligible [[to]] the year-end bonus.',
      right: 'Part-time staff are not eligible [[for]] the year-end bonus.',
      explanation: {
        vi: '**eligible for** + danh từ (eligible for the bonus). **eligible to** chỉ dùng khi theo sau là động từ nguyên mẫu (eligible to apply).',
        en: '**eligible for** + noun (eligible for the bonus). **eligible to** is used only when a base verb follows (eligible to apply).',
      },
    },
    {
      wrong: 'The report shows a steady increase [[of]] online sales since March.',
      right: 'The report shows a steady increase [[in]] online sales since March.',
      explanation: {
        vi: 'Thứ tăng lên đứng sau **in**: an increase in sales. **of** dùng trước con số chỉ mức tăng: an increase of 15 percent.',
        en: 'The thing that rises comes after **in**: an increase in sales. **of** is used before a figure giving the size of the rise: an increase of 15 percent.',
      },
    },
    {
      wrong: 'Employees can [[access to]] the client database from home.',
      right: 'Employees can [[access]] the client database from home.',
      explanation: {
        vi: 'Sau **can** là động từ, và động từ **access** nhận tân ngữ trực tiếp, không cần giới từ. Chỉ danh từ access mới đi với to: have **access to** the database.',
        en: 'After **can** comes a verb, and the verb **access** takes a direct object with no preposition. Only the noun access takes to: have **access to** the database.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Cụm giới từ cố định: học thuộc cả khối', en: 'Fixed prepositional phrases: learn them as one unit' },
      body: {
        vi: 'Những cụm như **in charge of** hay **on behalf of** hoạt động như MỘT giới từ: theo sau là cụm danh từ (hoặc V-ing, bài 9.2). Đề thường hỏi theo hai kiểu: bỏ trống chữ nhỏ bên trong cụm (in accordance ------- the policy), hoặc cho bốn cụm hoàn chỉnh và bắt bạn chọn theo nghĩa.',
        en: 'Phrases like **in charge of** and **on behalf of** work as ONE preposition: they are followed by a noun phrase (or a gerund, lesson 9.2). The test asks about them in two ways: it blanks out the small word inside the phrase (in accordance ------- the policy), or it offers four complete phrases and makes you choose by meaning.',
      },
      table: {
        head: [
          { vi: 'Cụm (tân ngữ thường gặp)', en: 'Phrase (typical objects)' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['in charge of (a project, the night shift)', { vi: 'phụ trách, chịu trách nhiệm quản lý', en: 'responsible for managing' }],
          ['on behalf of (the company, a client)', { vi: 'thay mặt, đại diện cho', en: 'representing, acting for' }],
          ['in accordance with (the rules, the contract)', { vi: 'theo đúng, tuân theo', en: 'following, as required by' }],
          ['in addition to (the salary, the fee)', { vi: 'ngoài … ra, thêm vào', en: 'as well as, besides' }],
          ['in response to (complaints, a request)', { vi: 'để đáp lại, để đáp ứng', en: 'as a reaction to' }],
          ['in favor of (a proposal, option B)', { vi: 'ủng hộ; chọn cái này thay vì cái khác', en: 'supporting; choosing one thing over another' }],
        ],
      },
      examples: [
        {
          en: 'Mr. Novak spoke **on behalf of** the tenants at the meeting with building management.',
          vi: 'Ông Novak đã thay mặt các khách thuê phát biểu tại cuộc họp với ban quản lý toà nhà.',
        },
        {
          en: '**In response to** customer requests, the store now opens at 7 A.M. on weekends.',
          vi: 'Để đáp ứng yêu cầu của khách hàng, cửa hàng hiện mở cửa lúc 7 giờ sáng vào cuối tuần.',
        },
        {
          en: 'The committee rejected the downtown site **in favor of** a larger plot near the port.',
          vi: 'Uỷ ban đã gạt bỏ địa điểm ở trung tâm để chọn một khu đất rộng hơn gần cảng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chữ **to** trong in addition to, in response to (và prior to, according to, due to ở mục sau) là GIỚI TỪ: sau nó là danh từ hoặc V-ing, không phải động từ nguyên mẫu (in addition to **offering**, không phải in addition to offer). Xem thêm bài 9.2.',
          en: 'The **to** in in addition to and in response to (and in prior to, according to and due to in the next section) is a PREPOSITION: it is followed by a noun or a gerund, not a base verb (in addition to **offering**, not in addition to offer). See lesson 9.2.',
        },
      },
    },
    {
      heading: { vi: 'Cụm chỉ thời điểm, nguồn tin và nguyên nhân', en: 'Phrases of time, source and cause' },
      points: [
        {
          vi: '**as of** có hai nghĩa: với mốc tương lai là "kể từ" (As of July 1, the fee will rise), với mốc hiện tại hoặc quá khứ là "tính đến" (As of today, 300 guests have registered).',
          en: '**as of** has two meanings: with a future date it means "starting from" (As of July 1, the fee will rise); with a present or past point it means "up to" (As of today, 300 guests have registered).',
        },
        {
          vi: '**prior to** và **ahead of** đều có thể dịch là "trước", nhưng ahead of còn có nghĩa "sớm hơn dự kiến" (ahead of schedule) và "vượt lên trước" (ahead of our competitors).',
          en: '**prior to** and **ahead of** can both mean "before", but ahead of also means "earlier than planned" (ahead of schedule) and "in front of, better than" (ahead of our competitors).',
        },
        {
          vi: '**due to** chỉ nguyên nhân và đi với cụm danh từ; cách phân biệt với because + mệnh đề nằm ở bài 8.2. Cẩn thận: **be due to + động từ** lại có nghĩa "dự kiến sẽ" (The shipment is due to arrive on Monday).',
          en: '**due to** gives a cause and takes a noun phrase; how it differs from because + clause is covered in lesson 8.2. Careful: **be due to + verb** means "be scheduled to" (The shipment is due to arrive on Monday).',
        },
      ],
      table: {
        head: [
          { vi: 'Cụm (tân ngữ thường gặp)', en: 'Phrase (typical objects)' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['prior to (the meeting, departure)', { vi: 'trước (trang trọng hơn before)', en: 'before (more formal)' }],
          ['ahead of (schedule, the deadline)', { vi: 'trước, sớm hơn', en: 'before, earlier than' }],
          ['as of (May 1, today)', { vi: 'kể từ; tính đến', en: 'starting from; up to' }],
          ['according to (the report, Ms. Ito, plan)', { vi: 'theo (nguồn tin, lời ai đó; kế hoạch)', en: 'as stated by; in line with (a plan)' }],
          ['due to (bad weather, high demand)', { vi: 'do, vì (nguyên nhân)', en: 'because of' }],
          ['regardless of (age, cost)', { vi: 'bất kể, bất chấp', en: 'without being affected by' }],
        ],
      },
      examples: [
        {
          en: '**As of** next Monday, all visitors must wear a badge inside the factory.',
          vi: 'Kể từ thứ Hai tới, mọi khách tham quan phải đeo thẻ khi vào trong nhà máy.',
        },
        {
          en: '**According to** the quarterly report, shipping costs fell by 6 percent.',
          vi: 'Theo báo cáo quý, chi phí vận chuyển đã giảm 6%.',
        },
        {
          en: 'The conference fee is the same **regardless of** the registration date.',
          vi: 'Phí tham dự hội nghị như nhau bất kể ngày đăng ký.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**according to** vs **in accordance with**: khi phía sau là một NGUỒN THÔNG TIN (the report, a survey, the analyst) thì chỉ dùng according to. in accordance with trang trọng hơn, đi với quy định, luật, hợp đồng mà ai đó phải làm theo. Không có cụm according with hay in accordance to.',
          en: '**according to** vs **in accordance with**: when a SOURCE of information follows (the report, a survey, the analyst), only according to works. in accordance with is more formal and goes with rules, laws or contracts that someone must follow. There is no according with or in accordance to.',
        },
      },
    },
    {
      heading: { vi: 'Động từ + giới từ', en: 'Verb + preposition' },
      body: {
        vi: 'Nhiều động từ chỉ đi được với một giới từ nhất định trước tân ngữ. Đề thường đặt động từ ngay trước chỗ trống và cho bốn giới từ để chọn; vài động từ còn đổi nghĩa khi đổi giới từ.',
        en: 'Many verbs take one particular preposition before their object. The test usually puts the verb right before the blank and offers four prepositions; a few verbs even change meaning when the preposition changes.',
      },
      table: {
        head: [
          { vi: 'Động từ + giới từ', en: 'Verb + preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['comply with', { vi: 'tuân thủ (quy định, tiêu chuẩn)', en: 'obey (a rule, a standard)' }],
          ['apply for', { vi: 'nộp đơn xin (việc làm, khoản vay, giấy phép)', en: 'formally request (a job, a loan, a permit)' }],
          ['apply to', { vi: 'nộp đơn vào (công ty, trường); áp dụng cho', en: 'send an application to (a company, a school); be relevant to' }],
          ['account for', { vi: 'chiếm (một tỉ lệ); giải thích (cho điều gì)', en: 'make up (a share); explain' }],
          ['depend on / rely on', { vi: 'phụ thuộc vào; dựa vào, tin cậy vào', en: 'be determined by; trust, need' }],
          ['respond to / refer to', { vi: 'phản hồi; nhắc đến, tham khảo', en: 'reply to; mention, consult' }],
          ['consist of', { vi: 'gồm có', en: 'be made up of' }],
          ['participate in / specialize in / invest in', { vi: 'tham gia; chuyên về; đầu tư vào', en: 'take part in; focus on; put money into' }],
          ['deal with', { vi: 'giải quyết, xử lý', en: 'handle' }],
          ['register for / qualify for', { vi: 'đăng ký (khoá học, sự kiện); đủ điều kiện (nhận)', en: 'sign up for (a course, an event); be entitled to' }],
          ['result in / result from', { vi: 'dẫn đến (kết quả) / bắt nguồn từ (nguyên nhân)', en: 'cause (an effect) / be caused by' }],
        ],
      },
      examples: [
        {
          en: "All tenants must **comply with** the building's rules on noise after 10 P.M.",
          vi: 'Mọi khách thuê phải tuân thủ quy định của toà nhà về tiếng ồn sau 10 giờ tối.',
        },
        {
          en: "Business travelers **account for** about a third of the hotel's guests.",
          vi: 'Khách công tác chiếm khoảng một phần ba lượng khách của khách sạn.',
        },
        {
          en: 'The shipping delay **resulted from** a customs inspection and **resulted in** two canceled orders.',
          vi: 'Việc giao hàng chậm bắt nguồn từ một đợt kiểm tra hải quan và dẫn đến hai đơn hàng bị huỷ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Ngược lại, một số động từ đi THẲNG với tân ngữ, không cần giới từ: **discuss** the plan (không có about), **contact** our office (không có with), **attend** the meeting, **reach** a decision, **request** a refund, **emphasize** quality. Chính danh từ cùng gốc mới có giới từ: a discussion about, contact with, a request for, emphasis on. (attend to là một nghĩa khác: lo liệu, xử lý.)',
          en: 'On the other hand, some verbs take their object DIRECTLY, with no preposition: **discuss** the plan (no about), **contact** our office (no with), **attend** the meeting, **reach** a decision, **request** a refund, **emphasize** quality. It is the related noun that takes a preposition: a discussion about, contact with, a request for, emphasis on. (attend to has a different meaning: deal with, take care of.)',
        },
      },
    },
    {
      heading: { vi: 'Tính từ + giới từ', en: 'Adjective + preposition' },
      points: [
        {
          vi: 'be **in charge of** và be **responsible for** cùng nghĩa "phụ trách" nhưng khác giới từ: không viết in charge for hay responsible of.',
          en: 'be **in charge of** and be **responsible for** both mean "be in charge", but the prepositions differ: never write in charge for or responsible of.',
        },
        {
          vi: 'Cụm tính từ + giới từ giữ nguyên khi đứng ngay sau danh từ: staff **responsible for** payroll, products **subject to** import tax. Nếu chỗ trống đứng trước giới từ, hãy dùng giới từ đó để loại tính từ.',
          en: 'An adjective + preposition pair stays the same when it follows a noun directly: staff **responsible for** payroll, products **subject to** import tax. If the blank comes before the preposition, use that preposition to rule adjectives out.',
        },
      ],
      table: {
        head: [
          { vi: 'Tính từ + giới từ', en: 'Adjective + preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['responsible for', { vi: 'chịu trách nhiệm về', en: 'in charge of, accountable for' }],
          ['eligible for + noun / eligible to + verb', { vi: 'đủ điều kiện nhận / đủ điều kiện làm gì', en: 'entitled to have / allowed to do' }],
          ['familiar with', { vi: 'quen thuộc với, thành thạo', en: 'knowing something well' }],
          ['aware of', { vi: 'nhận thức được, biết rõ', en: 'knowing that something exists' }],
          ['capable of', { vi: 'có khả năng', en: 'able to do' }],
          ['subject to', { vi: 'phải chịu, tuỳ thuộc vào (subject to change, subject to approval)', en: 'liable to, depending on (subject to change, subject to approval)' }],
          ['compatible with / consistent with', { vi: 'tương thích với / nhất quán, phù hợp với', en: 'able to work with / in agreement with' }],
          ['exempt from / dependent on', { vi: 'được miễn / phụ thuộc vào', en: 'free from (a duty, a tax) / relying on' }],
        ],
      },
      examples: [
        {
          en: 'Only employees with one year of service are **eligible for** the tuition assistance program.',
          vi: 'Chỉ nhân viên đã làm việc đủ một năm mới đủ điều kiện tham gia chương trình hỗ trợ học phí.',
        },
        {
          en: 'All delivery dates are **subject to** the availability of stock.',
          vi: 'Mọi ngày giao hàng đều tuỳ thuộc vào tình trạng còn hàng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Chiều của **familiar** quyết định giới từ: NGƯỜI + be familiar **with** + việc/vật (Our staff are familiar with the software); VIỆC/VẬT + be familiar **to** + người (The software is familiar to our staff).',
          en: 'The direction of **familiar** decides the preposition: PERSON + be familiar **with** + thing (Our staff are familiar with the software); THING + be familiar **to** + person (The software is familiar to our staff).',
        },
      },
    },
    {
      heading: { vi: 'Danh từ + giới từ', en: 'Noun + preposition' },
      body: {
        vi: 'Danh từ cũng có giới từ đi kèm riêng, kể cả khi động từ cùng gốc không cần giới từ: demand a refund (động từ) nhưng demand **for** (danh từ); emphasize quality nhưng emphasis **on**; access the files nhưng access **to**.',
        en: 'Nouns have their own prepositions too, even when the related verb needs none: demand a refund (verb) but demand **for** (noun); emphasize quality but emphasis **on**; access the files but access **to**.',
      },
      table: {
        head: [
          { vi: 'Danh từ + giới từ', en: 'Noun + preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['demand for', { vi: 'nhu cầu về', en: 'the desire of buyers for' }],
          ['increase / rise / decrease / decline in', { vi: 'sự tăng / giảm về (cái gì)', en: 'a rise / fall in (something)' }],
          ['increase / rise / decrease / decline of + figure', { vi: 'tăng / giảm (một mức cụ thể)', en: 'a rise / fall of (a stated amount)' }],
          ['access to', { vi: 'quyền, khả năng tiếp cận, sử dụng', en: 'the right or means to use or enter' }],
          ['request for / need for / reason for', { vi: 'yêu cầu / nhu cầu / lý do (về điều gì)', en: 'a request / need / reason for' }],
          ['solution to / approach to', { vi: 'giải pháp cho / cách tiếp cận (vấn đề)', en: 'an answer to / a way of handling' }],
          ['effect on / impact on / emphasis on', { vi: 'tác động lên / ảnh hưởng đến / sự chú trọng vào', en: 'an effect on / an impact on / a focus on' }],
          ['experience in / expertise in', { vi: 'kinh nghiệm về / chuyên môn về', en: 'practical knowledge of / special skill in' }],
        ],
      },
      examples: [
        {
          en: 'There is strong **demand for** bilingual staff at our Da Nang resort.',
          vi: 'Khu nghỉ dưỡng của chúng tôi ở Đà Nẵng đang rất cần nhân viên thông thạo hai thứ tiếng.',
        },
        {
          en: 'The retailer reported a 9 percent **decline in** fourth-quarter profits.',
          vi: 'Nhà bán lẻ báo cáo lợi nhuận quý IV giảm 9%.',
        },
        {
          en: 'The new parking rules have had little **impact on** customer numbers.',
          vi: 'Quy định đỗ xe mới hầu như không ảnh hưởng đến lượng khách.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Cùng là increase: **an increase in sales** (in + thứ tăng lên) nhưng **an increase of 8 percent** (of + con số). Hai giới từ có thể đứng chung một câu: an increase **of** 8 percent **in** sales.',
          en: 'Same noun, two prepositions: **an increase in sales** (in + the thing that rises) but **an increase of 8 percent** (of + a figure). Both can appear together: an increase **of** 8 percent **in** sales.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu giới từ trong Part 5', en: 'Attacking preposition items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn đều là giới từ → nhìn TỪ ĐỨNG NGAY TRƯỚC chỗ trống: động từ, tính từ hay danh từ đó "đòi" giới từ nào (comply → with, eligible → for, demand → for).',
          en: 'All four options are prepositions → look at the WORD RIGHT BEFORE the blank: which preposition does that verb, adjective or noun require (comply → with, eligible → for, demand → for)?',
        },
        {
          vi: 'Chỗ trống nằm GIỮA một cụm (in accordance -------, in response -------) → nhớ lại cả khối, đừng dịch từng chữ.',
          en: 'The blank sits INSIDE a phrase (in accordance -------, in response -------) → recall the whole unit; do not translate word by word.',
        },
        {
          vi: 'Bốn lựa chọn là bốn cụm khác nhau (on behalf of / regardless of / prior to…) → lúc này mới dịch: xác định quan hệ nghĩa giữa cụm danh từ phía sau và phần còn lại của câu (thay mặt, bất kể, trước, theo…).',
          en: 'The options are four different phrases (on behalf of / regardless of / prior to…) → now translate: work out how the noun phrase after the blank relates to the rest of the sentence (representing, despite, before, as stated by…).',
        },
        {
          vi: 'Chỗ trống đứng TRƯỚC một giới từ và bốn lựa chọn là tính từ hoặc danh từ → làm ngược lại: giới từ phía sau cho biết từ nào đi được (------- for → responsible, eligible; ------- of → aware, capable).',
          en: 'The blank comes BEFORE a preposition and the options are adjectives or nouns → work backwards: the preposition after the blank tells you which word fits (------- for → responsible, eligible; ------- of → aware, capable).',
        },
        {
          vi: 'Con số đứng ngay sau increase, rise, decline → chọn **of**; thứ tăng giảm đứng sau → chọn **in**.',
          en: 'A figure right after increase, rise or decline → choose **of**; the thing that rises or falls → choose **in**.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Ghi chép theo CỤM (comply with, account for, increase in) chứ không ghi từ đơn lẻ. Khi ôn, che giới từ đi và tự điền lại: đó là cách nhanh nhất để thuộc collocation.',
          en: 'Write words down as PAIRS (comply with, account for, increase in), not as single words. When reviewing, cover the preposition and fill it in yourself: it is the fastest way to learn collocations.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Ms. Okafor accepted the industry award ------- the entire engineering team, which was unable to attend the ceremony.',
      options: ['prior to', 'on behalf of', 'as of', 'regardless of'],
      answer: 1,
      explanation: {
        vi: 'Cả đội **không thể dự lễ** nên cô Okafor nhận giải **thay mặt** họ → **on behalf of**. prior to (trước) và as of (kể từ) chỉ thời gian, còn regardless of (bất kể) không hợp nghĩa.',
        en: 'The team **was unable to attend**, so Ms. Okafor accepted the award as its representative → **on behalf of**. prior to (before) and as of (starting from) refer to time, and regardless of (despite) makes no sense here.',
      },
      translation: 'Cô Okafor đã thay mặt toàn bộ đội kỹ sư nhận giải thưởng của ngành, vì cả đội không thể tham dự buổi lễ.',
    },
    {
      sentence: 'All expense reports must be prepared in accordance ------- the guidelines set out in the updated finance manual.',
      options: ['to', 'for', 'with', 'by'],
      answer: 2,
      explanation: {
        vi: 'Cụm cố định là **in accordance with** (theo đúng, tuân theo). in accordance to là lỗi do trộn với **according to**; for và by không đi với cụm này.',
        en: 'The fixed phrase is **in accordance with** (following, as required by). in accordance to is an error caused by mixing it up with **according to**; for and by never complete this phrase.',
      },
      translation: 'Mọi báo cáo chi phí phải được lập theo đúng các hướng dẫn nêu trong sổ tay tài chính đã cập nhật.',
    },
    {
      sentence: '------- the latest guest survey, nearly 70 percent of travelers prefer to check in using a mobile app.',
      options: ['In accordance with', 'In response to', 'On behalf of', 'According to'],
      answer: 3,
      explanation: {
        vi: '**the latest guest survey** là NGUỒN THÔNG TIN đưa ra con số 70% → **According to** (theo). In accordance with dùng cho quy định mà ai đó làm theo, trong khi du khách không "tuân theo" cuộc khảo sát.',
        en: '**the latest guest survey** is the SOURCE that reports the 70 percent figure → **According to**. In accordance with is used for rules that someone follows, and travelers are not obeying the survey.',
      },
      translation: 'Theo khảo sát khách hàng mới nhất, gần 70% du khách thích làm thủ tục nhận phòng bằng ứng dụng di động.',
    },
    {
      sentence: 'Customers may return unopened items within 30 days for a full refund, ------- the original method of payment.',
      options: ['regardless of', 'in charge of', 'ahead of', 'on behalf of'],
      answer: 0,
      explanation: {
        vi: 'Ý câu: được hoàn tiền đầy đủ **dù đã thanh toán bằng cách nào** → **regardless of** (bất kể). in charge of (phụ trách) và on behalf of (thay mặt) không hợp nghĩa với "phương thức thanh toán", còn ahead of (trước) chỉ thời gian hoặc vị trí.',
        en: 'The meaning is a full refund **no matter how the customer paid** → **regardless of**. in charge of (managing) and on behalf of (representing) make no sense with "method of payment", and ahead of (before) refers to time or position.',
      },
      translation: 'Khách hàng có thể trả lại sản phẩm chưa mở trong vòng 30 ngày để được hoàn tiền toàn bộ, bất kể phương thức thanh toán ban đầu.',
    },
    {
      sentence: "Online orders now account ------- nearly 45 percent of Brightway Home Goods' total annual revenue.",
      options: ['to', 'with', 'on', 'for'],
      answer: 3,
      explanation: {
        vi: 'Phía sau là một tỉ lệ (**nearly 45 percent of** doanh thu) → **account for** (chiếm). Với nghĩa này, account không đi với to, with hay on.',
        en: 'What follows is a share (**nearly 45 percent of** the revenue) → **account for** (make up). In this sense, account does not take to, with or on.',
      },
      translation: 'Đơn hàng trực tuyến hiện chiếm gần 45% tổng doanh thu hằng năm của Brightway Home Goods.',
    },
    {
      sentence: 'Since its introduction last spring, the new shift-scheduling software has resulted ------- a 20 percent drop in overtime costs.',
      options: ['from', 'in', 'to', 'at'],
      answer: 1,
      explanation: {
        vi: 'Phần mềm là NGUYÊN NHÂN, **mức giảm 20%** chi phí làm thêm giờ là KẾT QUẢ: nguyên nhân + **result in** + kết quả. result from đi theo chiều ngược lại (kết quả + result from + nguyên nhân), nên sẽ thành "phần mềm bắt nguồn từ việc giảm chi phí".',
        en: 'The software is the CAUSE and **the 20 percent drop** in overtime costs is the EFFECT: cause + **result in** + effect. result from works the other way round (effect + result from + cause), so it would mean the software came from the drop in costs.',
      },
      translation: 'Kể từ khi được đưa vào sử dụng vào mùa xuân vừa qua, phần mềm xếp ca mới đã giúp chi phí làm thêm giờ giảm 20%.',
    },
    {
      sentence: 'Applicants for the front desk position should be familiar ------- standard hotel reservation software.',
      options: ['with', 'to', 'of', 'at'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ là NGƯỜI (**Applicants**), phía sau là thứ họ cần biết dùng → **familiar with**. familiar to chỉ dùng khi chủ ngữ là sự vật và theo sau là người (The software is familiar to them).',
        en: 'The subject is PEOPLE (**Applicants**) and what follows is the thing they should know → **familiar with**. familiar to is used only when a thing is the subject and a person follows (The software is familiar to them).',
      },
      translation: 'Ứng viên cho vị trí lễ tân cần thành thạo phần mềm đặt phòng khách sạn thông dụng.',
    },
    {
      sentence: 'As the regional operations manager, Mr. Haddad is ------- for approving all purchase orders over $5,000.',
      options: ['capable', 'aware', 'responsible', 'familiar'],
      answer: 2,
      explanation: {
        vi: 'Giới từ **for** ngay sau chỗ trống quyết định tính từ: **responsible for** (chịu trách nhiệm về). capable và aware đi với of, familiar đi với with, nên không từ nào khác đứng trước for được.',
        en: 'The preposition **for** right after the blank decides the adjective: **responsible for**. capable and aware take of, and familiar takes with, so none of them can be followed by for.',
      },
      translation: 'Với vai trò quản lý vận hành khu vực, ông Haddad chịu trách nhiệm phê duyệt mọi đơn đặt hàng trên 5.000 đô la.',
    },
    {
      sentence: 'The hotel recorded an increase ------- 12 percent in room bookings after it was featured in a popular travel magazine.',
      options: ['in', 'for', 'on', 'of'],
      answer: 3,
      explanation: {
        vi: 'Ngay sau chỗ trống là một CON SỐ (**12 percent**) → an increase **of** + mức tăng. **in** dành cho thứ tăng lên, và câu đã có sẵn **in room bookings** ở phía sau.',
        en: 'Right after the blank comes a FIGURE (**12 percent**) → an increase **of** + amount. **in** introduces the thing that rises, and the sentence already has **in room bookings** later on.',
      },
      translation: 'Khách sạn ghi nhận lượng đặt phòng tăng 12% sau khi được giới thiệu trên một tạp chí du lịch nổi tiếng.',
    },
    {
      sentence: 'Premium members enjoy unlimited access ------- the airport lounges operated by our partner airlines.',
      options: ['to', 'for', 'of', 'on'],
      answer: 0,
      explanation: {
        vi: 'Danh từ **access** đi với **to** + nơi chốn hoặc thứ được sử dụng: access to the lounges. access for chỉ đứng trước NGƯỜI được hưởng (access for wheelchair users), không đứng trước địa điểm.',
        en: 'The noun **access** takes **to** + the place or thing being used: access to the lounges. access for goes before the PEOPLE who benefit (access for wheelchair users), not before a place.',
      },
      translation: 'Hội viên cao cấp được sử dụng không giới hạn các phòng chờ sân bay do các hãng hàng không đối tác của chúng tôi vận hành.',
    },
  ],
};
