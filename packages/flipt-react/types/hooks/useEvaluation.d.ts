import type EvaluationConfig from '@/types/EvaluationConfig';
declare type EvaluationResponse = {
  loading: boolean;
  match: boolean;
  value: string | null;
  error: unknown;
};
declare function useEvaluation(
  flagKey: string,
  config: EvaluationConfig,
): EvaluationResponse;
export default useEvaluation;
//# sourceMappingURL=useEvaluation.d.ts.map
