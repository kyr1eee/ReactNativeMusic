import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { styles } from '../styles/tab';
import Banner from '../../components/banner';
export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '搜索',
      headerTitle: '搜索',
      tabBarIcon: <Image source={require('./Search.png')} style={{width: 20, height: 20}}/>
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <Text>搜素页面</Text>
      </View>
    )
  }
}
