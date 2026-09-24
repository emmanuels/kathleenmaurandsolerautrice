// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vercel exposes the production domain at build time (the *.vercel.app one,
// or a custom domain once attached), so canonical and Open Graph URLs follow it.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelHost ? `https://${vercelHost}` : 'http://localhost:4321',
  integrations: [sitemap()],
});
