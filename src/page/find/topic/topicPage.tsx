import {FlatList, RefreshControl, View} from "react-native";
import {useEffect, useState} from "react";
import apiService from "../../../http/apiService";
import useRequestStatus from "../../../hooks/useRequestStatus";
import {TopicModelItemList} from "../../../model/topicModel";
import appStyles from "../../../res/styles";
import CommonFooter from "../../../component/CommonFooter";
import StateComponent from "../../../component/StateComponent";
import TopicItemComponent from "./component/topicItemComponent";
import {useNavigation} from "@react-navigation/native";
import {TopicDetail} from "../../../route/router";

const TopicPage = () => {
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0)
    const [handlerRefresh, setHandlerRefresh] = useState(false)
    const [viewState, requestApi] = useRequestStatus()
    const [dataList, setDataList] = useState<TopicModelItemList[]>([])


    useEffect(() => {
        loadNet()
    }, [pageIndex, handlerRefresh])

    const onRefresh = () => {
        setPageIndex(0)
        setHandlerRefresh(!handlerRefresh)
    }

    const loadMore = () => {
        setPageIndex(pageIndex + dataList.length)
    }

    const loadNet = async () => {
        let topicData = await requestApi(apiService.getTopicData(pageIndex), pageIndex == 0);
        if (pageIndex == 0) {
            setDataList(topicData.itemList)
        } else {
            setDataList(dataList.concat(topicData.itemList))
        }
        setRefreshing(false)
        setLoading(false)
    }

    return (
        <StateComponent loadingState={viewState} retryCallback={onRefresh}>
            <View style={appStyles.verticalCenterLayout}>
                <FlatList
                    data={dataList}
                    renderItem={({item}) => TopicItemComponent(item, (item) => {
                        // @ts-ignore
                        navigation.navigate(TopicDetail, {id: item.data.id})
                    })}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                    ListFooterComponent={<CommonFooter loading={loading}/>}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                />
            </View>
        </StateComponent>
    )
}

export default TopicPage
