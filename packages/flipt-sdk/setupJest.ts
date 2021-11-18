import 'whatwg-fetch';

// This file was needed because Jest doesn't have the fetch polyfill natively implemented for
// jsdom testing environment (which is required for accessing the window object in the tests)
// Therefore I used the workaround which can be seen here:
// https://github.com/jsdom/jsdom/issues/1724#issuecomment-720727999
