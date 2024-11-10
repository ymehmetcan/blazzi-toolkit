import { CONFIG_NAME } from '@/constants/configName';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';
import { baseConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.BASE)
);

export { baseConfig, config as default };
