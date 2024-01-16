module.exports = {
  extends: ['@blazzi'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'commitlint',
        'commitlint-config',
        'eslint',
        'eslint-config',
        'eslint-plugin',
        'prettier',
        'prettier-config',
      ],
    ],
  },
};
