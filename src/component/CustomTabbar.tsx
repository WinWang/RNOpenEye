import {TabBar} from "react-native-tab-view";
import {color_gray_1, color_white} from "../res/colors";
import LogUtils from "../utils/LogUtils";
import {StyleSheet} from "react-native";
import {Route} from "react-native-tab-view/lib/typescript/src/types";

/**
 * 统一风格的自定义TabBar
 * @param props
 * @param onTabPress
 * @constructor
 */
const CustomTabBar = <T extends Route>(props: any, onTabPress?: (route: T) => void) => {
    return (
        <TabBar
            {...props}
            activeColor={color_white}
            inactiveColor={color_gray_1}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
            onTabPress={({route}) => {

            }}
            // jumpTo={(key) => {
            //     LogUtils.error(">>>>>>" + key)
            //     let newIndex = routes.findIndex((r) => r.key === key)
            //     LogUtils.error(">>>>>>" + newIndex)
            //
            // }}
        />
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: "red",
        fontSize: 15
    },
    tabLabel: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16, // Customize the tab label font size
    },
    indicator: {
        backgroundColor: 'white',
        height: 3,
    },
});

export default CustomTabBar


