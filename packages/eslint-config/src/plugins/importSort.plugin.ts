import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import { PLUGIN } from '@/constants';
import { FlatConfig } from '@/types';
import { getConfigName } from '@/utils';

import { importSortPluginRules } from '@/rules';

export const importSortPluginConfig: FlatConfig = {
  plugins: { [PLUGIN.SIMPLE_IMPORT_SORT]: simpleImportSortPlugin },
  rules: importSortPluginRules,
  ...getConfigName(PLUGIN.SIMPLE_IMPORT_SORT, 'plugin'),
};
