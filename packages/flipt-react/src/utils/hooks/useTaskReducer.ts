import { useReducer } from 'react';
import type { Reducer } from 'react';
import UnhandledActionTypeError from '../../errors/UnhandledActionTypeError';
import ActionTypeEnum from '../enums/ActionTypeEnum';
import type { State as _State } from '../types/State';
import type { Action as _Action } from '../types/Action';

type State<Result> = _State<Result>;
type Action<Result> = _Action<Result>;

type TaskReducer<Result> = Reducer<State<Result>, Action<Result>>;

/**
 * @typedef {import('react').Reducer<State<Result>, Action<Result>>} Reducer
 * @template Result - Resultado da tarefa.
 */

/**
 * Objeto com estado inicial da execução das tarefas.
 * @type {State<any>}
 */
const INITIAL_STATE = {
  error: null,
  result: null,
  loading: false,
  runningTasks: 0,
  wasStartedAtLeastOnce: false,
};

/**
 * Redutor usado para atualizar os estados da execução das tarefas.
 */
function reducer<Result>(currentState: State<Result>, action: Action<Result>): State<Result> {
  const state = { ...currentState };

  switch (action.type) {
    case ActionTypeEnum.STARTED:
      state.runningTasks += 1;
      state.wasStartedAtLeastOnce = true;
      break;
    case ActionTypeEnum.FAILED:
      state.runningTasks -= 1;
      state.error = action.error;
      state.result = null;
      break;
    case ActionTypeEnum.COMPLETED:
      state.runningTasks -= 1;
      state.error = null;
      state.result = action.result ?? null;
      break;
    default:
      throw new UnhandledActionTypeError({ action, wrapper: 'useTaskLazy' });
  }

  state.loading = state.runningTasks > 0;

  return state;
}

/**
 * React.js hook do redutor de tarefas. Ele retorna a tupla com o estado e a
 * função para despachar as ações que atualizam o estado.
 * @param {Partial<State<Result>>} [initialState]
 * @returns {[State<Result>, (action: Action<Result>) => void]}
 * @template Result - Resultado da tarefa.
 */
function useTaskReducer<Result>(initialState = {}) {
  return useReducer(reducer as TaskReducer<Result>, {
    ...INITIAL_STATE,
    ...initialState,
  });
}

export default useTaskReducer;
