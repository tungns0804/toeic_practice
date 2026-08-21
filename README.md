# Luyện thi TOEIC 990

Web app luyện thi TOEIC, chạy hoàn toàn ở trình duyệt, không cần máy chủ và không
cần tài khoản. Ba khu nội dung độc lập:

| Khu | Đường dẫn | Nội dung |
| --- | --- | --- |
| **Các thì** | `/tenses` | 12 thì tiếng Anh chia thành 3 nhóm, mỗi thì có công thức, cách dùng, dấu hiệu nhận biết, lỗi hay gặp và 6 câu ví dụ. |
| **Từ vựng** | `/vocabulary` | 557 từ chia theo 5 band điểm TOEIC (300–450 … 860–990), mỗi từ có phiên âm, từ loại, nghĩa và câu ví dụ. |
| **Bài tập** | `/exercise` | Bài tập chuyên đề. Hiện có **thể bị động**: 60 câu qua 10 công thức thì, kèm các dạng đặc biệt. |

Cả ba khu dùng chung một bộ máy luyện tập: chọn chiều hỏi → làm bài → xem kết quả
→ đánh dấu ★ những mục chưa nhớ để lần sau luyện riêng nhóm đó.

Giao diện có **tiếng Việt và tiếng Anh** (đổi ngay không cần tải lại trang), và
**tông sáng / tối / theo hệ điều hành**. Đa ngôn ngữ phủ cả chữ giao diện lẫn
metadata của nội dung — tên bài, mô tả bài và ghi chú của từng câu ví dụ đều đổi
theo. Riêng NGỮ LIỆU thì luôn giữ nguyên tiếng Việt: nghĩa của từ và bản dịch câu
chính là thứ người học đang tập dịch, dịch chúng sang tiếng Anh là xoá mất bài tập.

---

## Chạy thử

```bash
npm install
npm start           # sinh dữ liệu rồi chạy dev server tại http://localhost:4200
```

Lệnh khác:

```bash
npm run build       # sinh dữ liệu + build bản production vào dist/
npm run build:pages # build bản dành cho GitHub Pages (xem mục Triển khai)
npm run generate    # chỉ sinh lại public/lessons/*.json từ data-source/
npm run verify      # kiểm tra bảng thông điệp, dữ liệu bài tập và dữ liệu nguồn
```

`npm start` và `npm run build` đều tự chạy `npm run generate` trước, nên không có
chuyện quên sinh lại dữ liệu sau khi sửa `data-source/`.

---

## Các chiều luyện tập

**Từ vựng** (`/vocabulary/:band`)

- Anh → Việt, Việt → Anh: trắc nghiệm hoặc gõ đáp án.
- Điền từ: hiện câu ví dụ đã khoét mất chính từ đang học.
- **Lọc theo từ loại**: luyện riêng danh từ, động từ… hoặc riêng từng nhóm trong
  năm nhóm cụm nhiều từ. Nút "Chỉ cụm nhiều từ" gộp cả năm nhóm trong một lần bấm.

**Các thì** (`/tenses/:group`)

- Dịch Việt → Anh và Anh → Việt (chỉ gõ đáp án).
- Nhận diện thì: cho câu, chọn tên thì.
- Chia động từ: cho câu có chỗ trống và động từ nguyên thể trong ngoặc.

Luyện được cả nhóm, riêng một thì, hoặc riêng một câu (nút "Luyện câu này" ngay
trên từng câu ví dụ).

**Thể bị động** (`/exercise/the-bi-dong`)

- Chủ động → Bị động, Bị động → Chủ động, Dịch Việt → câu bị động, và chiều trộn.
- Lọc theo dạng câu: cơ bản, động từ khuyết thiếu, hai tân ngữ, cụm động từ, lược
  bỏ "by".

Bài này **chỉ có chế độ gõ đáp án**: bốn câu dài để chọn thì đọc lướt là ra đáp án
mà chưa cần biết đổi câu.

---

