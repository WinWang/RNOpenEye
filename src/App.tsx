/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * web项目的配置参考：https://reactnative.cn/docs/environment-setup
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import StatusBarManager from './utils/StatusBarManager';


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    useEffect(() => {
        StatusBarManager.setImmersiveStatusBar();
    }, [])

    return (
        <View style={styles.container}>
            <Text>哈哈哈哈哈哈</Text>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            height: 100,
            width: 100,
            backgroundColor: 'red'
        }
    }
)


export default App;
