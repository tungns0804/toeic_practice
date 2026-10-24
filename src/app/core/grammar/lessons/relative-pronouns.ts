import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'relative-pronouns',
  intro: {
    vi: 'Bài này dạy cách chọn **đại từ quan hệ** (who, whom, which, that, whose) dựa vào hai câu hỏi: danh từ đứng trước là người hay vật, và đại từ đóng vai trò gì trong mệnh đề. Trong Part 5, bốn lựa chọn thường là who / whom / whose / which, và đáp án nằm ngay ở từ đứng sau chỗ trống.',
    en: 'This lesson shows how to choose a **relative pronoun** (who, whom, which, that, whose) by asking two questions: is the noun before it a person or a thing, and what job does the pronoun do in its clause? In Part 5 the four options are often who / whom / whose / which, and the answer lies in the word right after the blank.',
  },
  mistakes: [
    {
      wrong: 'The manager [[which]] approved the budget is on leave this week.',
      right: 'The manager [[who]] approved the budget is on leave this week.',
      explanation: {
        vi: 'Tiền ngữ **the manager** là người, nên dùng **who** (hoặc that). **which** chỉ dùng cho vật, con vật hoặc sự việc.',
        en: 'The antecedent **the manager** is a person, so use **who** (or that). **which** is only for things, animals or ideas.',
      },
    },
    {
      wrong: "We need a courier service [[who's]] rates are reasonable.",
      right: 'We need a courier service [[whose]] rates are reasonable.',
      explanation: {
        vi: "Sau chỗ trống là danh từ **rates** không có mạo từ, nên cần từ chỉ sở hữu **whose** (= giá CỦA dịch vụ đó). **who's** là viết tắt của who is / who has.",
        en: "The blank is followed by the bare noun **rates**, so we need the possessive **whose** (= the service's rates). **who's** is short for who is / who has.",
      },
    },
    {
      wrong: 'This is the price list [[what]] you asked for.',
      right: 'This is the price list [[that]] you asked for.',
      explanation: {
        vi: 'Sau một danh từ (**the price list**) phải dùng đại từ quan hệ **that / which**, không dùng **what**. what đã tự chứa nghĩa "cái mà", nên không bao giờ đứng sau một danh từ để bổ nghĩa cho nó.',
        en: 'After a noun (**the price list**) we need the relative pronoun **that / which**, not **what**. what already means "the thing that", so it never follows a noun to modify it.',
      },
    },
    {
      wrong: 'Applicants [[whom]] meet all the requirements will be contacted by Friday.',
      right: 'Applicants [[who]] meet all the requirements will be contacted by Friday.',
      explanation: {
        vi: 'Ngay sau chỗ trống là động từ **meet**, nên đại từ quan hệ làm CHỦ NGỮ của mệnh đề → **who**. **whom** chỉ làm tân ngữ.',
        en: 'The blank is followed directly by the verb **meet**, so the pronoun is the SUBJECT of its clause → **who**. **whom** can only be an object.',
      },
    },
    {
      wrong: 'The laptop that I bought [[it]] last month has stopped working.',
      right: 'The laptop [[that]] I bought last month has stopped working.',
      explanation: {
        vi: '**that** đã là tân ngữ của **bought**, nên không được thêm **it** nữa. Đại từ quan hệ thay thế danh từ, không đi kèm một đại từ lặp lại.',
        en: '**that** is already the object of **bought**, so **it** must not be added. A relative pronoun replaces the noun; it is not followed by a repeated pronoun.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Đại từ quan hệ làm gì', en: 'What a relative pronoun does' },
      body: {
        vi: 'Đại từ quan hệ nối hai câu thành một: nó thay cho một danh từ đã nhắc (gọi là **tiền ngữ**) và mở đầu một **mệnh đề quan hệ** bổ nghĩa cho danh từ đó. Mệnh đề quan hệ đứng ngay sau tiền ngữ và có động từ riêng của nó.',
        en: 'A relative pronoun joins two sentences into one: it stands for a noun already mentioned (the **antecedent**) and opens a **relative clause** that describes that noun. The relative clause comes right after the antecedent and has its own verb.',
      },
      examples: [
        {
          en: 'The technician fixed the copier. + **He** works on the fifth floor. → The technician **who** works on the fifth floor fixed the copier.',
          vi: 'Người kỹ thuật viên làm việc ở tầng năm đã sửa máy photocopy.',
        },
        {
          en: 'The contract arrived today. + Legal reviewed **it**. → The contract **that** Legal reviewed arrived today.',
          vi: 'Bản hợp đồng mà bộ phận pháp lý đã xem xét được gửi đến hôm nay.',
        },
      ],
    },
    {
      heading: { vi: 'Bảng chọn đại từ quan hệ', en: 'Choosing the pronoun: the table' },
      table: {
        head: [
          { vi: 'Vai trò trong mệnh đề', en: 'Role in the clause' },
          { vi: 'Tiền ngữ chỉ người', en: 'Person antecedent' },
          { vi: 'Tiền ngữ chỉ vật', en: 'Thing antecedent' },
          { vi: 'Dấu hiệu sau chỗ trống', en: 'What follows the blank' },
        ],
        rows: [
          ['Subject', 'who / that', 'which / that', { vi: 'Động từ (who **manages**…)', en: 'A verb (who **manages**…)' }],
          ['Object', 'whom / who / that', 'which / that', { vi: 'Chủ ngữ + động từ (whom **we hired**…)', en: 'Subject + verb (whom **we hired**…)' }],
          ['Possessive', 'whose + noun', 'whose + noun', { vi: 'Danh từ không có mạo từ + động từ (whose **sales** rose…)', en: 'A noun with no article + verb (whose **sales** rose…)' }],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**that** dùng được cho cả người lẫn vật ở vị trí chủ ngữ và tân ngữ. Vì vậy đề hiếm khi cho who và that cùng làm lựa chọn cho tiền ngữ chỉ người: cả hai đều đúng. Đề thường thử bạn bằng cách trộn who / whom / whose / which.',
          en: '**that** works for both people and things as subject or object. That is why the test rarely offers who and that together for a person antecedent: both would be correct. It tests you by mixing who / whom / whose / which.',
        },
      },
    },
    {
      heading: { vi: 'Chủ ngữ hay tân ngữ: nhìn từ đứng sau chỗ trống', en: 'Subject or object: look at the word after the blank' },
      points: [
        {
          vi: 'Sau chỗ trống là **động từ** → đại từ làm chủ ngữ: **who** (người), **which** (vật).',
          en: 'A **verb** follows the blank → the pronoun is the subject: **who** (people), **which** (things).',
        },
        {
          vi: 'Sau chỗ trống là **chủ ngữ + động từ** → đại từ làm tân ngữ: **whom** (người), **which** (vật). Động từ trong mệnh đề lúc này thiếu tân ngữ, vì tân ngữ chính là đại từ quan hệ.',
          en: 'A **subject + verb** follows the blank → the pronoun is the object: **whom** (people), **which** (things). The verb in the clause now lacks an object, because the relative pronoun is that object.',
        },
      ],
      examples: [
        {
          en: 'The supervisor **who** trains new staff has twenty years of experience.',
          vi: 'Người giám sát đào tạo nhân viên mới có hai mươi năm kinh nghiệm.',
        },
        {
          en: 'The architect **whom** the city selected will design the new library.',
          vi: 'Kiến trúc sư được thành phố lựa chọn sẽ thiết kế thư viện mới.',
        },
        {
          en: 'The forklift **which** broke down yesterday has been repaired.',
          vi: 'Chiếc xe nâng bị hỏng hôm qua đã được sửa xong.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong văn nói, người bản xứ hay dùng **who** cho cả vị trí tân ngữ (the architect who the city selected). Nhưng **whom** không bao giờ làm chủ ngữ: thấy động từ ngay sau chỗ trống thì loại whom ngay. Sau giới từ, tiền ngữ chỉ người chỉ dùng whom (to whom, bài 12.2).',
          en: 'In speech, native speakers often use **who** as an object too (the architect who the city selected). But **whom** is never a subject: if a verb comes right after the blank, eliminate whom at once. After a preposition, only whom is used for people (to whom, lesson 12.2).',
        },
      },
    },
    {
      heading: { vi: 'whose + danh từ, và bẫy who\'s', en: "whose + noun, and the who's trap" },
      body: {
        vi: "**whose** chỉ sở hữu (= của người/vật đó) và LUÔN đi kèm một danh từ ngay sau nó, danh từ này không có mạo từ. whose dùng được cho cả người lẫn vật, kể cả công ty, tòa nhà, sản phẩm. **who\'s** là viết tắt của **who is / who has**, nên phía sau là V-ing, tính từ, cụm giới từ, V3 hoặc một cụm danh từ CÓ mạo từ (who's a sales manager).",
        en: "**whose** shows possession (= that person's / that thing's) and is ALWAYS followed directly by a noun with no article. whose works for people and things alike, including companies, buildings and products. **who's** is short for **who is / who has**, so it is followed by an -ing form, an adjective, a prepositional phrase, a past participle or a noun phrase WITH an article (who's a sales manager).",
      },
      examples: [
        {
          en: 'We hired a contractor **whose** crew finished the job in two days.',
          vi: 'Chúng tôi thuê một nhà thầu có đội thợ hoàn thành công việc trong hai ngày.',
        },
        {
          en: 'Harlow Foods is a company **whose** profits have doubled since 2020.',
          vi: 'Harlow Foods là một công ty có lợi nhuận tăng gấp đôi kể từ năm 2020.',
        },
        {
          en: "The receptionist **who's** on duty tonight can arrange a taxi for you.",
          vi: 'Nhân viên lễ tân trực tối nay có thể gọi taxi cho quý khách.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: "Thử khai triển: thay who's bằng **who is**. Nếu câu vô nghĩa (the courier who is rates…) thì đáp án là **whose**.",
          en: "Test it: expand who's to **who is**. If the sentence makes no sense (the courier who is rates…), the answer is **whose**.",
        },
      },
    },
    {
      heading: { vi: 'Lược đại từ quan hệ làm tân ngữ', en: 'Leaving out an object pronoun' },
      body: {
        vi: 'Khi đại từ quan hệ làm **tân ngữ**, ta có thể bỏ nó đi: danh từ + chủ ngữ + động từ đứng liền nhau. Đại từ làm **chủ ngữ** thì KHÔNG được lược (cách rút gọn mệnh đề chủ ngữ bằng V-ing / V3 là bài 12.3). Dù có lược hay không, mệnh đề cũng không được thêm một đại từ lặp lại (it, them, him).',
        en: 'When the relative pronoun is an **object**, it can be left out: noun + subject + verb then sit side by side. A **subject** pronoun can NOT be omitted (reducing subject clauses with -ing / past participles is lesson 12.3). Omitted or not, the clause must not add a repeated pronoun (it, them, him).',
      },
      examples: [
        {
          en: 'The samples **(that)** the client sent last week have been tested.',
          vi: 'Các mẫu mà khách hàng gửi tuần trước đã được kiểm nghiệm.',
        },
        {
          en: 'The candidate **(whom)** we interviewed on Monday has accepted our offer.',
          vi: 'Ứng viên mà chúng tôi phỏng vấn hôm thứ Hai đã nhận lời mời làm việc.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy hai cụm danh từ đứng sát nhau rồi đến động từ (the samples **the client** sent) → đó là mệnh đề quan hệ đã lược đại từ. Đề có thể đặt chỗ trống ở vị trí chủ ngữ của mệnh đề này: điền một đại từ chủ ngữ như **we, they**, không phải which.',
          en: 'Two noun phrases side by side followed by a verb (the samples **the client** sent) → a relative clause with the pronoun omitted. The test may blank the subject of this clause: fill it with a subject pronoun such as **we, they**, not which.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu đại từ quan hệ trong Part 5', en: 'Attacking relative pronoun items in Part 5' },
      points: [
        {
          vi: 'Bước 1: Tìm tiền ngữ (danh từ ngay trước chỗ trống): người → loại which; vật → loại who / whom.',
          en: 'Step 1: Find the antecedent (the noun right before the blank): a person → drop which; a thing → drop who / whom.',
        },
        {
          vi: 'Bước 2: Nhìn ngay sau chỗ trống: động từ → who / which; chủ ngữ + động từ → whom / which (hoặc lược); danh từ không mạo từ + động từ → whose.',
          en: 'Step 2: Look right after the blank: a verb → who / which; subject + verb → whom / which (or nothing); a bare noun + verb → whose.',
        },
        {
          vi: 'Bước 3: Loại **what** khi phía trước có danh từ (what dùng trong mệnh đề danh từ, bài 15.2), và loại **who\'s** nếu khai triển thành who is không hợp nghĩa.',
          en: "Step 3: Drop **what** when a noun precedes the blank (what belongs to noun clauses, lesson 15.2), and drop **who's** if expanding it to who is makes no sense.",
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Applicants ------- have more than five years of sales experience will be invited to a second interview.',
      options: ['who', 'whom', 'whose', 'which'],
      answer: 0,
      explanation: {
        vi: 'Tiền ngữ **Applicants** là người, và ngay sau chỗ trống là động từ **have** → cần đại từ làm chủ ngữ cho người: **who**. whom chỉ làm tân ngữ; which dùng cho vật.',
        en: 'The antecedent **Applicants** is a person, and the verb **have** follows the blank → a subject pronoun for people: **who**. whom is only an object; which is for things.',
      },
      translation: 'Các ứng viên có hơn năm năm kinh nghiệm bán hàng sẽ được mời phỏng vấn vòng hai.',
    },
    {
      sentence: 'The color printer ------- was installed on the third floor last week has already broken down twice.',
      options: ['who', 'whose', 'which', 'whom'],
      answer: 2,
      explanation: {
        vi: 'Tiền ngữ **The color printer** là vật, sau chỗ trống là động từ **was installed** → đại từ chủ ngữ cho vật: **which**. who / whom chỉ dùng cho người; whose phải đi kèm danh từ.',
        en: 'The antecedent **The color printer** is a thing, followed by the verb **was installed** → a subject pronoun for things: **which**. who / whom are for people; whose needs a noun after it.',
      },
      translation: 'Chiếc máy in màu được lắp ở tầng ba tuần trước đã hỏng hai lần rồi.',
    },
    {
      sentence: 'We are looking for a supplier ------- products meet international safety standards at a competitive price.',
      options: ['which', 'who', 'whom', 'whose'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là danh từ **products** không có mạo từ, rồi mới đến động từ **meet** → cần **whose** (= sản phẩm CỦA nhà cung cấp). which / who không đứng trước một danh từ làm chủ ngữ như vậy.',
        en: "The blank is followed by the bare noun **products** and then the verb **meet** → **whose** (= the supplier's products). which / who cannot be followed by a noun subject like this.",
      },
      translation: 'Chúng tôi đang tìm một nhà cung cấp có sản phẩm đạt tiêu chuẩn an toàn quốc tế với giá cạnh tranh.',
    },
    {
      sentence: 'The consultant ------- the board hired last month has proposed several ways to reduce operating costs.',
      options: ['whose', 'whom', 'which', 'what'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là chủ ngữ + động từ **the board hired**, và hired thiếu tân ngữ → đại từ làm tân ngữ chỉ người: **whom**. whose cần danh từ ngay sau; which dùng cho vật; what không đứng sau danh từ.',
        en: 'The blank is followed by subject + verb **the board hired**, and hired has no object → an object pronoun for a person: **whom**. whose needs a noun right after it; which is for things; what never follows a noun.',
      },
      translation: 'Vị chuyên gia tư vấn mà hội đồng quản trị thuê tháng trước đã đề xuất một số cách giảm chi phí vận hành.',
    },
    {
      sentence: "Ms. Patel is the manager ------- team won this year's award for outstanding customer service.",
      options: ["who's", 'who', 'whose', 'whom'],
      answer: 2,
      explanation: {
        vi: "Sau chỗ trống là danh từ **team** rồi đến động từ **won** → cần **whose** (= nhóm CỦA người quản lý đó). **who's** = who is: \"the manager who is team won\" vô nghĩa.",
        en: "The noun **team** follows the blank, then the verb **won** → **whose** (= the manager's team). **who's** = who is: \"the manager who is team won\" makes no sense.",
      },
      translation: 'Cô Patel là người quản lý có nhóm đạt giải dịch vụ khách hàng xuất sắc năm nay.',
    },
    {
      sentence: 'The technician ------- in charge of the safety inspection will arrive at the plant at 9 A.M.',
      options: ["who's", 'whose', 'whom', 'which'],
      answer: 0,
      explanation: {
        vi: "Mệnh đề cần một động từ trước cụm **in charge of**: **who's** = who is → \"người phụ trách\". whose phải đi kèm danh từ; whom không làm chủ ngữ; which không dùng cho người.",
        en: "The clause needs a verb before **in charge of**: **who's** = who is → \"the technician who is in charge\". whose needs a noun; whom cannot be a subject; which is not used for people.",
      },
      translation: 'Kỹ thuật viên phụ trách đợt kiểm tra an toàn sẽ đến nhà máy lúc 9 giờ sáng.',
    },
    {
      sentence: 'Most of the complaints ------- received last month concerned late deliveries to rural areas.',
      options: ['which', 'who', 'whose', 'we'],
      answer: 3,
      explanation: {
        vi: '**received** cần một chủ ngữ biết "nhận" khiếu nại: điền **we** → "the complaints (that) we received", đại từ quan hệ tân ngữ đã được lược. which received sẽ có nghĩa "khiếu nại nhận được thứ gì đó", sai nghĩa.',
        en: '**received** needs a subject that does the receiving: **we** → "the complaints (that) we received", with the object pronoun omitted. which received would mean the complaints received something, which makes no sense.',
      },
      translation: 'Phần lớn các khiếu nại chúng tôi nhận được tháng trước liên quan đến việc giao hàng trễ tới vùng nông thôn.',
    },
    {
      sentence: 'The accounting software ------- our IT department recommended is compatible with all of our office computers.',
      options: ['who', 'which', 'whom', 'whose'],
      answer: 1,
      explanation: {
        vi: 'Tiền ngữ **The accounting software** là vật; sau chỗ trống là **our IT department recommended** (chủ ngữ + động từ thiếu tân ngữ) → **which** làm tân ngữ. whom chỉ dùng cho người; whose cần danh từ ngay sau.',
        en: 'The antecedent **The accounting software** is a thing; **our IT department recommended** (subject + verb with no object) follows → **which** as the object. whom is for people; whose needs a noun right after it.',
      },
      translation: 'Phần mềm kế toán mà phòng IT đề xuất tương thích với tất cả máy tính trong văn phòng.',
    },
    {
      sentence: 'Our staff will relocate to an office tower ------- top floors offer clear views of the harbor.',
      options: ['which', 'whose', 'who', 'whom'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là danh từ **top floors** rồi đến động từ **offer** → **whose** (= các tầng trên CỦA tòa nhà). whose dùng được cho vật. which không đứng trước một danh từ làm chủ ngữ như vậy.',
        en: "The noun **top floors** follows the blank, then the verb **offer** → **whose** (= the tower's top floors). whose can refer to things. which cannot be followed by a noun subject like this.",
      },
      translation: 'Nhân viên của chúng tôi sẽ chuyển đến một tòa văn phòng có các tầng trên nhìn rõ ra bến cảng.',
    },
    {
      sentence: 'Companies ------- offer flexible working hours tend to attract a larger pool of qualified applicants.',
      options: ['that', 'whose', 'whom', 'what'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống là động từ **offer** → cần đại từ chủ ngữ: **that**. whose cần danh từ ngay sau; whom không làm chủ ngữ; what không đứng sau danh từ **Companies**.',
        en: 'The verb **offer** follows the blank → a subject pronoun is needed: **that**. whose needs a noun after it; whom cannot be a subject; what never follows a noun like **Companies**.',
      },
      translation: 'Những công ty cho phép giờ làm việc linh hoạt thường thu hút được nhiều ứng viên đủ năng lực hơn.',
    },
  ],
};
