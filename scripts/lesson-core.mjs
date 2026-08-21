/**
 * Nhân xử lý dữ liệu dùng chung cho các script trong `scripts/`.
 *
 * Tách riêng khỏi `generate-lessons.mjs` để `verify-data.mjs` kiểm tra được đúng
 * cái mà bản build thật sẽ sinh ra, thay vì tự viết lại một bản phân tích thứ hai
 * rồi hai bản trôi dạt khỏi nhau.
 */

/** Từ loại viết tắt trong file .txt → giá trị dùng trong ứng dụng. */
const POS_ALIASES = {
  n: 'noun',
  noun: 'noun',
  v: 'verb',
  verb: 'verb',
  adj: 'adjective',
  adjective: 'adjective',
  adv: 'adverb',
  adverb: 'adverb',
  prep: 'preposition',
  preposition: 'preposition',
  conj: 'conjunction',
  conjunction: 'conjunction',
  // Năm loại nhiều từ. Mã cũ `phr` CỐ Ý không còn được chấp nhận: nó từng gộp cả
  // năm loại này làm một, và để nó sống tiếp thì mọi mục thêm mới sau này lại
  // trôi về cái rọ chung đó. Bỏ hẳn thì file nào còn `phr` sẽ báo lỗi ngay.
  pv: 'phrasalVerb',
  'phrasal-verb': 'phrasalVerb',
  vp: 'verbPrep',
  'verb-prep': 'verbPrep',
  pp: 'prepPhrase',
  'prep-phrase': 'prepPhrase',
  cn: 'compoundNoun',
  'compound-noun': 'compoundNoun',
  coll: 'collocation',
  collocation: 'collocation',
};

export const POS_CODES = Object.keys(POS_ALIASES);

/**
 * Băm nội dung thành một id ngắn, ổn định (FNV-1a 32 bit, in ra hệ 36).
 *
 * "Ổn định" ở đây là điều kiện bắt buộc chứ không phải tiện nghi: id là khoá lưu
 * dấu ★ trong localStorage của người học. Sinh lại dữ liệu mà id đổi thì toàn bộ
 * danh sách "chưa nhớ" của họ trỏ vào hư không.
 */
export function hashId(prefix, content) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < content.length; i++) {
    hash ^= content.charCodeAt(i);
    // Nhân theo FNV bằng phép cộng dịch bit để không tràn khỏi số nguyên 32 bit.
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    hash >>>= 0;
  }
  return `${prefix}-${hash.toString(36)}`;
}

/** "Tu Vung Band 1" -> "tu-vung-band-1" */
export function slugify(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** "tu-vung-band-1" -> "Tu Vung Band 1" (dùng khi thư mục không có meta.json). */
export function titleFromFolder(folder) {
  return folder
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Phân tích file từ vựng.
 *
 * Mỗi dòng: TỪ | PHIÊN ÂM | TỪ LOẠI | NGHĨA | VÍ DỤ | NGHĨA VÍ DỤ
 * Dòng trống và dòng bắt đầu bằng # bị bỏ qua.
 *
 * Dấu | chứ không phải dấu phẩy: nghĩa tiếng Việt và câu ví dụ đều đầy dấu phẩy,
 * tách bằng dấu phẩy thì gần như dòng nào cũng vỡ.
 *
 * @returns {{ words: object[], errors: string[] }}
 */
export function parseVocabulary(text) {
  const words = [];
  const errors = [];
  const seenIds = new Map();

  const lines = String(text).split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const parts = line.split('|').map((part) => part.trim());
    if (parts.length < 4) {
      errors.push(`dòng ${i + 1}: cần ít nhất 4 cột (TỪ | PHIÊN ÂM | TỪ LOẠI | NGHĨA)`);
      continue;
    }

    const [word, ipa, posRaw, meaning, example = '', exampleVi = ''] = parts;
    if (!word) {
      errors.push(`dòng ${i + 1}: thiếu từ tiếng Anh`);
      continue;
    }
    if (!meaning) {
      errors.push(`dòng ${i + 1}: thiếu nghĩa tiếng Việt của "${word}"`);
      continue;
    }

    const pos = POS_ALIASES[posRaw.toLowerCase()];
    if (!pos) {
      errors.push(
        `dòng ${i + 1}: từ loại "${posRaw}" không hợp lệ (dùng: ${POS_CODES.join(', ')})`,
      );
      continue;
    }

    // Băm từ RIÊNG mặt chữ của từ: sửa nghĩa hay sửa câu ví dụ thì id giữ nguyên,
    // dấu ★ của từ đó không mất.
    const id = hashId('w', word.toLowerCase());
    const previous = seenIds.get(id);
    if (previous) {
      errors.push(`dòng ${i + 1}: từ "${word}" trùng với dòng ${previous}`);
      continue;
    }
    seenIds.set(id, i + 1);

    words.push({ id, word, ipa, pos, meaning, example, exampleVi });
  }

  if (words.length === 0 && errors.length === 0) {
    errors.push('file không có dòng dữ liệu nào');
  }

  return { words, errors };
}

/** Chuỗi rỗng khi giá trị không phải chuỗi — dùng cho các trường tuỳ chọn. */
function text(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Cặp chữ hai ngôn ngữ.
 *
 * Nhận CẢ hai dạng viết:
 *  - `{ "vi": "...", "en": "..." }` — dạng đầy đủ
 *  - `"..."` — một chuỗi trơn, dùng chung cho cả hai ngôn ngữ
 *
 * Dạng chuỗi trơn có mặt để thêm nội dung mới không bị chặn lại chỉ vì chưa kịp
 * dịch: viết một vế trước, bổ sung vế kia sau, mà không phải sửa cấu trúc file.
 * Thiếu một vế trong dạng đầy đủ cũng được bù bằng vế còn lại, vì một ô trống trên
 * giao diện thì tệ hơn hẳn một dòng chưa dịch.
 *
 * Thiếu hẳn cả hai vế thì trả null.
 */
export function localized(value) {
  if (typeof value === 'string') {
    const single = value.trim();
    return single ? { vi: single, en: single } : null;
  }
  if (!value || typeof value !== 'object') return null;
  const vi = text(value.vi);
  const en = text(value.en);
  if (!vi && !en) return null;
  return { vi: vi || en, en: en || vi };
}

function localizedList(value, label, errors) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    errors.push(`${label} phải là một mảng`);
    return [];
  }
  return value.flatMap((item, index) => {
    const parsed = localized(item);
    if (!parsed) {
      errors.push(`${label}[${index}] thiếu cả hai vế vi/en`);
      return [];
    }
    return [parsed];
  });
}

