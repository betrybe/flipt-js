import type BatchEvalutationResponse from './@types/BatchEvalutationResponse';
import type Context from './@types/Context';
import type Evalutation from './@types/Evaluation';
import type FliptConfig from './@types/FliptConfig';
import type Request from './@types/Request';
declare type RequestOptions = {
    requestId?: string;
    isAnonymous?: boolean;
    signal?: AbortSignal | null;
};
export declare type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, options: RequestOptions): Promise<Evalutation<Context>>;
    batchEvaluate(requests: Request[], options: RequestOptions): Promise<BatchEvalutationResponse<Context>>;
};
declare function createFliptSDK(config: FliptConfig): FlipSDKInstance;
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map