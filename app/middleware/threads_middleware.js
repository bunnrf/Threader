import { ThreadsConstants, ThreadsActions } from '../actions/threads_actions';
import { fetchThreads } from '../util/threads_api_util';

const ThreadsMiddleware = ({ dispatch }) => next => action => {
  let success;
  let errors;

  switch (action.type) {
    case ThreadsConstants.REQUEST_THREADS:
      success = (threads) => dispatch(ThreadsActions.receiveThreads(threads));
      fetchThreads(success);
      return next(action);
    default:
      return next(action);
  }
}

export default ThreadsMiddleware;
