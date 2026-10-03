/**
 * 網站設定：網站標題、搜尋引擎描述、主選單。
 */
import { company } from './company';

export const site = {
  /** 網站名稱（瀏覽器分頁標題的後半段） */
  title: company.name,
  /** 一句話說明公司在做什麼 */
  tagline: 'CNC 線切割・模具・夾治具・精密零件加工',
  /** 搜尋引擎與社群分享時顯示的描述（建議 100 字以內） */
  description: `${company.name}位於臺南市安南區，自 ${company.foundedYear} 年開始營運，專精 CNC 線切割，承接模具零件、夾具、治具與精密機械零件加工。電話 ${company.contact.phone}。`,
};

/** 主選單。新增頁面時，在 src/pages/ 建立檔案後於此加入一行即可。 */
export const navigation = [
  { label: '首頁', href: '/' },
  { label: '業務項目', href: '/services/' },
  { label: '關於我們', href: '/about/' },
  { label: '聯絡我們', href: '/contact/' },
];
