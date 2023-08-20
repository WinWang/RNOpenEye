/**
 * 路由相关
 */
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack"
import SplashPage from '../page/splashPage'
import MainPage from "../page/mainPage"
import DetailPage from "../page/detail/detailPage";

/***路由名称**/
const Splash = "splash"
const Main = "main"
const Home = "home"
const Find = "find"
const Hot = "hot"
const Mine = "mine"
const Detail = "detail"


/***路由参数**/
export type RootStackParamList = {
    [Splash]: undefined;
    [Main]: undefined;
    [Detail]: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

/******路由表注册**************************************/
const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={Splash} screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <Stack.Screen name={Splash} component={SplashPage}/>
            <Stack.Screen name={Main} component={MainPage}/>
            <Stack.Screen name={Detail} component={DetailPage}/>
        </Stack.Navigator>
    );
}
/******路由表注册**************************************/

export {AppRouter, Splash, Main, Home, Find, Hot, Mine, Detail}