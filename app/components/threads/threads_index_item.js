import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import { thumbSrc } from '../../util/threads_api_util';

const stringToHTML = string => <HTMLView value={ string } />;

class ThreadsIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={ styles.container } onPress={ Actions.Thread }>
        <View style={ styles.comContainer }>
          <Text style={ styles.com }>{ stringToHTML(this.props.thread.com) }</Text>
          <Image style={ styles.thumb } source={{ uri: thumbSrc(this.props.thread) }} />
        </View>

        <Text style={ styles.grey }>
          #{ this.props.thread.no }     { new Date(this.props.thread.last_modified).toTimeString() }
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 3,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  comContainer: {
    flex: 1,
    flexDirection: "row",
    height: 50,
  },
  com: {
    flex: 1,
  },
  grey: {
    color: '#bbb',
    marginLeft: 5,
  },
  thumb: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  },
});

export default ThreadsIndexItem;
