import {useState} from 'react';
import {
    VIEW_STATE_EMPTY,
    VIEW_STATE_ERROR,
    VIEW_STATE_LOADING,
    VIEW_STATE_NETWORK_ERROR,
    VIEW_STATE_SUCCESS
} from '../constant/ViewStateConstant';
import {ApiResponse} from '../http/http';
import axios from 'axios';

/**
 * 定义React版本的请求状态的hooks，根据请求接口来使用,需要配置页面多状态的StateComponent一起使用
 */
type LoadStateResult = [
    string,
    <T>(requestPromise: Promise<T>, showLoadingState?: boolean) => Promise<T>
];

const useRequestStatus = (viewState: string = VIEW_STATE_LOADING, checkResult?: boolean): LoadStateResult => {
    const [viewStatus, setViewStatus] = useState(viewState);

    function updateViewState(state: string) {
        setViewStatus(state)
    }

    function run<T>(
        requestPromise: Promise<T>,
        showLoadingState?: boolean
    ): Promise<T> {
        if (showLoadingState !== false) {
            updateViewState(VIEW_STATE_LOADING)
        }
        return new Promise<T>((resolve, reject) => {
            requestPromise
                .then((res) => {
                    if (Array.isArray(res)) {
                        updateViewState(VIEW_STATE_SUCCESS)
                    } else {
                        if (checkResult) {
                            const result = res as ApiResponse;
                            const resultData = result.data;
                            if (result.errorCode !== 0) {
                                updateViewState(VIEW_STATE_ERROR)
                            } else if (
                                Array.isArray(resultData) &&
                                resultData.length === 0
                            ) {
                                updateViewState(VIEW_STATE_EMPTY)
                            } else {
                                updateViewState(VIEW_STATE_SUCCESS)
                            }
                        } else {
                            updateViewState(VIEW_STATE_SUCCESS)
                        }
                    }
                    resolve(res);
                })
                .catch((error) => {
                    if (axios.isAxiosError(error)) {
                        updateViewState(VIEW_STATE_NETWORK_ERROR)
                    } else {
                        updateViewState(VIEW_STATE_ERROR)
                    }
                    reject(error);
                });
        });
    }

    return [viewStatus, run];
};

export default useRequestStatus;