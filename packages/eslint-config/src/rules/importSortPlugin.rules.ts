import { RulesRecord } from '@/types';

export const importSortPluginRules: RulesRecord = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Side effects
        ['^\\u0000'],

        // Main frameworks & libraries
        [
          '^(react(-native|-dom)?(/.*)?)$',
          '^next',
          '^vue',
          '^nuxt',
          '^@angular(/.*|$)',
          '^expo',
          '^node',
        ],

        // External packages
        ['^@blazzi', '^@?\\w'],

        // Internal common directories
        ['^@?/?(config|types|interfaces|constants|helpers|utils|lib)(/.*|$)'],

        // Internal directories
        ['^@/'],

        // Components
        ['((.*)/)?(providers|layouts|pages|modules|features|components)/?'],

        // Relative parent imports: '../' comes last
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

        // Relative imports: './' comes last
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

        // Styles
        ['^.+\\.(s?css|(style(s)?)\\..+)$'],

        // Static assets
        ['(asset(s?)|public|static|images)(/.*|$)', '^.+\\.svg$', '^.+\\.png$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};