## Cách chấm bài

Ở chế độ gõ đáp án, phép so khớp bỏ qua chữ hoa/thường và dấu câu, đồng thời hiểu
viết tắt của tiếng Anh — nhưng chỉ hiểu đúng chỗ nên hiểu:

- `she's worked` = `she has worked` ✓
- `she is worked` ≠ `she has worked` ✗ (nhầm hoàn thành với bị động, vẫn bị bắt)
- `don't` = `do not`, `won't` = `will not`, `can't` = `cannot` = `can not`
- `last years accounts` = `last year's accounts` (thiếu dấu nháy sở hữu vẫn tính đúng)

Với đáp án tiếng Việt, có tuỳ chọn bỏ qua dấu thanh khi chấm. Nhiều nghĩa tương
đương ngăn nhau bằng `/` hoặc `;`, và gõ đúng một nghĩa là đủ.

Chi tiết: [`src/app/core/utils/answer-check.ts`](src/app/core/utils/answer-check.ts).

---

## Kiến trúc

Angular 20, standalone component, signal, `ChangeDetectionStrategy.OnPush`, không
dùng thư viện ngoài nào ngoài Angular.

```
src/app/
├── core/
│   ├── i18n/           messages.ts (toàn bộ chữ, hai ngôn ngữ), LanguageStore, <app-t>
│   ├── models/         lesson.model.ts (nội dung), practice.model.ts (phiên luyện)
│   ├── exercises/      bài tập chuyên đề — dữ liệu nằm thẳng trong mã nguồn
│   ├── practice/       dựng câu hỏi cho từng khu (vocabulary / tense / passive)
│   ├── services/       LessonStore, PracticeSessionStore, FavoriteStore, ThemeStore
│   ├── guards/         chặn vào /practice và /result khi không có phiên
│   └── utils/          chấm bài, khoét từ, trộn ngẫu nhiên, tìm kiếm
└── features/           mỗi màn hình một thư mục (.ts + .html + .css)
```

Vài quyết định đáng nhớ:

- **Chỉ `core/practice/` biết từng khu khác nhau ra sao.** Ba khu dựng câu hỏi
  theo cách riêng nhưng đều trả về `PracticeQuestion`, nên màn hình luyện tập và
  màn hình kết quả dùng chung được cho cả ba mà không rẽ nhánh theo loại.
- **Dịch lúc chạy, không dùng i18n biên dịch.** Đổi ngôn ngữ phải có hiệu lực
  ngay, và cả ứng dụng chỉ cần một bản build. Component `<app-t>` vẽ mọi bản dịch
  chồng lên nhau trong một ô grid nên đổi ngôn ngữ thì chữ đổi còn khung đứng yên.
- **Không lưu lịch sử luyện tập.** Mỗi lần luyện là một lần mới; tải lại trang
  giữa chừng là mất phiên (route guard đưa về trang chủ). Thứ duy nhất được lưu
  giữa các phiên là danh sách ★.
- **Id sinh từ nội dung, không đánh số.** Id của từ băm từ chính mặt chữ của từ,
  id của câu ví dụ băm từ chính câu tiếng Anh. Sửa nghĩa hay sửa bản dịch thì id
  giữ nguyên và dấu ★ không mất; chèn thêm một dòng vào giữa file cũng không làm
  lệch id của các dòng phía sau.
- **Bảng màu khai một lần.** Mỗi màu viết bằng `light-dark(sáng, tối)` trong
  `src/styles.css`; đổi tông chỉ là đổi `color-scheme`.
- **Một họ chữ duy nhất, tự host.** Inter (biến thể variable, 57 KB cho hai subset
  `latin` + `vietnamese`) nằm trong `src/fonts/`, không gọi sang Google Fonts. Bản
  đầu dùng font có chân riêng cho ngữ liệu tiếng Anh; đã bỏ vì ở cỡ lớn trên nền
  tối nét thanh của nó mảnh tới mức khó đọc — mà đó lại chính là chữ to nhất màn
  hình luyện tập. Việc phân biệt ngữ liệu với chữ giao diện đã có cỡ chữ, độ đậm
  và màu lo rồi.
