//---------- imports

// react
import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Modal,
    StyleSheet,
    Pressable,
} from "react-native";

// third party lib
import { ScrollView } from "react-native-gesture-handler";
import { Portal, Button, Provider } from "react-native-paper";

// icon and images
import {
    addIcon,
} from ".././constants/Images";

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

//---------- component

function ModalContainer({ navigation, render_view_key, content, isVisible, renderItem, hideModal }) {

    //---------- state, context and hooks

    const [visible, setVisible] = React.useState(isVisible);

    const {
        isDarkTheme,
        theme,
        appStateObject,
        appStateArray,
        currentUser,

        changeTheme,
        storeDataInAppState,
        removeDataFromAppState,
        storeDataInAsyncStorage,
        getDataFromAsyncStorage,
        setCurrentUser,
    } = ContextHelper()

    //---------- life cycle

    useEffect(() => {

        console.log('isVisible :', isVisible, 'key:', render_view_key, 'content :', content)
        setVisible(isVisible);
    }, [isVisible]);

    //---------- helper: user's actions

    const showModal = () => setVisible(true);


    const renderContentLayout = () => {

        return (
            <React.Fragment>
                <CustomView
                    style={[
                        CommonStyles.RowCenter,
                        {
                            backgroundColor: isDarkTheme ? '#000' : '#fff',
                            padding: 40
                        }
                    ]}
                >
                    <CustomText
                        style={{
                            fontSize: 20
                        }}
                        text={content?.title}
                    />
                </CustomView>

                <CustomView
                    style={
                        AuthStyles.ModalContentContainer
                    }
                >

                    <TouchableOpacity
                        onPress={() => {
                            hideModal()
                        }}
                        style={{
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >

                        <CustomText
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: '#0066FF'
                            }}
                            text={content?.left_content}
                        />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: '#CECECE', width: 1 }} />

                    <TouchableOpacity
                        onPress={() => {
                            hideModal()
                        }}
                        style={{
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >


                        <CustomText
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: '#FFA500'
                            }}
                            text={content?.right_content}
                        />
                    </TouchableOpacity>

                </CustomView>

            </React.Fragment >
        )
    }

    //---------- return main view

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                hideModal()
                setVisible(false)
            }}
        >
            <CustomView
                style={styles.centeredView1}
            >
                <CustomView
                    style={[
                        styles.modalView,
                        { backgroundColor: isDarkTheme ? '#000' : '#fff' }
                    ]}
                >
                    {
                        renderContentLayout()
                    }
                </CustomView>
            </CustomView>
        </Modal>
    );
};


//---------- export component

export default ModalContainer;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'absolute'
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'transparent'
    },
    modalView: {
        margin: 20,

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