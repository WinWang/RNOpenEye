import {Dimensions, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import {SceneMap, TabView} from "react-native-tab-view";
import FocusPage from "./focus/focusPage";
import CategoryPage from "./category/categoryPage";
import TopicPage from "./topic/topicPage";
import {useState} from "react";
import CustomTabBar from "../../component/CustomTabbar";

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

    return (
        <View style={appStyles.container}>
            <TitleBar title="发现"/>
            <View style={{flex: 1}}>
                <TabView
                    lazy={true}
                    navigationState={{index, routes}}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{width: Dimensions.get('window').width}}
                    renderTabBar={CustomTabBar}
                />
            </View>
        </View>
    )
}

export default FindPage
