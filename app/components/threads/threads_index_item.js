import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class ThreadsIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{ this.props.thread.no }</Text>
        <Text>{ this.props.thread.last_modified }</Text>
      </View>
    );
  }
};

export default ThreadsIndexItem;
