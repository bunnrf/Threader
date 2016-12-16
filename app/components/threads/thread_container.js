import { connect } from 'react-redux';
import { ThreadsActions } from '../../actions/threads_actions';

import ThreadShow from './thread_show';

const mapStateToProps = state => ({
  thread: state.thread,
});

const mapDispatchToProps = dispatch => ({
  requestThread: (threadId) => dispatch(ThreadsActions.requestThread(threadId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadShow);
