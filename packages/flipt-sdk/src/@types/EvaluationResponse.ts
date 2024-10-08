import type { Context } from '.';

type EvaluationResponse<T extends Context> = {
  entityId: string;
  requestContext: T;
  match: boolean;
  flagKey: string;
  segmentKey: string;
  timestamp: string;
  value: string | null;
  requestDurationMillis: number;
  requestId?: string;
};

export default EvaluationResponse;
