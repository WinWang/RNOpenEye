import httpRequest from "./request"
import {homeModel} from "../model/homeModel";
import {FocusModel} from "../model/focusModel";
import {categoryModel} from "../model/categoryModel";

let baseUrl = "https://baobab.kaiyanapp.com/";

/**
 * 获取首页接口
 */
function getHomeList(date: String) {
    return httpRequest.get<homeModel>(
        {
            url: baseUrl + "api/v2/feed",
            params: {"date": date, "num": 1},
            checkResultCode: false,
        }
    )
}

/**
 * 获取关注接口
 */
function getFocusData(pageIndex: number = 0) {
    return httpRequest.get<FocusModel>(
        {
            url: baseUrl + "api/v4/tabs/follow",
            params: {"start": pageIndex},
            checkResultCode: false,
        }
    )
}

/**
 * 获取分类接口
 */
function getCategoryData() {
    return httpRequest.get<any>(
        {
            url: baseUrl + "api/v4/categories",
            checkResultCode: false,
        }
    )
}

/**
 * 获取专题接口
 */
function getTopicData(start: number) {
    return httpRequest.get<categoryModel>(
        {
            url: baseUrl + "api/v3/specialTopics",
            params: {"start": start},
            checkResultCode: false,
        }
    )
}


export default {
    getHomeList,
    getFocusData,
    getCategoryData,
    getTopicData,
}