import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'adverb-clauses-condition',
  intro: {
    vi: 'Bài này dạy hai việc: chọn đúng **liên từ điều kiện** (if, unless, provided that, as long as, in case, in the event that, otherwise) và nhận ra **mệnh đề trạng ngữ rút gọn** như before leaving, once approved, unless otherwise noted. Part 5 hay hỏi nghĩa của liên từ hoặc dạng V-ing/V3 ngay sau liên từ.',
    en: 'This lesson teaches two things: choosing the right **conditional connector** (if, unless, provided that, as long as, in case, in the event that, otherwise) and recognising **reduced adverb clauses** such as before leaving, once approved and unless otherwise noted. Part 5 often tests the meaning of the connector or the -ing/V3 form right after it.',
  },
  mistakes: [
    {
      wrong: 'Your registration will be canceled [[if]] you pay the deposit by Friday.',
      right: 'Your registration will be canceled [[unless]] you pay the deposit by Friday.',
      explanation: {
        vi: 'Đăng ký bị huỷ khi KHÔNG đóng cọc, nên cần **unless** (= if … not). Dùng **if** thì câu thành "đóng cọc thì bị huỷ", vô lý.',
        en: 'The registration is canceled when the deposit is NOT paid, so **unless** (= if … not) is needed. With **if**, the sentence says paying causes cancellation, which is illogical.',
      },
    },
    {
      wrong: '[[Unless]] you do not renew your membership by May 1, it will expire.',
      right: '[[If]] you do not renew your membership by May 1, it will expire.',
      explanation: {
        vi: '**unless** đã mang nghĩa phủ định, nên không đi kèm **not** nữa. Dùng **If you do not renew** hoặc **Unless you renew**.',
        en: '**unless** is already negative, so it does not take **not** as well. Say **If you do not renew** or **Unless you renew**.',
      },
    },
    {
      wrong: 'Once [[approving]], the budget will be sent to the board.',
      right: 'Once [[approved]], the budget will be sent to the board.',
      explanation: {
        vi: 'Ngân sách ĐƯỢC duyệt (bị động), nên mệnh đề rút gọn dùng **V3**: once approved = once it is approved. V-ing chỉ dùng khi chủ ngữ tự thực hiện hành động.',
        en: 'The budget IS approved (passive), so the reduced clause uses **V3**: once approved = once it is approved. -ing is only for a subject that performs the action itself.',
      },
    },
    {
      wrong: 'Before [[leave]] the office, please switch off your monitor.',
      right: 'Before [[leaving]] the office, please switch off your monitor.',
      explanation: {
        vi: 'Khi rút gọn mệnh đề chủ động sau **before**, động từ chuyển thành **V-ing**: before leaving = before you leave. Không dùng động từ nguyên mẫu.',
        en: 'When an active clause after **before** is reduced, the verb becomes **-ing**: before leaving = before you leave. The base verb is not used.',
      },
    },
    {
      wrong: 'Book your table early, [[unless]] you may not get a seat on Saturday night.',
      right: 'Book your table early, [[or else]] you may not get a seat on Saturday night.',
      explanation: {
        vi: 'Ý cần nói là "đặt sớm đi, NẾU KHÔNG THÌ sẽ hết chỗ" → **or else** (sau dấu chấm phẩy thì dùng otherwise). **unless** mở đầu một điều kiện, không mang nghĩa "nếu không thì".',
        en: 'The meaning is "book early; IF NOT, you may not get a seat" → **or else** (after a semicolon, otherwise). **unless** introduces a condition; it does not mean "if not, then".',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'if và unless', en: 'if and unless' },
      body: {
        vi: '**if** = nếu. **unless** = trừ khi = if … not. Vì unless đã mang nghĩa phủ định, động từ sau nó để ở dạng khẳng định. Nhắc một dòng: khi nói về tương lai, mệnh đề sau if/unless dùng hiện tại đơn, không dùng will; các loại câu điều kiện 1-2-3 học ở chương 18.',
        en: '**if** introduces a condition. **unless** = except if = if … not. Because unless is already negative, the verb after it stays affirmative. A one-line reminder: for the future, the clause after if/unless takes the present simple, not will; conditional types 1, 2 and 3 are covered in chapter 18.',
      },
      examples: [
        {
          en: 'The parcel will be returned to the sender **unless** someone signs for it within five days.',
          vi: 'Bưu kiện sẽ bị trả về người gửi trừ khi có người ký nhận trong vòng năm ngày.',
        },
        {
          en: '**If** the client accepts our quote, installation will begin next month.',
          vi: 'Nếu khách hàng chấp nhận báo giá, việc lắp đặt sẽ bắt đầu vào tháng sau.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không viết "unless … not". Phép thử: thay **unless** bằng **if … not**; nếu câu đúng nghĩa thì unless là đáp án.',
          en: 'Do not write "unless … not". Test: replace **unless** with **if … not**; if the meaning works, unless is the answer.',
        },
      },
    },
    {
      heading: { vi: 'Điều kiện bắt buộc: provided (that), providing (that), as long as, only if', en: 'Strict conditions: provided (that), providing (that), as long as, only if' },
      points: [
        {
          vi: '**provided (that) / providing (that)** = với điều kiện là; trang trọng, hay gặp trong hợp đồng, chính sách. that có thể lược.',
          en: '**provided (that) / providing (that)** = on condition that; formal, common in contracts and policies. that can be left out.',
        },
        {
          vi: '**as long as** (hoặc so long as) = miễn là; nghĩa giống provided that nhưng thông dụng hơn.',
          en: '**as long as** (or so long as) = on condition that; the same meaning as provided that but more everyday.',
        },
        {
          vi: '**only if** = chỉ khi, nhấn mạnh đây là điều kiện DUY NHẤT. Khi only if đứng đầu câu, mệnh đề chính đảo ngữ: Only if the board agrees **will we** proceed.',
          en: '**only if** stresses that this is the ONLY condition. When only if opens the sentence, the main clause is inverted: Only if the board agrees **will we** proceed.',
        },
      ],
      examples: [
        {
          en: 'Returns are accepted within thirty days **provided that** the original receipt is included.',
          vi: 'Hàng trả lại được chấp nhận trong vòng ba mươi ngày với điều kiện có kèm hoá đơn gốc.',
        },
        {
          en: 'Interns may use the company car **as long as** they hold a valid driving license.',
          vi: 'Thực tập sinh được dùng xe công ty miễn là có giấy phép lái xe còn hiệu lực.',
        },
      ],
    },
    {
      heading: { vi: 'in case và in the event that', en: 'in case and in the event that' },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Connector' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'in case',
            { vi: 'Phòng khi: làm việc gì TRƯỚC để đề phòng, dù chuyện đó có xảy ra hay không', en: 'As a precaution: you act NOW, whether or not the event happens' },
            'Bring a spare battery in case the camera dies.',
          ],
          [
            'if',
            { vi: 'Nếu: chỉ hành động KHI chuyện đó xảy ra', en: 'You act only WHEN the event happens' },
            'Use the spare battery if the camera dies.',
          ],
          [
            'in the event that',
            { vi: 'Trong trường hợp (= if, rất trang trọng)', en: 'If it happens (= if, very formal)' },
            'In the event that the flight is canceled, a full refund will be issued.',
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**in case of / in the event of** là giới từ, đi với cụm danh từ (in case of fire, in the event of a delay): phân biệt với liên từ ở bài 8.2.',
          en: '**in case of / in the event of** are prepositions and take a noun phrase (in case of fire, in the event of a delay): telling them from the conjunctions is covered in lesson 8.2.',
        },
      },
    },
    {
      heading: { vi: 'Nếu không thì: otherwise và or else', en: 'If not: otherwise and or else' },
      body: {
        vi: '**otherwise** và **or else** = nếu không thì; vế trước thường là câu mệnh lệnh hoặc câu có must/should. **otherwise** là trạng từ liên kết, nên trong văn viết chuẩn nó đứng sau dấu chấm hoặc dấu chấm phẩy (…; otherwise, …). **or else** là liên từ, đứng sau dấu phẩy được.',
        en: '**otherwise** and **or else** = if not; the first part is usually an imperative or a sentence with must/should. **otherwise** is a linking adverb, so in formal writing it follows a period or semicolon (…; otherwise, …). **or else** is a conjunction and can follow a comma.',
      },
      examples: [
        {
          en: 'All visitors must sign in at reception; **otherwise**, they will not be issued a badge.',
          vi: 'Mọi khách đến phải đăng ký ở quầy lễ tân; nếu không, họ sẽ không được cấp thẻ.',
        },
        {
          en: 'Save your changes before closing the file, **or else** they will be lost.',
          vi: 'Hãy lưu các thay đổi trước khi đóng tệp, nếu không chúng sẽ bị mất.',
        },
      ],
    },
    {
      heading: { vi: 'Rút gọn mệnh đề trạng ngữ', en: 'Reduced adverb clauses' },
      body: {
        vi: 'Khi mệnh đề trạng ngữ có CÙNG chủ ngữ với mệnh đề chính, có thể lược chủ ngữ (và be) mà vẫn giữ liên từ. Chủ ngữ tự làm hành động (chủ động) → **V-ing**; chủ ngữ chịu hành động (bị động) → **V3**. Một số cụm cố định chỉ còn liên từ + tính từ.',
        en: 'When an adverb clause has the SAME subject as the main clause, the subject (and be) can be dropped while the conjunction stays. If the subject performs the action (active) → **-ing**; if it receives the action (passive) → **V3**. Some fixed phrases keep only the conjunction + an adjective.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Liên từ hay gặp', en: 'Typical conjunctions' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            { vi: 'Liên từ + V-ing (chủ động)', en: 'Conjunction + -ing (active)' },
            'when, while, before, after, since',
            'while waiting for the bus (= while she was waiting)',
          ],
          [
            { vi: 'Liên từ + V3 (bị động)', en: 'Conjunction + V3 (passive)' },
            'once, if, unless, when, until',
            'once completed (= once it is completed)',
          ],
          [
            { vi: 'Cụm cố định', en: 'Fixed phrases' },
            'if, unless, when, as',
            'if necessary, if possible, unless otherwise noted, when needed, as indicated',
          ],
        ],
      },
      examples: [
        {
          en: '**After reviewing** the applications, the panel invited six candidates for interviews.',
          vi: 'Sau khi xem xét hồ sơ, hội đồng mời sáu ứng viên đến phỏng vấn.',
        },
        {
          en: '**When stored** at room temperature, the samples remain usable for two weeks.',
          vi: 'Khi được bảo quản ở nhiệt độ phòng, các mẫu vẫn dùng được trong hai tuần.',
        },
        {
          en: '**Unless otherwise stated**, all meetings will be held in Conference Room B.',
          vi: 'Trừ khi có thông báo khác, mọi cuộc họp sẽ được tổ chức tại phòng hội nghị B.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Chủ ngữ bị lược phải trùng chủ ngữ mệnh đề chính, nếu không câu bị "treo" (bài 14.3). Hỏi: AI/CÁI GÌ làm hành động? Chủ ngữ tự làm → V-ing; chủ ngữ được/bị làm → V3.',
          en: 'The dropped subject must be the same as the main-clause subject; otherwise the modifier dangles (lesson 14.3). Ask: WHO or WHAT does the action? The subject does it → -ing; the subject receives it → V3.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu điều kiện và rút gọn ở Part 5', en: 'Tackling conditional and reduced-clause items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là liên từ điều kiện → đọc nghĩa: điều kiện phủ định (unless), điều kiện bắt buộc (provided that, as long as), đề phòng (in case), trường hợp xảy ra (if, in the event that).',
          en: 'Four conditional connectors → read for meaning: a negative condition (unless), a strict requirement (provided that, as long as), a precaution (in case), a possible event (if, in the event that).',
        },
        {
          vi: 'Chỗ trống đứng sau dấu chấm phẩy hoặc giữa hai dấu phẩy, trước một mệnh đề hoàn chỉnh → trạng từ **otherwise**.',
          en: 'A blank after a semicolon or between commas, before a complete clause → the adverb **otherwise**.',
        },
        {
          vi: 'Liên từ + chỗ trống + dấu phẩy + mệnh đề chính → câu rút gọn. Chủ ngữ chính tự làm hành động → V-ing; được/bị làm → V3. Loại động từ nguyên mẫu và to V.',
          en: 'Conjunction + blank + comma + main clause → a reduced clause. The main subject does the action → -ing; receives it → V3. Cross out the base verb and to V.',
        },
        {
          vi: 'Thuộc các cụm cố định: if necessary, if possible, unless otherwise noted/specified/stated, when needed, as indicated.',
          en: 'Learn the fixed phrases: if necessary, if possible, unless otherwise noted/specified/stated, when needed, as indicated.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Late payments will incur a five percent fee ------- the customer has arranged an extension in advance.',
      options: ['if', 'provided that', 'unless', 'as long as'],
      answer: 2,
      explanation: {
        vi: 'Phí phạt áp dụng khi khách KHÔNG xin gia hạn trước → điều kiện phủ định → **unless**. if, provided that, as long as đều là điều kiện khẳng định, làm câu thành "đã xin gia hạn thì bị phạt", vô lý.',
        en: 'The fee applies when the customer has NOT arranged an extension → a negative condition → **unless**. if, provided that and as long as are positive conditions and would mean arranging an extension triggers the fee, which is illogical.',
      },
      translation: 'Thanh toán trễ sẽ bị tính phí năm phần trăm trừ khi khách hàng đã xin gia hạn trước.',
    },
    {
      sentence: 'Employees may work from home on Fridays ------- they remain reachable by phone during office hours.',
      options: ['as long as', 'unless', 'otherwise', 'in case'],
      answer: 0,
      explanation: {
        vi: 'Được làm ở nhà với ĐIỀU KIỆN luôn liên lạc được → **as long as** (miễn là). unless làm nghĩa ngược lại; in case (phòng khi) không hợp nghĩa; otherwise là trạng từ, không nối mệnh đề theo cách này.',
        en: 'Working from home is allowed ON CONDITION that staff stay reachable → **as long as**. unless reverses the meaning; in case (as a precaution) does not fit; otherwise is an adverb and cannot join the clauses like this.',
      },
      translation: 'Nhân viên được làm việc tại nhà vào thứ Sáu miễn là họ luôn liên lạc được qua điện thoại trong giờ hành chính.',
    },
    {
      sentence: "Please keep a printed copy of your boarding pass ------- the airline's mobile app stops working.",
      options: ['unless', 'provided that', 'as long as', 'in case'],
      answer: 3,
      explanation: {
        vi: 'Giữ bản in là để ĐỀ PHÒNG ứng dụng bị lỗi → **in case** (phòng khi). provided that và as long as biến lỗi ứng dụng thành điều kiện cần, vô lý; unless làm nghĩa ngược lại.',
        en: 'The printed copy is a PRECAUTION in case the app fails → **in case**. provided that and as long as turn the app failure into a requirement, which is illogical; unless reverses the meaning.',
      },
      translation: 'Vui lòng giữ một bản in thẻ lên máy bay phòng khi ứng dụng di động của hãng hàng không ngừng hoạt động.',
    },
    {
      sentence: '------- the keynote speaker is unable to attend, the opening session will be led by the deputy director.',
      options: ['Unless', 'In case of', 'In the event that', 'Otherwise'],
      answer: 2,
      explanation: {
        vi: 'Phía sau là mệnh đề, nghĩa "trong trường hợp diễn giả không đến được" → **In the event that** (= if). In case of là giới từ, không đi với mệnh đề; Unless làm nghĩa ngược lại; Otherwise là trạng từ.',
        en: 'A clause follows, meaning "if the speaker cannot come" → **In the event that** (= if). In case of is a preposition and cannot take a clause; Unless reverses the meaning; Otherwise is an adverb.',
      },
      translation: 'Trong trường hợp diễn giả chính không thể tham dự, phiên khai mạc sẽ do phó giám đốc chủ trì.',
    },
    {
      sentence: 'Please return the signed contract by June 5; -------, the offer of employment will be withdrawn.',
      options: ['unless', 'otherwise', 'in case', 'as long as'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng sau **dấu chấm phẩy** và trước dấu phẩy, nghĩa "nếu không thì" → trạng từ **otherwise**. unless, in case, as long as là liên từ, phải có mệnh đề ngay sau, không đứng một mình giữa hai dấu câu.',
        en: 'The blank follows a **semicolon** and comes before a comma, meaning "if not" → the adverb **otherwise**. unless, in case and as long as are conjunctions that need a clause right after them; they cannot stand alone between punctuation marks.',
      },
      translation: 'Vui lòng gửi lại hợp đồng đã ký trước ngày 5 tháng 6; nếu không, lời mời làm việc sẽ bị rút lại.',
    },
    {
      sentence: 'Before ------- the production area, all visitors must put on a hard hat and safety glasses.',
      options: ['enter', 'entering', 'entered', 'to enter'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề rút gọn sau **Before**; khách tự thực hiện hành động vào khu vực (chủ động) → **entering** (= before they enter). entered mang nghĩa bị động; enter và to enter không đứng sau before.',
        en: 'A reduced clause after **Before**; the visitors perform the action themselves (active) → **entering** (= before they enter). entered has a passive meaning; enter and to enter cannot follow before.',
      },
      translation: 'Trước khi vào khu vực sản xuất, mọi khách tham quan phải đội mũ bảo hộ và đeo kính an toàn.',
    },
    {
      sentence: 'Once -------, the revised floor plans will be distributed to all department heads.',
      options: ['approving', 'approve', 'approval', 'approved'],
      answer: 3,
      explanation: {
        vi: 'Chủ ngữ chính **the revised floor plans** ĐƯỢC duyệt (bị động) → **approved** (= once they are approved). approving mang nghĩa chủ động (bản vẽ tự duyệt, vô lý); approval là danh từ, mà once không phải giới từ.',
        en: 'The main subject, **the revised floor plans**, IS approved (passive) → **approved** (= once they are approved). approving is active (the plans approving something), which is illogical; approval is a noun, and once is not a preposition.',
      },
      translation: 'Sau khi được phê duyệt, bản sơ đồ mặt bằng đã chỉnh sửa sẽ được gửi tới tất cả trưởng phòng.',
    },
    {
      sentence: 'Unless otherwise -------, all prices in this catalog include sales tax and standard delivery.',
      options: ['noting', 'noted', 'note', 'notes'],
      answer: 1,
      explanation: {
        vi: 'Cụm cố định **unless otherwise noted** (= unless it is otherwise noted, trừ khi có ghi chú khác) dùng V3 vì mang nghĩa bị động. noting là chủ động; note và notes là động từ chia, không có chủ ngữ.',
        en: 'The fixed phrase **unless otherwise noted** (= unless it is otherwise noted) uses V3 because the meaning is passive. noting is active; note and notes are finite verbs with no subject.',
      },
      translation: 'Trừ khi có ghi chú khác, mọi mức giá trong danh mục này đã bao gồm thuế bán hàng và phí giao hàng tiêu chuẩn.',
    },
    {
      sentence: 'If -------, the organizers will arrange a shuttle bus from the airport to the conference venue.',
      options: ['necessity', 'necessarily', 'necessitate', 'necessary'],
      answer: 3,
      explanation: {
        vi: 'Cụm rút gọn cố định **if necessary** (= if it is necessary) gồm liên từ + tính từ → **necessary**. necessity là danh từ, necessarily là trạng từ, necessitate là động từ, đều không tạo thành cụm này.',
        en: 'The fixed reduced phrase **if necessary** (= if it is necessary) is conjunction + adjective → **necessary**. necessity is a noun, necessarily an adverb and necessitate a verb; none forms this phrase.',
      },
      translation: 'Nếu cần, ban tổ chức sẽ bố trí xe buýt đưa đón từ sân bay đến địa điểm hội nghị.',
    },
    {
      sentence: 'Hotel guests may check out as late as 2 p.m. ------- they inform the front desk the day before.',
      options: ['providing', 'unless', 'otherwise', 'in case of'],
      answer: 0,
      explanation: {
        vi: 'Được trả phòng muộn với ĐIỀU KIỆN báo trước → **providing** (= provided that). unless làm nghĩa ngược lại; otherwise là trạng từ; in case of là giới từ, không đi với mệnh đề.',
        en: 'Late checkout is allowed ON CONDITION that guests notify the desk → **providing** (= provided that). unless reverses the meaning; otherwise is an adverb; in case of is a preposition and cannot take a clause.',
      },
      translation: 'Khách lưu trú có thể trả phòng muộn nhất lúc 2 giờ chiều với điều kiện báo cho quầy lễ tân từ hôm trước.',
    },
  ],
};
