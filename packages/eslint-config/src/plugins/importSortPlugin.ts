import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import { FlatConfig } from '@/types';

import { importSortRules } from '@/rules';

export const importSortPluginConfig: FlatConfig = {
  name: 'blazzi/plugin:simple-import-sort',
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    ...importSortRules,
  },
};
