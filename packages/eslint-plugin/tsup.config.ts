import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  bundle: true,
  clean: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  minify: !opts.watch,
}));
