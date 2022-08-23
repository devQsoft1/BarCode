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
import CustomButton from "./CustomButton";

//---------- component

function BottomModalContainer({ navigation, render_view_key, content, isVisible, renderItem, hideModal, backgroundColor }) {

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

        setVisible(isVisible);
    }, [isVisible]);

    //---------- helper: user's actions

    const showModal = () => setVisible(true);

    //---------- render helper

    const renderContent = (key) => {

        switch (key) {

            case 'lets_drink':

                return renderLetsDrink1()
                break;

            case 'lets_drink':

                return renderLetsDrink2()
                break;

            case 'faq':

                return renderFaqData()
                break;

            default:
                break;
        }
    }

    const renderLetsDrink1 = () => {

        return (
            <React.Fragment>

                <CustomText
                    text={'14 DAYS FREE, THEN $9.99/MONTH'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: isDarkTheme ? '#FFF' : '#000'
                    }}
                />

                <CustomView
                    style={{
                        height: 30
                    }}
                />

                <CustomButton
                    onPress={() => {
                        // alert('in progress...')
                        navigation.navigate('FAQ')
                    }}
                    paddingVertical={15}
                    borderRadius={25}
                    title={"LET’S DRINK!"}
                />

                <CustomView
                    style={{
                        height: 50
                    }}
                />

                <CustomText
                    text={'OTHER PLANS'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#707070',
                        textAlign: 'center'
                    }}
                />

            </React.Fragment >
        )
    }

    const renderLetsDrink2 = () => {

        return (
            <React.Fragment>

                <CustomView
                    style={{
                        paddingVertical: 10,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#707070',
                        borderRadius: 30,
                    }}
                >
                    <CustomText
                        text={'MONTHLY  $9.99'}
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                            textAlign: 'center',
                            color: isDarkTheme ? '#FFF' : '#000'
                        }}
                    />

                </CustomView>

                <CustomView
                    style={{
                        height: 24
                    }}
                />

                <CustomText
                    text={'YEARLY  $99'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        textAlign: 'center',
                        color: isDarkTheme ? '#FFF' : '#000'
                    }}
                />

                <CustomView
                    style={{
                        height: 24
                    }}
                />

                <CustomText
                    text={'14 DAYS FREE, THEN $9.99/MONTH'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#707070',
                        textAlign: 'center'
                    }}
                />

                <CustomView
                    style={{
                        height: 24
                    }}
                />

                <CustomButton
                    onPress={() => {
                        hideModal()
                        setVisible(false)
                    }}
                    paddingVertical={15}
                    borderRadius={25}
                    title={"LET’S DRINK!"}
                />

                <CustomView
                    style={{
                        height: 50
                    }}
                />

                <CustomText
                    text={'OTHER PLANS'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#707070',
                        textAlign: 'center'
                    }}
                />

            </React.Fragment >
        )
    }

    const renderFaqData = () => {

        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    //---------- return main view

    return (

        <Modal
            style={{
                flex: 1
            }}
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
                        {
                            backgroundColor: backgroundColor ? backgroundColor : isDarkTheme ? '#111111' : '#EBEBEB',
                            padding: 20,
                            borderRadius: 30
                        }
                    ]}
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

export default BottomModalContainer;

const styles = StyleSheet.create({

    centeredView1: {
        elevation: 100,
        zIndex: 100,
        flex: 1,
        width: '100%',
        marginTop: 22,
        justifyContent: "flex-end",
        backgroundColor: 'transparent',
    },

});