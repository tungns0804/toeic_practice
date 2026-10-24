import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-special-nouns',
  intro: {
    vi: 'Bài này dạy cách chia động từ cho những chủ ngữ khó đoán số ít hay số nhiều: danh từ tập hợp, danh từ luôn số nhiều, danh từ tận cùng **-s** nhưng là số ít, cụm chỉ số tiền – thời gian – khoảng cách, và tên riêng. Trong Part 5/6, đề hay đặt các chủ ngữ này ngay trước chỗ trống động từ để thử xem bạn có bị đuôi **-s** đánh lừa không.',
    en: 'This lesson shows how to choose the verb for subjects whose number is hard to guess: collective nouns, always-plural nouns, nouns that end in **-s** but are singular, amounts of money, time and distance, and proper names. In Part 5/6, these subjects often sit right before a verb blank to test whether an **-s** ending fools you.',
  },
  mistakes: [
    {
      wrong: 'The news about the new parking rules [[were]] posted on the notice board.',
      right: 'The news about the new parking rules [[was]] posted on the notice board.',
      explanation: {
        vi: '**news** tận cùng bằng -s nhưng là danh từ không đếm được, luôn đi với động từ số ít → **was**.',
        en: '**news** ends in -s but is an uncountable noun and always takes a singular verb → **was**.',
      },
    },
    {
      wrong: 'The police [[is]] reviewing footage from the warehouse security cameras.',
      right: 'The police [[are]] reviewing footage from the warehouse security cameras.',
      explanation: {
        vi: '**police** không có đuôi -s nhưng luôn là số nhiều → **are**. Muốn nói về một người thì dùng **a police officer is**.',
        en: '**police** has no -s ending but is always plural → **are**. To talk about one person, say **a police officer is**.',
      },
    },
    {
      wrong: 'The marketing team [[have]] submitted its campaign budget for approval.',
      right: 'The marketing team [[has]] submitted its campaign budget for approval.',
      explanation: {
        vi: 'Đại từ **its** cho thấy **team** được coi là một khối → động từ số ít **has**. Chia have mà lại dùng its là không nhất quán.',
        en: 'The pronoun **its** shows that **team** is treated as one unit → the singular verb **has**. Using have together with its is inconsistent.',
      },
    },
    {
      wrong: 'Ten thousand dollars [[are]] not enough to renovate the reception area.',
      right: 'Ten thousand dollars [[is]] not enough to renovate the reception area.',
      explanation: {
        vi: 'Số tiền được hiểu là **một khoản** duy nhất → động từ số ít **is**, dù **dollars** ở dạng số nhiều.',
        en: 'The sum of money is understood as **one amount** → the singular verb **is**, even though **dollars** is plural in form.',
      },
    },
    {
      wrong: 'Peterson Associates [[are]] expanding its tax advisory services next year.',
      right: 'Peterson Associates [[is]] expanding its tax advisory services next year.',
      explanation: {
        vi: '**Peterson Associates** là tên của MỘT công ty (đại từ **its** xác nhận điều đó) → động từ số ít, dù tên tận cùng bằng -s.',
        en: '**Peterson Associates** is the name of ONE company (the pronoun **its** confirms it) → a singular verb, even though the name ends in -s.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Danh từ tập hợp: thường số ít', en: 'Collective nouns: usually singular' },
      body: {
        vi: 'Danh từ tập hợp chỉ một nhóm người nhưng bản thân nó ở dạng số ít. Trong tiếng Anh Mỹ (chuẩn mà phần lớn câu hỏi TOEIC theo), khi cả nhóm hoạt động như **một khối**, động từ chia **số ít** và đại từ thay thế là **it / its**.',
        en: 'A collective noun names a group of people but is itself singular in form. In American English (the variety most TOEIC items follow), when the group acts as **one unit**, the verb is **singular** and the pronoun that refers back to it is **it / its**.',
      },
      points: [
        {
          vi: 'Cả nhóm cùng hành động hoặc ra một quyết định chung → số ít: The committee **has** approved the budget.',
          en: 'The group acts or decides together → singular: The committee **has** approved the budget.',
        },
        {
          vi: 'Câu nói về quy mô hay thành phần của nhóm (**consists of, is made up of, is composed of**) → số ít, kể cả trong tiếng Anh Anh.',
          en: 'The sentence describes the size or make-up of the group (**consists of, is made up of, is composed of**) → singular, even in British English.',
        },
        {
          vi: 'Đại từ **it / its** chỉ về danh từ tập hợp trong câu → chắc chắn chia số ít.',
          en: 'The pronoun **it / its** refers back to the collective noun → the verb is definitely singular.',
        },
      ],
      table: {
        head: [
          { vi: 'Danh từ', en: 'Noun' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['staff', { vi: 'đội ngũ nhân viên', en: 'the employees of an organization' }],
          ['team', { vi: 'nhóm, đội', en: 'a group working together' }],
          ['committee', { vi: 'ủy ban, hội đồng', en: 'a group chosen to discuss and decide' }],
          ['board (of directors)', { vi: 'hội đồng quản trị', en: 'the group that governs a company' }],
          ['management', { vi: 'ban quản lý, ban lãnh đạo', en: 'the people who run an organization' }],
          ['audience', { vi: 'khán giả, người nghe', en: 'the people watching or listening' }],
          ['crew', { vi: 'tổ bay, đội thợ', en: 'a group working on a plane, ship or job site' }],
          ['panel', { vi: 'nhóm chuyên gia, ban giám khảo', en: 'a group of experts or judges' }],
        ],
      },
      examples: [
        {
          en: 'The **board meets** on the first Monday of every month.',
          vi: 'Hội đồng quản trị họp vào thứ Hai đầu tiên của mỗi tháng.',
        },
        {
          en: 'The cabin **crew is** trained to handle medical emergencies on board.',
          vi: 'Tổ tiếp viên được huấn luyện để xử lý các tình huống y tế khẩn cấp trên máy bay.',
        },
        {
          en: 'The **audience was** clearly impressed by the product demonstration.',
          vi: 'Khán giả rõ ràng rất ấn tượng với phần trình diễn sản phẩm.',
        },
        {
          en: 'The **committee members are** divided on the relocation proposal.',
          vi: 'Các thành viên ủy ban đang chia rẽ về đề xuất chuyển địa điểm.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Tiếng Anh Anh hay chia số nhiều (The team are…) khi nghĩ đến từng thành viên. Muốn nói về từng người, tiếng Anh Mỹ thường đổi chủ ngữ: **staff members are**, **team members are**, **board members have**. Dù theo cách nào cũng phải nhất quán: câu đã có **its** thì động từ phải số ít.',
          en: 'British English often uses a plural verb (The team are…) when thinking of the individual members. To talk about the individuals, American English usually changes the subject: **staff members are**, **team members are**, **board members have**. Either way, stay consistent: if the sentence uses **its**, the verb must be singular.',
        },
      },
    },
    {
      heading: { vi: 'Danh từ luôn số nhiều', en: 'Nouns that are always plural' },
      body: {
        vi: 'Một số danh từ chỉ người không có đuôi **-s** nhưng luôn đi với động từ **số nhiều** (are, were, have, động từ nguyên mẫu).',
        en: 'Some nouns for people have no **-s** ending but always take a **plural** verb (are, were, have, the base form).',
      },
      table: {
        head: [
          { vi: 'Danh từ', en: 'Noun' },
          { vi: 'Ghi chú', en: 'Note' },
        ],
        rows: [
          ['police', { vi: 'Lực lượng cảnh sát; một người là a police officer', en: 'The police force; one person is a police officer' }],
          ['people', { vi: 'Số nhiều của person', en: 'The plural of person' }],
          ['personnel', { vi: 'Toàn bộ nhân sự của một tổ chức', en: 'All the people employed by an organization' }],
          [
            'the elderly, the unemployed, the wealthy',
            { vi: 'the + tính từ = cả nhóm người mang đặc điểm đó', en: 'the + adjective = all the people with that quality' },
          ],
        ],
      },
      examples: [
        {
          en: 'The **police have** closed the road outside the convention center.',
          vi: 'Cảnh sát đã phong tỏa con đường bên ngoài trung tâm hội nghị.',
        },
        {
          en: '**People are** encouraged to use public transportation during the trade fair.',
          vi: 'Mọi người được khuyến khích đi phương tiện công cộng trong thời gian diễn ra hội chợ thương mại.',
        },
        {
          en: 'Warehouse **personnel receive** a safety bonus at the end of each quarter.',
          vi: 'Nhân viên kho được nhận tiền thưởng an toàn vào cuối mỗi quý.',
        },
        {
          en: 'The **unemployed are** offered free training at the city career center.',
          vi: 'Người thất nghiệp được đào tạo miễn phí tại trung tâm hướng nghiệp của thành phố.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Cặp dễ nhầm: **staff** là danh từ tập hợp (thường số ít trong tiếng Anh Mỹ), còn **personnel** luôn số nhiều. Ngoại lệ: khi **Personnel** là tên phòng nhân sự (= the Personnel Department) thì có thể chia số ít: Personnel has updated the leave policy.',
          en: 'An easy pair to confuse: **staff** is a collective noun (usually singular in American English), while **personnel** is always plural. Exception: when **Personnel** names the HR department (= the Personnel Department), it can take a singular verb: Personnel has updated the leave policy.',
        },
      },
    },
    {
      heading: { vi: 'Tận cùng -s nhưng là số ít', en: 'Ending in -s but singular' },
      table: {
        head: [
          { vi: 'Danh từ', en: 'Noun' },
          { vi: 'Số ít hay số nhiều', en: 'Singular or plural' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['news', { vi: 'Luôn số ít (không đếm được)', en: 'Always singular (uncountable)' }, 'The news is encouraging.'],
          [
            'economics, mathematics, physics',
            { vi: 'Số ít khi là tên môn học, ngành học', en: 'Singular as the name of a subject' },
            'Economics is a core subject in the program.',
          ],
          [
            'statistics',
            { vi: 'Môn thống kê → số ít; số liệu thống kê → số nhiều', en: 'The subject → singular; a set of figures → plural' },
            'Statistics is a required course. / These statistics are outdated.',
          ],
          [
            'series',
            { vi: 'Số ít và số nhiều cùng một dạng: a series → số ít', en: 'Same form for singular and plural: a series → singular' },
            'A series of talks is planned.',
          ],
          [
            'means',
            { vi: 'Cùng một dạng: a means / this means → số ít', en: 'Same form: a means / this means → singular' },
            'This means of payment is secure.',
          ],
          [
            'headquarters',
            { vi: 'Dùng được cả số ít lẫn số nhiều', en: 'Can take a singular or a plural verb' },
            'Our headquarters is (or are) in Chicago.',
          ],
        ],
      },
      examples: [
        {
          en: 'The **news** from the shipping department **is** good: every order left on time.',
          vi: 'Tin từ bộ phận vận chuyển rất tốt: mọi đơn hàng đều được gửi đi đúng hạn.',
        },
        {
          en: 'A **series** of customer surveys **has** confirmed strong demand for weekend delivery.',
          vi: 'Một loạt khảo sát khách hàng đã xác nhận nhu cầu lớn về dịch vụ giao hàng cuối tuần.',
        },
        {
          en: 'These **statistics are** based on data from our European stores.',
          vi: 'Những số liệu thống kê này dựa trên dữ liệu từ các cửa hàng ở châu Âu của chúng tôi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Ngược lại, có những danh từ tận cùng **-s** luôn là số nhiều: **goods, earnings, premises, belongings, proceeds** (The goods were delivered on time). Đừng suy ra số ít hay số nhiều chỉ từ đuôi -s; phải thuộc từng từ.',
          en: 'On the other hand, some nouns ending in **-s** are always plural: **goods, earnings, premises, belongings, proceeds** (The goods were delivered on time). Never decide the number from the -s ending alone; learn each word.',
        },
      },
    },
    {
      heading: { vi: 'Tiền, thời gian, khoảng cách: một khối', en: 'Money, time and distance as one unit' },
      body: {
        vi: 'Khi một cụm chỉ **số lượng** (số tiền, khoảng thời gian, khoảng cách, trọng lượng) được hiểu là **một tổng thể**, động từ chia **số ít**, dù danh từ sau con số ở dạng số nhiều.',
        en: 'When a phrase of **quantity** (a sum of money, a period of time, a distance, a weight) is understood as **one whole**, the verb is **singular**, even though the noun after the number is plural.',
      },
      table: {
        head: [
          { vi: 'Loại', en: 'Type' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Số tiền', en: 'Money' }, 'Five thousand dollars is a fair price for the exhibition booth.'],
          [{ vi: 'Khoảng thời gian', en: 'Time' }, 'Two hours is too long for a weekly staff meeting.'],
          [{ vi: 'Khoảng cách', en: 'Distance' }, 'Forty miles is a long way to commute every day.'],
          [{ vi: 'Trọng lượng', en: 'Weight' }, 'Twenty-three kilograms is the checked baggage limit.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Khi nói về **từng đơn vị riêng lẻ**, động từ có thể số nhiều: Three years have passed since the factory opened (từng năm lần lượt trôi qua). Trong Part 5, dấu hiệu của cách hiểu "một khối" thường nằm ở phần sau: **enough, too much, too long, a long way, the maximum amount, a fair price**.',
          en: 'When the individual units are thought of one by one, a plural verb is possible: Three years have passed since the factory opened. In Part 5, the "one whole" reading is usually signalled by what follows: **enough, too much, too long, a long way, the maximum amount, a fair price**.',
        },
      },
    },
    {
      heading: { vi: 'Tên công ty, tên sách, tên dự án', en: 'Names of companies, books and projects' },
      body: {
        vi: 'Tên riêng của một công ty, tổ chức, cuốn sách, bản báo cáo hay dự án chỉ **một** thực thể → động từ **số ít**, kể cả khi tên tận cùng bằng **-s** hoặc có chứa **and / &**.',
        en: 'The name of a company, organization, book, report or project refers to **one** entity → a **singular** verb, even when the name ends in **-s** or contains **and / &**.',
      },
      examples: [
        {
          en: '**Kessler Industries has** signed a five-year supply contract with a car manufacturer.',
          vi: 'Kessler Industries đã ký hợp đồng cung ứng 5 năm với một nhà sản xuất ô tô.',
        },
        {
          en: '**Barrow & Sons is** celebrating its fiftieth anniversary this year.',
          vi: 'Barrow & Sons đang kỷ niệm 50 năm thành lập trong năm nay.',
        },
        {
          en: '**"Smart Pricing Strategies" is** now available in print and digital formats.',
          vi: 'Cuốn "Smart Pricing Strategies" hiện đã có cả bản in lẫn bản điện tử.',
        },
        {
          en: '**Project Northstar is** expected to shorten delivery times across the region.',
          vi: 'Dự án Northstar được kỳ vọng sẽ rút ngắn thời gian giao hàng trên toàn khu vực.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Tên có **and / &** vẫn là MỘT công ty, không phải chủ ngữ ghép (bài 3.4): Barrow & Sons **is**, không phải are. Tiếng Anh Anh đôi khi chia số nhiều cho tên công ty, nhưng đề TOEIC thường theo chuẩn Mỹ; nếu câu có **its** thì chắc chắn chọn số ít.',
          en: 'A name with **and / &** is still ONE company, not a compound subject (lesson 3.4): Barrow & Sons **is**, not are. British English sometimes uses a plural verb with company names, but TOEIC items usually follow American usage; if the sentence contains **its**, the singular is certain.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chủ ngữ đặc biệt trong Part 5', en: 'Attacking special-noun items in Part 5' },
      points: [
        {
          vi: 'Các lựa chọn khác nhau ở số ít/số nhiều (is/are, has/have, có -s/không -s) → tìm danh từ chính của chủ ngữ.',
          en: 'The options differ in singular/plural (is/are, has/have, with or without -s) → find the head noun of the subject.',
        },
        {
          vi: 'Xếp danh từ đó vào nhóm: tập hợp (staff, committee) → số ít; police / people / personnel / the + tính từ → số nhiều; news / series / tên môn học → số ít; cụm tiền – thời gian – khoảng cách → số ít; tên công ty, tên sách → số ít.',
          en: 'Put the noun in its group: collective (staff, committee) → singular; police / people / personnel / the + adjective → plural; news / series / subject names → singular; money, time and distance phrases → singular; company and book names → singular.',
        },
        {
          vi: 'Tìm dấu hiệu xác nhận trong câu: đại từ **it / its** (số ít) hay **they / their** (số nhiều), cụm chỉ thành phần như **consists of, is made up of** (số ít), bổ ngữ số ít như **enough time, the maximum amount**.',
          en: 'Look for confirming cues in the sentence: the pronouns **it / its** (singular) or **they / their** (plural), make-up phrases such as **consists of, is made up of** (singular), and singular complements such as **enough time, the maximum amount**.',
        },
        {
          vi: 'Đừng để đuôi **-s** quyết định thay bạn: Kessler Industries, economics, news đều số ít; police, people không có -s mà vẫn số nhiều.',
          en: 'Do not let the **-s** ending decide for you: Kessler Industries, economics and news are singular; police and people have no -s but are plural.',
        },
        {
          vi: 'Cuối cùng loại các lựa chọn sai thì so với mốc thời gian, hoặc không làm được động từ chính (V-ing, to V).',
          en: 'Finally, eliminate options with the wrong tense for the time marker, or forms that cannot be the main verb (V-ing, to V).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The finance committee ------- its budget recommendations to the board of directors at the end of every quarter.',
      options: ['presents', 'present', 'presenting', 'to present'],
      answer: 0,
      explanation: {
        vi: 'Đại từ **its** cho thấy **committee** được coi là một khối → động từ số ít **presents**. present (số nhiều) mâu thuẫn với its; presenting và to present không làm động từ chính được.',
        en: 'The pronoun **its** shows that **committee** is treated as one unit → the singular verb **presents**. The plural present clashes with its; presenting and to present cannot be the main verb.',
      },
      translation: 'Ủy ban tài chính trình các đề xuất ngân sách của mình lên hội đồng quản trị vào cuối mỗi quý.',
    },
    {
      sentence: 'The interview panel for the regional manager position ------- of three department heads and an outside consultant.',
      options: ['are made up', 'making up', 'have made up', 'is made up'],
      answer: 3,
      explanation: {
        vi: 'Câu mô tả **thành phần** của cả nhóm (**made up of** ba trưởng phòng và một chuyên gia bên ngoài), nên **panel** là một khối → **is made up**. are made up là số nhiều, không dùng khi nói về thành phần của nhóm; making up không làm động từ chính được, còn have made up of sai cấu trúc.',
        en: 'The sentence describes the **make-up** of the whole group (**made up of** three department heads and a consultant), so **panel** is one unit → **is made up**. are made up is plural, which is not used to describe what a group consists of; making up cannot be the main verb, and have made up of is ungrammatical.',
      },
      translation: 'Hội đồng phỏng vấn cho vị trí quản lý khu vực gồm ba trưởng phòng và một chuyên gia bên ngoài.',
    },
    {
      sentence: 'Maintenance personnel ------- required to wear protective goggles whenever they operate the cutting machines.',
      options: ['is', 'was', 'are', 'has been'],
      answer: 2,
      explanation: {
        vi: '**personnel** (toàn bộ nhân sự) luôn là số nhiều, và đại từ **they** phía sau xác nhận điều đó → **are**. is, was và has been đều là dạng số ít.',
        en: '**personnel** (all the staff) is always plural, and the pronoun **they** later in the sentence confirms it → **are**. is, was and has been are all singular forms.',
      },
      translation: 'Nhân viên bảo trì phải đeo kính bảo hộ mỗi khi vận hành máy cắt.',
    },
    {
      sentence: 'Under the new fare policy, the elderly ------- entitled to a 30 percent discount on all weekday train tickets.',
      options: ['are', 'is', 'was', 'has'],
      answer: 0,
      explanation: {
        vi: '**the elderly** (the + tính từ) chỉ cả nhóm người cao tuổi → luôn số nhiều → **are** entitled. is và was là số ít; has entitled sai cả nghĩa lẫn cấu trúc (cần bị động be entitled to).',
        en: '**the elderly** (the + adjective) refers to elderly people as a group → always plural → **are** entitled. is and was are singular; has entitled is wrong in both form and meaning (the passive be entitled to is needed).',
      },
      translation: 'Theo chính sách giá vé mới, người cao tuổi được giảm 30% cho tất cả vé tàu ngày thường.',
    },
    {
      sentence: "The news about the planned merger ------- shared with all employees during yesterday's town hall meeting.",
      options: ['were', 'was', 'are', 'have been'],
      answer: 1,
      explanation: {
        vi: "**news** tận cùng -s nhưng là danh từ không đếm được, luôn số ít; **yesterday's** cho biết thì quá khứ → **was**. were là số nhiều; are và have been sai cả số lẫn thì.",
        en: "**news** ends in -s but is uncountable and always singular; **yesterday's** signals the past → **was**. were is plural; are and have been are wrong in both number and tense.",
      },
      translation: 'Tin tức về kế hoạch sáp nhập đã được chia sẻ với toàn thể nhân viên trong buổi họp toàn công ty hôm qua.',
    },
    {
      sentence: 'A series of workshops on data security ------- been scheduled for new employees next month.',
      options: ['have', 'are', 'has', 'having'],
      answer: 2,
      explanation: {
        vi: 'Danh từ chính của chủ ngữ là **A series** (một loạt), số ít → **has** been scheduled. Đừng chia theo **workshops** đứng sát chỗ trống: have là số nhiều; are và having không ghép với been thành động từ chính được.',
        en: 'The head of the subject is **A series**, which is singular → **has** been scheduled. Do not agree with **workshops** next to the blank: have is plural, and neither are nor having can combine with been to form the main verb.',
      },
      translation: 'Một loạt hội thảo về bảo mật dữ liệu đã được lên lịch cho nhân viên mới vào tháng tới.',
    },
    {
      sentence: 'The latest sales statistics ------- that demand for our electric bicycles has nearly doubled since January.',
      options: ['shows', 'show', 'showing', 'has shown'],
      answer: 1,
      explanation: {
        vi: 'Ở đây **statistics** là số liệu (**latest sales** statistics), không phải tên môn học → số nhiều → **show**. shows và has shown là số ít, chỉ dùng khi statistics là môn thống kê; showing không làm động từ chính được.',
        en: 'Here **statistics** means figures (**latest sales** statistics), not the academic subject → plural → **show**. shows and has shown are singular, used only when statistics names the subject; showing cannot be the main verb.',
      },
      translation: 'Số liệu bán hàng mới nhất cho thấy nhu cầu đối với xe đạp điện của chúng tôi đã tăng gần gấp đôi kể từ tháng Một.',
    },
    {
      sentence: 'Three weeks ------- not enough time to train new staff on the updated inventory software.',
      options: ['are', 'were', 'have', 'is'],
      answer: 3,
      explanation: {
        vi: '**Three weeks** được hiểu là **một khoảng thời gian** trọn vẹn, và bổ ngữ **enough time** xác nhận điều đó → động từ số ít **is**. are và were là số nhiều; have không hợp cấu trúc câu.',
        en: '**Three weeks** is understood as **one period of time**, and the complement **enough time** confirms it → the singular **is**. are and were are plural; have does not fit the structure.',
      },
      translation: 'Ba tuần là không đủ thời gian để đào tạo nhân viên mới sử dụng phần mềm quản lý kho đã được cập nhật.',
    },
    {
      sentence: 'Two hundred dollars ------- the maximum amount that employees may spend on a client dinner without approval.',
      options: ['is', 'are', 'were', 'have been'],
      answer: 0,
      explanation: {
        vi: '**Two hundred dollars** là một khoản tiền, ứng với bổ ngữ số ít **the maximum amount** → **is**. are, were và have been đều là số nhiều; bẫy nằm ở đuôi -s của dollars.',
        en: '**Two hundred dollars** is a single sum, matched by the singular complement **the maximum amount** → **is**. are, were and have been are all plural; the trap is the -s on dollars.',
      },
      translation: 'Hai trăm đô la là số tiền tối đa mà nhân viên được chi cho một bữa tối tiếp khách mà không cần phê duyệt.',
    },
    {
      sentence: 'Harrington Logistics ------- opened its second distribution center near the port to handle rising demand.',
      options: ['have', 'having', 'has', 'to have'],
      answer: 2,
      explanation: {
        vi: '**Harrington Logistics** là tên của một công ty, và đại từ **its** xác nhận số ít → **has** opened. have là số nhiều (bẫy từ đuôi -s của Logistics); having và to have không làm động từ chính được.',
        en: '**Harrington Logistics** is the name of one company, and the pronoun **its** confirms the singular → **has** opened. have is plural (the trap is the -s in Logistics); having and to have cannot be the main verb.',
      },
      translation: 'Harrington Logistics đã mở trung tâm phân phối thứ hai gần cảng để đáp ứng nhu cầu ngày càng tăng.',
    },
  ],
};
