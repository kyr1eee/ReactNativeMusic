import React, { Component } from 'react';
import { View, Text, Image, SectionList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './singerList.style';
import LazyImage from '../lazyImage';
import DetailList from '../detailList';
import { withNavigation, StackActions } from 'react-navigation';
const propTypes = {
  singerList: PropTypes.array.isRequired
};

class SingerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerList: props.singerList,
    }
    this.sectionList = null;
    this.renderSingerLine = this.renderSingerLine.bind(this);
    // this.renderHeader = this.renderHeader.bind(this);
    this.renderSingerHeader = this.renderSingerHeader.bind(this);
    this.onScrollToSection = this.onScrollToSection.bind(this);
  }

  // 歌手头部组件
  // renderHeader() {
  //   return (
  //     <View style={styles.headerContainer}>
  //       <Image style={styles.headerIcon} source={require('../../img/head.jpg')} />
  //       <Text style={styles.headerMessage}>歌手</Text>
  //     </View>
  //   );
  // }

  componentWillReceiveProps(nextProps) {
    const singerList = nextProps.singerList;
    this.setState({
      singerList: singerList
    });
  }

  onScrollToSection() {
    this.sectionList.scrollToLocation({
      animated: true,
      sectionIndex: 3,
      viewOffset: 0,
      viewPosition: 0
    });
  }

  captureSectionList(ref) {
    this.sectionList = ref;
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
    const { name, img, mid } = singerList.item;
    const pushActions = StackActions.push({
      routeName: 'SingerDetail',
      params: {
        imgUrl: img,
        singerName: name,
        mid,
        type: 'singer'
      }
    });
    return (
      <TouchableOpacity 
        style={styles.singerLine}
        onPress={() => this.props.navigation.dispatch(pushActions)}  
      >
        <LazyImage 
            style={styles.singerIcon} 
            source={{ uri : img } }
        />
        <Text style={styles.singerName}>{name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <TouchableOpacity onPress={this.onScrollToSection}><Text>aaaaaaaa</Text></TouchableOpacity> */}
        {/* 后续图片存在无法加载现象 */}
        <SectionList 
          sections={this.props.singerList}
          keyExtractor={(item, index) => index}
          refreshing={true}
          // stick粘性定位 SectionHeader
          stickySectionHeadersEnabled={true}
          // ListHeaderComponent={this.renderHeader}
          renderItem={this.renderSingerLine}
          renderSectionHeader={this.renderSingerHeader}
          // refreshControl={() => <Loading ifManIcon={true} />}
          getItemLayout={(data, index) => (
            {length: 80, offset: 80 * index, index}
          )}
          ref={this.captureSectionList}
        />
      </View>
    );
  }
}

SingerList.propTypes = propTypes;
export default withNavigation(SingerList);
// const RootStack = createStackNavigator({
//   Singer: SingerList,
//   SingerDetail: DetailList,
// }, {
//   initialRouteName: 'SingerList'
// });

// const AppContainer = createAppContainer(RootStack);

