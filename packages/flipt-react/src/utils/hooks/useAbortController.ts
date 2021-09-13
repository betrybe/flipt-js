// @ts-check

import { useCallback, useLayoutEffect, useState } from 'react';
import useMounted from './useMounted';

type UseAbortControllerAPI = {
    abort: () => void;
    signal: AbortSignal;
}

/**
 * React.js hook que provê a função 'abort' e o objeto 'signal', que deve ser
 * definido nas opções de init da função 'fetch' e de outras APIs cujas
 * operações podem ser abortadas ao executar a função 'abort'.
 */
function useAbortController(): UseAbortControllerAPI {
  const mounted = useMounted();

  const [controller, setController] = useState(() => new window.AbortController());

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
