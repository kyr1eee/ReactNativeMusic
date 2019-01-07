import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const loading = require('../../img/loading.gif');
const propTypes = {
  imgList: PropTypes.array.isRequired
};

const Slide = props => {
    return (
      <View>
        <Image onLoad={props.loadHandle.bind(null, props.i)}
               style={styles.image} 
               source={{uri: props.uri}}
        />
      </View>
    );
};

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this);
  }

  loadHandle (i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue
    });
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper
          // bug: 动态生成子元素时,dot无法自动更新,自动播放只能播放一次 
          showsPagination={false}          
        >
            {
                this.props.imgList.map((item, index) => 
                <Slide 
                  uri={item.picUrl}
                  loadHandle={this.loadHandle}
                  i={index}
                  key={index}
                />
                )
            }
        </Swiper>
        {/* {this.props.imgList.map((item, index) => <Image source={{uri: item.picUrl}} key={index} style={{width:50, height: 50}}/>)} */}
        {/* {this.props.imgList.map((item, index) => <Text>{item.picUrl}</Text>)} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      width,
      height: 150,
    },
    image: {
        width,
        height: 150
    }
})
