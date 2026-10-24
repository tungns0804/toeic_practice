import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'verbs-gerund-infinitive',
  intro: {
    vi: 'Bài này dạy cách chọn **V-ing** hay **to V** sau một động từ: nhóm đi với V-ing, nhóm đi với to V, nhóm đổi nghĩa theo dạng, và khuôn **động từ + tân ngữ + to V**. Trong Part 5/6, dạng câu này thường cho bốn lựa chọn là bốn dạng của cùng một động từ (to V, V-ing, V, V-s), và chính động từ đứng trước chỗ trống quyết định đáp án.',
    en: 'This lesson shows how to choose between **V-ing** and **to V** after a verb: verbs that take V-ing, verbs that take to V, verbs whose meaning changes with the form, and the pattern **verb + object + to V**. In Part 5/6, these items usually offer four forms of one verb (to V, V-ing, base form, -s form), and the verb right before the blank decides the answer.',
  },
  mistakes: [
    {
      wrong: 'Kessler Foods is considering [[to open]] a second warehouse near the port.',
      right: 'Kessler Foods is considering [[opening]] a second warehouse near the port.',
      explanation: {
        vi: 'Khi mang nghĩa cân nhắc làm gì, **consider** đi với V-ing, không đi với to V. Cùng nhóm: avoid, postpone, recommend, suggest, finish.',
        en: 'When it means thinking about doing something, **consider** takes V-ing, not to V. Others in this group: avoid, postpone, recommend, suggest, finish.',
      },
    },
    {
      wrong: 'Management has decided [[postponing]] the product launch until March.',
      right: 'Management has decided [[to postpone]] the product launch until March.',
      explanation: {
        vi: '**decide** đi với to V. Đừng để postpone đánh lừa: dạng của từ cần điền do động từ ĐỨNG TRƯỚC nó (decided) quyết định, chứ không do chính nó.',
        en: '**decide** takes to V. Do not let postpone fool you: the form of the word is decided by the verb BEFORE it (decided), not by the word itself.',
      },
    },
    {
      wrong: 'Our consultant suggested [[us to lower]] the minimum order quantity.',
      right: 'Our consultant suggested [[lowering]] the minimum order quantity.',
      explanation: {
        vi: '**suggest** không bao giờ đi với khuôn tân ngữ + to V. Dùng suggest + V-ing, hoặc suggest that + mệnh đề (bài 15.3).',
        en: '**suggest** never takes the pattern object + to V. Use suggest + V-ing, or suggest that + clause (lesson 15.3).',
      },
    },
    {
      wrong: 'Please remember [[sending]] the signed lease to our office by Friday.',
      right: 'Please remember [[to send]] the signed lease to our office by Friday.',
      explanation: {
        vi: '**remember + to V** là nhớ phải làm một việc chưa làm; **remember + V-ing** là nhớ lại việc đã làm. Việc gửi hợp đồng trước thứ Sáu vẫn chưa làm, nên dùng to V.',
        en: '**remember + to V** means not forgetting a task still to be done; **remember + V-ing** means recalling something already done. Sending the lease by Friday is still ahead, so to V is required.',
      },
    },
    {
      wrong: 'The new software enables customers [[track]] their orders in real time.',
      right: 'The new software enables customers [[to track]] their orders in real time.',
      explanation: {
        vi: 'Khuôn của **enable** là enable + tân ngữ + **to V**. Chỉ một số ít động từ như make, let, have mới đi với tân ngữ + V nguyên mẫu không to (bài 9.3).',
        en: 'The pattern for **enable** is enable + object + **to V**. Only a few verbs, such as make, let and have, take object + bare infinitive (lesson 9.3).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Bốn khuôn động từ cần phân biệt', en: 'Four verb patterns to tell apart' },
      body: {
        vi: 'Sau một động từ thường như decide, avoid hay ask, động từ thứ hai không chia theo thì mà ở dạng **V-ing** hoặc **to V**. Trong hầu hết trường hợp, dạng nào là do **động từ đứng trước** quyết định chứ không do nghĩa của câu, vì vậy cách học hiệu quả nhất là thuộc theo nhóm.',
        en: 'After an ordinary verb such as decide, avoid or ask, a second verb does not carry tense; it appears as **V-ing** or **to V**. In most cases the form is decided by the **verb before it**, not by the meaning of the sentence, so the most efficient way to learn these verbs is in groups.',
      },
      table: {
        head: [
          { vi: 'Khuôn', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Examples' },
          { vi: 'Động từ tiêu biểu', en: 'Typical verbs' },
        ],
        rows: [
          [
            { vi: 'Động từ + V-ing', en: 'Verb + V-ing' },
            'consider moving, finish packing',
            'avoid, consider, recommend, suggest, postpone, finish',
          ],
          [
            { vi: 'Động từ + to V', en: 'Verb + to V' },
            'decide to hire, fail to reply',
            'agree, decide, plan, hope, afford, fail, refuse, strive',
          ],
          [
            { vi: 'Động từ + tân ngữ + to V', en: 'Verb + object + to V' },
            'ask guests to wait, enable users to log in',
            'ask, encourage, allow, require, remind, enable',
          ],
          [
            { vi: 'Động từ + V-ing hoặc to V (đổi nghĩa)', en: 'Verb + V-ing or to V (meaning changes)' },
            'stop printing / stop to rest',
            'stop, remember, forget, try, regret',
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Câu phủ định đặt **not** ngay trước V-ing hoặc to V: The firm decided **not to renew** the lease. / She regrets **not attending** the workshop.',
          en: 'For the negative, put **not** right before the V-ing or to V: The firm decided **not to renew** the lease. / She regrets **not attending** the workshop.',
        },
      },
    },
    {
      heading: { vi: 'Động từ + V-ing', en: 'Verbs followed by V-ing' },
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['avoid', 'avoid paying extra fees', { vi: 'tránh (làm gì)', en: 'keep from doing' }],
          ['consider', 'consider relocating the office', { vi: 'cân nhắc (làm gì)', en: 'think about doing' }],
          ['recommend', 'recommend booking early', { vi: 'khuyên, đề xuất (nên làm gì)', en: 'advise doing' }],
          ['suggest', 'suggest meeting on Monday', { vi: 'gợi ý, đề nghị (làm gì)', en: 'propose doing' }],
          ['postpone / delay', 'postpone signing the contract', { vi: 'hoãn, trì hoãn', en: 'put off doing' }],
          ['finish', 'finish installing the software', { vi: 'làm xong', en: 'complete doing' }],
          [
            'mind',
            'Would you mind waiting?',
            { vi: 'phiền, ngại (chủ yếu trong câu hỏi và câu phủ định)', en: 'object to doing (mostly in questions and negatives)' },
          ],
          [
            'include / involve',
            'The job involves traveling abroad.',
            { vi: 'bao gồm; đòi hỏi phải làm', en: 'have as a part; require as part of it' },
          ],
          ['discontinue', 'discontinue offering free samples', { vi: 'ngừng (cung cấp, sản xuất)', en: 'stop providing or producing' }],
        ],
      },
      examples: [
        {
          en: "Ms. Lindqvist's duties **include preparing** the monthly payroll report.",
          vi: 'Nhiệm vụ của cô Lindqvist bao gồm lập báo cáo bảng lương hằng tháng.',
        },
        {
          en: 'Would you **mind holding** for a moment while I check your reservation?',
          vi: 'Quý khách vui lòng chờ máy một lát để tôi kiểm tra thông tin đặt phòng được không ạ?',
        },
        {
          en: 'Because of the heavy rain, the crew **delayed pouring** the concrete foundation.',
          vi: 'Vì mưa lớn, đội thi công đã hoãn việc đổ bê tông móng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**recommend** và **suggest** là bẫy số một: không dùng recommend/suggest + to V, và suggest không bao giờ đi với tân ngữ + to V (không nói suggested us to lower). Hai cách đúng: recommend/suggest + V-ing, hoặc recommend/suggest that + mệnh đề (bài 15.3). Khuôn recommend + tân ngữ + to V chỉ thỉnh thoảng gặp trong tiếng Anh-Anh, đề TOEIC hầu như không dùng.',
          en: '**recommend** and **suggest** are the number-one trap: do not use recommend/suggest + to V, and suggest never takes object + to V (not suggested us to lower). The two correct options are recommend/suggest + V-ing, or recommend/suggest that + clause (lesson 15.3). The pattern recommend + object + to V appears only occasionally in British English and is almost never used on the TOEIC.',
        },
      },
    },
    {
      heading: { vi: 'Động từ + to V', en: 'Verbs followed by to V' },
      points: [
        {
          vi: "**afford** thường đi cùng can, can't, could hoặc be able to: We **can't afford to delay** the launch.",
          en: "**afford** usually comes with can, can't, could or be able to: We **can't afford to delay** the launch.",
        },
        {
          vi: '**fail to V** nghĩa là KHÔNG làm được hoặc đã không làm: The shipment **failed to arrive** on time = lô hàng đã không đến đúng hạn.',
          en: '**fail to V** means did NOT do or could not do: The shipment **failed to arrive** on time = it did not arrive on time.',
        },
        {
          vi: '**offer to V** là ngỏ ý tự mình làm gì. offer không đi với tân ngữ + to V; muốn nói đưa cho ai cái gì thì dùng offer + người + vật: offered us a discount.',
          en: '**offer to V** means saying you are willing to do something yourself. offer does not take object + to V; to give someone something, use offer + person + thing: offered us a discount.',
        },
      ],
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['agree', 'agree to extend the deadline', { vi: 'đồng ý (làm gì)', en: 'say yes to doing' }],
          ['decide', 'decide to merge the two teams', { vi: 'quyết định', en: 'make a choice to do' }],
          ['plan / intend', 'plan to open a new branch', { vi: 'dự định', en: 'have in mind to do' }],
          ['hope', 'hope to finish by June', { vi: 'hy vọng', en: 'want and expect to do' }],
          ['afford', "can't afford to lose clients", { vi: 'đủ khả năng (tiền, thời gian) để làm', en: 'have enough money or time to do' }],
          ['aim', 'aim to cut costs by 10%', { vi: 'đặt mục tiêu', en: 'have as a goal' }],
          ['fail', 'fail to meet the deadline', { vi: 'không làm được, không làm', en: 'not succeed in doing; not do' }],
          ['offer', 'offer to cover the cost', { vi: 'ngỏ ý (làm giúp)', en: 'say you are willing to do' }],
          ['refuse', 'refuse to sign the agreement', { vi: 'từ chối', en: 'say no to doing' }],
          ['strive', 'strive to exceed expectations', { vi: 'nỗ lực, phấn đấu', en: 'try very hard to do' }],
          ['hesitate', 'Do not hesitate to call us.', { vi: 'ngần ngại, do dự', en: 'be slow to act because of doubt' }],
        ],
      },
      examples: [
        {
          en: 'Hollis Logistics **aims to deliver** every domestic order within 48 hours.',
          vi: 'Hollis Logistics đặt mục tiêu giao mọi đơn hàng nội địa trong vòng 48 giờ.',
        },
        {
          en: 'The landlord **refused to lower** the rent despite our offer to sign a five-year lease.',
          vi: 'Chủ nhà từ chối giảm tiền thuê dù chúng tôi đề nghị ký hợp đồng thuê năm năm.',
        },
        {
          en: 'Please do not **hesitate to contact** our billing department if you notice any errors.',
          vi: 'Xin đừng ngần ngại liên hệ phòng thanh toán nếu quý khách phát hiện bất kỳ sai sót nào.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Một vài động từ nhóm này đi được với V-ing nhưng phải qua giới từ: **plan on** expanding, **aim at** reducing, **hesitate about** signing (V-ing sau giới từ: bài 9.2). Không có giới từ thì dùng to V. **intend** đôi khi gặp với V-ing trong tiếng Anh-Anh, nhưng trong đề TOEIC hãy chọn intend + to V.',
          en: 'A few of these verbs can take V-ing, but only through a preposition: **plan on** expanding, **aim at** reducing, **hesitate about** signing (gerunds after prepositions: lesson 9.2). Without a preposition, use to V. **intend** is occasionally followed by V-ing in British English, but on the TOEIC choose intend + to V.',
        },
      },
    },
    {
      heading: {
        vi: 'Động từ đổi nghĩa: stop, remember, forget, try, regret',
        en: 'Verbs that change meaning: stop, remember, forget, try, regret',
      },
      body: {
        vi: 'Với năm động từ này, cả V-ing và to V đều đúng ngữ pháp nhưng nghĩa khác hẳn nhau, nên phải đọc ngữ cảnh. Với remember, forget, regret: **V-ing** nhìn về việc ĐÃ xảy ra, còn **to V** nhìn về việc CHƯA làm (hoặc sắp nói ra ngay lúc đó, như regret to inform).',
        en: 'With these five verbs, both V-ing and to V are grammatical, but the meanings are very different, so you must read the context. With remember, forget and regret, **V-ing** looks back at something that HAS happened, while **to V** looks at something NOT yet done (or about to be said, as in regret to inform).',
      },
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: '+ V-ing', en: '+ V-ing' },
          { vi: '+ to V', en: '+ to V' },
        ],
        rows: [
          [
            'stop',
            { vi: 'thôi hẳn việc đó: stop printing paper invoices', en: 'quit the activity itself: stop printing paper invoices' },
            { vi: 'dừng việc đang làm ĐỂ làm việc khác: stop to answer a call', en: 'pause IN ORDER TO do something else: stop to answer a call' },
          ],
          [
            'remember',
            { vi: 'nhớ lại việc đã làm: I remember sending the invoice.', en: 'recall a past action: I remember sending the invoice.' },
            { vi: 'nhớ phải làm: Remember to send the invoice.', en: 'not forget a task: Remember to send the invoice.' },
          ],
          [
            'forget',
            {
              vi: 'quên việc đã làm (hay dùng với never): I will never forget visiting your plant.',
              en: 'forget a past event (often with never): I will never forget visiting your plant.',
            },
            { vi: 'quên không làm: He forgot to sign the form.', en: 'fail to do a task: He forgot to sign the form.' },
          ],
          [
            'try',
            {
              vi: 'thử làm xem có được việc không: Try restarting the router.',
              en: 'experiment to see if it works: Try restarting the router.',
            },
            {
              vi: 'cố gắng làm (có thể không thành): We tried to reach you by phone.',
              en: 'make an effort, maybe without success: We tried to reach you by phone.',
            },
          ],
          [
            'regret',
            { vi: 'hối tiếc vì đã làm: She regrets not booking earlier.', en: 'feel sorry about a past action: She regrets not booking earlier.' },
            {
              vi: 'lấy làm tiếc phải báo (đi với inform, announce, tell, say): We regret to inform you…',
              en: 'be sorry to give bad news (with inform, announce, tell, say): We regret to inform you…',
            },
          ],
        ],
      },
      examples: [
        {
          en: 'On his way to the airport, Mr. Okafor **stopped to pick up** the printed brochures.',
          vi: 'Trên đường ra sân bay, ông Okafor dừng lại để lấy các tờ quảng cáo đã in.',
        },
        {
          en: 'When the card reader froze, the cashier **tried unplugging** it, and it worked again.',
          vi: 'Khi máy đọc thẻ bị treo, nhân viên thu ngân thử rút điện ra và máy lại hoạt động.',
        },
        {
          en: 'We **regret to announce** that our Lakeside branch will close on June 30.',
          vi: 'Chúng tôi rất tiếc phải thông báo rằng chi nhánh Lakeside sẽ đóng cửa vào ngày 30 tháng 6.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Câu hỏi về nhóm này luôn có dấu hiệu quyết định: **please, should, before + việc sắp làm** → remember/forget + to V; một **lý do để chấm dứt** (due to rising costs, no longer profitable) → stop + V-ing; câu mở đầu thư báo tin không vui **We regret … you that** → to inform.',
          en: 'Items on these verbs always contain a deciding cue: **please, should, before + a task ahead** → remember/forget + to V; a **reason for quitting** (due to rising costs, no longer profitable) → stop + V-ing; the bad-news opening **We regret … you that** → to inform.',
        },
      },
    },
    {
      heading: { vi: 'Động từ + tân ngữ + to V', en: 'Verb + object + to V' },
      body: {
        vi: 'Nhóm này cần một **tân ngữ** (thường là người) đứng giữa động từ và **to V**: ai được yêu cầu, được cho phép hay được nhắc làm việc gì. Thấy một động từ trong nhóm này đi kèm tân ngữ thì chỗ trống phía sau gần như chắc chắn là to V.',
        en: 'These verbs need an **object** (usually a person) between the verb and **to V**: the person who is asked, allowed or reminded to do something. When one of these verbs has an object, the blank after it is almost certainly to V.',
      },
      points: [
        {
          vi: 'Ở câu bị động, tân ngữ lên làm chủ ngữ và to V giữ nguyên: All visitors **are required to sign** in (bài 6.2).',
          en: 'In the passive, the object becomes the subject and to V stays: All visitors **are required to sign** in (lesson 6.2).',
        },
        {
          vi: '**ask** cũng dùng được khi không có tân ngữ: She **asked to speak** to the manager (= xin được nói chuyện với quản lý).',
          en: '**ask** can also be used without an object: She **asked to speak** to the manager (= requested permission to speak).',
        },
      ],
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['ask', 'ask guests to check out by noon', { vi: 'yêu cầu, đề nghị', en: 'request' }],
          ['encourage', 'encourage staff to share ideas', { vi: 'khuyến khích', en: 'give support and confidence' }],
          ['allow / permit', 'allow employees to work remotely', { vi: 'cho phép', en: 'give permission' }],
          ['require', 'require visitors to sign in', { vi: 'bắt buộc', en: 'make it compulsory' }],
          ['remind', 'remind clients to renew their contracts', { vi: 'nhắc nhở', en: 'help someone remember' }],
          ['enable', 'enable users to pay online', { vi: 'giúp cho có thể', en: 'make it possible' }],
          [
            'advise / urge / invite / instruct / expect',
            'advise passengers to arrive early',
            { vi: 'khuyên / thúc giục / mời / hướng dẫn / mong đợi', en: 'recommend / press / invite / direct / expect' },
          ],
        ],
      },
      examples: [
        {
          en: 'Our updated portal **allows tenants to submit** maintenance requests at any time.',
          vi: 'Cổng thông tin mới của chúng tôi cho phép người thuê gửi yêu cầu bảo trì bất cứ lúc nào.',
        },
        {
          en: 'Ms. Diallo **reminded the interns to back up** their files every evening.',
          vi: 'Cô Diallo nhắc các thực tập sinh sao lưu tệp mỗi tối.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'allow, permit, encourage, advise, require còn đi thẳng với **V-ing khi KHÔNG có tân ngữ**: The hotel does not **allow smoking**. Có tân ngữ thì phải dùng to V: The hotel does not allow **guests to smoke**. Ngược lại, suggest không bao giờ đi với tân ngữ + to V, và make/let/have + tân ngữ + V nguyên mẫu (bài 9.3) không thuộc nhóm này.',
          en: 'allow, permit, encourage, advise and require can also take **V-ing directly when there is NO object**: The hotel does not **allow smoking**. With an object, use to V: The hotel does not allow **guests to smoke**. By contrast, suggest never takes object + to V, and make/let/have + object + bare infinitive (lesson 9.3) do not belong to this group.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu V-ing / to V trong Part 5', en: 'Attacking V-ing / to V items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là bốn dạng của một động từ (to V, V-ing, V, V-s) → nhìn ngay **động từ đứng trước** chỗ trống, đừng xét động từ nằm trong chỗ trống.',
          en: 'Four forms of one verb (to V, V-ing, base form, -s form) → look at the **verb before** the blank, not at the verb in the options.',
        },
        {
          vi: 'Giữa động từ đó và chỗ trống có **tân ngữ** không? Có (ask staff …, enable users …) → to V.',
          en: 'Is there an **object** between that verb and the blank? If so (ask staff …, enable users …) → to V.',
        },
        {
          vi: 'Không có tân ngữ → đối chiếu danh sách: avoid, consider, recommend, suggest, postpone… → V-ing; decide, agree, fail, strive, hesitate… → to V.',
          en: 'No object → check the lists: avoid, consider, recommend, suggest, postpone… → V-ing; decide, agree, fail, strive, hesitate… → to V.',
        },
        {
          vi: 'Động từ là stop, remember, forget, try hoặc regret → tìm dấu hiệu thời gian hoặc lý do trong câu để biết việc đã xảy ra hay chưa.',
          en: 'The verb is stop, remember, forget, try or regret → find the time cue or reason in the sentence to decide whether the action has happened yet.',
        },
        {
          vi: 'Dạng ngược lại: bốn lựa chọn là bốn động từ khác nhau, còn sau chỗ trống đã có sẵn V-ing hoặc to V → chọn động từ có khuôn khớp với dạng đó.',
          en: 'The reverse type: the options are four different verbs and the blank is already followed by V-ing or to V → pick the verb whose pattern fits that form.',
        },
        {
          vi: 'Ngay trước chỗ trống là giới từ → V-ing (bài 9.2); là make, let, have → V nguyên mẫu (bài 9.3).',
          en: 'A preposition right before the blank → V-ing (lesson 9.2); make, let or have → bare infinitive (lesson 9.3).',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Những khuôn ra đề nhiều nhất: **recommend / suggest / consider + V-ing**, **strive / fail / hesitate + to V**, **remind / enable / encourage + tân ngữ + to V**. Hãy ưu tiên thuộc ba dòng này trước.',
          en: 'The most frequently tested patterns: **recommend / suggest / consider + V-ing**, **strive / fail / hesitate + to V**, **remind / enable / encourage + object + to V**. Learn these three lines first.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'To avoid ------- late fees, tenants should pay their rent before the fifth day of each month.',
      options: ['incur', 'to incur', 'incurring', 'incurs'],
      answer: 2,
      explanation: {
        vi: 'Động từ **avoid** (tránh) luôn đi với V-ing → **incurring**. to incur sai vì avoid không đi với to V; incur và incurs là dạng chia, không đứng ngay sau avoid được.',
        en: '**avoid** always takes V-ing → **incurring**. to incur is wrong because avoid does not take to V; incur and incurs are finite forms and cannot follow avoid directly.',
      },
      translation: 'Để tránh bị tính phí trả chậm, người thuê nên đóng tiền thuê nhà trước ngày mùng 5 hằng tháng.',
    },
    {
      sentence: 'Applicants who fail ------- a copy of their professional license by May 31 will not be considered.',
      options: ['submitting', 'submit', 'submits', 'to submit'],
      answer: 3,
      explanation: {
        vi: '**fail** (không làm được, không làm) đi với to V → **to submit**. submitting sai vì fail không đi với V-ing; submit và submits không đứng ngay sau động từ fail được.',
        en: '**fail** takes to V → **to submit**. submitting is wrong because fail does not take V-ing; submit and submits cannot follow the verb fail directly.',
      },
      translation: 'Những ứng viên không nộp bản sao giấy phép hành nghề trước ngày 31 tháng 5 sẽ không được xét tuyển.',
    },
    {
      sentence: 'The new mobile app enables passengers ------- their boarding passes without waiting in line at the check-in counter.',
      options: ['download', 'downloads', 'downloading', 'to download'],
      answer: 3,
      explanation: {
        vi: 'Sau **enables** có tân ngữ **passengers**, nên dùng khuôn enable + tân ngữ + to V → **to download**. download dễ gây nhầm vì giống help/let + tân ngữ + V, nhưng enable bắt buộc phải có to.',
        en: '**enables** is followed by the object **passengers**, so the pattern is enable + object + to V → **to download**. The bare form download is tempting by analogy with help/let + object + verb, but enable always needs to.',
      },
      translation: 'Ứng dụng di động mới giúp hành khách tải thẻ lên máy bay mà không phải xếp hàng tại quầy làm thủ tục.',
    },
    {
      sentence: 'Due to rising fuel costs, Pellham Bakery has stopped ------- free delivery on orders under $20.',
      options: ['offering', 'to offer', 'offer', 'offers'],
      answer: 0,
      explanation: {
        vi: '**stop + V-ing** là thôi hẳn một việc; lý do **due to rising fuel costs** cho thấy tiệm bánh đã thôi giao hàng miễn phí → **offering**. to offer sai nghĩa: stop to offer là dừng việc khác lại ĐỂ giao hàng miễn phí, trái với lý do chi phí tăng.',
        en: '**stop + V-ing** means quitting an activity; the reason **due to rising fuel costs** shows the bakery quit offering free delivery → **offering**. to offer clashes with the meaning: stop to offer would mean pausing something else IN ORDER TO offer free delivery, which contradicts rising costs.',
      },
      translation: 'Do chi phí nhiên liệu tăng, tiệm bánh Pellham đã ngừng giao hàng miễn phí cho các đơn dưới 20 đô la.',
    },
    {
      sentence: 'Our travel coordinator strongly recommends ------- your flight at least three weeks before the conference.',
      options: ['to book', 'booking', 'book', 'books'],
      answer: 1,
      explanation: {
        vi: '**recommends** đi với V-ing → **booking**. Bẫy là to book: recommend không đi với to V (muốn dùng mệnh đề thì phải là recommends that you book).',
        en: '**recommends** takes V-ing → **booking**. The trap is to book: recommend is not followed by to V (with a clause, it would be recommends that you book).',
      },
      translation: 'Điều phối viên du lịch của chúng tôi đặc biệt khuyên quý vị đặt vé máy bay ít nhất ba tuần trước hội nghị.',
    },
    {
      sentence: 'Two of our long-term suppliers have ------- to cover the shipping costs if we increase our order volume.',
      options: ['suggested', 'considered', 'avoided', 'offered'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là **to V (to cover)**, nên cần động từ đi với to V → **offered** (ngỏ ý). suggested, considered và avoided đều đi với V-ing; suggested dễ gây nhầm nhất vì cũng có nghĩa "đề nghị", nhưng suggest không bao giờ đi với to V.',
        en: 'The blank is followed by **to V (to cover)**, so we need a verb that takes to V → **offered**. suggested, considered and avoided all take V-ing; suggested is the most tempting because both words can mean "propose", but suggest never takes to V.',
      },
      translation: 'Hai nhà cung cấp lâu năm của chúng tôi đã ngỏ ý chịu chi phí vận chuyển nếu chúng tôi tăng khối lượng đặt hàng.',
    },
    {
      sentence: 'Staff members who work after 8 p.m. should remember ------- the alarm system before leaving the building.',
      options: ['activating', 'to activate', 'activate', 'activates'],
      answer: 1,
      explanation: {
        vi: '**should** và **before leaving** cho thấy đây là việc phải làm sắp tới → **remember + to V** (nhớ phải làm) → **to activate**. activating sai nghĩa vì remember + V-ing là nhớ lại một việc ĐÃ làm.',
        en: '**should** and **before leaving** show a task still to be done → **remember + to V** → **to activate**. activating clashes with the meaning, because remember + V-ing means recalling something already done.',
      },
      translation: 'Nhân viên làm việc sau 8 giờ tối cần nhớ bật hệ thống báo động trước khi rời khỏi toà nhà.',
    },
    {
      sentence: "After reviewing last year's sales figures, the board ------- opening two new stores in the Denver area.",
      options: ['decided', 'agreed', 'considered', 'hoped'],
      answer: 2,
      explanation: {
        vi: 'Sau chỗ trống là **V-ing (opening)**, nên cần động từ đi với V-ing → **considered** (đã cân nhắc). decided, agreed và hoped đều đi với to V (decided to open), không đi với V-ing.',
        en: 'The blank is followed by **V-ing (opening)**, so we need a verb that takes V-ing → **considered**. decided, agreed and hoped all take to V (decided to open), not V-ing.',
      },
      translation: 'Sau khi xem xét số liệu bán hàng năm ngoái, hội đồng quản trị đã cân nhắc việc mở hai cửa hàng mới ở khu vực Denver.',
    },
    {
      sentence: 'At Corwin Suites, we strive ------- every guest with fast, friendly, and dependable service.',
      options: ['to provide', 'providing', 'provide', 'provides'],
      answer: 0,
      explanation: {
        vi: '**strive** (nỗ lực) đi với to V → **to provide**. providing sai vì strive không đi với V-ing; provide và provides không đứng ngay sau strive được.',
        en: '**strive** takes to V → **to provide**. providing is wrong because strive does not take V-ing; provide and provides cannot follow strive directly.',
      },
      translation: 'Tại Corwin Suites, chúng tôi nỗ lực mang đến cho mọi vị khách dịch vụ nhanh chóng, thân thiện và đáng tin cậy.',
    },
    {
      sentence: 'At the quarterly meeting, Ms. Herrera ------- department heads to hold short meetings with their teams every Monday.',
      options: ['suggested', 'encouraged', 'insisted', 'mentioned'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là **tân ngữ (department heads) + to V (to hold)**, nên cần động từ thuộc nhóm + tân ngữ + to V → **encouraged**. suggested và insisted không đi với khuôn này (phải dùng suggested/insisted that…), còn mentioned không đi với tân ngữ chỉ người + to V.',
        en: 'The blank is followed by **an object (department heads) + to V (to hold)**, so we need a verb from the object + to V group → **encouraged**. suggested and insisted do not take this pattern (they would need that…), and mentioned does not take a person object + to V.',
      },
      translation: 'Tại cuộc họp quý, cô Herrera đã khuyến khích các trưởng phòng tổ chức họp ngắn với nhóm của mình vào mỗi thứ Hai.',
    },
  ],
};
