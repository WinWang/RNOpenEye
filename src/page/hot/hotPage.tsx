import {Text, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";

const HotPage = () => {
    return (
        <View style={appStyles.container}>
            <TitleBar title="热门"/>
            {/* 其他页面内容 */}
        </View>
    )
}
export default HotPage