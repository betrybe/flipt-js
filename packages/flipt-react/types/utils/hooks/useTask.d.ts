import type { State } from '../types/State';
declare type UseTaskState = {
  executeTask: () => Promise<void>;
};
/**
 * React.js hook that immediately executes the task and provides the result states,
 * loading, error and a function to rerun the task.
 */
declare function useTask<T>(task: Task<T>): State<T> & UseTaskState;
export default useTask;
//# sourceMappingURL=useTask.d.ts.map
