import {Image, Text, View} from "react-native";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Main} from "../route/router";


/**
 * 闪屏页面
 * @constructor
 */
const SplashPage = () => {
    const navigate = useNavigation()

    useEffect(() => {



        setTimeout(() => {
            // @ts-ignore
            navigate.replace(Main)
        }, 1000)
    }, [])

    return (
        <View>
            <Text>欢迎页面</Text>
        </View>
    )
}

export default SplashPage