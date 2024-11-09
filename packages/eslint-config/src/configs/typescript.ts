import tseslint from 'typescript-eslint';

import { type FlatConfigArray } from '@/types';

import { typescriptRules } from '@/rules';

export default [
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: 'blazzi/typescript',
    rules: {
      ...typescriptRules,
    },
  },
] as FlatConfigArray;
