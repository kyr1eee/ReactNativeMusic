import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import GoBackBar from '../goBackBar';
export default class DetailList extends Component {
  render() {
    return (
      <View>
        <GoBackBar />
        <Text>detail!!!</Text>
      </View>
    )
  }
}
