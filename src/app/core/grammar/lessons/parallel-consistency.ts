import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'parallel-consistency',
  intro: {
    vi: 'Bài cuối chương 16 dạy sự **đồng nhất** trong song song: vị ngữ ghép phải cùng thì và cùng thể (was reviewed and **approved**), chuỗi tính từ hay trạng từ phải cùng loại, danh sách phẩm chất phải là danh từ trừu tượng cùng loại. Phần luyện tập trộn câu hỏi của cả chương, đúng như cách Part 5 và Part 6 ra đề.',
    en: 'The last lesson of chapter 16 teaches **consistency** in parallel structures: compound predicates keep the same tense and voice (was reviewed and **approved**), series of adjectives or adverbs stay the same type, and lists of qualities use abstract nouns of the same kind. The practice set mixes items from the whole chapter, just as Parts 5 and 6 do.',
  },
  mistakes: [
    {
      wrong: 'The proposal was reviewed by the board and [[approve]] last week.',
      right: 'The proposal was reviewed by the board and [[approved]] last week.',
      explanation: {
        vi: '**was** đứng chung cho cả hai động từ: was reviewed and (was) approved. Sau was trong câu bị động phải là V3, nên dùng **approved**.',
        en: '**was** is shared by both verbs: was reviewed and (was) approved. In the passive, was must be followed by a past participle, so use **approved**.',
      },
    },
    {
      wrong: 'Our technician has repaired the printer and [[replace]] the toner cartridge.',
      right: 'Our technician has repaired the printer and [[replaced]] the toner cartridge.',
      explanation: {
        vi: '**has** áp dụng cho cả hai động từ (Present Perfect): has repaired and (has) **replaced**. Động từ nguyên mẫu replace không đi sau has.',
        en: '**has** applies to both verbs (Present Perfect): has repaired and (has) **replaced**. The base form replace cannot follow has.',
      },
    },
    {
      wrong: 'The front desk staff were helpful and [[professionally]].',
      right: 'The front desk staff were helpful and [[professional]].',
      explanation: {
        vi: 'Sau động từ nối **were** là tính từ **helpful**, nên thành phần nối với nó cũng phải là tính từ **professional**, không phải trạng từ.',
        en: 'After the linking verb **were** comes the adjective **helpful**, so the item joined to it must also be an adjective: **professional**, not an adverb.',
      },
    },
    {
      wrong: 'In new team members, we value honesty, teamwork, and [[reliable]].',
      right: 'In new team members, we value honesty, teamwork, and [[reliability]].',
      explanation: {
        vi: '**honesty** và **teamwork** là danh từ trừu tượng chỉ phẩm chất, nên thành phần cuối cũng phải là danh từ trừu tượng: **reliability**.',
        en: '**honesty** and **teamwork** are abstract nouns naming qualities, so the last item must be an abstract noun too: **reliability**.',
      },
    },
    {
      wrong: 'The parcel arrived on Monday and [[signed]] for by the receptionist.',
      right: 'The parcel arrived on Monday and [[was signed]] for by the receptionist.',
      explanation: {
        vi: 'arrived là chủ động, nhưng bưu kiện **được** ký nhận (có **by the receptionist**), nên vế sau cần bị động và phải tự có trợ động từ: **was signed**.',
        en: 'arrived is active, but the parcel **is signed for** by someone (note **by the receptionist**), so the second verb needs the passive with its own auxiliary: **was signed**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Vị ngữ ghép: cùng thì', en: 'Compound predicates: the same tense' },
      body: {
        vi: '**Vị ngữ ghép** là khi một chủ ngữ có hai hay ba động từ nối bằng and/or/but. Nếu các hành động thuộc cùng một khung thời gian, các động từ phải cùng thì. Nếu chỉ viết trợ động từ một lần (has, will, was…), nó được hiểu ngầm trước mọi động từ phía sau, nên các động từ đó phải đúng dạng mà trợ động từ ấy đòi hỏi.',
        en: 'A **compound predicate** is one subject with two or three verbs joined by and/or/but. If the actions belong to the same time frame, the verbs must share one tense. If an auxiliary (has, will, was…) is written only once, it is understood before every following verb, so those verbs must take the form that auxiliary requires.',
      },
      table: {
        head: [
          { vi: 'Thì', en: 'Tense' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Dạng của động từ sau', en: 'Form of the later verb' },
        ],
        rows: [
          ['Present simple', 'She reviews the invoices and pays the suppliers.', { vi: 'Chia theo chủ ngữ', en: 'Agrees with the subject' }],
          ['Past simple', 'He packed the samples and mailed them.', { vi: 'Quá khứ', en: 'Past form' }],
          ['Present Perfect', 'They have hired a chef and redesigned the menu.', { vi: 'V3 (has/have hiểu ngầm)', en: 'Past participle (has/have understood)' }],
          ['Future', 'We will print the badges and send them out.', { vi: 'Nguyên mẫu (will hiểu ngầm)', en: 'Base verb (will understood)' }],
        ],
      },
    },
    {
      heading: { vi: 'Vị ngữ ghép: cùng thể bị động', en: 'Compound predicates: the same passive voice' },
      body: {
        vi: 'Khi trợ động từ bị động (is, was, will be, has been…) chỉ xuất hiện một lần, mọi động từ phía sau đều phải là **V3**. Đây là dạng câu hỏi song song phổ biến nhất trong Part 5. Cách thành lập câu bị động đã học ở chương 6.',
        en: 'When a passive auxiliary (is, was, will be, has been…) appears only once, every following verb must be a **past participle**. This is the most common parallel item in Part 5. How passives are formed was covered in chapter 6.',
      },
      examples: [
        {
          en: 'All applications **are screened** by HR and **forwarded** to the hiring manager.',
          vi: 'Tất cả hồ sơ ứng tuyển được phòng nhân sự sàng lọc và chuyển đến quản lý tuyển dụng.',
        },
        {
          en: 'The old carpets **will be removed** and **replaced** during the holiday closure.',
          vi: 'Thảm cũ sẽ được gỡ bỏ và thay mới trong thời gian nghỉ lễ.',
        },
        {
          en: 'The east wing **is being painted** and **rewired** this month.',
          vi: 'Khu nhà phía đông đang được sơn lại và thay hệ thống dây điện trong tháng này.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy **is/are/was/were/been/be + V3 … and -------** → gần như chắc chắn chỗ trống là V3. Đừng bị lừa bởi lựa chọn chia thì như approves hay approving.',
          en: 'See **is/are/was/were/been/be + past participle … and -------** → the blank is almost certainly a past participle. Do not be fooled by finite or -ing options such as approves or approving.',
        },
      },
    },
    {
      heading: { vi: 'Khi nào được đổi thì hoặc đổi thể', en: 'When the tense or voice may change' },
      points: [
        {
          vi: 'Hai hành động có dấu hiệu thời gian khác nhau thì được dùng thì khác nhau: Mr. Grant **joined** the bank in 2015 and now **leads** its audit team.',
          en: 'Different time markers allow different tenses: Mr. Grant **joined** the bank in 2015 and now **leads** its audit team.',
        },
        {
          vi: 'Nghĩa có thể đòi hỏi một hành động ở thể chủ động, hành động kia ở thể bị động: The order **arrived** on Tuesday and **was processed** the same day.',
          en: 'The meaning may make one action active and the other passive: The order **arrived** on Tuesday and **was processed** the same day.',
        },
        {
          vi: 'Khi vế sau đổi sang thể hoặc thì cần trợ động từ khác, nó phải tự có trợ động từ riêng (was processed), không được mượn trợ động từ của vế trước.',
          en: 'When the second verb switches to a voice or tense that needs a different auxiliary, it must carry its own (was processed); it cannot borrow one from the first verb.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Song song không có nghĩa là chép máy móc dạng của vế trước. Luôn kiểm tra dấu hiệu thời gian (now, currently, next week…) và xem chủ ngữ tự làm hay **được** làm hành động đó.',
          en: 'Parallelism does not mean blindly copying the first verb. Always check the time markers (now, currently, next week…) and whether the subject performs the action or **receives** it.',
        },
      },
    },
    {
      heading: { vi: 'Chuỗi tính từ và chuỗi trạng từ', en: 'Series of adjectives and adverbs' },
      body: {
        vi: 'Các tính từ nối với nhau phải cùng là tính từ (sau động từ nối như be, remain, seem hoặc trước danh từ); các trạng từ cùng bổ nghĩa cho một động từ phải cùng là trạng từ. Tính từ dạng phân từ (experienced, motivated, interesting) được tính là tính từ.',
        en: 'Adjectives joined together must all be adjectives (after a linking verb such as be, remain, seem, or before a noun); adverbs modifying the same verb must all be adverbs. Participle adjectives (experienced, motivated, interesting) count as adjectives.',
      },
      table: {
        head: [
          { vi: 'Vị trí', en: 'Position' },
          { vi: 'Đúng', en: 'Correct' },
          { vi: 'Sai', en: 'Wrong' },
        ],
        rows: [
          [{ vi: 'Sau động từ nối', en: 'After a linking verb' }, 'The process is efficient and reliable.', 'The process is efficient and reliably.'],
          [{ vi: 'Trước danh từ', en: 'Before a noun' }, 'an experienced and motivated team', 'an experienced and motivation team'],
          [{ vi: 'Bổ nghĩa cho động từ', en: 'Modifying a verb' }, 'The orders were packed quickly and accurately.', 'The orders were packed quickly and accurate.'],
        ],
      },
    },
    {
      heading: { vi: 'Danh từ trừu tượng cùng loại', en: 'Abstract nouns of the same kind' },
      body: {
        vi: 'Khi liệt kê phẩm chất, kỹ năng hay tiêu chí, mọi thành phần đều phải là **danh từ trừu tượng**: punctuality, accuracy, flexibility. Đừng chen một tính từ (accurate) hay một danh từ chỉ người (leader) vào danh sách phẩm chất.',
        en: 'When listing qualities, skills or criteria, every item must be an **abstract noun**: punctuality, accuracy, flexibility. Do not slip an adjective (accurate) or a person noun (leader) into a list of qualities.',
      },
      examples: [
        {
          en: 'The judges scored each proposal on **originality**, **feasibility**, and **cost**.',
          vi: 'Ban giám khảo chấm điểm từng đề xuất theo tính độc đáo, tính khả thi và chi phí.',
        },
        {
          en: 'The course develops **leadership** and **negotiation** skills.',
          vi: 'Khoá học phát triển kỹ năng lãnh đạo và đàm phán.',
        },
      ],
    },
    {
      heading: { vi: 'Tổng kết chương 16 và cách làm bài', en: 'Chapter 16 review and how to attack it' },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Việc cần làm', en: 'What to do' },
          { vi: 'Bài', en: 'Lesson' },
        ],
        rows: [
          ['and / but / or', { vi: 'Chọn cùng dạng với thành phần ở vế bên kia', en: 'Match the form of the item on the other side' }, '16.1'],
          ['both, not only, either, neither, whether', { vi: 'Hai thành phần sau hai nửa cặp từ cùng dạng', en: 'Items after the two halves share one form' }, '16.2'],
          ['instead of', { vi: 'Danh từ hoặc V-ing', en: 'A noun or an -ing form' }, '16.2'],
          ['than / as', { vi: 'to V – to V, V-ing – V-ing, that / those of', en: 'to V – to V, -ing – -ing, that / those of' }, '16.2'],
          ['be / has / will … and -------', { vi: 'Dạng mà trợ động từ chung đòi hỏi', en: 'The form the shared auxiliary requires' }, '16.3'],
        ],
      },
      points: [
        {
          vi: 'Bước 1: tìm liên từ hoặc cặp từ gần chỗ trống và xác định thành phần đối xứng với chỗ trống.',
          en: 'Step 1: find the conjunction or pair near the blank and identify the item that mirrors the blank.',
        },
        {
          vi: 'Bước 2: xác định dạng của thành phần đó (từ loại, thì, thể, V-ing hay to V).',
          en: 'Step 2: identify that item\'s form (part of speech, tense, voice, -ing or to-infinitive).',
        },
        {
          vi: 'Bước 3: kiểm tra dấu hiệu thời gian và nghĩa chủ động/bị động trước khi chốt đáp án.',
          en: 'Step 3: check the time markers and the active/passive meaning before you commit.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'All expense reports are reviewed by the finance team and ------- within five business days.',
      options: ['approve', 'approves', 'approved', 'approving'],
      answer: 2,
      explanation: {
        vi: '**are** đứng chung cho cả hai động từ bị động: are reviewed and (are) approved, nên cần V3 → **approved**. approves là chủ động và không hợp với chủ ngữ số nhiều.',
        en: '**are** is shared by both passive verbs: are reviewed and (are) approved, so a past participle is needed → **approved**. approves is active and does not agree with the plural subject.',
      },
      translation: 'Tất cả báo cáo chi phí được nhóm tài chính xem xét và phê duyệt trong vòng năm ngày làm việc.',
    },
    {
      sentence: 'The renovated conference center is not only larger but also ------- than the old venue downtown.',
      options: ['more convenient', 'convenience', 'conveniently', 'most convenient'],
      answer: 0,
      explanation: {
        vi: 'Sau **not only** là tính từ so sánh hơn **larger**, và phía sau còn có **than**, nên sau **but also** cũng phải là tính từ so sánh hơn → **more convenient**. most convenient là so sánh nhất, không đi với than; conveniently là trạng từ.',
        en: 'After **not only** comes the comparative adjective **larger**, and **than** follows, so the item after **but also** must be a comparative adjective too → **more convenient**. most convenient is a superlative and cannot take than; conveniently is an adverb.',
      },
      translation: 'Trung tâm hội nghị sau khi cải tạo không chỉ rộng hơn mà còn thuận tiện hơn địa điểm cũ ở trung tâm thành phố.',
    },
    {
      sentence: 'Mr. Dubois has already reviewed the supply contract and ------- it to the legal department.',
      options: ['forward', 'forwarding', 'to forward', 'forwarded'],
      answer: 3,
      explanation: {
        vi: '**has** đứng chung cho cả hai động từ (Present Perfect): has reviewed and (has) forwarded → cần V3 **forwarded**. forward là nguyên mẫu, không đi sau has.',
        en: '**has** is shared by both verbs (Present Perfect): has reviewed and (has) forwarded → the past participle **forwarded**. forward is a base verb and cannot follow has.',
      },
      translation: 'Ông Dubois đã xem xét hợp đồng cung ứng và chuyển nó cho phòng pháp chế.',
    },
    {
      sentence: 'The new packaging machines will be delivered on Monday and ------- by our technicians on Tuesday.',
      options: ['installed', 'installs', 'installing', 'install'],
      answer: 0,
      explanation: {
        vi: '**will be** đứng chung cho cả hai động từ bị động, và có **by our technicians** → cần V3 **installed**. install sẽ là chủ động, mâu thuẫn với by.',
        en: '**will be** is shared by both passive verbs, and **by our technicians** names the doer → the past participle **installed**. install would be active, which clashes with by.',
      },
      translation: 'Các máy đóng gói mới sẽ được giao vào thứ Hai và được các kỹ thuật viên của chúng tôi lắp đặt vào thứ Ba.',
    },
    {
      sentence: 'The upgraded accounting system processes invoices ------- and accurately, saving the team hours each week.',
      options: ['rapid', 'rapidly', 'rapidity', 'rapidness'],
      answer: 1,
      explanation: {
        vi: '**accurately** là trạng từ bổ nghĩa cho **processes**, nên từ nối với nó cũng phải là trạng từ → **rapidly**. rapid là tính từ, không bổ nghĩa cho động từ.',
        en: '**accurately** is an adverb modifying **processes**, so the word paired with it must also be an adverb → **rapidly**. rapid is an adjective and cannot modify a verb.',
      },
      translation: 'Hệ thống kế toán được nâng cấp xử lý hoá đơn nhanh chóng và chính xác, giúp cả nhóm tiết kiệm hàng giờ mỗi tuần.',
    },
    {
      sentence: 'Candidates for the regional sales position should be ------- and willing to travel frequently.',
      options: ['flexibly', 'flexibility', 'flex', 'flexible'],
      answer: 3,
      explanation: {
        vi: 'Sau **be** và song song với tính từ **willing**, chỗ trống cần tính từ → **flexible** (linh hoạt). flexibly là trạng từ, flexibility là danh từ.',
        en: 'After **be** and parallel with the adjective **willing**, the blank needs an adjective → **flexible**. flexibly is an adverb and flexibility a noun.',
      },
      translation: 'Ứng viên cho vị trí kinh doanh khu vực cần linh hoạt và sẵn sàng đi công tác thường xuyên.',
    },
    {
      sentence: 'The annual award recognizes employees who show initiative, -------, and a strong commitment to teamwork.',
      options: ['creative', 'creatively', 'creativity', 'create'],
      answer: 2,
      explanation: {
        vi: 'Danh sách tân ngữ của **show** gồm danh từ trừu tượng **initiative** và **a strong commitment**, nên chỗ trống cũng phải là danh từ trừu tượng → **creativity**. creative là tính từ.',
        en: 'The objects of **show**, **initiative** and **a strong commitment**, are abstract nouns, so the blank must be an abstract noun too → **creativity**. creative is an adjective.',
      },
      translation: 'Giải thưởng thường niên vinh danh những nhân viên thể hiện tính chủ động, sự sáng tạo và tinh thần cam kết mạnh mẽ với công việc nhóm.',
    },
    {
      sentence: 'Ms. Ito joined the company in 2018 and currently ------- its Asia-Pacific sales division.',
      options: ['managed', 'manages', 'managing', 'will have managed'],
      answer: 1,
      explanation: {
        vi: '**currently** chỉ hiện tại, nên động từ thứ hai dùng hiện tại đơn → **manages**, dù động từ đầu **joined** ở quá khứ (có mốc in 2018). Chép máy móc dạng managed là sai.',
        en: '**currently** points to the present, so the second verb is present simple → **manages**, even though the first verb **joined** is past (with in 2018). Blindly copying managed is wrong.',
      },
      translation: 'Cô Ito gia nhập công ty năm 2018 và hiện đang quản lý bộ phận kinh doanh khu vực châu Á – Thái Bình Dương.',
    },
    {
      sentence: 'The shipment arrived at the port on Friday and ------- by customs officials the following Monday.',
      options: ['inspected', 'has inspected', 'inspecting', 'was inspected'],
      answer: 3,
      explanation: {
        vi: 'Lô hàng **được** kiểm tra (có **by customs officials**) nên vế sau cần bị động quá khứ với trợ động từ riêng → **was inspected**. inspected một mình là chủ động, không có tân ngữ.',
        en: 'The shipment **is inspected** by someone (note **by customs officials**), so the second verb needs a past passive with its own auxiliary → **was inspected**. inspected alone is active and has no object.',
      },
      translation: 'Lô hàng cập cảng vào thứ Sáu và được nhân viên hải quan kiểm tra vào thứ Hai tuần sau đó.',
    },
    {
      sentence: 'This quarter, the customer service training focuses on improving satisfaction scores and ------- response times.',
      options: ['reducing', 'reduce', 'reduction', 'to reduce'],
      answer: 0,
      explanation: {
        vi: 'Sau giới từ **on** là V-ing **improving**, nên thành phần nối sau **and** cũng là V-ing → **reducing**. reduce không chia theo chủ ngữ số ít training, và to reduce không song song với improving.',
        en: 'After the preposition **on** comes the -ing form **improving**, so the item after **and** must be an -ing form too → **reducing**. reduce does not agree with the singular subject training, and to reduce is not parallel with improving.',
      },
      translation: 'Quý này, khoá đào tạo chăm sóc khách hàng tập trung vào việc nâng điểm hài lòng và rút ngắn thời gian phản hồi.',
    },
  ],
};
