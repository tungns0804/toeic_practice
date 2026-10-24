import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conditionals-third-mixed',
  intro: {
    vi: 'Câu điều kiện **loại 3** (If + had V3, would have V3) nói về điều trái với quá khứ; **câu hỗn hợp** nối một điều kiện ở thời này với kết quả ở thời khác. Trong Part 5, **dấu hiệu thời gian** (last year, now, today…) là chìa khoá để chọn đúng dạng động từ.',
    en: 'The **third conditional** (If + had + past participle, would have + past participle) describes situations contrary to the past; **mixed conditionals** link a condition in one time frame to a result in another. In Part 5, the **time markers** (last year, now, today…) are the key to choosing the right verb form.',
  },
  mistakes: [
    {
      wrong: 'If the courier [[would have arrived]] on time, we would have shipped the order yesterday.',
      right: 'If the courier [[had arrived]] on time, we would have shipped the order yesterday.',
      explanation: {
        vi: 'Mệnh đề if của loại 3 dùng **had + V3**, không dùng would have. would have V3 chỉ nằm ở mệnh đề chính.',
        en: 'The if clause of a third conditional takes **had + past participle**, not would have. would have + past participle belongs only in the main clause.',
      },
    },
    {
      wrong: 'If Ms. Lopez [[has]] checked the figures, the error would have been caught.',
      right: 'If Ms. Lopez [[had]] checked the figures, the error would have been caught.',
      explanation: {
        vi: 'Mệnh đề chính có **would have been caught** → loại 3, mệnh đề if phải dùng quá khứ hoàn thành **had checked**, không phải hiện tại hoàn thành.',
        en: 'The main clause has **would have been caught** → third conditional, so the if clause needs the past perfect **had checked**, not the Present Perfect.',
      },
    },
    {
      wrong: 'If the client had signed the contract in April, we [[would have start]] production in May.',
      right: 'If the client had signed the contract in April, we [[would have started]] production in May.',
      explanation: {
        vi: 'Sau **would have** luôn là **V3/quá khứ phân từ**: would have **started**, không dùng động từ nguyên mẫu.',
        en: '**would have** is always followed by a **past participle**: would have **started**, never a base verb.',
      },
    },
    {
      wrong: 'If the company had installed solar panels five years ago, its energy bills [[would have been]] lower now.',
      right: 'If the company had installed solar panels five years ago, its energy bills [[would be]] lower now.',
      explanation: {
        vi: 'Điều kiện ở quá khứ (**five years ago**) nhưng kết quả ở hiện tại (**now**) → câu hỗn hợp, mệnh đề chính dùng **would + V**: would be.',
        en: 'The condition is in the past (**five years ago**) but the result is in the present (**now**) → a mixed conditional, so the main clause takes **would + verb**: would be.',
      },
    },
    {
      wrong: 'The parcel would have reached the client on time if the address [[had written]] correctly.',
      right: 'The parcel would have reached the client on time if the address [[had been written]] correctly.',
      explanation: {
        vi: '**the address** không tự viết được nên mệnh đề if phải ở dạng bị động: **had been + V3** → had been written.',
        en: '**the address** cannot write anything itself, so the if clause must be passive: **had been + past participle** → had been written.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Loại 3: giả định trái với quá khứ', en: 'Third conditional: contrary to the past' },
      body: {
        vi: 'Loại 3 tưởng tượng một quá khứ khác với những gì đã thực sự xảy ra, thường để tiếc nuối hoặc rút kinh nghiệm. Mệnh đề if dùng **had + V3** (quá khứ hoàn thành), mệnh đề chính dùng **would have + V3**. Cả hai vế đều nói về quá khứ, nên điều kiện không còn thay đổi được nữa.',
        en: 'The third conditional imagines a past different from what actually happened, usually to express regret or draw a lesson. The if clause takes **had + past participle** (past perfect), and the main clause takes **would have + past participle**. Both clauses refer to the past, so the condition can no longer be changed.',
      },
      table: {
        head: [
          { vi: 'Mệnh đề if', en: 'If clause' },
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Thực tế đã xảy ra', en: 'What really happened' },
        ],
        rows: [
          ['If we had booked earlier,', 'we would have got a discount.', { vi: 'Đặt muộn, không được giảm giá.', en: 'We booked late and got no discount.' }],
          ['If the alarm had worked,', 'the guards could have stopped the thief.', { vi: 'Chuông không kêu, không bắt được trộm.', en: 'The alarm failed and the thief escaped.' }],
          ["If it hadn't rained,", 'more visitors might have come.', { vi: 'Trời mưa, ít khách.', en: 'It rained and few visitors came.' }],
        ],
      },
      examples: [
        {
          en: 'If the team **had tested** the update, the website **would not have crashed** on Monday.',
          vi: 'Nếu nhóm đã thử nghiệm bản cập nhật, trang web đã không bị sập vào thứ Hai.',
        },
        {
          en: 'We **would have renewed** the lease if the landlord **had not raised** the rent.',
          vi: 'Chúng tôi đã gia hạn hợp đồng thuê nếu chủ nhà không tăng tiền thuê.',
        },
      ],
    },
    {
      heading: { vi: 'would / could / might have V3 và dạng bị động', en: 'would / could / might have + past participle and the passive' },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Ý nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['would have + V3', { vi: 'Kết quả chắc chắn (đã … rồi)', en: 'Certain result' }, 'we would have won the bid'],
          ['could have + V3', { vi: 'Khả năng (đã có thể)', en: 'Ability (would have been able to)' }, 'we could have saved money'],
          ['might have + V3', { vi: 'Kết quả có thể (có lẽ đã)', en: 'Possible result (perhaps would have)' }, 'sales might have improved'],
          ['had been + V3', { vi: 'Bị động ở mệnh đề if', en: 'Passive in the if clause' }, 'if the order had been placed'],
          ['would have been + V3', { vi: 'Bị động ở mệnh đề chính', en: 'Passive in the main clause' }, 'it would have been delivered'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Dạng rút gọn **\'d** có thể là **had** hoặc **would**: If I\'d known (= had known), I\'d have called (= would have called). Phía sau là **V3** thì \'d = had; phía sau là **have** hoặc **V nguyên mẫu** thì \'d = would.',
          en: "The contraction **'d** can mean **had** or **would**: If I'd known (= had known), I'd have called (= would have called). Followed by a **past participle**, 'd = had; followed by **have** or a **base verb**, 'd = would.",
        },
      },
    },
    {
      heading: { vi: 'Câu hỗn hợp 1: điều kiện quá khứ → kết quả hiện tại', en: 'Mixed conditional 1: past condition → present result' },
      body: {
        vi: 'Một việc đã (không) xảy ra trong quá khứ dẫn đến tình trạng **bây giờ**. Mệnh đề if dùng **had + V3** như loại 3, nhưng mệnh đề chính dùng **would / could / might + V** như loại 2. Dấu hiệu ở mệnh đề chính: **now, today, currently, still, this year**.',
        en: 'Something that did (or did not) happen in the past leads to a situation **now**. The if clause takes **had + past participle** as in the third conditional, but the main clause takes **would / could / might + verb** as in the second. Typical markers in the main clause: **now, today, currently, still, this year**.',
      },
      examples: [
        {
          en: 'If we **had hired** a second accountant last year, we **would not be** so busy now.',
          vi: 'Nếu năm ngoái chúng tôi đã tuyển thêm một kế toán, thì giờ chúng tôi đã không bận đến thế.',
        },
        {
          en: 'If the store **had opened** downtown, it **could attract** many more office workers today.',
          vi: 'Nếu cửa hàng đã mở ở trung tâm, thì ngày nay nó có thể thu hút nhiều dân văn phòng hơn hẳn.',
        },
      ],
    },
    {
      heading: { vi: 'Câu hỗn hợp 2: điều kiện hiện tại → kết quả quá khứ', en: 'Mixed conditional 2: present condition → past result' },
      body: {
        vi: 'Một tình trạng **luôn đúng / vẫn đúng đến nay** (tính cách, năng lực, đặc điểm) giải thích vì sao một việc trong quá khứ đã (không) xảy ra. Mệnh đề if dùng **quá khứ đơn** (be → **were**) như loại 2, mệnh đề chính dùng **would have + V3** như loại 3.',
        en: 'A state that is **always or still true** (a personality trait, an ability, a feature) explains why something in the past did or did not happen. The if clause takes the **past simple** (be → **were**) as in the second conditional, and the main clause takes **would have + past participle** as in the third.',
      },
      examples: [
        {
          en: 'If Mr. Haddad **spoke** Spanish, the firm **would have sent** him to Madrid last month.',
          vi: 'Nếu ông Haddad nói được tiếng Tây Ban Nha, công ty đã cử ông ấy sang Madrid tháng trước.',
        },
        {
          en: 'If our product **were not** so reliable, we **would have lost** that client years ago.',
          vi: 'Nếu sản phẩm của chúng tôi không đáng tin cậy đến thế, chúng tôi đã mất khách hàng đó từ nhiều năm trước.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Ông Haddad **hiện không** nói được tiếng Tây Ban Nha (tình trạng hiện tại) → **không** được cử đi tháng trước (kết quả quá khứ). Nếu chỉ một sự việc đơn lẻ trong quá khứ, hãy dùng loại 3 bình thường.',
          en: 'Mr. Haddad **does not** speak Spanish **now** (present state) → he was **not** sent last month (past result). For a single past event as the condition, use a normal third conditional.',
        },
      },
    },
    {
      heading: { vi: 'Dấu hiệu thời gian quyết định loại câu', en: 'Time markers decide the type' },
      table: {
        head: [
          { vi: 'Thời của điều kiện', en: 'Condition time' },
          { vi: 'Thời của kết quả', en: 'Result time' },
          { vi: 'Công thức', en: 'Pattern' },
        ],
        rows: [
          [{ vi: 'Hiện tại', en: 'Present' }, { vi: 'Hiện tại / tương lai', en: 'Present / future' }, 'If + past simple, would + V (lesson 18.2)'],
          [{ vi: 'Quá khứ', en: 'Past' }, { vi: 'Quá khứ', en: 'Past' }, 'If + had V3, would have V3'],
          [{ vi: 'Quá khứ', en: 'Past' }, { vi: 'Hiện tại (now, today)', en: 'Present (now, today)' }, 'If + had V3, would + V'],
          [{ vi: 'Hiện tại (luôn đúng)', en: 'Present (always true)' }, { vi: 'Quá khứ (yesterday, last year)', en: 'Past (yesterday, last year)' }, 'If + past simple, would have V3'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Xét **từng vế riêng**: vế nào có mốc quá khứ (yesterday, last month, in 2020, … ago) thì vế đó dùng dạng "had V3 / would have V3"; vế nào có **now, today, currently** thì dùng dạng "quá khứ đơn / would + V".',
          en: 'Check **each clause separately**: a clause with a past marker (yesterday, last month, in 2020, … ago) takes the "had + past participle / would have + past participle" form; a clause with **now, today, currently** takes the "past simple / would + verb" form.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu loại 3 và câu hỗn hợp trong Part 5', en: 'Attacking third and mixed conditionals in Part 5' },
      points: [
        {
          vi: 'Thấy **had V3** ở mệnh đề if → mệnh đề chính là **would/could/might have V3**, trừ khi nó có now/today/still (khi đó chọn **would + V**).',
          en: 'See **had + past participle** in the if clause → the main clause is **would/could/might have + past participle**, unless it contains now/today/still (then choose **would + verb**).',
        },
        {
          vi: 'Thấy **would have V3** ở mệnh đề chính → mệnh đề if là **had V3**; chỉ chọn quá khứ đơn/were khi điều kiện là một tình trạng vẫn đúng đến nay.',
          en: 'See **would have + past participle** in the main clause → the if clause is **had + past participle**; choose the past simple/were only when the condition is a state that is still true.',
        },
        {
          vi: 'Loại ngay: would have trong mệnh đề if, **has/have V3** (hiện tại hoàn thành) và **would have + V nguyên mẫu**.',
          en: 'Cross out at once: would have in the if clause, **has/have + past participle** (Present Perfect) and **would have + base verb**.',
        },
        {
          vi: 'Còn hai đáp án chủ động/bị động → xét chủ ngữ có tự thực hiện hành động không (the order **had been placed**).',
          en: 'Two options left, active and passive → check whether the subject performs the action itself (the order **had been placed**).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'If the marketing team had launched the campaign in March, sales ------- much higher last quarter.',
      options: ['would be', 'will be', 'would have been', 'had been'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề if dùng **had launched** và kết quả ở quá khứ (**last quarter**) → loại 3, mệnh đề chính dùng **would have been**. would be chỉ dùng khi kết quả ở hiện tại (now).',
        en: 'The if clause uses **had launched** and the result is in the past (**last quarter**) → third conditional, so the main clause takes **would have been**. would be is only for a present result (now).',
      },
      translation: 'Nếu nhóm marketing đã tung chiến dịch vào tháng Ba, doanh số quý trước đã cao hơn nhiều.',
    },
    {
      sentence: 'If Ms. Duarte ------- the error in the invoice, the client would not have been overcharged.',
      options: ['notices', 'has noticed', 'would notice', 'had noticed'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề chính có **would not have been overcharged** → loại 3, mệnh đề if dùng **had + V3**: had noticed. has noticed là hiện tại hoàn thành, would notice không dùng trong mệnh đề if.',
        en: 'The main clause has **would not have been overcharged** → third conditional, so the if clause takes **had + past participle**: had noticed. has noticed is Present Perfect, and would notice is not used in the if clause.',
      },
      translation: 'Nếu cô Duarte phát hiện ra lỗi trong hoá đơn, khách hàng đã không bị tính tiền quá mức.',
    },
    {
      sentence: 'If the train had not been delayed, we ------- the opening speech at the conference yesterday morning.',
      options: ['could have heard', 'can hear', 'could hear', 'heard'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề if dùng **had not been delayed** và kết quả ở quá khứ (**yesterday morning**) → **could have + V3**: could have heard. could hear chỉ dùng cho kết quả ở hiện tại.',
        en: 'The if clause uses **had not been delayed** and the result is in the past (**yesterday morning**) → **could have + past participle**: could have heard. could hear is only for a present result.',
      },
      translation: 'Nếu tàu không bị trễ, chúng tôi đã có thể nghe bài phát biểu khai mạc hội nghị vào sáng hôm qua.',
    },
    {
      sentence: 'If the shipping labels ------- correctly, the parcels would not have been sent to the wrong address last week.',
      options: ['had been printed', 'had printed', 'were printing', 'have been printed'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính có **would not have been sent** → mệnh đề if dùng quá khứ hoàn thành; **the shipping labels** không tự in nên cần bị động **had been printed**. had printed là chủ động.',
        en: 'The main clause has **would not have been sent** → the if clause takes the past perfect; **the shipping labels** cannot print themselves, so the passive **had been printed** is needed. had printed is active.',
      },
      translation: 'Nếu nhãn vận chuyển được in đúng, các bưu kiện đã không bị gửi nhầm địa chỉ vào tuần trước.',
    },
    {
      sentence: 'If Mr. Okafor had accepted the job offer in Dubai last year, he ------- there now instead of in Lagos.',
      options: ['would have lived', 'will live', 'would be living', 'had lived'],
      answer: 2,
      explanation: {
        vi: 'Điều kiện ở quá khứ (**had accepted … last year**) nhưng kết quả ở hiện tại (**now**) → câu hỗn hợp, mệnh đề chính dùng **would + V**: would be living. would have lived mâu thuẫn với now.',
        en: 'The condition is past (**had accepted … last year**) but the result is present (**now**) → a mixed conditional, so the main clause takes **would + verb**: would be living. would have lived clashes with now.',
      },
      translation: 'Nếu năm ngoái ông Okafor đã nhận lời mời làm việc ở Dubai, thì giờ ông ấy đang sống ở đó chứ không phải ở Lagos.',
    },
    {
      sentence: 'If the city had approved the new subway line a decade ago, commuters ------- such long travel times today.',
      options: ['would not face', 'would not have faced', 'will not face', 'did not face'],
      answer: 0,
      explanation: {
        vi: 'Điều kiện ở quá khứ (**a decade ago**), kết quả ở hiện tại (**today**) → câu hỗn hợp, mệnh đề chính dùng **would + V**: would not face. would not have faced chỉ hợp với kết quả trong quá khứ.',
        en: 'The condition is past (**a decade ago**) and the result is present (**today**) → a mixed conditional, so the main clause takes **would + verb**: would not face. would not have faced only fits a past result.',
      },
      translation: 'Nếu mười năm trước thành phố đã phê duyệt tuyến tàu điện ngầm mới, thì ngày nay người đi làm đã không phải mất nhiều thời gian di chuyển như vậy.',
    },
    {
      sentence: 'If Ms. Tran ------- fluent in Korean, the company would have sent her to Seoul last spring, but she is still a beginner.',
      options: ['is', 'were', 'will be', 'being'],
      answer: 1,
      explanation: {
        vi: 'Điều kiện là một tình trạng vẫn đúng đến nay (**she is still a beginner**), kết quả ở quá khứ (**would have sent … last spring**) → câu hỗn hợp, mệnh đề if dùng quá khứ đơn **were**. is là hiện tại, không đi với would have.',
        en: 'The condition is a state that is still true (**she is still a beginner**) and the result is past (**would have sent … last spring**) → a mixed conditional, so the if clause takes the past simple **were**. is is present and cannot pair with would have.',
      },
      translation: 'Nếu cô Trần thông thạo tiếng Hàn, công ty đã cử cô ấy sang Seoul vào mùa xuân năm ngoái, nhưng cô ấy vẫn chỉ mới bắt đầu học.',
    },
    {
      sentence: 'If our firm were not so small, we ------- for the government contract that closed last month.',
      options: ['would apply', 'will apply', 'would have applied', 'apply'],
      answer: 2,
      explanation: {
        vi: 'Điều kiện là đặc điểm hiện tại (**were not so small**), còn cơ hội đã kết thúc (**closed last month**) → câu hỗn hợp, mệnh đề chính dùng **would have + V3**: would have applied. would apply sai vì gói thầu đã đóng, không thể nộp hồ sơ bây giờ.',
        en: 'The condition is a present feature (**were not so small**), but the opportunity is over (**closed last month**) → a mixed conditional, so the main clause takes **would have + past participle**: would have applied. would apply is wrong because the contract has already closed.',
      },
      translation: 'Nếu công ty chúng tôi không quá nhỏ, chúng tôi đã nộp hồ sơ cho gói thầu của chính phủ đã đóng vào tháng trước.',
    },
    {
      sentence: "If yesterday's presentation had been shorter, the audience ------- more attention to the final slides.",
      options: ['might pay', 'might have paid', 'may pay', 'had paid'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề if dùng **had been** và mọi việc xảy ra **yesterday** → loại 3, mệnh đề chính dùng **might have + V3**: might have paid. might pay chỉ hợp với kết quả ở hiện tại.',
        en: 'The if clause uses **had been** and everything happened **yesterday** → third conditional, so the main clause takes **might have + past participle**: might have paid. might pay only fits a present result.',
      },
      translation: 'Nếu bài thuyết trình hôm qua ngắn hơn, có lẽ khán giả đã chú ý hơn đến những trang chiếu cuối.',
    },
    {
      sentence: "We ------- last Friday's design deadline if two of our illustrators had not been out sick that week.",
      options: ['would meet', 'will meet', 'had met', 'would have met'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề if dùng **had not been** và hạn chót đã qua (**last Friday**) → loại 3, mệnh đề chính dùng **would have met**. would meet chỉ hợp với kết quả ở hiện tại/tương lai, còn had met không dùng ở mệnh đề chính.',
        en: 'The if clause uses **had not been** and the deadline is past (**last Friday**) → third conditional, so the main clause takes **would have met**. would meet only fits a present or future result, and had met is not used in the main clause.',
      },
      translation: 'Chúng tôi đã kịp hạn nộp thiết kế hôm thứ Sáu tuần trước nếu hai hoạ sĩ minh hoạ không bị ốm nghỉ trong tuần đó.',
    },
  ],
};
