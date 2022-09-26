// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// common
import TopContainer from "../../../Common/TopContainer";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";

// images and icon
import { rightYellow } from "../../../constants/Images";
// import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";
import UnlockYellowIcon from "../../../Assets/Icons/UnlockYellowIcon";
import RightYellowIcon from "../../../Assets/Icons/RightYellowIcon";
import BellYellowIcon from "../../../Assets/Icons/BellYellowIcon";
import BottomModalContainer from "../../../Common/BottomModalContainer";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const BusinessFreeTrial = ({ navigation }) => {

    //---------- state, veriable, context and hooks
    const [isVisible, setIsVisible] = useState(false);

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


    //---------- life cycles

    useEffect(() => {

    }, [])

    //---------- main return

    const renderYelloCircle = (icon) => {

        return (
            <CustomView
                style={{
                    borderWidth: 11,
                    backgroundColor: isDarkTheme ? '#000' : '#fff',
                    borderColor: '#FFA500',
                    height: 57,
                    width: 57,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    icon
                }
            </CustomView>
        )
    }

    const renderModal = () => {

        return (
            <BottomModalContainer
                navigation={navigation}
                render_view_key={'LIST MY BUSINESS!'}
                isVisible={isVisible}
                hideModal={() => setIsVisible(!isVisible)}
                paddingBottom={25}
            />
        )
    }

    return (
        <Frame>

            <CustomView
                style={{
                    flex: 1,
                    paddingBottom: isVisible ? 500 : 50
                }}
            >

                <TopContainer
                    text1={`Start Your FREE TRIAL now!`}
                    isDarkTheme={isDarkTheme}
                />

                <CustomView
                    style={{
                        paddingTop: 20,
                        paddingHorizontal: 20
                    }}
                >

                    <CustomView
                        style={{
                            marginHorizontal: 30
                        }}
                    >
                        <CustomText
                            text={'As a BarCode PREMIUM business you will be able to list your business in front of people who are looking for what you have to offer!'}
                            style={{
                                color: isDarkTheme ? '#FFFFFF' : "#747474",
                                fontSize: 22,
                                textAlign: 'center',
                                fontWeight: '400',
                            }}
                        />

                        <CustomText
                            text={"WHAT’S GONNA HAPPEN?"}
                            style={{
                                marginTop: 20,
                                textAlign: 'center',
                                fontSize: 23,
                                fontWeight: '500',
                                color: isDarkTheme ? '#FFFFFF' : '#A6A6A6',
                            }}
                        />

                    </CustomView>

                    <CustomView
                        style={{
                            flex: 1,
                            // height:'100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 50
                        }}
                    >

                        <CustomView
                            style={{
                                width: '30%',
                                alignItems: 'center'
                            }}
                        >

                            <CustomView
                                style={{
                                    height: '100%',
                                    width: 8,
                                    backgroundColor: '#FFA500',
                                    paddingBottom: 50
                                }}
                            />

                            <CustomView
                                style={{
                                    position: 'absolute',
                                    top: 20
                                }}
                            >
                                {
                                    renderYelloCircle(<UnlockYellowIcon />)
                                }
                            </CustomView>

                            <CustomView
                                style={{
                                    position: 'absolute',
                                    top: 150
                                }}
                            >
                                {
                                    renderYelloCircle(<BellYellowIcon />)
                                }
                            </CustomView>

                            <CustomView
                                style={{
                                    position: 'absolute',
                                    top: 300
                                }}
                            >
                                {
                                    renderYelloCircle(<RightYellowIcon />)
                                }
                            </CustomView>

                        </CustomView>

                        <CustomView
                            style={{
                                width: '100%'
                            }}
                        >
                            <CustomText
                                text={"FIRST"}
                                style={{
                                    marginTop: 20,
                                    fontSize: 25,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"List your business details "}
                                style={{
                                    fontSize: 18,
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"SECOND"}
                                style={{
                                    marginTop: 60,
                                    fontSize: 25,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"Enter all your events, specials, and "}
                                style={{
                                    fontSize: 17,
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"daily happenings in our calender "}
                                style={{

                                    fontSize: 17,
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"THIRD"}
                                style={{
                                    marginTop: 60,
                                    fontSize: 25,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"Upload great pictures of your "}
                                style={{
                                    fontSize: 17,
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />

                            <CustomText
                                text={"business, food, and drink"}
                                style={{
                                    fontSize: 17,
                                    color: isDarkTheme ? '#FFF' : '#747474',
                                }}
                            />


                        </CustomView>

                    </CustomView>

                    <CustomView
                        style={{
                            marginTop: 30,
                            borderWidth: 1,
                            borderColor: isDarkTheme ? '#FFF' : '#000',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >

                        <CustomText
                            text={"ALREADY SUBSCRIBED?"}
                            style={{
                                textAlign: 'center',
                                fontSize: 13,
                                fontWeight: '400',
                                color: isDarkTheme ? '#FFF' : '#000',
                                marginLeft: 20,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => {
                                setIsVisible(true)
                            }}
                            style={{
                                backgroundColor: '#FFA500',
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                borderRadius: 30
                            }}
                        >
                            <CustomText
                                text={"RESTORE"}
                                style={{
                                    textAlign: 'center',
                                    fontSize: 13,
                                    fontWeight: '400',
                                    color: '#FFF',
                                }}
                            />
                        </TouchableOpacity>
                    </CustomView>

                </CustomView>

            </CustomView>

            {
                renderModal()
            }

        </Frame>
    );
};

//---------- export component

export default BusinessFreeTrial;
