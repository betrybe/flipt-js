/** Tipo dos estados usados no 'useTask'. */
export declare type State<Result> = {
  error: unknown;
  result: null | Result;
  loading: boolean;
  /** Número de tarefas executadas concorrentemente. */
  runningTasks: number;
  wasStartedAtLeastOnce: boolean;
};
//# sourceMappingURL=State.d.ts.map
