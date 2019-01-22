import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const {height} = Dimensions.get('window');

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
      <View style={styles.container}>
        <Image source={require('./loading_nba.gif')} />
      </View>
    ) : (
      <View style={styles.container}>
        <Image source={require('./loading_color.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height
  }
})
Loading.propTypes = propTypes;