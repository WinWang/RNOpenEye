// GlobalStore.ts
import {makeAutoObservable} from 'mobx';

class GlobalStore {
    //全局请求loading展示状态
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }
}

export default new GlobalStore();