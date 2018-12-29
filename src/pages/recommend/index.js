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
import { getRecommend } from '../../api/recommend';
import Slider from '../../components/slider';

export default class Recommend extends Component {
  static navigationOptions = {
      tabBarLabel: '推荐',
      headerTitle: '推荐'
  };

  constructor(){
    super();
    this.state = {
      recommendPic: []
    }
  }

  getRecommendPic() {
    let slider = [];
    getRecommend().then(res => {
      if(res.data.code === 0) {
        // concat生成新数组！！！
        slider = slider.concat(res.data.data.slider);
        this.setState({recommendPic: slider});
        console.log(this.state.recommendPic);
      }
    }).catch(e => {
      console.error(e);
    })
  }

  async componentWillMount() {
    try {
      const res = await this.getRecommendPic();
    } catch(error) {
      console.error('请求推荐歌单图片失败', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider imgList={this.state.recommendPic} />
        <Text>推荐页面</Text>
      </View>
    )
  }
}
