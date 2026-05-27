import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Builds one of the WebExtension worker scripts as a classic IIFE bundle.
// Run twice in sequence: ENTRY=background, then ENTRY=content. (See package.json.)
//
// IIFE is required because MV3 content scripts and Firefox's background.scripts
// entry are loaded as classic scripts, not ES modules.

const ENTRIES = {
  background: {
    input: './src/background/service-worker.ts',
    out: 'background/service-worker.js',
    name: 'hideEmBackground',
  },
  content: {
    input: './src/content/universal-scanner.ts',
    out: 'content/universal-scanner.js',
    name: 'hideEmContent',
  },
} as const;

const entry = process.env['ENTRY'];
if (entry !== 'background' && entry !== 'content') {
  throw new Error(
    `vite.scripts.config.ts: set ENTRY=background or ENTRY=content (got ${String(entry)})`,
  );
}
const cfg = ENTRIES[entry];

export default defineConfig({
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: false,
    target: 'es2022',
    minify: false,
    lib: {
      entry: fileURLToPath(new URL(cfg.input, import.meta.url)),
      name: cfg.name,
      formats: ['iife'],
      fileName: () => cfg.out,
    },
  },
});
