/**
 * RF Bunn
 * 4chan api demo
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import AppRouter from './Router';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
};

export default App;
