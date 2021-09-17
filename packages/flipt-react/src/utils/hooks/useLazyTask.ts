import { useCallback } from 'react';
import ActionTypeEnum from '../enums/ActionTypeEnum';
import useTaskReducer from '../hooks/useTaskReducer';
import useMounted from './useMounted';
import isAbortError from '../errors/isAbortError';
import useAbortController from './useAbortController';
import type { State as State } from '../types/State';

/**
 * React.js hook that provides a function to run in a lazy (lazy) way
 * the task and the task's result, loading and error states.
 */
function useLazyTask<T>(task: Task<T>): [() => Promise<void>, State<T>] {
  const mounted = useMounted();
  const { signal } = useAbortController();
  const [state, dispatch] = useTaskReducer<T>();

  const executeTask = useCallback(async () => {
    dispatch({ type: ActionTypeEnum.STARTED });

    try {
      const result = await task({
        signal,
      });

      if (!mounted()) return;

      dispatch({
        result,
        type: ActionTypeEnum.COMPLETED,
      });
    } catch (error) {
      if (!mounted() || isAbortError(error)) return;

      dispatch({
        error,
        type: ActionTypeEnum.FAILED,
      });
    }
  }, [task, signal, mounted, dispatch]);

  return [executeTask, state];
}

export default useLazyTask;
