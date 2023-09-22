import {Image, StyleSheet, View} from "react-native";
import appStyles from "../../res/styles";

const MinePage = () => {
    return (
        <View style={appStyles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require("../../assets/image/back_mine.png")} style={styles.imageStyle}/>
                <Image source={require("../../assets/image/default_avatar.jpeg")}
                       style={styles.imageAvatarStyle}/>
            </View>
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
    }

})


export default MinePage
