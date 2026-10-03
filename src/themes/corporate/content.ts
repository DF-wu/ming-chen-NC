/**
 * 「國際大廠」風格專用的文案與規格表欄位。
 * 公司事實（電話、地址、年份、業務內容）一律取自 src/data/，這裡只放呈現用的文字。
 */
import { company, experienceYears } from '../../data/company';
import type { Service } from '../../data/services';

/** 首頁主標語 */
export const heroTitle = [`${experienceYears} 年，`, '專注每一道切割。'];

/** 首頁主視覺下方的說明 */
export const heroLead = `${company.name}位於臺南市安南區，以 CNC 線切割為核心技術，承接模具零件、夾具、治具與精密機械零件加工。`;

/** 每項服務的英文分類與適用說明（規格表用） */
export const serviceMeta: Record<string, { scope: string }> = {
  'wire-edm': { scope: '高硬度導電材料、窄槽、尖角與複雜異形輪廓' },
  mold: { scope: '沖壓模具零件、模仁、入子、沖頭與模板' },
  jig: { scope: '加工定位、組裝與檢測用夾具、治具' },
  parts: { scope: '機械零件、設備零組件，客製與少量需求' },
};

/** 規格表的「詢價資料」欄 */
export const inquiryItems = ['加工圖面', '材質與熱處理', '數量', '希望交期'];

/** 取得規格表列 */
export function specRows(service: Service) {
  const rows = [{ label: '適用範圍', value: serviceMeta[service.id]?.scope ?? service.summary }];
  if (service.materials) rows.push({ label: '適用材料', value: service.materials.join('、') });
  rows.push({ label: '詢價資料', value: inquiryItems.join('、') });
  return rows;
}

/** 詢價須知（聯絡頁） */
export const inquiryChecklist = [
  { item: '加工圖面', note: '紙本圖面可傳真，電子檔可寄 Email。' },
  { item: '材質與熱處理', note: '例如模具鋼種類、是否已淬火。' },
  { item: '數量', note: '單件試作或批量生產。' },
  { item: '希望交期', note: '方便安排加工排程。' },
  { item: '聯絡方式', note: '聯絡人與電話，以便回覆報價。' },
];
