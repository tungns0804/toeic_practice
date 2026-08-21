import { Routes } from '@angular/router';

import { practiceGuard, resultGuard } from './core/guards/session.guards';

/**
 * `title` ở đây là KHOÁ thông điệp, không phải chữ hiển thị.
 * `AppTitleStrategy` dịch khoá này rồi ghép với tên ứng dụng, và đặt lại mỗi khi
 * đổi ngôn ngữ.
 *
 * Ba khu nội dung có ba nhánh riêng chứ không gộp thành `/lesson/:id`: chúng khác
 * nhau về BẢN CHẤT nội dung (trang lý thuyết dài, bảng tra cứu, bài tập chuyên đề)
 * nên màn hình chi tiết của chúng không dùng chung được, và tách nhánh khiến đường
 * dẫn tự nói lên mình đang ở đâu.
 */
export const routes: Routes = [
  {
    // Trang chủ không đặt title để tab hiện đúng tên ứng dụng.
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'tenses',
    title: 'route.tense',
    loadComponent: () => import('./features/tense-list/tense-list').then((m) => m.TenseList),
  },
  {
    path: 'tenses/:id',
    title: 'route.tenseDetail',
    loadComponent: () => import('./features/tense-detail/tense-detail').then((m) => m.TenseDetail),
  },
  {
    path: 'vocabulary',
    title: 'route.vocabulary',
    loadComponent: () =>
      import('./features/vocabulary-list/vocabulary-list').then((m) => m.VocabularyList),
  },
  {
    path: 'vocabulary/:id',
    title: 'route.vocabularyDetail',
    loadComponent: () =>
      import('./features/vocabulary-detail/vocabulary-detail').then((m) => m.VocabularyDetail),
  },
  {
    path: 'exercise',
    title: 'route.exercise',
    loadComponent: () =>
      import('./features/exercise-list/exercise-list').then((m) => m.ExerciseList),
  },
  {
    path: 'exercise/:id',
    title: 'route.exerciseDetail',
    loadComponent: () =>
      import('./features/exercise-detail/exercise-detail').then((m) => m.ExerciseDetail),
  },
  {
    path: 'practice',
    title: 'route.practice',
    canActivate: [practiceGuard],
    loadComponent: () => import('./features/practice/practice').then((m) => m.Practice),
  },
  {
    path: 'result',
    title: 'route.result',
    canActivate: [resultGuard],
    loadComponent: () => import('./features/result/result').then((m) => m.Result),
  },
  { path: '**', redirectTo: '' },
];
