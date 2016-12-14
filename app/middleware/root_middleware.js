import { applyMiddleware } from 'redux';
import ThreadsMiddleware from './threads_middleware';

const RootMiddleware = applyMiddleware(
  ThreadsMiddleware
);

export default RootMiddleware;
