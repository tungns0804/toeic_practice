import type { AnswerStrategy, SpeakingTopic } from './speaking.model';

/**
 * Sơ đồ "Cách phát triển câu trả lời": năm cách kéo dài một ý thành một câu trả lời
 * đầy đủ. Dùng được cho mọi chủ đề, nhất là Part 3.
 */
export const ANSWER_STRATEGIES: readonly AnswerStrategy[] = [
  {
    id: 'reason',
    name: { vi: 'Lý do', en: 'Reason' },
    structures: ['this is because …', 'because …', 'as …', 'since …', "that's because …", 'the reason is that …'],
    example: "I prefer public transport because it's cheaper and more convenient.",
  },
  {
    id: 'result',
    name: { vi: 'Kết quả', en: 'Result' },
    structures: ['as a result …', 'so …', 'therefore …', 'consequently …'],
    example: 'I missed the bus, so I had to take a taxi instead.',
  },
  {
    id: 'example',
    name: { vi: 'Ví dụ', en: 'Example' },
    structures: ['for example …', 'for instance …', 'I remembered that …', 'during …', 'used to …', 'back when …'],
    example: 'For example, I used to love reading books when I was a child.',
  },
  {
    id: 'emotion',
    name: { vi: 'Cảm xúc & quan điểm', en: 'Emotion & opinion' },
    structures: ['it makes me feel …', 'I love the idea of …', 'I find it to be …'],
    example:
      'I love the idea of traveling, because it gives me a chance to see new places and meet new people.',
  },
  {
    id: 'benefit',
    name: { vi: 'Đưa ra lợi ích', en: 'Giving benefits' },
    structures: ['this is a great way to …', 'it helps …', 'it allows me to …'],
    example: 'Using public transport is a great way to reduce pollution.',
  },
];

