#!/usr/bin/env node
/**
 * Kiểm tra khoá ngữ pháp: mục lục (`grammar-catalog.ts`), bảng nạp bài
 * (`lesson-loaders.ts`) và nội dung từng bài (`lessons/<id>.ts`).
 *
 * TypeScript bảo đảm "options là bộ bốn chuỗi", "answer là 0–3". Nó không bảo đảm
 * được những thứ chỉ sai lúc người học đang làm bài:
 *  - câu hỏi không có chỗ trống, hoặc có hai chỗ trống;
 *  - hai lựa chọn giống hệt nhau (bấm cái nào cũng "đúng một nửa");
 *  - một vế ngôn ngữ bị bỏ trống, hoặc vế tiếng Anh lại viết bằng tiếng Việt;
 *  - dấu `**` / `[[ ]]` lẻ cặp, làm cả đoạn sau bị tô đậm;
 *  - một câu hỏi bị chép lặp sang bài khác;
 *  - mục lục có bài mà bảng nạp bài không có (bấm vào là trang trắng).
 *
 * Cách dùng:
 *   node --experimental-strip-types scripts/verify-grammar.mjs            # cả khoá
 *   node --experimental-strip-types scripts/verify-grammar.mjs <id> [...] # vài bài
 *   node --experimental-strip-types scripts/verify-grammar.mjs --print <id>  # in đề, ẩn đáp án
 *   node --experimental-strip-types scripts/verify-grammar.mjs --key <id>    # in đáp án
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { GRAMMAR_CHAPTERS } from '../src/app/core/grammar/grammar-catalog.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const GRAMMAR_DIR = join(ROOT, 'src', 'app', 'core', 'grammar');
const LESSON_DIR = join(GRAMMAR_DIR, 'lessons');
const LOADERS_FILE = join(GRAMMAR_DIR, 'lesson-loaders.ts');

const QUESTIONS_PER_LESSON = 10;
const BLANK = '-------';
const LETTERS = ['A', 'B', 'C', 'D'];

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

/** Chữ cái chỉ tiếng Việt mới có — xuất hiện trong vế `en` là dấu hiệu viết nhầm ngôn ngữ. */
const VIETNAMESE_LETTER = /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i;

const LESSONS = GRAMMAR_CHAPTERS.flatMap((chapter, chapterIndex) =>
  chapter.lessons.map((meta, lessonIndex) => ({
    meta,
    code: `${chapterIndex + 1}.${lessonIndex + 1}`,
  })),
);

async function loadLesson(id) {
  const file = join(LESSON_DIR, `${id}.ts`);
  if (!existsSync(file)) return { file, lesson: null };
  const module = await import(pathToFileURL(file).href);
  return { file, lesson: module.LESSON ?? null };
}

// ── Chế độ in đề / in đáp án ────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args[0] === '--print' || args[0] === '--key') {
  const id = args[1];
  const { lesson } = await loadLesson(id ?? '');
  if (!lesson) {
    log(`Không tìm thấy bài "${id}"`);
    process.exit(1);
  }
  lesson.questions.forEach((question, index) => {
    if (args[0] === '--print') {
      log(`${index + 1}. ${question.sentence}`);
      question.options.forEach((option, i) => log(`   (${LETTERS[i]}) ${option}`));
    } else {
      log(`${index + 1}. (${LETTERS[question.answer]}) ${question.options[question.answer]}`);
    }
  });
  process.exit(0);
}

// ── Kiểm tra ────────────────────────────────────────────────────────────────

