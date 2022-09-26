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
    FlatList,
} from "react-native";

// third party lib
import { ScrollView } from "react-native-gesture-handler";
import { Portal, Button, Provider } from "react-native-paper";

// icon and images
import { addIcon, } from ".././constants/Images";

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

function BottomModalContainer({ navigation, faqData, render_view_key = 'lets_drink', content, isVisible, renderItem, hideModal, backgroundColor, paddingBottom, Gallery_URL }) {

    //---------- state, context and hooks

    const [visible, setVisible] = React.useState(isVisible);
    const [modalKey, setModalKey] = React.useState(render_view_key);

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

    useEffect(() => {

        setModalKey(render_view_key)
    }, [render_view_key]);



    //---------- helper: user's actions

    const showModal = () => setVisible(true);

    //---------- render helper

    const renderContent = (key) => {

        switch (key) {

            case 'lets_drink':

                return renderLetsDrink1()
                break;

            case 'lets_drink2':

                return renderLetsDrink2()
                break;

            case 'faq':

                return renderFaqData()
                break;


            case 'gallary':

                return renderGallary()
                break;

            case 'LIST MY BUSINESS!':

                return renderBusinesPlans()
                break;

            case 'LIST MY BUSINESS!_2':

                return renderBusinesPlans2()
                break;
            default:
                break;
        }
    }

    //  render Modal Business Free trial Screee 
    const renderBusinesPlans = () => {
        return (
            <React.Fragment>

                <CustomText
                    text={'6 MONTHS FREE, THEN $19.99/MONTH'}
                    style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: isDarkTheme ? '#FFF' : '#7B7B7B',
                        textAlign: "center",
                    }}
                />

                <CustomView
                    style={{
                        height: 25,

                    }}
                />

                <CustomButton
                    onPress={() => {
                        alert('in progress...')
                        // navigation.navigate('FAQ')
                    }}
                    paddingVertical={15}
                    borderRadius={49.5}
                    title={"LIST MY BUSINESS!"}
                    fontSize={27}
                    fontWeight={"500"}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <TouchableOpacity
                    onPress={() => {
                        setModalKey('LIST MY BUSINESS!_2')
                    }}
                >

                    <CustomText
                        text={'OTHER PLANS'}
                        style={{
                            fontSize: 19,
                            fontWeight: '500',
                            color: isDarkTheme ? "#FFFFFF" : '#7B7B7B',
                            textAlign: 'center'
                        }}
                    />
                </TouchableOpacity>

            </React.Fragment >
        )
    }

    //  render Modal Business Free trial Screee 
    const renderBusinesPlans2 = () => {

        return (
            <React.Fragment>

                <CustomView
                    style={{
                        // marginTop:10,
                        paddingVertical: 10,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#0094FF',
                        borderRadius: 30,
                    }}
                >
                    <CustomText
                        text={'MONTHLY $19.99'}
                        style={{
                            fontSize: 22,
                            fontWeight: '700',
                            textAlign: 'center',
                            color: isDarkTheme ? '#FFF' : '#747474'
                        }}
                    />

                </CustomView>

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <CustomText
                    text={'YEARLY $199'}
                    style={{
                        fontSize: 22,
                        fontWeight: '700',
                        textAlign: 'center',
                        paddingVertical: 10,
                        color: isDarkTheme ? '#FFF' : '#747474',
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        borderRadius: 30,
                    }}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <CustomText
                    text={'6 MONTHS FREE, THEN $19.99/MONTH'}
                    style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#7B7B7B',
                        textAlign: 'center',
                        marginBottom: 10,
                        marginTop: 20
                    }}
                />

                <CustomButton
                    onPress={() => {
                        alert('in progress...')
                        // navigation.navigate('FAQ')
                    }}
                    paddingVertical={15}
                    borderRadius={49.5}
                    title={"LIST MY BUSINESS!"}
                    fontSize={27}
                    fontWeight={"500"}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <TouchableOpacity
                    onPress={() => {
                        setModalKey('LIST MY BUSINESS!_2')
                    }}
                >

                    <CustomText
                        text={'OTHER PLANS'}
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                            color: isDarkTheme ? "#FFFFFF" : '#7B7B7B',
                            textAlign: 'center'
                        }}
                    />
                </TouchableOpacity>
            </React.Fragment >
        )
    }

    const renderLetsDrink1 = () => {

        return (
            <React.Fragment>

                <CustomText
                    text={'14 DAYS FREE, THEN $9.99/MONTH'}
                    style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: isDarkTheme ? '#FFF' : '#747474',
                        textAlign: "center",
                    }}
                />

                <CustomView
                    style={{
                        height: 25,

                    }}
                />

                <CustomButton
                    onPress={() => {
                        alert('in progress...')
                        // navigation.navigate('FAQ')
                    }}
                    paddingVertical={15}
                    borderRadius={49.5}
                    title={"LET’S DRINK!"}
                    fontSize={30}
                    fontWeight={"500"}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <TouchableOpacity
                    onPress={() => {
                        setModalKey('lets_drink2')
                    }}
                >

                    <CustomText
                        text={'OTHER PLANS'}
                        style={{
                            fontSize: 19,
                            fontWeight: '500',
                            color: isDarkTheme ? "#FFFFFF" : '#7B7B7B',
                            textAlign: 'center'
                        }}
                    />
                </TouchableOpacity>

            </React.Fragment >
        )
    }


    const renderLetsDrink2 = () => {

        return (
            <React.Fragment>

                <CustomView
                    style={{
                        // marginTop:10,
                        paddingVertical: 10,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#0094FF',
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
                        height: 10
                    }}
                />

                <CustomText
                    text={'YEARLY  $99'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        textAlign: 'center',
                        paddingVertical: 10,
                        color: isDarkTheme ? '#FFF' : '#000',
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        borderRadius: 30,
                    }}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <CustomText
                    text={'14 DAYS FREE, THEN $9.99/MONTH'}
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#707070',
                        textAlign: 'center',
                        marginBottom: 10
                    }}
                />

                <CustomButton
                    onPress={() => {
                        alert('in progress...')
                        // navigation.navigate('FAQ')
                    }}
                    paddingVertical={15}
                    borderRadius={49.5}
                    title={"LET’S DRINK!"}
                    fontSize={30}
                    fontWeight={"500"}
                />

                <CustomView
                    style={{
                        height: 10
                    }}
                />

                <TouchableOpacity
                    onPress={() => {
                        setModalKey('lets_drink2')
                    }}
                >

                    <CustomText
                        text={'OTHER PLANS'}
                        style={{
                            fontSize: 19,
                            fontWeight: '500',
                            color: isDarkTheme ? "#FFFFFF" : '#7B7B7B',
                            textAlign: 'center'
                        }}
                    />
                </TouchableOpacity>
            </React.Fragment >
        )
    }

    const renderFaqData = () => {

        return (
            <React.Fragment>

                <CustomText
                    text={faqData?.title}
                    style={{
                        fontSize: 28,
                        fontWeight: '700',
                        color: '#42AEEC'
                    }}
                />

                {
                    !!faqData?.body &&
                    <CustomText
                        text={faqData?.body}
                        style={{
                            marginTop: 30,
                            fontSize: 20,
                            fontWeight: '500',
                            color: '#9A9A9A'
                        }}
                    />
                }

                {
                    !!faqData?.body1 &&
                    <CustomText
                        text={faqData?.body1}
                        style={{
                            marginTop: 30,
                            fontSize: 20,
                            fontWeight: '500',
                            color: faqData?.isLink ? '#031CF6' : '#9A9A9A'
                        }}
                    />
                }

            </React.Fragment>
        )
    }

    const renderGallary = () => {
        return (
            // <ScrollView>
            //     <CustomView
            //         style={{
            //             flex: 1,
            //             flexDirection: "row",
            //             flaxWrap: "wrap",
            //         }}>

            //         {
            //             Gallery_URL.map((item, indx) => {
            //                 return (

            //                     <Image
            //                         source={{ uri: item?.URL }}
            //                         resizeMode='cover'
            //                         style={{
            //                             width: 150,
            //                             height: 179,
            //                             borderRadius: 30,
            //                         }}
            //                     />

            //                 )
            //             })
            //         }
            //     </CustomView>

            // </ScrollView >

            <FlatList style={{
                flexWrap: "wrap"
            }}
                data={Gallery_URL}
                numColumns={2}
                keyExtractor={(item, index) => item.id}
                renderItem={(item) => {
                    var index = item.index
                    return (
                        <Image
                            source={{ uri: item?.item?.URL }}
                            // resizeMode='center'
                            style={{
                                width: index === 0 ? 150 : index === 3 ? 150 : index === 4 ? 179 : index === 5 ? 155 : 190,
                                height: index === 0 ? 179 : index === 3 ? 179 : index === 4 ? 178 : index === 5 ? 168 : 123,
                                borderRadius: 30,
                                margin: 11,
                            }}
                        />
                    )
                }
                }
            />
        )
    }

    //---------- return main view

    return (

        <Modal
            style={{
                flex: 1,
            }}
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
            <TouchableOpacity
                onPress={() => {
                    // alert(0)
                    hideModal ? hideModal()
                        :


                        navigation.goBack()

                    setVisible(false)
                }}
                style={styles.centeredView1}
            >
                <TouchableOpacity
                    activeOpacity={1}

                    onPress={(e) => {
                        console.log(e)
                        e.stopPropagation()
                    }}
                    style={[
                        {
                            backgroundColor: backgroundColor ? backgroundColor : isDarkTheme ? '#111111' : '#fff',
                            padding: 20,
                            borderRadius: 30,
                            botderTopWidht: backgroundColor ? 1 : 0,
                            broderTopColor: backgroundColor ? '#111111' : '#EBEBEB',
                            paddingBottom: paddingBottom ? paddingBottom : 50,
                            shadowOffset: {
                                width: 0,
                                height: -0
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 0,
                            elevation: 200
                        }
                    ]}
                >
                    {
                        modalKey && renderContent(modalKey)
                    }

                </TouchableOpacity>
            </TouchableOpacity>
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
        backgroundColor: 'rgba(0,0,0,0.7)',
    },

});

