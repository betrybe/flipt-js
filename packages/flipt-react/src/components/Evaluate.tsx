import type { ReactElement, ReactNode } from 'react';
import useEvaluation from '../hooks/useEvaluation';
import type EvaluationConfig from '../types/EvaluationConfig';

type EvaluateProps = EvaluationConfig & {
  flagKey: string;
  loading: ReactElement;
  children: ((match: boolean) => ReactNode) | (ReactNode | ReactNode[]);
};

function Evaluate({
  children,
  loading: LoadingComponent,
  flagKey,
  context,
  entityId,
  requestId,
  isAnonymous,
}: EvaluateProps): ReactElement | null {
  const { loading, match, error } = useEvaluation(flagKey, {
    context,
    entityId,
    requestId,
    isAnonymous,
  });

  if (loading) return LoadingComponent;

  if (typeof children === 'function') {
    return children(match);
  }

  if (!match || error) return null;

  return children as ReactElement;
}

export default Evaluate;
