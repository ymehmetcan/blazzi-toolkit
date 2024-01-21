require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './base',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
  ],
  plugins: ['vue'],
};
