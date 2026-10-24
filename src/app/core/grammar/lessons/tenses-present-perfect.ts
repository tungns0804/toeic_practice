import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-present-perfect',
  intro: {
    vi: 'Bài này dạy thì hiện tại hoàn thành (**have/has + V3**) và hiện tại hoàn thành tiếp diễn (**have/has been + V-ing**) cùng các dấu hiệu đi kèm như since, for, so far, to date. Trong Part 5/6, câu chọn thì loại này thường giải được ngay khi thấy dấu hiệu thời gian, và bẫy quen thuộc nhất là quá khứ đơn.',
    en: 'This lesson covers the Present Perfect (**have/has + V3**) and the Present Perfect Continuous (**have/has been + V-ing**), together with their time markers such as since, for, so far and to date. In Part 5/6, these tense items can usually be solved as soon as you spot the time marker, and the most common trap is the Past Simple.',
  },
  mistakes: [
    {
      wrong: 'Ms. Sorensen [[works]] in the accounting department since 2019.',
      right: 'Ms. Sorensen [[has worked]] in the accounting department since 2019.',
      explanation: {
        vi: '**since + mốc** (since 2019) diễn tả việc bắt đầu trong quá khứ và kéo dài đến nay, nên phải dùng hiện tại hoàn thành, không dùng hiện tại đơn theo kiểu dịch thẳng "làm từ năm 2019".',
        en: '**since + a point in time** (since 2019) describes something that started in the past and continues now, so it needs the Present Perfect, not the Present Simple.',
      },
    },
    {
      wrong: 'Ashby Savings Bank [[has launched]] its mobile banking app in 2018.',
      right: 'Ashby Savings Bank [[launched]] its mobile banking app in 2018.',
      explanation: {
        vi: '**in 2018** là một mốc quá khứ cụ thể, đã kết thúc, nên phải dùng quá khứ đơn. Thì hiện tại hoàn thành không đi với ago, yesterday, last week hay in + một năm đã qua.',
        en: '**in 2018** is a specific, finished past time, so the Past Simple is required. The Present Perfect is not used with ago, yesterday, last week or in + a year that is over.',
      },
    },
    {
      wrong: 'Our customer base has [[grew]] rapidly since we opened our online store.',
      right: 'Our customer base has [[grown]] rapidly since we opened our online store.',
      explanation: {
        vi: 'Sau **has/have** phải là V3 (quá khứ phân từ), không phải V2. grow – grew – **grown**; tương tự rise – rose – risen, begin – began – begun.',
        en: 'After **has/have** comes the V3 (past participle), not the past simple form. grow – grew – **grown**; likewise rise – rose – risen, begin – began – begun.',
      },
    },
    {
      wrong: 'Mr. Varga has managed the Lisbon branch [[since]] six years.',
      right: 'Mr. Varga has managed the Lisbon branch [[for]] six years.',
      explanation: {
        vi: '**since** đi với một MỐC (since 2020, since May), còn **for** đi với một KHOẢNG thời gian (for six years, for three months). "six years" là một khoảng nên phải dùng for.',
        en: '**since** takes a POINT in time (since 2020, since May), while **for** takes a PERIOD (for six years, for three months). "six years" is a period, so for is required.',
      },
    },
    {
      wrong: 'Ms. Oduya [[has been interviewing]] twelve candidates so far today.',
      right: 'Ms. Oduya [[has interviewed]] twelve candidates so far today.',
      explanation: {
        vi: 'Khi nói ĐÃ LÀM ĐƯỢC BAO NHIÊU (twelve candidates so far), dùng hiện tại hoàn thành dạng đơn. Dạng tiếp diễn **has been + V-ing** nhấn mạnh hoạt động kéo dài bao lâu, không đi với một số lượng đã hoàn tất.',
        en: 'To say HOW MANY things have been done (twelve candidates so far), use the simple Present Perfect. The continuous **has been + V-ing** stresses how long an activity has lasted, not a completed number.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Công thức của hai thì', en: 'Forming the two tenses' },
      body: {
        vi: '**has** đi với chủ ngữ số ít (he, she, it, danh từ số ít, danh từ không đếm được); **have** đi với I, you, we, they và chủ ngữ số nhiều. Dạng tiếp diễn chỉ cần thêm **been** rồi dùng V-ing.',
        en: '**has** goes with singular subjects (he, she, it, singular and uncountable nouns); **have** goes with I, you, we, they and plural subjects. The continuous form simply adds **been** and uses V-ing.',
      },
      table: {
        head: [
          { vi: 'Dạng câu', en: 'Sentence type' },
          { vi: 'Hiện tại hoàn thành', en: 'Present Perfect' },
          { vi: 'Hiện tại hoàn thành tiếp diễn', en: 'Present Perfect Continuous' },
        ],
        rows: [
          [{ vi: 'Khẳng định', en: 'Affirmative' }, 'The bank has updated its app.', 'The bank has been updating its app.'],
          [{ vi: 'Phủ định', en: 'Negative' }, "We have not (haven't) signed the lease.", "We have not (haven't) been using the old server."],
          [{ vi: 'Câu hỏi', en: 'Question' }, 'Has the client paid the invoice?', 'How long has the team been working on it?'],
        ],
      },
      examples: [
        {
          en: 'The company **has hired** fifteen new engineers this year.',
          vi: 'Năm nay công ty đã tuyển mười lăm kỹ sư mới.',
        },
        {
          en: 'Our technicians **have been testing** the new software since Monday.',
          vi: 'Các kỹ thuật viên của chúng tôi liên tục thử nghiệm phần mềm mới từ thứ Hai đến giờ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong hai thì này, sau have/has luôn là **V3**, không phải V2. Hay nhầm: rise – rose – **risen**, grow – grew – **grown**, begin – began – **begun**, choose – chose – **chosen**, write – wrote – **written**, take – took – **taken**, fall – fell – **fallen**. Còn **has been + V3** (has been approved) là câu bị động, học ở bài 6.1.',
          en: 'In these tenses, have/has is always followed by the **V3**, not the past simple form. Common slips: rise – rose – **risen**, grow – grew – **grown**, begin – began – **begun**, choose – chose – **chosen**, write – wrote – **written**, take – took – **taken**, fall – fell – **fallen**. **has been + V3** (has been approved) is the passive, covered in lesson 6.1.',
        },
      },
    },
    {
      heading: { vi: 'Present Perfect dùng khi nào', en: 'When to use the Present Perfect' },
      points: [
        {
          vi: '**Việc bắt đầu trong quá khứ và vẫn tiếp tục đến nay**, thường có since/for: She has worked here since 2018.',
          en: '**Something that started in the past and still continues**, often with since/for: She has worked here since 2018.',
        },
        {
          vi: '**Việc đã xảy ra, không nêu thời điểm, kết quả còn liên quan đến hiện tại**: The shipment has arrived (hàng đang ở đây).',
          en: '**A past action with no stated time and a result that matters now**: The shipment has arrived (it is here now).',
        },
        {
          vi: '**Trải nghiệm tính đến nay** (ever, never, this is the first time): I have never visited the Tokyo office.',
          en: '**Experience up to now** (ever, never, this is the first time): I have never visited the Tokyo office.',
        },
        {
          vi: '**Số lượng, kết quả tích luỹ đến nay** (so far, to date, over the past…): We have sold 3,000 units so far.',
          en: '**An amount or result accumulated up to now** (so far, to date, over the past...): We have sold 3,000 units so far.',
        },
      ],
      examples: [
        {
          en: 'Mr. Abernathy **has led** the Singapore sales team for six years.',
          vi: 'Ông Abernathy đã dẫn dắt đội kinh doanh Singapore được sáu năm (và hiện vẫn dẫn dắt).',
        },
        {
          en: 'The new catalog **has** just **arrived** from the printer.',
          vi: 'Cuốn catalog mới vừa được nhà in gửi tới.',
        },
        {
          en: 'Our online store **has received** more than 8,000 orders to date.',
          vi: 'Tính đến nay, cửa hàng trực tuyến của chúng tôi đã nhận hơn 8.000 đơn hàng.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**has gone to** = đã đi và hiện đang ở đó: Mr. Whitcombe has gone to Seoul (ông ấy đang ở Seoul). **has been to** = đã từng đến rồi quay về: Mr. Whitcombe has been to Seoul twice (nói về trải nghiệm).',
          en: '**has gone to** = went and is still there: Mr. Whitcombe has gone to Seoul (he is in Seoul now). **has been to** = visited and came back: Mr. Whitcombe has been to Seoul twice (experience).',
        },
      },
    },
    {
      heading: { vi: 'Dấu hiệu nhận biết', en: 'Time markers' },
      table: {
        head: [
          { vi: 'Dấu hiệu', en: 'Marker' },
          { vi: 'Ghi chú', en: 'Note' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'since 2020 / since May / since she joined',
            {
              vi: 'Từ một MỐC đến nay; mệnh đề sau since thường dùng quá khứ đơn',
              en: 'From a POINT until now; a clause after since usually takes the Past Simple',
            },
            'Sales have doubled since we hired Ms. Marchetti.',
          ],
          [
            'for three years / for a decade',
            {
              vi: 'Một KHOẢNG kéo dài đến nay (for cũng đi với quá khứ đơn nếu việc đã chấm dứt)',
              en: 'A PERIOD lasting until now (for also goes with the Past Simple if the action has ended)',
            },
            'Bexley Foods has been our supplier for a decade.',
          ],
          [
            'already / just',
            {
              vi: 'already = đã rồi (thường sớm hơn dự kiến), just = vừa mới; đứng giữa have/has và V3 (already cũng có thể đứng cuối câu)',
              en: 'already = by now, often sooner than expected; just = very recently; placed between have/has and V3 (already can also go at the end)',
            },
            'The guests have already checked in.',
          ],
          [
            'yet',
            {
              vi: 'Dùng trong câu phủ định (chưa) và câu hỏi (đã… chưa); thường đứng cuối câu',
              en: 'Used in negatives and questions; usually at the end of the clause',
            },
            'Has the bank replied yet?',
          ],
          [
            'recently / lately',
            {
              vi: 'Gần đây; lately thường đi với thì hoàn thành, còn recently cũng dùng được với quá khứ đơn',
              en: 'In the recent past; lately usually takes a perfect tense, while recently also works with the Past Simple',
            },
            'Several clients have asked about discounts lately.',
          ],
          [
            'so far / to date / up to now',
            {
              vi: 'Tính đến nay, hay đi với một con số',
              en: 'Up to now; often used with a number',
            },
            'We have trained 40 staff members so far.',
          ],
          [
            'over / in / during the past (last) + period',
            {
              vi: 'Một khoảng thời gian tính ngược từ bây giờ',
              en: 'A period counted back from now',
            },
            'The firm has opened three branches in the last two years.',
          ],
          [
            'ever / never',
            {
              vi: 'Trải nghiệm; ever dùng trong câu hỏi, câu phủ định và sau so sánh nhất',
              en: 'Experience; ever is used in questions, negatives and after superlatives',
            },
            'Have you ever used this booking system?',
          ],
          [
            'This is the first time + S + have/has V3',
            {
              vi: '"Đây là lần đầu tiên…": theo sau là hiện tại hoàn thành; khi kể chuyện quá khứ thì thành It was the first time + had V3 (quá khứ hoàn thành, bài 4.4)',
              en: '"This is the first time...": followed by the Present Perfect; when telling a past story it becomes It was the first time + had V3 (Past Perfect, lesson 4.4)',
            },
            'This is the first time we have hosted the summit.',
          ],
        ],
      },
      examples: [
        {
          en: 'It **has been** three years since we last **renovated** the lobby.',
          vi: 'Đã ba năm kể từ lần cuối chúng tôi cải tạo sảnh.',
        },
        {
          en: 'We **have** not **received** the signed contract **yet**.',
          vi: 'Chúng tôi vẫn chưa nhận được bản hợp đồng đã ký.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**in the past** đứng một mình nghĩa là "trước đây", thường đi với quá khứ đơn khi nói điều nay không còn đúng (In the past, we used paper forms). Còn **in the past three years** tính đến tận bây giờ nên dùng hiện tại hoàn thành. Đừng thấy chữ "past" mà vội chọn thì.',
          en: 'On its own, **in the past** means "formerly" and usually takes the Past Simple for something no longer true (In the past, we used paper forms). **in the past three years**, however, runs up to now and takes the Present Perfect. Do not choose a tense just because you see the word "past".',
        },
      },
    },
    {
      heading: {
        vi: 'Present Perfect Continuous: nhấn mạnh quá trình',
        en: 'Present Perfect Continuous: focusing on the activity',
      },
      body: {
        vi: '**have/has been + V-ing** diễn tả một hoạt động bắt đầu trong quá khứ và kéo dài liên tục đến nay (có thể vẫn còn tiếp diễn), thường đi với for, since, all day, all week, lately, recently. Nó cũng dùng cho hoạt động vừa mới dừng mà hệ quả còn thấy rõ.',
        en: '**have/has been + V-ing** describes an activity that began in the past and has continued up to now (and may still be going on), often with for, since, all day, all week, lately or recently. It is also used for an activity that has just stopped but whose effects are still visible.',
      },
      table: {
        head: [
          { vi: 'Tiêu chí', en: 'Point' },
          { vi: 'Present Perfect', en: 'Present Perfect' },
          { vi: 'Present Perfect Continuous', en: 'Present Perfect Continuous' },
        ],
        rows: [
          [
            { vi: 'Nhấn mạnh', en: 'Focus' },
            { vi: 'Kết quả, việc đã xong', en: 'Result, completed action' },
            { vi: 'Quá trình, thời lượng', en: 'Activity, duration' },
          ],
          [{ vi: 'Thường trả lời', en: 'Typically answers' }, 'How many? How much?', 'How long?'],
          [{ vi: 'Ví dụ', en: 'Example' }, 'She has written five reports.', 'She has been writing reports all morning.'],
          [
            { vi: 'Động từ trạng thái', en: 'Stative verbs' },
            'has known, has owned, has belonged',
            { vi: 'Không dùng', en: 'Not used' },
          ],
        ],
      },
      examples: [
        {
          en: 'The IT team **has been upgrading** the servers all week, so the network is slow.',
          vi: 'Đội IT nâng cấp máy chủ suốt cả tuần nay, nên mạng chạy chậm.',
        },
        {
          en: 'The IT team **has upgraded** twelve servers so far.',
          vi: 'Đến giờ đội IT đã nâng cấp xong mười hai máy chủ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Với các động từ như **work, live, teach, study** đi kèm for/since, cả hai dạng đều đúng: She **has worked** / **has been working** here since 2019. Vì vậy nếu bốn lựa chọn có cả hai dạng, hãy tìm dấu hiệu phân định: một số lượng đã hoàn tất (five reports, 3,000 units) hoặc động từ trạng thái như know, own, belong, consist (bài 4.1) → dạng đơn; một hoạt động vẫn đang diễn ra lúc nói, câu nhấn mạnh thời lượng (for hours now, so please wait) → thường là dạng tiếp diễn.',
          en: 'With verbs such as **work, live, teach, study** plus for/since, both forms are correct: She **has worked** / **has been working** here since 2019. So if the options include both forms, look for the deciding cue: a completed number (five reports, 3,000 units) or a stative verb such as know, own, belong, consist (lesson 4.1) → simple form; an activity still going on as you speak, with the stress on duration (for hours now, so please wait) → usually the continuous form.',
        },
      },
    },
    {
      heading: { vi: 'Hiện tại hoàn thành hay quá khứ đơn?', en: 'Present Perfect or Past Simple?' },
      body: {
        vi: 'Quy tắc then chốt: có **mốc thời gian quá khứ cụ thể, đã chấm dứt** thì dùng quá khứ đơn; không nêu thời điểm, hoặc khoảng thời gian kéo dài đến hiện tại thì dùng hiện tại hoàn thành.',
        en: 'The key rule: a **specific, finished past time** calls for the Past Simple; no stated time, or a period that runs up to the present, calls for the Present Perfect.',
      },
      table: {
        head: [
          { vi: 'Quá khứ đơn', en: 'Past Simple' },
          { vi: 'Hiện tại hoàn thành', en: 'Present Perfect' },
        ],
        rows: [
          ['two days ago, yesterday', 'since Monday, for two days (until now)'],
          ['last week, last year', 'over the past week, in the last year'],
          ['in 2019, in May (finished)', 'so far, to date, up to now'],
          ['when + past clause (when she joined)', 'ever, never, already, yet'],
        ],
      },
      examples: [
        {
          en: 'Ms. Duarte **joined** the firm in 2017.',
          vi: 'Bà Duarte vào công ty năm 2017.',
        },
        {
          en: 'Ms. Duarte **has worked** for the firm since 2017.',
          vi: 'Bà Duarte làm việc cho công ty từ năm 2017 đến nay.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**recently** đi với quá khứ đơn hoàn toàn bình thường (She recently joined our team), còn **just, already, yet** cũng hay đi với quá khứ đơn trong tiếng Anh Mỹ (We just signed the contract). Vì vậy riêng những từ này chưa đủ để loại quá khứ đơn; hãy tìm thêm dấu hiệu khác. Ngược lại, **since + mốc, so far, to date, over the past + khoảng** gần như luôn đòi thì hoàn thành.',
          en: '**recently** is perfectly normal with the Past Simple (She recently joined our team), and **just, already, yet** are also often used with the Past Simple in American English (We just signed the contract). So these words alone do not rule out the Past Simple; look for another cue. By contrast, **since + a point, so far, to date, over the past + period** almost always require a perfect tense.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chọn thì hoàn thành trong Part 5', en: 'Attacking Present Perfect items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là các thì của cùng một động từ → quét cả câu tìm dấu hiệu thời gian trước khi dịch nghĩa.',
          en: 'Four options are tenses of the same verb → scan the whole sentence for a time marker before translating.',
        },
        {
          vi: 'Thấy ago, yesterday, last + thời gian, in + năm đã qua, when + mệnh đề quá khứ → loại have/has + V3, chọn quá khứ đơn.',
          en: 'See ago, yesterday, last + time, in + a past year, when + past clause → eliminate have/has + V3 and choose the Past Simple.',
        },
        {
          vi: 'Thấy since + mốc, for + khoảng kèm "now", so far, to date, over the past + khoảng, lately, this is the first time → chọn have/has + V3 hoặc have/has been + V-ing.',
          en: 'See since + a point, for + period with "now", so far, to date, over the past + period, lately, this is the first time → choose have/has + V3 or have/has been + V-ing.',
        },
        {
          vi: 'Còn cả hai dạng hoàn thành → có số lượng đã xong hoặc động từ trạng thái thì chọn dạng đơn; hoạt động vẫn đang diễn ra lúc nói và câu nhấn mạnh thời lượng (for hours now) thì thường chọn dạng tiếp diễn.',
          en: 'Both perfect forms left → a completed number or a stative verb means the simple form; an activity still going on as you speak, with the stress on duration (for hours now), usually means the continuous form.',
        },
        {
          vi: 'Kiểm tra lần cuối: has với chủ ngữ số ít, have với chủ ngữ số nhiều, và sau have/has phải là V3 đúng (risen, chosen, grown…).',
          en: 'Final check: has with a singular subject, have with a plural subject, and the correct V3 after have/has (risen, chosen, grown...).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence:
        'Larkspur Freight ------- 120 vans to its delivery fleet since the beginning of the year to handle rising online orders.',
      options: ['added', 'has added', 'is adding', 'will add'],
      answer: 1,
      explanation: {
        vi: '**since the beginning of the year** (since + mốc) cho biết kết quả tích luỹ từ một mốc quá khứ đến nay → hiện tại hoàn thành **has added**. added là quá khứ đơn, không đi với since + mốc; is adding và will add cũng không dùng với since.',
        en: '**since the beginning of the year** (since + a point in time) shows a result built up from a past point until now → Present Perfect **has added**. added is the Past Simple, which does not go with since + a point; is adding and will add do not fit since either.',
      },
      translation:
        'Larkspur Freight đã bổ sung 120 xe tải nhỏ vào đội xe giao hàng kể từ đầu năm để đáp ứng lượng đơn hàng trực tuyến ngày càng tăng.',
    },
    {
      sentence:
        'The Halcyon Hotel ------- its rooftop restaurant last October, and the venue has been popular with business travelers ever since.',
      options: ['has renovated', 'renovates', 'renovated', 'has been renovating'],
      answer: 2,
      explanation: {
        vi: '**last October** là mốc quá khứ cụ thể, đã kết thúc → quá khứ đơn **renovated**. has renovated là bẫy: hiện tại hoàn thành không đi với last + thời gian. Vế sau dùng has been vì có **ever since** (từ đó đến nay).',
        en: '**last October** is a specific, finished past time → Past Simple **renovated**. has renovated is the trap: the Present Perfect is not used with last + a time expression. The second clause uses has been because of **ever since** (from then until now).',
      },
      translation:
        'Khách sạn Halcyon đã cải tạo nhà hàng sân thượng vào tháng Mười vừa rồi, và từ đó đến nay nơi này luôn được khách đi công tác ưa chuộng.',
    },
    {
      sentence:
        'Ms. Kowalczyk ------- the quarterly budget for nearly three hours now, so please do not disturb her.',
      options: ['has been reviewing', 'reviewed', 'reviews', 'will review'],
      answer: 0,
      explanation: {
        vi: '**for nearly three hours now** và lời dặn "đừng làm phiền" cho thấy hoạt động bắt đầu từ trước và vẫn đang tiếp diễn → **has been reviewing**. reviewed (quá khứ đơn) mâu thuẫn với **now** và với việc bà ấy vẫn đang làm.',
        en: '**for nearly three hours now** and the request not to disturb her show an activity that started earlier and is still going on → **has been reviewing**. reviewed (Past Simple) clashes with **now** and with the fact that she is still working.',
      },
      translation: 'Bà Kowalczyk đã rà soát ngân sách quý suốt gần ba tiếng đồng hồ nay, nên xin đừng làm phiền bà ấy.',
    },
    {
      sentence: "To date, this year's charity drive ------- more than $50,000 for the regional children's hospital.",
      options: ['raises', 'raised', 'will raise', 'has raised'],
      answer: 3,
      explanation: {
        vi: '**To date** (tính đến nay) là dấu hiệu của hiện tại hoàn thành, và kết quả là một số tiền tích luỹ → **has raised**. raised (quá khứ đơn) không đi với to date; chủ ngữ **drive** số ít nên dùng has.',
        en: '**To date** (up to now) signals the Present Perfect, and the result is an accumulated amount → **has raised**. raised (Past Simple) does not go with to date; the subject **drive** is singular, hence has.',
      },
      translation:
        'Tính đến nay, đợt quyên góp từ thiện năm nay đã quyên được hơn 50.000 đô la cho bệnh viện nhi của khu vực.',
    },
    {
      sentence: 'Shipping costs have ------- sharply over the past six months because of higher fuel prices.',
      options: ['rose', 'risen', 'rising', 'raised'],
      answer: 1,
      explanation: {
        vi: 'Sau **have** cần V3: rise – rose – **risen**. rose là V2 nên sai; raised là V3 của raise, một ngoại động từ cần tân ngữ, mà sau chỗ trống không có tân ngữ. **over the past six months** cũng báo hiệu hiện tại hoàn thành.',
        en: 'After **have** we need the V3: rise – rose – **risen**. rose is the past simple form; raised is the V3 of raise, a transitive verb that needs an object, and there is none here. **over the past six months** also signals the Present Perfect.',
      },
      translation: 'Chi phí vận chuyển đã tăng mạnh trong sáu tháng qua do giá nhiên liệu cao hơn.',
    },
    {
      sentence:
        'The board of directors has not approved the proposed merger -------, but a final decision is expected next week.',
      options: ['already', 'just', 'yet', 'ago'],
      answer: 2,
      explanation: {
        vi: 'Câu phủ định **has not approved** và vế "dự kiến tuần sau có quyết định" cho thấy việc chưa xảy ra → **yet** (chưa), đứng cuối mệnh đề. already và just không đứng cuối câu phủ định như thế này; ago phải đi sau một khoảng thời gian.',
        en: 'The negative **has not approved** and the decision "expected next week" show the action has not happened → **yet**, placed at the end of the clause. already and just are not used at the end of a negative like this; ago must follow a period of time.',
      },
      translation:
        'Hội đồng quản trị vẫn chưa phê duyệt kế hoạch sáp nhập được đề xuất, nhưng dự kiến tuần sau sẽ có quyết định cuối cùng.',
    },
    {
      sentence:
        'This is the first time that Torvane Electronics ------- at the Berlin Technology Fair, and its booth staff are still adjusting to the crowds.',
      options: ['exhibits', 'exhibited', 'exhibiting', 'has exhibited'],
      answer: 3,
      explanation: {
        vi: '**This is the first time** đi với hiện tại hoàn thành → **has exhibited**. exhibits (hiện tại đơn) và exhibited (quá khứ đơn) là lỗi hay gặp với cấu trúc này; exhibiting không phải động từ chia thì nên mệnh đề thiếu động từ chính.',
        en: '**This is the first time** is followed by the Present Perfect → **has exhibited**. exhibits (Present Simple) and exhibited (Past Simple) are common errors with this pattern; exhibiting is not a finite verb, so the clause would have no main verb.',
      },
      translation:
        'Đây là lần đầu tiên Torvane Electronics tham gia trưng bày tại Hội chợ Công nghệ Berlin, và nhân viên gian hàng vẫn đang làm quen với lượng khách đông đúc.',
    },
    {
      sentence:
        'According to our legal department, Ms. Ilunga is the most persuasive negotiator that our attorneys ------- ever worked with.',
      options: ['have', 'has', 'had', 'were'],
      answer: 0,
      explanation: {
        vi: 'So sánh nhất **the most persuasive** + **ever** nói về trải nghiệm tính đến nay → hiện tại hoàn thành; chủ ngữ **our attorneys** số nhiều → **have**. has sai hoà hợp chủ ngữ; had (quá khứ hoàn thành) cần một mốc quá khứ, trong khi động từ chính là **is**.',
        en: 'The superlative **the most persuasive** + **ever** describes experience up to now → Present Perfect; the subject **our attorneys** is plural → **have**. has breaks subject-verb agreement; had (Past Perfect) needs a past reference point, but the main verb is **is**.',
      },
      translation:
        'Theo phòng pháp chế, bà Ilunga là nhà đàm phán có sức thuyết phục nhất mà các luật sư của chúng tôi từng làm việc cùng.',
    },
    {
      sentence:
        'Mr. Gallagher ------- the warehouse on Pier Road for more than a decade and has no plans to sell it.',
      options: ['owns', 'has owned', 'is owning', 'has been owning'],
      answer: 1,
      explanation: {
        vi: '**for more than a decade** và "không có ý định bán" → việc sở hữu kéo dài đến nay, cần thì hoàn thành. **own** là động từ trạng thái nên không dùng tiếp diễn: chọn **has owned**, không chọn has been owning.',
        en: '**for more than a decade** and "has no plans to sell it" → ownership lasting until now, so a perfect tense is needed. **own** is a stative verb and is not used in the continuous: choose **has owned**, not has been owning.',
      },
      translation: 'Ông Gallagher đã sở hữu nhà kho trên đường Pier hơn mười năm nay và không có ý định bán nó.',
    },
    {
      sentence:
        'Many of our corporate clients ------- about longer delivery times lately, so we are reviewing our contracts with shipping partners.',
      options: ['complaining', 'will complain', 'have been complaining', 'had complained'],
      answer: 2,
      explanation: {
        vi: '**lately** (gần đây, tính đến nay) đi với thì hoàn thành, và việc phàn nàn lặp đi lặp lại cho đến hiện tại (**we are reviewing**) → **have been complaining**. had complained là quá khứ hoàn thành, cần một mốc quá khứ nên mâu thuẫn với vế hiện tại; complaining thiếu trợ động từ nên mệnh đề không có động từ chính.',
        en: '**lately** (recently, up to now) goes with a perfect tense, and the complaints have kept coming up to the present (**we are reviewing**) → **have been complaining**. had complained is the Past Perfect, which needs a past reference point and clashes with the present clause; complaining has no auxiliary, so the clause would lack a main verb.',
      },
      translation:
        'Gần đây nhiều khách hàng doanh nghiệp liên tục phàn nàn về thời gian giao hàng kéo dài, nên chúng tôi đang xem xét lại hợp đồng với các đối tác vận chuyển.',
    },
  ],
};
