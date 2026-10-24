import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'comparisons-equality',
  intro: {
    vi: 'Bài này dạy **so sánh bằng** (as … as), so sánh gấp nhiều lần, so sánh kém (less … than), và các cụm cố định như **the same as, similar to, superior to, prefer A to B, would rather … than**. Trong Part 5/6, đề thường hỏi đúng một từ nhỏ: as, to, from, than, hoặc dạng của tính từ nằm giữa as … as.',
    en: 'This lesson covers **comparisons of equality** (as … as), multiples, comparisons of inferiority (less … than), and fixed patterns such as **the same as, similar to, superior to, prefer A to B, would rather … than**. In Part 5/6 the blank is often one small word (as, to, from, than) or the form of the adjective between as … as.',
  },
  mistakes: [
    {
      wrong: 'The new conveyor belt is [[as faster as]] the old one.',
      right: 'The new conveyor belt is [[as fast as]] the old one.',
      explanation: {
        vi: 'Giữa **as … as** là tính từ/trạng từ ở dạng **nguyên mẫu**, không bao giờ là dạng so sánh hơn.',
        en: 'Between **as … as** the adjective/adverb stays in its **base form**, never the comparative.',
      },
    },
    {
      wrong: 'Our customer support is superior [[than]] that of our competitors.',
      right: 'Our customer support is superior [[to]] that of our competitors.',
      explanation: {
        vi: '**superior, inferior, prior, preferable** đi với **to**, không đi với than.',
        en: '**superior, inferior, prior, preferable** take **to**, not than.',
      },
    },
    {
      wrong: 'We received [[as many feedback]] as we did last year.',
      right: 'We received [[as much feedback]] as we did last year.',
      explanation: {
        vi: '**feedback** là danh từ không đếm được nên dùng **as much … as**; as many chỉ đi với danh từ đếm được số nhiều.',
        en: '**feedback** is uncountable, so it takes **as much … as**; as many is only for plural countable nouns.',
      },
    },
    {
      wrong: 'The hotel offers the same room rates [[like]] last season.',
      right: 'The hotel offers the same room rates [[as]] last season.',
      explanation: {
        vi: '**the same** luôn đi với **as**: the same (+ danh từ) as. Không dùng like hay than.',
        en: '**the same** always pairs with **as**: the same (+ noun) as. Never like or than.',
      },
    },
    {
      wrong: 'Most of our staff prefer video calls [[than]] in-person meetings.',
      right: 'Most of our staff prefer video calls [[to]] in-person meetings.',
      explanation: {
        vi: 'Cấu trúc là **prefer A to B**. Chỉ **would rather** mới đi với than.',
        en: 'The pattern is **prefer A to B**. Only **would rather** goes with than.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'So sánh bằng: as … as và not as/so … as', en: 'Equality: as … as and not as/so … as' },
      body: {
        vi: '**as + tính từ/trạng từ nguyên mẫu + as** nghĩa là "bằng, như". Dạng phủ định **not as … as** hoặc **not so … as** nghĩa là "không bằng". Chọn tính từ hay trạng từ tuỳ vào từ đứng trước as thứ nhất: sau động từ nối (be, seem, become) là tính từ; bổ nghĩa cho động từ thường là trạng từ.',
        en: '**as + base adjective/adverb + as** means "equally". The negative **not as … as** or **not so … as** means "not to the same degree". Choose an adjective or an adverb according to what comes before the first as: after a linking verb (be, seem, become) use an adjective; to modify an ordinary verb use an adverb.',
      },
      examples: [
        {
          en: 'The budget hotel is **as comfortable as** many four-star properties.',
          vi: 'Khách sạn giá rẻ này thoải mái chẳng kém nhiều khách sạn bốn sao.',
        },
        {
          en: 'The technician repaired the photocopier **as quickly as** he could.',
          vi: 'Kỹ thuật viên đã sửa máy photocopy nhanh nhất có thể.',
        },
        {
          en: 'The second quarter was **not as profitable as** the first.',
          vi: 'Quý hai không có lãi bằng quý một.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Cụm cố định hay gặp: **as soon as possible**, **as early as possible**, **as much as possible**. Thấy "as ------- as possible" sau một động từ thường → chọn trạng từ.',
          en: 'Common fixed phrases: **as soon as possible**, **as early as possible**, **as much as possible**. If you see "as ------- as possible" after an ordinary verb → choose the adverb.',
        },
      },
    },
    {
      heading: { vi: 'as many / as much + danh từ + as và so sánh gấp nhiều lần', en: 'as many / as much + noun + as, and multiples' },
      table: {
        head: [
          { vi: 'Cấu trúc', en: 'Pattern' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Dùng khi', en: 'Used when' },
        ],
        rows: [
          [
            'as many + plural noun + as',
            'as many orders as last month',
            { vi: 'Danh từ đếm được số nhiều', en: 'Plural countable noun' },
          ],
          [
            'as much + uncountable noun + as',
            'as much storage space as the old unit',
            { vi: 'Danh từ không đếm được', en: 'Uncountable noun' },
          ],
          [
            'twice / three times / half + as … as',
            'twice as long as, three times as many staff as',
            { vi: 'Gấp đôi, gấp ba, bằng một nửa', en: 'Double, triple, half' },
          ],
        ],
      },
      examples: [
        {
          en: 'The new branch handles **as many transactions as** the main office.',
          vi: 'Chi nhánh mới xử lý số lượng giao dịch nhiều ngang với trụ sở chính.',
        },
        {
          en: 'Express shipping costs **twice as much as** standard delivery.',
          vi: 'Giao hàng hoả tốc tốn gấp đôi giao hàng tiêu chuẩn.',
        },
        {
          en: 'The renovated lobby is **three times as large as** the old one.',
          vi: 'Sảnh sau khi cải tạo rộng gấp ba sảnh cũ.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Từ chỉ số lần đứng TRƯỚC as thứ nhất: twice as long as (không phải "as twice long as"). Nên tránh "twice longer than"; dạng an toàn luôn là **twice as … as**.',
          en: 'The multiplier comes BEFORE the first as: twice as long as (not "as twice long as"). Avoid "twice longer than" on the TOEIC; the safe form is always **twice as … as**.',
        },
      },
    },
    {
      heading: { vi: 'Giống và khác: the same as, similar to, different from, compared to/with', en: 'Sameness and difference: the same as, similar to, different from, compared to/with' },
      table: {
        head: [
          { vi: 'Cụm', en: 'Phrase' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Lỗi hay gặp', en: 'Common error' },
        ],
        rows: [
          ['the same (+ noun) as', 'the same price as last year', 'the same like / than'],
          ['similar to', 'similar to our previous model', 'similar with'],
          ['different from', 'different from the original plan', 'different of / with'],
          ['compared to / compared with', 'compared with last quarter', 'comparing with, comparison with'],
        ],
      },
      examples: [
        {
          en: 'The revised contract contains **the same** payment terms **as** the original.',
          vi: 'Hợp đồng sửa đổi có các điều khoản thanh toán giống như bản gốc.',
        },
        {
          en: 'The layout of the Osaka store is **similar to** that of our flagship store in Seoul.',
          vi: 'Cách bố trí của cửa hàng ở Osaka tương tự như cửa hàng chủ lực của chúng tôi ở Seoul.',
        },
        {
          en: '**Compared with** last year, staff turnover has fallen by half.',
          vi: 'So với năm ngoái, tỉ lệ nghỉ việc của nhân viên đã giảm một nửa.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Người Mỹ đôi khi nói "different than", người Anh nói "different to", nhưng dạng chuẩn mà đề TOEIC chấm đúng là **different from**. Cụm mở đầu câu là **Compared with/to** (quá khứ phân từ), không phải Comparing.',
          en: 'Americans sometimes say "different than" and Britons "different to", but the standard form the TOEIC rewards is **different from**. The sentence-opening phrase is **Compared with/to** (past participle), not Comparing.',
        },
      },
    },
    {
      heading: { vi: 'So sánh kém: less … than và the least', en: 'Inferiority: less … than and the least' },
      body: {
        vi: '**less + tính từ/trạng từ + than** nghĩa là "kém… hơn"; **the least + tính từ** nghĩa là "kém… nhất". Dùng cho mọi tính từ, không phân biệt số âm tiết, nhưng thường gặp nhất với tính từ dài.',
        en: '**less + adjective/adverb + than** means "not as … as"; **the least + adjective** means "the lowest degree of". It works with any adjective regardless of length, though it is most common with longer ones.',
      },
      examples: [
        {
          en: 'The online course is **less expensive than** the classroom version.',
          vi: 'Khoá học trực tuyến rẻ hơn (ít tốn kém hơn) khoá học trên lớp.',
        },
        {
          en: 'Of all the routes we tested, this one is **the least congested** at rush hour.',
          vi: 'Trong tất cả các tuyến đường chúng tôi thử, tuyến này ít tắc nghẽn nhất vào giờ cao điểm.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Với tính từ một âm tiết, người bản ngữ thường nói **not as … as** thay vì less: not as cheap as nghe tự nhiên hơn less cheap than.',
          en: 'With one-syllable adjectives, native speakers usually prefer **not as … as** to less: not as cheap as sounds more natural than less cheap than.',
        },
      },
    },
    {
      heading: { vi: 'Tính từ đi với to và prefer / would rather', en: 'Adjectives with to, and prefer / would rather' },
      points: [
        {
          vi: '**superior to** (tốt hơn), **inferior to** (kém hơn), **preferable to** (đáng chọn hơn), **prior to** (trước, = before). Các từ này đã mang nghĩa so sánh nên KHÔNG thêm more và KHÔNG dùng than.',
          en: '**superior to**, **inferior to**, **preferable to**, **prior to** (= before). These words already carry a comparative meaning, so do NOT add more and do NOT use than.',
        },
        {
          vi: '**prefer A to B**: A và B cùng là danh từ hoặc cùng là V-ing (prefer emailing to calling).',
          en: '**prefer A to B**: A and B are both nouns or both V-ing forms (prefer emailing to calling).',
        },
        {
          vi: '**prefer to V rather than V**: prefer to wait rather than pay extra.',
          en: '**prefer to V rather than V**: prefer to wait rather than pay extra.',
        },
        {
          vi: '**would rather + động từ nguyên mẫu + than + động từ nguyên mẫu**: would rather drive than fly. Không có to sau would rather.',
          en: '**would rather + base verb + than + base verb**: would rather drive than fly. There is no to after would rather.',
        },
      ],
      examples: [
        {
          en: 'The new alloy is **superior to** steel in both weight and strength.',
          vi: 'Hợp kim mới vượt trội hơn thép cả về trọng lượng lẫn độ bền.',
        },
        {
          en: 'All passengers must check in at least two hours **prior to** departure.',
          vi: 'Tất cả hành khách phải làm thủ tục ít nhất hai tiếng trước giờ khởi hành.',
        },
        {
          en: 'Many guests **prefer** a quiet room **to** a room with a view.',
          vi: 'Nhiều khách thích phòng yên tĩnh hơn phòng có tầm nhìn đẹp.',
        },
        {
          en: 'The board **would rather postpone** the launch **than release** an untested product.',
          vi: 'Hội đồng quản trị thà hoãn ra mắt còn hơn tung ra một sản phẩm chưa được kiểm nghiệm.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Bẫy kinh điển: "more superior", "superior than", "prefer A than B", "would rather to stay". Cả bốn đều sai.',
          en: 'Classic traps: "more superior", "superior than", "prefer A than B", "would rather to stay". All four are wrong.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu so sánh đặc biệt trong Part 5', en: 'How to attack these items in Part 5' },
      points: [
        {
          vi: 'Thấy **as** ở trước và **as** ở sau chỗ trống → điền tính từ/trạng từ nguyên mẫu (loại dạng -er/more).',
          en: 'See **as** before and **as** after the blank → use the base adjective/adverb (rule out -er/more forms).',
        },
        {
          vi: 'Chỗ trống ngay trước danh từ trong as … as → many (đếm được) hay much (không đếm được).',
          en: 'Blank right before a noun inside as … as → many (countable) or much (uncountable).',
        },
        {
          vi: 'Chỗ trống là giới từ/liên từ sau một tính từ: the same → **as**; similar, superior, inferior, preferable, prior → **to**; different → **from**.',
          en: 'Blank is a small word after an adjective: the same → **as**; similar, superior, inferior, preferable, prior → **to**; different → **from**.',
        },
        {
          vi: 'Có **prefer** → to; có **would rather** hoặc **rather** → than.',
          en: 'With **prefer** → to; with **would rather** or **rather** → than.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The second-floor meeting room is not as ------- as the main conference hall, so it seats only twelve.',
      options: ['spaciously', 'space', 'spacious', 'more spacious'],
      answer: 2,
      explanation: {
        vi: 'Sau động từ nối **is**, trong khung **not as … as** cần tính từ nguyên mẫu → **spacious**. more spacious là so sánh hơn, không đứng giữa as … as; spaciously là trạng từ.',
        en: 'After the linking verb **is**, inside **not as … as**, a base adjective is needed → **spacious**. more spacious is a comparative and cannot go between as … as; spaciously is an adverb.',
      },
      translation: 'Phòng họp tầng hai không rộng rãi bằng hội trường chính, nên chỉ đủ chỗ cho mười hai người.',
    },
    {
      sentence: 'Please reply to client inquiries as ------- as possible so that no orders are delayed.',
      options: ['promptly', 'prompt', 'promptness', 'more promptly'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống bổ nghĩa cho động từ **reply** trong khung **as … as possible** → cần trạng từ nguyên mẫu **promptly**. prompt là tính từ; more promptly là so sánh hơn.',
        en: 'The blank modifies the verb **reply** inside **as … as possible** → the base adverb **promptly** is needed. prompt is an adjective; more promptly is a comparative.',
      },
      translation: 'Vui lòng trả lời các yêu cầu của khách hàng càng nhanh càng tốt để không đơn hàng nào bị chậm trễ.',
    },
    {
      sentence: 'We did not receive as ------- complaints this quarter as we had expected after the price increase.',
      options: ['more', 'much', 'most', 'many'],
      answer: 3,
      explanation: {
        vi: '**complaints** là danh từ đếm được số nhiều nằm trong khung **as … as** → **as many**. much chỉ đi với danh từ không đếm được; more/most không đứng sau as.',
        en: '**complaints** is a plural countable noun inside **as … as** → **as many**. much is only for uncountable nouns; more/most cannot follow as here.',
      },
      translation: 'Quý này chúng tôi không nhận được nhiều khiếu nại như đã dự đoán sau đợt tăng giá.',
    },
    {
      sentence: 'After the renovation, the hotel ballroom is twice as ------- as it was before.',
      options: ['larger', 'large', 'largest', 'largely'],
      answer: 1,
      explanation: {
        vi: 'Khung **twice as … as** giữ tính từ ở dạng nguyên mẫu, và sau động từ nối **is** cần tính từ → **large**. larger là so sánh hơn; largely là trạng từ.',
        en: 'The frame **twice as … as** keeps the adjective in its base form, and after the linking verb **is** an adjective is needed → **large**. larger is a comparative; largely is an adverb.',
      },
      translation: 'Sau khi cải tạo, phòng khiêu vũ của khách sạn rộng gấp đôi trước đây.',
    },
    {
      sentence: 'The replacement part is exactly the same ------- the one that was originally installed.',
      options: ['like', 'to', 'as', 'than'],
      answer: 2,
      explanation: {
        vi: '**the same** luôn đi với **as** → the same as. "the same like" là lỗi rất hay gặp; than chỉ dùng sau dạng so sánh hơn.',
        en: '**the same** always pairs with **as** → the same as. "the same like" is a very common error; than follows only a comparative.',
      },
      translation: 'Linh kiện thay thế giống hệt linh kiện được lắp đặt ban đầu.',
    },
    {
      sentence: 'The new staff uniform is similar ------- the one worn at our downtown branch, but it is lighter.',
      options: ['to', 'with', 'as', 'from'],
      answer: 0,
      explanation: {
        vi: 'Tính từ **similar** đi với giới từ **to** → similar to. "similar with" là lỗi do dịch từ tiếng Việt ("giống với"); from đi với different.',
        en: 'The adjective **similar** takes the preposition **to** → similar to. "similar with" is a common translation error; from goes with different.',
      },
      translation: 'Đồng phục nhân viên mới tương tự như đồng phục ở chi nhánh trung tâm, nhưng nhẹ hơn.',
    },
    {
      sentence: '------- with last year, the number of overseas visitors to the resort has risen by 15 percent.',
      options: ['Comparing', 'Comparison', 'Compare', 'Compared'],
      answer: 3,
      explanation: {
        vi: 'Cụm mở đầu cố định là **Compared with** (quá khứ phân từ) = "so với". Comparing with sai vì chủ ngữ the number không tự "so sánh"; Comparison cần in phía trước (in comparison with).',
        en: 'The fixed opening phrase is **Compared with** (past participle), meaning "in relation to". Comparing with is wrong because the subject, the number, does not do the comparing; Comparison would need in before it (in comparison with).',
      },
      translation: 'So với năm ngoái, số lượng du khách nước ngoài đến khu nghỉ dưỡng đã tăng 15 phần trăm.',
    },
    {
      sentence: 'The downtown branch is ------- expensive to operate than our suburban locations because it shares a building with headquarters.',
      options: ['fewer', 'less', 'least', 'little'],
      answer: 1,
      explanation: {
        vi: 'Có **than** phía sau và chỗ trống đứng trước tính từ **expensive** → so sánh kém **less** expensive than. least dùng cho so sánh nhất; fewer đi với danh từ đếm được chứ không đi với tính từ.',
        en: 'With **than** later and the blank before the adjective **expensive** → the comparison of inferiority **less** expensive than. least is for superlatives; fewer goes with countable nouns, not adjectives.',
      },
      translation: 'Chi nhánh trung tâm có chi phí vận hành thấp hơn các địa điểm ở ngoại ô vì nó dùng chung toà nhà với trụ sở chính.',
    },
    {
      sentence: 'Most reviewers agreed that the new tablet is far superior ------- earlier models in battery life.',
      options: ['to', 'than', 'over', 'as'],
      answer: 0,
      explanation: {
        vi: '**superior** luôn đi với **to**, không đi với than dù mang nghĩa "tốt hơn". far đứng trước để nhấn mạnh.',
        en: '**superior** always takes **to**, not than, even though it means "better". far is placed before it for emphasis.',
      },
      translation: 'Hầu hết các nhà phê bình đều đồng ý rằng máy tính bảng mới vượt trội hẳn so với các mẫu trước về thời lượng pin.',
    },
    {
      sentence: 'Many of our corporate clients would rather pay a higher fee ------- wait several weeks for delivery.',
      options: ['to', 'instead', 'than', 'over'],
      answer: 2,
      explanation: {
        vi: '**would rather + động từ nguyên mẫu** đi với **than + động từ nguyên mẫu** → would rather pay … than wait. to dùng với prefer A to B, không dùng với would rather.',
        en: '**would rather + base verb** pairs with **than + base verb** → would rather pay … than wait. to belongs to prefer A to B, not would rather.',
      },
      translation: 'Nhiều khách hàng doanh nghiệp của chúng tôi thà trả phí cao hơn còn hơn phải chờ giao hàng vài tuần.',
    },
  ],
};
