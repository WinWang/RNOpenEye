import React from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {color_333, color_999, color_d5d5d5} from "../res/colors";
import appStyles from "../res/styles";

/**
 * 通用弹窗
 */
interface DialogProps {
    visible: boolean;
    title: string;
    message: string;
    showPositiveButton?: boolean;
    showNegativeButton?: boolean;
    positiveText?: string;
    negativeText?: string;
    positiveCallback?: () => void;
    negativeCallback?: () => void;
}

const CommonDialog: React.FC<DialogProps> = (
    {
        visible,
        title,
        message,
        showNegativeButton = true,
        showPositiveButton = true,
        positiveText = "确定",
        negativeText = "取消",
        positiveCallback,
        negativeCallback,
    }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={negativeCallback}
        >
            <View style={styles.dialogBg}>
                <View style={styles.dialogContent}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={styles.dialogTitle}>{title}</Text>
                    <View style={appStyles.horizontalDivider}></View>
                    <Text style={styles.dialogDesc}>{message}</Text>
                    <View style={styles.dialogBottomWrapper}>
                        {showNegativeButton && <Pressable style={styles.dialogButton} onPress={negativeCallback}>
                            <Text style={{color: 'red'}}>{negativeText}</Text>
                        </Pressable>}
                        <View style={styles.dialogDivider}></View>
                        {showPositiveButton && <Pressable style={styles.dialogButton} onPress={positiveCallback}>
                            <Text style={{color: 'red'}}>{positiveText}</Text>
                        </Pressable>}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    dialogBg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 0
    },

    dialogContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        display: "flex",
        flexDirection: "column",
    },

    dialogTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: "center",
        marginTop: 10,
        color: color_999
    },

    dialogDesc: {
        marginTop: 10,
        paddingHorizontal: 15,
        color: color_333
    },

    dialogBottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 0.5,
        borderColor: color_d5d5d5,
        height: 50
    },

    dialogButton: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        alignItems: "center",
    },

    dialogDivider: {
        width: 3,
        height: 30,
        color: color_d5d5d5,
    }


})


export default CommonDialog;
