import { FliptContext } from '../context/FliptProvider';
import type EvaluationConfig from '../types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import { useCallback, useContext } from 'react';
import type evaluation from '@betrybe/flipt-sdk/types/@types/Evaluation';
import useLazyTask from '../utils/hooks/useLazyTask';

type LazyBatchEvaluationResponse = {
  evaluate: () => Promise<void>;
  loading: boolean;
  match: evaluation<Record<string, string>>[];
  error: unknown;
};

function useLazyBatchEvaluation(
  requests: Request[],
  {
    requestId,
    isAnonymous,
  }: Pick<EvaluationConfig, 'requestId' | 'isAnonymous'>,
): LazyBatchEvaluationResponse {
  const fliptContext = useContext(FliptContext);

  if (!fliptContext) {
    throw new Error(
      'useLazyBatchEvaluation must be used within a FliptContext',
    );
  }

  const [evaluate, { loading, result, error }] = useLazyTask(
    useCallback(
      ({ signal }) =>
        fliptContext.flipt.batchEvaluate(requests, {
          requestId,
          signal,
          isAnonymous,
        }),
      [requests],
    ),
  );

  return { evaluate, loading, match: result?.responses ?? [], error };
}

export default useLazyBatchEvaluation;
