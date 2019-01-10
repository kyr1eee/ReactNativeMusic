import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window');
const propTypes = {
  singerList: PropTypes.array.isRequired
};

export default class SingerItem extends Component {
  constructor(props) {
    super(props);
    this.renderSingerLine = this.renderSingerLine.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  // 歌手头部组件
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.headerIcon} source={require('../../img/head.jpg')} />
        <Text style={styles.headerMessage}>歌手</Text>
      </View>
    );
  }

  renderSingerLine(singerList) {
    // 坑: FlatList的传入data后数据结构改变为{index: 0, item: [...], seperators: {...}}
    const { name, img } = singerList.item;
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} 
               source={{uri: img}}
               defaultSource={require('../../img/head.jpg')}       
        />
        <Text style={styles.singerName}>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <FlatList 
          data={this.props.singerList}
          keyExtractor={item => item.mid}
          renderItem={this.renderSingerLine}
          refreshing={true}
        />
      </View>
    );
  }
}

SingerItem.propTypes = propTypes;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerIcon: {
    width: 100,
    height: 100,
  },
  headerMessage: {
    fontSize: 15
  },
  singerLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width,
  },
  singerIcon: {
    width: 50,
    height: 50,
  },
  singerName: {
    marginLeft: 6
  }
});