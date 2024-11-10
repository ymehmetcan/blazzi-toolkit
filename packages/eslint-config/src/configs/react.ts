import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';
import { baseConfig, reactConfig, typescriptConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...reactConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.REACT)
);

export { config as default, reactConfig };
