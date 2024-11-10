import { CONFIG_NAME } from '@/constants';
import { RulesRecord } from '@/types';
import { getConfigName } from '@/utils';

export const nextPluginRules: RulesRecord = {
  // Breaks with ESLint 9, should be activated after the next plugin is updated
  '@next/next/no-duplicate-head': 'off',
};

export const nextIgnores = {
  ignores: ['.next/'],
  ...getConfigName(CONFIG_NAME.NEXT, 'ignores'),
};
