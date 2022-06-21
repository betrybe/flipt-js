import type EvaluationConfig from '../types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import type { EvaluationResponse } from '@betrybe/flipt-sdk';
declare type LazyBatchEvaluationResponse = {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: EvaluationResponse<Record<string, string>>[];
    error: unknown;
};
declare function useLazyBatchEvaluation(requests: Request[], { requestId, isAnonymous, }: Pick<EvaluationConfig, 'requestId' | 'isAnonymous'>): LazyBatchEvaluationResponse;
export default useLazyBatchEvaluation;
//# sourceMappingURL=useLazyBatchEvaluation.d.ts.map