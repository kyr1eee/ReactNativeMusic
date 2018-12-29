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
      tabBarLabel: '推荐',
      headerTitle: '推荐'
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>推荐页面</Text>
      </View>
    )
  }
}
