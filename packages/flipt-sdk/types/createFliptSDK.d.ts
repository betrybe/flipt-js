import type { BatchEvaluationResponse, Context, EvaluationResponse, FliptConfig, Request, RequestOptions } from './@types';
export declare type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, options?: RequestOptions): Promise<EvaluationResponse<Context>>;
    batchEvaluate(requests: Request[], options?: RequestOptions): Promise<BatchEvaluationResponse<Context>>;
};
declare function createFliptSDK(config: FliptConfig): FlipSDKInstance;
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map