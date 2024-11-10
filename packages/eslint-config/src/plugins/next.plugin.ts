import nextPlugin from '@next/eslint-plugin-next';

import { JSX_TSX_FILE_PATTERNS, PLUGIN } from '@/constants';
import { type FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

import { nextPluginRules } from '@/rules';

export const nextPluginConfig: FlatConfig = {
  files: JSX_TSX_FILE_PATTERNS,
  plugins: { [PLUGIN.NEXT]: nextPlugin },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    ...nextPluginRules,
  },
  ...getConfigName(PLUGIN.NEXT, 'plugin'),
};
