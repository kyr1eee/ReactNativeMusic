import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const propTypes = {
  imgUrl: PropTypes.string.isRequired,
  dissName: PropTypes.string.isRequired,
  listenNum: PropTypes.number.isRequired,
  creatorName: PropTypes.string.isRequired,
  createTime: PropTypes.string.isRequired,
};

export default class PopularItem extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={{uri: this.props.imgUrl}} style={styles.img} />
          <View style={styles.message}>
            <View>
              <Text style={styles.dissName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
              >
              {this.props.dissName}
              </Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./user.png')} style={styles.icon} />
              <Text>{this.props.creatorName}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./date.png')} style={styles.icon} />
              <Text>{this.props.createTime}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./customerservice.png')} style={styles.icon} />
              <Text>{this.props.listenNum}次播放</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 170
  },
  container: {
    flexDirection: 'row',
    width,
  },
  message: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  img: {
    width: 150,
    height: 150,
  },
  dissName: {
    fontWeight: 'bold',
    fontSize: 15,
    maxWidth: width - 150 - 40
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 6
  }
})