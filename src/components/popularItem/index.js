import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation, StackActions} from 'react-navigation';

const { width } = Dimensions.get('window');
const propTypes = {
  imgUrl: PropTypes.string.isRequired,
  dissName: PropTypes.string.isRequired,
  listenNum: PropTypes.number.isRequired,
  creatorName: PropTypes.string.isRequired,
  createTime: PropTypes.string.isRequired,
  dissid: PropTypes.string.isRequired
};


// 用于FlatList的getItemLayout
export const ITEM_HEIGHT = 170;
class PopularItem extends PureComponent {
  render() {
    const {imgUrl, dissName, dissid} = this.props;
    const pushActions = StackActions.push({
      routeName: 'SingerDetail',
      params: {
        imgUrl,
        dissName,
        dissid,
        type: 'cd'
      }
    });
    return (
      <TouchableOpacity 
        style={styles.wrapper}
        onPress={() => this.props.navigation.dispatch(pushActions)}
      >
        <View style={styles.container}>
          <Image source={{uri: this.props.imgUrl}} style={styles.img} />
          <View style={styles.message}>
            <View>
              <Text style={styles.dissName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
              >
              {this.props.dissName}
              </Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./user.png')} style={styles.icon} />
              <Text>{this.props.creatorName}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./date.png')} style={styles.icon} />
              <Text>{this.props.createTime}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Image source={require('./customerservice.png')} style={styles.icon} />
              <Text>{this.props.listenNum}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

PopularItem.propTypes = propTypes;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f4f4f4' 
  },
  container: {
    flexDirection: 'row',
    width: width - 20,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 15,
    borderWidth: 10,
  },
  message: {
    marginLeft: 20,
    marginVertical: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  img: {
    width: ITEM_HEIGHT - 40,
    height: ITEM_HEIGHT - 40,
  },
  dissName: {
    fontWeight: 'bold',
    fontSize: 13,
    maxWidth: width - 150 - 40,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 6
  }
});

export default withNavigation(PopularItem);