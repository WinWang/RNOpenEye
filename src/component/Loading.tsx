// Loading.tsx
import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react-lite';
import globalStore from "../store/GlobalStore";


/**
 * 通用请求的loading，基于ActivityIndicator实现（此处用了mobx的全局变量，主要是hooks无法在compoent以外的
 * 地方调用，因为想把loading展示加载的状态能在http请求的request.ts中能全局控制，所以使用了mobx来实现）
 */

const Loading: React.FC = observer(() => {
    if (!globalStore.loading) {
        return null;
    }
    return (
        <View style={styles.loadingContainer}>
            <View style={styles.loadingContentWrapper}>
                <ActivityIndicator size="large" color="tomato"/>
                <Text>加载中...</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    loadingContentWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10
    }

});

export default Loading;