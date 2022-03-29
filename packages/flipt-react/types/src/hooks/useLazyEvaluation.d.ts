import type EvaluationConfig from '../types/EvaluationConfig';
declare type LazyEvaluationResponse = {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: boolean;
    value: string | null;
    error: unknown;
};
declare function useEvaluation(flagKey: string, { entityId, context, requestId, isAnonymous }: EvaluationConfig): LazyEvaluationResponse;
export default useEvaluation;
//# sourceMappingURL=useLazyEvaluation.d.ts.map