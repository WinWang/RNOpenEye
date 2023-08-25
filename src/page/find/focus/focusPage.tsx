import {FlatList, RefreshControl, View} from "react-native";
import appStyles from "../../../res/styles";
import {useEffect, useState} from "react";
import apiService from "../../../http/apiService";
import {FocusModelItemList} from "../../../model/focusModel";
import FocusItemComponent from "./component/focusItemComponent";
import CommonFooter from "../../../component/CommonFooter";
import useRequestStatus from "../../../hooks/useRequestStatus";
import StateComponent from "../../../component/StateComponent";

/**
 * 热门页面
 * @constructor
 */
const FocusPage = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0)
    const [handlerRefresh, setHandlerRefresh] = useState(false)
    const [viewState, requestApi] = useRequestStatus()
    const [dataList, setDataList] = useState<FocusModelItemList[]>([])

    useEffect(() => {
        loadNet()
    }, [pageIndex, handlerRefresh])

    const onRefresh = async () => {
        setPageIndex(0)
        setHandlerRefresh(!handlerRefresh)
    }

    const loadMore = async () => {
        setPageIndex(pageIndex + 1)
    }

    const loadNet = async () => {
        let focusModel = await requestApi(apiService.getFocusData(pageIndex), pageIndex == 0);
        if (pageIndex == 0) {
            setDataList(focusModel.itemList)
        } else {
            setDataList(dataList.concat(focusModel.itemList))
        }
        setRefreshing(false)
        setLoading(false)
    }

    return (
        <StateComponent loadingState={viewState} retryCallback={onRefresh}>
            <View style={appStyles.verticalCenterLayout}>
                <FlatList
                    data={dataList}
                    renderItem={({item}) => FocusItemComponent(item, (item) => {

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

export default FocusPage