function isFilled(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/** Kiểm tra dấu `**` chẵn cặp; `[[ ]]` chỉ được có khi `allowMarks`. */
function checkMarkup(text, at, allowMarks) {
  const stars = (text.match(/\*\*/g) ?? []).length;
  if (stars % 2 !== 0) fail(`${at}: dấu ** bị lẻ cặp`);

  const opens = (text.match(/\[\[/g) ?? []).length;
  const closes = (text.match(/\]\]/g) ?? []).length;
  if (!allowMarks && (opens > 0 || closes > 0)) {
    fail(`${at}: [[…]] chỉ dùng trong ví dụ lỗi sai`);
  } else if (opens !== closes) {
    fail(`${at}: dấu [[ ]] không khớp cặp`);
  }
}

/**
 * Một chuỗi hai ngôn ngữ phải có đủ hai vế, và vế tiếng Anh không được lẫn chữ
 * tiếng Việt. `prose` bật thêm phép thử ngược: vế tiếng Việt của một đoạn GIẢI
 * THÍCH dài mà không có lấy một dấu thanh thì gần như chắc là bị dán nhầm tiếng Anh.
 */
function checkLocalized(value, at, { prose = false } = {}) {
  if (!value || typeof value !== 'object') {
    fail(`${at}: thiếu nội dung { vi, en }`);
    return;
  }
  if (!isFilled(value.vi)) fail(`${at}: thiếu vế tiếng Việt`);
  if (!isFilled(value.en)) fail(`${at}: thiếu vế tiếng Anh`);
  if (isFilled(value.en) && VIETNAMESE_LETTER.test(value.en)) {
    fail(`${at}: vế tiếng Anh có chữ tiếng Việt`);
  }
  if (prose && isFilled(value.vi) && value.vi.length > 40 && !VIETNAMESE_LETTER.test(value.vi)) {
    fail(`${at}: vế tiếng Việt không có dấu — có thể đang là tiếng Anh`);
  }
  if (isFilled(value.vi)) checkMarkup(value.vi, `${at} (vi)`, false);
  if (isFilled(value.en)) checkMarkup(value.en, `${at} (en)`, false);
}

function checkCell(cell, at) {
  if (typeof cell === 'string') {
    if (!isFilled(cell)) fail(`${at}: ô bảng rỗng`);
    else checkMarkup(cell, at, false);
  } else {
    checkLocalized(cell, at);
  }
}

function checkLesson(id, code, lesson, seenSentences) {
  const at = `bài ${code} (${id})`;

  if (lesson.id !== id) fail(`${at}: LESSON.id là "${lesson.id}", phải là "${id}"`);
  checkLocalized(lesson.intro, `${at} › intro`, { prose: true });

  // Ví dụ lỗi sai
  const mistakes = lesson.mistakes ?? [];
  if (mistakes.length < 3 || mistakes.length > 5) {
    fail(`${at}: cần 3–5 ví dụ lỗi sai, đang có ${mistakes.length}`);
  }
  mistakes.forEach((mistake, index) => {
    const where = `${at} › lỗi sai ${index + 1}`;
    for (const field of ['wrong', 'right']) {
      const text = mistake[field];
      if (!isFilled(text)) {
        fail(`${where}: thiếu "${field}"`);
        continue;
      }
      checkMarkup(text, `${where} › ${field}`, true);
      if (!/\[\[.+?\]\]/.test(text)) fail(`${where} › ${field}: chưa đánh dấu chỗ sai/chỗ sửa bằng [[…]]`);
      if (VIETNAMESE_LETTER.test(text)) fail(`${where} › ${field}: câu tiếng Anh có chữ tiếng Việt`);
    }
    const strip = (text) => (text ?? '').replace(/\[\[|\]\]/g, '').trim();
    if (strip(mistake.wrong) === strip(mistake.right)) fail(`${where}: câu sai và câu đúng giống hệt nhau`);
    checkLocalized(mistake.explanation, `${where} › giải thích`, { prose: true });
  });

  // Lý thuyết
  const theory = lesson.theory ?? [];
  if (theory.length < 4) fail(`${at}: cần ít nhất 4 mục lý thuyết, đang có ${theory.length}`);
  theory.forEach((section, index) => {
    const where = `${at} › lý thuyết ${index + 1}`;
    checkLocalized(section.heading, `${where} › tiêu đề`);

    const blocks = ['body', 'points', 'table', 'examples', 'callout'].filter((key) => section[key]);
    if (blocks.length === 0) fail(`${where}: chỉ có tiêu đề, không có nội dung`);

    if (section.body) checkLocalized(section.body, `${where} › đoạn văn`, { prose: true });
    (section.points ?? []).forEach((point, i) => checkLocalized(point, `${where} › ý ${i + 1}`));
    if (section.points && section.points.length === 0) fail(`${where}: points rỗng`);

    if (section.table) {
      const { head, rows } = section.table;
      if (!Array.isArray(head) || head.length < 2) fail(`${where} › bảng: cần ít nhất 2 cột`);
      (head ?? []).forEach((cell, i) => checkLocalized(cell, `${where} › bảng › tiêu đề cột ${i + 1}`));
      if (!Array.isArray(rows) || rows.length === 0) fail(`${where} › bảng: không có dòng nào`);
      (rows ?? []).forEach((row, r) => {
        if (row.length !== head.length) {
          fail(`${where} › bảng › dòng ${r + 1}: ${row.length} ô, tiêu đề có ${head.length} cột`);
        }
        row.forEach((cell, i) => checkCell(cell, `${where} › bảng › dòng ${r + 1} ô ${i + 1}`));
      });
    }

    (section.examples ?? []).forEach((example, i) => {
      const e = `${where} › ví dụ ${i + 1}`;
      if (!isFilled(example.en)) fail(`${e}: thiếu câu tiếng Anh`);
      if (!isFilled(example.vi)) fail(`${e}: thiếu nghĩa tiếng Việt`);
      if (isFilled(example.en)) {
        checkMarkup(example.en, e, false);
        if (VIETNAMESE_LETTER.test(example.en)) fail(`${e}: câu tiếng Anh có chữ tiếng Việt`);
      }
      if (isFilled(example.vi)) checkMarkup(example.vi, e, false);
    });

    if (section.callout) {
      if (!['tip', 'warning', 'info'].includes(section.callout.kind)) {
        fail(`${where} › lưu ý: kind "${section.callout.kind}" không hợp lệ`);
      }
      checkLocalized(section.callout.text, `${where} › lưu ý`, { prose: true });
    }
  });

  // Câu hỏi
  const questions = lesson.questions ?? [];
  if (questions.length !== QUESTIONS_PER_LESSON) {
    fail(`${at}: cần đúng ${QUESTIONS_PER_LESSON} câu hỏi, đang có ${questions.length}`);
  }
  questions.forEach((question, index) => {
    const where = `${at} › câu ${index + 1}`;
    const sentence = question.sentence ?? '';

    const blanks = sentence.match(/-{3,}/g) ?? [];
    if (blanks.length !== 1 || blanks[0] !== BLANK) {
      fail(`${where}: phải có đúng một chỗ trống viết bằng 7 dấu gạch "${BLANK}"`);
    }
    if (VIETNAMESE_LETTER.test(sentence)) fail(`${where}: câu hỏi có chữ tiếng Việt`);
    checkMarkup(sentence, where, false);

    const key = sentence.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seenSentences.has(key)) fail(`${where}: trùng câu hỏi với ${seenSentences.get(key)}`);
    seenSentences.set(key, where);

    const options = question.options ?? [];
    if (options.length !== 4) fail(`${where}: cần đúng 4 lựa chọn`);
    options.forEach((option, i) => {
      if (!isFilled(option)) fail(`${where}: lựa chọn ${LETTERS[i]} rỗng`);
      if (option !== option.trim()) fail(`${where}: lựa chọn ${LETTERS[i]} có khoảng trắng thừa`);
    });
    const normalized = options.map((option) => option.trim().toLowerCase());
    if (new Set(normalized).size !== normalized.length) fail(`${where}: có hai lựa chọn giống nhau`);

    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 3) {
      fail(`${where}: answer phải là 0, 1, 2 hoặc 3`);
    }

    checkLocalized(question.explanation, `${where} › giải thích`, { prose: true });
    if (!isFilled(question.translation)) fail(`${where}: thiếu nghĩa tiếng Việt của câu`);
    else if (question.translation.includes('---')) fail(`${where}: bản dịch còn chỗ trống`);
  });

  // Đáp án dồn hết vào một vị trí là dấu hiệu soạn ẩu. Lúc làm bài thứ tự lựa
  // chọn được trộn lại nên người học không bị ảnh hưởng, nhưng vẫn đáng nhắc.
  const positions = new Set(questions.map((question) => question.answer));
  if (questions.length === QUESTIONS_PER_LESSON && positions.size === 1) {
    warn(`${at}: mọi đáp án đều ở cùng một vị trí`);
  }
}

