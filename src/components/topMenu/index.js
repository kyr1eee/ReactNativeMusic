import React, { PureComponent } from 'react'
import {View, Button, StyleSheet, Dimensions} from 'react-native';
import Banner from '../banner';
import TopMenuItem from '../topMenuItem';
import {withNavigation} from 'react-navigation';
import { styleConstant } from '../../styles/constant';
const { width } = Dimensions.get('window');
export default class TopMenu extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <View style={styles.menuContainer}>
          <TopMenuItem styles={styles.topMenuItem} routeName="Recommend" navigate={this.props.navigation}/>
          <TopMenuItem styles={styles.topMenuItem} routeName="Singer"/>
          <TopMenuItem styles={styles.topMenuItem} routeName="Rank"/>
          <TopMenuItem styles={styles.topMenuItem} routeName="Search"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    height: 50,
    backgroundColor: styleConstant.bgColor.tab
  },
});

// export default withNavigation(TopMenu);