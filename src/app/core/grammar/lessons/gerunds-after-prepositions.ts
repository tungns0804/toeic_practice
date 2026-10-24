import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'gerunds-after-prepositions',
  intro: {
    vi: 'Sau **giới từ**, kể cả chữ **to** trong các cụm như look forward to hay be committed to, động từ phải ở dạng **V-ing**; bài này dạy quy tắc đó, cách phân biệt be used to + V-ing với used to + V, và V-ing làm chủ ngữ. Trong Part 5 và Part 6, dạng câu này thường cho bốn lựa chọn là các dạng của cùng một động từ (sign / signing / signed / to sign), và chữ đứng ngay trước chỗ trống quyết định đáp án.',
    en: 'After a **preposition**, including the **to** in phrases like look forward to and be committed to, a verb must take the **-ing form** (gerund); this lesson covers that rule, be used to + -ing versus used to + base verb, and gerunds as subjects. In Part 5 and Part 6 these items usually offer four forms of one verb (sign / signing / signed / to sign), and the word right before the blank decides the answer.',
  },
  mistakes: [
    {
      wrong: 'Employees should not leave early without [[notify]] their supervisor.',
      right: 'Employees should not leave early without [[notifying]] their supervisor.',
      explanation: {
        vi: '**without** là giới từ, nên động từ theo sau phải ở dạng **V-ing**: without notifying (mà không báo). Sau giới từ là danh từ hoặc V-ing, không phải động từ nguyên mẫu.',
        en: '**without** is a preposition, so the verb after it must be a **gerund**: without notifying. A preposition is followed by a noun or a gerund, not a base verb.',
      },
    },
    {
      wrong: 'We look forward to [[meet]] you at the trade fair in Osaka.',
      right: 'We look forward to [[meeting]] you at the trade fair in Osaka.',
      explanation: {
        vi: 'Trong **look forward to**, "to" là giới từ (look forward to the fair), không phải dấu hiệu của to V, nên sau nó là **V-ing**: look forward to meeting.',
        en: 'In **look forward to**, "to" is a preposition (look forward to the fair), not the infinitive marker, so it is followed by a **gerund**: look forward to meeting.',
      },
    },
    {
      wrong: 'Our hotel is committed to [[provide]] a comfortable stay for every guest.',
      right: 'Our hotel is committed to [[providing]] a comfortable stay for every guest.',
      explanation: {
        vi: '**be committed to** (cam kết) có "to" là giới từ, giống như trong commitment to quality, nên động từ theo sau phải là **V-ing**: committed to providing.',
        en: 'In **be committed to**, "to" is a preposition, just as in commitment to quality, so the verb after it must be a **gerund**: committed to providing.',
      },
    },
    {
      wrong: 'After two years in London, Mr. Reyes is used to [[drive]] on the left.',
      right: 'After two years in London, Mr. Reyes is used to [[driving]] on the left.',
      explanation: {
        vi: '**be used to** (quen với) + **V-ing**. Đừng nhầm với **used to + V nguyên mẫu** (từng làm trong quá khứ, nay không còn): Mr. Reyes used to drive a company car.',
        en: '**be used to** (be accustomed to) + **gerund**. Do not confuse it with **used to + base verb** (a past habit that has stopped): Mr. Reyes used to drive a company car.',
      },
    },
    {
      wrong: "[[Expand]] into Southeast Asia is the board's top priority this year.",
      right: "[[Expanding]] into Southeast Asia is the board's top priority this year.",
      explanation: {
        vi: 'Chỗ này là chủ ngữ của động từ **is**. Muốn dùng một hành động làm chủ ngữ phải đổi động từ sang **V-ing**: Expanding into Southeast Asia (việc mở rộng sang Đông Nam Á).',
        en: 'This is the subject of the verb **is**. To make an action the subject, the verb must take the **-ing form**: Expanding into Southeast Asia.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Giới từ + V-ing: quy tắc nền', en: 'Preposition + gerund: the basic rule' },
      body: {
        vi: 'Giới từ (in, on, at, of, for, by, with, without, about, before, after, instead of, despite…) chỉ đi với danh từ, đại từ hoặc **V-ing**. Vì vậy, khi một động từ đứng ngay sau giới từ, nó phải ở dạng **V-ing** (gerund), không dùng động từ nguyên mẫu hay to V.',
        en: 'A preposition (in, on, at, of, for, by, with, without, about, before, after, instead of, despite...) is followed by a noun, a pronoun or a **gerund**. So when a verb comes right after a preposition, it must take the **-ing form**, never the base form or to + verb.',
      },
      points: [
        {
          vi: 'V-ing vẫn giữ tính chất của động từ: nó có thể mang **tân ngữ** và được bổ nghĩa bằng **trạng từ**: by **carefully reviewing** the contract (không nói by careful reviewing the contract).',
          en: 'A gerund keeps its verb properties: it can take an **object** and be modified by an **adverb**: by **carefully reviewing** the contract (not by careful reviewing the contract).',
        },
        {
          vi: 'Nếu hành động mang nghĩa bị động, dùng **being + V3**: without **being told**, before **being approved** (các dạng bị động: bài 6.1).',
          en: 'If the action is passive, use **being + past participle**: without **being told**, before **being approved** (passive forms: lesson 6.1).',
        },
        {
          vi: '**before, after, since** còn là liên từ, nên cũng đi được với cả mệnh đề: before **leaving** = before **you leave** (bài 8.2). Còn when/while + V-ing là mệnh đề rút gọn, học ở bài 13.4.',
          en: '**before, after, since** are also conjunctions, so they can take a full clause too: before **leaving** = before **you leave** (lesson 8.2). when/while + -ing is a reduced clause, covered in lesson 13.4.',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['by + V-ing', 'by **signing** up online', { vi: 'Bằng cách (cách thức)', en: 'By means of (method)' }],
          ['without + V-ing', 'without **notifying** the manager', { vi: 'Mà không', en: 'Not doing the action' }],
          ['before / after + V-ing', 'before **leaving** the office', { vi: 'Trước / sau khi', en: 'Earlier / later than the action' }],
          ['instead of + V-ing', 'instead of **mailing** the forms', { vi: 'Thay vì', en: 'In place of the action' }],
          ['upon / on + V-ing', 'upon **arriving** at the airport', { vi: 'Ngay khi', en: 'As soon as' }],
          ['for + V-ing', 'thank you for **choosing** us', { vi: 'Vì, để (lý do, công dụng)', en: 'Reason, or what a thing is for' }],
          ['despite / in spite of + V-ing', 'despite **working** overtime', { vi: 'Mặc dù (bài 8.2)', en: 'Contrast (lesson 8.2)' }],
          ['besides + V-ing', 'besides **handling** payroll', { vi: 'Ngoài việc', en: 'As well as' }],
        ],
      },
      examples: [
        {
          en: 'Employees can reduce paperwork **by submitting** expense claims through the online portal.',
          vi: 'Nhân viên có thể giảm bớt giấy tờ bằng cách nộp đề nghị thanh toán chi phí qua cổng trực tuyến.',
        },
        {
          en: 'Please do not change the delivery address **without contacting** our customer service team first.',
          vi: 'Vui lòng không thay đổi địa chỉ giao hàng khi chưa liên hệ trước với bộ phận chăm sóc khách hàng.',
        },
        {
          en: 'We trained our own technicians **instead of hiring** an outside contractor.',
          vi: 'Chúng tôi tự đào tạo kỹ thuật viên của mình thay vì thuê nhà thầu bên ngoài.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Hai ngoại lệ hiếm gặp: **be about to + V** (sắp làm gì) và **but / except + V** (have no choice **but to** cancel, do nothing **but** wait). Ngoài các cụm này, động từ đứng sau giới từ luôn ở dạng V-ing.',
          en: 'Two rare exceptions: **be about to + verb** (be on the point of doing) and **but / except + verb** (have no choice **but to** cancel, do nothing **but** wait). Outside these, a verb after a preposition is always a gerund.',
        },
      },
    },
    {
      heading: {
        vi: 'Động từ, tính từ, danh từ + giới từ + V-ing',
        en: 'Verb, adjective and noun + preposition + gerund',
      },
      body: {
        vi: 'Quy tắc trên vẫn đúng khi giới từ nằm trong một cụm cố định. Đề thường cho sẵn cả cụm, chỉ hỏi dạng của động từ đứng sau giới từ.',
        en: 'The rule still applies when the preposition belongs to a fixed combination. The test usually gives you the whole combination and asks only for the form of the verb after the preposition.',
      },
      table: {
        head: [
          { vi: 'Cụm', en: 'Combination' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['be responsible for', 'Mr. Hale is responsible for **training** new staff.'],
          ['be interested in', 'We are interested in **joining** the trade association.'],
          ['be capable of', 'The new line is capable of **producing** 500 units a day.'],
          ['succeed in', 'The team succeeded in **cutting** shipping costs.'],
          ['insist on', 'The client insisted on **reviewing** every invoice.'],
          ['apologize for', 'We apologize for **delaying** your order.'],
          ['be in charge of', 'Ms. Ruiz is in charge of **organizing** the year-end gala.'],
          ['the cost / possibility of', 'the cost of **replacing** the old elevators'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Nghĩa của các cụm này và cách chọn đúng giới từ nằm ở bài 7.2. Ở bài này chỉ cần nhớ: đã có giới từ thì động từ theo sau là V-ing, dù giới từ đó là in, of, for hay on.',
          en: 'The meanings of these combinations and how to choose the right preposition are in lesson 7.2. Here, just remember: once there is a preposition, the verb after it is a gerund, whether the preposition is in, of, for or on.',
        },
      },
    },
    {
      heading: { vi: 'Khi "to" là giới từ', en: 'When "to" is a preposition' },
      body: {
        vi: 'Thông thường "to" trước động từ là dấu hiệu của động từ nguyên mẫu: decide **to sign**, plan **to open** (bài 9.1). Nhưng trong các cụm dưới đây, "to" là **giới từ**: sau nó đặt được một danh từ, nên khi đặt động từ vào thì động từ phải ở dạng **V-ing**.',
        en: 'Usually, "to" before a verb is the infinitive marker: decide **to sign**, plan **to open** (lesson 9.1). In the phrases below, however, "to" is a **preposition**: it can be followed by a noun, so a verb placed after it must be a **gerund**.',
      },
      points: [
        {
          vi: 'Danh từ cùng gốc cũng giữ giới từ "to": our **commitment to providing** fast service, her **dedication to serving** customers.',
          en: 'Related nouns keep the preposition "to" as well: our **commitment to providing** fast service, her **dedication to serving** customers.',
        },
      ],
      table: {
        head: [
          { vi: 'Cụm', en: 'Phrase' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['look forward to', 'look forward to **hearing** from you', { vi: 'Mong chờ', en: 'Await with pleasure' }],
          ['be committed to', 'committed to **reducing** waste', { vi: 'Cam kết', en: 'Pledged to' }],
          ['be dedicated / devoted to', 'dedicated to **improving** patient care', { vi: 'Tận tâm, dồn sức cho', en: 'Giving time and effort to' }],
          ['object to / be opposed to', 'objected to **working** on Sundays', { vi: 'Phản đối', en: 'Disagree with' }],
          [
            'be used to / be accustomed to',
            'used to **working** night shifts',
            { vi: 'Quen với (accustomed to + V nguyên mẫu cũng có nhưng hiếm, V-ing an toàn hơn)', en: 'Familiar with through experience (accustomed to + base verb exists but is rare; the gerund is safer)' },
          ],
          ['contribute to', 'contributed to **increasing** sales', { vi: 'Góp phần', en: 'Help to cause' }],
          ['with a view to', 'with a view to **expanding** overseas', { vi: 'Nhằm mục đích', en: 'With the aim of' }],
          ['in addition to', 'in addition to **managing** the budget', { vi: 'Ngoài việc', en: 'As well as' }],
          ['prior to', 'prior to **signing** the lease', { vi: 'Trước khi', en: 'Before' }],
          ['when it comes to', 'when it comes to **negotiating** prices', { vi: 'Khi nói đến', en: 'Regarding' }],
        ],
      },
      examples: [
        {
          en: 'Our support staff are **dedicated to resolving** every complaint within 48 hours.',
          vi: 'Đội ngũ hỗ trợ của chúng tôi tận tâm giải quyết mọi khiếu nại trong vòng 48 giờ.',
        },
        {
          en: 'Please read the terms carefully **prior to signing** the rental agreement.',
          vi: 'Vui lòng đọc kỹ các điều khoản trước khi ký hợp đồng thuê.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo thử: thay động từ bằng một danh từ. Nếu cụm vẫn đúng (look forward to **the meeting**, committed to **quality**) thì "to" là giới từ → V-ing. Với decide, plan, hope thì không thay được (decide to the meeting ✗) → to V. Ngoại lệ cần nhớ: **agree to** + danh từ (agree to the terms) nhưng agree + **to V** (agree to sign).',
          en: 'A quick test: replace the verb with a noun. If the phrase still works (look forward to **the meeting**, committed to **quality**), "to" is a preposition → gerund. With decide, plan or hope it does not work (decide to the meeting ✗) → to + verb. One exception to remember: **agree to** + noun (agree to the terms) but agree + **to + verb** (agree to sign).',
        },
      },
    },
    {
      heading: { vi: 'be used to + V-ing hay used to + V', en: 'be used to + -ing vs. used to + base verb' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Structure' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'used to + V',
            { vi: 'Thói quen hoặc trạng thái trong QUÁ KHỨ, nay không còn', en: 'A PAST habit or state that is no longer true' },
            'Our team **used to meet** every Monday.',
          ],
          [
            'be used to + V-ing',
            { vi: 'Quen với (đã quen rồi)', en: 'Be accustomed to' },
            'Our new hires **are used to working** with cloud tools.',
          ],
          [
            'get / become used to + V-ing',
            { vi: 'Dần quen với', en: 'Grow accustomed to' },
            'You will soon **get used to commuting** by ferry.',
          ],
          [
            'be used to + V (passive of use)',
            { vi: 'Được dùng để (bị động của động từ use)', en: 'Be employed for a purpose (passive of use)' },
            'This scanner **is used to track** each parcel.',
          ],
        ],
      },
      points: [
        {
          vi: "**used to + V** chỉ nói về quá khứ. Phủ định và nghi vấn mượn did và bỏ -d: **didn't use to**, **Did** you **use to**…? Thói quen ở hiện tại thì dùng hiện tại đơn (We usually meet…); không có \"use to\" ở hiện tại.",
          en: "**used to + base verb** refers only to the past. Negatives and questions use did and drop the -d: **didn't use to**, **Did** you **use to**...? For a present habit, use the present simple (We usually meet...); there is no present-tense \"use to\".",
        },
        {
          vi: '**be / get used to** chia được ở mọi thì: is used to, was used to, will get used to, has become used to; theo sau luôn là V-ing hoặc danh từ.',
          en: '**be / get used to** works in any tense: is used to, was used to, will get used to, has become used to; it is always followed by a gerund or a noun.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Nhìn chữ ĐỨNG TRƯỚC "used": có **be / get / become** và chủ ngữ là người → "quen với" → **V-ing**. Không có be → **used to + V** (từng). Có be nhưng chủ ngữ là đồ vật, công cụ → thường là bị động "được dùng để" + V.',
          en: 'Look at the word BEFORE "used": **be / get / become** with a person as subject → "accustomed to" → **gerund**. No be → **used to + base verb** (past habit). be with a thing or tool as subject → usually the passive "is used to do" + base verb.',
        },
      },
    },
    {
      heading: { vi: 'V-ing làm chủ ngữ', en: 'Gerunds as subjects' },
      body: {
        vi: 'Muốn dùng một **hành động** làm chủ ngữ, đổi động từ sang **V-ing**; cụm V-ing có thể mang tân ngữ và trạng từ. Động từ nguyên mẫu không làm chủ ngữ được, còn danh từ thì không mang tân ngữ trực tiếp. Cả cụm V-ing tính là số ít (bài 3.1).',
        en: 'To make an **action** the subject, change the verb to its **-ing form**; the gerund phrase can carry an object and adverbs. A base verb cannot be a subject, and a noun cannot take a direct object. The whole gerund phrase counts as singular (lesson 3.1).',
      },
      points: [
        {
          vi: 'To V làm chủ ngữ cũng có nhưng trang trọng và ít gặp; tiếng Anh thường dùng V-ing, hoặc It is + tính từ + to V (bài 9.3).',
          en: 'A to-infinitive subject is possible but formal and rare; English normally uses a gerund, or It is + adjective + to + verb (lesson 9.3).',
        },
        {
          vi: 'So sánh: **Reviewing** the contracts takes two days (V-ing + tân ngữ) và **A review of** the contracts takes two days (danh từ + of).',
          en: 'Compare: **Reviewing** the contracts takes two days (gerund + object) and **A review of** the contracts takes two days (noun + of).',
        },
      ],
      examples: [
        {
          en: '**Hiring** temporary staff during the holidays helps us meet customer demand.',
          vi: 'Việc thuê nhân viên thời vụ trong mùa lễ giúp chúng tôi đáp ứng nhu cầu của khách hàng.',
        },
        {
          en: '**Responding** to customer e-mails within 24 hours is our top priority.',
          vi: 'Phản hồi e-mail của khách hàng trong vòng 24 giờ là ưu tiên hàng đầu của chúng tôi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**V-ing + dấu phẩy + chủ ngữ mới** là cụm phân từ (bài 14.2), không phải chủ ngữ: "**Reviewing** the figures, the analyst noticed an error." Còn V-ing làm chủ ngữ thì đi thẳng tới động từ chính: "**Reviewing** the figures took an hour."',
          en: '**-ing phrase + comma + a new subject** is a participial phrase (lesson 14.2), not a subject: "**Reviewing** the figures, the analyst noticed an error." A gerund subject runs straight into the main verb: "**Reviewing** the figures took an hour."',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu V-ing trong Part 5', en: 'Tackling gerund items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các dạng của một động từ (submit / submitting / submitted / to submit) → nhìn ngay chữ đứng TRƯỚC chỗ trống.',
          en: 'Four options that are forms of one verb (submit / submitting / submitted / to submit) → look at the word right BEFORE the blank.',
        },
        {
          vi: 'Trước chỗ trống là giới từ (by, without, instead of, upon, in addition to…) → chọn **V-ing**.',
          en: 'A preposition before the blank (by, without, instead of, upon, in addition to...) → choose the **gerund**.',
        },
        {
          vi: 'Trước chỗ trống là **to** → xét cả cụm: thuộc nhóm "to là giới từ" (look forward to, committed to, prior to…) → **V-ing**; sau decide, plan, in order to, be able to… → **V nguyên mẫu**.',
          en: '**to** before the blank → check the whole phrase: one of the "to as a preposition" phrases (look forward to, committed to, prior to...) → **gerund**; after decide, plan, in order to, be able to... → **base verb**.',
        },
        {
          vi: 'Còn lại **V-ing** và **danh từ** cùng gốc (submitting / submission): ngay sau chỗ trống là tân ngữ (cụm danh từ, không có of) → **V-ing**; trước chỗ trống có mạo từ, hoặc sau chỗ trống là **of** → danh từ.',
          en: 'Left with a **gerund** and a **noun** from the same root (submitting / submission)? An object right after the blank (a noun phrase, no of) → **gerund**; an article before the blank, or **of** after it → noun.',
        },
        {
          vi: 'Chỗ trống đứng đầu câu, sau nó là tân ngữ rồi mới đến động từ chính → **V-ing** làm chủ ngữ.',
          en: 'Blank at the start of the sentence, followed by an object and then the main verb → a **gerund** subject.',
        },
        {
          vi: 'Gặp **used to**: có be / get đứng trước và chủ ngữ là người → V-ing; không có be → V nguyên mẫu.',
          en: 'With **used to**: be / get before it and a person as subject → gerund; no be → base verb.',
        },
      ],
      examples: [
        {
          en: 'You can activate your account **by completing** the online registration form.',
          vi: 'Bạn có thể kích hoạt tài khoản bằng cách điền mẫu đăng ký trực tuyến.',
        },
        {
          en: 'Your account will be activated **upon completion of** the registration process.',
          vi: 'Tài khoản của bạn sẽ được kích hoạt ngay khi hoàn tất quy trình đăng ký.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng cứ thấy "to" là chọn V-ing. Phần lớn "to" vẫn là to V: in order **to reduce**, be able **to attend**, plan **to open**. Chỉ khi "to" nằm trong một cụm thuộc nhóm giới từ mới chọn V-ing: with a view **to reducing**.',
          en: 'Do not choose a gerund every time you see "to". Most of the time it is still to + verb: in order **to reduce**, be able **to attend**, plan **to open**. Choose the gerund only when "to" belongs to a preposition phrase: with a view **to reducing**.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Guests are kindly asked to return their room keys to the front desk before ------- the hotel.',
      options: ['leave', 'left', 'leaving', 'leaves'],
      answer: 2,
      explanation: {
        vi: 'Sau **before** không có chủ ngữ, nên before đóng vai giới từ → động từ theo sau ở dạng **V-ing**: before leaving. leave hay leaves chỉ đúng khi có chủ ngữ (before they leave, before a guest leaves).',
        en: 'There is no subject after **before**, so before works as a preposition → the verb after it is a **gerund**: before leaving. leave or leaves would need a subject (before they leave, before a guest leaves).',
      },
      translation: 'Quý khách vui lòng trả chìa khóa phòng cho quầy lễ tân trước khi rời khách sạn.',
    },
    {
      sentence: 'Applicants can speed up the review process by ------- all required documents in a single PDF file.',
      options: ['submission', 'submitting', 'submit', 'submitted'],
      answer: 1,
      explanation: {
        vi: 'Sau giới từ **by** và trước tân ngữ **all required documents** cần **V-ing**: by submitting. submission là danh từ, không mang tân ngữ trực tiếp được (phải là by submission of…).',
        en: 'After the preposition **by** and before the object **all required documents**, a **gerund** is needed: by submitting. submission is a noun and cannot take a direct object (it would need by submission of...).',
      },
      translation: 'Người nộp đơn có thể đẩy nhanh quá trình xét duyệt bằng cách nộp tất cả giấy tờ bắt buộc trong một tệp PDF duy nhất.',
    },
    {
      sentence: 'Instead of ------- each receipt, the hotel now e-mails a digital copy to guests at checkout.',
      options: ['printing', 'print', 'printed', 'prints'],
      answer: 0,
      explanation: {
        vi: '**Instead of** (thay vì) là giới từ, nên động từ theo sau phải ở dạng **V-ing**: instead of printing. print là động từ nguyên mẫu, không đứng ngay sau giới từ.',
        en: '**Instead of** is a preposition, so the verb after it must be a **gerund**: instead of printing. print is a base verb and cannot follow a preposition directly.',
      },
      translation: 'Thay vì in từng hóa đơn, khách sạn giờ đây gửi bản điện tử qua e-mail cho khách khi trả phòng.',
    },
    {
      sentence: 'We look forward to ------- with your team on the new distribution project next spring.',
      options: ['work', 'worked', 'works', 'working'],
      answer: 3,
      explanation: {
        vi: 'Trong **look forward to**, "to" là giới từ, nên phải dùng **V-ing**: look forward to working. work là bẫy cho người tưởng đây là to V.',
        en: 'In **look forward to**, "to" is a preposition, so a **gerund** is required: look forward to working. work is the trap for learners who read this as to + verb.',
      },
      translation: 'Chúng tôi mong được làm việc với nhóm của quý vị trong dự án phân phối mới vào mùa xuân tới.',
    },
    {
      sentence: 'Harmon Logistics is committed to ------- all international orders within five business days.',
      options: ['delivers', 'delivering', 'delivered', 'deliver'],
      answer: 1,
      explanation: {
        vi: '**be committed to** có "to" là giới từ (committed to quality), nên theo sau là **V-ing**: committed to delivering. deliver sai vì đây không phải to V.',
        en: 'In **be committed to**, "to" is a preposition (committed to quality), so it takes a **gerund**: committed to delivering. deliver is wrong because this is not to + verb.',
      },
      translation: 'Harmon Logistics cam kết giao tất cả đơn hàng quốc tế trong vòng năm ngày làm việc.',
    },
    {
      sentence: 'Before the new software was installed, the accounting staff used to ------- every invoice into the system by hand.',
      options: ['enter', 'entering', 'entered', 'enters'],
      answer: 0,
      explanation: {
        vi: '**used to** không có be đứng trước, cùng mốc quá khứ **Before the new software was installed** → thói quen trong quá khứ: used to + **V nguyên mẫu** (enter). entering chỉ đúng nếu có be (were used to entering = đã quen với việc nhập).',
        en: '**used to** with no be before it, plus the past cue **Before the new software was installed** → a past habit: used to + **base verb** (enter). entering would need be (were used to entering = were accustomed to entering).',
      },
      translation: 'Trước khi phần mềm mới được cài đặt, nhân viên kế toán từng nhập thủ công từng hóa đơn vào hệ thống.',
    },
    {
      sentence: 'After six months at the Osaka branch, Mr. Diaz has become used to ------- with clients in Japanese.',
      options: ['communicate', 'communicated', 'communicating', 'communicates'],
      answer: 2,
      explanation: {
        vi: '**has become used to** = đã dần quen với; "to" ở đây là giới từ → **V-ing**: communicating. communicate là bẫy nhầm với used to + V (từng làm).',
        en: '**has become used to** = has grown accustomed to; "to" here is a preposition → **gerund**: communicating. communicate is the trap that confuses this with used to + base verb (past habit).',
      },
      translation: 'Sau sáu tháng làm việc ở chi nhánh Osaka, anh Diaz đã quen với việc giao tiếp với khách hàng bằng tiếng Nhật.',
    },
    {
      sentence: 'Brightway Foods opened a second warehouse ------- reducing delivery times for customers in the northern region.',
      options: ['in order to', 'so as to', 'so that', 'with a view to'],
      answer: 3,
      explanation: {
        vi: 'Theo sau chỗ trống là **reducing** (V-ing), nên cần một cụm có "to" là giới từ: **with a view to** + V-ing (nhằm). in order to và so as to phải đi với V nguyên mẫu (to reduce); so that cần cả mệnh đề có chủ ngữ.',
        en: 'The blank is followed by **reducing** (a gerund), so it needs a phrase whose "to" is a preposition: **with a view to** + -ing. in order to and so as to need a base verb (to reduce); so that needs a full clause with a subject.',
      },
      translation: 'Brightway Foods đã mở nhà kho thứ hai nhằm rút ngắn thời gian giao hàng cho khách hàng ở khu vực phía bắc.',
    },
    {
      sentence: '------- the number of paper forms has saved the clinic thousands of dollars in printing costs.',
      options: ['Reducing', 'Reduce', 'Reduced', 'Reduction'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống là chủ ngữ của **has saved** và mang tân ngữ **the number of paper forms** → cần **V-ing** làm chủ ngữ: Reducing. Reduction là danh từ, không mang tân ngữ trực tiếp được (phải là Reduction of…).',
        en: 'The blank is the subject of **has saved** and takes the object **the number of paper forms** → a **gerund** subject: Reducing. Reduction is a noun and cannot take a direct object (it would need Reduction of...).',
      },
      translation: 'Việc giảm số lượng biểu mẫu giấy đã giúp phòng khám tiết kiệm hàng nghìn đô la chi phí in ấn.',
    },
    {
      sentence: 'In addition to ------- the annual conference, Ms. Kwon will coordinate travel arrangements for all guest speakers.',
      options: ['organize', 'organization', 'organizing', 'organized'],
      answer: 2,
      explanation: {
        vi: 'Trong **In addition to** (ngoài việc), "to" là giới từ, và phía sau có tân ngữ **the annual conference** → **V-ing**: organizing. organize sai vì đây không phải to V; organization là danh từ, không mang tân ngữ trực tiếp.',
        en: 'In **In addition to**, "to" is a preposition, and there is an object **the annual conference** after the blank → **gerund**: organizing. organize is wrong because this is not to + verb; organization is a noun and cannot take a direct object.',
      },
      translation: 'Ngoài việc tổ chức hội nghị thường niên, cô Kwon sẽ điều phối việc sắp xếp đi lại cho tất cả diễn giả khách mời.',
    },
  ],
};
