declare type FliptConfig = {
    uri: string;
};
declare type Context = Record<string, string>;
declare type Evalutation<T extends Context = Context> = {
    request_id: string;
    entity_id: string;
    request_context: T;
    match: true;
    flag_key: string;
    segment_key: string;
    timestamp: string;
    value: string;
    request_duration_millis: number;
};
declare type BatchEvalutationResponse<T extends Context = Context> = {
    request_id: string;
    responses: Evalutation<T>[];
    request_duration_millis: 0;
};
declare type Request = {
    request_id: string;
    flag_key: string;
    entity_id: string;
    context: Context;
};
declare function createFliptSDK(config: FliptConfig): () => {
    evaluate: (flagKey: string, entityId: string, context: Context, requestId?: string | undefined) => Promise<Evalutation<Context>>;
    batchEvaluate: (requestId: string, requests: Request[]) => Promise<BatchEvalutationResponse<Context>>;
};
export default createFliptSDK;
//# sourceMappingURL=createFliptSDK.d.ts.map