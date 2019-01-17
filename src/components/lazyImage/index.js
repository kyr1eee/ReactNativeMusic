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
        }}
      />) : (
        <Image
        source={require('../../img/head.jpg')}
        style={this.props.style}
        />
      )
  }
}
LazyImage.propTypes = propTypes;