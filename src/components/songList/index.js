import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StyleSheet } from 'react-native';
import SongLine from '../songLine';

const propTypes = {
  musicData: PropTypes.array.isRequired
};

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    console.log(this.props.musicData);
  }

  renderItem() {

    return(
      <SongLine />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.musicData} 
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

SongList.propTypes = propTypes;

const styles = StyleSheet.create({

});