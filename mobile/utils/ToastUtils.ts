import Toast from "react-native-toast-message";
import {ToastPosition} from "react-native-toast-message/lib/src/types";

class ToastUtils {

    static showErrorToast(msg: string, position: ToastPosition = 'bottom') {
        Toast.show({
            type: 'error',
            text1: msg,
            position: position
        })
    }

    static showSuccessToast(msg: string, position: ToastPosition = 'bottom') {
        Toast.show({
            type: 'success',
            text1: msg,
            position: position
        })
    }

    static showInfoToast(msg: string, position: ToastPosition = 'bottom') {
        Toast.show({
            type: 'info',
            text1: msg,
            position: position
        })
    }
}

export default ToastUtils
