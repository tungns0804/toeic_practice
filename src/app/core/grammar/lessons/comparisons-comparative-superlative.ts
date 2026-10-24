import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'comparisons-comparative-superlative',
  intro: {
    vi: 'Bài này dạy cách chọn đúng dạng **so sánh hơn** (-er/more + than) và **so sánh nhất** (the -est/most), kể cả các dạng bất quy tắc và các cấu trúc đặc biệt. Trong Part 5/6, đề thường đưa bốn dạng của cùng một tính từ (large / larger / largest / largely) hoặc bắt bạn chọn trạng từ nhấn mạnh đi trước so sánh hơn.',
    en: 'This lesson teaches you to pick the right **comparative** (-er/more + than) and **superlative** (the -est/most) forms, including irregular forms and special patterns. In Part 5/6 you typically see four forms of one adjective (large / larger / largest / largely) or must choose the intensifier that goes before a comparative.',
  },
  mistakes: [
    {
      wrong: "This year's revenue is [[very]] higher than last year's.",
      right: "This year's revenue is [[much]] higher than last year's.",
      explanation: {
        vi: '**very** không đứng ngay trước dạng so sánh hơn. Muốn nhấn mạnh phải dùng **much, far, even, a lot, significantly, considerably**…',
        en: '**very** cannot go directly before a comparative. To intensify one, use **much, far, even, a lot, significantly, considerably**, etc.',
      },
    },
    {
      wrong: 'Ms. Tran is one of the most experienced [[accountant]] in our firm.',
      right: 'Ms. Tran is one of the most experienced [[accountants]] in our firm.',
      explanation: {
        vi: 'Cấu trúc **one of the + so sánh nhất** luôn đi với danh từ **số nhiều**: "một trong những kế toán viên…".',
        en: 'The pattern **one of the + superlative** always takes a **plural** noun: "one of many accountants".',
      },
    },
    {
      wrong: 'Please contact our office if you need [[farther]] information.',
      right: 'Please contact our office if you need [[further]] information.',
      explanation: {
        vi: 'Với nghĩa "thêm, bổ sung" chỉ dùng **further**. **farther** chỉ nói về khoảng cách vật lý (xa hơn).',
        en: 'In the sense of "additional", only **further** is used. **farther** refers only to physical distance.',
      },
    },
    {
      wrong: 'The earlier you book your flight, [[cheaper]] the tickets will be.',
      right: 'The earlier you book your flight, [[the cheaper]] the tickets will be.',
      explanation: {
        vi: 'Cấu trúc "càng… càng…" cần **the** ở CẢ HAI vế: **the + so sánh hơn…, the + so sánh hơn…**.',
        en: 'The "the more…, the more…" pattern needs **the** in BOTH halves: **the + comparative…, the + comparative…**.',
      },
    },
    {
      wrong: "Of the two proposals, Mr. Kim's is [[the most]] practical.",
      right: "Of the two proposals, Mr. Kim's is [[the more]] practical.",
      explanation: {
        vi: 'Khi chỉ so sánh **hai** đối tượng (of the two), văn phong chuẩn và đề TOEIC dùng **the + so sánh hơn**, không dùng so sánh nhất.',
        en: 'When only **two** things are compared (of the two), formal English and the TOEIC use **the + comparative**, not the superlative.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Cách tạo dạng so sánh hơn và so sánh nhất', en: 'Forming comparatives and superlatives' },
      body: {
        vi: 'Số âm tiết của tính từ/trạng từ quyết định dùng đuôi **-er / -est** hay thêm **more / most** phía trước. So sánh hơn đi với **than**; so sánh nhất thường có **the** đứng trước.',
        en: 'The number of syllables decides whether the adjective/adverb takes **-er / -est** or is preceded by **more / most**. Comparatives go with **than**; superlatives usually take **the**.',
      },
      table: {
        head: [
          { vi: 'Loại từ', en: 'Word type' },
          { vi: 'So sánh hơn', en: 'Comparative' },
          { vi: 'So sánh nhất', en: 'Superlative' },
          { vi: 'Ghi chú', en: 'Notes' },
        ],
        rows: [
          [
            { vi: 'Một âm tiết', en: 'One syllable' },
            'cheap → cheaper, large → larger, big → bigger',
            'the cheapest, the largest, the biggest',
            { vi: 'Tận cùng -e chỉ thêm -r/-st; phụ âm–nguyên âm–phụ âm thì gấp đôi phụ âm cuối', en: 'Final -e adds only -r/-st; consonant–vowel–consonant doubles the last consonant' },
          ],
          [
            { vi: 'Hai âm tiết tận cùng -y', en: 'Two syllables ending in -y' },
            'busy → busier, early → earlier',
            'the busiest, the earliest',
            { vi: 'Đổi -y thành -i rồi thêm -er/-est', en: 'Change -y to -i, then add -er/-est' },
          ],
          [
            { vi: 'Hai âm tiết trở lên', en: 'Two or more syllables' },
            'more efficient, more reliable',
            'the most efficient, the most reliable',
            { vi: 'Thêm more/most, giữ nguyên tính từ', en: 'Add more/most; the adjective does not change' },
          ],
          [
            { vi: 'Trạng từ đuôi -ly', en: 'Adverbs ending in -ly' },
            'more quickly, more carefully',
            'the most quickly, the most carefully',
            { vi: 'Không nói quicklier', en: 'Never quicklier' },
          ],
          [
            { vi: 'Trạng từ một âm tiết', en: 'One-syllable adverbs' },
            'fast → faster, hard → harder, late → later',
            'the fastest, the hardest, the latest',
            { vi: 'Giống tính từ một âm tiết', en: 'Same as one-syllable adjectives' },
          ],
        ],
      },
      examples: [
        {
          en: 'The new courier service is **cheaper** and **more reliable than** the old one.',
          vi: 'Dịch vụ chuyển phát mới rẻ hơn và đáng tin cậy hơn dịch vụ cũ.',
        },
        {
          en: 'December is **the busiest** month for our retail stores.',
          vi: 'Tháng Mười Hai là tháng bận rộn nhất của các cửa hàng bán lẻ của chúng tôi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không bao giờ dùng hai dấu hiệu so sánh cùng lúc: "more cheaper", "most largest" đều sai. Một vài tính từ hai âm tiết (quiet, simple, narrow, common) nhận được cả hai cách, nhưng đề TOEIC không đặt bẫy ở đó.',
          en: 'Never mark a comparison twice: "more cheaper" and "most largest" are both wrong. A few two-syllable adjectives (quiet, simple, narrow, common) accept both patterns, but the TOEIC does not set traps there.',
        },
      },
    },
    {
      heading: { vi: 'Dạng bất quy tắc', en: 'Irregular forms' },
      table: {
        head: [
          { vi: 'Nguyên mẫu', en: 'Base form' },
          { vi: 'So sánh hơn', en: 'Comparative' },
          { vi: 'So sánh nhất', en: 'Superlative' },
        ],
        rows: [
          ['good / well', 'better', 'the best'],
          ['bad / badly', 'worse', 'the worst'],
          ['far', 'farther / further', 'the farthest / the furthest'],
          ['little', 'less', 'the least'],
          ['many / much', 'more', 'the most'],
        ],
      },
      examples: [
        {
          en: 'The second prototype performed **better** in the durability tests.',
          vi: 'Mẫu thử thứ hai hoạt động tốt hơn trong các bài kiểm tra độ bền.',
        },
        {
          en: 'Please let us know if you require **further** assistance with your booking.',
          vi: 'Vui lòng cho chúng tôi biết nếu quý khách cần hỗ trợ thêm về việc đặt phòng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**farther** và **further** đều dùng được cho khoảng cách (the farther/further branch). Nhưng với nghĩa "thêm, bổ sung, tiếp theo" (further information, further notice, further details) thì CHỈ có **further**.',
          en: '**farther** and **further** can both describe distance (the farther/further branch). But in the sense of "additional, more" (further information, further notice, further details), ONLY **further** is correct.',
        },
      },
    },
    {
      heading: { vi: 'Nhấn mạnh so sánh hơn', en: 'Intensifying a comparative' },
      body: {
        vi: 'Để nói "hơn nhiều", "hơn hẳn", đặt một trạng từ nhấn mạnh ngay trước dạng so sánh hơn. Đây là dạng câu rất hay gặp: bốn lựa chọn là bốn trạng từ, chỉ một từ đi được với so sánh hơn.',
        en: 'To say "much more" or "far more", put an intensifier directly before the comparative. This is a very common item: four adverbs as options, only one of which can modify a comparative.',
      },
      points: [
        {
          vi: 'Dùng được: **much, far, even, still, a lot, significantly, considerably, substantially**; mức nhẹ: **slightly, a little, a bit**.',
          en: 'Correct: **much, far, even, still, a lot, significantly, considerably, substantially**; for a small difference: **slightly, a little, a bit**.',
        },
        {
          vi: 'KHÔNG dùng: **very, so, too, quite** đứng ngay trước so sánh hơn ("very higher", "so cheaper" đều sai). Lưu ý: "very much better", "so much cheaper" vẫn đúng, vì chính much bổ nghĩa cho so sánh hơn.',
          en: 'NOT allowed directly before a comparative: **very, so, too, quite** ("very higher" and "so cheaper" are wrong). Note that "very much better" and "so much cheaper" are fine, because much is what modifies the comparative.',
        },
        {
          vi: 'So sánh nhất được nhấn mạnh bằng **by far**: by far the largest supplier (lớn nhất, bỏ xa phần còn lại).',
          en: 'A superlative is intensified with **by far**: by far the largest supplier.',
        },
      ],
      examples: [
        {
          en: 'Shipping by rail is **considerably cheaper than** shipping by air.',
          vi: 'Vận chuyển bằng đường sắt rẻ hơn đáng kể so với vận chuyển bằng đường hàng không.',
        },
        {
          en: 'The updated software runs **even faster** on older computers.',
          vi: 'Phần mềm bản cập nhật chạy thậm chí còn nhanh hơn trên các máy tính đời cũ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Thấy **very** trong bốn lựa chọn và phía sau chỗ trống là dạng -er/more + than → loại **very** ngay.',
          en: 'If **very** is an option and the blank is followed by an -er/more + than form, eliminate **very** at once.',
        },
      },
    },
    {
      heading: { vi: 'So sánh nhất: the -est/most + in / of / ever', en: 'Superlatives: the -est/most + in / of / ever' },
      points: [
        {
          vi: '**in** + một nơi hoặc một tập thể (danh từ số ít): the largest hotel **in the city**, the best salesperson **in the department**.',
          en: '**in** + a place or a group named by a singular noun: the largest hotel **in the city**, the best salesperson **in the department**.',
        },
        {
          vi: '**of** + một nhóm (số nhiều) hoặc all: the cheapest **of the three quotes**, the most popular **of all** our tours.',
          en: '**of** + a plural group or all: the cheapest **of the three quotes**, the most popular **of all** our tours.',
        },
        {
          vi: '**ever**, thường đi với thì hoàn thành: the highest profit we **have ever recorded**.',
          en: '**ever**, usually with a perfect tense: the highest profit we **have ever recorded**.',
        },
        {
          vi: "Tính từ sở hữu hoặc sở hữu cách có thể thay cho **the**: **our largest** client, **the company's most successful** product.",
          en: "A possessive can replace **the**: **our largest** client, **the company's most successful** product.",
        },
      ],
      examples: [
        {
          en: 'Ms. Delgado is **the most experienced** auditor **in** the firm.',
          vi: 'Cô Delgado là kiểm toán viên giàu kinh nghiệm nhất trong công ty.',
        },
        {
          en: 'This is **the best** turnout we **have ever had** for the annual charity dinner.',
          vi: 'Đây là lượng khách tham dự đông nhất mà buổi tiệc từ thiện thường niên của chúng tôi từng có.',
        },
      ],
    },
    {
      heading: { vi: 'Các cấu trúc đặc biệt', en: 'Special patterns' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Lưu ý', en: 'Note' },
        ],
        rows: [
          [
            'one of the + superlative + plural noun',
            'one of the most reliable suppliers',
            { vi: 'Danh từ số nhiều; động từ chia theo "one" (số ít)', en: 'Plural noun; the verb agrees with "one" (singular)' },
          ],
          [
            'the + comparative …, the + comparative …',
            'The more you order, the lower the unit price.',
            { vi: '"Càng… càng…"; có the ở cả hai vế', en: '"The more…, the more…"; the in both halves' },
          ],
          [
            'the + comparative + of the two',
            'the larger of the two offices',
            { vi: 'Chỉ có hai đối tượng → dùng so sánh hơn có the', en: 'Only two items → comparative with the' },
          ],
        ],
      },
      examples: [
        {
          en: 'Ridgeway Motors is **one of the largest employers** in the region.',
          vi: 'Ridgeway Motors là một trong những đơn vị sử dụng lao động lớn nhất trong vùng.',
        },
        {
          en: '**The longer** the contract term, **the lower** the monthly fee.',
          vi: 'Thời hạn hợp đồng càng dài thì phí hằng tháng càng thấp.',
        },
        {
          en: 'We chose **the smaller of the two** venues because it was closer to the airport.',
          vi: 'Chúng tôi chọn địa điểm nhỏ hơn trong hai địa điểm vì nó gần sân bay hơn.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Trong cấu trúc "càng… càng…", vế thứ hai có thể lược động từ: The sooner, the better. / The higher the quality, the higher the price.',
          en: 'In the "the more…, the more…" pattern the verb can be dropped: The sooner, the better. / The higher the quality, the higher the price.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu so sánh trong Part 5', en: 'How to attack comparison items in Part 5' },
      points: [
        {
          vi: 'Thấy **than** phía sau chỗ trống → chọn dạng so sánh hơn (-er / more).',
          en: 'See **than** after the blank → choose the comparative (-er / more).',
        },
        {
          vi: 'Thấy **the** phía trước và **in / of / ever** phía sau → chọn so sánh nhất; riêng **of the two** → so sánh hơn.',
          en: 'See **the** before and **in / of / ever** after → choose the superlative; but **of the two** → comparative.',
        },
        {
          vi: 'Chỗ trống đứng trước một dạng so sánh hơn → chọn trạng từ nhấn mạnh (much, far, even…), loại very.',
          en: 'Blank right before a comparative → choose an intensifier (much, far, even…) and rule out very.',
        },
        {
          vi: 'Câu mở đầu bằng **The + so sánh hơn** → vế sau cũng phải là **the + so sánh hơn**.',
          en: 'Sentence opens with **The + comparative** → the second half also needs **the + comparative**.',
        },
        {
          vi: 'Sau **one of the + so sánh nhất** → chọn danh từ số nhiều.',
          en: 'After **one of the + superlative** → choose a plural noun.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The new warehouse is ------- than the old one, allowing us to keep more inventory on site.',
      options: ['large', 'larger', 'largest', 'largely'],
      answer: 1,
      explanation: {
        vi: 'Có **than** phía sau → cần dạng so sánh hơn **larger**. largest là so sánh nhất, không đi với than.',
        en: 'The word **than** follows the blank → the comparative **larger** is needed. largest is a superlative and cannot be used with than.',
      },
      translation: 'Nhà kho mới lớn hơn nhà kho cũ, cho phép chúng tôi trữ được nhiều hàng tồn kho hơn ngay tại chỗ.',
    },
    {
      sentence: 'Online sales in March were ------- higher than the regional manager had predicted.',
      options: ['considerably', 'very', 'most', 'too'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống đứng trước dạng so sánh hơn **higher than** → cần trạng từ nhấn mạnh **considerably**. **very** và too không đứng trước so sánh hơn; most higher là so sánh kép, sai.',
        en: 'The blank precedes the comparative **higher than** → the intensifier **considerably** is needed. **very** and too cannot modify a comparative; most higher is a double comparison.',
      },
      translation: 'Doanh số bán hàng trực tuyến trong tháng Ba cao hơn đáng kể so với dự đoán của quản lý khu vực.',
    },
    {
      sentence: 'Harbor Freight Partners operates the ------- delivery network in the region, with more than 300 depots.',
      options: ['wide', 'wider', 'widest', 'widely'],
      answer: 2,
      explanation: {
        vi: 'Có **the** phía trước và **in the region** phía sau, không có than → so sánh nhất **widest**. wider cần than hoặc of the two.',
        en: 'With **the** before the blank and **in the region** after it, and no than → the superlative **widest**. wider would need than or of the two.',
      },
      translation: 'Harbor Freight Partners vận hành mạng lưới giao hàng rộng nhất trong vùng, với hơn 300 kho trung chuyển.',
    },
    {
      sentence: 'Mr. Haddad is one of the most respected ------- in the publishing industry.',
      options: ['editor', 'edited', 'editing', 'editors'],
      answer: 3,
      explanation: {
        vi: 'Cấu trúc **one of the most + tính từ** phải đi với danh từ **số nhiều** → **editors**. editor là số ít nên sai.',
        en: 'The pattern **one of the most + adjective** requires a **plural** noun → **editors**. The singular editor is wrong.',
      },
      translation: 'Ông Haddad là một trong những biên tập viên được kính trọng nhất trong ngành xuất bản.',
    },
    {
      sentence: 'For ------- details about our refund policy, please visit our Web site or call customer service.',
      options: ['farther', 'further', 'far', 'furthest'],
      answer: 1,
      explanation: {
        vi: '**details** ở đây mang nghĩa "thông tin thêm" → chỉ dùng **further**. farther chỉ khoảng cách vật lý; furthest là so sánh nhất, không hợp nghĩa.',
        en: 'Here the meaning is "additional **details**" → only **further** works. farther refers to physical distance; furthest is a superlative and makes no sense here.',
      },
      translation: 'Để biết thêm chi tiết về chính sách hoàn tiền, vui lòng truy cập trang web hoặc gọi bộ phận chăm sóc khách hàng.',
    },
    {
      sentence: 'Because of the storm, traffic on the highway was ------- than usual this morning.',
      options: ['worse', 'bad', 'worst', 'badly'],
      answer: 0,
      explanation: {
        vi: 'Có **than usual** → cần so sánh hơn. Dạng so sánh hơn bất quy tắc của bad là **worse**; worst là so sánh nhất.',
        en: 'The phrase **than usual** calls for a comparative. The irregular comparative of bad is **worse**; worst is the superlative.',
      },
      translation: 'Do cơn bão, giao thông trên đường cao tốc sáng nay tệ hơn thường lệ.',
    },
    {
      sentence: 'The ------- you submit your expense report, the sooner you will be reimbursed.',
      options: ['early', 'earliest', 'earlier', 'most early'],
      answer: 2,
      explanation: {
        vi: 'Vế sau là **the sooner** → đây là cấu trúc "càng… càng…", vế đầu cũng phải là **the + so sánh hơn**: **the earlier**. earliest là so sánh nhất.',
        en: 'The second half is **the sooner** → this is the "the more…, the more…" pattern, so the first half also needs **the + comparative**: **the earlier**. earliest is a superlative.',
      },
      translation: 'Bạn nộp báo cáo chi phí càng sớm thì sẽ được hoàn tiền càng sớm.',
    },
    {
      sentence: 'Of the two candidates interviewed for the position, Ms. Lindqvist is clearly the ------- qualified.',
      options: ['most', 'much', 'very', 'more'],
      answer: 3,
      explanation: {
        vi: '**Of the two candidates** → chỉ so sánh hai người, nên dùng **the + so sánh hơn**: the **more** qualified. the most dùng khi có từ ba đối tượng trở lên; the much / the very qualified đều sai.',
        en: '**Of the two candidates** → only two people are compared, so use **the + comparative**: the **more** qualified. the most is for three or more; the much / the very qualified are ungrammatical.',
      },
      translation: 'Trong hai ứng viên được phỏng vấn cho vị trí này, cô Lindqvist rõ ràng là người có trình độ phù hợp hơn.',
    },
    {
      sentence: "Last month's trade fair attracted the ------- number of visitors we have ever had.",
      options: ['largest', 'larger', 'large', 'most large'],
      answer: 0,
      explanation: {
        vi: '**the … we have ever had** là dấu hiệu so sánh nhất → **largest**. larger cần than; most large sai vì large là tính từ một âm tiết.',
        en: '**the … we have ever had** signals a superlative → **largest**. larger would need than; most large is wrong because large has one syllable.',
      },
      translation: 'Hội chợ thương mại tháng trước thu hút lượng khách tham quan đông nhất mà chúng tôi từng có.',
    },
    {
      sentence: 'The new printers consume ------- electricity than the models we purchased five years ago.',
      options: ['little', 'least', 'less', 'fewer'],
      answer: 2,
      explanation: {
        vi: 'Có **than** → cần so sánh hơn; **electricity** là danh từ không đếm được → **less** (so sánh hơn của little). fewer chỉ đi với danh từ đếm được số nhiều.',
        en: 'With **than** a comparative is needed, and **electricity** is uncountable → **less** (the comparative of little). fewer is only for plural countable nouns.',
      },
      translation: 'Các máy in mới tiêu thụ ít điện hơn những mẫu chúng tôi mua cách đây năm năm.',
    },
  ],
};
