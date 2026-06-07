import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roselabs.com.br',
  integrations: [react(), sitemap()],
  output: 'static',
});
