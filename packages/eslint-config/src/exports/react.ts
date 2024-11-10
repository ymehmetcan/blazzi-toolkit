import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig, reactConfig, typescriptConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...reactConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.REACT)
);

export { config as default, reactConfig };
