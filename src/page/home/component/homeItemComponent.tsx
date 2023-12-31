import React from "react";
import {HomeModelIssueListItemList} from "../../../model/homeModel";
import {Pressable, StyleSheet, Text, View} from "react-native";
import Swiper from 'react-native-swiper';
import ImageRegexUtils from "../../../utils/ImageRegexUtils";
import NetworkImage from "../../../component/NetworkImage";

/**
 * 首页条目的item
 * @param item
 * @param itemClick
 * @constructor
 */
const HomeItemComponent = (item: HomeModelIssueListItemList, itemClick: (item: HomeModelIssueListItemList) => void) => {
    if (item.type == "video") {
        return (
            <Pressable onPress={() => {
                itemClick(item)
            }}>
                <View style={homeItemStyles.homeVerticalLayout}>
                    <View style={homeItemStyles.homeItemHeight}>
                        <NetworkImage
                            source={{uri: item.data?.cover.feed}}
                            style={{flex: 1, borderRadius: 6}}/>
                        <Text style={homeItemStyles.homeItemTag}>{item.data?.category}</Text>
                    </View>
                    <View style={homeItemStyles.homeBottomWarpStyle}>
                        <NetworkImage source={{uri: item.data?.author.icon}}
                                      style={{height: 40, width: 40, borderRadius: 20}}/>
                        <View style={homeItemStyles.homeBottomTextWrap}>
                            <Text numberOfLines={1} ellipsizeMode={"tail"}
                                  style={homeItemStyles.homeTitleStyle}>{item.data?.author.name}</Text>
                            <Text numberOfLines={1} ellipsizeMode={"tail"}
                                  style={homeItemStyles.homeDescTextStyle}>{item.data?.author.description}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    } else {
        return (
            <Swiper style={homeItemStyles.wrapper} showsButtons={false} autoplayTimeout={3} autoplay={true}
                    paginationStyle={homeItemStyles.paginationStyle} dotStyle={homeItemStyles.dotStyle}
                    activeDotStyle={homeItemStyles.activeDotStyle}>
                {item.bannerList?.map((banner, index) => (
                    <View key={index} style={homeItemStyles.slide}>
                        <NetworkImage
                            source={{uri: ImageRegexUtils(banner.data?.image)}}
                            style={homeItemStyles.image}/>
                    </View>
                ))}
            </Swiper>
        )
    }
}


const homeItemStyles = StyleSheet.create({

    homeVerticalLayout: {
        display: "flex",
        flexDirection: "column",
        margin: 5,
    },

    homeItemTag: {
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

    homeItemHeight: {
        height: 200,
        position: 'relative'
    },

    homeBottomWarpStyle: {
        marginTop: 10,
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },

    homeBottomTextWrap: {
        marginStart: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },

    homeTitleStyle: {
        color: "#333333",
        fontSize: 15,
    },

    homeDescTextStyle: {
        color: "#999999",
        fontSize: 12
    },

    wrapper: {
        height: 200,
        width: "100%",
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    paginationStyle: {
        bottom: 6,
    },

    dotStyle: {
        backgroundColor: '#fff',
        opacity: 0.4,
    },

    activeDotStyle: {
        backgroundColor: '#fff',
    }


})


export default HomeItemComponent
