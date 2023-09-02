import {StyleSheet, View} from "react-native";
import appStyles from "../../res/styles";
import Video from 'react-native-video';
import TitleBar from "../../component/TitleBar";
import {RouteProp} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {RootStackParamList} from "../../route/router";
import DetailListComponent from "./component/detailListComponent";

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
            />
            <DetailListComponent id={id}/>
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
