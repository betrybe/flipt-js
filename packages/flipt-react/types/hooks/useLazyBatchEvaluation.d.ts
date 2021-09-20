import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@trybe/flipt-sdk';
import type Evalutation from '@trybe/flipt-sdk/types/@types/Evaluation';
declare function useLazyBatchEvaluation(requests: Request[], { requestId }: Pick<EvaluationConfig, 'requestId'>): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: Evalutation<Record<string, string>>[];
    error: unknown;
};
export default useLazyBatchEvaluation;
//# sourceMappingURL=useLazyBatchEvaluation.d.ts.map