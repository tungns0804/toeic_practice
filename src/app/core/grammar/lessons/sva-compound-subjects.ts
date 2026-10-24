import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-compound-subjects',
  intro: {
    vi: 'Khi chủ ngữ gồm hai danh từ nối bằng **and**, **or**, **nor** hoặc một cặp liên từ (both… and, either… or, neither… nor, not only… but also), động từ chia số ít hay số nhiều là do **từ nối** quyết định. Part 5 và Part 6 hay đưa ra các dạng của cùng một động từ (is/are, has/have, -s/không -s) để kiểm tra đúng quy tắc này.',
    en: 'When a subject is made of two nouns joined by **and**, **or**, **nor** or a paired conjunction (both… and, either… or, neither… nor, not only… but also), the **connector** decides whether the verb is singular or plural. Parts 5 and 6 often offer several forms of the same verb (is/are, has/have, with or without -s) to test exactly this rule.',
  },
  mistakes: [
    {
      wrong: 'The sales manager and her assistant [[is]] attending the trade fair in Osaka.',
      right: 'The sales manager and her assistant [[are]] attending the trade fair in Osaka.',
      explanation: {
        vi: 'Hai danh từ nối bằng **and** chỉ hai người khác nhau → chủ ngữ số nhiều, dùng **are**. Đừng chỉ nhìn danh từ đứng sát động từ (assistant).',
        en: 'Two nouns joined by **and** that name two different people form a plural subject, so use **are**. Do not look only at the noun right before the verb (assistant).',
      },
    },
    {
      wrong: 'Neither the store manager nor the cashiers [[was]] aware of the new refund policy.',
      right: 'Neither the store manager nor the cashiers [[were]] aware of the new refund policy.',
      explanation: {
        vi: 'Với **neither… nor**, động từ hòa hợp với chủ ngữ **gần nhất**. Danh từ đứng gần động từ là **the cashiers** (số nhiều) → **were**.',
        en: 'With **neither… nor**, the verb agrees with the **nearer** subject. The noun closest to the verb is **the cashiers** (plural) → **were**.',
      },
    },
    {
      wrong: 'Every invoice and receipt [[need]] to be scanned before Friday.',
      right: 'Every invoice and receipt [[needs]] to be scanned before Friday.',
      explanation: {
        vi: '**Every** (hoặc **each**) đứng trước cụm A and B khiến ta xét từng thứ một → động từ số ít **needs**.',
        en: '**Every** (or **each**) in front of A and B makes us consider the items one at a time → singular verb **needs**.',
      },
    },
    {
      wrong: 'Not only the CEO but also the board members [[has]] approved the merger.',
      right: 'Not only the CEO but also the board members [[have]] approved the merger.',
      explanation: {
        vi: 'Với **not only A but also B**, động từ theo **B**, tức vế đứng gần động từ. **the board members** là số nhiều → **have**.',
        en: 'With **not only A but also B**, the verb follows **B**, the part closer to it. **the board members** is plural → **have**.',
      },
    },
    {
      wrong: 'The owner and head chef of Bistro Verde, Ms. Rossi, [[are]] opening a second restaurant downtown.',
      right: 'The owner and head chef of Bistro Verde, Ms. Rossi, [[is]] opening a second restaurant downtown.',
      explanation: {
        vi: 'Chỉ có một từ hạn định **The** cho cả cụm **owner and head chef**, và phía sau là tên một người (**Ms. Rossi**) → hai chức danh của CÙNG một người → động từ số ít **is**.',
        en: 'There is only one determiner, **The**, for **owner and head chef**, and a single name follows (**Ms. Rossi**) → two titles of the SAME person → singular **is**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'A and B, both A and B → số nhiều', en: 'A and B, both A and B → plural' },
      body: {
        vi: 'Hai (hoặc nhiều) danh từ nối bằng **and** tạo thành một chủ ngữ số nhiều, kể cả khi từng danh từ đều ở số ít: một cộng một là hai. Thêm **both** ở đầu chỉ nhấn mạnh "cả hai", động từ vẫn chia số nhiều.',
        en: 'Two (or more) nouns joined by **and** form a plural subject, even when each noun is singular: one plus one makes two. Adding **both** in front only stresses "the two of them"; the verb is still plural.',
      },
      table: {
        head: [
          { vi: 'Chủ ngữ', en: 'Subject' },
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Lý do', en: 'Reason' },
        ],
        rows: [
          ['The manager and the accountant', 'are / were / have / review', { vi: 'Hai người → số nhiều', en: 'Two people → plural' }],
          ['A laptop, a monitor and a headset', 'are / were / have / come', { vi: 'Ba vật → số nhiều', en: 'Three items → plural' }],
          ['Both the lobby and the gym', 'are / were / have / need', { vi: 'both… and luôn số nhiều', en: 'both… and is always plural' }],
        ],
      },
      examples: [
        {
          en: 'The hotel manager and the head chef **are** meeting with the wedding planner this afternoon.',
          vi: 'Quản lý khách sạn và bếp trưởng sẽ gặp người tổ chức tiệc cưới vào chiều nay.',
        },
        {
          en: 'Both the shipping fee and the import tax **have** been added to your invoice.',
          vi: 'Cả phí vận chuyển lẫn thuế nhập khẩu đều đã được cộng vào hóa đơn của quý khách.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**as well as, along with, together with** KHÔNG có tác dụng như **and**: động từ vẫn theo danh từ đứng trước chúng (bài 3.2). Chỉ **and** mới cộng hai vế thành số nhiều.',
          en: '**as well as, along with, together with** do NOT work like **and**: the verb still follows the noun before them (lesson 3.2). Only **and** adds the two parts into a plural.',
        },
      },
    },
    {
      heading: { vi: 'Ngoại lệ: A and B chỉ một người hoặc một khái niệm', en: 'Exception: A and B naming one person or one idea' },
      body: {
        vi: 'Khi hai danh từ nối bằng **and** cùng chỉ MỘT người, hoặc gộp lại thành MỘT khái niệm quen thuộc, động từ chia số ít. Dấu hiệu thường gặp của "một người": chỉ có **một** từ hạn định (the, our, a…) đứng trước cả cụm và ngữ cảnh (một tên riêng, đại từ his/her) xác nhận điều đó. Nếu từ hạn định được lặp lại trước danh từ thứ hai thì đó là hai người khác nhau → số nhiều.',
        en: 'When two nouns joined by **and** refer to ONE person, or together form ONE familiar idea, the verb is singular. The usual signal of "one person": there is only **one** determiner (the, our, a…) before the whole phrase, and the context (a single name, the pronoun his/her) confirms it. If the determiner is repeated before the second noun, they are two different people → plural.',
      },
      table: {
        head: [
          { vi: 'Chủ ngữ', en: 'Subject' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Động từ', en: 'Verb' },
        ],
        rows: [
          ['The president and CEO, Ms. Wu, is…', { vi: 'Một người giữ hai chức vụ', en: 'One person with two titles' }, { vi: 'Số ít', en: 'Singular' }],
          ['The president and the CEO are…', { vi: 'Hai người khác nhau', en: 'Two different people' }, { vi: 'Số nhiều', en: 'Plural' }],
          ['Normal wear and tear is…', { vi: 'Một khái niệm: hao mòn do sử dụng', en: 'One idea: damage from normal use' }, { vi: 'Số ít', en: 'Singular' }],
          ['Room and board is…', { vi: 'Một gói: chỗ ở kèm bữa ăn', en: 'One package: lodging plus meals' }, { vi: 'Số ít', en: 'Singular' }],
        ],
      },
      examples: [
        {
          en: "The association's secretary and treasurer, Mr. Cole, **has** signed the new office lease.",
          vi: 'Thư ký kiêm thủ quỹ của hiệp hội, ông Cole, đã ký hợp đồng thuê văn phòng mới.',
        },
        {
          en: 'Normal wear and tear **is** not covered by the warranty.',
          vi: 'Hao mòn thông thường do sử dụng không nằm trong phạm vi bảo hành.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Trong Part 5, cụm kiểu "The president and CEO" thường đi kèm tên một người (Mr. X) hoặc đại từ his/her để xác nhận đó là một người. Không có dấu hiệu như vậy thì cứ mặc định A and B là số nhiều.',
          en: 'In Part 5, a phrase like "The president and CEO" usually comes with one name (Mr. X) or the pronoun his/her to show it is one person. Without such a signal, treat A and B as plural.',
        },
      },
    },
    {
      heading: { vi: 'Each / every + A and B → số ít', en: 'Each / every + A and B → singular' },
      body: {
        vi: 'Khi **each** hoặc **every** đứng trước các danh từ nối bằng and, người viết đang nói đến TỪNG người, từng vật một, nên động từ chia số ít. Các danh từ theo sau each/every cũng ở dạng số ít.',
        en: 'When **each** or **every** comes before nouns joined by and, the writer is talking about each person or item individually, so the verb is singular. The nouns after each/every are singular as well.',
      },
      examples: [
        {
          en: '**Every** room and suite in the hotel **has** a coffee maker and a safe.',
          vi: 'Mọi phòng thường và phòng suite trong khách sạn đều có máy pha cà phê và két sắt.',
        },
        {
          en: '**Each** intern and new hire **receives** a laptop on the first day.',
          vi: 'Mỗi thực tập sinh và nhân viên mới đều được nhận một máy tính xách tay vào ngày đầu tiên.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Nếu **each** đứng SAU chủ ngữ ghép thì động từ vẫn số nhiều: The manager and the assistant **each have** a parking space. Còn **each of / every one of + danh từ số nhiều** thuộc bài lượng từ (bài 3.3).',
          en: 'If **each** comes AFTER the compound subject, the verb stays plural: The manager and the assistant **each have** a parking space. **each of / every one of + plural noun** belongs to the quantifier lesson (lesson 3.3).',
        },
      },
    },
    {
      heading: { vi: 'or, either… or, neither… nor, not only… but also → theo chủ ngữ gần nhất', en: 'or, either… or, neither… nor, not only… but also → agree with the nearer subject' },
      body: {
        vi: 'Với các từ nối mang nghĩa lựa chọn hoặc loại trừ (**or, either… or, neither… nor**) và với **not only… but also**, ta KHÔNG cộng hai vế lại. Động từ hòa hợp với chủ ngữ đứng **gần động từ nhất**, tức vế B.',
        en: 'With connectors of choice or exclusion (**or, either… or, neither… nor**) and with **not only… but also**, the two parts are NOT added together. The verb agrees with the subject **closest to the verb**, that is, part B.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Structure' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Động từ theo', en: 'Verb follows' },
        ],
        rows: [
          ['A or B', 'A full refund or two free nights are offered.', { vi: 'two free nights (số nhiều) → are', en: 'two free nights (plural) → are' }],
          ['either A or B', 'Either the drivers or the dispatcher calls the client.', { vi: 'the dispatcher (số ít) → calls', en: 'the dispatcher (singular) → calls' }],
          ['neither A nor B', 'Neither the CFO nor the auditors were available.', { vi: 'the auditors (số nhiều) → were', en: 'the auditors (plural) → were' }],
          ['not only A but also B', 'Not only the interns but also the manager was praised.', { vi: 'the manager (số ít) → was', en: 'the manager (singular) → was' }],
        ],
      },
      examples: [
        {
          en: 'Neither the delivery address nor the invoice numbers **were** correct on the order form.',
          vi: 'Cả địa chỉ giao hàng lẫn các số hóa đơn trên phiếu đặt hàng đều không chính xác.',
        },
        {
          en: 'Not only the guests but also the event coordinator **was** surprised by the sudden change of venue.',
          vi: 'Không chỉ khách mời mà cả điều phối viên sự kiện cũng bất ngờ trước việc đổi địa điểm đột ngột.',
        },
      ],
    },
    {
      heading: { vi: 'Những bẫy quanh quy tắc "gần nhất"', en: 'Traps around the "nearer subject" rule' },
      points: [
        {
          vi: 'Hai vế đều số ít → động từ số ít, dù câu đang nói đến hai thứ: Neither the scanner nor the fax machine **is** connected. A taxi or a hotel shuttle **is** available.',
          en: 'Both parts singular → singular verb, even though two things are mentioned: Neither the scanner nor the fax machine **is** connected. A taxi or a hotel shuttle **is** available.',
        },
        {
          vi: 'Hai vế đều số nhiều → động từ số nhiều: Either the brochures or the posters **need** reprinting.',
          en: 'Both parts plural → plural verb: Either the brochures or the posters **need** reprinting.',
        },
        {
          vi: 'Một vế số ít, một vế số nhiều → chỉ nhìn vế B. Văn viết chuẩn thường đặt vế số nhiều ở sau cho câu tự nhiên: Neither the manager nor the employees **were** informed.',
          en: 'One part singular, one plural → look only at part B. Careful writers usually put the plural part second so the sentence sounds natural: Neither the manager nor the employees **were** informed.',
        },
        {
          vi: 'Đừng nhầm **neither A nor B** (hai danh từ, theo vế gần) với **neither of + danh từ số nhiều** (đi với động từ số ít trong văn viết trang trọng, bài 3.3): Neither of the reports **is** ready.',
          en: 'Do not confuse **neither A nor B** (two nouns, follow the nearer one) with **neither of + plural noun** (takes a singular verb in formal writing, lesson 3.3): Neither of the reports **is** ready.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong văn nói, nhiều người bản xứ dùng động từ số nhiều sau neither… nor dù cả hai vế đều số ít (Neither Tom nor Ann are coming). Đề TOEIC theo văn viết chuẩn: hai vế số ít thì chọn động từ số ít.',
          en: 'In speech, many native speakers use a plural verb after neither… nor even when both parts are singular (Neither Tom nor Ann are coming). TOEIC follows standard written English: two singular parts take a singular verb.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chủ ngữ ghép trong Part 5', en: 'Solving compound-subject items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các dạng của một động từ (is/are, has/have, có -s/không -s) → tìm chủ ngữ và xem hai vế được nối bằng gì.',
          en: 'Four options are forms of one verb (is/are, has/have, with or without -s) → find the subject and see what joins its two parts.',
        },
        {
          vi: 'Nối bằng **and** hoặc **both… and** → số nhiều. Kiểm tra hai ngoại lệ: có **each/every** đứng trước → số ít; chỉ một từ hạn định kèm tên một người → số ít.',
          en: 'Joined by **and** or **both… and** → plural. Check the two exceptions: **each/every** in front → singular; one determiner plus a single name → singular.',
        },
        {
          vi: 'Nối bằng **or, either… or, neither… nor, not only… but also** → bỏ qua vế A, chỉ nhìn danh từ chính của vế B (vế gần động từ).',
          en: 'Joined by **or, either… or, neither… nor, not only… but also** → ignore part A and look only at the head noun of part B (the part nearer the verb).',
        },
        {
          vi: 'Cuối cùng, loại nốt các lựa chọn sai thì (dựa vào dấu hiệu thời gian như yesterday, next week…) hoặc sai dạng: V-ing hay to V không làm động từ chính được.',
          en: 'Finally, eliminate by time markers (yesterday, next week…) and by verb form: a V-ing or to-infinitive cannot be the main verb.',
        },
      ],
      table: {
        head: [
          { vi: 'Chủ ngữ ghép', en: 'Compound subject' },
          { vi: 'Động từ', en: 'Verb' },
        ],
        rows: [
          ['A and B / both A and B', { vi: 'Số nhiều', en: 'Plural' }],
          ['each / every + A and B', { vi: 'Số ít', en: 'Singular' }],
          ['The president and CEO, Mr. X', { vi: 'Số ít (một người)', en: 'Singular (one person)' }],
          ['A or B / either A or B', { vi: 'Theo B (vế gần động từ)', en: 'Follows B (the part nearer the verb)' }],
          ['neither A nor B / not only A but also B', { vi: 'Theo B (vế gần động từ)', en: 'Follows B (the part nearer the verb)' }],
        ],
      },
    },
  ],
  questions: [
    {
      sentence: 'The marketing director and the head of sales ------- to Singapore next week to meet potential distributors.',
      options: ['is traveling', 'travels', 'are traveling', 'has traveled'],
      answer: 2,
      explanation: {
        vi: 'Hai danh từ **the marketing director** và **the head of sales** nối bằng **and**, mỗi danh từ có **the** riêng → hai người → động từ số nhiều **are traveling**. is traveling và travels là số ít; has traveled vừa số ít vừa sai thì với **next week**.',
        en: 'The nouns **the marketing director** and **the head of sales** are joined by **and**, each with its own **the** → two people → plural **are traveling**. is traveling and travels are singular; has traveled is singular and clashes with **next week**.',
      },
      translation: 'Giám đốc marketing và trưởng phòng kinh doanh sẽ sang Singapore vào tuần tới để gặp các nhà phân phối tiềm năng.',
    },
    {
      sentence: 'A new projector and a wireless microphone ------- installed in the main conference room yesterday afternoon.',
      options: ['were', 'was', 'has been', 'is'],
      answer: 0,
      explanation: {
        vi: 'Hai vật **a new projector** và **a wireless microphone** nối bằng **and** → số nhiều; **yesterday afternoon** → quá khứ → **were**. was đúng thì nhưng là số ít; has been và is sai cả số lẫn thì.',
        en: 'Two items, **a new projector** and **a wireless microphone**, are joined by **and** → plural; **yesterday afternoon** → past → **were**. was has the right tense but is singular; has been and is are wrong in both number and tense.',
      },
      translation: 'Một máy chiếu mới và một micro không dây đã được lắp đặt trong phòng hội nghị chính vào chiều hôm qua.',
    },
    {
      sentence: "Our founder and chief executive officer, Mr. Haddad, ------- the opening speech at every annual shareholders' meeting.",
      options: ['give', 'have given', 'giving', 'gives'],
      answer: 3,
      explanation: {
        vi: 'Chỉ có một từ hạn định **Our** cho cả cụm, và phía sau là tên một người (**Mr. Haddad**) → founder và chief executive officer là CÙNG một người → động từ số ít **gives**. give và have given là dạng số nhiều; giving không làm động từ chính được.',
        en: 'There is only one determiner, **Our**, for the whole phrase, and a single name follows (**Mr. Haddad**) → the founder and the chief executive officer are the SAME person → singular **gives**. give and have given are plural forms; giving cannot be the main verb.',
      },
      translation: 'Nhà sáng lập kiêm tổng giám đốc điều hành của chúng tôi, ông Haddad, là người phát biểu khai mạc tại mọi kỳ đại hội cổ đông thường niên.',
    },
    {
      sentence: "Every desk and filing cabinet on the third floor ------- replaced during last month's renovation.",
      options: ['were', 'have been', 'are', 'was'],
      answer: 3,
      explanation: {
        vi: "**Every** đứng trước **desk and filing cabinet** → xét từng món một → số ít; **last month's** → quá khứ → **was** replaced. were đúng thì nhưng là số nhiều; have been và are sai cả số lẫn thì.",
        en: "**Every** before **desk and filing cabinet** → each item is considered individually → singular; **last month's** → past → **was** replaced. were has the right tense but is plural; have been and are are wrong in both number and tense.",
      },
      translation: 'Mọi bàn làm việc và tủ hồ sơ ở tầng ba đều đã được thay mới trong đợt cải tạo tháng trước.',
    },
    {
      sentence: "Both the hotel's restaurant and its rooftop bar ------- open to non-guests until midnight on weekends.",
      options: ['is', 'are', 'being', 'has'],
      answer: 1,
      explanation: {
        vi: 'Cấu trúc **Both A and B** luôn đi với động từ số nhiều → **are** open. is là số ít; has open sai ngữ pháp; being không làm động từ chính được.',
        en: 'The structure **Both A and B** always takes a plural verb → **are** open. is is singular; has open is ungrammatical; being cannot be the main verb.',
      },
      translation: 'Cả nhà hàng lẫn quầy bar trên sân thượng của khách sạn đều mở cửa cho cả khách không lưu trú đến nửa đêm vào cuối tuần.',
    },
    {
      sentence: 'Either the regional manager or her assistants ------- the weekly sales figures every Monday morning.',
      options: ['compile', 'compiles', 'compiling', 'has compiled'],
      answer: 0,
      explanation: {
        vi: 'Với **Either A or B**, động từ theo vế gần nhất là **her assistants** (số nhiều) → **compile**. compiles hòa hợp với vế xa (the regional manager) nên sai; has compiled cũng là số ít; compiling không làm động từ chính được.',
        en: 'With **Either A or B**, the verb follows the nearer part, **her assistants** (plural) → **compile**. compiles agrees with the farther part (the regional manager), so it is wrong; has compiled is singular too; compiling cannot be the main verb.',
      },
      translation: 'Hoặc quản lý khu vực, hoặc các trợ lý của cô ấy tổng hợp số liệu bán hàng hằng tuần vào mỗi sáng thứ Hai.',
    },
    {
      sentence: 'Neither the contractors nor the building owner ------- been informed about the delay in the permit approval.',
      options: ['have', 'were', 'has', 'having'],
      answer: 2,
      explanation: {
        vi: 'Với **Neither A nor B**, động từ theo vế gần nhất là **the building owner** (số ít) → **has** been informed. have hòa hợp với vế xa (the contractors) nên sai; were been và having been không đúng ngữ pháp ở đây.',
        en: 'With **Neither A nor B**, the verb follows the nearer part, **the building owner** (singular) → **has** been informed. have agrees with the farther part (the contractors), so it is wrong; were been and having been are ungrammatical here.',
      },
      translation: 'Cả các nhà thầu lẫn chủ tòa nhà đều chưa được thông báo về việc chậm trễ trong khâu duyệt giấy phép.',
    },
    {
      sentence: 'Neither the printer in the lobby nor the copier on the second floor ------- properly this morning.',
      options: ['was working', 'were working', 'are working', 'have worked'],
      answer: 0,
      explanation: {
        vi: 'Cả hai vế **the printer** và **the copier** đều số ít, nối bằng **neither… nor** → động từ số ít **was working**. Đừng vì thấy hai cái máy mà chọn were working; are working và have worked cũng là số nhiều.',
        en: 'Both parts, **the printer** and **the copier**, are singular and joined by **neither… nor** → singular **was working**. Do not pick were working just because two machines are mentioned; are working and have worked are plural too.',
      },
      translation: 'Cả máy in ở sảnh lẫn máy photocopy trên tầng hai đều không hoạt động bình thường vào sáng nay.',
    },
    {
      sentence: 'Not only the chief financial officer but also the regional managers ------- expected to attend the budget review in Seoul.',
      options: ['is', 'has', 'was', 'are'],
      answer: 3,
      explanation: {
        vi: 'Với **Not only A but also B**, động từ theo vế B là **the regional managers** (số nhiều) → **are** expected. is và was hòa hợp với vế A (the chief financial officer) nên sai; has cũng là số ít.',
        en: 'With **Not only A but also B**, the verb follows part B, **the regional managers** (plural) → **are** expected. is and was agree with part A (the chief financial officer), so they are wrong; has is singular too.',
      },
      translation: 'Không chỉ giám đốc tài chính mà cả các quản lý khu vực cũng được yêu cầu tham dự buổi rà soát ngân sách tại Seoul.',
    },
    {
      sentence: 'A signed receipt or a bank statement ------- required to process the refund.',
      options: ['are', 'is', 'were', 'have been'],
      answer: 1,
      explanation: {
        vi: 'Hai danh từ số ít **a signed receipt** và **a bank statement** nối bằng **or** → chỉ cần MỘT trong hai → động từ số ít **is**. are, were và have been đều là số nhiều, như thể hai vế được cộng lại bằng and.',
        en: 'Two singular nouns, **a signed receipt** and **a bank statement**, are joined by **or** → only ONE of them is needed → singular **is**. are, were and have been are all plural, as if the parts were added with and.',
      },
      translation: 'Cần có biên lai có chữ ký hoặc bản sao kê ngân hàng để xử lý khoản hoàn tiền.',
    },
  ],
};
