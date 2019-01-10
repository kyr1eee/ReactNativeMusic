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
  }

  renderSingerLine(singerList) {
    // 坑: FlatList的传入data后数据结构改变为{index: 0, item: [...], seperators: {...}}
    const { name, img} = singerList.item;
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} source={{uri: img}}/>
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