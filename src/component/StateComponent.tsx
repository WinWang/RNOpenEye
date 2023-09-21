import {Image, Pressable, StyleSheet, Text, View} from "react-native";

import {
    VIEW_STATE_EMPTY,
    VIEW_STATE_ERROR,
    VIEW_STATE_LOADING,
    VIEW_STATE_NETWORK_ERROR,
    VIEW_STATE_SUCCESS
} from "../constant/ViewStateConstant";
import appStyles from "../res/styles";
import React from "react";

const StateComponent: React.FC<{
    //加载类型
    loadingState: string,
    //是否骨架屏
    useSkeleton?: boolean
    //自定义骨架屏
    customSkeleton?: boolean
    //是否列表类骨架屏-列表默认长度
    listSize?: number
    //重试按钮
    retryCallback?: () => void
    //包裹子控件
    children: React.ReactNode;
}> = ({loadingState, useSkeleton, customSkeleton, listSize, retryCallback, children}) => {

    const commonContentView = (state: string) => {
        let image;
        let tipsString;
        switch (state) {
            case VIEW_STATE_LOADING:
                image = require("../assets/image/loading.gif")
                tipsString = ""
                break
            case VIEW_STATE_ERROR:
                image = require("../assets/image/common_empty_content.png")
                tipsString = "加载错误"
                break
            case VIEW_STATE_NETWORK_ERROR:
                image = require("../assets/image/timeout.png")
                tipsString = "网络异常"
                break
            case VIEW_STATE_EMPTY:
                image = require("../assets/image/common_empty_content.png")
                tipsString = "暂无数据"
                break
        }
        return (
            <Pressable onPress={
                retryCallback
            } style={{flex: 1}}>
                <View style={stateStyle.contentLayout}>
                    <Image source={image}/>
                    <Text>{tipsString}</Text>
                </View>
            </Pressable>
        )
    }

    if (loadingState === VIEW_STATE_SUCCESS) {
        return <>{children}</>;
    } else if (
        loadingState === VIEW_STATE_LOADING ||
        loadingState === VIEW_STATE_ERROR ||
        loadingState === VIEW_STATE_NETWORK_ERROR
    ) {
        return commonContentView(loadingState);
    } else {
        return <>{children}</>;
    }
}

const stateStyle = StyleSheet.create({

    contentLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }

})


export default StateComponent
