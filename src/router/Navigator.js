import { createStackNavigator, createAppContainer } from 'react-navigation';
import BottomNavigation from './BottomNavigation';
import DetailList from '../components/detailList';

// bug, TopNavigation由createMaterialTopTabNavigator创建, 如果引入其他组件， 在引入该组件于此, 则无法发生路由跳转
const Navigator = createStackNavigator({
  BottomMenu: {
    screen: BottomNavigation
  },
  SingerDetail: {
    screen: DetailList,
  }
}, {
  initialRouteName: 'BottomMenu',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: () => {
  }
});

export default createAppContainer(Navigator);