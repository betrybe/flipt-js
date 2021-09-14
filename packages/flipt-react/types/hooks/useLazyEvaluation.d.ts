import type EvaluationConfig from "@/types/EvalutationConfig";
declare function useEvaluation(flagKey: string, { entityId, context, requestId }: EvaluationConfig): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: boolean;
    error: unknown;
};
export default useEvaluation;
//# sourceMappingURL=useLazyEvaluation.d.ts.map