import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ThreadsIndexContainer from './components/threads_index_container';
import ThreadContainer from './components/thread_container';

class AppRouter extends Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: 'white' }}>
        <Scene key="root">
          <Scene key="Threads"
            title="Threads"
            component={ ThreadsIndexContainer } />

          <Scene key="Thread"
            title="Thread"
            component={ ThreadContainer } />
        </Scene>
      </Router>
    )
  }
};

export default AppRouter;
