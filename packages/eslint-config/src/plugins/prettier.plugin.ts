import prettierPluginRecommendedConfig from 'eslint-plugin-prettier/recommended';

import { CONFIG_NAME } from '@/constants';
import { FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

export const prettierPluginConfig: FlatConfig = {
  ...prettierPluginRecommendedConfig,
  ...getConfigName(CONFIG_NAME.PRETTIER, 'plugin'),
};
