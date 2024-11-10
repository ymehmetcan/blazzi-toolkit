import { PluginName } from '@/types';

export const PLUGIN = {
  JSX_A11Y: 'jsx-a11y',
  NEXT: '@next/next',
  REACT: 'react',
  REACT_HOOKS: 'react-hooks',
  SIMPLE_IMPORT_SORT: 'simple-import-sort',
  TS_ESLINT: 'typescript-eslint',
  VUE: 'vue',
} as const satisfies Record<string, PluginName>;
