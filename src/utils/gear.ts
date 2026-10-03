/**
 * 產生齒輪外形的 SVG path，首頁插圖與「精密零件」圖示共用。
 * 齒頂、齒根以圓弧連接，齒面以直線連接。
 */
export interface GearOptions {
  /** 中心點 */
  cx: number;
  cy: number;
  /** 齒頂圓半徑 */
  outer: number;
  /** 齒根圓半徑 */
  root: number;
  /** 齒數 */
  teeth: number;
}

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * @param leadIn 線切割的「進刀點」：有給的話，路徑會從此點直線切入齒頂，
 *               繞齒輪一圈後停在起點（不閉合），用來畫加工路徑動畫。
 */
export function gearPath({ cx, cy, outer, root, teeth }: GearOptions, leadIn?: { x: number; y: number }): string {
  const pitch = (Math.PI * 2) / teeth;
  const point = (r: number, angle: number) =>
    `${round(cx + r * Math.cos(angle))} ${round(cy + r * Math.sin(angle))}`;
  const arcTo = (r: number, angle: number) => `A ${r} ${r} 0 0 1 ${point(r, angle)}`;

  const parts = [leadIn ? `M ${leadIn.x} ${leadIn.y} L ${point(outer, 0)}` : `M ${point(outer, 0)}`];

  for (let i = 0; i < teeth; i++) {
    const a = i * pitch;
    parts.push(
      arcTo(outer, a + pitch * 0.2), // 齒頂（後半）
      `L ${point(root, a + pitch * 0.3)}`, // 齒面向下
      arcTo(root, a + pitch * 0.7), // 齒根
      `L ${point(outer, a + pitch * 0.8)}`, // 齒面向上
      arcTo(outer, a + pitch), // 下一齒的齒頂（前半）
    );
  }

  return parts.join(' ') + (leadIn ? '' : ' Z');
}
