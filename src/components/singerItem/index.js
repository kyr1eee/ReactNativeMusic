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
    this.state = {
      iconUri : []
    };
    this.renderSingerLine = this.renderSingerLine.bind(this);
  }

  renderSingerLine(singerList) {
    // 坑: FlatList的传入data后数据结构改变为{index: 0, item: [...], seperators: {...}}
    const { name, mid, img} = singerList.item;
    let currentIndex = singerList.index;
    let singerIconUri = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`;
    this.setState({
      iconUri: this.state.iconUri.concat([singerIconUri])
    });
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} source={{uri: this.state.iconUri[currentIndex]}}/>
        <Text style={styles.singerName}>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.titleWrapper}>
          <Text style={styles.title}>{}</Text>
        </View> */}
        <FlatList 
          data={this.props.singerList}
          keyExtractor={item => item.Fsinger_id}
          renderItem={this.renderSingerLine}
          refreshing={true}
        />
      </View>
    );
  }
}

SingerItem.propTypes = propTypes;

const styles = StyleSheet.create({
  singerLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width,
  },
  singerIcon: {
    width: 50,
    height: 50,
  }
});