function textList(value, label, errors) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    errors.push(`${label} phải là một mảng`);
    return [];
  }
  return value.filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim());
}

/**
 * Phân tích file các thì (`tenses.json`).
 *
 * Id của từng câu ví dụ được SINH RA ở đây từ chính câu tiếng Anh, không viết tay
 * trong file nguồn: viết tay thì sớm muộn cũng có hai câu trùng id, mà hậu quả
 * (bấm ★ ở câu này sáng luôn ở câu kia) thì rất khó lần ra.
 *
 * @returns {{ points: object[], errors: string[] }}
 */
export function parseTenses(raw) {
  const errors = [];
  const points = [];

  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.points)) {
    return { points: [], errors: ['file phải là một object có mảng "points"'] };
  }

  const seenPointIds = new Set();
  const seenExampleIds = new Map();

  raw.points.forEach((point, pointIndex) => {
    const label = `points[${pointIndex}]`;
    if (!point || typeof point !== 'object') {
      errors.push(`${label} không phải object`);
      return;
    }

    const id = text(point.id);
    if (!id) {
      errors.push(`${label} thiếu "id"`);
      return;
    }
    if (seenPointIds.has(id)) {
      errors.push(`${label} có id "${id}" trùng với một thì khác`);
      return;
    }

    const name = localized(point.name);
    if (!name) {
      errors.push(`${label} ("${id}") thiếu "name" hai ngôn ngữ`);
      return;
    }

    if (!Array.isArray(point.examples) || point.examples.length === 0) {
      errors.push(`${label} ("${id}") không có câu ví dụ nào`);
      return;
    }

    const examples = [];
    point.examples.forEach((example, exampleIndex) => {
      const exampleLabel = `${label}.examples[${exampleIndex}]`;
      if (!example || typeof example !== 'object') {
        errors.push(`${exampleLabel} không phải object`);
        return;
      }

      const english = text(example.english);
      const vietnamese = text(example.vietnamese);
      if (!english || !vietnamese) {
        errors.push(`${exampleLabel} thiếu "english" hoặc "vietnamese"`);
        return;
      }

      const exampleId = hashId('s', english.toLowerCase());
      const previous = seenExampleIds.get(exampleId);
      if (previous) {
        errors.push(`${exampleLabel} trùng câu tiếng Anh với ${previous}`);
        return;
      }
      seenExampleIds.set(exampleId, exampleLabel);

      const conjugated = text(example.conjugated);
      // Dạng "chia động từ" khoét đúng cụm này ra khỏi câu, nên nó BẮT BUỘC phải
      // có mặt nguyên văn trong câu. Sai một chữ là câu hỏi đó lặng lẽ biến mất
      // khỏi phiên luyện mà không ai biết vì sao.
      if (conjugated && !english.toLowerCase().includes(conjugated.toLowerCase())) {
        errors.push(
          `${exampleLabel}: "conjugated" = "${conjugated}" không xuất hiện trong câu tiếng Anh`,
        );
      }

      examples.push({
        id: exampleId,
        english,
        vietnamese,
        verb: text(example.verb),
        conjugated,
        // Ghi chú là lời GIẢI THÍCH của ứng dụng chứ không phải ngữ liệu, nên nó
        // phải đổi theo ngôn ngữ giao diện — khác với `vietnamese`, vốn chính là
        // thứ người học đang tập dịch và luôn giữ nguyên tiếng Việt.
        note: localized(example.note),
      });
    });

    if (examples.length === 0) {
      errors.push(`${label} ("${id}") không còn câu ví dụ hợp lệ nào`);
      return;
    }

    seenPointIds.add(id);
    points.push({
      id,
      name,
      summary: localized(point.summary) ?? { vi: '', en: '' },
      affirmative: text(point.affirmative),
      negative: text(point.negative),
      question: text(point.question),
      usages: localizedList(point.usages, `${label}.usages`, errors),
      signals: textList(point.signals, `${label}.signals`, errors),
      notes: localizedList(point.notes, `${label}.notes`, errors),
      examples,
    });
  });

  if (points.length === 0 && errors.length === 0) {
    errors.push('file không có thì nào');
  }

  return { points, errors };
}

/** Tổng số câu ví dụ của một nhóm thì. */
export function countExamples(points) {
  return points.reduce((sum, point) => sum + point.examples.length, 0);
}
