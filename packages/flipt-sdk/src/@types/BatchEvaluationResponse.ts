import type Context from './Context';
import type EvaluationResponse from './EvaluationResponse';

type BatchEvaluationResponse<T extends Context = Context> = {
  request_id: string;
  responses: EvaluationResponse<T>[];
  request_duration_millis: 0;
};

export default BatchEvaluationResponse;
