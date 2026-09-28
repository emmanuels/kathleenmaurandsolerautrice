// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical address of the site: used for canonical links, Open Graph URLs,
// the sitemap, robots.txt and structured data.
export default defineConfig({
  site: 'https://www.kathleen-ms.com',
  integrations: [sitemap()],
});
