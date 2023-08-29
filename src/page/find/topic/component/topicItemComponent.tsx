import {TopicModelItemList} from "../../../../model/topicModel";
import {Image, StyleSheet, Text, View} from "react-native";
import ImageRegexUtils from "../../../../utils/ImageRegexUtils";

const TopicItemComponent = (item: TopicModelItemList) => {
    return (
        <View style={styles.imageWrapper}>
            <Image source={{uri: ImageRegexUtils(item.data.image)}}
                   style={styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    imageStyle: {
        width: "98%",
        height: "95%",
        borderRadius: 8,
    }
})

export default TopicItemComponent