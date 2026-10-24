import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'participle-adjectives',
  intro: {
    vi: 'Phân từ **V-ing** và **V3/-ed** có thể làm tính từ, và Part 5 rất hay cho bốn lựa chọn kiểu interesting / interested / interest / interestingly. Bài này dạy cách chọn đúng dựa vào nghĩa **chủ động** hay **bị động**, cùng những cụm phân từ + danh từ quen thuộc trong thư từ công việc.',
    en: 'The participles **V-ing** and **V3/-ed** can work as adjectives, and Part 5 often offers four options like interesting / interested / interest / interestingly. This lesson shows how to choose by **active** versus **passive** meaning, plus the participle + noun combinations that fill business correspondence.',
  },
  mistakes: [
    {
      wrong: 'Many employees were [[interesting]] in the new flexible-hours policy.',
      right: 'Many employees were [[interested]] in the new flexible-hours policy.',
      explanation: {
        vi: 'Nhân viên là người **cảm thấy** quan tâm, nên dùng **interested**. **interesting** nghĩa là "gây hứng thú", dùng cho vật hoặc người khiến người khác quan tâm.',
        en: 'The employees are the ones who **feel** the interest, so **interested** is correct. **interesting** means "causing interest" and describes whatever produces that feeling.',
      },
    },
    {
      wrong: 'The results of the customer survey were quite [[disappointed]].',
      right: 'The results of the customer survey were quite [[disappointing]].',
      explanation: {
        vi: 'Kết quả khảo sát không thể "cảm thấy thất vọng"; nó **gây ra** sự thất vọng → **disappointing**.',
        en: 'Survey results cannot feel disappointment; they **cause** it → **disappointing**.',
      },
    },
    {
      wrong: "Please review the [[attaching]] file before Thursday's meeting.",
      right: "Please review the [[attached]] file before Thursday's meeting.",
      explanation: {
        vi: 'Tập tin **được** đính kèm (bị động) → **attached**. Tập tin không tự đi "đính kèm" thứ khác.',
        en: 'The file **has been** attached (passive) → **attached**. The file is not attaching anything itself.',
      },
    },
    {
      wrong: 'We are looking for an [[experiencing]] accountant to join our finance team.',
      right: 'We are looking for an [[experienced]] accountant to join our finance team.',
      explanation: {
        vi: '"Có kinh nghiệm" là **experienced**, một tính từ dạng V3 cố định. Không có tính từ **experiencing** với nghĩa này.',
        en: '"Having experience" is **experienced**, a fixed V3-form adjective. **experiencing** is not used as an adjective with this meaning.',
      },
    },
    {
      wrong: 'The [[remained]] tickets will be sold at the door on the night of the concert.',
      right: 'The [[remaining]] tickets will be sold at the door on the night of the concert.',
      explanation: {
        vi: '**remain** là nội động từ (không có tân ngữ) nên không có nghĩa bị động; vé "còn lại" là vé tự nó còn → **remaining**.',
        en: '**remain** is intransitive (it takes no object), so it has no passive meaning; tickets that are left are **remaining** tickets.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quy tắc gốc: chủ động hay bị động', en: 'The core rule: active or passive' },
      body: {
        vi: 'Hỏi: danh từ được bổ nghĩa **tự làm** hành động hay **chịu** hành động? Tự làm → **V-ing** (nghĩa chủ động). Chịu tác động, đã được làm → **V3/-ed** (nghĩa bị động hoặc trạng thái đã hoàn tất).',
        en: 'Ask: does the noun being described **do** the action or **receive** it? If it does it → **V-ing** (active meaning). If it receives it or has had it done → **V3/-ed** (passive or completed meaning).',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Hiểu là', en: 'Read as' },
        ],
        rows: [
          ['V-ing', 'a growing market', { vi: 'thị trường đang tự tăng trưởng', en: 'a market that is growing' }],
          ['V-ing', 'a promising candidate', { vi: 'ứng viên hứa hẹn (gây kỳ vọng)', en: 'a candidate who shows promise' }],
          ['V3/-ed', 'a signed contract', { vi: 'hợp đồng đã được ký', en: 'a contract that has been signed' }],
          ['V3/-ed', 'discounted prices', { vi: 'giá đã được giảm', en: 'prices that have been reduced' }],
        ],
      },
      examples: [
        {
          en: 'Demand for electric delivery vans is strong in this **growing** market.',
          vi: 'Nhu cầu xe tải giao hàng chạy điện rất mạnh trong thị trường đang phát triển này.',
        },
        {
          en: 'The **signed** contract must be returned to our legal department within five days.',
          vi: 'Hợp đồng đã ký phải được gửi lại cho phòng pháp chế của chúng tôi trong vòng năm ngày.',
        },
      ],
    },
    {
      heading: { vi: 'Tính từ chỉ cảm xúc: -ing gây ra, -ed cảm thấy', en: 'Emotion adjectives: -ing causes, -ed feels' },
      body: {
        vi: 'Với các động từ chỉ cảm xúc (interest, satisfy, confuse, disappoint…), **V-ing** mô tả thứ **gây ra** cảm xúc, còn **V3/-ed** mô tả người **cảm thấy** cảm xúc đó.',
        en: 'With emotion verbs (interest, satisfy, confuse, disappoint…), **V-ing** describes what **causes** the feeling, and **V3/-ed** describes the person who **feels** it.',
      },
      table: {
        head: [
          { vi: 'Gây ra cảm xúc (V-ing)', en: 'Causes the feeling (V-ing)' },
          { vi: 'Cảm thấy (V3/-ed) + giới từ hay đi kèm', en: 'Feels it (V3/-ed) + usual preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['interesting', 'interested in', { vi: 'thú vị / quan tâm', en: 'arousing interest / feeling interest' }],
          ['satisfying', 'satisfied with', { vi: 'làm hài lòng / hài lòng', en: 'giving satisfaction / feeling satisfaction' }],
          ['confusing', 'confused about / by', { vi: 'gây khó hiểu / bối rối', en: 'unclear / puzzled' }],
          ['disappointing', 'disappointed with / by / in', { vi: 'đáng thất vọng / thất vọng', en: 'causing disappointment / feeling it' }],
          ['exciting', 'excited about', { vi: 'gây hào hứng / hào hứng', en: 'thrilling / thrilled' }],
          ['surprising', 'surprised at / by', { vi: 'đáng ngạc nhiên / ngạc nhiên', en: 'unexpected / astonished' }],
          ['frustrating', 'frustrated with / by', { vi: 'gây bực bội / bực bội', en: 'annoying / annoyed' }],
          ['encouraging', 'encouraged by', { vi: 'đáng khích lệ / được khích lệ', en: 'hopeful / feeling hopeful' }],
          ['pleasing', 'pleased with', { vi: 'dễ chịu, làm vừa lòng / hài lòng', en: 'agreeable / glad' }],
          ['overwhelming', 'overwhelmed by', { vi: 'áp đảo / choáng ngợp', en: 'very great / swamped' }],
        ],
      },
      examples: [
        {
          en: 'Guests were **satisfied** with the room, but they found the check-in process **confusing**.',
          vi: 'Khách hài lòng với phòng, nhưng thấy thủ tục nhận phòng khó hiểu.',
        },
        {
          en: 'The response to our spring sale has been **encouraging**.',
          vi: 'Phản hồi đối với đợt giảm giá mùa xuân của chúng tôi rất đáng khích lệ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Người vẫn có thể đi với **-ing** khi họ **gây ra** cảm xúc: a **boring** speaker (diễn giả gây chán), an **inspiring** leader. Nhưng vật gần như không bao giờ đi với -ed cảm xúc: không nói "the report was bored".',
          en: 'A person can still take **-ing** when they **cause** the feeling: a **boring** speaker, an **inspiring** leader. But a thing almost never takes an emotion -ed: never "the report was bored".',
        },
      },
    },
    {
      heading: { vi: 'Phân từ V3 đứng trước danh từ hay gặp', en: 'Common V3 participles before nouns' },
      body: {
        vi: 'Trong email và văn bản TOEIC, các cụm sau xuất hiện liên tục. Tất cả đều mang nghĩa "đã được…" hoặc là tính từ cố định.',
        en: 'In TOEIC emails and documents, the following combinations appear constantly. All carry the meaning "has been…" or are fixed adjectives.',
      },
      table: {
        head: [
          { vi: 'Cụm từ', en: 'Phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['the attached file', { vi: 'tập tin đính kèm (được đính kèm)', en: 'the file that has been attached' }],
          ['the enclosed form', { vi: 'mẫu đơn gửi kèm (trong phong bì)', en: 'the form included in the envelope' }],
          ['the revised schedule', { vi: 'lịch trình đã được sửa đổi', en: 'the schedule that has been changed' }],
          ['a detailed report', { vi: 'báo cáo chi tiết', en: 'a report with many details' }],
          ['an experienced staff member', { vi: 'nhân viên có kinh nghiệm', en: 'a staff member with experience' }],
          ['a qualified applicant', { vi: 'ứng viên đủ tiêu chuẩn', en: 'an applicant who meets the requirements' }],
          ['the proposed budget', { vi: 'ngân sách được đề xuất', en: 'the budget that has been proposed' }],
          ['the required documents', { vi: 'giấy tờ bắt buộc', en: 'the documents that are required' }],
          ['a limited number', { vi: 'số lượng có hạn', en: 'a restricted number' }],
          ['the estimated cost', { vi: 'chi phí ước tính', en: 'the cost that has been estimated' }],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**experienced, detailed, qualified, skilled, dedicated** là tính từ cố định: chúng không thật sự mang nghĩa "bị làm gì", nhưng vẫn luôn ở dạng -ed. Đừng đổi sang -ing.',
          en: '**experienced, detailed, qualified, skilled, dedicated** are fixed adjectives: they do not really mean "having something done to them", yet they always take -ed. Do not switch them to -ing.',
        },
      },
    },
    {
      heading: { vi: 'Phân từ V-ing đứng trước danh từ hay gặp', en: 'Common V-ing participles before nouns' },
      body: {
        vi: 'Nhóm này mô tả thứ **đang tự diễn ra** hoặc **tự có đặc điểm** đó. Nhiều động từ ở đây là **nội động từ** (rise, remain, exist), nên không có dạng bị động để thay bằng V3; còn **leading** (dẫn đầu) mang nghĩa chủ động: công ty tự đứng đầu, không phải "bị dẫn dắt".',
        en: 'This group describes something that is **happening by itself** or **has that quality itself**. Many of these verbs are **intransitive** (rise, remain, exist), so there is no passive V3 to use instead; **leading** (foremost) is active too: the company is ahead, it is not "being led".',
      },
      table: {
        head: [
          { vi: 'Cụm từ', en: 'Phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['rising costs', { vi: 'chi phí đang tăng', en: 'costs that are going up' }],
          ['the remaining items', { vi: 'các mặt hàng còn lại', en: 'the items that are left' }],
          ['the existing system', { vi: 'hệ thống hiện có', en: 'the system that is already in place' }],
          ['a leading company', { vi: 'công ty hàng đầu', en: 'a company at the top of its field' }],
          ['increasing demand', { vi: 'nhu cầu ngày càng tăng', en: 'demand that keeps going up' }],
          ['the following steps', { vi: 'các bước sau đây', en: 'the steps that come next' }],
          ['the surrounding area', { vi: 'khu vực xung quanh', en: 'the area around something' }],
          ['the accompanying brochure', { vi: 'tờ giới thiệu đi kèm', en: 'the brochure that comes with something' }],
        ],
      },
      examples: [
        {
          en: 'The new module will be fully compatible with the **existing** payroll system.',
          vi: 'Phân hệ mới sẽ tương thích hoàn toàn với hệ thống tính lương hiện có.',
        },
        {
          en: '**Rising** shipping costs have forced several retailers to raise their prices.',
          vi: 'Chi phí vận chuyển tăng cao đã buộc nhiều nhà bán lẻ phải tăng giá.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không nói "risen costs", "remained items", "existed system", "a led company". Mẹo: động từ không có tân ngữ (nội động từ) gần như luôn dùng **V-ing** trước danh từ. Ngoại lệ là một số ít V3 chỉ trạng thái đã hoàn tất, như **retired** employees (nhân viên đã nghỉ hưu).',
          en: 'Never "risen costs", "remained items", "existed system" or "a led company". Tip: verbs that take no object (intransitive) almost always use **V-ing** before a noun. The exceptions are a few V3 forms showing a completed state, such as **retired** employees.',
        },
      },
    },
    {
      heading: { vi: 'Vị trí của tính từ phân từ', en: 'Where participial adjectives go' },
      points: [
        {
          vi: 'Trước danh từ: the **revised** schedule, a **confusing** policy.',
          en: 'Before a noun: the **revised** schedule, a **confusing** policy.',
        },
        {
          vi: 'Sau động từ nối (be, seem, become, remain, look): The manager seemed **pleased**.',
          en: 'After a linking verb (be, seem, become, remain, look): The manager seemed **pleased**.',
        },
        {
          vi: 'Làm bổ ngữ cho tân ngữ sau find/consider/keep: We found the seminar **useful** and the speaker **inspiring**.',
          en: 'As an object complement after find/consider/keep: We found the seminar **useful** and the speaker **inspiring**.',
        },
        {
          vi: 'Phân từ đi kèm cụm bổ sung của riêng nó (the report **submitted yesterday**) thì đứng SAU danh từ: đó là mệnh đề quan hệ rút gọn (bài 12.3).',
          en: 'A participle that carries its own phrase (the report **submitted yesterday**) goes AFTER the noun: that is a reduced relative clause (lesson 12.3).',
        },
      ],
      examples: [
        {
          en: 'Several board members considered the merger proposal **convincing**.',
          vi: 'Một số thành viên hội đồng quản trị thấy đề xuất sáp nhập có sức thuyết phục.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Tính từ của **impress** là **impressive** (gây ấn tượng) và **impressed** (bị ấn tượng); "impressing" gần như không dùng làm tính từ.',
          en: 'The adjectives of **impress** are **impressive** (causing admiration) and **impressed** (feeling it); "impressing" is hardly ever an adjective.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu V-ing / V-ed trong Part 5', en: 'Attacking V-ing / V-ed items in Part 5' },
      points: [
        {
          vi: 'Xác định danh từ mà chỗ trống bổ nghĩa: danh từ ngay sau chỗ trống, hoặc chủ ngữ nếu chỗ trống đứng sau be/seem.',
          en: 'Find the noun the blank describes: the noun right after the blank, or the subject if the blank follows be/seem.',
        },
        {
          vi: 'Cảm xúc: danh từ là NGƯỜI cảm thấy → -ed; là vật/sự việc gây ra → -ing. Giới từ **in/with/by/about** sau chỗ trống thường báo hiệu -ed.',
          en: 'Emotions: a PERSON who feels it → -ed; a thing or event that causes it → -ing. A preposition like **in/with/by/about** after the blank usually signals -ed.',
        },
        {
          vi: 'Không phải cảm xúc: danh từ tự làm → V-ing; được làm → V3. Động từ không có tân ngữ (rise, remain, exist) → V-ing.',
          en: 'Non-emotion verbs: the noun does it → V-ing; it has it done → V3. Verbs with no object (rise, remain, exist) → V-ing.',
        },
        {
          vi: 'Nhớ sẵn các cụm cố định (the attached file, an experienced staff member, a leading company) để chọn trong một giây.',
          en: 'Memorise the fixed combinations (the attached file, an experienced staff member, a leading company) so you can answer in a second.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Most customers who responded to the survey said they were ------- with the speed of our delivery service.',
      options: ['satisfy', 'satisfying', 'satisfied', 'satisfaction'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ **they** (khách hàng) là người **cảm thấy** hài lòng, và sau chỗ trống có **with** → **satisfied**. satisfying nghĩa là "làm người khác hài lòng", sai nghĩa.',
        en: 'The subject **they** (the customers) are the people who **feel** satisfaction, and **with** follows the blank → **satisfied**. satisfying means "giving satisfaction to others", which is the wrong meaning.',
      },
      translation: 'Hầu hết khách hàng trả lời khảo sát cho biết họ hài lòng với tốc độ giao hàng của chúng tôi.',
    },
    {
      sentence: 'The third-quarter sales figures were -------, so the board decided to postpone the opening of a new branch.',
      options: ['disappointing', 'disappointed', 'disappoint', 'disappointment'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ là **sales figures**, một sự vật không thể cảm thấy gì, nó **gây ra** thất vọng → **disappointing**. disappointed chỉ dùng cho người cảm thấy thất vọng.',
        en: 'The subject is **sales figures**, a thing that cannot feel anything; it **causes** disappointment → **disappointing**. disappointed is only for people who feel disappointed.',
      },
      translation: 'Số liệu bán hàng quý ba đáng thất vọng, nên hội đồng quản trị quyết định hoãn việc mở chi nhánh mới.',
    },
    {
      sentence: 'Please complete the ------- form and return it to the human resources office by Friday afternoon.',
      options: ['enclose', 'encloses', 'enclosing', 'enclosed'],
      answer: 3,
      explanation: {
        vi: 'Mẫu đơn **được gửi kèm** (bị động), và chỗ trống đứng trước danh từ **form** → **enclosed**. enclosing sẽ có nghĩa mẫu đơn tự "gửi kèm" thứ khác, vô lý.',
        en: 'The form **has been enclosed** (passive), and the blank sits before the noun **form** → **enclosed**. enclosing would mean the form itself encloses something, which makes no sense.',
      },
      translation: 'Vui lòng điền vào mẫu đơn gửi kèm và nộp lại cho phòng nhân sự trước chiều thứ Sáu.',
    },
    {
      sentence: 'Because of ------- fuel costs, the airline will add a small surcharge to all international tickets.',
      options: ['risen', 'rising', 'rose', 'rise'],
      answer: 1,
      explanation: {
        vi: '**rise** là nội động từ: chi phí **tự tăng**, không "bị tăng" → dùng V-ing **rising** trước danh từ **fuel costs**. risen không dùng làm tính từ đứng trước danh từ theo cách này.',
        en: '**rise** is intransitive: costs **go up by themselves**; nothing "rises" them → the V-ing form **rising** before **fuel costs**. risen is not used as a prenominal adjective this way.',
      },
      translation: 'Do chi phí nhiên liệu tăng cao, hãng hàng không sẽ cộng thêm một khoản phụ phí nhỏ vào tất cả vé quốc tế.',
    },
    {
      sentence: 'Ms. Okafor is an ------- project manager who has led construction teams on three continents.',
      options: ['experience', 'experiencing', 'experienced', 'experiences'],
      answer: 2,
      explanation: {
        vi: 'Giữa **an** và cụm danh từ **project manager** cần tính từ "có kinh nghiệm" → **experienced**, tính từ dạng -ed cố định. experiencing không mang nghĩa này.',
        en: 'Between **an** and **project manager** we need the adjective meaning "having experience" → **experienced**, a fixed -ed adjective. experiencing does not carry this meaning.',
      },
      translation: 'Cô Okafor là một quản lý dự án giàu kinh nghiệm, từng dẫn dắt các đội xây dựng ở ba châu lục.',
    },
    {
      sentence: 'All ------- items from the summer collection will be sold at half price starting next Monday.',
      options: ['remaining', 'remained', 'remain', 'remains'],
      answer: 0,
      explanation: {
        vi: 'Mặt hàng **còn lại** là mặt hàng tự còn; **remain** là nội động từ nên không có dạng bị động → **remaining**. remained không đứng trước danh từ làm tính từ.',
        en: 'Items that are **left** remain by themselves; **remain** is intransitive and has no passive → **remaining**. remained cannot act as an adjective before a noun.',
      },
      translation: 'Tất cả các mặt hàng còn lại của bộ sưu tập mùa hè sẽ được bán nửa giá bắt đầu từ thứ Hai tới.',
    },
    {
      sentence: 'The marketing director was ------- by the creative proposals that the summer interns presented.',
      options: ['impressive', 'impressing', 'impression', 'impressed'],
      answer: 3,
      explanation: {
        vi: 'Giám đốc là người **cảm thấy** ấn tượng, và có **by** chỉ tác nhân phía sau → **impressed**. impressive nghĩa là "gây ấn tượng" và không đi với by.',
        en: 'The director is the person who **feels** impressed, and **by** introduces the cause → **impressed**. impressive means "causing admiration" and does not take by.',
      },
      translation: 'Giám đốc marketing rất ấn tượng với những đề xuất sáng tạo mà các thực tập sinh mùa hè trình bày.',
    },
    {
      sentence: 'Hallam Energy has become a ------- supplier of solar panels to commercial buildings in Southeast Asia.',
      options: ['leader', 'leading', 'led', 'leads'],
      answer: 1,
      explanation: {
        vi: 'Giữa **a** và danh từ **supplier** cần tính từ; "hàng đầu" là **leading** (công ty tự dẫn đầu). led mang nghĩa "được dẫn dắt", sai nghĩa; leader là danh từ.',
        en: 'Between **a** and the noun **supplier** we need an adjective; "top, foremost" is **leading** (the company itself leads). led would mean "being guided", the wrong sense; leader is a noun.',
      },
      translation: 'Hallam Energy đã trở thành nhà cung cấp tấm pin mặt trời hàng đầu cho các tòa nhà thương mại ở Đông Nam Á.',
    },
    {
      sentence: 'Participants found the two-day workshop on contract negotiation extremely -------.',
      options: ['motivate', 'motivated', 'motivating', 'motivation'],
      answer: 2,
      explanation: {
        vi: 'Sau **found + tân ngữ (the workshop)** cần tính từ mô tả buổi hội thảo. Hội thảo **tạo ra** động lực → **motivating**. motivated dùng cho người cảm thấy có động lực.',
        en: 'After **found + object (the workshop)** we need an adjective describing the workshop. The workshop **produces** motivation → **motivating**. motivated describes people who feel it.',
      },
      translation: 'Những người tham gia thấy buổi hội thảo hai ngày về đàm phán hợp đồng giúp họ có thêm rất nhiều động lực.',
    },
    {
      sentence: 'The ------- schedule for the trade fair will be posted on our Web site by tomorrow morning.',
      options: ['revise', 'revised', 'revising', 'revises'],
      answer: 1,
      explanation: {
        vi: 'Lịch trình **đã được sửa đổi** (bị động), và chỗ trống đứng trước danh từ **schedule** → **revised**. revising có nghĩa lịch trình tự đi sửa thứ khác, vô lý.',
        en: 'The schedule **has been changed** (passive), and the blank comes before the noun **schedule** → **revised**. revising would mean the schedule is revising something, which is illogical.',
      },
      translation: 'Lịch trình đã sửa đổi của hội chợ thương mại sẽ được đăng trên trang web của chúng tôi trước sáng mai.',
    },
  ],
};
