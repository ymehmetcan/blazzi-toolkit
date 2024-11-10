import reactPlugin from 'eslint-plugin-react';

import { JSX_TSX_FILE_PATTERNS, PLUGIN } from '@/constants';
import { type FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

import { reactPluginRules } from '@/rules';

export const reactPluginConfig: FlatConfig = {
  files: JSX_TSX_FILE_PATTERNS,
  languageOptions: { ...reactPlugin.configs.flat.recommended.languageOptions },
  plugins: { [PLUGIN.REACT]: reactPlugin },
  rules: {
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat['jsx-runtime'].rules,
    ...reactPluginRules,
  },
  settings: { react: { version: 'detect' } },
  ...getConfigName(PLUGIN.REACT, 'plugin'),
};
