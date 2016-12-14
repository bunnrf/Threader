import { ThreadsConstants, ThreadsActions } from '../actions/threads_actions';

const defaultState = [];

const ThreadsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ThreadsConstants.RECEIVE_THREADS:
      return action.threads;
    default:
      return state;
  }
}
