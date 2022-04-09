import type Context from './Context';
import type evaluation from './Evaluation';
declare type BatchEvaluationResponse<T extends Context = Context> = {
    request_id: string;
    responses: evaluation<T>[];
    request_duration_millis: 0;
};
export default BatchEvaluationResponse;
//# sourceMappingURL=BatchEvaluationResponse.d.ts.map