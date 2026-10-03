/**
 * ============================================================
 *  設計風格提案清單（預覽用）
 * ============================================================
 *  每種風格都是同一份公司資料（src/data/）的不同呈現方式。
 *  - current：目前的正式版（網站根目錄）
 *  - 其他：放在 /style/<id>/ 底下，程式碼在 src/themes/<id>/
 *
 *  決定風格後：把選定風格升級為正式版，再刪除其餘的
 *  src/themes/<id>/、src/pages/style/<id>/ 與本檔案即可。
 */

export interface StylePreset {
  id: string;
  /** 風格名稱 */
  name: string;
  /** 英文名稱 */
  en: string;
  /** 一句話說明 */
  summary: string;
  /** 設計參考來源 */
  references: string;
  /** 首頁路徑 */
  path: string;
}

export const styles: StylePreset[] = [
  {
    id: 'current',
    name: '製圖紙',
    en: 'Drafting Sheet',
    summary: '目前的正式版。製圖紙格線、黃銅色線切割路徑插圖。',
    references: '工程圖紙、標題欄',
    path: '/',
  },
  {
    id: 'monozukuri',
    name: '精工極簡',
    en: 'Monozukuri',
    summary: '日式精密加工廠的克制美感：大量留白、明體標題、細線與直書。',
    references: '由紀精密、浜野製作所等日本精密加工企業網站',
    path: '/style/monozukuri/',
  },
  {
    id: 'hmi',
    name: '控制面板',
    en: 'Machine HMI',
    summary: '取材 CNC 控制器介面：石墨灰面板、訊號黃、即時座標讀數。',
    references: 'FANUC、Sodick 控制器介面，Hadrian',
    path: '/style/hmi/',
  },
  {
    id: 'corporate',
    name: '國際大廠',
    en: 'Industrial Corporate',
    summary: '國際工具機品牌的企業形象：清晰網格、粗體標題、穩重的工業藍。',
    references: 'DMG MORI、GF Machining Solutions、Hermle、Makino',
    path: '/style/corporate/',
  },
  {
    id: 'catalog',
    name: '技術型錄',
    en: 'Technical Catalog',
    summary: '像翻閱工具型錄與規格表：章節編號、側邊目錄、表格化資訊，查找最快。',
    references: 'MISUMI、Hoffmann Group、Sandvik Coromant 型錄，瑞士網格設計',
    path: '/style/catalog/',
  },
  {
    id: 'spark',
    name: '鋼與光',
    en: 'Steel & Spark',
    summary: '深色、金屬質感與放電火花，呈現高科技精密製造的氛圍。',
    references: 'Hadrian、Machina Labs、Divergent、精密錶廠網站',
    path: '/style/spark/',
  },
];
