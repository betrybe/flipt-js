// @ts-check
/* eslint-env node */

/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/setupJest.ts'],
};

// used 'jsdom' testEnvironment so I can access the window object in the tests

module.exports = options;