export const SPEAKING_TOPICS: readonly SpeakingTopic[] = [
  {
    id: 'education',
    number: 1,
    title: { vi: 'Giáo dục', en: 'Education' },
    phrases: [
      {
        id: 'formal-education',
        phrase: 'formal education',
        type: 'collocation',
        pos: 'noun',
        short: 'giáo dục chính quy',
        words: [
          { word: 'formal', pos: 'adj', vi: 'chính quy, chính thức' },
          { word: 'education', pos: 'noun', vi: 'giáo dục' },
        ],
        meaning: {
          vi: 'Việc học ở trường lớp, đại học theo một hệ thống có tổ chức.',
          en: 'School or university learning provided in an organised system.',
        },
        example:
          'While online courses are useful, I still believe [[formal education]] provides a structured environment for young people.',
        exampleVi:
          'Dù các khoá học trực tuyến rất hữu ích, tôi vẫn tin rằng giáo dục chính quy mang lại một môi trường có nề nếp cho người trẻ.',
      },
      {
        id: 'rote-learning',
        phrase: 'rote learning',
        type: 'collocation',
        pos: 'noun',
        short: 'học vẹt',
        words: [
          { word: 'rote', pos: 'noun', vi: 'sự học thuộc lòng máy móc' },
          { word: 'learning', pos: 'noun', vi: 'việc học' },
        ],
        meaning: {
          vi: 'Học vẹt: nhắc đi nhắc lại để thuộc lòng mà không thật sự hiểu.',
          en: 'Learning facts by repeating and memorising them without much understanding.',
        },
        example:
          "Our school system relies too much on [[rote learning]], which can limit students' creativity.",
        exampleVi:
          'Hệ thống trường học của chúng ta dựa quá nhiều vào lối học vẹt, điều này có thể kìm hãm sự sáng tạo của học sinh.',
      },
      {
        id: 'hands-on-experience',
        phrase: 'hands-on experience',
        type: 'collocation',
        pos: 'noun',
        short: 'kinh nghiệm thực tế',
        words: [
          { word: 'hands-on', pos: 'adj', vi: 'thực hành, trực tiếp làm' },
          { word: 'experience', pos: 'noun', vi: 'kinh nghiệm' },
        ],
        meaning: {
          vi: 'Kinh nghiệm thực tế có được nhờ trực tiếp bắt tay vào làm.',
          en: 'Practical knowledge gained by actually doing something.',
        },
        example: 'I chose a vocational course because I wanted to gain [[hands-on experience]].',
        exampleVi: 'Tôi chọn một khoá học nghề vì muốn có kinh nghiệm thực tế.',
      },
      {
        id: 'pass-with-flying-colors',
        phrase: 'pass with flying colors',
        type: 'idiom',
        pos: 'verb',
        short: 'thi đỗ với kết quả xuất sắc',
        words: [
          { word: 'pass', pos: 'verb', vi: 'thi đỗ, vượt qua' },
          { word: 'flying colors', pos: 'noun', vi: 'thành công rực rỡ' },
        ],
        meaning: {
          vi: 'Vượt qua kỳ thi một cách dễ dàng, với điểm số xuất sắc.',
          en: 'Pass an exam or test very easily and with an excellent score.',
        },
        example:
          'She studied consistently all year and [[passed her final exams with flying colors]].',
        exampleVi: 'Cô ấy học đều đặn cả năm và vượt qua kỳ thi cuối kỳ với điểm số xuất sắc.',
      },
      {
        id: 'higher-education',
        phrase: 'higher education',
        type: 'collocation',
        pos: 'noun',
        short: 'giáo dục đại học',
        words: [
          { word: 'higher', pos: 'adj', vi: 'cao hơn' },
          { word: 'education', pos: 'noun', vi: 'giáo dục' },
        ],
        meaning: {
          vi: 'Giáo dục bậc cao đẳng, đại học.',
          en: 'Education at college or university level.',
        },
        example:
          '[[Higher education]] can open up more career opportunities, although it can be expensive.',
        exampleVi: 'Học đại học có thể mở ra nhiều cơ hội nghề nghiệp hơn, dù chi phí có thể khá cao.',
      },
      {
        id: 'steep-learning-curve',
        phrase: 'a steep learning curve',
        type: 'phrase',
        pos: 'noun',
        short: 'giai đoạn đầu học rất vất vả',
        words: [
          { word: 'steep', pos: 'adj', vi: 'dốc, gắt' },
          { word: 'learning curve', pos: 'noun', vi: 'quá trình học hỏi' },
        ],
        meaning: {
          vi: 'Giai đoạn đầu học một thứ gì đó rất khó, phải tiếp thu nhiều trong thời gian ngắn.',
          en: 'A situation in which something is difficult to learn at first.',
        },
        example: 'Moving from high school to university was [[a steep learning curve]] for me.',
        exampleVi: 'Chuyển từ cấp ba lên đại học là một giai đoạn phải học hỏi rất vất vả đối với tôi.',
      },
      {
        id: 'academic-pressure',
        phrase: 'academic pressure',
        type: 'collocation',
        pos: 'noun',
        short: 'áp lực học tập',
        words: [
          { word: 'academic', pos: 'adj', vi: 'thuộc về học tập, học thuật' },
          { word: 'pressure', pos: 'noun', vi: 'áp lực' },
        ],
        meaning: {
          vi: 'Áp lực học tập do thi cử, điểm số, khối lượng bài vở hay kỳ vọng.',
          en: 'Stress caused by exams, grades, workload, or expectations.',
        },
        example: "Too much [[academic pressure]] can affect students' motivation and well-being.",
        exampleVi: 'Áp lực học tập quá lớn có thể ảnh hưởng tới động lực và sức khoẻ của học sinh.',
      },
      {
        id: 'develop-critical-thinking',
        phrase: 'develop critical thinking',
        type: 'collocation',
        pos: 'verb',
        short: 'phát triển tư duy phản biện',
        words: [
          { word: 'develop', pos: 'verb', vi: 'phát triển' },
          { word: 'critical', pos: 'adj', vi: 'phản biện' },
          { word: 'thinking', pos: 'noun', vi: 'tư duy, suy nghĩ' },
        ],
        meaning: {
          vi: 'Rèn tư duy phản biện: biết phân tích thông tin và tự đưa ra nhận định.',
          en: 'Learn to analyse information and form independent judgments.',
        },
        example:
          'Schools should help students [[develop critical thinking]] rather than simply memorise facts.',
        exampleVi: 'Trường học nên giúp học sinh rèn tư duy phản biện thay vì chỉ ghi nhớ kiến thức.',
      },
      {
        id: 'practical-skills',
        phrase: 'practical skills',
        type: 'collocation',
        pos: 'noun',
        short: 'kỹ năng thực tế',
        words: [
          { word: 'practical', pos: 'adj', vi: 'thực tế, thiết thực' },
          { word: 'skill', pos: 'noun', vi: 'kỹ năng' },
        ],
        meaning: {
          vi: 'Kỹ năng thực tế, dùng được cho công việc trong đời sống.',
          en: 'Skills that are useful for doing real-world tasks.',
        },
        example: 'I think schools should teach more [[practical skills]], such as managing money.',
        exampleVi: 'Tôi nghĩ trường học nên dạy nhiều kỹ năng thực tế hơn, chẳng hạn như quản lý tiền bạc.',
      },
      {
        id: 'keep-up-with-the-workload',
        phrase: 'keep up with the workload',
        type: 'phrase',
        pos: 'verb',
        short: 'theo kịp khối lượng bài vở / công việc',
        words: [
          { word: 'keep up with', pos: 'verb', vi: 'theo kịp' },
          { word: 'workload', pos: 'noun', vi: 'khối lượng công việc' },
        ],
        meaning: {
          vi: 'Theo kịp, hoàn thành được khối lượng bài vở hay công việc được giao.',
          en: 'Manage to complete the amount of study or work required.',
        },
        example: 'It was difficult to [[keep up with the workload]] during my first semester.',
        exampleVi: 'Trong học kỳ đầu tiên, tôi rất vất vả mới theo kịp khối lượng bài vở.',
      },
      {
        id: 'lifelong-learning',
        phrase: 'lifelong learning',
        type: 'collocation',
        pos: 'noun',
        short: 'học tập suốt đời',
        words: [
          { word: 'lifelong', pos: 'adj', vi: 'suốt đời' },
          { word: 'learning', pos: 'noun', vi: 'việc học' },
        ],
        meaning: {
          vi: 'Học tập suốt đời: tiếp tục học trong suốt cuộc đời.',
          en: 'The idea of continuing to learn throughout life.',
        },
        example:
          'In a fast-changing job market, [[lifelong learning]] is becoming increasingly important.',
        exampleVi: 'Trong một thị trường việc làm thay đổi nhanh, học tập suốt đời ngày càng quan trọng.',
      },
      {
        id: 'access-to-education',
        phrase: 'access to education',
        type: 'collocation',
        pos: 'noun',
        short: 'cơ hội tiếp cận giáo dục',
        words: [
          { word: 'access', pos: 'noun', vi: 'sự tiếp cận' },
          { word: 'education', pos: 'noun', vi: 'giáo dục' },
        ],
        meaning: {
          vi: 'Cơ hội, khả năng được tiếp cận giáo dục.',
          en: 'The opportunity or ability to receive education.',
        },
        example: 'Technology can improve [[access to education]] for people in remote areas.',
        exampleVi: 'Công nghệ có thể giúp người dân ở vùng sâu vùng xa tiếp cận giáo dục dễ dàng hơn.',
      },
    ],
    questions: [
      {
        id: 'q1',
        part: 1,
        number: 1,
        text: 'Do you enjoy studying or learning new things?',
        textVi: 'Bạn có thích học tập hay học những điều mới không?',
      },
      {
        id: 'q2',
        part: 1,
        number: 2,
        text: 'What was your favorite subject at school?',
        textVi: 'Hồi đi học, môn học yêu thích của bạn là gì?',
      },
      {
        id: 'q3',
        part: 1,
        number: 3,
        text: 'How do you usually study for an important test?',
        textVi: 'Bạn thường ôn thi thế nào cho một bài kiểm tra quan trọng?',
      },
      {
        id: 'q4',
        part: 1,
        number: 4,
        text: 'Do you prefer studying alone or with other people?',
        textVi: 'Bạn thích học một mình hay học cùng người khác?',
      },
      {
        id: 'q5',
        part: 1,
        number: 5,
        text: 'What would you like to learn in the future?',
        textVi: 'Trong tương lai bạn muốn học thêm điều gì?',
      },
      {
        id: 'q6',
        part: 2,
        number: 6,
        text: 'Describe a teacher who had a positive influence on you.',
        textVi: 'Hãy miêu tả một thầy cô đã có ảnh hưởng tích cực tới bạn.',
      },
      {
        id: 'q7',
        part: 3,
        number: 7,
        text: 'What are the main qualities of a good teacher?',
        textVi: 'Những phẩm chất chính của một giáo viên giỏi là gì?',
      },
      {
        id: 'q8',
        part: 3,
        number: 8,
        text: 'Do you think students learn better through technology or traditional methods?',
        textVi: 'Bạn nghĩ học sinh học tốt hơn nhờ công nghệ hay nhờ phương pháp truyền thống?',
      },
      {
        id: 'q9',
        part: 3,
        number: 9,
        text: 'Should schools focus more on practical skills or academic knowledge?',
        textVi: 'Trường học nên chú trọng kỹ năng thực tế hay kiến thức học thuật hơn?',
      },
      {
        id: 'q10',
        part: 3,
        number: 10,
        text: 'Why do some students lose motivation to study?',
        textVi: 'Vì sao một số học sinh mất động lực học tập?',
      },
      {
        id: 'q11',
        part: 3,
        number: 11,
        text: 'How might education change in the next 20 years?',
        textVi: 'Giáo dục có thể thay đổi thế nào trong 20 năm tới?',
      },
    ],
  },
  {
    id: 'work-careers',
    number: 2,
    title: { vi: 'Công việc & sự nghiệp', en: 'Work & Careers' },
    phrases: [
      {
        id: 'job-satisfaction',
        phrase: 'job satisfaction',
        type: 'collocation',
        pos: 'noun',
        short: 'sự hài lòng với công việc',
        words: [
          { word: 'job', pos: 'noun', vi: 'công việc' },
          { word: 'satisfaction', pos: 'noun', vi: 'sự hài lòng' },
        ],
        meaning: {
          vi: 'Sự hài lòng, cảm giác được thoả mãn với công việc của mình.',
          en: 'The feeling of being happy or fulfilled by your job.',
        },
        example: 'Salary matters, but [[job satisfaction]] is also important to me.',
        exampleVi: 'Lương thì quan trọng, nhưng sự hài lòng với công việc cũng quan trọng với tôi.',
      },
      {
        id: 'career-progression',
        phrase: 'career progression',
        type: 'collocation',
        pos: 'noun',
        short: 'sự thăng tiến trong sự nghiệp',
        words: [
          { word: 'career', pos: 'noun', vi: 'sự nghiệp' },
          { word: 'progression', pos: 'noun', vi: 'sự tiến lên, thăng tiến' },
        ],
        meaning: {
          vi: 'Sự thăng tiến: tiến lên những vị trí cao hơn trong sự nghiệp.',
          en: 'The process of moving to more advanced or senior positions.',
        },
        example: 'The company offers good opportunities for [[career progression]].',
        exampleVi: 'Công ty mang lại nhiều cơ hội thăng tiến tốt.',
      },
      {
        id: 'heavy-workload',
        phrase: 'a heavy workload',
        type: 'collocation',
        pos: 'noun',
        short: 'khối lượng công việc nặng',
        words: [
          { word: 'heavy', pos: 'adj', vi: 'nặng' },
          { word: 'workload', pos: 'noun', vi: 'khối lượng công việc' },
        ],
        meaning: {
          vi: 'Khối lượng công việc nặng, nhiều việc phải hoàn thành.',
          en: 'A large amount of work that has to be completed.',
        },
        example: 'I had [[a heavy workload]] last month, so I rarely had time to relax.',
        exampleVi: 'Tháng trước tôi có khối lượng công việc rất nặng nên hiếm khi có thời gian nghỉ ngơi.',
      },
      {
        id: 'work-life-balance',
        phrase: 'work-life balance',
        type: 'collocation',
        pos: 'noun',
        short: 'cân bằng công việc và cuộc sống',
        words: [
          { word: 'work', pos: 'noun', vi: 'công việc' },
          { word: 'life', pos: 'noun', vi: 'cuộc sống' },
          { word: 'balance', pos: 'noun', vi: 'sự cân bằng' },
        ],
        meaning: {
          vi: 'Sự cân bằng lành mạnh giữa công việc và đời sống cá nhân.',
          en: 'A healthy balance between employment and personal life.',
        },
        example: 'Flexible hours can help employees maintain a better [[work-life balance]].',
        exampleVi: 'Giờ làm linh hoạt có thể giúp nhân viên cân bằng công việc và cuộc sống tốt hơn.',
      },
      {
        id: 'meet-a-deadline',
        phrase: 'meet a deadline',
        type: 'collocation',
        pos: 'verb',
        short: 'kịp hạn chót',
        words: [
          { word: 'meet', pos: 'verb', vi: 'đáp ứng, kịp' },
          { word: 'deadline', pos: 'noun', vi: 'hạn chót' },
        ],
        meaning: {
          vi: 'Hoàn thành công việc đúng thời hạn.',
          en: 'Finish something by the required time.',
        },
        example: 'I usually plan ahead so that I can [[meet every deadline]].',
        exampleVi: 'Tôi thường lên kế hoạch trước để có thể kịp mọi thời hạn.',
      },
      {
        id: 'gain-valuable-experience',
        phrase: 'gain valuable experience',
        type: 'collocation',
        pos: 'verb',
        short: 'tích luỹ kinh nghiệm quý báu',
        words: [
          { word: 'gain', pos: 'verb', vi: 'đạt được, tích luỹ' },
          { word: 'valuable', pos: 'adj', vi: 'quý giá' },
          { word: 'experience', pos: 'noun', vi: 'kinh nghiệm' },
        ],
        meaning: {
          vi: 'Tích luỹ được kinh nghiệm, kỹ năng quý báu từ công việc.',
          en: 'Get useful knowledge and skills from work.',
        },
        example: 'Part-time jobs allow young people to [[gain valuable experience]].',
        exampleVi: 'Công việc bán thời gian giúp người trẻ tích luỹ được kinh nghiệm quý báu.',
      },
      {
        id: 'job-security',
        phrase: 'job security',
        type: 'collocation',
        pos: 'noun',
        short: 'sự ổn định công việc',
        words: [
          { word: 'job', pos: 'noun', vi: 'công việc' },
          { word: 'security', pos: 'noun', vi: 'sự an toàn, ổn định' },
        ],
        meaning: {
          vi: 'Sự ổn định của công việc: khả năng giữ được việc lâu dài.',
          en: 'The likelihood that a person will be able to keep their job.',
        },
        example: 'Many workers value [[job security]] more than a slightly higher salary.',
        exampleVi: 'Nhiều người lao động coi trọng sự ổn định công việc hơn một mức lương cao hơn chút ít.',
      },
      {
        id: 'take-on-responsibility',
        phrase: 'take on responsibility',
        type: 'phrase',
        pos: 'verb',
        short: 'đảm nhận trách nhiệm',
        words: [
          { word: 'take on', pos: 'verb', vi: 'đảm nhận, nhận làm' },
          { word: 'responsibility', pos: 'noun', vi: 'trách nhiệm' },
        ],
        meaning: {
          vi: 'Nhận lấy, gánh vác trách nhiệm cho một việc hay một vai trò.',
          en: 'Accept responsibility for a task or role.',
        },
        example: 'As I became more experienced, I was asked to [[take on more responsibility]].',
        exampleVi: 'Khi có thêm kinh nghiệm, tôi được giao đảm nhận nhiều trách nhiệm hơn.',
      },
      {
        id: 'rewarding-career',
        phrase: 'a rewarding career',
        type: 'collocation',
        pos: 'noun',
        short: 'sự nghiệp đáng giá, nhiều ý nghĩa',
        words: [
          { word: 'rewarding', pos: 'adj', vi: 'đáng làm, mang lại sự thoả mãn' },
          { word: 'career', pos: 'noun', vi: 'sự nghiệp' },
        ],
        meaning: {
          vi: 'Một sự nghiệp đáng giá, mang lại cảm giác thoả mãn và ý nghĩa.',
          en: 'A career that gives someone a strong sense of satisfaction or purpose.',
        },
        example: 'Teaching can be [[a rewarding career]] because you can see students improve.',
        exampleVi: 'Dạy học có thể là một nghề rất đáng giá vì bạn được thấy học trò tiến bộ.',
      },
      {
        id: 'work-remotely',
        phrase: 'work remotely',
        type: 'collocation',
        pos: 'verb',
        short: 'làm việc từ xa',
        words: [
          { word: 'work', pos: 'verb', vi: 'làm việc' },
          { word: 'remotely', pos: 'adv', vi: 'từ xa' },
        ],
        meaning: {
          vi: 'Làm việc từ xa: ở nhà hoặc nơi khác thay vì lên văn phòng.',
          en: 'Work from home or another location rather than an office.',
        },
        example: 'I like being able to [[work remotely]] because it saves commuting time.',
        exampleVi: 'Tôi thích được làm việc từ xa vì đỡ mất thời gian đi lại.',
      },
      {
        id: 'career-prospects',
        phrase: 'career prospects',
        type: 'collocation',
        pos: 'noun',
        short: 'triển vọng nghề nghiệp',
        words: [
          { word: 'career', pos: 'noun', vi: 'sự nghiệp' },
          { word: 'prospect', pos: 'noun', vi: 'triển vọng' },
        ],
        meaning: {
          vi: 'Triển vọng nghề nghiệp: những cơ hội mà một công việc có thể mang lại sau này.',
          en: 'The future opportunities a job or career is likely to provide.',
        },
        example: 'Young people often consider [[career prospects]] when choosing a degree.',
        exampleVi: 'Người trẻ thường cân nhắc triển vọng nghề nghiệp khi chọn ngành học.',
      },
      {
        id: 'burn-out',
        phrase: 'burn out',
        type: 'phrasalVerb',
        pos: 'verb',
        short: 'kiệt sức (vì làm việc quá sức)',
        words: [
          { word: 'burn out', pos: 'verb', vi: 'kiệt sức' },
        ],
        meaning: {
          vi: 'Kiệt sức vì làm việc căng thẳng trong thời gian dài.',
          en: 'Become extremely tired or stressed after prolonged work.',
        },
        example: 'If you work long hours every day, you may eventually [[burn out]].',
        exampleVi: 'Nếu ngày nào bạn cũng làm việc nhiều giờ liền, sớm muộn bạn cũng sẽ kiệt sức.',
      },
    ],
    questions: [
      {
        id: 'q1',
        part: 1,
        number: 1,
        text: 'What kind of work would you like to do in the future?',
        textVi: 'Trong tương lai bạn muốn làm công việc gì?',
      },
      {
        id: 'q2',
        part: 1,
        number: 2,
        text: 'Do you prefer working alone or as part of a team?',
        textVi: 'Bạn thích làm việc một mình hay làm việc nhóm?',
      },
      {
        id: 'q3',
        part: 1,
        number: 3,
        text: 'What is important to you when choosing a job?',
        textVi: 'Khi chọn việc, điều gì quan trọng với bạn?',
      },
      {
        id: 'q4',
        part: 1,
        number: 4,
        text: 'Would you like to work for a large company or a small company?',
        textVi: 'Bạn muốn làm cho một công ty lớn hay một công ty nhỏ?',
      },
      {
        id: 'q5',
        part: 1,
        number: 5,
        text: 'Have your career plans changed since you were younger?',
        textVi: 'Dự định nghề nghiệp của bạn có thay đổi so với hồi nhỏ không?',
      },
      {
        id: 'q6',
        part: 2,
        number: 6,
        text: 'Describe a job you would really like to have.',
        textVi: 'Hãy miêu tả một công việc bạn rất muốn làm.',
      },
      {
        id: 'q7',
        part: 3,
        number: 7,
        text: 'What makes someone successful in their career?',
        textVi: 'Điều gì giúp một người thành công trong sự nghiệp?',
      },
      {
        id: 'q8',
        part: 3,
        number: 8,
        text: 'Should people choose a career based on passion or salary?',
        textVi: 'Nên chọn nghề theo đam mê hay theo mức lương?',
      },
      {
        id: 'q9',
        part: 3,
        number: 9,
        text: 'How can employers help workers stay motivated?',
        textVi: 'Người sử dụng lao động có thể làm gì để nhân viên luôn có động lực?',
      },
      {
        id: 'q10',
        part: 3,
        number: 10,
        text: 'Why do some people change careers several times?',
        textVi: 'Vì sao một số người đổi nghề nhiều lần?',
      },
      {
        id: 'q11',
        part: 3,
        number: 11,
        text: 'How might technology affect jobs in the future?',
        textVi: 'Công nghệ có thể ảnh hưởng thế nào tới việc làm trong tương lai?',
      },
    ],
  },
];

export function findSpeakingTopic(id: string | null | undefined): SpeakingTopic | undefined {
  return SPEAKING_TOPICS.find((topic) => topic.id === id);
}
