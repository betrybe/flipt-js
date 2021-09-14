import type EvaluationConfig from "@/types/EvalutationConfig";
import type { Request } from "@betrybe/flipt-sdk";
declare function useLazyBatchEvaluation(requests: Request[], options: Pick<EvaluationConfig, 'requestId'>): {
    loading: boolean;
    match: import("@betrybe/flipt-sdk/types/@types/Evaluation").default<import("@betrybe/flipt-sdk/types/@types/Context").default>[];
    error: unknown;
};
export default useLazyBatchEvaluation;
//# sourceMappingURL=useLazyBatchEvaluation.d.ts.map