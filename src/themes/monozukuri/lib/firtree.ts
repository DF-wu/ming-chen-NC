/**
 * 產生「樅樹形槽」輪廓的 SVG path（首頁插圖用）。
 * 樅樹形槽是線切割的代表性加工形狀：左右對稱、逐層內收的圓弧齒形。
 * 輪廓從右上的槽口開始，沿右側往下、繞過底部圓弧，再沿左側回到左上槽口。
 */
type Point = [number, number];
type Segment = [Point, Point, Point, Point]; // 三次貝茲曲線：起點、控制點 1、控制點 2、終點

export interface FirTreeOptions {
  /** 對稱中心線的 x */
  cx: number;
  /** 槽口（工件上緣）的 y */
  top: number;
  /** 齒數（單側） */
  lobes: number;
  /** 齒距 */
  pitch: number;
  /** 第一齒的半寬 */
  outer: number;
  /** 第一個頸部的半寬 */
  neck: number;
  /** 每往下一齒內收的量 */
  taper: number;
}

const round = (n: number) => Math.round(n * 100) / 100;
const fmt = (p: Point) => `${round(p[0])} ${round(p[1])}`;

export function firTree({ cx, top, lobes, pitch, outer, neck, taper }: FirTreeOptions) {
  const start: Point = [cx + outer + 4, top];
  const right: Segment[] = [];
  let prev = start;

  for (let i = 0; i < lobes; i++) {
    const y = top + i * pitch;
    const lobe: Point = [cx + outer - i * taper, y + pitch * 0.34];
    const neckPt: Point = [cx + neck - i * taper, y + pitch * 0.86];
    const k = pitch * 0.2; // 控制點長度：越大，齒形越圓
    // 由頸部往外鼓出到齒峰（齒峰處切線垂直，形成圓弧狀的齒）
    right.push([prev, [prev[0], prev[1] + k], [lobe[0], lobe[1] - k], lobe]);
    // 由齒峰內收到下一個頸部（頸部處切線垂直，形成內凹的圓角）
    right.push([lobe, [lobe[0], lobe[1] + k], [neckPt[0], neckPt[1] - k], neckPt]);
    prev = neckPt;
  }

  const radius = prev[0] - cx;
  const mirror = (p: Point): Point => [2 * cx - p[0], p[1]];

  /**
   * 依座標轉換產生「起點之後」的路徑指令（不含 M）。
   * sweep：槽底圓弧的方向（鏡像後方向相反）。
   */
  const body = (t: (p: Point) => Point, sweep: 0 | 1) => {
    const parts = right.map((s) => `C ${fmt(t(s[1]))} ${fmt(t(s[2]))} ${fmt(t(s[3]))}`);
    parts.push(`A ${round(radius)} ${round(radius)} 0 0 ${sweep} ${fmt(t(mirror(prev)))}`);
    for (const s of [...right].reverse()) {
      parts.push(`C ${fmt(t(mirror(s[2])))} ${fmt(t(mirror(s[1])))} ${fmt(t(mirror(s[0])))}`);
    }
    return parts.join(' ');
  };

  return {
    /** 右上槽口（起點） */
    start,
    /** 左上槽口（終點） */
    end: mirror(start),
    /** 由右往左繞一圈的路徑（不含 M） */
    forward: body((p) => p, 1),
    /** 反方向（由左往右）的路徑（不含 M），用於組合工件剖面 */
    reverse: body(mirror, 0),
    /** 槽底的 y */
    bottom: prev[1] + radius,
    /** 槽底圓弧半徑 */
    radius,
    /** 各齒峰的座標（右側），用於標註 */
    lobePoints: Array.from({ length: lobes }, (_, i): Point => [cx + outer - i * taper, top + i * pitch + pitch * 0.38]),
  };
}

export { fmt };
