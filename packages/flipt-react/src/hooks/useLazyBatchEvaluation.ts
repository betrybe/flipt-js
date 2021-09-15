import { FliptContext } from "@/context/FliptProvider";
import type EvaluationConfig from "@/types/EvalutationConfig";
import type { Request } from "@trybe/flipt-sdk";
import useTask from "@/utils/hooks/useTask";
import { useCallback, useContext } from "react";

function useLazyBatchEvaluation(requests: Request[], options: Pick<EvaluationConfig, 'requestId'>) {
    const fliptContext = useContext(FliptContext);

    if (!fliptContext) {
        throw new Error('useLazyBatchEvaluation must be used within a FliptContext');
    }

    const { loading, result, error } = useTask(useCallback(() => 
        fliptContext.flipt.batchEvaluate(requests, options.requestId), 
        [requests, options])
    );

    return { loading, match: result?.responses ?? [], error };
}

export default useLazyBatchEvaluation;
