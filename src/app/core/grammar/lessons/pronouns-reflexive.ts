import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'pronouns-reflexive',
  intro: {
    vi: 'Trong Part 5 và Part 6, dạng **-self / -selves** thường nằm lẫn giữa bốn dạng của cùng một ngôi (he / him / his / himself) hoặc đứng cạnh **each other**, và đề chỉ hỏi: câu có thật sự cần đại từ phản thân không? Bài này dạy ba cách dùng đúng của nó (tân ngữ trùng chủ ngữ, nhấn mạnh, các cụm cố định như **by oneself**, **familiarize oneself with**) và những chỗ phải dùng đại từ thường hoặc each other.',
    en: 'In Part 5 and Part 6, a **-self / -selves** form usually appears among four forms of one person (he / him / his / himself) or next to **each other**, and the item asks one thing: does the sentence really need a reflexive pronoun? This lesson covers its three correct uses (object = subject, emphasis, fixed phrases such as **by oneself** and **familiarize oneself with**) and the places where an ordinary pronoun or each other is required.',
  },
  mistakes: [
    {
      wrong: 'If you have any questions about the new schedule, please contact [[myself]].',
      right: 'If you have any questions about the new schedule, please contact [[me]].',
      explanation: {
        vi: 'Câu mệnh lệnh có chủ ngữ ngầm là **you**, nên người được liên hệ (tôi) khác với chủ ngữ → dùng tân ngữ thường **me**. myself chỉ đúng khi chủ ngữ cũng là I.',
        en: 'A command has the understood subject **you**, so the person to be contacted (me) is not the subject → use the ordinary object **me**. myself is correct only when the subject is also I.',
      },
    },
    {
      wrong: 'Ms. Okafor and [[myself]] will represent the company at the Osaka trade fair.',
      right: 'Ms. Okafor and [[I]] will represent the company at the Osaka trade fair.',
      explanation: {
        vi: 'Cụm **Ms. Okafor and …** là chủ ngữ của **will represent**, mà đại từ phản thân không bao giờ làm chủ ngữ → dùng **I**. Dùng myself cho "lịch sự" là lỗi rất phổ biến.',
        en: 'The phrase **Ms. Okafor and ...** is the subject of **will represent**, and a reflexive pronoun can never be a subject → use **I**. Using myself to sound polite is a very common error.',
      },
    },
    {
      wrong: 'All new employees must [[familiarize with]] the safety procedures by Friday.',
      right: 'All new employees must [[familiarize themselves with]] the safety procedures by Friday.',
      explanation: {
        vi: '**familiarize** cần một tân ngữ; khi chính chủ ngữ là người làm quen thì tân ngữ đó là đại từ phản thân: **familiarize oneself with** → familiarize **themselves** with.',
        en: '**familiarize** needs an object; when the subject is the one getting to know something, that object is a reflexive: **familiarize oneself with** → familiarize **themselves** with.',
      },
    },
    {
      wrong: 'Mr. Chen installed the new printer [[by his own]], without calling the IT department.',
      right: 'Mr. Chen installed the new printer [[by himself]], without calling the IT department.',
      explanation: {
        vi: 'Nghĩa "một mình, không ai giúp" có hai cách nói: **by + đại từ phản thân** (by himself) hoặc **on + tính từ sở hữu + own** (on his own). "by his own" đứng một mình là sai.',
        en: 'The meaning "alone, without help" has two forms: **by + reflexive** (by himself) or **on + possessive adjective + own** (on his own). "by his own" on its own is wrong.',
      },
    },
    {
      wrong: 'The two branch managers call [[themselves]] every Monday to compare sales figures.',
      right: 'The two branch managers call [[each other]] every Monday to compare sales figures.',
      explanation: {
        vi: 'Hai người gọi điện **qua lại** cho nhau (A gọi B, B gọi A) → **each other**. themselves nghĩa là mỗi người tự gọi cho chính mình, vô nghĩa.',
        en: 'The two people call **one another** (A calls B, B calls A) → **each other**. themselves would mean each manager calls himself or herself, which makes no sense.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Bảng đại từ phản thân', en: 'The reflexive pronouns' },
      body: {
        vi: 'Đại từ phản thân được tạo bằng **-self** (số ít) hoặc **-selves** (số nhiều). Nó luôn phải khớp ngôi và số với danh từ hoặc đại từ mà nó chỉ lại.',
        en: 'Reflexive pronouns are formed with **-self** (singular) or **-selves** (plural). A reflexive must always match the person and number of the noun or pronoun it refers back to.',
      },
      table: {
        head: [
          { vi: 'Ngôi', en: 'Person' },
          { vi: 'Chủ ngữ', en: 'Subject' },
          { vi: 'Phản thân', en: 'Reflexive' },
        ],
        rows: [
          [{ vi: 'Ngôi thứ nhất số ít', en: '1st person singular' }, 'I', 'myself'],
          [{ vi: 'Ngôi thứ hai số ít', en: '2nd person singular' }, 'you', 'yourself'],
          [{ vi: 'Ngôi thứ ba số ít (nam)', en: '3rd person singular (male)' }, 'he', 'himself'],
          [{ vi: 'Ngôi thứ ba số ít (nữ)', en: '3rd person singular (female)' }, 'she', 'herself'],
          [{ vi: 'Ngôi thứ ba số ít (vật, tổ chức)', en: '3rd person singular (thing, organization)' }, 'it', 'itself'],
          [{ vi: 'Ngôi thứ nhất số nhiều', en: '1st person plural' }, 'we', 'ourselves'],
          [{ vi: 'Ngôi thứ hai số nhiều', en: '2nd person plural' }, 'you', 'yourselves'],
          [{ vi: 'Ngôi thứ ba số nhiều', en: '3rd person plural' }, 'they', 'themselves'],
          [{ vi: 'Đại từ chung chung (từ điển, cụm cố định)', en: 'Generic pronoun (dictionaries, fixed phrases)' }, 'one', 'oneself'],
        ],
      },
      points: [
        {
          vi: '**you** có hai dạng phản thân: **yourself** khi nói với một người, **yourselves** khi nói với nhiều người (Please help yourselves to the snacks, everyone).',
          en: '**you** has two reflexive forms: **yourself** for one person, **yourselves** for several people (Please help yourselves to the snacks, everyone).',
        },
        {
          vi: '**oneself** là dạng dùng trong từ điển và khi nói chung chung. Khi viết câu thật, đổi sang đúng ngôi của chủ ngữ: familiarize oneself with → we familiarize **ourselves** with, she familiarizes **herself** with.',
          en: '**oneself** is the dictionary form, also used for general statements. In a real sentence, change it to match the subject: familiarize oneself with → we familiarize **ourselves** with, she familiarizes **herself** with.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: '**hisself**, **theirselves**, **itsself** không phải tiếng Anh chuẩn: dạng đúng là **himself**, **themselves**, **itself**. Dạng **themself** đôi khi được dùng khi they chỉ một người, nhưng với chủ ngữ số nhiều thì luôn là themselves.',
          en: '**hisself**, **theirselves** and **itsself** are not standard English: the correct forms are **himself**, **themselves** and **itself**. **themself** is sometimes used when they refers to one person, but with a plural subject it is always themselves.',
        },
      },
    },
    {
      heading: { vi: 'Khi tân ngữ chính là chủ ngữ', en: 'When the object is the subject' },
      body: {
        vi: 'Cách dùng cơ bản nhất: tân ngữ của động từ hoặc của giới từ chỉ **chính người/vật làm chủ ngữ trong cùng mệnh đề**. Khi đó bắt buộc dùng đại từ phản thân, không dùng tân ngữ thường.',
        en: 'The basic use: the object of a verb or preposition refers to **the same person or thing as the subject of the same clause**. In that case a reflexive is required, not an ordinary object pronoun.',
      },
      points: [
        {
          vi: 'Sau động từ: **Ms. Grant blamed herself** (cô ấy tự trách mình) khác hẳn **Ms. Grant blamed her** (her là một người phụ nữ khác).',
          en: 'After a verb: **Ms. Grant blamed herself** (she blamed her own self) is quite different from **Ms. Grant blamed her** (her is another woman).',
        },
        {
          vi: 'Sau giới từ: He kept the bad news **to himself**; Freelancers must set deadlines **for themselves**.',
          en: 'After a preposition: He kept the bad news **to himself**; Freelancers must set deadlines **for themselves**.',
        },
        {
          vi: 'Chủ ngữ ngầm: câu mệnh lệnh có chủ ngữ ngầm là you; trong **ask / tell / allow / encourage + tân ngữ + to V**, chủ ngữ ngầm của to V là tân ngữ đó. Phản thân phải khớp với chủ ngữ ngầm này.',
          en: 'Understood subjects: a command has the understood subject you; in **ask / tell / allow / encourage + object + to V**, that object is the understood subject of the infinitive. The reflexive must match this understood subject.',
        },
        {
          vi: 'Sau giới từ chỉ vị trí (behind, beside, near, in front of) và **with** (mang theo), tiếng Anh thường dùng tân ngữ thường dù nó chỉ chủ ngữ: Please bring your ID **with you**; Close the door **behind you**.',
          en: 'After prepositions of place (behind, beside, near, in front of) and **with** (meaning "carrying"), English usually uses the ordinary object even when it refers to the subject: Please bring your ID **with you**; Close the door **behind you**.',
        },
      ],
      examples: [
        {
          en: 'We need to protect **ourselves** against sudden changes in exchange rates.',
          vi: 'Chúng ta cần tự bảo vệ mình trước những biến động bất ngờ của tỷ giá hối đoái.',
        },
        {
          en: 'The printer turns **itself** off after ten minutes without use.',
          vi: 'Máy in tự tắt sau mười phút không sử dụng.',
        },
        {
          en: 'Ms. Ito asked the trainees to introduce **themselves**.',
          vi: 'Cô Ito đề nghị các học viên tự giới thiệu bản thân.',
        },
        {
          en: 'Ms. Ito asked the trainees to call **her** if they had any questions.',
          vi: 'Cô Ito dặn các học viên gọi cho cô nếu có thắc mắc.',
        },
      ],
      callout: {
        kind: 'info',
        text: {
          vi: 'Hai ví dụ cuối: người tự giới thiệu là **the trainees** → themselves; người được gọi là **Ms. Ito**, còn người gọi là các học viên → her. Luôn hỏi: ai là chủ ngữ của chính động từ đứng trước chỗ trống?',
          en: 'In the last two examples, the people introducing are **the trainees** → themselves; the person being called is **Ms. Ito**, while the trainees do the calling → her. Always ask: who is the subject of the verb right before the blank?',
        },
      },
    },
    {
      heading: { vi: 'Không dùng phản thân thay cho đại từ thường', en: 'Do not use a reflexive instead of an ordinary pronoun' },
      body: {
        vi: 'Nhiều người dùng myself, yourself vì nghe "lịch sự" hay "trang trọng" hơn. Trong văn viết chuẩn và trong TOEIC, đại từ phản thân chỉ đúng khi nó chỉ lại một danh từ hoặc đại từ đứng trước nó trong cùng mệnh đề (gần như luôn là chủ ngữ) hoặc dùng để nhấn mạnh; ngoài hai trường hợp đó, dùng đại từ chủ ngữ hoặc tân ngữ (bài 5.1).',
        en: 'Many people use myself or yourself because it sounds "polite" or "formal". In standard writing and on the TOEIC, a reflexive is correct only when it refers back to a noun or pronoun earlier in the same clause (nearly always the subject) or adds emphasis; otherwise, use a subject or object pronoun (lesson 5.1).',
      },
      points: [
        {
          vi: 'Vị trí chủ ngữ, kể cả chủ ngữ ghép: Ms. Lindgren and **I** will attend, không nói "Ms. Lindgren and myself will attend".',
          en: 'Subject position, including compound subjects: Ms. Lindgren and **I** will attend, not "Ms. Lindgren and myself will attend".',
        },
        {
          vi: 'Tân ngữ khi chủ ngữ là người khác: Please contact **me**; Our staff will assist **you**; between you and **me**.',
          en: 'Objects when the subject is someone else: Please contact **me**; Our staff will assist **you**; between you and **me**.',
        },
      ],
      examples: [
        {
          en: 'If the shipment is delayed, please notify Mr. Petrov or **me** immediately.',
          vi: 'Nếu lô hàng bị chậm, vui lòng báo ngay cho anh Petrov hoặc tôi.',
        },
        {
          en: 'Ms. Lindgren and **I** have reviewed the revised floor plans.',
          vi: 'Cô Lindgren và tôi đã xem xét các bản sơ đồ mặt bằng đã chỉnh sửa.',
        },
        {
          en: 'A technician will call **you** to confirm the appointment time.',
          vi: 'Một kỹ thuật viên sẽ gọi cho quý khách để xác nhận thời gian hẹn.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Mẹo kiểm tra: tìm chủ ngữ của động từ đứng trước chỗ trống. Nếu chủ ngữ đó không phải cùng người/vật với đại từ cần điền, và câu cũng không cần nhấn mạnh, thì dạng -self gần như chắc chắn sai.',
          en: 'Quick check: find the subject of the verb before the blank. If that subject is not the same person or thing as the pronoun, and no emphasis is needed, the -self form is almost certainly wrong.',
        },
      },
    },
    {
      heading: { vi: 'Phản thân để nhấn mạnh', en: 'Reflexives for emphasis' },
      body: {
        vi: 'Đại từ phản thân còn dùng để nhấn mạnh "chính …, đích thân …, tự …". Khi đó nó thường đứng **ngay sau danh từ** cần nhấn mạnh hoặc **ở cuối mệnh đề**. Dấu hiệu nhận biết: bỏ nó đi, câu vẫn đầy đủ ngữ pháp.',
        en: 'A reflexive can also add emphasis: "personally, in person, and nobody else". It usually comes **right after the noun** it emphasizes or **at the end of the clause**. How to spot it: remove it and the sentence is still grammatically complete.',
      },
      points: [
        {
          vi: 'Sau danh từ: **The CEO herself** answered the complaint (đích thân CEO trả lời, chứ không phải trợ lý).',
          en: 'After the noun: **The CEO herself** answered the complaint (the CEO in person, not an assistant).',
        },
        {
          vi: 'Cuối mệnh đề: The owner answers every online review **herself**.',
          en: 'At the end of the clause: The owner answers every online review **herself**.',
        },
        {
          vi: 'Nhấn mạnh vật: **The software itself** is free, but installation costs extra (bản thân phần mềm thì miễn phí).',
          en: 'Emphasizing a thing: **The software itself** is free, but installation costs extra (the software as such).',
        },
      ],
      examples: [
        {
          en: 'The CEO **herself** called the client to apologize for the billing error.',
          vi: 'Chính CEO đã gọi điện cho khách hàng để xin lỗi về lỗi tính tiền.',
        },
        {
          en: 'The hotel **itself** is quite old, but every room was renovated last year.',
          vi: 'Bản thân khách sạn khá cũ, nhưng mọi phòng đều đã được cải tạo vào năm ngoái.',
        },
        {
          en: 'Our founder still reviews every major contract **himself**.',
          vi: 'Nhà sáng lập của chúng tôi vẫn tự mình xem xét mọi hợp đồng lớn.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Câu đã có đủ chủ ngữ, động từ (và tân ngữ nếu cần), chỗ trống nằm sau danh từ chủ ngữ hoặc ở cuối câu → chọn dạng -self. Điền he, him hay his vào đó đều thành thừa một thành phần không có chức năng.',
          en: 'The sentence already has a subject and verb (plus an object if needed), and the blank sits after the subject noun or at the end → choose the -self form. Putting he, him or his there leaves an extra word with no grammatical role.',
        },
      },
    },
    {
      heading: { vi: "Cụm cố định: by oneself, on one's own và động từ + oneself", en: "Fixed phrases: by oneself, on one's own and verb + oneself" },
      body: {
        vi: "**by oneself = on one's own = alone**: một mình, tự làm không cần ai giúp. Hai cấu trúc khác nhau: **by + đại từ phản thân** (by herself) và **on + tính từ sở hữu + own** (on her own).",
        en: "**by oneself = on one's own = alone**: without company or without help. The two patterns differ: **by + reflexive** (by herself) and **on + possessive adjective + own** (on her own).",
      },
      points: [
        {
          vi: 'Không có "on herself" hay "by her own" (đứng một mình). Riêng **by her** là người thực hiện trong câu bị động: The report was prepared **by her** ≠ She prepared the report **by herself**.',
          en: 'There is no "on herself" or standalone "by her own". **by her** names the doer in a passive sentence: The report was prepared **by her** ≠ She prepared the report **by herself**.',
        },
        {
          vi: 'Một số động từ thường đi với tân ngữ phản thân khi chủ ngữ tự làm cho chính mình; hay gặp nhất trong TOEIC là các cụm dưới đây.',
          en: 'Some verbs typically take a reflexive object when the subject acts on itself; the ones below are the most common on the TOEIC.',
        },
      ],
      table: {
        head: [
          { vi: 'Cụm từ', en: 'Phrase' },
          { vi: 'Nghĩa', en: 'Meaning' },
        ],
        rows: [
          ['introduce oneself (to sb)', { vi: 'tự giới thiệu (với ai)', en: 'tell someone who you are' }],
          ['familiarize oneself with sth', { vi: 'làm quen, tìm hiểu cho quen với cái gì', en: 'get to know something well' }],
          ['avail oneself of sth', { vi: 'tận dụng, sử dụng (dịch vụ, cơ hội); rất trang trọng', en: 'make use of (a service, an opportunity); very formal' }],
          ['pride oneself on sth', { vi: 'tự hào về điều gì', en: 'be proud of something' }],
          ['help oneself (to sth)', { vi: 'cứ tự nhiên lấy, dùng (đồ ăn, đồ uống)', en: 'freely take (food, drinks)' }],
          ['enjoy oneself', { vi: 'vui vẻ, tận hưởng', en: 'have a good time' }],
          ['commit / devote oneself to sth', { vi: 'cam kết, dồn hết sức cho việc gì', en: 'give your full effort to something' }],
        ],
      },
      examples: [
        {
          en: 'Please **familiarize yourself with** the refund policy before your first shift.',
          vi: 'Vui lòng tìm hiểu kỹ chính sách hoàn tiền trước ca làm việc đầu tiên.',
        },
        {
          en: 'Conference participants may **avail themselves of** the business center on the second floor.',
          vi: 'Người tham dự hội nghị có thể sử dụng trung tâm dịch vụ văn phòng ở tầng hai.',
        },
        {
          en: 'Our bakery **prides itself on** using only locally grown ingredients.',
          vi: 'Tiệm bánh của chúng tôi tự hào chỉ dùng nguyên liệu trồng tại địa phương.',
        },
        {
          en: 'Mr. Novak completed the inventory count **by himself** over the weekend.',
          vi: 'Anh Novak đã một mình hoàn tất việc kiểm kê hàng tồn kho vào cuối tuần.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong tiếng Anh chuẩn Anh – Mỹ (và trong TOEIC), **familiarize** và **avail** cần tân ngữ: "familiarize with" hay "avail of" thiếu phản thân là sai (familiarize còn có thể đi với tân ngữ chỉ người khác: The trainer familiarized the staff with the software). Ngược lại, **relax, concentrate, meet** thường dùng không kèm phản thân: Please relax, không nói "relax yourself".',
          en: 'In standard British and American English (and on the TOEIC), **familiarize** and **avail** need an object: "familiarize with" or "avail of" without a reflexive is wrong (familiarize can also take another person as its object: The trainer familiarized the staff with the software). On the other hand, **relax, concentrate and meet** are normally used without a reflexive: Please relax, not "relax yourself".',
        },
      },
    },
    {
      heading: { vi: 'Phản thân hay each other / one another?', en: 'Reflexive or each other / one another?' },
      body: {
        vi: '**each other / one another** (lẫn nhau) diễn tả hành động **qua lại** giữa hai hay nhiều người: A làm cho B và B làm cho A. Đại từ phản thân diễn tả mỗi người **tự làm cho chính mình**.',
        en: '**each other / one another** express a **two-way** action between two or more people: A does it to B and B does it to A. A reflexive means each person does it **to himself or herself**.',
      },
      points: [
        {
          vi: 'Trong tiếng Anh hiện đại, **each other** và **one another** dùng thay nhau được; một số sách truyền thống dùng each other cho hai người và one another cho từ ba người trở lên.',
          en: 'In modern English, **each other** and **one another** are interchangeable; some traditional guides use each other for two people and one another for three or more.',
        },
        {
          vi: "Dạng sở hữu: **each other's / one another's**: The two departments reviewed each other's budgets.",
          en: "Possessive forms: **each other's / one another's**: The two departments reviewed each other's budgets.",
        },
        {
          vi: "each other không bao giờ làm chủ ngữ của một mệnh đề: nó đứng ở vị trí tân ngữ (của động từ hoặc giới từ) hoặc ở dạng sở hữu each other's.",
          en: "each other is never the subject of a clause: it works as an object (of a verb or preposition) or in the possessive form each other's.",
        },
      ],
      examples: [
        {
          en: 'After the deal collapsed, the two partners blamed **each other**.',
          vi: 'Sau khi thương vụ đổ vỡ, hai người đối tác đổ lỗi cho nhau.',
        },
        {
          en: 'After the deal collapsed, the two partners blamed **themselves**.',
          vi: 'Sau khi thương vụ đổ vỡ, hai người đối tác tự trách bản thân.',
        },
        {
          en: 'Team members are encouraged to share ideas with **one another** during the workshop.',
          vi: 'Các thành viên trong nhóm được khuyến khích chia sẻ ý tưởng với nhau trong buổi hội thảo.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Tự hỏi "ai làm gì cho ai?". Nếu hành động đi từ người này sang người kia và ngược lại (share with, call, contact, compete with) → each other. Nếu mỗi người tự làm cho mình → themselves.',
          en: 'Ask "who does what to whom?". If the action goes from one person to the other and back (share with, call, contact, compete with) → each other. If each person does it to himself or herself → themselves.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu đại từ phản thân trong Part 5', en: 'Attacking reflexive items in Part 5' },
      points: [
        {
          vi: 'Bỏ chỗ trống đi: câu vẫn đủ chủ ngữ, động từ (và tân ngữ nếu động từ cần) và chỗ trống nằm sau danh từ chủ ngữ hoặc cuối câu → phản thân nhấn mạnh.',
          en: 'Remove the blank: if the sentence still has its subject and verb (plus an object if the verb needs one), and the blank follows the subject noun or ends the clause → an emphatic reflexive.',
        },
        {
          vi: 'Chỗ trống là tân ngữ của động từ hoặc giới từ → tìm chủ ngữ của chính động từ đó (kể cả chủ ngữ ngầm "you" của câu mệnh lệnh và tân ngữ của ask/tell trước to V). Cùng một người/vật → phản thân; khác → tân ngữ thường.',
          en: 'The blank is the object of a verb or preposition → find the subject of that verb (including the understood "you" of a command and the object of ask/tell before to V). Same person or thing → reflexive; different → ordinary object.',
        },
        {
          vi: 'Nhìn từ khoá cố định: **by -------** với động từ chủ động, nghĩa "một mình" → phản thân; **on ------- own** → tính từ sở hữu; **familiarize / avail / pride / introduce + -------** → phản thân khớp ngôi với chủ ngữ.',
          en: 'Watch for fixed cues: **by -------** with an active verb, meaning "alone" → reflexive; **on ------- own** → possessive adjective; **familiarize / avail / pride / introduce + -------** → a reflexive matching the subject.',
        },
        {
          vi: 'Chủ ngữ gồm hai người trở lên làm việc gì đó qua lại cho nhau → each other / one another, không phải themselves.',
          en: 'Two or more people doing something to one another → each other / one another, not themselves.',
        },
        {
          vi: 'Chỗ trống ở vị trí chủ ngữ (kể cả "X and -------" trước động từ) → không bao giờ chọn dạng -self.',
          en: 'A blank in subject position (including "X and -------" before the verb) → never choose a -self form.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'As a small business, we cannot afford to hire an agency, so we promote ------- mainly through social media.',
      options: ['we', 'ourselves', 'our', 'us'],
      answer: 1,
      explanation: {
        vi: 'Chủ ngữ là **we** và đối tượng được quảng bá cũng chính là "chúng tôi" → tân ngữ trùng chủ ngữ phải là phản thân **ourselves**. us chỉ dùng khi chủ ngữ là người khác (They promote us); our cần danh từ theo sau.',
        en: 'The subject is **we**, and the ones being promoted are also "we" → an object that is the same as the subject must be the reflexive **ourselves**. us is used only when the subject is someone else (They promote us); our needs a noun after it.',
      },
      translation: 'Là một doanh nghiệp nhỏ, chúng tôi không đủ khả năng thuê một công ty quảng cáo, nên chúng tôi tự quảng bá chủ yếu qua mạng xã hội.',
    },
    {
      sentence: 'Before your first shift, please take a few minutes to familiarize ------- with the emergency exits on your floor.',
      options: ['you', 'your', 'yours', 'yourself'],
      answer: 3,
      explanation: {
        vi: 'Cụm **familiarize oneself with** (làm quen với) cần tân ngữ phản thân. Câu mệnh lệnh có chủ ngữ ngầm là **you**, nên dùng **yourself**. Chọn you thì tân ngữ trùng với chủ ngữ ngầm mà không ở dạng phản thân, sai ngữ pháp.',
        en: 'The phrase **familiarize oneself with** needs a reflexive object. A command has the understood subject **you**, so use **yourself**. you as the object would refer to that same subject without the reflexive form, which is ungrammatical.',
      },
      translation: 'Trước ca làm việc đầu tiên, vui lòng dành vài phút để làm quen với các lối thoát hiểm trên tầng của bạn.',
    },
    {
      sentence: 'Mr. Romero asked the new hires to introduce ------- to the rest of the team at the start of the meeting.',
      options: ['himself', 'themselves', 'their', 'they'],
      answer: 1,
      explanation: {
        vi: 'Trong **asked the new hires to introduce**, người thực hiện introduce là **the new hires** (tân ngữ của asked là chủ ngữ ngầm của to V) → tự giới thiệu = **themselves**. himself sai vì Mr. Romero không phải người tự giới thiệu; their cần danh từ theo sau.',
        en: 'In **asked the new hires to introduce**, the ones doing the introducing are **the new hires** (the object of asked is the understood subject of the infinitive) → **themselves**. himself is wrong because Mr. Romero is not the one introducing himself; their needs a noun after it.',
      },
      translation: 'Anh Romero đề nghị các nhân viên mới tự giới thiệu với những người còn lại trong nhóm khi cuộc họp bắt đầu.',
    },
    {
      sentence: "Guests are welcome to avail ------- of the hotel's complimentary airport shuttle, which departs every thirty minutes.",
      options: ['themselves', 'them', 'their', 'theirs'],
      answer: 0,
      explanation: {
        vi: 'Cụm cố định **avail oneself of** (tận dụng, sử dụng) bắt buộc có đại từ phản thân; người sử dụng là **Guests** (số nhiều) → **themselves**. them sai vì người dùng dịch vụ chính là các vị khách, không phải ai khác.',
        en: 'The fixed phrase **avail oneself of** (make use of) requires a reflexive; the users are **Guests** (plural) → **themselves**. them is wrong because the people using the service are the guests, not someone else.',
      },
      translation: 'Quý khách có thể sử dụng dịch vụ xe đưa đón sân bay miễn phí của khách sạn, cứ ba mươi phút có một chuyến.',
    },
    {
      sentence: 'Instead of sending a representative, Ms. Brennan ------- attended the grand opening of the Busan branch.',
      options: ['she', 'her', 'herself', 'hers'],
      answer: 2,
      explanation: {
        vi: 'Bỏ chỗ trống đi câu vẫn đủ (**Ms. Brennan attended…**), nên chỗ trống chỉ để nhấn mạnh "đích thân cô ấy", đối lập với **Instead of sending a representative** → **herself**. she sẽ tạo ra hai chủ ngữ liền nhau, sai ngữ pháp.',
        en: 'The sentence is complete without the blank (**Ms. Brennan attended...**), so the blank only adds emphasis, "she in person", contrasting with **Instead of sending a representative** → **herself**. she would create two subjects in a row, which is ungrammatical.',
      },
      translation: 'Thay vì cử người đại diện, cô Brennan đã đích thân đến dự lễ khai trương chi nhánh Busan.',
    },
    {
      sentence: 'Rather than hiring an outside designer, Mr. Kowalski created the new company logo -------.',
      options: ['himself', 'him', 'his', 'he'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề **Mr. Kowalski created the new company logo** đã đủ chủ ngữ và tân ngữ; từ ở cuối chỉ có thể là phản thân nhấn mạnh "tự anh ấy làm", đối lập với **Rather than hiring an outside designer** → **himself**. him hay his đặt sau tân ngữ đều không có chức năng ngữ pháp.',
        en: 'The clause **Mr. Kowalski created the new company logo** already has a subject and an object; a word at the end can only be an emphatic reflexive, "he did it personally", contrasting with **Rather than hiring an outside designer** → **himself**. him or his after the object would have no grammatical role.',
      },
      translation: 'Thay vì thuê một nhà thiết kế bên ngoài, anh Kowalski đã tự mình thiết kế logo mới cho công ty.',
    },
    {
      sentence: 'I prepared the entire budget report by ------- because the rest of the team was at a trade fair in Berlin.',
      options: ['I', 'me', 'my', 'myself'],
      answer: 3,
      explanation: {
        vi: '**by + đại từ phản thân** = một mình, không ai giúp; lý do **the rest of the team was at a trade fair** cho thấy tôi làm một mình → **myself**. by me chỉ dùng để nêu người thực hiện trong câu bị động (The report was prepared by me), không dùng khi chủ ngữ đã là I.',
        en: '**by + reflexive** = alone, without help; the reason **the rest of the team was at a trade fair** shows I worked alone → **myself**. by me only names the doer in a passive sentence (The report was prepared by me), not when the subject is already I.',
      },
      translation: 'Tôi đã một mình chuẩn bị toàn bộ báo cáo ngân sách vì những người còn lại trong nhóm đang dự hội chợ thương mại ở Berlin.',
    },
    {
      sentence: 'Trainees are not expected to handle client complaints on ------- own until they have completed the four-week program.',
      options: ['their', 'them', 'themselves', 'theirs'],
      answer: 0,
      explanation: {
        vi: "Cụm **on one's own** (= by oneself = một mình) dùng tính từ sở hữu trước **own** → **on their own**. themselves là bẫy: nó chỉ đi với by (by themselves), không có \"on themselves own\".",
        en: "The phrase **on one's own** (= by oneself = alone) puts a possessive adjective before **own** → **on their own**. themselves is the trap: it goes with by (by themselves); there is no \"on themselves own\".",
      },
      translation: 'Học viên chưa phải tự mình xử lý khiếu nại của khách hàng cho đến khi hoàn thành chương trình đào tạo bốn tuần.',
    },
    {
      sentence: 'Because the two sales representatives cover neighboring regions, they regularly share client leads with -------.',
      options: ['themselves', 'theirs', 'each other', 'their'],
      answer: 2,
      explanation: {
        vi: 'Chủ ngữ là **the two sales representatives**, và họ chia sẻ thông tin qua lại (người này cho người kia và ngược lại) → **each other**. themselves sai nghĩa: không ai "chia sẻ với chính mình"; their cần danh từ theo sau.',
        en: 'The subject is **the two sales representatives**, and they share information in both directions (each with the other) → **each other**. themselves makes no sense: nobody "shares with themselves"; their needs a noun after it.',
      },
      translation: 'Vì hai nhân viên kinh doanh phụ trách hai khu vực lân cận, họ thường xuyên chia sẻ thông tin khách hàng tiềm năng cho nhau.',
    },
    {
      sentence: 'If you need anything during your stay, our front desk staff will be happy to assist ------- at any hour.',
      options: ['yours', 'yourself', 'you', 'your'],
      answer: 2,
      explanation: {
        vi: 'Người hỗ trợ là **our front desk staff**, còn người được hỗ trợ là khách: hai đối tượng khác nhau → dùng tân ngữ thường **you**. yourself chỉ đúng khi chủ ngữ cũng là you; dùng phản thân ở đây là lỗi "lịch sự quá tay" rất hay gặp.',
        en: 'The helpers are **our front desk staff**, and the person helped is the guest: two different people → use the ordinary object **you**. yourself is correct only when the subject is also you; using it here is a common "over-polite" error.',
      },
      translation: 'Nếu quý khách cần bất cứ điều gì trong thời gian lưu trú, nhân viên lễ tân của chúng tôi luôn sẵn lòng hỗ trợ quý khách vào bất kỳ giờ nào.',
    },
  ],
};
