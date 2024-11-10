import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';
import { baseConfig, typescriptConfig, vueConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...vueConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.VUE)
);

export { config as default, vueConfig };
