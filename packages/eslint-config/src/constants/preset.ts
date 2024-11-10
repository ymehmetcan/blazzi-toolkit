import { PresetName } from '@/types';

export const PRESET = {
  ESLINT_RECOMMENDED: 'eslint-recommended',
} as const satisfies Record<string, PresetName>;
