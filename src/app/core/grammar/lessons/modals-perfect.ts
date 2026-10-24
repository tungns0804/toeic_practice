import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'modals-perfect',
  intro: {
    vi: 'Bài này dạy **modal + have + V3** để suy luận về quá khứ (must have, can\'t have, might have) và để nói điều lẽ ra nên/không cần làm (should have, needn\'t have), cùng cách suy luận ở hiện tại (must be, can\'t be, may be). Trong Part 5/6, đề hay hỏi dạng **have + V3** sau modal, dạng bị động **have been + V3**, và chọn modal khớp với manh mối logic trong câu.',
    en: "This lesson covers **modal + have + V3** for deductions about the past (must have, can't have, might have) and for things that should or need not have happened (should have, needn't have), along with present deductions (must be, can't be, may be). In Part 5/6, items test the **have + V3** form after a modal, the passive **have been + V3**, and choosing the modal that matches the logical clue in the sentence.",
  },
  mistakes: [
    {
      wrong: 'The client must [[has received]] our proposal, because she has already sent us her comments.',
      right: 'The client must [[have received]] our proposal, because she has already sent us her comments.',
      explanation: {
        vi: 'Sau modal là động từ nguyên mẫu, nên trong modal hoàn thành luôn là **have**, không bao giờ là has hay had, dù chủ ngữ là ngôi thứ ba số ít.',
        en: 'A modal takes a base verb, so a perfect modal always uses **have**, never has or had, even with a third-person singular subject.',
      },
    },
    {
      wrong: 'We [[should send]] the brochures last week; now they will arrive after the trade show.',
      right: 'We [[should have sent]] the brochures last week; now they will arrive after the trade show.',
      explanation: {
        vi: 'Nói về việc **lẽ ra nên làm trong quá khứ** nhưng đã không làm (last week) thì phải dùng **should have + V3**. should send chỉ nói về hiện tại hoặc tương lai.',
        en: 'For something that **ought to have happened in the past** but did not (last week), use **should have + V3**. should send only refers to the present or future.',
      },
    },
    {
      wrong: 'The revised invoice should have [[sent]] to the customer yesterday.',
      right: 'The revised invoice should have [[been sent]] to the customer yesterday.',
      explanation: {
        vi: 'Hoá đơn là thứ ĐƯỢC gửi, nên cần modal hoàn thành bị động **should have been + V3**. should have sent là chủ động, đòi một tân ngữ phía sau.',
        en: 'The invoice is what gets sent, so the perfect modal passive **should have been + V3** is needed. should have sent is active and requires an object after it.',
      },
    },
    {
      wrong: 'All the lights on the fourth floor are off, so the staff [[must leave]] already.',
      right: 'All the lights on the fourth floor are off, so the staff [[must have left]] already.',
      explanation: {
        vi: 'Đây là suy luận về việc ĐÃ xảy ra (đèn đã tắt, **already**) → **must have + V3** (chắc hẳn đã). must leave mang nghĩa "phải rời đi", là bắt buộc chứ không phải suy luận.',
        en: 'This is a deduction about something that HAS happened (the lights are off, **already**) → **must have + V3**. must leave means "are required to leave", an obligation, not a deduction.',
      },
    },
    {
      wrong: 'I needn\'t have [[print]] the handouts, because the client had already received digital copies.',
      right: 'I needn\'t have [[printed]] the handouts, because the client had already received digital copies.',
      explanation: {
        vi: 'Sau **have** trong modal hoàn thành phải là V3: needn\'t have **printed**. Cấu trúc này nghĩa là đã in rồi nhưng hoá ra không cần.',
        en: "After **have** in a perfect modal, the V3 is required: needn't have **printed**. The pattern means the handouts were printed, but it turned out to be unnecessary.",
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Công thức: modal + have + V3', en: 'The formula: modal + have + V3' },
      body: {
        vi: 'Modal không có dạng quá khứ riêng để suy luận hay để tiếc nuối, nên tiếng Anh ghép modal với **have + V3** để lùi về quá khứ. **have** luôn giữ nguyên (không has, không had) và theo sau luôn là **V3**.',
        en: 'Modals have no past forms of their own for deductions or regrets, so English combines a modal with **have + V3** to refer to the past. **have** never changes (no has, no had) and is always followed by a **V3**.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Công thức', en: 'Formula' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Chủ động', en: 'Active' }, 'modal + have + V3', 'She must have missed the train.'],
          [{ vi: 'Bị động', en: 'Passive' }, 'modal + have been + V3', 'The order must have been canceled.'],
          [{ vi: 'Tiếp diễn', en: 'Continuous' }, 'modal + have been + V-ing', 'He might have been driving at the time.'],
          [{ vi: 'Phủ định', en: 'Negative' }, 'modal + not + have + V3', 'They may not have seen the notice.'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Khi nói nhanh, **should have** nghe như "should of", nhưng viết luôn là **have**. Và "modal + V3" (should sent, must left) luôn sai: phải có have chen giữa.',
          en: 'In fast speech **should have** sounds like "should of", but it is always written **have**. "modal + V3" (should sent, must left) is always wrong: have must come in between.',
        },
      },
    },
    {
      heading: { vi: 'Suy luận ở hiện tại: must be, can\'t be, may be', en: "Present deduction: must be, can't be, may be" },
      body: {
        vi: 'Khi dựa vào bằng chứng để đoán một điều ĐANG đúng ở hiện tại, dùng **modal + V nguyên mẫu** (thường là be) hoặc **modal + be + V-ing**. Mức độ chắc chắn quyết định chọn modal nào.',
        en: 'When you use evidence to judge what is true NOW, use **modal + base verb** (usually be) or **modal + be + V-ing**. How certain you are decides which modal to choose.',
      },
      table: {
        head: [
          { vi: 'Modal', en: 'Modal' },
          { vi: 'Mức độ chắc chắn', en: 'Degree of certainty' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['must be', { vi: 'Gần như chắc chắn ĐÚNG (chắc hẳn là)', en: 'Almost certainly TRUE' }, 'The parking lot is full; there must be an event today.'],
          ['may / might / could be', { vi: 'Có thể đúng (khoảng 50%)', en: 'Possibly true (about 50%)' }, 'The file might be on the shared drive.'],
          ["can't / couldn't be", { vi: 'Gần như chắc chắn SAI (không thể nào)', en: 'Almost certainly NOT true' }, "That can't be our invoice; we paid it last week."],
        ],
      },
      examples: [
        {
          en: 'Mr. Bauer is not answering his phone, so he **must be meeting** a client.',
          vi: 'Ông Bauer không nghe máy, nên chắc hẳn ông ấy đang gặp khách hàng.',
        },
        {
          en: 'This price **cannot be** correct; it is lower than our production cost.',
          vi: 'Mức giá này không thể nào đúng được; nó còn thấp hơn chi phí sản xuất của chúng ta.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Trong suy luận, phủ định của must là **can\'t** (không thể nào), không phải mustn\'t: mustn\'t gần như luôn mang nghĩa CẤM. Tiếng Anh Mỹ đôi khi dùng must not để suy luận phủ định, nhưng trong đề TOEIC đáp án chuẩn cho "chắc chắn không" là **can\'t / couldn\'t**.',
          en: "In deductions, the opposite of must is **can't** (impossible), not mustn't, which almost always means FORBIDDEN. American English sometimes uses must not for a negative deduction, but on the TOEIC the standard answer for \"certainly not\" is **can't / couldn't**.",
        },
      },
    },
    {
      heading: { vi: 'Suy luận về quá khứ', en: 'Deduction about the past' },
      body: {
        vi: 'Cùng thang mức độ như trên, nhưng ghép với **have + V3** để đoán về một việc ĐÃ xảy ra (hay chưa xảy ra). Bằng chứng thường nằm ngay trong câu, sau because, since, so hoặc dấu chấm phẩy.',
        en: 'The same scale of certainty, combined with **have + V3** to judge something that HAS (or has not) happened. The evidence usually sits in the same sentence, after because, since, so or a semicolon.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['must have V3', { vi: 'Chắc hẳn đã', en: 'Almost certainly happened' }, 'The package must have arrived; the box is in the lobby.'],
          ['may / might / could have V3', { vi: 'Có lẽ đã (không chắc)', en: 'Possibly happened (not sure)' }, 'She might have taken an earlier flight.'],
          ["can't / couldn't have V3", { vi: 'Không thể nào đã', en: 'Almost certainly did not happen' }, "He can't have signed it; he was abroad all week."],
          ['may not / might not have V3', { vi: 'Có lẽ đã không', en: 'Possibly did not happen' }, 'They may not have received our email.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: '**could have V3** còn có nghĩa thứ hai: đã CÓ THỂ làm nhưng thực tế không làm (We could have taken a taxi, but we walked). Các cấu trúc would/could have V3 trong câu điều kiện loại 3 thuộc bài 18.3.',
          en: '**could have V3** has a second meaning: something was POSSIBLE but did not happen (We could have taken a taxi, but we walked). would/could have V3 in third conditionals belongs to lesson 18.3.',
        },
      },
    },
    {
      heading: { vi: 'Lẽ ra nên, lẽ ra không cần', en: 'Should have, needn\'t have' },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['should / ought to have V3', { vi: 'Lẽ ra nên làm (nhưng đã không làm)', en: 'It was the right thing to do (but it did not happen)' }, 'We should have booked the venue earlier.'],
          ["shouldn't / ought not to have V3", { vi: 'Lẽ ra không nên làm (nhưng đã làm)', en: 'It was wrong (but it happened)' }, "He shouldn't have shared the client list."],
          ["needn't have V3", { vi: 'Đã làm, nhưng hoá ra không cần', en: 'It was done, but it turned out to be unnecessary' }, "You needn't have waited for me."],
          ["didn't need to + V", { vi: 'Không cần làm (thường là đã không làm)', en: 'It was not necessary (usually not done)' }, "We didn't need to pay for parking."],
        ],
      },
      examples: [
        {
          en: 'The supplier **ought to have notified** us about the price increase before shipping the order.',
          vi: 'Lẽ ra nhà cung cấp nên báo cho chúng ta về việc tăng giá trước khi giao đơn hàng.',
        },
        {
          en: 'We **needn\'t have rented** a projector; the hotel provided one free of charge.',
          vi: 'Lẽ ra chúng ta không cần thuê máy chiếu; khách sạn đã cung cấp miễn phí một cái.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phân biệt với bài 17.1: **should + V** là lời khuyên cho hiện tại/tương lai; **should have + V3** là lời trách hoặc tiếc nuối về quá khứ. Thấy mốc quá khứ (yesterday, last week, before the meeting started) → thêm have + V3.',
          en: 'Contrast this with lesson 17.1: **should + V** is advice about the present/future; **should have + V3** is criticism or regret about the past. A past time marker (yesterday, last week, before the meeting started) → add have + V3.',
        },
      },
    },
    {
      heading: { vi: 'Modal hoàn thành bị động', en: 'Perfect modal passive' },
      body: {
        vi: 'Khi chủ ngữ là thứ chịu tác động, thêm **been** vào giữa: **modal + have been + V3**. Dạng này cực hay gặp trong thư phàn nàn và thông báo sự cố: The shipment should have been delivered…, The error must have been caused by…',
        en: 'When the subject receives the action, insert **been**: **modal + have been + V3**. This form is very common in complaint letters and incident notices: The shipment should have been delivered…, The error must have been caused by…',
      },
      examples: [
        {
          en: 'The conference badges **should have been printed** before the attendees arrived.',
          vi: 'Lẽ ra thẻ đeo hội nghị phải được in xong trước khi người tham dự đến.',
        },
        {
          en: 'The outage **may have been caused** by a faulty cable in the server room.',
          vi: 'Sự cố mất kết nối có lẽ đã do một sợi cáp bị lỗi trong phòng máy chủ gây ra.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thứ tự cố định là **have → been → V3**, không đảo được: should have been sent (không phải should been have sent hay should be have sent). Sau chỗ trống không có tân ngữ và chủ ngữ là vật → nghĩ ngay tới have been + V3.',
          en: 'The order is fixed as **have → been → V3**: should have been sent (not should been have sent or should be have sent). No object after the blank and a thing as the subject → think of have been + V3 at once.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu modal hoàn thành trong Part 5', en: 'Attacking perfect-modal items in Part 5' },
      points: [
        {
          vi: 'Bước 1, xét DẠNG: sau modal + have → V3; sau modal + have been → V3 (bị động) hoặc V-ing; sau modal (không have) → V nguyên mẫu.',
          en: 'Step 1, check the FORM: after modal + have → V3; after modal + have been → V3 (passive) or -ing; after a modal with no have → base verb.',
        },
        {
          vi: 'Bước 2, xét THỜI GIAN: mốc quá khứ hoặc việc đã xong → modal + have + V3; nói về hiện tại → modal + be / V.',
          en: 'Step 2, check the TIME: a past time or a finished event → modal + have + V3; about the present → modal + be / V.',
        },
        {
          vi: 'Bước 3, xét LOGIC: bằng chứng ủng hộ → must have; bằng chứng phủ nhận → can\'t have; không chắc → might have; việc đáng làm nhưng đã không làm → should have; đã làm mà không cần → needn\'t have.',
          en: "Step 3, check the LOGIC: evidence for → must have; evidence against → can't have; unsure → might have; right but not done → should have; done but unnecessary → needn't have.",
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The delivery van came back to the depot completely empty, so the driver ------- every package on his route.',
      options: ['must have delivered', 'must deliver', 'should deliver', "can't have delivered"],
      answer: 0,
      explanation: {
        vi: 'Xe quay về **completely empty** là bằng chứng cho việc ĐÃ giao hết → suy luận chắc chắn về quá khứ **must have + V3**. can\'t have delivered trái với bằng chứng; must deliver và should deliver nói về bắt buộc/lời khuyên, không phải suy luận về việc đã xong.',
        en: "The van returning **completely empty** is evidence that the packages WERE delivered → a confident past deduction, **must have + V3**. can't have delivered contradicts the evidence; must deliver and should deliver express obligation/advice, not a deduction about a finished event.",
      },
      translation: 'Xe giao hàng quay về kho hoàn toàn trống, nên chắc hẳn tài xế đã giao hết mọi kiện hàng trên tuyến của mình.',
    },
    {
      sentence: 'Mr. Novak ------- the entire audit report already; he only received the files ten minutes ago.',
      options: ['must have finished', "can't have finished", 'should have finished', "needn't have finished"],
      answer: 1,
      explanation: {
        vi: 'Bằng chứng **only received the files ten minutes ago** phủ nhận khả năng đã làm xong cả báo cáo → **can\'t have + V3** (không thể nào đã). must have finished đi ngược bằng chứng; should have finished vô lý vì không ai đòi xong trong mười phút.',
        en: "The evidence **only received the files ten minutes ago** rules out his having finished → **can't have + V3**. must have finished goes against the evidence; should have finished makes no sense, as nobody expects the report in ten minutes.",
      },
      translation: 'Ông Novak không thể nào đã hoàn thành toàn bộ báo cáo kiểm toán; ông ấy mới nhận hồ sơ mười phút trước.',
    },
    {
      sentence: 'The accounting team may ------- an error when it calculated the third-quarter tax payments.',
      options: ['has made', 'had made', 'have made', 'making'],
      answer: 2,
      explanation: {
        vi: 'Sau modal **may** là động từ nguyên mẫu, nên modal hoàn thành là **may have + V3** → **have made**. has made và had made sai vì sau modal không dùng has/had dù chủ ngữ là the team.',
        en: 'The modal **may** takes a base verb, so the perfect modal is **may have + V3** → **have made**. has made and had made are wrong because has/had never follow a modal, even with the subject the team.',
      },
      translation: 'Có lẽ nhóm kế toán đã mắc lỗi khi tính các khoản thuế quý ba.',
    },
    {
      sentence: 'The marketing team ------- the catalog before it was printed last week; it contains several pricing errors.',
      options: ['must proofread', 'will proofread', "needn't have proofread", 'should have proofread'],
      answer: 3,
      explanation: {
        vi: 'Mốc quá khứ **before it was printed last week** cùng các lỗi giá cho thấy việc soát lỗi lẽ ra nên làm nhưng đã không làm → **should have + V3**. must proofread và will proofread không nói về quá khứ; needn\'t have proofread (đã soát mà không cần) mâu thuẫn với việc catalog đầy lỗi.',
        en: "The past cue **before it was printed last week** and the pricing errors show the proofreading should have happened but did not → **should have + V3**. must proofread and will proofread do not refer to the past; needn't have proofread (done but unnecessary) contradicts the errors in the catalog.",
      },
      translation: 'Lẽ ra nhóm marketing nên soát lỗi cuốn catalog trước khi nó được in vào tuần trước; nó có vài lỗi về giá.',
    },
    {
      sentence: 'We ------- so much food for the reception, since only half of the invited guests attended.',
      options: ["needn't have ordered", "mustn't have ordered", "couldn't have ordered", 'must have ordered'],
      answer: 0,
      explanation: {
        vi: 'Đồ ăn ĐÃ được đặt, nhưng **only half of the invited guests attended** nên hoá ra không cần nhiều thế → **needn\'t have + V3**. couldn\'t have ordered (không thể nào đã đặt) và must have ordered (chắc hẳn đã đặt) là suy luận, vô lý khi người nói chính là người đặt; mustn\'t have ordered không phải dạng chuẩn để nói "lẽ ra không cần".',
        en: "The food WAS ordered, but **only half of the invited guests attended**, so that much was unnecessary → **needn't have + V3**. couldn't have ordered and must have ordered are deductions, which make no sense when the speakers placed the order themselves; mustn't have ordered is not the standard way to say \"it was unnecessary\".",
      },
      translation: 'Lẽ ra chúng ta không cần đặt nhiều đồ ăn như vậy cho buổi tiệc, vì chỉ một nửa số khách được mời đến dự.',
    },
    {
      sentence: "The signed contract should ------- to the client last Friday, but it is still sitting on Mr. Lim's desk.",
      options: ['have sent', 'be sent', 'have been sent', 'been sent'],
      answer: 2,
      explanation: {
        vi: 'Hợp đồng là thứ ĐƯỢC gửi (bị động) và **last Friday** là mốc quá khứ → **should have been + V3**. have sent là chủ động, thiếu tân ngữ; be sent chỉ nói về hiện tại/tương lai; been sent thiếu have.',
        en: 'The contract is what gets sent (passive) and **last Friday** is a past time → **should have been + V3**. have sent is active and lacks an object; be sent refers to the present/future; been sent is missing have.',
      },
      translation: 'Lẽ ra bản hợp đồng đã ký phải được gửi cho khách hàng vào thứ Sáu tuần trước, nhưng nó vẫn còn nằm trên bàn ông Lim.',
    },
    {
      sentence: 'Ms. Okoro has managed our largest accounts for twenty years, so she ------- familiar with every major client.',
      options: ["can't be", "needn't be", 'must being', 'must be'],
      answer: 3,
      explanation: {
        vi: '**has managed … for twenty years, so** là bằng chứng mạnh → suy luận chắc chắn ở hiện tại **must be**. can\'t be đi ngược bằng chứng; must being sai dạng vì sau modal là V nguyên mẫu.',
        en: "**has managed … for twenty years, so** is strong evidence → a confident present deduction, **must be**. can't be goes against the evidence; must being is wrong because a modal takes a base verb.",
      },
      translation: 'Cô Okoro đã quản lý các tài khoản lớn nhất của chúng tôi suốt hai mươi năm, nên chắc hẳn cô ấy quen thuộc với mọi khách hàng lớn.',
    },
    {
      sentence: 'That ------- the courier at the door; our deliveries never arrive before 9 A.M., and it is only 7:30.',
      options: ['must be', "can't be", 'will be', 'had to be'],
      answer: 1,
      explanation: {
        vi: 'Bằng chứng **never arrive before 9 A.M.** và **it is only 7:30** cho thấy gần như chắc chắn KHÔNG phải người giao hàng → **can\'t be**. must be và will be đều khẳng định ngược lại; had to be là quá khứ, trái với hiện tại "it is only 7:30".',
        en: "The evidence **never arrive before 9 A.M.** and **it is only 7:30** makes it almost certain this is NOT the courier → **can't be**. must be and will be both assert the opposite; had to be is past, which clashes with the present \"it is only 7:30\".",
      },
      translation: 'Người ở cửa không thể nào là nhân viên giao hàng; hàng của chúng ta không bao giờ đến trước 9 giờ sáng, mà bây giờ mới 7 giờ 30.',
    },
    {
      sentence: "I'm not sure why Mr. Gupta missed the meeting; he ------- about the schedule change, or he may have been stuck in traffic.",
      options: ['must have forgotten', 'might have forgotten', 'should have forgotten', "can't forget"],
      answer: 1,
      explanation: {
        vi: '**I\'m not sure** và vế **or he may have been stuck** đưa ra hai khả năng ngang nhau → **might have + V3** (có lẽ đã). must have forgotten là chắc chắn, mâu thuẫn với "không chắc"; should have forgotten vô nghĩa (không ai "nên quên").',
        en: "**I'm not sure** and **or he may have been stuck** offer two equal possibilities → **might have + V3**. must have forgotten expresses certainty, which contradicts \"not sure\"; should have forgotten is illogical (nobody ought to forget).",
      },
      translation: 'Tôi không rõ vì sao ông Gupta vắng mặt ở buổi họp; có lẽ ông ấy đã quên việc đổi lịch, hoặc có thể ông ấy bị kẹt xe.',
    },
    {
      sentence: 'The heating system in the east wing ought ------- last autumn, before the cold weather arrived.',
      options: ['to have been serviced', 'have been serviced', 'to be serviced', 'to have serviced'],
      answer: 0,
      explanation: {
        vi: '**ought** luôn cần **to**; mốc **last autumn** là quá khứ và hệ thống sưởi là thứ ĐƯỢC bảo dưỡng → **ought to have been + V3**. to have serviced là chủ động, thiếu tân ngữ; to be serviced không lùi về quá khứ; have been serviced thiếu to.',
        en: '**ought** always needs **to**; **last autumn** is past and the heating system is what gets serviced → **ought to have been + V3**. to have serviced is active and lacks an object; to be serviced does not refer to the past; have been serviced is missing to.',
      },
      translation: 'Lẽ ra hệ thống sưởi ở cánh phía đông phải được bảo dưỡng vào mùa thu năm ngoái, trước khi thời tiết lạnh đến.',
    },
  ],
};
