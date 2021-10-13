import { FliptContext } from '@/context/FliptProvider';
import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import useTask from '@/utils/hooks/useTask';
import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useLayoutEffect, useRef } from 'react';
import type { Evaluation } from '@betrybe/flipt-sdk';

type BatchEvaluationResponse = {
  loading: boolean;
  match: Evaluation<Record<string, string>>[];
  error: unknown;
};

function useBatchEvaluation(
  requests: Request[],
  config: Pick<EvaluationConfig, 'requestId'>,
): BatchEvaluationResponse {
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
        fliptContext.flipt.batchEvaluate(requests, {
          requestId: latestConfig.current.requestId,
          signal,
        }),
      [requests, latestConfig.current],
    ),
  );

  return { loading, match: result?.responses ?? [], error };
}

export default useBatchEvaluation;
