import type Context from './Context';

type evaluation<T extends Context = Context> = {
  entity_id: string;
  request_context: T;
  match: true;
  flag_key: string;
  segment_key: string;
  timestamp: string;
  value: string;
  request_duration_millis: number;
  request_id: string;
};

export default evaluation;
