import { ConfigName, PluginName, PresetName } from '@/types';

export type ConfigType = 'plugin' | 'rule-set' | 'rules' | 'ignores' | 'config';

export function getConfigName(
  configName: ConfigName | PluginName | PresetName,
  type: ConfigType = 'config'
): { name: string } {
  return { name: `blazzi/${type}/${configName}` };
}
