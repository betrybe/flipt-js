import { useCallback, useLayoutEffect, useState } from 'react';
import useMounted from './useMounted';

type UseAbortControllerAPI = {
  abort: () => void;
  signal: AbortSignal;
};

/**
 * React.js hook that provides the 'abort' function and the 'signal' object, which must be
 * defined in the init options of the 'fetch' function and other APIs whose
 * operations can be aborted when executing the 'abort' function.
 */
function useAbortController(): UseAbortControllerAPI {
  const mounted = useMounted();

  const [controller, setController] = useState(
    () => new window.AbortController(),
  );

  const abort = useCallback(() => {
    if (mounted()) {
      setController(new window.AbortController());
    }
  }, [mounted]);

  useLayoutEffect(() => () => controller.abort(), [controller]);

  return {
    abort,
    signal: controller.signal,
  };
}

export default useAbortController;
