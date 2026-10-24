import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'sva-intervening',
  intro: {
    vi: 'Trong Part 5 và Part 6, đề hay chèn một cụm giới từ, một cụm along with/as well as, một mệnh đề quan hệ hay một cụm phân từ vào giữa chủ ngữ và động từ để dụ bạn chia động từ theo danh từ đứng gần nhất. Bài này dạy cách gạch bỏ phần chen giữa, tìm đúng **danh từ chính** và chia động từ theo nó.',
    en: 'In Parts 5 and 6, the test often puts a prepositional phrase, an along with/as well as phrase, a relative clause or a participle phrase between the subject and its verb, hoping you will match the verb to the nearest noun. This lesson shows you how to cross out what comes in between, find the **head noun** and make the verb agree with it.',
  },
  mistakes: [
    {
      wrong: 'The list of candidates for the sales positions [[are]] on your desk.',
      right: 'The list of candidates for the sales positions [[is]] on your desk.',
      explanation: {
        vi: 'Danh từ chính của chủ ngữ là **list** (số ít); **of candidates for the sales positions** chỉ là cụm giới từ bổ nghĩa, nên động từ phải là **is**.',
        en: 'The head noun of the subject is **list** (singular); **of candidates for the sales positions** is only a prepositional phrase modifying it, so the verb must be **is**.',
      },
    },
    {
      wrong: 'Our CFO, along with two external auditors, [[are]] reviewing the quarterly accounts.',
      right: 'Our CFO, along with two external auditors, [[is]] reviewing the quarterly accounts.',
      explanation: {
        vi: '**along with** không biến chủ ngữ thành số nhiều như **and**. Động từ hòa hợp với danh từ đứng TRƯỚC cụm này là **Our CFO** → **is**.',
        en: '**along with** does not make the subject plural the way **and** does. The verb agrees with the noun BEFORE the phrase, **Our CFO** → **is**.',
      },
    },
    {
      wrong: 'The report that the analysts prepared for the directors [[contain]] several errors.',
      right: 'The report that the analysts prepared for the directors [[contains]] several errors.',
      explanation: {
        vi: 'Mệnh đề quan hệ **that the analysts prepared for the directors** có động từ riêng (prepared). Động từ chính đứng sau mệnh đề này và hòa hợp với **The report** → **contains**.',
        en: 'The relative clause **that the analysts prepared for the directors** has its own verb (prepared). The main verb comes after the clause and agrees with **The report** → **contains**.',
      },
    },
    {
      wrong: 'The items shipped from our warehouse in Busan [[arrives]] within three business days.',
      right: 'The items shipped from our warehouse in Busan [[arrive]] within three business days.',
      explanation: {
        vi: '**shipped from our warehouse in Busan** là cụm phân từ (V3) bổ nghĩa cho **The items**, không phải động từ chính. Chủ ngữ số nhiều → **arrive**.',
        en: '**shipped from our warehouse in Busan** is a participle phrase (V3) modifying **The items**, not the main verb. The subject is plural → **arrive**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Nguyên tắc cốt lõi: động từ theo danh từ chính', en: 'The core rule: the verb follows the head noun' },
      body: {
        vi: 'Cụm chủ ngữ có thể rất dài, nhưng chỉ có một **danh từ chính** quyết định động từ chia số ít hay số nhiều. Mọi thứ chen vào giữa danh từ chính và động từ (cụm giới từ, cụm along with, mệnh đề quan hệ, cụm phân từ) chỉ là phần bổ nghĩa: hãy gạch bỏ chúng trước khi chia động từ.',
        en: 'A subject can be very long, but only one **head noun** decides whether the verb is singular or plural. Whatever comes between the head noun and the verb (a prepositional phrase, an along with phrase, a relative clause, a participle phrase) is only a modifier: cross it out before choosing the verb.',
      },
      table: {
        head: [
          { vi: 'Kiểu chen giữa', en: 'Type of interrupter' },
          { vi: 'Ví dụ (phần chen giữa trong ngoặc)', en: 'Example (interrupter in brackets)' },
          { vi: 'Danh từ chính → động từ', en: 'Head noun → verb' },
        ],
        rows: [
          [{ vi: 'Cụm giới từ', en: 'Prepositional phrase' }, 'The price (of the concert tickets) has gone up.', 'price → has'],
          [{ vi: 'Cụm along with, as well as…', en: 'along with, as well as… phrase' }, 'The CEO (as well as two directors) is attending the launch.', 'CEO → is'],
          [{ vi: 'Mệnh đề quan hệ', en: 'Relative clause' }, 'The vans (that the company leased) need servicing.', 'vans → need'],
          [{ vi: 'Cụm phân từ', en: 'Participle phrase' }, 'The forms (signed by the tenant) are in the file.', 'forms → are'],
        ],
      },
      examples: [
        {
          en: 'The **quality** of the samples from both suppliers **was** excellent.',
          vi: 'Chất lượng mẫu thử của cả hai nhà cung cấp đều rất tốt.',
        },
        {
          en: 'The **managers** at our Hanoi branch **meet** every Monday morning.',
          vi: 'Các quản lý tại chi nhánh Hà Nội của chúng tôi họp vào mỗi sáng thứ Hai.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy quen thuộc nhất: danh từ đứng sát chỗ trống thường được cố ý đặt khác số với danh từ chính. Đừng chia động từ theo danh từ "hàng xóm" của nó.',
          en: 'The classic trap: the noun right next to the blank is often deliberately different in number from the head noun. Never match the verb to its nearest neighbour.',
        },
      },
    },
    {
      heading: { vi: 'Cụm giới từ chen giữa', en: 'Intervening prepositional phrases' },
      body: {
        vi: 'Giới từ (of, in, on, for, from, with, near, at, about…) + danh từ luôn là phần bổ nghĩa. Danh từ đứng sau giới từ là **tân ngữ của giới từ**, không bao giờ là chủ ngữ của câu. Thường thì danh từ chính là danh từ đứng ngay TRƯỚC giới từ đầu tiên.',
        en: 'A preposition (of, in, on, for, from, with, near, at, about…) plus its noun is always a modifier. The noun after the preposition is the **object of the preposition**, never the subject of the sentence. The head noun is usually the noun right BEFORE the first preposition.',
      },
      examples: [
        {
          en: 'The **delivery** of the new desks **has** been postponed until Thursday.',
          vi: 'Việc giao những chiếc bàn làm việc mới đã bị hoãn đến thứ Năm.',
        },
        {
          en: "The **cabinets** in the manager's office **need** new locks.",
          vi: 'Những chiếc tủ trong phòng của quản lý cần được thay khóa mới.',
        },
        {
          en: 'The **applications** for the summer internship program **are** due on May 31.',
          vi: 'Hạn nộp hồ sơ ứng tuyển chương trình thực tập mùa hè là ngày 31 tháng 5.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Ngoại lệ: khi đứng trước of là một từ chỉ lượng (most, some, all, half, 30 percent, a number…), quy tắc trên không còn đúng nguyên vẹn. Nhóm này có quy tắc riêng ở bài 3.3.',
          en: 'Exception: when the word before of is a quantity word (most, some, all, half, 30 percent, a number…), the rule above no longer applies as it stands. This group has its own rules in lesson 3.3.',
        },
      },
    },
    {
      heading: { vi: 'Cụm along with, as well as, together with…', en: 'along with, as well as, together with…' },
      body: {
        vi: 'Các cụm dưới đây trông như đang "cộng thêm" người hoặc vật vào chủ ngữ, nhưng về ngữ pháp chúng chỉ là phần bổ sung và KHÔNG biến chủ ngữ thành số nhiều. Động từ hòa hợp với danh từ đứng TRƯỚC cụm. Cụm này thường (không bắt buộc) được tách ra bằng hai dấu phẩy.',
        en: 'The phrases below seem to "add" people or things to the subject, but grammatically they are only add-ons and do NOT make the subject plural. The verb agrees with the noun BEFORE the phrase. The phrase is usually (though not always) set off by a pair of commas.',
      },
      points: [
        {
          vi: 'Danh từ trước cụm là số ít → động từ số ít: The **director**, along with her assistants, **is**…',
          en: 'Singular noun before the phrase → singular verb: The **director**, along with her assistants, **is**…',
        },
        {
          vi: 'Danh từ trước cụm là số nhiều → động từ số nhiều, dù phía sau là gì: The **interns**, along with their mentor, **are**…',
          en: 'Plural noun before the phrase → plural verb, whatever follows: The **interns**, along with their mentor, **are**…',
        },
      ],
      table: {
        head: [
          { vi: 'Cụm từ', en: 'Phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['along with', { vi: 'cùng với', en: 'in company with' }, 'The director, along with her assistants, is in Tokyo this week.'],
          ['together with', { vi: 'cùng với', en: 'combined with' }, 'The invoice, together with two receipts, was sent to Accounting.'],
          ['as well as', { vi: 'cũng như, và cả', en: 'and also' }, 'The lobby, as well as the guest rooms, has been redecorated.'],
          ['in addition to', { vi: 'ngoài … ra còn có', en: 'besides' }, 'The ballroom, in addition to two smaller meeting rooms, is available for booking.'],
          ['accompanied by', { vi: 'có … đi cùng', en: 'escorted by' }, 'The CEO, accompanied by two advisers, is touring the plant.'],
          ['including', { vi: 'bao gồm cả', en: 'counting, containing' }, 'The shipment, including all spare parts, weighs 40 kilograms.'],
          ['rather than / not', { vi: 'chứ không phải', en: 'instead of' }, 'The supervisor, not the interns, makes the final decision.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Đối chiếu với **and**: The director **and** her assistants **are**… (chủ ngữ ghép → số nhiều, bài 3.4). Đổi and thành along with là động từ phải quay về số ít.',
          en: 'Compare **and**: The director **and** her assistants **are**… (a compound subject → plural, lesson 3.4). Change and to along with, and the verb goes back to singular.',
        },
      },
    },
    {
      heading: { vi: 'Mệnh đề quan hệ chen giữa', en: 'Relative clauses in between' },
      body: {
        vi: 'Mệnh đề quan hệ (who, which, that, whose…) đứng ngay sau danh từ chính để bổ nghĩa cho nó. Mệnh đề này có động từ RIÊNG, nhiều khi có cả chủ ngữ riêng. Động từ chính của câu chỉ xuất hiện sau khi mệnh đề kết thúc, và vẫn hòa hợp với danh từ chính ở đầu câu.',
        en: 'A relative clause (who, which, that, whose…) comes right after the head noun to modify it. The clause has its OWN verb, and often its own subject too. The main verb of the sentence appears only after the clause ends, and it still agrees with the head noun at the start.',
      },
      points: [
        {
          vi: 'Danh từ nằm trong mệnh đề quan hệ (chủ ngữ hay tân ngữ của mệnh đề) không ảnh hưởng đến động từ chính.',
          en: 'Nouns inside the relative clause (its subject or object) have no effect on the main verb.',
        },
        {
          vi: 'Mẹo: khi mệnh đề quan hệ đứng ngay sau chủ ngữ, động từ chia thì đầu tiên thường thuộc mệnh đề; động từ chính đứng sau nó.',
          en: 'Tip: when a relative clause directly follows the subject, the first finite verb usually belongs to the clause; the main verb comes after it.',
        },
        {
          vi: 'Động từ BÊN TRONG mệnh đề mà who/which/that làm chủ ngữ thì hòa hợp với danh từ được bổ nghĩa; phần này học ở bài 3.6.',
          en: 'The verb INSIDE a clause where who/which/that is the subject agrees with the noun being modified; that is covered in lesson 3.6.',
        },
      ],
      examples: [
        {
          en: 'The **contractor** whose bid we accepted **has** already started work on the warehouse.',
          vi: 'Nhà thầu có hồ sơ dự thầu được chúng tôi chấp nhận đã bắt đầu thi công nhà kho.',
        },
        {
          en: 'The **employees** who completed the safety course last month **are** eligible for the new bonus.',
          vi: 'Những nhân viên đã hoàn thành khóa học an toàn vào tháng trước đủ điều kiện nhận khoản thưởng mới.',
        },
        {
          en: 'The **office** that the accountants **share** with the legal team **is** on the fifth floor.',
          vi: 'Văn phòng mà các kế toán viên dùng chung với nhóm pháp chế nằm ở tầng năm.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong ví dụ cuối, **share** chia theo the accountants (chủ ngữ riêng của mệnh đề), còn **is** chia theo The office (chủ ngữ của cả câu): mỗi động từ hòa hợp với chủ ngữ của chính nó.',
          en: 'In the last example, **share** agrees with the accountants (the subject of the clause), while **is** agrees with The office (the subject of the sentence): each verb agrees with its own subject.',
        },
      },
    },
    {
      heading: { vi: 'Cụm phân từ chen giữa', en: 'Participle phrases in between' },
      body: {
        vi: 'Cụm phân từ là mệnh đề quan hệ đã rút gọn: **V-ing** mang nghĩa chủ động, **V3/quá khứ phân từ** mang nghĩa bị động. Chúng chỉ bổ nghĩa cho danh từ chính, nên động từ chính vẫn chia theo danh từ đó.',
        en: 'A participle phrase is a reduced relative clause: **V-ing** has an active meaning, and the **past participle (V3)** has a passive meaning. It only modifies the head noun, so the main verb still agrees with that noun.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Mệnh đề đầy đủ', en: 'Full clause' },
          { vi: 'Cụm rút gọn', en: 'Reduced phrase' },
        ],
        rows: [
          [{ vi: 'V-ing (nghĩa chủ động)', en: 'V-ing (active meaning)' }, 'The guide that explains the refund rules is…', 'The guide explaining the refund rules is…'],
          [{ vi: 'V3 (nghĩa bị động)', en: 'V3 (passive meaning)' }, 'The parcels that were delivered today are…', 'The parcels delivered today are…'],
        ],
      },
      examples: [
        {
          en: 'The **packages** delivered to the front desk this morning **belong** to the design team.',
          vi: 'Các kiện hàng được giao đến quầy lễ tân sáng nay là của nhóm thiết kế.',
        },
        {
          en: 'The new **policy** covering business travel expenses **applies** to all full-time employees.',
          vi: 'Chính sách mới về chi phí đi công tác áp dụng cho toàn bộ nhân viên toàn thời gian.',
        },
        {
          en: 'The **guests** staying in the presidential suite **have** access to a private lounge.',
          vi: 'Các vị khách ở phòng tổng thống được sử dụng một phòng chờ riêng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng nhầm V3 của cụm phân từ với động từ chính. Trong câu "The forms submitted after the deadline are not accepted", **submitted** chỉ bổ nghĩa cho forms, động từ chính là **are**. Gặp V-ing hay V3 ngay sau danh từ, hãy hỏi: câu đã có động từ chia thì chưa? Nếu chưa, chỗ trống chính là động từ chính.',
          en: 'Do not mistake the V3 of a participle phrase for the main verb. In "The forms submitted after the deadline are not accepted", **submitted** only modifies forms; the main verb is **are**. When you see a V-ing or V3 right after a noun, ask: does the sentence already have a finite verb? If not, the blank is the main verb.',
        },
      },
    },
    {
      heading: { vi: 'Chủ ngữ dài nhiều tầng', en: 'Long, multi-layered subjects' },
      body: {
        vi: 'Đề TOEIC hay xếp chồng nhiều lớp bổ nghĩa: cụm giới từ nối tiếp cụm giới từ, thêm một cụm phân từ hay một cụm to V, thậm chí một đồng vị ngữ đặt giữa hai dấu phẩy. Cách xử lý luôn giống nhau: đóng ngoặc từng lớp cho đến khi chỉ còn danh từ chính.',
        en: 'TOEIC sentences often stack several modifiers: one prepositional phrase after another, plus a participle phrase or a to-infinitive phrase, or even an appositive between commas. The method never changes: bracket each layer until only the head noun is left.',
      },
      points: [
        {
          vi: 'Bước 1: đóng ngoặc mọi cụm giới từ: (of…), (in…), (for…).',
          en: 'Step 1: bracket every prepositional phrase: (of…), (in…), (for…).',
        },
        {
          vi: 'Bước 2: đóng ngoặc cụm along with/as well as…, mệnh đề quan hệ, cụm phân từ, cụm to V và đồng vị ngữ giữa hai dấu phẩy.',
          en: 'Step 2: bracket any along with/as well as… phrase, relative clause, participle phrase, to-infinitive phrase and appositive between commas.',
        },
        {
          vi: 'Bước 3: phần còn lại ngoài ngoặc là danh từ chính + chỗ trống; chia động từ theo danh từ đó.',
          en: 'Step 3: what is left outside the brackets is the head noun + the blank; make the verb agree with that noun.',
        },
      ],
      examples: [
        {
          en: 'The **results** of the survey of hotel guests in our three resorts **suggest** that breakfast hours should be extended.',
          vi: 'Kết quả cuộc khảo sát khách lưu trú tại ba khu nghỉ dưỡng của chúng tôi cho thấy nên kéo dài giờ phục vụ bữa sáng.',
        },
        {
          en: 'The **decision** to close two of our regional branches **was** announced on Monday.',
          vi: 'Quyết định đóng cửa hai chi nhánh khu vực của chúng tôi đã được công bố vào thứ Hai.',
        },
        {
          en: '**Mr. Okafor**, the head of our logistics and customer service divisions, **is** retiring in June.',
          vi: 'Ông Okafor, trưởng bộ phận hậu cần và bộ phận dịch vụ khách hàng, sẽ nghỉ hưu vào tháng Sáu.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Danh từ chính thường là danh từ CUỐI CÙNG của cụm danh từ mở đầu câu, trước khi gặp giới từ, dấu phẩy, who/which/that hay một V-ing/V3. Ví dụ: The sales **figures** for May → danh từ chính là **figures**, không phải sales.',
          en: 'The head noun is usually the LAST noun of the opening noun phrase, before you reach a preposition, a comma, who/which/that, or a V-ing/V3. For example: The sales **figures** for May → the head noun is **figures**, not sales.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chủ ngữ bị ngăn cách trong Part 5', en: 'Attacking separated-subject items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các dạng của cùng một động từ (có/không có -s, is/are, has/have, V-ing, to V) → đây là câu hòa hợp chủ ngữ – động từ.',
          en: 'The four options are forms of one verb (with or without -s, is/are, has/have, V-ing, to V) → it is a subject-verb agreement item.',
        },
        {
          vi: 'Kiểm tra câu đã có động từ chính chưa. Nếu chưa, loại ngay V-ing và to V vì chúng không làm động từ chính được.',
          en: 'Check whether the sentence already has a main verb. If not, eliminate V-ing and to V at once, since they cannot be the main verb.',
        },
        {
          vi: 'Tìm danh từ chính: gạch bỏ cụm giới từ, cụm along with/as well as…, mệnh đề quan hệ và cụm phân từ chen giữa.',
          en: 'Find the head noun: cross out any prepositional phrase, along with/as well as… phrase, relative clause or participle phrase in between.',
        },
        {
          vi: 'Chọn dạng số ít/số nhiều khớp với danh từ chính, rồi soát lại dấu hiệu thời gian (last year, next week, since…) để chọn đúng thì.',
          en: 'Pick the singular or plural form that matches the head noun, then check any time markers (last year, next week, since…) to choose the right tense.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Có khi đề hỏi ngược lại: động từ đã cho sẵn, chỗ trống là từ nối giữa hai danh từ. Khi đó hãy nhìn động từ: danh từ thứ nhất số ít mà động từ là **is/has/V-s** thì phải chọn **as well as / along with / together with**, không chọn **and**.',
          en: 'Sometimes the item works the other way round: the verb is given and the blank is the connector between two nouns. Then look at the verb: if the first noun is singular and the verb is **is/has/V-s**, choose **as well as / along with / together with**, not **and**.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'The schedule of training sessions for new employees ------- posted on the company intranet every Monday.',
      options: ['is', 'are', 'being', 'to be'],
      answer: 0,
      explanation: {
        vi: 'Danh từ chính là **schedule** (số ít); **of training sessions for new employees** là cụm giới từ chen giữa → **is**. are là bẫy vì danh từ số nhiều employees đứng ngay trước chỗ trống; being và to be không làm động từ chính được.',
        en: 'The head noun is **schedule** (singular); **of training sessions for new employees** is an intervening prepositional phrase → **is**. are is the trap set by the plural noun employees right before the blank; being and to be cannot act as the main verb.',
      },
      translation: 'Lịch các buổi đào tạo dành cho nhân viên mới được đăng trên mạng nội bộ của công ty vào mỗi thứ Hai.',
    },
    {
      sentence: 'The boxes on the top shelf of the supply cabinet ------- spare toner cartridges for the copier.',
      options: ['contains', 'contain', 'containing', 'to contain'],
      answer: 1,
      explanation: {
        vi: 'Danh từ chính là **The boxes** (số nhiều); **on the top shelf of the supply cabinet** là hai cụm giới từ nối nhau. Chủ ngữ số nhiều → **contain**. contains sai vì chia theo cabinet, mà cabinet chỉ là tân ngữ của giới từ.',
        en: 'The head noun is **The boxes** (plural); **on the top shelf of the supply cabinet** is two prepositional phrases in a row. A plural subject takes **contain**. contains wrongly agrees with cabinet, which is only the object of a preposition.',
      },
      translation: 'Các thùng trên ngăn trên cùng của tủ văn phòng phẩm đựng hộp mực dự phòng cho máy photocopy.',
    },
    {
      sentence: 'Ms. Patel, along with three members of her sales team, ------- to Singapore next week for the trade fair.',
      options: ['are flying', 'were flying', 'is flying', 'flying'],
      answer: 2,
      explanation: {
        vi: '**along with** không làm chủ ngữ thành số nhiều, nên động từ theo **Ms. Patel** (số ít); **next week** cho biết đây là kế hoạch tương lai → **is flying**. are flying sai vì chia theo three members; were flying sai thì.',
        en: '**along with** does not make the subject plural, so the verb follows **Ms. Patel** (singular), and **next week** signals a future plan → **is flying**. are flying wrongly agrees with three members; were flying is the wrong tense.',
      },
      translation: 'Cô Patel cùng ba thành viên trong nhóm kinh doanh của mình sẽ bay sang Singapore vào tuần tới để dự hội chợ thương mại.',
    },
    {
      sentence: "The hotel's main restaurant, together with its two rooftop bars, ------- closed for renovations until March 15.",
      options: ['remain', 'remaining', 'to remain', 'remains'],
      answer: 3,
      explanation: {
        vi: 'Cụm **together with its two rooftop bars** nằm giữa hai dấu phẩy chỉ là phần bổ sung; danh từ chính là **restaurant** (số ít) → **remains**. remain là bẫy vì bars là số nhiều.',
        en: 'The phrase **together with its two rooftop bars**, set off by commas, is only an add-on; the head noun is **restaurant** (singular) → **remains**. remain is the trap because bars is plural.',
      },
      translation: 'Nhà hàng chính của khách sạn cùng hai quầy bar trên sân thượng vẫn đóng cửa để cải tạo cho đến ngày 15 tháng 3.',
    },
    {
      sentence: 'The new hires, accompanied by an HR coordinator, ------- a tour of the production facility on the first day of orientation.',
      options: ['take', 'takes', 'taking', 'to take'],
      answer: 0,
      explanation: {
        vi: 'Danh từ chính là **The new hires** (số nhiều); **accompanied by an HR coordinator** chỉ cho biết ai đi cùng. Chủ ngữ số nhiều → **take**. takes sai vì chia theo coordinator.',
        en: 'The head noun is **The new hires** (plural); **accompanied by an HR coordinator** only tells us who goes with them. A plural subject takes **take**. takes wrongly agrees with coordinator.',
      },
      translation: 'Vào ngày đầu tiên của chương trình định hướng, các nhân viên mới tham quan xưởng sản xuất cùng một điều phối viên nhân sự.',
    },
    {
      sentence: 'The marketing plan that the agency presented to our regional managers ------- a larger budget for online advertising.',
      options: ['require', 'requires', 'requiring', 'to require'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề quan hệ **that the agency presented to our regional managers** đã có động từ riêng (presented). Động từ chính hòa hợp với **The marketing plan** (số ít) → **requires**. require là bẫy vì managers đứng sát chỗ trống.',
        en: 'The relative clause **that the agency presented to our regional managers** already has its own verb (presented). The main verb agrees with **The marketing plan** (singular) → **requires**. require is the trap because managers sits right before the blank.',
      },
      translation: 'Kế hoạch marketing mà công ty quảng cáo trình bày với các quản lý khu vực của chúng tôi đòi hỏi ngân sách lớn hơn cho quảng cáo trực tuyến.',
    },
    {
      sentence: "Mr. Lindqvist ------- his two assistants is responsible for organizing the annual shareholders' meeting.",
      options: ['and', 'both', 'as well as', 'either'],
      answer: 2,
      explanation: {
        vi: 'Động từ **is** là số ít, nên chủ ngữ không thể là chủ ngữ ghép nối bằng **and** (khi đó phải dùng are). **as well as** chỉ thêm thông tin, chủ ngữ vẫn là **Mr. Lindqvist**, khớp với is. both và either phải đi thành cặp (both … and, either … or) nên không dùng được.',
        en: 'The verb **is** is singular, so the subject cannot be a compound joined by **and** (that would need are). **as well as** only adds information, leaving **Mr. Lindqvist** as the subject, which matches is. both and either must come in pairs (both … and, either … or), so they do not fit.',
      },
      translation: 'Ông Lindqvist cùng hai trợ lý của mình chịu trách nhiệm tổ chức cuộc họp cổ đông thường niên.',
    },
    {
      sentence: 'The documents attached to this e-mail ------- the full terms of the equipment rental agreement.',
      options: ['describes', 'describing', 'to describe', 'describe'],
      answer: 3,
      explanation: {
        vi: '**attached to this e-mail** là cụm phân từ (V3) bổ nghĩa cho **The documents**, không phải động từ chính. Câu còn thiếu động từ chính, chủ ngữ số nhiều → **describe**. describes là bẫy vì e-mail là số ít.',
        en: '**attached to this e-mail** is a participle phrase (V3) modifying **The documents**, not the main verb. The sentence still needs a main verb, and the subject is plural → **describe**. describes is the trap because e-mail is singular.',
      },
      translation: 'Các tài liệu đính kèm trong e-mail này trình bày đầy đủ các điều khoản của hợp đồng thuê thiết bị.',
    },
    {
      sentence: 'The new regulation affecting overseas shipments of electronic goods ------- effect on July 1.',
      options: ['takes', 'take', 'taking', 'to take'],
      answer: 0,
      explanation: {
        vi: '**affecting overseas shipments of electronic goods** là cụm V-ing bổ nghĩa cho **The new regulation** (số ít), nên động từ chính là **takes**. take sai vì chia theo shipments/goods; taking chỉ là V-ing, không làm động từ chính được.',
        en: '**affecting overseas shipments of electronic goods** is a V-ing phrase modifying **The new regulation** (singular), so the main verb is **takes**. take wrongly agrees with shipments/goods; taking is only a V-ing form and cannot be the main verb.',
      },
      translation: 'Quy định mới liên quan đến các lô hàng điện tử gửi ra nước ngoài có hiệu lực từ ngày 1 tháng 7.',
    },
    {
      sentence: 'The total cost of the repairs to the elevators in both buildings ------- higher than the property manager had estimated.',
      options: ['were', 'was', 'being', 'have been'],
      answer: 1,
      explanation: {
        vi: 'Gạch bỏ ba cụm giới từ **of the repairs / to the elevators / in both buildings**, danh từ chính còn lại là **cost** (số ít); **had estimated** cho thấy câu ở quá khứ → **was**. were là bẫy vì repairs, elevators và buildings đều là số nhiều.',
        en: 'Cross out the three prepositional phrases **of the repairs / to the elevators / in both buildings** and the head noun left is **cost** (singular); **had estimated** shows the sentence is in the past → **was**. were is the trap because repairs, elevators and buildings are all plural.',
      },
      translation: 'Tổng chi phí sửa chữa thang máy ở cả hai tòa nhà cao hơn mức mà người quản lý tòa nhà đã dự tính.',
    },
  ],
};
