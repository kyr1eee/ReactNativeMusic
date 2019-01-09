import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  singerList: PropTypes.array.isRequired
};

export default class SingerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerList = []
    };
    this.renderSingerLine = this.renderSingerLine.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({singerList: this.props.singerList});
    }, 20)
  }

  renderSingerLine(singerList) {
    const { Fsinger_name,  Fsinger_mid} = singerList;
    let singerIconUri = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Fsinger_mid}.jpg?max_age=2592000`;
    return (
      <View style={styles.singerLine}>
        <Image style={styles.singerIcon} source={{uri: singerIconUri}}/>
        <Text style={styles.singerName}>{Fsinger_name}</Text>
      </View>
    );
  }

  renderSingerList() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.titleWrapper}>
          <Text style={styles.title}>{}</Text>
        </View> */}
        <FlatList 
          data={this.state.singerList}
          keyExtractor={item => item.Fsinger_id}
          renderItem={this.renderSingerLine}
        />
        <Text>hello world</Text>
      </View>
    );
  }
}

SingerItem.propTypes = propTypes;

const styles = StyleSheet.create({

});