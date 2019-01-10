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
import SingerItem from '../../components/singerItem';
import Singer from '../../common/js/singer'
export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '歌手',
      headerTitle: '歌手'
  };
  
  constructor() {
    super();
    this.state = {
      singer: []
    };
  }

  handleSingerData(singer) {
    let result = [];
    singer.forEach(item => {
      let singerItem = new Singer({
        mid: item.Fsinger_mid, 
        name: item.Fsinger_name
      });
      result.push(singerItem)
    })
    return result;
  }

  getSingerList() {
    let singer = [];
    getSingerList().then(res => {
      if(res.data.code === 0) {
        singer = singer.concat(res.data.data.list);
        let test = this.handleSingerData(singer);
        console.log('test', test)
        this.setState({singer: singer});
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
    return (
      <View style={styles.container}>
        <SingerItem singerList={this.state.singer} />
      </View>
    )
  }
}
