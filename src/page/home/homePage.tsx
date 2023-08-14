import {FlatList, RefreshControl, Text, View} from "react-native";
import TitleBar from "../../component/TitleBar";
import appStyles from "../../res/styles";
import {useEffect, useState} from "react";
import apiService from "../../http/apiService";
import {HomeModelIssueListItemList} from "../../model/homeModel";
import HomeItemComponent from "./homeItemComponent";
import CommonFooter from "../../component/CommonFooter";

const HomePage = () => {
    const [dataList, setDataList] = useState<HomeModelIssueListItemList[]>([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("");

    useEffect(() => {
        loadNet()
    }, [])


    const onRefresh = async () => {
        setDataList([])
        await setDate("")
        loadNet()
    }

    const loadMore = async () => {
        await loadNet()
    }

    const loadNet = () => {
        apiService.getHomeList(date).then(res => {
            let nextPageUrl = res.nextPageUrl;
            let split = nextPageUrl.split("?");
            let split2 = split[1];
            let split3 = split2.split("&");
            let split4 = split3[0].split("=");
            let list = res.issueList[0].itemList.filter((item) => item.type === "video")
            if (refreshing) {
                setDataList(list);
                console.log(">>>>>>>>刷新")
            } else {
                setDataList((v) => [...v, ...list]);
                console.log(">>>>>>>>加载")
            }
            setDate(split4[1]);
            setRefreshing(false)
            setLoading(false)
        }).catch(error => {
            setRefreshing(false)
            setLoading(false)
        })
    }

    return (
        <View style={appStyles.container}>
            <TitleBar title="首页"/>
            <FlatList
                data={dataList}
                renderItem={({item}) => (HomeItemComponent(item))}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                ListFooterComponent={CommonFooter}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}


export default HomePage