import { connect } from 'react-redux';
import { ThreadsActions } from '../../actions/threads_actions';

import ThreadsIndex from './threads_index';

const mapStateToProps = state => ({
  threads: state.threads,
});

const mapDispatchToProps = dispatch => ({
  requestThreads: () => dispatch(ThreadsActions.requestThreads()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadsIndex);
