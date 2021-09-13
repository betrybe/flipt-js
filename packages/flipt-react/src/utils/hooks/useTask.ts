import { useEffect } from 'react';
import type { State } from '../types/State';
import useLazyTask from './useLazyTask';

/**
 * @typedef {Object} UseTaskState
 * @property {() => Promise<void>} executeTask
 */

type UseTaskState = {
  executeTask: () => Promise<void>;
}

/**
 * React.js hook que executa de imediato a task e provê os estados do resultado,
 * carregamento, erro e uma função para executar novamente a task.
 * @returns {import('../types/State').State<T> & UseTaskState}
 * @template T
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
