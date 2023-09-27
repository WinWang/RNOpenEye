import {Pressable, StyleSheet, Text, View} from "react-native";
import {HomeModelIssueListItemList} from "../../../model/homeModel";
import {color_111, color_666} from "../../../res/colors";
import NetworkImage from "../../../component/NetworkImage";
import LogUtils from "../../../utils/LogUtils";

const DetailItemComponent = (index: number, playIndex: number, item: HomeModelIssueListItemList, itemClick: (item: HomeModelIssueListItemList) => void) => {
    return (
        <Pressable style={styles.horizontalLayout} onPress={() => {
            itemClick(item)
        }}>
            <NetworkImage source={{uri: item.data?.cover.feed}} style={{width: 130, height: 100, borderRadius: 5}}/>
            <View style={styles.verticalLayout}>
                <Text ellipsizeMode={"tail"} numberOfLines={2}
                      style={[styles.titleStyle, {color: playIndex == index ? 'red' : color_111}]}>{item.data?.title}</Text>
                <Text ellipsizeMode={"tail"} numberOfLines={2}
                      style={[styles.descStyle, {color: playIndex == index ? 'red' : color_666}]}>{item.data?.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    horizontalLayout: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8
    },

    verticalLayout: {
        marginStart: 8,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: 100,
        justifyContent: "space-between",
    },


    titleStyle: {
        fontSize: 16,
        color: color_111
    },

    descStyle: {
        fontSize: 14,
        color: color_666
    }


})


export default DetailItemComponent
