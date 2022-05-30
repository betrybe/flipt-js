import type BatchEvaluationResponse from './@types/BatchEvaluationResponse';
import type Context from './@types/Context';
import type EvaluationResponse from './@types/EvaluationResponse';
import type FliptConfig from './@types/FliptConfig';
declare type RequestOptions = {
    requestId?: string;
    isAnonymous?: boolean;
    signal?: AbortSignal | null;
};
declare type Request = {
    flag_key: string;
    entity_id: string;
    context: Context;
    request_id?: string;
};
export declare type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, options?: RequestOptions): Promise<EvaluationResponse<Context>>;
    batchEvaluate(requests: Request[], options?: RequestOptions): Promise<BatchEvaluationResponse<Context>>;
};
declare function createFliptSDK(config: FliptConfig): FlipSDKInstance;
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map