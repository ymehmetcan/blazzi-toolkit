import { CONFIG_NAME } from '@/constants';
import { defineConfig, getConfigName } from '@/utils';

import { baseConfig, nextConfig, typescriptConfig } from '@/configs';
import { prettierPluginConfig } from '@/plugins';
import { baseIgnores, nextIgnores } from '@/rules';

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
