import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'pronouns-case',
  intro: {
    vi: 'Câu hỏi đại từ trong Part 5 và Part 6 thường đưa ra bốn dạng của cùng một ngôi (they / them / their / theirs) và chỉ hỏi một điều: chỗ trống cần **chủ ngữ, tân ngữ, tính từ sở hữu hay đại từ sở hữu**. Bài này dạy bạn đọc vị trí và từ đứng ngay sau chỗ trống để chọn đúng dạng trong vài giây.',
    en: 'Pronoun items in Part 5 and Part 6 usually offer four forms of the same person (they / them / their / theirs) and ask only one thing: does the blank need a **subject, object, possessive adjective or possessive pronoun**? This lesson teaches you to read the position and the word right after the blank to pick the right form in seconds.',
  },
  mistakes: [
    {
      wrong: 'Mr. Fischer and [[me]] will lead the onboarding session on Monday.',
      right: 'Mr. Fischer and [[I]] will lead the onboarding session on Monday.',
      explanation: {
        vi: 'Cụm **Mr. Fischer and …** là chủ ngữ của **will lead**, nên phải dùng đại từ chủ ngữ **I**. Che "Mr. Fischer and" đi là thấy ngay: không ai nói "me will lead".',
        en: 'The phrase **Mr. Fischer and ...** is the subject of **will lead**, so it needs the subject pronoun **I**. Cover "Mr. Fischer and" and it is obvious: nobody says "me will lead".',
      },
    },
    {
      wrong: 'Please send the signed contract to Ms. Chen or [[I]] by Friday.',
      right: 'Please send the signed contract to Ms. Chen or [[me]] by Friday.',
      explanation: {
        vi: 'Sau giới từ **to** phải dùng tân ngữ, kể cả khi đại từ đứng sau "Ms. Chen or". Bỏ "Ms. Chen or" đi sẽ thấy rõ: send it to **me**.',
        en: 'A preposition like **to** takes the object form, even when the pronoun comes after "Ms. Chen or". Drop "Ms. Chen or" and it is clear: send it to **me**.',
      },
    },
    {
      wrong: "The airline has updated [[it's]] baggage policy for international flights.",
      right: 'The airline has updated [[its]] baggage policy for international flights.',
      explanation: {
        vi: 'Trước cụm danh từ **baggage policy** cần tính từ sở hữu **its**, không có dấu nháy. **it\'s** là viết tắt của it is / it has.',
        en: "Before the noun phrase **baggage policy** we need the possessive adjective **its**, with no apostrophe. **it's** is short for it is / it has.",
      },
    },
    {
      wrong: 'The blue folder on the reception desk is [[my]]; yours is in the meeting room.',
      right: 'The blue folder on the reception desk is [[mine]]; yours is in the meeting room.',
      explanation: {
        vi: 'Sau chỗ trống không có danh từ nào, nên tính từ sở hữu **my** không đứng được. Phải dùng đại từ sở hữu **mine** (= my folder).',
        en: 'No noun follows, so the possessive adjective **my** cannot stand there. Use the possessive pronoun **mine** (= my folder).',
      },
    },
    {
      wrong: 'Mr. Adeyemi, a former colleague of [[me]], now manages our Lagos branch.',
      right: 'Mr. Adeyemi, a former colleague of [[mine]], now manages our Lagos branch.',
      explanation: {
        vi: 'Cấu trúc **a + danh từ + of + đại từ sở hữu**: a former colleague of **mine** = một đồng nghiệp cũ của tôi. Sau of trong cấu trúc này không dùng tân ngữ me.',
        en: 'The pattern is **a + noun + of + possessive pronoun**: a former colleague of **mine** = one of my former colleagues. The object form me is not used after of in this pattern.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Bảng đại từ đầy đủ các ngôi', en: 'The full pronoun table' },
      body: {
        vi: 'Mỗi ngôi có bốn dạng dùng cho bốn vị trí khác nhau, cộng thêm dạng phản thân. Câu hỏi đại từ trong Part 5 thường lấy cả bốn lựa chọn từ cùng **một hàng** của bảng này.',
        en: 'Each person has four forms for four different positions, plus a reflexive form. Part 5 pronoun questions usually take all four options from **a single row** of this table.',
      },
      table: {
        head: [
          { vi: 'Ngôi', en: 'Person' },
          { vi: 'Chủ ngữ', en: 'Subject' },
          { vi: 'Tân ngữ', en: 'Object' },
          { vi: 'Tính từ sở hữu', en: 'Possessive adjective' },
          { vi: 'Đại từ sở hữu', en: 'Possessive pronoun' },
          { vi: 'Phản thân', en: 'Reflexive' },
        ],
        rows: [
          [{ vi: 'Ngôi thứ nhất số ít', en: '1st person singular' }, 'I', 'me', 'my', 'mine', 'myself'],
          [{ vi: 'Ngôi thứ hai số ít', en: '2nd person singular' }, 'you', 'you', 'your', 'yours', 'yourself'],
          [{ vi: 'Ngôi thứ ba số ít (nam)', en: '3rd person singular (male)' }, 'he', 'him', 'his', 'his', 'himself'],
          [{ vi: 'Ngôi thứ ba số ít (nữ)', en: '3rd person singular (female)' }, 'she', 'her', 'her', 'hers', 'herself'],
          [{ vi: 'Ngôi thứ ba số ít (vật, tổ chức)', en: '3rd person singular (thing, organization)' }, 'it', 'it', 'its', '—', 'itself'],
          [{ vi: 'Ngôi thứ nhất số nhiều', en: '1st person plural' }, 'we', 'us', 'our', 'ours', 'ourselves'],
          [{ vi: 'Ngôi thứ hai số nhiều', en: '2nd person plural' }, 'you', 'you', 'your', 'yours', 'yourselves'],
          [{ vi: 'Ngôi thứ ba số nhiều', en: '3rd person plural' }, 'they', 'them', 'their', 'theirs', 'themselves'],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Cột phản thân (myself, themselves…) chỉ để bạn thấy đủ bảng; cách dùng của nó học ở bài 5.2. Bài này tập trung vào bốn cột đầu.',
          en: 'The reflexive column (myself, themselves...) is here only to complete the table; how to use it is covered in lesson 5.2. This lesson focuses on the first four columns.',
        },
      },
    },
    {
      heading: { vi: 'Những dạng trùng nhau dễ gây nhầm', en: 'Forms that look the same' },
      points: [
        {
          vi: '**you** và **it** dùng một dạng cho cả chủ ngữ lẫn tân ngữ; **you** còn dùng chung cho số ít và số nhiều.',
          en: '**you** and **it** have one form for both subject and object; **you** is also both singular and plural.',
        },
        {
          vi: '**her** vừa là tân ngữ vừa là tính từ sở hữu: có danh từ theo sau thì là tính từ sở hữu (her report), không có thì là tân ngữ (we thanked her).',
          en: '**her** is both the object form and the possessive adjective: with a noun after it, it is possessive (her report); without one, it is an object (we thanked her).',
        },
        {
          vi: '**his** vừa là tính từ sở hữu vừa là đại từ sở hữu: his office (có danh từ theo sau) / the office is his (đứng một mình).',
          en: '**his** is both the possessive adjective and the possessive pronoun: his office (with a noun after it) / the office is his (standing alone).',
        },
        {
          vi: '**its** gần như chỉ dùng làm tính từ sở hữu (its website); trong văn viết thông thường, its không đứng một mình như mine hay theirs.',
          en: '**its** is used almost only as a possessive adjective (its website); in normal writing it does not stand alone the way mine or theirs does.',
        },
      ],
      examples: [
        {
          en: 'The director praised **her** at the staff meeting.',
          vi: 'Giám đốc đã khen cô ấy trong cuộc họp nhân viên.',
        },
        {
          en: 'The director praised **her** presentation at the staff meeting.',
          vi: 'Giám đốc đã khen bài thuyết trình của cô ấy trong cuộc họp nhân viên.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Đại từ sở hữu và **its** KHÔNG BAO GIỜ có dấu nháy: yours, ours, theirs, hers, its. Còn **it\'s** = it is / it has, **they\'re** = they are, **you\'re** = you are. Đề rất hay cho it\'s làm lựa chọn gây nhiễu.',
          en: "Possessive pronouns and **its** NEVER take an apostrophe: yours, ours, theirs, hers, its. Meanwhile **it's** = it is / it has, **they're** = they are, **you're** = you are. The test often offers it's as a distractor.",
        },
      },
    },
    {
      heading: { vi: 'Đại từ chủ ngữ: đứng trước động từ chia thì', en: 'Subject pronouns: before a finite verb' },
      body: {
        vi: '**I, you, he, she, it, we, they** làm chủ ngữ cho một động từ đã chia thì. Điều này đúng ở mệnh đề chính lẫn mệnh đề phụ sau because, when, if, before, although, that…',
        en: '**I, you, he, she, it, we, they** act as the subject of a finite (tensed) verb. This holds in the main clause and in subordinate clauses after because, when, if, before, although, that...',
      },
      points: [
        {
          vi: 'Chủ ngữ ghép (Ms. Diaz and I, he and his manager) vẫn cần dạng chủ ngữ. Mẹo: che phần "Ms. Diaz and" đi rồi đọc lại; "me will attend" nghe sai ngay.',
          en: 'A compound subject (Ms. Diaz and I, he and his manager) still needs the subject form. Trick: cover "Ms. Diaz and" and read again; "me will attend" is obviously wrong.',
        },
        {
          vi: 'Theo phép lịch sự, **I** thường đứng sau cùng: Mr. Kim and I, chứ không nói "I and Mr. Kim".',
          en: 'By convention, **I** usually comes last: Mr. Kim and I, rather than "I and Mr. Kim".',
        },
      ],
      examples: [
        {
          en: '**We** will announce the winners after the judges have reviewed every entry.',
          vi: 'Chúng tôi sẽ công bố người thắng cuộc sau khi ban giám khảo đã xem xét mọi bài dự thi.',
        },
        {
          en: 'The client called because **she** had not received the revised quote.',
          vi: 'Khách hàng gọi điện vì cô ấy chưa nhận được bảng báo giá đã chỉnh sửa.',
        },
        {
          en: 'Mr. Kim and **I** are responsible for the company booth at the trade fair.',
          vi: 'Anh Kim và tôi phụ trách gian hàng của công ty tại hội chợ thương mại.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Câu kiểu "**Me** and Ms. Diaz will attend" hay "Ms. Diaz and **me** will attend" có thể nghe thấy trong văn nói thân mật, nhưng sai trong văn viết trang trọng và trong TOEIC. Chủ ngữ ghép phải là **Ms. Diaz and I**.',
          en: 'Sentences like "**Me** and Ms. Diaz will attend" or "Ms. Diaz and **me** will attend" may be heard in casual speech, but they are wrong in formal writing and on the TOEIC. The compound subject must be **Ms. Diaz and I**.',
        },
      },
    },
    {
      heading: { vi: 'Tân ngữ: sau động từ và giới từ', en: 'Object pronouns: after verbs and prepositions' },
      body: {
        vi: '**me, you, him, her, it, us, them** đứng sau động từ (contact us, remind them, let me know) và sau giới từ (for, with, to, from, about, between, among…). Đại từ làm tân ngữ cho V-ing hay động từ nguyên mẫu cũng dùng dạng này: before calling **him**, to inform **them**.',
        en: '**me, you, him, her, it, us, them** come after verbs (contact us, remind them, let me know) and after prepositions (for, with, to, from, about, between, among...). A pronoun that is the object of a gerund or an infinitive takes this form too: before calling **him**, to inform **them**.',
      },
      points: [
        {
          vi: 'Động từ có hai tân ngữ (send, give, offer, show, tell, owe): khi hai tân ngữ đứng liền nhau, tân ngữ chỉ người đứng ngay sau động từ: We will send **you** the invoice.',
          en: 'Verbs with two objects (send, give, offer, show, tell, owe): when the two objects sit side by side, the person object comes right after the verb: We will send **you** the invoice.',
        },
        {
          vi: 'Tân ngữ ghép vẫn dùng dạng tân ngữ: between you and **me**, for Ms. Park and **him**, with the suppliers and **us**.',
          en: 'Compound objects still use object forms: between you and **me**, for Ms. Park and **him**, with the suppliers and **us**.',
        },
      ],
      examples: [
        {
          en: 'If the package arrives damaged, please notify **us** within 48 hours.',
          vi: 'Nếu kiện hàng đến nơi bị hư hỏng, vui lòng báo cho chúng tôi trong vòng 48 giờ.',
        },
        {
          en: 'The hotel offered **them** a free room upgrade because of the booking error.',
          vi: 'Khách sạn đã tặng họ một lần nâng hạng phòng miễn phí vì lỗi đặt phòng.',
        },
        {
          en: 'Ms. Park shared the sales figures with Mr. Duval and **me** before the meeting.',
          vi: 'Cô Park đã chia sẻ số liệu bán hàng với anh Duval và tôi trước cuộc họp.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '"between you and **I**" là lỗi do sửa quá tay: sau giới từ luôn là tân ngữ → **between you and me**. Cũng đừng thay bằng myself: "between you and myself" không phải tiếng Anh chuẩn (xem bài 5.2).',
          en: '"between you and **I**" is an overcorrection: a preposition always takes the object form → **between you and me**. Do not replace it with myself either: "between you and myself" is not standard English (see lesson 5.2).',
        },
      },
    },
    {
      heading: { vi: 'Tính từ sở hữu: luôn đi kèm danh từ', en: 'Possessive adjectives: always with a noun' },
      body: {
        vi: '**my, your, his, her, its, our, their** đứng trước một danh từ (hoặc tính từ + danh từ) để cho biết danh từ đó thuộc về ai. Chúng không bao giờ đứng một mình.',
        en: '**my, your, his, her, its, our, their** come before a noun (or adjective + noun) to show whom it belongs to. They never stand alone.',
      },
      points: [
        {
          vi: 'Tính từ sở hữu đã là từ hạn định nên không đi cùng a/an, the, this, that, some: **our** office, không nói "the our office" hay "an our office".',
          en: 'A possessive adjective is already a determiner, so it does not combine with a/an, the, this, that or some: **our** office, not "the our office" or "an our office".',
        },
        {
          vi: '**own** (riêng) chỉ đứng sau tính từ sở hữu hoặc sở hữu cách để nhấn mạnh: **their** own equipment, **its** own fleet, the company\'s own fleet. Không có "them own" hay "it\'s own".',
          en: "**own** comes only after a possessive adjective or a possessive noun, for emphasis: **their** own equipment, **its** own fleet, the company's own fleet. There is no 'them own' or 'it's own'.",
        },
      ],
      examples: [
        {
          en: 'Please write **your** employee number on every page of the form.',
          vi: 'Vui lòng ghi mã số nhân viên của bạn trên mọi trang của mẫu đơn.',
        },
        {
          en: 'The bakery opened **its** second location near the train station last month.',
          vi: 'Tiệm bánh đã mở chi nhánh thứ hai gần ga tàu vào tháng trước.',
        },
        {
          en: 'Some contractors prefer to use **their** own tools on site.',
          vi: 'Một số nhà thầu thích dùng dụng cụ riêng của họ tại công trường.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Ngay sau chỗ trống là danh từ (hoặc tính từ + danh từ)? → gần như chắc chắn là tính từ sở hữu. Ngoại lệ duy nhất cần để ý: sau động từ có hai tân ngữ (send, offer, show…), tân ngữ chỉ người cũng đứng trước danh từ: offer **them** a discount. Khi đó hãy xét nghĩa.',
          en: 'Is the blank followed directly by a noun (or adjective + noun)? → it is almost certainly a possessive adjective. The one exception to watch: after a verb with two objects (send, offer, show...), a person object also comes before a noun: offer **them** a discount. In that case, check the meaning.',
        },
      },
    },
    {
      heading: { vi: 'Đại từ sở hữu và cấu trúc "of + đại từ sở hữu"', en: 'Possessive pronouns and "of + possessive pronoun"' },
      body: {
        vi: '**mine, yours, his, hers, ours, theirs** = tính từ sở hữu + danh từ đã nhắc trước đó hoặc đã rõ từ ngữ cảnh (mine = my report). Chúng đứng MỘT MÌNH, không có danh từ theo sau, và có thể làm chủ ngữ, tân ngữ, đứng sau giới từ hoặc sau than.',
        en: '**mine, yours, his, hers, ours, theirs** = possessive adjective + a noun already mentioned or clear from context (mine = my report). They stand ALONE, with no noun after them, and can be a subject or an object, or follow a preposition or than.',
      },
      points: [
        {
          vi: '**a / an / this / that / some / two… + danh từ + of + đại từ sở hữu**: a colleague **of mine** = một đồng nghiệp của tôi (= one of my colleagues). Cấu trúc này cần thiết vì a, this, that, some… không đứng chung với tính từ sở hữu: không nói "a my colleague" hay "this your idea".',
          en: '**a / an / this / that / some / two... + noun + of + possessive pronoun**: a colleague **of mine** = one of my colleagues. The pattern is needed because a, this, that, some... cannot be used together with a possessive adjective: we cannot say "a my colleague" or "this your idea".',
        },
        {
          vi: 'Sau **of** trong cấu trúc này là đại từ sở hữu, không phải tân ngữ: a client of **ours**, không nói "a client of us".',
          en: 'After **of** in this pattern comes a possessive pronoun, not an object form: a client of **ours**, not "a client of us".',
        },
      ],
      examples: [
        {
          en: 'Our booth was busier than **theirs** on the first day of the exhibition.',
          vi: 'Gian hàng của chúng tôi đông khách hơn gian hàng của họ trong ngày đầu tiên của triển lãm.',
        },
        {
          en: 'I forgot my charger, so Ms. Rossi let me borrow **hers**.',
          vi: 'Tôi quên mang sạc nên cô Rossi cho tôi mượn cái của cô ấy.',
        },
        {
          en: 'Mr. Sato, an old friend **of mine**, recommended this accounting firm to us.',
          vi: 'Anh Sato, một người bạn lâu năm của tôi, đã giới thiệu công ty kế toán này cho chúng tôi.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phân biệt **a photo of me** (bức ảnh chụp tôi) với **a photo of mine** (một bức ảnh tôi sở hữu hoặc tôi chụp). Với danh từ chỉ quan hệ như colleague, client, friend, partner thì dùng **of mine / of ours**.',
          en: 'Compare **a photo of me** (a photo showing me) with **a photo of mine** (a photo I own or took). With relationship nouns such as colleague, client, friend or partner, use **of mine / of ours**.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu đại từ trong Part 5', en: 'Attacking pronoun items in Part 5' },
      points: [
        {
          vi: 'Bốn lựa chọn là bốn dạng của CÙNG một ngôi (they / them / their / theirs) → đây là câu hỏi về dạng, chưa cần dịch. Nếu các lựa chọn khác ngôi (he / they / it) thì phải tìm danh từ được thay thế (bài 5.3).',
          en: 'Four forms of the SAME person (they / them / their / theirs) → it is a form question; no need to translate yet. If the options differ in person (he / they / it), find the noun being replaced (lesson 5.3).',
        },
        {
          vi: 'Nhìn từ đứng ngay SAU chỗ trống: động từ chia thì → đại từ chủ ngữ (hoặc đại từ sở hữu nếu nghĩa là "cái của ai đó" đã nhắc trước: Mine is…, Yours is…); danh từ hoặc tính từ + danh từ → tính từ sở hữu (trừ sau động từ hai tân ngữ: send **them** a copy).',
          en: 'Look at the word right AFTER the blank: a finite verb → subject pronoun (or a possessive pronoun if it means "someone\'s thing" already mentioned: Mine is..., Yours is...); a noun or adjective + noun → possessive adjective (except after a two-object verb: send **them** a copy).',
        },
        {
          vi: 'Chỗ trống sau động từ hoặc giới từ mà không có danh từ theo sau → tân ngữ nếu nghĩa là người/vật nhận hành động; đại từ sở hữu nếu nghĩa là "cái của ai đó" đã được nhắc trước.',
          en: 'A blank after a verb or preposition with no noun following → an object pronoun if it means the person or thing receiving the action; a possessive pronoun if it stands for something already mentioned that belongs to someone.',
        },
        {
          vi: 'Gặp "X and …" hoặc "X or …"? Che X đi rồi chọn như với một đại từ đứng riêng.',
          en: 'See "X and ..." or "X or ..."? Cover X and choose as if the pronoun stood alone.',
        },
        {
          vi: 'Dạng -self chỉ đúng khi chỉ cùng người/vật với chủ ngữ hoặc dùng để nhấn mạnh (bài 5.2); không có hai điều kiện đó thì loại ngay.',
          en: 'A -self form is right only when it refers back to the subject or adds emphasis (lesson 5.2); without either, eliminate it at once.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'The new interns studied the safety manual carefully before ------- began working on the production floor.',
      options: ['they', 'them', 'their', 'theirs'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống đứng ngay trước động từ chia thì **began** trong mệnh đề sau **before**, nên cần đại từ chủ ngữ **they**. their là tính từ sở hữu, phải có danh từ theo sau; them là tân ngữ, không làm chủ ngữ được.',
        en: 'The blank comes right before the finite verb **began** in the clause after **before**, so it needs the subject pronoun **they**. their is a possessive adjective and needs a noun after it; them is an object form and cannot be a subject.',
      },
      translation: 'Các thực tập sinh mới đã đọc kỹ sổ tay an toàn trước khi bắt đầu làm việc tại xưởng sản xuất.',
    },
    {
      sentence: 'If you have any questions about your new benefits package, please contact ------- at extension 214.',
      options: ['we', 'our', 'us', 'ours'],
      answer: 2,
      explanation: {
        vi: 'Chỗ trống đứng sau động từ **contact** và chỉ người được liên hệ → cần tân ngữ **us**. ours là đại từ sở hữu (= cái của chúng tôi), không hợp nghĩa; our thì phải có danh từ theo sau.',
        en: 'The blank follows the verb **contact** and names the people to be contacted → the object pronoun **us**. ours means "the thing that belongs to us", which makes no sense here; our needs a noun after it.',
      },
      translation: 'Nếu quý vị có bất kỳ câu hỏi nào về gói phúc lợi mới, vui lòng liên hệ với chúng tôi qua số máy lẻ 214.',
    },
    {
      sentence: 'Mr. Ruiz is overseeing the merger, so please send all related questions to Ms. Novak or -------.',
      options: ['he', 'his', 'himself', 'him'],
      answer: 3,
      explanation: {
        vi: 'Chỗ trống nằm trong tân ngữ ghép sau giới từ **to** (to Ms. Novak or …), nên dùng tân ngữ **him**. Che "Ms. Novak or" đi sẽ thấy: send questions to him. himself sai vì chủ ngữ của câu mệnh lệnh là "you", không phải Mr. Ruiz.',
        en: 'The blank is part of a compound object after the preposition **to** (to Ms. Novak or ...), so the object form **him** is needed. Cover "Ms. Novak or": send questions to him. himself is wrong because the subject of the command is "you", not Mr. Ruiz.',
      },
      translation: 'Anh Ruiz đang phụ trách thương vụ sáp nhập, vì vậy vui lòng gửi mọi câu hỏi liên quan cho cô Novak hoặc anh ấy.',
    },
    {
      sentence: 'Mr. Haddad and ------- will visit the Singapore factory next week to inspect the new assembly line.',
      options: ['me', 'I', 'my', 'mine'],
      answer: 1,
      explanation: {
        vi: 'Cụm **Mr. Haddad and …** là chủ ngữ của động từ **will visit**, nên cần đại từ chủ ngữ **I**. me là tân ngữ: che "Mr. Haddad and" đi sẽ thấy "me will visit" sai ngay.',
        en: 'The phrase **Mr. Haddad and ...** is the subject of **will visit**, so the subject pronoun **I** is needed. me is an object form: cover "Mr. Haddad and" and "me will visit" is clearly wrong.',
      },
      translation: 'Anh Haddad và tôi sẽ đến nhà máy ở Singapore vào tuần tới để kiểm tra dây chuyền lắp ráp mới.',
    },
    {
      sentence: 'For security reasons, please keep ------- valuables in the safe provided in each guest room.',
      options: ['you', 'yours', 'your', 'yourself'],
      answer: 2,
      explanation: {
        vi: 'Ngay sau chỗ trống là danh từ **valuables** (đồ có giá trị), nên cần tính từ sở hữu **your**. yours là đại từ sở hữu, luôn đứng một mình và không bao giờ đứng trước danh từ.',
        en: 'The blank is directly followed by the noun **valuables**, so the possessive adjective **your** is needed. yours is a possessive pronoun; it always stands alone and never comes before a noun.',
      },
      translation: 'Vì lý do an ninh, quý khách vui lòng cất đồ có giá trị trong két sắt được trang bị sẵn ở mỗi phòng.',
    },
    {
      sentence: 'The Westbrook Hotel produces most of ------- own electricity with solar panels installed on the roof.',
      options: ['its', 'it', "it's", 'itself'],
      answer: 0,
      explanation: {
        vi: 'Sau chỗ trống là **own electricity**, mà own phải đứng sau tính từ sở hữu → **its**. it\'s là viết tắt của it is / it has nên không đứng trước own được; itself là đại từ phản thân, không đứng trước danh từ.',
        en: "The blank is followed by **own electricity**, and own must come after a possessive adjective → **its**. it's is short for it is / it has, so it cannot come before own; itself is reflexive and cannot come before a noun.",
      },
      translation: 'Khách sạn Westbrook tự sản xuất phần lớn lượng điện của mình bằng các tấm pin mặt trời lắp trên mái.',
    },
    {
      sentence: 'Mr. Dubois has already submitted his expense report, but Ms. Grant has not submitted ------- yet.',
      options: ['she', 'her', 'herself', 'hers'],
      answer: 3,
      explanation: {
        vi: 'Sau chỗ trống không có danh từ, và ý cần nói là "báo cáo chi phí của cô ấy" (vế trước đã nhắc **his expense report**) → đại từ sở hữu **hers**. Nếu chọn her, nó sẽ là tân ngữ, thành "chưa nộp cô ấy", vô nghĩa.',
        en: 'No noun follows the blank, and the meaning is "her expense report" (the first clause mentions **his expense report**) → the possessive pronoun **hers**. her would be an object here ("has not submitted her"), which makes no sense.',
      },
      translation: 'Anh Dubois đã nộp báo cáo chi phí của mình, nhưng cô Grant vẫn chưa nộp báo cáo của cô ấy.',
    },
    {
      sentence: 'Mr. Lindqvist, a longtime client of -------, has agreed to speak at the annual investor conference.',
      options: ['we', 'ours', 'us', 'our'],
      answer: 1,
      explanation: {
        vi: 'Cấu trúc **a + danh từ + of + đại từ sở hữu**: a longtime client of **ours** = một khách hàng lâu năm của chúng tôi. Sau of trong cấu trúc này không dùng tân ngữ us; our thì phải có danh từ theo sau.',
        en: 'The pattern is **a + noun + of + possessive pronoun**: a longtime client of **ours** = one of our longtime clients. The object form us is not used after of in this pattern; our needs a noun after it.',
      },
      translation: 'Ông Lindqvist, một khách hàng lâu năm của chúng tôi, đã đồng ý phát biểu tại hội nghị nhà đầu tư thường niên.',
    },
    {
      sentence: 'My copy of the contract is missing page four, so please check whether ------- is complete.',
      options: ['yours', 'your', 'you', 'yourself'],
      answer: 0,
      explanation: {
        vi: 'Chỗ trống là chủ ngữ của **is** và thay cho "your copy of the contract" (đối chiếu với **My copy**) → đại từ sở hữu **yours**. your phải có danh từ theo sau; you không đi với is.',
        en: 'The blank is the subject of **is** and stands for "your copy of the contract" (in contrast with **My copy**) → the possessive pronoun **yours**. your needs a noun after it; you does not take is.',
      },
      translation: 'Bản hợp đồng của tôi bị thiếu trang bốn, vì vậy vui lòng kiểm tra xem bản của bạn có đầy đủ không.',
    },
    {
      sentence: 'Ms. Yamada is retiring next month, so the sales team is organizing a farewell dinner for -------.',
      options: ['she', 'her', 'hers', 'herself'],
      answer: 1,
      explanation: {
        vi: 'Chỗ trống đứng sau giới từ **for** và không có danh từ theo sau → tân ngữ **her**. herself sai vì chủ ngữ là the sales team chứ không phải Ms. Yamada; hers (= cái của cô ấy) không hợp nghĩa.',
        en: 'The blank follows the preposition **for** with no noun after it → the object form **her**. herself is wrong because the subject is the sales team, not Ms. Yamada; hers ("her thing") makes no sense.',
      },
      translation: 'Cô Yamada sẽ nghỉ hưu vào tháng tới, vì vậy nhóm kinh doanh đang tổ chức một bữa tiệc chia tay cho cô ấy.',
    },
  ],
};
