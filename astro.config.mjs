import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';

// The Alembic console (a local writing tool) lives in planning/, which git
// ignores. It loads only under `astro dev` and only if that folder exists, so
// builds and fresh clones never see it.
const consoleEntry = new URL('./planning/alembic-console/integration.mjs', import.meta.url);
const devTools = process.argv.includes('dev') && existsSync(consoleEntry)
  ? [(await import(consoleEntry.href)).default()]
  : [];

// https://astro.build/config
export default defineConfig({
  site: 'https://technomancyai.com',
  outDir: './docs',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind(), sitemap(), ...devTools]
});
