import {Pressable, StyleSheet, Text} from "react-native";
import {categoryModelChild} from "../../../../model/categoryModel";
import ImageRegexUtils from "../../../../utils/ImageRegexUtils";
import {color_white} from "../../../../res/colors";
import NetworkImage from "../../../../component/NetworkImage";

const CategoryItemComponent = (item: categoryModelChild, itemClick?: (item: categoryModelChild) => void) => {
    return (
        <Pressable style={styles.imageTextWrapper} onPress={() => {
            itemClick?.(item)
        }}>
            <NetworkImage source={{uri: ImageRegexUtils(item.bgPicture)}}
                         style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{item.name}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({

    imageTextWrapper: {
        height: 190,
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    imageStyle: {
        width: "95%",
        height: "95%",
        borderRadius: 6,
    },

    titleStyle: {
        position: 'absolute', // 绝对定位文本
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: color_white,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryItemComponent
