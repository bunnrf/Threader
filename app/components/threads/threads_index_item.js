import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ThreadsIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={ styles.container } onPress={ Actions.Thread }>
        <Text>{ this.props.thread.com } #{ this.props.thread.no }</Text>
        <Text style={ styles.grey }>
          { new Date(this.props.thread.last_modified).toTimeString() }
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  grey: {
    color: '#bbb',
  }
});

export default ThreadsIndexItem;
