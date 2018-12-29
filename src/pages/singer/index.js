import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { styles } from '../styles/tab';

export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '歌手',
      headerTitle: '歌手'
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>歌手页面</Text>
      </View>
    )
  }
}
