import { StyleSheet, Dimensions } from 'react-native';
import { styleConstant } from '../../styles/constant';
const { width } = Dimensions.get('window');
const iconSideWidth = 80;
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: styleConstant.bgColor.header,
    paddingBottom: 26,
  },
  headerIcon: {
    width: iconSideWidth,
    height: iconSideWidth,
  },
  headerMessage: {
    fontSize: 15,
    marginLeft: 20
  },
  singerHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width,
    height: 30,
    backgroundColor: styleConstant.bgColor.header,
  },
  singerHeader: {
    paddingLeft: 10,
  },
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