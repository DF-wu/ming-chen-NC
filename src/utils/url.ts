/**
 * 為站內連結加上 base 路徑。
 * 網站部署在 GitHub Pages 的子路徑（/ming-chen-NC/）下，
 * 所以站內連結一律寫成 withBase('/about/')，不要直接寫 '/about/'。
 */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * 設計風格預覽頁的站內連結，例如 styleUrl('hmi', '/services/')
 * → /ming-chen-NC/style/hmi/services/
 */
export function styleUrl(styleId: string, path = '/'): string {
  return withBase(`/style/${styleId}${path.startsWith('/') ? path : `/${path}`}`);
}
