import type Context from './Context';
import type evaluation from './Evaluation';
declare type BatchevaluationResponse<T extends Context = Context> = {
  request_id: string;
  responses: evaluation<T>[];
  request_duration_millis: 0;
};
export default BatchevaluationResponse;
//# sourceMappingURL=BatchevaluationResponse.d.ts.map
