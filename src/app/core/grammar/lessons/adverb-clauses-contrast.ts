import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'adverb-clauses-contrast',
  intro: {
    vi: 'Bài này dạy các liên từ nhượng bộ và tương phản: although, even though, even if, while, whereas, no matter how, however + tính từ, whatever/whoever và cấu trúc đảo "Hard as he tried". Part 5/6 thường cho bốn liên từ hợp ngữ pháp, nên bạn phải chọn theo **nghĩa** (sự thật hay giả định, đối lập hay nhượng bộ) và theo **trật tự từ** ngay sau chỗ trống.',
    en: 'This lesson covers conjunctions of concession and contrast: although, even though, even if, while, whereas, no matter how, however + adjective, whatever/whoever and the fronted pattern "Hard as he tried". Parts 5 and 6 often offer four grammatical conjunctions, so you must choose by **meaning** (fact or supposition, contrast or concession) and by the **word order** right after the blank.',
  },
  mistakes: [
    {
      wrong: '[[Even if]] the hotel was fully booked last night, the manager found us a room.',
      right: '[[Even though]] the hotel was fully booked last night, the manager found us a room.',
      explanation: {
        vi: 'Khách sạn kín phòng là một SỰ THẬT đã xảy ra → dùng **even though**. **even if** dùng cho tình huống giả định, có thể xảy ra hoặc không (dù cho có… đi nữa).',
        en: 'The hotel being full is a FACT that happened → use **even though**. **even if** is for a supposed situation that may or may not happen.',
      },
    },
    {
      wrong: '[[Although]] sales rose sharply last quarter, [[but]] profits fell.',
      right: '[[Although]] sales rose sharply last quarter, profits fell.',
      explanation: {
        vi: 'Tiếng Anh không dùng cùng lúc **although** và **but** trong một câu như tiếng Việt "tuy… nhưng…". Giữ một liên từ thôi: Although…, … hoặc …, but ….',
        en: 'English does not use **although** and **but** together, even though Vietnamese pairs the two ideas in one sentence. Keep only one: Although…, … or …, but ….',
      },
    },
    {
      wrong: '[[No matter]] experienced the applicants are, they must all take the skills test.',
      right: '[[No matter how]] experienced the applicants are, they must all take the skills test.',
      explanation: {
        vi: 'Trước tính từ **experienced** phải có **how**: no matter how + tính từ/trạng từ + S + V. **no matter** đứng một mình không nối được mệnh đề.',
        en: 'The adjective **experienced** needs **how** in front of it: no matter how + adjective/adverb + S + V. **no matter** alone cannot introduce a clause.',
      },
    },
    {
      wrong: '[[Whatever]] busy the front desk is, guests should be greeted with a smile.',
      right: '[[However]] busy the front desk is, guests should be greeted with a smile.',
      explanation: {
        vi: 'Trước tính từ **busy** dùng **however** (= no matter how). **whatever** (= no matter what) đi với danh từ hoặc làm chủ ngữ/tân ngữ, không đứng trước tính từ.',
        en: 'Before the adjective **busy**, use **however** (= no matter how). **whatever** (= no matter what) goes with a noun or acts as a subject/object; it does not come before an adjective.',
      },
    },
    {
      wrong: '[[As hard]] Mr. Cole tried, he could not reach the client before the deadline.',
      right: '[[Hard as]] Mr. Cole tried, he could not reach the client before the deadline.',
      explanation: {
        vi: 'Trong cấu trúc nhượng bộ đảo, tính từ/trạng từ đứng TRƯỚC **as**: **Hard as** he tried = Although he tried hard. "As hard he tried" là sai trật tự.',
        en: 'In the fronted concessive pattern, the adjective/adverb comes BEFORE **as**: **Hard as** he tried = Although he tried hard. "As hard he tried" has the wrong word order.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'although, though, even though', en: 'although, though, even though' },
      body: {
        vi: 'Ba liên từ cùng nghĩa "mặc dù" và đều theo sau bởi **chủ ngữ + động từ**. **even though** nhấn mạnh hơn (mặc dù thực tế là…); **though** thân mật hơn và còn đứng được ở cuối câu như trạng từ (…, though). Muốn nói "mặc dù" + cụm danh từ thì dùng despite / in spite of (bài 8.2).',
        en: 'All three mean "in spite of the fact that" and are followed by **subject + verb**. **even though** is more emphatic; **though** is more informal and can also stand at the end of a sentence as an adverb (…, though). For "in spite of" + noun phrase, use despite / in spite of (lesson 8.2).',
      },
      examples: [
        {
          en: '**Although** the train was delayed, Ms. Novak arrived in time for the opening speech.',
          vi: 'Mặc dù tàu bị trễ, chị Novak vẫn đến kịp bài phát biểu khai mạc.',
        },
        {
          en: 'The firm kept all its staff **even though** orders dropped by thirty percent.',
          vi: 'Công ty vẫn giữ toàn bộ nhân viên dù cho đơn hàng giảm tới ba mươi phần trăm.',
        },
        {
          en: 'The new chairs are comfortable. They were quite expensive, **though**.',
          vi: 'Ghế mới ngồi rất thoải mái. Có điều là chúng khá đắt.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không dùng **although** cùng **but** trong một câu. Mệnh đề although đứng đầu thì sau nó chỉ có dấu phẩy rồi đến mệnh đề chính.',
          en: 'Do not use **although** together with **but** in one sentence. When the although clause comes first, it is followed only by a comma and the main clause.',
        },
      },
    },
    {
      heading: { vi: 'even though hay even if', en: 'even though or even if' },
      table: {
        head: [
          { vi: 'Liên từ', en: 'Conjunction' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'even though',
            { vi: 'Mặc dù (điều đó là SỰ THẬT)', en: 'Although (it IS true)' },
            'Even though the fee is high, the course is always full.',
          ],
          [
            'even if',
            { vi: 'Dù cho (GIẢ ĐỊNH, có thể xảy ra hoặc không)', en: 'Whether or not (a SUPPOSITION that may or may not happen)' },
            'Even if the fee rises, the course will be full.',
          ],
        ],
      },
      examples: [
        {
          en: '**Even if** the client approves the design today, production cannot start before May.',
          vi: 'Dù cho khách hàng có duyệt thiết kế ngay hôm nay, việc sản xuất cũng không thể bắt đầu trước tháng Năm.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo: thay bằng "whether or not" mà câu vẫn đúng nghĩa → **even if**. Nếu mệnh đề kể một việc đã xảy ra hoặc chắc chắn đúng → **even though**. Cách chia thì của even if theo câu điều kiện học ở chương 18.',
          en: 'Tip: if "whether or not" fits the meaning → **even if**. If the clause reports something that happened or is definitely true → **even though**. Tense patterns after even if follow the conditionals in chapter 18.',
        },
      },
    },
    {
      heading: { vi: 'Tương phản hai vế: while và whereas', en: 'Contrasting two facts: while and whereas' },
      points: [
        {
          vi: '**whereas** đặt hai sự việc cạnh nhau để so sánh sự khác biệt (còn, trong khi đó). Thường có dấu phẩy trước whereas khi nó đứng giữa câu.',
          en: '**whereas** sets two facts side by side to show how they differ. A comma usually comes before whereas in mid-sentence.',
        },
        {
          vi: '**while** dùng được theo nghĩa giống whereas, và (nhất là khi đứng đầu câu) còn có thể mang nghĩa "mặc dù" (While the hotel is expensive, it is worth it).',
          en: '**while** can be used like whereas, and (especially at the start of a sentence) it can also mean "although" (While the hotel is expensive, it is worth it).',
        },
        {
          vi: 'while còn là liên từ thời gian (bài 13.1). Xem ngữ cảnh: hai vế đối lập nhau (A làm X, còn B làm Y) → nghĩa tương phản.',
          en: 'while is also a time conjunction (lesson 13.1). Check the context: if the two clauses contrast (A does X, B does Y), it shows contrast.',
        },
      ],
      examples: [
        {
          en: 'The Berlin branch sells mainly to retailers, **whereas** the Vienna branch deals directly with consumers.',
          vi: 'Chi nhánh Berlin chủ yếu bán cho nhà bán lẻ, còn chi nhánh Vienna thì bán trực tiếp cho người tiêu dùng.',
        },
        {
          en: '**While** the proposal has some strong points, it underestimates the cost of staff training.',
          vi: 'Mặc dù đề xuất có một số điểm mạnh, nó đánh giá quá thấp chi phí đào tạo nhân viên.',
        },
      ],
    },
    {
      heading: { vi: 'No matter, however, whatever, whoever', en: 'No matter, however, whatever, whoever' },
      body: {
        vi: 'Nhóm này mang nghĩa "dù… thế nào/gì/ai đi nữa". Mệnh đề của chúng là mệnh đề trạng ngữ, thường đứng đầu câu và có dấu phẩy. Lưu ý trật tự: tính từ/trạng từ đứng NGAY SAU how/however, rồi mới đến chủ ngữ + động từ.',
        en: 'This group means "it does not matter how/what/who…". Their clauses are adverb clauses, usually placed first and followed by a comma. Mind the order: the adjective/adverb comes RIGHT AFTER how/however, then subject + verb.',
      },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'no matter how / however + adj/adv + S + V',
            { vi: 'Dù… đến đâu', en: 'However much / to whatever degree' },
            'However tired you are, check the figures twice.',
          ],
          [
            'no matter what / whatever (+ noun) + S + V',
            { vi: 'Dù (cái) gì', en: 'Regardless of what' },
            'Whatever the reason is, the delay must be reported.',
          ],
          [
            'no matter who / whoever + V',
            { vi: 'Dù là ai', en: 'Regardless of who' },
            'Whoever calls, take a detailed message.',
          ],
          [
            'no matter where / when',
            { vi: 'Dù ở đâu / dù khi nào', en: 'Regardless of where / when' },
            'No matter where you travel, keep your receipts.',
          ],
        ],
      },
      examples: [
        {
          en: '**No matter how** busy the store gets, the cashiers must count the till at closing time.',
          vi: 'Dù cửa hàng có đông khách đến đâu, thu ngân vẫn phải kiểm tiền trong quầy lúc đóng cửa.',
        },
        {
          en: '**Whatever** decision the committee makes, we will support it.',
          vi: 'Dù hội đồng đưa ra quyết định gì, chúng tôi cũng sẽ ủng hộ.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'whatever/whoever còn mở đầu mệnh đề danh từ làm chủ ngữ hoặc tân ngữ (Whoever finishes first can leave early), học ở bài 15.2. Ở bài này chúng mở đầu mệnh đề trạng ngữ tách rời bằng dấu phẩy, nghĩa là "dù ai/dù gì".',
          en: 'whatever/whoever can also begin a noun clause used as a subject or object (Whoever finishes first can leave early), covered in lesson 15.2. In this lesson they begin an adverb clause set off by a comma, meaning "no matter who/what".',
        },
      },
    },
    {
      heading: { vi: 'Cấu trúc đảo: tính từ/trạng từ + as/though + S + V', en: 'Fronted pattern: adjective/adverb + as/though + S + V' },
      body: {
        vi: 'Đây là cách nói nhượng bộ trang trọng: đưa tính từ/trạng từ lên đầu, rồi **as** hoặc **though**, rồi chủ ngữ + động từ. **as** ở đây KHÔNG có nghĩa "vì" hay "khi", mà nghĩa là "mặc dù".',
        en: 'This is a formal way to express concession: put the adjective/adverb first, then **as** or **though**, then subject + verb. Here **as** does NOT mean "because" or "when"; it means "although".',
      },
      examples: [
        {
          en: '**Expensive as** the software was, it paid for itself within a year.',
          vi: 'Dù phần mềm rất đắt, nó đã hoàn vốn chỉ trong một năm.',
        },
        {
          en: '**Carefully though** the team planned the launch, several problems still arose.',
          vi: 'Dù cả nhóm đã lên kế hoạch ra mắt rất cẩn thận, vẫn phát sinh nhiều vấn đề.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không thêm so, very hay a/an vào trước tính từ: "So expensive as the software was" và "As expensive the software was" đều sai.',
          en: 'Do not add so, very or a/an before the adjective: "So expensive as the software was" and "As expensive the software was" are both wrong.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu nhượng bộ – tương phản ở Part 5', en: 'Tackling concession and contrast items in Part 5' },
      points: [
        {
          vi: 'Hai vế trái ngược nhau (kết quả không như mong đợi) → nhóm although/even though/while. Hai vế chỉ đặt cạnh nhau để so sánh → whereas/while.',
          en: 'The clauses clash (the result is unexpected) → the although/even though/while group. The clauses are just set side by side for comparison → whereas/while.',
        },
        {
          vi: 'Việc đã xảy ra hoặc chắc chắn → even though; việc giả định, "dù có… đi nữa" → even if.',
          en: 'Something that happened or is certain → even though; a supposition, "whether or not" → even if.',
        },
        {
          vi: 'Sau chỗ trống là tính từ/trạng từ + S + V → however (hoặc no matter how). Là danh từ hoặc thiếu tân ngữ/bổ ngữ → whatever; chỉ người → whoever.',
          en: 'An adjective/adverb + S + V after the blank → however (or no matter how). A noun, or a missing object/complement → whatever; a person → whoever.',
        },
        {
          vi: 'Câu mở đầu bằng tính từ/trạng từ rồi đến chỗ trống và S + V → chọn **as** (hoặc though).',
          en: 'A sentence that opens with an adjective/adverb followed by the blank and S + V → choose **as** (or though).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: '------- the convention center was fully booked, the event planner managed to reserve a small meeting room for us.',
      options: ['Because', 'Even though', 'So that', 'Unless'],
      answer: 1,
      explanation: {
        vi: 'Trung tâm kín chỗ nhưng vẫn đặt được phòng → kết quả trái mong đợi → **Even though**. Because tạo quan hệ nhân quả vô lý; So that chỉ mục đích; Unless chỉ điều kiện, không hợp với sự việc đã xảy ra.',
        en: 'The center was full, yet a room was still found → an unexpected result → **Even though**. Because creates an illogical cause; So that expresses purpose; Unless sets a condition, which does not fit a past fact.',
      },
      translation: 'Mặc dù trung tâm hội nghị đã kín chỗ, người tổ chức sự kiện vẫn đặt được cho chúng tôi một phòng họp nhỏ.',
    },
    {
      sentence: '------- the replacement parts arrive early tomorrow, the technicians will not finish the repairs before Friday.',
      options: ['So that', 'Even if', 'Now that', 'As soon as'],
      answer: 1,
      explanation: {
        vi: 'Việc linh kiện đến sớm chỉ là GIẢ ĐỊNH, và dù có xảy ra thì kết quả vẫn không đổi → **Even if**. As soon as và Now that làm câu vô lý (đến sớm thì lại không kịp); So that chỉ mục đích.',
        en: 'The early arrival is only a SUPPOSITION, and even if it happens the result stays the same → **Even if**. As soon as and Now that make the sentence illogical (early parts causing a delay); So that expresses purpose.',
      },
      translation: 'Dù cho linh kiện thay thế có đến sớm vào sáng mai, các kỹ thuật viên cũng sẽ không sửa xong trước thứ Sáu.',
    },
    {
      sentence: 'Our Osaka office focuses on software development, ------- the Busan office handles customer support for the region.',
      options: ['whereas', 'unless', 'so that', 'even if'],
      answer: 0,
      explanation: {
        vi: 'Hai vế đặt cạnh nhau để so sánh hai văn phòng làm hai việc khác nhau → **whereas**. unless và even if là điều kiện/giả định, so that là mục đích, đều không hợp nghĩa.',
        en: 'The two clauses are set side by side to compare two offices doing different jobs → **whereas**. unless and even if express condition/supposition and so that expresses purpose; none fits.',
      },
      translation: 'Văn phòng Osaka của chúng tôi tập trung phát triển phần mềm, còn văn phòng Busan phụ trách hỗ trợ khách hàng cho cả khu vực.',
    },
    {
      sentence: 'No matter ------- carefully the invoices are checked, a few errors may still slip through.',
      options: ['how', 'what', 'who', 'which'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống là trạng từ **carefully** → **no matter how** + trạng từ + S + V. what, who, which không đứng trước trạng từ.',
        en: 'The blank is followed by the adverb **carefully** → **no matter how** + adverb + S + V. what, who and which cannot come before an adverb.',
      },
      translation: 'Dù hoá đơn có được kiểm tra cẩn thận đến đâu, vẫn có thể lọt một vài lỗi.',
    },
    {
      sentence: '------- convenient the new location may be, the monthly rent is far beyond our budget.',
      options: ['Whatever', 'Although', 'However', 'Whereas'],
      answer: 2,
      explanation: {
        vi: 'Sau chỗ trống là tính từ **convenient** rồi mới đến S + V → **However** + tính từ + S + V (= no matter how). Although và Whereas cần S + V ngay sau; Whatever không đứng trước tính từ.',
        en: 'The blank is followed by the adjective **convenient**, then S + V → **However** + adjective + S + V (= no matter how). Although and Whereas need S + V right after them; Whatever does not come before an adjective.',
      },
      translation: 'Dù địa điểm mới có thuận tiện đến đâu, tiền thuê hằng tháng vẫn vượt xa ngân sách của chúng tôi.',
    },
    {
      sentence: '------- the final cost of the repairs turns out to be, the landlord has agreed to pay half of it.',
      options: ['However', 'Whoever', 'Although', 'Whatever'],
      answer: 3,
      explanation: {
        vi: '**turns out to be** đang thiếu bổ ngữ; từ cần điền phải lấp chỗ đó và nói về một con số → **Whatever** (dù là bao nhiêu). Although để câu thiếu bổ ngữ; However cần tính từ theo sau; Whoever chỉ người.',
        en: '**turns out to be** lacks a complement; the word in the blank must fill that gap and refer to an amount → **Whatever**. Although leaves the complement missing; However needs an adjective after it; Whoever refers to a person.',
      },
      translation: 'Dù chi phí sửa chữa cuối cùng là bao nhiêu, chủ nhà đã đồng ý trả một nửa.',
    },
    {
      sentence: '------- is selected to lead the Madrid project, the position will come with a generous relocation package.',
      options: ['Whatever', 'However', 'Whoever', 'Whereas'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống làm chủ ngữ của **is selected to lead the project**, và người được chọn dẫn dắt dự án phải là NGƯỜI → **Whoever** (dù là ai). Whatever chỉ vật; However và Whereas không làm chủ ngữ được.',
        en: 'The blank is the subject of **is selected to lead the project**, and someone who leads a project is a PERSON → **Whoever**. Whatever refers to things; However and Whereas cannot act as a subject.',
      },
      translation: 'Dù ai được chọn dẫn dắt dự án Madrid, vị trí này cũng sẽ đi kèm một gói hỗ trợ chuyển chỗ ở hậu hĩnh.',
    },
    {
      sentence: 'Tempting ------- the offer was, the board voted to reject the acquisition proposal.',
      options: ['so', 'such', 'as', 'even'],
      answer: 2,
      explanation: {
        vi: 'Câu mở đầu bằng tính từ **Tempting**, sau chỗ trống là S + V → cấu trúc nhượng bộ đảo tính từ + **as** + S + V (= Although the offer was tempting). so, such, even không tạo được cấu trúc này.',
        en: 'The sentence opens with the adjective **Tempting**, and S + V follows the blank → the fronted concessive pattern adjective + **as** + S + V (= Although the offer was tempting). so, such and even cannot form this pattern.',
      },
      translation: 'Dù lời đề nghị rất hấp dẫn, hội đồng quản trị vẫn bỏ phiếu bác bỏ đề xuất thâu tóm.',
    },
    {
      sentence: "------- the hotel's rooftop restaurant is expensive, most guests agree that the food is worth the price.",
      options: ['Because', 'Unless', 'So that', 'While'],
      answer: 3,
      explanation: {
        vi: 'Nhà hàng đắt nhưng khách vẫn thấy đáng tiền → nhượng bộ → **While** (= although). Because tạo quan hệ nhân quả vô lý; Unless và So that không hợp nghĩa.',
        en: 'The restaurant is expensive, yet guests think it is worth it → concession → **While** (= although). Because creates an illogical cause; Unless and So that do not fit.',
      },
      translation: 'Mặc dù nhà hàng trên sân thượng của khách sạn khá đắt, phần lớn khách đều cho rằng đồ ăn xứng đáng với giá tiền.',
    },
    {
      sentence: 'The training session started exactly on time ------- several participants were stuck in heavy traffic.',
      options: ['in that', 'so that', 'now that', 'even though'],
      answer: 3,
      explanation: {
        vi: 'Có người kẹt xe nhưng buổi học vẫn bắt đầu đúng giờ → kết quả trái mong đợi, và việc kẹt xe là SỰ THẬT → **even though**. in that, so that, now that đều không mang nghĩa nhượng bộ.',
        en: 'Some people were stuck in traffic, yet the session still started on time → an unexpected result, and the traffic is a FACT → **even though**. in that, so that and now that do not express concession.',
      },
      translation: 'Buổi đào tạo vẫn bắt đầu đúng giờ mặc dù một số học viên bị kẹt xe nặng.',
    },
  ],
};
