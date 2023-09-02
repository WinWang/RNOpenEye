import {FlatList, RefreshControl, View} from "react-native";
import TitleBar from "../../component/TitleBar";
import appStyles from "../../res/styles";
import {useEffect, useState} from "react";
import apiService from "../../http/apiService";
import {HomeModelIssueListItemList} from "../../model/homeModel";
import HomeItemComponent from "./component/homeItemComponent";
import CommonFooter from "../../component/CommonFooter";
import useRequestStatus from "../../hooks/useRequestStatus";
import StateComponent from "../../component/StateComponent";
import {useNavigation} from "@react-navigation/native";
import {Detail} from "../../route/router";

const HomePage = () => {
    const [dataList, setDataList] = useState<HomeModelIssueListItemList[]>([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("")
    const [nextUrl, setNextUrl] = useState("")
    const navigation = useNavigation()
    const [viewState, requestApi] = useRequestStatus()
    const [handlerRefresh, setHandlerRefresh] = useState(false)

    useEffect(() => {
        loadNet()
    }, [date, handlerRefresh])

    const onRefresh = async () => {
        if (date != "") {
            await setDataList([])
        }
        setDate("")
        setHandlerRefresh(!handlerRefresh)
    }

    const loadMore = async () => {
        await setLoading(true)
        let split = nextUrl.split("?");
        let split2 = split[1];
        let split3 = split2.split("&");
        let split4 = split3[0].split("=");
        setDate(split4[1])
    }

    const loadNet = async () => {
        const res = await requestApi(apiService.getHomeList(date), date == "")
        let list = res.issueList[0].itemList.filter((item) => item.type === "video")
        if (date == "") {
            let bannerList: HomeModelIssueListItemList[]
            let bannerBean: HomeModelIssueListItemList = {}
            bannerList = res.issueList[0].itemList.filter((item) => item.type == "banner2")
            if (bannerList.length > 0) {
                bannerBean = {bannerList: bannerList, type: "banner"}
                list.unshift(bannerBean)
            }
        }
        setNextUrl(res.nextPageUrl)
        if (refreshing) {
            setDataList(list);
        } else {
            setDataList((v) => [...v, ...list]);
        }
        setRefreshing(false)
        setLoading(false)
    }

    return (
        <View style={appStyles.container}>
            <TitleBar title="首页" showBackIcon={false}/>
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
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.01}
                />
            </StateComponent>
        </View>
    )
}


export default HomePage
