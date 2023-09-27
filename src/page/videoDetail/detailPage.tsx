import {StyleSheet, View} from "react-native";
import appStyles from "../../res/styles";
import Video from 'react-native-video';
import TitleBar from "../../component/TitleBar";
import {useState} from "react";
import {NavigateProps} from "../../route/router";
import DetailListComponent from "./component/detailListComponent";
import LogUtils from "../../utils/LogUtils";
import Orientation from "react-native-orientation-locker";


const DetailPage = ({route}: NavigateProps<"detail">) => {
    const [id, setId] = useState(route.params.id)
    const [videoUrl, setVideoUrl] = useState(route.params.videoUrl)

    // 全屏进入前回调
    const onFullscreenPlayerWillPresent = () => {
        LogUtils.info('进入全屏模式前');
        Orientation.lockToLandscape();
    };

    // 全屏进入后回调
    const onFullscreenPlayerDidPresent = () => {
        LogUtils.info('已进入全屏模式');

    };

    // 退出全屏前回调
    const onFullscreenPlayerWillDismiss = () => {
        LogUtils.info('退出全屏模式前');
        Orientation.lockToPortrait();
    };

    // 退出全屏后回调
    const onFullscreenPlayerDidDismiss = () => {
        LogUtils.info('已退出全屏模式');
    };

    return (
        <View style={appStyles.container}>
            <TitleBar title="详情"/>
            <Video
                source={{uri: videoUrl}}
                controls={true}
                style={styles.video}
                onFullscreenPlayerWillPresent={onFullscreenPlayerWillPresent}
                onFullscreenPlayerDidPresent={onFullscreenPlayerDidPresent}
                onFullscreenPlayerWillDismiss={onFullscreenPlayerWillDismiss}
                onFullscreenPlayerDidDismiss={onFullscreenPlayerDidDismiss}
            />
            <DetailListComponent id={id} itemCallback={(item) => {
                setVideoUrl(item.data?.playUrl ?? "")
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: 220,
        backgroundColor: "#000000",
    },
})


export default DetailPage
