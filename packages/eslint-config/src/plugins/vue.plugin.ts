import vuePlugin from 'eslint-plugin-vue';

import { PLUGIN } from '@/constants';
import { FlatConfigArray } from '@/types';
import { getConfigName } from '@/utils';

export const vuePluginConfig: FlatConfigArray = [
  ...vuePlugin.configs['flat/recommended'],
  getConfigName(PLUGIN.VUE, 'plugin'),
];
