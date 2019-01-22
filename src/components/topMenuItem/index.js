import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';

const {width} = Dimensions.get('window');
const propTypes = {
  routeName: PropTypes.string.isRequired,
}

const route = {
  'Recommend': '推荐',
  'Singer': '歌手',
  'Rank': '排行',
  'Search': '搜索',
}

export default class TopMenuItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    // this.props.navigation.navigate(this.props.routeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleOnPress}
        >
        <Text>{route[this.props.routeName]}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

TopMenuItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width / 4,
  }
});

// export default withNavigation(TopMenuItem);