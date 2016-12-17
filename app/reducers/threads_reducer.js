import { ThreadsConstants, ThreadsActions } from '../actions/threads_actions';
import flatten from 'lodash/flatten';
import merge from 'lodash/merge';

const defaultState = [];

const ThreadsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ThreadsConstants.RECEIVE_THREADS:
      // JSON returns array of pages, which have a threads array
      const threads = flatten(action.threads.map(page => page.threads)).slice(80);
      return threads;
    case ThreadsConstants.RECEIVE_THREAD:
      return merge({}, state, thread);
    default:
      return state;
  }
};

export default ThreadsReducer;
