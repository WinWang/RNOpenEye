export interface homeModel {
    issueList: HomeModelIssueList[];
    nextPageUrl: string;
    nextPublishTime: number;
    newestIssueType: string;
}

export interface HomeModelIssueListItemListData {
    dataType: string;
    id: number;
    title: string;
    description: string;
    image: string;
    actionUrl: string;
    shade: boolean;
    autoPlay: boolean;
}

export interface HomeModelIssueListItemList {
    type: string;
    data: HomeModelIssueListItemListData;
    id: number;
    adIndex: number;
}

export interface HomeModelIssueList {
    releaseTime: number;
    type: string;
    date: number;
    publishTime: number;
    itemList: HomeModelIssueListItemList[];
    count: number;
}