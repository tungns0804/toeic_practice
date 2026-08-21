#!/usr/bin/env node
/**
 * Sinh file JSON nội dung từ thư mục `data-source/`.
 *
 *   data-source/<ten-muc>/vocabulary.txt  ->  public/lessons/<id>.json
 *   data-source/<ten-muc>/tenses.json     ->  public/lessons/<id>.json
 *                                         ->  public/lessons/index.json
 *
 * Cách dùng:
 *   npm run generate            Sinh lại toàn bộ file JSON
 *   npm run generate:clean      Sinh lại, đồng thời xoá các file .json thừa
 *   npm run generate:check      Chỉ kiểm tra, không ghi file (dùng cho CI)
 *
 * Mỗi thư mục con của data-source/ là MỘT mục. Trong thư mục có thể đặt `meta.json`
 * để chỉ định id/tên hiển thị/thứ tự:
 *   { "id": "tu-vung-band-1", "name": "Band 1 · 300–450", "order": 201 }
 * Không có meta.json thì id = tên thư mục (đã slug hoá), tên = tên thư mục viết hoa đầu từ.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  countExamples,
  localized,
  parseTenses,
  parseVocabulary,
  slugify,
  titleFromFolder,
} from './lesson-core.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SOURCE_DIR = join(ROOT, 'data-source');
const OUTPUT_DIR = join(ROOT, 'public', 'lessons');
const INDEX_FILE = join(OUTPUT_DIR, 'index.json');

const args = new Set(process.argv.slice(2));
const CLEAN = args.has('--clean');
const CHECK_ONLY = args.has('--check');

// Mã màu ANSI, tự tắt khi output bị pipe vào file hoặc khi đặt biến môi trường NO_COLOR.
const USE_COLOR = process.stdout.isTTY === true && !process.env['NO_COLOR'];
const ESC = String.fromCharCode(27);
const ansi = (code) => (USE_COLOR ? `${ESC}[${code}m` : '');

const c = {
  reset: ansi(0),
  bold: ansi(1),
  dim: ansi(2),
  red: ansi(31),
  green: ansi(32),
  yellow: ansi(33),
  cyan: ansi(36),
};

function log(msg = '') {
  process.stdout.write(`${msg}\n`);
}

let failureCount = 0;

function fail(msg) {
  log(`${c.red}[LOI] ${msg}${c.reset}`);
  failureCount++;
  process.exitCode = 1;
}

/**
 * Loại nội dung được quyết định DUY NHẤT bởi tên file dữ liệu.
 *
 * Không đoán loại theo phần mở rộng hay theo nội dung: đoán là một cái bẫy im lặng
 * — một file đặt sai tên sẽ được đọc bằng bộ phân tích sai, và vì bộ phân tích nào
 * cũng "chịu đựng" được vài dòng lạ nên lỗi chỉ lộ ra rất muộn, dưới dạng nội dung
 * hiển thị sai chứ không phải một thông báo lỗi.
 */
const FILE_KINDS = [
  {
    kind: 'vocabulary',
    pattern: /^(?:vocabulary|vocab|tu-?vung)(?:[-_].+)?\.(?:txt|csv|tsv)$/i,
    accepted: 'vocabulary.txt, vocab.txt, tu-vung.txt',
  },
  {
    kind: 'tense',
    // Phải KHÔNG khớp `meta.json` — file đó cũng là .json và nằm cùng thư mục.
    pattern: /^(?:tenses?|thi|cac-?thi)(?:[-_].+)?\.json$/i,
    accepted: 'tenses.json, thi.json, cac-thi.json',
  },
];

const ACCEPTED_NAMES = FILE_KINDS.map((item) => item.accepted).join(' | ');

/** Đọc meta.json của một thư mục, trả về {} nếu không có / hỏng. */
function readMeta(folderPath, folderName) {
  const metaPath = join(folderPath, 'meta.json');
  if (!existsSync(metaPath)) return {};
  try {
    const parsed = JSON.parse(readFileSync(metaPath, 'utf8'));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    fail(`[${folderName}] meta.json không phải JSON hợp lệ: ${error.message}`);
    return {};
  }
}

