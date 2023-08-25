import {Dimensions, StyleSheet, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import FocusPage from "./focus/focusPage";
import CategoryPage from "./category/categoryPage";
import TopicPage from "./topic/topicPage";
import {useState} from "react";
import {color_gray_1, color_white} from "../../res/colors";
import LogUtils from "../../utils/LogUtils";
import Toast, {SuccessToast} from "react-native-toast-message";

const FindPage = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'focus', title: '关注'},
        {key: 'category', title: '分类'},
        {key: 'topic', title: '主题'},
    ]);
    const renderScene = SceneMap({
        focus: FocusPage,
        category: CategoryPage,
        topic: TopicPage,
    });

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            activeColor={color_white}
            inactiveColor={color_gray_1}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
            onTabPress={({route}) => {
                let newIndex = routes.findIndex((r) => r.key === route.key)
                LogUtils.error(">>>>>>" + newIndex)
                setIndex(newIndex);
            }}
            jumpTo={(key) => {
                LogUtils.error(">>>>>>" + key)
                let newIndex = routes.findIndex((r) => r.key === key)
                LogUtils.error(">>>>>>" + newIndex)
                setIndex(newIndex);
            }}
        />
    );

    return (
        <View style={appStyles.container}>
            <TitleBar title="发现"/>
            <View style={{flex: 1}}>
                <TabView
                    lazy={true}
                    navigationState={{index, routes}}
                    renderScene={renderScene}
                    onIndexChange={(newIndex) => {
                        setIndex(newIndex)
                    }}
                    renderTabBar={renderTabBar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: "red",
        fontSize: 15
    },
    tabLabel: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16, // Customize the tab label font size
    },
    indicator: {
        backgroundColor: 'white',
        height: 3
    },
});


export default FindPage