- **Khung thiết lập mặc định thu gọn.** Phần lớn người học bấm thẳng "Bắt đầu
  luyện" với thiết lập mặc định, nên thứ hiện ra trước phải là nút đó cùng một
  dòng tóm tắt — không phải sáu nhóm tuỳ chọn chiếm trọn màn hình đầu tiên.
- **Chuyển động phải trả lời một câu hỏi.** Mỗi hiệu ứng trong `styles.css` gắn
  với đúng một câu hỏi của người dùng: "trang vừa đổi phải không", "có gì mới
  xuất hiện", "tôi đúng hay sai". Mọi thời lượng dưới 320ms, vì đây là app làm
  liên tiếp năm sáu chục câu một lượt — quá ngưỡng đó thì chuyển động thôi không
  còn là phản hồi mà thành thứ phải ngồi chờ. Cả khối bị tắt bởi
  `prefers-reduced-motion: reduce`.

---

## Thêm nội dung

Mỗi thư mục con của `data-source/` là một mục. Loại nội dung được quyết định bởi
**tên file dữ liệu**, không phải bởi phần mở rộng hay nội dung bên trong — đặt sai
tên là báo lỗi ngay chứ không đoán.

### Từ vựng — `vocabulary.txt`

```
data-source/tu-vung-band-6/
├── meta.json
└── vocabulary.txt
```

`meta.json` — `name` và `description` là chữ giao diện nên khai cả hai ngôn ngữ:

```json
{
  "name": { "vi": "Band 6 · 990+", "en": "Band 6 · 990+" },
  "description": {
    "vi": "Mô tả ngắn hiện trên thẻ.",
    "en": "Short description shown on the card."
  },
  "order": 206,
  "bandFrom": 900,
  "bandTo": 990
}
```

Viết một chuỗi trơn thay cho cặp `{ vi, en }` cũng chạy — lúc đó cả hai ngôn ngữ
dùng chung chuỗi đó. Dạng này có để thêm nội dung mới không bị chặn vì chưa kịp
dịch, nhưng `npm run verify` sẽ báo lỗi cho tới khi bổ sung đủ hai vế.

`vocabulary.txt` — mỗi dòng một từ, các cột ngăn nhau bằng `|`:

```
TỪ | PHIÊN ÂM | TỪ LOẠI | NGHĨA TIẾNG VIỆT | CÂU VÍ DỤ | NGHĨA CÂU VÍ DỤ
```

Từ loại viết tắt — dòng trống và dòng bắt đầu bằng `#` bị bỏ qua:

| Mã | Từ loại | | Mã | Từ loại |
| --- | --- | --- | --- | --- |
| `n` | danh từ | | `pv` | cụm động từ (*phrasal verb*) |
| `v` | động từ | | `vp` | động từ + giới từ |
| `adj` | tính từ | | `pp` | cụm giới từ |
| `adv` | trạng từ | | `cn` | danh từ ghép |
| `prep` | giới từ | | `coll` | kết hợp từ |
| `conj` | liên từ | | | |

Năm mã bên phải là các loại NHIỀU TỪ. Trước đây chúng dùng chung một mã `phr`
duy nhất — 112 mục, một phần năm kho từ vựng, nằm chung một rọ mà nhãn thì không
nói được gì ngoài "đây là nhiều từ". Mã `phr` nay **không còn được chấp nhận**:
để nó sống tiếp thì mọi mục thêm mới lại trôi về cái rọ chung đó.

Phân biệt `pv` với `vp` bằng phép thử tách: cụm động từ nhiều cụm **tách được**
(*turn the light off*, *turn it off*), còn động từ + giới từ thì **luôn dính liền**
(*look into the matter*, không phải *look the matter into*).

