import BottomNavigation from './BottomNavigation';
import Banner from '../components/banner';
import React, { Component } from 'react';
import { View } from 'react-native';
export default class TabBar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Banner />
        <BottomNavigation />
      </View>
    );
  }
}