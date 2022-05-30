import type Context from './Context';
import type EvaluationResponse from './EvaluationResponse';
declare type BatchEvaluationResponse<T extends Context = Context> = {
    request_id: string;
    responses: EvaluationResponse<T>[];
    request_duration_millis: 0;
};
export default BatchEvaluationResponse;
//# sourceMappingURL=BatchEvaluationResponse.d.ts.map