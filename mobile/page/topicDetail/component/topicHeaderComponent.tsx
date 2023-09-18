import {Image, StyleSheet, Text, View} from "react-native";
import {TopicDetailModel} from "../../../model/topicDetailModel";
import appStyles from "../../../res/styles";
import {color_333, color_white} from "../../../res/colors";

/**
 * 话题头部组件
 * @param result
 * @constructor
 */
const TopicHeaderComponent = (result: TopicDetailModel) => {
    return (
        <View style={appStyles.verticalLayout}>
            {result.headerImage ?
                <Image source={{uri: result.headerImage}} style={{height: 200, width: "100%"}}/> : null}
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} ellipsizeMode={"tail"}
                      style={styles.textStyle}>{result.brief}{result.brief}</Text>
            </View>
            <Text style={styles.textDescStyle}>{result.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    textWrapper: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 185,
        zIndex: 100,
        left: 0,
        width: "100%",
    },

    textStyle: {
        paddingHorizontal: 6,
        borderRadius: 6,
        borderWidth: 1,
        height: 30,
        flex: 1,
        color: color_333,
        borderColor: color_333,
        fontSize: 15,
        marginHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: color_white,
    },

    textDescStyle: {
        paddingHorizontal: 6,
        color: color_333,
        fontSize: 12,
        marginTop: 20
    }

})

export default TopicHeaderComponent
