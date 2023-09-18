import {Image} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from "./home/homePage";
import FindPage from "./find/findPage";
import {Find, Home, Hot, Mine} from '../route/router'
import HotPage from "./hot/hotPage";
import MinePage from "./mine/minePage";
import {color_d81e06} from "../res/colors";

const MainPage = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName={Home}
            screenOptions={({route}) => (
                {
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === Home) {
                            iconName = focused ? require('../assets/image/icon-home-sel.png') : require('../assets/image/icon-home-nor.png')
                        } else if (route.name === Find) {
                            iconName = focused ? require('../assets/image/icon-find-sel.png') : require('../assets/image/icon-find-nor.png')
                        } else if (route.name === Hot) {
                            iconName = focused ? require('../assets/image/icon-hot-sel.png') : require('../assets/image/icon-hot-nor.png')
                        } else {
                            iconName = focused ? require('../assets/image/icon-mine-sel.png') : require('../assets/image/icon-mine-nor.png')
                        }
                        return <Image source={iconName} style={{
                            width: size,
                            height: size,
                            tintColor: focused ? color_d81e06 : Colors.gray
                        }}/>;
                    },
                    tabBarActiveTintColor: color_d81e06,
                    headerShown: false
                }
            )}
        >
            <Tab.Screen name={Home} component={HomePage} options={{title: "首页"}}/>
            <Tab.Screen name={Find} component={FindPage} options={{title: "发现"}}/>
            <Tab.Screen name={Hot} component={HotPage} options={{title: "热门"}}/>
            <Tab.Screen name={Mine} component={MinePage} options={{title: "我的"}}/>
        </Tab.Navigator>
    )
}

export default MainPage
