import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'modals-core',
  intro: {
    vi: 'Bài này hệ thống chín động từ khuyết thiếu **can, could, may, might, must, should, will, would, shall**: luôn đi với động từ nguyên mẫu không to, và mỗi từ mang một sắc thái riêng (khả năng, xin phép, bắt buộc, lời khuyên, đề nghị lịch sự). Trong Part 5/6, đề hỏi cả về DẠNG (chọn V nguyên mẫu sau modal) lẫn về NGHĨA (chọn modal hợp ngữ cảnh, nhất là must / mustn\'t / don\'t have to).',
    en: "This lesson covers the nine core modals **can, could, may, might, must, should, will, would, shall**: they always take a base verb without to, and each carries its own meaning (ability, permission, obligation, advice, polite requests). In Part 5/6, items test both FORM (the base verb after a modal) and MEANING (the modal that fits the context, especially must / mustn't / don't have to).",
  },
  mistakes: [
    {
      wrong: 'The department head must [[to approve]] all overtime requests in advance.',
      right: 'The department head must [[approve]] all overtime requests in advance.',
      explanation: {
        vi: 'Sau động từ khuyết thiếu là động từ nguyên mẫu KHÔNG có **to**. Chỉ các cụm như have to, ought to, be able to (bài 17.2) mới có to.',
        en: 'A modal is followed by a base verb WITHOUT **to**. Only phrases such as have to, ought to and be able to (lesson 17.2) contain to.',
      },
    },
    {
      wrong: 'Ms. Delgado [[cans]] negotiate contracts in three languages.',
      right: 'Ms. Delgado [[can]] negotiate contracts in three languages.',
      explanation: {
        vi: 'Động từ khuyết thiếu không chia theo ngôi: không thêm **-s** dù chủ ngữ là ngôi thứ ba số ít. Dạng đúng luôn là **can**.',
        en: 'Modals never change for the subject: they take no **-s**, even with a third-person singular subject. The form is always **can**.',
      },
    },
    {
      wrong: 'Would you mind [[to resend]] the invoice to our accounts department?',
      right: 'Would you mind [[resending]] the invoice to our accounts department?',
      explanation: {
        vi: '**Would you mind** luôn đi với **V-ing**, vì mind là động từ đòi V-ing. Khác với Would you like, vốn đi với to V.',
        en: '**Would you mind** is always followed by **V-ing**, because mind takes a gerund. This is unlike Would you like, which takes to V.',
      },
    },
    {
      wrong: 'The replacement parts [[can deliver]] to your factory by Thursday morning.',
      right: 'The replacement parts [[can be delivered]] to your factory by Thursday morning.',
      explanation: {
        vi: 'Linh kiện là thứ ĐƯỢC giao, không tự giao, nên cần bị động **modal + be + V3**: can be delivered.',
        en: 'The parts are delivered; they do not deliver anything, so the passive **modal + be + V3** is needed: can be delivered.',
      },
    },
    {
      wrong: 'Participants [[must not]] bring a laptop to the workshop, but they are welcome to bring one if they prefer.',
      right: "Participants [[don't have to]] bring a laptop to the workshop, but they are welcome to bring one if they prefer.",
      explanation: {
        vi: 'Vế sau nói người tham dự vẫn được mang laptop nếu muốn, nên việc này là KHÔNG BẮT BUỘC chứ không bị CẤM. **must not** = cấm; **don\'t have to** = không cần, làm cũng được.',
        en: "The second clause says participants may still bring one, so it is NOT REQUIRED rather than FORBIDDEN. **must not** = prohibited; **don't have to** = not necessary, but allowed.",
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Quy tắc dạng: modal + V nguyên mẫu', en: 'The form rule: modal + base verb' },
      body: {
        vi: 'Chín động từ khuyết thiếu chính (**can, could, may, might, must, should, will, would, shall**) có chung bốn đặc điểm về hình thức. Chỉ cần nắm bốn điểm này là loại được phần lớn đáp án nhiễu về dạng.',
        en: 'The nine core modals (**can, could, may, might, must, should, will, would, shall**) share four formal features. Knowing these four points eliminates most form distractors.',
      },
      points: [
        {
          vi: 'Theo sau là **V nguyên mẫu không to**: must submit (không phải must to submit / must submitting / must submits).',
          en: 'They are followed by a **base verb without to**: must submit (not must to submit / must submitting / must submits).',
        },
        {
          vi: '**Không chia theo ngôi**: He can, She should, It may: không bao giờ có cans, shoulds.',
          en: '**No change for person**: He can, She should, It may: there is never cans or shoulds.',
        },
        {
          vi: 'Phủ định và câu hỏi **không mượn do/does/did**: cannot (viết liền), may not, should not; Can you…? Should we…? (không phải doesn\'t can, do you can).',
          en: "Negatives and questions **do not use do/does/did**: cannot (one word), may not, should not; Can you…? Should we…? (not doesn't can, do you can).",
        },
        {
          vi: '**Hai modal không đứng liền nhau**: không nói will can, should must. Muốn diễn đạt khả năng ở tương lai thì dùng **will be able to** (bài 17.2).',
          en: '**Two modals never stand together**: we do not say will can or should must. For future ability, use **will be able to** (lesson 17.2).',
        },
      ],
      examples: [
        {
          en: 'The front desk **can arrange** an airport shuttle for an additional fee.',
          vi: 'Quầy lễ tân có thể sắp xếp xe đưa đón sân bay với một khoản phụ phí.',
        },
        {
          en: 'Our sales director **cannot attend** the launch event on Friday.',
          vi: 'Giám đốc kinh doanh của chúng tôi không thể tham dự sự kiện ra mắt vào thứ Sáu.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**cannot** viết liền thành một từ (hoặc rút gọn **can\'t**); các modal khác viết tách với not: may not, might not, must not, should not, will not (won\'t), would not.',
          en: "**cannot** is written as one word (or shortened to **can't**); the other modals keep not separate: may not, might not, must not, should not, will not (won't), would not.",
        },
      },
    },
    {
      heading: { vi: 'Nghĩa của từng modal', en: 'What each modal means' },
      table: {
        head: [
          { vi: 'Modal', en: 'Modal' },
          { vi: 'Nghĩa chính', en: 'Main meanings' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['can', { vi: 'Khả năng; được phép (thân mật); điều có thể xảy ra nói chung', en: 'Ability; permission (informal); general possibility' }, 'Guests can check in from 2 P.M.'],
          ['could', { vi: 'Khả năng trong quá khứ; điều có thể xảy ra (không chắc chắn); yêu cầu lịch sự', en: 'Past ability; possibility (not certain); polite request' }, 'The delay could affect our deadline.'],
          ['may', { vi: 'Được phép (trang trọng); có lẽ, có thể', en: 'Permission (formal); possibility' }, 'Visitors may park in Lot B.'],
          ['might', { vi: 'Có lẽ, có thể (thường kém chắc chắn hơn may một chút)', en: 'Possibility (usually slightly less certain than may)' }, 'Prices might rise next quarter.'],
          ['must', { vi: 'Bắt buộc, cần thiết (quy định, nội quy)', en: 'Obligation, necessity (rules, regulations)' }, 'All staff must wear ID badges.'],
          ['should', { vi: 'Lời khuyên; điều nên làm; điều được dự đoán', en: 'Advice; the right thing to do; expectation' }, 'You should back up your files daily.'],
          ['will', { vi: 'Tương lai; sẵn lòng; lời hứa', en: 'Future; willingness; promises' }, 'I will send the agenda tonight.'],
          ['would', { vi: 'Yêu cầu, lời mời lịch sự; giả định', en: 'Polite requests and offers; hypothetical' }, 'Would you sign here, please?'],
          ['shall', { vi: 'Đề nghị, gợi ý với I/we (Shall I…? Shall we…?); nghĩa vụ trong hợp đồng', en: 'Offers and suggestions with I/we (Shall I…? Shall we…?); obligations in contracts' }, 'Shall I book the meeting room?'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong hợp đồng và quy định, **shall** mang nghĩa bắt buộc: The tenant shall pay rent on the first day of each month. Việc dùng modal để suy luận về hiện tại và quá khứ (must be, can\'t be, must have done) thuộc bài 17.3.',
          en: "In contracts and regulations, **shall** expresses obligation: The tenant shall pay rent on the first day of each month. Using modals to make deductions about the present and past (must be, can't be, must have done) belongs to lesson 17.3.",
        },
      },
    },
    {
      heading: { vi: 'Yêu cầu, xin phép và đề nghị lịch sự', en: 'Polite requests, permission and offers' },
      body: {
        vi: 'Thư từ và hội thoại công sở trong TOEIC dùng rất nhiều mẫu câu lịch sự với modal. Mỗi mẫu có một vai riêng: nhờ người khác làm, xin phép cho mình, hay đề nghị giúp người khác.',
        en: 'TOEIC emails and office conversations are full of polite modal patterns. Each has its own job: asking someone else to do something, asking permission for yourself, or offering to help.',
      },
      table: {
        head: [
          { vi: 'Mục đích', en: 'Purpose' },
          { vi: 'Mẫu câu', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Nhờ người khác', en: 'Asking someone to act' }, 'Could / Would / Can / Will you + V?', 'Could you forward me the report?'],
          [{ vi: 'Nhờ rất lịch sự', en: 'Very polite request' }, 'Would you mind + V-ing?', 'Would you mind waiting a moment?'],
          [{ vi: 'Xin phép cho mình', en: 'Asking permission' }, 'May / Could / Can I + V?', 'May I leave a message for Mr. Cho?'],
          [{ vi: 'Đề nghị giúp', en: 'Offering help' }, 'Shall / Can I + V?', 'Shall I call a taxi for you?'],
          [{ vi: 'Mời', en: 'Inviting' }, 'Would you like + to V / danh từ?', 'Would you like to join us for lunch?'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Không có câu yêu cầu **May you…?**: may chỉ dùng để xin phép cho chính mình (May I / May we). Trả lời đồng ý câu **Would you mind…?** là **Not at all / No, of course not** (nghĩa là "không phiền").',
          en: 'There is no request **May you…?**: may only asks permission for yourself (May I / May we). The polite "yes" to **Would you mind…?** is **Not at all / No, of course not** (meaning "I don\'t mind").',
        },
      },
    },
    {
      heading: { vi: "must, mustn't và don't have to", en: "must, mustn't and don't have to" },
      body: {
        vi: 'Ở thể khẳng định, **must** và **have to** gần nghĩa nhau (đều là bắt buộc). Nhưng khi thêm phủ định, nghĩa của chúng tách hẳn ra: đây là cặp đề TOEIC rất thích hỏi.',
        en: 'In the affirmative, **must** and **have to** mean almost the same (obligation). In the negative, however, their meanings split completely: this is a pair the TOEIC loves to test.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['must', { vi: 'Bắt buộc phải làm', en: 'It is required' }, 'Applicants must include two references.'],
          ["must not / mustn't", { vi: 'CẤM làm', en: 'It is FORBIDDEN' }, 'Visitors must not enter the laboratory.'],
          ["don't / doesn't have to", { vi: 'KHÔNG CẦN làm (làm cũng được)', en: 'It is NOT NECESSARY (but allowed)' }, "You don't have to print your ticket."],
        ],
      },
      examples: [
        {
          en: 'Employees **must not** share their passwords with anyone, including IT staff.',
          vi: 'Nhân viên không được chia sẻ mật khẩu với bất kỳ ai, kể cả nhân viên IT.',
        },
        {
          en: 'Members **do not have to** book in advance, but reservations are recommended on weekends.',
          vi: 'Hội viên không cần đặt trước, nhưng nên đặt chỗ vào cuối tuần.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Tìm manh mối trong câu: các cụm như **for security reasons, under any circumstances, is prohibited** → mustn\'t; các cụm như **but you may if you wish, it is optional, will be provided** → don\'t have to.',
          en: "Look for the clue in the sentence: phrases like **for security reasons, under any circumstances, is prohibited** → mustn't; phrases like **but you may if you wish, it is optional, will be provided** → don't have to.",
        },
      },
    },
    {
      heading: { vi: 'modal + be + V3 và modal + be + V-ing', en: 'modal + be + V3 and modal + be + V-ing' },
      body: {
        vi: 'Vì sau modal luôn là động từ nguyên mẫu, nên khi cần bị động hoặc tiếp diễn, động từ nguyên mẫu đó chính là **be**. Bị động: **modal + be + V3** (dạng đầy đủ ở bài 6.1). Tiếp diễn: **modal + be + V-ing**, diễn tả hành động đang diễn ra tại một thời điểm.',
        en: 'Because a modal is always followed by a base verb, that base verb is **be** whenever we need the passive or the continuous. Passive: **modal + be + V3** (covered fully in lesson 6.1). Continuous: **modal + be + V-ing**, for an action in progress at a point in time.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Structure' },
          { vi: 'Dùng khi', en: 'Used when' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['modal + V', { vi: 'Chủ ngữ tự thực hiện hành động', en: 'The subject performs the action' }, 'The courier will collect the parcel.'],
          ['modal + be + V3', { vi: 'Chủ ngữ chịu tác động (bị động)', en: 'The subject receives the action (passive)' }, 'The parcel will be collected at noon.'],
          ['modal + be + V-ing', { vi: 'Hành động đang diễn ra tại một thời điểm', en: 'An action in progress at a given time' }, 'At noon, I will be meeting a client.'],
        ],
      },
      examples: [
        {
          en: 'Refunds **may be issued** only with the original receipt.',
          vi: 'Chỉ có thể hoàn tiền khi có hoá đơn gốc.',
        },
        {
          en: 'Ms. Ito **might be working** from home today, so try her mobile number.',
          vi: 'Hôm nay cô Ito có lẽ đang làm việc ở nhà, nên hãy thử gọi số di động của cô ấy.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Sau modal chỉ có **be**, không bao giờ có been hay being đứng ngay sau: must be checked, will be waiting. **been** chỉ xuất hiện trong modal hoàn thành (modal + have + been), thuộc bài 17.3.',
          en: 'Only **be** can follow a modal directly, never been or being: must be checked, will be waiting. **been** appears only in perfect modals (modal + have + been), covered in lesson 17.3.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu modal trong Part 5', en: 'Attacking modal items in Part 5' },
      points: [
        {
          vi: 'Thấy modal ngay trước chỗ trống → chọn **V nguyên mẫu**; loại ngay dạng có to, -s, -ing, -ed.',
          en: 'A modal right before the blank → choose the **base verb**; reject forms with to, -s, -ing or -ed at once.',
        },
        {
          vi: 'Chủ ngữ là vật chịu tác động → **modal + be + V3**; có mốc thời gian cụ thể và hành động đang dở dang → **modal + be + V-ing**.',
          en: 'A subject that receives the action → **modal + be + V3**; a specific time with an action in progress → **modal + be + V-ing**.',
        },
        {
          vi: 'Bốn lựa chọn là bốn modal khác nhau → đọc cả câu tìm manh mối nghĩa: quy định (must), lý do cấm (mustn\'t), không bắt buộc (don\'t have to), không có khả năng (cannot), lời khuyên (should).',
          en: "Four different modals as options → read the whole sentence for a meaning clue: a rule (must), a reason to forbid (mustn't), something optional (don't have to), inability (cannot), advice (should).",
        },
        {
          vi: 'Câu hỏi lịch sự → nhờ người khác: Could/Would you; xin phép: May I; Would you mind + V-ing.',
          en: 'Polite questions → asking others: Could/Would you; asking permission: May I; Would you mind + V-ing.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'All visitors must ------- a valid photo ID at the security desk before entering the building.',
      options: ['present', 'to present', 'presenting', 'presents'],
      answer: 0,
      explanation: {
        vi: 'Sau động từ khuyết thiếu **must** là động từ nguyên mẫu không to → **present**. to present thừa to; presents thêm -s là sai vì modal không đi với động từ chia.',
        en: 'The modal **must** is followed by a bare base verb → **present**. to present has an extra to; presents is wrong because a modal never takes a conjugated verb.',
      },
      translation: 'Tất cả khách đến thăm phải xuất trình giấy tờ tùy thân có ảnh còn hiệu lực tại quầy an ninh trước khi vào tòa nhà.',
    },
    {
      sentence: 'Monthly expense reports should ------- to the finance department no later than the fifth business day.',
      options: ['submit', 'be submitted', 'submitting', 'been submitted'],
      answer: 1,
      explanation: {
        vi: 'Báo cáo là thứ **được nộp**, và sau chỗ trống không có tân ngữ → bị động **should be + V3**. submit là chủ động (báo cáo không tự nộp); been không đứng ngay sau modal.',
        en: 'Reports **are submitted**, and no object follows the blank → passive **should be + V3**. submit is active (reports do not submit anything); been cannot follow a modal directly.',
      },
      translation: 'Báo cáo chi phí hằng tháng nên được nộp cho phòng tài chính chậm nhất vào ngày làm việc thứ năm.',
    },
    {
      sentence: 'When your flight lands, our driver will ------- for you at the arrivals hall holding a sign with your name.',
      options: ['been waiting', 'waited', 'be waiting', 'be waited'],
      answer: 2,
      explanation: {
        vi: '**When your flight lands** chỉ một thời điểm ở tương lai, lúc đó hành động chờ đang diễn ra → **will be + V-ing**. be waited là bị động, vô nghĩa vì tài xế là người chờ; been waiting và waited không đứng ngay sau will.',
        en: '**When your flight lands** marks a future moment when the waiting will be in progress → **will be + V-ing**. be waited is passive, which makes no sense since the driver does the waiting; been waiting and waited cannot follow will directly.',
      },
      translation: 'Khi chuyến bay của quý khách hạ cánh, tài xế của chúng tôi sẽ đang chờ quý khách ở sảnh đến, cầm tấm biển ghi tên quý khách.',
    },
    {
      sentence: 'Would you mind ------- the projector off when you leave the conference room this evening?',
      options: ['turn', 'to turn', 'turned', 'turning'],
      answer: 3,
      explanation: {
        vi: 'Mẫu câu nhờ lịch sự **Would you mind** luôn đi với **V-ing** → **turning**. to turn là dạng dùng sau Would you like, không dùng sau mind.',
        en: 'The polite request **Would you mind** always takes **V-ing** → **turning**. to turn is the form used after Would you like, not after mind.',
      },
      translation: 'Phiền anh/chị tắt máy chiếu khi rời phòng hội nghị tối nay được không?',
    },
    {
      sentence: 'Staff ------- wear a jacket and tie on Fridays, but they may still do so if they prefer.',
      options: ['must', 'cannot', "don't have to", 'will'],
      answer: 2,
      explanation: {
        vi: 'Vế sau **but they may still do so if they prefer** cho biết việc mặc vest là tuỳ ý → **don\'t have to** (không bắt buộc). must và cannot đều mâu thuẫn với "vẫn có thể làm nếu thích".',
        en: "The clause **but they may still do so if they prefer** shows that wearing a jacket is optional → **don't have to**. must and cannot both contradict \"they may still do so if they prefer\".",
      },
      translation: 'Nhân viên không bắt buộc phải mặc vest và đeo cà vạt vào thứ Sáu, nhưng họ vẫn có thể mặc nếu muốn.',
    },
    {
      sentence: 'For security reasons, passengers ------- leave bags unattended, as any unattended item will be removed immediately.',
      options: ['must not', 'do not have to', 'need not', 'would not'],
      answer: 0,
      explanation: {
        vi: '**For security reasons** và việc hành lý bị dỡ đi ngay cho thấy đây là điều CẤM → **must not**. do not have to và need not chỉ nghĩa "không cần", trái với một lệnh cấm vì lý do an ninh.',
        en: '**For security reasons** and the immediate removal of bags show this is FORBIDDEN → **must not**. do not have to and need not only mean "not necessary", which does not fit a security ban.',
      },
      translation: 'Vì lý do an ninh, hành khách không được để hành lý không có người trông, vì mọi đồ vật không người trông sẽ bị dỡ đi ngay lập tức.',
    },
    {
      sentence: '------- you please send me the revised price list before our meeting on Thursday?',
      options: ['Shall', 'Could', 'Must', 'May'],
      answer: 1,
      explanation: {
        vi: 'Đây là lời **nhờ người khác** làm (you … please send) → **Could you…?** May chỉ dùng để xin phép cho mình (May I), không có May you; Shall chỉ đi với I/we khi đề nghị.',
        en: 'This **asks someone else** to act (you … please send) → **Could you…?** May only asks permission for yourself (May I), so May you is wrong; Shall is used with I/we for offers.',
      },
      translation: 'Anh/chị có thể vui lòng gửi tôi bảng giá đã sửa đổi trước buổi họp vào thứ Năm được không?',
    },
    {
      sentence: 'Excuse me, Mr. Harris, ------- I borrow your laptop charger for a few minutes?',
      options: ['would', 'must', 'will', 'may'],
      answer: 3,
      explanation: {
        vi: 'Người nói **xin phép cho chính mình** (I borrow) → **May I…?** Would I và Will I không dùng để xin phép; Must I hỏi về nghĩa vụ, vô lý khi đi mượn đồ.',
        en: 'The speaker is **asking permission for himself or herself** (I borrow) → **May I…?** Would I and Will I are not used to ask permission; Must I asks about obligation, which makes no sense when borrowing something.',
      },
      translation: 'Xin lỗi anh Harris, tôi có thể mượn bộ sạc máy tính của anh vài phút được không?',
    },
    {
      sentence: 'Because of scheduled maintenance, customers ------- access their online accounts between midnight and 4 A.M. on Sunday.',
      options: ['cannot', 'must', 'should', 'would'],
      answer: 0,
      explanation: {
        vi: '**Because of scheduled maintenance** cho biết hệ thống tạm ngừng, khách hàng KHÔNG THỂ truy cập → **cannot**. must và should vô lý vì không ai bắt hay khuyên khách đăng nhập lúc hệ thống bảo trì.',
        en: '**Because of scheduled maintenance** shows the system is down, so customers are UNABLE to log in → **cannot**. must and should make no sense: nobody requires or advises logging in during maintenance.',
      },
      translation: 'Do bảo trì theo lịch, khách hàng sẽ không thể truy cập tài khoản trực tuyến từ nửa đêm đến 4 giờ sáng Chủ nhật.',
    },
    {
      sentence: 'Mr. Tanaka ------- attend the trade fair in Osaka next week, so his assistant will go in his place.',
      options: ["doesn't can", 'cannot', 'not can', 'cans not'],
      answer: 1,
      explanation: {
        vi: 'Phủ định của modal là thêm **not** ngay sau modal, với can thì viết liền → **cannot**. doesn\'t can sai vì modal không mượn do/does; cans thêm -s là sai.',
        en: "A modal is made negative by adding **not** right after it, and with can it is written as one word → **cannot**. doesn't can is wrong because modals never use do/does; cans with -s is wrong.",
      },
      translation: 'Ông Tanaka không thể tham dự hội chợ thương mại ở Osaka vào tuần tới, nên trợ lý của ông sẽ đi thay.',
    },
  ],
};
