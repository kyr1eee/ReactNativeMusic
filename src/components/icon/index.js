import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  iconUri: PropTypes.string.isRequired
};

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { iconUri } = this.props;
    return (
      <View><Image source={{uri: iconUri}} style={styles.img}/></View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 10,
    height: 10
  }
})