/** Tìm file dữ liệu trong một thư mục và cho biết nó thuộc loại nào. */
function findDataFile(folderPath, folderName) {
  const entries = readdirSync(folderPath).filter((name) =>
    statSync(join(folderPath, name)).isFile(),
  );

  const matches = [];
  for (const name of entries) {
    if (name.toLowerCase() === 'meta.json') continue;
    const match = FILE_KINDS.find((item) => item.pattern.test(name));
    if (match) matches.push({ name, kind: match.kind });
  }

  if (matches.length === 0) {
    const others = entries.filter((name) => name.toLowerCase() !== 'meta.json');
    fail(
      `[${folderName}] không có file dữ liệu nào được nhận diện.\n` +
        `        Có trong thư mục: ${others.join(', ') || '(trống)'}\n` +
        `        Tên hợp lệ: ${ACCEPTED_NAMES}`,
    );
    return null;
  }

  if (matches.length > 1) {
    fail(
      `[${folderName}] có ${matches.length} file dữ liệu (${matches
        .map((item) => item.name)
        .join(', ')}). Mỗi thư mục chỉ được có một.`,
    );
    return null;
  }

  return matches[0];
}

/** Đọc một thư mục thành một mục hoàn chỉnh, hoặc null nếu có lỗi. */
function buildLesson(folderName) {
  const folderPath = join(SOURCE_DIR, folderName);
  const meta = readMeta(folderPath, folderName);
  const dataFile = findDataFile(folderPath, folderName);
  if (!dataFile) return null;

  const id = slugify(meta.id || folderName);
  if (!id) {
    fail(`[${folderName}] không suy ra được id hợp lệ`);
    return null;
  }

  // Tên và mô tả là chữ của GIAO DIỆN (hiện trên thẻ, trên tiêu đề trang), nên
  // chúng phải đổi theo ngôn ngữ đang chọn. Chưa khai thì lấy tên thư mục — lúc đó
  // hai ngôn ngữ giống nhau, và đó là điều đúng đắn: tên thư mục không dịch được.
  const name = localized(meta.name) ?? localized(titleFromFolder(folderName));
  const description = localized(meta.description);
  const order = typeof meta.order === 'number' ? meta.order : Number.MAX_SAFE_INTEGER;

  const rawText = readFileSync(join(folderPath, dataFile.name), 'utf8');

  if (dataFile.kind === 'vocabulary') {
    const { words, errors } = parseVocabulary(rawText);
    for (const error of errors) fail(`[${folderName}/${dataFile.name}] ${error}`);
    if (words.length === 0) return null;

    const lesson = {
      id,
      name,
      description: description ?? { vi: '', en: '' },
      kind: 'vocabulary',
      itemCount: words.length,
      words,
      tensePoints: [],
    };
    if (typeof meta.bandFrom === 'number') lesson.bandFrom = meta.bandFrom;
    if (typeof meta.bandTo === 'number') lesson.bandTo = meta.bandTo;
    return { lesson, order };
  }

  let parsedJson;
  try {
    parsedJson = JSON.parse(rawText);
  } catch (error) {
    fail(`[${folderName}/${dataFile.name}] không phải JSON hợp lệ: ${error.message}`);
    return null;
  }

  const { points, errors } = parseTenses(parsedJson);
  for (const error of errors) fail(`[${folderName}/${dataFile.name}] ${error}`);
  if (points.length === 0) return null;

  return {
    lesson: {
      id,
      name,
      description: description ?? { vi: '', en: '' },
      kind: 'tense',
      itemCount: points.length,
      words: [],
      tensePoints: points,
    },
    order,
  };
}

/** Dòng tóm tắt của một mục trong index.json. */
function indexEntryOf(lesson) {
  const entry = {
    id: lesson.id,
    name: lesson.name,
    description: lesson.description,
    kind: lesson.kind,
    itemCount: lesson.itemCount,
    file: `${lesson.id}.json`,
  };
  if (lesson.kind === 'tense') entry.exampleCount = countExamples(lesson.tensePoints);
  if (typeof lesson.bandFrom === 'number') entry.bandFrom = lesson.bandFrom;
  if (typeof lesson.bandTo === 'number') entry.bandTo = lesson.bandTo;
  return entry;
}

