import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig, typescriptConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.TYPESCRIPT)
);

export { config as default, typescriptConfig };
