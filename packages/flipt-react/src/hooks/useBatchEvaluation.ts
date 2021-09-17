import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvalutationConfig';
import type { Request } from '@trybe/flipt-sdk';
import useTask from '@/utils/hooks/useTask';
import { useCallback, useContext } from 'react';
import type Evalutation from '@trybe/flipt-sdk/types/@types/Evaluation';

function useBatchEvaluation(
  requests: Request[],
  { requestId }: Pick<EvaluationConfig, 'requestId'>,
): {
  loading: boolean;
  match: Evalutation<Record<string, string>>[];
  error: unknown;
} {
  const fliptContext = useContext(FliptContext);

  if (!fliptContext) {
    throw new Error('useBatchEvaluation must be used within a FliptContext');
  }

  const { loading, result, error } = useTask(
    useCallback(
      ({ signal }) =>
        fliptContext.flipt.batchEvaluate(requests, { requestId, signal }),
      [requests],
    ),
  );

  return { loading, match: result?.responses ?? [], error };
}

export default useBatchEvaluation;
