import tseslint from 'typescript-eslint';

import { CONFIG_NAME } from '@/constants';
import { FlatConfig, type FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

import { typescriptRules } from '@/rules';

const typescriptConfigOverrides: FlatConfig = {
  rules: typescriptRules,
  ...getConfigName(CONFIG_NAME.TYPESCRIPT, 'rules'),
};

export const typescriptConfig = [
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  typescriptConfigOverrides,
  getConfigName(CONFIG_NAME.TYPESCRIPT, 'rule-set'),
] as FlatConfigArray;
