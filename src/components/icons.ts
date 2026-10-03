/**
 * 網站使用的圖示（24 × 24 線條圖示，顏色跟隨文字顏色）。
 * 新增圖示：在下方加入一個名稱與 SVG 內容，就能用 <Icon name="名稱" /> 使用。
 */
import { gearPath } from '../utils/gear';

export const icons = {
  // 聯絡
  phone:
    '<path d="M5 4h3.2l1.8 4.6-2.3 1.5a11.5 11.5 0 0 0 6.2 6.2l1.5-2.3L20 15.8V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  fax: '<path d="M7 9V3.5h10V9"/><rect x="3" y="9" width="18" height="8.5" rx="2"/><path d="M7 14h10v6.5H7z"/><path d="M17.5 12h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  pin: '<path d="M12 21s-7-6.1-7-11.2a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h4M7 14h7"/><path d="M15.5 9.5h2v2h-2z"/>',

  // 介面
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  external: '<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
  check: '<path d="M5 12.5 9.5 17 19 7.5"/>',

  // 業務項目
  wire: '<path d="M9 3h6v3.5H9zM9 17.5h6V21H9z"/><path d="M12 6.5v11"/><path d="M3 10h18v4H3z"/><path d="M3 12h7.5" stroke-dasharray="1.5 1.5"/>',
  mold: '<path d="M4 4h16v6.5h-5V8.5H9v2H4z"/><path d="M4 13.5h5v2h6v-2h5V20H4z"/><path d="M6.5 10.5v3M17.5 10.5v3"/>',
  jig: '<path d="M2.5 20h19"/><path d="M4.5 20V9h4v11M15.5 20V9h4v11"/><path d="M8.5 12.5h7v4h-7z"/><path d="M19.5 14.5H22"/>',
  gear: `<path d="${gearPath({ cx: 12, cy: 12, outer: 9.5, root: 7.2, teeth: 8 })}"/><circle cx="12" cy="12" r="3"/>`,

  // 優勢
  history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3.5 3.5V8H8"/><path d="M12 7.5V12l3 2"/>',
  precision: '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
  bolt: '<path d="M13 2.5 4.5 13.5H11L10 21.5l8.5-11H12z"/>',
  factory: '<path d="M3 21V11l5 3v-3l5 3v-3l5 3V3.5h3V21z"/><path d="M7 17.5h2M11.5 17.5h2M16 17.5h2"/>',
} as const;

export type IconName = keyof typeof icons;
