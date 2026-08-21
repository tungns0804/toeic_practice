#!/usr/bin/env node
/**
 * Kiểm tra các ràng buộc mà TypeScript không diễn đạt được.
 *
 * Kiểu dữ liệu bảo đảm "có trường `formulaId` kiểu string"; nó không bảo đảm được
 * "chuỗi đó trỏ tới một dòng công thức có thật", cũng không bảo đảm "câu đánh dấu
 * `reversible` thì thực sự dựng lại được câu chủ động". Những thứ đó chỉ sai lúc
 * chạy, giữa một phiên luyện, dưới dạng một câu hỏi vô nghĩa — nên phải bắt ở đây.
 *
 * Chạy: npm run verify:data
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { PASSIVE_FORMULAS, PASSIVE_SENTENCES } from '../src/app/core/exercises/passive-sentences.ts';
import { findClozeSpan } from '../src/app/core/practice/cloze.ts';
import { parseVocabulary } from './lesson-core.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

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

// ── Bài tập thể bị động ────────────────────────────────────────────────────

function checkPassive() {
  log(`${c.bold}Bài tập thể bị động${c.reset}`);

  const formulaIds = new Set(PASSIVE_FORMULAS.map((item) => item.id));
  const seen = new Set();

  for (const sentence of PASSIVE_SENTENCES) {
    const at = `câu "${sentence.id}"`;

    if (seen.has(sentence.id)) fail(`${at}: id bị trùng`);
    seen.add(sentence.id);

    if (!formulaIds.has(sentence.formulaId)) {
      fail(`${at}: formulaId "${sentence.formulaId}" không có trong PASSIVE_FORMULAS`);
    }
    if (!sentence.active || !sentence.passive || !sentence.vietnamese) {
      fail(`${at}: thiếu active / passive / vietnamese`);
    }
    if (sentence.active === sentence.passive) {
      fail(`${at}: câu chủ động và bị động giống hệt nhau`);
    }

    // Câu bị động phải thực sự có dạng bị động: một dạng của "be" (hoặc "been")
    // đứng trước phân từ. Kiểm tra thô nhưng đủ bắt lỗi chép nhầm cột.
    if (!/\b(is|are|was|were|be|been|being)\b/i.test(sentence.passive)) {
      fail(`${at}: câu bị động không chứa dạng nào của "be"`);
    }

    // Đảo ngược về chủ động thì phải biết ai là chủ thể — dấu hiệu là cụm "by ...".
    if (sentence.reversible && !/\bby\b/i.test(sentence.passive)) {
      fail(`${at}: đánh dấu reversible nhưng câu bị động không có cụm "by ..."`);
    }

    for (const field of ['active', 'passive']) {
      const value = sentence[field];
      if (value && !/[.?!]$/.test(value.trim())) {
        warn(`${at}: câu ${field} không kết thúc bằng dấu câu`);
      }
    }
  }

  const reversible = PASSIVE_SENTENCES.filter((item) => item.reversible).length;
  log(
    `  ${c.green}OK${c.reset} ${PASSIVE_SENTENCES.length} câu, ` +
      `${reversible} câu đảo ngược được, ${PASSIVE_FORMULAS.length} dòng công thức`,
  );
  log();
}

// ── Từ vựng ────────────────────────────────────────────────────────────────

/**
 * Dạng luyện "điền từ" chỉ dùng được với từ mà câu ví dụ có chứa chính từ đó.
 * Từ không đạt sẽ lặng lẽ biến mất khỏi dạng đó, nên phải đếm ra ở đây.
 */
