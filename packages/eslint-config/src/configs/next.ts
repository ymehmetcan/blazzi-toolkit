import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { prettierPluginConfig } from '@/plugins';
import { baseIgnores, nextIgnores } from '@/rules';
import { baseConfig, nextConfig, typescriptConfig } from '@/rulesets';

const config = defineConfig(
  ...baseConfig,
  ...typescriptConfig,
  ...nextConfig,
  prettierPluginConfig,
  baseIgnores,
  nextIgnores,
  getConfigName(CONFIG_NAME.NEXT)
);

export { config as default, nextConfig };
