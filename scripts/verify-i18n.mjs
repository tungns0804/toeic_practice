#!/usr/bin/env node
/**
 * Kiểm tra bảng thông điệp (`src/app/core/i18n/messages.ts`).
 *
 * Ba lỗi mà TypeScript không bắt được:
 *  1. Khoá thiếu bản dịch một ngôn ngữ, hoặc bản dịch rỗng → giao diện hiện ô trống.
 *  2. Tham số `{ten}` có ở bản này mà không có ở bản kia → đổi ngôn ngữ là mất con số.
 *  3. Khoá khai rồi nhưng không nơi nào dùng → rác tích lại, và người sửa sau không
 *     dám xoá vì không chắc nó còn được dùng ở đâu đó không.
 *
 * Chạy: npm run verify:i18n
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const MESSAGES_FILE = join(ROOT, 'src', 'app', 'core', 'i18n', 'messages.ts');
const SRC_DIR = join(ROOT, 'src');

const USE_COLOR = process.stdout.isTTY === true && !process.env['NO_COLOR'];
const ESC = String.fromCharCode(27);
const ansi = (code) => (USE_COLOR ? `${ESC}[${code}m` : '');
const c = { reset: ansi(0), bold: ansi(1), dim: ansi(2), red: ansi(31), green: ansi(32), yellow: ansi(33) };

const log = (msg = '') => process.stdout.write(`${msg}\n`);

let errors = 0;
let warnings = 0;

function fail(msg) {
  log(`${c.red}[LOI] ${msg}${c.reset}`);
  errors++;
  process.exitCode = 1;
}

function warn(msg) {
  log(`${c.yellow}[CANH BAO] ${msg}${c.reset}`);
  warnings++;
}

/**
 * Đọc các mục của bảng thông điệp bằng biểu thức chính quy chứ không import file.
 *
 * Import được thì đẹp hơn, nhưng messages.ts là file .ts của Angular; chạy nó bằng
 * node đòi thêm bước biên dịch chỉ để làm một việc kiểm tra. Cấu trúc của bảng lại
 * rất đều tay (mỗi mục một dòng `'khoa': { vi: '...', en: '...' }`) nên đọc bằng
 * regex là đủ tin cậy — và nếu ai đó viết lệch định dạng, số khoá đọc ra sẽ tụt
 * xuống thấy rõ chứ không âm thầm sai.
 */
function readMessages() {
  const source = readFileSync(MESSAGES_FILE, 'utf8');
  const entries = new Map();

  // Khớp cả mục viết trên một dòng lẫn mục xuống dòng nhiều lần.
  const pattern = /'([\w.\-]+)':\s*\{\s*vi:\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2,\s*en:\s*(['"`])((?:\\.|(?!\4)[\s\S])*)\4,?\s*\}/g;

  let match;
  while ((match = pattern.exec(source)) !== null) {
    entries.set(match[1], { vi: match[3], en: match[5] });
  }
  return entries;
}

/** Mọi tên tham số `{ten}` xuất hiện trong một chuỗi. */
function paramsOf(text) {
  return new Set([...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]));
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path, files);
    } else if (['.ts', '.html'].includes(extname(name))) {
      files.push(path);
    }
  }
  return files;
}

const messages = readMessages();
log(`${c.bold}Bảng thông điệp${c.reset}`);
log(`  ${c.dim}Đọc được ${messages.size} khoá từ messages.ts${c.reset}`);

if (messages.size === 0) {
  fail('không đọc được khoá nào — có thể định dạng của messages.ts đã đổi');
}

// ── 1 & 2: bản dịch rỗng và tham số lệch nhau ──────────────────────────────
for (const [key, entry] of messages) {
  if (!entry.vi.trim()) fail(`khoá "${key}" thiếu bản dịch tiếng Việt`);
  if (!entry.en.trim()) fail(`khoá "${key}" thiếu bản dịch tiếng Anh`);

  const viParams = paramsOf(entry.vi);
  const enParams = paramsOf(entry.en);
  const onlyVi = [...viParams].filter((name) => !enParams.has(name));
  const onlyEn = [...enParams].filter((name) => !viParams.has(name));
  if (onlyVi.length > 0 || onlyEn.length > 0) {
    fail(
      `khoá "${key}" lệch tham số — chỉ có ở vi: [${onlyVi.join(', ')}], ` +
        `chỉ có ở en: [${onlyEn.join(', ')}]`,
    );
  }
}

// ── 3: khoá không nơi nào dùng, và khoá dùng mà chưa khai ──────────────────
const sourceFiles = walk(SRC_DIR).filter((path) => path !== MESSAGES_FILE);
const usedKeys = new Set();
const referenced = new Map();

/** Đầu khoá hợp lệ — dùng để đoán "chuỗi này ĐỊNH là một khoá nhưng gõ sai". */
const KEY_PREFIXES =
  /^(?:app|home|common|theme|route|tense|vocab|pos|exercise|passive|direction|tenseMode|passiveMode|setup|scope|favorite|practice|result|error)\./;

/** Ràng buộc thuộc tính của Angular: [key]="bieuThuc". */
const ANGULAR_BINDING = /\[[\w.$-]+\]="[^"]*"/g;

function collect(content, path, pattern) {
  for (const match of content.matchAll(pattern)) {
    const candidate = match[1];
    if (messages.has(candidate)) {
      usedKeys.add(candidate);
    } else if (KEY_PREFIXES.test(candidate) && !referenced.has(candidate)) {
      // Trông đúng như một khoá thông điệp nhưng không có trong bảng.
      referenced.set(candidate, path);
    }
  }
}

for (const path of sourceFiles) {
  const content = readFileSync(path, 'utf8');

  // Khoá viết trong nháy ĐƠN thì ở đâu cũng là khoá: t('key'), 'key' as MessageKey,
  // và cả bên trong biểu thức của một ràng buộc — [title]="t('exercise.typingOnly')".
  collect(content, path, /'([a-z][\w]*(?:\.[\w-]+)+)'/gi);

  // Khoá viết trong nháy KÉP chỉ tính khi nó là thuộc tính thường (key="app.nav.tense").
  // Giá trị của một ràng buộc Angular cũng nằm trong nháy kép nhưng là BIỂU THỨC:
  // [key]="exercise.nameKey" đọc thuộc tính `nameKey` của biến `exercise`, không phải
  // khoá "exercise.nameKey". Bỏ hẳn các ràng buộc đi trước khi quét.
  collect(content.replace(ANGULAR_BINDING, ' '), path, /"([a-z][\w]*(?:\.[\w-]+)+)"/gi);
}

for (const [key, path] of referenced) {
  fail(`khoá "${key}" được dùng ở ${path.replace(ROOT, '.')} nhưng không có trong messages.ts`);
}

const unused = [...messages.keys()].filter((key) => !usedKeys.has(key));
if (unused.length > 0) {
  warn(`${unused.length} khoá không nơi nào dùng: ${unused.join(', ')}`);
}

log();
if (errors === 0) {
  log(
    `${c.green}OK: ${messages.size} khoá, đủ hai ngôn ngữ, tham số khớp nhau${c.reset}` +
      (warnings > 0 ? ` ${c.yellow}(${warnings} cảnh báo)${c.reset}` : ''),
  );
} else {
  log(`${c.red}CO ${errors} LOI o tren${c.reset}`);
}
