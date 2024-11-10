import { CONFIG_NAME } from '@/constants';
import { type FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

import {
  jsxA11yPluginConfig,
  nextPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';

export const nextConfig: FlatConfigArray = [
  reactPluginConfig,
  reactHooksPluginConfig,
  jsxA11yPluginConfig,
  nextPluginConfig,
  getConfigName(CONFIG_NAME.NEXT, 'rule-set'),
];
