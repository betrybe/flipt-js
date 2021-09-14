declare type UseAbortControllerAPI = {
    abort: () => void;
    signal: AbortSignal;
};
/**
 * React.js hook that provides the 'abort' function and the 'signal' object, which must be
 * defined in the init options of the 'fetch' function and other APIs whose
 * operations can be aborted when executing the 'abort' function.
 */
declare function useAbortController(): UseAbortControllerAPI;
export default useAbortController;
//# sourceMappingURL=useAbortController.d.ts.map