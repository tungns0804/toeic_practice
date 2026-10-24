import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'nouns-countable',
  intro: {
    vi: 'Part 5 và Part 6 rất hay cho bốn lượng từ (many, much, a few, a little…) hoặc bốn dạng của cùng một danh từ (equipment, equipments…) để kiểm tra xem bạn có biết danh từ đó **đếm được** hay **không đếm được**. Bài này giúp bạn thuộc nhóm danh từ không đếm được hay gặp và ghép đúng từ hạn định với từng loại danh từ.',
    en: 'Part 5 and Part 6 often offer four quantifiers (many, much, a few, a little…) or four forms of the same noun (equipment, equipments…) to test whether you know if the noun is **countable** or **uncountable**. This lesson helps you memorise the uncountable nouns that come up most and match each type of noun with the right determiner.',
  },
  mistakes: [
    {
      wrong: 'Guests can leave their [[luggages]] at the front desk after checking out.',
      right: 'Guests can leave their [[luggage]] at the front desk after checking out.',
      explanation: {
        vi: '**luggage** (hành lý) là danh từ không đếm được nên không bao giờ thêm -s. Muốn đếm thì nói **pieces of luggage**.',
        en: '**luggage** is an uncountable noun, so it never takes -s. To count it, say **pieces of luggage**.',
      },
    },
    {
      wrong: 'We did not receive [[many]] feedback on the new booking system.',
      right: 'We did not receive [[much]] feedback on the new booking system.',
      explanation: {
        vi: '**feedback** là danh từ không đếm được nên đi với **much**. **many** chỉ dùng cho danh từ đếm được số nhiều (many comments).',
        en: '**feedback** is uncountable, so it goes with **much**. **many** is only used with plural countable nouns (many comments).',
      },
    },
    {
      wrong: 'The hotel still has [[a little]] rooms available for the conference weekend.',
      right: 'The hotel still has [[a few]] rooms available for the conference weekend.',
      explanation: {
        vi: '**rooms** là danh từ đếm được số nhiều nên dùng **a few**. **a little** chỉ đi với danh từ không đếm được (a little time, a little space).',
        en: '**rooms** is a plural countable noun, so we use **a few**. **a little** only goes with uncountable nouns (a little time, a little space).',
      },
    },
    {
      wrong: 'Each [[participants]] will receive a name badge at the registration desk.',
      right: 'Each [[participant]] will receive a name badge at the registration desk.',
      explanation: {
        vi: '**Each** chỉ đi với danh từ đếm được số ít. Muốn giữ số nhiều thì phải nói **each of the participants** hoặc **all participants**.',
        en: '**Each** is followed only by a singular countable noun. To keep the plural, say **each of the participants** or **all participants**.',
      },
    },
    {
      wrong: 'The company plans to open [[branch]] in Da Nang next year.',
      right: 'The company plans to open [[a branch]] in Da Nang next year.',
      explanation: {
        vi: 'Danh từ đếm được số ít như **branch** không được đứng trơ trọi; phía trước phải có từ hạn định (**a**, the, another…), hoặc chuyển sang số nhiều (branches).',
        en: 'A singular countable noun like **branch** cannot stand bare; it needs a determiner (**a**, the, another…), or it must become plural (branches).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Đếm được và không đếm được khác nhau ở đâu', en: 'How countable and uncountable nouns differ' },
      body: {
        vi: 'Danh từ **đếm được** chỉ những thứ tách ra đếm được từng cái (a report, two invoices). Danh từ **không đếm được** chỉ một khối, một chất liệu hay một khái niệm chung (information, advice). Sự khác biệt này quyết định danh từ có thêm -s được không, có đi với a/an được không và đi với từ hạn định nào.',
        en: 'A **countable** noun names things you can count one by one (a report, two invoices). An **uncountable** noun names a mass, a material or a general idea (information, advice). This difference decides whether the noun can take -s, whether it can follow a/an, and which determiners it goes with.',
      },
      table: {
        head: [
          { vi: 'Đặc điểm', en: 'Feature' },
          { vi: 'Danh từ đếm được', en: 'Countable noun' },
          { vi: 'Danh từ không đếm được', en: 'Uncountable noun' },
        ],
        rows: [
          [
            { vi: 'Đi sau a/an', en: 'After a/an' },
            'a report, an invoice',
            { vi: 'Không: không nói "an information"', en: 'No: never "an information"' },
          ],
          [
            { vi: 'Dạng số nhiều', en: 'Plural form' },
            'reports, invoices',
            { vi: 'Không thêm -s: không nói "informations"', en: 'No -s: never "informations"' },
          ],
          [
            { vi: 'Động từ đi kèm', en: 'Verb agreement' },
            'The report is… / The reports are…',
            { vi: 'Luôn chia số ít: The information is…', en: 'Always singular: The information is…' },
          ],
          [{ vi: 'Đại từ thay thế', en: 'Pronoun' }, 'it / they', 'it'],
          [
            { vi: 'Đứng một mình, không có từ hạn định', en: 'Standing alone, with no determiner' },
            { vi: 'Chỉ được ở số nhiều: Reports are due on Friday.', en: 'Only in the plural: Reports are due on Friday.' },
            { vi: 'Được: Information is available online.', en: 'Yes: Information is available online.' },
          ],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Tiếng Việt nói được "hai thông tin", "vài lời khuyên", nên người Việt hay đếm cả những danh từ mà tiếng Anh coi là không đếm được. Đừng dựa vào tiếng Việt: hãy học thuộc nhóm danh từ ở mục sau.',
          en: 'Vietnamese lets you say the equivalent of "two informations" or "some advices", so learners often count nouns that English treats as uncountable. Do not rely on Vietnamese: memorise the nouns in the next section.',
        },
      },
    },
    {
      heading: { vi: 'Danh từ không đếm được hay gặp trong TOEIC', en: 'Uncountable nouns that TOEIC loves' },
      table: {
        head: [
          { vi: 'Danh từ', en: 'Noun' },
          { vi: 'Nghĩa', en: 'Meaning' },
          { vi: 'Cách nói đếm được', en: 'Countable alternative' },
        ],
        rows: [
          ['equipment', { vi: 'thiết bị (nói chung)', en: 'tools and devices in general' }, 'a piece of equipment; a device, a tool'],
          ['machinery', { vi: 'máy móc (nói chung)', en: 'machines in general' }, 'a machine, two machines'],
          ['information', { vi: 'thông tin', en: 'facts, details' }, 'a piece of information; a detail, a fact'],
          ['advice', { vi: 'lời khuyên', en: 'recommendations' }, 'a piece of advice; a tip, a suggestion'],
          ['feedback', { vi: 'ý kiến phản hồi', en: 'reactions, opinions' }, 'a comment, a review'],
          ['furniture', { vi: 'đồ nội thất', en: 'desks, chairs, sofas…' }, 'a piece of furniture; a desk, a chair'],
          ['luggage / baggage', { vi: 'hành lý', en: 'bags and cases for travel' }, 'a piece of luggage; a suitcase, a bag'],
          ['merchandise', { vi: 'hàng hoá (để bán)', en: 'goods for sale' }, 'an item of merchandise; a product'],
          ['clothing', { vi: 'quần áo, trang phục', en: 'clothes in general' }, 'an item of clothing; a garment'],
          ['stationery', { vi: 'văn phòng phẩm', en: 'paper, envelopes, pens…' }, 'a pen, an envelope; office supplies'],
          ['research', { vi: 'việc nghiên cứu', en: 'careful study of a subject' }, 'a study, a research project'],
          [
            'access',
            { vi: 'quyền / lối ra vào, quyền truy cập', en: 'the right or means to enter or use' },
            { vi: 'Không có; chỉ nói access to + danh từ', en: 'None; just say access to + noun' },
          ],
          ['permission', { vi: 'sự cho phép', en: 'consent to do something' }, 'a permit (a written document)'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong đề TOEIC, hãy coi các danh từ trên là không đếm được: không đi với a/an, không thêm -s. Các dạng "an equipment", "furnitures", "informations", "luggages", "feedbacks" đều sai. Lưu ý thêm: **clothing** không đếm được, còn **clothes** luôn ở số nhiều (không có "a clothe"); **stationery** (văn phòng phẩm) khác **stationary** (tính từ: đứng yên).',
          en: 'In TOEIC, treat the nouns above as uncountable: no a/an, no -s. Forms like "an equipment", "furnitures", "informations", "luggages" and "feedbacks" are all wrong. Also note: **clothing** is uncountable while **clothes** is always plural (there is no "a clothe"); **stationery** (office supplies) is not **stationary** (an adjective meaning not moving).',
        },
      },
    },
    {
      heading: { vi: 'Cách đếm danh từ không đếm được', en: 'How to count uncountable nouns' },
      points: [
        {
          vi: 'Dùng **a piece of / pieces of**: a piece of equipment, a piece of advice, two pieces of luggage, several pieces of furniture. Với clothing và merchandise còn dùng được **an item of / items of**.',
          en: 'Use **a piece of / pieces of**: a piece of equipment, a piece of advice, two pieces of luggage, several pieces of furniture. With clothing and merchandise you can also use **an item of / items of**.',
        },
        {
          vi: 'Chỉ **piece / item** đổi sang số nhiều, danh từ không đếm được giữ nguyên: two pieces of luggage, không nói "two pieces of luggages".',
          en: 'Only **piece / item** becomes plural; the uncountable noun stays the same: two pieces of luggage, never "two pieces of luggages".',
        },
        {
          vi: 'Hoặc thay bằng một danh từ đếm được gần nghĩa: advice → **a suggestion**, machinery → **a machine**, merchandise → **a product**, feedback → **a comment**, permission → **a permit** (giấy phép, là văn bản).',
          en: 'Or switch to a countable noun with a similar meaning: advice → **a suggestion**, machinery → **a machine**, merchandise → **a product**, feedback → **a comment**, permission → **a permit** (a written document).',
        },
      ],
      examples: [
        {
          en: 'Each passenger may bring two **pieces of luggage** on the airport shuttle.',
          vi: 'Mỗi hành khách được mang hai kiện hành lý lên xe đưa đón sân bay.',
        },
        {
          en: 'Our consultant gave us a useful **piece of advice** about pricing.',
          vi: 'Chuyên gia tư vấn đã cho chúng tôi một lời khuyên hữu ích về việc định giá.',
        },
        {
          en: 'Tenants need **permission** from the landlord to repaint their units.',
          vi: 'Người thuê phải được chủ nhà cho phép mới được sơn lại căn hộ.',
        },
        {
          en: 'The contractor has applied for **a permit** to extend the warehouse.',
          vi: 'Nhà thầu đã nộp đơn xin giấy phép mở rộng nhà kho.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Một số danh từ đếm được hay không là tuỳ nghĩa: **experience** (kinh nghiệm, không đếm được) / **an experience** (một trải nghiệm); **room** (chỗ trống, không đếm được) / **a room** (căn phòng); **business** (việc kinh doanh) / **a business** (một doanh nghiệp). Hãy xét nghĩa trong câu trước khi chọn.',
          en: 'Some nouns are countable or uncountable depending on meaning: **experience** (skill gained over time, uncountable) / **an experience** (one event); **room** (space, uncountable) / **a room** (a chamber); **business** (commercial activity) / **a business** (a company). Check the meaning in the sentence before choosing.',
        },
      },
    },
    {
      heading: { vi: 'Từ hạn định đi với từng loại danh từ', en: 'Determiners for each type of noun' },
      body: {
        vi: 'Phần lớn từ hạn định chỉ đi với một hoặc hai loại danh từ; chỉ một nhóm nhỏ (the, any, no, tính từ sở hữu) đi được với mọi loại. Thuộc bảng này là giải được phần lớn câu hỏi chọn lượng từ trong Part 5.',
        en: 'Most determiners go with only one or two types of noun; only a small group (the, any, no, possessives) goes with every type. Learn this table and you can solve most quantifier items in Part 5.',
      },
      table: {
        head: [
          { vi: 'Từ hạn định', en: 'Determiner' },
          { vi: 'Đi với', en: 'Used with' },
          { vi: 'Ví dụ', en: 'Examples' },
        ],
        rows: [
          [
            'a / an, one, each, every, another',
            { vi: 'Danh từ đếm được số ít', en: 'Singular countable nouns' },
            'a client, each guest, every invoice, another room',
          ],
          [
            'many, few, a few, several, numerous, various, a number of, a variety of',
            { vi: 'Danh từ đếm được số nhiều', en: 'Plural countable nouns' },
            'many applicants, several branches, a number of delays',
          ],
          [
            'much, little, a little, an amount of, a great deal of',
            { vi: 'Danh từ không đếm được', en: 'Uncountable nouns' },
            'much equipment, a little feedback, a large amount of paperwork',
          ],
          [
            'a lot of, lots of, plenty of, most, more',
            { vi: 'Danh từ số nhiều hoặc không đếm được', en: 'Plural or uncountable nouns' },
            'a lot of suppliers, a lot of furniture',
          ],
          [
            'the, any, no, my, our, their…',
            { vi: 'Mọi loại danh từ', en: 'Any type of noun' },
            'the invoice, no applicants, any information',
          ],
        ],
      },
      examples: [
        {
          en: 'We have received **a number of** inquiries about the new loyalty program.',
          vi: 'Chúng tôi đã nhận được một số câu hỏi về chương trình khách hàng thân thiết mới.',
        },
        {
          en: 'Switching to the new payroll software will take **a little** time.',
          vi: 'Chuyển sang phần mềm tính lương mới sẽ mất một chút thời gian.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đừng nhầm **a number of** với **an amount of**: "a large amount of complaints" bị coi là sai trong văn viết chuẩn và trong TOEIC; phải nói **a large number of complaints**. Động từ đi sau a number of chia số nhiều, phần hoà hợp này học kỹ ở bài 3.3.',
          en: 'Do not mix up **a number of** and **an amount of**: "a large amount of complaints" is treated as wrong in formal writing and in TOEIC; say **a large number of complaints**. The verb after a number of is plural; agreement is covered in lesson 3.3.',
        },
      },
    },
    {
      heading: { vi: 'Những điểm tinh tế của lượng từ', en: 'Fine points of quantifiers' },
      points: [
        {
          vi: '**a few / a little** = một vài, một ít (nghĩa khẳng định: có, tuy không nhiều). **few / little** = rất ít, hầu như không có (nghĩa phủ định). Hay đi kèm very/only: very few, very little, only a few, only a little.',
          en: '**a few / a little** = some, a small number or amount (positive: there is some). **few / little** = hardly any (negative). They often combine with very or only: very few, very little, only a few, only a little.',
        },
        {
          vi: '**much** thường dùng trong câu phủ định, câu hỏi và sau too/so/as/how (not much time, too much paperwork). Trong câu khẳng định, người ta thường nói **a lot of** thay cho much.',
          en: '**much** is mostly used in negatives, questions and after too/so/as/how (not much time, too much paperwork). In positive statements, **a lot of** is usually preferred to much.',
        },
        {
          vi: '**a variety of** (nhiều loại) trong đề hầu như luôn đi với danh từ số nhiều: a variety of products, a variety of options.',
          en: '**a variety of** is almost always followed by a plural noun in the test: a variety of products, a variety of options.',
        },
        {
          vi: 'Ngoại lệ đúng ngữ pháp: **every / another + số đếm + danh từ số nhiều**: every three months (cứ ba tháng một lần), another two weeks (thêm hai tuần nữa).',
          en: 'A grammatical exception: **every / another + number + plural noun**: every three months, another two weeks.',
        },
      ],
      examples: [
        {
          en: "Only **a few** seats are left for Friday's seminar, so please register soon.",
          vi: 'Chỉ còn vài chỗ cho buổi hội thảo hôm thứ Sáu, nên xin hãy đăng ký sớm.',
        },
        {
          en: '**Few** shoppers complained about the new store layout, which pleased the manager.',
          vi: 'Rất ít khách mua sắm phàn nàn về cách bố trí mới của cửa hàng, điều này khiến người quản lý hài lòng.',
        },
        {
          en: 'The shuttle to the convention center leaves **every** twenty minutes.',
          vi: 'Xe đưa đón tới trung tâm hội nghị cứ hai mươi phút có một chuyến.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Hai cặp này không thay cho nhau được: **few / a few** chỉ đi với danh từ đếm được số nhiều, **little / a little** chỉ đi với danh từ không đếm được. Xét loại danh từ trước, rồi mới xét nghĩa khẳng định hay phủ định.',
          en: 'The two pairs are not interchangeable: **few / a few** only go with plural countable nouns, **little / a little** only with uncountable nouns. Check the type of noun first, then whether the meaning is positive or negative.',
        },
      },
    },
    {
      heading: {
        vi: 'Danh từ đếm được số ít luôn cần từ hạn định',
        en: 'A singular countable noun always needs a determiner',
      },
      body: {
        vi: 'Danh từ đếm được số ít không đứng trơ trọi trong câu: phía trước phải có một từ hạn định như a/an, the, this/that, my/our, each, every, another, one… Nếu không muốn dùng từ hạn định thì chuyển danh từ sang số nhiều. Danh từ số nhiều và danh từ không đếm được thì đứng một mình được. Ngoại lệ là một số cụm cố định như by train, in person (bài 10.2) và chức danh sau appoint/elect (She was appointed director).',
        en: 'A singular countable noun cannot stand bare: it needs a determiner such as a/an, the, this/that, my/our, each, every, another or one. If you do not want a determiner, make the noun plural. Plural and uncountable nouns can stand alone. The exceptions are a few fixed phrases such as by train or in person (lesson 10.2) and job titles after appoint/elect (She was appointed director).',
      },
      examples: [
        {
          en: 'Please attach **a receipt** to each expense claim.',
          vi: 'Vui lòng đính kèm một hoá đơn vào mỗi phiếu đề nghị thanh toán.',
        },
        {
          en: '**Receipts** must be attached to every expense claim.',
          vi: 'Hoá đơn phải được đính kèm vào mọi phiếu đề nghị thanh toán.',
        },
        {
          en: '**Equipment** must be returned to the storeroom after use.',
          vi: 'Thiết bị phải được trả về kho sau khi sử dụng.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Nếu chỗ trống đứng ngay trước một danh từ đếm được số ít mà danh từ đó chưa có từ hạn định nào, đáp án phải là một từ hạn định đi được với số ít (a/an, the, this, each, every, another, one…), không thể là many, several hay few.',
          en: 'If the blank sits right before a singular countable noun that has no determiner yet, the answer must be a determiner that works with a singular noun (a/an, the, this, each, every, another, one…), never many, several or few.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu đếm được / không đếm được trong Part 5', en: 'Attacking countable/uncountable items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là lượng từ (many / much / few / little…) → nhìn danh từ ngay sau chỗ trống: số ít, số nhiều hay không đếm được?',
          en: 'Four quantifiers as options (many / much / few / little…) → look at the noun right after the blank: singular, plural or uncountable?',
        },
        {
          vi: 'Bốn lựa chọn là các dạng của một danh từ → nhìn từ hạn định đứng trước: each/every/another/a → số ít; several/many/a number of → số nhiều; much/a little/an amount of → dạng không đếm được, không -s.',
          en: 'Four forms of one noun as options → look at the determiner before it: each/every/another/a → singular; several/many/a number of → plural; much/a little/an amount of → the uncountable form, no -s.',
        },
        {
          vi: 'Gặp danh từ trong bảng ở mục 2 (equipment, information, luggage…) → loại ngay các lựa chọn có -s hoặc có a/an.',
          en: 'With a noun from the table in section 2 (equipment, information, luggage…) → rule out every option with -s or a/an at once.',
        },
        {
          vi: 'Phân vân giữa few và a few (little và a little) → có **very** đứng trước thì chỉ chọn được few/little; không có thì xét nghĩa: ý tiêu cực (rất ít, hầu như không) chọn few/little, ý "có một ít" chọn a few/a little.',
          en: 'Torn between few and a few (little and a little) → after **very**, only few/little are possible; otherwise check the meaning: a negative idea (hardly any) needs few/little, "there is some" needs a few/a little.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence:
        'The Busan branch does not have ------- equipment for video conferencing, so employees often borrow devices from headquarters.',
      options: ['many', 'much', 'few', 'several'],
      answer: 1,
      explanation: {
        vi: '**equipment** là danh từ không đếm được nên đi với **much** (rất hợp với câu phủ định **does not have**). many, few, several chỉ đi với danh từ đếm được số nhiều.',
        en: '**equipment** is uncountable, so it takes **much** (which fits the negative **does not have**). many, few and several only go with plural countable nouns.',
      },
      translation:
        'Chi nhánh Busan không có nhiều thiết bị họp trực tuyến, nên nhân viên thường phải mượn thiết bị từ trụ sở chính.',
    },
    {
      sentence: 'All damaged ------- must be returned to the supplier within thirty days of delivery.',
      options: ['merchandises', 'a merchandise', 'merchandise', 'merchandiser'],
      answer: 2,
      explanation: {
        vi: '**merchandise** (hàng hoá) không đếm được: không thêm -s, không đi với a, và đứng sau **All** được. merchandiser là danh từ đếm được số ít chỉ người, không đi với All khi không có -s và cũng sai nghĩa.',
        en: '**merchandise** is uncountable: no -s, no a, and it can follow **All**. merchandiser is a singular countable person noun; it cannot follow All without -s and makes no sense here.',
      },
      translation: 'Toàn bộ hàng hoá bị hư hỏng phải được trả lại nhà cung cấp trong vòng ba mươi ngày kể từ ngày giao.',
    },
    {
      sentence: 'Since the renovation began, the hotel has received a large ------- of complaints about noise.',
      options: ['amount', 'deal', 'much', 'number'],
      answer: 3,
      explanation: {
        vi: '**complaints** là danh từ đếm được số nhiều nên dùng **a large number of**. amount chỉ đi với danh từ không đếm được (an amount of time); deal chỉ có trong a great deal of + danh từ không đếm được; much không đứng sau a large.',
        en: '**complaints** is a plural countable noun, so we need **a large number of**. amount only goes with uncountable nouns (an amount of time); deal only appears in a great deal of + uncountable noun; much cannot follow a large.',
      },
      translation: 'Kể từ khi bắt đầu cải tạo, khách sạn đã nhận được rất nhiều lời phàn nàn về tiếng ồn.',
    },
    {
      sentence: '------- employee must complete the online safety training before the end of the month.',
      options: ['All', 'Many', 'Each', 'Several'],
      answer: 2,
      explanation: {
        vi: 'Danh từ **employee** ở dạng số ít (động từ khuyết thiếu **must** không giúp phân biệt), nên chỉ **Each** đứng trước được. All, Many, Several cần danh từ số nhiều (all employees, many employees).',
        en: 'The noun **employee** is singular (the modal **must** gives no clue), so only **Each** can come before it. All, Many and Several need a plural noun (all employees, many employees).',
      },
      translation: 'Mỗi nhân viên phải hoàn thành khoá đào tạo an toàn trực tuyến trước cuối tháng.',
    },
    {
      sentence: 'The gift shop in the hotel lobby sells a variety of ------- made by local artists.',
      options: ['product', 'productive', 'producer', 'products'],
      answer: 3,
      explanation: {
        vi: '**a variety of** (giống several, various, numerous) đi với danh từ đếm được số nhiều → **products**. product và producer là danh từ số ít nên sai; productive là tính từ.',
        en: '**a variety of** (like several, various and numerous) takes a plural countable noun → **products**. product and producer are singular, so they are wrong; productive is an adjective.',
      },
      translation: 'Cửa hàng quà tặng ở sảnh khách sạn bán nhiều loại sản phẩm do các nghệ nhân địa phương làm ra.',
    },
    {
      sentence: 'Mr. Okafor is looking for ------- apartment within walking distance of his new office downtown.',
      options: ['an', 'several', 'many', 'few'],
      answer: 0,
      explanation: {
        vi: '**apartment** là danh từ đếm được số ít nên bắt buộc có từ hạn định số ít → **an**. several, many, few đều đòi danh từ số nhiều (several apartments).',
        en: '**apartment** is a singular countable noun, so it must have a singular determiner → **an**. several, many and few all require a plural noun (several apartments).',
      },
      translation: 'Ông Okafor đang tìm một căn hộ trong phạm vi đi bộ tới văn phòng mới của ông ở trung tâm thành phố.',
    },
    {
      sentence: 'The proposal needs ------- more research before it can be presented to the board of directors.',
      options: ['a few', 'several', 'a little', 'many'],
      answer: 2,
      explanation: {
        vi: '**research** là danh từ không đếm được (không nói "a research") nên đi với **a little**: a little more research = thêm một chút nghiên cứu. a few, several, many chỉ dùng với danh từ đếm được số nhiều.',
        en: '**research** is uncountable (never "a research"), so it takes **a little**: a little more research. a few, several and many are only used with plural countable nouns.',
      },
      translation: 'Bản đề xuất cần được nghiên cứu thêm một chút trước khi trình lên hội đồng quản trị.',
    },
    {
      sentence: 'Visitors must obtain ------- from the site manager before entering the construction area.',
      options: ['permission', 'a permission', 'permit', 'permissive'],
      answer: 0,
      explanation: {
        vi: '**permission** không đếm được nên đứng một mình được và không đi với a. **permit** (giấy phép) là danh từ đếm được số ít, phải có từ hạn định (a permit) nên "obtain permit" sai; permissive là tính từ.',
        en: '**permission** is uncountable, so it can stand alone and never takes a. **permit** is a singular countable noun that needs a determiner (a permit), so "obtain permit" is wrong; permissive is an adjective.',
      },
      translation: 'Khách tham quan phải được quản lý công trường cho phép trước khi vào khu vực thi công.',
    },
    {
      sentence: 'If the current vendor cannot meet the deadline, the purchasing team will contact another -------.',
      options: ['suppliers', 'supplier', 'supplied', 'supplying'],
      answer: 1,
      explanation: {
        vi: '**another** (= an + other) đi với danh từ đếm được số ít → **supplier**. another + danh từ số nhiều chỉ đúng khi có số đếm chen giữa (another two suppliers); supplied và supplying là dạng của động từ.',
        en: '**another** (= an + other) takes a singular countable noun → **supplier**. another + plural noun is only correct with a number in between (another two suppliers); supplied and supplying are verb forms.',
      },
      translation: 'Nếu nhà cung cấp hiện tại không kịp hạn chót, bộ phận thu mua sẽ liên hệ với một nhà cung cấp khác.',
    },
    {
      sentence: 'Very ------- applicants met all the requirements, so the position will be advertised again next month.',
      options: ['little', 'a few', 'much', 'few'],
      answer: 3,
      explanation: {
        vi: '**applicants** là danh từ đếm được số nhiều nên chỉ còn few hoặc a few; đứng sau **Very** thì chỉ dùng được **few** (không nói "very a few"). Nghĩa "rất ít" cũng khớp với vế sau: phải đăng tuyển lại.',
        en: '**applicants** is a plural countable noun, which leaves few or a few; after **Very**, only **few** works (never "very a few"). The meaning "hardly any" also fits the second clause: the job must be advertised again.',
      },
      translation: 'Rất ít ứng viên đáp ứng đủ mọi yêu cầu, nên vị trí này sẽ được đăng tuyển lại vào tháng sau.',
    },
  ],
};
