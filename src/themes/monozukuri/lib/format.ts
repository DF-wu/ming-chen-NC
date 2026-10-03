/**
 * 文字格式小工具（精工極簡風格用）
 */
import { company, address } from '../../../data/company';

const DIGITS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

/** 逐位轉成中文數字：1995 →「一九九五」（用於年份） */
export const kanjiDigits = (n: number | string): string =>
  String(n).replace(/\d/g, (d) => DIGITS[Number(d)]);

/** 0–99 轉成中文數字：30 →「三十」（用於年數） */
export function kanjiNumber(n: number): string {
  if (n < 10) return DIGITS[n];
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return `${tens > 1 ? DIGITS[tens] : ''}十${ones ? DIGITS[ones] : ''}`;
}

const FORMAL = ['', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖', '拾'];

/** 1–10 轉成大寫數字：1 →「壹」（用於項目序號，不會和破折號混淆） */
export const formalNumber = (n: number): string => FORMAL[n] ?? String(n);

/** 西元年轉民國年 */
export const rocYear = (year: number): number => year - 1911;

/** 從「2002-11-18」取出年份 */
export const yearOf = (iso: string): number => Number(iso.slice(0, 4));

/** 「2002-11-18」→「民國 91 年 11 月 18 日」 */
export function rocDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `民國 ${rocYear(y)} 年 ${m} 月 ${d} 日`;
}

/** 公司資料表的各列（關於我們頁） */
export function profileRows(): { label: string; value: string; note?: string }[] {
  return [
    { label: '公司名稱', value: company.name },
    { label: '統一編號', value: company.taxId },
    { label: '代表人', value: company.representative },
    { label: '開始營運', value: `民國 ${rocYear(company.foundedYear)} 年`, note: String(company.foundedYear) },
    { label: '公司設立', value: rocDate(company.incorporatedOn), note: String(yearOf(company.incorporatedOn)) },
    {
      label: '工廠登記',
      value: `經濟部工廠登記 第 ${company.factory.registrationNo} 號`,
      note: company.factory.status,
    },
    { label: '產業類別', value: company.factory.industries.join('、') },
    { label: '主要產品', value: company.factory.products.join('／') },
    { label: '營業項目', value: company.businessItems.join('、') },
    { label: '營業地址', value: address },
    { label: '公司登記地址', value: company.registeredAddress },
  ];
}
