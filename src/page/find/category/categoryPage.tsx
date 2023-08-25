import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import apiService from "../../../http/apiService";
import useRequestStatus from "../../../hooks/useRequestStatus";
import {categoryModel} from "../../../model/categoryModel";
import StateComponent from "../../../component/StateComponent";
import appStyles from "../../../res/styles";
import CategoryItemComponent from "./component/categoryItemComponent";

const CategoryPage = () => {
    const [viewState, requestApi] = useRequestStatus()
    const [categoryList, setCategoryList] = useState<categoryModel>([])

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
                    renderItem={({item}) => CategoryItemComponent(item)}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    horizontal={false}
                />
            </View>
        </StateComponent>
    )
}


export default CategoryPage