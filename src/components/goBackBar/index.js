import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { styleConstant } from '../../styles/constant';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const propTypes = {
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default class GoBackBar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.goBack}>
          <Image style={styles.img} source={require('./back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        <View style={styles.nothing}></View>
      </View>
    )
  }
}

GoBackBar.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width,
    zIndex: 1
  },
  img: {
    width: 40,
    height: 40,
    marginLeft: 6,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    color: "#fff"
  },
  nothing: {
    width: 50
  }
});
