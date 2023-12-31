import {StyleSheet} from "react-native";
import {color_333, color_999, color_d5d5d5} from "./colors";

/**
 * 全局样式
 */
const appStyles = StyleSheet.create({

    verticalCenterLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    verticalLayout: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },

    verticalLayoutWrap: {
        display: "flex",
        flexDirection: "column",
    },

    verticalLayout5Padding: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 5
    },

    verticalCenterLayout5Padding: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 5
    },

    horizontalLayout: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },

    horizontalLayoutCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    container: {
        flex: 1,
    },

    horizontalDivider: {
        width: "100%",
        height: 0.5,
        backgroundColor: color_d5d5d5
    }


});

export default appStyles
