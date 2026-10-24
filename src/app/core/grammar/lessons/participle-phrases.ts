import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'participle-phrases',
  intro: {
    vi: 'Cụm phân từ là một mệnh đề đã được rút gọn còn **V-ing**, **V3** hoặc **Having + V3**, thường đứng đầu câu trước dấu phẩy hoặc cuối câu chỉ kết quả. Part 5 hay để trống chính phân từ đó và bắt bạn chọn dạng đúng dựa vào **chủ ngữ của mệnh đề chính**.',
    en: 'A participial phrase is a clause reduced to **V-ing**, **V3** or **Having + V3**, usually placed at the start of a sentence before a comma or at the end to show a result. Part 5 often blanks out the participle itself and asks you to choose the right form from the **subject of the main clause**.',
  },
  mistakes: [
    {
      wrong: '[[Locating]] next to the central station, the Harwood Inn is popular with business travelers.',
      right: '[[Located]] next to the central station, the Harwood Inn is popular with business travelers.',
      explanation: {
        vi: 'Khách sạn **được đặt** ở cạnh nhà ga (bị động) → **Located**. Khách sạn không tự đi "định vị" thứ gì.',
        en: 'The inn **is situated** next to the station (passive) → **Located**. The inn is not locating anything.',
      },
    },
    {
      wrong: '[[Employed]] more than 3,000 people, Tessaro Motors is the largest employer in the county.',
      right: '[[Employing]] more than 3,000 people, Tessaro Motors is the largest employer in the county.',
      explanation: {
        vi: 'Phía sau có tân ngữ **more than 3,000 people** và chủ ngữ Tessaro Motors là bên **thuê** người (chủ động) → **Employing**.',
        en: 'An object follows (**more than 3,000 people**) and the subject, Tessaro Motors, does the employing (active) → **Employing**.',
      },
    },
    {
      wrong: '[[Having reviewing]] the applications, the committee selected five candidates for interviews.',
      right: '[[Having reviewed]] the applications, the committee selected five candidates for interviews.',
      explanation: {
        vi: 'Cấu trúc hoàn thành là **Having + V3**, không phải Having + V-ing. Nó cho biết việc xem hồ sơ xảy ra **trước** việc chọn ứng viên.',
        en: 'The perfect form is **Having + V3**, never Having + V-ing. It shows the review happened **before** the selection.',
      },
    },
    {
      wrong: 'A power outage shut down the factory for six hours, [[resulted]] in a large backlog of orders.',
      right: 'A power outage shut down the factory for six hours, [[resulting]] in a large backlog of orders.',
      explanation: {
        vi: 'Sau dấu phẩy, không có liên từ, nên không thể thêm một động từ chia thứ hai. Cụm kết quả cuối câu dùng **V-ing**: **resulting in**.',
        en: 'After the comma there is no conjunction, so a second finite verb is impossible. A result phrase at the end uses **V-ing**: **resulting in**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Cụm phân từ là gì', en: 'What a participial phrase is' },
      body: {
        vi: 'Khi hai vế có **cùng chủ ngữ**, ta có thể bỏ chủ ngữ và liên từ ở một vế, rồi đổi động từ thành phân từ. Cụm còn lại bổ nghĩa cho **chủ ngữ của mệnh đề chính** và có thể đứng đầu câu, giữa câu (giữa hai dấu phẩy) hoặc cuối câu.',
        en: 'When two clauses share **the same subject**, we can drop the subject and conjunction from one of them and turn its verb into a participle. The remaining phrase describes **the subject of the main clause** and can come at the start, in the middle (between commas) or at the end.',
      },
      table: {
        head: [
          { vi: 'Câu đầy đủ', en: 'Full sentence' },
          { vi: 'Cụm phân từ', en: 'Participial phrase' },
        ],
        rows: [
          ['Because the firm offers free delivery, it attracts many online shoppers.', 'Offering free delivery, the firm attracts many online shoppers.'],
          ['The hotel was renovated last year, and it now has 200 rooms.', 'Renovated last year, the hotel now has 200 rooms.'],
          ['After she had finished the audit, Ms. Reyes presented her findings.', 'Having finished the audit, Ms. Reyes presented her findings.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Bài này nói về cụm phân từ KHÔNG có liên từ đứng trước. Dạng còn giữ liên từ (When reviewing…, Once approved…) thuộc bài 13.4.',
          en: 'This lesson covers participial phrases WITHOUT a conjunction in front. Forms that keep the conjunction (When reviewing…, Once approved…) belong to lesson 13.4.',
        },
      },
    },
    {
      heading: { vi: 'V-ing: chủ ngữ tự làm hành động', en: 'V-ing: the subject does the action' },
      body: {
        vi: 'Dùng **V-ing** khi chủ ngữ của mệnh đề chính **tự thực hiện** hành động (nghĩa chủ động). Dấu hiệu mạnh nhất: ngay sau chỗ trống có **tân ngữ**. Cụm này thường diễn tả lý do, cách thức hoặc hành động xảy ra cùng lúc.',
        en: 'Use **V-ing** when the subject of the main clause **performs** the action (active meaning). The strongest cue: an **object** comes right after the blank. The phrase usually expresses a reason, a manner or a simultaneous action.',
      },
      examples: [
        {
          en: '**Wanting** to cut energy costs, the management installed motion-sensor lighting in every office.',
          vi: 'Vì muốn cắt giảm chi phí năng lượng, ban quản lý đã lắp đèn cảm biến chuyển động ở mọi văn phòng.',
        },
        {
          en: '**Offering** same-day repairs, Quickfix has won a loyal customer base.',
          vi: 'Nhờ cung cấp dịch vụ sửa chữa trong ngày, Quickfix đã có được một lượng khách hàng trung thành.',
        },
      ],
    },
    {
      heading: { vi: 'V3: chủ ngữ chịu hành động', en: 'V3: the subject receives the action' },
      body: {
        vi: 'Dùng **V3** khi chủ ngữ của mệnh đề chính **bị/được** tác động (nghĩa bị động). Phía sau thường là **by + tác nhân**, cụm giới từ chỉ nơi chốn/thời gian, không có tân ngữ. Các cụm sau gặp liên tục trong đề:',
        en: 'Use **V3** when the subject of the main clause **receives** the action (passive meaning). It is usually followed by **by + agent** or a phrase of place or time, with no object. These openings appear again and again in the test:',
      },
      table: {
        head: [
          { vi: 'Cụm mở đầu', en: 'Opening phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['Located / Situated in…', { vi: 'Nằm ở…', en: 'Found in a place…' }],
          ['Founded / Established in 1990,', { vi: 'Được thành lập năm 1990', en: 'Set up in 1990' }],
          ['Based in Singapore,', { vi: 'Có trụ sở tại Singapore', en: 'Headquartered in Singapore' }],
          ['Designed for…', { vi: 'Được thiết kế cho…', en: 'Made for a purpose or user' }],
          ['Known for…', { vi: 'Nổi tiếng về…', en: 'Famous for…' }],
          ['Compared with / to…', { vi: 'So với…', en: 'When compared with…' }],
          ['Scheduled for…', { vi: 'Được lên lịch vào…', en: 'Planned for a time' }],
        ],
      },
      examples: [
        {
          en: '**Established** in 1972, Delmar Insurance has offices in fourteen cities.',
          vi: 'Được thành lập năm 1972, Công ty Bảo hiểm Delmar có văn phòng tại mười bốn thành phố.',
        },
        {
          en: '**Known** for its fast service, the café is crowded every morning.',
          vi: 'Nổi tiếng nhờ phục vụ nhanh, quán cà phê đông khách mỗi sáng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**Compared with** mở đầu câu so sánh chủ ngữ với một thứ khác thì luôn ở dạng V3: Compared with last year, sales rose 8%. Chủ ngữ (doanh số) là thứ **được** so sánh. Chỉ dùng **Comparing** khi chủ ngữ là người tự đi so sánh: Comparing the two bids, the manager chose the cheaper one.',
          en: 'When **Compared with** opens a sentence comparing the subject with something else, it is always V3: Compared with last year, sales rose 8%. The subject (sales) is what **is being** compared. Use **Comparing** only when the subject is a person doing the comparing: Comparing the two bids, the manager chose the cheaper one.',
        },
      },
    },
    {
      heading: { vi: 'Having + V3: hành động xảy ra trước', en: 'Having + V3: an earlier action' },
      body: {
        vi: '**Having + V3** (chủ động) và **Having been + V3** (bị động) nhấn mạnh rằng hành động trong cụm đã **hoàn tất trước** hành động của mệnh đề chính. Phủ định: đặt **not** ngay đầu cụm.',
        en: '**Having + V3** (active) and **Having been + V3** (passive) stress that the action in the phrase was **completed before** the main-clause action. Negative: put **not** at the very start.',
      },
      table: {
        head: [
          { vi: 'Dạng', en: 'Form' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['Having + V3', { vi: 'chủ động, xảy ra trước', en: 'active, earlier' }, 'Having signed the lease, we moved in on May 1.'],
          ['Having been + V3', { vi: 'bị động, xảy ra trước', en: 'passive, earlier' }, 'Having been delayed twice, the shipment finally arrived.'],
          ['Not having + V3', { vi: 'phủ định', en: 'negative' }, 'Not having received a reply, Mr. Ito called the supplier.'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không có dạng "Having + V-ing" hay "Having been + V-ing" trong cụm phân từ kiểu này. Sau Having luôn là **V3** hoặc **been + V3**.',
          en: 'There is no "Having + V-ing" or "Having been + V-ing" in this kind of phrase. Having is always followed by **V3** or **been + V3**.',
        },
      },
    },
    {
      heading: { vi: 'Chọn V-ing hay V3: nhìn chủ ngữ mệnh đề chính', en: 'Choosing V-ing or V3: look at the main subject' },
      points: [
        {
          vi: 'Tìm chủ ngữ ngay sau dấu phẩy (hoặc chủ ngữ đứng trước cụm giữa câu). Đặt nó vào câu đầy đủ: "the hotel locates…" hay "the hotel is located…"?',
          en: 'Find the subject right after the comma (or before a mid-sentence phrase). Test it in a full clause: "the hotel locates…" or "the hotel is located…"?',
        },
        {
          vi: 'Có tân ngữ sau chỗ trống → gần như chắc chắn **V-ing** hoặc **Having + V3**.',
          en: 'An object after the blank → almost certainly **V-ing** or **Having + V3**.',
        },
        {
          vi: 'Sau chỗ trống là **by…**, **in + nơi chốn/năm**, **for + mục đích**, không có tân ngữ → thường là **V3**.',
          en: 'The blank is followed by **by…**, **in + place/year** or **for + purpose**, with no object → usually **V3**.',
        },
        {
          vi: 'Cụm giữa câu cũng theo cùng quy tắc: The warehouse, **built** in 1965, will be demolished.',
          en: 'A mid-sentence phrase follows the same rule: The warehouse, **built** in 1965, will be demolished.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Nếu chủ ngữ ngầm của cụm KHÁC chủ ngữ mệnh đề chính, câu bị lỗi "bổ ngữ treo" — xem bài 14.3.',
          en: 'If the implied subject of the phrase DIFFERS from the main subject, the sentence has a "dangling modifier" — see lesson 14.3.',
        },
      },
    },
    {
      heading: { vi: 'Cụm phân từ cuối câu chỉ kết quả', en: 'Result phrases at the end of a sentence' },
      body: {
        vi: 'Sau một mệnh đề hoàn chỉnh và dấu phẩy, **V-ing** có thể diễn tả **kết quả** của cả sự việc vừa nêu. Không dùng động từ chia ở vị trí này nếu không có liên từ.',
        en: 'After a complete clause and a comma, **V-ing** can express the **result** of the whole event just described. A finite verb cannot go here without a conjunction.',
      },
      table: {
        head: [
          { vi: 'Cụm kết quả', en: 'Result phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          [', resulting in + noun', { vi: 'dẫn đến kết quả là…', en: 'with the result of…' }],
          [', leading to + noun', { vi: 'dẫn tới…', en: 'bringing about…' }],
          [', causing + object (+ to V)', { vi: 'gây ra…', en: 'making something happen' }],
          [', allowing / enabling + object + to V', { vi: 'cho phép, giúp…', en: 'making it possible for…' }],
          [', making + object + adjective', { vi: 'khiến cho…', en: 'turning something into…' }],
        ],
      },
      examples: [
        {
          en: 'The supplier raised its prices by 12 percent, **forcing** us to look for alternatives.',
          vi: 'Nhà cung cấp tăng giá 12%, buộc chúng tôi phải tìm phương án khác.',
        },
        {
          en: 'The city added two bus routes to the airport, **making** the commute much easier.',
          vi: 'Thành phố bổ sung hai tuyến xe buýt ra sân bay, khiến việc đi lại dễ dàng hơn nhiều.',
        },
      ],
    },
    {
      heading: { vi: 'Cách làm câu cụm phân từ trong Part 5', en: 'Attacking participial-phrase items in Part 5' },
      points: [
        {
          vi: 'Chỗ trống đầu câu, trước dấu phẩy, không có liên từ → nghĩ ngay đến V-ing / V3 / Having V3.',
          en: 'Blank at the start, before a comma, with no conjunction → think V-ing / V3 / Having V3 at once.',
        },
        {
          vi: 'Loại động từ chia (opens, was opened) và động từ nguyên mẫu: chúng không thể đứng một mình làm cụm bổ nghĩa.',
          en: 'Eliminate finite verbs (opens, was opened) and the base form: they cannot stand alone as a modifying phrase.',
        },
        {
          vi: 'Hỏi chủ ngữ mệnh đề chính tự làm hay bị làm; kiểm tra tân ngữ sau chỗ trống.',
          en: 'Ask whether the main subject does the action or receives it; check for an object after the blank.',
        },
        {
          vi: 'Chỗ trống sau dấu phẩy cuối câu, trước in/to/tân ngữ → V-ing chỉ kết quả (resulting, causing, allowing).',
          en: 'Blank after a comma near the end, before in/to/an object → a result V-ing (resulting, causing, allowing).',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: '------- in the heart of the financial district, the Corbin Hotel is popular with corporate clients.',
      options: ['Located', 'Locating', 'Locate', 'Location'],
      answer: 0,
      explanation: {
        vi: 'Chủ ngữ **the Corbin Hotel** **được đặt** ở trung tâm khu tài chính (bị động), sau chỗ trống là cụm nơi chốn **in the heart of…** → **Located**. Locating cần tân ngữ và khách sạn không tự "định vị".',
        en: 'The subject **the Corbin Hotel** **is situated** in the financial district (passive), and a place phrase **in the heart of…** follows → **Located**. Locating needs an object, and the hotel is not locating anything.',
      },
      translation: 'Nằm ở trung tâm khu tài chính, khách sạn Corbin được các khách hàng doanh nghiệp ưa chuộng.',
    },
    {
      sentence: '------- in 1987, Pemberton Logistics now operates warehouses in twelve countries.',
      options: ['Founding', 'Founded', 'Found', 'Founds'],
      answer: 1,
      explanation: {
        vi: 'Công ty **được thành lập** năm 1987 (bị động), sau chỗ trống chỉ có **in 1987**, không có tân ngữ → **Founded**. Founding sẽ có nghĩa công ty tự đi thành lập thứ khác.',
        en: 'The company **was founded** in 1987 (passive); only **in 1987** follows, with no object → **Founded**. Founding would mean the company founded something else.',
      },
      translation: 'Được thành lập năm 1987, Pemberton Logistics hiện vận hành các kho hàng tại mười hai quốc gia.',
    },
    {
      sentence: '------- more than 4,000 people, Vantor Electronics is the largest private employer in the region.',
      options: ['Employment', 'Employed', 'Employing', 'Employs'],
      answer: 2,
      explanation: {
        vi: 'Ngay sau chỗ trống có tân ngữ **more than 4,000 people**, và Vantor Electronics là bên **thuê** họ (chủ động) → **Employing**. Employed là bị động, không đi với tân ngữ như vậy.',
        en: 'The object **more than 4,000 people** follows the blank, and Vantor Electronics does the employing (active) → **Employing**. Employed is passive and cannot take that object.',
      },
      translation: 'Sử dụng hơn 4.000 lao động, Vantor Electronics là doanh nghiệp tư nhân tuyển dụng nhiều người nhất trong vùng.',
    },
    {
      sentence: '------- the quarterly report, Mr. Huang forwarded it to the finance director for final approval.',
      options: ['Reviewed', 'Having been reviewed', 'Having reviewed', 'Been reviewed'],
      answer: 2,
      explanation: {
        vi: 'Mr. Huang **tự xem xét** báo cáo (chủ động, có tân ngữ **the quarterly report**) và việc đó xảy ra **trước** việc chuyển tiếp → **Having reviewed**. Having been reviewed là bị động, sai vì ông Huang không "bị xem xét".',
        en: 'Mr. Huang **did the reviewing** (active, with the object **the quarterly report**), and it happened **before** he forwarded it → **Having reviewed**. Having been reviewed is passive, which is wrong because Mr. Huang was not reviewed.',
      },
      translation: 'Sau khi xem xét báo cáo quý, ông Huang đã chuyển nó cho giám đốc tài chính để phê duyệt lần cuối.',
    },
    {
      sentence: '------- twice by the city council, the stadium proposal was finally approved last month.',
      options: ['Having rejected', 'Having been rejected', 'Rejecting', 'To reject'],
      answer: 1,
      explanation: {
        vi: 'Đề xuất **bị** hội đồng thành phố bác bỏ (có **by the city council**) và việc đó xảy ra **trước** khi được duyệt → bị động hoàn thành **Having been rejected**. Having rejected là chủ động, sai vì đề xuất không tự bác bỏ ai.',
        en: 'The proposal **was rejected** by the council (note **by the city council**) before it was approved → the perfect passive **Having been rejected**. Having rejected is active, which is wrong because the proposal rejected nothing.',
      },
      translation: 'Sau hai lần bị hội đồng thành phố bác bỏ, đề xuất xây sân vận động cuối cùng đã được thông qua vào tháng trước.',
    },
    {
      sentence: 'Heavy snow closed the main highway for two days, ------- in delayed deliveries across the region.',
      options: ['resulting', 'resulted', 'results', 'result'],
      answer: 0,
      explanation: {
        vi: 'Sau một mệnh đề hoàn chỉnh và **dấu phẩy**, không có liên từ, nên cần cụm phân từ chỉ kết quả → **resulting in**. resulted là động từ chia, cần thêm **and** mới đúng.',
        en: 'After a complete clause and a **comma**, with no conjunction, we need a result phrase → **resulting in**. resulted is a finite verb and would need **and** in front.',
      },
      translation: 'Tuyết rơi dày đã khiến đường cao tốc chính bị đóng hai ngày, dẫn đến việc giao hàng bị chậm trễ khắp khu vực.',
    },
    {
      sentence: 'The new convention center, ------- for events of up to 2,000 guests, will open next spring.',
      options: ['design', 'designs', 'designing', 'designed'],
      answer: 3,
      explanation: {
        vi: 'Cụm giữa hai dấu phẩy bổ nghĩa cho **the new convention center**, thứ **được thiết kế** (bị động), sau chỗ trống là **for events** chứ không phải tân ngữ → **designed**. designing sai vì trung tâm không tự thiết kế gì.',
        en: 'The phrase between the commas describes **the new convention center**, which **was designed** (passive); **for events** follows, not an object → **designed**. designing is wrong because the center designs nothing.',
      },
      translation: 'Trung tâm hội nghị mới, được thiết kế cho các sự kiện có tới 2.000 khách, sẽ khai trương vào mùa xuân tới.',
    },
    {
      sentence: '------- to expand into Asian markets, Brookline Apparel hired three regional sales managers this year.',
      options: ['Hoped', 'Hopes', 'Hope', 'Hoping'],
      answer: 3,
      explanation: {
        vi: 'Chủ ngữ **Brookline Apparel** là bên **mong muốn** mở rộng (chủ động) → **Hoping to…**, diễn tả lý do. Hoped (bị động) vô nghĩa vì công ty không "được hy vọng".',
        en: 'The subject **Brookline Apparel** is the one **hoping** to expand (active) → **Hoping to…**, giving the reason. Hoped (passive) makes no sense because the company is not "being hoped".',
      },
      translation: 'Với mong muốn mở rộng sang các thị trường châu Á, Brookline Apparel đã tuyển ba quản lý bán hàng khu vực trong năm nay.',
    },
    {
      sentence: 'The airline updated its mobile app last month, ------- passengers to change their seats without calling an agent.',
      options: ['allowing', 'allowed', 'allows', 'allow'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề trước dấu phẩy đã hoàn chỉnh; cụm cuối câu chỉ **kết quả** của việc cập nhật → **allowing + tân ngữ + to V**. allowed/allows là động từ chia, không nối được nếu thiếu liên từ.',
        en: 'The clause before the comma is complete; the final phrase gives the **result** of the update → **allowing + object + to V**. allowed/allows are finite verbs and cannot be joined without a conjunction.',
      },
      translation: 'Hãng hàng không đã cập nhật ứng dụng di động vào tháng trước, cho phép hành khách đổi chỗ ngồi mà không cần gọi nhân viên.',
    },
    {
      sentence: "------- with last year's figures, this quarter's online sales have nearly doubled.",
      options: ['Comparing', 'Compared', 'Compare', 'Comparison'],
      answer: 1,
      explanation: {
        vi: 'Chủ ngữ **this quarter\'s online sales** là thứ **được so sánh** với số liệu năm ngoái → **Compared with**. Comparing sẽ có nghĩa doanh số tự đi so sánh, sai.',
        en: "The subject **this quarter's online sales** is what **is being compared** with last year's figures → **Compared with**. Comparing would mean the sales are doing the comparing, which is wrong.",
      },
      translation: 'So với số liệu năm ngoái, doanh số bán hàng trực tuyến của quý này đã tăng gần gấp đôi.',
    },
  ],
};
