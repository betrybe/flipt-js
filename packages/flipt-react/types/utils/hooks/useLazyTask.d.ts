import type { State as State } from '../types/State';
/**
 * React.js hook that provides a function to run in a lazy (lazy) way
 * the task and the task's result, loading and error states.
 */
declare function useLazyTask<T>(task: Task<T>): [() => Promise<void>, State<T>];
export default useLazyTask;
//# sourceMappingURL=useLazyTask.d.ts.map
