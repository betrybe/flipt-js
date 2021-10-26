type TaskOptions = {
  signal: AbortSignal;
};

/** A assyncronous function that not receives no args. */
type Task<T> = (options: TaskOptions) => Promise<T>;
