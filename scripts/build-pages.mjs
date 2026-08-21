#!/usr/bin/env node
/**
 * Build bản dành riêng cho GitHub Pages.
 *
 * Khác `npm run build` ở ba điểm, đều là những chỗ Pages sẽ làm hỏng trang nếu
 * bỏ qua:
 *
 * 1. BASE HREF. Trang không nằm ở gốc tên miền mà ở `https://<user>.github.io/
 *    <repo>/`. Giữ `<base href="/">` thì mọi file .js, .css và mọi file bài học
 *    đều bị tìm ở gốc tên miền — nơi không có gì cả.
 *
 * 2. 404.html. Pages là host tĩnh, không có SPA fallback: mở thẳng
 *    `/<repo>/tenses/thi-hien-tai` thì nó đi tìm một file có thật tên như vậy,
 *    không thấy, và trả về trang lỗi. Nhưng Pages cho phép tự đặt `404.html`, và
 *    nó phục vụ file đó cho MỌI đường dẫn không khớp — nên chỉ cần chép
 *    index.html thành 404.html là router của Angular nhận được đúng URL người
 *    dùng gõ và tự vẽ đúng trang. Giữ được URL sạch, không phải chuyển sang
 *    định tuyến bằng dấu #.
 *
 * 3. .nojekyll. Pages mặc định chạy nội dung qua Jekyll, mà Jekyll thì BỎ QUA
 *    mọi file và thư mục bắt đầu bằng dấu gạch dưới. File rỗng này tắt hẳn bước
 *    đó đi — vừa nhanh hơn, vừa không phụ thuộc vào việc bản build hôm nay có
 *    tình cờ sinh ra tên file như vậy hay không.
 *
 * Cách dùng:
 *   node scripts/build-pages.mjs              # tự suy base href từ tên repo
 *   node scripts/build-pages.mjs /duong-dan/  # tự chỉ định
 *   BASE_HREF=/duong-dan/ node scripts/build-pages.mjs
 */

import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const OUTPUT_DIR = join(ROOT, 'dist', 'toeic-practice', 'browser');

const USE_COLOR = process.stdout.isTTY === true && !process.env['NO_COLOR'];
const ESC = String.fromCharCode(27);
const ansi = (code) => (USE_COLOR ? `${ESC}[${code}m` : '');
const c = { reset: ansi(0), bold: ansi(1), dim: ansi(2), red: ansi(31), green: ansi(32), yellow: ansi(33) };
const log = (msg = '') => process.stdout.write(`${msg}\n`);

function die(msg) {
  log(`${c.red}[LOI] ${msg}${c.reset}`);
  process.exit(1);
}

/**
 * Tên repo, suy từ remote `origin`.
 *
 * Suy ra chứ không viết cứng: ai fork về một tên khác thì đường dẫn Pages của họ
 * cũng khác, mà một base href viết cứng sẽ hỏng lặng lẽ — trang trắng, không lỗi
 * nào trong log build. Không đọc được remote thì lấy tên thư mục.
 */
function repoName() {
  try {
    const url = execFileSync('git', ['config', '--get', 'remote.origin.url'], {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    const match = /([^/:]+?)(?:\.git)?$/.exec(url);
    if (match?.[1]) return match[1];
  } catch {
    /* chưa có git hoặc chưa có remote — rơi xuống dưới */
  }
  return basename(ROOT);
}

/** Base href luôn có gạch chéo ở CẢ hai đầu; thiếu một cái là Angular ghép sai. */
function normalizeBaseHref(value) {
  let out = String(value).trim();
  if (!out.startsWith('/')) out = `/${out}`;
  if (!out.endsWith('/')) out = `${out}/`;
  return out;
}

const baseHref = normalizeBaseHref(
  process.argv[2] || process.env['BASE_HREF'] || `/${repoName()}/`,
);

log(`${c.bold}Build cho GitHub Pages${c.reset}`);
log(`${c.dim}base href : ${baseHref}${c.reset}`);
log(`${c.dim}output    : ${OUTPUT_DIR}${c.reset}`);
log();

// --- 1. Sinh dữ liệu rồi build ---------------------------------------------

/**
 * Chạy một script Node bằng chính binary đang chạy.
 *
 * Không gọi qua `npm run` hay qua `node_modules/.bin/ng`: trên Windows hai thứ đó
 * là file .cmd, mà từ Node 18.20 trở đi `execFileSync` từ chối chạy .cmd nếu
 * không bật `shell: true` (một bản vá bảo mật). Bật shell lên thì lại phải lo
 * chuyện trích dẫn tham số theo từng hệ điều hành. Gọi thẳng file .js là hết cả
 * hai vấn đề, và cũng bớt được một tầng tiến trình.
 */
function runNode(scriptPath, args = []) {
  execFileSync(process.execPath, [scriptPath, ...args], { cwd: ROOT, stdio: 'inherit' });
}

runNode(join(HERE, 'generate-lessons.mjs'));
runNode(join(ROOT, 'node_modules', '@angular', 'cli', 'bin', 'ng.js'), [
  'build',
  '--base-href',
  baseHref,
]);

// --- 2. Kiểm lại rằng base href thật sự nằm trong index.html ----------------
const indexPath = join(OUTPUT_DIR, 'index.html');
if (!existsSync(indexPath)) die(`không thấy ${indexPath} sau khi build`);

const html = readFileSync(indexPath, 'utf8');
const found = /<base href="([^"]*)"/.exec(html)?.[1];
if (found !== baseHref) {
  die(`index.html có base href "${found}" nhưng đáng lẽ phải là "${baseHref}"`);
}

// --- 3. Hai file mà Pages cần ----------------------------------------------
copyFileSync(indexPath, join(OUTPUT_DIR, '404.html'));
writeFileSync(join(OUTPUT_DIR, '.nojekyll'), '');

log();
log(`${c.green}OK${c.reset} base href đã đặt thành ${c.bold}${baseHref}${c.reset}`);
log(`${c.green}OK${c.reset} đã tạo 404.html (SPA fallback) và .nojekyll`);
log();
log(`${c.dim}Thư mục cần đưa lên Pages: dist/toeic-practice/browser${c.reset}`);
