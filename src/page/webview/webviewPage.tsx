import {View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import WebView from "react-native-webview";
import {NavigateProps} from "../../route/router";
import LogUtils from "../../utils/LogUtils";

/**
 * webview页面
 * @param route
 */
// source={require("../../../android/app/src/main/assets/web/index.html")} // 设
const WebviewPage = (route: NavigateProps<"webview">) => {
    return (
        <View style={appStyles.container}>
            <TitleBar title={route.route.params.title}/>
            <WebView
                source={{uri: route.route.params.url}}
                // source={{uri: "file:///android_asset/web/index.html"}}
                style={{flex: 1}} // 可以调整 WebView 的样式
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onLoadEnd={() => LogUtils.info("onLoadEnd")}
                onError={(error) => LogUtils.error(error)}
                onHttpError={(error) => LogUtils.error(error)}
            />
        </View>
    )
}

export default WebviewPage
