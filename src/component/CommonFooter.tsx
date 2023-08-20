import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface LoadingProps {
    loading: boolean
}

/**
 * 列表上拉加载通用的脚布局文件
 * @param loading
 * @constructor
 */
const CommonFooter: React.FC<LoadingProps> = ({loading}) => {
    if (!loading) return null;
    return (
        <View style={commonFooterStyle.footerWrapper}>
            <Text style={{fontSize: 15, color: "#333"}}>加载中...</Text>
        </View>

    );
}
const commonFooterStyle = StyleSheet.create({
    footerWrapper: {
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c22c"
    }
})

export default CommonFooter