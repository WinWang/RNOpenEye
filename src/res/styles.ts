import {StyleSheet} from "react-native";
import {color_333} from "./colors";

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


    container: {
        flex: 1,
    }

});

export default appStyles
