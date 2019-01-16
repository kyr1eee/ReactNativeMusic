import React, { PureComponent } from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const iconSideWidth = 80;
export default class index extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.singerLine}>
        <Image 
            style={styles.singerIcon} 
            source={{ uri : this.props.img } }
        />
        <Text style={styles.singerName}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  singerLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width,
  },
  singerIcon: {
    width: iconSideWidth,
    height: iconSideWidth,
  },
  singerName: {
    marginLeft: 20
  }
});