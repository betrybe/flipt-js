// @ts-check

import { renderHook, act } from '@testing-library/react-hooks';
import useAbortController from './useAbortController';

describe('useAbortController | hook | integration test', () => {
  describe('when aborting an operation', () => {
    it('sends abort event to signal', () => {
      const { result } = renderHook(useAbortController);

      const { abort, signal } = result.current;

      const handleAbort = jest.fn();

      signal.addEventListener('abort', handleAbort);

      act(abort);

      expect(handleAbort).toHaveBeenCalled();
    });

    it('creates a new signal object', () => {
      const { result } = renderHook(useAbortController);

      const { abort, signal } = result.current;

      act(abort);

      expect(signal).not.toBe(result.current.signal);
    });
  });

  describe('when unmounts', () => {
    it('sends abort event to signal', async () => {
      const { result, unmount } = renderHook(useAbortController);

      const { signal } = result.current;

      const handleAbort = jest.fn();

      signal.addEventListener('abort', handleAbort);

      unmount();

      expect(handleAbort).toHaveBeenCalled();
    });
  });
});
