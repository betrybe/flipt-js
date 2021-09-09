
// @ts-check
/* eslint-env node */

'use strict';

/**
 * An object with ESLint options.
 * @type {import('eslint').Linter.Config}
 */
const options = {
  extends: ['../../.eslintrc.js', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        directory: 'packages/flipt-sdk'
      }
    }
  },
  rules: { 'react/prop-types': 'off', 'no-shadow': 'off' },
  env: {
    browser: true
  }
};

module.exports = options;