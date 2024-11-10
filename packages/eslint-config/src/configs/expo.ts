import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores, expoIgnores } from '@/rules';
import { baseConfig, expoConfig, typescriptConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...expoConfig,
  prettierPluginConfig,
  baseIgnores,
  expoIgnores,
  getConfigName(CONFIG_NAME.EXPO)
);

export { config as default, expoConfig };
