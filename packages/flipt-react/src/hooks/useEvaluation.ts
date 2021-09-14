import { FliptContext } from "@/context/FliptProvider";
import type EvaluationConfig from "@/types/EvalutationConfig";
import useTask from "@/utils/hooks/useTask";
import { useCallback, useContext } from "react";

function useEvaluation(flagKey: string, { entityId, context, requestId }: EvaluationConfig) {
    const fliptContext = useContext(FliptContext);

    if (!fliptContext) {
        throw new Error('useEvaluation must be used within a FliptContext');
    }

    const { loading, result, error } = useTask(useCallback(() => 
        fliptContext.flipt.evaluate(flagKey, entityId, context, requestId), 
        [flagKey, entityId, context, requestId])
    );

    return { loading, match: result?.match ?? false, error };
}

export default useEvaluation;
