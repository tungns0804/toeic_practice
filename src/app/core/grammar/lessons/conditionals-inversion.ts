import type { GrammarLessonContent } from '../grammar.model';

export const LESSON: GrammarLessonContent = {
  id: 'conditionals-inversion',
  intro: {
    vi: 'Trong văn viết trang trọng, câu điều kiện có thể bỏ **if** và đảo **Should / Were / Had** lên trước chủ ngữ, như câu kết thư quen thuộc **Should you have any questions, …**. Part 5/6 thường để trống đúng vị trí đầu câu này, hoặc hỏi các cụm thay thế **Were it not for, But for, Without, otherwise**.',
    en: 'In formal writing, a conditional can drop **if** and move **Should / Were / Had** in front of the subject, as in the familiar letter closing **Should you have any questions, …**. Part 5/6 often leaves exactly that first word blank, or tests the alternatives **Were it not for, But for, Without, otherwise**.',
  },
  mistakes: [
    {
      wrong: '[[Should you will need]] further assistance, please contact our front desk.',
      right: '[[Should you need]] further assistance, please contact our front desk.',
      explanation: {
        vi: 'Trong đảo ngữ **Should + S + V**, động từ sau chủ ngữ là **động từ nguyên mẫu**: Should you **need**. Không thêm will.',
        en: 'In the inversion **Should + subject + verb**, the verb after the subject is a **base verb**: Should you **need**. Do not add will.',
      },
    },
    {
      wrong: '[[Have]] we known about the port strike, we would have shipped the goods by air.',
      right: '[[Had]] we known about the port strike, we would have shipped the goods by air.',
      explanation: {
        vi: 'Mệnh đề chính có **would have shipped** → đảo ngữ loại 3 bắt đầu bằng **Had** (= If we had known), không phải Have.',
        en: 'The main clause has **would have shipped** → the third-conditional inversion begins with **Had** (= If we had known), not Have.',
      },
    },
    {
      wrong: '[[Was]] the company to relocate, most of its staff would need to find new housing.',
      right: '[[Were]] the company to relocate, most of its staff would need to find new housing.',
      explanation: {
        vi: 'Đảo ngữ loại 2 luôn dùng **Were** cho mọi ngôi, kể cả chủ ngữ số ít: **Were the company to relocate** (= If the company were to relocate).',
        en: 'The second-conditional inversion always uses **Were** for every subject, including singular ones: **Were the company to relocate** (= If the company were to relocate).',
      },
    },
    {
      wrong: "[[Hadn't the supplier]] lowered its prices, we would have cancelled the order.",
      right: '[[Had the supplier not]] lowered its prices, we would have cancelled the order.',
      explanation: {
        vi: 'Đảo ngữ điều kiện ở dạng phủ định không dùng dạng rút gọn: **Had + S + not + V3**, không viết Hadn\'t + S.',
        en: "Negative conditional inversion does not use the contracted form: **Had + subject + not + past participle**, not Hadn't + subject.",
      },
    },
    {
      wrong: 'But for [[they helped]], we would have missed the filing deadline.',
      right: 'But for [[their help]], we would have missed the filing deadline.',
      explanation: {
        vi: '**But for** (cũng như **Without**) là cụm giới từ, theo sau phải là **danh từ / cụm danh từ** (their help), không phải một mệnh đề.',
        en: '**But for** (like **Without**) is prepositional, so it must be followed by a **noun phrase** (their help), not a clause.',
      },
    },
  ],
  theory: [
    {
      heading: { vi: 'Bỏ if, đảo trợ động từ lên đầu', en: 'Drop if, move the auxiliary to the front' },
      body: {
        vi: 'Chỉ có ba trợ động từ được đảo lên đầu câu điều kiện: **Should** (loại 1), **Were** (loại 2) và **Had** (loại 3 / hỗn hợp). Khi đảo thì **bỏ if**; nghĩa không đổi, chỉ trang trọng hơn. Không đảo với Do/Did/Will hay các động từ thường.',
        en: 'Only three auxiliaries can be moved to the front of a conditional: **Should** (first), **Were** (second) and **Had** (third/mixed). When you invert, **if disappears**; the meaning stays the same, only more formal. Do not invert with Do/Did/Will or ordinary verbs.',
      },
      table: {
        head: [
          { vi: 'Câu với if', en: 'With if' },
          { vi: 'Câu đảo ngữ', en: 'Inverted' },
          { vi: 'Loại', en: 'Type' },
        ],
        rows: [
          ['If you should need help, …', 'Should you need help, …', { vi: 'Loại 1 (ít khả năng, lịch sự)', en: 'First (less likely, polite)' }],
          ['If the firm were to close, …', 'Were the firm to close, …', { vi: 'Loại 2 (giả định tương lai)', en: 'Second (hypothetical future)' }],
          ['If I were in your position, …', 'Were I in your position, …', { vi: 'Loại 2 (trái hiện tại)', en: 'Second (contrary to present)' }],
          ['If we had known, …', 'Had we known, …', { vi: 'Loại 3 / hỗn hợp', en: 'Third / mixed' }],
        ],
      },
      callout: {
        kind: 'warning',
        text: {
          vi: 'Không giữ lại **if** khi đã đảo (If had we known ✗), và phủ định không rút gọn: **Had we not known** ✓ / Hadn\'t we known ✗; **Should it not arrive** ✓.',
          en: "Never keep **if** after inverting (If had we known ✗), and do not contract the negative: **Had we not known** ✓ / Hadn't we known ✗; **Should it not arrive** ✓.",
        },
      },
    },
    {
      heading: { vi: 'Should + S + V nguyên mẫu', en: 'Should + subject + base verb' },
      body: {
        vi: 'Đây là dạng đảo ngữ **hay gặp nhất** trong đề TOEIC, nhất là ở câu cuối thư, e-mail, thông báo. Nghĩa là "nếu (chẳng may)", nói về tình huống có thể xảy ra trong tương lai. Sau chủ ngữ là **động từ nguyên mẫu**; mệnh đề chính thường là câu mệnh lệnh (please contact…) hoặc **will / can + V**.',
        en: 'This is the **most frequent** inversion on the TOEIC, especially in the last line of letters, e-mails and notices. It means "if (by any chance)" and refers to a possible future situation. The subject is followed by a **base verb**; the main clause is usually an imperative (please contact…) or **will / can + verb**.',
      },
      examples: [
        {
          en: '**Should you have** any questions about your reservation, please call us at 555-0147.',
          vi: 'Nếu quý khách có bất kỳ thắc mắc nào về việc đặt phòng, vui lòng gọi cho chúng tôi theo số 555-0147.',
        },
        {
          en: '**Should the item be** out of stock, we **will notify** you within 48 hours.',
          vi: 'Trong trường hợp mặt hàng hết, chúng tôi sẽ thông báo cho quý khách trong vòng 48 giờ.',
        },
      ],
      callout: {
        kind: 'tip',
        text: {
          vi: 'Chỗ trống ở **đầu câu**, theo sau là **chủ ngữ + V nguyên mẫu**, mệnh đề sau là câu mệnh lệnh hoặc will → gần như chắc chắn là **Should**.',
          en: 'A blank at the **start of the sentence**, followed by **subject + base verb**, with an imperative or will in the next clause → it is almost certainly **Should**.',
        },
      },
    },
    {
      heading: { vi: 'Were + S + to V / Were + S + …', en: 'Were + subject + to-infinitive / Were + subject + …' },
      body: {
        vi: '**Were + S + to V** đảo từ **If + S + were to V**, nói về một giả định trong tương lai khó xảy ra. **Were + S + tính từ / cụm danh từ / cụm giới từ** đảo từ **If + S + were …**, nói về điều trái hiện tại. Mệnh đề chính dùng **would / could / might + V**. Luôn là **Were**, không bao giờ là Was.',
        en: '**Were + subject + to-infinitive** comes from **If + subject + were to + verb** and describes an unlikely future situation. **Were + subject + adjective / noun phrase / prepositional phrase** comes from **If + subject + were …** and describes something untrue now. The main clause takes **would / could / might + verb**. It is always **Were**, never Was.',
      },
      examples: [
        {
          en: '**Were the bank to raise** interest rates, many buyers **would postpone** their purchases.',
          vi: 'Nếu ngân hàng tăng lãi suất, nhiều người mua sẽ hoãn việc mua nhà.',
        },
        {
          en: '**Were I** in charge of the budget, I **would invest** more in staff training.',
          vi: 'Nếu tôi phụ trách ngân sách, tôi sẽ đầu tư nhiều hơn vào việc đào tạo nhân viên.',
        },
      ],
    },
    {
      heading: { vi: 'Had + S + V3', en: 'Had + subject + past participle' },
      body: {
        vi: '**Had + S + V3** đảo từ **If + S + had V3**, nói về điều trái quá khứ. Mệnh đề chính dùng **would / could / might have + V3** (loại 3), hoặc **would + V** nếu kết quả ở hiện tại (câu hỗn hợp, bài 18.3). Dạng bị động: **Had + S + been + V3**.',
        en: '**Had + subject + past participle** comes from **If + subject + had + past participle** and describes something contrary to the past. The main clause takes **would / could / might have + past participle** (third conditional), or **would + verb** when the result is in the present (mixed conditional, lesson 18.3). Passive: **Had + subject + been + past participle**.',
      },
      examples: [
        {
          en: '**Had the contract been signed** in May, construction **would have started** in June.',
          vi: 'Nếu hợp đồng được ký vào tháng Năm, việc xây dựng đã bắt đầu vào tháng Sáu.',
        },
        {
          en: '**Had we not upgraded** the servers last year, the website **would be** much slower today.',
          vi: 'Nếu năm ngoái chúng tôi không nâng cấp máy chủ, thì giờ trang web đã chậm hơn nhiều.',
        },
      ],
    },
    {
      heading: { vi: 'Were it not for / Had it not been for / But for / Without', en: 'Were it not for / Had it not been for / But for / Without' },
      body: {
        vi: 'Các cụm này đều có nghĩa "nếu không có …" và theo sau là **danh từ / cụm danh từ**. Chọn cụm nào phụ thuộc vào loại của mệnh đề chính.',
        en: 'These phrases all mean "if it were not for / if there had not been …" and are followed by a **noun phrase**. Which one to use depends on the type of the main clause.',
      },
      table: {
        head: [
          { vi: 'Cụm', en: 'Phrase' },
          { vi: 'Đi với mệnh đề chính', en: 'Main clause' },
          { vi: 'Ghi chú', en: 'Note' },
        ],
        rows: [
          ['Were it not for + N', 'would / could + V', { vi: 'Trái hiện tại (= If it were not for)', en: 'Contrary to present (= If it were not for)' }],
          ['Had it not been for + N', 'would / could have + V3', { vi: 'Trái quá khứ (= If it had not been for)', en: 'Contrary to past (= If it had not been for)' }],
          ['But for + N', 'would + V or would have + V3', { vi: 'Trang trọng, dùng cho cả hai', en: 'Formal, works for both' }],
          ['Without + N', 'would + V or would have + V3', { vi: 'Phổ biến nhất, dùng cho cả hai', en: 'Most common, works for both' }],
        ],
      },
      examples: [
        {
          en: '**Were it not for** online orders, the shop **would not survive**.',
          vi: 'Nếu không có đơn hàng trực tuyến, cửa hàng sẽ không trụ nổi.',
        },
        {
          en: '**Without** your feedback, we **could not have improved** the app so quickly.',
          vi: 'Nếu không có góp ý của bạn, chúng tôi đã không thể cải thiện ứng dụng nhanh như vậy.',
        },
      ],
      callout: {
        kind: 'warning',
        text: {
          vi: 'Phải giữ đúng cặp: **Were it not for** (không có been) ↔ **Had it not been for** (có been). "Had it not for" và "Were it not been for" đều sai.',
          en: 'Keep the pairs intact: **Were it not for** (no been) ↔ **Had it not been for** (with been). "Had it not for" and "Were it not been for" are both wrong.',
        },
      },
    },
    {
      heading: { vi: 'otherwise = nếu không thì', en: 'otherwise = if not' },
      body: {
        vi: '**otherwise** đứng đầu mệnh đề thứ hai, thay cho cả một mệnh đề if phủ định. Nó dùng được với mọi loại: will (loại 1), would (loại 2), would have V3 (loại 3). Trước otherwise thường có dấu chấm phẩy hoặc dấu chấm (cách dùng dấu câu với trạng từ liên kết: bài 8.1).',
        en: '**otherwise** begins the second clause and replaces a whole negative if clause. It works with every type: will (first), would (second), would have + past participle (third). It is usually preceded by a semicolon or a full stop (punctuation with conjunctive adverbs: lesson 8.1).',
      },
      examples: [
        {
          en: 'Please arrive by 8:30; **otherwise**, you **will miss** the safety briefing.',
          vi: 'Vui lòng có mặt trước 8 giờ 30; nếu không, bạn sẽ lỡ buổi phổ biến an toàn.',
        },
        {
          en: 'The driver knew a shortcut. **Otherwise**, the guests **would have been** late for the ceremony.',
          vi: 'Người tài xế biết một lối tắt. Nếu không, khách đã đến muộn buổi lễ.',
        },
      ],
    },
    {
      heading: { vi: 'Cách làm câu đảo ngữ điều kiện trong Part 5', en: 'Attacking inverted conditionals in Part 5' },
      points: [
        {
          vi: 'Chỗ trống đầu câu, câu không có if và có hai mệnh đề → xét động từ sau chủ ngữ: **V nguyên mẫu** → Should; **to V / tính từ / cụm danh từ** → Were; **V3** → Had.',
          en: 'Blank at the start, no if, and two clauses → check the verb after the subject: **base verb** → Should; **to-infinitive / adjective / noun phrase** → Were; **past participle** → Had.',
        },
        {
          vi: 'Kiểm tra lại bằng mệnh đề chính: mệnh lệnh / will → Should; would + V → Were; would have V3 → Had.',
          en: 'Double-check with the main clause: imperative / will → Should; would + verb → Were; would have + past participle → Had.',
        },
        {
          vi: 'Sau chỗ trống là **cụm danh từ** rồi đến dấu phẩy → But for / Without / Were it not for / Had it not been for, không phải liên từ như If, Unless.',
          en: 'A **noun phrase** after the blank, then a comma → But for / Without / Were it not for / Had it not been for, not a conjunction like If or Unless.',
        },
        {
          vi: 'Chỗ trống đứng đầu mệnh đề thứ hai sau dấu chấm phẩy, nghĩa "nếu không thì" → **otherwise**.',
          en: 'A blank at the start of the second clause after a semicolon, meaning "if not" → **otherwise**.',
        },
      ],
    },
  ],
  questions: [
    {
      sentence: '------- you have any questions about the new expense policy, please contact the accounting department.',
      options: ['Should', 'Would', 'Unless', 'Had'],
      answer: 0,
      explanation: {
        vi: 'Không có if, sau chủ ngữ là động từ nguyên mẫu **have**, mệnh đề chính là câu mệnh lệnh (**please contact**) → đảo ngữ **Should you have** (= If you should have). Unless (trừ khi) sai nghĩa; Had cần V3.',
        en: 'There is no if, the subject is followed by the base verb **have**, and the main clause is an imperative (**please contact**) → the inversion **Should you have** (= If you should have). Unless has the wrong meaning; Had needs a past participle.',
      },
      translation: 'Nếu có bất kỳ thắc mắc nào về chính sách chi phí mới, vui lòng liên hệ phòng kế toán.',
    },
    {
      sentence: 'Should the delivery be delayed for any reason, the customer ------- a full refund of the shipping fee.',
      options: ['would have received', 'will receive', 'had received', 'receiving'],
      answer: 1,
      explanation: {
        vi: '**Should the delivery be delayed** = If the delivery should be delayed (loại 1, tình huống có thể xảy ra) → mệnh đề chính dùng **will + V**: will receive. would have received thuộc loại 3.',
        en: '**Should the delivery be delayed** = If the delivery should be delayed (first conditional, a possible situation) → the main clause takes **will + verb**: will receive. would have received belongs to the third conditional.',
      },
      translation: 'Nếu việc giao hàng bị chậm vì bất kỳ lý do gì, khách hàng sẽ được hoàn lại toàn bộ phí vận chuyển.',
    },
    {
      sentence: '------- the board approved the merger two years ago, the two firms would already be operating as one company.',
      options: ['Should', 'Did', 'Had', 'Were'],
      answer: 2,
      explanation: {
        vi: 'Sau chủ ngữ là **V3 approved** và có mốc quá khứ **two years ago** → đảo ngữ **Had the board approved** (= If the board had approved); kết quả ở hiện tại (already be operating) nên đây là câu hỗn hợp. Did không dùng để đảo ngữ điều kiện.',
        en: 'The subject is followed by the past participle **approved** and there is a past marker, **two years ago** → the inversion **Had the board approved** (= If the board had approved); the result is present (already be operating), so this is a mixed conditional. Did is never used for conditional inversion.',
      },
      translation: 'Nếu hai năm trước hội đồng quản trị đã phê duyệt vụ sáp nhập, thì giờ hai công ty đã hoạt động như một công ty duy nhất.',
    },
    {
      sentence: 'Had the shipment ------- on time, the store would have been fully stocked for the holiday sale.',
      options: ['arriving', 'arrives', 'arrive', 'arrived'],
      answer: 3,
      explanation: {
        vi: 'Đảo ngữ **Had + S + V3** (= If the shipment had arrived) → cần quá khứ phân từ **arrived**; mệnh đề chính **would have been** xác nhận loại 3.',
        en: 'The inversion **Had + subject + past participle** (= If the shipment had arrived) → the past participle **arrived** is needed; the main clause **would have been** confirms the third conditional.',
      },
      translation: 'Nếu lô hàng đến đúng hạn, cửa hàng đã có đủ hàng cho đợt giảm giá dịp lễ.',
    },
    {
      sentence: '------- the company to relocate its headquarters, about two hundred employees would have to move.',
      options: ['Were', 'Should', 'Did', 'If'],
      answer: 0,
      explanation: {
        vi: 'Sau chủ ngữ là **to relocate** và mệnh đề chính có **would have to** → đảo ngữ **Were + S + to V** (= If the company were to relocate). Should cần V nguyên mẫu không "to"; If the company to relocate thiếu động từ.',
        en: 'The subject is followed by **to relocate** and the main clause has **would have to** → the inversion **Were + subject + to-infinitive** (= If the company were to relocate). Should needs a base verb without "to"; If the company to relocate lacks a verb.',
      },
      translation: 'Nếu công ty chuyển trụ sở chính, khoảng hai trăm nhân viên sẽ phải chuyển nơi ở.',
    },
    {
      sentence: '------- it not for the generous support of our sponsors, the festival could not take place this year.',
      options: ['Had', 'Were', 'Should', 'Unless'],
      answer: 1,
      explanation: {
        vi: 'Cấu trúc cố định **Were it not for + danh từ** (= nếu không có) đi với mệnh đề chính **could + V** (could not take place, nói về hiện tại). Had it not phải có **been for**.',
        en: 'The fixed phrase **Were it not for + noun** (= if there were not) pairs with **could + verb** in the main clause (could not take place, about the present). Had it not would need **been for**.',
      },
      translation: 'Nếu không có sự hỗ trợ hào phóng của các nhà tài trợ, lễ hội năm nay sẽ không thể diễn ra.',
    },
    {
      sentence: "------- it not been for Ms. Novak's quick response, the server failure would have cost the firm millions.",
      options: ['Were', 'Should', 'Had', 'Would'],
      answer: 2,
      explanation: {
        vi: 'Sau **it not** là **been for** và mệnh đề chính có **would have cost** → cấu trúc **Had it not been for + danh từ** (trái quá khứ). Were it not for không đi với been.',
        en: 'it not is followed by **been for**, and the main clause has **would have cost** → the phrase **Had it not been for + noun** (contrary to the past). Were it not for does not take been.',
      },
      translation: 'Nếu không nhờ cô Novak phản ứng nhanh, sự cố máy chủ đã khiến công ty thiệt hại hàng triệu đô la.',
    },
    {
      sentence: '------- the support of local investors, the startup would never have survived its first year.',
      options: ['Unless', 'But for', 'Even if', 'Had not'],
      answer: 1,
      explanation: {
        vi: 'Sau chỗ trống chỉ có **cụm danh từ** (the support of local investors), không có động từ → cần cụm giới từ **But for** (= nếu không có). Unless và Even if là liên từ, phải theo sau là mệnh đề.',
        en: 'The blank is followed only by a **noun phrase** (the support of local investors), with no verb → the prepositional **But for** (= without) is needed. Unless and Even if are conjunctions and need a clause.',
      },
      translation: 'Nếu không có sự hỗ trợ của các nhà đầu tư địa phương, công ty khởi nghiệp đó đã không thể trụ được qua năm đầu tiên.',
    },
    {
      sentence: 'Please confirm your attendance by Friday; -------, we will not be able to reserve a seat for you.',
      options: ['however', 'therefore', 'moreover', 'otherwise'],
      answer: 3,
      explanation: {
        vi: 'Vế sau là hậu quả nếu KHÔNG xác nhận → **otherwise** (nếu không thì). therefore (vì vậy) sai nghĩa: xác nhận không dẫn đến việc mất chỗ; however và moreover cũng không hợp.',
        en: 'The second clause is what happens if you do NOT confirm → **otherwise** (if not). therefore has the wrong meaning: confirming would not cause the loss of a seat; however and moreover do not fit either.',
      },
      translation: 'Vui lòng xác nhận tham dự trước thứ Sáu; nếu không, chúng tôi sẽ không thể giữ chỗ cho bạn.',
    },
    {
      sentence: 'Had the contractor ------- the safety inspection, the new library would have opened in June as planned.',
      options: ['not failed', 'had not failed', 'not fail', 'not failing'],
      answer: 0,
      explanation: {
        vi: 'Đảo ngữ phủ định **Had + S + not + V3** (= If the contractor had not failed) → **not failed**. had not failed lặp lại had; not fail và not failing không phải V3.',
        en: 'The negative inversion **Had + subject + not + past participle** (= If the contractor had not failed) → **not failed**. had not failed repeats had; not fail and not failing are not past participles.',
      },
      translation: 'Nếu nhà thầu không trượt đợt kiểm tra an toàn, thư viện mới đã khai trương vào tháng Sáu như dự kiến.',
    },
  ],
};
