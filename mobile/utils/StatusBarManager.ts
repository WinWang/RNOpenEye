import { StatusBar, Platform } from 'react-native';

class StatusBarManager {
    static setImmersiveStatusBar() {
        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('transparent');
        } else if (Platform.OS === 'ios') {
            StatusBar.setBarStyle('dark-content', true);
        }
    }
}

export default StatusBarManager;