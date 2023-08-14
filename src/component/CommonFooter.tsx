import React from "react";
import {Text, View} from "react-native";

interface LoadingProps {
    loading: boolean
}

const CommonFooter: React.FC<LoadingProps> = ({loading}) => {
    if (!loading) return null;
    return (
        <View>
            <Text>加载中...</Text>
        </View>
    );
}
export default CommonFooter