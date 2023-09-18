import {TopicModelItemList} from "../../../../model/topicModel";
import {Pressable, StyleSheet, View} from "react-native";
import ImageRegexUtils from "../../../../utils/ImageRegexUtils";
import NetworkImage from "../../../../component/NetworkImage";

const TopicItemComponent = (item: TopicModelItemList, onItemClick?: (item: TopicModelItemList) => void) => {
    return (
        <View style={styles.imageWrapper}>
            <Pressable onPress={() => {
                onItemClick?.(item)
            }} style={styles.clickStyle}>
                <NetworkImage source={{uri: ImageRegexUtils(item.data.image)}}
                              style={styles.imageStyle}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
        width: "100%"
    },

    clickStyle: {
        width: "100%",
        height: "100%",
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
