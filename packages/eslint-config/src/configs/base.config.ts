import eslint from '@eslint/js';
import globals from 'globals';

import { CONFIG_NAME } from '@/constants';
import { PRESET } from '@/constants/preset';
import { type FlatConfig, type FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

import { importSortPluginConfig } from '@/plugins';
import { baseRules } from '@/rules';

const baseConfigOverrides: FlatConfig = {
  languageOptions: {
    ecmaVersion: 2022,
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
      ...globals.serviceworker,
    },
  },
  rules: baseRules,
  ...getConfigName(CONFIG_NAME.BASE, 'rules'),
};

export const baseConfig: FlatConfigArray = [
  {
    ...eslint.configs.recommended,
    ...getConfigName(PRESET.ESLINT_RECOMMENDED, 'rules'),
  },
  importSortPluginConfig,
  baseConfigOverrides,
  getConfigName(CONFIG_NAME.BASE, 'rule-set'),
];
