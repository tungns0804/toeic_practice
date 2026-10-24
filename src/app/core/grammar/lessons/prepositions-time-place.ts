import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'prepositions-time-place',
  intro: {
    vi: 'Bài này dạy các giới từ chỉ thời gian và nơi chốn: **in/on/at**, **by** và **until**, nhóm **for/during/since/within/throughout/over**, **between/among** cùng các giới từ chỉ vị trí và hướng di chuyển. Trong Part 5/6, đây là dạng câu có bốn lựa chọn đều là giới từ, và đáp án thường lộ ra ngay ở cụm danh từ sau chỗ trống hoặc ở động từ chính của câu.',
    en: 'This lesson covers prepositions of time and place: **in/on/at**, **by** vs **until**, the group **for/during/since/within/throughout/over**, **between/among**, and prepositions of position and movement. In Part 5/6 they appear as items whose four options are all prepositions, and the answer usually shows in the noun phrase after the blank or in the main verb.',
  },
  mistakes: [
    {
      wrong: 'The quarterly budget review will be held [[in]] Monday morning.',
      right: 'The quarterly budget review will be held [[on]] Monday morning.',
      explanation: {
        vi: 'Thứ trong tuần dùng **on**, kể cả khi có buổi đi kèm: **on Monday morning**, on Friday afternoon. Chỉ nói **in the morning** khi buổi đó không gắn với một ngày cụ thể.',
        en: 'Days of the week take **on**, even with a part of the day attached: **on Monday morning**, on Friday afternoon. Say **in the morning** only when it is not tied to a specific day.',
      },
    },
    {
      wrong: 'Please return the signed lease agreement [[until]] Friday.',
      right: 'Please return the signed lease agreement [[by]] Friday.',
      explanation: {
        vi: '**return** là hành động xảy ra một lần và Friday là hạn chót, nên dùng **by** (chậm nhất là). **until** chỉ dùng cho việc kéo dài liên tục đến mốc đó, như stay, remain, be open.',
        en: '**return** is a one-time action and Friday is a deadline, so use **by** (no later than). **until** is for something that continues up to that point, such as stay, remain or be open.',
      },
    },
    {
      wrong: 'Mr. Kwan worked at the Seoul branch [[during]] five years before moving to Singapore.',
      right: 'Mr. Kwan worked at the Seoul branch [[for]] five years before moving to Singapore.',
      explanation: {
        vi: 'Trước một con số chỉ độ dài thời gian (five years) phải dùng **for**. **during** đi với một sự kiện hay giai đoạn có tên gọi: during the merger, during the holiday season.',
        en: 'Before a number expressing a length of time (five years), use **for**. **during** takes a named event or period: during the merger, during the holiday season.',
      },
    },
    {
      wrong: 'The new distribution center will be built [[among]] the airport and the harbor.',
      right: 'The new distribution center will be built [[between]] the airport and the harbor.',
      explanation: {
        vi: 'Hai địa điểm nối với nhau bằng **and** → **between X and Y**. **among** dùng cho một nhóm từ ba đối tượng trở lên, ví dụ among the applicants.',
        en: 'Two places joined by **and** → **between X and Y**. **among** is for a group of three or more, as in among the applicants.',
      },
    },
    {
      wrong: "Our client's new office is [[in]] 45 Harbor Street.",
      right: "Our client's new office is [[at]] 45 Harbor Street.",
      explanation: {
        vi: 'Địa chỉ có số nhà dùng **at** (at 45 Harbor Street). **in** dành cho thành phố, quốc gia (in Chicago); tên đường không kèm số nhà thì Anh-Mỹ dùng **on** (on Harbor Street).',
        en: 'A street address with a number takes **at** (at 45 Harbor Street). **in** is for cities and countries (in Chicago); a street name without a number takes **on** in American English (on Harbor Street).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'in / on / at chỉ thời gian', en: 'in / on / at for time' },
      body: {
        vi: 'Ba giới từ này chia nhau theo độ cụ thể của mốc thời gian: **at** cho giờ và thời điểm chính xác, **on** cho thứ và ngày tháng, **in** cho các khoảng dài hơn như tháng, năm, mùa, quý, cùng các buổi trong ngày.',
        en: 'These three split the work by how specific the time is: **at** for clock times and exact moments, **on** for days and dates, and **in** for longer periods such as months, years, seasons and quarters, plus the parts of the day.',
      },
      points: [
        {
          vi: 'Buổi gắn với một ngày cụ thể thì dùng **on**: on Monday morning, on the evening of June 3. Đứng một mình thì dùng **in**: in the morning, in the afternoon. Riêng **at night** là ngoại lệ.',
          en: 'A part of the day tied to a specific day takes **on**: on Monday morning, on the evening of June 3. On its own it takes **in**: in the morning, in the afternoon. **at night** is the exception.',
        },
        {
          vi: 'Cuối tuần: **on the weekend** (Anh-Mỹ) hoặc **at the weekend** (Anh-Anh). Ngày thường trong tuần: **on weekdays**.',
          en: 'Weekends: **on the weekend** (American) or **at the weekend** (British). Working days: **on weekdays**.',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Dùng với', en: 'Used with' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'at',
            { vi: 'Giờ, thời điểm chính xác; at night; at the beginning/end of…', en: 'Clock times, exact moments; at night; at the beginning/end of...' },
            'at 9:30 a.m., at noon, at midnight, at the end of the month',
          ],
          [
            'on',
            { vi: 'Thứ, ngày tháng, ngày lễ cụ thể; buổi của một ngày cụ thể', en: 'Days, dates, named days; part of a specific day' },
            "on Monday, on May 14, on New Year's Day, on Friday afternoon",
          ],
          [
            'in',
            { vi: 'Buổi trong ngày, tháng, năm, mùa, quý, thập kỷ', en: 'Parts of the day, months, years, seasons, quarters, decades' },
            'in the morning, in July, in 2027, in the summer, in the first quarter',
          ],
        ],
      },
      examples: [
        {
          en: 'The orientation session starts **at** 8:30 a.m. **on** Tuesday.',
          vi: 'Buổi định hướng bắt đầu lúc 8 giờ 30 sáng thứ Ba.',
        },
        {
          en: 'Ferris Electronics opened its first overseas factory **in** 2019.',
          vi: 'Ferris Electronics mở nhà máy đầu tiên ở nước ngoài vào năm 2019.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không dùng giới từ trước **next, last, this, every, each, tomorrow, yesterday**: nói "The audit will begin next Monday", không nói "on next Monday"; nói "We hired two analysts last quarter", không nói "in last quarter".',
          en: 'Use no preposition before **next, last, this, every, each, tomorrow, yesterday**: say "The audit will begin next Monday", not "on next Monday"; say "We hired two analysts last quarter", not "in last quarter".',
        },
      },
    },
    {
      heading: { vi: 'in / on / at chỉ nơi chốn', en: 'in / on / at for place' },
      body: {
        vi: '**at** chỉ một điểm hoặc nơi diễn ra hoạt động, **on** chỉ bề mặt, tầng và tuyến đường, **in** chỉ không gian có ranh giới bao quanh: phòng, bên trong tòa nhà, thành phố, quốc gia.',
        en: '**at** marks a point or the place where an activity happens, **on** a surface, a floor or a street, and **in** an enclosed space or area: a room, the inside of a building, a city, a country.',
      },
      points: [
        {
          vi: 'Tòa nhà: **at the hotel** = tại khách sạn (nói về địa điểm), **in the hotel** = ở bên trong tòa nhà. Cả hai đều đúng, nghĩa hơi khác nhau.',
          en: 'Buildings: **at the hotel** = at that location, **in the hotel** = inside the building. Both are correct, with a slight difference in meaning.',
        },
        {
          vi: 'Góc: **in the corner** của một căn phòng, nhưng **on/at the corner** của hai con đường (on the corner of Fifth Avenue and Elm Street).',
          en: 'Corners: **in the corner** of a room, but **on/at the corner** of two streets (on the corner of Fifth Avenue and Elm Street).',
        },
        {
          vi: 'Thông tin: **in** the newspaper / catalog / report (ấn phẩm), nhưng **on** the website / screen / page 12.',
          en: 'Information: **in** the newspaper / catalog / report (publications), but **on** the website / screen / page 12.',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Dùng với', en: 'Used with' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'at',
            { vi: 'Địa chỉ có số nhà, một điểm cụ thể, nơi diễn ra sự kiện', en: 'Addresses with a number, a specific point, the venue of an event' },
            'at 45 Harbor Street, at the front desk, at the entrance, at the trade fair',
          ],
          [
            'on',
            { vi: 'Tầng, tên đường không kèm số nhà (Anh-Mỹ), bề mặt, trang web, trang giấy', en: 'Floors, street names without a number (American), surfaces, websites, pages' },
            'on the third floor, on Main Street, on the notice board, on our website',
          ],
          [
            'in',
            { vi: 'Không gian kín, khu vực, thành phố, quốc gia, ấn phẩm in', en: 'Enclosed spaces, areas, cities, countries, printed publications' },
            "in the lobby, in the top drawer, in Singapore, in Brazil, in today's newspaper",
          ],
        ],
      },
      examples: [
        {
          en: 'The legal department has moved to a larger office **on** the sixth floor.',
          vi: 'Phòng pháp chế đã chuyển đến một văn phòng rộng hơn ở tầng sáu.',
        },
        {
          en: 'Please leave your room key **at** the front desk when you check out.',
          vi: 'Quý khách vui lòng để lại chìa khóa phòng tại quầy lễ tân khi trả phòng.',
        },
        {
          en: 'The full price list appears **on** our website and **in** the spring catalog.',
          vi: 'Bảng giá đầy đủ có trên trang web của chúng tôi và trong catalog mùa xuân.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Tên đường: Anh-Mỹ nói **on** Elm Street, Anh-Anh hay nói **in** Elm Street. Khi có số nhà thì cả hai đều dùng **at**: at 18 Elm Street.',
          en: 'Street names: American English says **on** Elm Street, British English often says **in** Elm Street. With a house number, both use **at**: at 18 Elm Street.',
        },
      },
    },
    {
      heading: { vi: 'by và until; from … to / through', en: 'by vs until; from … to / through' },
      body: {
        vi: 'Người học Việt hay dịch cả hai thành "đến", nhưng **by** là hạn chót (chậm nhất là, trước hoặc đúng mốc đó), còn **until** là kéo dài liên tục đến mốc đó rồi mới dừng. Cách chọn nhanh nhất là nhìn động từ.',
        en: 'Vietnamese learners often translate both with the same word, but **by** is a deadline (no later than that point), while **until** means continuing up to that point and then stopping. The quickest way to choose is to look at the verb.',
      },
      points: [
        {
          vi: '**not … until** + mốc = mãi đến … mới. Trong cấu trúc phủ định này, until đi được cả với động từ chỉ hành động một lần: The results will not be announced until Friday.',
          en: '**not ... until** + a point = not before that point. In this negative pattern, until can go with one-time verbs too: The results will not be announced until Friday.',
        },
        {
          vi: '**by** + mốc tương lai hay đi với thì tương lai hoàn thành (bài 4.6): By June, we will have hired ten new engineers.',
          en: '**by** + a future point often goes with the Future Perfect (lesson 4.6): By June, we will have hired ten new engineers.',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Động từ hay đi kèm', en: 'Typical verbs' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          [
            'by',
            { vi: 'Hạn chót: chậm nhất là', en: 'Deadline: no later than' },
            'submit, finish, complete, arrive, reply, be delivered',
            'Please reply by June 3.',
          ],
          [
            'until / till',
            { vi: 'Kéo dài liên tục đến mốc', en: 'Continuing up to a point' },
            'stay, remain, wait, last, continue, be open, be valid',
            'The offer is valid until June 3.',
          ],
          [
            'from … to / until',
            { vi: 'Từ mốc này đến mốc kia', en: 'From one point to another' },
            'run, last, be open, be closed',
            'The fair runs from May 1 to May 5.',
          ],
          [
            '(from) … through',
            { vi: 'Đến hết mốc cuối, tính cả mốc cuối (Anh-Mỹ)', en: 'Up to and including the end point (American)' },
            'run, be open, be available',
            'We are open Monday through Friday.',
          ],
        ],
      },
      examples: [
        {
          en: 'Completed application forms must reach our office **by** 5 p.m. on Friday.',
          vi: 'Đơn đăng ký đã điền đầy đủ phải đến văn phòng chúng tôi chậm nhất là 5 giờ chiều thứ Sáu.',
        },
        {
          en: 'The early-bird registration discount is valid **until** March 31.',
          vi: 'Ưu đãi đăng ký sớm có hiệu lực đến ngày 31 tháng 3.',
        },
        {
          en: 'Our help desk is staffed **from** 7 a.m. **to** 10 p.m., Monday **through** Saturday.',
          vi: 'Bộ phận hỗ trợ có nhân viên trực từ 7 giờ sáng đến 10 giờ tối, từ thứ Hai đến hết thứ Bảy.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng dịch "đến" thành until theo phản xạ. Hãy hỏi: việc này làm XONG trước mốc (submit, return, complete → **by**) hay KÉO DÀI tới mốc (stay, remain, be open → **until**)?',
          en: 'Do not reach for until automatically. Ask: is the action COMPLETED before the point (submit, return, complete → **by**) or does it CONTINUE up to it (stay, remain, be open → **until**)?',
        },
      },
    },
    {
      heading: {
        vi: 'Khoảng thời gian: for, during, since, within, throughout, over',
        en: 'Periods of time: for, during, since, within, throughout, over',
      },
      points: [
        {
          vi: '**during** không đứng thẳng trước con số: "during three weeks" là sai, phải nói **for three weeks**. Khi khoảng thời gian đã được xác định bằng the/past/last thì during dùng được: during the past three weeks.',
          en: '**during** does not go directly before a number: "during three weeks" is wrong; say **for three weeks**. Once the period is made definite with the/past/last, during works: during the past three weeks.',
        },
        {
          vi: '**since** chỉ đi với mốc, không đi với khoảng ("since five years" là sai), và mệnh đề chính thường chia thì hoàn thành (bài 4.2).',
          en: '**since** takes only a point in time, never a length ("since five years" is wrong), and the main clause is usually in a perfect tense (lesson 4.2).',
        },
        {
          vi: '**within** 10 days = bất kỳ lúc nào trong vòng 10 ngày, không quá 10 ngày. **in** 10 days (nói về tương lai) thường có nghĩa là 10 ngày nữa, tính từ bây giờ.',
          en: '**within** 10 days = at any time inside those 10 days, no later than the tenth day. **in** 10 days (about the future) usually means 10 days from now.',
        },
        {
          vi: '**over / in / during the past** + khoảng thời gian thường đi với hiện tại hoàn thành: Revenue has doubled over the past decade. Không nói "since the past decade".',
          en: '**over / in / during the past** + a period usually goes with the Present Perfect: Revenue has doubled over the past decade. Do not say "since the past decade".',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Theo sau là', en: 'Followed by' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'for',
            { vi: 'Độ dài thời gian (số + đơn vị)', en: 'A length of time (number + unit)' },
            { vi: 'Trong bao lâu', en: 'How long' },
            'for three weeks, for 20 years',
          ],
          [
            'during',
            { vi: 'Sự kiện, giai đoạn có tên gọi', en: 'A named event or period' },
            { vi: 'Trong suốt, hoặc vào một lúc nào đó trong', en: 'Throughout, or at some point within' },
            'during the meeting, during the holiday season',
          ],
          [
            'since',
            { vi: 'Mốc thời gian', en: 'A point in time' },
            { vi: 'Từ mốc đó đến nay', en: 'From that point until now' },
            'since 2021, since last March, since the merger',
          ],
          [
            'within',
            { vi: 'Khoảng thời gian hoặc khoảng cách', en: 'A period or a distance' },
            { vi: 'Trong vòng, không vượt quá', en: 'Inside the limit, no later or farther than' },
            'within 24 hours, within 30 days of purchase, within walking distance',
          ],
          [
            'throughout',
            { vi: 'Giai đoạn hoặc nơi chốn', en: 'A period or a place' },
            { vi: 'Suốt từ đầu đến cuối; khắp mọi nơi', en: 'From start to finish; in every part of' },
            'throughout the year, throughout the building',
          ],
          [
            'over',
            { vi: 'Giai đoạn, thường là the past/next/last + khoảng', en: 'A period, often the past/next/last + a length' },
            { vi: 'Trong suốt quãng thời gian đó', en: 'Across that span of time' },
            'over the past five years, over the next two months, over the weekend',
          ],
        ],
      },
      examples: [
        {
          en: 'The east wing will be closed **for** two weeks **during** the renovation.',
          vi: 'Cánh phía đông sẽ đóng cửa hai tuần trong thời gian cải tạo.',
        },
        {
          en: 'Defective items can be exchanged **within** 90 days of purchase.',
          vi: 'Sản phẩm bị lỗi có thể được đổi trong vòng 90 ngày kể từ ngày mua.',
        },
        {
          en: 'Free wireless Internet access is available **throughout** the terminal.',
          vi: 'Internet không dây miễn phí có ở khắp nhà ga.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: '**during** + danh từ, còn liên từ **while** + mệnh đề (during the flight / while we were flying). Cách phân biệt chi tiết nằm ở bài 8.2.',
          en: '**during** takes a noun; the conjunction **while** takes a clause (during the flight / while we were flying). The full contrast is in lesson 8.2.',
        },
      },
    },
    {
      heading: {
        vi: 'between / among và vị trí: beside, next to, opposite',
        en: 'between / among and position: beside, next to, opposite',
      },
      points: [
        {
          vi: '**between** đi với **and**, không đi với or hay to: between Monday and Wednesday (không nói "between Monday to Wednesday").',
          en: '**between** pairs with **and**, never with or or to: between Monday and Wednesday (not "between Monday to Wednesday").',
        },
        {
          vi: '**between** vẫn dùng được cho hơn hai đối tượng khi nói về quan hệ giữa từng bên với nhau (a trade agreement between three countries), nhưng **among** không bao giờ dùng cho chỉ hai đối tượng.',
          en: '**between** can still be used for more than two when describing relations between each party (a trade agreement between three countries), but **among** is never used for just two.',
        },
        {
          vi: '**opposite** đứng thẳng trước danh từ: opposite the station, không nói "opposite of the station" (the opposite of là cụm danh từ, nghĩa là "điều ngược lại").',
          en: '**opposite** goes straight before the noun: opposite the station, not "opposite of the station" (the opposite of is a noun phrase meaning "the reverse of").',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Cách dùng', en: 'Usage' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'between … and …',
            { vi: 'Giữa hai người, vật, địa điểm hoặc hai mốc thời gian', en: 'Between two people, things, places or points in time' },
            'between the bank and the post office, between 9 a.m. and noon',
          ],
          [
            'among',
            { vi: 'Giữa, trong số một nhóm từ ba đối tượng trở lên (danh từ số nhiều hoặc danh từ tập hợp)', en: 'Within a group of three or more (a plural or collective noun)' },
            'among the applicants, popular among tourists',
          ],
          [
            'beside / next to',
            { vi: 'Bên cạnh, sát bên', en: 'At the side of, right by' },
            'the printer beside the window, the pharmacy next to the bank',
          ],
          [
            'opposite / across from',
            { vi: 'Đối diện, ở phía bên kia', en: 'Facing, on the other side of' },
            'the hotel opposite the station, the bakery across from the clinic',
          ],
        ],
      },
      examples: [
        {
          en: 'The new staff parking lot is located **between** the warehouse **and** the main office.',
          vi: 'Bãi đỗ xe mới dành cho nhân viên nằm giữa nhà kho và tòa văn phòng chính.',
        },
        {
          en: 'The bonus will be divided equally **among** the six members of the design team.',
          vi: 'Tiền thưởng sẽ được chia đều cho sáu thành viên của nhóm thiết kế.',
        },
        {
          en: 'Visitors can park in the public garage **across from** the convention center.',
          vi: 'Khách có thể đỗ xe ở nhà để xe công cộng đối diện trung tâm hội nghị.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**beside** (bên cạnh) khác **besides** (ngoài … ra, thêm vào đó): The fax machine is beside the copier. / Besides a competitive salary, the job offers free housing.',
          en: '**beside** (next to) is not **besides** (in addition to): The fax machine is beside the copier. / Besides a competitive salary, the job offers free housing.',
        },
      },
    },
    {
      heading: { vi: 'Hướng di chuyển: across, along, through, toward', en: 'Movement: across, along, through, toward' },
      body: {
        vi: 'Nhóm này thường đứng sau động từ chuyển động (walk, drive, run, pass, travel, extend). Hãy hình dung hình dạng của đường đi: băng ngang, chạy dọc, xuyên qua hay hướng về một phía.',
        en: 'These usually follow verbs of movement (walk, drive, run, pass, travel, extend). Picture the shape of the route: crossing, following, passing through or heading toward something.',
      },
      points: [
        {
          vi: '**across** thường dùng cho mặt phẳng hoặc đường kẻ (đi ngang qua), **through** dùng cho không gian có bên trong (đi vào rồi đi ra): across the bridge, through the building.',
          en: '**across** is typically for a flat surface or a line (crossing over), **through** for a space with an inside (going in and out): across the bridge, through the building.',
        },
        {
          vi: '**toward** (Anh-Mỹ) và **towards** (Anh-Anh) cùng nghĩa. Với thời gian, **toward the end of** = gần cuối.',
          en: '**toward** (American) and **towards** (British) mean the same. With time, **toward the end of** = near the end of.',
        },
      ],
      table: {
        head: [
          { vi: 'Giới từ', en: 'Preposition' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'across',
            { vi: 'Băng ngang từ bên này sang bên kia (đường, sông, bề mặt); ở phía bên kia; trên khắp', en: 'From one side to the other (a road, river, surface); on the other side; all over' },
            'walk across the street, a store across the road, branches across the country',
          ],
          [
            'along',
            { vi: 'Dọc theo chiều dài (đường, sông, bờ biển, hành lang)', en: 'Following the length of something (a road, river, coast, corridor)' },
            'along the coast, shops along Main Street',
          ],
          [
            'through',
            { vi: 'Xuyên qua: đi vào phía này và ra phía kia của một không gian', en: 'Into one side of a space and out the other' },
            'through the tunnel, through the lobby, through customs',
          ],
          [
            'toward(s)',
            { vi: 'Về phía, theo hướng; (thời gian) gần tới', en: 'In the direction of; (time) near' },
            'walk toward the exit, toward the end of the month',
          ],
        ],
      },
      examples: [
        {
          en: 'All delivery trucks must enter **through** the rear gate.',
          vi: 'Tất cả xe tải giao hàng phải đi vào qua cổng sau.',
        },
        {
          en: 'Several new restaurants have opened **along** the riverfront this year.',
          vi: 'Năm nay nhiều nhà hàng mới đã mở dọc bờ sông.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**across** còn có nghĩa "trên khắp, ở mọi": across the country, across all departments. Nghĩa này rất hay gặp trong Part 5/6, ví dụ "Sales rose across all regions."',
          en: '**across** also means "in every part of": across the country, across all departments. This sense is very common in Part 5/6, as in "Sales rose across all regions."',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu giới từ trong Part 5', en: 'Attacking preposition items in Part 5' },
      points: [
        {
          vi: '**Nhìn cụm danh từ sau chỗ trống** trước tiên: giờ → at; thứ, ngày tháng → on; tháng, năm → in; số + đơn vị → for; mốc → since; sự kiện → during; địa chỉ có số nhà → at; tầng → on.',
          en: '**Look at the noun phrase after the blank** first: clock time → at; day or date → on; month or year → in; number + unit → for; point in time → since; event → during; numbered address → at; floor → on.',
        },
        {
          vi: '**Nhìn động từ**: hành động một lần (submit, return, complete) + mốc → by; trạng thái kéo dài (remain, stay, be valid, be open) + mốc → until.',
          en: '**Look at the verb**: one-time action (submit, return, complete) + a point → by; continuing state (remain, stay, be valid, be open) + a point → until.',
        },
        {
          vi: '**Nhìn thì**: since + mốc và over the past + khoảng diễn tả một quãng kéo dài đến nay, nên mệnh đề chính thường ở thì hoàn thành (has/have + V3).',
          en: '**Look at the tense**: since + a point and over the past + a period describe a span leading up to now, so the main clause is usually in a perfect tense (has/have + V3).',
        },
        {
          vi: '**Nhìn từ đi kèm**: between … and, from … to/through, within + khoảng + of (within 30 days of purchase).',
          en: '**Look at the partner words**: between ... and, from ... to/through, within + period + of (within 30 days of purchase).',
        },
        {
          vi: '**Động từ chuyển động** (walk, run, pass, extend) → chọn across, along, through hay toward theo hình dạng của đường đi.',
          en: '**Verbs of movement** (walk, run, pass, extend) → choose across, along, through or toward by the shape of the route.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng dịch từng chữ: "trong" của tiếng Việt có thể là in, for, during, within, over hay throughout; "đến" có thể là by, until hoặc to. Hãy để danh từ và động từ trong câu quyết định.',
          en: 'Do not translate word for word: a single Vietnamese word for "in" can map to in, for, during, within, over or throughout, and a single word for "up to" can be by, until or to. Let the noun and the verb in the sentence decide.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: "The annual shareholders' meeting will take place ------- Thursday, May 14, in the main ballroom of the Grandview Hotel.",
      options: ['at', 'in', 'on', 'since'],
      answer: 2,
      explanation: {
        vi: '**Thursday, May 14** là thứ kèm ngày tháng, nên dùng **on**. at dùng cho giờ (at 10 a.m.), in dùng cho tháng, năm (in May); since (từ … đến nay) cần một việc kéo dài đến hiện tại, không hợp với will take place.',
        en: '**Thursday, May 14** is a day with a date, so it takes **on**. at is for clock times (at 10 a.m.), in for months and years (in May); since (from then until now) needs something lasting up to the present and does not fit will take place.',
      },
      translation: 'Cuộc họp cổ đông thường niên sẽ diễn ra vào thứ Năm, ngày 14 tháng 5, tại phòng tiệc chính của khách sạn Grandview.',
    },
    {
      sentence: 'Hartwell Savings Bank will open its newest branch next month ------- 210 Riverside Avenue, directly opposite the public library.',
      options: ['at', 'on', 'in', 'over'],
      answer: 0,
      explanation: {
        vi: '**210 Riverside Avenue** là địa chỉ có số nhà, nên dùng **at**. on chỉ đi với tên đường không kèm số nhà (on Riverside Avenue); in dùng cho thành phố, khu vực.',
        en: '**210 Riverside Avenue** is an address with a house number, so it takes **at**. on is used with a street name alone (on Riverside Avenue); in is for cities and areas.',
      },
      translation: 'Ngân hàng Hartwell Savings sẽ khai trương chi nhánh mới nhất vào tháng tới tại số 210 đại lộ Riverside, ngay đối diện thư viện công cộng.',
    },
    {
      sentence: 'All expense reports for the third quarter must be submitted to the finance department ------- October 5.',
      options: ['until', 'by', 'since', 'during'],
      answer: 1,
      explanation: {
        vi: '**must be submitted** là hành động xảy ra một lần và **October 5** là hạn chót → **by** (chậm nhất là). until là bẫy: nó chỉ dùng cho việc kéo dài liên tục đến mốc đó, như remain hay stay.',
        en: '**must be submitted** is a one-time action and **October 5** is a deadline → **by** (no later than). until is the trap: it is only for something that continues up to that point, like remain or stay.',
      },
      translation: 'Tất cả báo cáo chi phí của quý ba phải được nộp cho phòng tài chính chậm nhất là ngày 5 tháng 10.',
    },
    {
      sentence: 'Because of ongoing renovations, the fitness center at the Lakeside Inn will remain closed ------- the end of the month.',
      options: ['by', 'since', 'within', 'until'],
      answer: 3,
      explanation: {
        vi: '**remain closed** là trạng thái kéo dài liên tục đến một mốc, nên dùng **until**. by chỉ hạn chót cho hành động một lần; since nhìn ngược về quá khứ, không hợp với will remain; within cần một khoảng thời gian (within two weeks).',
        en: '**remain closed** is a state that continues up to a point, so use **until**. by marks a deadline for a one-time action; since looks back to the past and does not fit will remain; within needs a length of time (within two weeks).',
      },
      translation: 'Do đang cải tạo, phòng tập thể dục của khách sạn Lakeside Inn sẽ tiếp tục đóng cửa cho đến cuối tháng.',
    },
    {
      sentence: 'Ms. Albright has worked as a regional sales manager at Corvan Logistics ------- nearly twelve years.',
      options: ['for', 'since', 'during', 'within'],
      answer: 0,
      explanation: {
        vi: '**nearly twelve years** là độ dài thời gian (số + đơn vị), nên dùng **for**. since chỉ đi với mốc (since 2014); during không đứng thẳng trước con số chỉ khoảng thời gian.',
        en: '**nearly twelve years** is a length of time (number + unit), so use **for**. since takes a point in time (since 2014); during cannot go directly before a number of years.',
      },
      translation: 'Bà Albright đã làm quản lý kinh doanh khu vực tại Corvan Logistics được gần mười hai năm.',
    },
    {
      sentence: 'The power went out briefly ------- the board meeting, but the presentation files were saved automatically.',
      options: ['since', 'for', 'during', 'by'],
      answer: 2,
      explanation: {
        vi: '**the board meeting** là một sự kiện có tên gọi, và việc mất điện xảy ra vào một lúc trong sự kiện đó → **during**. for cần độ dài thời gian (for ten minutes); since (từ … đến nay) cần một trạng thái kéo dài đến hiện tại, không hợp với sự việc chớp nhoáng went out briefly.',
        en: '**the board meeting** is a named event, and the power cut happened at some point within it → **during**. for needs a length of time (for ten minutes); since (from then until now) needs a state lasting up to the present, not a brief past event like went out briefly.',
      },
      translation: 'Điện bị mất trong chốc lát giữa cuộc họp hội đồng quản trị, nhưng các tệp thuyết trình đã được lưu tự động.',
    },
    {
      sentence: 'Customers who are not fully satisfied may return any unused item for a full refund ------- 30 days of delivery.',
      options: ['during', 'within', 'since', 'until'],
      answer: 1,
      explanation: {
        vi: 'Cụm **30 days of delivery** (khoảng thời gian + of + mốc bắt đầu) chỉ đi với **within**: trong vòng 30 ngày kể từ khi giao hàng. during không đứng thẳng trước con số; until cần một mốc, không phải một khoảng.',
        en: 'The phrase **30 days of delivery** (period + of + starting point) only works with **within**: no later than 30 days after delivery. during cannot go directly before a number; until needs a point in time, not a period.',
      },
      translation: 'Khách hàng chưa hoàn toàn hài lòng có thể trả lại bất kỳ sản phẩm nào chưa qua sử dụng để được hoàn tiền toàn bộ trong vòng 30 ngày kể từ ngày giao hàng.',
    },
    {
      sentence: 'Brightline Energy has opened fourteen new service centers across the region ------- the past five years.',
      options: ['since', 'at', 'until', 'over'],
      answer: 3,
      explanation: {
        vi: '**the past five years** là một khoảng thời gian kéo dài đến nay, đi với hiện tại hoàn thành **has opened** → **over**. since chỉ đi với mốc (since 2021); "since the past five years" là lỗi rất hay gặp.',
        en: '**the past five years** is a period leading up to now, used with the Present Perfect **has opened** → **over**. since takes only a point in time (since 2021); "since the past five years" is a very common error.',
      },
      translation: 'Brightline Energy đã mở mười bốn trung tâm dịch vụ mới trên khắp khu vực trong năm năm qua.',
    },
    {
      sentence: 'A recent survey shows that the new flexible work policy is especially popular ------- younger employees at the firm.',
      options: ['between', 'along', 'toward', 'among'],
      answer: 3,
      explanation: {
        vi: '**younger employees** là một nhóm (danh từ số nhiều) và không có cấu trúc "X and Y", nên dùng **among** (trong số). between cần hai đối tượng nối bằng and; along và toward chỉ hướng di chuyển.',
        en: '**younger employees** is a group (plural noun) with no "X and Y" pattern, so use **among**. between needs two items joined by and; along and toward describe movement.',
      },
      translation: 'Một cuộc khảo sát gần đây cho thấy chính sách làm việc linh hoạt mới đặc biệt được ưa chuộng trong số các nhân viên trẻ của công ty.',
    },
    {
      sentence: 'Guests at the Bayview Hotel can jog on a scenic path that runs ------- the river for about five kilometers.',
      options: ['across', 'along', 'among', 'between'],
      answer: 1,
      explanation: {
        vi: 'Con đường chạy theo chiều dài dòng sông **for about five kilometers** → **along** (dọc theo). across là băng ngang từ bờ này sang bờ kia, không thể kéo dài năm cây số; among và between không đi với một danh từ số ít đứng một mình.',
        en: 'The path follows the length of the river **for about five kilometers** → **along**. across means from one bank to the other, which cannot stretch for five kilometers; among and between do not take a lone singular noun.',
      },
      translation: 'Khách lưu trú tại khách sạn Bayview có thể chạy bộ trên một con đường đẹp chạy dọc theo con sông khoảng năm cây số.',
    },
  ],
};
