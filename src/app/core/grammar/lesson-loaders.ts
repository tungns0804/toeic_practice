/**
 * Bảng nạp nội dung từng bài: mỗi bài một chunk riêng, chỉ tải khi người học mở bài đó.
 *
 * Phải là một bảng viết tường minh chứ không ghép đường dẫn lúc chạy: trình build
 * chỉ tách được chunk cho những `import()` có đường dẫn cố định. Thêm bài mới vào
 * mục lục thì thêm một dòng ở đây — `npm run verify:grammar` báo lỗi nếu hai nơi lệch nhau.
 */

import type { GrammarLessonContent } from './grammar.model';

type LessonModule = { LESSON: GrammarLessonContent };

export const GRAMMAR_LESSON_LOADERS: Readonly<Record<string, () => Promise<LessonModule>>> = {
  // Word Forms
  'word-forms-suffix': () => import('./lessons/word-forms-suffix'),
  'word-forms-position': () => import('./lessons/word-forms-position'),
  'word-forms-confused': () => import('./lessons/word-forms-confused'),
  // Nouns
  'nouns-countable': () => import('./lessons/nouns-countable'),
  'nouns-compound-person': () => import('./lessons/nouns-compound-person'),
  // Subject-Verb Agreement
  'sva-basics': () => import('./lessons/sva-basics'),
  'sva-intervening': () => import('./lessons/sva-intervening'),
  'sva-quantifiers': () => import('./lessons/sva-quantifiers'),
  'sva-compound-subjects': () => import('./lessons/sva-compound-subjects'),
  'sva-special-nouns': () => import('./lessons/sva-special-nouns'),
  'sva-inversion-there': () => import('./lessons/sva-inversion-there'),
  // Verb Tenses
  'tenses-present': () => import('./lessons/tenses-present'),
  'tenses-present-perfect': () => import('./lessons/tenses-present-perfect'),
  'tenses-past': () => import('./lessons/tenses-past'),
  'tenses-past-perfect': () => import('./lessons/tenses-past-perfect'),
  'tenses-future': () => import('./lessons/tenses-future'),
  'tenses-future-perfect': () => import('./lessons/tenses-future-perfect'),
  'tenses-time-clauses': () => import('./lessons/tenses-time-clauses'),
  'tenses-signals': () => import('./lessons/tenses-signals'),
  // Pronoun and Pronoun References
  'pronouns-case': () => import('./lessons/pronouns-case'),
  'pronouns-reflexive': () => import('./lessons/pronouns-reflexive'),
  'pronouns-reference': () => import('./lessons/pronouns-reference'),
  // The Passive Voice
  'passive-forms': () => import('./lessons/passive-forms'),
  'passive-active-choice': () => import('./lessons/passive-active-choice'),
  // Prepositions and Prepositional Phrases
  'prepositions-time-place': () => import('./lessons/prepositions-time-place'),
  'prepositions-phrases': () => import('./lessons/prepositions-phrases'),
  // Conjunctions and Prepositions
  'conjunctions-coordinating': () => import('./lessons/conjunctions-coordinating'),
  'conjunctions-vs-prepositions': () => import('./lessons/conjunctions-vs-prepositions'),
  // Gerunds and Infinitives
  'verbs-gerund-infinitive': () => import('./lessons/verbs-gerund-infinitive'),
  'gerunds-after-prepositions': () => import('./lessons/gerunds-after-prepositions'),
  'infinitives-purpose': () => import('./lessons/infinitives-purpose'),
  // Articles
  'articles-a-an-the': () => import('./lessons/articles-a-an-the'),
  'articles-zero': () => import('./lessons/articles-zero'),
  // Comparisons
  'comparisons-comparative-superlative': () => import('./lessons/comparisons-comparative-superlative'),
  'comparisons-equality': () => import('./lessons/comparisons-equality'),
  // Adjective Clauses
  'relative-pronouns': () => import('./lessons/relative-pronouns'),
  'relative-clauses-defining': () => import('./lessons/relative-clauses-defining'),
  'relative-clauses-reduced': () => import('./lessons/relative-clauses-reduced'),
  // Adverb Clauses
  'adverb-clauses-time': () => import('./lessons/adverb-clauses-time'),
  'adverb-clauses-reason-result': () => import('./lessons/adverb-clauses-reason-result'),
  'adverb-clauses-contrast': () => import('./lessons/adverb-clauses-contrast'),
  'adverb-clauses-condition': () => import('./lessons/adverb-clauses-condition'),
  // Modifiers and Dangling Participles
  'participle-adjectives': () => import('./lessons/participle-adjectives'),
  'participle-phrases': () => import('./lessons/participle-phrases'),
  'dangling-modifiers': () => import('./lessons/dangling-modifiers'),
  // Noun Clauses
  'noun-clauses-that': () => import('./lessons/noun-clauses-that'),
  'noun-clauses-wh-whether': () => import('./lessons/noun-clauses-wh-whether'),
  'noun-clauses-subjunctive': () => import('./lessons/noun-clauses-subjunctive'),
  // Parallel Structures
  'parallel-coordinators': () => import('./lessons/parallel-coordinators'),
  'parallel-correlatives': () => import('./lessons/parallel-correlatives'),
  'parallel-consistency': () => import('./lessons/parallel-consistency'),
  // Modals and Modal-Like Verbs
  'modals-core': () => import('./lessons/modals-core'),
  'modals-semi': () => import('./lessons/modals-semi'),
  'modals-perfect': () => import('./lessons/modals-perfect'),
  // Conditional Sentences and Wishes
  'conditionals-zero-first': () => import('./lessons/conditionals-zero-first'),
  'conditionals-second': () => import('./lessons/conditionals-second'),
  'conditionals-third-mixed': () => import('./lessons/conditionals-third-mixed'),
  'conditionals-inversion': () => import('./lessons/conditionals-inversion'),
  'wishes': () => import('./lessons/wishes'),
};
