import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'word-forms-suffix',
  intro: {
    vi: 'Câu hỏi từ loại chiếm khoảng 4–6 câu mỗi đề Part 5: bốn lựa chọn chung một gốc từ, chỉ khác phần đuôi. Bài này giúp bạn nhìn **hậu tố** là biết ngay đâu là danh từ, tính từ, động từ hay trạng từ.',
    en: 'Word-form questions make up about 4–6 items in every Part 5: all four options share one root and differ only in their endings. This lesson teaches you to tell a noun, adjective, verb or adverb at a glance from its **suffix**.',
  },
  mistakes: [
    {
      wrong: 'Please submit your [[apply]] by Friday.',
      right: 'Please submit your [[application]] by Friday.',
      explanation: {
        vi: 'Sau tính từ sở hữu **your** phải là một danh từ. **apply** là động từ; hậu tố **-tion** mới cho ra danh từ **application**.',
        en: 'A possessive like **your** must be followed by a noun. **apply** is a verb; the suffix **-tion** gives the noun **application**.',
      },
    },
    {
      wrong: 'The new software is very [[rely]].',
      right: 'The new software is very [[reliable]].',
      explanation: {
        vi: 'Sau **is** và **very** cần một tính từ. Hậu tố **-able** biến động từ **rely** thành tính từ **reliable** (đáng tin cậy).',
        en: 'After **is** and **very** we need an adjective. The suffix **-able** turns the verb **rely** into the adjective **reliable**.',
      },
    },
    {
      wrong: 'Sales increased [[significant]] last quarter.',
      right: 'Sales increased [[significantly]] last quarter.',
      explanation: {
        vi: 'Từ cần điền bổ nghĩa cho động từ **increased**, nên phải là trạng từ. Thêm **-ly** vào tính từ **significant** để có trạng từ **significantly**.',
        en: 'The word modifies the verb **increased**, so it must be an adverb. Adding **-ly** to the adjective **significant** gives **significantly**.',
      },
    },
    {
      wrong: "We need the board's [[approve]] before we can proceed.",
      right: "We need the board's [[approval]] before we can proceed.",
      explanation: {
        vi: 'Sau sở hữu cách **board\'s** phải là danh từ. **-al** thường là đuôi tính từ, nhưng **approval** là một ngoại lệ hay gặp: nó là DANH TỪ.',
        en: "A possessive like **board's** needs a noun after it. **-al** is usually an adjective ending, but **approval** is a common exception: it is a NOUN.",
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Vì sao phải thuộc hậu tố', en: 'Why suffixes matter' },
      body: {
        vi: 'Một câu hỏi từ loại điển hình trông như sau: (A) compete (B) competitive (C) competition (D) competitively. Bạn không cần hiểu hết câu: chỉ cần biết vị trí trống cần từ loại gì (bài 1.2), rồi chọn lựa chọn có **hậu tố** khớp với từ loại đó.',
        en: 'A typical word-form question looks like this: (A) compete (B) competitive (C) competition (D) competitively. You do not need to understand the whole sentence: work out which part of speech the blank needs (lesson 1.2), then pick the option whose **suffix** matches it.',
      },
      examples: [
        {
          en: 'The company faces strong **competition** from overseas suppliers.',
          vi: 'Công ty đối mặt với sự cạnh tranh gay gắt từ các nhà cung cấp nước ngoài.',
        },
        {
          en: 'We offer **competitive** salaries and flexible hours.',
          vi: 'Chúng tôi trả mức lương cạnh tranh và giờ làm linh hoạt.',
        },
      ],
    },
    {
      heading: { vi: 'Hậu tố của danh từ', en: 'Noun suffixes' },
      table: {
        head: [
          { vi: 'Hậu tố', en: 'Suffix' },
          { vi: 'Ví dụ', en: 'Examples' },
          { vi: 'Nghĩa thường gặp', en: 'Typical meaning' },
        ],
        rows: [
          ['-tion / -sion', 'information, decision, expansion', { vi: 'Hành động, kết quả', en: 'Action or result' }],
          ['-ment', 'management, agreement, payment', { vi: 'Hành động, kết quả', en: 'Action or result' }],
          ['-ness', 'effectiveness, awareness, readiness', { vi: 'Tính chất, trạng thái', en: 'Quality or state' }],
          ['-ity / -ty', 'availability, security, loyalty', { vi: 'Tính chất', en: 'Quality' }],
          ['-ance / -ence', 'performance, attendance, reference', { vi: 'Hành động, trạng thái', en: 'Action or state' }],
          ['-er / -or / -ist', 'manager, supervisor, specialist', { vi: 'Người làm việc gì đó', en: 'Person who does something' }],
          ['-ee', 'employee, trainee, attendee', { vi: 'Người nhận / chịu hành động', en: 'Person who receives the action' }],
          ['-ship', 'leadership, partnership, membership', { vi: 'Vị thế, mối quan hệ', en: 'Status or relationship' }],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Đuôi **-ant / -ent** có thể là tính từ (important, efficient) hoặc danh từ chỉ người (assistant, applicant, resident). Gặp đuôi này thì phải xét thêm vị trí trong câu.',
          en: 'The endings **-ant / -ent** can form adjectives (important, efficient) or person nouns (assistant, applicant, resident). When you see them, check the position in the sentence too.',
        },
      },
    },
    {
      heading: { vi: 'Hậu tố của tính từ', en: 'Adjective suffixes' },
      table: {
        head: [
          { vi: 'Hậu tố', en: 'Suffix' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          ['-able / -ible', 'available, reliable, accessible, responsible'],
          ['-ive', 'effective, competitive, extensive, innovative'],
          ['-ful / -less', 'successful, helpful / careless, wireless'],
          ['-ous', 'various, numerous, generous, previous'],
          ['-al', 'additional, financial, professional, annual'],
          ['-ic', 'economic, specific, strategic, realistic'],
          ['-ent / -ant', 'efficient, sufficient, significant, relevant'],
          ['-ary / -ory', 'necessary, temporary, mandatory, satisfactory'],
        ],
      },
    },
    {
      heading: { vi: 'Hậu tố của động từ và trạng từ', en: 'Verb and adverb suffixes' },
      points: [
        {
          vi: '**-ize / -ise**: organize, finalize, prioritize, summarize.',
          en: '**-ize / -ise**: organize, finalize, prioritize, summarize.',
        },
        {
          vi: '**-ify**: notify, clarify, verify, simplify.',
          en: '**-ify**: notify, clarify, verify, simplify.',
        },
        {
          vi: '**-en**: strengthen, widen, shorten, broaden.',
          en: '**-en**: strengthen, widen, shorten, broaden.',
        },
        {
          vi: '**-ate**: evaluate, facilitate, renovate, accommodate.',
          en: '**-ate**: evaluate, facilitate, renovate, accommodate.',
        },
        {
          vi: '**-ly** (trạng từ) = tính từ + ly: quick → quickly, efficient → efficiently. Tính từ tận cùng **-ic** thêm **-ally**: specific → specifically, economic → economically.',
          en: '**-ly** (adverb) = adjective + ly: quick → quickly, efficient → efficiently. Adjectives ending in **-ic** take **-ally**: specific → specifically, economic → economically.',
        },
      ],
      examples: [
        {
          en: 'Please **notify** the front desk if you plan to check out early.',
          vi: 'Vui lòng báo cho quầy lễ tân nếu quý khách định trả phòng sớm.',
        },
        {
          en: 'The new process works **efficiently** even during peak hours.',
          vi: 'Quy trình mới vận hành hiệu quả ngay cả trong giờ cao điểm.',
        },
      ],
    },
    {
      heading: { vi: 'Những từ "đánh lừa"', en: 'Words that break the pattern' },
      points: [
        {
          vi: 'Tính từ tận cùng **-ly**: friendly, costly, timely, likely, lively, orderly. Chúng không có dạng trạng từ thêm -ly nữa; muốn dùng như trạng từ thì nói **in a friendly manner**.',
          en: 'Adjectives ending in **-ly**: friendly, costly, timely, likely, lively, orderly. They have no further -ly adverb; to use them adverbially, say **in a friendly manner**.',
        },
        {
          vi: 'Danh từ tận cùng **-al**: approval, proposal, arrival, rental, renewal, referral, withdrawal.',
          en: 'Nouns ending in **-al**: approval, proposal, arrival, rental, renewal, referral, withdrawal.',
        },
        {
          vi: 'Danh từ tận cùng **-ive**: representative, initiative, objective, alternative, executive, incentive.',
          en: 'Nouns ending in **-ive**: representative, initiative, objective, alternative, executive, incentive.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đề rất hay đặt bẫy ở đúng nhóm này: thấy **-al** hay **-ive** đừng vội kết luận là tính từ, hãy xem vị trí trống có cần danh từ không.',
          en: 'The test likes to set traps with exactly these words: do not assume **-al** or **-ive** means an adjective; check whether the blank needs a noun.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu từ loại trong năm giây', en: 'Solving a word-form item in five seconds' },
      points: [
        {
          vi: 'Bốn lựa chọn chung một gốc → đây là câu từ loại, chưa cần dịch nghĩa.',
          en: 'Four options with one root → it is a word-form item; no need to translate yet.',
        },
        {
          vi: 'Xác định từ loại cần điền dựa vào những từ đứng ngay trước và sau chỗ trống.',
          en: 'Work out the part of speech from the words right before and after the blank.',
        },
        {
          vi: 'Chọn lựa chọn có hậu tố khớp. Nếu còn hai danh từ (ví dụ -er và -tion), xét xem câu cần người hay vật.',
          en: 'Pick the option with the matching suffix. If two nouns remain (say -er and -tion), decide whether the sentence needs a person or a thing.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The marketing team is preparing a detailed ------- of the new product line.',
      options: ['presented', 'presentation', 'presentable', 'presently'],
      answer: 1,
      explanation: {
        vi: 'Sau mạo từ **a** và tính từ **detailed** cần một danh từ. **-ation** là đuôi danh từ → **presentation**. presented là động từ/phân từ, presentable là tính từ, presently là trạng từ.',
        en: 'After the article **a** and the adjective **detailed**, a noun is needed. **-ation** marks a noun → **presentation**. presented is a verb/participle, presentable an adjective, presently an adverb.',
      },
      translation: 'Nhóm marketing đang chuẩn bị một bài thuyết trình chi tiết về dòng sản phẩm mới.',
    },
    {
      sentence: 'The new filing system makes it easier to locate ------- documents quickly.',
      options: ['confidentiality', 'confidential', 'confidentially', 'confide'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng trước danh từ **documents** nên cần tính từ. **-al** ở đây là đuôi tính từ → **confidential** (mật).',
        en: 'The blank comes before the noun **documents**, so it needs an adjective. Here **-al** is an adjective ending → **confidential**.',
      },
      translation: 'Hệ thống lưu trữ hồ sơ mới giúp tìm các tài liệu mật nhanh hơn.',
    },
    {
      sentence: 'Ms. Ortiz was promoted because of her ------- to customer service.',
      options: ['dedicate', 'dedicated', 'dedication', 'dedicatedly'],
      answer: 2,
      explanation: {
        vi: 'Sau tính từ sở hữu **her** cần danh từ. **-tion** → **dedication** (sự tận tâm). dedicated là tính từ, cần một danh từ theo sau.',
        en: 'The possessive **her** must be followed by a noun. **-tion** → **dedication**. dedicated is an adjective and would need a noun after it.',
      },
      translation: 'Cô Ortiz được thăng chức nhờ sự tận tâm với công tác chăm sóc khách hàng.',
    },
    {
      sentence: "The hotel's conference rooms are ------- for groups of up to fifty people.",
      options: ['suit', 'suitably', 'suitability', 'suitable'],
      answer: 3,
      explanation: {
        vi: 'Sau động từ nối **are** cần tính từ làm vị ngữ. **-able** → **suitable** (phù hợp). suitably là trạng từ, không đứng một mình sau be.',
        en: 'After the linking verb **are**, an adjective is needed as the complement. **-able** → **suitable**. suitably is an adverb and cannot stand alone after be.',
      },
      translation: 'Các phòng hội nghị của khách sạn phù hợp cho nhóm tối đa năm mươi người.',
    },
    {
      sentence: 'Our technicians will ------- the network so that it can handle more traffic.',
      options: ['strength', 'strengthen', 'strong', 'strongly'],
      answer: 1,
      explanation: {
        vi: 'Sau **will** là động từ nguyên mẫu, và phía sau có tân ngữ **the network**. **-en** là đuôi động từ → **strengthen** (tăng cường). strength là danh từ.',
        en: 'After **will** comes a base verb, and it is followed by the object **the network**. **-en** is a verb ending → **strengthen**. strength is a noun.',
      },
      translation: 'Các kỹ thuật viên sẽ tăng cường hệ thống mạng để nó xử lý được nhiều lưu lượng hơn.',
    },
    {
      sentence: 'The renovation of the lobby was completed ------- ahead of schedule.',
      options: ['consider', 'considerable', 'considerably', 'consideration'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống bổ nghĩa cho cụm **ahead of schedule** (sớm hơn kế hoạch bao nhiêu), nên cần trạng từ → **considerably** (đáng kể).',
        en: 'The blank modifies the phrase **ahead of schedule** (how far ahead), so an adverb is needed → **considerably**.',
      },
      translation: 'Việc cải tạo sảnh đã hoàn thành sớm hơn kế hoạch đáng kể.',
    },
    {
      sentence: "The budget proposal requires the director's ------- before it can be submitted.",
      options: ['approve', 'approval', 'approving', 'approved'],
      answer: 1,
      explanation: {
        vi: 'Sau sở hữu cách **director\'s** và làm tân ngữ của **requires** → cần danh từ. **approval** là danh từ dù tận cùng bằng **-al**.',
        en: "After the possessive **director's**, as the object of **requires**, a noun is needed. **approval** is a noun even though it ends in **-al**.",
      },
      translation: 'Bản đề xuất ngân sách cần giám đốc phê duyệt trước khi được nộp.',
    },
    {
      sentence: 'Customers appreciate the ------- manner in which our staff handle complaints.',
      options: ['friend', 'friendly', 'friendliness', 'friendship'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng giữa **the** và danh từ **manner** nên cần tính từ. **friendly** là tính từ dù tận cùng bằng **-ly**.',
        en: 'The blank sits between **the** and the noun **manner**, so it needs an adjective. **friendly** is an adjective even though it ends in **-ly**.',
      },
      translation: 'Khách hàng đánh giá cao thái độ thân thiện của nhân viên chúng tôi khi xử lý khiếu nại.',
    },
    {
      sentence: 'The ------- of the main conference room must be confirmed before invitations are sent.',
      options: ['available', 'availability', 'avail', 'availably'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng sau **The** và trước **of**, làm chủ ngữ → cần danh từ. **-ity** → **availability** (tình trạng còn trống).',
        en: 'The blank follows **The** and comes before **of**, acting as the subject → a noun is needed. **-ity** → **availability**.',
      },
      translation: 'Phải xác nhận phòng hội nghị chính còn trống trước khi gửi thư mời.',
    },
    {
      sentence: 'Please contact a customer service ------- if you have any questions about your bill.',
      options: ['represent', 'representative', 'representation', 'represented'],
      answer: 1,
      explanation: {
        vi: 'Sau **a customer service** cần danh từ chỉ NGƯỜI để có thể "liên hệ". **representative** là danh từ chỉ người dù tận cùng bằng **-ive**; representation là danh từ chỉ sự việc.',
        en: 'After **a customer service**, we need a PERSON noun, someone you can contact. **representative** is a person noun even though it ends in **-ive**; representation names a thing.',
      },
      translation: 'Vui lòng liên hệ nhân viên chăm sóc khách hàng nếu quý khách có thắc mắc về hoá đơn.',
    },
  ],
};
