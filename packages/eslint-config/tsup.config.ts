import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/exports', 'src/index.ts'],
  format: ['esm'],
  splitting: false,
});
