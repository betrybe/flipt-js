import type { ReactNode } from 'react';
import useEvaluation from '@/hooks/useEvaluation';
import type EvaluationConfig from '@/types/EvalutationConfig';

type EvaluateProps = EvaluationConfig & {
    flagKey: string;
    loading: ReactNode;
    children: ((match: boolean) => ReactNode) | (ReactNode | ReactNode[]);
};

function Evaluate({ children, loading: LoadingComponent, flagKey, context, entityId, requestId }: EvaluateProps) {
    const { loading, match, error } = useEvaluation(flagKey, { context, entityId, requestId });

    if (loading) return LoadingComponent;

    if (typeof children === 'function') {
        return children(match);
    }

    if (!match || error) return null;

    return children;
}

export default Evaluate;
