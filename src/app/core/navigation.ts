import type { MessageKey } from './i18n/messages';
import type { IconName } from '../shared/icon';

/**
 * Menu chính: năm mục, mỗi mục một khu của app.
 *
 * Dựng theo khung của dự án minano_nihongo (thanh bên trên máy tính, thanh đáy trên
 * điện thoại, breadcrumb trên thanh trên cùng). Ở đây mỗi nhóm chỉ có MỘT trang
 * danh sách, nên không có hàng tab con như bên đó.
 *
 * Trang Hôm nay chiếm "/" — trước đây là trang chủ giới thiệu ba khu.
 */

export type NavGroupId = 'today' | 'grammar' | 'tenses' | 'vocabulary' | 'exercise';

export interface NavGroup {
  readonly id: NavGroupId;
  readonly path: string;
  readonly labelKey: MessageKey;
  readonly icon: IconName;
}

export const NAV_GROUPS: readonly NavGroup[] = [
  { id: 'today', path: '/', labelKey: 'app.nav.today', icon: 'calendar' },
  { id: 'grammar', path: '/grammar', labelKey: 'app.nav.grammar', icon: 'cap' },
  { id: 'tenses', path: '/tenses', labelKey: 'app.nav.tense', icon: 'clock' },
  { id: 'vocabulary', path: '/vocabulary', labelKey: 'app.nav.vocabulary', icon: 'book' },
  { id: 'exercise', path: '/exercise', labelKey: 'app.nav.exercise', icon: 'clipboard' },
];

/** Đường dẫn trần của một URL: bỏ query, fragment và tham số ma trận. */
export function pathOf(url: string): string {
  const path = url.split(/[?#;]/)[0];
  return path.length > 1 ? path.replace(/\/+$/, '') : '/';
}

/**
 * Nhóm của một URL, tính cả trang chi tiết nằm dưới nó (/grammar/:id thuộc Ngữ
 * pháp). null ở màn hình đang luyện tập và kết quả: ở đó menu đáy trên điện thoại
 * ẩn đi để người học tập trung và bàn phím ảo không đẩy nó lên che câu hỏi.
 */
export function groupOf(url: string): NavGroup | null {
  const path = pathOf(url);
  if (path === '/') return NAV_GROUPS[0];
  return (
    NAV_GROUPS.find(
      (group) => group.path !== '/' && (path === group.path || path.startsWith(`${group.path}/`)),
    ) ?? null
  );
}
