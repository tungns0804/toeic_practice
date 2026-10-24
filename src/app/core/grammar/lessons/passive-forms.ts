import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'passive-forms',
  intro: {
    vi: 'Bài này hệ thống hoá dạng bị động **be + V3** ở mọi thì, sau động từ khuyết thiếu, ở dạng **to be + V3** và **being + V3**, cùng nhóm nội động từ không có bị động. Trong Part 5/6, khi bốn lựa chọn là các dạng khác nhau của cùng một động từ, chọn đúng dạng bị động khớp với dấu hiệu thời gian là một điểm gỡ nhanh.',
    en: 'This lesson sets out the passive **be + V3** in every tense, after modals, as **to be + V3** and **being + V3**, together with the intransitive verbs that have no passive. In Part 5/6, when the four options are different forms of one verb, picking the passive form that matches the time marker is a quick point.',
  },
  mistakes: [
    {
      wrong: 'The conference room [[is cleaned]] right now, so please wait in the lobby.',
      right: 'The conference room [[is being cleaned]] right now, so please wait in the lobby.',
      explanation: {
        vi: '**right now** cho biết hành động đang diễn ra, nên cần bị động hiện tại tiếp diễn **am/is/are + being + V3**. is cleaned là hiện tại đơn, chỉ việc lặp lại thường xuyên.',
        en: '**right now** shows the action is in progress, so the Present Continuous passive **am/is/are + being + V3** is needed. is cleaned is the Present Simple, used for routines.',
      },
    },
    {
      wrong: 'Your refund [[has being]] processed and should appear on your statement within five days.',
      right: 'Your refund [[has been]] processed and should appear on your statement within five days.',
      explanation: {
        vi: 'Sau **has/have/had** luôn là **been** (V3 của be), không bao giờ là being. Bị động hiện tại hoàn thành có dạng has/have + been + V3.',
        en: 'After **has/have/had** comes **been** (the V3 of be), never being. The Present Perfect passive is has/have + been + V3.',
      },
    },
    {
      wrong: 'The final version of the contract [[was wrote]] by our legal team last month.',
      right: 'The final version of the contract [[was written]] by our legal team last month.',
      explanation: {
        vi: 'Phần sau **be** trong câu bị động phải là V3, không phải V2. write – wrote – **written**: wrote là quá khứ đơn, chỉ dùng trong câu chủ động.',
        en: 'The verb after **be** in a passive must be the V3, not the past simple form. write – wrote – **written**: wrote is the Past Simple and only appears in active sentences.',
      },
    },
    {
      wrong: 'A problem with the online payment system [[was occurred]] early this morning.',
      right: 'A problem with the online payment system [[occurred]] early this morning.',
      explanation: {
        vi: '**occur** là nội động từ (không có tân ngữ) nên không có dạng bị động, dù chủ ngữ là vật. Chỉ cần chia thì cho động từ: **occurred**.',
        en: '**occur** is intransitive (it takes no object), so it has no passive form, even with a thing as the subject. Simply put the verb in the right tense: **occurred**.',
      },
    },
    {
      wrong: 'Damaged items should [[been]] returned within fourteen days of delivery.',
      right: 'Damaged items should [[be]] returned within fourteen days of delivery.',
      explanation: {
        vi: 'Sau động từ khuyết thiếu (should, must, can, will…) là động từ nguyên mẫu, nên bị động là **modal + be + V3**. been chỉ đứng sau have/has/had.',
        en: 'A modal (should, must, can, will…) is followed by a base verb, so the passive is **modal + be + V3**. been only follows have/has/had.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Công thức gốc: be + V3', en: 'The core formula: be + V3' },
      body: {
        vi: 'Mọi động từ bị động đều gồm hai phần: **be** + **V3** (quá khứ phân từ). Thông tin về thì và về số ít/số nhiều nằm ở phần **be** cùng các trợ động từ đứng trước nó (is, was, has, will…); còn V3 thì giữ nguyên dù câu ở thì nào. Người hoặc vật thực hiện hành động, nếu cần nói ra, đứng sau **by**.',
        en: 'Every passive verb has two parts: **be** + **V3** (the past participle). Tense and singular/plural are shown by the **be** part and any auxiliaries in front of it (is, was, has, will…); the V3 stays the same in every tense. The doer, if it is mentioned at all, follows **by**.',
      },
      examples: [
        {
          en: 'The payroll software **is updated** every month.',
          vi: 'Phần mềm tính lương được cập nhật hằng tháng.',
        },
        {
          en: 'The payroll software **was updated** last night by an outside contractor.',
          vi: 'Phần mềm tính lương đã được một nhà thầu bên ngoài cập nhật tối qua.',
        },
        {
          en: 'The payroll software **will be updated** again next quarter.',
          vi: 'Phần mềm tính lương sẽ được cập nhật lại vào quý tới.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo chọn hình thức của be đứng ngay trước V3: thì tiếp diễn (sau **am/is/are/was/were**) dùng **being**; thì hoàn thành (sau **have/has/had**) dùng **been**; sau **modal** và sau **to** dùng **be**. Bộ ba be, being, been là nhóm đáp án nhiễu hay gặp nhất.',
          en: 'Choosing the form of be right before the V3: continuous tenses (after **am/is/are/was/were**) use **being**; perfect tenses (after **have/has/had**) use **been**; after a **modal** and after **to**, use **be**. be, being and been are the most common set of distractors.',
        },
      },
    },
    {
      heading: { vi: 'Bị động qua các thì', en: 'The passive in each tense' },
      body: {
        vi: 'Muốn đặt câu bị động ở thì nào, chỉ cần chia **be** ở đúng thì đó (chương 4) rồi thêm V3.',
        en: 'To make a passive in any tense, put **be** in that tense (chapter 4) and add the V3.',
      },
      table: {
        head: [
          { vi: 'Thì', en: 'Tense' },
          { vi: 'Công thức bị động', en: 'Passive form' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['Present Simple', 'am / is / are + V3', 'Orders are shipped within 24 hours.'],
          ['Present Continuous', 'am / is / are + being + V3', 'Your request is being processed.'],
          ['Present Perfect', 'has / have + been + V3', 'The invoice has been paid.'],
          ['Past Simple', 'was / were + V3', 'The lease was signed in May.'],
          ['Past Continuous', 'was / were + being + V3', 'The servers were being upgraded at 9 p.m.'],
          ['Past Perfect', 'had + been + V3', 'The tickets had been sold before the doors opened.'],
          ['Future Simple', 'will + be + V3', 'The samples will be delivered on Monday.'],
          ['be going to', 'am / is / are + going to + be + V3', 'The lobby is going to be repainted.'],
          ['Future Perfect', 'will + have + been + V3', 'All units will have been sold by May.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Dạng bị động của các thì hoàn thành tiếp diễn (has been being + V3) rất hiếm và TOEIC không hỏi. Trong đề, bị động ở thì hoàn thành gần như luôn là **has/have/had been + V3**, kể cả khi nói về một trạng thái kéo dài: The road **has been closed** since Monday.',
          en: 'The passive of the perfect continuous tenses (has been being + V3) is very rare and is not tested. On the test, a perfect passive is almost always **has/have/had been + V3**, even for a state that lasts: The road **has been closed** since Monday.',
        },
      },
    },
    {
      heading: { vi: 'Động từ khuyết thiếu + be + V3', en: 'Modal + be + V3' },
      body: {
        vi: 'Sau động từ khuyết thiếu (can, could, may, might, must, should, will, would) luôn là động từ nguyên mẫu không có to, nên bị động là **modal + be + V3**. Cả modal lẫn be đều không đổi theo chủ ngữ: The form **must be signed**. / The forms **must be signed**.',
        en: 'A modal (can, could, may, might, must, should, will, would) is always followed by a bare base verb, so the passive is **modal + be + V3**. Neither the modal nor be changes with the subject: The form **must be signed**. / The forms **must be signed**.',
      },
      points: [
        {
          vi: 'Phủ định: thêm **not** ngay sau modal: should **not** be used, can**not** be refunded.',
          en: 'Negative: put **not** straight after the modal: should **not** be used, can**not** be refunded.',
        },
        {
          vi: 'Câu hỏi: đưa modal lên trước chủ ngữ: **Can** the order **be changed** online?',
          en: 'Question: move the modal in front of the subject: **Can** the order **be changed** online?',
        },
      ],
      examples: [
        {
          en: 'Company laptops **must be returned** to the IT desk before your last day.',
          vi: 'Máy tính xách tay của công ty phải được trả lại cho quầy IT trước ngày làm việc cuối cùng của bạn.',
        },
        {
          en: 'The rooftop terrace **can be reserved** for private events of up to 80 guests.',
          vi: 'Có thể đặt sân thượng cho các sự kiện riêng tối đa 80 khách.',
        },
        {
          en: 'Late applications **will not be accepted** under any circumstances.',
          vi: 'Hồ sơ nộp trễ sẽ không được chấp nhận trong bất kỳ trường hợp nào.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không có **modal + been** (should been sent) hay **modal + being** (must being checked). Muốn nói "lẽ ra đã phải được gửi" thì dùng **should have been sent**, dạng modal hoàn thành bị động của bài 17.3.',
          en: 'There is no **modal + been** (should been sent) or **modal + being** (must being checked). To say "ought to have been sent", use **should have been sent**, the perfect modal passive of lesson 17.3.',
        },
      },
    },
    {
      heading: { vi: 'to be + V3 và being + V3', en: 'to be + V3 and being + V3' },
      body: {
        vi: 'Khi vị trí trống đòi một **to V** hoặc một **V-ing**, nhưng người/vật đứng trước lại là bên CHỊU tác động, ta dùng dạng bị động của chính chúng: **to be + V3** và **being + V3**.',
        en: 'When a position calls for a **to-infinitive** or a **V-ing** form, but the person or thing involved RECEIVES the action, use their passive forms: **to be + V3** and **being + V3**.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Dùng khi đứng sau', en: 'Used after' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'to be + V3',
            {
              vi: 'Động từ đi với to V (need, want, hope, plan, ask, deserve); tính từ đi với to V (likely, ready); have to, ought to, be going to',
              en: 'Verbs taking to V (need, want, hope, plan, ask, deserve); adjectives taking to V (likely, ready); have to, ought to, be going to',
            },
            'The ceiling tiles need to be replaced.',
          ],
          [
            'being + V3',
            {
              vi: 'Giới từ (without, after, before, by, instead of); động từ đi với V-ing (avoid, enjoy, appreciate, recall, risk, dislike); đầu câu, làm chủ ngữ',
              en: 'Prepositions (without, after, before, by, instead of); verbs taking V-ing (avoid, enjoy, appreciate, recall, risk, dislike); at the start, as the subject',
            },
            'Customers dislike being kept on hold.',
          ],
          [
            'to have been + V3 / having been + V3',
            {
              vi: 'Dạng hoàn thành: hành động bị động xảy ra TRƯỚC một thời điểm khác (chỉ cần nhận biết)',
              en: 'Perfect forms: the passive action happened BEFORE another time (recognition only)',
            },
            'The files appear to have been deleted.',
          ],
        ],
      },
      examples: [
        {
          en: 'All packages need **to be weighed** before they are labeled.',
          vi: 'Mọi kiện hàng cần được cân trước khi dán nhãn.',
        },
        {
          en: 'Ms. Lindqvist appreciated **being invited** to speak at the trade fair.',
          vi: 'Bà Lindqvist rất cảm kích khi được mời phát biểu tại hội chợ thương mại.',
        },
        {
          en: '**Being chosen** as Supplier of the Year has boosted our reputation.',
          vi: 'Việc được chọn là Nhà cung cấp của năm đã nâng cao uy tín của chúng tôi.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chữ **to** trong look forward to, be committed to, object to là GIỚI TỪ, nên dạng bị động theo sau là **being + V3**, không phải be + V3: I look forward to **being considered** for the position (bài 9.2).',
          en: 'The **to** in look forward to, be committed to and object to is a PREPOSITION, so the passive after it is **being + V3**, not be + V3: I look forward to **being considered** for the position (lesson 9.2).',
        },
      },
    },
    {
      heading: { vi: 'Đừng dùng V2 hay nguyên mẫu thay cho V3', en: 'Never use V2 or the base form for V3' },
      body: {
        vi: 'Đáp án nhiễu rất hay đặt V2 hoặc động từ nguyên mẫu vào chỗ cần V3: was hold, has been wrote, will be send. Động từ có quy tắc thì V2 và V3 giống nhau (đều thêm -ed), nên điều cần thuộc là cột V3 của động từ bất quy tắc.',
        en: 'Distractors often put a V2 or a base form where the V3 is needed: was hold, has been wrote, will be send. Regular verbs have identical V2 and V3 forms (both -ed), so what you must memorize is the V3 column of irregular verbs.',
      },
      table: {
        head: [
          { vi: 'Nguyên mẫu', en: 'Base form' },
          { vi: 'V2 (quá khứ đơn)', en: 'V2 (past simple)' },
          { vi: 'V3 (dùng trong bị động)', en: 'V3 (used in the passive)' },
        ],
        rows: [
          ['hold', 'held', 'held'],
          ['write', 'wrote', 'written'],
          ['choose', 'chose', 'chosen'],
          ['give', 'gave', 'given'],
          ['take', 'took', 'taken'],
          ['show', 'showed', 'shown'],
          ['oversee', 'oversaw', 'overseen'],
          ['undertake', 'undertook', 'undertaken'],
          ['withdraw', 'withdrew', 'withdrawn'],
          ['seek', 'sought', 'sought'],
          ['send / build / pay / lay (off)', 'sent / built / paid / laid', 'sent / built / paid / laid'],
          ['set / cut / put / shut', 'set / cut / put / shut', 'set / cut / put / shut'],
        ],
      },
      examples: [
        {
          en: 'The opening speech **was given** by the founder of Arcadia Foods.',
          vi: 'Bài phát biểu khai mạc do nhà sáng lập Arcadia Foods trình bày.',
        },
        {
          en: 'Three new suppliers **have been chosen** for the Da Nang plant.',
          vi: 'Ba nhà cung cấp mới đã được chọn cho nhà máy ở Đà Nẵng.',
        },
      ],
    },
    {
      heading: { vi: 'Nội động từ không có bị động', en: 'Intransitive verbs have no passive' },
      body: {
        vi: 'Chỉ **ngoại động từ** (động từ có tân ngữ) mới chuyển được sang bị động: someone signs the contract → the contract is signed. **Nội động từ** không có tân ngữ nên không bao giờ có dạng be + V3, kể cả khi chủ ngữ là vật.',
        en: 'Only **transitive verbs** (verbs that take an object) can be made passive: someone signs the contract → the contract is signed. **Intransitive verbs** take no object, so they never have a be + V3 form, even when the subject is a thing.',
      },
      points: [
        {
          vi: 'Nhóm hay gặp: **occur, happen, take place, arise** (xảy ra, phát sinh); **arrive, emerge, appear, disappear**; **rise, fall** (tăng, giảm); **remain, last, exist, expire**; **consist of, belong to, result in**.',
          en: 'Common ones: **occur, happen, take place, arise**; **arrive, emerge, appear, disappear**; **rise, fall**; **remain, last, exist, expire**; **consist of, belong to, result in**.',
        },
        {
          vi: '**rise** (tự tăng) là nội động từ, còn **raise** (nâng, tăng cái gì đó) là ngoại động từ: Costs **rose**. / Prices **were raised** by the supplier.',
          en: '**rise** (go up) is intransitive, while **raise** (put something up) is transitive: Costs **rose**. / Prices **were raised** by the supplier.',
        },
        {
          vi: '**remain** là động từ nối: remain + tính từ hoặc V3 dùng như tính từ (remain closed, remain unchanged) là đúng, nhưng **be remained** thì sai.',
          en: '**remain** is a linking verb: remain + an adjective or an adjective-like V3 (remain closed, remain unchanged) is correct, but **be remained** is wrong.',
        },
        {
          vi: 'Một vài ngoại động từ chỉ trạng thái cũng gần như không dùng bị động: **have** (sở hữu), **cost**, **lack**, **resemble**.',
          en: 'A few stative transitive verbs are almost never passive either: **have** (own), **cost**, **lack**, **resemble**.',
        },
        {
          vi: 'Ngược lại, nhiều cụm động từ + giới từ có tân ngữ vẫn có bị động, giới từ giữ nguyên sau V3: The complaint **was dealt with** promptly. / The issue **is being looked into**.',
          en: 'By contrast, many verb + preposition combinations that take an object do have a passive, with the preposition kept after the V3: The complaint **was dealt with** promptly. / The issue **is being looked into**.',
        },
      ],
      examples: [
        {
          en: 'A delay **occurred** because the customs forms were incomplete.',
          vi: 'Sự chậm trễ đã xảy ra vì tờ khai hải quan chưa đầy đủ.',
        },
        {
          en: 'The replacement parts **arrived** two days earlier than expected.',
          vi: 'Phụ tùng thay thế đã đến sớm hơn dự kiến hai ngày.',
        },
        {
          en: 'The terms of the agreement **remain unchanged** for the coming year.',
          vi: 'Các điều khoản của thoả thuận vẫn giữ nguyên trong năm tới.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Một số động từ vừa là nội vừa là ngoại động từ: **increase, decrease, open, close, change, improve, expand**. Khi chủ ngữ tự thay đổi thì dùng chủ động (Sales **increased** by 8%, ở đây by + con số không phải người thực hiện); khi có người tác động lên chủ ngữ thì bị động vẫn đúng (Fees **were increased** by the bank).',
          en: 'Some verbs are both intransitive and transitive: **increase, decrease, open, close, change, improve, expand**. When the subject changes by itself, use the active (Sales **increased** by 8%; here by + a figure is not a doer); when someone acts on the subject, the passive is still correct (Fees **were increased** by the bank).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu bị động trong Part 5', en: 'Attacking passive items in Part 5' },
      body: {
        vi: 'Khi đã biết chỗ trống cần bị động (cách nhận ra: bài 6.2), câu hỏi chỉ còn là chọn đúng DẠNG. Hãy nhìn từ đứng ngay trước chỗ trống, rồi đến dấu hiệu thời gian của câu.',
        en: 'Once you know the blank needs a passive (how to tell: lesson 6.2), the item is only about choosing the right FORM. Look at the word right before the blank, then at the time marker in the sentence.',
      },
      table: {
        head: [
          { vi: 'Trước chỗ trống là', en: 'Right before the blank' },
          { vi: 'Dạng cần chọn', en: 'Form to choose' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['will / can / must / should / may…', 'be + V3', 'must be signed'],
          ['has / have / had', 'been + V3', 'has been signed'],
          [
            'am / is / are / was / were',
            { vi: 'V3, hoặc being + V3 nếu đang diễn ra', en: 'V3, or being + V3 if in progress' },
            'was (being) signed',
          ],
          [{ vi: 'to (của to V)', en: 'to (of a to-infinitive)' }, 'be + V3', 'need to be signed'],
          [
            { vi: 'Giới từ, avoid, enjoy…', en: 'A preposition, avoid, enjoy…' },
            'being + V3',
            'without being signed',
          ],
          [
            { vi: 'Chủ ngữ (chỗ trống là cả cụm động từ)', en: 'The subject (the blank is the whole verb)' },
            { vi: 'be chia theo dấu hiệu thời gian + V3', en: 'be in the tense the time marker signals + V3' },
            'was signed yesterday',
          ],
        ],
      },
      points: [
        {
          vi: 'Bước 1: Loại ngay các dạng sai hình thức: modal + been/being, have + being, be + V2 hoặc nguyên mẫu (was hold, is write).',
          en: 'Step 1: Eliminate malformed options at once: modal + been/being, have + being, be + V2 or a base form (was hold, is write).',
        },
        {
          vi: 'Bước 2: Tìm dấu hiệu thời gian (yesterday, since, right now, next week, once a month…) để chọn thì cho be, rồi kiểm tra chủ ngữ số ít hay số nhiều (is/are, was/were, has/have).',
          en: 'Step 2: Find the time marker (yesterday, since, right now, next week, once a month…) to choose the tense of be, then check whether the subject is singular or plural (is/are, was/were, has/have).',
        },
        {
          vi: 'Bước 3: Nếu động từ là nội động từ (occur, arrive, remain…), loại mọi lựa chọn có be + V3 và chỉ chia thì cho động từ đó.',
          en: 'Step 3: If the verb is intransitive (occur, arrive, remain…), rule out every be + V3 option and just put the verb in the right tense.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The main lobby of the Harborview Hotel ------- right now, so guests are asked to use the side entrance on Pine Street.',
      options: ['has been renovated', 'is being renovated', 'was renovated', 'will be renovated'],
      answer: 1,
      explanation: {
        vi: '**right now** cho biết việc cải tạo đang diễn ra → bị động hiện tại tiếp diễn **is being + V3**. has been renovated nghĩa là đã cải tạo xong, was renovated là quá khứ, will be renovated là tương lai; cả ba đều mâu thuẫn với "ngay lúc này".',
        en: '**right now** shows the renovation is in progress → Present Continuous passive **is being + V3**. has been renovated means the work is finished, was renovated is past and will be renovated is future; none of them fits "right now".',
      },
      translation: 'Sảnh chính của khách sạn Harborview đang được cải tạo, vì vậy khách được đề nghị sử dụng lối vào bên hông trên phố Pine.',
    },
    {
      sentence: 'More than 40,000 parcels ------- through our new sorting center in Memphis since March.',
      options: ['were processed', 'are processed', 'have been processed', 'had processed'],
      answer: 2,
      explanation: {
        vi: '**since March** (từ tháng Ba đến nay) là dấu hiệu của hiện tại hoàn thành; chủ ngữ số nhiều parcels → **have been + V3**. were processed (quá khứ đơn) và are processed (hiện tại đơn) không đi với since + mốc thời gian; had processed là chủ động.',
        en: '**since March** (from March until now) signals the Present Perfect; the plural subject parcels → **have been + V3**. were processed (Past Simple) and are processed (Present Simple) do not go with since + a point in time; had processed is active.',
      },
      translation: 'Hơn 40.000 bưu kiện đã được xử lý tại trung tâm phân loại mới của chúng tôi ở Memphis kể từ tháng Ba.',
    },
    {
      sentence: "The annual shareholders' meeting ------- at the Westbrook Convention Center last Thursday.",
      options: ['was held', 'was hold', 'has been held', 'was holding'],
      answer: 0,
      explanation: {
        vi: '**last Thursday** là mốc quá khứ → bị động quá khứ đơn **was + V3**. hold là động từ bất quy tắc: hold – held – **held**, nên was hold sai. has been held không đi với mốc quá khứ cụ thể; was holding là chủ động và thiếu tân ngữ.',
        en: '**last Thursday** is a past time point → Past Simple passive **was + V3**. hold is irregular: hold – held – **held**, so was hold is wrong. has been held cannot go with a specific past time; was holding is active and lacks an object.',
      },
      translation: 'Cuộc họp cổ đông thường niên đã được tổ chức tại Trung tâm Hội nghị Westbrook vào thứ Năm tuần trước.',
    },
    {
      sentence: 'The winners of the employee design contest ------- at the awards dinner next Friday evening.',
      options: ['were announced', 'will announce', 'have been announced', 'will be announced'],
      answer: 3,
      explanation: {
        vi: '**next Friday** chỉ tương lai → bị động tương lai đơn **will be + V3**. will announce là chủ động và thiếu tân ngữ (người thắng cuộc được công bố chứ không tự công bố); were announced và have been announced mâu thuẫn với mốc tương lai next Friday.',
        en: '**next Friday** points to the future → Future Simple passive **will be + V3**. will announce is active and lacks an object (the winners are announced; they do not announce); were announced and have been announced clash with the future time next Friday.',
      },
      translation: 'Những người thắng cuộc thi thiết kế dành cho nhân viên sẽ được công bố tại bữa tiệc trao giải vào tối thứ Sáu tới.',
    },
    {
      sentence: 'All fire extinguishers in the building ------- by a certified technician once a month.',
      options: ['is inspected', 'are inspected', 'are inspecting', 'inspected'],
      answer: 1,
      explanation: {
        vi: '**once a month** chỉ việc lặp lại → hiện tại đơn; chủ ngữ số nhiều **extinguishers** → **are + V3**. is inspected sai hoà hợp số; are inspecting là chủ động dù phía sau có by + người thực hiện; còn inspected đứng một mình thì câu thiếu động từ chính.',
        en: '**once a month** marks a routine → Present Simple; the plural subject **extinguishers** → **are + V3**. is inspected breaks agreement; are inspecting is active even though by + the doer follows; inspected alone leaves the sentence without a main verb.',
      },
      translation: 'Tất cả bình chữa cháy trong toà nhà được một kỹ thuật viên có chứng chỉ kiểm tra mỗi tháng một lần.',
    },
    {
      sentence: 'The freight elevator ------- when the power went out, so the technicians had to finish the job the next day.',
      options: ['was being repaired', 'is being repaired', 'has been repaired', 'was repairing'],
      answer: 0,
      explanation: {
        vi: 'Việc sửa chữa đang diễn ra thì bị một hành động quá khứ cắt ngang (**when the power went out**) → bị động quá khứ tiếp diễn **was being + V3**. is being repaired và has been repaired là thì hiện tại, không khớp với went; was repairing là chủ động và thiếu tân ngữ.',
        en: 'The repair was in progress when a past action interrupted it (**when the power went out**) → Past Continuous passive **was being + V3**. is being repaired and has been repaired are present forms that do not match went; was repairing is active and lacks an object.',
      },
      translation: 'Thang máy chở hàng đang được sửa thì mất điện, vì vậy các kỹ thuật viên phải hoàn tất công việc vào ngày hôm sau.',
    },
    {
      sentence: 'Any changes to your delivery address should ------- to our customer service team at least 48 hours in advance.',
      options: ['been communicated', 'be communicated', 'being communicated', 'communicate'],
      answer: 1,
      explanation: {
        vi: 'Sau động từ khuyết thiếu **should** là động từ nguyên mẫu, nên bị động là **should be + V3**. been chỉ đứng sau have/has/had, being không đứng ngay sau modal; communicate là chủ động, trong khi thay đổi là thứ được thông báo.',
        en: 'A modal like **should** takes a base verb, so the passive is **should be + V3**. been only follows have/has/had, and being never comes straight after a modal; communicate is active, but the changes are what gets communicated.',
      },
      translation: 'Mọi thay đổi về địa chỉ giao hàng cần được thông báo cho bộ phận chăm sóc khách hàng của chúng tôi ít nhất 48 giờ trước.',
    },
    {
      sentence: 'The proposed changes to the parking regulations are likely ------- by the city council at its next meeting.',
      options: ['being approved', 'to approve', 'to be approved', 'be approved'],
      answer: 2,
      explanation: {
        vi: 'Tính từ **likely** đi với to V; những thay đổi được hội đồng thông qua (có **by the city council**) nên cần to V dạng bị động **to be + V3**. to approve là chủ động; being approved và be approved không đứng sau likely.',
        en: 'The adjective **likely** takes a to-infinitive; the changes are approved by the council (note **by the city council**), so the passive infinitive **to be + V3** is needed. to approve is active; being approved and be approved cannot follow likely.',
      },
      translation: 'Những thay đổi được đề xuất đối với quy định đỗ xe nhiều khả năng sẽ được hội đồng thành phố thông qua tại cuộc họp tới.',
    },
    {
      sentence: 'Visitors may not enter the research laboratory without ------- by a member of the security staff.',
      options: ['accompanying', 'accompanied', 'been accompanied', 'being accompanied'],
      answer: 3,
      explanation: {
        vi: 'Sau giới từ **without** cần V-ing; khách được nhân viên an ninh đi cùng (có **by** + người thực hiện) nên dùng V-ing bị động **being + V3**. accompanying là chủ động và thiếu tân ngữ; accompanied và been accompanied không đứng ngay sau giới từ.',
        en: 'The preposition **without** takes a V-ing form; visitors are accompanied by the security staff (note **by** + the doer), so the passive form **being + V3** is needed. accompanying is active and lacks an object; accompanied and been accompanied cannot follow a preposition directly.',
      },
      translation: 'Khách tham quan không được vào phòng thí nghiệm nghiên cứu nếu không có một nhân viên an ninh đi cùng.',
    },
    {
      sentence: 'A minor equipment malfunction ------- on the assembly line shortly after 2 p.m. yesterday.',
      options: ['was occurred', 'has been occurred', 'has occurred', 'occurred'],
      answer: 3,
      explanation: {
        vi: '**occur** là nội động từ (không có tân ngữ) nên không bao giờ có dạng bị động: loại was occurred và has been occurred. **yesterday** là mốc quá khứ nên chọn quá khứ đơn **occurred**, không chọn has occurred.',
        en: '**occur** is intransitive (it takes no object), so it never has a passive form: rule out was occurred and has been occurred. **yesterday** is a past time point, so the Past Simple **occurred** is right, not has occurred.',
      },
      translation: 'Một sự cố thiết bị nhỏ đã xảy ra trên dây chuyền lắp ráp ngay sau 2 giờ chiều hôm qua.',
    },
  ],
};
