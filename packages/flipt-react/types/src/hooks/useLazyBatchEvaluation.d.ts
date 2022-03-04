import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import type Evalutation from '@betrybe/flipt-sdk/types/@types/Evaluation';
declare type LazyBatchEvaluationResponse = {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: Evalutation<Record<string, string>>[];
    error: unknown;
};
declare function useLazyBatchEvaluation(requests: Request[], { requestId, isAnonymous }: Pick<EvaluationConfig, 'requestId' | 'isAnonymous'>): LazyBatchEvaluationResponse;
export default useLazyBatchEvaluation;
//# sourceMappingURL=useLazyBatchEvaluation.d.ts.map