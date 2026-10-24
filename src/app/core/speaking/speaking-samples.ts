import type { LocalizedText } from '../models/lesson.model';

/**
 * Câu trả lời MẪU cho người học trình độ khoảng IELTS 5.0: câu ngắn, từ vựng quen
 * thuộc, mỗi ý có lý do hoặc ví dụ đi kèm (theo sơ đồ "Cách phát triển câu trả
 * lời"), và chỉ cài vài cụm từ của chủ đề (in đậm bằng `**`) để học cách dùng chứ
 * không quá sức.
 *
 * Khoá là `<topicId>/<questionId>`. Tách riêng khỏi danh sách câu hỏi vì đây là nội
 * dung tham khảo, có thể thêm/sửa mà không đụng tới khoá lưu câu trả lời.
 */
export const SPEAKING_SAMPLES: Record<string, LocalizedText> = {
  // ── Topic 1: Education ───────────────────────────────────────────────
  'education/q1': {
    en: 'Yes, I do. I enjoy learning new things because it makes me feel more confident. For example, last year I learned to cook, and now I can make dinner for my family.',
    vi: 'Có, tôi thích. Tôi thích học điều mới vì nó khiến tôi tự tin hơn. Ví dụ, năm ngoái tôi học nấu ăn và giờ tôi có thể nấu bữa tối cho gia đình.',
  },
  'education/q2': {
    en: 'My favorite subject was English. I liked it because my teacher was very kind and the lessons were fun. We often played games and sang songs, so it was easy to remember new words.',
    vi: 'Môn tôi thích nhất là tiếng Anh. Tôi thích vì cô giáo rất tốt bụng và giờ học vui. Chúng tôi hay chơi trò chơi và hát, nên dễ nhớ từ mới.',
  },
  'education/q3': {
    en: 'First, I make a study plan, so I know what to review each day. Then I do some practice tests. I think this is a good way to find my weak points, and it helps me feel less nervous.',
    vi: 'Đầu tiên tôi lập kế hoạch học để biết mỗi ngày ôn gì. Sau đó tôi làm vài bài thi thử. Tôi nghĩ đây là cách tốt để tìm ra điểm yếu, và nó giúp tôi bớt lo lắng.',
  },
  'education/q4': {
    en: 'I prefer studying alone because I can focus better. When I study with friends, we usually talk too much. But sometimes I ask a friend for help when a lesson is difficult.',
    vi: 'Tôi thích học một mình vì tôi tập trung hơn. Khi học với bạn, chúng tôi thường nói chuyện quá nhiều. Nhưng đôi khi tôi nhờ bạn giúp khi bài khó.',
  },
  'education/q5': {
    en: 'I would like to learn how to use a computer better, for example, how to make websites. This is because I think it is a useful skill for my job in the future.',
    vi: 'Tôi muốn học dùng máy tính tốt hơn, chẳng hạn cách làm trang web. Vì tôi nghĩ đó là kỹ năng hữu ích cho công việc sau này.',
  },
  'education/q6': {
    en: "I want to talk about my English teacher, Ms. Lan. She taught me in high school.\n\nShe was very patient. When I made mistakes, she never got angry. She always explained things slowly and gave us extra exercises after class.\n\nBecause of her, I started to like English. Before that, I was afraid of speaking, but she helped me feel more confident. I'm really grateful to her, and I still remember her lessons now.",
    vi: 'Tôi muốn nói về cô giáo tiếng Anh của tôi, cô Lan, người dạy tôi hồi cấp ba.\n\nCô rất kiên nhẫn. Khi tôi mắc lỗi, cô không bao giờ nổi giận. Cô luôn giải thích chậm rãi và cho thêm bài tập sau giờ học.\n\nNhờ cô mà tôi bắt đầu thích tiếng Anh. Trước đó tôi sợ nói, nhưng cô giúp tôi tự tin hơn. Tôi rất biết ơn cô và đến giờ vẫn nhớ các bài học của cô.',
  },
  'education/q7': {
    en: 'I think a good teacher should be patient and friendly. This is because students feel safe to ask questions. Also, a good teacher should explain things clearly. For example, if the lesson is easy to understand, students will enjoy it more.',
    vi: 'Tôi nghĩ giáo viên giỏi nên kiên nhẫn và thân thiện, vì như vậy học sinh thấy an toàn khi đặt câu hỏi. Ngoài ra họ nên giải thích rõ ràng. Ví dụ, nếu bài dễ hiểu thì học sinh sẽ thích hơn.',
  },
  'education/q8': {
    en: 'I think technology is better because it makes learning more interesting. For example, students can watch videos or use apps to practise. However, traditional methods are still important, so I think teachers should use both.',
    vi: 'Tôi nghĩ công nghệ tốt hơn vì nó làm việc học thú vị hơn. Ví dụ học sinh có thể xem video hoặc dùng ứng dụng để luyện tập. Tuy nhiên phương pháp truyền thống vẫn quan trọng, nên giáo viên nên dùng cả hai.',
  },
  'education/q9': {
    en: 'I think schools should teach more **practical skills**. The reason is that many students finish school but cannot manage money or cook. As a result, they have problems when they live alone. Of course, knowledge is also important, but skills are more useful in daily life.',
    vi: 'Tôi nghĩ trường học nên dạy nhiều kỹ năng thực tế hơn. Lý do là nhiều học sinh tốt nghiệp mà không biết quản lý tiền hay nấu ăn. Kết quả là họ gặp khó khăn khi sống một mình. Dĩ nhiên kiến thức cũng quan trọng, nhưng kỹ năng hữu ích hơn trong đời sống.',
  },
  'education/q10': {
    en: 'I think there are two main reasons. First, some students feel too much **academic pressure**, so they get tired. Second, they may find the lessons boring. For example, if a student fails a test many times, he may feel he cannot do it and give up.',
    vi: 'Tôi nghĩ có hai lý do chính. Thứ nhất, một số học sinh chịu áp lực học tập quá lớn nên mệt mỏi. Thứ hai, các em thấy bài học nhàm chán. Ví dụ, nếu một bạn trượt nhiều lần, bạn ấy có thể nghĩ mình không làm được và bỏ cuộc.',
  },
  'education/q11': {
    en: 'I think more students will study online in the future. This is a great way to save time and money, and it helps people in small towns to join good courses. I also think teachers will use more apps, so lessons will be more interesting.',
    vi: 'Tôi nghĩ trong tương lai sẽ có nhiều học sinh học trực tuyến hơn. Đây là cách tiết kiệm thời gian và tiền bạc, và giúp người ở vùng nhỏ tham gia các khoá học tốt. Tôi cũng nghĩ giáo viên sẽ dùng nhiều ứng dụng hơn nên bài học thú vị hơn.',
  },

  // ── Topic 2: Work & Careers ──────────────────────────────────────────
  'work-careers/q1': {
    en: 'I would like to work in an office, maybe in marketing. I like the idea of creating ideas for products. Also, I think it is a good job because I can meet many people.',
    vi: 'Tôi muốn làm việc ở văn phòng, có thể là marketing. Tôi thích ý tưởng nghĩ ra các ý tưởng cho sản phẩm. Ngoài ra tôi nghĩ đây là công việc tốt vì tôi được gặp nhiều người.',
  },
  'work-careers/q2': {
    en: 'I prefer working as part of a team. This is because we can share ideas and help each other. For example, when I had a big project last year, my team helped me finish it on time.',
    vi: 'Tôi thích làm việc nhóm. Vì chúng tôi có thể chia sẻ ý tưởng và giúp đỡ nhau. Ví dụ, khi tôi có một dự án lớn năm ngoái, nhóm đã giúp tôi hoàn thành đúng hạn.',
  },
  'work-careers/q3': {
    en: 'For me, the most important thing is **job satisfaction**. I want a job that I enjoy. Salary is also important, but I think if I am not happy, I cannot work well for a long time.',
    vi: 'Với tôi, điều quan trọng nhất là sự hài lòng với công việc. Tôi muốn một công việc mình thích. Lương cũng quan trọng, nhưng nếu không vui thì tôi không thể làm tốt lâu dài.',
  },
  'work-careers/q4': {
    en: 'I think I would like to work for a large company. The reason is that it usually has good training and more chances to get promoted. Also, it feels more stable, so I will not worry too much about my job.',
    vi: 'Tôi nghĩ tôi muốn làm cho công ty lớn. Lý do là công ty lớn thường có đào tạo tốt và nhiều cơ hội thăng chức hơn. Ngoài ra nó ổn định hơn nên tôi đỡ lo về công việc.',
  },
  'work-careers/q5': {
    en: 'Yes, they have changed a lot. When I was a child, I wanted to be a doctor because I thought it was a respected job. But now I want to work in business, because I am more interested in it and it suits my personality.',
    vi: 'Có, chúng đã thay đổi nhiều. Hồi nhỏ tôi muốn làm bác sĩ vì nghĩ đó là nghề được tôn trọng. Nhưng giờ tôi muốn làm kinh doanh vì tôi hứng thú hơn và nó hợp với tính cách của tôi.',
  },
  'work-careers/q6': {
    en: "I would like to talk about a job as a travel guide.\n\nA travel guide takes tourists to famous places and tells them about the history and culture. They also need to help the group if there is a problem.\n\nI would love this job because I enjoy travelling and meeting new people. It also allows me to practise my English every day.\n\nI think it is a **rewarding career**, because people can have a good holiday thanks to me. That would make me feel very happy.",
    vi: 'Tôi muốn nói về công việc hướng dẫn viên du lịch.\n\nHướng dẫn viên đưa du khách tới những nơi nổi tiếng và kể về lịch sử, văn hoá. Họ cũng cần giúp cả đoàn khi có vấn đề.\n\nTôi sẽ rất thích công việc này vì tôi thích đi du lịch và gặp người mới. Nó cũng cho phép tôi luyện tiếng Anh mỗi ngày.\n\nTôi nghĩ đây là một nghề đáng giá, vì mọi người có kỳ nghỉ tốt nhờ tôi. Điều đó sẽ khiến tôi rất vui.',
  },
  'work-careers/q7': {
    en: 'I think hard work is the most important thing. Successful people usually do not give up easily. Also, they keep learning new skills. For example, my boss started as a normal worker, but she studied at night and became a manager.',
    vi: 'Tôi nghĩ chăm chỉ là quan trọng nhất. Người thành công thường không bỏ cuộc dễ dàng. Họ cũng liên tục học kỹ năng mới. Ví dụ, sếp của tôi bắt đầu là nhân viên bình thường, nhưng cô học buổi tối và trở thành quản lý.',
  },
  'work-careers/q8': {
    en: 'I think passion is more important. This is because if you love your job, you will work harder and feel happier. However, salary is also necessary, so it is good to find a job which has both.',
    vi: 'Tôi nghĩ đam mê quan trọng hơn. Vì nếu yêu công việc, bạn sẽ làm chăm chỉ hơn và vui hơn. Tuy nhiên lương cũng cần thiết, nên tốt nhất là tìm công việc có cả hai.',
  },
  'work-careers/q9': {
    en: 'I think employers can give workers a bonus or a small gift when they do a good job. Another way is to offer **career progression**, for example by giving them a better position. As a result, workers feel that their work is important.',
    vi: 'Tôi nghĩ nhà tuyển dụng có thể thưởng tiền hoặc quà nhỏ khi nhân viên làm tốt. Cách khác là tạo cơ hội thăng tiến, ví dụ cho họ vị trí tốt hơn. Kết quả là nhân viên cảm thấy công việc của mình quan trọng.',
  },
  'work-careers/q10': {
    en: 'There are a few reasons. Some people feel bored after working for many years, so they want something new. Others change jobs because they want a higher salary. For instance, my cousin left her bank job to become a teacher, because she wanted a more meaningful job.',
    vi: 'Có vài lý do. Một số người thấy chán sau nhiều năm làm việc nên muốn điều mới. Số khác đổi việc vì muốn lương cao hơn. Chẳng hạn, chị họ tôi bỏ việc ngân hàng để làm giáo viên vì chị muốn công việc ý nghĩa hơn.',
  },
  'work-careers/q11': {
    en: 'I think technology will change many jobs. Machines can do simple work, so some workers may lose their jobs. But it also creates new jobs, for example in computer and online business. So I think people need to keep learning new skills.',
    vi: 'Tôi nghĩ công nghệ sẽ thay đổi nhiều công việc. Máy móc làm được việc đơn giản nên một số người có thể mất việc. Nhưng nó cũng tạo ra việc mới, ví dụ trong máy tính và kinh doanh trực tuyến. Vì vậy tôi nghĩ mọi người cần liên tục học kỹ năng mới.',
  },
};
