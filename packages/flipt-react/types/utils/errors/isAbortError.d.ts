declare type AbortError = DOMException & {
    name: 'AbortError';
};
/**
 * Verifies if received error is 'AbortError'.
 */
declare function isAbortError(error: any): error is AbortError;
export default isAbortError;
//# sourceMappingURL=isAbortError.d.ts.map