import {
  blazziBaseConfig,
  blazziPrettierConfig,
  blazziTypescriptConfig,
  defineConfig,
} from '@blazzi/eslint-config';

export default defineConfig(
  ...blazziBaseConfig,
  ...blazziTypescriptConfig,
  ...blazziPrettierConfig,
  {
    ignores: ['**/dist/'],
  }
);
