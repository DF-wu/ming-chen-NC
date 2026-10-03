# 明泉精密科技有限公司 官方網站

明泉精密科技有限公司（統一編號 80081898）的公司網站，介紹業務項目與聯絡資訊。

- 網站網址：<https://df-wu.github.io/ming-chen-NC/>
- 技術：[Astro](https://astro.build/)（靜態網站產生器）＋純 CSS，不需要資料庫或伺服器
- 部署：推送到 `main` 分支後，GitHub Actions 會自動建置並發佈到 GitHub Pages

---

## 設計風格提案（預覽中）

目前共有 6 種風格，可以在比較頁並排檢視：<https://df-wu.github.io/ming-chen-NC/styles/>

| 風格 | 網址 | 程式碼 |
| --- | --- | --- |
| 製圖紙（目前正式版） | `/` | `src/components/`、`src/pages/*.astro` |
| 精工極簡 | `/style/monozukuri/` | `src/themes/monozukuri/` |
| 控制面板 | `/style/hmi/` | `src/themes/hmi/` |
| 國際大廠 | `/style/corporate/` | `src/themes/corporate/` |
| 技術型錄 | `/style/catalog/` | `src/themes/catalog/` |
| 鋼與光 | `/style/spark/` | `src/themes/spark/` |

- 所有風格共用 `src/data/` 的公司資料，改一次全部風格都會更新。
- 每個風格頁面的最上方有一條深色的「設計提案」列，可以切換上一個／下一個風格。
- 預覽頁設定了 `noindex`，也不會列入 sitemap，不影響正式網站的搜尋排名。

**選定風格後的整理步驟**

1. 把選定風格的頁面 `src/pages/style/<id>/*.astro` 移到 `src/pages/`，取代原本的頁面，並把頁面裡的 `styleUrl('<id>', …)` 改成 `withBase(…)`。
2. 刪除其餘風格的 `src/themes/<id>/`、`src/pages/style/<id>/`，以及 `src/pages/styles.astro`、`src/data/styles.ts`、`src/components/preview/`、`public/styles/`。
3. 在選定風格的 `Layout.astro` 中移除 `<StyleSwitcher />`，並把 `<PreviewMeta />` 換成正式的 SEO 設定（可參考 `src/layouts/BaseLayout.astro`）。

---

## 最常見的維護：改公司資料

**電話、傳真、Email、地址、營業時間**等資訊全部集中在一個檔案：

```
src/data/company.ts
```

用任何文字編輯器（或直接在 GitHub 網頁上按鉛筆圖示）修改後存檔、推送，約 1～2 分鐘後網站就會更新。首頁、聯絡頁、頁尾、搜尋引擎資料會一起更新，不用逐頁修改。

| 想修改的內容 | 檔案 |
| --- | --- |
| 公司名稱、電話、傳真、Email、地址、營業時間、地圖座標 | `src/data/company.ts` |
| 公司沿革（關於我們頁面的時間軸） | `src/data/company.ts` 的 `timeline` |
| 業務項目、公司優勢、合作流程 | `src/data/services.ts` |
| 網站標題、搜尋引擎描述、主選單 | `src/data/site.ts` |
| 公司簡介文字 | `src/pages/about.astro` |
| 詢價須知 | `src/pages/contact.astro` 的 `checklist` |
| 顏色、字體、間距 | `src/styles/global.css` 最上方的 `:root` |

> **注意**：`public/og-image.png`（分享到 LINE、Facebook 時的預覽圖）是一張圖片，上面印有電話與地址。若電話或地址變更，請一併更換這張圖片（尺寸 1200 × 630）。

### 新增一項業務

在 `src/data/services.ts` 的 `services` 陣列中複製一個區塊並修改內容。`icon` 可用的圖示名稱請見 `src/components/icons.ts`。首頁卡片與業務項目頁會自動出現新項目。

### 新增一個頁面

1. 在 `src/pages/` 建立新檔案，例如 `equipment.astro`（網址會是 `/equipment/`），內容可參考 `about.astro`。
2. 在 `src/data/site.ts` 的 `navigation` 加入一行 `{ label: '設備介紹', href: '/equipment/' }`。

### 放入照片

把照片放進 `public/images/`，在頁面中這樣使用：

```astro
---
import { withBase } from '../utils/url';
---
<img src={withBase('/images/factory.jpg')} alt="廠區外觀" />
```

> 站內連結與圖片路徑都要用 `withBase()` 包起來，因為網站放在 GitHub Pages 的子路徑 `/ming-chen-NC/` 下。

---

## 專案結構

```
.
├── astro.config.mjs        網站網址設定（site、base）
├── public/                 原樣複製到網站的檔案（favicon、分享預覽圖、照片）
├── src/
│   ├── data/               ★ 網站內容資料（最常修改的地方）
│   │   ├── company.ts      公司基本資料、聯絡資訊、沿革
│   │   ├── services.ts     業務項目、公司優勢、合作流程
│   │   └── site.ts         網站標題、描述、主選單
│   ├── pages/              每個檔案就是一個頁面
│   │   ├── index.astro     首頁
│   │   ├── services.astro  業務項目
│   │   ├── about.astro     關於我們
│   │   ├── contact.astro   聯絡我們
│   │   └── 404.astro       找不到頁面
│   ├── layouts/
│   │   └── BaseLayout.astro  所有頁面共用的外框（<head>、頁首、頁尾）
│   ├── components/         可重複使用的區塊（頁首、頁尾、卡片、地圖…）
│   ├── styles/global.css   全站共用樣式與設計變數
│   └── utils/              小工具（站內連結、齒輪圖形）
└── .github/workflows/deploy.yml  自動部署到 GitHub Pages
```

每個 `.astro` 檔案分成兩部分：最上面 `---` 之間是準備資料的程式碼，下面是 HTML，最底部的 `<style>` 是只作用在這個元件的樣式。

---

## 在自己的電腦上預覽

需要 [Node.js](https://nodejs.org/) 22.12 以上版本。

```bash
npm install        # 第一次使用時安裝套件
npm run dev        # 開啟開發伺服器，瀏覽 http://localhost:4321/ming-chen-NC/
npm run build      # 建置正式網站到 dist/
npm run preview    # 預覽建置結果
```

開發伺服器執行中，修改檔案後瀏覽器會自動重新整理。

## 部署

- 推送（push）到 `main` 分支就會自動部署，進度可在 GitHub repo 的 **Actions** 分頁查看。
- 也可以在 **Actions → Deploy to GitHub Pages → Run workflow** 手動重新部署。
- GitHub repo 的 **Settings → Pages → Source** 須設定為 **GitHub Actions**。

### 改用自訂網域（例如 www.example.com.tw）

1. 在 `public/` 新增 `CNAME` 檔案，內容只有一行網域名稱。
2. 把 `astro.config.mjs` 的 `site` 改成新網址，並刪除 `base` 那一行。
3. 到網域商設定 DNS（CNAME 指向 `df-wu.github.io`），再到 GitHub **Settings → Pages** 填入自訂網域。

---

## 資料來源

網站內容整理自以下公開資料（查詢日期：2026-10-03）。

| 資料 | 內容 | 來源 |
| --- | --- | --- |
| 公司登記 | 統一編號 80081898、代表人黃千芳、2002-11-18 核准設立、臺南市政府登記、公司所在地文賢路 266 號、營業項目 | [經濟部商工登記公示資料](https://findbiz.nat.gov.tw/)（政府資料開放 API） |
| 工廠登記 | 登記編號 99676619、2003-01-06 核准、生產中；產業類別：機械設備製造業、金屬製品製造業；主要產品：通用機械設備、金屬刀具、手工具及模具 | 經濟部工廠登記公示資料（經 [opengovtw.com](https://opengovtw.com/ban/80081898) 查得） |
| 營業地址、電話 | 臺南市安南區海佃路二段 163 號、06-256-5118；類別「模具車間」 | Google 地圖商家資訊 |
| 電話、傳真、Email | 06-2565118、06-2453211、mmwc.mmwc@msa.hinet.net；產品與服務：模具相關、機械零件、零件加工 | 政府採購供應商資料（經 opengovtw.com 查得） |
| 公司介紹 | 民國 84 年開始營運、三年內在業界打開知名度、精密高技術加工與高效率、模具／夾具／治具加工、主力技術 CNC 線切割、客戶遠至臺北 | [1111 人力銀行公司頁面](https://www.1111.com.tw/corp/49825043/) |

### 建議由公司確認的事項

以下內容無法從公開資料完整確認，建議公司過目後修正：

- [ ] **營業時間**：Google 地圖只登錄了週六 08:00–12:00，資料不完整，目前網站顯示「請來電洽詢」。確認後修改 `company.ts` 的 `hours`。
- [ ] **地址**：工廠登記上的地址是「海佃路 2 段 **114** 號」，而 Google 地圖、政府採購資料與 1111 人力銀行都是「海佃路二段 **163** 號」，網站採用 163 號。
- [ ] **Email**：取自政府採購供應商資料，請確認信箱仍在使用。
- [ ] **業務內容細節**：業務項目頁的條列內容（如沖頭、入子、適用材料）是依公開資料與線切割加工的一般應用整理，請依實際承接範圍增刪。
- [ ] **照片**：目前沒有公司照片，網站以插圖呈現。若能提供廠房、機台或加工成品照片，可大幅提升可信度。
