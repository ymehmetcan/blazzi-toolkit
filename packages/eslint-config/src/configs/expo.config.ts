import { CONFIG_NAME } from '@/constants';
import { type FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

import {
  jsxA11yPluginConfig,
  reactHooksPluginConfig,
  reactPluginConfig,
} from '@/plugins';

export const expoConfig: FlatConfigArray = [
  reactPluginConfig,
  reactHooksPluginConfig,
  jsxA11yPluginConfig,
  getConfigName(CONFIG_NAME.EXPO, 'rule-set'),
];
