// Loading.tsx
import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react-lite';
import globalStore from "../store/GlobalStore";

const Loading: React.FC = observer(() => {
    if (!globalStore.loading) {
        return null;
    }

    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff"/>
            <Text>Loading...</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});

export default Loading;