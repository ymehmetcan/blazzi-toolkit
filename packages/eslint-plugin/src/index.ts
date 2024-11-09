import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import { all, recommended } from '@/configs';
import rules from '@/rules';

import packageJson from '../package.json';

const plugin = {
  meta: {
    name: packageJson.name,
    version: packageJson.version,
  },
  configs: {},
  rules,
} satisfies Linter.Plugin;

Object.assign(plugin.configs, {
  all: [
    {
      plugins: { '@blazzi': plugin },
      rules: all,
    },
  ],
  recommended: [
    {
      plugins: { '@blazzi': plugin },
      rules: recommended,
    },
  ],
});

export default plugin;
