import {StyleSheet} from "react-native";

/**
 * 全局样式
 */
const appStyles = StyleSheet.create({

    verticalCenterLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },


    container: {
        flex: 1,
    },
});

export default appStyles