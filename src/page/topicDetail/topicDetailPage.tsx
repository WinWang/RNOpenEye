import {FlatList, View, ViewToken} from "react-native";
import {NavigateProps} from "../../route/router";
import {useCallback, useEffect, useRef, useState} from "react";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import apiService from "../../http/apiService";
import useRequestStatus from "../../hooks/useRequestStatus";
import {TopicDetailModel} from "../../model/topicDetailModel";
import TopicHeaderComponent from "./component/topicHeaderComponent";
import TopicItemDetailComponent from "./component/topicItemDetailComponent";
import LogUtils from "../../utils/LogUtils";

/**
 * 话题详情页面
 */
const TopicDetailPage = ({route}: NavigateProps<"topicDetail">) => {
    const [viewState, requestApi] = useRequestStatus()
    const [resultData, setResultData] = useState<TopicDetailModel>({brief: "", headerImage: ""})
    const [playIndex, setPlayIndex] = useState(-1)
    const playIndexRef = useRef(-1)
    // 可见区域的定义：0%的item露出来就算可见
    const viewAbilityConfig = useRef({
        itemVisiblePercentThreshold: 0, // Adjust this threshold as needed
    });

    useEffect(() => {
        loadNet()
    }, [])

    useEffect(() => {
        playIndexRef.current = playIndex
        LogUtils.info("playIndexRef.current" + playIndex)
    }, [playIndex])

    const loadNet = async () => {
        let topicDetailResult = await requestApi(apiService.getTopicDetailList(route.params.id), true);
        setResultData(topicDetailResult)
    }

    /**
     * 可见区域发生变化--uesCallback缓存函数变量，避免每次都创建新的函数
     */
    const onViewableItemsChanged = useCallback((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => {
        LogUtils.warn(playIndexRef.current + ">>>>>>长度" + info.changed.length)
        if (info.changed.length > 0 && playIndexRef.current !== -1) {
            for (let i = 0; i < info.changed.length; i++) {
                let item = info.changed[i]
                if (item.index == playIndexRef.current && !item.isViewable) {
                    setPlayIndex(-1)
                }
                LogUtils.debug(item.index + ">>>>>>" + item.isViewable)
            }
        }
    }, []);

    return (
        <View style={appStyles.verticalLayout}>
            <TitleBar title={resultData.brief}/>
            <FlatList
                data={resultData.itemList}
                renderItem={({item, index}) => TopicItemDetailComponent(item, index, playIndex, () => {
                    LogUtils.debug("点击了" + index)
                    setPlayIndex(index)
                })}
                ListHeaderComponent={TopicHeaderComponent(resultData)}
                keyExtractor={(item, index) => index.toString()}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewAbilityConfig.current}
            />
        </View>
    )
}

export default TopicDetailPage



