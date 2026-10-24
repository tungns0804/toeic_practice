import type { LocalizedText } from '../models/lesson.model';

/**
 * Câu trả lời MẪU cho người học trình độ khoảng IELTS 5.0: câu ngắn, từ vựng quen
 * thuộc. Part 1 và Part 3 mỗi câu 4–5 câu, triển khai theo sơ đồ "Cách phát triển
 * câu trả lời": trả lời thẳng → lý do → ví dụ → kết quả → cảm xúc / lợi ích.
 *
 * `**...**` in đậm hai thứ người học cần nhìn ra: cấu trúc lấy từ sơ đồ (because,
 * for example, so, it helps…) và cụm từ của chủ đề.
 *
 * Khoá là `<topicId>/<questionId>`. Tách riêng khỏi danh sách câu hỏi vì đây là nội
 * dung tham khảo, có thể thêm/sửa mà không đụng tới khoá lưu câu trả lời.
 */
export const SPEAKING_SAMPLES: Record<string, LocalizedText> = {
  // ── Topic 1: Education ───────────────────────────────────────────────
  'education/q1': {
    en: 'Yes, I really enjoy learning new things. **This is because** it makes my life more interesting. **For example**, last year I learned how to cook from YouTube videos. **As a result**, now I can make dinner for my family at the weekend. **It makes me feel** proud and more confident.',
    vi: 'Có, tôi rất thích học những điều mới. Đó là vì nó làm cuộc sống của tôi thú vị hơn. Ví dụ, năm ngoái tôi học nấu ăn qua video YouTube. Kết quả là giờ tôi có thể nấu bữa tối cho gia đình vào cuối tuần. Điều đó khiến tôi thấy tự hào và tự tin hơn.',
  },
  'education/q2': {
    en: 'My favorite subject at school was Math. **That\'s because** I liked solving problems step by step. **For instance**, when I found the answer to a difficult question, I felt very happy and proud. **As a result**, I always got good marks in Math tests. **I find it to be** very useful now, because I use numbers at work every day.',
    vi: 'Môn học yêu thích của tôi hồi đi học là Toán. Đó là vì tôi thích giải bài theo từng bước. Chẳng hạn, khi tìm ra đáp án của một bài khó, tôi thấy rất vui và tự hào. Kết quả là tôi luôn được điểm cao trong các bài kiểm tra Toán. Tôi thấy môn này rất hữu ích bây giờ, vì ngày nào đi làm tôi cũng phải làm việc với các con số.',
  },
  'education/q3': {
    en: 'Before an important test, I usually make a study plan. **This is a great way to** know what I need to review each day. After that, I do some practice tests at home. **This is because** they show me my weak points. **It helps me** feel less nervous on the day of the test.',
    vi: 'Trước một bài thi quan trọng, tôi thường lập kế hoạch học. Đây là cách rất tốt để biết mỗi ngày mình cần ôn gì. Sau đó tôi làm vài bài thi thử ở nhà. Đó là vì chúng cho tôi thấy điểm yếu của mình. Việc này giúp tôi bớt lo lắng vào ngày thi.',
  },
  'education/q4': {
    en: 'I prefer studying alone. **The reason is that** I can focus better in a quiet place. **For example**, when I study with my friends, we usually talk and laugh too much. **As a result**, we waste a lot of time. However, if a lesson is very difficult, I sometimes ask a friend for help.',
    vi: 'Tôi thích học một mình hơn. Lý do là tôi tập trung tốt hơn ở nơi yên tĩnh. Ví dụ, khi học cùng bạn bè, chúng tôi thường nói chuyện và cười đùa quá nhiều. Kết quả là chúng tôi tốn rất nhiều thời gian. Tuy vậy, nếu bài quá khó, đôi khi tôi vẫn nhờ bạn giúp.',
  },
  'education/q5': {
    en: 'In the future, I would like to learn how to make websites. **This is because** I think it is a very useful skill nowadays. **For instance**, I could build a small online shop for my family\'s business. **I love the idea of** creating something by myself. **It also allows me to** find a better job later.',
    vi: 'Trong tương lai, tôi muốn học cách làm trang web. Đó là vì tôi nghĩ đây là kỹ năng rất hữu ích ngày nay. Chẳng hạn, tôi có thể làm một cửa hàng trực tuyến nhỏ cho việc kinh doanh của gia đình. Tôi rất thích ý tưởng tự mình tạo ra một thứ gì đó. Nó cũng giúp tôi tìm được việc tốt hơn sau này.',
  },
  'education/q6': {
    en: "I want to talk about my English teacher, Ms. Lan. She taught me in high school.\n\nShe was very patient. When I made mistakes, she never got angry. She always explained things slowly and gave us extra exercises after class.\n\nBecause of her, I started to like English. Before that, I was afraid of speaking, but she helped me feel more confident. I'm really grateful to her, and I still remember her lessons now.",
    vi: 'Tôi muốn nói về cô giáo tiếng Anh của tôi, cô Lan, người dạy tôi hồi cấp ba.\n\nCô rất kiên nhẫn. Khi tôi mắc lỗi, cô không bao giờ nổi giận. Cô luôn giải thích chậm rãi và cho thêm bài tập sau giờ học.\n\nNhờ cô mà tôi bắt đầu thích tiếng Anh. Trước đó tôi sợ nói, nhưng cô giúp tôi tự tin hơn. Tôi rất biết ơn cô và đến giờ vẫn nhớ các bài học của cô.',
  },
  'education/q7': {
    en: 'I think a good teacher should be patient and friendly. **This is because** students feel safe to ask questions. **For example**, my high school teacher never got angry when we made mistakes. **So** nobody in my class was afraid to speak. Also, a good teacher should explain things clearly, **because** this **helps** students understand the lesson faster.',
    vi: 'Tôi nghĩ một giáo viên giỏi nên kiên nhẫn và thân thiện. Đó là vì học sinh sẽ thấy an toàn khi đặt câu hỏi. Ví dụ, thầy giáo cấp ba của tôi không bao giờ nổi giận khi chúng tôi mắc lỗi. Vì vậy không ai trong lớp sợ phát biểu. Ngoài ra, giáo viên giỏi nên giải thích rõ ràng, vì điều này giúp học sinh hiểu bài nhanh hơn.',
  },
  'education/q8': {
    en: 'In my opinion, students learn better with technology. **This is because** it makes lessons more interesting. **For example**, students can watch short videos or use apps like Duolingo to practise. **As a result**, they remember the lesson for a longer time. However, I think traditional methods are still important, **so** teachers should use both.',
    vi: 'Theo tôi, học sinh học tốt hơn với công nghệ. Đó là vì nó làm bài học thú vị hơn. Ví dụ, học sinh có thể xem video ngắn hoặc dùng ứng dụng như Duolingo để luyện tập. Kết quả là các em nhớ bài lâu hơn. Tuy nhiên, tôi nghĩ phương pháp truyền thống vẫn quan trọng, nên giáo viên nên dùng cả hai.',
  },
  'education/q9': {
    en: 'I think schools should focus more on **practical skills**. **The reason is that** many students finish school but they cannot manage money or cook. **As a result**, they have a lot of problems when they start to live alone. **For instance**, my friend spent all his money in the first month at university. Learning these skills **allows** young people **to** become more independent.',
    vi: 'Tôi nghĩ trường học nên chú trọng kỹ năng thực tế hơn. Lý do là nhiều học sinh học xong nhưng không biết quản lý tiền hay nấu ăn. Kết quả là các em gặp rất nhiều khó khăn khi bắt đầu sống một mình. Chẳng hạn, bạn tôi đã tiêu hết tiền ngay tháng đầu tiên lên đại học. Học những kỹ năng này giúp người trẻ tự lập hơn.',
  },
  'education/q10': {
    en: 'I think the main reason is too much **academic pressure**. **This is because** students have many exams and a lot of homework every day. **For example**, if a student fails a test many times, he may think he is not good enough. **Consequently**, he stops trying. **It makes** students **feel** tired and sad, so they lose interest in studying.',
    vi: 'Tôi nghĩ lý do chính là áp lực học tập quá lớn. Đó là vì học sinh có nhiều kỳ thi và rất nhiều bài tập về nhà mỗi ngày. Ví dụ, nếu một bạn trượt bài kiểm tra nhiều lần, bạn ấy có thể nghĩ mình không đủ giỏi. Kết quả là bạn ấy không cố gắng nữa. Điều đó khiến học sinh thấy mệt mỏi và buồn, nên mất hứng thú với việc học.',
  },
  'education/q11': {
    en: 'I think more students will study online in the next 20 years. **This is because** the internet is getting faster and cheaper. **This is a great way to** save time and money. **For instance**, people in small towns can join good courses from big universities at home. **I love the idea of** it, because everyone will have a chance to learn.',
    vi: 'Tôi nghĩ trong 20 năm tới sẽ có nhiều học sinh học trực tuyến hơn. Đó là vì internet ngày càng nhanh và rẻ hơn. Đây là cách rất tốt để tiết kiệm thời gian và tiền bạc. Chẳng hạn, người ở các thị trấn nhỏ có thể học khoá học tốt của các trường đại học lớn ngay tại nhà. Tôi rất thích ý tưởng đó, vì ai cũng sẽ có cơ hội học tập.',
  },

  // ── Topic 2: Work & Careers ──────────────────────────────────────────
  'work-careers/q1': {
    en: 'In the future, I would like to work in marketing. **This is because** I enjoy thinking of new ideas for products. **For example**, I once made a poster for a school event, and many people liked it. **I love the idea of** making people interested in a product. **It makes me feel** creative and happy.',
    vi: 'Trong tương lai, tôi muốn làm trong ngành marketing. Đó là vì tôi thích nghĩ ra ý tưởng mới cho sản phẩm. Ví dụ, có lần tôi làm một tấm áp phích cho sự kiện của trường và nhiều người rất thích. Tôi rất thích ý tưởng làm cho mọi người quan tâm tới một sản phẩm. Điều đó khiến tôi thấy sáng tạo và vui vẻ.',
  },
  'work-careers/q2': {
    en: 'I prefer working as part of a team. **That\'s because** we can share ideas and help each other. **For example**, last year I had a big project, and my team helped me a lot. **As a result**, we finished it before the deadline. Working in a team **also helps me** learn new things from my colleagues.',
    vi: 'Tôi thích làm việc nhóm hơn. Đó là vì chúng tôi có thể chia sẻ ý tưởng và giúp đỡ nhau. Ví dụ, năm ngoái tôi có một dự án lớn và nhóm đã giúp tôi rất nhiều. Kết quả là chúng tôi xong trước hạn. Làm việc nhóm cũng giúp tôi học hỏi được nhiều điều mới từ đồng nghiệp.',
  },
  'work-careers/q3': {
    en: 'For me, the most important thing is **job satisfaction**. **The reason is that** I spend about eight hours a day at work. **So** if I don\'t enjoy my job, I will feel stressed all the time. **For example**, my sister had a high salary, but she was unhappy and quit after one year. Of course, salary is important too, but **I find** happiness **to be** more important.',
    vi: 'Với tôi, điều quan trọng nhất là sự hài lòng với công việc. Lý do là mỗi ngày tôi dành khoảng tám tiếng ở chỗ làm. Vì vậy nếu không thích công việc, tôi sẽ luôn thấy căng thẳng. Ví dụ, chị gái tôi có lương cao nhưng không vui và đã nghỉ việc sau một năm. Dĩ nhiên lương cũng quan trọng, nhưng tôi thấy niềm vui quan trọng hơn.',
  },
  'work-careers/q4': {
    en: 'I would like to work for a large company. **This is because** big companies usually have good training for their staff. **For example**, my uncle\'s company sends workers to free English courses every year. **So** they can improve their skills quickly. **It also allows** workers **to** get promoted and have a more stable job.',
    vi: 'Tôi muốn làm cho một công ty lớn. Đó là vì công ty lớn thường đào tạo nhân viên rất tốt. Ví dụ, công ty của chú tôi năm nào cũng cử nhân viên đi học tiếng Anh miễn phí. Vì vậy họ nâng cao kỹ năng rất nhanh. Nó cũng giúp nhân viên được thăng chức và có công việc ổn định hơn.',
  },
  'work-careers/q5': {
    en: 'Yes, my career plans have changed a lot. **Back when** I was a child, I wanted to be a doctor. **That\'s because** I thought it was a respected job. But now I want to work in business, **since** I am more interested in it. **I find it to be** a better choice for my personality, because I like talking to people.',
    vi: 'Có, dự định nghề nghiệp của tôi đã thay đổi nhiều. Hồi nhỏ, tôi muốn làm bác sĩ. Đó là vì tôi nghĩ đó là nghề được tôn trọng. Nhưng giờ tôi muốn làm kinh doanh, vì tôi hứng thú với nó hơn. Tôi thấy đó là lựa chọn hợp với tính cách của mình hơn, vì tôi thích nói chuyện với mọi người.',
  },
  'work-careers/q6': {
    en: "I would like to talk about a job as a travel guide.\n\nA travel guide takes tourists to famous places and tells them about the history and culture. They also need to help the group if there is a problem.\n\nI would love this job because I enjoy travelling and meeting new people. It also allows me to practise my English every day.\n\nI think it is a **rewarding career**, because people can have a good holiday thanks to me. That would make me feel very happy.",
    vi: 'Tôi muốn nói về công việc hướng dẫn viên du lịch.\n\nHướng dẫn viên đưa du khách tới những nơi nổi tiếng và kể về lịch sử, văn hoá. Họ cũng cần giúp cả đoàn khi có vấn đề.\n\nTôi sẽ rất thích công việc này vì tôi thích đi du lịch và gặp người mới. Nó cũng cho phép tôi luyện tiếng Anh mỗi ngày.\n\nTôi nghĩ đây là một nghề đáng giá, vì mọi người có kỳ nghỉ tốt nhờ tôi. Điều đó sẽ khiến tôi rất vui.',
  },
  'work-careers/q7': {
    en: 'I think hard work is the most important thing. **This is because** successful people usually don\'t give up easily. **For example**, my boss started as a normal worker, but she studied at night for three years. **As a result**, she became a manager. Her story **makes me feel** that I can be successful too if I try hard.',
    vi: 'Tôi nghĩ chăm chỉ là điều quan trọng nhất. Đó là vì người thành công thường không dễ bỏ cuộc. Ví dụ, sếp của tôi bắt đầu là một nhân viên bình thường, nhưng cô ấy học buổi tối suốt ba năm. Kết quả là cô ấy trở thành quản lý. Câu chuyện của cô ấy khiến tôi cảm thấy mình cũng có thể thành công nếu cố gắng.',
  },
  'work-careers/q8': {
    en: 'In my opinion, people should choose a career based on passion. **The reason is that** if you love your job, you will work harder. **As a result**, you will become better at it and maybe earn more money later. **For example**, my friend loves baking, and now she has her own small cake shop. However, salary is also necessary, **so** it is best to find a job which has both.',
    vi: 'Theo tôi, nên chọn nghề theo đam mê. Lý do là nếu yêu công việc, bạn sẽ làm chăm chỉ hơn. Kết quả là bạn sẽ giỏi hơn và có thể kiếm được nhiều tiền hơn sau này. Ví dụ, bạn tôi rất thích làm bánh và giờ cô ấy có một tiệm bánh nhỏ của riêng mình. Tuy nhiên lương cũng cần thiết, nên tốt nhất là tìm công việc có cả hai.',
  },
  'work-careers/q9': {
    en: 'I think employers can give workers a bonus when they do a good job. **This is because** money is a clear reward for hard work. Another way is to offer **career progression**, **for example**, a better position after one or two years. **As a result**, workers can see a future in the company. **It makes them feel** that their work is important.',
    vi: 'Tôi nghĩ người sử dụng lao động có thể thưởng tiền khi nhân viên làm tốt. Đó là vì tiền là phần thưởng rõ ràng cho sự chăm chỉ. Một cách khác là tạo cơ hội thăng tiến, ví dụ cho vị trí tốt hơn sau một hai năm. Kết quả là nhân viên thấy được tương lai ở công ty. Điều đó khiến họ cảm thấy công việc của mình quan trọng.',
  },
  'work-careers/q10': {
    en: 'There are a few reasons. Some people feel bored after doing the same job for many years, **so** they want something new. Others change jobs **because** they want a higher salary. **For instance**, my cousin left her bank job to become a teacher. **That\'s because** she **loved the idea of** helping children, and now she is much happier.',
    vi: 'Có một vài lý do. Một số người thấy chán sau nhiều năm làm cùng một việc, nên họ muốn điều gì đó mới. Số khác đổi việc vì muốn lương cao hơn. Chẳng hạn, chị họ tôi bỏ việc ngân hàng để làm giáo viên. Đó là vì chị rất thích ý tưởng giúp đỡ trẻ em, và giờ chị vui hơn nhiều.',
  },
  'work-careers/q11': {
    en: 'I think technology will change many jobs in the future. **This is because** machines and computers can do simple work faster than people. **For example**, many supermarkets now use self-checkout machines. **As a result**, some workers may lose their jobs. But technology **also helps** create new jobs, **so** people need to keep learning new skills.',
    vi: 'Tôi nghĩ công nghệ sẽ thay đổi nhiều công việc trong tương lai. Đó là vì máy móc và máy tính làm việc đơn giản nhanh hơn con người. Ví dụ, nhiều siêu thị giờ dùng máy tự thanh toán. Kết quả là một số người có thể mất việc. Nhưng công nghệ cũng giúp tạo ra việc làm mới, nên mọi người cần liên tục học kỹ năng mới.',
  },
};
