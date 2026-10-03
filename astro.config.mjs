// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 網站網址。若日後改用自訂網域（例如 https://www.example.com.tw），
  // 請把 site 改成該網址，並刪除下方的 base。
  site: 'https://df-wu.github.io',

  // GitHub Pages 專案網址的子路徑，必須與 GitHub repo 名稱相同。
  base: '/ming-chen-NC',

  // 自動產生 sitemap-index.xml，方便搜尋引擎收錄。
  integrations: [sitemap()],
});
