import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import GoBackBar from '../goBackBar';
import { withNavigation } from 'react-navigation';
import { styles } from './detailList.style';
import { getSingerDetail } from '../../api/singer';
import { getCdInfo } from '../../api/recommend';
import SongList from '../songList';
class DetailList extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  async componentWillMount() {
    const getData = await this.getData();
  }

  init() {
    const { navigation } = this.props;
    const pageType = navigation.getParam('type');
    if(pageType === 'singer') {
      this.state = {
        imgUrl: navigation.getParam('imgUrl'),
        title: navigation.getParam('singerName'),
        id: navigation.getParam('mid'),
        singerName: navigation.getParam('singerName'),
      };
      this.getData = this._getSingerDetail;
    } else {
      this.state = {
        imgUrl: navigation.getParam('imgUrl'),
        title: navigation.getParam('dissName'),
        id: navigation.getParam('dissid'),
        singerName: '...'
      };
      this.getData = this._getCdInfo;
    }
  }

  _getSingerDetail() {
    getSingerDetail(this.state.id).then(res => {
      if(res.data.code === 0) {
        const data = res.data.data;
        let musicList = [];
        musicList = musicList.concat(data.list);
        this.setState({musicList: musicList});
      }
    }).catch(e => {
      console.error('请求该歌手的歌曲错误', e);
    })
  }

  _getCdInfo() {
    getCdInfo(this.state.id).then(res => {
      const data = this.jsonToObject(res.data);
      if(data.code === 0) {
        const songList = data.cdlist[0].songlist;
        let musicList = [];
        musicList = musicList.concat(songList);
        this.setState({musicList: musicList});
        console.log('state',this.state.musicList);
      }
    }).catch(e => {
      console.error('请求该歌单的歌曲错误', e);
    });
  }

  jsonToObject(jsonData) {
    let data;
    const re = /^\w+\(({.*})\)$/;
    const matches = jsonData.match(re);
    if(matches) {
        data = JSON.parse(matches[1]);
    }
    return data;
}

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar title={this.state.title} goBack={() => this.props.navigation.goBack()} />
        <View style={styles.imgContainer}>
          <ImageBackground blurRadius={0.1} source={{uri: this.state.imgUrl}} style={styles.img}/>
        </View>
        <SongList musicData={this.state.musicList} singerName={this.state.singerName}/>
      </View>
    )
  }
}

export default withNavigation(DetailList);