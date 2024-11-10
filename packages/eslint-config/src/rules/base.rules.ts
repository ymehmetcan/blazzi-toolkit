import { CONFIG_NAME } from '@/constants';
import { FlatConfig, RulesRecord } from '@/types';
import { getConfigName } from '@/utils';

export const baseRules: RulesRecord = {
  'no-console': 'warn',
};

export const baseIgnores: FlatConfig = {
  ignores: ['**/dist/', '**/build/'],
  ...getConfigName(CONFIG_NAME.BASE, 'ignores'),
};
