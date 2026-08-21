import { Injectable, computed, signal } from '@angular/core';

import { readJson, writeJson } from './local-storage';

const STORAGE_KEY = 'toeic-practice:favorites';

/** { [setId]: danh sách id mục } — setId là id band từ vựng, nhóm thì hoặc bài tập. */
type FavoriteMap = Record<string, string[]>;

/**
 * Danh sách "chưa nhớ" của từng phần.
 *
 * Đây là thứ DUY NHẤT được lưu lại giữa các phiên — kết quả luyện tập thì không
 * lưu, đúng theo nguyên tắc "mỗi lần luyện tập là một lần mới".
 *
 * Khoá ngoài (`setId`) dùng chung cho cả ba khu: band từ vựng (`vocab-band-2`),
 * nhóm thì (`thi-hien-tai`) và bài tập (`the-bi-dong`). Ba khu không bao giờ
 * trùng id nên không cần thêm một tầng phân loại nữa.
 */
@Injectable({ providedIn: 'root' })
export class FavoriteStore {
  private readonly map = signal<FavoriteMap>(sanitize(readJson<FavoriteMap>(STORAGE_KEY, {})));

  /** Tra cứu nhanh theo cặp setId/itemId. */
  private readonly lookup = computed(() => {
    const result = new Map<string, Set<string>>();
    for (const [setId, itemIds] of Object.entries(this.map())) {
      result.set(setId, new Set(itemIds));
    }
    return result;
  });

  /** Đếm số mục ★ của từng phần, dùng cho thẻ ngoài màn hình danh sách. */
  readonly counts = computed(() => {
    const result: Record<string, number> = {};
    for (const [setId, itemIds] of Object.entries(this.map())) {
      result[setId] = itemIds.length;
    }
    return result;
  });

  /** Tổng số mục ★ của toàn ứng dụng, dùng cho khối tóm tắt ngoài trang chủ. */
  readonly totalCount = computed(() =>
    Object.values(this.counts()).reduce((sum, count) => sum + count, 0),
  );

  isFavorite(setId: string, itemId: string): boolean {
    return this.lookup().get(setId)?.has(itemId) ?? false;
  }

  idsOf(setId: string): string[] {
    return this.map()[setId] ?? [];
  }

  countOf(setId: string): number {
    return this.idsOf(setId).length;
  }

  toggle(setId: string, itemId: string): void {
    if (this.isFavorite(setId, itemId)) {
      this.remove(setId, [itemId]);
    } else {
      this.add(setId, [itemId]);
    }
  }

  add(setId: string, itemIds: readonly string[]): void {
    if (itemIds.length === 0) return;
    this.update((current) => {
      const merged = new Set([...(current[setId] ?? []), ...itemIds]);
      return { ...current, [setId]: [...merged] };
    });
  }

  remove(setId: string, itemIds: readonly string[]): void {
    if (itemIds.length === 0) return;
    this.update((current) => {
      const removing = new Set(itemIds);
      const remaining = (current[setId] ?? []).filter((id) => !removing.has(id));
      const next = { ...current };
      if (remaining.length > 0) {
        next[setId] = remaining;
      } else {
        delete next[setId];
      }
      return next;
    });
  }

  clearSet(setId: string): void {
    this.update((current) => {
      const next = { ...current };
      delete next[setId];
      return next;
    });
  }

  private update(mutate: (current: FavoriteMap) => FavoriteMap): void {
    const next = mutate(this.map());
    this.map.set(next);
    writeJson(STORAGE_KEY, next);
  }
}

/** Bảo vệ trước dữ liệu localStorage hỏng hoặc do phiên bản cũ ghi ra. */
function sanitize(raw: unknown): FavoriteMap {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
  const result: FavoriteMap = {};
  for (const [setId, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!Array.isArray(value)) continue;
    const ids = value.filter((item): item is string => typeof item === 'string' && item.length > 0);
    if (ids.length > 0) result[setId] = [...new Set(ids)];
  }
  return result;
}
