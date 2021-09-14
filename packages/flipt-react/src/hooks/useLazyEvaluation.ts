import { FliptContext } from "@/context/FliptProvider";
import type EvaluationConfig from "@/types/EvalutationConfig";
import useLazyTask from "@/utils/hooks/useLazyTask";
import { useCallback, useContext } from "react";

function useEvaluation(flagKey: string, { entityId, context, requestId }: EvaluationConfig) {
    const fliptContext = useContext(FliptContext);

    if (!fliptContext) {
        throw new Error('useFeature must be used within a FliptContext');
    }

    const [evaluate, { loading, result, error }] = useLazyTask(useCallback(() => 
        fliptContext.flipt.evaluate(flagKey, entityId, context, requestId), 
        [flagKey, entityId, context, requestId])
    );

    return { evaluate, loading, match: result?.match ?? false, error };
}

export default useEvaluation;
