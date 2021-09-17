import type Context from './Context';

type Evalutation<T extends Context = Context> = {
  request_id: string;
  entity_id: string;
  request_context: T;
  match: true;
  flag_key: string;
  segment_key: string;
  timestamp: string;
  value: string;
  request_duration_millis: number;
};

export default Evalutation;
