import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import ThreadShowComment from './thread_show_comment';

class ThreadShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={ styles.container }>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    top: 55,
  },
});

export default ThreadShow;
