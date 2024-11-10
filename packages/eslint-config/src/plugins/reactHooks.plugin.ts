import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { JSX_TSX_FILE_PATTERNS, PLUGIN } from '@/constants';
import { type FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

import { reactHooksPluginRules } from '@/rules';

export const reactHooksPluginConfig: FlatConfig = {
  files: JSX_TSX_FILE_PATTERNS,
  plugins: { [PLUGIN.REACT_HOOKS]: reactHooksPlugin },
  rules: reactHooksPluginRules,
  ...getConfigName(PLUGIN.REACT_HOOKS, 'plugin'),
};
