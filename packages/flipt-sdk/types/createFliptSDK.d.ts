import type BatchEvalutationResponse from "./@types/BatchEvalutationResponse";
import type Context from "./@types/Context";
import type Evalutation from "./@types/Evaluation";
import type FliptConfig from "./@types/FliptConfig";
import type Request from "./@types/Request";
export declare type FlipSDKInstance = {
    evaluate(flagKey: string, entityId: string, context: Context, requestId?: string | undefined): Promise<Evalutation<Context>>;
    batchEvaluate(requests: Request[], requestId?: string | undefined): Promise<BatchEvalutationResponse<Context>>;
};
declare function createFliptSDK(config: FliptConfig): FlipSDKInstance;
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map