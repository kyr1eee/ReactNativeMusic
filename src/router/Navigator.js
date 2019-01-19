import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabBar from './TabBar';
import TopNavigation from './TopNavigation';
import DetailList from '../components/detailList';
const Navigator = createStackNavigator({
  TabNavigation: {
    screen: TabBar
  },
  SingerDetail: {
    screen: DetailList,
    path: 'singer/:singerMid'
  }
}, {
  initialRouteName: 'TabNavigation',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: () => {

  }
});

export default createAppContainer(Navigator);