function checkVocabulary() {
  log(`${c.bold}Từ vựng${c.reset}`);

  const bands = ['tu-vung-band-1', 'tu-vung-band-2', 'tu-vung-band-3', 'tu-vung-band-4', 'tu-vung-band-5'];

  /**
   * Từ đã gặp ở band nào — để bắt một từ bị xếp vào HAI band.
   *
   * `parseVocabulary` chỉ chống trùng trong phạm vi MỘT file, nên nó không thấy
   * được trường hợp này. Mà đây lại là lỗi thật: band là một thang bậc, một từ
   * nằm ở hai bậc thì người học gặp lại đúng từ đó ở band cao hơn và tưởng mình
   * đang học từ mới, còn câu hỏi thì bị hỏi hai lần trong hai phiên khác nhau.
   */
  const wordBand = new Map();

  for (const band of bands) {
    const path = join(ROOT, 'data-source', band, 'vocabulary.txt');
    const { words, errors: parseErrors } = parseVocabulary(readFileSync(path, 'utf8'));
    for (const error of parseErrors) fail(`[${band}] ${error}`);

    let missingExample = 0;
    const noCloze = [];

    for (const word of words) {
      const key = word.word.toLowerCase();
      const seenIn = wordBand.get(key);
      if (seenIn) {
        fail(`[${band}] "${word.word}" đã có ở ${seenIn} — một từ chỉ thuộc về một band`);
      } else {
        wordBand.set(key, band);
      }

      if (!word.example) {
        missingExample++;
        continue;
      }
      if (!word.exampleVi) warn(`[${band}] "${word.word}": câu ví dụ chưa có bản dịch tiếng Việt`);
      if (!findClozeSpan(word.example, word.word)) noCloze.push(word.word);
    }

    if (missingExample > 0) warn(`[${band}] ${missingExample} từ chưa có câu ví dụ`);
    if (noCloze.length > 0) {
      warn(
        `[${band}] ${noCloze.length}/${words.length} từ không dùng được ở dạng "điền từ" ` +
          `(câu ví dụ không chứa từ): ${noCloze.join(', ')}`,
      );
    }

    const usable = words.length - noCloze.length - missingExample;
    log(`  ${c.green}OK${c.reset} ${band}: ${words.length} từ, ${usable} từ dùng được cho "điền từ"`);
  }
  log();
}

// ── Song ngữ ───────────────────────────────────────────────────────────────

/**
 * Metadata hiển thị phải có ĐỦ hai ngôn ngữ.
 *
 * `localized()` cố tình bù vế thiếu bằng vế còn lại để một dòng chưa dịch không
 * làm trống cả thẻ trên giao diện. Nhưng "không vỡ giao diện" khác hẳn "đã dịch":
 * nếu không kiểm ở đây thì một mục thiếu bản tiếng Anh sẽ lặng lẽ hiện tiếng Việt
 * giữa một trang tiếng Anh, và không ai phát hiện ra.
 *
 * Tên band ("Band 1 · 300–450") giống nhau ở hai ngôn ngữ là hợp lệ, nên chỗ này
 * chỉ cảnh báo với phần MÔ TẢ — chỗ mà hai vế giống hệt nhau gần như chắc chắn là
 * quên dịch chứ không phải cố ý.
 */
function checkBilingual() {
  log(`${c.bold}Song ngữ${c.reset}`);

  const folders = readdirSync(join(ROOT, 'data-source')).sort();

  for (const folder of folders) {
    const metaPath = join(ROOT, 'data-source', folder, 'meta.json');
    if (!existsSync(metaPath)) continue;
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'));

    for (const field of ['name', 'description']) {
      const value = meta[field];
      if (value === undefined) continue;
      if (typeof value === 'string') {
        fail(`[${folder}] meta.json: "${field}" còn là chuỗi đơn, chưa có bản dịch`);
        continue;
      }
      if (!value.vi?.trim()) fail(`[${folder}] meta.json: "${field}" thiếu bản tiếng Việt`);
      if (!value.en?.trim()) fail(`[${folder}] meta.json: "${field}" thiếu bản tiếng Anh`);
      if (field === 'description' && value.vi?.trim() === value.en?.trim()) {
        warn(`[${folder}] meta.json: mô tả giống hệt nhau ở hai ngôn ngữ — quên dịch?`);
      }
    }
  }

  // Ghi chú của câu ví dụ — cũng là chữ giao diện, cũng phải đủ hai vế.
  let notes = 0;
  for (const folder of folders) {
    const path = join(ROOT, 'data-source', folder, 'tenses.json');
    if (!existsSync(path)) continue;
    const data = JSON.parse(readFileSync(path, 'utf8'));

    for (const point of data.points ?? []) {
      for (const example of point.examples ?? []) {
        const note = example.note;
        if (note === undefined || note === null || note === '') continue;
        if (typeof note === 'string') {
          fail(`[${folder}] "${example.english}": ghi chú còn là chuỗi đơn, chưa có bản dịch`);
          continue;
        }
        if (!note.vi?.trim() || !note.en?.trim()) {
          fail(`[${folder}] "${example.english}": ghi chú thiếu một vế ngôn ngữ`);
          continue;
        }
        notes++;
      }
    }
  }

  log(`  ${c.green}OK${c.reset} ${folders.length} thư mục nguồn, ${notes} ghi chú đủ hai ngôn ngữ`);
  log();
}

checkPassive();
checkVocabulary();
checkBilingual();

log();
if (errors === 0) {
  log(`${c.green}OK: dữ liệu hợp lệ${c.reset}${warnings > 0 ? ` ${c.yellow}(${warnings} cảnh báo)${c.reset}` : ''}`);
} else {
  log(`${c.red}CO ${errors} LOI o tren${c.reset}`);
}
