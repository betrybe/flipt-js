import { act, renderHook } from '@testing-library/react-hooks';
import useLazyTask from './useLazyTask';

describe('useLazyTask | hook | integration test', () => {
  describe('when receives a task', () => {
    it('returns a tuple with a function and the state object', () => {
      const task = jest.fn(() => Promise.resolve(Math.random()));

      const { result } = renderHook(() => useLazyTask(task));

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: null,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: false,
        },
      ]);
    });
  });

  describe('when user executes successfully task lazily', () => {
    it("updates task's loading and result state", async () => {
      const value = Math.random();

      const task = jest.fn(() => Promise.resolve(value));

      const { result, waitForNextUpdate } = renderHook(() => useLazyTask(task));

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: null,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: false,
        },
      ]);

      act(() => {
        result.current[0]();
      });

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: null,
          loading: true,
          runningTasks: 1,
          wasStartedAtLeastOnce: true,
        },
      ]);

      await waitForNextUpdate();

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: value,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: true,
        },
      ]);
    });
  });

  describe('when user executes task that will fail lazily', () => {
    it("updates task's loading and result state", async () => {
      const error = new Error('Expected error.');

      const task = jest.fn(() => Promise.reject(error));

      const { result, waitForNextUpdate } = renderHook(() => useLazyTask(task));

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: null,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: false,
        },
      ]);

      act(() => {
        result.current[0]();
      });

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error: null,
          result: null,
          loading: true,
          runningTasks: 1,
          wasStartedAtLeastOnce: true,
        },
      ]);

      await waitForNextUpdate();

      expect(result.current).toEqual([
        expect.any(Function),
        {
          error,
          result: null,
          loading: false,
          runningTasks: 0,
          wasStartedAtLeastOnce: true,
        },
      ]);
    });
  });
});
