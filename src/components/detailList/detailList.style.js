import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imgContainer: {
    width,
    height: height / 2.5,
    overflow: 'hidden'
  },
  img: {
    width,
    height: width
  }
});