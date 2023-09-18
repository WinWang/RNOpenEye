import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import apiService from "../../../http/apiService";
import useRequestStatus from "../../../hooks/useRequestStatus";
import {categoryModel} from "../../../model/categoryModel";
import StateComponent from "../../../component/StateComponent";
import appStyles from "../../../res/styles";
import CategoryItemComponent from "./component/categoryItemComponent";
import {useNavigation} from "@react-navigation/native";
import {CategoryDetail} from "../../../route/router";

/**
 * 分类首页tab页面
 * @constructor
 */
const CategoryPage = () => {
    const [viewState, requestApi] = useRequestStatus()
    const [categoryList, setCategoryList] = useState<categoryModel>([])
    const navigation = useNavigation()

    useEffect(() => {
        loadNet()
    }, [])

    const loadNet = async () => {
        let categoryData = await requestApi(apiService.getCategoryData(), true);
        setCategoryList(categoryData)
    }

    return (
        <StateComponent loadingState={viewState} retryCallback={loadNet}>
            <View style={appStyles.verticalCenterLayout5Padding}>
                <FlatList
                    data={categoryList}
                    renderItem={({item}) => CategoryItemComponent(item, (item) => {
                        // @ts-ignore
                        navigation.navigate(CategoryDetail,
                            {
                                id: item.id,
                                headImageUrl: item.headerImage,
                                name: item.name
                            });
                    })}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    horizontal={false}
                />
            </View>
        </StateComponent>
    )
}


export default CategoryPage
