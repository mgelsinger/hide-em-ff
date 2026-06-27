import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Options-page build. Emits dist/index.html + assets, and copies public/
// (manifest.json + icons) into dist/.
//
// Content + background scripts are built separately by vite.scripts.config.ts
// because MV3 content scripts must be classic (IIFE) bundles, and rollup only
// supports IIFE output for single-chunk builds.

export default defineConfig({
  plugins: [react()],
  root: fileURLToPath(new URL('./src/ui/options', import.meta.url)),
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
    minify: false,
  },
});
