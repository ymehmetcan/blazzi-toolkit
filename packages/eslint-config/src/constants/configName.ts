import { ConfigName } from '@/types';

export const CONFIG_NAME = {
  BASE: 'base',
  EXPO: 'expo',
  NEXT: 'next',
  PRETTIER: 'prettier',
  REACT: 'react',
  REACT_NATIVE: 'react-native',
  TYPESCRIPT: 'typescript',
  VUE: 'vue',
} as const satisfies Record<string, ConfigName>;
