import {Image, StyleSheet, View} from "react-native";
import appStyles from "../../../res/styles";
import {color_333, color_888, color_d5d5d5} from "../../../res/colors";

/**
 * 首页骨架屏
 * @constructor
 */
const HomeSkeletonComponent = () => {
    return (
        <View style={appStyles.verticalLayout5Padding}>
            <Image source={require("../../../assets/image/back_placeholder.png")}
                   style={{width: "100%", height: 200, marginTop: 10, borderRadius: 8}}
            />
            <View style={[appStyles.horizontalLayoutCenter, {marginTop: 10}]}>
                <Image source={require("../../../assets/image/back_placeholder.png")}
                       style={{width: 50, height: 50, marginTop: 10, borderRadius: 25}}
                />
                <View style={[appStyles.verticalLayoutWrap, {marginLeft: 10, flex: 1}]}>
                    <View style={{height: 20, width: 250, backgroundColor: color_d5d5d5}}/>
                    <View style={{height: 20, width: 220, backgroundColor: color_d5d5d5, marginTop: 10}}/>
                </View>
            </View>

            <Image source={require("../../../assets/image/back_placeholder.png")}
                   style={{width: "100%", height: 200, marginTop: 10, borderRadius: 8}}
            />
            <View style={[appStyles.horizontalLayoutCenter, {marginTop: 10}]}>
                <Image source={require("../../../assets/image/back_placeholder.png")}
                       style={{width: 50, height: 50, marginTop: 10, borderRadius: 25}}
                />
                <View style={[appStyles.verticalLayoutWrap, {marginLeft: 10, flex: 1}]}>
                    <View style={{height: 20, width: 250, backgroundColor: color_d5d5d5}}/>
                    <View style={{height: 20, width: 220, backgroundColor: color_d5d5d5, marginTop: 10}}/>
                </View>
            </View>

            <Image source={require("../../../assets/image/back_placeholder.png")}
                   style={{width: "100%", height: 200, marginTop: 10, borderRadius: 8}}
            />
            <View style={[appStyles.horizontalLayoutCenter, {marginTop: 10}]}>
                <Image source={require("../../../assets/image/back_placeholder.png")}
                       style={{width: 50, height: 50, marginTop: 10, borderRadius: 25}}
                />
                <View style={[appStyles.verticalLayoutWrap, {marginLeft: 10, flex: 1}]}>
                    <View style={{height: 20, width: 250, backgroundColor: color_d5d5d5}}/>
                    <View style={{height: 20, width: 220, backgroundColor: color_d5d5d5, marginTop: 10}}/>
                </View>
            </View>

        </View>
    )
}

export default HomeSkeletonComponent
