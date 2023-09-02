import React from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, useWindowDimensions, Image, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import LogUtils from "../utils/LogUtils";

/**
 * 通用的titleBar
 * @param title
 * @constructor
 */
const TitleBar: React.FC<{
    title: string,
    showBackIcon?: boolean,
    onBackPress?: () => void
}> = ({
          title,
          onBackPress,
          showBackIcon = true
      }) => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
    return (
        <View style={[styles.container, {height: statusBarHeight + 40}]}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Pressable style={styles.backIcon} onPress={() => {
                    if (onBackPress != null) {
                        onBackPress?.()
                        LogUtils.debug("TitleBar", "onBackPress->自定义回退")
                    } else {
                        navigation.goBack()
                        LogUtils.debug("TitleBar", "onBackPress->回退")
                    }
                }}>
                    {showBackIcon && <Image source={require('../assets/image/ic_action_back.png')} style={{
                        width: 20,
                        height: 20
                    }}/>}
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',

    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

    backIcon: {
        position: 'absolute',
        left: 10
    }


});

export default TitleBar;
