import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { styles } from '../recommend/recommend.style';
import { getRecommend, getPopularList } from '../../api/recommend';
import Slider from '../../components/slider';
import PopularItem, { ITEM_HEIGHT } from '../../components/popularItem';
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
    this.renderPopularItem = this.renderPopularItem.bind(this);
    this.renderSlider = this.renderSlider.bind(this);
  }

  _keyExtractor = (item) => item.dissid;

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
      } 
    }).catch(e => {
      console.error('请求推荐歌单数据失败', e);
    })
  }

  async componentWillMount() {
    try {
      const slider = await this.getRecommendPic();
      const popularList = await this.getPopularList();
    } catch(error) {
      console.error('请求轮播图片失败', error);
    }
  }

  renderPopularItem(popularList) {
    const { imgurl, dissname, listennum, createtime} = popularList.item;
    const creatorName = popularList.item.creator.name; 
    return (
      <PopularItem imgUrl={imgurl}
                   dissName={dissname}
                   creatorName={creatorName}
                   listenNum={listennum}
                   createTime={createtime}
      />
    );
  }

  renderSlider() {
    return (
      <View>
        <Slider imgList={this.state.recommendPic} />
        <View style={styles.recommendHeader}>
          <Text style={styles.recommendHeaderText}>热门歌单推荐</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.popularList}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderPopularItem}
          getItemLayout={(data, index) => ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index})}
          refreshing={true}
          ListHeaderComponent={this.renderSlider}
        />
      </View>
    )
  }
}
