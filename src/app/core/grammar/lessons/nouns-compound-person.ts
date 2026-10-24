import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'nouns-compound-person',
  intro: {
    vi: 'Bài này gom hai điểm hay ra cùng nhau ở Part 5 và Part 6: **danh từ ghép** (customer satisfaction, application form) và cách chọn giữa **danh từ chỉ người** với **danh từ chỉ việc/vật** cùng gốc (applicant hay application). Khi bốn lựa chọn có tới hai danh từ, hoặc chỗ trống đứng sát một danh từ khác, đó chính là điểm đang bị kiểm tra.',
    en: 'This lesson covers two points that often appear together in Parts 5 and 6: **compound nouns** (customer satisfaction, application form) and choosing between a **person noun** and an **activity/thing noun** from the same root (applicant or application). When two of the four options are nouns, or the blank sits right next to another noun, this is what is being tested.',
  },
  mistakes: [
    {
      wrong: "The factory updated its [[safe]] regulations after last month's inspection.",
      right: "The factory updated its [[safety]] regulations after last month's inspection.",
      explanation: {
        vi: 'Quy định về an toàn là danh từ ghép **safety regulations**: danh từ **safety** cho biết chủ đề của regulations. Tính từ **safe** lại mô tả bản thân các quy định là "không nguy hiểm", không hợp nghĩa.',
        en: 'Rules about safety form the compound noun **safety regulations**: the noun **safety** gives the topic of the regulations. The adjective **safe** would describe the rules themselves as "not dangerous", which makes no sense.',
      },
    },
    {
      wrong: 'Our hotel chain ranked first in the [[customers]] satisfaction survey this year.',
      right: 'Our hotel chain ranked first in the [[customer]] satisfaction survey this year.',
      explanation: {
        vi: 'Trong danh từ ghép, danh từ đầu làm nhiệm vụ của tính từ nên giữ **số ít**: **customer satisfaction survey**, dù khảo sát rất nhiều khách hàng.',
        en: 'In a compound noun the first noun does the job of an adjective, so it stays **singular**: **customer satisfaction survey**, even though many customers are surveyed.',
      },
    },
    {
      wrong: '[[Participant]] in the annual fire drill is mandatory for all employees.',
      right: '[[Participation]] in the annual fire drill is mandatory for all employees.',
      explanation: {
        vi: 'Thứ bắt buộc (**is mandatory**) là việc tham gia chứ không phải con người → **participation** (không đếm được, không cần mạo từ). **participant** là danh từ chỉ người, đếm được số ít nên không thể đứng trơn làm chủ ngữ.',
        en: 'What is compulsory (**is mandatory**) is the act of taking part, not a person → **participation** (uncountable, no article needed). **participant** is a countable singular person noun, so it cannot stand bare as the subject.',
      },
    },
    {
      wrong: 'The resort provides free meals to all of its [[employers]] during their shifts.',
      right: 'The resort provides free meals to all of its [[employees]] during their shifts.',
      explanation: {
        vi: '**employer** (đuôi **-er**) là bên thuê lao động, ở đây chính là khu nghỉ dưỡng. Người làm theo ca và được phát bữa ăn là người được thuê → **employees** (đuôi **-ee**).',
        en: 'An **employer** (**-er**) is the one who hires, here the resort itself. The people working shifts and receiving meals are the ones hired → **employees** (**-ee**).',
      },
    },
    {
      wrong: '[[Accountant]] from our Singapore office will audit the branch next week.',
      right: '[[An accountant]] from our Singapore office will audit the branch next week.',
      explanation: {
        vi: '**accountant** là danh từ chỉ người, đếm được và đang ở số ít, nên bắt buộc có từ hạn định đứng trước (an, the, our…).',
        en: '**accountant** is a countable person noun in the singular, so it must have a determiner in front of it (an, the, our…).',
      },
    },
  ],
  theory: [
    {
      heading: {
        vi: 'Danh từ ghép: danh từ trước bổ nghĩa cho danh từ sau',
        en: 'Compound nouns: one noun modifying the next',
      },
      body: {
        vi: 'Trong **danh từ ghép** (danh từ + danh từ), danh từ đứng trước đóng vai trò như một tính từ, cho biết loại, mục đích hay chủ đề; danh từ đứng sau là **danh từ chính**, quyết định nghĩa của cả cụm và quyết định số ít/số nhiều. **a delivery schedule** là một cái lịch (schedule) về việc giao hàng, không phải một lần giao hàng.',
        en: 'In a **compound noun** (noun + noun), the first noun works like an adjective, telling us the type, purpose or topic; the second noun is the **head noun**, which carries the meaning of the whole phrase and decides singular or plural. **a delivery schedule** is a schedule for deliveries, not a delivery.',
      },
      table: {
        head: [
          { vi: 'Danh từ ghép', en: 'Compound noun' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['safety regulations', { vi: 'quy định về an toàn', en: 'rules about safety' }],
          ['application form', { vi: 'mẫu đơn ứng tuyển / đăng ký', en: 'form for applying or registering' }],
          ['customer satisfaction', { vi: 'sự hài lòng của khách hàng', en: 'how pleased customers are' }],
          ['sales representative', { vi: 'nhân viên kinh doanh', en: 'employee who sells to clients' }],
          ['expiration date (BrE: expiry date)', { vi: 'ngày hết hạn', en: 'date on which something stops being valid' }],
          ['performance evaluation', { vi: 'đánh giá hiệu quả công việc', en: 'assessment of how well someone works' }],
          ['registration fee', { vi: 'phí đăng ký', en: 'fee paid to register' }],
          ['job opening', { vi: 'vị trí đang tuyển', en: 'position waiting to be filled' }],
          ['delivery schedule', { vi: 'lịch giao hàng', en: 'timetable for deliveries' }],
          ['office supplies', { vi: 'văn phòng phẩm', en: 'items such as paper, pens and toner' }],
          ['boarding pass', { vi: 'thẻ lên máy bay', en: 'card that lets you board a plane' }],
          ['maintenance work', { vi: 'công tác bảo trì', en: 'work that keeps equipment or buildings in good condition' }],
        ],
      },
      examples: [
        {
          en: 'All visitors must read the **safety regulations** before entering the plant.',
          vi: 'Mọi khách tham quan phải đọc quy định an toàn trước khi vào nhà máy.',
        },
        {
          en: 'The **expiration date** of your parking permit is printed on the back of the card.',
          vi: 'Ngày hết hạn của giấy phép đỗ xe được in ở mặt sau của thẻ.',
        },
      ],
    },
    {
      heading: { vi: 'Danh từ đầu thường giữ số ít', en: 'The first noun usually stays singular' },
      points: [
        {
          vi: 'Danh từ đầu làm nhiệm vụ của tính từ nên thường **không thêm -s**, kể cả khi nghĩa là số nhiều: a **customer** survey (khảo sát nhiều khách hàng), a **shoe** store (bán nhiều đôi giày).',
          en: 'Because the first noun does the job of an adjective, it usually takes **no -s**, even when the meaning is plural: a **customer** survey (it surveys many customers), a **shoe** store (it sells many shoes).',
        },
        {
          vi: 'Muốn cả cụm ở số nhiều, chỉ thêm -s vào **danh từ chính** ở cuối: two application **forms**, all safety **regulations**, three job **openings**.',
          en: 'To make the phrase plural, add -s only to the **head noun** at the end: two application **forms**, all safety **regulations**, three job **openings**.',
        },
        {
          vi: 'Số + danh từ đứng trước một danh từ khác thì nối bằng gạch ngang và danh từ giữ số ít: a **three-day** conference, a **20-minute** break, a **five-year** contract. So sánh: The conference lasts three **days** (ở đây days là danh từ bình thường, không bổ nghĩa cho danh từ nào).',
          en: 'A number + noun placed before another noun is hyphenated and the noun stays singular: a **three-day** conference, a **20-minute** break, a **five-year** contract. Compare: The conference lasts three **days** (here days is an ordinary noun that modifies nothing).',
        },
        {
          vi: 'Ngoại lệ cần học thuộc: một số danh từ ghép cố định dùng danh từ đầu có -s, phần lớn vì dạng -s mang nghĩa riêng: **sales** representative / sales figures, **savings** account, **customs** declaration (customs = hải quan, khác custom = phong tục), **electronics** store, **human resources** department, **sports** center.',
          en: 'Exceptions to memorise: some fixed compounds keep an -s on the first noun, mostly because the -s form has its own meaning: **sales** representative / sales figures, **savings** account, **customs** declaration (customs = the border authority, unlike custom = tradition), **electronics** store, **human resources** department, **sports** center.',
        },
      ],
      examples: [
        {
          en: 'We are hiring two **sales representatives** for our new branch in Busan.',
          vi: 'Chúng tôi đang tuyển hai nhân viên kinh doanh cho chi nhánh mới ở Busan.',
        },
        {
          en: 'Participants in the **two-week** training course will stay at the Riverside Hotel.',
          vi: 'Học viên của khóa đào tạo hai tuần sẽ lưu trú tại khách sạn Riverside.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Viết customers satisfaction, a three-days seminar hay applications forms đều **sai**. Riêng sở hữu cách số nhiều (có dấu nháy sau -s) vẫn đúng: **two weeks\' notice**, **five years\' experience**, vì đó không phải danh từ ghép.',
          en: "Writing customers satisfaction, a three-days seminar or applications forms is **wrong**. The possessive with an apostrophe is still correct (**two weeks' notice**, **five years' experience**), because that is not a compound noun.",
        },
      },
    },
    {
      heading: { vi: 'Danh từ hay tính từ đứng trước danh từ?', en: 'Noun or adjective before a noun?' },
      body: {
        vi: 'Bài 1.2 dạy rằng vị trí giữa mạo từ và danh từ thường dành cho tính từ. Nhưng vị trí đó cũng có thể là một **danh từ** tạo thành danh từ ghép. Hãy hỏi: từ cần điền mô tả **tính chất** của danh từ chính (→ tính từ), hay cho biết **loại, mục đích, chủ đề** của nó (→ danh từ)?',
        en: 'Lesson 1.2 teaches that the slot between an article and a noun usually holds an adjective. But that slot can also hold a **noun**, forming a compound noun. Ask: does the word describe a **quality** of the head noun (→ adjective), or name its **type, purpose or topic** (→ noun)?',
      },
      table: {
        head: [
          { vi: 'Tính từ + danh từ', en: 'Adjective + noun' },
          { vi: 'Danh từ + danh từ (danh từ ghép)', en: 'Noun + noun (compound noun)' },
        ],
        rows: [
          [
            { vi: 'a safe workplace (nơi làm việc an toàn)', en: 'a safe workplace (a workplace that is safe)' },
            { vi: 'safety regulations (quy định về an toàn)', en: 'safety regulations (rules about safety)' },
          ],
          [
            { vi: 'an expired passport (hộ chiếu đã hết hạn)', en: 'an expired passport (a passport that is no longer valid)' },
            { vi: 'the expiration date (ngày hết hạn)', en: 'the expiration date (the day something expires)' },
          ],
          [
            { vi: 'confidential files (hồ sơ mật)', en: 'confidential files (files that are secret)' },
            {
              vi: 'a confidentiality agreement (thỏa thuận bảo mật)',
              en: 'a confidentiality agreement (an agreement about keeping information secret)',
            },
          ],
          [
            { vi: 'satisfied customers (khách hàng hài lòng)', en: 'satisfied customers (customers who are pleased)' },
            { vi: 'a satisfaction survey (khảo sát mức độ hài lòng)', en: 'a satisfaction survey (a survey about satisfaction)' },
          ],
        ],
      },
      examples: [
        {
          en: 'Guests must sign a **confidentiality agreement** before touring the research lab.',
          vi: 'Khách phải ký thỏa thuận bảo mật trước khi tham quan phòng nghiên cứu.',
        },
        {
          en: 'The hotel e-mails a short **satisfaction survey** to every guest after checkout.',
          vi: 'Khách sạn gửi qua e-mail một bản khảo sát ngắn về mức độ hài lòng cho mọi khách sau khi trả phòng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chỗ trống đứng ngay **sau** một danh từ, trong cụm đang làm chủ ngữ hoặc tân ngữ (improve customer …, complete a performance …), thường là **danh từ chính** của danh từ ghép: chọn **danh từ** (satisfaction, evaluation). Tính từ bổ nghĩa thường đứng TRƯỚC danh từ, nên không lấp được chỗ này; động từ cũng không.',
          en: 'A blank right **after** a noun, inside a phrase that is a subject or object (improve customer …, complete a performance …), is usually the **head noun** of a compound: choose the **noun** (satisfaction, evaluation). A modifying adjective normally goes BEFORE the noun, so it cannot fill this slot; neither can a verb.',
        },
      },
    },
    {
      heading: {
        vi: 'Danh từ chỉ người và danh từ chỉ việc/vật cùng gốc',
        en: 'Person nouns vs. activity/thing nouns from the same root',
      },
      body: {
        vi: 'Đề thường cho hai danh từ cùng gốc: một chỉ **người** (đuôi -ant, -ent, -er, -or, -ee, -ist), một chỉ **việc, hoạt động hoặc vật** (đuôi -tion, -ance, -ment, -ing). Cả hai đều là danh từ nên vị trí trong câu không đủ để chọn; phải xét **nghĩa** và **từ hạn định**.',
        en: 'The test often offers two nouns from one root: one names a **person** (-ant, -ent, -er, -or, -ee, -ist), the other an **activity, process or thing** (-tion, -ance, -ment, -ing). Both are nouns, so position alone cannot decide; you must check **meaning** and **determiners**.',
      },
      table: {
        head: [
          { vi: 'Gốc', en: 'Root' },
          { vi: 'Người', en: 'Person' },
          { vi: 'Việc / vật', en: 'Activity / thing' },
          { vi: 'Danh từ chỉ việc có đếm được?', en: 'Is the activity noun countable?' },
        ],
        rows: [
          ['apply', 'applicant', 'application', { vi: 'Đếm được: an application, applications', en: 'Countable: an application, applications' }],
          ['account', 'accountant', 'accounting', { vi: 'Không đếm được (ngành, công việc kế toán)', en: 'Uncountable (the field or work of keeping accounts)' }],
          ['attend', 'attendee', 'attendance', { vi: 'Thường không đếm được (sự có mặt, số người dự)', en: 'Usually uncountable (being present, number of people present)' }],
          ['supervise', 'supervisor', 'supervision', { vi: 'Không đếm được', en: 'Uncountable' }],
          [
            'consult',
            'consultant',
            'consultation',
            {
              vi: 'Đếm được: a consultation (một buổi tư vấn); không đếm được trong cụm in consultation with',
              en: 'Countable: a consultation (a meeting to get advice); uncountable in the phrase in consultation with',
            },
          ],
          ['participate', 'participant', 'participation', { vi: 'Không đếm được', en: 'Uncountable' }],
          ['employ', 'employer / employee', 'employment', { vi: 'Không đếm được', en: 'Uncountable' }],
          ['assist', 'assistant', 'assistance', { vi: 'Không đếm được', en: 'Uncountable' }],
          ['inspect', 'inspector', 'inspection', { vi: 'Đếm được: an inspection', en: 'Countable: an inspection' }],
        ],
      },
      examples: [
        {
          en: 'Every **applicant** must attach a portfolio to the online **application**.',
          vi: 'Mỗi ứng viên phải đính kèm hồ sơ năng lực vào đơn ứng tuyển trực tuyến.',
        },
        {
          en: 'Ms. Yamada booked a **consultation** with a tax **consultant** before opening her bakery.',
          vi: 'Bà Yamada đã đặt lịch tư vấn với một chuyên gia tư vấn thuế trước khi mở tiệm bánh.',
        },
        {
          en: '**Attendance** at the quarterly budget meeting was lower than expected, with only twelve **attendees**.',
          vi: 'Số người dự cuộc họp ngân sách hằng quý thấp hơn dự kiến, chỉ có mười hai người tham dự.',
        },
      ],
    },
    {
      heading: { vi: '-er/-or hay -ee? Và attendee khác attendant', en: '-er/-or or -ee? And attendee vs. attendant' },
      points: [
        {
          vi: '**-er / -or**: người THỰC HIỆN hành động. **employer** = người/công ty thuê lao động, **interviewer** = người phỏng vấn, **trainer** = người đào tạo, **supervisor** = người giám sát.',
          en: '**-er / -or**: the person who DOES the action. **employer** = the person or company that hires, **interviewer** = the one asking the questions, **trainer** = the one who trains, **supervisor** = the one who supervises.',
        },
        {
          vi: '**-ee**: thường là người NHẬN hoặc CHỊU hành động. **employee** = người được thuê, **interviewee** = người được phỏng vấn, **trainee** = người được đào tạo.',
          en: '**-ee**: usually the person who RECEIVES the action. **employee** = the person hired, **interviewee** = the person being interviewed, **trainee** = the person being trained.',
        },
        {
          vi: 'Ngoại lệ: **attendee** (người tham dự) và **retiree** (người đã nghỉ hưu) là người tự làm hành động hoặc đang ở trạng thái đó, không phải người được tác động.',
          en: 'Exceptions: **attendee** (a person who attends) and **retiree** (a person who has retired) do the action themselves or are in that state; nothing is done to them.',
        },
        {
          vi: '**attendee** = người tham dự hội nghị, sự kiện; **attendant** = nhân viên phục vụ (flight attendant, parking attendant). Hai từ này không thay thế cho nhau được.',
          en: '**attendee** = someone who attends a conference or event; **attendant** = a staff member who serves people (flight attendant, parking attendant). The two are not interchangeable.',
        },
      ],
      examples: [
        {
          en: 'With 4,000 workers, Delmont Foods is the largest **employer** in the province.',
          vi: 'Với 4.000 công nhân, Delmont Foods là doanh nghiệp sử dụng nhiều lao động nhất tỉnh.',
        },
        {
          en: 'Each new **employee** is paired with a mentor during the first month.',
          vi: 'Mỗi nhân viên mới được ghép với một người hướng dẫn trong tháng đầu tiên.',
        },
        {
          en: 'Conference **attendees** may leave their coats with the cloakroom **attendant**.',
          vi: 'Người tham dự hội nghị có thể gửi áo khoác cho nhân viên phòng gửi đồ.',
        },
      ],
    },
    {
      heading: { vi: 'Chọn người hay việc: các dấu hiệu quyết định', en: 'Person or thing: the deciding clues' },
      points: [
        {
          vi: '**Nghĩa của động từ**: hire, interview, train, contact, greet thường cần tân ngữ chỉ người (hire a **consultant**); submit, process, approve, schedule thường đi với việc/vật (submit an **application**, schedule a **consultation**).',
          en: "**The verb's meaning**: hire, interview, train, contact and greet normally take a person as object (hire a **consultant**); submit, process, approve and schedule normally go with an activity or thing (submit an **application**, schedule a **consultation**).",
        },
        {
          vi: '**as a / an + nghề nghiệp**: work as an **accountant**, join the team as a **supervisor**.',
          en: '**as a / an + job**: work as an **accountant**, join the team as a **supervisor**.',
        },
        {
          vi: '**Cụm cố định với danh từ chỉ việc**: under the **supervision** of, **participation** in, **attendance** at, in **consultation** with, seek **employment**.',
          en: '**Fixed phrases with activity nouns**: under the **supervision** of, **participation** in, **attendance** at, in **consultation** with, seek **employment**.',
        },
        {
          vi: '**Từ hạn định**: danh từ chỉ người số ít đếm được cần a/an/the/each/every/tính từ sở hữu đi trước (An **accountant** will…, không viết Accountant will…). Ngược lại, danh từ chỉ việc không đếm được (accounting, supervision, participation, employment, assistance), với nghĩa thường gặp trong đề, không đi với a/an và không thêm -s.',
          en: '**Determiners**: a singular countable person noun needs a/an/the/each/every/a possessive in front (An **accountant** will…, not Accountant will…). Conversely, uncountable activity nouns (accounting, supervision, participation, employment, assistance), in the senses tested, do not take a/an or add -s.',
        },
      ],
      examples: [
        {
          en: 'The audit will be carried out under the **supervision** of an external **accountant**.',
          vi: 'Cuộc kiểm toán sẽ được tiến hành dưới sự giám sát của một kế toán viên độc lập bên ngoài.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Ngoại lệ hẹp: chức danh chỉ một người nắm giữ có thể bỏ mạo từ sau **be appointed / be named / be elected / become / as**: Mr. Ferreira was named **chief accountant** last spring. Ở các vị trí khác trong Part 5, danh từ chỉ người số ít đứng trơn gần như chắc chắn là sai.',
          en: 'A narrow exception: a title held by only one person can drop the article after **be appointed / be named / be elected / become / as**: Mr. Ferreira was named **chief accountant** last spring. Anywhere else in Part 5, a bare singular person noun is almost certainly wrong.',
        },
      },
    },
    {
      heading: {
        vi: 'Cách làm câu danh từ ghép và người/vật trong Part 5',
        en: 'Attacking compound-noun and person/thing items in Part 5',
      },
      points: [
        {
          vi: 'Lựa chọn có cả đuôi người (-ant, -ee, -er/-or) lẫn đuôi việc (-tion, -ance, -ment, -ing) → câu người/vật. Kiểm tra **từ hạn định** trước: a/an, each, every → danh từ đếm được số ít; không có từ hạn định → danh từ số nhiều hoặc không đếm được.',
          en: 'Options mix person endings (-ant, -ee, -er/-or) with activity endings (-tion, -ance, -ment, -ing) → a person/thing item. Check the **determiner** first: a/an, each, every → a singular countable noun; no determiner → a plural or uncountable noun.',
        },
        {
          vi: 'Nếu vẫn còn hai danh từ hợp ngữ pháp, xét **nghĩa**: ai hay cái gì làm được hành động đó? Một bản báo cáo không thể "attend a meeting", còn một con người thì không thể bị "printed".',
          en: 'If two nouns still fit grammatically, check the **meaning**: who or what can do that action? A report cannot "attend a meeting", and a person cannot be "printed".',
        },
        {
          vi: 'Chỗ trống đứng **sau** một danh từ bổ nghĩa (customer …, performance …) → điền danh từ chính. Chỗ trống đứng **trước** một danh từ → hỏi đó là tính chất (tính từ) hay loại/mục đích (danh từ).',
          en: 'Blank **after** a noun modifier (customer …, performance …) → fill in the head noun. Blank **before** a noun → ask whether it is a quality (adjective) or a type/purpose (noun).',
        },
        {
          vi: 'Các lựa chọn chỉ khác nhau ở -s → -s chỉ thêm vào danh từ cuối; danh từ đầu giữ số ít, trừ nhóm sales, savings, customs, electronics, human resources, sports. Số + danh từ trước danh từ khác không có -s: a ten-minute break.',
          en: 'Options differ only by -s → the -s goes on the last noun; the first noun stays singular, except for sales, savings, customs, electronics, human resources, sports. A number + noun before another noun takes no -s: a ten-minute break.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The new online check-in system has greatly improved customer ------- at all of our hotel locations.',
      options: ['satisfy', 'satisfied', 'satisfaction', 'satisfactory'],
      answer: 2,
      explanation: {
        vi: '**customer** số ít không có mạo từ nên không thể tự làm tân ngữ của **improved**; nó chỉ là danh từ bổ nghĩa, và chỗ trống phải là danh từ chính → **customer satisfaction**. satisfy là động từ; satisfied và satisfactory là tính từ, không làm danh từ chính của cụm được.',
        en: 'A bare singular **customer** cannot be the object of **improved** on its own; it is only a noun modifier, so the blank must be the head noun → **customer satisfaction**. satisfy is a verb; satisfied and satisfactory are adjectives and cannot be the head of the phrase.',
      },
      translation: 'Hệ thống làm thủ tục nhận phòng trực tuyến mới đã cải thiện đáng kể sự hài lòng của khách hàng tại tất cả các khách sạn của chúng tôi.',
    },
    {
      sentence: "Before the doors open, please print thirty ------- for the candidates attending Saturday's recruitment fair.",
      options: ['application form', 'application forms', 'applications form', 'applications forms'],
      answer: 1,
      explanation: {
        vi: '**thirty** cần danh từ số nhiều, nhưng -s chỉ thêm vào danh từ CUỐI (danh từ chính); danh từ đầu **application** giữ số ít → **application forms**. applications form sai vì thêm -s vào danh từ đầu thay vì danh từ chính.',
        en: '**thirty** requires a plural, but the -s goes only on the LAST (head) noun; the first noun **application** stays singular → **application forms**. applications form is wrong because it pluralises the first noun instead of the head.',
      },
      translation: 'Trước khi mở cửa, vui lòng in ba mươi mẫu đơn ứng tuyển cho các ứng viên tham dự hội chợ tuyển dụng hôm thứ Bảy.',
    },
    {
      sentence: 'Our ------- representatives will call you within two business days to arrange a product demonstration.',
      options: ['sales', 'sale', 'saleable', 'sold'],
      answer: 0,
      explanation: {
        vi: '**sales representative** là danh từ ghép cố định: **sales** (hoạt động kinh doanh, bán hàng) là ngoại lệ vẫn giữ -s khi đứng đầu. sale representatives sai; saleable (bán được) và sold (đã bán) không thể mô tả nhân viên.',
        en: '**sales representative** is a fixed compound: **sales** (the business of selling) is an exception that keeps its -s in first position. sale representatives is wrong; saleable and sold cannot describe staff members.',
      },
      translation: 'Nhân viên kinh doanh của chúng tôi sẽ gọi cho quý khách trong vòng hai ngày làm việc để sắp xếp buổi trình diễn sản phẩm.',
    },
    {
      sentence: 'Managers must complete a performance ------- for every member of their team by the end of June.',
      options: ['evaluate', 'evaluator', 'evaluation', 'evaluative'],
      answer: 2,
      explanation: {
        vi: 'Sau **a performance** cần danh từ chính của cụm, và thứ được **complete** (hoàn thành) là một bản đánh giá → **performance evaluation**. evaluator là người đánh giá, mà không thể "hoàn thành" một con người; evaluate là động từ, evaluative là tính từ.',
        en: 'After **a performance**, the head noun is needed, and what managers **complete** is an assessment → **performance evaluation**. evaluator is a person, and you cannot "complete" a person; evaluate is a verb and evaluative an adjective.',
      },
      translation: 'Các quản lý phải hoàn thành bản đánh giá hiệu quả công việc cho từng thành viên trong nhóm trước cuối tháng Sáu.',
    },
    {
      sentence: "Each ------- must bring a valid photo ID and two letters of reference to Thursday's interview.",
      options: ['applicant', 'application', 'apply', 'applied'],
      answer: 0,
      explanation: {
        vi: '**Each** cần danh từ đếm được số ít, và chủ ngữ của **must bring … to Thursday\'s interview** phải là người → **applicant**. application cũng là danh từ đếm được số ít, nhưng một lá đơn không thể tự mang giấy tờ đến buổi phỏng vấn.',
        en: "**Each** needs a singular countable noun, and the subject of **must bring … to Thursday's interview** has to be a person → **applicant**. application is also singular and countable, but a document cannot bring anything to an interview.",
      },
      translation: 'Mỗi ứng viên phải mang theo giấy tờ tùy thân có ảnh còn hiệu lực và hai thư giới thiệu đến buổi phỏng vấn hôm thứ Năm.',
    },
    {
      sentence: 'Hartwell Logistics hired an outside ------- to review its delivery routes and reduce fuel costs.',
      options: ['consult', 'consulting', 'consultation', 'consultant'],
      answer: 3,
      explanation: {
        vi: 'Động từ **hired** (thuê) cần tân ngữ chỉ người, và **an** cho thấy danh từ đếm được số ít → **consultant** (chuyên gia tư vấn). consultation là một buổi tư vấn, không thể "thuê" một buổi tư vấn đi rà soát tuyến đường; consulting không đếm được nên không đi với an.',
        en: 'The verb **hired** needs a person as its object, and **an** signals a singular countable noun → **consultant**. consultation is a meeting for advice, which cannot be hired to review routes; consulting is uncountable and cannot follow an.',
      },
      translation: 'Hartwell Logistics đã thuê một chuyên gia tư vấn bên ngoài để rà soát các tuyến giao hàng và giảm chi phí nhiên liệu.',
    },
    {
      sentence: "------- at the annual shareholders' meeting has risen steadily over the past five years.",
      options: ['Attend', 'Attendee', 'Attendant', 'Attendance'],
      answer: 3,
      explanation: {
        vi: 'Chủ ngữ không có từ hạn định và đi với **has risen steadily** (tăng đều) → cần danh từ không đếm được chỉ số người có mặt: **Attendance**. Attendee và Attendant là danh từ chỉ người, đếm được số ít nên không thể đứng trơn, và một người thì không "tăng đều qua các năm".',
        en: 'The subject has no determiner and goes with **has risen steadily** → an uncountable noun for the number of people present: **Attendance**. Attendee and Attendant are singular countable person nouns that cannot stand bare, and a person does not "rise steadily over the years".',
      },
      translation: 'Số người tham dự cuộc họp cổ đông thường niên đã tăng đều trong năm năm qua.',
    },
    {
      sentence: 'New forklift operators must work under direct ------- until they pass the warehouse safety test.',
      options: ['supervisor', 'supervision', 'supervise', 'supervisory'],
      answer: 1,
      explanation: {
        vi: 'Sau **under direct** không có mạo từ nên cần danh từ không đếm được → **supervision** (sự giám sát); work under supervision là cụm quen thuộc. supervisor là danh từ chỉ người, đếm được số ít, phải có a/the/their đi trước.',
        en: 'There is no article after **under direct**, so an uncountable noun is needed → **supervision**; work under supervision is a set phrase. supervisor is a singular countable person noun and would need a/the/their in front.',
      },
      translation: 'Nhân viên lái xe nâng mới phải làm việc dưới sự giám sát trực tiếp cho đến khi vượt qua bài kiểm tra an toàn kho hàng.',
    },
    {
      sentence: 'The company gives every full-time ------- fifteen days of paid vacation per year.',
      options: ['employer', 'employee', 'employment', 'employ'],
      answer: 1,
      explanation: {
        vi: '**every** cần danh từ đếm được số ít, và người được **company** cho nghỉ phép có lương là người lao động → **employee** (đuôi -ee: người được thuê). employer là bên thuê lao động, tức chính là công ty; employment không đếm được và không phải người.',
        en: '**every** needs a singular countable noun, and the people the **company** gives paid leave to are its workers → **employee** (-ee: the person hired). employer is the one who hires, which is the company itself; employment is uncountable and not a person.',
      },
      translation: 'Công ty cho mỗi nhân viên toàn thời gian mười lăm ngày nghỉ phép có lương mỗi năm.',
    },
    {
      sentence: 'The finance department plans to hire ------- with at least five years of auditing experience.',
      options: ['accountant', 'accounting', 'an accountant', 'an accounting'],
      answer: 2,
      explanation: {
        vi: '**hire** cần tân ngữ chỉ người; **accountant** là danh từ đếm được số ít nên bắt buộc có mạo từ → **an accountant**. accountant đứng trơn sai vì thiếu mạo từ; accounting (ngành kế toán) không đếm được nên không đi với an và cũng không thể được "thuê".',
        en: '**hire** needs a person as its object; **accountant** is singular and countable, so it must have an article → **an accountant**. A bare accountant lacks the article; accounting (the field) is uncountable, cannot take an, and cannot be hired.',
      },
      translation: 'Phòng tài chính dự định tuyển một kế toán viên có ít nhất năm năm kinh nghiệm kiểm toán.',
    },
  ],
};
