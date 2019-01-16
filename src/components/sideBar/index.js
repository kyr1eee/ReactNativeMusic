import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  nameIndex: PropTypes.array.isRequired
};

export default class SideBar extends PureComponent {
  constructor(props) {
    super(props);
    this.renderNameIndexItem = this.renderNameIndexItem.bind(this);
  }

  renderNameIndexItem(nameIndex) {
    const letter = nameIndex.item;
    return (
      <TouchableOpacity style={styles.letterContainer}>
        <Text style={styles.letterText}>{letter}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.sideBarContainer}>
        <FlatList
          data={this.props.nameIndex}
          keyExtractor={item => item}
          renderItem={this.renderNameIndexItem}
        />
      </View>
    )
  }
}

SideBar.propTypes = propTypes;

const styles = StyleSheet.create({
  sideBarContainer: {
    position: 'absolute',
    right: 0,
  },
  letterContainer: {
    width: 20,
    height: 20,
  }
});
