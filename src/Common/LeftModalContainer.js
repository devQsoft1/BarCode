//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from "react-native";

// icon and images
import { cheers } from ".././constants/Images";

// common
import CustomText from "./CustomText";

// styles
import AuthStyles from "../style/AuthStyles";
import CommonStyles from "../style/CommonStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";

// context
import ContextHelper from "../ContextHooks/ContextHelper";
import CustomView from "./CustomView";
import { Fonts } from "../constants";

//---------- component

function LeftModalContainer({ navigation, handleSubmit, render_view_key, content, isVisible, renderItem, hideModal, fontSize, fontWeight, rightFontSize }) {

    //---------- state, context and hooks

    const [visible, setVisible] = React.useState(isVisible);

    const {
        isDarkTheme,
        theme,
        appStateObject,
        appStateArray,
        currentUser,

        postData,
        changeTheme,
        storeDataInAppState,
        removeDataFromAppState,
        storeDataInAsyncStorage,
        getDataFromAsyncStorage,
        setCurrentUser,
    } = ContextHelper()

    //---------- life cycle

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    //---------- helper: user's actions

    const showModal = () => setVisible(true);




    const addEvent = () => {
        return (
            <CustomText
                text={"Add EVENT"}
                style={{
                    // margin:15,
                    paddingHorizontal: 53,
                    fontSize: 30,
                    fontWeight: '500',
                }}
            />
        )
    }
    //---------- return main view

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                hideModal ? hideModal()
                    :
                    navigation.goBack()
                setVisible(false)
            }}
        >
            <CustomView
                style={styles.centeredView1}
            >
                <CustomView
                    style={[
                        styles.modalView,
                        { backgroundColor: isDarkTheme ? '#000' : '#fff' }]}
                >
                    {
                        addEvent()
                    }
                </CustomView>
            </CustomView>
        </Modal>
    );
};

//---------- export component

export default LeftModalContainer;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "center",
        marginTop: 22,
        position: 'absolute'

    },
    centeredView1: {
        zIndex: 100,
        flex: 1,
        width: '100%',
        marginBottom: 73,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: 'rgba(0, 0, 0, 0.4)'

    },

    modalView: {
        margin: 25,
        paddingVertical: 20,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});