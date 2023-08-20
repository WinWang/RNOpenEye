/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, useColorScheme,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import Loading from "./src/component/Loading";
import {NavigationContainer} from "@react-navigation/native";
import {AppRouter} from "./src/route/router";
import Toast from "react-native-toast-message";
import StatusBarManager from "./src/utils/StatusBarManager";

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        StatusBarManager.setImmersiveStatusBar();
    }, [])

    return (
        <NavigationContainer>
            <AppRouter/>
            <Loading/>
            <Toast/>
        </NavigationContainer>
    );
}

export default App;
