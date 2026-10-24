import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conditionals-zero-first',
  intro: {
    vi: 'Câu điều kiện **loại 0** nói về sự thật, quy trình luôn đúng; **loại 1** nói về một khả năng có thật trong tương lai. Part 5/6 thường để trống một trong hai mệnh đề và đặt **will + V** cạnh đáp án hiện tại đơn để bẫy bạn.',
    en: 'A **zero conditional** describes facts and procedures that are always true; a **first conditional** describes a real possibility in the future. Part 5/6 usually leaves one of the two clauses blank and puts **will + verb** next to a present simple key to trap you.',
  },
  mistakes: [
    {
      wrong: 'If the shipment [[will arrive]] late, we will notify you by e-mail.',
      right: 'If the shipment [[arrives]] late, we will notify you by e-mail.',
      explanation: {
        vi: 'Mệnh đề **if** của câu loại 1 dùng **hiện tại đơn** dù nói về tương lai; will chỉ nằm ở mệnh đề chính (**will notify**).',
        en: 'The **if** clause of a first conditional takes the **present simple** even though it refers to the future; will belongs only in the main clause (**will notify**).',
      },
    },
    {
      wrong: 'If a customer pays by credit card, the system [[issued]] a receipt automatically.',
      right: 'If a customer pays by credit card, the system [[issues]] a receipt automatically.',
      explanation: {
        vi: 'Đây là một quy trình luôn diễn ra (loại 0), nên cả hai mệnh đề đều chia **hiện tại đơn**: pays … **issues**. Quá khứ issued làm lệch khung thời gian.',
        en: 'This is a procedure that always happens (zero conditional), so both clauses take the **present simple**: pays … **issues**. The past issued breaks the time frame.',
      },
    },
    {
      wrong: 'If the client approves the design, we [[would begin]] production next week.',
      right: 'If the client approves the design, we [[will begin]] production next week.',
      explanation: {
        vi: 'Mệnh đề if dùng hiện tại (**approves**) → đây là khả năng có thật, mệnh đề chính dùng **will + V**. would + V đi với mệnh đề if ở quá khứ (loại 2, bài 18.2).',
        en: 'The if clause is in the present (**approves**) → this is a real possibility, so the main clause takes **will + verb**. would + verb pairs with a past-tense if clause (second conditional, lesson 18.2).',
      },
    },
    {
      wrong: 'If the package [[is not arrive]] by Friday, please call our support line.',
      right: 'If the package [[does not arrive]] by Friday, please call our support line.',
      explanation: {
        vi: 'Phủ định của động từ thường ở hiện tại đơn cần trợ động từ **do/does**: **does not arrive**. Không ghép is not với động từ nguyên mẫu.',
        en: 'The negative of an ordinary verb in the present simple needs the auxiliary **do/does**: **does not arrive**. is not cannot be combined with a base verb.',
      },
    },
    {
      wrong: 'If you [[should to need]] any further information, please contact Ms. Alvarez.',
      right: 'If you [[should need]] any further information, please contact Ms. Alvarez.',
      explanation: {
        vi: '**should** là động từ khuyết thiếu nên theo sau là động từ nguyên mẫu không "to": **should need**. Cấu trúc này làm lời đề nghị lịch sự hơn.',
        en: '**should** is a modal, so it is followed by a base verb without "to": **should need**. The structure makes the offer more polite.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Hai mệnh đề của câu điều kiện', en: 'The two clauses of a conditional' },
      body: {
        vi: 'Câu điều kiện gồm **mệnh đề if** (điều kiện) và **mệnh đề chính** (kết quả). Hai mệnh đề đổi chỗ được cho nhau; khi mệnh đề if đứng đầu câu thì có dấu phẩy ngăn cách, khi đứng sau thì thường không có. Điều quyết định loại câu là **thì của động từ** trong từng mệnh đề.',
        en: 'A conditional has an **if clause** (the condition) and a **main clause** (the result). The two clauses can swap places; when the if clause comes first it is followed by a comma, and when it comes second there is usually no comma. What decides the type is the **verb tense** in each clause.',
      },
      table: {
        head: [
          { vi: 'Loại', en: 'Type' },
          { vi: 'Mệnh đề if', en: 'If clause' },
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Dùng khi', en: 'Used for' },
        ],
        rows: [
          [
            { vi: 'Loại 0', en: 'Zero' },
            'If + present simple',
            'present simple',
            { vi: 'Sự thật, quy trình, chính sách luôn đúng', en: 'Facts, procedures and policies that are always true' },
          ],
          [
            { vi: 'Loại 1', en: 'First' },
            'If + present simple',
            'will / can / may / might / should + V, or an imperative',
            { vi: 'Khả năng có thật trong tương lai', en: 'A real possibility in the future' },
          ],
        ],
      },
      examples: [
        {
          en: 'If the invoice **is** correct, the finance team **will process** it today.',
          vi: 'Nếu hoá đơn chính xác, phòng tài chính sẽ xử lý nó trong hôm nay.',
        },
        {
          en: 'The finance team **will process** the invoice today if it **is** correct.',
          vi: 'Phòng tài chính sẽ xử lý hoá đơn trong hôm nay nếu nó chính xác.',
        },
      ],
    },
    {
      heading: { vi: 'Loại 0: sự thật và quy trình', en: 'Zero conditional: facts and procedures' },
      body: {
        vi: 'Loại 0 diễn tả điều **luôn xảy ra** mỗi khi điều kiện được đáp ứng: quy định của công ty, cách máy móc vận hành, sự thật khoa học. Cả hai mệnh đề đều chia **hiện tại đơn**, và **if** ở đây có nghĩa gần như **when/whenever** (mỗi khi).',
        en: 'The zero conditional describes what **always happens** whenever the condition is met: company rules, how machines work, scientific facts. Both clauses take the **present simple**, and **if** here means almost the same as **when/whenever**.',
      },
      examples: [
        {
          en: 'If an employee **works** more than 40 hours a week, the company **pays** overtime.',
          vi: 'Nếu nhân viên làm hơn 40 giờ một tuần, công ty sẽ trả tiền làm thêm giờ.',
        },
        {
          en: 'If the printer **overheats**, it **shuts** down automatically.',
          vi: 'Nếu máy in quá nóng, nó sẽ tự động tắt.',
        },
        {
          en: 'Orders **ship** the next business day if they **are placed** after 3 p.m.',
          vi: 'Các đơn hàng đặt sau 3 giờ chiều sẽ được giao vào ngày làm việc tiếp theo.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Dịch sang tiếng Việt thường có chữ "sẽ", nhưng tiếng Anh vẫn dùng hiện tại đơn ở cả hai vế vì đây là quy luật chung, không phải một sự việc cụ thể sắp xảy ra.',
          en: 'The Vietnamese translation often adds a word meaning "will", but English keeps the present simple in both clauses because this is a general rule, not one specific future event.',
        },
      },
    },
    {
      heading: { vi: 'Loại 1: khả năng có thật trong tương lai', en: 'First conditional: real future possibilities' },
      body: {
        vi: 'Loại 1 nói về một sự việc **cụ thể, có thể xảy ra** sau này. Mệnh đề if dùng **hiện tại đơn**; mệnh đề chính dùng **will + V** hoặc một động từ khuyết thiếu khác tuỳ ý nghĩa, hay một **câu mệnh lệnh** (rất phổ biến trong thông báo và e-mail).',
        en: 'The first conditional talks about a **specific event that may happen** later. The if clause takes the **present simple**; the main clause takes **will + verb**, another modal depending on the meaning, or an **imperative** (very common in notices and e-mails).',
      },
      table: {
        head: [
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Ý nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['will + V', { vi: 'Kết quả chắc chắn', en: 'Certain result' }, 'If it rains, the picnic will move indoors.'],
          ['can + V', { vi: 'Khả năng, sự cho phép', en: 'Ability or permission' }, 'If you finish early, you can leave at four.'],
          ['may / might + V', { vi: 'Kết quả có thể xảy ra', en: 'Possible result' }, 'If sales drop, we may cut costs.'],
          ['should + V', { vi: 'Lời khuyên', en: 'Advice' }, 'If the fee rises, you should switch banks.'],
          [{ vi: 'Câu mệnh lệnh (V nguyên mẫu)', en: 'Imperative (base verb)' }, { vi: 'Yêu cầu, hướng dẫn', en: 'Request or instruction' }, 'If you are late, call the front desk.'],
        ],
      },
      examples: [
        {
          en: 'If the supplier **confirms** the price, we **will sign** the contract on Monday.',
          vi: 'Nếu nhà cung cấp xác nhận mức giá, chúng tôi sẽ ký hợp đồng vào thứ Hai.',
        },
        {
          en: 'If you **have** any questions about your benefits, **contact** the HR office.',
          vi: 'Nếu bạn có thắc mắc về phúc lợi, hãy liên hệ phòng nhân sự.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mệnh đề if cũng có thể dùng **hiện tại tiếp diễn** hoặc **hiện tại hoàn thành**: If you **are travelling** next week, … / If you **have** already **paid**, please ignore this notice.',
          en: 'The if clause can also take the **present continuous** or the **Present Perfect**: If you **are travelling** next week, … / If you **have** already **paid**, please ignore this notice.',
        },
      },
    },
    {
      heading: { vi: 'Không dùng will trong mệnh đề if', en: 'No will in the if clause' },
      body: {
        vi: 'Giống mệnh đề thời gian (bài 4.7), mệnh đề if nói về tương lai vẫn chia ở thì hiện tại. Chỉ có một ngoại lệ: khi **will** mang nghĩa **sẵn lòng** (dùng trong lời đề nghị lịch sự) hoặc **won\'t** mang nghĩa **không chịu**. Khi đó will là một phần ý nghĩa, không phải dấu hiệu tương lai.',
        en: "Just like time clauses (lesson 4.7), an if clause about the future stays in a present tense. There is one exception: when **will** means **be willing to** (in polite requests) or **won't** means **refuse to**. Then will carries meaning of its own rather than marking the future.",
      },
      examples: [
        {
          en: 'If the contract **is signed** this week, work **will start** in May.',
          vi: 'Nếu hợp đồng được ký trong tuần này, công việc sẽ bắt đầu vào tháng Năm.',
        },
        {
          en: 'If you **will follow** me, I will show you to the meeting room.',
          vi: 'Nếu anh vui lòng đi theo tôi, tôi sẽ dẫn anh đến phòng họp.',
        },
        {
          en: "If the landlord **won't repair** the heating, we will contact a lawyer.",
          vi: 'Nếu chủ nhà nhất quyết không sửa hệ thống sưởi, chúng tôi sẽ liên hệ luật sư.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong Part 5, khi chỗ trống nằm ở mệnh đề if và câu chỉ nói về một sự việc tương lai bình thường, hãy loại ngay mọi lựa chọn có **will**. Ngoại lệ "sẵn lòng" gần như chỉ xuất hiện trong lời mời lịch sự kiểu If you will …, I will ….',
          en: 'In Part 5, when the blank is in the if clause and the sentence describes an ordinary future event, cross out every option with **will** at once. The "willing" exception almost only appears in polite invitations like If you will …, I will ….',
        },
      },
    },
    {
      heading: { vi: 'If … should + V: điều kiện lịch sự, ít khả năng', en: 'If … should + verb: polite, less likely conditions' },
      body: {
        vi: 'Thêm **should** vào mệnh đề if (**If + S + should + V nguyên mẫu**) làm điều kiện nghe ít chắc chắn hơn ("nếu chẳng may", "trong trường hợp") và trang trọng hơn. Cấu trúc này rất hay gặp ở cuối thư và thông báo; mệnh đề chính thường là câu mệnh lệnh hoặc will. Dạng đảo ngữ **Should you need …** được học ở bài 18.4.',
        en: 'Adding **should** to the if clause (**If + subject + should + base verb**) makes the condition sound less certain ("if by any chance") and more formal. It is very common at the end of letters and notices; the main clause is usually an imperative or will. The inverted form **Should you need …** is covered in lesson 18.4.',
      },
      examples: [
        {
          en: 'If you **should experience** any problems with your room, please call extension 0.',
          vi: 'Nếu quý khách chẳng may gặp sự cố gì với phòng, vui lòng gọi số nội bộ 0.',
        },
        {
          en: 'If the flight **should be** delayed, a driver will wait for you at the airport.',
          vi: 'Trong trường hợp chuyến bay bị hoãn, tài xế sẽ chờ quý khách ở sân bay.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Sau should luôn là **động từ nguyên mẫu** cho mọi ngôi: If the client **should call** (không phải should calls / should to call).',
          en: 'should is always followed by a **base verb**, whatever the subject: If the client **should call** (not should calls / should to call).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu điều kiện loại 0/1 trong Part 5', en: 'Attacking zero/first conditionals in Part 5' },
      points: [
        {
          vi: 'Chỗ trống ở **mệnh đề if** → chọn hiện tại đơn (chia đúng số ít/số nhiều, đúng chủ động/bị động); loại will, would và quá khứ.',
          en: 'Blank in the **if clause** → choose the present simple (with correct singular/plural agreement and active/passive voice); cross out will, would and past forms.',
        },
        {
          vi: 'Chỗ trống ở **mệnh đề chính**, mệnh đề if ở hiện tại: câu nói về một sự việc cụ thể sắp tới (có next week, tomorrow, this Friday…) → **will/can/may + V**; câu nói về quy trình, chính sách chung → **hiện tại đơn**.',
          en: 'Blank in the **main clause** with a present-tense if clause: a specific upcoming event (next week, tomorrow, this Friday…) → **will/can/may + verb**; a general procedure or policy → **present simple**.',
        },
        {
          vi: 'Mệnh đề chính bắt đầu bằng chỗ trống, không có chủ ngữ → câu mệnh lệnh, chọn **động từ nguyên mẫu**.',
          en: 'The main clause starts with the blank and has no subject → it is an imperative, so choose the **base verb**.',
        },
        {
          vi: 'Thấy **If you ------- need / have / require …** với lựa chọn should → đó là cấu trúc lịch sự **If … should + V**.',
          en: 'See **If you ------- need / have / require …** with should among the options → it is the polite **If … should + verb** pattern.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'If the shipment clears customs by Thursday, the store ------- the new products on its shelves this weekend.',
      options: ['will display', 'displayed', 'would display', 'has displayed'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề if ở hiện tại (**clears**) và có mốc tương lai **this weekend** → loại 1, mệnh đề chính dùng **will + V**. would display chỉ đi với mệnh đề if ở quá khứ (loại 2).',
        en: 'The if clause is in the present (**clears**) and there is a future time marker, **this weekend** → first conditional, so the main clause takes **will + verb**. would display pairs only with a past-tense if clause (second conditional).',
      },
      translation: 'Nếu lô hàng thông quan trước thứ Năm, cửa hàng sẽ bày các sản phẩm mới lên kệ vào cuối tuần này.',
    },
    {
      sentence: 'If Mr. Patel ------- the revised contract before noon, the legal team will review it this afternoon.',
      options: ['will send', 'sending', 'sends', 'to send'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề chính có **will review** → loại 1, mệnh đề if dùng **hiện tại đơn**, chủ ngữ số ít Mr. Patel → **sends**. will send sai vì không dùng will trong mệnh đề if.',
        en: 'The main clause has **will review** → first conditional, so the if clause takes the **present simple**; the subject Mr. Patel is singular → **sends**. will send is wrong because will is not used in the if clause.',
      },
      translation: 'Nếu ông Patel gửi bản hợp đồng đã chỉnh sửa trước buổi trưa, nhóm pháp lý sẽ xem xét nó vào chiều nay.',
    },
    {
      sentence: 'If a guest ------- the key card inside the room, the door locks automatically and the front desk must open it.',
      options: ['leave', 'leaves', 'left', 'leaving'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề chính **locks** ở hiện tại đơn, mô tả cách hệ thống luôn vận hành → loại 0, mệnh đề if cũng dùng hiện tại đơn; chủ ngữ số ít **a guest** → **leaves**. left lệch khung thời gian, leave sai hoà hợp chủ ngữ.',
        en: 'The main clause **locks** is in the present simple and describes how the system always works → zero conditional, so the if clause is present simple too; the subject **a guest** is singular → **leaves**. left breaks the time frame, and leave does not agree with the subject.',
      },
      translation: 'Nếu khách để quên thẻ từ trong phòng, cửa sẽ tự động khoá và quầy lễ tân phải mở giúp.',
    },
    {
      sentence: 'If the water pressure in the cooling system falls below a safe level, the pump ------- off automatically.',
      options: ['shut', 'shutting', 'had shut', 'shuts'],
      answer: 3,
      explanation: {
        vi: '**falls** ở hiện tại đơn và câu mô tả cơ chế vận hành của máy (**automatically**) → loại 0, mệnh đề chính cũng dùng hiện tại đơn, chủ ngữ số ít the pump → **shuts**. had shut là quá khứ hoàn thành, không khớp với falls.',
        en: '**falls** is present simple and the sentence describes how a machine works (**automatically**) → zero conditional, so the main clause is present simple too; the subject the pump is singular → **shuts**. had shut is past perfect and does not match falls.',
      },
      translation: 'Nếu áp suất nước trong hệ thống làm mát giảm xuống dưới mức an toàn, máy bơm sẽ tự động tắt.',
    },
    {
      sentence: 'If you have not received an order confirmation within 24 hours, ------- our customer service team at 555-0182.',
      options: ['contact', 'contacted', 'contacting', 'to contact'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính **không có chủ ngữ** → đây là câu mệnh lệnh, dùng **động từ nguyên mẫu contact**. contacting và to contact không thể làm động từ chính của mệnh đề.',
        en: 'The main clause has **no subject** → it is an imperative, so it takes the **base verb contact**. contacting and to contact cannot be the main verb of a clause.',
      },
      translation: 'Nếu quý khách chưa nhận được xác nhận đơn hàng trong vòng 24 giờ, hãy liên hệ đội chăm sóc khách hàng của chúng tôi theo số 555-0182.',
    },
    {
      sentence: 'If you ------- need help with the online registration form, please call the conference helpline.',
      options: ['would', 'should', 'will', 'had'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề chính là câu mệnh lệnh lịch sự (**please call**) và sau chỗ trống là động từ nguyên mẫu **need** → cấu trúc **If you should + V** (nếu chẳng may). will need sai vì will không dùng trong mệnh đề if với nghĩa tương lai.',
        en: 'The main clause is a polite imperative (**please call**) and the blank is followed by the base verb **need** → the pattern **If you should + verb** (if by any chance). will need is wrong because future will is not used in the if clause.',
      },
      translation: 'Nếu quý vị cần hỗ trợ điền mẫu đăng ký trực tuyến, vui lòng gọi đường dây hỗ trợ của hội nghị.',
    },
    {
      sentence: 'If the main conference room is still under renovation next week, the training session ------- be moved to the third floor.',
      options: ['had', 'being', 'have', 'might'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống là **be moved** (động từ nguyên mẫu) và mệnh đề if ở hiện tại với mốc **next week** → loại 1, mệnh đề chính cần một động từ khuyết thiếu: **might** be moved. had, have, being đều không đứng trước "be" nguyên mẫu.',
        en: 'The blank is followed by **be moved** (a base form) and the if clause is present with the time marker **next week** → first conditional, so the main clause needs a modal: **might** be moved. had, have and being cannot come before the base form "be".',
      },
      translation: 'Nếu tuần sau phòng hội nghị chính vẫn đang được cải tạo, buổi đào tạo có thể sẽ được chuyển lên tầng ba.',
    },
    {
      sentence: 'If you ------- already paid the March invoice, please disregard this reminder.',
      options: ['will have', 'having', 'have', 'would have'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề chính là câu mệnh lệnh ở hiện tại (**please disregard**); việc thanh toán có thể đã xong tính đến lúc này (**already**) → mệnh đề if dùng hiện tại hoàn thành **have paid**. will have và would have không dùng trong mệnh đề if loại 1; having không thể làm động từ chính của mệnh đề.',
        en: 'The main clause is a present imperative (**please disregard**); the payment may already be complete up to now (**already**) → the if clause takes the Present Perfect **have paid**. will have and would have are not used in a first-conditional if clause, and having cannot be the main verb of a clause.',
      },
      translation: 'Nếu quý khách đã thanh toán hoá đơn tháng Ba, vui lòng bỏ qua thư nhắc này.',
    },
    {
      sentence: 'If the payment ------- by the end of the month, the account will be suspended without further notice.',
      options: ['is not received', 'will not be received', 'did not receive', 'is not receiving'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính có **will be suspended** → mệnh đề if dùng hiện tại đơn; **the payment** không tự "nhận" được nên phải dùng bị động → **is not received**. will not be received sai vì có will; did not receive và is not receiving là chủ động.',
        en: 'The main clause has **will be suspended** → the if clause takes the present simple; **the payment** cannot receive anything itself, so it must be passive → **is not received**. will not be received is wrong because of will; did not receive and is not receiving are active.',
      },
      translation: 'Nếu khoản thanh toán không được nhận trước cuối tháng, tài khoản sẽ bị tạm khoá mà không báo trước.',
    },
    {
      sentence: 'If at least thirty employees sign up by Friday, the company ------- a second shuttle bus to the new office.',
      options: ['would add', 'will add', 'had added', 'adding'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề if ở hiện tại (**sign up**) với hạn chót cụ thể **by Friday** → khả năng có thật trong tương lai, mệnh đề chính dùng **will add**. would add đi với mệnh đề if ở quá khứ (loại 2).',
        en: 'The if clause is in the present (**sign up**) with a specific deadline, **by Friday** → a real future possibility, so the main clause takes **will add**. would add pairs with a past-tense if clause (second conditional).',
      },
      translation: 'Nếu có ít nhất ba mươi nhân viên đăng ký trước thứ Sáu, công ty sẽ bổ sung một chuyến xe đưa đón thứ hai đến văn phòng mới.',
    },
  ],
};
