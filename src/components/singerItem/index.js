import React, { Component } from 'react';
import { View, Text, Image, SectionList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './singerItem.style';

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
      <View style={styles.singerHeaderContainer}>
        <Text style={styles.singerHeader}>{nameIndex}</Text>
      </View>
    );
  }

  renderSingerLine(singerList) {
    // sections: [{nameIndex: '', data: ''}]
    // 坑: SectionList的传入data后数据结构改变为{index: 0, item: sections.data ,section: sections[0] ,seperators: {...}}
    const { name, img } = singerList.item;
    return (
      <TouchableOpacity style={styles.singerLine}>
        <Image style={styles.singerIcon} 
               source={{uri: img}}
        />
        <Text style={styles.singerName}>{name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 后续图片存在无法加载现象 */}
        <SectionList 
          sections={this.props.singerList}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderSingerLine}
          renderSectionHeader={this.renderSingerHeader}
        />
      </View>
    );
  }
}

SingerItem.propTypes = propTypes;
