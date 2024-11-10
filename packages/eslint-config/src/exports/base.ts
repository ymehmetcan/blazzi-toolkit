import { CONFIG_NAME } from '@/constants/configName';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores } from '@/rules';

const config = defineConfig(
  ...baseConfig,
  prettierPluginConfig,
  baseIgnores,
  getConfigName(CONFIG_NAME.BASE)
);

export { baseConfig, config as default };
