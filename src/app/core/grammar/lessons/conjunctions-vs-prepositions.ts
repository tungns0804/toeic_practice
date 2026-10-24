import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conjunctions-vs-prepositions',
  intro: {
    vi: 'Bài này dạy cách phân biệt liên từ (because, although, while, unless, in case) với giới từ cùng nghĩa (because of, despite, during, in case of) chỉ bằng một phép thử: phía sau chỗ trống là **mệnh đề** hay **cụm danh từ**. Dạng câu này rất hay gặp ở Part 5 và Part 6, thường với bốn lựa chọn kiểu although / despite / because / because of.',
    en: 'This lesson teaches you to tell conjunctions (because, although, while, unless, in case) from prepositions with similar meanings (because of, despite, during, in case of) using one test: is the blank followed by a **clause** or a **noun phrase**? The item type is very common in Parts 5 and 6, typically with options such as although / despite / because / because of.',
  },
  mistakes: [
    {
      wrong: '[[Although]] the heavy rain, the outdoor product launch went ahead as planned.',
      right: '[[Despite]] the heavy rain, the outdoor product launch went ahead as planned.',
      explanation: {
        vi: 'Sau chỗ trống chỉ có cụm danh từ **the heavy rain**, không có động từ → cần giới từ **Despite** (hoặc In spite of). **Although** là liên từ, phải đi với mệnh đề: Although it rained heavily, …',
        en: 'The blank is followed only by the noun phrase **the heavy rain**, with no verb → the preposition **Despite** (or In spite of) is needed. **Although** is a conjunction and needs a clause: Although it rained heavily, …',
      },
    },
    {
      wrong: 'The flight to Osaka was delayed [[because]] a technical problem with one of the engines.',
      right: 'The flight to Osaka was delayed [[because of]] a technical problem with one of the engines.',
      explanation: {
        vi: 'Phía sau là cụm danh từ **a technical problem with one of the engines** → cần giới từ **because of**. **because** đứng một mình là liên từ, cần chủ ngữ + động từ (because there was a technical problem).',
        en: 'What follows is the noun phrase **a technical problem with one of the engines** → the preposition **because of** is needed. **because** on its own is a conjunction and needs a subject + verb (because there was a technical problem).',
      },
    },
    {
      wrong: 'Several staff members took notes [[during]] the CEO was presenting the annual results.',
      right: 'Several staff members took notes [[while]] the CEO was presenting the annual results.',
      explanation: {
        vi: 'Phía sau có chủ ngữ **the CEO** và động từ **was presenting** → đây là mệnh đề, nên dùng liên từ **while**. **during** là giới từ, chỉ đi với cụm danh từ (during the presentation).',
        en: 'What follows has a subject, **the CEO**, and a verb, **was presenting** → it is a clause, so the conjunction **while** is used. **during** is a preposition and only takes a noun phrase (during the presentation).',
      },
    },
    {
      wrong: '[[Despite of]] its small size, the boutique hotel attracts guests from all over the world.',
      right: '[[Despite]] its small size, the boutique hotel attracts guests from all over the world.',
      explanation: {
        vi: '**despite** không bao giờ đi với **of**. Hoặc dùng **despite**, hoặc dùng **in spite of** (luôn phải có of).',
        en: '**despite** is never followed by **of**. Use either **despite** or **in spite of** (which always needs of).',
      },
    },
    {
      wrong: 'Please keep your receipt [[in case of]] you need to exchange the item.',
      right: 'Please keep your receipt [[in case]] you need to exchange the item.',
      explanation: {
        vi: 'Phía sau là mệnh đề **you need to exchange the item** → dùng liên từ **in case** (phòng khi). **in case of** là giới từ, chỉ đi với danh từ (in case of damage).',
        en: 'What follows is the clause **you need to exchange the item** → use the conjunction **in case**. **in case of** is a preposition and only takes a noun (in case of damage).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Phép thử cốt lõi: mệnh đề hay cụm danh từ?', en: 'The core test: clause or noun phrase?' },
      body: {
        vi: '**Liên từ** nối một **mệnh đề** vào câu, tức là một cụm có chủ ngữ và động từ chia thì. **Giới từ** chỉ đứng trước **cụm danh từ**, đại từ hoặc V-ing. Hai từ có thể cùng nghĩa (because / because of) nhưng khác hẳn nhau về thứ đứng phía sau, và đề Part 5 khai thác đúng điểm này.',
        en: 'A **conjunction** joins a **clause** to the sentence, that is, a group of words with a subject and a finite verb. A **preposition** only comes before a **noun phrase**, a pronoun or a V-ing form. Two words can share a meaning (because / because of) yet take completely different structures after them, and Part 5 tests exactly this.',
      },
      table: {
        head: [
          { vi: 'Loại từ', en: 'Word class' },
          { vi: 'Theo sau là', en: 'Followed by' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Liên từ', en: 'Conjunction' },
            { vi: 'Mệnh đề: chủ ngữ + động từ chia thì', en: 'A clause: subject + finite verb' },
            'because the supplier raised its prices',
          ],
          [
            { vi: 'Giới từ', en: 'Preposition' },
            { vi: 'Cụm danh từ hoặc đại từ', en: 'A noun phrase or pronoun' },
            'because of the price increase / because of it',
          ],
          [
            { vi: 'Giới từ', en: 'Preposition' },
            { vi: 'V-ing (có thể kèm tân ngữ)', en: 'A V-ing form (with or without an object)' },
            'despite having little sales experience',
          ],
        ],
      },
      examples: [
        {
          en: 'The shipment reached the warehouse late **because** the truck broke down near the border.',
          vi: 'Lô hàng đến kho trễ vì chiếc xe tải bị hỏng gần biên giới.',
        },
        {
          en: 'The shipment reached the warehouse late **because of** a breakdown near the border.',
          vi: 'Lô hàng đến kho trễ do một sự cố hỏng xe gần biên giới.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Cụm danh từ có thể rất dài và chứa V-ing, V3 hay cả một mệnh đề quan hệ: **the unexpected delay caused by the strike**, **a storm that closed the port**. Đó vẫn là cụm danh từ, vì danh từ chính (delay, storm) không có động từ chia thì làm vị ngữ: caused và that closed… chỉ bổ nghĩa cho nó.',
          en: 'A noun phrase can be long and contain a V-ing form, a V3 or even a whole relative clause: **the unexpected delay caused by the strike**, **a storm that closed the port**. It is still a noun phrase, because the head noun (delay, storm) has no finite verb as its predicate: caused and that closed… only modify it.',
        },
      },
    },
    {
      heading: { vi: 'Nguyên nhân: because vs because of / due to / owing to', en: 'Reason: because vs because of / due to / owing to' },
      points: [
        {
          vi: '**because** + chủ ngữ + động từ: trong nhóm này chỉ mình because là liên từ.',
          en: '**because** + subject + verb: in this group, only because is a conjunction.',
        },
        {
          vi: '**because of / due to / owing to** + cụm danh từ: ba giới từ cùng nghĩa "do, vì"; owing to trang trọng hơn một chút.',
          en: '**because of / due to / owing to** + noun phrase: three prepositions meaning "as a result of"; owing to is slightly more formal.',
        },
        {
          vi: '**due to** rất hay đứng ngay sau động từ be: The delay was **due to** a staff shortage.',
          en: '**due to** very often comes straight after the verb be: The delay was **due to** a staff shortage.',
        },
        {
          vi: 'Muốn dùng giới từ trước một mệnh đề, phải chèn **the fact that**: due to the fact that / owing to the fact that + mệnh đề (trang trọng, dài hơn because).',
          en: 'To use a preposition before a clause, insert **the fact that**: due to the fact that / owing to the fact that + clause (formal and wordier than because).',
        },
        {
          vi: 'since và as cũng là liên từ chỉ nguyên nhân; nghĩa và cách dùng của chúng học ở bài 13.2.',
          en: 'since and as are also conjunctions of reason; their meaning and use are covered in lesson 13.2.',
        },
      ],
      examples: [
        {
          en: 'Two clients canceled their contracts **because** our delivery times were too long.',
          vi: 'Hai khách hàng đã hủy hợp đồng vì thời gian giao hàng của chúng tôi quá lâu.',
        },
        {
          en: 'Two clients canceled their contracts **because of** our long delivery times.',
          vi: 'Hai khách hàng đã hủy hợp đồng vì thời gian giao hàng kéo dài của chúng tôi.',
        },
        {
          en: 'The factory tour was shortened **owing to** the late arrival of the bus.',
          vi: 'Chuyến tham quan nhà máy bị rút ngắn do xe buýt đến muộn.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**because** đứng một mình không đi với danh từ: because the bad weather là sai. Quên **of** là lỗi rất hay gặp; ngược lại, **due to** + mệnh đề (due to the store closed early) cũng sai.',
          en: '**because** on its own does not take a noun: because the bad weather is wrong. Forgetting **of** is a very common error; likewise, **due to** + clause (due to the store closed early) is wrong.',
        },
      },
    },
    {
      heading: {
        vi: 'Nhượng bộ: although / even though vs despite / in spite of / notwithstanding',
        en: 'Concession: although / even though vs despite / in spite of / notwithstanding',
      },
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Vai trò và lưu ý', en: 'Role and notes' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['although / though', { vi: 'Liên từ + mệnh đề', en: 'Conjunction + clause' }, 'although the room was small'],
          [
            'even though',
            { vi: 'Liên từ + mệnh đề, nhấn mạnh hơn although', en: 'Conjunction + clause, more emphatic than although' },
            'even though sales rose',
          ],
          [
            'despite',
            { vi: 'Giới từ, KHÔNG bao giờ có of', en: 'Preposition, NEVER followed by of' },
            'despite the delay / despite being late',
          ],
          ['in spite of', { vi: 'Giới từ, LUÔN có of', en: 'Preposition, ALWAYS with of' }, 'in spite of the delay'],
          [
            'notwithstanding',
            {
              vi: 'Giới từ trang trọng (hợp đồng, văn bản chính thức); có thể đứng trước hoặc sau danh từ',
              en: 'Formal preposition (contracts, official documents); can come before or after the noun',
            },
            'notwithstanding the delay / the delay notwithstanding',
          ],
        ],
      },
      examples: [
        {
          en: '**Although** the hotel is located downtown, its rooms are surprisingly quiet.',
          vi: 'Mặc dù khách sạn nằm ở trung tâm, các phòng lại yên tĩnh đến bất ngờ.',
        },
        {
          en: '**Despite** its downtown location, the hotel has surprisingly quiet rooms.',
          vi: 'Dù nằm ở trung tâm, khách sạn có những căn phòng yên tĩnh đến bất ngờ.',
        },
        {
          en: '**In spite of** having no previous experience, Mr. Ruiz quickly became our top salesperson.',
          vi: 'Dù chưa có kinh nghiệm trước đó, anh Ruiz nhanh chóng trở thành nhân viên bán hàng giỏi nhất của chúng tôi.',
        },
        {
          en: '**Notwithstanding** the recent drop in sales, the board expects a profitable year.',
          vi: 'Bất chấp doanh số giảm gần đây, hội đồng quản trị vẫn kỳ vọng một năm có lãi.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Giống nhóm nguyên nhân, giới từ nhượng bộ đi được với mệnh đề khi thêm **the fact that**: despite the fact that / in spite of the fact that + mệnh đề. Phân biệt although với even if, while, whereas để dành cho bài 13.3.',
          en: 'As with the reason group, concession prepositions can introduce a clause once you add **the fact that**: despite the fact that / in spite of the fact that + clause. Telling although apart from even if, while and whereas is left to lesson 13.3.',
        },
      },
    },
    {
      heading: { vi: 'while vs during, in case vs in case of, và unless', en: 'while vs during, in case vs in case of, and unless' },
      table: {
        head: [
          { vi: 'Liên từ + mệnh đề', en: 'Conjunction + clause' },
          { vi: 'Giới từ + cụm danh từ', en: 'Preposition + noun phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['while', 'during', { vi: 'trong khi / trong suốt (một sự kiện, khoảng thời gian)', en: 'at the same time as / throughout (an event or period)' }],
          ['in case', 'in case of', { vi: 'phòng khi / trong trường hợp có', en: 'as a precaution in case / if there is' }],
          ['unless', 'without', { vi: 'trừ khi, nếu không / nếu không có', en: 'if not, except if / if there is no' }],
        ],
      },
      points: [
        {
          vi: '**while** + mệnh đề: while the system is being updated. **during** + danh từ chỉ sự kiện hoặc khoảng thời gian: during the update, during the holiday season. during không bao giờ đi với mệnh đề.',
          en: '**while** + clause: while the system is being updated. **during** + a noun for an event or a period: during the update, during the holiday season. during never takes a clause.',
        },
        {
          vi: '**in case** + mệnh đề (dùng hiện tại đơn khi nói về tương lai): Take an umbrella in case it rains. **in case of** + danh từ, rất hay gặp trên biển báo và thông báo: In case of fire, use the stairs.',
          en: '**in case** + clause (with the present simple for the future): Take an umbrella in case it rains. **in case of** + noun, very common on signs and notices: In case of fire, use the stairs.',
        },
        {
          vi: '**unless** (≈ if … not) chỉ là liên từ: unless the invoice is paid by Friday. Muốn diễn đạt bằng cụm danh từ, đổi sang giới từ như **without**: Without a valid pass, visitors cannot enter.',
          en: '**unless** (≈ if … not) is only a conjunction: unless the invoice is paid by Friday. To express the idea with a noun phrase, switch to a preposition such as **without**: Without a valid pass, visitors cannot enter.',
        },
      ],
      examples: [
        {
          en: 'Please do not turn off your computer **while** the software is installing.',
          vi: 'Vui lòng không tắt máy tính trong khi phần mềm đang cài đặt.',
        },
        {
          en: 'Please do not turn off your computer **during** the installation.',
          vi: 'Vui lòng không tắt máy tính trong quá trình cài đặt.',
        },
        {
          en: 'Applications will not be considered **unless** they include two references.',
          vi: 'Hồ sơ ứng tuyển sẽ không được xem xét trừ khi có kèm hai thư giới thiệu.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Đôi khi liên từ đứng trước V-ing, V3, tính từ hay thậm chí danh từ vì mệnh đề đã được rút gọn (lược chủ ngữ + be): while waiting, unless otherwise noted, although tired, while a student in Seoul. Dạng này học ở bài 13.4. Phép thử: thêm lại "chủ ngữ + be" mà câu vô nghĩa (although [the company was] a sharp rise in costs) thì chỗ trống cần giới từ.',
          en: 'A conjunction sometimes comes before a V-ing form, a V3, an adjective or even a noun because the clause has been reduced (subject + be left out): while waiting, unless otherwise noted, although tired, while a student in Seoul. This is covered in lesson 13.4. The test: if putting "subject + be" back makes nonsense (although [the company was] a sharp rise in costs), the blank needs a preposition.',
        },
      },
    },
    {
      heading: { vi: 'Những từ đóng cả hai vai: before, after, since, until', en: 'Words that play both roles: before, after, since, until' },
      body: {
        vi: 'Bốn từ này vừa là giới từ vừa là liên từ, nên phía sau là cụm danh từ hay mệnh đề đều đúng ngữ pháp. Ngược lại, **prior to** (= before) và **following** (= after) CHỈ là giới từ: prior to the meeting là đúng, prior to the meeting starts là sai.',
        en: 'These four words are both prepositions and conjunctions, so either a noun phrase or a clause after them is grammatical. By contrast, **prior to** (= before) and **following** (= after) are ONLY prepositions: prior to the meeting is correct, prior to the meeting starts is wrong.',
      },
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Giới từ + cụm danh từ', en: 'Preposition + noun phrase' },
          { vi: 'Liên từ + mệnh đề', en: 'Conjunction + clause' },
        ],
        rows: [
          ['before', 'before the meeting', 'before the meeting starts'],
          ['after', 'after the inspection', 'after the inspector leaves'],
          ['since', 'since 2019 / since the merger', 'since the company merged with Alto'],
          ['until', 'until Friday', 'until the spare parts arrive'],
        ],
      },
      examples: [
        {
          en: 'Please return your room key to the front desk **before** you check out.',
          vi: 'Vui lòng trả chìa khóa phòng cho quầy lễ tân trước khi quý khách trả phòng.',
        },
        {
          en: 'Please return your room key to the front desk **before** checkout.',
          vi: 'Vui lòng trả chìa khóa phòng cho quầy lễ tân trước giờ trả phòng.',
        },
        {
          en: '**Prior to** the launch, the team tested the app with two hundred users.',
          vi: 'Trước khi ra mắt, nhóm đã thử nghiệm ứng dụng với hai trăm người dùng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy cả **before** và **prior to** (hoặc **after** và **following**) trong bốn lựa chọn mà phía sau là mệnh đề → chọn before/after. Khi chỉ còn các từ đóng hai vai, phép thử cấu trúc không giúp được nữa: phải chọn theo nghĩa (bài 13.1).',
          en: 'If the options include both **before** and **prior to** (or **after** and **following**) and a clause follows → choose before/after. When only both-role words remain, the structure test no longer helps: choose by meaning (lesson 13.1).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu liên từ / giới từ trong Part 5', en: 'Attacking conjunction / preposition items in Part 5' },
      points: [
        {
          vi: 'Nhìn bốn lựa chọn: có cả liên từ lẫn giới từ cùng nghĩa (although / despite, because / because of) → đây là câu hỏi vai trò, chưa cần dịch.',
          en: 'Scan the options: conjunctions mixed with prepositions of similar meaning (although / despite, because / because of) → it is a role question; no need to translate yet.',
        },
        {
          vi: 'Đọc phần sau chỗ trống đến dấu phẩy hoặc hết vế, tìm một chủ ngữ đi với động từ chia thì. Có → liên từ; không có (chỉ có danh từ, đại từ, V-ing) → giới từ.',
          en: 'Read what follows the blank up to the comma or the end of that part, looking for a subject with a finite verb. Found one → conjunction; none (only a noun, a pronoun, a V-ing form) → preposition.',
        },
        {
          vi: 'Cảnh giác với "động từ giả": phân từ làm tính từ (the rising cost), mệnh đề quan hệ (a storm that closed…), the fact that + mệnh đề. Tất cả vẫn là cụm danh từ.',
          en: 'Watch out for "fake verbs": participles used as adjectives (the rising cost), relative clauses (a storm that closed…), the fact that + clause. All of these are still noun phrases.',
        },
        {
          vi: 'Còn hai lựa chọn cùng vai trò → chọn theo nghĩa: nguyên nhân hay nhượng bộ, thời gian hay điều kiện.',
          en: 'If two options with the same role remain → choose by meaning: reason or concession, time or condition.',
        },
      ],
      table: {
        head: [
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Liên từ + mệnh đề', en: 'Conjunction + clause' },
          { vi: 'Giới từ + cụm danh từ', en: 'Preposition + noun phrase' },
        ],
        rows: [
          [{ vi: 'Nguyên nhân', en: 'Reason' }, 'because (since, as)', 'because of, due to, owing to'],
          [{ vi: 'Nhượng bộ', en: 'Concession' }, 'although, though, even though', 'despite, in spite of, notwithstanding'],
          [{ vi: 'Trong lúc', en: 'Time span' }, 'while', 'during'],
          [{ vi: 'Phòng khi', en: 'Precaution' }, 'in case', 'in case of'],
          [{ vi: 'Điều kiện phủ định', en: 'Negative condition' }, 'unless', 'without'],
          [{ vi: 'Trước / sau', en: 'Before / after' }, 'before, after', 'before, after, prior to, following'],
        ],
      },
    },
  ],
  questions: [
    {
      sentence: 'Several morning flights from Denver were canceled ------- a severe snowstorm that closed two of the main runways.',
      options: ['because', 'although', 'due to', 'while'],
      answer: 2,
      explanation: {
        vi: 'Sau chỗ trống là cụm danh từ **a severe snowstorm**; **that closed two of the main runways** chỉ là mệnh đề quan hệ bổ nghĩa cho snowstorm, không phải vị ngữ của nó. Vậy cần giới từ **due to**. because và while là liên từ nên cần mệnh đề; although còn sai cả nghĩa.',
        en: 'After the blank comes the noun phrase **a severe snowstorm**; **that closed two of the main runways** is only a relative clause describing it, not its predicate. So the preposition **due to** is needed. because and while are conjunctions and need a clause; although is also wrong in meaning.',
      },
      translation: 'Nhiều chuyến bay buổi sáng từ Denver đã bị hủy do một trận bão tuyết lớn khiến hai đường băng chính phải đóng cửa.',
    },
    {
      sentence: "The quarterly sales meeting was postponed ------- the regional director's flight from Seoul had been delayed.",
      options: ['because of', 'owing to', 'notwithstanding', 'because'],
      answer: 3,
      explanation: {
        vi: "Phía sau là một mệnh đề đầy đủ: chủ ngữ **the regional director's flight** + động từ **had been delayed** → cần liên từ **because**. because of và owing to là giới từ, chỉ đi với cụm danh từ; notwithstanding vừa là giới từ vừa sai nghĩa.",
        en: "What follows is a full clause: the subject **the regional director's flight** + the verb **had been delayed** → the conjunction **because** is needed. because of and owing to are prepositions and only take a noun phrase; notwithstanding is a preposition and wrong in meaning as well.",
      },
      translation: 'Cuộc họp kinh doanh hằng quý đã bị hoãn vì chuyến bay từ Seoul của giám đốc khu vực bị trễ.',
    },
    {
      sentence: '------- the new color printer was more expensive than the old model, it has already reduced our maintenance costs.',
      options: ['Even though', 'Despite', 'In spite of', 'Due to'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống có chủ ngữ **the new color printer** và động từ **was** → mệnh đề → liên từ **Even though**. Despite và In spite of cùng nghĩa nhưng là giới từ, không đi trực tiếp với mệnh đề (phải thêm the fact that); Due to cũng là giới từ và còn sai nghĩa.',
        en: 'The blank is followed by the subject **the new color printer** and the verb **was** → a clause → the conjunction **Even though**. Despite and In spite of have the right meaning but are prepositions and cannot take a clause directly (they need the fact that); Due to is also a preposition and wrong in meaning.',
      },
      translation: 'Mặc dù máy in màu mới đắt hơn mẫu cũ, nó đã giúp giảm chi phí bảo trì của chúng tôi.',
    },
    {
      sentence: '------- the rising cost of raw materials, Brightwell Home Goods has kept the prices of its kitchen appliances unchanged this year.',
      options: ['Although', 'In spite of', 'Even though', 'Because'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là cụm danh từ **the rising cost of raw materials**; **rising** chỉ là phân từ làm tính từ, không phải động từ chính. Cụm danh từ → giới từ **In spite of**. Although và Even though đúng nghĩa nhưng là liên từ, cần mệnh đề; Because cũng là liên từ và sai nghĩa.',
        en: 'After the blank comes the noun phrase **the rising cost of raw materials**; **rising** is just a participle used as an adjective, not a main verb. A noun phrase → the preposition **In spite of**. Although and Even though have the right meaning but are conjunctions that need a clause; Because is also a conjunction and wrong in meaning.',
      },
      translation: 'Bất chấp chi phí nguyên vật liệu tăng cao, Brightwell Home Goods vẫn giữ nguyên giá các thiết bị nhà bếp của mình trong năm nay.',
    },
    {
      sentence: 'Ms. Tanaka responded to several urgent client e-mails ------- her colleagues were setting up the conference room.',
      options: ['during', 'despite', 'while', 'because of'],
      answer: 2,
      explanation: {
        vi: 'Phía sau có chủ ngữ **her colleagues** và động từ **were setting up** → mệnh đề → liên từ **while**. during có nghĩa gần giống nhưng là giới từ, chỉ đi với cụm danh từ (during the setup); despite và because of cũng là giới từ.',
        en: 'What follows has the subject **her colleagues** and the verb **were setting up** → a clause → the conjunction **while**. during has a similar meaning but is a preposition that only takes a noun phrase (during the setup); despite and because of are prepositions too.',
      },
      translation: 'Cô Tanaka đã trả lời vài e-mail khẩn của khách hàng trong khi các đồng nghiệp đang sắp xếp phòng hội nghị.',
    },
    {
      sentence: "Guests may experience brief interruptions to the hotel's Wi-Fi service ------- the scheduled network upgrade on Saturday morning.",
      options: ['while', 'during', 'when', 'although'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là cụm danh từ **the scheduled network upgrade** (upgrade ở đây là danh từ, đứng sau the) và không có động từ chia thì → giới từ **during**. while, when và although đều là liên từ, cần chủ ngữ + động từ.',
        en: 'After the blank comes the noun phrase **the scheduled network upgrade** (upgrade is a noun here, following the) with no finite verb → the preposition **during**. while, when and although are all conjunctions and need a subject + verb.',
      },
      translation: 'Khách lưu trú có thể gặp một vài lần gián đoạn ngắn dịch vụ Wi-Fi của khách sạn trong đợt nâng cấp mạng theo lịch vào sáng thứ Bảy.',
    },
    {
      sentence: "Please print a copy of your boarding pass ------- the airline's mobile app does not work at the gate.",
      options: ['in case of', 'because of', 'in spite of', 'in case'],
      answer: 3,
      explanation: {
        vi: "Phía sau là mệnh đề **the airline's mobile app does not work** → cần liên từ **in case** (phòng khi). in case of là giới từ, chỉ đi với danh từ (in case of a technical problem); because of và in spite of cũng là giới từ.",
        en: "What follows is the clause **the airline's mobile app does not work** → the conjunction **in case** is needed. in case of is a preposition that only takes a noun (in case of a technical problem); because of and in spite of are prepositions too.",
      },
      translation: 'Vui lòng in một bản thẻ lên máy bay phòng khi ứng dụng di động của hãng hàng không không hoạt động tại cửa ra máy bay.',
    },
    {
      sentence: 'Your order will be shipped by standard ground delivery ------- you select a faster option at checkout.',
      options: ['unless', 'without', 'despite', 'in case of'],
      answer: 0,
      explanation: {
        vi: 'Phía sau là mệnh đề **you select a faster option** → cần liên từ **unless** (trừ khi). without là giới từ, phải đi với cụm danh từ hoặc V-ing (without a faster option); despite và in case of cũng là giới từ.',
        en: 'What follows is the clause **you select a faster option** → the conjunction **unless** is needed. without is a preposition and must take a noun phrase or a V-ing form (without a faster option); despite and in case of are prepositions too.',
      },
      translation: 'Đơn hàng của quý khách sẽ được giao bằng đường bộ tiêu chuẩn, trừ khi quý khách chọn phương thức nhanh hơn lúc thanh toán.',
    },
    {
      sentence: '------- the renovation of the east wing is complete, the Harbor View Hotel will be able to host larger conferences.',
      options: ['Following', 'During', 'Despite', 'After'],
      answer: 3,
      explanation: {
        vi: 'Phía sau là mệnh đề **the renovation of the east wing is complete** (động từ **is**) → cần liên từ. **After** đóng được cả hai vai nên đúng. **Following** cùng nghĩa với After nhưng CHỈ là giới từ (following the renovation); During và Despite cũng là giới từ.',
        en: 'What follows is the clause **the renovation of the east wing is complete** (verb **is**) → a conjunction is needed. **After** can play both roles, so it is correct. **Following** means the same as After but is ONLY a preposition (following the renovation); During and Despite are prepositions too.',
      },
      translation: 'Sau khi việc cải tạo khu phía đông hoàn tất, khách sạn Harbor View sẽ có thể tổ chức những hội nghị lớn hơn.',
    },
    {
      sentence: 'The merger with Castellan Logistics was approved ------- the fact that several shareholders had expressed concerns about it.',
      options: ['although', 'despite', 'even though', 'because'],
      answer: 1,
      explanation: {
        vi: 'Phía sau là **the fact that** + mệnh đề: cả cụm là một cụm danh từ với danh từ chính **fact**, nên cần giới từ → **despite** the fact that. although, even though và because là liên từ; đặt trước the fact that thì danh từ fact không có động từ nào làm vị ngữ.',
        en: 'What follows is **the fact that** + clause: the whole thing is a noun phrase headed by **fact**, so a preposition is needed → **despite** the fact that. although, even though and because are conjunctions; placed before the fact that, they leave fact with no verb as its predicate.',
      },
      translation: 'Việc sáp nhập với Castellan Logistics đã được thông qua bất chấp việc một số cổ đông đã bày tỏ lo ngại về nó.',
    },
  ],
};
