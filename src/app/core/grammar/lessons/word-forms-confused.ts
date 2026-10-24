import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'word-forms-confused',
  intro: {
    vi: 'Bài này phân biệt các cặp từ **cùng gốc, cùng từ loại nhưng khác nghĩa** như considerable/considerate hay hard/hardly. Trong Part 5 và Part 6, đề hay đưa cả hai từ của một cặp vào bốn lựa chọn: vị trí trong câu không còn giúp được nữa, bạn phải dựa vào **nghĩa** và **từ đi kèm**.',
    en: 'This lesson separates pairs of words that share **a root and a part of speech but differ in meaning**, such as considerable/considerate or hard/hardly. In Part 5 and Part 6, the test often puts both words of a pair among the options: sentence position no longer helps, so you must rely on **meaning** and the **words around the blank**.',
  },
  mistakes: [
    {
      wrong: 'The sales and marketing teams will each present their [[respectable]] budgets on Friday.',
      right: 'The sales and marketing teams will each present their [[respective]] budgets on Friday.',
      explanation: {
        vi: 'Ý cần nói là ngân sách **riêng của từng nhóm** → **respective**. respectable nghĩa là "đáng kính, đứng đắn" hoặc "khá tốt", không mang nghĩa "của mỗi bên".',
        en: 'The meaning is each team\'s **own** budget → **respective**. respectable means "socially acceptable" or "fairly good", not "belonging to each one".',
      },
    },
    {
      wrong: 'Ms. Barnes is an [[industrial]] assistant who often stays late to finish her reports.',
      right: 'Ms. Barnes is an [[industrious]] assistant who often stays late to finish her reports.',
      explanation: {
        vi: 'Mô tả một người **siêng năng, chăm chỉ** phải dùng **industrious**. industrial nghĩa là "thuộc về công nghiệp" (industrial park, industrial equipment), không dùng để nói về tính cách.',
        en: 'To describe a **hard-working** person, use **industrious**. industrial means "relating to industry" (industrial park, industrial equipment) and does not describe character.',
      },
    },
    {
      wrong: 'Online orders have increased sharply [[late]], so we are hiring extra warehouse staff.',
      right: 'Online orders have increased sharply [[lately]], so we are hiring extra warehouse staff.',
      explanation: {
        vi: 'Thì Present Perfect **have increased** đi với nghĩa "gần đây" → **lately**. late nghĩa là "muộn, trễ" (arrive late, work late), không mang nghĩa "gần đây".',
        en: 'The Present Perfect **have increased** goes with the meaning "recently" → **lately**. late means "not on time" (arrive late, work late), not "recently".',
      },
    },
    {
      wrong: "Our auditors are [[close]] reviewing last year's travel expenses.",
      right: "Our auditors are [[closely]] reviewing last year's travel expenses.",
      explanation: {
        vi: 'Nghĩa cần ở đây là xem xét **kỹ lưỡng** → **closely**. close khi làm trạng từ nói về khoảng cách gần (stay close, follow close behind), không mang nghĩa "kỹ lưỡng".',
        en: 'The meaning needed here is **carefully** → **closely**. As an adverb, close refers to physical nearness (stay close, follow close behind), not to care or attention.',
      },
    },
    {
      wrong: 'The new branch is conveniently located [[nearly]] Central Station.',
      right: 'The new branch is conveniently located [[near]] Central Station.',
      explanation: {
        vi: 'Muốn nói "gần (về vị trí)" phải dùng **near** (ở đây là giới từ). **nearly** nghĩa là "gần như, suýt" (nearly finished, nearly 300 guests) và không đứng trước danh từ chỉ địa điểm.',
        en: 'To say "close to (a place)", use **near** (a preposition here). **nearly** means "almost" (nearly finished, nearly 300 guests) and cannot come before a place noun like this.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Khi vị trí trong câu không đủ để chọn', en: 'When sentence position is not enough' },
      body: {
        vi: 'Ở bài 1.1 và 1.2, bạn chọn từ nhờ hậu tố và vị trí. Nhưng có những cặp từ **cùng gốc, cùng từ loại** mà nghĩa khác hẳn: considerable (đáng kể) và considerate (chu đáo) đều là tính từ, đều đứng được trước danh từ. Gặp những cặp này, bạn phải nhớ nghĩa của từng từ và nhìn thêm **danh từ, giới từ hoặc mệnh đề đi kèm**.',
        en: 'In lessons 1.1 and 1.2, you chose words by suffix and position. But some pairs share **a root and a part of speech** while meaning very different things: considerable (large in amount) and considerate (thoughtful) are both adjectives and can both come before a noun. With these pairs, you must know what each word means and look at the **noun, preposition or clause that goes with it**.',
      },
      examples: [
        {
          en: 'The upgrade will save the company a **considerable** amount of money.',
          vi: 'Việc nâng cấp sẽ giúp công ty tiết kiệm được một khoản tiền đáng kể.',
        },
        {
          en: 'Our drivers are trained to be **considerate** of other road users.',
          vi: 'Tài xế của chúng tôi được đào tạo để biết nghĩ cho những người tham gia giao thông khác.',
        },
      ],
    },
    {
      heading: { vi: 'Các cặp tính từ dễ nhầm (phần 1)', en: 'Confusable adjective pairs (part 1)' },
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Cụm hay gặp', en: 'Typical phrases' },
        ],
        rows: [
          ['considerable', { vi: 'Đáng kể, lớn (về lượng, mức độ)', en: 'Large in amount or degree' }, 'a considerable amount, considerable experience'],
          ['considerate', { vi: 'Chu đáo, biết nghĩ cho người khác', en: 'Thoughtful towards other people' }, 'considerate of others, a considerate host'],
          ['economic', { vi: 'Thuộc về kinh tế', en: 'Relating to the economy' }, 'economic growth, economic policy'],
          ['economical', { vi: 'Tiết kiệm, ít tốn kém', en: 'Saving money; not wasteful' }, 'an economical car, an economical choice'],
          ['reliable', { vi: 'Đáng tin cậy', en: 'Able to be trusted or depended on' }, 'a reliable supplier, reliable data'],
          ['reliant', { vi: 'Phụ thuộc (đi với on / upon)', en: 'Dependent (used with on / upon)' }, 'reliant on exports'],
          ['successful', { vi: 'Thành công', en: 'Achieving the desired result' }, 'a successful launch, a successful candidate'],
          ['successive', { vi: 'Liên tiếp, nối tiếp nhau', en: 'Following one after another' }, 'three successive years, each successive quarter'],
          ['sensible', { vi: 'Hợp lý, khôn ngoan, thực tế', en: 'Reasonable; showing good judgment' }, 'a sensible decision, sensible shoes'],
          ['sensitive', { vi: 'Nhạy cảm, dễ bị ảnh hưởng; cần giữ kín', en: 'Easily affected; needing careful handling' }, 'sensitive to light, sensitive data'],
        ],
      },
      examples: [
        {
          en: 'Hybrid taxis are more **economical** to operate than diesel models.',
          vi: 'Xe taxi hybrid vận hành tiết kiệm hơn các mẫu xe chạy dầu diesel.',
        },
        {
          en: "The country's **economic** recovery has boosted demand for office space.",
          vi: 'Sự phục hồi kinh tế của đất nước đã làm tăng nhu cầu thuê văn phòng.',
        },
        {
          en: 'Revenue at Harlow Logistics has grown for four **successive** years.',
          vi: 'Doanh thu của Harlow Logistics đã tăng trong bốn năm liên tiếp.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**economic** đôi khi còn mang nghĩa "có lãi, đáng làm xét về chi phí" (It is no longer economic to repair the old printers). Còn khi nói một vật hay một cách làm **tiết kiệm, ít hao tốn** (xe, máy móc, phương án), hãy dùng **economical**. Trạng từ **economically** dùng chung cho cả hai nghĩa.',
          en: '**economic** can also mean "profitable, worth doing in terms of cost" (It is no longer economic to repair the old printers). But to say that a thing or a method **saves money and is not wasteful** (a car, a machine, an option), use **economical**. The adverb **economically** serves both meanings.',
        },
      },
    },
    {
      heading: { vi: 'Các cặp tính từ dễ nhầm (phần 2)', en: 'Confusable adjective pairs (part 2)' },
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Cụm hay gặp', en: 'Typical phrases' },
        ],
        rows: [
          ['comprehensive', { vi: 'Toàn diện, đầy đủ, bao quát', en: 'Complete; covering everything' }, 'comprehensive insurance, a comprehensive review'],
          ['comprehensible', { vi: 'Dễ hiểu, có thể hiểu được', en: 'Able to be understood' }, 'comprehensible to customers'],
          ['respectable', { vi: 'Đáng kính, đứng đắn; (kết quả) khá tốt', en: 'Socially acceptable; (of results) fairly good' }, 'a respectable firm, a respectable profit'],
          ['respective', { vi: 'Riêng của từng người, từng bên', en: 'Belonging to each one separately' }, 'their respective departments'],
          ['respectful', { vi: 'Tỏ ra tôn trọng, lễ phép', en: 'Showing respect' }, 'respectful of local customs'],
          ['confident', { vi: 'Tự tin, tin chắc', en: 'Sure; self-assured' }, 'confident that..., confident of success'],
          ['confidential', { vi: 'Bí mật, cần giữ kín', en: 'Secret; private' }, 'confidential information, strictly confidential'],
          ['industrial', { vi: 'Thuộc về công nghiệp', en: 'Relating to industry' }, 'an industrial park, industrial equipment'],
          ['industrious', { vi: 'Cần cù, siêng năng', en: 'Hard-working' }, 'an industrious employee'],
        ],
      },
      examples: [
        {
          en: 'The two branch managers will present their **respective** sales targets at the meeting.',
          vi: 'Hai quản lý chi nhánh sẽ trình bày chỉ tiêu doanh số của chi nhánh mình tại cuộc họp.',
        },
        {
          en: 'All applications will be treated as strictly **confidential**.',
          vi: 'Mọi hồ sơ ứng tuyển sẽ được giữ bí mật tuyệt đối.',
        },
        {
          en: 'The firm hires **industrious** graduates and trains them in its **industrial** design studio.',
          vi: 'Công ty tuyển những sinh viên mới tốt nghiệp chăm chỉ và đào tạo họ tại xưởng thiết kế công nghiệp của mình.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**respective** gần như luôn đứng sau tính từ sở hữu hoặc **the** và trước danh từ số nhiều: their respective offices. Không dùng nó sau a/an. Đừng nhầm với trạng từ **respectively** (lần lượt), thường đứng cuối mệnh đề: Ms. Cho and Mr. Diaz were named CFO and COO, **respectively**.',
          en: '**respective** almost always follows a possessive or **the** and comes before a plural noun: their respective offices. It is not used after a/an. Do not confuse it with the adverb **respectively** (in the order given), which usually ends the clause: Ms. Cho and Mr. Diaz were named CFO and COO, **respectively**.',
        },
      },
    },
    {
      heading: { vi: 'Trạng từ hai dạng: có -ly và không -ly', en: 'Adverbs with two forms: with and without -ly' },
      body: {
        vi: 'late, hard, high, near, close, short vừa là tính từ vừa là trạng từ, nên tự chúng đã làm trạng từ được mà không cần -ly. Khi thêm **-ly**, ta thường được một trạng từ **mang nghĩa khác hẳn**, chứ không phải "bản trạng từ" của dạng gốc.',
        en: 'late, hard, high, near, close and short are both adjectives and adverbs, so they already work as adverbs without -ly. Adding **-ly** usually gives an adverb with **a different meaning**, not simply the "adverb version" of the base word.',
      },
      points: [
        {
          vi: '**lately** thường đi với thì hiện tại hoàn thành: Have you heard from the supplier lately?',
          en: '**lately** usually goes with the Present Perfect: Have you heard from the supplier lately?',
        },
        {
          vi: '**near** còn là giới từ (near the station). Muốn nói "gần như" trong văn viết, hãy chọn **nearly**.',
          en: '**near** is also a preposition (near the station). To say "almost" in written English, choose **nearly**.',
        },
        {
          vi: '**close to** + con số cũng có nghĩa "gần, xấp xỉ" (close to 500 guests); **closely** không dùng với nghĩa này.',
          en: '**close to** + a number also means "nearly" (close to 500 guests); **closely** is not used this way.',
        },
      ],
      table: {
        head: [
          { vi: 'Từ', en: 'Word' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          ['late', { vi: 'Muộn, trễ; vào cuối một khoảng thời gian', en: 'Not on time; near the end of a period' }, 'arrive late, work late, late in the year'],
          ['lately', { vi: 'Gần đây', en: 'Recently' }, 'Prices have risen lately.'],
          ['hard', { vi: 'Chăm chỉ, cật lực; mạnh', en: 'With great effort; forcefully' }, 'work hard, try hard'],
          ['hardly', { vi: 'Hầu như không', en: 'Almost not; barely' }, 'can hardly hear, hardly any time'],
          ['high', { vi: 'Cao, lên cao (về độ cao, vị trí)', en: 'At or to a great height' }, 'fly high, aim high'],
          ['highly', { vi: 'Rất, ở mức độ cao', en: 'Very; to a great degree' }, 'highly qualified, think highly of'],
          ['near', { vi: 'Gần (về khoảng cách, thời gian)', en: 'Close in space or time' }, 'come near, draw near'],
          ['nearly', { vi: 'Gần như, suýt', en: 'Almost' }, 'nearly 200 guests, nearly finished'],
          ['close', { vi: 'Gần, sát (về khoảng cách)', en: 'Near in space' }, 'stay close, follow close behind'],
          ['closely', { vi: 'Kỹ lưỡng, chặt chẽ; mật thiết', en: 'Carefully; in a close relationship' }, 'monitor closely, work closely with'],
          ['short', { vi: 'Đột ngột, chưa tới mức dự kiến (trong cụm cố định)', en: 'Suddenly; before the expected point (in set phrases)' }, 'stop short, cut short, fall short of'],
          ['shortly', { vi: 'Sớm, chẳng bao lâu nữa', en: 'Soon' }, 'shortly after, will arrive shortly'],
        ],
      },
      examples: [
        {
          en: 'The keynote speaker arrived **late** because her flight was delayed.',
          vi: 'Diễn giả chính đến muộn vì chuyến bay của cô ấy bị hoãn.',
        },
        {
          en: 'Demand for our catering service has grown **lately**.',
          vi: 'Gần đây nhu cầu đối với dịch vụ tiệc của chúng tôi đã tăng lên.',
        },
        {
          en: 'The finance and legal teams will work **closely** together during the merger.',
          vi: 'Bộ phận tài chính và bộ phận pháp chế sẽ phối hợp chặt chẽ với nhau trong quá trình sáp nhập.',
        },
        {
          en: 'The trade fair attracted **nearly** 2,000 visitors on its opening day.',
          vi: 'Hội chợ thương mại đã thu hút gần 2.000 khách tham quan trong ngày khai mạc.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**hardly** đã mang nghĩa phủ định ("hầu như không"), nên không dùng kèm not hay never: viết "We can hardly hear the speaker", không viết "We can\'t hardly hear". Hay gặp: **hardly any** (hầu như không có), **hardly ever** (hầu như không bao giờ). Và nhớ: "He hardly works" nghĩa là "anh ấy hầu như không làm việc", ngược hẳn với "He works hard".',
          en: '**hardly** is already negative ("almost not"), so do not add not or never: write "We can hardly hear the speaker", not "We can\'t hardly hear". Common phrases: **hardly any** (almost none) and **hardly ever** (almost never). And remember: "He hardly works" means he barely works at all, the opposite of "He works hard".',
        },
      },
    },
    {
      heading: { vi: 'Tín hiệu giúp chọn đúng từ trong cặp', en: 'Cues that pick the right word of the pair' },
      table: {
        head: [
          { vi: 'Tín hiệu trong câu', en: 'Cue in the sentence' },
          { vi: 'Chọn', en: 'Choose' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [{ vi: 'Theo sau là on / upon', en: 'Followed by on / upon' }, 'reliant', 'heavily reliant on imports'],
          [{ vi: 'Chủ ngữ là người + mệnh đề that', en: 'Person subject + that-clause' }, 'confident', 'We are confident that sales will recover.'],
          [{ vi: 'Theo sau là of others / of other guests', en: 'Followed by of others / of other guests' }, 'considerate', 'considerate of other passengers'],
          [{ vi: 'Theo sau là to + nhiệt độ, ánh sáng, giá cả…', en: 'Followed by to + heat, light, price…' }, 'sensitive', 'sensitive to price changes'],
          [{ vi: 'Số đếm + danh từ thời gian số nhiều, nghĩa "liên tiếp" (nhất là khi câu nói về sụt giảm, thua lỗ)', en: 'Number + plural time noun, meaning "in a row" (especially when the sentence describes a decline or a loss)' }, 'successive', 'six successive months'],
          [{ vi: 'Tính từ sở hữu + danh từ số nhiều, nghĩa "của mỗi bên"', en: 'Possessive + plural noun, meaning "each one\'s own"' }, 'respective', 'their respective offices'],
          [{ vi: 'Danh từ chỉ thông tin, tài liệu cần giữ kín', en: 'Noun for information or documents kept secret' }, 'confidential', 'confidential client records'],
          [{ vi: 'Thì hiện tại hoàn thành, nghĩa "gần đây"', en: 'Present Perfect, meaning "recently"' }, 'lately', 'Costs have risen lately.'],
          [{ vi: 'Ngay trước tính từ hoặc V3, nghĩa "rất"', en: 'Right before an adjective or V3, meaning "very"' }, 'highly', 'highly experienced, highly recommended'],
          [{ vi: 'Ngay trước after / before, nghĩa "ngay, chẳng bao lâu"', en: 'Right before after / before, meaning "soon"' }, 'shortly', 'shortly before noon'],
          [{ vi: 'can / could + động từ, nghĩa "hầu như không"', en: 'can / could + verb, meaning "almost not"' }, 'hardly', 'can hardly read the label'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Dịch thử cụm ngắn quanh chỗ trống: "a considerate amount" thành "một khoản tiền chu đáo", "sales fell for three successful quarters" thành "doanh số giảm trong ba quý thành công". Nghe vô lý là loại ngay.',
          en: 'Translate the short phrase around the blank: "a considerate amount" becomes "a thoughtful amount", "sales fell for three successful quarters" contradicts itself. If it sounds absurd, eliminate it.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu hỏi dạng này trong Part 5', en: 'Attacking these items in Part 5' },
      points: [
        {
          vi: 'Nhận dạng: có hai lựa chọn cùng gốc và cùng từ loại (reliable/reliant, hard/hardly). Trước hết loại các lựa chọn sai từ loại (danh từ, động từ) như ở bài 1.2.',
          en: 'Spot it: two options share a root and a part of speech (reliable/reliant, hard/hardly). First eliminate the options with the wrong part of speech (nouns, verbs), as in lesson 1.2.',
        },
        {
          vi: 'Nhìn từ đi kèm: giới từ phía sau (on, to, of), mệnh đề that, danh từ được bổ nghĩa là người hay vật, dấu hiệu thời gian như thì hiện tại hoàn thành.',
          en: 'Look at the company the word keeps: the preposition after it (on, to, of), a that-clause, whether the noun is a person or a thing, and time cues such as the Present Perfect.',
        },
        {
          vi: 'Với trạng từ, hỏi xem câu có cần nghĩa đặc biệt của dạng -ly không: hầu như không (hardly), gần đây (lately), rất (highly), gần như (nearly), kỹ lưỡng (closely), sớm (shortly). Nếu chỉ cần nghĩa gốc (muộn, chăm chỉ, cao, gần, đột ngột) thì chọn dạng không -ly.',
          en: 'For adverbs, ask whether the sentence needs the special -ly meaning: almost not (hardly), recently (lately), very (highly), almost (nearly), carefully (closely), soon (shortly). If it only needs the basic meaning (not on time, with effort, at a height, nearby, suddenly), choose the form without -ly.',
        },
        {
          vi: 'Cuối cùng, đọc lại cả câu với đáp án đã chọn để chắc nghĩa không mâu thuẫn với phần còn lại.',
          en: 'Finally, reread the whole sentence with your choice to make sure the meaning does not clash with the rest.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'Hotel guests are kindly asked to be ------- of others by keeping noise to a minimum after 10 P.M.',
      options: ['considerable', 'considerate', 'consideration', 'considerably'],
      answer: 1,
      explanation: {
        vi: 'Sau **be** và trước **of others** cần một tính từ chỉ cách cư xử với người khác: **considerate** (chu đáo, biết nghĩ cho người khác). considerable cũng là tính từ nhưng nghĩa là "đáng kể" về lượng, mức độ, nên không hợp nghĩa; consideration và considerably sai từ loại.',
        en: 'After **be** and before **of others**, we need an adjective about behaviour towards other people: **considerate** (thoughtful). considerable is also an adjective but means "large in amount or degree", which makes no sense here; consideration and considerably are the wrong parts of speech.',
      },
      translation: 'Kính đề nghị quý khách lưu trú tại khách sạn biết nghĩ cho người khác bằng cách hạn chế tối đa tiếng ồn sau 10 giờ tối.',
    },
    {
      sentence: 'Analysts expect ------- growth in the region to slow next year as interest rates continue to rise.',
      options: ['economical', 'economics', 'economic', 'economize'],
      answer: 2,
      explanation: {
        vi: '**growth in the region** là sự tăng trưởng của nền kinh tế, nên cần **economic** (thuộc về kinh tế). economical nghĩa là "tiết kiệm, ít tốn kém", không dùng để mô tả sự tăng trưởng; economics là danh từ (kinh tế học), economize là động từ.',
        en: '**growth in the region** is growth of the economy, so we need **economic** (relating to the economy). economical means "saving money", which cannot describe growth; economics is a noun (the subject) and economize is a verb.',
      },
      translation: 'Các nhà phân tích dự đoán tăng trưởng kinh tế trong khu vực sẽ chậm lại vào năm tới khi lãi suất tiếp tục tăng.',
    },
    {
      sentence: 'Sales at the Dalton Street store have fallen for three ------- quarters, prompting a review of its pricing strategy.',
      options: ['successful', 'successfully', 'succession', 'successive'],
      answer: 3,
      explanation: {
        vi: 'Số đếm **three** + danh từ số nhiều **quarters**, cùng động từ **have fallen**, cho thấy cần nghĩa "liên tiếp" → **successive**. successful (thành công) mâu thuẫn với việc doanh số sụt giảm; successfully là trạng từ, succession là danh từ.',
        en: 'The number **three** + the plural noun **quarters**, together with **have fallen**, calls for the meaning "one after another" → **successive**. successful clashes with falling sales; successfully is an adverb and succession is a noun.',
      },
      translation: 'Doanh số của cửa hàng trên phố Dalton đã giảm trong ba quý liên tiếp, dẫn đến việc rà soát lại chiến lược giá của cửa hàng.',
    },
    {
      sentence: 'Many small hotels on Kessler Island are heavily ------- on summer tourism for most of their annual income.',
      options: ['reliant', 'reliable', 'reliance', 'reliably'],
      answer: 0,
      explanation: {
        vi: 'Giới từ **on** phía sau (và trạng từ **heavily** phía trước) là dấu hiệu của **reliant on** (phụ thuộc vào). reliable nghĩa là "đáng tin cậy" và không đi với on; reliance là danh từ, reliably là trạng từ.',
        en: 'The preposition **on** after the blank (with **heavily** before it) signals **reliant on** (dependent on). reliable means "trustworthy" and is not followed by on; reliance is a noun and reliably an adverb.',
      },
      translation: 'Nhiều khách sạn nhỏ trên đảo Kessler phụ thuộc nặng nề vào du lịch mùa hè để có phần lớn thu nhập hằng năm.',
    },
    {
      sentence: 'The safety manual was rewritten in plain language so that it would be ------- to every worker on the factory floor.',
      options: ['comprehensive', 'comprehension', 'comprehensible', 'comprehensively'],
      answer: 2,
      explanation: {
        vi: 'Sổ tay được viết lại bằng **plain language** (ngôn ngữ đơn giản) để công nhân hiểu được, và phía sau là **to every worker** → **comprehensible** (dễ hiểu). comprehensive nghĩa là "toàn diện, đầy đủ", không khớp với ý "viết cho đơn giản" và không đi với to + người.',
        en: 'The manual was rewritten in **plain language** so workers could understand it, and **to every worker** follows → **comprehensible** (understandable). comprehensive means "complete, covering everything", which does not fit the idea of simple wording and is not followed by to + person.',
      },
      translation: 'Sổ tay an toàn đã được viết lại bằng ngôn ngữ đơn giản để mọi công nhân trong xưởng đều có thể hiểu được.',
    },
    {
      sentence: 'Ms. Alvarez is ------- that the new Lisbon branch will become profitable within its first two years.',
      options: ['confident', 'confidential', 'confidence', 'confidentially'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ là người (**Ms. Alvarez**) và theo sau là mệnh đề **that** → **confident that** (tin chắc rằng). confidential (bí mật) dùng cho thông tin, tài liệu, không dùng để nói một người tin chắc điều gì; confidence là danh từ, confidentially là trạng từ.',
        en: 'The subject is a person (**Ms. Alvarez**) and a **that**-clause follows → **confident that** (sure that). confidential (secret) describes information or documents, not a person who is sure of something; confidence is a noun and confidentially an adverb.',
      },
      translation: 'Cô Alvarez tin chắc rằng chi nhánh mới ở Lisbon sẽ có lãi trong vòng hai năm đầu tiên.',
    },
    {
      sentence: 'These laboratory test kits must be stored in a cool, dark room because they are highly ------- to heat and light.',
      options: ['sensible', 'sensitive', 'sensibly', 'sensation'],
      answer: 1,
      explanation: {
        vi: 'Cụm **to heat and light**, cùng với **highly**, cho thấy cần nghĩa "dễ bị ảnh hưởng bởi" → **sensitive to** (nhạy cảm với). sensible (hợp lý, khôn ngoan) mô tả quyết định hay con người, không dùng cho bộ xét nghiệm dễ hỏng vì nhiệt; sensibly là trạng từ, sensation là danh từ.',
        en: 'The phrase **to heat and light**, together with **highly**, calls for the meaning "easily affected by" → **sensitive to**. sensible (reasonable, wise) describes decisions or people, not test kits damaged by heat; sensibly is an adverb and sensation a noun.',
      },
      translation: 'Các bộ dụng cụ xét nghiệm này phải được bảo quản trong phòng mát và tối vì chúng rất nhạy cảm với nhiệt độ và ánh sáng.',
    },
    {
      sentence: 'The new ventilation system in the open-plan office is so quiet that employees can ------- hear it.',
      options: ['hard', 'harder', 'hardness', 'hardly'],
      answer: 3,
      explanation: {
        vi: 'Cấu trúc **so quiet that** cho thấy nhân viên **hầu như không** nghe thấy hệ thống → **hardly**. hard (chăm chỉ, mạnh) không mang nghĩa này và không đứng giữa **can** với động từ chính như vậy; harder và hardness cũng sai.',
        en: '**so quiet that** tells us employees can **barely** hear the system → **hardly** (almost not). hard means "with effort" or "forcefully" and cannot sit between **can** and the main verb like this; harder and hardness are also wrong.',
      },
      translation: 'Hệ thống thông gió mới trong văn phòng không gian mở chạy êm đến mức nhân viên hầu như không nghe thấy tiếng.',
    },
    {
      sentence: "Admission to the company's management trainee program is ------- competitive, with over 500 applicants for just twelve positions.",
      options: ['highly', 'high', 'higher', 'height'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống đứng ngay trước tính từ **competitive** và cần nghĩa "rất, ở mức độ cao" → **highly**. high khi làm trạng từ chỉ có nghĩa "lên cao, ở trên cao" (fly high, aim high), không dùng với nghĩa "rất" trước tính từ; higher và height cũng sai.',
        en: 'The blank comes right before the adjective **competitive** and needs the meaning "very, to a great degree" → **highly**. As an adverb, high means "at or to a great height" (fly high, aim high) and cannot mean "very" before an adjective; higher and height are also wrong.',
      },
      translation: 'Việc trúng tuyển vào chương trình quản trị viên tập sự của công ty có tính cạnh tranh rất cao, với hơn 500 ứng viên cho vỏn vẹn mười hai vị trí.',
    },
    {
      sentence: 'The shuttle bus to the convention center will depart ------- after the welcome breakfast ends.',
      options: ['short', 'shorten', 'shortly', 'shortage'],
      answer: 2,
      explanation: {
        vi: 'Trước **after the welcome breakfast ends** cần nghĩa "ngay, chẳng bao lâu" → **shortly after** (ngay sau khi). short không mang nghĩa "sớm"; nó làm trạng từ chủ yếu trong vài cụm cố định như stop short, cut short. shorten là động từ, shortage là danh từ.',
        en: 'Before **after the welcome breakfast ends**, we need the meaning "soon" → **shortly after**. short does not mean "soon"; as an adverb it appears mainly in set phrases such as stop short or cut short. shorten is a verb and shortage a noun.',
      },
      translation: 'Xe buýt đưa đón đến trung tâm hội nghị sẽ khởi hành ngay sau khi bữa sáng chào mừng kết thúc.',
    },
  ],
};
