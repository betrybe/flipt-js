import type EvaluationConfig from '../types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import type { EvaluationResponse } from '@betrybe/flipt-sdk';
declare type BatchEvaluationResponse = {
    loading: boolean;
    match: EvaluationResponse<Record<string, string>>[];
    error: unknown;
};
declare function useBatchEvaluation(requests: Request[], config?: Pick<EvaluationConfig, 'requestId' | 'isAnonymous'>): BatchEvaluationResponse;
export default useBatchEvaluation;
//# sourceMappingURL=useBatchEvaluation.d.ts.map