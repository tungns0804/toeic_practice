import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-past',
  intro: {
    vi: 'Bài này dạy cách chọn giữa **quá khứ đơn** (hành động đã xong tại một thời điểm xác định) và **quá khứ tiếp diễn** (hành động đang diễn ra trong quá khứ), kèm các động từ bất quy tắc hay gặp. Ở Part 5/6, bốn lựa chọn thường là cùng một động từ chia ở nhiều thì, và câu gần như luôn có sẵn một dấu hiệu như ago, last, yesterday, while hay at this time yesterday.',
    en: 'This lesson teaches you to choose between the **Past Simple** (an action completed at a definite time) and the **Past Continuous** (an action in progress in the past), along with the most common irregular verbs. In Part 5/6, the four options are usually one verb in several tenses, and the sentence almost always contains a signal such as ago, last, yesterday, while or at this time yesterday.',
  },
  mistakes: [
    {
      wrong: 'Our team [[has finished]] the quarterly audit two days ago.',
      right: 'Our team [[finished]] the quarterly audit two days ago.',
      explanation: {
        vi: '**ago** đánh dấu một thời điểm đã kết thúc trong quá khứ nên phải dùng quá khứ đơn. Hiện tại hoàn thành không bao giờ đi với ago.',
        en: '**ago** marks a finished point in the past, so the Past Simple is required. The Present Perfect never goes with ago.',
      },
    },
    {
      wrong: 'Did the supplier [[sent]] the revised invoice yesterday?',
      right: 'Did the supplier [[send]] the revised invoice yesterday?',
      explanation: {
        vi: 'Trong câu hỏi và câu phủ định, dấu hiệu quá khứ đã nằm ở trợ động từ **did**, nên động từ chính phải trở về dạng nguyên mẫu **send**.',
        en: 'In questions and negatives, the past is already shown by the auxiliary **did**, so the main verb must return to its base form **send**.',
      },
    },
    {
      wrong: 'The trade fair [[begun]] yesterday morning with a speech by the mayor.',
      right: 'The trade fair [[began]] yesterday morning with a speech by the mayor.',
      explanation: {
        vi: 'begin là động từ bất quy tắc: begin – **began** – begun. **begun** là V3, chỉ dùng sau have/has/had hoặc be, không đứng một mình làm động từ chính.',
        en: 'begin is irregular: begin – **began** – begun. **begun** is a V3; it follows have/has/had or be and can never be the main verb on its own.',
      },
    },
    {
      wrong: 'The engineers [[tested]] the new software when the system suddenly crashed.',
      right: 'The engineers [[were testing]] the new software when the system suddenly crashed.',
      explanation: {
        vi: 'Việc kiểm thử đang diễn ra thì hệ thống sập (một sự việc ngắn xen vào). Hành động dài bị cắt ngang phải chia quá khứ tiếp diễn **was/were + V-ing**.',
        en: 'The testing was in progress when the system crashed (a short event that cut in). The long, interrupted action takes the Past Continuous **was/were + V-ing**.',
      },
    },
    {
      wrong: 'At this time yesterday, Ms. Kowalski [[flew]] to Singapore for a client meeting.',
      right: 'At this time yesterday, Ms. Kowalski [[was flying]] to Singapore for a client meeting.',
      explanation: {
        vi: '**At this time yesterday** chỉ một thời điểm cụ thể trong quá khứ mà lúc đó hành động đang diễn ra, nên dùng quá khứ tiếp diễn **was flying**.',
        en: '**At this time yesterday** points to a specific past moment when the action was in progress, so the Past Continuous **was flying** is needed.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quá khứ đơn: công thức', en: 'Past Simple: form' },
      body: {
        vi: 'Quá khứ đơn diễn tả một hành động đã xảy ra và **kết thúc** tại một thời điểm xác định trong quá khứ. Động từ có quy tắc thêm **-ed**, động từ bất quy tắc có dạng V2 riêng; câu phủ định và câu hỏi mượn trợ động từ **did**, nên động từ chính trở về nguyên mẫu.',
        en: 'The Past Simple describes an action that happened and **finished** at a definite time in the past. Regular verbs add **-ed** and irregular verbs have their own V2 form; negatives and questions use the auxiliary **did**, so the main verb returns to its base form.',
      },
      table: {
        head: [
          { vi: 'Dạng câu', en: 'Sentence type' },
          { vi: 'Công thức', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Khẳng định', en: 'Affirmative' }, 'S + V2 (V-ed or irregular form)', 'The client signed the lease.'],
          [{ vi: 'Phủ định', en: 'Negative' }, "S + did not (didn't) + base verb", "The client didn't sign the lease."],
          [{ vi: 'Nghi vấn', en: 'Question' }, 'Did + S + base verb?', 'Did the client sign the lease?'],
          [
            { vi: 'Động từ be', en: 'The verb be' },
            'was (I, he, she, it, singular nouns) / were (you, we, they, plural nouns)',
            'The meeting rooms were fully booked last week.',
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Sau **did / did not / didn\'t** luôn là động từ nguyên mẫu: Did you **send** the file? (không phải sent). Dấu hiệu quá khứ chỉ xuất hiện một lần, ở did.',
          en: "After **did / did not / didn't** always use the base verb: Did you **send** the file? (not sent). The past is marked only once, on did.",
        },
      },
    },
    {
      heading: { vi: 'Dấu hiệu nhận biết quá khứ đơn', en: 'Past Simple signals' },
      body: {
        vi: 'Quá khứ đơn đi với những cụm chỉ thời điểm **đã kết thúc**, tách hẳn khỏi hiện tại. Thấy các cụm dưới đây, hãy nghĩ ngay tới quá khứ đơn và loại các thì hiện tại; quá khứ tiếp diễn chỉ thay thế khi câu nói về một hành động ĐANG diễn ra (mục 4).',
        en: 'The Past Simple goes with expressions for a time that is **over** and cut off from the present. When you see the expressions below, think Past Simple first and rule out the present tenses; the Past Continuous takes over only when the sentence describes an action IN PROGRESS (section 4).',
      },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Ví dụ', en: 'Examples' },
          { vi: 'Lưu ý', en: 'Note' },
        ],
        rows: [
          [
            '... ago',
            'two weeks ago, a few minutes ago, long ago',
            { vi: 'Đứng SAU khoảng thời gian, tính lùi từ hiện tại', en: 'Follows the time period and counts back from now' },
          ],
          [
            'last + time',
            'last week, last quarter, last Monday, last night',
            { vi: 'Không có the, không có giới từ: last Monday, không nói on last Monday', en: 'No the and no preposition: last Monday, not on last Monday' },
          ],
          [
            'yesterday',
            'yesterday, yesterday afternoon, the day before yesterday',
            { vi: 'Tối/đêm qua thường nói last night thay vì yesterday night', en: 'For the night before, say last night rather than yesterday night' },
          ],
          [
            'in + past year',
            'in 2019, in the 1990s, in May 2023',
            { vi: 'Chỉ khi năm đó đã qua; in 2030 là tương lai', en: 'Only when that year is over; in 2030 refers to the future' },
          ],
          [
            'when + past clause',
            'when the firm opened, when I joined the company',
            { vi: 'Mệnh đề when đánh dấu một thời điểm trong quá khứ', en: 'The when-clause marks a point in the past' },
          ],
          [
            'When ...? (question)',
            'When did the shipment arrive?',
            { vi: 'Hỏi When về một thời điểm đã qua thì dùng quá khứ đơn, không dùng hiện tại hoàn thành', en: 'A When-question about a past moment takes the Past Simple, not the Present Perfect' },
          ],
        ],
      },
      examples: [
        {
          en: 'Mr. Barros **joined** the legal department three years **ago**.',
          vi: 'Ông Barros vào làm ở phòng pháp chế ba năm trước.',
        },
        {
          en: 'The Seaview Hotel **hosted** more than 200 conferences **last year**.',
          vi: 'Khách sạn Seaview đã tổ chức hơn 200 hội nghị vào năm ngoái.',
        },
        {
          en: '**When** the factory **opened** in 1998, it **employed** only forty workers.',
          vi: 'Khi nhà máy mở cửa vào năm 1998, nó chỉ thuê bốn mươi công nhân.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng nhầm **last week** (tuần trước, đã kết thúc → quá khứ đơn) với **in/over the last week** hay **over the past three years** (khoảng thời gian kéo dài tới bây giờ → thường dùng hiện tại hoàn thành, bài 4.2).',
          en: 'Do not confuse **last week** (the previous week, now over → Past Simple) with **in/over the last week** or **over the past three years** (a period running up to now → usually the Present Perfect, lesson 4.2).',
        },
      },
    },
    {
      heading: { vi: 'Cách tạo V2: có quy tắc và bất quy tắc', en: 'Forming V2: regular and irregular verbs' },
      points: [
        {
          vi: 'Đa số động từ có quy tắc chỉ thêm **-ed**: order → ordered, request → requested. Tận cùng **-e** thì chỉ thêm **-d**: hire → hired, approve → approved.',
          en: 'Most regular verbs simply add **-ed**: order → ordered, request → requested. Verbs ending in **-e** add only **-d**: hire → hired, approve → approved.',
        },
        {
          vi: 'Phụ âm + **y** → đổi thành **-ied**: apply → applied, supply → supplied. Nguyên âm + y thì giữ nguyên y: delay → delayed, employ → employed.',
          en: 'Consonant + **y** → change to **-ied**: apply → applied, supply → supplied. Vowel + y keeps the y: delay → delayed, employ → employed.',
        },
        {
          vi: 'Động từ một âm tiết tận cùng bằng một nguyên âm + một phụ âm → **gấp đôi** phụ âm cuối: ship → shipped, plan → planned. Động từ hai âm tiết thường chỉ gấp đôi khi trọng âm rơi vào âm cuối: prefer → preferred, admit → admitted; còn offer → offered, visit → visited. Không gấp đôi w, x, y: fix → fixed, allow → allowed.',
          en: 'One-syllable verbs ending in one vowel + one consonant **double** the final consonant: ship → shipped, plan → planned. Two-syllable verbs normally double it only when the stress falls on the last syllable: prefer → preferred, admit → admitted; but offer → offered, visit → visited. Never double w, x or y: fix → fixed, allow → allowed.',
        },
        {
          vi: 'Tận cùng một nguyên âm + **l**: Anh-Anh gấp đôi (cancelled, travelled), Anh-Mỹ thì không (canceled, traveled); cả hai cách viết đều đúng.',
          en: 'Ending in a single vowel + **l**: British English doubles the l (cancelled, travelled), American English does not (canceled, traveled); both spellings are correct.',
        },
        {
          vi: 'Động từ **bất quy tắc** không thêm -ed mà có dạng V2 riêng, chia thành ba nhóm: V2 khác V3 (begin – began – begun), V2 trùng V3 (hold – held – held), và ba dạng giống hệt nhau (cost, cut, put, set, shut).',
          en: '**Irregular** verbs do not add -ed; they have their own V2 and fall into three groups: V2 different from V3 (begin – began – begun), V2 the same as V3 (hold – held – held), and all three forms identical (cost, cut, put, set, shut).',
        },
      ],
      table: {
        head: [
          { vi: 'Nguyên mẫu', en: 'Base form' },
          { vi: 'Quá khứ đơn (V2)', en: 'Past Simple (V2)' },
          { vi: 'V3/quá khứ phân từ', en: 'V3 (past participle)' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['begin', 'began', 'begun', { vi: 'bắt đầu', en: 'start' }],
          ['choose', 'chose', 'chosen', { vi: 'chọn', en: 'select' }],
          ['take', 'took', 'taken', { vi: 'mất (thời gian); nhận, lấy', en: 'need (time); pick up, accept' }],
          ['write', 'wrote', 'written', { vi: 'viết, soạn', en: 'compose' }],
          ['undergo', 'underwent', 'undergone', { vi: 'trải qua (cải tạo, kiểm tra)', en: 'go through (renovation, inspection)' }],
          ['rise', 'rose', 'risen', { vi: 'tăng (không có tân ngữ)', en: 'go up (no object)' }],
          ['fall', 'fell', 'fallen', { vi: 'giảm, rơi', en: 'drop, decrease' }],
          ['hold', 'held', 'held', { vi: 'tổ chức (cuộc họp, sự kiện)', en: 'organize (a meeting, an event)' }],
          ['lead', 'led', 'led', { vi: 'dẫn dắt, chủ trì', en: 'direct, head' }],
          ['meet', 'met', 'met', { vi: 'gặp; đáp ứng (yêu cầu)', en: 'see; satisfy (a requirement)' }],
          ['pay', 'paid', 'paid', { vi: 'trả tiền', en: 'settle (a bill)' }],
          ['send', 'sent', 'sent', { vi: 'gửi', en: 'dispatch' }],
          ['spend', 'spent', 'spent', { vi: 'tiêu (tiền), dành (thời gian)', en: 'use (money, time)' }],
          ['buy', 'bought', 'bought', { vi: 'mua', en: 'purchase' }],
          ['build', 'built', 'built', { vi: 'xây dựng', en: 'construct' }],
          ['cost', 'cost', 'cost', { vi: 'có giá, tốn (tiền)', en: 'have a price of' }],
          ['set', 'set', 'set', { vi: 'đặt ra, ấn định', en: 'establish (a target, a date)' }],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Hai cặp bẫy kinh điển: **rise – rose – risen** (tự tăng, không có tân ngữ: Prices rose) khác **raise – raised – raised** (làm tăng, cần tân ngữ: The store raised prices); **find – found – found** (tìm thấy) khác **found – founded – founded** (thành lập: Ms. Castellano founded the agency in 2005). Và nhớ: V3 như begun, chosen, taken không bao giờ đứng một mình làm động từ chính.',
          en: 'Two classic traps: **rise – rose – risen** (go up by itself, no object: Prices rose) versus **raise – raised – raised** (make something go up, needs an object: The store raised prices); **find – found – found** (discover) versus **found – founded – founded** (establish: Ms. Castellano founded the agency in 2005). And remember: a V3 such as begun, chosen or taken is never the main verb on its own.',
        },
      },
    },
    {
      heading: { vi: 'Quá khứ tiếp diễn: was/were + V-ing', en: 'Past Continuous: was/were + V-ing' },
      body: {
        vi: 'Quá khứ tiếp diễn (**was/were + V-ing**) mô tả một hành động **đang diễn ra** tại một thời điểm hoặc trong một khoảng thời gian ở quá khứ: ta nhìn vào "khúc giữa" của hành động, không quan tâm nó bắt đầu hay kết thúc lúc nào.',
        en: 'The Past Continuous (**was/were + V-ing**) describes an action **in progress** at a moment or over a period in the past: we look at the "middle" of the action, not at when it started or finished.',
      },
      points: [
        {
          vi: 'Đang diễn ra tại một **thời điểm cụ thể** trong quá khứ: **at this time yesterday**, **at 10 a.m. last Monday**, **this time last week**, **at that moment**.',
          en: 'In progress at a **specific moment** in the past: **at this time yesterday**, **at 10 a.m. last Monday**, **this time last week**, **at that moment**.',
        },
        {
          vi: 'Đang diễn ra thì **bị cắt ngang** bởi một sự việc ngắn chia quá khứ đơn: **was/were doing … when … did**.',
          en: 'In progress when it was **interrupted** by a short event in the Past Simple: **was/were doing … when … did**.',
        },
        {
          vi: 'Hai hành động **cùng kéo dài song song**: **While** A was doing…, B was doing….',
          en: 'Two actions **in progress at the same time**: **While** A was doing…, B was doing….',
        },
        {
          vi: 'Chủ ngữ số ít (và I) dùng **was**; chủ ngữ số nhiều (và you) dùng **were**.',
          en: 'Singular subjects (and I) take **was**; plural subjects (and you) take **were**.',
        },
      ],
      table: {
        head: [
          { vi: 'Dạng câu', en: 'Sentence type' },
          { vi: 'Công thức', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Khẳng định', en: 'Affirmative' }, 'S + was/were + V-ing', 'The team was testing the new app.'],
          [{ vi: 'Phủ định', en: 'Negative' }, "S + wasn't/weren't + V-ing", "The printers weren't working properly."],
          [{ vi: 'Nghi vấn', en: 'Question' }, 'Was/Were + S + V-ing?', 'Were the guests waiting in the lobby?'],
        ],
      },
      examples: [
        {
          en: '**At this time yesterday**, Ms. Moreau **was interviewing** candidates for the analyst position.',
          vi: 'Giờ này hôm qua, cô Moreau đang phỏng vấn các ứng viên cho vị trí chuyên viên phân tích.',
        },
        {
          en: 'The accountants **were preparing** the annual report **when** the auditors **arrived**.',
          vi: 'Các kế toán viên đang chuẩn bị báo cáo thường niên thì đoàn kiểm toán đến.',
        },
        {
          en: '**While** the movers **were loading** the truck, the office manager **was labeling** the boxes.',
          vi: 'Trong lúc nhân viên chuyển văn phòng đang chất đồ lên xe tải, quản lý văn phòng đang dán nhãn các thùng hàng.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Động từ trạng thái (know, own, belong, need, seem…) không dùng ở dạng tiếp diễn, kể cả khi đóng vai hành động nền: When the merger was announced, few employees **knew** the details (không nói were knowing). Xem bài 4.1.',
          en: 'State verbs (know, own, belong, need, seem…) are not used in the continuous, even as the background action: When the merger was announced, few employees **knew** the details (not were knowing). See lesson 4.1.',
        },
      },
    },
    {
      heading: { vi: 'Hành động dài và hành động ngắn: when và while', en: 'Long and short actions: when and while' },
      body: {
        vi: 'Khi câu có hai hành động trong quá khứ, hành động **dài** (nền, đang diễn ra) chia quá khứ tiếp diễn, còn hành động **ngắn** (xen vào) chia quá khứ đơn. **when** thường đứng trước hành động ngắn, **while** thường đứng trước hành động dài.',
        en: 'When a sentence has two past actions, the **long** one (the background, in progress) takes the Past Continuous and the **short** one (the event that cuts in) takes the Past Simple. **when** usually introduces the short action; **while** usually introduces the long one.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Ý nghĩa', en: 'Meaning' },
        ],
        rows: [
          [
            'S + was/were V-ing + when + S + V2',
            'We were reviewing the budget when the director called.',
            { vi: 'Đang làm A thì B xen vào', en: 'A was in progress when B happened' },
          ],
          [
            'While + S + was/were V-ing, S + V2',
            'While Mr. Whitfield was driving to the airport, the airline canceled his flight.',
            { vi: 'Như trên; while đứng trước hành động dài', en: 'Same idea; while introduces the long action' },
          ],
          [
            'While + S + was/were V-ing, S + was/were V-ing',
            'While the chef was cooking, the waiters were setting the tables.',
            { vi: 'Hai hành động song song', en: 'Two actions in progress at the same time' },
          ],
          [
            'When + S + V2, S + V2',
            'When the client arrived, the receptionist called Mr. Soto.',
            { vi: 'Hai hành động nối tiếp: B xảy ra sau A', en: 'Two actions in sequence: B followed A' },
          ],
        ],
      },
      examples: [
        {
          en: '**When** the manager **arrived**, we **started** the meeting.',
          vi: 'Khi quản lý đến, chúng tôi mới bắt đầu cuộc họp. (đến rồi mới họp)',
        },
        {
          en: '**When** the manager **arrived**, we **were holding** the meeting.',
          vi: 'Khi quản lý đến, chúng tôi đang họp. (cuộc họp đã diễn ra từ trước)',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'when / while chỉ là gợi ý, không phải luật cứng: When I **was driving** to work, I heard the news vẫn đúng, và while + quá khứ đơn vẫn dùng được cho cả một giai đoạn (While she **lived** in Osaka, she studied Japanese). Điều quyết định là hành động nào dài (tiếp diễn), hành động nào ngắn (quá khứ đơn).',
          en: 'when / while is a guide, not a hard rule: When I **was driving** to work, I heard the news is correct, and while + Past Simple still works for a whole period (While she **lived** in Osaka, she studied Japanese). What decides the tense is which action is long (continuous) and which is short (Past Simple).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu thì quá khứ ở Part 5', en: 'Attacking past-tense items in Part 5' },
      points: [
        {
          vi: 'Quét câu tìm dấu hiệu: **ago, last…, yesterday, in + năm đã qua, when + mệnh đề quá khứ** → quá khứ đơn; loại ngay các thì hiện tại và hiện tại hoàn thành.',
          en: 'Scan for signals: **ago, last…, yesterday, in + a past year, when + a past clause** → Past Simple; rule out the present tenses and the Present Perfect at once.',
        },
        {
          vi: 'Thấy **at this time yesterday**, **at + giờ + ngày đã qua**, **while + chỗ trống**, hoặc chỗ trống là hành động nền trong câu có **when + quá khứ đơn** → quá khứ tiếp diễn.',
          en: 'With **at this time yesterday**, **at + clock time + a past day**, **while + blank**, or a blank that is the background action in a sentence with **when + Past Simple** → Past Continuous.',
        },
        {
          vi: 'Ngược lại, chỗ trống đứng sau **when** trong câu đã có **was/were + V-ing** → đó là sự việc chen ngang, chọn quá khứ đơn.',
          en: 'Conversely, a blank after **when** in a sentence that already has **was/were + V-ing** → it is the interrupting event, so choose the Past Simple.',
        },
        {
          vi: 'Kiểm tra hình thức: sau **did/didn\'t** là nguyên mẫu; V3 không đứng một mình; **was** cho số ít, **were** cho số nhiều; nhớ đúng V2 bất quy tắc (rose, chose, held…).',
          en: "Check the form: after **did/didn't** comes the base verb; a V3 never stands alone; **was** for singular, **were** for plural; know your irregular V2 forms (rose, chose, held…).",
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Ở Part 6, dấu hiệu thời gian có thể nằm ở câu trước, ở tiêu đề hoặc ngày tháng của bức thư, nên hãy đọc rộng ra ngoài câu chứa chỗ trống trước khi chọn thì.',
          en: 'In Part 6, the time signal may sit in an earlier sentence, in the subject line or in the date of the letter, so read beyond the sentence with the blank before choosing a tense.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Corvane Telecom ------- its first overseas office in Singapore about six years ago.',
      options: ['opens', 'has opened', 'opened', 'will open'],
      answer: 2,
      explanation: {
        vi: '**about six years ago** là một mốc đã kết thúc trong quá khứ → quá khứ đơn **opened**. has opened là hiện tại hoàn thành, không đi với ago; opens và will open sai thì.',
        en: '**about six years ago** is a finished point in the past → Past Simple **opened**. has opened is the Present Perfect and cannot go with ago; opens and will open are the wrong time.',
      },
      translation: 'Corvane Telecom đã mở văn phòng nước ngoài đầu tiên tại Singapore khoảng sáu năm trước.',
    },
    {
      sentence: 'Online sales at Pemberton Outfitters ------- by 12 percent last quarter thanks to a popular spring promotion.',
      options: ['rose', 'raised', 'risen', 'rising'],
      answer: 0,
      explanation: {
        vi: '**last quarter** → quá khứ đơn. Chỗ trống không có tân ngữ (by 12 percent chỉ mức tăng) nên cần rise (tự tăng): rise – **rose** – risen. raised là quá khứ của raise (làm tăng), phải có tân ngữ; risen là V3, cần have đi trước.',
        en: '**last quarter** → Past Simple. There is no object (by 12 percent gives the amount), so we need rise: rise – **rose** – risen. raised comes from raise, which needs an object; risen is a V3 and needs have before it.',
      },
      translation: 'Doanh số bán hàng trực tuyến của Pemberton Outfitters đã tăng 12% trong quý trước nhờ một chương trình khuyến mãi mùa xuân được ưa chuộng.',
    },
    {
      sentence: "At its meeting yesterday, the board of directors ------- Ms. Iwasaki as the company's new chief financial officer.",
      options: ['chosen', 'chose', 'choose', 'chooses'],
      answer: 1,
      explanation: {
        vi: '**yesterday** → quá khứ đơn: choose – **chose** – chosen. chosen là V3, không đứng một mình làm động từ chính; choose và chooses là hiện tại.',
        en: '**yesterday** → Past Simple: choose – **chose** – chosen. chosen is a V3 and cannot be the main verb on its own; choose and chooses are present forms.',
      },
      translation: 'Tại cuộc họp hôm qua, hội đồng quản trị đã chọn bà Iwasaki làm giám đốc tài chính mới của công ty.',
    },
    {
      sentence: 'The courier did not ------- the package to the correct address last Friday, so it was returned to our warehouse.',
      options: ['delivered', 'delivering', 'delivers', 'deliver'],
      answer: 3,
      explanation: {
        vi: 'Sau trợ động từ **did not** luôn là động từ nguyên mẫu → **deliver**. Dấu hiệu quá khứ đã nằm ở did, nên delivered (thêm -ed lần nữa) là sai.',
        en: 'The auxiliary **did not** is always followed by the base verb → **deliver**. The past is already marked on did, so delivered (adding -ed again) is wrong.',
      },
      translation: 'Người giao hàng đã không giao gói hàng đến đúng địa chỉ vào thứ Sáu tuần trước, nên gói hàng bị trả về kho của chúng tôi.',
    },
    {
      sentence: 'Dunmore Construction ------- the Lakeshore Convention Center in 2011, and the venue still hosts major trade fairs today.',
      options: ['builds', 'built', 'has built', 'is building'],
      answer: 1,
      explanation: {
        vi: '**in 2011** là một năm đã qua → quá khứ đơn: build – **built** – built. has built không đi với mốc quá khứ cụ thể như in 2011; builds và is building sai thì.',
        en: '**in 2011** is a year that is over → Past Simple: build – **built** – built. has built cannot go with a specific past time such as in 2011; builds and is building are the wrong time.',
      },
      translation: 'Dunmore Construction đã xây Trung tâm Hội nghị Lakeshore vào năm 2011, và đến nay nơi này vẫn tổ chức các hội chợ thương mại lớn.',
    },
    {
      sentence: 'When the bakery chain first opened in Hanoi, it ------- only three locations and twelve employees.',
      options: ['has', 'has had', 'is having', 'had'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề **When the bakery chain first opened** chỉ một thời điểm đã qua → mệnh đề chính cũng chia quá khứ đơn: have – **had**. has had là hiện tại hoàn thành, không dùng cho thời điểm đã kết thúc; is having sai vì have (sở hữu) là động từ trạng thái.',
        en: 'The clause **When the bakery chain first opened** marks a past moment → the main clause is Past Simple too: have – **had**. has had is the Present Perfect and does not fit a finished moment; is having is wrong because have (possession) is a state verb.',
      },
      translation: 'Khi chuỗi tiệm bánh mới mở ở Hà Nội, họ chỉ có ba cửa hàng và mười hai nhân viên.',
    },
    {
      sentence: 'Mr. Halvorsen ------- the quarterly results to investors when the projector suddenly stopped working.',
      options: ['was presenting', 'presents', 'has presented', 'is presenting'],
      answer: 0,
      explanation: {
        vi: 'Việc trình bày đang diễn ra thì bị sự việc ngắn **when the projector suddenly stopped working** cắt ngang → hành động dài chia quá khứ tiếp diễn **was presenting**. has presented, is presenting và presents đều là thì hiện tại, không khớp với mốc quá khứ stopped.',
        en: 'The presentation was in progress and was cut short by a sudden event (**when the projector suddenly stopped working**) → the long action takes the Past Continuous **was presenting**. has presented, is presenting and presents are present tenses and clash with the past event stopped.',
      },
      translation: 'Ông Halvorsen đang trình bày kết quả kinh doanh quý cho các nhà đầu tư thì máy chiếu đột nhiên ngừng hoạt động.',
    },
    {
      sentence: 'Ms. Achebe was checking the inventory records when she ------- that two cartons of toner were missing.',
      options: ['was noticing', 'notices', 'noticed', 'has noticed'],
      answer: 2,
      explanation: {
        vi: 'Vế trước **was checking** là hành động nền đang diễn ra; sự việc xen vào sau **when** chia quá khứ đơn → **noticed**. was noticing biến việc phát hiện (xảy ra trong tích tắc) thành hành động kéo dài, sai với mẫu was doing … when … did.',
        en: 'The first clause **was checking** is the background action in progress; the event that cuts in after **when** takes the Past Simple → **noticed**. was noticing turns a sudden discovery into an ongoing action, which breaks the was doing … when … did pattern.',
      },
      translation: 'Cô Achebe đang kiểm tra sổ sách hàng tồn kho thì phát hiện hai thùng mực in bị thiếu.',
    },
    {
      sentence: 'While the technicians ------- the elevators, hotel guests had to use the service stairs.',
      options: ['are inspecting', 'were inspecting', 'have inspected', 'inspect'],
      answer: 1,
      explanation: {
        vi: '**While** + hành động kéo dài, và mệnh đề chính dùng quá khứ **had to** → quá khứ tiếp diễn **were inspecting** (chủ ngữ số nhiều). are inspecting và inspect là hiện tại, không khớp với had to; have inspected cũng không hợp với mạch quá khứ.',
        en: '**While** + a long action, with the main clause in the past (**had to**) → Past Continuous **were inspecting** (plural subject). are inspecting and inspect are present forms and clash with had to; have inspected does not fit a past narrative either.',
      },
      translation: 'Trong lúc các kỹ thuật viên đang kiểm tra thang máy, khách của khách sạn phải đi cầu thang phục vụ.',
    },
    {
      sentence: 'At this time yesterday, our sales representatives ------- clients in Busan to demonstrate the new printer models.',
      options: ['were visiting', 'was visiting', 'are visiting', 'have been visiting'],
      answer: 0,
      explanation: {
        vi: '**At this time yesterday** chỉ một thời điểm cụ thể trong quá khứ khi hành động đang diễn ra → quá khứ tiếp diễn. Chủ ngữ **representatives** số nhiều nên dùng **were visiting**, không dùng was visiting.',
        en: '**At this time yesterday** points to a specific past moment when the action was in progress → Past Continuous. The subject **representatives** is plural, so **were visiting** is correct, not was visiting.',
      },
      translation: 'Vào giờ này hôm qua, các nhân viên kinh doanh của chúng tôi đang đến thăm khách hàng ở Busan để giới thiệu các mẫu máy in mới.',
    },
  ],
};
