import { renderHook } from '@testing-library/react-hooks';
import useTask from './useTask';

describe('useTask | hook | integration test', () => {
  describe('when runs task', () => {
    it('returns task state', async () => {
      const value = Math.random();

      const task = jest.fn(() => Promise.resolve(value));

      const { result, waitForNextUpdate } = renderHook(() => useTask(task));

      expect(result.current).toEqual(
        expect.objectContaining({
          result: null,
          loading: true,
          runningTasks: 1,
          wasStartedAtLeastOnce: true,
        }),
      );

      await waitForNextUpdate();

      expect(result.current).toEqual(
        expect.objectContaining({
          result: value,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: true,
        }),
      );
    });
  });

  describe('when updates the task', () => {
    it('runs new task', async () => {
      const value = Math.random();

      const initialTask = jest.fn(() => Promise.resolve(value));

      const { result, rerender, waitForNextUpdate } = renderHook(useTask, {
        initialProps: initialTask,
      });

      expect(result.current).toEqual({
        error: null,
        result: null,
        loading: true,
        executeTask: expect.any(Function),
        runningTasks: 1,
        wasStartedAtLeastOnce: true,
      });

      await waitForNextUpdate();

      expect(initialTask).toHaveBeenCalled();

      expect(result.current).toEqual({
        error: null,
        result: value,
        loading: false,
        executeTask: expect.any(Function),
        runningTasks: 0,
        wasStartedAtLeastOnce: true,
      });

      const error = new Error('Expected error');

      const newTask = jest.fn(() => Promise.reject(error));

      rerender(newTask);

      expect(result.current).toEqual({
        error: null,
        result: value,
        loading: true,
        executeTask: expect.any(Function),
        runningTasks: 1,
        wasStartedAtLeastOnce: true,
      });

      await waitForNextUpdate();

      expect(newTask).toHaveBeenCalled();

      expect(result.current).toEqual({
        error,
        result: null,
        loading: false,
        executeTask: expect.any(Function),
        runningTasks: 0,
        wasStartedAtLeastOnce: true,
      });
    });
  });
});
