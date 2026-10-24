import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'word-forms-position',
  intro: {
    vi: 'Hậu tố (bài 1.1) cho biết mỗi lựa chọn là từ loại gì; bài này dạy bạn đọc **vị trí** của chỗ trống, tức những từ đứng ngay trước và ngay sau nó, để biết câu cần danh từ, tính từ, trạng từ hay động từ. Đây là kỹ năng giải phần lớn câu từ loại trong Part 5 và Part 6.',
    en: 'Suffixes (lesson 1.1) tell you what part of speech each option is; this lesson teaches you to read the **position** of the blank, the words right before and after it, to know whether the sentence needs a noun, adjective, adverb or verb. This is the skill behind most word-form items in Part 5 and Part 6.',
  },
  mistakes: [
    {
      wrong: 'Guests can now check in online for added [[convenient]].',
      right: 'Guests can now check in online for added [[convenience]].',
      explanation: {
        vi: 'Sau giới từ **for** và tính từ **added** cần một danh từ. **convenient** là tính từ; danh từ là **convenience** (sự tiện lợi).',
        en: 'After the preposition **for** and the adjective **added**, a noun is needed. **convenient** is an adjective; the noun is **convenience**.',
      },
    },
    {
      wrong: 'Our accountants [[analysis]] the quarterly figures before every board meeting.',
      right: 'Our accountants [[analyze]] the quarterly figures before every board meeting.',
      explanation: {
        vi: 'Câu có chủ ngữ **Our accountants** và tân ngữ **the quarterly figures** nhưng chưa có động từ chính. **analysis** là danh từ; phải dùng động từ **analyze**.',
        en: 'The sentence has a subject (**Our accountants**) and an object (**the quarterly figures**) but no main verb. **analysis** is a noun; the verb **analyze** is needed.',
      },
    },
    {
      wrong: 'The new packaging design has remained [[popularly]] with younger shoppers.',
      right: 'The new packaging design has remained [[popular]] with younger shoppers.',
      explanation: {
        vi: '**remain** là động từ nối, nên theo sau là tính từ miêu tả chủ ngữ chứ không phải trạng từ → **popular**.',
        en: '**remain** is a linking verb, so it is followed by an adjective describing the subject, not an adverb → **popular**.',
      },
    },
    {
      wrong: 'The shipment has [[final]] arrived at our Rotterdam warehouse.',
      right: 'The shipment has [[finally]] arrived at our Rotterdam warehouse.',
      explanation: {
        vi: 'Vị trí giữa trợ động từ **has** và động từ chính **arrived** dành cho trạng từ → **finally**. **final** là tính từ.',
        en: 'The slot between the auxiliary **has** and the main verb **arrived** belongs to an adverb → **finally**. **final** is an adjective.',
      },
    },
    {
      wrong: 'The quarterly sales conference was [[extreme]] productive this year.',
      right: 'The quarterly sales conference was [[extremely]] productive this year.',
      explanation: {
        vi: 'Từ chỉ mức độ cho tính từ **productive** (hiệu quả đến mức nào) phải là trạng từ → **extremely**. **extreme** là tính từ nên không dùng để chỉ mức độ cho một tính từ khác.',
        en: 'A word that shows the degree of the adjective **productive** (how productive) must be an adverb → **extremely**. **extreme** is an adjective and cannot express the degree of another adjective.',
      },
    },
  ],
  theory: [
    {
      heading: {
        vi: 'Hậu tố cho biết "là gì", vị trí cho biết "cần gì"',
        en: 'Suffixes say what a word is; position says what the blank needs',
      },
      body: {
        vi: 'Một câu từ loại có hai bước. Bước 1: nhìn những từ ngay trước và ngay sau chỗ trống để biết vị trí đó cần **danh từ**, **tính từ**, **trạng từ** hay **động từ**. Bước 2: dùng hậu tố (bài 1.1) để tìm lựa chọn thuộc đúng từ loại đó. Cùng một gốc từ, mỗi vị trí đòi một dạng khác nhau:',
        en: 'A word-form item takes two steps. Step 1: look at the words right before and after the blank to see whether that slot needs a **noun**, **adjective**, **adverb** or **verb**. Step 2: use suffixes (lesson 1.1) to find the option of that part of speech. With the same root, each position demands a different form:',
      },
      examples: [
        {
          en: 'The board will announce its **decision** on Friday.',
          vi: 'Hội đồng quản trị sẽ công bố quyết định của mình vào thứ Sáu.',
        },
        {
          en: 'Ms. Grant took **decisive** action to reduce costs.',
          vi: 'Bà Grant đã hành động quyết đoán để cắt giảm chi phí.',
        },
        {
          en: 'The committee will **decide** on the venue next week.',
          vi: 'Uỷ ban sẽ quyết định địa điểm vào tuần tới.',
        },
        {
          en: 'The manager acted **decisively** when the supplier went bankrupt.',
          vi: 'Người quản lý đã hành động dứt khoát khi nhà cung cấp phá sản.',
        },
      ],
    },
    {
      heading: { vi: 'Vị trí của danh từ', en: 'Noun positions' },
      points: [
        {
          vi: "Sau **từ hạn định**: mạo từ (a, an, the), tính từ sở hữu (my, our, their, its), sở hữu cách ('s), từ chỉ định và lượng từ như this, these, some, several, each. Nếu ngay sau chỗ trống không có danh từ nào khác (mà là động từ, giới từ như of, hoặc dấu câu), chỗ trống chính là danh từ.",
          en: "After a **determiner**: articles (a, an, the), possessives (my, our, their, its), possessive 's, demonstratives and quantifiers such as this, these, some, several or each. If the blank is not followed by another noun (but by a verb, a preposition such as of, or punctuation), the blank itself is the noun.",
        },
        {
          vi: 'Sau **tính từ**, có hoặc không có mạo từ đi trước: a thorough **inspection**, strong **demand**.',
          en: 'After an **adjective**, with or without an article before it: a thorough **inspection**, strong **demand**.',
        },
        {
          vi: 'Sau **giới từ** (for, of, in, without, upon…): giới từ cần một danh từ hoặc cụm danh từ làm tân ngữ: for **inspection**, without **permission**.',
          en: 'After a **preposition** (for, of, in, without, upon…): a preposition needs a noun or noun phrase as its object: for **inspection**, without **permission**.',
        },
        {
          vi: 'Ở vị trí **chủ ngữ**: đầu câu, trước động từ chính, hay gặp dạng The ___ of …: The **relocation** of our head office will take about six weeks.',
          en: 'In **subject** position: at the start of the clause, before the main verb, often as The ___ of …: The **relocation** of our head office will take about six weeks.',
        },
        {
          vi: 'Làm **tân ngữ** ngay sau ngoại động từ (provide, receive, require, request, offer): The position requires **fluency** in Korean.',
          en: 'As the **object** right after a transitive verb (provide, receive, require, request, offer): The position requires **fluency** in Korean.',
        },
      ],
      examples: [
        {
          en: "Mr. Ito's **resignation** came as a surprise to the sales team.",
          vi: 'Việc ông Ito từ chức khiến cả nhóm kinh doanh bất ngờ.',
        },
        {
          en: 'Samples are sent to an outside laboratory for **analysis**.',
          vi: 'Các mẫu được gửi đến một phòng thí nghiệm bên ngoài để phân tích.',
        },
        {
          en: 'The hotel provides free **transportation** to the convention center.',
          vi: 'Khách sạn cung cấp dịch vụ đưa đón miễn phí đến trung tâm hội nghị.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Sau giới từ cũng có thể là **V-ing** (by **reducing** costs, bài 9.2): V-ing vẫn mang tính động từ nên thường kéo theo tân ngữ riêng. Còn nếu ngay trước chỗ trống đã có mạo từ hoặc tính từ (the, written, careful…), hãy chọn danh từ.',
          en: 'A **V-ing** form can also follow a preposition (by **reducing** costs, lesson 9.2): it is still verbal, so it usually takes its own object. But if an article or adjective comes right before the blank (the, written, careful…), choose the noun.',
        },
      },
    },
    {
      heading: { vi: 'Vị trí của tính từ', en: 'Adjective positions' },
      points: [
        {
          vi: 'Trước danh từ, thường nằm giữa từ hạn định và danh từ: a **reliable** supplier, our **annual** budget, **competitive** prices. Có thể có trạng từ đứng trước tính từ: a highly **competitive** market.',
          en: 'Before a noun, typically between a determiner and the noun: a **reliable** supplier, our **annual** budget, **competitive** prices. An adverb may come before the adjective: a highly **competitive** market.',
        },
        {
          vi: 'Sau **động từ nối** (linking verb): be, become, remain, stay, seem, appear, prove, look, sound, feel, get, grow. Động từ nối không diễn tả hành động mà nối chủ ngữ với đặc điểm của nó, nên từ đứng sau để miêu tả chủ ngữ phải là tính từ, KHÔNG phải trạng từ.',
          en: 'After a **linking verb**: be, become, remain, stay, seem, appear, prove, look, sound, feel, get, grow. A linking verb does not describe an action; it connects the subject to a quality, so the word after it that describes the subject must be an adjective, NOT an adverb.',
        },
        {
          vi: 'Sau tân ngữ của **make, keep, find, consider** (tính từ miêu tả tân ngữ): keep the files **secure**, consider the plan **feasible**.',
          en: 'After the object of **make, keep, find, consider** (the adjective describes the object): keep the files **secure**, consider the plan **feasible**.',
        },
        {
          vi: 'look, appear, feel, grow còn có nghĩa hành động; khi đó chúng là động từ thường và đi với trạng từ: She **looked carefully** at the contract.',
          en: 'look, appear, feel and grow also have action meanings; then they are ordinary verbs and take adverbs: She **looked carefully** at the contract.',
        },
      ],
      table: {
        head: [
          { vi: 'Động từ nối', en: 'Linking verb' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['become / get / grow', { vi: 'trở nên', en: 'change into a state' }, 'The market became **unpredictable**.'],
          ['remain / stay', { vi: 'vẫn, giữ nguyên', en: 'continue to be' }, 'Our prices remain **competitive**.'],
          ['seem / appear', { vi: 'có vẻ, dường như', en: 'give an impression' }, 'The deadline seems **realistic**.'],
          ['look / sound / feel', { vi: 'trông / nghe / cảm thấy', en: 'impression through the senses' }, 'The new lobby looks **spacious**.'],
          ['prove', { vi: 'hoá ra, tỏ ra', en: 'turn out to be' }, 'The new route proved **profitable**.'],
        ],
      },
      examples: [
        {
          en: 'Northgate Electronics has been a **dependable** partner for over a decade.',
          vi: 'Northgate Electronics đã là một đối tác đáng tin cậy suốt hơn mười năm qua.',
        },
        {
          en: 'Please keep your access card **visible** at all times inside the plant.',
          vi: 'Vui lòng luôn để thẻ ra vào ở chỗ dễ thấy khi ở trong nhà máy.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Sau động từ nối cũng có thể là **cụm danh từ** khi nó GỌI TÊN chủ ngữ chứ không miêu tả: Ms. Ruiz became **the regional director**. Khi câu nói chủ ngữ "như thế nào" (ổn định, hợp lý, phổ biến…), hãy chọn tính từ.',
          en: 'A linking verb can also take a **noun phrase** when it NAMES the subject rather than describing it: Ms. Ruiz became **the regional director**. When the sentence says what the subject is LIKE (stable, reasonable, popular…), choose the adjective.',
        },
      },
    },
    {
      heading: { vi: 'Vị trí của trạng từ', en: 'Adverb positions' },
      points: [
        {
          vi: 'Bổ nghĩa cho **động từ thường**: đứng sau động từ (hoặc sau tân ngữ nếu có), hoặc ngay trước động từ: The team worked **efficiently**. / Ms. Kaur **quickly** replied to the client. Trạng từ thường không chen giữa động từ và một tân ngữ ngắn: review the contract **carefully**, không nói review carefully the contract.',
          en: 'Modifying an **ordinary verb**: after the verb (or after its object), or right before the verb: The team worked **efficiently**. / Ms. Kaur **quickly** replied to the client. An adverb normally does not go between a verb and a short object: review the contract **carefully**, not review carefully the contract.',
        },
        {
          vi: 'Giữa **trợ động từ** và động từ chính: has **recently** opened, will **soon** announce, was **carefully** packed. Vị trí giữa to và động từ nguyên mẫu cũng gặp trong đề: to **fully** understand.',
          en: 'Between an **auxiliary** and the main verb: has **recently** opened, will **soon** announce, was **carefully** packed. The slot between to and the base verb also appears on the test: to **fully** understand.',
        },
        {
          vi: 'Trước **tính từ** hoặc **trạng từ** khác để chỉ mức độ: **extremely** busy, **reasonably** priced, **relatively** quickly. Ngoại lệ: **enough** đứng SAU tính từ/trạng từ: large **enough**.',
          en: 'Before an **adjective** or another **adverb**, to show degree: **extremely** busy, **reasonably** priced, **relatively** quickly. Exception: **enough** comes AFTER the adjective or adverb: large **enough**.',
        },
        {
          vi: 'Câu đã đủ thành phần (chủ ngữ + động từ, thêm tân ngữ nếu động từ cần) mà vẫn còn chỗ trống → chỗ trống thường là trạng từ.',
          en: 'If the clause is already complete (subject + verb, plus an object if the verb needs one) and there is still a blank, it is usually an adverb.',
        },
        {
          vi: 'Trạng từ chỉ cách thức (quickly, carefully…) KHÔNG bổ nghĩa cho danh từ: a **quick** reply, không phải a quickly reply.',
          en: 'Manner adverbs (quickly, carefully…) do NOT modify nouns: a **quick** reply, not a quickly reply.',
        },
      ],
      examples: [
        {
          en: 'The conference center is **conveniently** located near Central Station.',
          vi: 'Trung tâm hội nghị nằm ở vị trí thuận tiện, gần Ga Trung tâm.',
        },
        {
          en: 'Warehouse employees have **gradually** adopted the new tracking system.',
          vi: 'Nhân viên kho đã dần dần áp dụng hệ thống theo dõi hàng mới.',
        },
        {
          en: 'Mr. Dubois handled the dispute with the supplier **professionally**.',
          vi: 'Ông Dubois đã xử lý tranh chấp với nhà cung cấp một cách chuyên nghiệp.',
        },
        {
          en: 'We received an **unusually** large order from a client in Osaka.',
          vi: 'Chúng tôi nhận được một đơn hàng lớn bất thường từ một khách hàng ở Osaka.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẫu a/the + ___ + tính từ + danh từ: đáp án thường là trạng từ chỉ mức độ bổ nghĩa cho tính từ phía sau (an **unusually** large order). Hai tính từ đứng liền nhau vẫn có thể đúng (a large wooden desk), nên hãy tự hỏi: từ cần điền nói "lớn đến mức nào" hay thêm một đặc điểm khác của danh từ?',
          en: 'Pattern a/the + ___ + adjective + noun: the answer is usually a degree adverb modifying the adjective after it (an **unusually** large order). Two adjectives in a row can also be correct (a large wooden desk), so ask yourself: does the word say how large, or add a separate quality of the noun?',
        },
      },
    },
    {
      heading: { vi: 'Vị trí của động từ', en: 'Verb positions' },
      points: [
        {
          vi: 'Mỗi mệnh đề cần một **động từ chính** đã chia. Có chủ ngữ mà câu chưa có động từ chính → chỗ trống là động từ: Our firm **supplies** steel to three carmakers.',
          en: 'Every clause needs one finite **main verb**. If the subject is there but the clause has no main verb yet, the blank is the verb: Our firm **supplies** steel to three carmakers.',
        },
        {
          vi: 'Sau động từ khuyết thiếu (will, can, should, must, may) và sau **to** của động từ nguyên mẫu → động từ nguyên mẫu: will **expand**, plan to **relocate**.',
          en: 'After a modal (will, can, should, must, may) and after the infinitive marker **to** → the base form: will **expand**, plan to **relocate**.',
        },
        {
          vi: 'Đầu câu mệnh lệnh, kể cả sau **Please** → động từ nguyên mẫu: Please **confirm** your attendance by Friday.',
          en: 'At the start of an imperative, including after **Please** → the base form: Please **confirm** your attendance by Friday.',
        },
        {
          vi: 'Bài này chỉ dừng ở việc nhận ra chỗ trống cần động từ. Chọn thì (chương 4), dạng số ít/số nhiều (chương 3) và chủ động/bị động (chương 6) sẽ học sau.',
          en: 'This lesson stops at spotting that the blank needs a verb. Choosing the tense (chapter 4), the singular/plural form (chapter 3) and active or passive voice (chapter 6) comes later.',
        },
      ],
      examples: [
        {
          en: 'The marketing department **conducts** a customer survey every spring.',
          vi: 'Phòng marketing tiến hành khảo sát khách hàng vào mỗi mùa xuân.',
        },
        {
          en: 'Applicants should **attach** a copy of their certificates to the online form.',
          vi: 'Ứng viên nên đính kèm bản sao các chứng chỉ vào biểu mẫu trực tuyến.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Nếu câu ĐÃ có động từ chính thì chỗ trống không thể là một động từ chia thì thứ hai (trừ khi có liên từ hoặc đại từ quan hệ nối hai mệnh đề). Ví dụ: The director ___ approved the budget → đã có **approved**, nên với bốn lựa chọn cùng gốc, chỗ trống là trạng từ (finally).',
          en: 'If the clause ALREADY has a main verb, the blank cannot be a second finite verb (unless a conjunction or relative pronoun joins two clauses). Example: The director ___ approved the budget → **approved** is already there, so with four same-root options the blank is an adverb (finally).',
        },
      },
    },
    {
      heading: {
        vi: 'Cách làm câu từ loại theo vị trí trong Part 5',
        en: 'Attacking position-based word-form items in Part 5',
      },
      table: {
        head: [
          { vi: 'Quanh chỗ trống', en: 'Around the blank' },
          { vi: 'Cần điền', en: 'Fill in' },
        ],
        rows: [
          ['the / a / their + ___ + of / verb', { vi: 'Danh từ', en: 'Noun' }],
          ['preposition (+ adjective) + ___ (no noun after)', { vi: 'Danh từ', en: 'Noun' }],
          ['transitive verb + ___ (no noun after)', { vi: 'Danh từ (tân ngữ)', en: 'Noun (object)' }],
          ['a / the + ___ + noun', { vi: 'Tính từ', en: 'Adjective' }],
          ['be / remain / seem + ___ (no noun after)', { vi: 'Tính từ', en: 'Adjective' }],
          ['subject + ___ + object', { vi: 'Động từ chính', en: 'Main verb' }],
          ['will / can / to + ___ (+ object)', { vi: 'Động từ nguyên mẫu', en: 'Base verb' }],
          ['has / will / is + ___ + main verb', { vi: 'Trạng từ', en: 'Adverb' }],
          ['___ + adjective / adverb', { vi: 'Trạng từ', en: 'Adverb' }],
          ['complete clause + ___', { vi: 'Trạng từ', en: 'Adverb' }],
        ],
      },
      points: [
        {
          vi: 'Bốn lựa chọn cùng một gốc → câu từ loại; chưa cần dịch cả câu.',
          en: 'Four options with one root → a word-form item; no need to translate the whole sentence yet.',
        },
        {
          vi: 'Nhìn bên TRÁI chỗ trống: từ hạn định, giới từ → vùng của danh từ (hoặc tính từ + danh từ); động từ nối → tính từ; trợ động từ → động từ hoặc trạng từ.',
          en: 'Look LEFT of the blank: a determiner or preposition → noun territory (or adjective + noun); a linking verb → adjective; an auxiliary → verb or adverb.',
        },
        {
          vi: 'Nhìn bên PHẢI: từ hạn định + ___ + danh từ → thường là tính từ (danh từ chỉ đứng được ở đây khi tạo thành danh từ ghép, bài 2.2); có tính từ/trạng từ theo sau → thường là trạng từ; the/a + ___ + **of** → danh từ (nhưng be + ___ + of thường là tính từ: be aware of, be capable of).',
          en: 'Look RIGHT: determiner + ___ + noun → usually an adjective (a noun fits here only as part of a compound noun, lesson 2.2); an adjective or adverb follows → usually an adverb; the/a + ___ + **of** → noun (but be + ___ + of is usually an adjective: be aware of, be capable of).',
        },
        {
          vi: 'Kiểm tra cả câu: chưa có động từ chính → chọn động từ; câu đã đủ thành phần → chọn trạng từ.',
          en: 'Check the whole clause: no main verb yet → choose the verb; the clause is already complete → choose the adverb.',
        },
        {
          vi: 'Cuối cùng mới dùng hậu tố (bài 1.1) để chọn lựa chọn đúng từ loại; chỉ khi còn hai lựa chọn cùng từ loại mới cần xét nghĩa (bài 1.3).',
          en: 'Only then use suffixes (lesson 1.1) to pick the option of that part of speech; you need to weigh meaning only when two options of the same part of speech remain (lesson 1.3).',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Đừng chỉ nhìn một phía. Chỉ thấy "a ___" thì chưa kết luận được gì: a **delay** (danh từ), nhưng a **lengthy** delay (tính từ) và an **unusually** lengthy delay (trạng từ). Luôn nhìn cả hai bên chỗ trống rồi mới chọn.',
          en: 'Never look at one side only. "a ___" alone decides nothing: a **delay** (noun), but a **lengthy** delay (adjective) and an **unusually** lengthy delay (adverb). Always check both sides of the blank before choosing.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'The ------- of our warehouse in Busan will allow us to ship most orders within two days.',
      options: ['expand', 'expansion', 'expansive', 'expansively'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng sau mạo từ **The** và ngay trước **of**, làm chủ ngữ của **will allow** → cần danh từ: **expansion**. expansive là tính từ, phía sau phải có danh từ; expand là động từ.',
        en: 'The blank follows the article **The** and comes right before **of**, acting as the subject of **will allow** → a noun is needed: **expansion**. expansive is an adjective and would need a noun after it; expand is a verb.',
      },
      translation: 'Việc mở rộng nhà kho của chúng tôi ở Busan sẽ giúp chúng tôi giao phần lớn đơn hàng trong vòng hai ngày.',
    },
    {
      sentence: 'We appreciate your ------- while the main elevators are closed for scheduled maintenance.',
      options: ['understand', 'understandable', 'understanding', 'understandably'],
      answer: 2,
      explanation: {
        vi: 'Sau tính từ sở hữu **your** mà phía sau không có danh từ nào → chỗ trống là danh từ, đồng thời làm tân ngữ của **appreciate**: **understanding** (sự thông cảm). Đuôi -ing ở đây là danh từ; understandable là tính từ nên cần danh từ đi sau.',
        en: 'After the possessive **your**, with no noun following, the blank must be a noun, and it is also the object of **appreciate**: **understanding**. Here the -ing word is a noun; understandable is an adjective and would need a noun after it.',
      },
      translation: 'Chúng tôi cảm ơn sự thông cảm của quý khách trong thời gian thang máy chính tạm ngừng để bảo trì định kỳ.',
    },
    {
      sentence: 'Visitors may not enter the production area without written ------- from the plant manager.',
      options: ['authorize', 'authorized', 'authoritative', 'authorization'],
      answer: 3,
      explanation: {
        vi: 'Sau giới từ **without** và tính từ **written** cần một danh từ → **authorization** (sự cho phép). authorized và authoritative đều đóng vai tính từ, không thể đứng cuối cụm khi không có danh từ theo sau; authorize là động từ.',
        en: 'After the preposition **without** and the adjective **written**, a noun is needed → **authorization**. authorized and authoritative work as adjectives and cannot end the phrase with no noun after them; authorize is a verb.',
      },
      translation: 'Khách không được vào khu vực sản xuất nếu không có sự cho phép bằng văn bản của giám đốc nhà máy.',
    },
    {
      sentence: 'The finance team reported a ------- increase in online sales during the holiday season.',
      options: ['substantial', 'substance', 'substantially', 'substantiate'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống nằm giữa mạo từ **a** và danh từ **increase** → cần tính từ: **substantial** (đáng kể). substantially là trạng từ, không bổ nghĩa cho danh từ.',
        en: 'The blank sits between the article **a** and the noun **increase** → an adjective is needed: **substantial**. substantially is an adverb and cannot modify a noun.',
      },
      translation: 'Nhóm tài chính báo cáo doanh số bán hàng trực tuyến tăng đáng kể trong mùa lễ.',
    },
    {
      sentence: 'Despite the rise in fuel costs, fares on most domestic routes have remained -------.',
      options: ['stably', 'stability', 'stabilize', 'stable'],
      answer: 3,
      explanation: {
        vi: '**remained** là động từ nối, phía sau cần tính từ miêu tả chủ ngữ **fares** → **stable** (ổn định). Bẫy là stably: bổ ngữ của động từ nối phải là tính từ, không phải trạng từ.',
        en: '**remained** is a linking verb, so it needs an adjective describing the subject **fares** → **stable**. The trap is stably: the complement of a linking verb must be an adjective, not an adverb.',
      },
      translation: 'Mặc dù chi phí nhiên liệu tăng, giá vé trên hầu hết các tuyến nội địa vẫn ổn định.',
    },
    {
      sentence: 'The airline offers ------- to passengers whose flights are delayed by more than three hours.',
      options: ['compensation', 'compensate', 'compensatory', 'compensated'],
      answer: 0,
      explanation: {
        vi: '**offers** là ngoại động từ nên cần tân ngữ; ngay sau chỗ trống là giới từ **to**, không có danh từ nào → chỗ trống chính là danh từ làm tân ngữ: **compensation** (khoản bồi thường). compensatory là tính từ, phải có danh từ theo sau (compensatory payments); compensate là động từ.',
        en: '**offers** is a transitive verb, so it needs an object; the blank is followed by the preposition **to**, not a noun → the blank itself is the object noun: **compensation**. compensatory is an adjective and needs a noun after it (compensatory payments); compensate is a verb.',
      },
      translation: 'Hãng hàng không chi trả khoản bồi thường cho những hành khách có chuyến bay bị hoãn quá ba tiếng.',
    },
    {
      sentence: 'Bookings at the Lakeview Resort have ------- increased since the new airport terminal opened.',
      options: ['steady', 'steadily', 'steadiness', 'steadied'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống nằm giữa trợ động từ **have** và động từ chính **increased** → cần trạng từ: **steadily** (đều đặn). steady là tính từ, không chen vào giữa have và V3 được.',
        en: 'The blank sits between the auxiliary **have** and the main verb **increased** → an adverb is needed: **steadily**. steady is an adjective and cannot go between have and the past participle.',
      },
      translation: 'Lượng đặt phòng tại khu nghỉ dưỡng Lakeview đã tăng đều kể từ khi nhà ga sân bay mới đi vào hoạt động.',
    },
    {
      sentence: "Dr. Moreno's workshop on supply chain risk was ------- informative, so many attendees asked for her slides.",
      options: ['exception', 'exceptional', 'exceptionally', 'except'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống đứng ngay trước tính từ **informative** → cần trạng từ chỉ mức độ: **exceptionally** (đặc biệt). Bẫy là exceptional: sau was, hai tính từ đứng liền nhau phải được nối bằng **and** (was exceptional and informative), mà câu không có and.',
        en: 'The blank comes right before the adjective **informative** → a degree adverb is needed: **exceptionally**. The trap is exceptional: after was, two adjectives in a row must be joined by **and** (was exceptional and informative), and there is no and here.',
      },
      translation: 'Buổi hội thảo của Tiến sĩ Moreno về rủi ro chuỗi cung ứng đặc biệt bổ ích, nên nhiều người tham dự đã xin bản trình chiếu của bà.',
    },
    {
      sentence: 'The technical support team responded ------- to every complaint submitted through the online portal.',
      options: ['promptly', 'prompt', 'promptness', 'prompted'],
      answer: 0,
      explanation: {
        vi: '**responded** là động từ thường (không phải động từ nối), nên từ đứng sau nó để chỉ cách thức phải là trạng từ: **promptly** (nhanh chóng). prompt là tính từ, không bổ nghĩa cho động từ.',
        en: '**responded** is an ordinary verb (not a linking verb), so the word after it describing the manner must be an adverb: **promptly**. prompt is an adjective and cannot modify a verb.',
      },
      translation: 'Nhóm hỗ trợ kỹ thuật đã phản hồi nhanh chóng mọi khiếu nại được gửi qua cổng trực tuyến.',
    },
    {
      sentence: "The HR manager ------- each new employee's performance at the end of the probationary period.",
      options: ['evaluation', 'evaluative', 'evaluates', 'evaluator'],
      answer: 2,
      explanation: {
        vi: "Câu có chủ ngữ **The HR manager** và tân ngữ **each new employee's performance** nhưng chưa có động từ chính → cần động từ chia theo chủ ngữ số ít: **evaluates**. evaluation và evaluator là danh từ, evaluative là tính từ.",
        en: "The sentence has a subject (**The HR manager**) and an object (**each new employee's performance**) but no main verb → a verb agreeing with the singular subject is needed: **evaluates**. evaluation and evaluator are nouns; evaluative is an adjective.",
      },
      translation: 'Trưởng phòng nhân sự đánh giá kết quả làm việc của từng nhân viên mới vào cuối thời gian thử việc.',
    },
  ],
};
