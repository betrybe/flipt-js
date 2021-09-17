import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvalutationConfig';
import useTask from '@/utils/hooks/useTask';
import { useContext } from 'react';

function useEvaluation(
  flagKey: string,
  { entityId, context, requestId }: EvaluationConfig,
): { loading: boolean; match: boolean; error: unknown } {
  const fliptContext = useContext(FliptContext);

  if (!fliptContext) {
    throw new Error('useEvaluation must be used within a FliptContext');
  }

  const { loading, result, error } = useTask(() =>
    fliptContext.flipt.evaluate(flagKey, entityId, context, requestId),
  );

  return { loading, match: result?.match ?? false, error };
}

export default useEvaluation;
