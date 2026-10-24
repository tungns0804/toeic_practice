import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conditionals-second',
  intro: {
    vi: 'Câu điều kiện **loại 2** dùng **quá khứ đơn** trong mệnh đề if và **would/could/might + V** ở mệnh đề chính để nói về điều trái với hiện tại hoặc khó xảy ra. Part 5 thường cho sẵn một vế và yêu cầu bạn chọn dạng động từ khớp với vế còn lại.',
    en: 'The **second conditional** uses the **past simple** in the if clause and **would/could/might + verb** in the main clause to talk about situations that are untrue now or unlikely. Part 5 usually gives you one clause and asks for the verb form that matches it in the other.',
  },
  mistakes: [
    {
      wrong: 'If I [[was]] you, I would accept the transfer to the Singapore office.',
      right: 'If I [[were]] you, I would accept the transfer to the Singapore office.',
      explanation: {
        vi: '**If I were you** là cấu trúc cố định để khuyên. Trong câu điều kiện loại 2, văn viết trang trọng (và đáp án TOEIC) dùng **were** cho mọi ngôi.',
        en: '**If I were you** is a fixed phrase for giving advice. In the second conditional, formal written English (and the TOEIC key) uses **were** for every subject.',
      },
    },
    {
      wrong: 'If we had a bigger marketing budget, we [[will hire]] an outside agency.',
      right: 'If we had a bigger marketing budget, we [[would hire]] an outside agency.',
      explanation: {
        vi: 'Mệnh đề if ở quá khứ (**had**) để nói điều trái hiện tại → mệnh đề chính phải dùng **would + V**, không dùng will.',
        en: 'The if clause is in the past (**had**) to describe something untrue now → the main clause must use **would + verb**, not will.',
      },
    },
    {
      wrong: 'If the office [[is]] closer to the train station, more applicants would accept our offers.',
      right: 'If the office [[were]] closer to the train station, more applicants would accept our offers.',
      explanation: {
        vi: 'Mệnh đề chính có **would accept** → mệnh đề if phải lùi về quá khứ: **were**. Thực tế là văn phòng không gần ga.',
        en: 'The main clause has **would accept** → the if clause must shift back to the past: **were**. In reality the office is not close to the station.',
      },
    },
    {
      wrong: 'If Ms. Kim [[would have]] more free time, she would join the planning committee.',
      right: 'If Ms. Kim [[had]] more free time, she would join the planning committee.',
      explanation: {
        vi: 'Không dùng **would** trong mệnh đề if; mệnh đề if của loại 2 chỉ cần **quá khứ đơn**: **had**.',
        en: 'Do not use **would** in the if clause; the if clause of a second conditional simply takes the **past simple**: **had**.',
      },
    },
    {
      wrong: 'If our prices were lower, we [[would can]] compete with the larger chains.',
      right: 'If our prices were lower, we [[could]] compete with the larger chains.',
      explanation: {
        vi: 'Hai động từ khuyết thiếu không đứng liền nhau. Muốn nói "sẽ có thể" trong tình huống giả định thì dùng **could + V** (hoặc would be able to + V).',
        en: 'Two modals cannot stand side by side. To express ability in an unreal situation, use **could + verb** (or would be able to + verb).',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Công thức và ý nghĩa', en: 'Form and meaning' },
      body: {
        vi: 'Loại 2 nói về điều **không có thật ở hiện tại** hoặc **khó xảy ra trong tương lai**. Động từ ở mệnh đề if chia **quá khứ đơn**, nhưng quá khứ ở đây không chỉ thời gian quá khứ: nó là dấu hiệu "lùi xa thực tế". Mệnh đề chính dùng **would / could / might + V nguyên mẫu**.',
        en: 'The second conditional talks about something **untrue in the present** or **unlikely in the future**. The verb in the if clause is in the **past simple**, but the past here does not refer to past time: it signals "distance from reality". The main clause uses **would / could / might + base verb**.',
      },
      table: {
        head: [
          { vi: 'Mệnh đề if', en: 'If clause' },
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Thực tế', en: 'Reality' },
        ],
        rows: [
          ['If we had more staff,', 'we would open on Sundays.', { vi: 'Hiện không đủ nhân viên.', en: 'We do not have enough staff now.' }],
          ['If the hotel were cheaper,', 'more tourists could stay there.', { vi: 'Khách sạn hiện đắt.', en: 'The hotel is expensive now.' }],
          ['If the factory closed,', 'hundreds of jobs might disappear.', { vi: 'Nhà máy khó có khả năng đóng cửa.', en: 'The factory is unlikely to close.' }],
        ],
      },
      examples: [
        {
          en: 'If the software **were** easier to use, our staff **would need** less training.',
          vi: 'Nếu phần mềm dễ dùng hơn, nhân viên của chúng tôi sẽ cần ít buổi đào tạo hơn.',
        },
        {
          en: 'We **would deliver** on weekends if we **had** more drivers.',
          vi: 'Chúng tôi sẽ giao hàng vào cuối tuần nếu có thêm tài xế.',
        },
      ],
    },
    {
      heading: { vi: '"were" cho mọi ngôi và "If I were you"', en: '"were" for every subject and "If I were you"' },
      body: {
        vi: 'Với động từ **be** trong mệnh đề if loại 2, văn phong trang trọng dùng **were** cho mọi chủ ngữ: I, he, she, it, danh từ số ít. **was** có xuất hiện trong văn nói thân mật, nhưng trong đề TOEIC hãy chọn **were**. Phủ định: **were not / weren\'t**; động từ thường: **did not + V**.',
        en: "With the verb **be** in a second-conditional if clause, formal English uses **were** for every subject: I, he, she, it and singular nouns. **was** does occur in casual speech, but on the TOEIC choose **were**. Negatives: **were not / weren't**; ordinary verbs: **did not + verb**.",
      },
      examples: [
        {
          en: 'If the warehouse **were** larger, we **could store** the seasonal stock on site.',
          vi: 'Nếu nhà kho rộng hơn, chúng tôi có thể chứa hàng theo mùa ngay tại chỗ.',
        },
        {
          en: '**If I were you**, I **would ask** for the agreement in writing.',
          vi: 'Nếu tôi là bạn, tôi sẽ đề nghị có thoả thuận bằng văn bản.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: '**If I were you, I would / I\'d + V** là cách khuyên rất hay gặp trong e-mail và hội thoại công sở. Thấy "you" ở cuối mệnh đề if là gần như chắc chắn đáp án là **were**.',
          en: "**If I were you, I would / I'd + verb** is a very common way to give advice in office e-mails and conversations. If the if clause ends with \"you\", the key is almost certainly **were**.",
        },
      },
    },
    {
      heading: { vi: 'would, could hay might?', en: 'would, could or might?' },
      table: {
        head: [
          { vi: 'Mệnh đề chính', en: 'Main clause' },
          { vi: 'Ý nghĩa', en: 'Meaning' },
          { vi: 'Ví dụ', en: 'Example' },
        ],
        rows: [
          ['would + V', { vi: 'Kết quả chắc chắn (sẽ)', en: 'Certain result' }, 'If rent were lower, we would expand.'],
          ['could + V', { vi: 'Khả năng (có thể, sẽ có thể)', en: 'Ability (would be able to)' }, 'If we had a van, we could deliver ourselves.'],
          ['might + V', { vi: 'Kết quả có thể xảy ra (có lẽ sẽ)', en: 'Possible result (perhaps would)' }, 'If we lowered prices, sales might rise.'],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Trong mệnh đề if không dùng **would** để chỉ giả định (If it would rain → If it rained). Ngoại lệ duy nhất là lời đề nghị lịch sự: **If you would** sign here, … (= vui lòng).',
          en: 'Do not use **would** in the if clause to express the condition (If it would rain → If it rained). The only exception is a polite request: **If you would** sign here, … (= please).',
        },
      },
    },
    {
      heading: { vi: 'Loại 1 hay loại 2: mức độ có thật', en: 'First or second: how real is it?' },
      body: {
        vi: 'Cùng một tình huống có thể nói bằng loại 1 hay loại 2 tuỳ người nói thấy nó **có thật, có khả năng** (loại 1) hay **trái thực tế, khó xảy ra** (loại 2). Trong Part 5, bạn không phải đoán ý người nói: động từ ở vế còn lại, hoặc một câu nêu thực tế (but…, unfortunately…, currently…), quyết định loại câu.',
        en: 'The same situation can be expressed with a first or a second conditional depending on whether the speaker sees it as **real and possible** (first) or **contrary to fact or unlikely** (second). In Part 5 you never have to guess the speaker\'s view: the verb in the other clause, or a statement of the real facts (but…, unfortunately…, currently…), decides the type.',
      },
      table: {
        head: [
          { vi: 'Loại', en: 'Type' },
          { vi: 'Ví dụ', en: 'Example' },
          { vi: 'Người nói nghĩ gì', en: "Speaker's view" },
        ],
        rows: [
          [{ vi: 'Loại 1', en: 'First' }, 'If we win the contract, we will hire ten people.', { vi: 'Có thể thắng thầu.', en: 'Winning is a real possibility.' }],
          [{ vi: 'Loại 2', en: 'Second' }, 'If we won the contract, we would hire ten people.', { vi: 'Khó thắng thầu.', en: 'Winning is unlikely.' }],
          [{ vi: 'Loại 2', en: 'Second' }, 'If we had the license, we could bid, but we do not.', { vi: 'Trái thực tế hiện tại.', en: 'Contrary to present fact.' }],
        ],
      },
      callout: {
        kind: 'info',
        text: {
          vi: 'Hai vế phải cùng loại: **present + will** hoặc **past + would**. Các tổ hợp lẫn lộn như "If we had …, we will …" hay "If we have …, we would …" bị coi là sai trong câu hỏi Part 5. Trường hợp trộn loại 2 với loại 3 được học ở bài 18.3.',
          en: 'Both clauses must belong to the same type: **present + will** or **past + would**. Mixtures such as "If we had …, we will …" or "If we have …, we would …" are treated as errors in Part 5 items. Mixing the second and third conditionals is covered in lesson 18.3.',
        },
      },
    },
    {
      heading: { vi: 'Cách làm câu điều kiện loại 2 trong Part 5', en: 'Attacking second conditionals in Part 5' },
      points: [
        {
          vi: 'Chỗ trống ở **mệnh đề chính**, mệnh đề if ở quá khứ đơn hoặc **were** → chọn **would / could / might + V**; loại will, can, may và các thì hiện tại.',
          en: 'Blank in the **main clause** with a past simple or **were** if clause → choose **would / could / might + verb**; cross out will, can, may and present tenses.',
        },
        {
          vi: 'Chỗ trống ở **mệnh đề if**, mệnh đề chính có would/could/might + V → chọn **quá khứ đơn** (be → **were**, phủ định → **didn\'t + V**); loại would và các dạng hiện tại.',
          en: "Blank in the **if clause** with would/could/might + verb in the main clause → choose the **past simple** (be → **were**, negative → **didn't + verb**); cross out would and present forms.",
        },
        {
          vi: 'Phân biệt với loại 3: mệnh đề chính có **would have V3** hoặc mốc thời gian quá khứ (last year, yesterday) → không phải loại 2 (bài 18.3).',
          en: 'Tell it apart from the third conditional: **would have + past participle** in the main clause or a past time marker (last year, yesterday) → not a second conditional (lesson 18.3).',
        },
        {
          vi: 'Nếu chỉ còn **would** và **could**, xét nghĩa: "sẽ" (would) hay "sẽ có thể" (could). Thường chỉ một trong hai có mặt ở lựa chọn.',
          en: 'If only **would** and **could** remain, check the meaning: a plain result (would) or an ability (could). Usually only one of them appears among the options.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: 'If the hotel had more meeting rooms, it ------- larger conferences throughout the year.',
      options: ['will host', 'could host', 'hosts', 'has hosted'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề if ở quá khứ đơn (**had**) nói điều trái hiện tại → mệnh đề chính dùng **could + V**. will host là loại 1, không khớp với had.',
        en: 'The if clause is in the past simple (**had**) and describes something untrue now → the main clause takes **could + verb**. will host belongs to the first conditional and does not match had.',
      },
      translation: 'Nếu khách sạn có nhiều phòng họp hơn, họ có thể tổ chức các hội nghị lớn hơn quanh năm.',
    },
    {
      sentence: 'If the new warehouse ------- closer to the port, our shipping costs would be much lower.',
      options: ['is', 'will be', 'being', 'were'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề chính có **would be** → loại 2, mệnh đề if dùng quá khứ của be: **were** (cho mọi ngôi). is là thì hiện tại, chỉ đi với will.',
        en: 'The main clause has **would be** → second conditional, so the if clause takes the past of be: **were** (for every subject). is is present and pairs only with will.',
      },
      translation: 'Nếu nhà kho mới gần cảng hơn, chi phí vận chuyển của chúng tôi sẽ thấp hơn nhiều.',
    },
    {
      sentence: 'If I ------- you, I would ask the supplier for a written guarantee before placing such a large order.',
      options: ['am', 'have been', 'were', 'will be'],
      answer: 2,
      explanation: {
        vi: '**If I were you, I would…** là cấu trúc cố định để khuyên (người nói không thể là "bạn") → **were**. am và will be không đi được với would ask.',
        en: '**If I were you, I would…** is the fixed pattern for advice (the speaker cannot actually be "you") → **were**. am and will be cannot pair with would ask.',
      },
      translation: 'Nếu tôi là bạn, tôi sẽ yêu cầu nhà cung cấp bảo đảm bằng văn bản trước khi đặt một đơn hàng lớn như vậy.',
    },
    {
      sentence: 'If the company ------- its own delivery vans, it would not depend on outside couriers, but for now it rents them.',
      options: ['owns', 'will own', 'owned', 'would own'],
      answer: 2,
      explanation: {
        vi: 'Mệnh đề chính có **would not depend** và thực tế là **for now it rents them** (hiện vẫn đi thuê) → điều trái hiện tại, mệnh đề if dùng quá khứ đơn **owned**. would own sai vì không dùng would trong mệnh đề if.',
        en: 'The main clause has **would not depend** and the real situation is **for now it rents them** → contrary to present fact, so the if clause takes the past simple **owned**. would own is wrong because would is not used in the if clause.',
      },
      translation: 'Nếu công ty có đội xe giao hàng riêng, họ sẽ không phải phụ thuộc vào các hãng chuyển phát bên ngoài, nhưng hiện tại họ vẫn đi thuê xe.',
    },
    {
      sentence: 'If our office printer ------- break down so often, we would not need to send documents to a copy shop.',
      options: ["doesn't", "won't", "wouldn't", "didn't"],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề chính có **would not need** → mệnh đề if dùng quá khứ đơn phủ định **didn\'t + V**: didn\'t break down. doesn\'t là hiện tại, không khớp với would; wouldn\'t không dùng trong mệnh đề if.',
        en: "The main clause has **would not need** → the if clause takes the negative past simple **didn't + verb**: didn't break down. doesn't is present and does not match would; wouldn't is not used in the if clause.",
      },
      translation: 'Nếu máy in của văn phòng không hỏng thường xuyên như vậy, chúng tôi sẽ không phải mang tài liệu ra tiệm photo.',
    },
    {
      sentence: 'The CEO expects the merger to succeed, but if the deal ------- through, the company would lose millions in fees.',
      options: ['fell', 'falls', 'will fall', 'has fallen'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề chính có **would lose** và vế trước cho biết thương vụ khó đổ vỡ (**expects the merger to succeed**) → loại 2 cho điều khó xảy ra, mệnh đề if dùng quá khứ đơn **fell**. falls chỉ đi với will.',
        en: 'The main clause has **would lose**, and the first clause shows a collapse is unlikely (**expects the merger to succeed**) → a second conditional for an unlikely event, so the if clause takes the past simple **fell**. falls pairs only with will.',
      },
      translation: 'Tổng giám đốc tin rằng vụ sáp nhập sẽ thành công, nhưng nếu thương vụ đổ vỡ, công ty sẽ mất hàng triệu đô la phí.',
    },
    {
      sentence: 'If we hired two more technicians, we ------- repair requests within 24 hours instead of three days.',
      options: ['can handle', 'could handle', 'handled', 'will handle'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề if ở quá khứ đơn (**hired**) → mệnh đề chính dùng **could + V** (sẽ có thể). can handle và will handle là dạng của loại 1, không khớp với hired.',
        en: 'The if clause is in the past simple (**hired**) → the main clause takes **could + verb** (would be able to). can handle and will handle are first-conditional forms and do not match hired.',
      },
      translation: 'Nếu chúng tôi tuyển thêm hai kỹ thuật viên, chúng tôi có thể xử lý yêu cầu sửa chữa trong vòng 24 giờ thay vì ba ngày.',
    },
    {
      sentence: 'If the trade fair were held in Singapore, more of our Asian clients ------- able to attend.',
      options: ['would be', 'will be', 'are', 'have been'],
      answer: 0,
      explanation: {
        vi: 'Mệnh đề if dùng **were held** (quá khứ, bị động) → loại 2, mệnh đề chính dùng **would be**. will be chỉ đi với mệnh đề if ở hiện tại.',
        en: 'The if clause uses **were held** (past, passive) → second conditional, so the main clause takes **would be**. will be pairs only with a present-tense if clause.',
      },
      translation: 'Nếu hội chợ thương mại được tổ chức ở Singapore, sẽ có thêm nhiều khách hàng châu Á của chúng tôi tham dự được.',
    },
    {
      sentence: 'If the airline reduced its baggage fees, it ------- win back some of the business travelers it has lost.',
      options: ['will', 'can', 'must', 'might'],
      answer: 3,
      explanation: {
        vi: 'Mệnh đề if ở quá khứ đơn (**reduced**) → mệnh đề chính cần động từ khuyết thiếu dạng quá khứ: **might** (có lẽ sẽ). will và can thuộc loại 1; must (phải) sai nghĩa.',
        en: 'The if clause is in the past simple (**reduced**) → the main clause needs a past modal: **might** (perhaps would). will and can belong to the first conditional; must (obligation) has the wrong meaning.',
      },
      translation: 'Nếu hãng hàng không giảm phí hành lý, họ có thể sẽ giành lại một số khách đi công tác đã mất.',
    },
    {
      sentence: 'Mr. Ito ------- the product launch himself if he were not traveling to Seoul all next week.',
      options: ['will lead', 'would lead', 'leads', 'led'],
      answer: 1,
      explanation: {
        vi: 'Mệnh đề if dùng **were not traveling** (trái với kế hoạch thực tế: ông ấy sẽ đi Seoul) → mệnh đề chính dùng **would + V**: would lead. will lead và leads không khớp với were.',
        en: 'The if clause uses **were not traveling** (contrary to the actual plan: he is going to Seoul) → the main clause takes **would + verb**: would lead. will lead and leads do not match were.',
      },
      translation: 'Ông Ito sẽ tự mình chỉ đạo buổi ra mắt sản phẩm nếu ông ấy không phải đi Seoul cả tuần tới.',
    },
  ],
};
