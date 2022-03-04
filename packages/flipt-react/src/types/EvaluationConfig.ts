type EvaluationConfig = {
  entityId: string;
  context: Record<string, string>;
  requestId?: string;
  isAnonymous: boolean;
};

export default EvaluationConfig;
