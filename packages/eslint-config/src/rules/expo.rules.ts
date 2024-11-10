import { CONFIG_NAME } from '@/constants';
import { FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

export const expoIgnores: FlatConfig = {
  ignores: ['android', 'ios', 'web', '.expo', 'expo-env.d.ts'],
  ...getConfigName(CONFIG_NAME.EXPO, 'ignores'),
};
