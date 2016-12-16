import { ThreadsConstants, ThreadsActions } from '../actions/threads_actions';
import { flatten } from '../util/util';

const defaultState = [];

const ThreadsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ThreadsConstants.RECEIVE_THREADS:
      // JSON returns array of pages, which have a threads array
      console.log(flatten(action.threads.map(page => page.threads)));
      return flatten(action.threads.map(page => page.threads));
    default:
      return state;
  }
};

export default ThreadsReducer;
