import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';
import { styles } from '../styles/tab';
import { getSingerList } from '../../api/singer';
import SingerList from '../../components/singerList';
import Singer from '../../common/js/singer';
import Loading from '../../components/loading';
import SideBar from '../../components/sideBar';
import Banner from '../../components/banner';
export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '歌手',
      headerTitle: '歌手',
      tabBarIcon: <Image source={require('./Singer.png')} style={{width: 20, height: 20, color: '#fff'}}/>
  };
  
  constructor() {
    super();
    this.state = {
      singer: [],
      nameIndex: [],
    };
  }

  // 处理歌手数据, 拼接歌手图片URI
  handleSingerData(singer = []) {
    // result = [
    //   {nameIndex: '热', data: {mid, name}},
    //   {nameIndex: 'A', data: {mid, name}},
    //   ...
    // ]
    let result = [];
    let nameIndex = [];
    // 热门歌手
    let hotSinger = singer.slice(0, 10);
    hotSinger = hotSinger.map(item => new Singer({
      mid: item.Fsinger_mid,
      name: item.Fsinger_name,
    }));
    result.push({
      nameIndex: '热门',
      data: hotSinger
    })
  
    singer.forEach(item => {
      // 获取索引以及清除错误索引
      nameIndex.indexOf(item.Findex) === -1 && item.Findex.match(/[a-zA-Z]/) ? nameIndex.push(item.Findex) : '';
    });

    // 索引排序
    nameIndex.sort((a, b) => {
      return a.charCodeAt(0) - b.charCodeAt(0);
    })
    this.setState({nameIndex: nameIndex});

    // 构造数据,复杂度高,待改进
    nameIndex.forEach((nameIndexItem, index) => {
      let currentNameIndex = [];
      singer.forEach(singerItem => {
        if(singerItem.Findex === nameIndexItem) {
          currentNameIndex.push(singerItem);
        }
      });
      currentNameIndex = currentNameIndex.map(item => new Singer({
        mid: item.Fsinger_mid,
        name: item.Fsinger_name,
      }));
      result.push({
        nameIndex: nameIndexItem,
        data: currentNameIndex 
      });
    });
    return result;
  }

  getSingerList() {
    let singer = [];
    let afterHandleSinger = [];
    getSingerList().then(res => {
      if(res.data.code === 0) {
        singer = singer.concat(res.data.data.list);
        afterHandleSinger = this.handleSingerData(singer);
        this.setState({singer: afterHandleSinger});
      }
    }).catch(e => {
      console.log(e);
    })
  }

  async componentWillMount() {
    try {
      const singerList = await this.getSingerList();
    } catch(e) {
      console.log('请求歌手数据错误:', e)
    }
  }

  render() {
    return this.state.singer.length > 0 ? (
          <View style={styles.container}>
            <SingerList singerList={this.state.singer} />
            <SideBar nameIndex={this.state.nameIndex} />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <Banner />
            <Loading ifManIcon={true} />
          </View>
        );
  }
}
