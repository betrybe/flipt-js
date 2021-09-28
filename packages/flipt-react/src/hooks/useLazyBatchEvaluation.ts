import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import { useCallback, useContext } from 'react';
import type Evalutation from '@betrybe/flipt-sdk/types/@types/Evaluation';
import useLazyTask from '@/utils/hooks/useLazyTask';

function useLazyBatchEvaluation(
  requests: Request[],
  { requestId }: Pick<EvaluationConfig, 'requestId'>,
): {
  evaluate: () => Promise<void>;
  loading: boolean;
  match: Evalutation<Record<string, string>>[];
  error: unknown;
} {
  const fliptContext = useContext(FliptContext);

  if (!fliptContext) {
    throw new Error(
      'useLazyBatchEvaluation must be used within a FliptContext',
    );
  }

  const [evaluate, { loading, result, error }] = useLazyTask(
    useCallback(
      ({ signal }) =>
        fliptContext.flipt.batchEvaluate(requests, { requestId, signal }),
      [requests],
    ),
  );

  return { evaluate, loading, match: result?.responses ?? [], error };
}

export default useLazyBatchEvaluation;
