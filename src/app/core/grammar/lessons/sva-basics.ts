import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-basics',
  intro: {
    vi: 'Câu hỏi về hòa hợp chủ ngữ – động từ xuất hiện đều đặn trong Part 5 và Part 6: bốn lựa chọn thường là các dạng của cùng một động từ (offer / offers / offering / to offer) hoặc các cặp is/are, was/were, has/have. Bài này dạy quy tắc nền: tìm **danh từ chính** của chủ ngữ, nhận ra những chủ ngữ luôn tính là số ít (cụm V-ing, cụm to V, mệnh đề) và dạng động từ sau động từ khuyết thiếu.',
    en: 'Subject-verb agreement items appear regularly in Part 5 and Part 6: the options are often one verb in several forms (offer / offers / offering / to offer) or pairs like is/are, was/were, has/have. This lesson covers the core rules: finding the **head noun** of the subject, spotting subjects that are always singular (gerunds, to-infinitives, clauses) and the verb form after modals.',
  },
  mistakes: [
    {
      wrong: 'The new refund policy [[apply]] to all online purchases.',
      right: 'The new refund policy [[applies]] to all online purchases.',
      explanation: {
        vi: 'Danh từ chính của chủ ngữ là **policy** (số ít), nên động từ ở hiện tại đơn phải thêm -s: **applies** (phụ âm + y → -ies).',
        en: 'The head noun **policy** is singular, so the present simple verb takes -s: **applies** (consonant + y → -ies).',
      },
    },
    {
      wrong: 'The quarterly sales report [[show]] a sharp rise in online orders.',
      right: 'The quarterly sales report [[shows]] a sharp rise in online orders.',
      explanation: {
        vi: '**sales** chỉ là danh từ bổ nghĩa đứng trước; danh từ chính là **report** (số ít) → **shows**. Đừng để chữ -s của sales khiến bạn tưởng chủ ngữ là số nhiều.',
        en: '**sales** is only a noun modifier; the head noun is **report** (singular) → **shows**. Do not let the -s in sales make you think the subject is plural.',
      },
    },
    {
      wrong: 'Updating the customer records [[take]] about two hours every week.',
      right: 'Updating the customer records [[takes]] about two hours every week.',
      explanation: {
        vi: 'Chủ ngữ là cụm V-ing **Updating the customer records**, tức một hoạt động, luôn tính là số ít dù bên trong có danh từ số nhiều **records**.',
        en: 'The subject is the gerund phrase **Updating the customer records**, a single activity, which always counts as singular even though it contains the plural noun **records**.',
      },
    },
    {
      wrong: 'What the guests requested [[were]] a later checkout time.',
      right: 'What the guests requested [[was]] a later checkout time.',
      explanation: {
        vi: 'Mệnh đề **What the guests requested** làm chủ ngữ được tính là số ít, nhất là khi danh từ sau động từ cũng số ít (**a later checkout time**) → **was**.',
        en: 'A clause like **What the guests requested** used as the subject counts as singular, especially when the noun after the verb is singular too (**a later checkout time**) → **was**.',
      },
    },
    {
      wrong: 'The branch manager can [[approves]] overtime requests of up to ten hours.',
      right: 'The branch manager can [[approve]] overtime requests of up to ten hours.',
      explanation: {
        vi: 'Sau động từ khuyết thiếu (**can**, will, must, should…) động từ luôn ở dạng nguyên mẫu, không thêm -s dù chủ ngữ số ít.',
        en: 'After a modal (**can**, will, must, should…) the verb is always in its base form, with no -s, even after a singular subject.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quy tắc nền: số ít và số nhiều', en: 'The core rule: singular vs. plural' },
      body: {
        vi: 'Động từ chia theo **danh từ chính** của chủ ngữ. Chủ ngữ số ít (he, she, it, danh từ số ít, danh từ không đếm được) đi với động từ thêm **-s/-es** và **is / was / has / does**. Chủ ngữ số nhiều (we, you, they, danh từ số nhiều) đi với động từ **nguyên mẫu** và **are / were / have / do**.',
        en: 'The verb agrees with the **head noun** of the subject. A singular subject (he, she, it, a singular noun, an uncountable noun) takes a verb with **-s/-es** and **is / was / has / does**. A plural subject (we, you, they, a plural noun) takes the **base form** and **are / were / have / do**.',
      },
      table: {
        head: [
          { vi: 'Chủ ngữ', en: 'Subject' },
          { vi: 'Hiện tại đơn', en: 'Present simple' },
          { vi: 'be (hiện tại)', en: 'be (present)' },
          { vi: 'be (quá khứ)', en: 'be (past)' },
          { vi: 'have / do', en: 'have / do' },
        ],
        rows: [
          ['he / she / it; the manager; this invoice; equipment', 'offers, finishes, applies', 'is', 'was', 'has / does'],
          ['we / you / they; the managers; these invoices', 'offer, finish, apply', 'are', 'were', 'have / do'],
          ['I', 'offer, finish, apply', 'am', 'was', 'have / do'],
        ],
      },
      examples: [
        {
          en: 'The hotel **offers** free airport transfers to all guests.',
          vi: 'Khách sạn đưa đón sân bay miễn phí cho tất cả khách lưu trú.',
        },
        {
          en: 'Our suppliers **were** informed of the new delivery schedule on Monday.',
          vi: 'Các nhà cung cấp của chúng tôi đã được thông báo về lịch giao hàng mới vào thứ Hai.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Sự hòa hợp chỉ lộ ra ở **thì hiện tại** (offers/offer, is/are, has/have) và ở **was/were**. Các dạng quá khứ khác giống nhau cho mọi chủ ngữ: The supplier **shipped** / The suppliers **shipped**. Vì vậy không thể loại một lựa chọn quá khứ đơn như shipped bằng số ít/số nhiều; phải xét dấu hiệu thời gian.',
          en: 'Agreement only shows in the **present tense** (offers/offer, is/are, has/have) and in **was/were**. Other past forms are the same for every subject: The supplier **shipped** / The suppliers **shipped**. So a past simple option like shipped cannot be ruled out by number; check the time markers instead.',
        },
      },
    },
    {
      heading: { vi: 'Thêm -s/-es và chia trợ động từ', en: 'Adding -s/-es and agreeing auxiliaries' },
      points: [
        {
          vi: 'Khi động từ có trợ động từ, chỉ **trợ động từ đầu tiên** chia theo chủ ngữ (trừ khi đó là động từ khuyết thiếu), phần sau giữ nguyên: The report **has** been revised / The reports **have** been revised.',
          en: 'When the verb has auxiliaries, only the **first auxiliary** agrees with the subject (unless it is a modal); the rest stays the same: The report **has** been revised / The reports **have** been revised.',
        },
        {
          vi: 'Câu phủ định và câu hỏi ở hiện tại đơn dùng **does** (số ít) / **do** (số nhiều) + động từ nguyên mẫu. Động từ chính không thêm -s nữa: The store **does not accept** checks (không viết does not accepts).',
          en: 'Present simple negatives and questions use **does** (singular) / **do** (plural) + the base form. The main verb no longer takes -s: The store **does not accept** checks (not does not accepts).',
        },
      ],
      table: {
        head: [
          { vi: 'Quy tắc thêm -s/-es', en: 'Spelling rule' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [{ vi: 'Đa số động từ: thêm -s', en: 'Most verbs: add -s' }, 'require → requires, offer → offers'],
          [
            { vi: 'Tận cùng -s, -sh, -ch, -x, -o: thêm -es', en: 'Ending in -s, -sh, -ch, -x, -o: add -es' },
            'process → processes, finish → finishes, reach → reaches, fax → faxes, go → goes, do → does',
          ],
          [{ vi: 'Phụ âm + y: đổi y thành -ies', en: 'Consonant + y: change y to -ies' }, 'apply → applies, supply → supplies'],
          [{ vi: 'Nguyên âm + y: chỉ thêm -s', en: 'Vowel + y: just add -s' }, 'pay → pays, stay → stays'],
          [{ vi: 'Bất quy tắc', en: 'Irregular' }, 'have → has, be → is'],
        ],
      },
      examples: [
        {
          en: 'The conference center **is** being renovated, so the seminar **has** been moved to the Harbor Hotel.',
          vi: 'Trung tâm hội nghị đang được cải tạo nên buổi hội thảo đã được dời sang khách sạn Harbor.',
        },
        {
          en: 'These printers **do** not support double-sided printing.',
          vi: 'Những máy in này không hỗ trợ in hai mặt.',
        },
      ],
    },
    {
      heading: { vi: 'Tìm danh từ chính của cụm chủ ngữ', en: 'Finding the head noun of the subject' },
      body: {
        vi: 'Chủ ngữ thường là một cụm danh từ: từ hạn định + tính từ + danh từ bổ nghĩa + **danh từ chính**. Khi phía sau không còn cụm bổ nghĩa nào, danh từ chính là danh từ **cuối cùng** đứng trước động từ, và chỉ nó quyết định động từ số ít hay số nhiều.',
        en: 'The subject is often a noun phrase: determiner + adjective + noun modifier + **head noun**. When no modifying phrase follows it, the head is the **last** noun before the verb, and it alone decides whether the verb is singular or plural.',
      },
      points: [
        {
          vi: 'Danh từ đứng trước làm bổ nghĩa không được tính, kể cả khi tận cùng bằng -s: the sales **manager** → số ít; the customer **complaints** → số nhiều (danh từ ghép: bài 2.2).',
          en: 'A noun used as a modifier does not count, even if it ends in -s: the sales **manager** → singular; the customer **complaints** → plural (compound nouns: lesson 2.2).',
        },
        {
          vi: "Sở hữu cách ('s / s') chỉ đóng vai từ hạn định: the company's **employees** → số nhiều; the employees' **lounge** → số ít.",
          en: "A possessive ('s / s') only works as a determiner: the company's **employees** → plural; the employees' **lounge** → singular.",
        },
        {
          vi: 'Từ hạn định là manh mối nhanh: a/an + danh từ số ít; this, that + danh từ số ít hoặc không đếm được; these, those + danh từ số nhiều.',
          en: 'Determiners are a quick clue: a/an + singular noun; this, that + singular or uncountable noun; these, those + plural noun.',
        },
        {
          vi: 'Danh từ không đếm được (equipment, information, furniture…) luôn đi với động từ số ít (bài 2.1).',
          en: 'Uncountable nouns (equipment, information, furniture…) always take a singular verb (lesson 2.1).',
        },
      ],
      examples: [
        {
          en: 'The electronics **department** **is** on the third floor.',
          vi: 'Khu đồ điện tử nằm ở tầng ba.',
        },
        {
          en: "The hotel's renovation **costs** **have** exceeded the original estimate.",
          vi: 'Chi phí cải tạo của khách sạn đã vượt dự toán ban đầu.',
        },
        {
          en: "The employees' new **lounge** **opens** next Monday.",
          vi: 'Phòng nghỉ mới của nhân viên mở cửa vào thứ Hai tới.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Nếu sau danh từ chính còn cụm giới từ, mệnh đề quan hệ hay cụm phân từ (The list **of candidates**…, The manager **who hired them**…), cách bỏ qua chúng được dạy riêng ở bài 3.2.',
          en: 'If the head noun is followed by a prepositional phrase, relative clause or participle phrase (The list **of candidates**…, The manager **who hired them**…), how to skip over them is covered in lesson 3.2.',
        },
      },
    },
    {
      heading: { vi: 'Chủ ngữ V-ing, to V và mệnh đề → số ít', en: 'Gerund, to-infinitive and clause subjects → singular' },
      body: {
        vi: 'Khi chủ ngữ là MỘT cụm V-ing, MỘT cụm to V hay MỘT mệnh đề, tức là một **hoạt động** hay một **ý** chứ không phải một danh từ, thì động từ chính ở số ít, bất kể bên trong cụm có bao nhiêu danh từ số nhiều. (Hai cụm nối bằng and là chủ ngữ ghép: bài 3.4.)',
        en: 'When the subject is ONE gerund phrase, ONE to-infinitive phrase or ONE clause, that is, an **activity** or an **idea** rather than a noun, the main verb is singular, however many plural nouns appear inside it. (Two such phrases joined by and form a compound subject: lesson 3.4.)',
      },
      points: [
        {
          vi: 'Danh từ số nhiều nằm bên trong cụm (workers, prices, customers, contracts) không ảnh hưởng gì: cả cụm là MỘT hoạt động hay MỘT ý.',
          en: 'Plural nouns inside the phrase (workers, prices, customers, contracts) make no difference: the whole phrase is ONE activity or ONE idea.',
        },
        {
          vi: 'Cụm to V làm chủ ngữ mang sắc thái trang trọng; trong văn viết thường ngày nó hay được dời ra sau và thay bằng **It** (luôn số ít): **It is** unrealistic to finish the audit in one week.',
          en: 'A to-infinitive subject sounds formal; in everyday writing it is usually moved to the end and replaced by **It** (always singular): **It is** unrealistic to finish the audit in one week.',
        },
        {
          vi: 'Riêng mệnh đề **What**: khi danh từ sau động từ là số nhiều, người bản xứ cũng hay dùng động từ số nhiều (What the hotel needs **are** more receptionists). Vì cả hai cách đều được chấp nhận nên đề thi tránh đặt câu hỏi vào trường hợp này; khi phía sau là danh từ số ít, danh từ không đếm được hay tính từ thì chọn số ít.',
          en: 'With **What** clauses only: when the noun after the verb is plural, native speakers often use a plural verb too (What the hotel needs **are** more receptionists). Since both are accepted, test writers avoid this case; when what follows is a singular noun, an uncountable noun or an adjective, choose the singular.',
        },
      ],
      table: {
        head: [
          { vi: 'Loại chủ ngữ', en: 'Subject type' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Cụm V-ing', en: 'Gerund phrase' }, 'Hiring seasonal workers **requires** advance planning.'],
          [{ vi: 'Cụm to V', en: 'To-infinitive phrase' }, 'To finish the audit in one week **is** unrealistic.'],
          [{ vi: 'Mệnh đề That', en: 'That-clause' }, 'That fuel prices keep rising **worries** many airlines.'],
          [{ vi: 'Mệnh đề What', en: 'What-clause' }, 'What our customers need **is** faster delivery.'],
          [
            { vi: 'Mệnh đề Whether / How', en: 'Whether / how clause' },
            "Whether the contracts will be renewed **depends** on next year's budget.",
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phân biệt V-ing làm chủ ngữ với V-ing làm danh từ bổ nghĩa. **Training new employees takes** time (V-ing có tân ngữ → số ít), nhưng **Training sessions are** held on Mondays (training bổ nghĩa cho sessions → danh từ chính là sessions, số nhiều). Mẹo: thêm "the" vào trước; "the training sessions" vẫn đúng, còn "the training new employees" thì sai.',
          en: 'Tell a gerund subject apart from an -ing word used as a modifier. **Training new employees takes** time (the gerund has an object → singular), but **Training sessions are** held on Mondays (training modifies sessions → the head is sessions, plural). Tip: put "the" in front; "the training sessions" still works, while "the training new employees" does not.',
        },
      },
    },
    {
      heading: { vi: 'Động từ khuyết thiếu không chia', en: 'Modals never change' },
      body: {
        vi: 'Động từ khuyết thiếu (**can, could, will, would, shall, should, may, might, must**) có một dạng duy nhất cho mọi chủ ngữ, và động từ theo sau luôn là **động từ nguyên mẫu không to**.',
        en: 'Modals (**can, could, will, would, shall, should, may, might, must**) have a single form for every subject, and the verb after them is always the **base form without to**.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Đúng', en: 'Correct' },
          { vi: 'Sai', en: 'Wrong' },
        ],
        rows: [
          ['modal + V', 'The manager **will review** the budget.', 'will reviews / wills review'],
          ['modal + be + V3', 'The room **must be** cleaned by noon.', 'must is cleaned / must being cleaned'],
          ['modal + have + V3', 'The parcel **should have** arrived by now.', 'should has arrived'],
          ['has to / have to + V', 'The supervisor **has to** sign the form.', 'The supervisor have to sign'],
        ],
      },
      examples: [
        {
          en: 'Guests **may request** a late checkout at the front desk.',
          vi: 'Khách có thể yêu cầu trả phòng muộn tại quầy lễ tân.',
        },
        {
          en: 'The new system **can process** up to 500 orders an hour.',
          vi: 'Hệ thống mới có thể xử lý tới 500 đơn hàng mỗi giờ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**have to**, **need to**, **be able to** không phải động từ khuyết thiếu nên vẫn chia theo chủ ngữ: The supervisor **has to** / **needs to** / **is able to** sign. Chỉ động từ đứng sau "to" mới ở dạng nguyên mẫu.',
          en: '**have to**, **need to** and **be able to** are not modals, so they still agree with the subject: The supervisor **has to** / **needs to** / **is able to** sign. Only the verb after "to" stays in the base form.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu hòa hợp trong Part 5', en: 'Attacking agreement items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là cùng một động từ (submit / submits / submitting / to submit) hoặc cặp is/are, has/have → kiểm tra hòa hợp. Trước hết hỏi: câu đã có động từ chính chưa? Nếu chưa, loại ngay V-ing và to V.',
          en: 'Four forms of one verb (submit / submits / submitting / to submit) or pairs like is/are, has/have → check agreement. First ask: does the sentence already have a main verb? If not, rule out the V-ing and to-infinitive options at once.',
        },
        {
          vi: 'Tìm chủ ngữ, bỏ qua tính từ, danh từ bổ nghĩa và sở hữu cách để lấy danh từ chính; nhìn từ hạn định (this/these, a/an) để biết số ít hay số nhiều.',
          en: 'Find the subject and strip away adjectives, noun modifiers and possessives to reach the head noun; use determiners (this/these, a/an) to tell singular from plural.',
        },
        {
          vi: 'Chủ ngữ là cụm V-ing (không phải V-ing bổ nghĩa cho danh từ), cụm to V, hoặc mệnh đề That, What, Whether, How → chọn động từ số ít.',
          en: 'A subject that is a gerund phrase (not an -ing word modifying a noun), a to-infinitive phrase, or a That, What, Whether or How clause → choose a singular verb.',
        },
        {
          vi: 'Trước chỗ trống có can / will / must / should… (có thể cách một trạng từ như not, soon, also) → chọn động từ nguyên mẫu, không cần xét chủ ngữ.',
          en: 'If can / will / must / should… comes before the blank (possibly with an adverb such as not, soon or also in between) → choose the base form; the subject does not matter.',
        },
        {
          vi: 'Nếu còn lại hai lựa chọn đều đúng số (ví dụ have approved và approved), dùng dấu hiệu thời gian để chọn thì (chương 4).',
          en: 'If two options still agree (say have approved and approved), use the time markers to choose the tense (chapter 4).',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Danh từ đứng sát chỗ trống chưa chắc là danh từ chính. Trong "Reviewing the contracts ------- two days", sát chỗ trống là contracts (số nhiều) nhưng chủ ngữ là cả cụm V-ing → **takes**.',
          en: 'The noun right before the blank is not necessarily the head. In "Reviewing the contracts ------- two days", the word next to the blank is contracts (plural), but the subject is the whole gerund phrase → **takes**.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Operating costs ------- sharply whenever the price of crude oil goes up.',
      options: ['increases', 'increase', 'increasing', 'to increase'],
      answer: 1,
      explanation: {
        vi: '**Operating** ở đây bổ nghĩa cho **costs** (chi phí vận hành), không phải cụm V-ing làm chủ ngữ: thêm "the" vẫn đúng (the operating costs). Danh từ chính là costs (số nhiều) → **increase**. increases là bẫy dành cho người tưởng Operating là V-ing chủ ngữ; increasing và to increase không làm được động từ chính.',
        en: '**Operating** here modifies **costs**; it is not a gerund subject, since "the operating costs" still works. The head noun is costs (plural) → **increase**. increases traps learners who read Operating as a gerund subject; increasing and to increase cannot be the main verb.',
      },
      translation: 'Chi phí vận hành tăng mạnh mỗi khi giá dầu thô tăng.',
    },
    {
      sentence:
        'Our regional offices ------- already adopted the new expense reporting system, so paper receipts are no longer accepted.',
      options: ['has', 'is', 'have', 'are'],
      answer: 2,
      explanation: {
        vi: 'Danh từ chính **offices** là số nhiều, và **adopted** có tân ngữ (the new expense reporting system) nên cần thì hoàn thành chủ động → **have** adopted. has là số ít; is/are adopted là bị động, không thể có tân ngữ theo sau.',
        en: 'The head noun **offices** is plural, and **adopted** has an object (the new expense reporting system), so the active present perfect is needed → **have** adopted. has is singular; is/are adopted would be passive and could not take an object.',
      },
      translation:
        'Các văn phòng khu vực của chúng tôi đã áp dụng hệ thống báo cáo chi phí mới, nên hóa đơn giấy không còn được chấp nhận.',
    },
    {
      sentence: 'That our main competitors have lowered their prices ------- forced us to review our pricing strategy.',
      options: ['have', 'has', 'having', 'to have'],
      answer: 1,
      explanation: {
        vi: 'Chủ ngữ là cả mệnh đề **That our main competitors have lowered their prices** → số ít → **has** forced. have bị danh từ số nhiều **prices** đứng sát chỗ trống (và have lowered trong mệnh đề) đánh lừa; having và to have không tạo được động từ chính.',
        en: 'The subject is the whole clause **That our main competitors have lowered their prices** → singular → **has** forced. have is a trap set by the plural noun **prices** next to the blank (and by have lowered inside the clause); having and to have cannot form the main verb.',
      },
      translation: 'Việc các đối thủ chính hạ giá đã buộc chúng tôi phải xem xét lại chiến lược định giá.',
    },
    {
      sentence: "The company's delivery vans ------- inspected by a certified mechanic last week.",
      options: ['were', 'was', 'has been', 'have been'],
      answer: 0,
      explanation: {
        vi: "**company's** chỉ là sở hữu cách đứng trước; danh từ chính là **vans** (số nhiều), và có **last week** nên dùng quá khứ → **were** inspected. was là số ít; have been đúng số nhưng thì hiện tại hoàn thành không đi với mốc quá khứ last week.",
        en: "**company's** is just a possessive; the head noun is **vans** (plural), and **last week** calls for the past → **were** inspected. was is singular; have been agrees in number, but the present perfect cannot go with a past time marker like last week.",
      },
      translation: 'Các xe giao hàng của công ty đã được một thợ máy có chứng chỉ kiểm tra vào tuần trước.',
    },
    {
      sentence: 'Processing international orders usually ------- longer than handling domestic ones.',
      options: ['takes', 'take', 'taking', 'to take'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ là cụm V-ing **Processing international orders** (song song với handling domestic ones) → số ít → **takes**. Đừng để danh từ số nhiều **orders** đứng sát chỗ trống kéo bạn sang take.',
        en: 'The subject is the gerund phrase **Processing international orders** (parallel to handling domestic ones) → singular → **takes**. Do not let the plural noun **orders** next to the blank pull you towards take.',
      },
      translation: 'Việc xử lý đơn hàng quốc tế thường mất nhiều thời gian hơn xử lý đơn hàng trong nước.',
    },
    {
      sentence: 'To exchange items purchased on sale ------- not possible without the original receipt.',
      options: ['are', 'be', 'is', 'being'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ là cụm **To exchange items purchased on sale** (việc đổi hàng mua giảm giá); cụm to V luôn tính là số ít → **is**. are bị danh từ số nhiều **items** đánh lừa; be và being không làm được động từ chính.',
        en: 'The subject is the phrase **To exchange items purchased on sale**; a to-infinitive subject is always singular → **is**. are is a trap set by the plural noun **items**; be and being cannot be the main verb.',
      },
      translation: 'Không thể đổi hàng mua trong đợt giảm giá nếu không có hóa đơn gốc.',
    },
    {
      sentence: 'Whether the new suppliers can meet our deadlines ------- unclear at this stage.',
      options: ['remain', 'remaining', 'to remain', 'remains'],
      answer: 3,
      explanation: {
        vi: 'Chủ ngữ là cả mệnh đề **Whether the new suppliers can meet our deadlines** → số ít → **remains**. remain có vẻ hợp với suppliers/deadlines nhưng đó chỉ là danh từ bên trong mệnh đề; remaining và to remain không làm được động từ chính.',
        en: 'The subject is the whole clause **Whether the new suppliers can meet our deadlines** → singular → **remains**. remain seems to fit suppliers/deadlines, but those are only nouns inside the clause; remaining and to remain cannot be the main verb.',
      },
      translation: 'Ở thời điểm này vẫn chưa rõ liệu các nhà cung cấp mới có đáp ứng được thời hạn của chúng tôi hay không.',
    },
    {
      sentence:
        'According to the latest survey, what our clients value most ------- fast and reliable technical support.',
      options: ['are', 'were', 'is', 'have'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ là mệnh đề **what our clients value most**, và phần sau chỗ trống (**technical support**) là danh từ không đếm được → **is**. are và were là dạng số nhiều, bị danh từ clients bên trong mệnh đề đánh lừa; have vừa sai nghĩa vừa là số nhiều.',
        en: 'The subject is the clause **what our clients value most**, and the complement (**technical support**) is an uncountable noun → **is**. are and were are plural, a trap set by clients inside the clause; have is plural and makes no sense here.',
      },
      translation:
        'Theo khảo sát gần nhất, điều khách hàng của chúng tôi coi trọng nhất là sự hỗ trợ kỹ thuật nhanh chóng và đáng tin cậy.',
    },
    {
      sentence: 'The new accounting software will ------- invoices automatically at the end of each month.',
      options: ['generates', 'generate', 'generating', 'generated'],
      answer: 1,
      explanation: {
        vi: 'Ngay trước chỗ trống là động từ khuyết thiếu **will**, nên động từ theo sau luôn ở dạng nguyên mẫu → **generate**. generates hấp dẫn vì software là số ít, nhưng sau will không bao giờ thêm -s.',
        en: 'The modal **will** comes right before the blank, so the next verb is always the base form → **generate**. generates is tempting because software is singular, but a verb after will never takes -s.',
      },
      translation: 'Phần mềm kế toán mới sẽ tự động tạo hóa đơn vào cuối mỗi tháng.',
    },
    {
      sentence: 'The revised expense guidelines ------- not cover personal purchases made during business trips.',
      options: ['does', 'is', 'are', 'do'],
      answer: 3,
      explanation: {
        vi: 'Danh từ chính là **guidelines** (số nhiều; expense chỉ bổ nghĩa), và sau chỗ trống là **not cover** (nguyên mẫu) nên cần trợ động từ **do**. does là số ít; is/are không đi với động từ nguyên mẫu cover.',
        en: 'The head noun is **guidelines** (plural; expense is only a modifier), and the blank is followed by **not cover** (base form), so the auxiliary **do** is needed. does is singular; is/are cannot be followed by the base form cover.',
      },
      translation: 'Bộ quy định chi phí đã sửa đổi không áp dụng cho các khoản mua sắm cá nhân trong chuyến công tác.',
    },
  ],
};
