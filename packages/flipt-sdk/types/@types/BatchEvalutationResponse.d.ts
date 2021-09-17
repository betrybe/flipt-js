import type Context from './Context';
import type Evalutation from './Evaluation';
declare type BatchEvalutationResponse<T extends Context = Context> = {
    request_id: string;
    responses: Evalutation<T>[];
    request_duration_millis: 0;
};
export default BatchEvalutationResponse;
//# sourceMappingURL=BatchEvalutationResponse.d.ts.map