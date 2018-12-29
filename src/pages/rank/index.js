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
      tabBarLabel: '排行',
      headerTitle: '排行'
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>排行页面</Text>
      </View>
    )
  }
}
