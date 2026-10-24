import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'infinitives-purpose',
  intro: {
    vi: 'To V xuất hiện dày đặc trong Part 5 và Part 6: nó chỉ **mục đích** (to, in order to, so as to), đứng sau **tính từ** và **danh từ** (eager to, the ability to, the first to), đi với **too/enough**, còn sau **make/let/have** thì ngược lại phải bỏ "to". Bài này giúp bạn biết lúc nào chỗ trống cần to V, lúc nào cần động từ nguyên mẫu không "to".',
    en: 'Infinitives appear constantly in Part 5 and Part 6: they express **purpose** (to, in order to, so as to), follow **adjectives** and **nouns** (eager to, the ability to, the first to), combine with **too/enough**, and by contrast lose their "to" after **make/let/have**. This lesson shows when a blank needs to V and when it needs a bare infinitive.',
  },
  mistakes: [
    {
      wrong: 'The company hired two consultants [[for improving]] its supply chain.',
      right: 'The company hired two consultants [[to improve]] its supply chain.',
      explanation: {
        vi: 'Muốn nói ai đó làm một việc **để làm gì**, dùng **to V** (hoặc in order to V), không dùng **for + V-ing**. Khi nói về mục đích, for + V-ing chỉ dùng để nói công dụng của một đồ vật (a machine for sorting mail).',
        en: 'To say why someone does something, use **to V** (or in order to V), not **for + V-ing**. When it expresses purpose, for + V-ing only describes what a thing is used for (a machine for sorting mail).',
      },
    },
    {
      wrong: 'We redesigned our website in order to [[attracting]] younger customers.',
      right: 'We redesigned our website in order to [[attract]] younger customers.',
      explanation: {
        vi: '"to" trong **in order to / so as to** là một phần của động từ nguyên mẫu chứ không phải giới từ, nên theo sau phải là **V nguyên mẫu** → attract.',
        en: 'The "to" in **in order to / so as to** is part of the infinitive, not a preposition, so it must be followed by a **base verb** → attract.',
      },
    },
    {
      wrong: 'Applicants must demonstrate the [[ability of managing]] a small team.',
      right: 'Applicants must demonstrate the [[ability to manage]] a small team.',
      explanation: {
        vi: 'Danh từ **ability** đi với **to V**: the ability to manage. Đừng lẫn với tính từ **capable**, vốn đi với **of + V-ing** (capable of managing).',
        en: 'The noun **ability** takes **to V**: the ability to manage. Do not mix it up with the adjective **capable**, which takes **of + V-ing** (capable of managing).',
      },
    },
    {
      wrong: 'Mr. Haddad is not [[enough experienced]] to lead the expansion project.',
      right: 'Mr. Haddad is not [[experienced enough]] to lead the expansion project.',
      explanation: {
        vi: '**enough** đứng SAU tính từ hoặc trạng từ (experienced enough, quickly enough) nhưng đứng TRƯỚC danh từ (enough experience).',
        en: '**enough** goes AFTER an adjective or adverb (experienced enough, quickly enough) but BEFORE a noun (enough experience).',
      },
    },
    {
      wrong: 'We had the technician [[to check]] every printer on the second floor.',
      right: 'We had the technician [[check]] every printer on the second floor.',
      explanation: {
        vi: 'Động từ sai khiến **have + người + V nguyên mẫu** không có "to", giống make và let. Chỉ khi dùng **get** mới cần "to": get the technician to check.',
        en: 'The causative **have + person + base verb** takes no "to", just like make and let. Only **get** needs "to": get the technician to check.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'To V chỉ mục đích: to, in order to, so as to', en: 'Infinitives of purpose: to, in order to, so as to' },
      body: {
        vi: 'Để trả lời câu hỏi "làm việc đó **để làm gì**?", tiếng Anh dùng **to + V nguyên mẫu**. **in order to** và **so as to** cùng nghĩa nhưng trang trọng hơn và nói rõ ý mục đích hơn. Cụm chỉ mục đích có thể đứng cuối câu, hoặc đứng đầu câu và ngăn với mệnh đề chính bằng dấu phẩy.',
        en: 'To answer the question "**for what purpose**?", English uses **to + base verb**. **in order to** and **so as to** mean the same but are more formal and make the purpose more explicit. The purpose phrase can come at the end of the sentence, or at the start, separated from the main clause by a comma.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Ghi chú', en: 'Note' },
        ],
        rows: [
          [
            'to + V',
            'We extended our opening hours to serve more customers.',
            { vi: 'Phổ biến nhất, hợp với mọi văn phong', en: 'Most common; fits any style' },
          ],
          [
            'in order to + V',
            'In order to reduce costs, the firm switched suppliers.',
            { vi: 'Trang trọng, nhấn mạnh mục đích; đứng đầu hay cuối câu đều được', en: 'Formal, stresses the purpose; works at the start or the end' },
          ],
          [
            'so as to + V',
            'Please book early so as to secure a seat.',
            { vi: 'Trang trọng; thường đứng giữa hoặc cuối câu', en: 'Formal; usually mid-sentence or at the end' },
          ],
          [
            'in order not to / so as not to + V',
            'Please speak quietly so as not to disturb other guests.',
            { vi: 'Mục đích phủ định: not đứng TRƯỚC to', en: 'Negative purpose: not goes BEFORE to' },
          ],
          [
            'in order for + O + to V',
            'In order for your refund to be processed, please keep the receipt.',
            { vi: 'Khi người/vật thực hiện mục đích khác với chủ ngữ của câu', en: 'When the doer of the purpose is not the subject of the sentence' },
          ],
        ],
      },
      examples: [
        {
          en: 'The airline added two extra flights **to meet** the holiday demand.',
          vi: 'Hãng hàng không bổ sung hai chuyến bay để đáp ứng nhu cầu dịp lễ.',
        },
        {
          en: '**To register** for the workshop, please complete the form on our website.',
          vi: 'Để đăng ký tham gia hội thảo, vui lòng điền mẫu đơn trên trang web của chúng tôi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Mục đích của một người khi làm việc gì dùng **to V**, không dùng **for + V-ing**: She called the hotel to confirm the booking (không nói "for confirming"). Khi nói về mục đích, **for + V-ing** chỉ nói công dụng của đồ vật: This scanner is used for checking boarding passes. Còn khi phía sau là một mệnh đề có chủ ngữ riêng thì dùng **so that / in order that** (bài 13.2).',
          en: 'When a person does something for a purpose, use **to V**, not **for + V-ing**: She called the hotel to confirm the booking (not "for confirming"). In a purpose sense, **for + V-ing** only describes what a thing is used for: This scanner is used for checking boarding passes. When a full clause with its own subject follows, use **so that / in order that** (lesson 13.2).',
        },
      },
    },
    {
      heading: { vi: 'Tính từ + to V', en: 'Adjective + to V' },
      body: {
        vi: 'Nhiều tính từ chỉ thái độ, khả năng, mức độ chắc chắn hay cảm xúc đi với **to V** theo mẫu **S + be + tính từ + to V**. Nhóm này rất hay gặp trong thư từ, thông báo: We are pleased to announce…, Our staff are always willing to help. Lưu ý **be due to + V** nghĩa là "dự kiến sẽ", khác với giới từ due to + danh từ (= vì, do).',
        en: 'Many adjectives of attitude, ability, likelihood or feeling take **to V** in the pattern **S + be + adjective + to V**. They are very common in letters and notices: We are pleased to announce..., Our staff are always willing to help. Note that **be due to + V** means "be scheduled to", unlike the preposition due to + noun (= because of).',
      },
      table: {
        head: [
          { vi: 'Nhóm', en: 'Group' },
          { vi: 'Tính từ', en: 'Adjectives' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Thái độ, sự sẵn lòng', en: 'Attitude, willingness' },
            'eager, willing, ready, reluctant, hesitant, determined',
            'Several staff members are eager to join the new project.',
          ],
          [{ vi: 'Khả năng', en: 'Ability' }, 'able, unable', 'The supplier was unable to deliver the parts on time.'],
          [
            { vi: 'Mức độ chắc chắn', en: 'Likelihood' },
            'likely, unlikely, certain, sure, bound',
            'Fuel prices are likely to rise this winter.',
          ],
          [
            { vi: 'Cảm xúc', en: 'Feelings' },
            'pleased, happy, delighted, sorry, surprised',
            'We are delighted to welcome you to the Harbor View Hotel.',
          ],
          [
            { vi: 'Lịch trình, dự kiến', en: 'Schedule, expectation' },
            'due, set, about',
            'The new branch is set to open in March.',
          ],
        ],
      },
      examples: [
        {
          en: 'Many customers are **hesitant to share** their personal data online.',
          vi: 'Nhiều khách hàng còn ngần ngại chia sẻ dữ liệu cá nhân trên mạng.',
        },
        {
          en: 'The shipment from Busan is **due to arrive** on Monday morning.',
          vi: 'Lô hàng từ Busan dự kiến sẽ đến vào sáng thứ Hai.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không phải tính từ nào cũng đi với to V: **capable of + V-ing** (capable of handling), **responsible for + V-ing**, còn **committed/dedicated to + V-ing** có "to" là giới từ (bài 9.2). Và **probable** không dùng được như likely: "Sales are probable to rise" là sai, phải nói **Sales are likely to rise** hoặc **It is probable that** sales will rise.',
          en: 'Not every adjective takes to V: **capable of + V-ing** (capable of handling), **responsible for + V-ing**, and in **committed/dedicated to + V-ing** the "to" is a preposition (lesson 9.2). Also, **probable** does not work like likely: "Sales are probable to rise" is wrong; say **Sales are likely to rise** or **It is probable that** sales will rise.',
        },
      },
    },
    {
      heading: { vi: 'It is + tính từ + (for + O) + to V', en: 'It is + adjective + (for + O) + to V' },
      body: {
        vi: 'Khi chủ ngữ thật là một hành động, tiếng Anh thường đẩy cụm to V ra sau và dùng **It** làm chủ ngữ giả: To finish on time is difficult → **It is difficult to finish on time**. Muốn nói rõ AI làm việc đó, chèn **for + tân ngữ** ngay trước to V.',
        en: 'When the real subject is an action, English usually moves the to V phrase to the end and uses **It** as a dummy subject: To finish on time is difficult → **It is difficult to finish on time**. To say WHO does the action, insert **for + object** right before to V.',
      },
      points: [
        {
          vi: 'Tính từ hay gặp: important, essential, necessary, difficult, easy, possible, impossible, advisable, convenient, customary.',
          en: 'Common adjectives: important, essential, necessary, difficult, easy, possible, impossible, advisable, convenient, customary.',
        },
        {
          vi: '**It is + tính từ + for + O + to V**: It is necessary for all visitors to sign in at the front desk.',
          en: '**It is + adjective + for + O + to V**: It is necessary for all visitors to sign in at the front desk.',
        },
        {
          vi: 'Với tính từ nhận xét **tính cách** con người (kind, thoughtful, generous, careless), dùng **of + người**: It was very kind of you to send the brochure.',
          en: 'With adjectives that judge a **person\'s character** (kind, thoughtful, generous, careless), use **of + person**: It was very kind of you to send the brochure.',
        },
        {
          vi: 'Không đưa NGƯỜI làm hành động lên làm chủ ngữ của necessary, essential, possible: "We are necessary to submit the form" là sai → **It is necessary for us to submit** the form (hoặc We need to submit the form).',
          en: 'Do not make the PERSON doing the action the subject of necessary, essential or possible: "We are necessary to submit the form" is wrong → **It is necessary for us to submit** the form (or We need to submit the form).',
        },
        {
          vi: 'Riêng easy, difficult, hard, impossible cho phép đưa TÂN NGỮ của to V lên làm chủ ngữ: The manual is easy to follow. Khi đó không lặp lại tân ngữ ở cuối ("easy to follow it" là sai).',
          en: 'easy, difficult, hard and impossible also let the OBJECT of to V become the subject: The manual is easy to follow. In that case, do not repeat the object at the end ("easy to follow it" is wrong).',
        },
      ],
      examples: [
        {
          en: '**It is advisable to book** a table in advance during the holiday season.',
          vi: 'Nên đặt bàn trước vào mùa lễ.',
        },
        {
          en: '**It will be difficult for the team to finish** the audit by Friday.',
          vi: 'Nhóm sẽ khó mà hoàn thành đợt kiểm toán trước thứ Sáu.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**It is essential/important that + S + V nguyên mẫu** là một cấu trúc khác (bài 15.3). Khi làm bài: phía sau chỗ trống là **tân ngữ + to V** thì chọn **for**; là một mệnh đề đầy đủ (S + V) thì chọn **that**.',
          en: '**It is essential/important that + S + base verb** is a different pattern (lesson 15.3). In the test: if the blank is followed by **object + to V**, choose **for**; if it is followed by a full clause (S + V), choose **that**.',
        },
      },
    },
    {
      heading: { vi: 'Danh từ + to V và the first/last/only + to V', en: 'Noun + to V and the first/last/only + to V' },
      body: {
        vi: 'Nhiều danh từ sinh ra từ động từ hoặc tính từ vốn đi với to V nên cũng giữ to V: decide to → **the decision to**, able to → **the ability to**, attempt to → **an attempt to**. Ngoài ra, to V còn đứng sau danh từ để chỉ "việc cần làm, thứ để làm": a report to finish, documents to sign.',
        en: 'Many nouns formed from verbs or adjectives that take to V keep the to V: decide to → **the decision to**, able to → **the ability to**, attempt to → **an attempt to**. To V can also follow a noun to mean "something to do / something for doing": a report to finish, documents to sign.',
      },
      points: [
        {
          vi: '**the first / the second / the last / the only / the next + (danh từ) + to V** = "người/vật đầu tiên, cuối cùng, duy nhất… làm việc gì": Ms. Lin was the first to arrive. Cấu trúc này cũng dùng sau so sánh nhất: the youngest manager to lead the branch.',
          en: '**the first / the second / the last / the only / the next + (noun) + to V** = "the first, last, only... one who does something": Ms. Lin was the first to arrive. It also follows superlatives: the youngest manager to lead the branch.',
        },
        {
          vi: 'Đây thực chất là mệnh đề quan hệ rút gọn: the first employee to complete = the first employee who completed (bài 12.3). Không được để một động từ chia đứng trơ trọi: "She was the first employee completed the course" là sai. Dạng bị động: the only hotel **to be awarded** five stars.',
          en: 'This is really a reduced relative clause: the first employee to complete = the first employee who completed (lesson 12.3). A bare finite verb is wrong here: "She was the first employee completed the course" is incorrect. Passive form: the only hotel **to be awarded** five stars.',
        },
      ],
      table: {
        head: [
          { vi: 'Danh từ', en: 'Nouns' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['ability, capacity', 'The new plant has the capacity to produce 5,000 units a day.'],
          ['decision, plan, effort, attempt', 'The effort to reduce paper use saved the office over $3,000 last year.'],
          ['opportunity, chance', 'Interns will have the opportunity to work with senior engineers.'],
          ['right, permission, need', 'Customers have the right to cancel their order within 14 days.'],
          ['willingness, failure, refusal', "The supplier's failure to deliver on time delayed the launch."],
        ],
      },
      examples: [
        {
          en: 'Okada Foods was **the only company to offer** free samples at the trade fair.',
          vi: 'Okada Foods là công ty duy nhất phát mẫu thử miễn phí tại hội chợ thương mại.',
        },
        {
          en: 'Mr. Reyes is usually **the last person to leave** the office.',
          vi: 'Anh Reyes thường là người cuối cùng rời văn phòng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Một số danh từ đi với "to" là GIỚI TỪ nên theo sau là danh từ hoặc V-ing: dedication to, approach to, key to, contribution to (bài 9.2). Còn **ability** thì luôn đi với to V: "the ability of managing" là sai.',
          en: 'Some nouns are followed by "to" as a PREPOSITION, so a noun or V-ing comes next: dedication to, approach to, key to, contribution to (lesson 9.2). **ability**, however, always takes to V: "the ability of managing" is wrong.',
        },
      },
    },
    {
      heading: { vi: 'too … to và enough … to', en: 'too ... to and enough ... to' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          [
            'too + adj/adv + (for O) + to V',
            'The box is too heavy for one person to lift.',
            { vi: 'Quá… đến mức KHÔNG thể', en: 'So much that it is NOT possible' },
          ],
          [
            'adj/adv + enough + (for O) + to V',
            'The ballroom is large enough to seat 200 guests.',
            { vi: 'Đủ… để làm được', en: 'Sufficiently ... to be able to' },
          ],
          [
            'enough + noun + to V',
            'We have enough staff to cover the weekend shifts.',
            { vi: 'Có đủ (số lượng) để làm được', en: 'A sufficient amount to be able to' },
          ],
        ],
      },
      examples: [
        {
          en: 'The client was **too busy to attend** the product demonstration.',
          vi: 'Khách hàng quá bận nên không thể dự buổi giới thiệu sản phẩm.',
        },
        {
          en: 'Our delivery vans are not **big enough to carry** this furniture.',
          vi: 'Xe giao hàng của chúng tôi không đủ lớn để chở số đồ nội thất này.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**too** đã mang nghĩa phủ định nên không thêm not (too busy to attend = không thể tham dự). **very** không đi với to V theo nghĩa này: "very small to hold" là sai → too small to hold; còn **so** cần mệnh đề: so small that it could not hold… (bài 13.2). Khi chủ ngữ chính là tân ngữ của to V, không lặp lại tân ngữ: The box is too heavy to lift (không nói "to lift it").',
          en: '**too** is already negative, so do not add not (too busy to attend = unable to attend). **very** cannot introduce to V in this sense: "very small to hold" is wrong → too small to hold; **so** needs a clause: so small that it could not hold... (lesson 13.2). When the subject is the object of to V, do not repeat it: The box is too heavy to lift (not "to lift it").',
        },
      },
    },
    {
      heading: { vi: 'Động từ sai khiến make, let, have và help', en: 'Causatives make, let, have and help' },
      body: {
        vi: 'Sau **make, let, have** + tân ngữ chỉ người, động từ thứ hai ở dạng **nguyên mẫu không "to"**. **help** linh hoạt hơn: dùng được cả V nguyên mẫu lẫn to V, có hoặc không có tân ngữ.',
        en: 'After **make, let, have** + a person object, the second verb is a **bare infinitive** (no "to"). **help** is more flexible: it takes either a base verb or to V, with or without an object.',
      },
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          [
            'make',
            'make + O + V',
            'The delay made us reschedule the launch.',
            { vi: 'Bắt, khiến ai làm gì', en: 'Force or cause someone to do something' },
          ],
          [
            'let',
            'let + O + V',
            'Please let us know if you need a shuttle to the airport.',
            { vi: 'Để cho, cho phép ai làm gì', en: 'Allow someone to do something' },
          ],
          [
            'have',
            'have + O + V',
            'I will have my assistant send you the contract.',
            { vi: 'Nhờ, giao cho ai làm gì', en: 'Arrange for someone to do a task' },
          ],
          [
            'help',
            'help + (O) + (to) V',
            'The app helps travelers (to) compare fares.',
            { vi: 'Giúp (ai) làm gì', en: 'Assist (someone) in doing something' },
          ],
        ],
      },
      points: [
        {
          vi: 'Đổi sang **get, allow, ask, require, enable** thì phải có "to": get the technician to check, allow guests to choose (bài 9.1).',
          en: 'With **get, allow, ask, require, enable**, "to" is needed: get the technician to check, allow guests to choose (lesson 9.1).',
        },
        {
          vi: 'Bị động của make lấy lại "to": Staff **were made to work** overtime. let không có dạng bị động → dùng **be allowed to**.',
          en: 'In the passive, make takes "to" back: Staff **were made to work** overtime. let has no passive → use **be allowed to**.',
        },
        {
          vi: 'Nếu tân ngữ của have là VẬT chịu tác động thì dùng **V3**: We had the printer **repaired** (máy in được sửa).',
          en: 'If the object of have is a THING that receives the action, use **V3**: We had the printer **repaired** (the printer was repaired).',
        },
        {
          vi: '**help + V-ing** là sai: helps reduce / helps to reduce, không nói "helps reducing". (can\'t help + V-ing nghĩa là "không nhịn được", khác hẳn.)',
          en: '**help + V-ing** is wrong: helps reduce / helps to reduce, not "helps reducing". (can\'t help + V-ing means "cannot stop oneself", a completely different meaning.)',
        },
      ],
      examples: [
        {
          en: 'The manager **had** the interns **prepare** the meeting room.',
          vi: 'Quản lý giao cho các thực tập sinh chuẩn bị phòng họp.',
        },
        {
          en: 'The new checklist **helps** staff **avoid** costly mistakes.',
          vi: 'Bảng kiểm mới giúp nhân viên tránh những sai sót tốn kém.',
        },
      ],
    },
    {
      heading: { vi: 'Cách làm câu to V trong Part 5', en: 'Attacking infinitive items in Part 5' },
      points: [
        {
          vi: 'Chỗ trống đứng đầu câu, sau nó là cụm từ + dấu phẩy + mệnh đề chính đầy đủ → cần **To + V** chỉ mục đích (To register, …).',
          en: 'The blank starts the sentence and is followed by a phrase + comma + a complete main clause → you need a purpose **To + V** (To register, ...).',
        },
        {
          vi: 'Chọn giữa các từ nối: sau chỗ trống là **V nguyên mẫu** → in order to / so as to; là **mệnh đề** (S + V) → so that / in order that; là **cụm danh từ** → because of / due to (bài 8.2).',
          en: 'Choosing a connector: if a **base verb** follows the blank → in order to / so as to; a **clause** (S + V) → so that / in order that; a **noun phrase** → because of / due to (lesson 8.2).',
        },
        {
          vi: 'Trước chỗ trống là **tính từ/danh từ** như eager, likely, ability, decision, the first… → chọn to V. Nếu đề hỏi chính tính từ, nhìn từ đi sau: to V → likely/willing/able; of + V-ing → capable.',
          en: 'Before the blank is an **adjective/noun** such as eager, likely, ability, decision, the first... → choose to V. If the item asks for the adjective itself, look at what follows: to V → likely/willing/able; of + V-ing → capable.',
        },
        {
          vi: '**It is + tính từ + ------- + O + to V** → chọn **for**; nếu sau chỗ trống là mệnh đề đầy đủ → chọn **that**.',
          en: '**It is + adjective + ------- + O + to V** → choose **for**; if a full clause follows the blank → choose **that**.',
        },
        {
          vi: 'Trước tính từ + to V, chỗ trống cần **too** (không phải very hay so); **enough** luôn đứng sau tính từ.',
          en: 'Before adjective + to V, the blank needs **too** (not very or so); **enough** always comes after the adjective.',
        },
        {
          vi: 'Sau **make/let/have + tân ngữ người** → V nguyên mẫu không "to"; sau **help (+ O)** → V nguyên mẫu hoặc to V, nhưng không bao giờ V-ing.',
          en: 'After **make/let/have + person object** → bare infinitive; after **help (+ O)** → base verb or to V, but never V-ing.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: '------- a replacement card, cardholders should call the customer service hotline, which is open 24 hours a day.',
      options: ['Requests', 'Requested', 'To request', 'Request'],
      answer: 2,
      explanation: {
        vi: 'Sau cụm đầu câu là **dấu phẩy + mệnh đề chính đầy đủ** (cardholders should call…), nên phần đầu là cụm chỉ mục đích **To + V** → **To request**. Request (mệnh lệnh) đặt trước dấu phẩy rồi nối thêm một mệnh đề là sai; Requests/Requested là động từ chia, làm câu có hai động từ chính mà không có liên từ.',
        en: 'The opening phrase is followed by **a comma + a complete main clause** (cardholders should call...), so it must be a purpose phrase **To + V** → **To request**. The imperative Request cannot be joined to another clause with just a comma; Requests/Requested are finite verbs, giving two main verbs with no conjunction.',
      },
      translation: 'Để yêu cầu cấp thẻ thay thế, chủ thẻ nên gọi đường dây nóng chăm sóc khách hàng, hoạt động 24 giờ mỗi ngày.',
    },
    {
      sentence: 'Mendez Logistics has added a night shift at its main warehouse ------- meet the growing demand for same-day delivery.',
      options: ['so that', 'in order to', 'because of', 'as a result'],
      answer: 1,
      explanation: {
        vi: 'Ngay sau chỗ trống là động từ nguyên mẫu **meet** → cần **in order to** (để). so that phải đi với một mệnh đề có chủ ngữ (so that it can meet); because of đi với danh từ; as a result là trạng từ liên kết, không đứng trước V nguyên mẫu.',
        en: 'The blank is directly followed by the base verb **meet** → **in order to** is needed. so that requires a clause with a subject (so that it can meet); because of takes a noun; as a result is a linking adverb and cannot precede a base verb.',
      },
      translation: 'Mendez Logistics đã bổ sung ca đêm tại kho chính để đáp ứng nhu cầu giao hàng trong ngày ngày càng tăng.',
    },
    {
      sentence: 'Several local suppliers have told us that they are ------- to lower their prices if we sign a two-year contract.',
      options: ['capable', 'responsible', 'possible', 'willing'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là **to lower** → cần tính từ đi với to V: **willing to** (sẵn lòng). capable đi với of + V-ing, responsible đi với for, còn possible không dùng người làm chủ ngữ (phải nói It is possible for them to…).',
        en: 'The blank is followed by **to lower** → we need an adjective that takes to V: **willing to**. capable takes of + V-ing, responsible takes for, and possible cannot have a person as its subject (It is possible for them to...).',
      },
      translation: 'Một số nhà cung cấp địa phương đã cho chúng tôi biết họ sẵn lòng giảm giá nếu chúng tôi ký hợp đồng hai năm.',
    },
    {
      sentence: 'Because of the heavy snowfall in Oslo, the shipment of spare parts is ------- to arrive two days later than scheduled.',
      options: ['likely', 'probable', 'possibly', 'certainly'],
      answer: 0,
      explanation: {
        vi: 'Mẫu **S + be + ------- + to arrive** cần tính từ đi với to V → **likely** (nhiều khả năng). probable tuy cùng nghĩa nhưng không đi theo mẫu này (phải là It is probable that…); possibly và certainly là trạng từ, không đứng một mình sau be rồi nối to V.',
        en: 'The pattern **S + be + ------- + to arrive** needs an adjective that takes to V → **likely**. probable has a similar meaning but does not fit this pattern (it needs It is probable that...); possibly and certainly are adverbs and cannot link be to a to V.',
      },
      translation: 'Do tuyết rơi dày ở Oslo, lô hàng phụ tùng nhiều khả năng sẽ đến trễ hai ngày so với kế hoạch.',
    },
    {
      sentence: 'It is essential ------- all new employees to complete the online safety course before their first shift on the production floor.',
      options: ['that', 'for', 'of', 'with'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là **tân ngữ + to complete** → dùng mẫu **It is + tính từ + for + O + to V**. that phải đi với mệnh đề có động từ nguyên mẫu (that all new employees complete), không đi với to complete; of chỉ dùng với tính từ chỉ tính cách (kind of you).',
        en: 'The blank is followed by **an object + to complete** → use **It is + adjective + for + O + to V**. that would need a clause with a base verb (that all new employees complete), not to complete; of is only used with character adjectives (kind of you).',
      },
      translation: 'Điều bắt buộc là tất cả nhân viên mới phải hoàn thành khóa học an toàn trực tuyến trước ca làm việc đầu tiên tại xưởng sản xuất.',
    },
    {
      sentence: "The hotel's decision ------- its lobby and rooftop restaurant has attracted more business travelers this year.",
      options: ['renovating', 'renovated', 'renovates', 'to renovate'],
      answer: 3,
      explanation: {
        vi: 'Danh từ **decision** đi với **to V** (decide to → the decision to) → **to renovate**. Động từ chính của câu đã là **has attracted**, nên renovated/renovates (động từ chia) là thừa; decision cũng không đi với V-ing.',
        en: 'The noun **decision** takes **to V** (decide to → the decision to) → **to renovate**. The sentence already has its main verb **has attracted**, so finite renovated/renovates are impossible; decision is not followed by V-ing either.',
      },
      translation: 'Quyết định cải tạo sảnh và nhà hàng trên sân thượng của khách sạn đã thu hút thêm nhiều khách đi công tác trong năm nay.',
    },
    {
      sentence: 'Marlowe Inn was the first hotel in the city ------- the national Green Hospitality Award for its energy-saving measures.',
      options: ['to receive', 'receives', 'received', 'receive'],
      answer: 0,
      explanation: {
        vi: 'Sau **the first + danh từ** dùng **to V** để chỉ "khách sạn đầu tiên làm việc gì" → **to receive** (= the first hotel that received). received/receives là động từ chia thứ hai của câu mà không có đại từ quan hệ (phải là that received), nên sai.',
        en: 'After **the first + noun**, use **to V** for "the first one to do something" → **to receive** (= the first hotel that received). received/receives would be a second finite verb with no relative pronoun (it would need that received), so they are wrong.',
      },
      translation: 'Marlowe Inn là khách sạn đầu tiên trong thành phố nhận Giải thưởng Khách sạn Xanh quốc gia nhờ các biện pháp tiết kiệm năng lượng.',
    },
    {
      sentence: 'The main conference hall was ------- small to accommodate all 300 registered participants, so the event was moved to a larger venue.',
      options: ['very', 'enough', 'too', 'so'],
      answer: 2,
      explanation: {
        vi: 'Mẫu **------- + tính từ + to accommodate**, cùng vế sau "nên phải đổi địa điểm", cho thấy nghĩa "quá nhỏ, không chứa nổi" → **too**. very không đi với to V theo nghĩa này; so cần mệnh đề that; enough phải đứng sau tính từ (small enough) và cũng ngược nghĩa.',
        en: 'The pattern **------- + adjective + to accommodate**, plus "so the event was moved", signals "too small to hold everyone" → **too**. very cannot introduce to V in this sense; so needs a that-clause; enough must follow the adjective (small enough) and gives the opposite meaning anyway.',
      },
      translation: 'Hội trường chính quá nhỏ, không đủ chỗ cho cả 300 người đã đăng ký, nên sự kiện được chuyển sang một địa điểm lớn hơn.',
    },
    {
      sentence: 'The new online booking system lets guests ------- their room type and pillow preferences before they arrive at the hotel.',
      options: ['selecting', 'select', 'to select', 'selected'],
      answer: 1,
      explanation: {
        vi: '**let + tân ngữ (guests) + V nguyên mẫu không "to"** → **select**. to select là bẫy hay gặp vì đồng nghĩa allow guests to select, nhưng let thì không có "to"; selecting và selected đều sai sau let + tân ngữ.',
        en: '**let + object (guests) + bare infinitive** → **select**. to select is the usual trap because allow guests to select has the same meaning, but let takes no "to"; selecting and selected are both wrong after let + object.',
      },
      translation: 'Hệ thống đặt phòng trực tuyến mới cho phép khách chọn loại phòng và loại gối ưa thích trước khi đến khách sạn.',
    },
    {
      sentence: 'The new scheduling software will help store managers ------- staff shortages before they affect service levels.',
      options: ['identifying', 'identified', 'identify', 'identification'],
      answer: 2,
      explanation: {
        vi: '**help + tân ngữ (store managers) + (to) V** → **identify** (tân ngữ phía sau là staff shortages). identifying là bẫy chính: help không bao giờ đi với V-ing; identified và danh từ identification đều không đứng được ở vị trí này.',
        en: '**help + object (store managers) + (to) V** → **identify** (its own object is staff shortages). identifying is the main trap: help is never followed by V-ing; identified and the noun identification cannot fill this slot either.',
      },
      translation: 'Phần mềm xếp lịch mới sẽ giúp các quản lý cửa hàng phát hiện tình trạng thiếu nhân sự trước khi nó ảnh hưởng đến chất lượng dịch vụ.',
    },
  ],
};
