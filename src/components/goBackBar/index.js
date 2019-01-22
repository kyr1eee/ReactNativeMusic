import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { styleConstant } from '../../styles/constant'
const { width } = Dimensions.get('window');
const propTypes = {
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default class index extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.goBack}>
          <Image style={styles.img} source={require('./back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width,
    backgroundColor: styleConstant.bgColor.tab
  },
  img: {
    width: 30,
    height: 30
  }
});
