import {StyleSheet, Text, View} from "react-native";
import {HomeModelIssueListItemList} from "../../../model/homeModel";
import {color_111, color_666} from "../../../res/colors";
import NetworkImage from "../../../component/NetworkImage";

const DetailItemComponent = (item: HomeModelIssueListItemList) => {
    return (
        <View style={styles.horizontalLayout}>
            <NetworkImage source={{uri: item.data?.cover.feed}} style={{width: 150, height: 100, borderRadius: 5}}/>
            <View style={styles.verticalLayout}>
                <Text ellipsizeMode={"tail"} numberOfLines={2} style={styles.titleStyle}>{item.data?.title}</Text>
                <Text ellipsizeMode={"tail"} numberOfLines={2} style={styles.descStyle}>{item.data?.description}</Text>
            </View>
        </View>
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
