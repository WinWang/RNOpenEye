import AsyncStorage from '@react-native-async-storage/async-storage';
import LogUtils from "./LogUtils";

type AsyncStorageCallback<T> = (result: T) => void;

class StorageUtil {
    static setValue<T>(key: string, value: T, callback?: AsyncStorageCallback<T>): void {
        AsyncStorage.setItem(key, JSON.stringify(value))
            .then(() => {
                if (callback) {
                    callback(value);
                }
            })
            .catch((error) => {
                LogUtils.error('StorageUtil:', error);
            });
    }

    static getValue<T>(key: string, callback: AsyncStorageCallback<T>): void {
        AsyncStorage.getItem(key)
            .then((value) => {
                if (value !== null) {
                    callback(JSON.parse(value));
                }
            })
            .catch((error) => {
                LogUtils.error('StorageUtil:', error);
            });
    }

    static removeValue(key: string, callback?: () => void): void {
        AsyncStorage.removeItem(key)
            .then(() => {
                if (callback) {
                    callback();
                }
            })
            .catch((error) => {
                LogUtils.error('StorageUtil:', error);
            });
    }
}

export default StorageUtil;
