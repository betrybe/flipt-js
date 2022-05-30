import type BatchEvaluationResponse from './@types/BatchEvaluationResponse';
import type Context from './@types/Context';
import type EvaluationResponse from './@types/EvaluationResponse';
import type FliptConfig from './@types/FliptConfig';
import { BATCH_EVALUATE_ROUTE, EVALUATE_ROUTE } from './routes';

type RequestOptions = {
  requestId?: string;
  isAnonymous?: boolean;
  signal?: AbortSignal | null;
};

type Request = {
  flag_key: string;
  entity_id: string;
  context: Context;
  request_id?: string;
};

export type FlipSDKInstance = {
  evaluate(
    flagKey: string,
    entityId: string,
    context: Context,
    options?: RequestOptions,
  ): Promise<EvaluationResponse<Context>>;
  batchEvaluate(
    requests: Request[],
    options?: RequestOptions,
  ): Promise<BatchEvaluationResponse<Context>>;
};

function createFliptSDK(config: FliptConfig): FlipSDKInstance {
  if (!window.fetch)
    throw new Error("This browser doesn't support window.fetch()");

  async function evaluate(
    flagKey: string,
    entityId: string,
    context: Context,
    { requestId, signal, isAnonymous = false }: RequestOptions,
  ) {
    const response = await fetch(config.uri + EVALUATE_ROUTE, {
      headers: {
        'Content-Type': 'application/json',
        'Anonymous': JSON.stringify(isAnonymous),
      },
      method: 'POST',
      body: JSON.stringify({
        request_id: requestId,
        flag_key: flagKey,
        entity_id: entityId,
        context,
      } as Request),
      signal,
    });
    const result: EvaluationResponse<typeof context> = await response.json();
    return result;
  }

  async function batchEvaluate(
    requests: Request[],
    { requestId, signal, isAnonymous = false }: RequestOptions,
  ) {
    const response = await fetch(config.uri + BATCH_EVALUATE_ROUTE, {
      headers: {
        'Content-Type': 'application/json',
        'Anonymous': JSON.stringify(isAnonymous),
      },
      method: 'POST',
      body: JSON.stringify({
        request_id: requestId,
        requests,
      }),
      signal,
    });
    const result_1: BatchEvaluationResponse<
      typeof requests[number]['context']
    > = await response.json();
    return result_1;
  }

  return {
    evaluate,
    batchEvaluate,
  };
}

export default createFliptSDK;
