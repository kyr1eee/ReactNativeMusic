import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const loading = require('../../img/loading.gif');
const propTypes = {
  imgList: PropTypes.array.isRequired
};

const Slider = props => {
    return (
      <View style={styles.slide}>
        <Image />
      </View>
    );
};

export default class Slider extends PureComponent {
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
      <View>
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
          {
            this.props.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    );
  }
}

const styles = {
    wrapper: {
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    image: {
      width,
      flex: 1,
      backgroundColor: 'transparent'
    },
  
    loadingView: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.5)'
    },
  
    loadingImage: {
      width: 60,
      height: 60
    }
  }