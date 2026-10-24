import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-future',
  intro: {
    vi: 'Tiếng Anh có nhiều cách nói về tương lai: **will**, **be going to**, hiện tại tiếp diễn, hiện tại đơn, **be about to** và **be scheduled/set/due to**. Trong Part 5/6, đề thường cho một dấu hiệu như **next week**, **tomorrow** hay **upcoming** rồi kiểm tra xem bạn có loại được các thì quá khứ và chọn đúng dạng động từ đi sau các cấu trúc tương lai hay không.',
    en: 'English has several ways to talk about the future: **will**, **be going to**, the present continuous, the present simple, **be about to** and **be scheduled/set/due to**. In Part 5/6 the test usually gives a cue such as **next week**, **tomorrow** or **upcoming**, then checks whether you can rule out past tenses and pick the right verb form after the future marker.',
  },
  mistakes: [
    {
      wrong: "Ms. Tanaka will [[presents]] the quarterly figures at tomorrow's meeting.",
      right: "Ms. Tanaka will [[present]] the quarterly figures at tomorrow's meeting.",
      explanation: {
        vi: 'Sau **will** luôn là động từ nguyên mẫu, dù chủ ngữ là số ít: will **present**, không thêm -s, không thêm to.',
        en: 'After **will** the verb is always in its base form, even with a singular subject: will **present**, with no -s and no to.',
      },
    },
    {
      wrong: 'We [[going to]] launch the new advertising campaign next month.',
      right: 'We [[are going to]] launch the new advertising campaign next month.',
      explanation: {
        vi: '**be going to** cần động từ **be** chia theo chủ ngữ (am/is/are). Bỏ mất **are** thì câu không còn động từ chính.',
        en: '**be going to** needs the verb **be** in the form that matches the subject (am/is/are). Without **are**, the sentence has no main verb.',
      },
    },
    {
      wrong: 'The shipment from Shenzhen is due [[arrive]] on Friday.',
      right: 'The shipment from Shenzhen is due [[to arrive]] on Friday.',
      explanation: {
        vi: 'Cấu trúc đúng là **be due to + động từ nguyên mẫu** (dự kiến sẽ). Thiếu **to** là sai: due không bao giờ đi thẳng với động từ.',
        en: 'The pattern is **be due to + base verb** (expected to). Leaving out **to** is wrong: due is never followed directly by a verb.',
      },
    },
    {
      wrong: 'Please take your seats; the keynote speech is about to [[starting]].',
      right: 'Please take your seats; the keynote speech is about to [[start]].',
      explanation: {
        vi: '**be about to** (sắp sửa) đi với động từ nguyên mẫu: about to **start**, không phải about to starting.',
        en: '**be about to** (on the point of) takes a base verb: about to **start**, not about to starting.',
      },
    },
    {
      wrong: 'Mr. Okafor [[visited]] the Lagos plant next Tuesday.',
      right: 'Mr. Okafor [[is visiting]] the Lagos plant next Tuesday.',
      explanation: {
        vi: '**next Tuesday** chỉ tương lai nên không thể dùng quá khứ đơn. Lịch hẹn đã sắp xếp dùng hiện tại tiếp diễn **is visiting** (hoặc **will visit**).',
        en: '**next Tuesday** points to the future, so the past simple is impossible. An arranged plan takes the present continuous **is visiting** (or **will visit**).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Sáu cách nói về tương lai', en: 'Six ways to talk about the future' },
      body: {
        vi: 'Tiếng Anh không có một "thì tương lai" duy nhất. Mỗi cách diễn đạt dưới đây nhấn vào một sắc thái riêng: quyết định, dự định, lịch hẹn, lịch trình hay việc sắp xảy ra ngay.',
        en: 'English has no single "future tense". Each form below stresses its own shade of meaning: a decision, an intention, an arrangement, a timetable or something that is just about to happen.',
      },
      table: {
        head: [
          { vi: 'Cách nói', en: 'Form' },
          { vi: 'Cấu trúc', en: 'Structure' },
          { vi: 'Dùng khi', en: 'Main use' },
        ],
        rows: [
          [
            'will',
            'will + V',
            { vi: 'Quyết định ngay lúc nói, dự đoán, lời hứa, thông báo chính thức', en: 'Decisions made while speaking, predictions, promises, formal announcements' },
          ],
          [
            'be going to',
            'am/is/are going to + V',
            { vi: 'Dự định đã có từ trước; dự đoán dựa trên dấu hiệu hiện tại', en: 'Intentions decided earlier; predictions based on present evidence' },
          ],
          [
            'Present Continuous',
            'am/is/are + V-ing',
            { vi: 'Kế hoạch, lịch hẹn đã sắp xếp xong', en: 'Plans and appointments already arranged' },
          ],
          [
            'Present Simple',
            'V / V-s',
            { vi: 'Lịch trình, thời gian biểu cố định', en: 'Fixed timetables and schedules' },
          ],
          [
            'be about to',
            'am/is/are about to + V',
            { vi: 'Việc sắp xảy ra ngay', en: 'Something that will happen in a moment' },
          ],
          [
            'be scheduled / set / due to',
            'be + scheduled/set/due + to + V',
            { vi: 'Việc đã được lên lịch, ấn định hoặc dự kiến', en: 'Something officially planned or expected' },
          ],
        ],
      },
    },
    {
      heading: { vi: 'will + động từ nguyên mẫu', en: 'will + base verb' },
      points: [
        {
          vi: '**Quyết định ngay lúc nói**, chưa tính trước.',
          en: '**A decision made at the moment of speaking**, not planned before.',
        },
        {
          vi: '**Dự đoán, nhận định** về tương lai, thường đi với think, expect, believe, probably, be sure.',
          en: '**Predictions and opinions** about the future, often with think, expect, believe, probably, be sure.',
        },
        {
          vi: '**Lời hứa, đề nghị, cam kết** với khách hàng hoặc đồng nghiệp.',
          en: '**Promises, offers and commitments** to customers or colleagues.',
        },
        {
          vi: '**Thông báo chính thức** về sự việc tương lai: lịch nghỉ, thay đổi chính sách, sự kiện.',
          en: '**Formal announcements** of future events: closures, policy changes, events.',
        },
        {
          vi: 'Hình thức: **will + động từ nguyên mẫu** cho mọi chủ ngữ; phủ định là **will not / won\'t**.',
          en: "Form: **will + base verb** for every subject; the negative is **will not / won't**.",
        },
      ],
      examples: [
        {
          en: "The copier is out of paper. — No problem, **I'll get** some from the supply room.",
          vi: 'Máy photocopy hết giấy rồi. — Không sao, để tôi đi lấy ở kho văn phòng phẩm.',
        },
        {
          en: 'Analysts expect that the merger **will create** about 300 new jobs.',
          vi: 'Các nhà phân tích dự đoán vụ sáp nhập sẽ tạo ra khoảng 300 việc làm mới.',
        },
        {
          en: 'We **will process** your refund within five business days.',
          vi: 'Chúng tôi sẽ xử lý khoản hoàn tiền của quý khách trong vòng năm ngày làm việc.',
        },
        {
          en: 'The Eastwood branch **will be** closed on Monday for system maintenance.',
          vi: 'Chi nhánh Eastwood sẽ đóng cửa vào thứ Hai để bảo trì hệ thống.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Từ đứng ngay sau **will** luôn ở dạng nguyên mẫu: will **send**, không phải will sends / will to send / will sending. Các cấu trúc **will be + V-ing** và **will have + V3** (bài 4.6) vẫn theo đúng quy tắc này, vì be và have là nguyên mẫu.',
          en: 'The word right after **will** is always a base form: will **send**, not will sends / will to send / will sending. Patterns such as **will be + V-ing** and **will have + V3** (lesson 4.6) follow the same rule, because be and have are base forms.',
        },
      },
    },
    {
      heading: { vi: 'be going to + động từ nguyên mẫu', en: 'be going to + base verb' },
      body: {
        vi: 'Chia **be** theo chủ ngữ (am/is/are), giữ nguyên **going to**, rồi thêm động từ nguyên mẫu. Cấu trúc này có hai cách dùng chính.',
        en: 'Put **be** in the form that matches the subject (am/is/are), keep **going to** unchanged, then add a base verb. The pattern has two main uses.',
      },
      points: [
        {
          vi: '**Dự định đã quyết từ trước** lúc nói: người nói đã có ý định, dù có thể chưa sắp xếp chi tiết.',
          en: '**An intention decided before speaking**: the speaker has already made up their mind, though the details may not be arranged yet.',
        },
        {
          vi: '**Dự đoán dựa trên dấu hiệu đang thấy**: số liệu hay tình hình hiện tại cho thấy việc gì đó sắp xảy ra.',
          en: '**A prediction based on present evidence**: current figures or circumstances show that something is going to happen.',
        },
      ],
      examples: [
        {
          en: 'We **are going to hire** two more accountants before the tax season.',
          vi: 'Chúng tôi định tuyển thêm hai kế toán trước mùa quyết toán thuế.',
        },
        {
          en: 'Look at these pre-orders: the new tablet **is going to sell out** within days.',
          vi: 'Nhìn số đơn đặt trước này mà xem: mẫu máy tính bảng mới sẽ bán hết chỉ trong vài ngày.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Rất nhiều câu dùng được cả **will** lẫn **be going to** (The firm will / is going to expand next year). Vì thế Part 5 hầu như không bắt bạn chọn giữa hai cách này; đề kiểm tra hình thức: thiếu **be** (we going to ✗), sai dạng động từ sau **to** (going to launching ✗), hoặc chen một thì quá khứ vào câu có dấu hiệu tương lai.',
          en: 'Many sentences accept both **will** and **be going to** (The firm will / is going to expand next year). So Part 5 almost never asks you to choose between them; it tests form instead: a missing **be** (we going to ✗), the wrong verb form after **to** (going to launching ✗), or a past tense in a sentence with a future cue.',
        },
      },
    },
    {
      heading: { vi: 'Dùng thì hiện tại để nói về tương lai', en: 'Present tenses with future meaning' },
      points: [
        {
          vi: '**Hiện tại tiếp diễn** (am/is/are + V-ing): kế hoạch đã sắp xếp xong, thường đã hẹn người, giờ, địa điểm. Câu gần như luôn có mốc tương lai; thiếu mốc thì người đọc hiểu là "đang làm".',
          en: '**Present continuous** (am/is/are + V-ing): a plan that is already arranged, usually with the people, time and place fixed. The sentence almost always has a future time marker; without one, readers take it as "happening now".',
        },
        {
          vi: '**Hiện tại đơn**: lịch trình cố định do tổ chức đặt ra (giờ tàu xe, chuyến bay, giờ mở cửa, lịch khoá học, sự kiện). Động từ hay gặp: leave, depart, arrive, open, close, start, begin, end.',
          en: '**Present simple**: a fixed timetable set by an organization (trains, flights, opening hours, course dates, events). Common verbs: leave, depart, arrive, open, close, start, begin, end.',
        },
      ],
      examples: [
        {
          en: 'Ms. Ferreira **is meeting** the new distributors in Lisbon on Thursday.',
          vi: 'Cô Ferreira sẽ gặp các nhà phân phối mới ở Lisbon vào thứ Năm.',
        },
        {
          en: 'We **are launching** the spring catalog next Monday.',
          vi: 'Chúng tôi sẽ ra mắt catalog mùa xuân vào thứ Hai tuần sau.',
        },
        {
          en: 'Flight 417 to Singapore **departs** at 6:50 a.m. tomorrow.',
          vi: 'Chuyến bay 417 đi Singapore khởi hành lúc 6 giờ 50 sáng mai.',
        },
        {
          en: 'The leadership course **starts** on March 3 and **ends** on March 28.',
          vi: 'Khoá học lãnh đạo bắt đầu ngày 3 tháng 3 và kết thúc ngày 28 tháng 3.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong mệnh đề chính, hiện tại đơn chỉ mang nghĩa tương lai khi nói về lịch trình, thời gian biểu cố định (hoặc sự thật theo lịch: Tomorrow is Monday). Với quyết định hay lời hứa cá nhân thì không dùng: "I send you the contract tomorrow" ✗ → I **will send** you the contract tomorrow. (Mệnh đề sau when, as soon as… là chuyện của bài 4.7.)',
          en: 'In a main clause, the present simple has future meaning only for fixed timetables and schedules (or calendar facts: Tomorrow is Monday). It is not used for personal decisions or promises: "I send you the contract tomorrow" ✗ → I **will send** you the contract tomorrow. (Clauses after when, as soon as… are covered in lesson 4.7.)',
        },
      },
    },
    {
      heading: { vi: 'be about to và be scheduled / set / due to', en: 'be about to and be scheduled / set / due to' },
      points: [
        {
          vi: 'Sau **about / scheduled / set / due** là **to + động từ nguyên mẫu**; muốn diễn đạt bị động thì dùng to be + V3: The results are due to **be announced** on Friday.',
          en: 'After **about / scheduled / set / due** comes **to + base verb**; for a passive meaning use to be + V3: The results are due to **be announced** on Friday.',
        },
        {
          vi: '**be scheduled for + danh từ / mốc thời gian**: The inspection is scheduled **for** May 2.',
          en: '**be scheduled for + noun / time**: The inspection is scheduled **for** May 2.',
        },
        {
          vi: 'Đổi **be** sang quá khứ để nói về một kế hoạch trong quá khứ: The shipment **was due to** arrive yesterday, but it was delayed.',
          en: 'Put **be** in the past to talk about a past plan: The shipment **was due to** arrive yesterday, but it was delayed.',
        },
      ],
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'be about to + V',
            { vi: 'Sắp sửa, chỉ trong giây lát hay vài phút nữa; thường không đi kèm mốc thời gian cụ thể', en: 'On the point of happening, within moments or minutes; usually not used with a specific time expression' },
            'The webinar is about to begin.',
          ],
          [
            'be scheduled to + V',
            { vi: 'Đã được lên lịch sẽ…', en: 'Officially planned to happen' },
            'The CEO is scheduled to speak at noon.',
          ],
          [
            'be set to + V',
            { vi: 'Gần như chắc chắn sẽ, đã sẵn sàng để…; rất hay gặp trong tin kinh doanh', en: 'Very likely or ready to happen; very common in business news' },
            'Norland Bank is set to acquire two regional lenders.',
          ],
          [
            'be due to + V',
            { vi: 'Dự kiến sẽ (theo kế hoạch, thời hạn)', en: 'Expected to happen according to a plan or deadline' },
            'The new terminal is due to open in May.',
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: '**be due to + động từ** (dự kiến sẽ) khác hẳn **due to + danh từ** (do, vì): The train **is due to arrive** at 9:40. / The train was late **due to** heavy snow. Đề hay đặt **because**, **owing**, **thanks** cạnh **due** để bẫy; trong bốn từ này, chỉ **due** đi được với **to + động từ** (because of / owing to / thanks to chỉ đi với danh từ).',
          en: '**be due to + verb** (expected to) is completely different from **due to + noun** (because of): The train **is due to arrive** at 9:40. / The train was late **due to** heavy snow. The test likes to put **because**, **owing** or **thanks** next to **due** as traps; of these four words, only **due** can take **to + verb** (because of / owing to / thanks to are followed by nouns only).',
        },
      },
    },
    {
      heading: { vi: 'Dấu hiệu thời gian của tương lai', en: 'Future time signals' },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Signal' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Lưu ý', en: 'Note' },
        ],
        rows: [
          [
            'tomorrow, the day after tomorrow',
            'The auditors will arrive tomorrow.',
            { vi: 'Luôn chỉ một thời điểm tương lai', en: 'Always refers to a future time' },
          ],
          [
            'next week / month / quarter / year',
            'We are moving to a new office next month.',
            { vi: 'next + mốc (không có the) tính từ hôm nay nên chỉ tương lai; còn the next day/week tính từ một mốc khác (= ngày/tuần sau đó) và hay gặp trong câu kể quá khứ', en: 'next + time (no the) counts from today, so it is future; the next day/week counts from another point (= the following day/week) and often appears in past narratives' },
          ],
          [
            'soon, shortly',
            'A sales representative will contact you shortly.',
            { vi: 'Thường chỉ tương lai, nhưng cũng gặp trong câu kể quá khứ: The firm soon became a market leader; shortly after the merger', en: 'Usually future, but also found in past narratives: The firm soon became a market leader; shortly after the merger' },
          ],
          [
            'in + time period',
            'The audit will begin in two weeks.',
            { vi: '= sau… nữa, tính từ bây giờ. Nếu mang nghĩa "trong vòng" (We finished it in two weeks) thì dùng được với mọi thì; khác hẳn in the past two weeks (bài 4.2) và two weeks ago', en: '= from now. When it means "within" (We finished it in two weeks), it works with any tense; it is different from in the past two weeks (lesson 4.2) and two weeks ago' },
          ],
          [
            'upcoming, forthcoming',
            'All managers must attend the upcoming budget review.',
            { vi: 'Tính từ đứng trước danh từ: sắp tới, sắp diễn ra. Chỉ SỰ KIỆN là ở tương lai; động từ chính có thể ở thì khác', en: 'Adjectives before a noun: coming soon. Only the EVENT is in the future; the main verb may be in another tense' },
          ],
          [
            'later today, this coming Friday, starting next month',
            'The new delivery rates will apply starting next month.',
            { vi: 'Cũng chỉ tương lai', en: 'Also point to the future' },
          ],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Dấu hiệu chỉ quyết định thì khi nó gắn với CHÍNH hành động ở chỗ trống. Trong "Tomorrow\'s meeting **has been cancelled**" hay "We **booked** a hall for the upcoming seminar", việc huỷ và việc đặt đã xảy ra; chỉ cuộc họp và buổi hội thảo mới ở tương lai.',
          en: 'A time cue decides the tense only when it belongs to the action in the blank itself. In "Tomorrow\'s meeting **has been cancelled**" or "We **booked** a hall for the upcoming seminar", the cancelling and the booking have already happened; only the meeting and the seminar lie in the future.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu hỏi tương lai trong Part 5', en: 'Attacking future-form items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các thì khác nhau của cùng một động từ → tìm dấu hiệu thời gian trước tiên. Nếu hành động ở chỗ trống diễn ra **tomorrow, next…, in + khoảng thời gian** hay **at the upcoming…** → loại ngay quá khứ đơn, quá khứ tiếp diễn, hiện tại hoàn thành và quá khứ hoàn thành.',
          en: 'Four tenses of one verb → look for the time cue first. If the action in the blank happens **tomorrow, next…, in + period** or **at the upcoming…**, eliminate the past simple, past continuous, present perfect and past perfect at once.',
        },
        {
          vi: 'Chỗ trống ngay sau **will**, **going to** hoặc **about to** → chọn **động từ nguyên mẫu**. Chỗ trống ngay sau **scheduled / set / due** → chọn **to + động từ nguyên mẫu**.',
          en: 'Blank right after **will**, **going to** or **about to** → choose the **base verb**. Blank right after **scheduled / set / due** → choose **to + base verb**.',
        },
        {
          vi: 'Chỗ trống nằm giữa **is/are** và **to + động từ** → đáp án thường là going, about, scheduled, set hoặc due. Loại because, owing, thanks: chúng không bao giờ đi với to + động từ (because + mệnh đề; because of / owing to / thanks to + danh từ).',
          en: 'Blank between **is/are** and **to + verb** → the answer is usually going, about, scheduled, set or due. Rule out because, owing and thanks: they never take to + verb (because + clause; because of / owing to / thanks to + noun).',
        },
        {
          vi: 'Câu nói về thời gian biểu → hiện tại đơn vẫn đúng dù có mốc tương lai; câu nói về lịch hẹn đã sắp xếp → hiện tại tiếp diễn vẫn đúng. Đừng loại hai thì này chỉ vì tên gọi có chữ "hiện tại".',
          en: 'For a timetable, the present simple is correct even with a future cue; for an arranged appointment, the present continuous is correct. Do not rule them out just because they are called "present" tenses.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Hai trường hợp KHÔNG thuộc bài này: có **by + mốc tương lai** hoặc **this time next week** → tương lai hoàn thành / tương lai tiếp diễn (bài 4.6); chỗ trống nằm sau **when, as soon as, once, until** → hiện tại đơn hoặc hiện tại hoàn thành, không dùng will (bài 4.7).',
          en: 'Two cases belong elsewhere: with **by + a future point** or **this time next week** → future perfect / future continuous (lesson 4.6); a blank after **when, as soon as, once, until** → present simple or present perfect, not will (lesson 4.7).',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'Mr. Haddad will ------- the orientation session for new hires in two weeks.',
      options: ['leads', 'lead', 'leading', 'led'],
      answer: 1,
      explanation: {
        vi: 'Ngay trước chỗ trống là **will**, nên cần động từ nguyên mẫu → **lead**. leads có thêm -s, sai dù chủ ngữ số ít; leading và led không đứng sau will.',
        en: 'The blank follows **will**, so a base verb is needed → **lead**. leads adds -s, which is wrong even with a singular subject; leading and led cannot follow will.',
      },
      translation: 'Ông Haddad sẽ chủ trì buổi định hướng cho nhân viên mới trong hai tuần nữa.',
    },
    {
      sentence: 'According to the published timetable, the express train to Lyon ------- at 7:15 tomorrow morning.',
      options: ['departed', 'has departed', 'departs', 'was departing'],
      answer: 2,
      explanation: {
        vi: '**According to the published timetable** và **tomorrow morning** cho thấy đây là lịch trình cố định trong tương lai → hiện tại đơn **departs**. departed, has departed và was departing đều là dạng quá khứ/hoàn thành, mâu thuẫn với tomorrow.',
        en: '**According to the published timetable** and **tomorrow morning** show a fixed future schedule → the present simple **departs**. departed, has departed and was departing are past or perfect forms that clash with tomorrow.',
      },
      translation: 'Theo lịch trình đã công bố, chuyến tàu tốc hành đi Lyon khởi hành lúc 7 giờ 15 sáng mai.',
    },
    {
      sentence: 'Ms. Novak ------- with the suppliers in Warsaw next Wednesday to finalize the contract.',
      options: ['is meeting', 'met', 'has met', 'had met'],
      answer: 0,
      explanation: {
        vi: '**next Wednesday** là mốc tương lai, và cuộc gặp với nhà cung cấp đã được hẹn trước → hiện tại tiếp diễn **is meeting**. met là quá khứ đơn, không đi với next.',
        en: '**next Wednesday** is a future time, and the meeting with the suppliers is already arranged → the present continuous **is meeting**. met is past simple and cannot go with next.',
      },
      translation: 'Cô Novak sẽ gặp các nhà cung cấp ở Warsaw vào thứ Tư tuần sau để chốt hợp đồng.',
    },
    {
      sentence: 'Two of our senior engineers ------- going to attend the robotics conference in Osaka next month.',
      options: ['is', 'be', 'been', 'are'],
      answer: 3,
      explanation: {
        vi: '**be going to** cần **be** chia theo chủ ngữ. Chủ ngữ **Two of our senior engineers** là số nhiều → **are**. is dành cho chủ ngữ số ít; be và been không làm động từ chính được.',
        en: '**be going to** needs **be** to agree with the subject. **Two of our senior engineers** is plural → **are**. is is for singular subjects; be and been cannot act as the main verb here.',
      },
      translation: 'Hai kỹ sư cấp cao của chúng tôi sẽ tham dự hội nghị về robot ở Osaka vào tháng sau.',
    },
    {
      sentence: 'Passengers on Flight 208 should proceed to Gate 14 now, as boarding is about to -------.',
      options: ['begin', 'began', 'beginning', 'begun'],
      answer: 0,
      explanation: {
        vi: '**be about to** (sắp sửa) luôn theo sau bởi động từ nguyên mẫu → **begin**. beginning là V-ing, không đứng sau about to; began và begun là dạng quá khứ.',
        en: '**be about to** (on the point of) is always followed by a base verb → **begin**. beginning is a V-ing form and cannot follow about to; began and begun are past forms.',
      },
      translation: 'Hành khách chuyến bay 208 vui lòng đến cửa số 14 ngay bây giờ vì sắp bắt đầu lên máy bay.',
    },
    {
      sentence: 'The flight from Dubai is ------- to land at 4:30 p.m., but strong tailwinds may bring it in earlier.',
      options: ['owing', 'due', 'because', 'thanks'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là **to land** (to + động từ) và một mốc giờ **4:30 p.m.** → **be due to + động từ** = dự kiến sẽ. owing, because và thanks không bao giờ đi với to + động từ: owing to / thanks to + danh từ (owing to the fog), because + mệnh đề.',
        en: 'The blank is followed by **to land** (to + verb) and a time, **4:30 p.m.** → **be due to + verb** = expected to. owing, because and thanks never take to + verb: owing to / thanks to + noun (owing to the fog), because + clause.',
      },
      translation: 'Chuyến bay từ Dubai dự kiến hạ cánh lúc 4 giờ 30 chiều, nhưng gió xuôi mạnh có thể giúp máy bay đến sớm hơn.',
    },
    {
      sentence: "The newly appointed CEO is scheduled ------- shareholders at next month's annual meeting.",
      options: ['address', 'addressing', 'addressed', 'to address'],
      answer: 3,
      explanation: {
        vi: '**be scheduled** (được lên lịch) đi với **to + động từ nguyên mẫu** → **to address**. addressing là V-ing, không đứng sau scheduled theo nghĩa này; address thiếu to.',
        en: '**be scheduled** (officially planned) takes **to + base verb** → **to address**. addressing is a V-ing form and cannot follow scheduled in this sense; address lacks to.',
      },
      translation: 'Vị CEO mới được bổ nhiệm sẽ phát biểu trước các cổ đông tại cuộc họp thường niên tháng sau.',
    },
    {
      sentence: 'Several well-known economists ------- at the upcoming trade forum in Singapore.',
      options: ['spoke', 'have spoken', 'will speak', 'had spoken'],
      answer: 2,
      explanation: {
        vi: 'Việc phát biểu diễn ra **at the upcoming trade forum**, mà **upcoming** (sắp diễn ra) cho biết diễn đàn chưa diễn ra → cần dạng tương lai **will speak**. spoke, have spoken và had spoken đều diễn tả việc đã xảy ra, mâu thuẫn với upcoming.',
        en: 'The speaking takes place **at the upcoming trade forum**, and **upcoming** shows that the forum has not happened yet → the future form **will speak**. spoke, have spoken and had spoken all describe something already done, which clashes with upcoming.',
      },
      translation: 'Nhiều nhà kinh tế học nổi tiếng sẽ phát biểu tại diễn đàn thương mại sắp tới ở Singapore.',
    },
    {
      sentence: 'Harbor Logistics is ------- to open a second distribution center in Busan early next year.',
      options: ['setting', 'sets', 'set', 'been set'],
      answer: 2,
      explanation: {
        vi: 'Cấu trúc **be set to + động từ** (chắc chắn sẽ, đã sẵn sàng để) dùng dạng **set** sau is; mốc **early next year** xác nhận nghĩa tương lai. Không có cấu trúc is setting to + động từ: be set to là cụm cố định, trong đó set là quá khứ phân từ dùng như tính từ; sets và been set không đứng sau is được.',
        en: 'The pattern **be set to + verb** (certain or ready to happen) uses the form **set** after is; **early next year** confirms the future meaning. There is no pattern is setting to + verb: be set to is a fixed phrase in which set is a past participle used like an adjective; sets and been set cannot follow is.',
      },
      translation: 'Harbor Logistics sẽ mở trung tâm phân phối thứ hai ở Busan vào đầu năm sau.',
    },
    {
      sentence: 'Ms. Abara will be with you -------; she is just finishing a call with another client.',
      options: ['shortly', 'lately', 'recently', 'previously'],
      answer: 0,
      explanation: {
        vi: 'Động từ **will be** chỉ tương lai nên cần trạng từ thời gian của tương lai → **shortly** (lát nữa, ngay thôi). lately và recently nói về khoảng thời gian gần đây đã qua; previously chỉ quá khứ.',
        en: 'The verb **will be** refers to the future, so a future time adverb is needed → **shortly** (very soon). lately and recently describe the recent past; previously refers to an earlier time.',
      },
      translation: 'Cô Abara sẽ tiếp anh/chị ngay thôi; cô ấy đang nói nốt cuộc điện thoại với một khách hàng khác.',
    },
  ],
};
