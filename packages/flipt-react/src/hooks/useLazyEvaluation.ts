import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvaluationConfig';
import useLazyTask from '@/utils/hooks/useLazyTask';
import { useCallback, useContext } from 'react';

type LazyEvaluationResponse = {
  evaluate: () => Promise<void>;
  loading: boolean;
  match: boolean;
  value: string | null;
  error: unknown;
};

function useEvaluation(
  flagKey: string,
  { entityId, context, requestId, isAnonymous }: EvaluationConfig,
): LazyEvaluationResponse {
  const fliptContext = useContext(FliptContext);

  if (!fliptContext) {
    throw new Error('useEvaluation must be used within a FliptContext');
  }

  const [evaluate, { loading, result, error }] = useLazyTask(
    useCallback(
      ({ signal }) =>
        fliptContext.flipt.evaluate(flagKey, entityId, context, {
          requestId,
          signal,
          isAnonymous,
        }),
      [flagKey, entityId, context, requestId],
    ),
  );

  return {
    evaluate,
    loading,
    match: result?.match ?? false,
    value: result?.value ?? null,
    error,
  };
}

export default useEvaluation;
