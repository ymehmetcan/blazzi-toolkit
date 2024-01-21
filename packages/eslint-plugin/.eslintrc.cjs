module.exports = {
  extends: [
    '@blazzi/eslint-config/typescript',
    '@blazzi/eslint-config/prettier',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
