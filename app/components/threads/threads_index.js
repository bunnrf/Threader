import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ThreadsIndexItem from './threads_index_item';

class ThreadsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestThreads();
  }

  render() {
    console.log(this.props);
    return (
      <View style={ styles.container }>
        <ScrollView>
          { this.props.threads && this.props.threads.map(thread => {
            return <ThreadsIndexItem key={ thread.no } thread={ thread } />;
          }) }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 55,
  },
});

export default ThreadsIndex;
