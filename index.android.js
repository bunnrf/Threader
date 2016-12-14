/**
 * 4chan API demo app
 * RF Bunn
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class Threader extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('Threader', () => Threader);
