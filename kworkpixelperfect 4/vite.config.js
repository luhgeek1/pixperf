import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { writeFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../docs');

export default defineConfig({
  base: '/pixperf/',
  build: {
    outDir,
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  plugins: [
    {
      name: 'write-nojekyll',
      closeBundle() {
        writeFileSync(resolve(outDir, '.nojekyll'), '');
      },
    },
  ],
});
