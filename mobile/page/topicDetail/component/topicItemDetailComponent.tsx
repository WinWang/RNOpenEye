import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {TopicDetailModelItemList} from "../../../model/topicDetailModel";
import {color_333, color_black} from "../../../res/colors";
import appStyles from "../../../res/styles";
import Video from "react-native-video";
import LogUtils from "../../../utils/LogUtils";
import Orientation from "react-native-orientation-locker";

const TopicItemDetailComponent = (item: TopicDetailModelItemList, index: number, playIndex: number, onItemClick?: () => void) => {

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
        <View style={appStyles.verticalLayout5Padding}>
            <Text style={styles.titleStyle}>{item.data.content.data.title}</Text>
            <Text style={styles.descriptionStyle}>{item.data.content.data.description}</Text>
            <View style={styles.videoWrapper}>
                <Video
                    source={{uri: item.data.content.data.playUrl}}
                    controls={index == playIndex}
                    paused={index != playIndex}
                    poster={item.data.content.data.cover.feed}
                    style={styles.video}
                    onFullscreenPlayerWillPresent={onFullscreenPlayerWillPresent}
                    onFullscreenPlayerDidPresent={onFullscreenPlayerDidPresent}
                    onFullscreenPlayerWillDismiss={onFullscreenPlayerWillDismiss}
                    onFullscreenPlayerDidDismiss={onFullscreenPlayerDidDismiss}
                />
                <Pressable
                    style={styles.playIconStyle}
                    onPress={() => {
                        onItemClick?.()
                    }}>
                    {index != playIndex ? <Image source={require('../../../assets/image/icon_play.png')}
                                                 style={{width: 50, height: 50}}/> : null}
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    videoWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },

    video: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: 220,
        backgroundColor: color_black,
        borderRadius: 8,
    },

    playIconStyle: {
        position: "absolute",
        zIndex: 1,
        width: 50,
        height: 50,
    },

    titleStyle: {
        fontSize: 15,
        color: color_black,
        marginTop: 15,
    },

    descriptionStyle: {
        marginTop: 10,
        fontSize: 13,
        color: color_333,
    }

})


export default TopicItemDetailComponent
