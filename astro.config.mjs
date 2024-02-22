import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://alohabeautylogic.pl',
  integrations: [react(), sitemap()]
});