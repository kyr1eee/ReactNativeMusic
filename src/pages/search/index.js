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
      tabBarLabel: '搜索',
      headerTitle: '搜索'
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>搜素页面</Text>
      </View>
    )
  }
}