function checkCatalog() {
  log(`${c.bold}Mục lục khoá ngữ pháp${c.reset}`);
  const chapterIds = new Set();
  const lessonIds = new Set();
  const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const chapter of GRAMMAR_CHAPTERS) {
    if (chapterIds.has(chapter.id)) fail(`chương "${chapter.id}": id bị trùng`);
    chapterIds.add(chapter.id);
    if (!isFilled(chapter.title)) fail(`chương "${chapter.id}": thiếu tên`);
    if (chapter.lessons.length === 0) fail(`chương "${chapter.id}": không có bài nào`);
  }

  for (const { meta, code } of LESSONS) {
    const at = `bài ${code} (${meta.id})`;
    if (!slug.test(meta.id)) fail(`${at}: id phải là slug chữ thường nối bằng gạch ngang`);
    if (lessonIds.has(meta.id)) fail(`${at}: id bị trùng`);
    lessonIds.add(meta.id);
    checkLocalized(meta.title, `${at} › tên bài`);
    if (!isFilled(meta.scope)) fail(`${at}: thiếu scope`);
  }

  log(`  ${c.dim}${GRAMMAR_CHAPTERS.length} chương, ${LESSONS.length} bài${c.reset}`);
}

/** Mỗi bài trong mục lục phải có đúng một dòng nạp trỏ tới đúng file của nó. */
function checkLoaders() {
  log(`${c.bold}Bảng nạp bài${c.reset}`);
  if (!existsSync(LOADERS_FILE)) {
    fail('thiếu src/app/core/grammar/lesson-loaders.ts');
    return;
  }
  const source = readFileSync(LOADERS_FILE, 'utf8');
  const entries = new Map();
  for (const match of source.matchAll(/'([\w-]+)':\s*\(\)\s*=>\s*import\('\.\/lessons\/([\w-]+)'\)/g)) {
    entries.set(match[1], match[2]);
  }
  for (const { meta, code } of LESSONS) {
    const target = entries.get(meta.id);
    if (!target) fail(`bài ${code} (${meta.id}): chưa có trong lesson-loaders.ts`);
    else if (target !== meta.id) fail(`bài ${code} (${meta.id}): lesson-loaders.ts trỏ nhầm sang "${target}"`);
  }
  const known = new Set(LESSONS.map(({ meta }) => meta.id));
  for (const id of entries.keys()) {
    if (!known.has(id)) fail(`lesson-loaders.ts có bài "${id}" không nằm trong mục lục`);
  }
}

