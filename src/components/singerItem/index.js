import React, { Component } from 'react';
import { View, Text, Image, SectionList, StyleSheet, Dimensions } from 'react-native';
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
    this.renderSingerHeader = this.renderSingerHeader.bind(this);
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

  renderSingerHeader(data) {
    const { nameIndex } = data.section;
    return (
      <Text style={styles.singerHeader}>{nameIndex}</Text>
    );
  }

  renderSingerLine(singerList) {
    console.log('section list', singerList);
    // sections: [{nameIndex: '', data: ''}]
    // 坑: SectionList的传入data后数据结构改变为{index: 0, item: sections.data ,section: sections[0] ,seperators: {...}}
    const { name, img } = singerList.item;
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} 
               source={{uri: img}}
        />
        <Text style={styles.singerName}>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {/* 后续图片存在无法加载现象 */}
        <SectionList 
          sections={this.props.singerList}
          keyExtractor={(item, index) => index}
          renderItem={this.renderSingerLine}
          renderSectionHeader={this.renderSingerHeader}
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