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
      <View style={ styles.container }>
        <Text>#{ this.props.thread.no }</Text>
        <Text style={ styles.grey }>
          { new Date(this.props.thread.last_modified).toTimeString() }
        </Text>
      </View>
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
