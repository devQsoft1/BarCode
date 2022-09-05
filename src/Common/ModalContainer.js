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
import { addIcon, cheers } from ".././constants/Images";

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

function ModalContainer({ navigation, render_view_key, content, isVisible, renderItem, hideModal, fontSize, fontWeight ,rightFontSize }) {

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

        console.log('isVisible :', isVisible, 'key:', render_view_key, 'content :',hideModal)
        setVisible(isVisible);
    }, [isVisible]);

    //---------- helper: user's actions

    const showModal = () => setVisible(true);


    const renderModalContent = () => {

        return (
            <React.Fragment>
                <CustomView
                    style={[
                        CommonStyles.RowCenter,
                        {
                            backgroundColor: isDarkTheme ? '#000' : '#fff',
                            padding: 30,

                        }
                    ]}
                >
                    <CustomText
                        style={{
                            fontSize: 20,
                            color: isDarkTheme ? '#fff' : '#000',
                            textAlign: "center",
                            lineHeight:37.5
                        }}
                        text={content?.title}
                    />
                </CustomView>

                <CustomView
                    style={
                        [AuthStyles.ModalContentContainer,
                        ]
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
                                fontSize: fontSize ? fontSize : 20,
                                fontWeight: fontWeight ? fontWeight : '700',
                                textTransform: 'uppercase',
                                color: '#42AEEC',
                                textAlign:"center"

                            }}
                            text={content?.left_content}
                        />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: '#CBCBCB', width: 1 }} />

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
                                fontSize: rightFontSize ? rightFontSize : 20,
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: '#FFA500',
                                textAlign: "center",
                            }}
                            text={content?.right_content}
                        />
                    </TouchableOpacity>

                </CustomView>

            </React.Fragment >
        )
    }

    const renderDrinkOnus = () => {

        return (
            <React.Fragment>
                <CustomView
                    style={[
                        CommonStyles.RowCenter,
                        {
                            backgroundColor: isDarkTheme ? '#000' : '#fff',
                            paddingTop: 20
                        }
                    ]}
                >
                    <CustomText
                        style={{
                            fontSize: 35,
                            fontWeight: "500",
                            color: '#42AEEC',
                            marginBottom: 15
                        }}
                        text={"CHEERS!"}
                    />
                </CustomView>

                <CustomText
                    style={{
                        fontSize: 35,
                        fontWeight: "500",
                        color: isDarkTheme ? '#FFFFFF' : "#000",
                    }}
                    text={"DRINKS ON US"}
                />

                <CustomView
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 35
                    }}>
                    <Image
                        source={cheers}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 20,
                            fontWeight: "400",
                            color: isDarkTheme ? '#FFFFFF' : "#000",
                            textAlign: "center",
                            marginTop: 34,
                            lineHeight: 30

                        }}
                        text={"Please show your app to your server to complete your free drink!"}
                    />

                </CustomView>

            </React.Fragment >
        )
    }

    const renderTimeBardetails = () => {
        return (

            <React.Fragment>
                <CustomView
                    style={[

                        {
                            backgroundColor: isDarkTheme ? '#000' : '#fff',
                            paddingTop: 20,
                            // paddingHorizontal: 10
                        }
                    ]}
                >
                    <CustomText
                        style={{
                            fontSize: 25,
                            fontWeight: "600",
                            color: isDarkTheme ? "#FFFFFF" : "#000000",
                            textAlign: "center",
                            marginBottom: -12
                        }}
                        text={"$10 Drinks all day"}
                        style2={{
                            fontSize: 41,
                            fontWeight: "700",
                            color: isDarkTheme ? "#FFFFFF" : "#000000",
                            textAlign: "center",
                        }}
                        text2={" 8 AM - 2 PM!"}
                    />

                </CustomView>
                <CustomView style={{ width: '100%', height: 10, backgroundColor: 'black' }} ></CustomView>
                <CustomView
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 35
                    }}>
                    <CustomText
                        style={{
                            fontSize: 25,
                            fontWeight: "500",
                            color: isDarkTheme ? "#fff" : '#000000',
                            textAlign: "center",
                            marginVertical: 15,
                            lineHeight: 25
                        }}
                        style2={{
                            fontSize: 25,
                            fontWeight: "500",
                            color: isDarkTheme ? "#fff" : '#000000',
                            textAlign: "center",
                            marginVertical: 15,
                            lineHeight: 25
                        }}
                        text={"Free appetizer for all BarCode members."}
                        text2={"Limited to well drinks \n and non-IPA’s."}
                    />
                    <CustomText
                        style={{
                            fontSize: 25,
                            fontWeight: "500",
                            color: isDarkTheme ? "#fff" : '#000000',
                            textAlign: "center",

                        }}
                        text={"Whisper BarCode to \n the doorman for the secret backdoor \n special’s."}
                    />


                </CustomView>

            </React.Fragment >
        )
    }

    const renderContent = (key) => {

        switch (key) {

            case 'time_Bar_Details':

                return renderTimeBardetails()
                break;

            case 'Clamim_Drink':

                return renderModalContent()
                break;

                default:
                    return renderModalContent()
                    break;

        }
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
                        renderContent(render_view_key)
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