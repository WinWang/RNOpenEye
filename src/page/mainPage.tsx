import {Image, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useEffect, useState} from "react";
import apiService from "../http/apiService";
import Toast from "react-native-toast-message";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from "./homePage";
import FindPage from "./findPage";
import {Find, Home, Hot, Mine} from '../route/router'
import HotPage from "./hotPage";
import MinePage from "./minePage";

const MainPage = () => {

    const [dataList, setDataList] = useState([]);

    const isDarkMode = useColorScheme() === 'dark';

    const Tab = createBottomTabNavigator();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        apiService.getHomeList("").then(r => {
            console.log(">>>>>>" + r.nextPageUrl)
            Toast.show({
                type: "info",
                text1: r.nextPageUrl
            })
        })
    }, [])


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
                            iconName = focused ? require('../assets/image/icon-like-sel.png') : require('../assets/image/icon-like-nor.png')
                        } else if (route.name === Hot) {
                            iconName = focused ? require('../assets/image/icon-pro-sel.png') : require('../assets/image/icon-pro-nor.png')
                        } else {
                            iconName = focused ? require('../assets/image/icon-site-sel.png') : require('../assets/image/icon-site-nor.png')
                        }
                        return <Image source={iconName} style={{
                            width: size,
                            height: size,
                            tintColor: focused ? Colors.red : Colors.gray
                        }}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
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