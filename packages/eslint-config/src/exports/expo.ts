import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig, expoConfig, typescriptConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores, expoIgnores } from '@/rules';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...expoConfig,
  prettierPluginConfig,
  baseIgnores,
  expoIgnores,
  getConfigName(CONFIG_NAME.REACT)
);

export { config as default, expoConfig };
