import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'modals-semi',
  intro: {
    vi: 'Bài này dạy các **cụm động từ tình thái** (have to, be able to, ought to, had better, be supposed to, be allowed to, need to, would rather, used to): mang nghĩa như modal nhưng có dạng riêng, nhiều cụm chia được theo ngôi và theo thì. Trong Part 5/6, đề hay hỏi có hay không có **to**, cách chia (has to, will have to, has been able to) và cách thay modal thuần ở những chỗ nó không đứng được.',
    en: 'This lesson covers the **semi-modals** (have to, be able to, ought to, had better, be supposed to, be allowed to, need to, would rather, used to): they work like modals in meaning but have forms of their own, and many change for person and tense. In Part 5/6, items test whether **to** is needed, how they are conjugated (has to, will have to, has been able to) and how they replace a pure modal where one cannot stand.',
  },
  mistakes: [
    {
      wrong: 'You had better [[to confirm]] your hotel booking before the holiday weekend.',
      right: 'You had better [[confirm]] your hotel booking before the holiday weekend.',
      explanation: {
        vi: '**had better** đi với động từ nguyên mẫu KHÔNG to, dù trông giống một cụm có to như have to. Phủ định là had better **not** + V.',
        en: '**had better** takes a base verb WITHOUT to, even though it looks like phrases such as have to. The negative is had better **not** + V.',
      },
    },
    {
      wrong: 'Once the upgrade is complete, the system [[will can]] process twice as many orders.',
      right: 'Once the upgrade is complete, the system [[will be able to]] process twice as many orders.',
      explanation: {
        vi: 'Hai modal không đứng liền nhau, nên không có will can. Muốn nói khả năng ở tương lai thì thay can bằng **be able to**: will be able to.',
        en: 'Two modals cannot stand together, so will can does not exist. For future ability, replace can with **be able to**: will be able to.',
      },
    },
    {
      wrong: 'Ms. Park [[have to]] approve every purchase over five hundred dollars.',
      right: 'Ms. Park [[has to]] approve every purchase over five hundred dollars.',
      explanation: {
        vi: 'Khác với must, **have to** là động từ thường nên phải chia theo chủ ngữ: chủ ngữ ngôi thứ ba số ít **Ms. Park** → **has to**.',
        en: 'Unlike must, **have to** behaves like an ordinary verb and agrees with the subject: the third-person singular **Ms. Park** → **has to**.',
      },
    },
    {
      wrong: 'Hotel guests are not [[allow]] to bring pets into the restaurant.',
      right: 'Hotel guests are not [[allowed]] to bring pets into the restaurant.',
      explanation: {
        vi: 'Cấu trúc xin phép/cho phép ở dạng bị động là **be allowed to + V** (hoặc be permitted to). Sau be phải là V3 allowed, không phải allow.',
        en: 'The passive permission pattern is **be allowed to + V** (or be permitted to). After be, the V3 allowed is needed, not allow.',
      },
    },
    {
      wrong: 'The shipment [[is suppose to]] arrive at our warehouse on Monday morning.',
      right: 'The shipment [[is supposed to]] arrive at our warehouse on Monday morning.',
      explanation: {
        vi: 'Cụm cố định là **be supposed to** (theo kế hoạch/quy định thì phải). Khi nói nhanh, âm -d bị nuốt nên người học hay viết thiếu, nhưng supposed luôn có -d.',
        en: 'The fixed phrase is **be supposed to** (expected or scheduled to). The -d is hard to hear in speech, so learners often drop it, but supposed always ends in -d.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Semi-modal khác modal thuần ở đâu', en: 'How semi-modals differ from pure modals' },
      body: {
        vi: 'Modal thuần (can, must, should… ở bài 17.1) không chia, không có to, không đứng sau modal khác. Semi-modal thì phần lớn **có to**, nhiều cụm **chia theo ngôi và thì**, và **đứng được sau modal** hoặc sau trợ động từ. Vì vậy chúng dùng để "vá" những chỗ modal thuần không có dạng: tương lai, hoàn thành, V-ing, to V.',
        en: 'Pure modals (can, must, should… in lesson 17.1) never change form, take no to and cannot follow another modal. Most semi-modals **contain to**, many **change for person and tense**, and they **can follow a modal** or an auxiliary. That is why they fill the gaps where pure modals have no form: future, perfect, -ing and to-infinitive.',
      },
      table: {
        head: [
          { vi: 'Đặc điểm', en: 'Feature' },
          { vi: 'Modal thuần', en: 'Pure modal' },
          { vi: 'Semi-modal', en: 'Semi-modal' },
        ],
        rows: [
          [{ vi: 'Chia theo ngôi', en: 'Agrees with subject' }, 'She must leave.', 'She has to leave. / She is able to leave.'],
          [{ vi: 'Đứng sau modal khác', en: 'Follows another modal' }, 'will can (sai)', 'will be able to / might have to'],
          [{ vi: 'Thì hoàn thành', en: 'Perfect tense' }, 'has could (sai)', 'has been able to / has had to'],
          [{ vi: 'Phủ định, câu hỏi', en: 'Negatives, questions' }, 'must not / Must I…?', "doesn't have to / Do I have to…?"],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Ba cụm **had better, would rather** và **used to** có dạng cố định, không chia theo ngôi: He had better, She would rather, They used to. Riêng **had better** và **would rather** đi với V nguyên mẫu không to.',
          en: 'Three phrases, **had better, would rather** and **used to**, have a fixed form that does not change for person: He had better, She would rather, They used to. **had better** and **would rather** take a base verb without to.',
        },
      },
    },
    {
      heading: { vi: 'Bắt buộc và cần thiết', en: 'Obligation and necessity' },
      table: {
        head: [
          { vi: 'Cụm', en: 'Phrase' },
          { vi: 'Nghĩa và cách dùng', en: 'Meaning and use' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['have to / has to', { vi: 'Phải (do hoàn cảnh, quy định bên ngoài); chia theo chủ ngữ', en: 'Must (because of outside rules or circumstances); agrees with the subject' }, 'The supervisor has to sign each timesheet.'],
          ['had to', { vi: 'Quá khứ của cả must và have to (must không có dạng quá khứ)', en: 'The past of both must and have to (must has no past form)' }, 'We had to cancel the outdoor reception.'],
          ['need to / needs to', { vi: 'Cần phải; chia như động từ thường', en: 'Need to; conjugated like an ordinary verb' }, 'The printer needs to be repaired.'],
          ["needn't / don't need to", { vi: 'Không cần (làm cũng được); needn\'t + V nguyên mẫu không to', en: "Not necessary (but allowed); needn't + base verb without to" }, "You needn't call ahead."],
          ['be supposed to', { vi: 'Theo kế hoạch, quy định hay sự kỳ vọng thì phải; was/were supposed to thường ngụ ý việc đã không xảy ra', en: 'Expected, scheduled or required to; was/were supposed to often implies it did not happen' }, 'The train was supposed to leave at 8:15.'],
        ],
      },
      examples: [
        {
          en: 'Because the venue was double-booked, the organizers **had to** move the awards dinner to Saturday.',
          vi: 'Vì địa điểm bị đặt trùng, ban tổ chức đã phải dời tiệc trao giải sang thứ Bảy.',
        },
        {
          en: 'Returning customers **needn\'t** fill out the registration form again.',
          vi: 'Khách hàng cũ không cần điền lại mẫu đăng ký.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Có hai cách nói "không cần": **needn\'t + V** (needn\'t worry) và **don\'t/doesn\'t need to + V** (doesn\'t need to worry). Không trộn hai dạng thành needn\'t to hay doesn\'t need worry. Ở thể khẳng định, need luôn có to: She **needs to** leave (không nói She need leave).',
          en: "There are two ways to say \"not necessary\": **needn't + V** (needn't worry) and **don't/doesn't need to + V** (doesn't need to worry). Do not mix them into needn't to or doesn't need worry. In the affirmative, need always takes to: She **needs to** leave (not She need leave).",
        },
      },
    },
    {
      heading: { vi: 'Khả năng và sự cho phép', en: 'Ability and permission' },
      points: [
        {
          vi: '**be able to + V**: có khả năng làm; chia theo thì và ngôi (is/was/will be/has been able to). Phủ định: **be unable to** hoặc be not able to.',
          en: '**be able to + V**: can do; it changes for tense and person (is/was/will be/has been able to). Negative: **be unable to** or be not able to.',
        },
        {
          vi: 'Nói về MỘT lần làm được trong quá khứ (thường là việc khó) → dùng **was/were able to** (hoặc managed to), không dùng could. could chỉ khả năng chung trong quá khứ; ở thể phủ định thì couldn\'t và wasn\'t able to đều được.',
          en: "For ONE specific success in the past (often a difficult one) → use **was/were able to** (or managed to), not could. could describes general past ability; in the negative, couldn't and wasn't able to both work.",
        },
        {
          vi: '**be allowed to / be permitted to + V**: được phép (permitted trang trọng hơn). Đây là bị động của allow/permit + tân ngữ + to V: The manager allowed us to leave → We were allowed to leave.',
          en: '**be allowed to / be permitted to + V**: to have permission (permitted is more formal). It is the passive of allow/permit + object + to V: The manager allowed us to leave → We were allowed to leave.',
        },
      ],
      examples: [
        {
          en: 'Despite the storm, the ground crew **was able to** load all the cargo on time.',
          vi: 'Dù có bão, đội mặt đất vẫn xếp kịp toàn bộ hàng hoá lên máy bay đúng giờ.',
        },
        {
          en: 'Contractors **are not permitted to** use the staff parking garage.',
          vi: 'Nhà thầu không được phép dùng bãi đỗ xe của nhân viên.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Thấy **allow / permit** đứng ngay trước "to V" mà không có tân ngữ → phải là bị động **be allowed / be permitted**. Có tân ngữ chen giữa (allow customers to return…) thì mới dùng chủ động.',
          en: 'If **allow / permit** comes right before "to V" with no object → it must be the passive **be allowed / be permitted**. Only with an object in between (allow customers to return…) is the active form used.',
        },
      },
    },
    {
      heading: { vi: 'Lời khuyên, sự lựa chọn và thói quen quá khứ', en: 'Advice, preference and past habits' },
      table: {
        head: [
          { vi: 'Cụm', en: 'Phrase' },
          { vi: 'Nghĩa và cách dùng', en: 'Meaning and use' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['ought to + V', { vi: 'Nên (≈ should); phủ định: ought not to + V', en: 'Should; negative: ought not to + V' }, 'You ought to update your password regularly.'],
          ['had better + V', { vi: 'Tốt hơn hết là (cảnh báo: không làm sẽ có hậu quả); nói về hiện tại/tương lai, phủ định had better not + V', en: 'Strong advice with a warning of consequences; refers to the present/future; negative had better not + V' }, "We'd better leave now, or we'll miss the ferry."],
          ['would rather + V (than + V)', { vi: 'Thích, muốn… hơn; phủ định would rather not + V', en: 'Prefer to; negative would rather not + V' }, 'I would rather fly than take the overnight bus.'],
          ['used to + V', { vi: 'Đã từng (thói quen, trạng thái trong quá khứ, nay không còn)', en: 'A past habit or state that no longer exists' }, 'This building used to be a textile factory.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Dù có chữ **had**, had better không nói về quá khứ. Cấu trúc **would rather + S + quá khứ đơn** (I\'d rather you called first) thuộc bài 18.5; cách phân biệt **used to + V** với **be used to + V-ing** đã học ở bài 9.2.',
          en: "Despite the word **had**, had better does not refer to the past. The pattern **would rather + S + past simple** (I'd rather you called first) belongs to lesson 18.5; **used to + V** versus **be used to + -ing** was covered in lesson 9.2.",
        },
      },
    },
    {
      heading: { vi: 'Chia thì với semi-modal', en: 'Semi-modals in different tenses' },
      body: {
        vi: 'Vì modal thuần không có dạng tương lai hay hoàn thành, đề thường cho dấu hiệu thời gian (next month, since 2020, so far) rồi buộc bạn chọn semi-modal đã chia đúng thì.',
        en: 'Because pure modals have no future or perfect forms, items often give a time cue (next month, since 2020, so far) and require you to choose a semi-modal in the correct tense.',
      },
      table: {
        head: [
          { vi: 'Thì / kết hợp', en: 'Tense / combination' },
          { vi: 'Bắt buộc', en: 'Obligation' },
          { vi: 'Khả năng', en: 'Ability' },
        ],
        rows: [
          [{ vi: 'Tương lai', en: 'Future' }, 'will have to', 'will be able to'],
          [{ vi: 'Hiện tại hoàn thành', en: 'Present Perfect' }, 'has / have had to', 'has / have been able to'],
          [{ vi: 'Quá khứ', en: 'Past' }, 'had to', 'was / were able to'],
          [{ vi: 'Sau modal khác', en: 'After another modal' }, 'may / might have to', 'should / may be able to'],
          [{ vi: 'Sau to hoặc V-ing', en: 'After to or as -ing' }, 'to have to / having to', 'to be able to / being able to'],
        ],
      },
      examples: [
        {
          en: 'If the supplier raises its prices, we **will have to** find another vendor.',
          vi: 'Nếu nhà cung cấp tăng giá, chúng ta sẽ phải tìm một nhà cung cấp khác.',
        },
        {
          en: 'Since moving to the new warehouse, we **have been able to** ship orders within 24 hours.',
          vi: 'Kể từ khi chuyển sang nhà kho mới, chúng tôi đã có thể giao hàng trong vòng 24 giờ.',
        },
      ],
    },
    {
      heading: { vi: 'Cách làm câu semi-modal trong Part 5', en: 'Attacking semi-modal items in Part 5' },
      points: [
        {
          vi: 'Kiểm tra có cần **to** hay không: have to, ought to, be able to, be supposed to, be allowed to, need to, used to có to; had better, would rather, needn\'t thì không.',
          en: "Check whether **to** is needed: have to, ought to, be able to, be supposed to, be allowed to, need to and used to contain to; had better, would rather and needn't do not.",
        },
        {
          vi: 'Cụm chia được (have to, need to, be able to…) phải hợp với chủ ngữ: ngôi thứ ba số ít → has to, needs to, is able to.',
          en: 'Phrases that change form (have to, need to, be able to…) must agree with the subject: third-person singular → has to, needs to, is able to.',
        },
        {
          vi: 'Có dấu hiệu tương lai, hoàn thành, hoặc có modal đứng trước → loại modal thuần, chọn will have to / has been able to / might have to.',
          en: 'A future or perfect cue, or a modal already before the blank → reject pure modals and choose will have to / has been able to / might have to.',
        },
        {
          vi: 'Mốc quá khứ + nghĩa bắt buộc → **had to** (không có "musted" hay must cho quá khứ).',
          en: 'A past time + obligation → **had to** (there is no "musted", and must is not used for the past).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Anyone who wants a seat at the investment seminar had better ------- early, as space is very limited.',
      options: ['register', 'to register', 'registering', 'registered'],
      answer: 0,
      explanation: {
        vi: '**had better** đi với động từ nguyên mẫu không to → **register**. to register là bẫy vì người học nhầm had better với have to; registered là V3, không dùng sau had better.',
        en: '**had better** takes a bare base verb → **register**. to register is the trap for learners who confuse had better with have to; registered is a V3 and cannot follow had better.',
      },
      translation: 'Ai muốn có chỗ tại hội thảo đầu tư thì tốt hơn hết nên đăng ký sớm, vì số chỗ rất có hạn.',
    },
    {
      sentence: 'Since the main elevator is under repair, guests ------- use the service elevator until Friday.',
      options: ['will must', 'will have to', 'have to been', 'having to'],
      answer: 1,
      explanation: {
        vi: 'Hai modal không đứng liền nhau nên **will must** sai; nghĩa bắt buộc ở tương lai (**until Friday**) phải dùng **will have to**. having to không làm động từ chính được; have to been sai dạng.',
        en: 'Two modals cannot stand together, so **will must** is wrong; future obligation (**until Friday**) needs **will have to**. having to cannot be the main verb, and have to been is not a valid form.',
      },
      translation: 'Vì thang máy chính đang được sửa, khách sẽ phải dùng thang máy phục vụ cho đến thứ Sáu.',
    },
    {
      sentence: 'Since the new packaging line was installed, the plant ------- raise its daily output by 20 percent.',
      options: ['has could', 'can be able to', 'has able to', 'has been able to'],
      answer: 3,
      explanation: {
        vi: '**Since** + mốc quá khứ cần thì hiện tại hoàn thành; can không có dạng hoàn thành nên dùng **has been able to**. has could sai vì modal không đứng sau have; can be able to sai vì can và be able to cùng nghĩa nên không ghép với nhau; has able to thiếu been.',
        en: '**Since** + a past point calls for the Present Perfect; can has no perfect form, so use **has been able to**. has could is wrong because a modal cannot follow have; can be able to is wrong because can and be able to mean the same and are never combined; has able to is missing been.',
      },
      translation: 'Kể từ khi dây chuyền đóng gói mới được lắp đặt, nhà máy đã có thể tăng sản lượng hằng ngày thêm 20 phần trăm.',
    },
    {
      sentence: 'Applicants for the design position ought ------- a portfolio of recent work along with their résumé.',
      options: ['submit', 'to submit', 'submitting', 'submitted'],
      answer: 1,
      explanation: {
        vi: '**ought** luôn đi kèm **to** rồi mới tới động từ nguyên mẫu: ought to + V → **to submit**. Khác với should, không có "ought submit".',
        en: '**ought** is always followed by **to** and then the base verb: ought to + V → **to submit**. Unlike should, there is no "ought submit".',
      },
      translation: 'Ứng viên cho vị trí thiết kế nên nộp hồ sơ năng lực gồm các sản phẩm gần đây cùng với sơ yếu lý lịch.',
    },
    {
      sentence: 'The keynote speaker ------- arrive at 9 A.M., but her flight from Singapore has been delayed by two hours.',
      options: ['supposes to', 'supposed', 'is supposing', 'is supposed to'],
      answer: 3,
      explanation: {
        vi: 'Theo kế hoạch là 9 giờ đến nhưng chuyến bay bị hoãn (**but … delayed**) → **be supposed to** (lẽ ra phải, theo lịch thì phải). supposes to và is supposing sai cấu trúc; supposed thiếu be và thiếu to.',
        en: 'She is scheduled to arrive at 9, but the flight is delayed (**but … delayed**) → **be supposed to** (expected or scheduled to). supposes to and is supposing are not valid patterns; supposed lacks both be and to.',
      },
      translation: 'Diễn giả chính theo lịch sẽ đến lúc 9 giờ sáng, nhưng chuyến bay của bà từ Singapore đã bị hoãn hai tiếng.',
    },
    {
      sentence: 'Only authorized personnel ------- to enter the server room on the third floor.',
      options: ['allow', 'have allowed', 'are allowed', 'are allowing'],
      answer: 2,
      explanation: {
        vi: 'Ngay sau chỗ trống là **to enter**, không có tân ngữ chen giữa → cần bị động **be allowed to** (được phép). allow, have allowed và are allowing là chủ động, đòi một tân ngữ trước to V (allow someone to enter).',
        en: '**to enter** follows the blank directly, with no object in between → the passive **be allowed to** is needed. allow, have allowed and are allowing are active and require an object before to V (allow someone to enter).',
      },
      translation: 'Chỉ nhân viên được ủy quyền mới được phép vào phòng máy chủ ở tầng ba.',
    },
    {
      sentence: 'You ------- bring a printed ticket to the concert; the digital pass on your phone is sufficient.',
      options: ["mustn't", 'had better', "needn't", 'ought to'],
      answer: 2,
      explanation: {
        vi: 'Vế sau **the digital pass … is sufficient** cho biết vé giấy là không cần thiết → **needn\'t** (không cần). mustn\'t nghĩa là bị cấm, trái với ý "vé điện tử là đủ"; had better và ought to lại khuyên nên mang.',
        en: "The clause **the digital pass … is sufficient** shows a paper ticket is unnecessary → **needn't**. mustn't means forbidden, which is not what \"sufficient\" implies; had better and ought to would advise bringing one.",
      },
      translation: 'Bạn không cần mang vé in ra giấy đến buổi hòa nhạc; vé điện tử trên điện thoại là đủ.',
    },
    {
      sentence: 'Mr. Adeyemi would rather ------- the train than drive to the regional sales meeting in Leeds.',
      options: ['take', 'to take', 'taking', 'took'],
      answer: 0,
      explanation: {
        vi: '**would rather + V nguyên mẫu (than + V nguyên mẫu)**: vế sau **than drive** cũng là V nguyên mẫu → **take**. to take sai vì would rather không có to.',
        en: '**would rather + base verb (than + base verb)**: the second part **than drive** is also a base verb → **take**. to take is wrong because would rather has no to.',
      },
      translation: 'Ông Adeyemi thích đi tàu hơn là lái xe đến cuộc họp kinh doanh khu vực ở Leeds.',
    },
    {
      sentence: 'Last Tuesday, the warehouse ------- close three hours early because of a citywide power outage.',
      options: ['must', 'has to', 'will have to', 'had to'],
      answer: 3,
      explanation: {
        vi: '**Last Tuesday** là mốc quá khứ, và must không có dạng quá khứ → dùng **had to**. has to là hiện tại, will have to là tương lai, đều mâu thuẫn với mốc thời gian.',
        en: '**Last Tuesday** is a past time, and must has no past form → use **had to**. has to is present and will have to is future; both clash with the time cue.',
      },
      translation: 'Thứ Ba tuần trước, nhà kho đã phải đóng cửa sớm ba tiếng vì mất điện toàn thành phố.',
    },
    {
      sentence: 'The regional manager ------- to approve the travel request before it is sent to the accounting team.',
      options: ['need', "needn't", 'needs', 'needing'],
      answer: 2,
      explanation: {
        vi: 'Ở thể khẳng định, **need to** là động từ thường, chia theo chủ ngữ số ít **The regional manager** → **needs to**. need thiếu -s nên không hợp với chủ ngữ số ít; needn\'t đi với V không to nên không ghép với to approve; needing không làm động từ chính được.',
        en: "In the affirmative, **need to** is an ordinary verb and agrees with the singular subject **The regional manager** → **needs to**. need lacks the -s required by the singular subject; needn't takes a base verb without to, so it cannot go with to approve; needing cannot be the main verb.",
      },
      translation: 'Quản lý khu vực cần phê duyệt đề nghị công tác trước khi nó được chuyển cho nhóm kế toán.',
    },
  ],
};