Một từ chỉ được thuộc về **một** band. `npm run verify` kiểm cả trong từng file
lẫn giữa các file: band là một thang bậc, một từ nằm ở hai bậc thì người học gặp
lại đúng nó ở band cao hơn và tưởng là từ mới.

Dùng `|` chứ không dùng dấu phẩy vì nghĩa tiếng Việt và câu ví dụ đều đầy dấu
phẩy. Câu ví dụ **nên chứa chính từ đó** (kể cả ở dạng đã chia) — dạng luyện
"điền từ" khoét chỗ dựa vào điều này, và `npm run verify` sẽ cảnh báo từ nào chưa
đạt.

### Các thì — `tenses.json`

```json
{
  "points": [
    {
      "id": "present-simple",
      "name": { "vi": "Hiện tại đơn", "en": "Present Simple" },
      "summary": { "vi": "…", "en": "…" },
      "affirmative": "S + V(s/es) + O",
      "negative": "S + do/does + not + V + O",
      "question": "Do/Does + S + V + O?",
      "usages": [{ "vi": "…", "en": "…" }],
      "signals": ["always", "every day"],
      "notes": [{ "vi": "…", "en": "…" }],
      "examples": [
        {
          "english": "The office opens at eight every weekday.",
          "vietnamese": "Văn phòng mở cửa lúc tám giờ vào các ngày trong tuần.",
          "verb": "open",
          "conjugated": "opens",
          "note": {
            "vi": "Ghi chú ngắn, có thể bỏ hẳn trường này.",
            "en": "Short note; the field can be omitted entirely."
          }
        }
      ]
    }
  ]
}
```

`verb` và `conjugated` phục vụ dạng luyện "chia động từ": `conjugated` phải xuất
hiện **nguyên văn** trong `english`, và trình sinh dữ liệu kiểm tra điều đó. Để
rỗng cả hai thì câu đó chỉ bị bỏ qua ở dạng ấy, các dạng khác vẫn dùng bình thường.

Id của từng câu ví dụ **không viết tay** — trình sinh dữ liệu băm từ chính câu
tiếng Anh, nên không bao giờ có hai câu trùng id.

### Bài tập chuyên đề

Dữ liệu nằm trong `src/app/core/exercises/` chứ không nằm trong `data-source/`:
mỗi câu cần bốn trường khớp nhau (chủ động, bị động, nghĩa, nhóm công thức), thứ
mà một file `.txt` phẳng không kiểm tra nổi còn TypeScript thì có.

Thêm bài tập mới: thêm id vào `ExerciseId`, thêm một mục vào `EXERCISES`, viết
hàm dựng câu hỏi trong `core/practice/`, và khai số mục trong `exercise-list.ts`.

---

## Kiểm tra

```bash
npm run verify
```

Ba tầng, đều là những thứ TypeScript không diễn đạt được:

| Lệnh | Bắt lỗi gì |
| --- | --- |
| `verify:i18n` | Khoá thiếu bản dịch một ngôn ngữ; tham số `{ten}` có ở bản này mà thiếu ở bản kia; khoá dùng trong template mà chưa khai; khoá khai rồi mà không nơi nào dùng. |
| `verify:data` | Câu bị động trỏ tới công thức không tồn tại; câu đánh dấu đảo ngược được nhưng lại không có "by …"; từ vựng có câu ví dụ không chứa chính từ đó; **một từ bị xếp vào hai band**; metadata hoặc ghi chú còn thiếu một vế ngôn ngữ. |
| `generate:check` | Chạy toàn bộ trình sinh dữ liệu nhưng không ghi file — dùng cho CI. |

---

## Triển khai lên GitHub Pages

Đã có sẵn workflow `.github/workflows/deploy-pages.yml`: mỗi lần đẩy lên `main`
là nó tự kiểm tra dữ liệu, build và publish. **Cần bật Pages một lần duy nhất**
trước khi workflow chạy được:

> Settings → Pages → Build and deployment → **Source: GitHub Actions**

