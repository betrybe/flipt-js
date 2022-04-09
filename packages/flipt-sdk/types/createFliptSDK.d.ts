import type BatchEvaluationResponse from './@types/BatchEvaluationResponse';
import type Context from './@types/Context';
import type evaluation from './@types/Evaluation';
import type FliptConfig from './@types/FliptConfig';
import type Request from './@types/Request';
import type RequestOptions from './@types/RequestOptions';
export declare type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, options?: RequestOptions): Promise<evaluation<Context>>;
    batchEvaluate(requests: Request[], options?: RequestOptions): Promise<BatchEvaluationResponse<Context>>;
};
declare function createFliptSDK(config: FliptConfig): FlipSDKInstance;
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map