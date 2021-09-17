type AbortError = DOMException & { name: 'AbortError' };

/**
 * Verifies if received error is 'AbortError'.
 */
function isAbortError(error: unknown): error is AbortError {
  return error instanceof DOMException && error.name === 'AbortError';
}

export default isAbortError;
