import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { styleConstant } from '../../styles/constant'
export default class Banner extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./kyr1e1.png')} style={styles.icon} />
          <Text style={styles.title}>Kyr1eee Music</Text>
          <View style={styles.nothing}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: styleConstant.bgColor.tab,
    },
    icon: {
        width: 70,
        height: 40,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: styleConstant.textColor.init,
        fontFamily: 'cursive'
    },
    nothing: {
        width: 70
    }
});
