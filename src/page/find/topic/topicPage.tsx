import {Text, View} from "react-native";
import {useEffect} from "react";
import apiService from "../../../http/apiService";

const TopicPage = () => {

    useEffect(() => {
        apiService.getTopicData(0)
    }, [])


    return (
        <View>
            <Text>TopicPage</Text>
        </View>
    )
}

export default TopicPage