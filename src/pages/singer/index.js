import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { styles } from '../styles/tab';
import { getSingerList } from '../../api/singer';
import SingerItem from '../../components/singerItem';
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
    this.renderSingerLine = this.renderSingerLine.bind(this);
    this.renderSingerList = this.renderSingerList.bind(this);
  }

  getSingerList() {
    let singer = [];
    getSingerList().then(res => {
      if(res.data.code === 0) {
        singer = singer.concat(res.data.data.list);
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
  renderSingerLine(singerList) {
    const { Fsinger_name,  Fsinger_mid} = singerList;
    let singerIconUri = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Fsinger_mid}.jpg?max_age=2592000`;
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} source={{uri: singerIconUri}}/>
        <Text style={styles.singerName}>{Fsinger_name}</Text>
      </View>
    );
  }

  renderSingerList() {
    console.log('ok',this.state.singer);
    return (
      <View style={styles.container}>
        {/* <View style={styles.titleWrapper}>
          <Text style={styles.title}>{}</Text>
        </View> */}
        <FlatList 
          data={this.state.singer}
          keyExtractor={item => item.Fsinger_id}
          renderItem={this.renderSingerLine}
        />
        <Text>hello world</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSingerList()}
      </View>
    )
  }
}
