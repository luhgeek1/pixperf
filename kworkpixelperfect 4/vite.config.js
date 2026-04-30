import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/pixperf/',
  build: {
    outDir: resolve(__dirname, '../docs'),
    emptyOutDir: true,
    assetsDir: 'assets',
  },
});
