import type { Context, EvaluationResponse } from '.';

type BatchEvaluationResponse<T extends Context> = {
  request_id: string;
  responses: EvaluationResponse<T>[];
  request_duration_millis: 0;
};

export default BatchEvaluationResponse;
