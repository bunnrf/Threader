import { combineReducers } from 'redux';
import ThreadsReducer from './threads_reducer';

const RootReducer = combineReducers({
  threads: ThreadsReducer
});

export default RootReducer;
