import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';
import { baseConfig, typescriptConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.TYPESCRIPT)
);

export { config as default, typescriptConfig };
