/**
 * ============================================================
 *  公司基本資料
 * ============================================================
 *  網站上出現的公司名稱、電話、地址、Email 等資訊都集中在這裡。
 *  修改這個檔案並推送到 GitHub 後，全站會自動一起更新。
 *
 *  各項資料的來源請見 README.md 的「資料來源」一節。
 */

export const company = {
  /** 公司全名（依經濟部商工登記） */
  name: '明泉精密科技有限公司',
  /** 簡稱 */
  shortName: '明泉精密',
  /** 統一編號 */
  taxId: '80081898',
  /** 代表人 */
  representative: '黃千芳',
  /** 開始營運的年份（民國 84 年） */
  foundedYear: 1995,
  /** 公司核准設立日期 */
  incorporatedOn: '2002-11-18',
  /** 公司登記地址（登記用，非營業地點） */
  registeredAddress: '臺南市北區文成里文賢路266號',
  /** 公司登記的營業項目 */
  businessItems: ['其他金屬製品製造業', '其他機械製造業'],

  /** 經濟部工廠登記 */
  factory: {
    registrationNo: '99676619',
    approvedOn: '2003-01-06',
    status: '生產中',
    industries: ['機械設備製造業', '金屬製品製造業'],
    products: ['通用機械設備', '金屬刀具、手工具及模具'],
  },

  /** 聯絡資訊 */
  contact: {
    phone: '06-256-5118',
    fax: '06-245-3211',
    email: 'mmwc.mmwc@msa.hinet.net',
    /** 營業地址（分成郵遞區號、縣市、區、路段門牌） */
    postalCode: '709',
    city: '臺南市',
    district: '安南區',
    street: '海佃路二段163號',
    /** 營業時間，確認後可改成例如「週一至週五 08:00–17:00」 */
    hours: '請來電洽詢',
  },

  /** 地圖座標（Google 地圖上的公司位置） */
  geo: {
    lat: 23.0344845,
    lng: 120.189155,
  },
};

/** 公司沿革（關於我們頁面的時間軸） */
export const timeline = [
  {
    year: '1995',
    era: '民國 84 年',
    title: '開始營運',
    text: '投入精密模具與 CNC 線切割加工，營運三年即在業界打開知名度。',
  },
  {
    year: '2002',
    era: '民國 91 年',
    title: '公司正式設立',
    text: '「明泉精密科技有限公司」於 11 月 18 日經臺南市政府核准設立。',
  },
  {
    year: '2003',
    era: '民國 92 年',
    title: '完成工廠登記',
    text: `取得經濟部工廠登記（編號 ${company.factory.registrationNo}），產業類別為機械設備製造業與金屬製品製造業。`,
  },
  {
    year: '今日',
    era: '',
    title: '持續生產中',
    text: '以 CNC 線切割為核心，持續服務模具、機械與製造業客戶，客戶遍及南北。',
  },
];

/* ------------------------------------------------------------
 *  以下由上方資料自動產生，通常不需要修改
 * ------------------------------------------------------------ */

/** 營業地址，例如「臺南市安南區海佃路二段163號」 */
export const address = `${company.contact.city}${company.contact.district}${company.contact.street}`;

/** 含郵遞區號的完整地址 */
export const fullAddress = `${company.contact.postalCode}${address}`;

/** 營運年數，無條件捨去到十位數（例如 31 年 → 30），用於「逾 30 年」等文字 */
export const experienceYears = Math.floor((new Date().getFullYear() - company.foundedYear) / 10) * 10;

/** 把「06-256-5118」轉成國際格式的撥號連結「tel:+88662565118」 */
function toTelHref(phone: string): string {
  return `tel:+886${phone.replace(/\D/g, '').replace(/^0/, '')}`;
}

const mapQuery = encodeURIComponent(`${company.name} ${address}`);

/** 常用連結 */
export const links = {
  tel: toTelHref(company.contact.phone),
  mailto: `mailto:${company.contact.email}`,
  /** 在 Google 地圖開啟公司位置 */
  map: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  /** Google 地圖規劃路線 */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  /** 嵌入在聯絡頁的地圖 */
  mapEmbed: `https://maps.google.com/maps?q=${mapQuery}&hl=zh-TW&z=16&output=embed`,
};
