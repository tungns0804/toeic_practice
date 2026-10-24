import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'tenses-present',
  intro: {
    vi: 'Câu chọn thì xuất hiện đều đặn trong Part 5 và Part 6, và cặp dễ nhầm đầu tiên là **hiện tại đơn** (thói quen, sự thật, lịch trình) với **hiện tại tiếp diễn** (việc đang diễn ra, tình huống tạm thời, xu hướng). Bài này dạy bạn dựa vào dấu hiệu thời gian và loại động từ để chọn đúng trong vài giây.',
    en: 'Tense questions appear regularly in Parts 5 and 6, and the first pair learners mix up is the **Present Simple** (habits, facts, schedules) and the **Present Continuous** (actions in progress, temporary situations, trends). This lesson shows you how to use time markers and verb type to choose correctly in seconds.',
  },
  mistakes: [
    {
      wrong: 'Our downtown branch [[is opening]] at 8:30 every morning.',
      right: 'Our downtown branch [[opens]] at 8:30 every morning.',
      explanation: {
        vi: '**every morning** chỉ một việc lặp lại theo lịch cố định, nên dùng hiện tại đơn **opens**. Hiện tại tiếp diễn không dùng cho thói quen hay giờ giấc thường lệ.',
        en: '**every morning** describes a fixed, repeated schedule, so the Present Simple **opens** is needed. The Present Continuous is not used for routines or regular hours.',
      },
    },
    {
      wrong: 'Please hold the line; Mr. Davis [[speaks]] with another customer right now.',
      right: 'Please hold the line; Mr. Davis [[is speaking]] with another customer right now.',
      explanation: {
        vi: '**right now** cho biết hành động đang diễn ra ngay lúc nói → hiện tại tiếp diễn **is speaking**. Hiện tại đơn **speaks** chỉ thói quen, không diễn tả việc đang xảy ra.',
        en: '**right now** shows the action is in progress at the moment of speaking → Present Continuous **is speaking**. The Present Simple **speaks** describes habits, not something happening now.',
      },
    },
    {
      wrong: 'Harmon Textiles [[is currently owning]] three factories in Vietnam.',
      right: 'Harmon Textiles [[currently owns]] three factories in Vietnam.',
      explanation: {
        vi: '**own** (sở hữu) là động từ trạng thái nên giữ hiện tại đơn dù câu có **currently**. Dấu hiệu thời gian không "ép" được động từ trạng thái sang tiếp diễn.',
        en: '**own** is a stative verb (possession), so it stays in the Present Simple even with **currently**. A time marker cannot force a stative verb into the continuous.',
      },
    },
    {
      wrong: 'The orientation program [[is consisting]] of three online modules and a site visit.',
      right: 'The orientation program [[consists]] of three online modules and a site visit.',
      explanation: {
        vi: '**consist of** (gồm có) nói về thành phần cấu tạo, là động từ trạng thái → **consists**, không dùng **is consisting**.',
        en: '**consist of** describes what something is made up of; it is a stative verb → **consists**, never **is consisting**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Hình thức của hai thì', en: 'Forms of the two tenses' },
      body: {
        vi: 'Trước khi xét nghĩa, hãy nhìn hình thức: trong đề, nhiều lựa chọn bị loại ngay vì sai cấu trúc (thiếu trợ động từ, sai dạng động từ) hoặc không hòa hợp số ít/số nhiều với chủ ngữ.',
        en: 'Before thinking about meaning, look at form: many options on the test can be eliminated at once because the structure is wrong (missing auxiliary, wrong verb form) or the verb does not agree with the subject.',
      },
      table: {
        head: [
          { vi: 'Thì', en: 'Tense' },
          { vi: 'Khẳng định', en: 'Affirmative' },
          { vi: 'Phủ định', en: 'Negative' },
          { vi: 'Nghi vấn', en: 'Question' },
        ],
        rows: [
          ['Present Simple', 'I/you/we/they work · he/she/it works', 'do not / does not + work', 'Do / Does + S + work?'],
          ['Present Continuous', 'I am / he is / they are + working', 'am / is / are + not + working', 'Am / Is / Are + S + working?'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Sau **do/does**, động từ luôn ở dạng nguyên mẫu: **does not cover**, không viết "does not covers". Sau **am/is/are** phải là V-ing: **is not working**, không viết "is not work". Đuôi **-s/-es** với chủ ngữ số ít được ôn kỹ ở bài 3.1.',
          en: 'After **do/does**, the verb is always in its base form: **does not cover**, not "does not covers". After **am/is/are** you need V-ing: **is not working**, not "is not work". The **-s/-es** ending with singular subjects is reviewed in lesson 3.1.',
        },
      },
    },
    {
      heading: { vi: 'Hiện tại đơn: thói quen, sự thật, lịch trình', en: 'Present Simple: habits, facts and schedules' },
      points: [
        {
          vi: '**Thói quen, việc lặp lại** theo chu kỳ: họp hằng tuần, kiểm kê hằng tháng, báo cáo cuối quý.',
          en: '**Habits and repeated actions**: weekly meetings, monthly stock checks, quarterly reports.',
        },
        {
          vi: '**Sự thật, tình trạng lâu dài**: thông tin về công ty, chính sách, quy định, đặc điểm sản phẩm.',
          en: '**Facts and permanent situations**: company information, policies, rules, product features.',
        },
        {
          vi: '**Lịch trình, thời gian biểu cố định**: giờ mở cửa, giờ tàu xe chạy, giờ bắt đầu ca làm.',
          en: '**Fixed schedules and timetables**: opening hours, train and bus departures, shift start times.',
        },
      ],
      table: {
        head: [
          { vi: 'Nhóm dấu hiệu', en: 'Type of signal' },
          { vi: 'Từ / cụm từ', en: 'Words and phrases' },
        ],
        rows: [
          [{ vi: 'Trạng từ tần suất', en: 'Frequency adverbs' }, 'always, usually, often, regularly, generally, typically, sometimes, rarely, never'],
          [{ vi: 'Cụm chỉ sự lặp lại', en: 'Repetition phrases' }, 'every day/week/month, each quarter, once a year, twice a month, on Mondays'],
          [{ vi: 'Cụm chỉ quy tắc chung', en: 'General-rule phrases' }, 'as a rule, in general, normally, routinely'],
        ],
      },
      examples: [
        {
          en: 'The auditors **visit** our plant twice a year.',
          vi: 'Đoàn kiểm toán đến nhà máy của chúng tôi hai lần mỗi năm.',
        },
        {
          en: 'Our standard room rate **includes** breakfast and free parking.',
          vi: 'Giá phòng tiêu chuẩn của chúng tôi đã bao gồm bữa sáng và chỗ đỗ xe miễn phí.',
        },
        {
          en: 'The last ferry to the island **departs** at 9:45 p.m.',
          vi: 'Chuyến phà cuối cùng ra đảo khởi hành lúc 9 giờ 45 tối.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trạng từ tần suất thường đứng **trước động từ thường** (**usually takes**) nhưng **sau động từ to be** (**is usually closed**). Hiện tại đơn còn dùng cho lịch trình trong tương lai (The train leaves at 7 tomorrow): phần này học ở bài 4.5.',
          en: 'Frequency adverbs usually go **before a main verb** (**usually takes**) but **after the verb be** (**is usually closed**). The Present Simple can also describe future timetables (The train leaves at 7 tomorrow); that use is covered in lesson 4.5.',
        },
      },
    },
    {
      heading: { vi: 'Hiện tại tiếp diễn: đang diễn ra, tạm thời, xu hướng', en: 'Present Continuous: in progress, temporary, changing' },
      points: [
        {
          vi: '**Việc đang diễn ra ngay lúc nói**: đang họp, đang nghe điện thoại, đang sửa máy.',
          en: '**Actions in progress at the moment of speaking**: in a meeting, on the phone, repairing a machine.',
        },
        {
          vi: '**Tình huống tạm thời quanh thời điểm hiện tại**, không nhất thiết đúng lúc nói: tuần này làm ở chi nhánh khác, tạm ở khách sạn trong lúc sửa nhà.',
          en: '**Temporary situations around now**, not necessarily at this exact moment: working at another branch this week, staying at a hotel during renovations.',
        },
        {
          vi: '**Xu hướng, sự thay đổi đang diễn ra**: giá tăng, nhu cầu giảm, ngày càng phổ biến (hay đi với **increasingly**, **more and more**, **get/become + so sánh hơn**).',
          en: '**Trends and changes in progress**: prices rising, demand falling, something becoming more popular (often with **increasingly**, **more and more**, **get/become + comparative**).',
        },
        {
          vi: '**presently** trong đề TOEIC thường mang nghĩa "hiện nay" (= currently); trong văn phong trang trọng hoặc văn chương, từ này còn có thể mang nghĩa "chẳng bao lâu nữa". Hiện tại tiếp diễn còn dùng cho kế hoạch tương lai đã sắp xếp: xem bài 4.5.',
          en: '**presently** on the TOEIC usually means "at present" (= currently); in formal or literary writing it can also mean "soon". The Present Continuous is also used for arranged future plans: see lesson 4.5.',
        },
      ],
      table: {
        head: [
          { vi: 'Nhóm dấu hiệu', en: 'Type of signal' },
          { vi: 'Từ / cụm từ', en: 'Words and phrases' },
        ],
        rows: [
          [{ vi: 'Ngay lúc nói', en: 'At this moment' }, 'now, right now, at the moment, at present, currently, presently'],
          [{ vi: 'Giai đoạn tạm thời', en: 'Temporary period' }, 'today, this week/month/quarter, for the time being, temporarily'],
          [{ vi: 'Xu hướng', en: 'Trends' }, 'these days, nowadays, increasingly, more and more'],
        ],
      },
      examples: [
        {
          en: 'Ms. Okada **is interviewing** a candidate, so she will call you back in an hour.',
          vi: 'Cô Okada đang phỏng vấn một ứng viên nên một tiếng nữa cô ấy sẽ gọi lại cho anh.',
        },
        {
          en: 'Our chief accountant **is working** from the Hanoi office this month to help with the audit.',
          vi: 'Tháng này kế toán trưởng của chúng tôi làm việc tại văn phòng Hà Nội để hỗ trợ đợt kiểm toán.',
        },
        {
          en: 'Demand for electric delivery vans **is growing** rapidly.',
          vi: 'Nhu cầu về xe tải giao hàng chạy điện đang tăng nhanh.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**now, currently, these days, nowadays** không tự động đòi tiếp diễn. Với động từ trạng thái, một tình trạng hiện thời hay một thói quen chung của thời nay, hiện tại đơn vẫn đúng: The firm **currently employs** 300 people. / We **now offer** same-day delivery. / Most guests **pay** by card these days. Hãy xét cả loại động từ và ý nghĩa, đừng chỉ nhìn dấu hiệu.',
          en: '**now, currently, these days, nowadays** do not automatically call for the continuous. With stative verbs, a current state of affairs or a general present-day habit, the Present Simple is still correct: The firm **currently employs** 300 people. / We **now offer** same-day delivery. / Most guests **pay** by card these days. Check the verb type and the meaning, not just the time marker.',
        },
      },
    },
    {
      heading: { vi: 'Đặt hai thì cạnh nhau', en: 'The two tenses side by side' },
      body: {
        vi: 'Cùng một động từ, đổi thì là đổi nghĩa: hiện tại đơn nói về điều thường lệ, lâu dài; hiện tại tiếp diễn nói về điều đang diễn ra, tạm thời hoặc đang thay đổi.',
        en: 'With the same verb, changing the tense changes the meaning: the Present Simple talks about what is usual or permanent; the Present Continuous talks about what is in progress, temporary or changing.',
      },
      table: {
        head: [
          { vi: 'Đối lập', en: 'Contrast' },
          { vi: 'Hiện tại đơn', en: 'Present Simple' },
          { vi: 'Hiện tại tiếp diễn', en: 'Present Continuous' },
        ],
        rows: [
          [{ vi: 'Thói quen ↔ đang diễn ra', en: 'Habit ↔ in progress' }, 'The team meets every Monday.', 'The team is meeting in Room 4 right now.'],
          [{ vi: 'Lâu dài ↔ tạm thời', en: 'Permanent ↔ temporary' }, 'Mr. Lim works in Accounting.', 'Mr. Lim is working in Sales this month.'],
          [{ vi: 'Quy luật ↔ xu hướng', en: 'Regular pattern ↔ trend' }, 'Hotel rates rise in peak season.', 'Hotel rates are rising across the region this year.'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Khi câu không có trạng từ thời gian, hãy tìm manh mối ở vế còn lại: một kết quả tạm thời như "so please use the stairs until further notice" cho thấy việc đang diễn ra → tiếp diễn; một động từ song song như "and arrives at noon" trong lịch trình → hiện tại đơn.',
          en: 'When the sentence has no time adverb, look for clues in the other clause: a temporary result such as "so please use the stairs until further notice" points to an action in progress → continuous; a parallel verb such as "and arrives at noon" in a timetable → Present Simple.',
        },
      },
    },
    {
      heading: { vi: 'Động từ trạng thái: không dùng tiếp diễn', en: 'Stative verbs: no continuous form' },
      body: {
        vi: 'Động từ trạng thái diễn tả sự sở hữu, cấu tạo, nhận thức, mong muốn hay vẻ bề ngoài chứ không phải hành động, nên thường không chia tiếp diễn, kể cả khi câu có **now**, **currently** hay **at the moment**.',
        en: 'Stative verbs describe possession, composition, knowledge, wants or appearance rather than actions, so they are normally not used in the continuous, even when the sentence contains **now**, **currently** or **at the moment**.',
      },
      table: {
        head: [
          { vi: 'Nhóm', en: 'Group' },
          { vi: 'Động từ', en: 'Verbs' },
        ],
        rows: [
          [{ vi: 'Sở hữu', en: 'Possession' }, 'own, belong (to), possess, have (= own)'],
          [{ vi: 'Cấu tạo, yêu cầu, quan hệ', en: 'Composition, requirement, relation' }, 'consist (of), contain, include, require, need, depend (on)'],
          [{ vi: 'Nhận thức, quan điểm', en: 'Knowledge and opinion' }, 'know, understand, believe, think (= believe), mean, recognize'],
          [{ vi: 'Vẻ bề ngoài', en: 'Appearance' }, 'seem, appear (= seem), look (= seem)'],
          [{ vi: 'Mong muốn, sở thích', en: 'Wants and preferences' }, 'want, prefer, like'],
        ],
      },
      examples: [
        {
          en: 'The revised contract **contains** a stricter confidentiality clause.',
          vi: 'Bản hợp đồng sửa đổi có một điều khoản bảo mật chặt chẽ hơn.',
        },
        {
          en: 'At the moment, Mr. Grant **seems** satisfied with the new supplier.',
          vi: 'Lúc này ông Grant có vẻ hài lòng với nhà cung cấp mới.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong văn nói thân mật đôi khi vẫn gặp "I\'m loving it" hay "We\'re needing more staff", và vài động từ trong bảng có thể chia tiếp diễn khi mang nghĩa hành động (We **are including** a free sample with every order this month: "kèm thêm", xem mục sau). Nhưng trong TOEIC, hễ các động từ này mang nghĩa trạng thái thì chọn hiện tại đơn.',
          en: 'In casual speech you may hear "I\'m loving it" or "We\'re needing more staff", and a few verbs in the table can take the continuous when they have an action meaning (We **are including** a free sample with every order this month: "adding", see the next section). On the TOEIC, though, whenever these verbs have a stative meaning, choose the Present Simple.',
        },
      },
    },
    {
      heading: { vi: 'Động từ hai nghĩa: lúc trạng thái, lúc hành động', en: 'Verbs with two meanings: state or action' },
      body: {
        vi: 'Một số động từ có cả nghĩa trạng thái lẫn nghĩa hành động. Chỉ khi mang nghĩa hành động, chúng mới chia tiếp diễn được.',
        en: 'Some verbs have both a stative and an action meaning. They can take the continuous only when they carry the action meaning.',
      },
      table: {
        head: [
          { vi: 'Động từ', en: 'Verb' },
          { vi: 'Nghĩa trạng thái → hiện tại đơn', en: 'Stative meaning → Present Simple' },
          { vi: 'Nghĩa hành động → có thể tiếp diễn', en: 'Action meaning → continuous possible' },
        ],
        rows: [
          [
            'have',
            { vi: 'The hotel **has** 200 rooms. (sở hữu, có)', en: 'The hotel **has** 200 rooms. (possess)' },
            { vi: 'We **are having** problems with the printer. (gặp phải; tương tự: have lunch, have a meeting)', en: 'We **are having** problems with the printer. (experience; also have lunch, have a meeting)' },
          ],
          [
            'think',
            { vi: 'I **think** the price is fair. (cho rằng)', en: 'I **think** the price is fair. (believe)' },
            { vi: 'We **are thinking** about opening a second branch. (cân nhắc)', en: 'We **are thinking** about opening a second branch. (consider)' },
          ],
          [
            'see',
            { vi: 'I **see** your point. (hiểu)', en: 'I **see** your point. (understand)' },
            { vi: 'Ms. Ford **is seeing** a client right now. (gặp, tiếp)', en: 'Ms. Ford **is seeing** a client right now. (meet)' },
          ],
          [
            'look',
            { vi: 'The proposal **looks** promising. (trông có vẻ)', en: 'The proposal **looks** promising. (seem)' },
            { vi: 'Mr. Cho **is looking** at the floor plans. (nhìn, xem xét)', en: 'Mr. Cho **is looking** at the floor plans. (examine)' },
          ],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Mẹo kiểm tra: thử thay động từ bằng một từ đồng nghĩa. Thay được bằng **own, believe, understand, seem** → nghĩa trạng thái, dùng hiện tại đơn. Thay được bằng **eat, consider, meet, examine** → nghĩa hành động, chia tiếp diễn được.',
          en: 'Quick test: replace the verb with a synonym. If **own, believe, understand, seem** fits → stative meaning, use the Present Simple. If **eat, consider, meet, examine** fits → action meaning, the continuous is possible.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu chọn thì hiện tại trong Part 5', en: 'Attacking present-tense items in Part 5' },
      points: [
        {
          vi: 'Loại theo **hình thức** trước: chủ ngữ số ít hay số nhiều; sau chỗ trống là **not + động từ nguyên mẫu** (cần do/does) hay **not + V-ing** (cần am/is/are).',
          en: 'Eliminate by **form** first: is the subject singular or plural, and is the blank followed by **not + base verb** (needs do/does) or **not + V-ing** (needs am/is/are)?',
        },
        {
          vi: 'Tìm **dấu hiệu thời gian**: every, usually, regularly, generally → hiện tại đơn; right now, at the moment, this week, these days → thường là hiện tại tiếp diễn.',
          en: 'Find the **time marker**: every, usually, regularly, generally → Present Simple; right now, at the moment, this week, these days → usually Present Continuous.',
        },
        {
          vi: 'Xét **loại động từ**: động từ trạng thái (belong, consist, require, own, know, seem…) → hiện tại đơn, kể cả khi câu có currently hay at the moment.',
          en: 'Check the **verb type**: a stative verb (belong, consist, require, own, know, seem…) → Present Simple, even when the sentence has currently or at the moment.',
        },
        {
          vi: 'Không có trạng từ thời gian thì đọc **vế còn lại**: động từ song song, mệnh đề chỉ kết quả tạm thời, hay mệnh đề **while … is being repaired** đều là manh mối.',
          en: 'No time adverb? Read **the other clause**: a parallel verb, a clause showing a temporary result, or a **while … is being repaired** clause are all clues.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Nếu bốn lựa chọn có cả dạng bị động (is checked, is being checked), hãy xét chủ ngữ tự làm hay chịu hành động: phần này học ở chương 6.',
          en: 'If the options also include passive forms (is checked, is being checked), decide whether the subject performs or receives the action: that is covered in chapter 6.',
        },
      },
    },
  ],
  questions: [
    {
      sentence: 'A technician from Brightline Security ------- the fire alarms in our building on the first Monday of every month.',
      options: ['inspects', 'is inspecting', 'inspect', 'are inspecting'],
      answer: 0,
      explanation: {
        vi: '**on the first Monday of every month** chỉ một việc lặp lại định kỳ → hiện tại đơn; chủ ngữ số ít **A technician** nên chọn **inspects**. is inspecting sai vì tiếp diễn không dùng cho lịch làm việc thường lệ; inspect thiếu đuôi -s.',
        en: '**on the first Monday of every month** describes a regular, repeated action → Present Simple; the singular subject **A technician** gives **inspects**. is inspecting is wrong because the continuous is not used for routines; inspect lacks the -s ending.',
      },
      translation: 'Một kỹ thuật viên của Brightline Security kiểm tra hệ thống báo cháy trong tòa nhà của chúng tôi vào thứ Hai đầu tiên hằng tháng.',
    },
    {
      sentence: 'Mr. Lin cannot join the conference call because he ------- lunch with a supplier at the moment.',
      options: ['has', 'is having', 'have', 'are having'],
      answer: 1,
      explanation: {
        vi: '**at the moment** cho biết việc đang diễn ra ngay lúc này. Ở đây **have lunch** nghĩa là "ăn trưa", một hành động, nên chia tiếp diễn được → **is having**. has sai vì hiện tại đơn không diễn tả việc đang xảy ra; đừng nhầm với **have** nghĩa "sở hữu".',
        en: '**at the moment** shows the action is happening right now. Here **have lunch** means "eat lunch", an action, so it can take the continuous → **is having**. has is wrong because the Present Simple does not describe something in progress; do not confuse this with **have** meaning "own".',
      },
      translation: 'Ông Lin không thể tham gia cuộc gọi hội nghị vì lúc này ông ấy đang ăn trưa với một nhà cung cấp.',
    },
    {
      sentence: 'The free shuttle bus ------- the Grandview Hotel every twenty minutes and stops at both airport terminals.',
      options: ['leave', 'is leaving', 'are leaving', 'leaves'],
      answer: 3,
      explanation: {
        vi: '**every twenty minutes** là thời gian biểu cố định, và động từ song song **stops** cũng ở hiện tại đơn → **leaves**. is leaving sai vì lịch chạy xe thường lệ không dùng tiếp diễn; leave sai vì chủ ngữ **The free shuttle bus** là số ít.',
        en: '**every twenty minutes** is a fixed timetable, and the parallel verb **stops** is also in the Present Simple → **leaves**. is leaving is wrong because a regular timetable does not take the continuous; leave is wrong because **The free shuttle bus** is singular.',
      },
      translation: 'Xe buýt đưa đón miễn phí rời khách sạn Grandview hai mươi phút một chuyến và dừng ở cả hai nhà ga sân bay.',
    },
    {
      sentence: 'Our technicians ------- the payroll software right now, so the system will be unavailable until 3 p.m.',
      options: ['update', 'updates', 'is updating', 'are updating'],
      answer: 3,
      explanation: {
        vi: '**right now** và kết quả tạm thời **so the system will be unavailable until 3 p.m.** cho thấy việc đang diễn ra → hiện tại tiếp diễn; chủ ngữ số nhiều **Our technicians** → **are updating**. update sai vì hiện tại đơn chỉ công việc thường lệ; is updating không hòa hợp với chủ ngữ số nhiều.',
        en: '**right now** and the temporary result **so the system will be unavailable until 3 p.m.** show an action in progress → Present Continuous; the plural subject **Our technicians** gives **are updating**. update is wrong because the Present Simple describes routine work; is updating does not agree with the plural subject.',
      },
      translation: 'Các kỹ thuật viên của chúng tôi đang cập nhật phần mềm tính lương ngay lúc này, nên hệ thống sẽ không truy cập được cho đến 3 giờ chiều.',
    },
    {
      sentence: 'The open position at our Lisbon office currently ------- fluency in both Portuguese and English.',
      options: ['is requiring', 'requiring', 'requires', 'require'],
      answer: 2,
      explanation: {
        vi: '**require** (đòi hỏi) là động từ trạng thái nên giữ hiện tại đơn dù có **currently** → **requires**. is requiring là bẫy dành cho người thấy currently liền chọn tiếp diễn; requiring không phải động từ chính nên câu sẽ thiếu động từ.',
        en: '**require** is a stative verb, so it stays in the Present Simple even with **currently** → **requires**. is requiring is the trap for anyone who sees currently and picks the continuous; requiring is not a finite verb, so the sentence would have no main verb.',
      },
      translation: 'Vị trí đang tuyển tại văn phòng Lisbon của chúng tôi hiện yêu cầu thông thạo cả tiếng Bồ Đào Nha lẫn tiếng Anh.',
    },
    {
      sentence: 'Ms. Brennan usually ------- the 7:15 train to the office, but this morning she drove because of a rail strike.',
      options: ['is taking', 'takes', 'take', 'taking'],
      answer: 1,
      explanation: {
        vi: '**usually** là trạng từ tần suất, báo hiệu thói quen → hiện tại đơn **takes**. Vế **but this morning she drove** chỉ là một ngoại lệ trong quá khứ, không làm thay đổi thói quen. is taking sai vì tiếp diễn không diễn tả thói quen thường lệ.',
        en: '**usually** is a frequency adverb signalling a habit → Present Simple **takes**. The clause **but this morning she drove** is only a past exception and does not change the habit. is taking is wrong because the continuous does not express a regular habit.',
      },
      translation: 'Cô Brennan thường đi chuyến tàu 7 giờ 15 đến văn phòng, nhưng sáng nay cô ấy lái xe vì đường sắt đình công.',
    },
    {
      sentence: 'Ms. Reyes ------- at the Bayside Inn this week while her apartment is being repainted.',
      options: ['is staying', 'stays', 'stay', 'are staying'],
      answer: 0,
      explanation: {
        vi: '**this week** cùng mệnh đề **while her apartment is being repainted** cho thấy một tình huống tạm thời đang diễn ra → **is staying**. stays sai vì hiện tại đơn dùng cho điều thường lệ, lâu dài, không phải chỗ ở tạm trong tuần này.',
        en: '**this week** together with **while her apartment is being repainted** shows a temporary situation in progress → **is staying**. stays is wrong because the Present Simple is for regular or permanent situations, not a temporary stay this week.',
      },
      translation: 'Tuần này cô Reyes ở tạm khách sạn Bayside Inn trong lúc căn hộ của cô ấy đang được sơn lại.',
    },
    {
      sentence: 'Our standard warranty ------- not cover damage caused by improper installation or unauthorized repairs.',
      options: ['is', 'are', 'does', 'do'],
      answer: 2,
      explanation: {
        vi: 'Sau chỗ trống là **not cover** (động từ nguyên mẫu) nên cần trợ động từ **do/does** của hiện tại đơn; chủ ngữ số ít **Our standard warranty** → **does**. is sai vì sau **is not** phải là V-ing. Câu nêu một chính sách cố định nên dùng hiện tại đơn là hợp lý.',
        en: 'The blank is followed by **not cover** (a base verb), so it needs the Present Simple auxiliary **do/does**; the singular subject **Our standard warranty** gives **does**. is is wrong because **is not** must be followed by V-ing. The sentence states a fixed policy, which suits the Present Simple.',
      },
      translation: 'Chế độ bảo hành tiêu chuẩn của chúng tôi không áp dụng cho hư hỏng do lắp đặt sai cách hoặc sửa chữa không được phép.',
    },
    {
      sentence: 'Demand for bicycle parking at our headquarters ------- steadily this year, so management is adding forty more racks.',
      options: ['grows', 'are growing', 'is growing', 'grow'],
      answer: 2,
      explanation: {
        vi: 'Động từ chỉ sự thay đổi **grow** (tăng dần) đi với **steadily this year** và kết quả **so management is adding forty more racks** mô tả một xu hướng đang diễn ra trong giai đoạn hiện tại → hiện tại tiếp diễn; chủ ngữ **Demand** là danh từ không đếm được, số ít → **is growing**. grows sai vì hiện tại đơn chỉ quy luật lặp lại, không diễn tả một xu hướng đang thay đổi trong năm nay; are growing không hòa hợp với chủ ngữ số ít.',
        en: 'The change verb **grow** with **steadily this year** and the result **so management is adding forty more racks** describes a trend in progress during the current period → Present Continuous; the subject **Demand** is uncountable and singular → **is growing**. grows is wrong because the Present Simple states regular patterns, not a trend developing this year; are growing does not agree with the singular subject.',
      },
      translation: 'Năm nay nhu cầu chỗ để xe đạp tại trụ sở của chúng tôi đang tăng đều, nên ban quản lý đang lắp thêm bốn mươi giá để xe.',
    },
    {
      sentence: 'The black briefcase left in Conference Room B ------- to Mr. Haddad, who is currently meeting with a client downstairs.',
      options: ['is belonging', 'belong', 'are belonging', 'belongs'],
      answer: 3,
      explanation: {
        vi: '**belong to** (thuộc về) là động từ trạng thái → luôn dùng hiện tại đơn **belongs**. Bẫy nằm ở **is currently meeting** trong mệnh đề phía sau: dấu hiệu đó đi với động từ meet, không áp dụng cho belong. is belonging sai vì động từ trạng thái không chia tiếp diễn.',
        en: '**belong to** is a stative verb → always Present Simple **belongs**. The trap is **is currently meeting** in the following clause: that cue goes with the verb meet, not with belong. is belonging is wrong because stative verbs do not take the continuous.',
      },
      translation: 'Chiếc cặp tài liệu màu đen bỏ quên trong Phòng họp B là của ông Haddad, người hiện đang gặp một khách hàng ở tầng dưới.',
    },
  ],
};
