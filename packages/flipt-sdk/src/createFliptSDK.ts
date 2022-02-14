import type BatchEvalutationResponse from './@types/BatchEvalutationResponse';
import type Context from './@types/Context';
import type Evalutation from './@types/Evaluation';
import type FliptConfig from './@types/FliptConfig';
import type Request from './@types/Request';
import { BATCH_EVALUATE_ROUTE, EVALUTE_ROUTE } from './routes';

type RequestOptions = {
  requestId?: string;
  isAnonymous?: boolean;
  signal?: AbortSignal | null;
};

export type FlipSDKInstance = {
  evaluate(
    flagKey: string,
    entityId: string,
    context: Context,
    options: RequestOptions,
  ): Promise<Evalutation<Context>>;
  batchEvaluate(
    requests: Request[],
    options: RequestOptions,
  ): Promise<BatchEvalutationResponse<Context>>;
};

function createFliptSDK(config: FliptConfig): FlipSDKInstance {
  if (!window.fetch)
    throw new Error("This browser doesn't support window.fetch()");

  function evaluate(
    flagKey: string,
    entityId: string,
    context: Context,
    { requestId, signal, isAnonymous = false }: RequestOptions,
  ) {
    return fetch(config.uri + EVALUTE_ROUTE, {
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
    }).then<Evalutation<typeof context>>((response) => response.json());
  }

  function batchEvaluate(
    requests: Request[],
    { requestId, signal, isAnonymous = false }: RequestOptions,
  ) {
    return fetch(config.uri + BATCH_EVALUATE_ROUTE, {
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
    }).then<BatchEvalutationResponse<typeof requests[number]['context']>>(
      (response) => response.json(),
    );
  }

  return {
    evaluate,
    batchEvaluate,
  };
}

export default createFliptSDK;
