import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import { JSX_TSX_FILE_PATTERNS, PLUGIN } from '@/constants';
import { type FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

export const jsxA11yPluginConfig: FlatConfig = {
  files: JSX_TSX_FILE_PATTERNS,
  plugins: { [PLUGIN.JSX_A11Y]: jsxA11yPlugin },
  languageOptions: { ...jsxA11yPlugin.flatConfigs.recommended.languageOptions },
  rules: {
    ...jsxA11yPlugin.flatConfigs.recommended.rules,
  },
  ...getConfigName(PLUGIN.JSX_A11Y, 'plugin'),
};
