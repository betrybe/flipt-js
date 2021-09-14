import type ActionTypeEnum from "../enums/ActionTypeEnum";
/** União das ações usadas no 'useTask'. */
export declare type Action<Result> = {
    type: ActionTypeEnum.FAILED;
    error: unknown;
} | {
    type: ActionTypeEnum.STARTED;
} | {
    type: ActionTypeEnum.COMPLETED;
    result: null | Result;
};
//# sourceMappingURL=Action.d.ts.map