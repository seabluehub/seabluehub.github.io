import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seabluehub.github.io',
  output: 'static',
  integrations: [sitemap()],
});
