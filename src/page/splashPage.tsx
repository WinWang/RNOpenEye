import {Dimensions, Image, StyleSheet, View} from "react-native";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Main} from "../route/router";
import {color_white} from "../res/colors";


/**
 * 闪屏页面
 * @constructor
 */
const SplashPage = () => {
    const navigate = useNavigation()
    const win = Dimensions.get('window');
    const ratio = win.width / 1080;
    const percentShow = 0.9

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            navigate.replace(Main)
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/image/landing_image.png')}
                style={{width: win.width * percentShow, height: 1920 * ratio * percentShow}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color_white,
    }
})


export default SplashPage
