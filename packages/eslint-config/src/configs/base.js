require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['eslint:recommended', 'plugin:@blazzi/recommended'],
  plugins: ['@blazzi'],
  overrides: [
    {
      // For ECMAScript modules
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      // For CommonJS modules
      files: ['*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
