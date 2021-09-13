import type BatchEvalutationResponse from "./@types/BatchEvalutationResponse";
import type Context from "./@types/Context";
import type Evalutation from "./@types/Evaluation";
import type FliptConfig from "./@types/FliptConfig";
import type Request from "./@types/Request";
import { BATCH_EVALUATE_ROUTE, EVALUTE_ROUTE } from "./routes";

export type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, requestId?: string | undefined): Promise<Evalutation<Context>>;
    batchEvaluate(requests: Request[], requestId?: string | undefined): Promise<BatchEvalutationResponse<Context>>;
}

function createFliptSDK(config: FliptConfig): FlipSDKInstance {
    if (!window.fetch)
        throw new Error('This browser doesn\'t support window.fetch()');

    const customFetch = (input: RequestInfo, init?: RequestInit) => fetch(config.uri + input, {
        headers: {
            'Content-Type': 'application/json',
            ...init?.headers,
        },
        ...init,
    });

    function evaluate(flagKey: string, entityId: string, context: Context, requestId?: string) {
        return customFetch(EVALUTE_ROUTE, {
            method: 'POST',
            body: JSON.stringify({
                request_id: requestId,
                flag_key: flagKey,
                entity_id: entityId,
                context
            } as Request),
            })
        .then<Evalutation<typeof context>>(response => response.json())
    }
    
    function batchEvaluate(requests: Request[], requestId?: string) {
        return customFetch(BATCH_EVALUATE_ROUTE, {
            method: 'POST',
            body: JSON.stringify({
                request_id: requestId,
                requests,
            }),
            })
        .then<BatchEvalutationResponse<typeof requests[number]['context']>>(response => response.json())
    }

    return ({
        evaluate,
        batchEvaluate
    });
}

export default createFliptSDK;