import { renderHook, act } from '@testing-library/react-hooks';
import UnhandledActionTypeError from '../../errors/UnhandledActionTypeError';
import ActionTypeEnum from '../enums/ActionTypeEnum';
import useTaskReducer from './useTaskReducer';

describe('useTaskReducer | hook | integration test', () => {
  describe('when initializes without a provided state', () => {
    it('returns initial state', () => {
      const { result } = renderHook(() => useTaskReducer());

      expect(result.current[0]).toEqual({
        error: null,
        result: null,
        loading: false,
        runningTasks: 0,
        wasStartedAtLeastOnce: false,
      });
    });
  });

  describe('when initializes with a provided state', () => {
    it('returns initial state overwrited by provided state', () => {
      const { result } = renderHook(() =>
        useTaskReducer({
          loading: true,
          runningTasks: 1,
          wasStartedAtLeastOnce: true,
        }),
      );

      expect(result.current[0]).toEqual({
        error: null,
        result: null,
        loading: true,
        runningTasks: 1,
        wasStartedAtLeastOnce: true,
      });
    });
  });

  describe('when starts a tasks', () => {
    it('increments runningTasks for each started task', () => {
      const { result } = renderHook(() => useTaskReducer());

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          runningTasks: 0,
        }),
      );

      const dispatch = result.current[1];

      act(() => dispatch({ type: ActionTypeEnum.STARTED }));

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          runningTasks: 1,
        }),
      );

      act(() => {
        dispatch({ type: ActionTypeEnum.STARTED });
        dispatch({ type: ActionTypeEnum.STARTED });
        dispatch({ type: ActionTypeEnum.STARTED });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          runningTasks: 4,
        }),
      );
    });

    it("set wasStartedAtLeastOnce to 'true'", () => {
      const { result } = renderHook(() => useTaskReducer());

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          wasStartedAtLeastOnce: false,
        }),
      );

      const dispatch = result.current[1];

      act(() => dispatch({ type: ActionTypeEnum.STARTED }));

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          wasStartedAtLeastOnce: true,
        }),
      );
    });

    it("set loading to 'true'", () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: false,
        }),
      );

      act(() => dispatch({ type: ActionTypeEnum.STARTED }));

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: true,
        }),
      );
    });
  });

  describe('when completes a task', () => {
    it("set result as 'action.result'", () => {
      const value = Math.random();

      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({ result: null }),
      );

      act(() =>
        dispatch({
          type: ActionTypeEnum.COMPLETED,
          result: value,
        }),
      );

      expect(result.current[0]).toEqual(
        expect.objectContaining({ result: value }),
      );
    });

    it("decrements runningTasks and set loading to 'false'", () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: false,
          runningTasks: 0,
        }),
      );

      act(() => dispatch({ type: ActionTypeEnum.STARTED }));

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: true,
          runningTasks: 1,
        }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.COMPLETED,
          result: null,
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: false,
          runningTasks: 0,
        }),
      );
    });

    it('empties the error', () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          error: null,
        }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.FAILED,
          error: new Error('Something bad happened.'),
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          error: new Error('Something bad happened.'),
        }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.COMPLETED,
          result: null,
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({ error: null }),
      );
    });
  });

  describe('when fails a task', () => {
    it("set error as 'action.error'", () => {
      const error = new Error('Database just exploded!');

      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({ error: null }),
      );

      act(() =>
        dispatch({
          error,
          type: ActionTypeEnum.FAILED,
        }),
      );

      expect(result.current[0]).toEqual(expect.objectContaining({ error }));
    });

    it("decrements runningTasks and set loading to 'false'", () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: false,
          runningTasks: 0,
        }),
      );

      act(() => dispatch({ type: ActionTypeEnum.STARTED }));

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: true,
          runningTasks: 1,
        }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.FAILED,
          error: null,
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          loading: false,
          runningTasks: 0,
        }),
      );
    });

    it('empties the result', () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({
          result: null,
        }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.COMPLETED,
          result: "I'm a valid token.",
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({ result: "I'm a valid token." }),
      );

      act(() => {
        dispatch({
          type: ActionTypeEnum.FAILED,
          error: null,
        });
      });

      expect(result.current[0]).toEqual(
        expect.objectContaining({ result: null }),
      );
    });
  });

  describe('when dispatches the wrong action type', () => {
    it('throws an UnhandledActionTypeError', () => {
      const { result } = renderHook(() => useTaskReducer());

      const dispatch = result.current[1];

      expect(result.current[0]).toEqual(
        expect.objectContaining({ error: null }),
      );

      act(() =>
        dispatch({
          // @ts-ignore
          type: 'Any other type',
        }),
      );

      expect(result.error).toBeInstanceOf(UnhandledActionTypeError);
    });
  });
});