function main() {
  log(`${c.bold}Sinh nội dung từ data-source/${c.reset}`);
  log(`${c.dim}Nguồn : ${SOURCE_DIR}${c.reset}`);
  log(`${c.dim}Đích  : ${OUTPUT_DIR}${c.reset}`);
  if (CHECK_ONLY) log(`${c.yellow}Chế độ --check: không ghi file nào.${c.reset}`);
  log();

  if (!existsSync(SOURCE_DIR)) {
    fail(`không có thư mục data-source/ tại ${SOURCE_DIR}`);
    summarize('không sinh được gì');
    return;
  }

  const folders = readdirSync(SOURCE_DIR)
    .filter((name) => statSync(join(SOURCE_DIR, name)).isDirectory())
    .sort();

  if (folders.length === 0) {
    fail('data-source/ không có thư mục con nào');
    summarize('không sinh được gì');
    return;
  }

  const built = [];
  const seenIds = new Map();

  for (const folderName of folders) {
    const result = buildLesson(folderName);
    if (!result) continue;

    const previous = seenIds.get(result.lesson.id);
    if (previous) {
      fail(`[${folderName}] id "${result.lesson.id}" trùng với thư mục "${previous}"`);
      continue;
    }
    seenIds.set(result.lesson.id, folderName);
    built.push({ ...result, folderName });
  }

  // Sắp theo `order` trong meta.json; cùng order thì theo id để thứ tự luôn xác định.
  built.sort((a, b) => a.order - b.order || a.lesson.id.localeCompare(b.lesson.id));

  if (!CHECK_ONLY) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const { lesson, folderName } of built) {
    const unit = lesson.kind === 'vocabulary' ? 'từ' : 'thì';
    const extra =
      lesson.kind === 'tense' ? ` ${c.dim}(${countExamples(lesson.tensePoints)} câu ví dụ)${c.reset}` : '';
    log(
      `  ${c.green}OK${c.reset} ${folderName} ${c.dim}->${c.reset} ${lesson.id}.json ` +
        `${c.cyan}${lesson.itemCount} ${unit}${c.reset}${extra}`,
    );
    if (!CHECK_ONLY) {
      writeFileSync(join(OUTPUT_DIR, `${lesson.id}.json`), `${JSON.stringify(lesson, null, 2)}\n`, 'utf8');
    }
  }

  const index = {
    generatedAt: new Date().toISOString(),
    lessons: built.map(({ lesson }) => indexEntryOf(lesson)),
  };

  if (!CHECK_ONLY) {
    writeFileSync(INDEX_FILE, `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  }

  if (CLEAN && !CHECK_ONLY) {
    const keep = new Set([...built.map(({ lesson }) => `${lesson.id}.json`), 'index.json']);
    for (const name of readdirSync(OUTPUT_DIR)) {
      if (!name.endsWith('.json') || keep.has(name)) continue;
      rmSync(join(OUTPUT_DIR, name));
      log(`  ${c.yellow}XOA${c.reset} ${name} ${c.dim}(không còn nguồn tương ứng)${c.reset}`);
    }
  }

  const vocabCount = built.filter(({ lesson }) => lesson.kind === 'vocabulary').length;
  const tenseCount = built.filter(({ lesson }) => lesson.kind === 'tense').length;
  summarize(`${built.length} mục (${vocabCount} band từ vựng, ${tenseCount} nhóm thì)`);
}

/** Dòng tổng kết cuối cùng, luôn nói rõ có lỗi hay không. */
function summarize(headline) {
  log();
  if (failureCount === 0) {
    log(`${c.green}OK: ${headline}${c.reset}`);
  } else {
    log(`${c.red}CO ${failureCount} LOI o tren — ${headline}${c.reset}`);
    log(`${c.red}     Cac thu muc bi loi da bi bo qua, hay sua roi chay lai.${c.reset}`);
  }
}

main();
