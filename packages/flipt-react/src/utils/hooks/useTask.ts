import { useEffect } from 'react';
import type { State } from '../types/State';
import useLazyTask from './useLazyTask';

type UseTaskState = {
  executeTask: () => Promise<void>;
};

/**
 * React.js hook that immediately executes the task and provides the result states,
 * loading, error and a function to rerun the task.
 */
function useTask<T>(task: Task<T>): State<T> & UseTaskState {
  const [executeTask, state] = useLazyTask(task);

  useEffect(() => {
    executeTask();
  }, [executeTask]);

  return {
    ...state,
    executeTask,
    loading: state.wasStartedAtLeastOnce ? state.loading : true,
    runningTasks: state.wasStartedAtLeastOnce ? state.runningTasks : 1,
    wasStartedAtLeastOnce: true,
  };
}

export default useTask;
