type UnhandledActionTypeErrorConstructor = {
  action: string;
  wrapper: unknown;
};

/** Error thrown on receive a action type not declared by reducer. */
class UnhandledActionTypeError extends Error {
  public action: string;

  constructor({ action, wrapper }: UnhandledActionTypeErrorConstructor) {
    const message = `Not an action of '${wrapper}' reducer.`;

    super(message);

    this.name = 'UnhandledActionTypeError';
    this.action = action;
    this.message = message;
  }
}

export default UnhandledActionTypeError;
