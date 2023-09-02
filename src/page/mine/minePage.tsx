import {Text, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";

const MinePage = () => {
    return (
        <View style={appStyles.container}>
            <TitleBar title="我的" showBackIcon={false}/>
            {/* 其他页面内容 */}
        </View>
    )
}
export default MinePage
