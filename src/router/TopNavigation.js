import {  createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Recommend from '../pages/recommend';
import Singer from '../pages/singer';
import Rank from '../pages/rank';
import Search from '../pages/search';
import DetailList from '../components/detailList';
import { styleConstant } from '../styles/constant';
import { styles } from './TopNavigation.style';

const SingerStack = createStackNavigator({
  Singer: {
    screen: Singer
  },
  DetailList: {
    screen: DetailList
  }
});
const TabNavigator = createMaterialTopTabNavigator(
    {
        Recommend: { 
            screen: Recommend,
            path: '/recommend',
        },
        Singer: {
            screen: SingerStack,
            path: '/singer'
        },
        Rank: {
            screen: Rank,
            path: '/rank'
        },
        Search: {
            screen: Search,
            path: '/search'
        }
    },
    {
        tabBarOptions: {
            // 被选中时显示的color
            activeTintColor: styleConstant.textColor.yellow,
            // 未被选中时显示的color
            inactiveTintColor: styleConstant.textColor.init,
            // 是否显示图标,默认为false
            showIcon: false,
            // 是否显示文本,默认为true,
            showLabel: true,
            // 是否转换为大写,默认为true,
            upperCaseLabel: false,
            // material design波纹颜色(Android >= 5.0)
            pressColor: styleConstant.textColor.click,
            // tab bar的样式
            style: styles.container,
            labelStyle: styles.label,
            // tab页下面的一条线
            indicatorStyle: { height: 2 }
        },
        // tab bar位置
        tabBarPosition: 'top',
        // 是否允许滑动切换tab页
        swipeEnabled: true,
        // 是否在切换tab页时使用动画
        animationEnable: false,
        // 是否懒加载
        lazy: true,
        // 返回按钮是否导致tab切换到初始tab,[initialRoute, none],
        backBehavior: 'none'
    }
);

export default createAppContainer(TabNavigator);
