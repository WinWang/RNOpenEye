import {Dimensions, View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import {memo, useState} from "react";
import {SceneMap, TabView} from "react-native-tab-view";
import HotRankPage from "./rankPage/hotRankPage";
import CustomTabBar from "../../component/CustomTabbar";

const HotPage = ({showTitleBar = true}) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'weekly', title: '周排行'},
        {key: 'monthly', title: '月排行'},
        {key: 'historical', title: '总排行'},
    ]);

    // const renderScene = SceneMap({
    //     weekly: () => HotRankPage("weekly"),
    //     monthly: () => HotRankPage("monthly"),
    //     historical: () => HotRankPage("historical"),
    // });

    const renderScene = ({route}: { route: { key: string } }) => {
        switch (route.key) {
            case 'weekly':
                return <HotRankPage rankType={"weekly"}/>;
            case 'monthly':
                return <HotRankPage rankType={"monthly"}/>;
            case 'historical':
                return <HotRankPage rankType={"historical"}/>
            default:
                return null;
        }
    };


    return (
        <View style={appStyles.container}>
            {showTitleBar && <TitleBar title="热门" showBackIcon={false}/>}
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
export default memo(HotPage)
