import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig, typescriptConfig, vueConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...vueConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.VUE)
);

export { config as default, vueConfig };
