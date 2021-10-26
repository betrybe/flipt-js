declare type TaskOptions = {
  signal: AbortSignal;
};
/** A assyncronous function that not receives no args. */
declare type Task<T> = (options: TaskOptions) => Promise<T>;
//# sourceMappingURL=Task.d.ts.map
