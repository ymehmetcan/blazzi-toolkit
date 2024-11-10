import tseslint from 'typescript-eslint';

import { CONFIG_NAME, PLUGIN } from '@/constants';
import { FlatConfig, type FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

import { vuePluginConfig } from '@/plugins';

const vueConfigOverrides: FlatConfig = {
  plugins: { [PLUGIN.TS_ESLINT]: tseslint.plugin },
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
    },
  },
  ...getConfigName(CONFIG_NAME.VUE, 'rules'),
};

export const vueConfig: FlatConfigArray = [
  ...vuePluginConfig,
  vueConfigOverrides,
  getConfigName(CONFIG_NAME.VUE, 'rule-set'),
];
