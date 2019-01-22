import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import GoBackBar from '../goBackBar';
import { withNavigation } from 'react-navigation';
import { styles } from '../../pages/recommend/recommend.style';
class DetailList extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      imgUrl: navigation.getParam('imgUrl'),
      singerName: navigation.getParam('singerName'),
      mid: navigation.getParam('mid')
    }
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <GoBackBar title={this.state.singerName} goBack={() => this.props.navigation.goBack()} />
        <Image source={{uri: this.state.imgUrl}} style={styles.img}/>
      </View>
    )
  }
}

export default withNavigation(DetailList);