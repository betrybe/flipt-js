import createFliptSDK from './createFliptSDK';

describe('createFlipSDK | function |unit test', () => {
  const mockRequest = {
    request_id: 'string',
    flag_key: 'string',
    entity_id: 'string',
    context: {
      property1: 'string',
      property2: 'string',
    },
  };

  const fetchSpy = jest.spyOn(window, 'fetch');
  const MOCK_URI = 'http://www.test.com';
  const fliptSDKInstance = createFliptSDK({ uri: MOCK_URI });
  const { request_id: requestId, flag_key, entity_id, context } = mockRequest;

  const response = {
    request_id: mockRequest.request_id,
    entity_id: mockRequest.entity_id,
    request_context: mockRequest.context,
    match: true,
    flag_key: mockRequest.flag_key,
    segment_key: 'string',
    timestamp: '2021-11-18T01:42:58Z',
    value: 'string',
    request_duration_millis: 0,
  };

  it('evaluate function | evaluates one feature flag', async () => {
    // Forced this type assertion because it was requesting me to add
    // unnecessary details for this request. We know this is a mockRequest &&
    // it is for testing purposes only.
    // https://stackoverflow.com/questions/57964299/mocking-express-request-with-jest-and-typescript-using-correct-types
    const mockResponse = Promise.resolve({
      json: () => Promise.resolve(response),
    }) as unknown as Response;

    fetchSpy.mockImplementationOnce(async () => mockResponse);

    fliptSDKInstance.evaluate(flag_key, entity_id, context, { requestId });
    expect(fetchSpy).toHaveBeenCalledWith(`${MOCK_URI}/api/v1/evaluate`, {
      body: JSON.stringify({
        request_id: requestId,
        flag_key,
        entity_id,
        context,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Anonymous': 'false',
      },
      method: 'POST',
      signal: undefined,
    });
    expect(fetchSpy).toHaveReturnedWith(mockResponse);
  });

  it('batchEvaluate | evaluates many feature flags in an array', () => {
    const requests = Array.from({ length: 3 }, () => mockRequest);

    const responseArray = Array.from({ length: 3 }, () => response);

    const mockResponse = Promise.resolve({
      json: () =>
        Promise.resolve({
          ...responseArray,
        }),
    }) as unknown as Response;

    fetchSpy.mockImplementationOnce(async () => mockResponse);

    fliptSDKInstance.batchEvaluate(requests, { requestId });

    expect(fetchSpy).toHaveBeenCalledWith(`${MOCK_URI}/api/v1/batch-evaluate`, {
      body: JSON.stringify({
        request_id: requestId,
        requests,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Anonymous': 'false',
      },
      method: 'POST',
      signal: undefined,
    });

    expect(fetchSpy).toHaveReturnedWith(mockResponse);
  });
});
