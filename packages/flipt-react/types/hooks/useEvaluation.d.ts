import type EvaluationConfig from "@/types/EvalutationConfig";
declare function useEvaluation(flagKey: string, { entityId, context, requestId }: EvaluationConfig): {
    loading: boolean;
    match: boolean;
    error: unknown;
};
export default useEvaluation;
//# sourceMappingURL=useEvaluation.d.ts.map