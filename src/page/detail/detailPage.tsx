import {StyleSheet, View} from "react-native";
import appStyles from "../../res/styles";
import Video from 'react-native-video';
import TitleBar from "../../component/TitleBar";
import {RouteProp} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {RootStackParamList} from "../../route/router";

type DetailScreenProps = {
    route: RouteProp<RootStackParamList, 'detail'>;
};

const DetailPage = ({route}: DetailScreenProps) => {
    const [id, setId] = useState(route.params.id)
    const [videoUrl, setVideoUrl] = useState(route.params.videoUrl)

    useEffect(() => {

    }, [])

    return (
        <View style={appStyles.container}>
            <TitleBar title="详情"/>
            <Video
                source={{uri: videoUrl}}
                controls={true}
                style={styles.video}
                fullscreen={true} // 设置为true去掉顶部的默认padding
            />
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width: "100%",
        height: 250,
    },
})


export default DetailPage
