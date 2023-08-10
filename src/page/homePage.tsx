import {StyleSheet, Text, View} from "react-native";
import TitleBar from "../component/TitleBar";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <TitleBar title="首页"/>
            {/* 其他页面内容 */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default HomePage