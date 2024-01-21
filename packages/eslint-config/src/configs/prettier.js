require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
