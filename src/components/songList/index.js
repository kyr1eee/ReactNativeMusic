import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StyleSheet, Dimensions } from 'react-native';
import SongLine from '../songLine';
import Loading from '../loading';
const {width} = Dimensions.get('window');
const propTypes = {
  musicData: PropTypes.array.isRequired,
};

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.renderSongLine = this.renderSongLine.bind(this);
    this.renderItemSeparator = this.renderItemSeparator.bind(this);
  }

  renderSongLine(data) {
    const {index} = data;
    const musicData = data.item.musicData;
    console.log('musicData:', musicData);
    const songName = musicData.songname;
    const albumName = musicData.albumname;
    const singerName = this.props.singerName ? this.props.singerName : '';
    return(
      <SongLine 
        index={index + 1} 
        songName={songName} 
        albumName={albumName} 
        singerName={singerName}
      />
    )
  }

  renderItemSeparator() {
    return (
      <View style={styles.line}></View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.musicData ? <FlatList
          data={this.props.musicData} 
          keyExtractor={(item) => 'singer' + item.index + Math.floor(Math.random()*1000)}
          renderItem={this.renderSongLine}
          ItemSeparatorComponent={this.renderItemSeparator}
          // refreshing={false}
          // onRefresh={() => alert(1)}
        /> : <Loading ifManIcon={false} />}
      </View>
    )
  }
}

SongList.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    // fuck you !!!!!!!
    // flex: 1
    flexDirection: 'column',
    justifyContent: 'center'
  },
  line: {
    height: 1,
    width,
    backgroundColor: '#f4f4f4'
  }
});