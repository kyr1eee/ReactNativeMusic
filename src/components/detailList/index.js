import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import GoBackBar from '../goBackBar';
import { withNavigation } from 'react-navigation';
import { styles } from './detailList.style';
import { getSingerDetail } from '../../api/singer';
import SongList from '../songList';
class DetailList extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      imgUrl: navigation.getParam('imgUrl'),
      singerName: navigation.getParam('singerName'),
      mid: navigation.getParam('mid'),
      musicList: []
    }
  }

  async componentWillMount() {
    const singerDetail = await this._getSingerDetail();
  }

  _getSingerDetail() {
    getSingerDetail(this.state.mid).then(res => {
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

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar title={this.state.singerName} goBack={() => this.props.navigation.goBack()} />
        <View style={styles.imgContainer}>
          <ImageBackground blurRadius={0.1} source={{uri: this.state.imgUrl}} style={styles.img}/>
        </View>
        <SongList musicData={this.state.musicList}/>
      </View>
    )
  }
}

export default withNavigation(DetailList);