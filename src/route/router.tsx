/**
 * 路由相关
 */
import {createStackNavigator} from "@react-navigation/stack"
import SplashPage from '../page/splashPage'
import MainPage from "../page/mainPage"

/***********路由名称*************************/
const Splash = "home"
const Main = "main"
const Home = "home"
const Find = "find"
const Hot = "hot"
const Mine = "mine"
/***********路由名称*************************/

type RootStackParamList = {
    [Splash]: undefined;
    [Main]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/******路由表注册**************************************/
const Router = () => {
    return (
        <Stack.Navigator initialRouteName={Splash} screenOptions={{headerShown: false}}>
            <Stack.Screen name={Splash} component={SplashPage}/>
            <Stack.Screen name={Main} component={MainPage}/>
        </Stack.Navigator>
    );
}
/******路由表注册**************************************/

export {Router, Splash, Main,Home,Find,Hot,Mine}