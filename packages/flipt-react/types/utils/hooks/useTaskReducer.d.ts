/// <reference types="react" />
import type { State as _State } from '../types/State';
import type { Action as _Action } from '../types/Action';
declare type State<Result> = _State<Result>;
declare type Action<Result> = _Action<Result>;
/**
 * React.js hook of task reducer. It returns the tuple with the state and the
 * function to dispatch the actions that update the status.
 */
declare function useTaskReducer<Result>(initialState?: {}): [
  State<Result>,
  import('react').Dispatch<Action<Result>>,
];
export default useTaskReducer;
//# sourceMappingURL=useTaskReducer.d.ts.map
