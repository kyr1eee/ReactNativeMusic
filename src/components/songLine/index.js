import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const propTypes = {
  songName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  singerName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default class SongLine extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.index}>{this.props.index}</Text>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.songNameContainer}>
            <Text style={styles.songName}>{this.props.songName}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>{this.props.singerName} - {this.props.albumName}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('./play.png')} style={styles.icon}/>
        </View>
      </TouchableOpacity>
    )
  }
}

SongLine.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width,
    height: 80
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  index: {
    fontSize: 20
  },
  centerContainer: {
    flexDirection: 'column',
    width: width * 0.6
  },
  songNameContainer: {
    justifyContent: 'center',
    height: 50
  },
  songName: {
    fontSize: 18,
    color: '#222',
  },
  detailContainer: {
    height: 30
  },
  icon: {
    width: 30,
    height: 30
  }
});