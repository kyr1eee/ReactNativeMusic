import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  ifManIcon: PropTypes.bool.isRequired
};

export default class Loading extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { ifManIcon } = this.props;
    return ifManIcon ? (
      <View>
        <Image source={require('./loading_man.gif')} />
      </View>
    ) : (
      <View>
        <Image source={require('./loading_color.gif')} />
      </View>
    );
  }
}

Loading.propTypes = propTypes;