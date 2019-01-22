import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { styleConstant } from '../../styles/constant'
const { width } = Dimensions.get('window');
const propTypes = {
  goBack: PropTypes.func.isRequired,
  singerName: PropTypes.string.isRequired
};

export default class index extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.goBack}>
          <Image style={styles.img} source={require('./back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>
          {this.props.singerName}
        </Text>
        <View style={styles.nothing}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width,
    backgroundColor: styleConstant.bgColor.tab
  },
  img: {
    width: 35,
    height: 25,
    marginLeft: 6,
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  nothing: {
    width: 50
  }
});
