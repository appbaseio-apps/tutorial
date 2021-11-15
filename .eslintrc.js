module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    parser: '@babel/eslint-parser',
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    settings: {
      "import/resolver": {
        node: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
            moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
		indent: 0,
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/forbid-prop-types': 0,
		'no-use-before-define': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'import/prefer-default-export': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-trailing-spaces': 0,
	},
  };