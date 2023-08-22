import httpRequest from "./request"
import {homeModel} from "../model/homeModel";

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
            checkLoginState: true,
        }
    )
}

export default {
    getHomeList
}