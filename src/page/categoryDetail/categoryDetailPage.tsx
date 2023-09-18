import {Animated, Image, Platform, Pressable, StatusBar, StyleSheet, Text, View} from "react-native";
import {CollapsibleHeaderFlatList, CollapsibleHeaderProps} from 'react-native-collapsible-header-views';

import appStyles from "../../res/styles";
import {useNavigation} from "@react-navigation/native";
import {Detail, NavigateProps} from "../../route/router";
import React, {useEffect, useState} from "react";
import useRequestStatus from "../../hooks/useRequestStatus";
import apiService from "../../http/apiService";
import {HomeModelIssueListItemList} from "../../model/homeModel";
import ImageRegexUtils from "../../utils/ImageRegexUtils";
import HomeItemComponent from "../home/component/homeItemComponent";
import {color_white} from "../../res/colors";

/**
 * 分类详情页面
 * @param route
 * @constructor
 */
const CategoryDetailPage = ({route}: NavigateProps<"categoryDetail">) => {
    const [dataList, setDataList] = useState<HomeModelIssueListItemList[]>([])
    const [pageIndex, setPageIndex] = useState(0)
    const [id, setId] = useState(route.params.id)
    const [viewState, requestApi] = useRequestStatus()
    const [opacity, setOpacity] = useState(new Animated.Value(1))
    const navigation = useNavigation()
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
    useEffect(() => {
        loadNet()
    }, [])

    const loadNet = async () => {
        let categoryData = await requestApi(apiService.getCategoryDetailList(id, pageIndex), pageIndex == 0);
        setDataList(categoryData.itemList)
    }

    const scrollY = new Animated.Value(0); // 创建一个动画值来存储滚动位置

    const handleScroll = Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: false} // 不使用原生驱动
    );

    // 根据滚动位置计算透明度
    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 220], // 根据需要调整范围
        outputRange: [0, 1], // 透明度从1到0变化
        extrapolate: 'clamp', // 限制范围
    });

    /**
     * 头部组件
     * @param props
     * @constructor
     */
    const HeaderView = (props: CollapsibleHeaderProps) => {
        return (
            <Animated.View style={{opacity: props.interpolatedHeaderTranslation(1, 0)}}>
                <View style={{height: 300, backgroundColor: 'red'}}>
                    <Image source={{uri: ImageRegexUtils(route.params.headImageUrl)}}
                           style={{height: 300, width: "100%"}}/>
                </View>
            </Animated.View>
        )
    }

    return (
        <View style={appStyles.container}>
            <Animated.View style={{
                opacity: headerOpacity,
                height: 90,
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100
            }}>
                <View style={{
                    height: 90,
                    width: "100%",
                    backgroundColor: 'red',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <View style={{height: statusBarHeight}}/>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Pressable
                            onPress={() => {
                                navigation.goBack()
                            }}
                            style={{
                                position: 'absolute',
                                left: 10,
                                width: 20,
                                height: 20
                            }}>
                            <Image source={require('../../assets/image/ic_action_back.png')}
                                   style={{width: 20, height: 20}}/>
                        </Pressable>
                        <Text style={{color: color_white, fontSize: 17, fontWeight: "bold"}}>{route.params.name}</Text>
                    </View>
                </View>
            </Animated.View>
            <CollapsibleHeaderFlatList
                CollapsibleHeaderComponent={(props) => {
                    return (
                        <HeaderView {...props}/>
                    )
                }}
                data={dataList}
                renderItem={({item}) => HomeItemComponent(item, (item) => {
                    // @ts-ignore
                    navigation.navigate(Detail, {id: item.data.id, videoUrl: item.data.playUrl});
                })}
                headerHeight={300}
                keyExtractor={(item, index) => index.toString()}
                headerContainerBackgroundColor={'red'}
                disableHeaderSnap={true}
                clipHeader={true}
                onScroll={handleScroll}
            />

        </View>
    )
}

const styles = StyleSheet.create({})


export default CategoryDetailPage
