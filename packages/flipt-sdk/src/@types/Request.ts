import type Context from './Context';

type Request = {
  flag_key: string;
  entity_id: string;
  context: Context;
  request_id?: string;
};

export default Request;
