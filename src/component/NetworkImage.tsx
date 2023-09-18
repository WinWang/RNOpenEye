import {FC, useState} from "react";
import {Image, ImageProps, StyleSheet, View} from "react-native";

const defaultPlaceholder = require('../assets/image/back_placeholder.png'); // 默认占位图的路径

const NetworkImage: FC<ImageProps> = ({source, style, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <View style={[styles.container, style]}>
            {isLoading && (
                <Image
                    source={defaultPlaceholder} // 占位图的路径
                    style={[styles.placeholder, style]}
                />
            )}
            <Image
                source={source}
                style={[styles.image, style]}
                resizeMode={"cover"}
                onLoadEnd={() => setIsLoading(false)} // 图片加载完成后隐藏占位图
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default NetworkImage;
