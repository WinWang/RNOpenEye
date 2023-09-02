import httpRequest from "./request"
import {homeModel} from "../model/homeModel";
import {FocusModel} from "../model/focusModel";
import {categoryModel} from "../model/categoryModel";
import {topicModel} from "../model/topicModel";
import {DEVICE_NUM, UUID} from "../constant/Constant";

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
    return httpRequest.get<categoryModel>(
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
    return httpRequest.get<topicModel>(
        {
            url: baseUrl + "api/v3/specialTopics",
            params: {"start": start},
            checkResultCode: false,
        }
    )
}

/**
 * 获取排行榜接口
 * @param rankType  weekly 周排行       monthly 月排行        historical  总排行
 */
function getRankList(rankType: string) {
    return httpRequest.get<homeModel>(
        {
            url: baseUrl + "api/v4/rankList/videos",
            params: {"strategy": rankType},
            checkResultCode: false,
        }
    )
}

/**
 * 获取视频详情接口
 * @param id
 */
function getRelationList(id: number) {
    return httpRequest.get<homeModel>(
        {
            url: baseUrl + "api/v4/video/related",
            params: {"id": id},
            checkResultCode: false,
        }
    )
}

/**
 * 获取分类详情接口
 * @param id
 * @param start
 */
function getCategoryDetailList(id: number, start: number) {
    return httpRequest.get<homeModel>(
        {
            url: baseUrl + "api/v4/categories/videoList",
            params: {
                "id": id,
                "start": start,
                "udid": UUID,
                deviceModel: DEVICE_NUM
            },
            checkResultCode: false,
        }
    )
}


export default {
    getHomeList,
    getFocusData,
    getCategoryData,
    getTopicData,
    getRankList,
    getRelationList,
    getCategoryDetailList,
}
