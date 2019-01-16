import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
const propTypes = {
  source: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

export default class LazyImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ifLoaded: true
    }
  }

  render() {
    return this.state.ifLoaded ? (
      <Image
        source={this.props.source}
        style={this.props.style}
        onError={(e) => {
          this.setState({ifLoaded: false});
          console.log(this.props.source);
        }}
      />) : (
        <Image
        source={require('../../img/head.jpg')}
        style={this.props.style}
        onError={(e) => {
          this.setState({ifLoaded: false});
          console.log('本地图片也能加载失败???');
        }}
        />
      )
  }
}
LazyImage.propTypes = propTypes;