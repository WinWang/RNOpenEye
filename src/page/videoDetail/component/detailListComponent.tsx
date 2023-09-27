import {FlatList, RefreshControl} from "react-native";
import DetailItemComponent from "./detailItemComponent";
import {FC, useEffect, useState} from "react";
import apiService from "../../../http/apiService";
import {HomeModelIssueListItemList} from "../../../model/homeModel";
import useRequestStatus from "../../../hooks/useRequestStatus";
import StateComponent from "../../../component/StateComponent";

/**
 * 详情列表组件
 * @param id
 * @constructor
 */
const DetailListComponent: FC<{ id: number, itemCallback: (item: HomeModelIssueListItemList) => void }> = (
    {
        id,
        itemCallback
    }) => {
    const [dataList, setDataList] = useState<HomeModelIssueListItemList[]>([])
    const [refreshing, setRefreshing] = useState(false);
    const [handlerRefresh, setHandlerRefresh] = useState(false)
    const [viewState, requestApi] = useRequestStatus()
    const [playIndex, setPlayIndex] = useState(-1)


    useEffect(() => {
        loadNet()
    }, [id, handlerRefresh])

    const loadNet = async () => {
        let res = await requestApi(apiService.getRelationList(id), true)
        let filterList = res.itemList.filter((item) => item.type === "videoSmallCard")
        setDataList(filterList)
        setRefreshing(false)
    }

    const onRefresh = () => {
        setHandlerRefresh(!handlerRefresh)
    }

    return (
        <StateComponent loadingState={viewState} retryCallback={onRefresh}>
            <FlatList
                data={dataList}
                renderItem={({item, index}) => DetailItemComponent(index, playIndex, item, (item) => {
                    setPlayIndex(index)
                    itemCallback(item)
                })}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            />
        </StateComponent>
    )
}

export default DetailListComponent
