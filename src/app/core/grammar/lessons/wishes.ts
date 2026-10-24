import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'wishes',
  intro: {
    vi: 'Sau **wish, if only, It\'s time, as if, would rather**, động từ bị "lùi thì" để diễn tả điều không có thật: quá khứ đơn cho hiện tại, **had V3** cho quá khứ. Part 5 kiểm tra điểm này bằng cách đặt dạng hiện tại hoặc will cạnh đáp án đã lùi thì.',
    en: "After **wish, if only, It's time, as if** and **would rather**, the verb shifts back a tense to express something unreal: the past simple for the present, **had + past participle** for the past. Part 5 tests this by placing a present form or will next to the backshifted key.",
  },
  mistakes: [
    {
      wrong: 'I wish our office [[has]] more meeting rooms; we are always short of space.',
      right: 'I wish our office [[had]] more meeting rooms; we are always short of space.',
      explanation: {
        vi: 'Ước điều trái với hiện tại (thực tế là văn phòng thiếu phòng) → sau **wish** dùng **quá khứ đơn**: had.',
        en: 'A wish about the present that is contrary to fact (the office really lacks rooms) → after **wish**, use the **past simple**: had.',
      },
    },
    {
      wrong: 'Ms. Bell wishes she [[attended]] the negotiation workshop last week.',
      right: 'Ms. Bell wishes she [[had attended]] the negotiation workshop last week.',
      explanation: {
        vi: 'Ước về quá khứ (**last week**, cô ấy đã không tham dự) → **wish + had V3**: had attended.',
        en: 'A wish about the past (**last week**; she did not attend) → **wish + had + past participle**: had attended.',
      },
    },
    {
      wrong: 'I wish the supplier [[will]] reply to our e-mails more quickly.',
      right: 'I wish the supplier [[would]] reply to our e-mails more quickly.',
      explanation: {
        vi: 'Muốn người khác thay đổi hành vi (phàn nàn) → **wish + S + would + V**. Không dùng will sau wish.',
        en: 'Wanting someone else to change their behaviour (a complaint) → **wish + subject + would + verb**. will is not used after wish.',
      },
    },
    {
      wrong: "It's time [[for us update]] our customer database.",
      right: "It's time [[for us to update]] our customer database.",
      explanation: {
        vi: 'Cấu trúc **It\'s time for + tân ngữ + to V**: phải có **to** trước động từ. Hoặc nói It\'s time we updated….',
        en: "The pattern is **It's time for + object + to-infinitive**: **to** is required before the verb. Alternatively, say It's time we updated….",
      },
    },
    {
      wrong: "I'd rather you [[to send]] the signed copy by courier.",
      right: "I'd rather you [[sent]] the signed copy by courier.",
      explanation: {
        vi: 'Khi chủ ngữ hai vế khác nhau, **would rather + S + quá khứ đơn** (nghĩa hiện tại/tương lai): you **sent**. Không dùng to V.',
        en: 'When the two subjects differ, use **would rather + subject + past simple** (with present/future meaning): you **sent**. A to-infinitive is not used.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Ba dạng của wish / if only', en: 'The three patterns of wish / if only' },
      body: {
        vi: '**wish** diễn tả mong muốn điều trái với thực tế. Động từ sau wish lùi một thì so với thời điểm được nói tới. **If only** có cùng cấu trúc nhưng cảm xúc mạnh hơn (giá mà…).',
        en: '**wish** expresses a desire for something contrary to reality. The verb after wish moves one tense back from the time being talked about. **If only** has the same patterns but stronger feeling.',
      },
      table: {
        head: [
          { vi: 'Ước về', en: 'Wish about' },
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Hiện tại (trái thực tế)', en: 'The present (contrary to fact)' }, 'wish + S + past simple / were', 'I wish I knew his number.'],
          [{ vi: 'Quá khứ (tiếc nuối)', en: 'The past (regret)' }, 'wish + S + had V3', 'I wish I had read the contract.'],
          [{ vi: 'Người/việc khác thay đổi', en: 'Someone/something else changing' }, 'wish + S + would + V', 'I wish the bus would come.'],
          [{ vi: 'Khả năng', en: 'Ability' }, 'wish + S + could + V', 'I wish I could join you.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Phân biệt với **hope**: hope dùng cho điều có thể xảy ra và đi với thì bình thường (I hope the client **signs** / **will sign** tomorrow). Còn **wish + to V** (= want, rất trang trọng) không phải câu ước: We wish to inform you that….',
          en: 'Do not confuse it with **hope**: hope is for things that may happen and takes normal tenses (I hope the client **signs** / **will sign** tomorrow). And **wish + to-infinitive** (= want, very formal) is not a wish about reality: We wish to inform you that….',
        },
      },
    },
    {
      heading: { vi: 'Ước hiện tại và ước quá khứ', en: 'Present wishes and past wishes' },
      body: {
        vi: 'Ước ở hiện tại dùng **quá khứ đơn**; với be, văn phong chuẩn dùng **were** cho mọi ngôi. Ước về quá khứ dùng **had + V3**. Hãy nhìn mốc thời gian (now, currently, last week, yesterday) để biết đang ước cho thời nào.',
        en: 'A present wish takes the **past simple**; with be, standard English uses **were** for every subject. A past wish takes **had + past participle**. Look at the time markers (now, currently, last week, yesterday) to see which time the wish is about.',
      },
      examples: [
        {
          en: 'The manager wishes the store **were** open on Sundays, but the lease does not allow it.',
          vi: 'Quản lý ước gì cửa hàng được mở cửa vào Chủ nhật, nhưng hợp đồng thuê không cho phép.',
        },
        {
          en: 'We wish we **had hired** a professional translator for last month\'s brochure.',
          vi: 'Chúng tôi ước gì đã thuê một biên dịch viên chuyên nghiệp cho cuốn giới thiệu tháng trước.',
        },
        {
          en: 'If only the shipment **had arrived** before the trade fair!',
          vi: 'Giá mà lô hàng đã đến trước hội chợ thương mại!',
        },
      ],
    },
    {
      heading: { vi: 'wish + would / could', en: 'wish + would / could' },
      points: [
        {
          vi: '**wish + S + would + V**: mong người khác (hoặc sự việc) thay đổi, thường là phàn nàn: I wish the printer **would work** properly. Không nói "I wish I would…" vì bản thân mình thì tự quyết được.',
          en: '**wish + subject + would + verb**: wanting another person (or thing) to change, often a complaint: I wish the printer **would work** properly. Do not say "I wish I would…", because you control your own actions.',
        },
        {
          vi: '**wish + S + could + V**: tiếc vì không có khả năng làm gì, dùng được cả với I: I wish I **could attend** the launch.',
          en: '**wish + subject + could + verb**: regret about not being able to do something; it works with I as well: I wish I **could attend** the launch.',
        },
      ],
      examples: [
        {
          en: 'Our staff wish management **would communicate** changes earlier.',
          vi: 'Nhân viên của chúng tôi mong ban quản lý thông báo các thay đổi sớm hơn.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Sau wish **không bao giờ** dùng will hoặc can. Gặp lựa chọn will/can trong câu có wish thì loại ngay.',
          en: 'After wish, **never** use will or can. If an option has will/can in a sentence with wish, cross it out immediately.',
        },
      },
    },
    {
      heading: { vi: "It's (high / about) time", en: "It's (high / about) time" },
      body: {
        vi: 'Diễn tả "đã đến lúc (thậm chí hơi muộn) phải làm gì". Có hai cấu trúc: **It\'s time + S + quá khứ đơn** (dù nghĩa là hiện tại) và **It\'s time (for + tân ngữ) + to V**. **high** và **about** nhấn mạnh rằng việc đó đáng lẽ phải làm từ trước.',
        en: "It means \"it is the right moment (or even rather late) to do something\". There are two patterns: **It's time + subject + past simple** (even though the meaning is present) and **It's time (for + object) + to-infinitive**. **high** and **about** stress that it should have been done already.",
      },
      examples: [
        {
          en: "It's high time the hotel **renovated** its lobby.",
          vi: 'Đã đến lúc khách sạn phải cải tạo sảnh rồi.',
        },
        {
          en: "It's time **for the committee to announce** the winners.",
          vi: 'Đã đến lúc ban tổ chức công bố người thắng cuộc.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Sau **It\'s time** có chủ ngữ riêng → quá khứ đơn (we **left**); có **for + tân ngữ** hoặc không có chủ ngữ → **to V** (for us **to leave**, time **to leave**).',
          en: "After **It's time**, a separate subject → past simple (we **left**); **for + object** or no subject → **to-infinitive** (for us **to leave**, time **to leave**).",
        },
      },
    },
    {
      heading: { vi: 'as if / as though', en: 'as if / as though' },
      body: {
        vi: '**as if / as though** (như thể là) đứng sau động từ như act, talk, look, behave, sound. Khi điều đó **không có thật**, động từ lùi thì: **quá khứ đơn / were** cho hiện tại, **had V3** cho quá khứ. Khi điều đó **có thể đúng**, vẫn dùng thì bình thường: It looks as if the meeting **is going to** run late.',
        en: '**as if / as though** follow verbs such as act, talk, look, behave and sound. When the comparison is **unreal**, the verb shifts back: **past simple / were** for the present, **had + past participle** for the past. When it **may well be true**, normal tenses are used: It looks as if the meeting **is going to** run late.',
      },
      examples: [
        {
          en: 'The new supervisor gives orders as if he **were** the CEO.',
          vi: 'Người giám sát mới ra lệnh như thể anh ta là tổng giám đốc.',
        },
        {
          en: 'She described the factory as though she **had worked** there for years, but she had only visited it once.',
          vi: 'Cô ấy mô tả nhà máy như thể đã làm việc ở đó nhiều năm, nhưng thật ra cô chỉ đến thăm một lần.',
        },
      ],
    },
    {
      heading: { vi: 'would rather + S + quá khứ đơn', en: 'would rather + subject + past simple' },
      points: [
        {
          vi: '**would rather + V nguyên mẫu**: chính chủ ngữ thích làm gì hơn: I would rather **take** the train.',
          en: '**would rather + base verb**: the subject\'s own preference: I would rather **take** the train.',
        },
        {
          vi: '**would rather + S khác + quá khứ đơn**: muốn người khác làm gì (nghĩa hiện tại/tương lai): I would rather you **took** the train. Phủ định: **didn\'t + V**.',
          en: "**would rather + another subject + past simple**: wanting someone else to do something (present/future meaning): I would rather you **took** the train. Negative: **didn't + verb**.",
        },
        {
          vi: '**would rather + S khác + had V3**: tiếc về việc người khác đã làm trong quá khứ: I would rather you **had told** me earlier.',
          en: '**would rather + another subject + had + past participle**: regret about what someone else did in the past: I would rather you **had told** me earlier.',
        },
      ],
      examples: [
        {
          en: "The client would rather we **didn't change** the design at this stage.",
          vi: 'Khách hàng muốn chúng tôi không thay đổi thiết kế ở giai đoạn này.',
        },
      ],
    },
    {
      heading: { vi: 'Cách làm câu ước và giả định trong Part 5', en: 'Attacking wishes and unreal forms in Part 5' },
      points: [
        {
          vi: 'Thấy **wish / If only** → loại will, can và các thì hiện tại; mốc hiện tại → quá khứ đơn/were; mốc quá khứ → **had V3**; mong người khác thay đổi → **would + V**; khả năng → **could + V**.',
          en: 'See **wish / If only** → cross out will, can and present tenses; present time → past simple/were; past time → **had + past participle**; wanting someone else to change → **would + verb**; ability → **could + verb**.',
        },
        {
          vi: 'Thấy **It\'s (high/about) time** → có chủ ngữ thì chọn quá khứ đơn; có **for + tân ngữ** thì chọn **to V**.',
          en: "See **It's (high/about) time** → with a subject, choose the past simple; with **for + object**, choose a **to-infinitive**.",
        },
        {
          vi: 'Thấy **as if / as though** kèm một chi tiết cho biết điều đó không có thật → quá khứ đơn/were hoặc had V3.',
          en: 'See **as if / as though** plus a detail showing the comparison is unreal → past simple/were or had + past participle.',
        },
        {
          vi: 'Thấy **would rather + chủ ngữ khác** → quá khứ đơn (didn\'t + V cho phủ định), không chọn V nguyên mẫu hay to V.',
          en: "See **would rather + a different subject** → past simple (didn't + verb for the negative), not a base verb or to-infinitive.",
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Many employees wish the cafeteria ------- open later, since it currently closes at 2 p.m.',
      options: ['stays', 'will stay', 'has stayed', 'stayed'],
      answer: 3,
      explanation: {
        vi: 'Ước điều trái hiện tại (**currently closes at 2 p.m.**) → **wish + quá khứ đơn**: stayed. will stay sai vì không dùng will sau wish; stays là hiện tại.',
        en: 'A wish contrary to the present (**currently closes at 2 p.m.**) → **wish + past simple**: stayed. will stay is wrong because will is not used after wish; stays is present.',
      },
      translation: 'Nhiều nhân viên ước gì căng tin mở cửa muộn hơn, vì hiện nó đóng cửa lúc 2 giờ chiều.',
    },
    {
      sentence: 'Mr. Lindqvist wishes he ------- the extended warranty when he bought his laptop last year.',
      options: ['has purchased', 'had purchased', 'would purchase', 'purchases'],
      answer: 1,
      explanation: {
        vi: 'Ước về quá khứ (**when he bought … last year**) → **wish + had V3**: had purchased. would purchase dùng cho mong muốn thay đổi trong tương lai, không hợp với last year.',
        en: 'A wish about the past (**when he bought … last year**) → **wish + had + past participle**: had purchased. would purchase is for wanting a future change and does not fit last year.',
      },
      translation: 'Ông Lindqvist ước gì mình đã mua gói bảo hành mở rộng khi mua máy tính xách tay năm ngoái.',
    },
    {
      sentence: 'The tenants wish the construction crew next door ------- making so much noise early in the morning.',
      options: ['will stop', 'stops', 'would stop', 'has stopped'],
      answer: 2,
      explanation: {
        vi: 'Mong người khác (**the construction crew**) thay đổi hành vi gây khó chịu → **wish + S + would + V**: would stop. will stop sai vì sau wish không dùng will.',
        en: 'Wanting other people (**the construction crew**) to change an annoying behaviour → **wish + subject + would + verb**: would stop. will stop is wrong because will is not used after wish.',
      },
      translation: 'Những người thuê nhà mong đội thi công bên cạnh thôi gây ồn ào như vậy vào sáng sớm.',
    },
    {
      sentence: 'I wish I ------- attend the trade show in Milan, but I have to stay here for the annual audit.',
      options: ['could', 'can', 'will', 'am able'],
      answer: 0,
      explanation: {
        vi: 'Tiếc vì không có khả năng làm gì (**but I have to stay here**) → **wish + could + V**: could attend. can và will không dùng sau wish; am able thiếu "to".',
        en: 'Regret about not being able to do something (**but I have to stay here**) → **wish + could + verb**: could attend. can and will are not used after wish; am able lacks "to".',
      },
      translation: 'Tôi ước gì mình có thể tham dự triển lãm thương mại ở Milan, nhưng tôi phải ở lại đây cho đợt kiểm toán thường niên.',
    },
    {
      sentence: 'It is high time the company ------- its outdated accounting software with a cloud-based system.',
      options: ['replace', 'replacing', 'will replace', 'replaced'],
      answer: 3,
      explanation: {
        vi: '**It is high time + chủ ngữ (the company)** → động từ chia **quá khứ đơn** dù nghĩa là hiện tại: replaced. replace và will replace không lùi thì.',
        en: '**It is high time + subject (the company)** → the verb takes the **past simple** even though the meaning is present: replaced. replace and will replace are not backshifted.',
      },
      translation: 'Đã đến lúc công ty phải thay phần mềm kế toán lỗi thời bằng một hệ thống dựa trên điện toán đám mây.',
    },
    {
      sentence: "It's time ------- the marketing team to review the results of the spring advertising campaign.",
      options: ['that', 'for', 'of', 'to'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống là **tân ngữ + to V** (the marketing team **to review**) → cấu trúc **It\'s time for + O + to V**. that cần một mệnh đề có động từ chia thì.',
        en: "The blank is followed by **object + to-infinitive** (the marketing team **to review**) → the pattern **It's time for + object + to-infinitive**. that would need a clause with a finite verb.",
      },
      translation: 'Đã đến lúc nhóm marketing xem xét kết quả của chiến dịch quảng cáo mùa xuân.',
    },
    {
      sentence: 'Mr. Grant spoke about the merger as if it ------- already been finalized, although negotiations are still under way.',
      options: ['have', 'is', 'had', 'would'],
      answer: 2,
      explanation: {
        vi: 'Điều được so sánh không có thật (**negotiations are still under way**) và động từ chính ở quá khứ (**spoke**) → **as if + had V3**: had already been finalized. have sai hoà hợp với chủ ngữ it và không lùi thì; is và would không đi với been.',
        en: 'The comparison is unreal (**negotiations are still under way**) and the main verb is past (**spoke**) → **as if + had + past participle**: had already been finalized. have does not agree with it and is not backshifted; is and would cannot be followed by been.',
      },
      translation: 'Ông Grant nói về vụ sáp nhập như thể nó đã được chốt xong, dù các cuộc đàm phán vẫn đang diễn ra.',
    },
    {
      sentence: 'The new intern handles difficult client calls as though she ------- a sales manager with years of experience.',
      options: ['were', 'be', 'being', 'been'],
      answer: 0,
      explanation: {
        vi: 'Cô ấy chỉ là thực tập sinh (**intern**) nên việc là quản lý nhiều năm kinh nghiệm không có thật → **as though + were** (cho mọi ngôi). be, being, been không làm động từ chính của mệnh đề.',
        en: 'She is only an **intern**, so being an experienced manager is unreal → **as though + were** (for every subject). be, being and been cannot be the main verb of the clause.',
      },
      translation: 'Cô thực tập sinh mới xử lý những cuộc gọi khó của khách hàng như thể cô ấy là một quản lý bán hàng nhiều năm kinh nghiệm.',
    },
    {
      sentence: 'Ms. Sato would rather her assistant ------- the original contracts by courier than by regular mail.',
      options: ['sending', 'to send', 'will send', 'sent'],
      answer: 3,
      explanation: {
        vi: '**would rather + chủ ngữ khác (her assistant)** → động từ chia **quá khứ đơn** với nghĩa hiện tại/tương lai: sent. to send và will send không dùng trong cấu trúc này.',
        en: '**would rather + a different subject (her assistant)** → the verb takes the **past simple** with present/future meaning: sent. to send and will send are not used in this pattern.',
      },
      translation: 'Cô Sato muốn trợ lý gửi bản hợp đồng gốc bằng dịch vụ chuyển phát hơn là gửi qua bưu điện thường.',
    },
    {
      sentence: 'If only the venue ------- earlier, we would not have had to hold the seminar in such a small room.',
      options: ['was booking', 'had been booked', 'has been booked', 'would book'],
      answer: 1,
      explanation: {
        vi: '**If only** về một việc đã qua (vế sau có **would not have had to**) → **had V3**; **the venue** được đặt nên dùng bị động: had been booked. has been booked là hiện tại hoàn thành, không lùi thì.',
        en: '**If only** about a past event (the second clause has **would not have had to**) → **had + past participle**; **the venue** is booked by someone, so the passive is needed: had been booked. has been booked is Present Perfect and not backshifted.',
      },
      translation: 'Giá mà địa điểm được đặt sớm hơn, chúng tôi đã không phải tổ chức hội thảo trong một căn phòng nhỏ như vậy.',
    },
  ],
};
