import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';
import { baseConfig, reactNativeConfig, typescriptConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...reactNativeConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.REACT_NATIVE)
);

export { config as default, reactNativeConfig };
