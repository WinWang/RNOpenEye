import {Text, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";

const FindPage = () => {
    return (
        <View style={appStyles.container}>
            <TitleBar title="发现"/>
            {/* 其他页面内容 */}
        </View>
    )
}
export default FindPage