checkCatalog();

const only = args.filter((arg) => !arg.startsWith('--'));
const targets = only.length > 0 ? LESSONS.filter(({ meta }) => only.includes(meta.id)) : LESSONS;
for (const id of only) {
  if (!LESSONS.some(({ meta }) => meta.id === id)) fail(`không có bài "${id}" trong mục lục`);
}

if (only.length === 0) checkLoaders();

log(`${c.bold}Nội dung bài học${c.reset}`);
const seenSentences = new Map();
let checked = 0;
for (const { meta, code } of targets) {
  let loaded;
  try {
    loaded = await loadLesson(meta.id);
  } catch (error) {
    fail(`bài ${code} (${meta.id}): không nạp được file — ${error.message}`);
    continue;
  }
  if (!loaded.lesson) {
    fail(`bài ${code} (${meta.id}): thiếu file lessons/${meta.id}.ts hoặc file không export LESSON`);
    continue;
  }
  checkLesson(meta.id, code, loaded.lesson, seenSentences);
  checked++;
}
log(`  ${c.dim}Đã kiểm ${checked} bài${c.reset}`);

log();
if (errors === 0) {
  log(
    `${c.green}OK: khoá ngữ pháp hợp lệ${c.reset}` +
      (warnings > 0 ? ` ${c.yellow}(${warnings} cảnh báo)${c.reset}` : ''),
  );
} else {
  log(`${c.red}CO ${errors} LOI o tren${c.reset}`);
}
