import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://studiopeak.site',
  integrations: [sitemap()],
  output: "hybrid",
  adapter: cloudflare()
});