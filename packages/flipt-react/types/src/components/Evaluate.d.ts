import type { ReactElement, ReactNode } from 'react';
import type EvaluationConfig from '../types/EvaluationConfig';
declare type EvaluateProps = EvaluationConfig & {
    flagKey: string;
    loading: ReactElement;
    children: ((match: boolean) => ReactNode) | (ReactNode | ReactNode[]);
};
declare function Evaluate({ children, loading: LoadingComponent, flagKey, context, entityId, requestId, isAnonymous, }: EvaluateProps): ReactElement | null;
export default Evaluate;
//# sourceMappingURL=Evaluate.d.ts.map