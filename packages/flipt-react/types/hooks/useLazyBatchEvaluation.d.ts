import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import type Evalutation from '@betrybe/flipt-sdk/types/@types/Evaluation';
declare function useLazyBatchEvaluation(requests: Request[], { requestId }: Pick<EvaluationConfig, 'requestId'>): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: Evalutation<Record<string, string>>[];
    error: unknown;
};
export default useLazyBatchEvaluation;
//# sourceMappingURL=useLazyBatchEvaluation.d.ts.map