import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity
} from 'react-native';
import { styles } from '../recommend/recommend.style';
import { getRecommend, getPopularList } from '../../api/recommend';
import Slider from '../../components/slider';

export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '推荐',
      headerTitle: '推荐'
  };

  constructor(){
    super();
    this.state = {
      recommendPic: [],
      popularList: []
    }
  }

  getRecommendPic() {
    let slider = [];
    getRecommend().then(res => {
      if(res.data.code === 0) {
        // concat生成新数组！！！
        slider = slider.concat(res.data.data.slider);
        this.setState({recommendPic: slider});
      }
    }).catch(e => {
      console.error(e);
    })
  }

  getPopularList() {
    let popularList = [];
    getPopularList().then(res => {
      if(res.data.code === 0) {
        popularList = popularList.concat(res.data.data.list);
        this.setState({popularList: popularList});
        console.log('state', this.state.popularList);
      } 
    }).catch(e => {
      console.error(e);
    })
  }

  async componentWillMount() {
    try {
      const slider = await this.getRecommendPic();
      const popularList = await this.getPopularList();
    } catch(error) {
      console.error('请求推荐歌单图片失败', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider imgList={this.state.recommendPic} />
        <View style={styles.recommendHeader}>
          <Text style={styles.recommendHeaderText}>热门歌单推荐</Text>
        </View>
      </View>
    )
  }
}
