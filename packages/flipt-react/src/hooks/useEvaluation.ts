import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvaluationConfig';
import useTask from '@/utils/hooks/useTask';
import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useLayoutEffect, useRef } from 'react';

type EvaluationResponse = {
  loading: boolean;
  match: boolean;
  value: string | null;
  error: unknown;
};

function useEvaluation(
  flagKey: string,
  config: EvaluationConfig,
): EvaluationResponse {
  const fliptContext = useContext(FliptContext);

  const latestConfig = useRef(config);

  if (!fliptContext) {
    throw new Error('useEvaluation must be used within a FliptContext');
  }

  useLayoutEffect(() => {
    if (!isEqual(latestConfig.current, config)) {
      latestConfig.current = config;
    }
  }, [config]);

  const { loading, result, error } = useTask(
    useCallback(
      ({ signal }) =>
        fliptContext.flipt.evaluate(
          flagKey,
          latestConfig.current.entityId,
          latestConfig.current.context,
          {
            requestId: latestConfig.current.requestId,
            signal,
          },
        ),
      [flagKey, latestConfig.current],
    ),
  );

  return {
    loading,
    match: result?.match ?? false,
    value: result?.value ?? null,
    error,
  };
}

export default useEvaluation;
