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
    return (
      <View>
        <ScrollView>
          { this.props.threads && this.props.threads.map(thread => {
            return <ThreadsIndexItem key={ thread.no } thread={ thread } />;
          }) }
        </ScrollView>
      </View>
    )
  }
}

export default ThreadsIndex;
