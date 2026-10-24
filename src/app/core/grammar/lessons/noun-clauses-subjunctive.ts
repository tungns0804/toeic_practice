import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'noun-clauses-subjunctive',
  intro: {
    vi: 'Sau các động từ, tính từ và danh từ mang nghĩa yêu cầu, đề nghị (**recommend, require, It is essential…**), động từ trong mệnh đề **that** ở dạng **nguyên mẫu** bất kể chủ ngữ và thì. Part 5 rất hay đặt bẫy bằng các phương án có **-s**, **is/are** hoặc thì quá khứ.',
    en: 'After verbs, adjectives and nouns of demand or recommendation (**recommend, require, It is essential…**), the verb in the **that**-clause takes the **base form**, whatever the subject or tense. Part 5 loves to set traps with options ending in **-s**, using **is/are**, or in the past tense.',
  },
  mistakes: [
    {
      wrong: 'The manager recommended that every employee [[attends]] the safety training.',
      right: 'The manager recommended that every employee [[attend]] the safety training.',
      explanation: {
        vi: 'Sau **recommend that**, động từ ở dạng nguyên mẫu, KHÔNG thêm **-s** dù chủ ngữ là số ít (**every employee**).',
        en: 'After **recommend that**, the verb takes the base form, with NO **-s** even though the subject is singular (**every employee**).',
      },
    },
    {
      wrong: 'The client requested that the documents [[are]] sent by courier.',
      right: 'The client requested that the documents [[be]] sent by courier.',
      explanation: {
        vi: 'Trong câu giả định, **be** dùng cho mọi ngôi. Bị động vì vậy là **be + V3**: be sent, không phải are sent.',
        en: 'In the subjunctive, **be** is used for every person. The passive is therefore **be + V3**: be sent, not are sent.',
      },
    },
    {
      wrong: 'It is mandatory that every visitor [[wears]] a hard hat on the factory floor.',
      right: 'It is mandatory that every visitor [[wear]] a hard hat on the factory floor.',
      explanation: {
        vi: '**It is mandatory that** + S + động từ nguyên mẫu, nên dùng **wear**, không phải wears.',
        en: '**It is mandatory that** + S + base verb, so use **wear**, not wears.',
      },
    },
    {
      wrong: 'The auditor recommended that the firm [[not to renew]] the contract.',
      right: 'The auditor recommended that the firm [[not renew]] the contract.',
      explanation: {
        vi: 'Phủ định trong câu giả định chỉ cần đặt **not** trước động từ nguyên mẫu: **not renew**. Không dùng **to**, cũng không dùng does not.',
        en: 'The subjunctive negative simply puts **not** before the base verb: **not renew**. No **to**, and no does not.',
      },
    },
    {
      wrong: 'Management rejected the proposal that the office [[moves]] to the suburbs.',
      right: 'Management rejected the proposal that the office [[move]] to the suburbs.',
      explanation: {
        vi: 'Danh từ **proposal** (từ propose) cũng kéo theo động từ nguyên mẫu trong mệnh đề **that**: the proposal that the office **move**.',
        en: 'The noun **proposal** (from propose) also triggers the base verb in the **that**-clause: the proposal that the office **move**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Câu giả định là gì', en: 'What the subjunctive is' },
      body: {
        vi: 'Khi ta yêu cầu, đề nghị hay khẳng định một việc là cần thiết, việc đó CHƯA xảy ra. Tiếng Anh diễn đạt ý này bằng **that + S + động từ nguyên mẫu** (không to). Động từ này giữ nguyên dạng với mọi chủ ngữ và không lùi thì theo động từ chính.',
        en: 'When we demand, recommend or insist that something is necessary, it has NOT happened yet. English expresses this with **that + S + base verb** (no to). The verb keeps the same form for every subject and does not shift tense with the main verb.',
      },
      table: {
        head: [
          { vi: 'Đặc điểm', en: 'Feature' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Không thêm -s ở ngôi thứ ba số ít', en: 'No -s in the third person singular' }, 'We ask that he submit the form.'],
          [{ vi: 'be cho mọi ngôi', en: 'be for every person' }, 'They insist that the room be cleaned.'],
          [{ vi: 'Phủ định: not + V', en: 'Negative: not + verb' }, 'She suggested that we not wait.'],
          [{ vi: 'Không lùi thì theo động từ chính', en: 'No tense shift after a past main verb' }, 'He demanded that the error be fixed.'],
        ],
      },
    },
    {
      heading: { vi: 'Động từ yêu cầu + that', en: 'Demand verbs + that' },
      points: [
        {
          vi: 'Nhóm động từ hay gặp: **recommend, suggest, insist, require, request, ask, propose, demand, advise, urge**.',
          en: 'Common verbs: **recommend, suggest, insist, require, request, ask, propose, demand, advise, urge**.',
        },
        {
          vi: 'Động từ chính chia thì nào cũng được (recommends, recommended, has recommended), động từ trong mệnh đề that vẫn là nguyên mẫu.',
          en: 'The main verb can be in any tense (recommends, recommended, has recommended); the verb in the that-clause stays in the base form.',
        },
        {
          vi: '**suggest, propose** KHÔNG đi với cấu trúc "người + to V" ("suggest him to go" là sai): phải dùng mệnh đề **that**. **recommend + người + to V** chỉ thỉnh thoảng gặp trong tiếng Anh-Anh; trong Part 5 hãy ưu tiên **recommend that + S + V nguyên mẫu**.',
          en: '**suggest, propose** do NOT take "person + to V" ("suggest him to go" is wrong): use a **that**-clause instead. **recommend + person + to V** occurs only occasionally in British English; in Part 5, prefer **recommend that + S + base verb**.',
        },
      ],
      examples: [
        {
          en: 'The architect **suggested that** the lobby **be** painted a lighter color.',
          vi: 'Kiến trúc sư đề nghị sảnh được sơn màu sáng hơn.',
        },
        {
          en: 'The bank **requires that** each applicant **provide** two forms of identification.',
          vi: 'Ngân hàng yêu cầu mỗi người nộp đơn cung cấp hai loại giấy tờ tùy thân.',
        },
        {
          en: 'The director **insisted that** the report **reach** her desk by noon.',
          vi: 'Giám đốc yêu cầu bản báo cáo phải đến bàn bà trước buổi trưa.',
        },
      ],
    },
    {
      heading: { vi: 'It is + tính từ + that', en: 'It is + adjective + that' },
      body: {
        vi: 'Các tính từ chỉ sự cần thiết, bắt buộc, quan trọng cũng kéo theo động từ nguyên mẫu: **It is essential / imperative / vital / necessary / important / mandatory / crucial / critical / advisable + that + S + V nguyên mẫu**.',
        en: 'Adjectives of necessity, obligation or importance also trigger the base verb: **It is essential / imperative / vital / necessary / important / mandatory / crucial / critical / advisable + that + S + base verb**.',
      },
      examples: [
        {
          en: 'It is **vital** that the shipment **arrive** before the store opens.',
          vi: 'Điều tối quan trọng là lô hàng phải đến trước khi cửa hàng mở cửa.',
        },
        {
          en: 'It is **important** that each guest **not share** the Wi-Fi password.',
          vi: 'Điều quan trọng là mỗi khách không chia sẻ mật khẩu Wi-Fi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Chỉ tính từ mang nghĩa CẦN THIẾT mới kéo theo nguyên mẫu. Các tính từ chỉ khả năng hay sự thật như **likely, clear, true, obvious** đi với động từ chia bình thường (It is likely that the shipment **will arrive**…, bài 15.1).',
          en: 'Only adjectives of NECESSITY trigger the base form. Adjectives of probability or fact such as **likely, clear, true, obvious** take a normal finite verb (It is likely that the shipment **will arrive**…, lesson 15.1).',
        },
      },
    },
    {
      heading: { vi: 'Danh từ tương ứng + that', en: 'Matching nouns + that' },
      body: {
        vi: 'Danh từ tạo từ các động từ và tính từ trên cũng kéo theo động từ nguyên mẫu trong mệnh đề **that** đi sau.',
        en: 'Nouns formed from these verbs and adjectives also trigger the base verb in the **that**-clause that follows.',
      },
      table: {
        head: [
          { vi: 'Động từ / tính từ', en: 'Verb / adjective' },
          { vi: 'Danh từ', en: 'Noun' },
        ],
        rows: [
          ['recommend', 'the recommendation that'],
          ['suggest', 'the suggestion that'],
          ['request / require', 'the request / requirement that'],
          ['propose', 'the proposal that'],
          ['demand / insist', 'the demand / insistence that'],
        ],
      },
      examples: [
        {
          en: 'The board accepted the **recommendation that** the CEO **receive** a performance bonus.',
          vi: 'Hội đồng quản trị chấp thuận đề xuất rằng tổng giám đốc được nhận thưởng hiệu suất.',
        },
        {
          en: 'There is a **requirement that** all contractors **be** licensed.',
          vi: 'Có quy định rằng mọi nhà thầu đều phải có giấy phép.',
        },
      ],
    },
    {
      heading: { vi: 'Phủ định và bị động', en: 'Negatives and passives' },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Công thức', en: 'Formula' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Chủ động', en: 'Active' }, 'S + V (base)', 'We request that the supplier deliver on Monday.'],
          [{ vi: 'Phủ định', en: 'Negative' }, 'S + not + V (base)', 'We request that the supplier not deliver on Sunday.'],
          [{ vi: 'Bị động', en: 'Passive' }, 'S + be + V3', 'We request that the goods be delivered on Monday.'],
          [{ vi: 'Bị động phủ định', en: 'Negative passive' }, 'S + not be + V3', 'We request that the goods not be delivered on Sunday.'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chọn chủ động hay bị động như mọi câu khác: chủ ngữ là vật chịu tác động (documents, goods, reports) → **be + V3**.',
          en: 'Choose active or passive as in any sentence: if the subject receives the action (documents, goods, reports) → **be + V3**.',
        },
      },
    },
    {
      heading: { vi: 'Bẫy cần biết', en: 'Traps to know' },
      points: [
        {
          vi: '**insist** và **suggest** có thể mang nghĩa khác: insist = khăng khăng cho rằng, suggest = cho thấy. Khi đó là câu tường thuật sự việc nên chia động từ bình thường: The data **suggest** that demand **is** falling; He **insisted** that he **had paid** the invoice.',
          en: '**insist** and **suggest** can have other meanings: insist = claim firmly, suggest = indicate. Then the clause reports a fact and uses a normal finite verb: The data **suggest** that demand **is** falling; He **insisted** that he **had paid** the invoice.',
        },
        {
          vi: 'Tiếng Anh-Anh còn dùng **should + V** (recommend that he **should** attend). Cấu trúc này đúng, nhưng đáp án Part 5 gần như luôn là động từ nguyên mẫu.',
          en: 'British English also uses **should + verb** (recommend that he **should** attend). This is correct, but the Part 5 answer is almost always the bare base form.',
        },
        {
          vi: 'Không nhầm với **ask / require / advise + người + to V** (ask the staff **to arrive** early): đây là cấu trúc to V, không phải mệnh đề that.',
          en: 'Do not confuse this with **ask / require / advise + person + to V** (ask the staff **to arrive** early): that is an infinitive pattern, not a that-clause.',
        },
      ],
    },
    {
      heading: { vi: 'Cách xử lý câu giả định trong Part 5', en: 'How to attack subjunctive items in Part 5' },
      points: [
        {
          vi: 'Tìm "tín hiệu": động từ, tính từ hay danh từ yêu cầu đứng trước **that**.',
          en: 'Look for the trigger: a demand verb, adjective or noun before **that**.',
        },
        {
          vi: 'Có tín hiệu → chọn động từ nguyên mẫu; loại ngay các phương án có -s, is/are, was/were, will, V-ing hoặc to V.',
          en: 'Trigger present → choose the base verb; immediately reject options with -s, is/are, was/were, will, V-ing or to V.',
        },
        {
          vi: 'Chủ ngữ là vật chịu tác động → **be + V3**; phủ định → **not + V** hoặc **not be + V3**.',
          en: 'Subject receives the action → **be + V3**; negative → **not + verb** or **not be + V3**.',
        },
        {
          vi: 'Ngược lại, nếu mệnh đề đã có động từ nguyên mẫu và chỗ trống là tính từ hay động từ chính, chọn từ mang nghĩa yêu cầu/cần thiết.',
          en: 'Conversely, if the clause already has a base verb and the blank is the adjective or main verb, choose the word meaning demand/necessity.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The supervisor recommended that Ms. Alvarez ------- the advanced accounting course next spring.',
      options: ['take', 'takes', 'took', 'will take'],
      answer: 0,
      explanation: {
        vi: 'Sau **recommended that** cần động từ nguyên mẫu dù chủ ngữ số ít và động từ chính ở quá khứ → **take**. takes và took là bẫy hoà hợp và lùi thì.',
        en: 'After **recommended that** the base verb is required, even with a singular subject and a past main verb → **take**. takes and took are agreement and tense-shift traps.',
      },
      translation: 'Người giám sát đề nghị cô Alvarez học khoá kế toán nâng cao vào mùa xuân tới.',
    },
    {
      sentence: 'The landlord requires that all tenants ------- their rent by the fifth of each month.',
      options: ['pays', 'paid', 'pay', 'paying'],
      answer: 2,
      explanation: {
        vi: '**requires that** kéo theo động từ nguyên mẫu → **pay**. pays sai vì câu giả định không thêm -s; paying không làm động từ chính của mệnh đề được.',
        en: "**requires that** triggers the base verb → **pay**. pays is wrong because the subjunctive takes no -s; paying cannot be the clause's main verb.",
      },
      translation: 'Chủ nhà yêu cầu mọi người thuê phải trả tiền thuê nhà trước ngày mùng năm hằng tháng.',
    },
    {
      sentence: 'Our client has requested that the revised blueprints ------- to her office by Friday.',
      options: ['are delivered', 'be delivered', 'were delivered', 'delivering'],
      answer: 1,
      explanation: {
        vi: 'Sau **requested that** cần dạng nguyên mẫu, và bản vẽ là vật **được** giao nên dùng bị động → **be delivered**. are delivered / were delivered là dạng chia thì bình thường.',
        en: 'After **requested that** the base form is needed, and the blueprints **are** delivered by someone, so the passive is used → **be delivered**. are/were delivered are ordinary finite forms.',
      },
      translation: 'Khách hàng của chúng tôi đã yêu cầu các bản vẽ đã chỉnh sửa được chuyển đến văn phòng của cô ấy trước thứ Sáu.',
    },
    {
      sentence: 'The consultant proposed that the company ------- any new staff until the merger is finalized.',
      options: ['does not hire', 'not to hire', 'no hiring', 'not hire'],
      answer: 3,
      explanation: {
        vi: 'Phủ định của câu giả định là **not + V nguyên mẫu** → **not hire**. does not hire là dạng chia bình thường; not to hire thừa to.',
        en: 'The subjunctive negative is **not + base verb** → **not hire**. does not hire is an ordinary finite form; not to hire has an extra to.',
      },
      translation: 'Chuyên gia tư vấn đề xuất công ty không tuyển thêm nhân viên nào cho đến khi việc sáp nhập hoàn tất.',
    },
    {
      sentence: 'It is imperative that every passenger ------- a valid passport at the check-in counter.',
      options: ['presents', 'present', 'presented', 'presenting'],
      answer: 1,
      explanation: {
        vi: '**It is imperative that** + S + động từ nguyên mẫu → **present**. presents là bẫy hoà hợp với chủ ngữ số ít every passenger.',
        en: '**It is imperative that** + S + base verb → **present**. presents is an agreement trap with the singular subject every passenger.',
      },
      translation: 'Bắt buộc mọi hành khách phải xuất trình hộ chiếu hợp lệ tại quầy làm thủ tục.',
    },
    {
      sentence: 'It is ------- that the safety inspection be completed before the factory reopens next week.',
      options: ['likely', 'true', 'obvious', 'vital'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề that dùng động từ nguyên mẫu **be completed** → tính từ phải mang nghĩa CẦN THIẾT → **vital**. likely, true, obvious đi với động từ chia bình thường (will be / is).',
        en: 'The that-clause uses the base form **be completed** → the adjective must express NECESSITY → **vital**. likely, true and obvious take a finite verb (will be / is).',
      },
      translation: 'Điều tối quan trọng là việc kiểm tra an toàn phải hoàn tất trước khi nhà máy hoạt động trở lại vào tuần tới.',
    },
    {
      sentence: 'The committee approved the ------- that each department submit its budget by October 1.',
      options: ['recommend', 'recommended', 'recommendation', 'recommending'],
      answer: 2,
      explanation: {
        vi: 'Sau **the** và làm tân ngữ của **approved** cần danh từ → **recommendation**. Danh từ này cũng giải thích vì sao mệnh đề sau dùng nguyên mẫu **submit**.',
        en: 'After **the**, as the object of **approved**, a noun is needed → **recommendation**. This noun also explains the base verb **submit** in the clause.',
      },
      translation: 'Uỷ ban đã chấp thuận đề xuất rằng mỗi phòng ban nộp ngân sách trước ngày 1 tháng Mười.',
    },
    {
      sentence: 'The union ------- that overtime pay be increased by ten percent starting in January.',
      options: ['demanded', 'hoped', 'believed', 'announced'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề that dùng nguyên mẫu **be increased** → động từ chính phải mang nghĩa yêu cầu → **demanded**. hoped, believed, announced đi với động từ chia bình thường (would be increased).',
        en: 'The that-clause uses the base form **be increased** → the main verb must express a demand → **demanded**. hoped, believed and announced take a finite verb (would be increased).',
      },
      translation: 'Công đoàn yêu cầu tăng lương làm thêm giờ mười phần trăm kể từ tháng Một.',
    },
    {
      sentence: 'It is mandatory that all expense reports ------- by a department head before reimbursement.',
      options: ['are approved', 'approve', 'be approved', 'been approved'],
      answer: 2,
      explanation: {
        vi: '**It is mandatory that** cần dạng nguyên mẫu, và báo cáo **được** trưởng phòng duyệt (có **by**) nên dùng bị động → **be approved**. approve là chủ động, sai nghĩa.',
        en: '**It is mandatory that** needs the base form, and the reports are approved **by** a department head, so the passive is used → **be approved**. approve is active and wrong in meaning.',
      },
      translation: 'Bắt buộc mọi báo cáo chi phí phải được trưởng phòng duyệt trước khi hoàn tiền.',
    },
    {
      sentence: 'The organizers have asked that attendees ------- their mobile phones during the keynote address.',
      options: ['silenced', 'silences', 'silencing', 'silence'],
      answer: 3,
      explanation: {
        vi: '**asked that** + S + động từ nguyên mẫu → **silence** (tắt chuông). silenced là quá khứ, silencing không làm động từ chính được.',
        en: '**asked that** + S + base verb → **silence**. silenced is past tense, and silencing cannot serve as the main verb.',
      },
      translation: 'Ban tổ chức đã đề nghị người tham dự tắt chuông điện thoại trong bài phát biểu chính.',
    },
  ],
};
