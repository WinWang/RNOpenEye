import {View} from "react-native";
import appStyles from "../../res/styles";
import TitleBar from "../../component/TitleBar";
import {NavigateProps} from "../../route/router";
import FocusPage from "../find/focus/focusPage";
import CategoryPage from "../find/category/categoryPage";
import TopicPage from "../find/topic/topicPage";
import HotPage from "../hot/hotPage";

/**
 * 容器页面
 * @constructor
 */
const ContainerPage = (route: NavigateProps<"container">) => {

    const container = () => {
        let type = route.route.params.type
        if (type === "focus") {
            return (
                <FocusPage/>
            )
        } else if (type === "category") {
            return (
                <CategoryPage/>
            )
        } else if (type === "topic") {
            return (
                <TopicPage/>
            )
        } else {
            return (
                <HotPage showTitleBar={false}/>
            )
        }
    }

    return (
        <View style={appStyles.container}>
            <TitleBar title={route.route.params.title}/>
            <View style={appStyles.container}>
                {container()}
            </View>

        </View>
    );
}


export default ContainerPage
