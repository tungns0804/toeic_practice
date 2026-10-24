import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'parallel-correlatives',
  intro: {
    vi: 'Bài này mở rộng quy tắc song song sang **cặp liên từ tương quan** (both … and, not only … but also, either … or, neither … nor, whether … or), các cụm **rather than, instead of, as well as** và **phép so sánh** với than/as. Trong Part 5, đề thường cho sẵn vế đầu và bắt bạn chọn dạng từ cho vế sau sao cho hai vế cân xứng.',
    en: 'This lesson extends parallelism to **correlative conjunctions** (both … and, not only … but also, either … or, neither … nor, whether … or), the phrases **rather than, instead of, as well as**, and **comparisons** with than/as. In Part 5, the test usually gives you the first half and asks you to choose the form of the second half so that the two sides match.',
  },
  mistakes: [
    {
      wrong: 'The training course was both practical and [[enjoyment]].',
      right: 'The training course was both practical and [[enjoyable]].',
      explanation: {
        vi: 'Sau **both** là tính từ **practical**, nên sau **and** cũng phải là tính từ **enjoyable**, không phải danh từ enjoyment.',
        en: 'After **both** comes the adjective **practical**, so the word after **and** must also be an adjective: **enjoyable**, not the noun enjoyment.',
      },
    },
    {
      wrong: 'Ms. Kwan [[either will call]] you or send you an e-mail.',
      right: 'Ms. Kwan [[will either call]] you or send you an e-mail.',
      explanation: {
        vi: '**either** phải đứng ngay trước thành phần thứ nhất được so với **send**, tức là trước động từ **call**, nên đặt sau will: will either call … or send.',
        en: '**either** must come right before the first item being matched with **send**, i.e. before the verb **call**, so it goes after will: will either call … or send.',
      },
    },
    {
      wrong: 'The update not only fixes several bugs but also [[improving]] loading speed.',
      right: 'The update not only fixes several bugs but also [[improves]] loading speed.',
      explanation: {
        vi: 'Vế sau **not only** là động từ chia **fixes**, nên vế sau **but also** cũng phải là động từ chia cùng dạng: **improves**.',
        en: 'The part after **not only** is the finite verb **fixes**, so the part after **but also** must be a finite verb in the same form: **improves**.',
      },
    },
    {
      wrong: 'The rent in this district is much lower than [[the city center]].',
      right: 'The rent in this district is much lower than [[that in]] the city center.',
      explanation: {
        vi: 'Phải so **giá thuê** với **giá thuê**, không phải so giá thuê với một khu vực. **that** thay cho the rent để hai vế cân xứng.',
        en: 'We must compare **rent** with **rent**, not rent with a place. **that** replaces the rent so the two sides match.',
      },
    },
    {
      wrong: 'Paying by card is usually faster than [[to pay]] in cash.',
      right: 'Paying by card is usually faster than [[paying]] in cash.',
      explanation: {
        vi: 'Vế trước **than** là V-ing **Paying**, nên vế sau than cũng phải là V-ing: **paying**.',
        en: 'The item before **than** is the -ing form **Paying**, so the item after than must be an -ing form too: **paying**.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Năm cặp tương quan: hai vế cùng dạng', en: 'Five correlative pairs: matching halves' },
      body: {
        vi: 'Nghĩa và cách ghép cặp (both đi với and, neither đi với nor…) đã học ở bài 8.1; cách chia động từ khi cặp từ nối hai chủ ngữ thuộc bài 3.4. Ở đây chỉ có một quy tắc: thành phần đứng sau nửa thứ nhất và thành phần đứng sau nửa thứ hai phải **cùng dạng ngữ pháp**.',
        en: 'The meaning and pairing of these words (both goes with and, neither with nor…) were covered in lesson 8.1; verb agreement when a pair joins two subjects belongs to lesson 3.4. Here there is one rule: the item after the first half and the item after the second half must have **the same grammatical form**.',
      },
      table: {
        head: [
          { vi: 'Cặp từ', en: 'Pair' },
          { vi: 'Hai vế song song', en: 'Parallel halves' },
          { vi: 'Dạng được nối', en: 'Form joined' },
        ],
        rows: [
          ['both … and', 'both affordable and reliable', { vi: 'Tính từ – tính từ', en: 'Adjective – adjective' }],
          ['not only … but also', 'not only designs the products but also tests them', { vi: 'Động từ chia – động từ chia', en: 'Finite verb – finite verb' }],
          ['either … or', 'either by credit card or by bank transfer', { vi: 'Cụm giới từ – cụm giới từ', en: 'Prepositional phrase – prepositional phrase' }],
          ['neither … nor', 'neither the deadline nor the budget', { vi: 'Cụm danh từ – cụm danh từ', en: 'Noun phrase – noun phrase' }],
          ['whether … or', 'whether to renew the lease or to move', { vi: 'to V – to V', en: 'to V – to V' }],
        ],
      },
      examples: [
        {
          en: 'The new model is **both lighter and quieter** than its predecessor.',
          vi: 'Mẫu mới vừa nhẹ hơn vừa êm hơn mẫu trước.',
        },
        {
          en: 'The director has not decided **whether to expand the factory or to outsource** production.',
          vi: 'Giám đốc vẫn chưa quyết định nên mở rộng nhà máy hay thuê ngoài sản xuất.',
        },
      ],
    },
    {
      heading: { vi: 'Vị trí của cặp từ', en: 'Where to place the pair' },
      body: {
        vi: 'Mỗi nửa của cặp từ đứng **ngay trước** thành phần mà nó giới thiệu. Nếu hai vế là hai động từ, nửa đầu đứng trước động từ thứ nhất (sau trợ động từ nếu có); nếu hai vế là hai tân ngữ, nửa đầu đứng sau động từ.',
        en: 'Each half of the pair goes **right before** the item it introduces. If the two items are verbs, the first half goes before the first verb (after any auxiliary); if they are two objects, the first half goes after the verb.',
      },
      table: {
        head: [
          { vi: 'Sai', en: 'Wrong' },
          { vi: 'Đúng', en: 'Correct' },
        ],
        rows: [
          ['She both speaks Korean and Japanese.', 'She speaks both Korean and Japanese.'],
          ['We either will ship it today or tomorrow.', 'We will ship it either today or tomorrow.'],
          ['The firm not only offers loans but also insurance.', 'The firm offers not only loans but also insurance.'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Khi **Not only** đứng đầu câu, mệnh đề sau nó phải đảo trợ động từ lên trước chủ ngữ: **Not only does** the plan cut costs, but it also saves time.',
          en: 'When **Not only** opens the sentence, the clause after it inverts the auxiliary and subject: **Not only does** the plan cut costs, but it also saves time.',
        },
      },
    },
    {
      heading: { vi: 'rather than, instead of, as well as', en: 'rather than, instead of, as well as' },
      points: [
        {
          vi: '**rather than** (thay vì, chứ không) nối hai thành phần cùng dạng: danh từ – danh từ, tính từ – tính từ, cụm giới từ – cụm giới từ. Sau một to V, vế sau rather than thường là **V nguyên mẫu**: decided to lease rather than **buy**.',
          en: '**rather than** joins two items of the same form: noun – noun, adjective – adjective, prepositional phrase – prepositional phrase. After a to-infinitive, the item after rather than is usually a **base verb**: decided to lease rather than **buy**.',
        },
        {
          vi: '**instead of** là GIỚI TỪ, nên phía sau luôn là danh từ hoặc **V-ing**: instead of **driving**, không bao giờ instead of drive.',
          en: '**instead of** is a PREPOSITION, so it is always followed by a noun or an **-ing form**: instead of **driving**, never instead of drive.',
        },
        {
          vi: '**as well as** (cũng như, ngoài ra còn) nối danh từ với danh từ, tính từ với tính từ. Khi nối thêm một động từ sau động từ đã chia thì, dùng **V-ing**: The firm designs websites as well as **providing** hosting.',
          en: '**as well as** joins noun with noun and adjective with adjective. When it adds a verb after a finite verb, use the **-ing form**: The firm designs websites as well as **providing** hosting.',
        },
      ],
      examples: [
        {
          en: 'We prefer to communicate **by e-mail rather than by phone**.',
          vi: 'Chúng tôi thích liên lạc qua email hơn là qua điện thoại.',
        },
        {
          en: 'The hotel offers **airport shuttles as well as car rentals**.',
          vi: 'Khách sạn có dịch vụ xe đưa đón sân bay cũng như cho thuê ô tô.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đề hay đặt bẫy với **instead of**: thấy vế trước là động từ nguyên mẫu rồi chọn luôn nguyên mẫu cho vế sau là sai. instead of là giới từ, nên luôn chọn V-ing.',
          en: 'A frequent trap with **instead of**: seeing a base verb earlier in the sentence and choosing a base verb after it. instead of is a preposition, so always choose the -ing form.',
        },
      },
    },
    {
      heading: { vi: 'So sánh song song với than / as', en: 'Parallel comparisons with than / as' },
      body: {
        vi: 'Hai vế của phép so sánh phải cùng dạng và cùng loại sự vật. Cách tạo so sánh hơn, so sánh bằng đã học ở chương 11; ở đây chỉ kiểm tra hai vế có cân xứng không.',
        en: 'The two sides of a comparison must share one form and refer to the same kind of thing. How to build comparative and equality forms was covered in chapter 11; here we only check that the two sides match.',
      },
      table: {
        head: [
          { vi: 'Quy tắc', en: 'Rule' },
          { vi: 'Ví dụ đúng', en: 'Correct example' },
        ],
        rows: [
          [{ vi: 'to V so với to V', en: 'to V compared with to V' }, 'To order in bulk is cheaper than to order weekly.'],
          [{ vi: 'V-ing so với V-ing', en: '-ing compared with -ing' }, 'Shipping by sea takes longer than shipping by air.'],
          [{ vi: 'Danh từ số ít → that of', en: 'Singular noun → that of' }, 'The salary of a pilot is higher than that of a flight attendant.'],
          [{ vi: 'Danh từ số nhiều → those of / in', en: 'Plural noun → those of / in' }, 'Prices in the city are higher than those in the suburbs.'],
          [{ vi: 'Sở hữu → đại từ / sở hữu cách', en: 'Possession → pronoun / possessive' }, "Our warranty is as long as Delmont's (= Delmont's warranty)."],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chọn **that** hay **those** theo danh từ được thay thế ở vế trước: the cost → that, the costs → those. Không dùng **it** hay **them** trước of trong phép so sánh này.',
          en: 'Choose **that** or **those** to match the noun it replaces in the first half: the cost → that, the costs → those. Do not use **it** or **them** before of in this kind of comparison.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu tương quan và so sánh trong Part 5', en: 'How to attack correlative and comparison items in Part 5' },
      points: [
        {
          vi: 'Thấy **both, not only, either, neither, whether** ở phía trước → tìm nửa còn lại, rồi so dạng của hai thành phần đứng sau mỗi nửa.',
          en: 'See **both, not only, either, neither, whether** earlier in the sentence → find the other half, then compare the forms of the items after each half.',
        },
        {
          vi: 'Thấy **instead of** → chọn danh từ hoặc V-ing. Thấy **rather than / as well as** → chọn cùng dạng với thành phần được so.',
          en: 'See **instead of** → choose a noun or an -ing form. See **rather than / as well as** → choose the same form as the item being matched.',
        },
        {
          vi: 'Thấy **than / as** → nhìn vế trước: to V thì to V, V-ing thì V-ing; danh từ số ít thì **that**, số nhiều thì **those**.',
          en: 'See **than / as** → look at the first side: to V with to V, -ing with -ing; a singular noun takes **that**, a plural one **those**.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'According to early user reviews, the new booking platform is both fast and -------.',
      options: ['security', 'secure', 'securely', 'secures'],
      answer: 1,
      explanation: {
        vi: 'Sau **both** là tính từ **fast**, nên sau **and** cũng phải là tính từ → **secure** (an toàn). security là danh từ, không song song với fast.',
        en: 'After **both** comes the adjective **fast**, so the word after **and** must be an adjective too → **secure**. security is a noun and is not parallel with fast.',
      },
      translation: 'Theo những đánh giá đầu tiên của người dùng, nền tảng đặt chỗ mới vừa nhanh vừa an toàn.',
    },
    {
      sentence: 'The upgraded billing software not only detects errors but also ------- them automatically.',
      options: ['correcting', 'correction', 'to correct', 'corrects'],
      answer: 3,
      explanation: {
        vi: 'Sau **not only** là động từ chia **detects**, nên sau **but also** cũng phải là động từ chia cùng dạng → **corrects**. correcting và to correct không song song với detects.',
        en: 'After **not only** comes the finite verb **detects**, so the item after **but also** must be a finite verb in the same form → **corrects**. correcting and to correct are not parallel with detects.',
      },
      translation: 'Phần mềm tính hoá đơn được nâng cấp không chỉ phát hiện lỗi mà còn tự động sửa chúng.',
    },
    {
      sentence: 'Passengers affected by the delay may choose either to upgrade their seats or ------- a full refund.',
      options: ['request', 'requesting', 'requested', 'requests'],
      answer: 0,
      explanation: {
        vi: 'Sau **either** là **to upgrade**, nên vế sau **or** dùng to V hoặc V nguyên mẫu (to hiểu ngầm) → **request**. requesting không song song với to upgrade.',
        en: 'After **either** comes **to upgrade**, so the item after **or** takes to V or the base verb (to is understood) → **request**. requesting is not parallel with to upgrade.',
      },
      translation: 'Hành khách bị ảnh hưởng bởi sự chậm trễ có thể chọn nâng hạng ghế hoặc yêu cầu hoàn tiền toàn bộ.',
    },
    {
      sentence: "Neither the hotel's location nor its ------- met the expectations of the conference organizers.",
      options: ['affordable', 'afford', 'affordability', 'affordably'],
      answer: 2,
      explanation: {
        vi: 'Sau **Neither** là cụm danh từ **the hotel\'s location**, và chỗ trống đứng sau **its**, nên phải là danh từ → **affordability** (mức giá phải chăng). affordable là tính từ.',
        en: "After **Neither** comes the noun phrase **the hotel's location**, and the blank follows **its**, so it must be a noun → **affordability**. affordable is an adjective.",
      },
      translation: 'Cả vị trí lẫn mức giá của khách sạn đều không đáp ứng được kỳ vọng của ban tổ chức hội nghị.',
    },
    {
      sentence: 'Staff must record all overtime hours, whether they work on weekends or ------- late on weekdays.',
      options: ['staying', 'stays', 'stayed', 'stay'],
      answer: 3,
      explanation: {
        vi: 'Sau **whether they** là động từ hiện tại **work**, nên vế sau **or** cũng là động từ hiện tại hợp với chủ ngữ they → **stay**. stays sai hoà hợp, stayed sai thì.',
        en: 'After **whether they** comes the present verb **work**, so the item after **or** must be a present verb agreeing with they → **stay**. stays does not agree and stayed is the wrong tense.',
      },
      translation: 'Nhân viên phải ghi lại toàn bộ giờ làm thêm, dù họ làm vào cuối tuần hay ở lại muộn vào ngày thường.',
    },
    {
      sentence: 'The board wanted the redesigned company logo to look modern rather than -------.',
      options: ['tradition', 'traditional', 'traditionally', 'traditions'],
      answer: 1,
      explanation: {
        vi: '**rather than** nối hai thành phần cùng dạng; vế trước là tính từ **modern** sau look, nên vế sau cũng là tính từ → **traditional**. traditionally là trạng từ.',
        en: '**rather than** joins items of the same form; the first is the adjective **modern** after look, so the second must be an adjective → **traditional**. traditionally is an adverb.',
      },
      translation: 'Hội đồng quản trị muốn logo công ty được thiết kế lại trông hiện đại chứ không truyền thống.',
    },
    {
      sentence: 'Many employees now prefer communicating through the chat app instead of ------- long e-mails.',
      options: ['writing', 'write', 'written', 'wrote'],
      answer: 0,
      explanation: {
        vi: '**instead of** là giới từ nên phía sau phải là V-ing → **writing**; nó cũng song song với **communicating**. write là nguyên mẫu, không đứng sau giới từ.',
        en: '**instead of** is a preposition, so an -ing form must follow → **writing**; it is also parallel with **communicating**. write is a base verb and cannot follow a preposition.',
      },
      translation: 'Hiện nay nhiều nhân viên thích trao đổi qua ứng dụng nhắn tin hơn là viết những email dài.',
    },
    {
      sentence: 'The premium membership package includes free parking as well as ------- to the fitness center.',
      options: ['accessible', 'accessing', 'access', 'accessed'],
      answer: 2,
      explanation: {
        vi: '**as well as** nối với cụm danh từ **free parking** (tân ngữ của includes), nên chỗ trống cũng là danh từ → **access** (quyền sử dụng). accessing là động từ và không đi với to.',
        en: '**as well as** is matched with the noun phrase **free parking** (the object of includes), so the blank must be a noun → **access**. accessing is a verb form and does not take to.',
      },
      translation: 'Gói hội viên cao cấp bao gồm chỗ đỗ xe miễn phí cũng như quyền sử dụng phòng tập thể hình.',
    },
    {
      sentence: 'For large groups, to book the venue in advance is more economical than ------- it at the last minute.',
      options: ['to reserve', 'reserve', 'reserved', 'reserves'],
      answer: 0,
      explanation: {
        vi: 'Vế trước **than** là **to book** (to V làm chủ ngữ), nên vế sau than cũng phải là to V → **to reserve**. reserve thiếu to nên không song song.',
        en: 'The side before **than** is **to book** (a to-infinitive subject), so the side after than must be a to-infinitive too → **to reserve**. reserve lacks to and is not parallel.',
      },
      translation: 'Với các nhóm lớn, đặt địa điểm trước thì tiết kiệm hơn là đặt vào phút chót.',
    },
    {
      sentence: 'The battery life of the new tablet is considerably longer than ------- of the previous version.',
      options: ['those', 'that', 'it', 'this'],
      answer: 1,
      explanation: {
        vi: 'Phải so **battery life** với battery life; danh từ này số ít nên dùng **that** of. those dùng cho danh từ số nhiều; it và this không đi với of trong phép so sánh.',
        en: 'We must compare **battery life** with battery life; the noun is singular, so use **that** of. those is for plural nouns; it and this are not used before of in a comparison.',
      },
      translation: 'Thời lượng pin của máy tính bảng mới dài hơn đáng kể so với thời lượng pin của phiên bản trước.',
    },
  ],
};
