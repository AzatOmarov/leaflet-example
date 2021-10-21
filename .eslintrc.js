module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'commonjs': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': [
      'error',
      'always'
    ],
    'no-var': [
      'error'
    ],
    'react/prop-types': 0,
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': true,
        'ignoreComments': true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'curly': [
      'error',
      'all'
    ],
    'block-spacing': [
      2
    ],
    'brace-style': [
      2,
      '1tbs', {
        'allowSingleLine': false
      }
    ],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }]
  }
};
