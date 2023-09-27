import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import appStyles from "../../res/styles";
import {color_333} from "../../res/colors";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import CommonDialog from "../../component/CommonDialog";
import {about, projectDesc} from "../../res/strings";

const MinePage = () => {
    const [showDialog, setShowDialog] = useState(false);
    const navigation = useNavigation()

    const goReactWeb = () => {
        // @ts-ignore
        navigation.navigate("webview", {url: "file:///android_asset/web/index.html", title: "React Web版本"})
    }


    return (
        <View style={appStyles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require("../../assets/image/back_mine.png")} style={styles.imageStyle}/>
                <Image source={require("../../assets/image/default_avatar.jpeg")}
                       style={styles.imageAvatarStyle}/>
            </View>

            <Pressable style={styles.sectionStyle} onPress={() => {
                // @ts-ignore
                navigation.navigate("container", {type: "focus", title: "关注"})
            }}>
                <Image source={require("../../assets/image/icon_focus.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>关注</Text>
            </Pressable>

            <Pressable style={styles.sectionStyle} onPress={() => {
                // @ts-ignore
                navigation.navigate("container", {type: "category", title: "分类"})
            }}>
                <Image source={require("../../assets/image/icon_type.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>分类</Text>
            </Pressable>

            <Pressable style={styles.sectionStyle} onPress={() => {
                // @ts-ignore
                navigation.navigate("container", {type: "topic", title: "主题"})
            }}>
                <Image source={require("../../assets/image/icon_topic.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>主题</Text>
            </Pressable>

            <Pressable style={styles.sectionStyle} onPress={() => {
                // @ts-ignore
                navigation.navigate("container", {type: "hot", title: "热门"})
            }}>
                <Image source={require("../../assets/image/icon_rank.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>热门</Text>
            </Pressable>

            <Pressable style={styles.sectionStyle} onPress={() => {
                goReactWeb()
            }}>
                <Image source={require("../../assets/image/icon_focus.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>React Web版本</Text>
            </Pressable>

            <Pressable style={styles.sectionStyle} onPress={() => {
                setShowDialog(true)
            }}>
                <Image source={require("../../assets/image/icon_focus.png")} style={styles.imageIconStyle}/>
                <Text style={styles.titleStyle}>关于</Text>
            </Pressable>

            <CommonDialog
                visible={showDialog}
                title={about}
                message={projectDesc}
                showPositiveButton={false}
                negativeCallback={() => {
                    setShowDialog(false)
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    imageWrapper: {
        width: "100%",
        height: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    imageStyle: {
        width: "100%",
        height: 250
    },

    imageAvatarStyle: {
        width: 80,
        height: 80,
        position: "absolute",
        borderRadius: 40,
    },

    sectionStyle: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5"
    },

    imageIconStyle: {
        width: 20,
        height: 20,
    },

    titleStyle: {
        marginStart: 10,
        fontSize: 16,
        color: color_333
    }


})


export default MinePage
