import {FlatList, RefreshControl} from "react-native";
import HomeItemComponent from "../../home/component/homeItemComponent";
import {Detail} from "../../../route/router";
import CommonFooter from "../../../component/CommonFooter";
import StateComponent from "../../../component/StateComponent";
import {FC, useEffect, useState} from "react";
import {HomeModelIssueListItemList} from "../../../model/homeModel";
import useRequestStatus from "../../../hooks/useRequestStatus";
import apiService from "../../../http/apiService";
import {useNavigation} from "@react-navigation/native";

const HotRankPage: FC<{ rankType: string }> = ({rankType}) => {

    const [dataList, setDataList] = useState<HomeModelIssueListItemList[]>([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [viewState, requestApi] = useRequestStatus()
    const [handlerRefresh, setHandlerRefresh] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        loadNet()
    }, [handlerRefresh])

    const loadNet = async () => {
        const res = await requestApi(apiService.getRankList(rankType), true)
        setDataList(res.itemList)
    }

    const onRefresh = () => {
        setHandlerRefresh(!handlerRefresh)
    }

    return (
        <StateComponent loadingState={viewState} retryCallback={onRefresh}>
            <FlatList
                data={dataList}
                renderItem={({item}) => (HomeItemComponent(item, (item) => {
                    // @ts-ignore
                    navigation.navigate(Detail, {id: item.data.id, videoUrl: item.data.playUrl});
                }))}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                ListFooterComponent={<CommonFooter loading={loading}/>}
                onEndReachedThreshold={0.5}
            />
        </StateComponent>
    )
}

export default HotRankPage

