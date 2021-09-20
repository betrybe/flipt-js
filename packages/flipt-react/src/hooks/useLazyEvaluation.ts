import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvaluationConfig';
import useLazyTask from '@/utils/hooks/useLazyTask';
import { useCallback, useContext } from 'react';

function useEvaluation(
  flagKey: string,
  { entityId, context, requestId }: EvaluationConfig,
): {
  evaluate: () => Promise<void>;
  loading: boolean;
  match: boolean;
  error: unknown;
} {
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
        }),
      [flagKey, entityId, context, requestId],
    ),
  );

  return { evaluate, loading, match: result?.match ?? false, error };
}

export default useEvaluation;
