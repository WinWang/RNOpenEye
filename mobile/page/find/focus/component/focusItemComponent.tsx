import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {FocusModelItemList, FocusModelItemListDataItemList} from "../../../../model/focusModel";
import {color_333, color_black, color_d5d5d5} from "../../../../res/colors";
import React from "react";
import NetworkImage from "../../../../component/NetworkImage";

/**
 * 关注子布局嵌套Item
 * @param item
 * @param itemClick
 * @constructor
 */
const FocusItemComponent = (item: FocusModelItemList, itemClick?: (item: FocusModelItemListDataItemList) => void) => {

    return (
        <View style={styles.verticalLayout}>
            <View style={styles.horizontalLayout}>
                <NetworkImage source={{uri: item.data?.header?.icon}}
                              style={{height: 50, width: 50, borderRadius: 25}}/>
                <View style={styles.verticalLayout}>
                    <Text numberOfLines={1} ellipsizeMode={"tail"}
                          style={styles.titleStyle}>{item.data?.header?.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode={"tail"}
                          style={styles.descStyle}>{item.data?.header?.description}</Text>
                </View>
            </View>
            <FlatList
                horizontal={true}
                data={item.data.itemList}
                renderItem={({item}) => FocusItemChildComponent(item, (item) => {
                    itemClick?.(item)
                })}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.divider}></View>
        </View>
    )
}

/**
 * 嵌套子布局ItemLayout
 * @param item
 * @param itemClick
 * @constructor
 */
const FocusItemChildComponent = (item: FocusModelItemListDataItemList, itemClick: (item: FocusModelItemListDataItemList) => void) => {
    return (
        <Pressable onPress={() => {
            itemClick(item)
        }}>
            <View style={styles.imageWrap}>
                <NetworkImage source={{uri: item.data.cover.feed}} style={{height: 180, width: 320, borderRadius: 6}}/>
                <Text style={styles.itemTag}>{item.data?.category}</Text>
            </View>
        </Pressable>

    )
}


const styles = StyleSheet.create({

    verticalLayout: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10
    },

    horizontalLayout: {
        display: "flex",
        flexDirection: "row",
    },

    titleStyle: {
        fontSize: 15,
        color: color_black,
    },

    descStyle: {
        fontSize: 13,
        color: color_333,
    },

    imageWrap: {
        position: "relative",
        marginEnd: 10
    },

    itemTag: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: 'tomato',
        borderBottomRightRadius: 15,
        paddingStart: 8,
        paddingEnd: 15,
        paddingTop: 2,
        paddingBottom: 2,
        color: 'white',
        fontSize: 12,
    },

    divider: {
        marginTop: 15,
        height: 0.5,
        backgroundColor: color_d5d5d5,
        width: "100%"
    }


})

export default FocusItemComponent
