import { type Linter as TSLinter } from '@typescript-eslint/utils/ts-eslint';
import type { Linter } from 'eslint';

/**
 * Relax plugins type limitation,
 * as most of the plugins did not have correct type info yet.
 *
 * An object containing a name-value mapping of plugin names to plugin objects.
 * When `files` is specified, these plugins are only available to the matching files.
 *
 * @see Using plugins in your configuration]
 * (https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
 */

export type FlatConfig = Omit<Linter.Config, 'plugins'> & {
  plugins?: Record<string, object>;
};

export type FlatConfigArray = FlatConfig[];

export type RulesRecord = TSLinter.RulesRecord;

export type ConfigName =
  | 'base'
  | 'expo'
  | 'next'
  | 'prettier'
  | 'react'
  | 'react-native'
  | 'typescript'
  | 'vue';

export type PluginName =
  | '@next/next'
  | 'jsx-a11y'
  | 'react'
  | 'react-hooks'
  | 'simple-import-sort'
  | 'typescript-eslint'
  | 'vue';

export type PresetName = 'eslint-recommended';
