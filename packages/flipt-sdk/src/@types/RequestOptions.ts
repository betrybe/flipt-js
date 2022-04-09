type RequestOptions = {
  requestId?: string;
  isAnonymous?: boolean;
  signal?: AbortSignal | null;
};

export default RequestOptions;
