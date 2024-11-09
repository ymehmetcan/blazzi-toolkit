import tseslint from 'typescript-eslint';

export { default as blazziBaseConfig } from '@/configs/base';
export { default as blazziNextConfig } from '@/configs/next';
export { default as blazziPrettierConfig } from '@/configs/prettier';
export { default as blazziReactConfig } from '@/configs/react';
export { default as blazziReactNativeConfig } from '@/configs/react-native';
export { default as blazziTypescriptConfig } from '@/configs/typescript';
export { default as blazziVueConfig } from '@/configs/vue';

export const defineConfig = tseslint.config;
