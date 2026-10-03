/**
 * 型錄的章節結構：頁首選單、側欄目錄、章節編號（1.1、1.2…）都從這裡產生，
 * 確保各處的編號一致。業務項目的小節會依 src/data/services.ts 自動編號。
 */
import { services } from '../../data/services';

export interface Section {
  /** 頁面內的錨點 id */
  id: string;
  /** 章節編號，例如 1.2 */
  no: string;
  title: string;
}

export interface Chapter {
  no: number;
  title: string;
  /** 英文名稱（小字） */
  en: string;
  /** 風格內的頁面路徑 */
  path: string;
  sections: Section[];
}

export const chapters: Chapter[] = [
  {
    no: 0,
    title: '首頁',
    en: 'Overview',
    path: '/',
    sections: [
      { id: 'index', no: '0.1', title: '業務一覽' },
      { id: 'facts', no: '0.2', title: '公司概況' },
      { id: 'inquiry', no: '0.3', title: '洽詢方式' },
    ],
  },
  {
    no: 1,
    title: '業務項目',
    en: 'Services',
    path: '/services/',
    sections: [
      ...services.map((s, i) => ({ id: s.id, no: `1.${i + 1}`, title: s.title })),
      { id: 'process', no: `1.${services.length + 1}`, title: '詢價流程' },
    ],
  },
  {
    no: 2,
    title: '公司資料',
    en: 'Company',
    path: '/about/',
    sections: [
      { id: 'profile', no: '2.1', title: '公司簡介' },
      { id: 'features', no: '2.2', title: '特點' },
      { id: 'history', no: '2.3', title: '沿革' },
      { id: 'registration', no: '2.4', title: '登記資料' },
    ],
  },
  {
    no: 3,
    title: '聯絡我們',
    en: 'Contact',
    path: '/contact/',
    sections: [
      { id: 'contact', no: '3.1', title: '聯絡方式' },
      { id: 'map', no: '3.2', title: '地圖・交通' },
      { id: 'request', no: '3.3', title: '詢價須知' },
    ],
  },
];

/** 依章節與錨點 id 取得小節（找不到時回報錯誤，避免編號錯亂） */
export function findSection(chapterNo: number, id: string): Section {
  const section = chapters[chapterNo]?.sections.find((s) => s.id === id);
  if (!section) throw new Error(`找不到小節：第 ${chapterNo} 章 #${id}`);
  return section;
}
