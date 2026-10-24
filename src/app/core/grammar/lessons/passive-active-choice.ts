import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'passive-active-choice',
  intro: {
    vi: 'Bài này dạy cách quyết định chỗ trống cần động từ **chủ động** hay **bị động**: phép thử tân ngữ, xét nghĩa của chủ ngữ, bị động của động từ hai tân ngữ, bị động đi với giới từ cố định và mẫu **be expected/required to + V**. Part 5/6 thường xuyên có câu mà bốn lựa chọn là cùng một động từ ở cả hai thể, và chỉ cần nhìn đúng chỗ là giải được trong vài giây.',
    en: 'This lesson shows how to decide whether a blank needs an **active** or a **passive** verb: the object test, checking what the subject does, passives of two-object verbs, passives with fixed prepositions and the pattern **be expected/required to + V**. Part 5/6 regularly includes items whose four options are one verb in both voices, and they take seconds once you know where to look.',
  },
  mistakes: [
    {
      wrong: 'The quarterly sales report [[reviewed]] by the finance director yesterday.',
      right: 'The quarterly sales report [[was reviewed]] by the finance director yesterday.',
      explanation: {
        vi: 'Sau động từ không có tân ngữ mà chỉ có **by + người thực hiện**, và chủ ngữ (bản báo cáo) là vật chịu tác động → phải dùng bị động **was + V3**.',
        en: 'No object follows the verb, only **by + the doer**, and the subject (the report) receives the action → the passive **was + V3** is required.',
      },
    },
    {
      wrong: 'Mr. Holloway [[was signed]] the lease for the new office this morning.',
      right: 'Mr. Holloway [[signed]] the lease for the new office this morning.',
      explanation: {
        vi: 'Ngay sau động từ là tân ngữ **the lease**, và chính ông Holloway thực hiện việc ký → dùng chủ động. Đừng thêm was chỉ vì câu nói về quá khứ.',
        en: 'The verb is followed directly by the object **the lease**, and Mr. Holloway is the one signing → use the active. Do not add was just because the sentence is about the past.',
      },
    },
    {
      wrong: 'All attendees [[will send]] a confirmation email once their registration is complete.',
      right: 'All attendees [[will be sent]] a confirmation email once their registration is complete.',
      explanation: {
        vi: '**send** có hai tân ngữ (send someone something). Người tham dự là người NHẬN email nên dùng bị động **will be sent**; danh từ a confirmation email phía sau không có nghĩa là phải chọn chủ động.',
        en: '**send** takes two objects (send someone something). The attendees RECEIVE the email, so the passive **will be sent** is needed; the noun a confirmation email after it does not make the verb active.',
      },
    },
    {
      wrong: 'Our head office [[locates]] in the heart of the financial district.',
      right: 'Our head office [[is located]] in the heart of the financial district.',
      explanation: {
        vi: 'Muốn nói một toà nhà NẰM Ở đâu, dùng cụm bị động **be located in/at/on**. Động từ locate ở chủ động nghĩa là "tìm ra" hoặc "đặt (cái gì) ở đâu" và cần tân ngữ.',
        en: 'To say where a building IS, use the passive phrase **be located in/at/on**. Active locate means "find" or "put (something) somewhere" and needs an object.',
      },
    },
    {
      wrong: 'All employees [[require]] to complete the online safety course by June 30.',
      right: 'All employees [[are required]] to complete the online safety course by June 30.',
      explanation: {
        vi: 'Mẫu chủ động là **require + người + to V** (The company requires employees to…). Khi người lên làm chủ ngữ thì dùng **be required to + V**; tiếng Anh chuẩn không dùng "require to V" thiếu tân ngữ.',
        en: 'The active pattern is **require + person + to V** (The company requires employees to…). When the person becomes the subject, use **be required to + V**; standard English does not use "require to V" without an object.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Phép thử tân ngữ', en: 'The object test' },
      body: {
        vi: 'Khi bốn lựa chọn là cùng một động từ ở dạng chủ động và bị động, hãy nhìn ngay **sau chỗ trống**. Ngoại động từ ở thể chủ động cần một tân ngữ (danh từ hoặc đại từ chịu tác động); ở thể bị động (**be + V3**) thì không, vì tân ngữ đó đã được chuyển lên làm chủ ngữ.',
        en: 'When the four options are one verb in active and passive forms, look right **after the blank**. A transitive verb in the active needs an object (a noun or pronoun that receives the action); in the passive (**be + V3**) it does not, because that object has moved up to become the subject.',
      },
      table: {
        head: [
          { vi: 'Sau chỗ trống là', en: 'After the blank' },
          { vi: 'Nên chọn', en: 'Choose' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Danh từ / đại từ làm tân ngữ', en: 'A noun or pronoun object' },
            { vi: 'Chủ động', en: 'Active' },
            'The auditors **checked** the accounts.',
          ],
          [
            { vi: 'by + người / tổ chức thực hiện', en: 'by + the doer' },
            { vi: 'Bị động', en: 'Passive' },
            'The accounts **were checked** by the auditors.',
          ],
          [
            { vi: 'Giới từ, trạng từ hoặc hết câu', en: 'A preposition, an adverb or the end of the sentence' },
            { vi: 'Thường là bị động', en: 'Usually passive' },
            'The order **was shipped** on Monday.',
          ],
          [
            { vi: 'to + V nguyên mẫu ngay sau', en: 'to + base verb straight after' },
            { vi: 'Thường là bị động (mục 5)', en: 'Usually passive (section 5)' },
            'Guests **are asked** to check out by noon.',
          ],
        ],
      },
      examples: [
        {
          en: 'The supplier **delivered** the new printers on Tuesday.',
          vi: 'Nhà cung cấp đã giao những máy in mới vào thứ Ba.',
        },
        {
          en: 'The new printers **were delivered** on Tuesday.',
          vi: 'Những máy in mới đã được giao vào thứ Ba.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phép thử tân ngữ chỉ "thường" đúng. Ba ngoại lệ cần nhớ: (1) nội động từ như **arrive, occur, rise, remain** không có tân ngữ nhưng cũng KHÔNG có bị động (bài 6.1); (2) động từ hai tân ngữ ở thể bị động vẫn còn một danh từ theo sau (mục 3); (3) cụm thời gian như **last week, this morning, every day** đứng sau động từ không phải là tân ngữ.',
          en: 'The object test is only "usually" right. Three exceptions: (1) intransitive verbs such as **arrive, occur, rise, remain** take no object yet have NO passive (lesson 6.1); (2) a two-object verb in the passive is still followed by a noun (section 3); (3) time phrases such as **last week, this morning, every day** after the verb are not objects.',
        },
      },
    },
    {
      heading: { vi: 'Chủ ngữ làm hay chịu hành động?', en: 'Does the subject do the action or receive it?' },
      body: {
        vi: 'Phép thử thứ hai là xét nghĩa: chủ ngữ tự **thực hiện** hành động hay **chịu** hành động? Báo cáo, đơn hàng, cuộc họp, căn phòng không tự "duyệt", "giao", "tổ chức" hay "dọn dẹp" được, nên khi chủ ngữ là vật, động từ hành động thường ở thể bị động.',
        en: 'The second test is meaning: does the subject **do** the action or **receive** it? Reports, orders, meetings and rooms cannot approve, deliver, hold or clean anything themselves, so with a thing as subject an action verb is usually passive.',
      },
      points: [
        {
          vi: 'Chủ ngữ là vật + động từ hành động mà không có tân ngữ → bị động: The meeting **was postponed**. Invoices **are processed** every Friday.',
          en: 'Thing subject + action verb with no object → passive: The meeting **was postponed**. Invoices **are processed** every Friday.',
        },
        {
          vi: 'Vật vẫn làm chủ ngữ cho động từ CHỦ ĐỘNG được nếu phía sau có tân ngữ: The report **shows** a rise in sales. The package **contains** two manuals.',
          en: 'A thing can still be the subject of an ACTIVE verb when an object follows: The report **shows** a rise in sales. The package **contains** two manuals.',
        },
        {
          vi: 'Chủ ngữ là người có thể đi với cả hai thể (Ms. Lin **promoted** two assistants / Ms. Lin **was promoted** last year), nên lúc đó phải quay lại phép thử tân ngữ.',
          en: 'A person as subject can go with either voice (Ms. Lin **promoted** two assistants / Ms. Lin **was promoted** last year), so in that case go back to the object test.',
        },
      ],
      examples: [
        {
          en: "The keynote speech **was postponed** because the speaker's flight was delayed.",
          vi: 'Bài phát biểu chính đã bị hoãn vì chuyến bay của diễn giả bị trễ.',
        },
        {
          en: 'The new scheduling software **reduces** overtime costs by nearly 20 percent.',
          vi: 'Phần mềm xếp lịch mới giúp giảm chi phí làm thêm giờ gần 20 phần trăm.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**by** không phải lúc nào cũng báo hiệu bị động: by + mốc thời gian là hạn chót (by Friday), by + con số là mức chênh lệch (by 20 percent), by + phương tiện là cách thức (by courier). Ví dụ: Sales **rose** by 8 percent; We **will deliver** the order by Friday. Hãy xét tân ngữ và nghĩa trước.',
          en: '**by** does not always signal a passive: by + a time is a deadline (by Friday), by + a number is an amount of change (by 20 percent), and by + a means is a method (by courier). For example: Sales **rose** by 8 percent; We **will deliver** the order by Friday. Check the object and the meaning first.',
        },
      },
    },
    {
      heading: { vi: 'Bị động của động từ hai tân ngữ', en: 'Passives of verbs with two objects' },
      body: {
        vi: 'Một số động từ có hai tân ngữ: người nhận và vật được trao (give **someone** **something**), nên chúng có HAI câu bị động. Khi người nhận làm chủ ngữ, sau động từ bị động **vẫn còn một danh từ**; đừng vì thấy danh từ mà vội chọn chủ động.',
        en: 'Some verbs take two objects, a receiver and a thing (give **someone** **something**), so they have TWO passive versions. When the receiver is the subject, a noun **still follows** the passive verb; do not pick the active just because you see a noun.',
      },
      points: [
        {
          vi: 'Động từ hay gặp: **give, send, offer, award, grant, issue, pay, show, lend, promise, assign, charge**.',
          en: 'Common verbs: **give, send, offer, award, grant, issue, pay, show, lend, promise, assign, charge**.',
        },
        {
          vi: 'Người nhận làm chủ ngữ: **be + V3 + vật** (Mr. Ito was offered the job). Vật làm chủ ngữ: **be + V3 + to + người** (The job was offered to Mr. Ito).',
          en: 'Receiver as subject: **be + V3 + thing** (Mr. Ito was offered the job). Thing as subject: **be + V3 + to + person** (The job was offered to Mr. Ito).',
        },
      ],
      table: {
        head: [
          { vi: 'Chủ động', en: 'Active' },
          { vi: 'Bị động: người nhận làm chủ ngữ', en: 'Passive: receiver as subject' },
          { vi: 'Bị động: vật làm chủ ngữ', en: 'Passive: thing as subject' },
        ],
        rows: [
          ['The firm gave each manager a bonus.', 'Each manager **was given** a bonus.', 'A bonus **was given** to each manager.'],
          ['The hotel sent guests a survey.', 'Guests **were sent** a survey.', 'A survey **was sent** to guests.'],
          ['They offered Mr. Ito the job.', 'Mr. Ito **was offered** the job.', 'The job **was offered** to Mr. Ito.'],
          ['The bank granted the startup a loan.', 'The startup **was granted** a loan.', 'A loan **was granted** to the startup.'],
        ],
      },
      examples: [
        {
          en: 'All conference speakers **will be sent** a detailed schedule next week.',
          vi: 'Tất cả diễn giả của hội nghị sẽ được gửi lịch trình chi tiết vào tuần tới.',
        },
        {
          en: 'The renovation contract **was awarded to** a local construction firm.',
          vi: 'Hợp đồng cải tạo đã được trao cho một công ty xây dựng địa phương.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không phải động từ "trao, cung cấp" nào cũng theo mẫu này. **provide/supply** dùng mẫu provide someone with something: Employees **are provided with** laptops. **explain, describe, announce, suggest, introduce** chỉ có mẫu "vật + to + người": The changes **were explained to** the staff, KHÔNG nói "The staff were explained the changes".',
          en: 'Not every "give or supply" verb follows this pattern. **provide/supply** use the pattern provide someone with something: Employees **are provided with** laptops. **explain, describe, announce, suggest, introduce** only allow "thing + to + person": The changes **were explained to** the staff, NOT "The staff were explained the changes".',
        },
      },
    },
    {
      heading: { vi: 'Bị động đi với giới từ cố định', en: 'Passives with fixed prepositions' },
      body: {
        vi: 'Nhiều cụm **be + V3** mô tả trạng thái và đi với một **giới từ cố định** chứ không đi với by. Đề hỏi theo hai kiểu: chọn dạng bị động đứng trước giới từ (is located chứ không phải locates), hoặc chọn đúng giới từ sau V3 (equipped **with** a projector, không phải equipped by a projector).',
        en: 'Many **be + V3** phrases describe a state and take a **fixed preposition** rather than by. The test asks in two ways: choose the passive form before the preposition (is located, not locates), or choose the right preposition after the V3 (equipped **with** a projector, not equipped by a projector).',
      },
      table: {
        head: [
          { vi: 'Cụm từ', en: 'Phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['be located in/at/on', { vi: 'nằm ở', en: 'be situated in/at/on' }, 'The clinic **is located on** Pine Street.'],
          ['be based in', { vi: 'có trụ sở ở', en: 'have its main office in' }, 'Velora Foods **is based in** Lyon.'],
          ['be committed to', { vi: 'cam kết, tận tâm với', en: 'be dedicated to' }, 'We **are committed to** fair pricing.'],
          ['be interested in', { vi: 'quan tâm đến', en: 'want to know about or take part in' }, 'Are you **interested in** the sales role?'],
          ['be satisfied with', { vi: 'hài lòng với', en: 'be pleased with' }, 'Clients **were satisfied with** the design.'],
          ['be involved in', { vi: 'tham gia vào, liên quan đến', en: 'take part in' }, 'Ms. Ruiz **is involved in** the merger talks.'],
          ['be equipped with', { vi: 'được trang bị', en: 'have (devices, tools)' }, 'Each suite **is equipped with** a safe.'],
          ['be known for', { vi: 'nổi tiếng về', en: 'be famous for' }, 'The resort **is known for** its seafood.'],
          ['be composed of', { vi: 'gồm có', en: 'consist of' }, 'The panel **is composed of** five judges.'],
          ['be accompanied by', { vi: 'có kèm theo', en: 'come with' }, 'Claims must **be accompanied by** a receipt.'],
        ],
      },
      examples: [
        {
          en: 'Our new warehouse **is located near** the port, which will cut delivery times.',
          vi: 'Nhà kho mới của chúng tôi nằm gần cảng, điều này sẽ rút ngắn thời gian giao hàng.',
        },
        {
          en: 'Most respondents **were satisfied with** the speed of the repair service.',
          vi: 'Hầu hết người trả lời khảo sát hài lòng với tốc độ của dịch vụ sửa chữa.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**locate** ở thể chủ động nghĩa là "tìm ra" hoặc "đặt": Technicians quickly **located** the fault. Muốn nói một toà nhà nằm ở đâu, dùng **be located** (hoặc be situated). Với **be committed/dedicated to**, "to" là giới từ nên sau nó là danh từ hoặc V-ing (bài 9.2); cặp interested/interesting xem bài 14.1.',
          en: '**locate** in the active means "find" or "place": Technicians quickly **located** the fault. To say where a building is, use **be located** (or be situated). In **be committed/dedicated to**, "to" is a preposition, so a noun or V-ing follows (lesson 9.2); for interested vs interesting, see lesson 14.1.',
        },
      },
    },
    {
      heading: { vi: 'be expected / required / scheduled / advised to + V', en: 'be expected / required / scheduled / advised to + V' },
      body: {
        vi: 'Các động từ như expect, require, advise, encourage có mẫu chủ động **động từ + tân ngữ + to V** (The rules require visitors to sign in). Khi tân ngữ lên làm chủ ngữ, ta được **be + V3 + to V**: Visitors are required to sign in. Vì vậy nếu ngay sau chỗ trống là to V, không có tân ngữ chen giữa, thì thường phải chọn bị động.',
        en: 'Verbs such as expect, require, advise and encourage have the active pattern **verb + object + to V** (The rules require visitors to sign in). When the object becomes the subject, we get **be + V3 + to V**: Visitors are required to sign in. So if to V comes straight after the blank, with no object in between, the passive is usually the answer.',
      },
      points: [
        {
          vi: 'Nhóm hay gặp: be expected to, be required to, be scheduled to, be advised to, be asked to, be encouraged to, be reminded to, be invited to, be urged to (be allowed/permitted to học ở bài 17.2).',
          en: 'Common phrases: be expected to, be required to, be scheduled to, be advised to, be asked to, be encouraged to, be reminded to, be invited to, be urged to (be allowed/permitted to is covered in lesson 17.2).',
        },
        {
          vi: 'Phân biệt **be scheduled for** + danh từ/thời gian (The interview is scheduled for 3 p.m.) với **be scheduled to** + V (The interview is scheduled to begin at 3 p.m.).',
          en: 'Compare **be scheduled for** + noun/time (The interview is scheduled for 3 p.m.) with **be scheduled to** + V (The interview is scheduled to begin at 3 p.m.).',
        },
        {
          vi: 'Mẫu chủ động động từ + tân ngữ + to V được học kỹ ở bài 9.1; ở đây chỉ cần nhận ra: có tân ngữ trước to V → chủ động, không có → bị động.',
          en: 'The active pattern verb + object + to V is covered in lesson 9.1; here you only need to see: an object before to V → active, no object → passive.',
        },
      ],
      table: {
        head: [
          { vi: 'Chủ động: V + tân ngữ + to V', en: 'Active: V + object + to V' },
          { vi: 'Bị động: be + V3 + to V', en: 'Passive: be + V3 + to V' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['We expect the shipment to arrive on Monday.', 'The shipment **is expected to** arrive on Monday.', { vi: 'dự kiến sẽ', en: 'is predicted to' }],
          ['The rules require visitors to sign in.', 'Visitors **are required to** sign in.', { vi: 'bắt buộc phải', en: 'must' }],
          ['The organizers scheduled the launch to take place in May.', 'The launch **is scheduled to** take place in May.', { vi: 'theo lịch sẽ', en: 'is planned to' }],
          ['The airline advises passengers to check in online.', 'Passengers **are advised to** check in online.', { vi: 'được khuyến cáo nên', en: 'are recommended to' }],
          ['HR encourages staff to join the wellness program.', 'Staff **are encouraged to** join the wellness program.', { vi: 'được khuyến khích', en: 'are urged to' }],
        ],
      },
      examples: [
        {
          en: "Sales of the new model **are expected to exceed** last year's figures.",
          vi: 'Doanh số của mẫu sản phẩm mới được dự kiến sẽ vượt số liệu của năm ngoái.',
        },
        {
          en: 'All applicants **are required to submit** two letters of reference.',
          vi: 'Tất cả ứng viên bắt buộc phải nộp hai thư giới thiệu.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong nhóm này, riêng **expect** và **ask** có thể đi thẳng với to V ở thể chủ động khi chủ ngữ là người tự mong đợi hay tự đề nghị: We **expect to finish** by May. Khi chủ ngữ là vật (the shipment, the project, sales) thì phải dùng bị động: Sales **are expected to rise**. Còn require, advise, encourage, remind muốn đi với to V thì ở thể chủ động luôn cần tân ngữ chen giữa.',
          en: 'Within this group, only **expect** and **ask** can take to V directly in the active, when a person is the one expecting or asking: We **expect to finish** by May. With a thing as subject (the shipment, the project, sales), use the passive: Sales **are expected to rise**. require, advise, encourage and remind, when followed by to V, always need an object in between in the active.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chủ động/bị động trong Part 5', en: 'Tackling active/passive items in Part 5' },
      points: [
        {
          vi: 'Nhận dạng: bốn lựa chọn là cùng một động từ, có dạng có **be + V3** và dạng không có → câu chọn chủ động/bị động.',
          en: 'Spot it: the four options are one verb, some with **be + V3** and some without → an active/passive item.',
        },
        {
          vi: 'Nhìn ngay sau chỗ trống: có tân ngữ → chủ động; là by + người thực hiện, giới từ, trạng từ, dấu chấm hoặc to V → nghiêng về bị động.',
          en: 'Look right after the blank: an object → active; by + the doer, a preposition, an adverb, a full stop or to V → lean towards passive.',
        },
        {
          vi: 'Kiểm tra nghĩa: chủ ngữ tự làm hay chịu hành động? Chủ ngữ là vật, động từ là ngoại động từ, sau chỗ trống không có tân ngữ → gần như chắc chắn là bị động.',
          en: 'Check the meaning: does the subject do or receive the action? A thing as subject, a transitive verb and no object after the blank → almost certainly passive.',
        },
        {
          vi: 'Tránh bẫy: động từ hai tân ngữ (give, send, offer, issue) ở thể bị động vẫn có danh từ theo sau; cụm thời gian không phải tân ngữ; by + hạn chót hay con số không phải người thực hiện; nội động từ không có bị động.',
          en: 'Avoid the traps: two-object verbs (give, send, offer, issue) in the passive are still followed by a noun; time phrases are not objects; by + a deadline or a number is not the doer; intransitive verbs have no passive.',
        },
        {
          vi: 'Chọn xong thể mới xét thì và sự hoà hợp chủ ngữ – động từ (chương 3, chương 4, bài 6.1) để loại nốt các lựa chọn còn lại.',
          en: 'Once the voice is settled, check tense and subject–verb agreement (chapters 3 and 4, lesson 6.1) to eliminate the remaining options.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Khi chỉ còn hai lựa chọn khác nhau ở thể (will review / will be reviewed), đáp án thường nằm ngay ở từ đứng sau chỗ trống, không cần dịch cả câu.',
          en: 'When only two options remain and they differ in voice (will review / will be reviewed), the answer usually lies in the word right after the blank; there is no need to translate the whole sentence.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: "Ms. Patel's team ------- the quarterly budget report by Friday so that the directors can review it over the weekend.",
      options: ['will finalize', 'will be finalized', 'finalizing', 'to be finalized'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống có tân ngữ **the quarterly budget report**, và nhóm của cô Patel là bên thực hiện → chủ động **will finalize**. **by Friday** là hạn chót chứ không phải người thực hiện; will be finalized không thể có tân ngữ theo sau.',
        en: "The blank is followed by the object **the quarterly budget report**, and Ms. Patel's team does the work → active **will finalize**. **by Friday** is a deadline, not the doer; will be finalized cannot take an object.",
      },
      translation: 'Nhóm của cô Patel sẽ hoàn tất báo cáo ngân sách quý trước thứ Sáu để các giám đốc có thể xem xét nó trong cuối tuần.',
    },
    {
      sentence: 'All reimbursement requests must ------- by a department head before they are forwarded to the accounting office.',
      options: ['approve', 'approving', 'be approved', 'have approved'],
      answer: 2,
      explanation: {
        vi: 'Sau chỗ trống không có tân ngữ mà là **by a department head** (người thực hiện), và chủ ngữ requests là vật được duyệt → bị động **be approved** (modal + be + V3). approve và have approved là chủ động, cần tân ngữ.',
        en: 'No object follows the blank, only **by a department head** (the doer), and the subject requests is what gets approved → passive **be approved** (modal + be + V3). approve and have approved are active and need an object.',
      },
      translation: 'Mọi yêu cầu hoàn tiền phải được trưởng bộ phận phê duyệt trước khi được chuyển đến phòng kế toán.',
    },
    {
      sentence: 'The afternoon tour of the Dalton bottling plant ------- this morning because of a problem with the ventilation system.',
      options: ['canceled', 'was canceled', 'has canceled', 'canceling'],
      answer: 1,
      explanation: {
        vi: 'Chuyến tham quan không tự "huỷ" được mà là thứ bị huỷ, và ngay sau chỗ trống chỉ có **this morning**, một cụm thời gian chứ không phải tân ngữ → bị động **was canceled**. canceled và has canceled là chủ động nên phải có tân ngữ; canceling không làm động từ chính được.',
        en: 'A tour cannot cancel anything; it is what gets canceled, and the blank is followed only by **this morning**, a time phrase rather than an object → passive **was canceled**. canceled and has canceled are active and would need an object; canceling cannot be the main verb.',
      },
      translation: 'Chuyến tham quan nhà máy đóng chai Dalton vào buổi chiều đã bị huỷ sáng nay vì hệ thống thông gió gặp sự cố.',
    },
    {
      sentence: 'Each new employee ------- a laptop and a security badge by the IT department on the first day of orientation.',
      options: ['will issue', 'issuing', 'has issued', 'will be issued'],
      answer: 3,
      explanation: {
        vi: '**issue** có hai tân ngữ (issue someone something). Nhân viên mới là người NHẬN, và **by the IT department** chỉ bên thực hiện → bị động **will be issued**, dù phía sau vẫn còn danh từ a laptop. will issue sẽ biến nhân viên mới thành người phát máy.',
        en: '**issue** takes two objects (issue someone something). The new employee RECEIVES the items, and **by the IT department** names the doer → passive **will be issued**, even though a noun (a laptop) still follows. will issue would make the new employee the one handing out laptops.',
      },
      translation: 'Mỗi nhân viên mới sẽ được bộ phận IT cấp một máy tính xách tay và một thẻ ra vào vào ngày đầu tiên của chương trình định hướng.',
    },
    {
      sentence: "Guests who book directly through the Bayside Inn's website ------- a free room upgrade whenever one is available.",
      options: ['offer', 'offering', 'have offered', 'are offered'],
      answer: 3,
      explanation: {
        vi: '**offer someone something** → bị động **someone is offered something**. Khách là người NHẬN ưu đãi (do khách sạn đưa ra) nên dùng **are offered**. offer/have offered (chủ động) nghĩa là chính khách đưa ra ưu đãi nâng hạng phòng, vô lý; offering không làm động từ chính được.',
        en: '**offer someone something** → passive **someone is offered something**. The guests RECEIVE the upgrade (from the inn), so **are offered** is right. Active offer/have offered would mean the guests give out the upgrade, which makes no sense; offering cannot be the main verb.',
      },
      translation: 'Khách đặt phòng trực tiếp qua trang web của Bayside Inn được ưu đãi nâng hạng phòng miễn phí mỗi khi có phòng trống.',
    },
    {
      sentence: 'The new distribution center ------- just outside Riverton, about ten minutes from the international airport.',
      options: ['locates', 'location', 'is located', 'locating'],
      answer: 2,
      explanation: {
        vi: 'Câu mô tả VỊ TRÍ của một toà nhà và sau chỗ trống không có tân ngữ → dùng cụm bị động **is located** (nằm ở). locates là chủ động, nghĩa là "tìm ra/đặt" và cần tân ngữ; location là danh từ, locating không làm động từ chính được.',
        en: 'The sentence describes where a building IS and no object follows the blank → use the passive phrase **is located**. locates is active, meaning "find/place", and needs an object; location is a noun and locating cannot be the main verb.',
      },
      translation: 'Trung tâm phân phối mới nằm ngay ngoại ô Riverton, cách sân bay quốc tế khoảng mười phút.',
    },
    {
      sentence: 'All meeting rooms on the fifth floor are equipped ------- a projector, a whiteboard, and a video conferencing system.',
      options: ['with', 'by', 'of', 'at'],
      answer: 0,
      explanation: {
        vi: '**be equipped with** (được trang bị) là cụm bị động đi với giới từ cố định **with**. by chỉ dùng khi nói ai trang bị (equipped by a contractor), không đứng trước chính thiết bị.',
        en: '**be equipped with** is a passive phrase with the fixed preposition **with**. by would only introduce who did the equipping (equipped by a contractor), never the equipment itself.',
      },
      translation: 'Tất cả các phòng họp ở tầng năm đều được trang bị máy chiếu, bảng trắng và hệ thống họp trực tuyến.',
    },
    {
      sentence: 'The shipment of replacement parts ------- to arrive at our Busan plant no later than Thursday morning.',
      options: ['expects', 'is expecting', 'is expected', 'expecting'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ **the shipment** (lô hàng) là vật, không thể tự "mong đợi"; theo sau là **to arrive** → dùng mẫu bị động **be expected to + V** (dự kiến sẽ). expects và is expecting là chủ động, chỉ hợp với chủ ngữ là người.',
        en: 'The subject **the shipment** is a thing that cannot "expect" anything, and **to arrive** follows → use the passive pattern **be expected to + V**. expects and is expecting are active and only suit a person as subject.',
      },
      translation: 'Lô hàng phụ tùng thay thế dự kiến sẽ đến nhà máy Busan của chúng tôi chậm nhất vào sáng thứ Năm.',
    },
    {
      sentence: 'Passengers ------- to arrive at the departure gate at least forty minutes before boarding begins.',
      options: ['advise', 'are advised', 'advising', 'have advised'],
      answer: 1,
      explanation: {
        vi: 'Mẫu chủ động là **advise + người + to V**; ở đây **to arrive** đứng ngay sau chỗ trống, không có tân ngữ, và hành khách là người NHẬN lời khuyên → bị động **are advised**. advise và have advised thiếu tân ngữ trước to V.',
        en: 'The active pattern is **advise + person + to V**; here **to arrive** comes straight after the blank with no object, and the passengers RECEIVE the advice → passive **are advised**. advise and have advised lack an object before to V.',
      },
      translation: 'Hành khách được khuyến cáo có mặt tại cửa khởi hành ít nhất bốn mươi phút trước khi bắt đầu lên máy bay.',
    },
    {
      sentence: "The revised travel policy ------- all employees to book flights through the company's approved travel agency.",
      options: ['is required', 'requires', 'requiring', 'has been required'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống có tân ngữ **all employees** rồi mới đến to book → mẫu chủ động **require + người + to V**, nên chọn **requires**. Chủ ngữ là vật (chính sách) vẫn dùng chủ động được khi có tân ngữ; is required và has been required không thể có tân ngữ theo sau.',
        en: 'The blank is followed by the object **all employees** and then to book → the active pattern **require + person + to V**, so **requires** is right. A thing (the policy) can be an active subject when there is an object; is required and has been required cannot take an object.',
      },
      translation: 'Chính sách công tác mới sửa đổi yêu cầu toàn bộ nhân viên đặt vé máy bay thông qua đại lý du lịch được công ty phê duyệt.',
    },
  ],
};
