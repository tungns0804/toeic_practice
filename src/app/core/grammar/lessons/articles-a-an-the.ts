import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'articles-a-an-the',
  intro: {
    vi: 'Part 5 thường cho bốn lựa chọn kiểu a / an / the / much để kiểm tra hai điều: chọn **a hay an** theo âm đầu của từ phía sau, và chọn **a/an hay the** theo việc danh từ đã được xác định hay chưa. Bài này dạy cả hai, cùng quy tắc danh từ đếm được số ít không bao giờ đứng trơ một mình.',
    en: 'Part 5 often offers four options such as a / an / the / much to test two things: choosing **a or an** from the first sound of the next word, and choosing **a/an or the** depending on whether the noun is already identified. This lesson covers both, plus the rule that a singular countable noun never stands bare.',
  },
  mistakes: [
    {
      wrong: 'The position requires [[a]] MBA and five years of management experience.',
      right: 'The position requires [[an]] MBA and five years of management experience.',
      explanation: {
        vi: 'Chọn a/an theo **âm**, không theo chữ cái. MBA đọc là /em-bi-ei/, bắt đầu bằng nguyên âm /e/ → **an** MBA.',
        en: 'a/an depends on the **sound**, not the letter. MBA is read "em-bee-ay", starting with a vowel sound → **an** MBA.',
      },
    },
    {
      wrong: 'Members pay [[an]] one-time joining fee of $40.',
      right: 'Members pay [[a]] one-time joining fee of $40.',
      explanation: {
        vi: '**one** viết bằng chữ o nhưng đọc là /wʌn/, bắt đầu bằng phụ âm /w/ → **a** one-time fee.',
        en: '**one** is spelled with an o but pronounced "wun", starting with the consonant sound /w/ → **a** one-time fee.',
      },
    },
    {
      wrong: 'Mr. Haddad is [[accountant]] at a small firm in Dubai.',
      right: 'Mr. Haddad is [[an accountant]] at a small firm in Dubai.',
      explanation: {
        vi: '**accountant** là danh từ đếm được số ít nên không được đứng trơ; khi nói nghề nghiệp của một người, dùng **a/an** + nghề.',
        en: "**accountant** is a singular countable noun, so it cannot stand bare; to state someone's job, use **a/an** + the job.",
      },
    },
    {
      wrong: 'Our new showroom is on [[a]] fifth floor of the Meridian Tower.',
      right: 'Our new showroom is on [[the]] fifth floor of the Meridian Tower.',
      explanation: {
        vi: 'Số thứ tự (**first, second, fifth…**) chỉ ra đúng một vị trí xác định nên đi với **the**: tòa nhà chỉ có một tầng năm.',
        en: 'Ordinal numbers (**first, second, fifth...**) point to one specific position, so they take **the**: the building has only one fifth floor.',
      },
    },
    {
      wrong: 'We received an order from a hotel in Lyon. [[A]] hotel wants delivery by June 3.',
      right: 'We received an order from a hotel in Lyon. [[The]] hotel wants delivery by June 3.',
      explanation: {
        vi: 'Lần đầu nhắc dùng **a** (a hotel in Lyon); lần thứ hai người đọc đã biết là khách sạn nào → **the** hotel.',
        en: 'The first mention uses **a** (a hotel in Lyon); at the second mention the reader knows which hotel → **the** hotel.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'a hay an: nghe âm, đừng nhìn chữ', en: 'a or an: listen to the sound, not the letter' },
      body: {
        vi: '**a** đứng trước từ bắt đầu bằng **phụ âm** khi đọc, **an** đứng trước từ bắt đầu bằng **nguyên âm** khi đọc. Điều quyết định là âm đầu tiên phát ra, không phải chữ cái đầu tiên được viết.',
        en: '**a** goes before a word that begins with a consonant **sound**, **an** before a word that begins with a vowel **sound**. What counts is the first sound you say, not the first letter you write.',
      },
      table: {
        head: [
          { vi: 'Trường hợp', en: 'Case' },
          { vi: 'Ví dụ', en: 'Examples' },
          { vi: 'Lý do', en: 'Reason' },
        ],
        rows: [
          [{ vi: 'Nguyên âm thường', en: 'Ordinary vowel' }, 'an invoice, an email, an update, an office', { vi: 'Âm đầu là nguyên âm', en: 'First sound is a vowel' }],
          [{ vi: 'h câm', en: 'Silent h' }, 'an hour, an honest mistake, an honor', { vi: 'Không đọc h, âm đầu là nguyên âm', en: 'The h is silent, so the first sound is a vowel' }],
          [{ vi: 'h đọc thành tiếng', en: 'Pronounced h' }, 'a hotel, a holiday, a half-day session', { vi: 'Âm đầu là phụ âm /h/', en: 'First sound is the consonant /h/' }],
          [{ vi: 'u / eu đọc là /juː/', en: 'u / eu read as "you"' }, 'a university, a user guide, a European client', { vi: 'Âm đầu là phụ âm /j/', en: 'First sound is the consonant /j/' }],
          [{ vi: 'o đọc là /w/', en: 'o read as "w"' }, 'a one-time fee, a one-year contract', { vi: 'Âm đầu là phụ âm /w/', en: 'First sound is the consonant /w/' }],
          [{ vi: 'Viết tắt đọc từng chữ, chữ số', en: 'Abbreviations read letter by letter, numerals' }, 'an MBA, an HR manager, an SUV, an 8-hour shift', { vi: 'M, H, S, 8 đọc là /em/, /eitʃ/, /es/, /eit/', en: 'M, H, S and 8 are said "em", "aitch", "es", "eight"' }],
          [{ vi: 'Viết tắt bắt đầu bằng phụ âm', en: 'Abbreviations with a consonant sound' }, 'a CEO, a USB drive, a PDF file', { vi: 'C, U, P đọc là /si/, /ju/, /pi/', en: 'C, U and P are said "see", "you", "pee"' }],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'a/an chọn theo **từ đứng ngay sau nó**, không phải theo danh từ chính: **an** annual report nhưng **a** new office; **a** useful idea nhưng **an** unusual idea.',
          en: 'a/an follows **the word right after it**, not the main noun: **an** annual report but **a** new office; **a** useful idea but **an** unusual idea.',
        },
      },
    },
    {
      heading: { vi: 'Khi nào dùng a/an', en: 'When to use a/an' },
      body: {
        vi: 'a/an chỉ đi với **danh từ đếm được số ít** và mang nghĩa "một (cái/người) nào đó", người nghe chưa biết hoặc không cần biết là cái nào cụ thể.',
        en: 'a/an only goes with a **singular countable noun** and means "one, any one": the listener does not know, or does not need to know, exactly which one.',
      },
      points: [
        {
          vi: 'Nhắc đến lần đầu: We have hired **a** new receptionist.',
          en: 'First mention: We have hired **a** new receptionist.',
        },
        {
          vi: 'Một trong nhiều cái cùng loại: Can I borrow **a** pen? (cái nào cũng được).',
          en: 'One of many of the same kind: Can I borrow **a** pen? (any pen will do).',
        },
        {
          vi: 'Nghề nghiệp, chức danh nói chung: She is **an** architect; He works as **a** sales representative.',
          en: 'Jobs and roles in general: She is **an** architect; He works as **a** sales representative.',
        },
        {
          vi: 'Nghĩa "mỗi" khi nói tần suất, giá cả: twice **a** week, $25 **an** hour, 60 kilometers **an** hour.',
          en: 'Meaning "per" in rates and prices: twice **a** week, $25 **an** hour, 60 kilometers **an** hour.',
        },
      ],
      examples: [
        {
          en: 'Ms. Wong opened **an** account at the Harbor Street branch yesterday.',
          vi: 'Cô Wong đã mở một tài khoản tại chi nhánh phố Harbor hôm qua.',
        },
        {
          en: 'Cleaning staff inspect the meeting rooms three times **a** day.',
          vi: 'Nhân viên vệ sinh kiểm tra các phòng họp ba lần mỗi ngày.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không dùng a/an với danh từ số nhiều hay không đếm được: không nói "an information", "a furnitures". Muốn nói "một" cho danh từ không đếm được, dùng đơn vị đếm: **a piece of** advice (bài 2.1).',
          en: 'Never use a/an with plural or uncountable nouns: not "an information" or "a furnitures". To say "one" with an uncountable noun, use a unit: **a piece of** advice (lesson 2.1).',
        },
      },
    },
    {
      heading: { vi: 'Khi nào dùng the', en: 'When to use the' },
      body: {
        vi: '**the** dùng được với mọi loại danh từ (số ít, số nhiều, không đếm được) khi người nói và người nghe **đều biết đang nói về cái nào**.',
        en: '**the** works with every kind of noun (singular, plural, uncountable) when both speaker and listener **know exactly which one** is meant.',
      },
      points: [
        {
          vi: 'Nhắc lại lần thứ hai: We hired a new receptionist. **The** receptionist starts on Monday.',
          en: 'Second mention: We hired a new receptionist. **The** receptionist starts on Monday.',
        },
        {
          vi: 'Rõ từ ngữ cảnh, thường chỉ có một trong phạm vi đang nói (công ty, tòa nhà, cuộc họp): Please give this to **the** receptionist; **the** elevators are out of order.',
          en: 'Clear from the situation, usually the only one in the setting (the company, building, meeting): Please give this to **the** receptionist; **the** elevators are out of order.',
        },
        {
          vi: 'Duy nhất trên đời hoặc trong xã hội: **the** Internet, **the** economy, **the** government.',
          en: 'Unique in the world or in society: **the** Internet, **the** economy, **the** government.',
        },
        {
          vi: 'Có cụm từ hoặc mệnh đề phía sau xác định rõ: **the** report that you sent me, **the** room at the end of the hall.',
          en: 'A phrase or clause after the noun pins it down: **the** report that you sent me, **the** room at the end of the hall.',
        },
        {
          vi: 'So sánh nhất và các từ chỉ thứ tự, duy nhất: **the** best, **the** most reliable, **the** first, **the** third floor, **the** only, **the** same.',
          en: 'Superlatives and words of order or uniqueness: **the** best, **the** most reliable, **the** first, **the** third floor, **the** only, **the** same.',
        },
      ],
      examples: [
        {
          en: 'Please return **the** visitor badge to the security desk when you leave.',
          vi: 'Vui lòng trả lại thẻ khách cho quầy bảo vệ khi ra về.',
        },
        {
          en: 'Ms. Patel was **the** first employee to complete the new safety course.',
          vi: 'Cô Patel là nhân viên đầu tiên hoàn thành khóa an toàn mới.',
        },
        {
          en: 'Grandview Motors sold **the** most vehicles of any dealer in the region last year.',
          vi: 'Năm ngoái Grandview Motors bán được nhiều xe nhất trong số các đại lý trong vùng.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**next / last + mốc thời gian** tính từ hiện tại thì KHÔNG có the: next Monday, last month, next year. Chỉ dùng the khi nói "kế tiếp/cuối cùng" trong một chuỗi: **the** next step, **the** last page of the contract.',
          en: '**next / last + a time** counted from now takes NO the: next Monday, last month, next year. Use the only for "next/last" in a sequence: **the** next step, **the** last page of the contract.',
        },
      },
    },
    {
      heading: { vi: 'Danh từ đếm được số ít không bao giờ đứng trơ', en: 'A singular countable noun never stands bare' },
      body: {
        vi: 'Một danh từ đếm được số ít luôn phải có **từ hạn định** đứng trước: a/an, the, this/that, my/your/our, each, every, another, one… Nếu không muốn dùng từ hạn định, phải chuyển danh từ sang số nhiều. Ngoại lệ chỉ là một số cụm cố định như by train, at work (bài 10.2).',
        en: 'A singular countable noun must always have a **determiner** before it: a/an, the, this/that, my/your/our, each, every, another, one... If you do not want a determiner, make the noun plural. The only exceptions are some fixed phrases such as by train or at work (lesson 10.2).',
      },
      table: {
        head: [
          { vi: 'Sai', en: 'Wrong' },
          { vi: 'Đúng', en: 'Right' },
        ],
        rows: [
          ['The hotel has rooftop pool.', 'The hotel has a rooftop pool.'],
          ['Please fill out form before the interview.', 'Please fill out a form / the form / this form before the interview.'],
          ['We need new printer.', 'We need a new printer. / We need new printers.'],
        ],
      },
      callout: {
        kind: 'tip',
        text: {
          vi: 'Tính từ đứng trước không thay được từ hạn định: "new printer", "detailed report" vẫn thiếu. Hãy nhìn xem trước cụm tính từ + danh từ số ít đã có a/an, the hay my… chưa.',
          en: 'An adjective does not replace a determiner: "new printer" or "detailed report" is still incomplete. Check whether the adjective + singular noun already has a/an, the or my... in front.',
        },
      },
    },
    {
      heading: { vi: 'the + danh từ + of', en: 'the + noun + of' },
      body: {
        vi: 'Khi danh từ có cụm **of** theo sau, cụm này thường xác định rõ danh từ là cái nào → dùng **the**. Đây là khuôn rất hay gặp ở đầu câu Part 5: The ------- of the new branch…',
        en: 'When a noun is followed by an **of** phrase, that phrase usually identifies it → use **the**. This pattern often opens a Part 5 sentence: The ------- of the new branch...',
      },
      points: [
        {
          vi: 'Thường gặp: **the** purpose of the meeting, **the** cost of shipping, **the** end of the month, **the** quality of the products, **the** rest of the team, **the** opening of the new store.',
          en: 'Common: **the** purpose of the meeting, **the** cost of shipping, **the** end of the month, **the** quality of the products, **the** rest of the team, **the** opening of the new store.',
        },
        {
          vi: 'Dùng **a/an + danh từ + of** khi chỉ là một trong nhiều cái: **a** copy of the contract (một trong các bản sao), **a** member of the board (một trong các thành viên).',
          en: 'Use **a/an + noun + of** when it is one of several: **a** copy of the contract (one of the copies), **a** member of the board (one of the members).',
        },
      ],
      examples: [
        {
          en: '**The** aim of the workshop is to improve communication between departments.',
          vi: 'Mục đích của buổi hội thảo là cải thiện giao tiếp giữa các phòng ban.',
        },
        {
          en: 'Please keep **a** copy of the receipt for your records.',
          vi: 'Vui lòng giữ một bản sao biên lai để lưu hồ sơ.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Khi chỗ trống nằm giữa **The** và **of**, đề thường hỏi từ loại: vị trí đó cần một danh từ (bài 1.2).',
          en: 'When the blank sits between **The** and **of**, the item is usually testing word form: that slot needs a noun (lesson 1.2).',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu mạo từ trong Part 5', en: 'Attacking article items in Part 5' },
      points: [
        {
          vi: 'Nhìn danh từ sau chỗ trống: số ít đếm được → cần a/an/the (hoặc từ hạn định khác); số nhiều hoặc không đếm được → loại ngay a/an.',
          en: 'Look at the noun after the blank: singular countable → it needs a/an/the (or another determiner); plural or uncountable → rule out a/an at once.',
        },
        {
          vi: 'Còn lại a và an → đọc thầm từ ngay sau chỗ trống và nghe âm đầu: hour, MBA, HR → an; university, one, European → a.',
          en: 'Left with a and an → say the word right after the blank and listen to the first sound: hour, MBA, HR → an; university, one, European → a.',
        },
        {
          vi: 'Phân vân a/an với the → tìm dấu hiệu xác định: so sánh nhất (most, -est), số thứ tự, only, same, cụm of hoặc mệnh đề phía sau, hoặc danh từ đã được nhắc trước đó → the.',
          en: 'Torn between a/an and the → look for an identifying cue: a superlative (most, -est), an ordinal, only, same, an of phrase or a clause after the noun, or a noun already mentioned → the.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The technician said the repair would take about ------- hour, so we moved the client call to 3 P.M.',
      options: ['an', 'a', 'much', 'several'],
      answer: 0,
      explanation: {
        vi: '**hour** có h câm, âm đầu là nguyên âm → **an** hour. a là bẫy vì nhìn chữ h; much đi với danh từ không đếm được, several cần danh từ số nhiều.',
        en: '**hour** has a silent h, so it starts with a vowel sound → **an** hour. a is the trap for those who look at the letter h; much needs an uncountable noun and several a plural one.',
      },
      translation: 'Kỹ thuật viên nói việc sửa chữa sẽ mất khoảng một giờ, nên chúng tôi dời cuộc gọi với khách hàng sang 3 giờ chiều.',
    },
    {
      sentence: 'All applicants for the analyst position must hold ------- university degree in finance, economics or a related field.',
      options: ['an', 'a', 'much', 'few'],
      answer: 1,
      explanation: {
        vi: '**university** đọc là /juː-/, bắt đầu bằng phụ âm /j/ → **a** university degree. an là bẫy vì chữ u là nguyên âm khi viết; much và few không đi với danh từ đếm được số ít.',
        en: '**university** begins with the sound "you", a consonant sound /j/ → **a** university degree. an is the trap because u is a vowel letter; much and few cannot go with a singular countable noun.',
      },
      translation: 'Tất cả ứng viên cho vị trí chuyên viên phân tích phải có bằng đại học ngành tài chính, kinh tế hoặc một ngành liên quan.',
    },
    {
      sentence: 'Kemble Logistics is looking for ------- HR coordinator with at least three years of experience in recruitment.',
      options: ['a', 'many', 'an', 'several'],
      answer: 2,
      explanation: {
        vi: '**HR** đọc từng chữ cái, H đọc là /eitʃ/, bắt đầu bằng nguyên âm → **an** HR coordinator. a sai vì không xét theo chữ h; many và several cần danh từ số nhiều (coordinators).',
        en: '**HR** is read letter by letter and H is said "aitch", which starts with a vowel sound → **an** HR coordinator. a is wrong because the choice is not based on the letter h; many and several need a plural noun (coordinators).',
      },
      translation: 'Kemble Logistics đang tìm một điều phối viên nhân sự có ít nhất ba năm kinh nghiệm tuyển dụng.',
    },
    {
      sentence: 'New gym members pay ------- one-time registration fee of $50 in addition to the monthly charge.',
      options: ['an', 'much', 'many', 'a'],
      answer: 3,
      explanation: {
        vi: '**one** đọc là /wʌn/, bắt đầu bằng phụ âm /w/ → **a** one-time fee. an là bẫy vì chữ o; much và many không đi với danh từ đếm được số ít **fee**.',
        en: '**one** is pronounced "wun", starting with the consonant sound /w/ → **a** one-time fee. an is the trap because of the letter o; much and many cannot go with the singular countable noun **fee**.',
      },
      translation: 'Hội viên mới của phòng tập trả phí đăng ký một lần là 50 đô la, ngoài phí hằng tháng.',
    },
    {
      sentence: 'A guest left a leather briefcase in the lobby on Tuesday, and ------- briefcase is now being kept at the front desk.',
      options: ['a', 'the', 'some', 'much'],
      answer: 1,
      explanation: {
        vi: 'Chiếc cặp đã được nhắc lần đầu bằng **a leather briefcase**; lần thứ hai người đọc biết đó là chiếc nào → **the**. a sai vì sẽ thành một chiếc cặp khác; some và much không đi với danh từ đếm được số ít.',
        en: 'The briefcase was first introduced as **a leather briefcase**; at the second mention the reader knows which one → **the**. a is wrong because it would mean a different briefcase; some and much do not go with a singular countable noun.',
      },
      translation: 'Một vị khách để quên chiếc cặp da ở sảnh hôm thứ Ba, và chiếc cặp hiện đang được giữ tại quầy lễ tân.',
    },
    {
      sentence: "The board will announce ------- name of the new chief executive at Thursday's press conference.",
      options: ['the', 'a', 'an', 'much'],
      answer: 0,
      explanation: {
        vi: 'Cụm **of the new chief executive** xác định rõ: vị giám đốc mới chỉ có một tên → **the** name. a sai vì hàm ý ông/bà ấy có nhiều tên; an sai âm; much không đi với danh từ đếm được.',
        en: 'The phrase **of the new chief executive** identifies it: the new CEO has just one name → **the** name. a is wrong because it implies the person has several names; an does not fit the sound; much cannot go with a countable noun.',
      },
      translation: 'Hội đồng quản trị sẽ công bố tên của tân tổng giám đốc tại buổi họp báo hôm thứ Năm.',
    },
    {
      sentence: 'According to the survey, Harborview Suites offers ------- most comfortable rooms of all the hotels near the convention center.',
      options: ['a', 'an', 'the', 'much'],
      answer: 2,
      explanation: {
        vi: 'So sánh nhất **most comfortable … of all the hotels** luôn đi với **the**. a/an không đi với danh từ số nhiều **rooms**; much không đứng trước so sánh nhất theo cách này.',
        en: 'The superlative **most comfortable ... of all the hotels** always takes **the**. a/an cannot go with the plural noun **rooms**; much cannot introduce a superlative like this.',
      },
      translation: 'Theo khảo sát, Harborview Suites có những phòng thoải mái nhất trong tất cả các khách sạn gần trung tâm hội nghị.',
    },
    {
      sentence: 'Visitors to the Linwood Building must sign in at the reception desk on ------- third floor.',
      options: ['a', 'an', 'some', 'the'],
      answer: 3,
      explanation: {
        vi: 'Số thứ tự **third** chỉ đúng một tầng xác định của tòa nhà → **the** third floor. a sai vì hàm ý tòa nhà có nhiều "tầng ba"; an sai âm; some không đi với danh từ đếm được số ít.',
        en: 'The ordinal **third** points to one specific floor of the building → **the** third floor. a is wrong because it implies several "third floors"; an does not fit the sound; some does not go with a singular countable noun.',
      },
      translation: 'Khách đến tòa nhà Linwood phải đăng ký tại quầy lễ tân ở tầng ba.',
    },
    {
      sentence: 'Customers who spend more than $100 this weekend will receive ------- for 15 percent off their next purchase.',
      options: ['a voucher', 'voucher', 'vouch', 'vouched'],
      answer: 0,
      explanation: {
        vi: 'Sau **receive** cần một cụm danh từ làm tân ngữ; **voucher** là danh từ đếm được số ít nên bắt buộc có từ hạn định → **a voucher**. voucher đứng trơ là sai; vouch và vouched là động từ.',
        en: 'After **receive** we need a noun phrase as the object; **voucher** is a singular countable noun, so it must have a determiner → **a voucher**. A bare voucher is wrong; vouch and vouched are verbs.',
      },
      translation: 'Khách hàng chi tiêu trên 100 đô la vào cuối tuần này sẽ nhận được một phiếu giảm giá 15% cho lần mua tiếp theo.',
    },
    {
      sentence: 'Ms. Lindqvist was ------- only candidate who had experience with international tax law.',
      options: ['an', 'a', 'the', 'one'],
      answer: 2,
      explanation: {
        vi: '**only** (duy nhất) xác định đúng một người → luôn đi với **the**: the only candidate. a/an không đi với only theo nghĩa này; "one only candidate" sai trật tự từ.',
        en: '**only** identifies exactly one person → it always takes **the**: the only candidate. a/an cannot go with only in this sense; "one only candidate" has the wrong word order.',
      },
      translation: 'Cô Lindqvist là ứng viên duy nhất có kinh nghiệm về luật thuế quốc tế.',
    },
  ],
};
