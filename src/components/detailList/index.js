import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import GoBackBar from '../goBackBar';
import { withNavigation } from 'react-navigation';
import { styles } from './detailList.style';
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
      <View style={styles.container}>
        <GoBackBar title={this.state.singerName} goBack={() => this.props.navigation.goBack()} />
        <View style={styles.imgContainer}>
          <ImageBackground blurRadius={0.1} source={{uri: this.state.imgUrl}} style={styles.img}/>
        </View>
      </View>
    )
  }
}

export default withNavigation(DetailList);