declare type UnhandledActionTypeErrorConstructor = {
    action: string;
    wrapper: unknown;
};
/** Error thrown on receive a action type not declared by reducer. */
declare class UnhandledActionTypeError extends Error {
    action: string;
    constructor({ action, wrapper }: UnhandledActionTypeErrorConstructor);
}
export default UnhandledActionTypeError;
//# sourceMappingURL=UnhandledActionTypeError.d.ts.map