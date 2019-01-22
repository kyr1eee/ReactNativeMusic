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
      tabBarLabel: '排行',
      headerTitle: '排行',
      tabBarIcon: <Image source={require('./Rank.png')} style={{width: 20, height: 20}}/>
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <Text>排行页面</Text>
      </View>
    )
  }
}
