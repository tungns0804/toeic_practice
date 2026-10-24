import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'relative-clauses-defining',
  intro: {
    vi: 'Bài này phân biệt **mệnh đề quan hệ xác định** (không dấu phẩy) và **không xác định** (có dấu phẩy), rồi đi qua các cấu trúc trang trọng hay ra đề: which thay cả mệnh đề, giới từ + whom/which, most of whom / some of which, và cách chia động từ trong mệnh đề quan hệ. Trong Part 5 và Part 6, chỉ một dấu phẩy trước chỗ trống cũng đủ loại ngay lựa chọn that.',
    en: 'This lesson separates **defining** relative clauses (no commas) from **non-defining** ones (with commas), then covers the formal patterns the test loves: which referring to a whole clause, preposition + whom/which, most of whom / some of which, and verb agreement inside the relative clause. In Part 5 and Part 6, a single comma before the blank is enough to rule out that.',
  },
  mistakes: [
    {
      wrong: 'Our CEO, [[that]] founded the company in 1998, will speak at the opening ceremony.',
      right: 'Our CEO, [[who]] founded the company in 1998, will speak at the opening ceremony.',
      explanation: {
        vi: 'Mệnh đề nằm giữa hai dấu phẩy là mệnh đề không xác định, và **that** không bao giờ đứng sau dấu phẩy. Tiền ngữ là người → **who**.',
        en: 'A clause between commas is non-defining, and **that** never follows a comma. The antecedent is a person → **who**.',
      },
    },
    {
      wrong: 'The hotel has a rooftop pool, [[that]] is open until 10 P.M.',
      right: 'The hotel has a rooftop pool, [[which]] is open until 10 P.M.',
      explanation: {
        vi: 'Sau dấu phẩy, với tiền ngữ chỉ vật, chỉ dùng **which**. Mệnh đề này chỉ bổ sung thông tin về hồ bơi, không dùng để xác định hồ bơi nào.',
        en: 'After a comma, with a thing antecedent, only **which** is possible. The clause just adds information about the pool; it does not identify which pool.',
      },
    },
    {
      wrong: 'The director to [[who]] I sent the proposal has not replied yet.',
      right: 'The director to [[whom]] I sent the proposal has not replied yet.',
      explanation: {
        vi: 'Ngay sau giới từ (**to**) phải dùng **whom** cho người, không dùng who hay that.',
        en: 'Directly after a preposition (**to**), use **whom** for people, never who or that.',
      },
    },
    {
      wrong: 'We interviewed fifteen candidates, most of [[them]] had experience in logistics.',
      right: 'We interviewed fifteen candidates, most of [[whom]] had experience in logistics.',
      explanation: {
        vi: 'Với **them**, câu có hai mệnh đề độc lập chỉ nối bằng dấu phẩy, sai ngữ pháp. **most of whom** biến vế sau thành mệnh đề quan hệ nên câu mới đúng.',
        en: 'With **them**, the sentence joins two independent clauses with only a comma, which is ungrammatical. **most of whom** turns the second part into a relative clause.',
      },
    },
    {
      wrong: 'The quarterly reports, which [[was]] submitted on Monday, contain several errors.',
      right: 'The quarterly reports, which [[were]] submitted on Monday, contain several errors.',
      explanation: {
        vi: 'Động từ sau **which** chia theo tiền ngữ **The quarterly reports** (số nhiều) → **were**.',
        en: 'The verb after **which** agrees with its antecedent **The quarterly reports** (plural) → **were**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Xác định và không xác định: dấu phẩy đổi nghĩa', en: 'Defining vs. non-defining: commas change the meaning' },
      body: {
        vi: '**Mệnh đề xác định** cho biết ta đang nói về người/vật NÀO; bỏ nó đi thì câu mất thông tin cốt lõi, và nó không có dấu phẩy. **Mệnh đề không xác định** chỉ thêm thông tin phụ về một người/vật đã rõ; nó nằm giữa hai dấu phẩy (hoặc giữa dấu phẩy và dấu chấm), bỏ đi câu vẫn trọn nghĩa.',
        en: 'A **defining clause** tells us WHICH person or thing we mean; without it the sentence loses essential information, and it takes no commas. A **non-defining clause** just adds extra information about someone or something already clear; it sits between commas (or between a comma and the full stop), and the sentence is still complete without it.',
      },
      table: {
        head: [
          { vi: 'Đặc điểm', en: 'Feature' },
          { vi: 'Xác định', en: 'Defining' },
          { vi: 'Không xác định', en: 'Non-defining' },
        ],
        rows: [
          [{ vi: 'Dấu phẩy', en: 'Commas' }, { vi: 'Không có', en: 'None' }, { vi: 'Có', en: 'Yes' }],
          [{ vi: 'Dùng that', en: 'that allowed' }, { vi: 'Được', en: 'Yes' }, { vi: 'Không bao giờ', en: 'Never' }],
          [{ vi: 'Lược đại từ tân ngữ', en: 'Object pronoun omitted' }, { vi: 'Được', en: 'Yes' }, { vi: 'Không được', en: 'No' }],
          [{ vi: 'Tiền ngữ', en: 'Antecedent' }, { vi: 'Cần được xác định', en: 'Needs identifying' }, { vi: 'Đã rõ: tên riêng, người/vật duy nhất', en: 'Already clear: proper names, one-of-a-kind people or things' }],
        ],
      },
      examples: [
        {
          en: 'The employees **who worked overtime** received a bonus.',
          vi: 'Những nhân viên làm thêm giờ được thưởng. (chỉ một số nhân viên)',
        },
        {
          en: 'The employees, **who worked overtime**, received a bonus.',
          vi: 'Các nhân viên, những người đã làm thêm giờ, được thưởng. (tất cả nhân viên)',
        },
      ],
    },
    {
      heading: { vi: 'Quy tắc của mệnh đề không xác định', en: 'Rules for non-defining clauses' },
      points: [
        {
          vi: 'Chỉ dùng **who / whom / whose** (người) và **which / whose** (vật). Không dùng **that**.',
          en: 'Use only **who / whom / whose** (people) and **which / whose** (things). Never **that**.',
        },
        {
          vi: 'Không được lược đại từ quan hệ, kể cả khi nó làm tân ngữ.',
          en: 'The relative pronoun can not be left out, even when it is an object.',
        },
        {
          vi: 'Tiền ngữ là tên riêng (Mr. Sato, the Lexington Hotel), người/vật vốn chỉ có một (our CEO, the company headquarters) → gần như luôn là mệnh đề không xác định.',
          en: 'An antecedent that is a proper name (Mr. Sato, the Lexington Hotel), a person or thing there is only one of (our CEO, the company headquarters) → almost always a non-defining clause.',
        },
      ],
      examples: [
        {
          en: 'The Lexington Hotel, **which** opened in 1925, has been fully renovated.',
          vi: 'Khách sạn Lexington, khai trương năm 1925, đã được cải tạo toàn bộ.',
        },
        {
          en: 'Ms. Okoro, **whom** many of you met at the trade fair, will lead the project.',
          vi: 'Cô Okoro, người mà nhiều bạn đã gặp ở hội chợ thương mại, sẽ dẫn dắt dự án.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Dấu phẩy + chỗ trống + động từ → loại **that** ngay lập tức. Đây là bẫy hay gặp nhất của bài này.',
          en: 'Comma + blank + verb → eliminate **that** immediately. This is the most common trap in this lesson.',
        },
      },
    },
    {
      heading: { vi: 'which thay cho cả mệnh đề phía trước', en: 'which referring to the whole previous clause' },
      body: {
        vi: 'Sau dấu phẩy, **which** có thể thay cho CẢ một sự việc vừa nêu chứ không chỉ một danh từ. Động từ theo sau chia số ít. Không dùng that, what hay it ở vị trí này; dùng it sẽ tạo ra hai mệnh đề độc lập nối bằng dấu phẩy.',
        en: 'After a comma, **which** can refer to the WHOLE situation just described, not just a noun. The verb after it is singular. that, what or it cannot fill this slot; using it would create two independent clauses joined by a comma.',
      },
      examples: [
        {
          en: 'The supplier lowered its prices, **which** helped us stay within budget.',
          vi: 'Nhà cung cấp đã giảm giá, điều này giúp chúng tôi không vượt ngân sách.',
        },
        {
          en: 'Several flights were canceled, **which** meant that the conference started late.',
          vi: 'Một số chuyến bay bị hủy, điều đó khiến hội nghị bắt đầu muộn.',
        },
      ],
    },
    {
      heading: { vi: 'Giới từ + whom / which', en: 'Preposition + whom / which' },
      body: {
        vi: 'Trong văn viết trang trọng, giới từ được đưa lên trước đại từ quan hệ: **to whom, with whom, for whom** (người); **in which, on which, by which** (vật). Sau giới từ KHÔNG dùng who, that hay đại từ bị lược. Cách nói thân mật là để giới từ ở cuối mệnh đề (the client we spoke to). Giới từ được chọn theo động từ hoặc danh từ trong mệnh đề: speak **to**, work **with**, be held **in**.',
        en: 'In formal writing, the preposition moves in front of the relative pronoun: **to whom, with whom, for whom** (people); **in which, on which, by which** (things). After a preposition you can NOT use who, that or an omitted pronoun. The informal option leaves the preposition at the end (the client we spoke to). The preposition is chosen by the verb or noun in the clause: speak **to**, work **with**, be held **in**.',
      },
      examples: [
        {
          en: 'The client **to whom** we sent the quote has accepted it.',
          vi: 'Khách hàng mà chúng tôi đã gửi báo giá đã chấp nhận nó.',
        },
        {
          en: 'The date **by which** all forms must be returned is March 15.',
          vi: 'Hạn chót phải nộp lại tất cả các mẫu đơn là ngày 15 tháng 3.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**in which / at which** chỉ nơi chốn và thời gian có thể thay bằng where / when; phần này học kỹ ở bài 12.3.',
          en: '**in which / at which** for places and times can be replaced by where / when; this is covered in detail in lesson 12.3.',
        },
      },
    },
    {
      heading: { vi: 'Lượng từ + of whom / of which', en: 'Quantifier + of whom / of which' },
      body: {
        vi: 'Sau dấu phẩy, một lượng từ + **of whom** (người) / **of which** (vật) mở đầu mệnh đề quan hệ không xác định. Nếu dùng **of them / of it**, câu thành hai mệnh đề độc lập chỉ nối bằng dấu phẩy, nên sai.',
        en: 'After a comma, a quantifier + **of whom** (people) / **of which** (things) opens a non-defining relative clause. Using **of them / of it** instead leaves two independent clauses joined by a comma, which is wrong.',
      },
      table: {
        head: [
          { vi: 'Lượng từ', en: 'Quantifier' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['all / most / some / many', 'forty guests, most of whom stayed for dinner'],
          ['none / neither / both / several', 'two offers, neither of which was acceptable'],
          ['one / each / half / two', 'three branches, one of which is in Lyon'],
          ['the + noun + of which', 'the new tower, the height of which is 300 meters'],
        ],
      },
      examples: [
        {
          en: 'The firm hired twenty interns, **several of whom** speak Japanese.',
          vi: 'Công ty tuyển hai mươi thực tập sinh, trong đó vài người nói được tiếng Nhật.',
        },
        {
          en: 'We tested five printers, **none of which** met our requirements.',
          vi: 'Chúng tôi đã thử năm máy in, không máy nào đáp ứng yêu cầu của chúng tôi.',
        },
      ],
    },
    {
      heading: { vi: 'Động từ trong mệnh đề quan hệ chia theo tiền ngữ', en: 'The verb in the clause agrees with the antecedent' },
      body: {
        vi: 'Khi who / which / that làm chủ ngữ, động từ theo sau chia theo **tiền ngữ** (danh từ mà đại từ thay thế), không theo danh từ nào khác gần đó. Riêng **which** thay cả mệnh đề thì động từ chia số ít. Bẫy "one of the … who" đã học ở bài 3.6.',
        en: 'When who / which / that is the subject, the verb after it agrees with the **antecedent** (the noun the pronoun stands for), not with some other nearby noun. When **which** refers to a whole clause, the verb is singular. The "one of the … who" trap was covered in lesson 3.6.',
      },
      examples: [
        {
          en: 'Customers who **purchase** a membership receive free delivery.',
          vi: 'Khách hàng mua thẻ thành viên được giao hàng miễn phí.',
        },
        {
          en: 'The manual for the machines, which **is** available online, explains every step.',
          vi: 'Sách hướng dẫn sử dụng máy, có sẵn trên mạng, giải thích từng bước.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Hỏi: "Cái gì / ai **is available online**?" → sách hướng dẫn (the manual), không phải các máy (the machines). Trả lời được câu này là chia đúng động từ.',
          en: 'Ask: "What **is available online**?" → the manual, not the machines. Answer that and the verb agrees correctly.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu mệnh đề quan hệ trong Part 5', en: 'Attacking these items in Part 5' },
      points: [
        {
          vi: 'Có dấu phẩy ngay trước chỗ trống → loại **that**; chọn who (người) hoặc which (vật, hoặc cả sự việc phía trước).',
          en: 'A comma right before the blank → drop **that**; choose who (people) or which (things, or the whole previous situation).',
        },
        {
          vi: 'Có giới từ ngay trước chỗ trống → chỉ còn **whom** (người) hoặc **which** (vật).',
          en: 'A preposition right before the blank → only **whom** (people) or **which** (things) remain.',
        },
        {
          vi: 'Dấu phẩy + most of / some of / none of + chỗ trống → **whom / which**, không phải them / it.',
          en: 'Comma + most of / some of / none of + blank → **whom / which**, not them / it.',
        },
        {
          vi: 'Chỗ trống là động từ sau who / which / that → tìm tiền ngữ rồi chia số ít/số nhiều theo nó.',
          en: 'The blank is a verb after who / which / that → find the antecedent and make the verb agree with it.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Our main distribution center, ------- is located near the port, will be expanded next spring.',
      options: ['that', 'which', 'who', 'where'],
      answer: 1,
      explanation: {
        vi: 'Có **dấu phẩy** trước chỗ trống → mệnh đề không xác định, loại that. Tiền ngữ là vật và sau chỗ trống là động từ **is located** → **which**. where không làm chủ ngữ được.',
        en: 'A **comma** precedes the blank → a non-defining clause, so that is out. The antecedent is a thing and the verb **is located** follows → **which**. where cannot be a subject.',
      },
      translation: 'Trung tâm phân phối chính của chúng tôi, nằm gần cảng, sẽ được mở rộng vào mùa xuân tới.',
    },
    {
      sentence: 'Mr. Sato, ------- has led the product design team since 2019, will retire at the end of the year.',
      options: ['that', 'which', 'who', 'whom'],
      answer: 2,
      explanation: {
        vi: 'Tên riêng **Mr. Sato** + **dấu phẩy** → mệnh đề không xác định, không dùng that. Tiền ngữ là người, sau chỗ trống là động từ **has led** → **who**. whom không làm chủ ngữ.',
        en: 'The proper name **Mr. Sato** + a **comma** → a non-defining clause, so no that. A person antecedent followed by the verb **has led** → **who**. whom cannot be a subject.',
      },
      translation: 'Ông Sato, người dẫn dắt nhóm thiết kế sản phẩm từ năm 2019, sẽ nghỉ hưu vào cuối năm nay.',
    },
    {
      sentence: 'The shipment arrived three days early, ------- allowed us to restock the shelves before the holiday sale.',
      options: ['that', 'what', 'it', 'which'],
      answer: 3,
      explanation: {
        vi: 'Chỗ trống thay cho **cả sự việc** "lô hàng đến sớm ba ngày" → **which** sau dấu phẩy. it tạo hai mệnh đề độc lập chỉ nối bằng dấu phẩy; that không đứng sau dấu phẩy.',
        en: 'The blank refers to the **whole situation** "the shipment arrived early" → **which** after a comma. it would join two independent clauses with only a comma; that never follows a comma.',
      },
      translation: 'Lô hàng đến sớm ba ngày, nhờ vậy chúng tôi kịp bổ sung hàng lên kệ trước đợt giảm giá dịp lễ.',
    },
    {
      sentence: 'The client to ------- the revised invoice was sent has requested a detailed breakdown of the charges.',
      options: ['who', 'whom', 'that', 'which'],
      answer: 1,
      explanation: {
        vi: 'Ngay trước chỗ trống là giới từ **to**, tiền ngữ **The client** là người → **whom**. Sau giới từ không dùng who hay that; which chỉ dùng cho vật.',
        en: 'The preposition **to** comes right before the blank, and the antecedent **The client** is a person → **whom**. who and that cannot follow a preposition; which is for things.',
      },
      translation: 'Khách hàng được gửi hoá đơn đã sửa đổi đã yêu cầu bảng kê chi tiết các khoản phí.',
    },
    {
      sentence: 'The conference room in ------- the training sessions will be held can seat up to forty people.',
      options: ['which', 'that', 'where', 'whom'],
      answer: 0,
      explanation: {
        vi: 'Sau giới từ **in** với tiền ngữ chỉ vật → **which** (be held in the room). that không đứng sau giới từ; "in where" sai vì where đã bao hàm giới từ; whom dùng cho người.',
        en: 'After the preposition **in** with a thing antecedent → **which** (be held in the room). that cannot follow a preposition; "in where" is wrong because where already contains the preposition; whom is for people.',
      },
      translation: 'Phòng hội nghị nơi tổ chức các buổi đào tạo có sức chứa tới bốn mươi người.',
    },
    {
      sentence: 'The agency hired twelve new interns, most of ------- graduated from universities in the region.',
      options: ['whom', 'them', 'which', 'who'],
      answer: 0,
      explanation: {
        vi: '**most of** + đại từ quan hệ chỉ người → **whom**. most of them tạo hai mệnh đề độc lập nối bằng dấu phẩy; sau giới từ of không dùng who; which dùng cho vật.',
        en: '**most of** + a relative pronoun for people → **whom**. most of them would join two independent clauses with a comma; who cannot follow the preposition of; which is for things.',
      },
      translation: 'Công ty đã tuyển mười hai thực tập sinh mới, phần lớn trong số họ tốt nghiệp từ các trường đại học trong vùng.',
    },
    {
      sentence: 'We received more than 200 applications for the position, some of ------- came from overseas candidates.',
      options: ['which', 'whom', 'them', 'that'],
      answer: 0,
      explanation: {
        vi: 'Tiền ngữ **applications** là vật, sau **some of** → **which**. them tạo hai mệnh đề độc lập nối bằng dấu phẩy; whom dùng cho người; that không đứng sau giới từ.',
        en: 'The antecedent **applications** is a thing, after **some of** → **which**. them would join two independent clauses with a comma; whom is for people; that cannot follow a preposition.',
      },
      translation: 'Chúng tôi nhận được hơn 200 hồ sơ cho vị trí này, một số trong đó đến từ các ứng viên nước ngoài.',
    },
    {
      sentence: 'The new laser printers, which ------- twice as fast as our old models, were delivered on Monday.',
      options: ['prints', 'print', 'printing', 'to print'],
      answer: 1,
      explanation: {
        vi: '**which** thay cho tiền ngữ **The new laser printers** (số nhiều) → động từ số nhiều **print**. prints là số ít; printing và to print không phải động từ chia được.',
        en: '**which** stands for the antecedent **The new laser printers** (plural) → the plural verb **print**. prints is singular; printing and to print are not finite verbs.',
      },
      translation: 'Những chiếc máy in laser mới, in nhanh gấp đôi các mẫu cũ của chúng tôi, đã được giao hôm thứ Hai.',
    },
    {
      sentence: 'Employees who ------- the workplace safety seminar must complete a short online quiz by Friday.',
      options: ['attends', 'attending', 'attend', 'has attended'],
      answer: 2,
      explanation: {
        vi: '**who** thay cho **Employees** (số nhiều) → động từ số nhiều **attend**. attends và has attended là số ít; attending không phải động từ chia được.',
        en: '**who** stands for **Employees** (plural) → the plural verb **attend**. attends and has attended are singular; attending is not a finite verb.',
      },
      translation: 'Những nhân viên tham dự hội thảo an toàn lao động phải hoàn thành một bài kiểm tra trực tuyến ngắn trước thứ Sáu.',
    },
    {
      sentence: 'The quarterly sales figures, ------- of which were higher than forecast, will be presented at the board meeting.',
      options: ['every', 'much', 'each', 'all'],
      answer: 3,
      explanation: {
        vi: '**all of which** + động từ số nhiều **were** hợp với **figures** (số nhiều). every không đi với of; much dùng cho danh từ không đếm được; each of which đi với động từ số ít (was).',
        en: '**all of which** + the plural verb **were** fits the plural **figures**. every cannot be followed by of; much is for uncountable nouns; each of which takes a singular verb (was).',
      },
      translation: 'Số liệu doanh thu quý, tất cả đều cao hơn dự báo, sẽ được trình bày tại cuộc họp hội đồng quản trị.',
    },
  ],
};
