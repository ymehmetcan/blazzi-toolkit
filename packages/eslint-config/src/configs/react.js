require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: true,
      },
      rules: {
        // Disable JS specific rules
        'react/jsx-filename-extension': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',

        // Breaks @typescript-eslint/parser
        'react/jsx-indent': 'off',
        'react/no-typos': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-wrap-multilines': 'off',
      },
    },
  ],
};