Sau đó site nằm ở `https://<user>.github.io/<repo>/`.

### Ba thứ Pages đòi hỏi mà bản build thường không có

`npm run build:pages` lo cả ba (xem `scripts/build-pages.mjs`):

| Vấn đề | Cách xử lý |
| --- | --- |
| Site nằm ở thư mục con `/<repo>/`, không phải gốc tên miền | Build với `--base-href /<repo>/`. Tên repo được suy từ remote `origin` nên fork sang tên khác vẫn đúng; ghi đè bằng `BASE_HREF` hoặc tham số dòng lệnh. |
| Pages là host tĩnh, mở thẳng `/<repo>/tenses/thi-hien-tai` sẽ ra trang lỗi | Chép `index.html` thành `404.html`. Pages phục vụ file này cho mọi đường dẫn không khớp, nên router của Angular nhận đúng URL và vẽ đúng trang. Giữ được URL sạch, không phải chuyển sang định tuyến bằng dấu `#`. |
| Pages chạy Jekyll, mà Jekyll bỏ qua file/thư mục bắt đầu bằng `_` | Tạo file rỗng `.nojekyll`. |

Deep link vì thế trả về **mã 404 kèm nội dung app** — đúng như thiết kế, không
phải lỗi. Trình duyệt vẫn chạy JS trong trang đó bình thường.

Toàn bộ đã được kiểm tra bằng một server mô phỏng đúng hành vi của Pages (phục vụ
ở thư mục con + trả 404.html cho đường dẫn lạ): cả 8 trang đều vẽ đủ nội dung qua
deep link, không lỗi console, không tài nguyên hỏng.

### Deploy tay, không qua Actions

```bash
npm run build:pages
# rồi đẩy nguyên thư mục dist/toeic-practice/browser lên nhánh gh-pages
```

Lưu ý khi chạy trên **Git Bash / MSYS ở Windows**: đặt biến kiểu
`BASE_HREF=/abc/ npm run build:pages` sẽ bị shell đổi `/abc/` thành một đường dẫn
Windows. Cứ để script tự suy từ remote (mặc định) là xong; nếu bắt buộc phải chỉ
định thì thêm `MSYS_NO_PATHCONV=1`.

### Ghi chú khác

`public/lessons/*.json` là file **sinh ra** nhưng vẫn được commit: nhờ vậy chỉ cần
`ng build` (hoặc copy thẳng thư mục `public/`) là chạy được, không bắt buộc chạy
trình sinh dữ liệu trên máy triển khai.

App định tuyến bằng History API khi chạy qua web server, và tự chuyển sang định
tuyến bằng dấu `#` khi trang được mở trực tiếp từ ổ đĩa (`file://`) — nơi mà
`pushState` không dùng được.

---

## Responsive

Bố cục được rà soát bằng Chrome ở bảy khổ máy (320 · 360 · 390 · 430 · 768 · 1024 ·
1440) trên cả bảy trang và ở **cả hai ngôn ngữ** — chữ tiếng Anh dài hơn tiếng Việt
ở nhiều nhãn nên có lỗi chỉ lộ ra ở một ngôn ngữ.

Ba quy ước giữ cho nó không vỡ khi thêm nội dung mới:

- **Lưới dùng `minmax(min(Xpx, 100%), 1fr)`**, không phải `minmax(Xpx, 1fr)`. Dạng
  sau không co được xuống dưới X, nên ở khung hẹp hơn X thì ô lưới tràn ra ngoài và
  cả trang cuộn ngang.
- **Bảng rộng nằm trong `.scroll-x`** và tự cuộn trong khung của nó, chứ không đẩy
  rộng cả trang.
- **Vùng bấm tối thiểu 44px trên máy chạm** — áp cho cả nút, chip lọc, mục menu và
  liên kết quay lại, không chỉ cho `.btn`. Phân biệt bằng `@media (hover: none)`
  chứ không bằng bề rộng: cửa sổ hẹp trên máy tính vẫn có chuột.
