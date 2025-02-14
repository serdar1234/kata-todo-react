module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'build'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'consistent-return': 0,
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'jsx-a11y/label-has-associated-control': 0,
    'prettier/prettier': 'error',
    'linebreak-style': [0, 'unix'],
    'max-len': ["error", { "code": 120 }],
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'object-curly-newline': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/prop-types': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    'react': { 
      'version': 'detect' 
    },
  },
};
