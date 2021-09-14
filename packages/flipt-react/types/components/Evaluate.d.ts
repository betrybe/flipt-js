import type { ReactNode } from 'react';
import type EvaluationConfig from '@/types/EvalutationConfig';
declare type EvaluateProps = EvaluationConfig & {
    flagKey: string;
    loading: ReactNode;
    children: ((match: boolean) => ReactNode) | (ReactNode | ReactNode[]);
};
declare function Evaluate({ children, loading: LoadingComponent, flagKey, context, entityId, requestId }: EvaluateProps): any;
export default Evaluate;
//# sourceMappingURL=Evaluate.d.ts.map