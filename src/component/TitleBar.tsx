import React from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, useWindowDimensions} from 'react-native';

const TitleBar: React.FC<{ title: string }> = ({title}) => {
    const {height} = useWindowDimensions();
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
    return (
        <View style={[styles.container, {height: statusBarHeight + 40}]}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default TitleBar;