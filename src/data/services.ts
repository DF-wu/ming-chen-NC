/**
 * ============================================================
 *  業務項目、公司優勢、合作流程
 * ============================================================
 *  首頁與「業務項目」頁面都從這裡讀取內容。
 *  新增一項業務：複製 services 裡的一個區塊並修改內容即可。
 *  icon 可用的名稱請見 src/components/icons.ts。
 */
import type { IconName } from '../components/icons';
import { company, experienceYears } from './company';

export interface Service {
  /** 網址錨點，例如 /services/#wire-edm（英文小寫與連字號） */
  id: string;
  title: string;
  /** 英文名稱（小字顯示） */
  en: string;
  icon: IconName;
  /** 首頁卡片上的一句話介紹 */
  summary: string;
  /** 業務項目頁的完整說明 */
  description: string;
  /** 服務內容條列 */
  points: string[];
  /** 適用材料（選填） */
  materials?: string[];
}

export const services: Service[] = [
  {
    id: 'wire-edm',
    title: 'CNC 線切割加工',
    en: 'CNC Wire EDM',
    icon: 'wire',
    summary: '明泉的核心技術。以 CNC 線切割進行精密輪廓切割，適合高硬度材料與複雜形狀。',
    description:
      '線切割（Wire EDM）以通電的細金屬線放電蝕除材料，不受材料硬度影響，能切出窄槽、尖角與複雜的異形輪廓。明泉自營運以來即以 CNC 線切割為主力技術，長期承接各式模具零件與精密零件的切割加工。',
    points: [
      '模具沖頭、入子、模板的精密輪廓切割',
      '熱處理後高硬度材料的加工',
      '窄槽、尖角、異形孔等複雜形狀',
      '單件試作與少量多樣的加工需求',
    ],
    materials: ['模具鋼', '高速鋼', '碳化鎢（超硬合金）', '不鏽鋼', '銅、鋁等導電金屬'],
  },
  {
    id: 'mold',
    title: '模具零件加工',
    en: 'Mold & Die Components',
    icon: 'mold',
    summary: '承接一般模具加工與模具零件製作，依客戶圖面精準完成。',
    description:
      '除了線切割，明泉也承接一般模具加工，依客戶提供的圖面與規格製作模具零件，協助模具廠與製造業者縮短開發與維修的時程。',
    points: ['沖壓模具零件', '模仁、入子與沖頭', '模板與各式模具配件', '其他模具相關零件'],
  },
  {
    id: 'jig',
    title: '夾具・治具製作',
    en: 'Jigs & Fixtures',
    icon: 'jig',
    summary: '製作加工、組裝與檢測用的夾具與治具，提升產線的定位精度與效率。',
    description:
      '夾具用來固定工件、治具用來精準定位，兩者都是穩定生產品質的關鍵。明泉依客戶的產線與產品需求，製作各式夾具與治具。',
    points: ['加工用定位夾具', '組裝與檢測治具', '依圖面客製製作'],
  },
  {
    id: 'parts',
    title: '精密機械零件加工',
    en: 'Precision Machine Parts',
    icon: 'gear',
    summary: '承接各式機械零件與設備零組件加工，對應客製化需求。',
    description:
      '明泉的工廠登記產業類別涵蓋機械設備製造業與金屬製品製造業，可承接各式機械零件與設備零組件的加工，滿足客製、少量的生產需求。',
    points: ['機械零件加工', '設備零組件', '客製化與少量零件'],
  },
];

/** 公司優勢（首頁「為什麼選擇明泉」） */
export const highlights: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'history',
    title: `逾 ${experienceYears} 年實務經驗`,
    text: `自民國 84 年（${company.foundedYear} 年）開始營運，長期深耕模具與線切割加工，營運三年即在業界打開知名度。`,
  },
  {
    icon: 'precision',
    title: '精密、高技術加工',
    text: '以 CNC 線切割為核心，處理高硬度材料與複雜輪廓，加工範圍涵蓋模具、夾具與治具。',
  },
  {
    icon: 'bolt',
    title: '持續追求效率',
    text: '在既有技術上持續嘗試新的、更有效率的加工方法，兼顧精度與交期。',
  },
  {
    icon: 'factory',
    title: '合法登記工廠',
    text: `經濟部工廠登記（編號 ${company.factory.registrationNo}），${company.factory.status}；客戶遍及南部，遠至臺北。`,
  },
];

/** 合作流程 */
export const processSteps = [
  {
    title: '來電或來信洽詢',
    text: '透過電話、傳真或 Email 說明加工需求，並提供加工圖面。',
  },
  {
    title: '評估與報價',
    text: '依圖面、材質、數量與精度要求評估加工方式，提供報價與交期。',
  },
  {
    title: '加工製作',
    text: '確認後安排排程，以 CNC 線切割等工法完成加工。',
  },
  {
    title: '確認與交貨',
    text: '完成品經尺寸確認後，依約定時間交貨。',
  },
];
