//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";


// images and icon
import { freeDrinkOnBoarding, dateAndLocationOnBoarding, BusinessProfileOnBoarding, enjoyEclusiveOnBoarding } from '../../../constants/Images'

// common
import TopContainer from "../../../Common/TopContainer";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CoustomPagination from "../../../Common/CoustomPagination";

// constants
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
//---------- main component

const PatronOnboarding = ({ navigation }) => {

    //---------- state, veriable, context and hooks

    const [count, setCount] = useState(1)
    let scroll_ref = useRef()

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

    //---------- life cycles

    useEffect(() => {

    }, [])

    //-------- users' action
    const handlePagination = () => {

        if (count === 4) {

            navigation.navigate('PatronTabNavigation')
        } else {

            setCount(count + 1)
            let scroll = windowWidth * count

            scroll_ref?.current?.scrollTo && scroll_ref?.current?.scrollTo(({ x: scroll, y: 0, animated: true }))
        }
    }

    //---------- render helper's
    const renderFreeDrinkSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 2 }}>
                        <Image
                            source={freeDrinkOnBoarding}
                            resizeMode='cover'
                        />
                    </CustomView>

                    <CustomText
                        style={{
                            fontSize: 24,
                            fontWeight: '600',
                            color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                            textAlign: "center",
                            flex: 0.5,
                        
                        }}
                        text="GET A FREE DRINK EVERYDAY!"
                    />
                </CustomView>
            </>

        )
    }

    const renderDateAndLocationSection = () => {
        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />
                <CustomView
                    style={{
                        alignItems: 'center',
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5}}>
                        <Image
                            style={{

                            }}
                            source={dateAndLocationOnBoarding}
                            resizeMode='cover'
                        />
                    </CustomView>
                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                            textAlign: "center",
                            flex: 0.5,
                            marginTop:60
                        }}
                        text="SEE WHAT’S HAPPENING AROUND YOU
                        OR PUT IN A DATE AND LOCATION
                        TO FIND EXACTLY WHAT YOU ARE
                        LOOKING FOR!"
                    />
                </CustomView>
            </>
        )
    }

    const renderBusinessProfileSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20,
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            source={BusinessProfileOnBoarding}
                            resizeMode='cover'
                        />
                    </CustomView>
                 
                        <CustomText
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                                textAlign: "center",
                                flex: 0.5,
                                marginTop:60
                            }}
                            text="CHECK OUT THE BUSINESS PROFILE
                        TO VIEW PICTURES, MENUS, EVENTS,
                        AND BARCODE MEMBER SPECIALS!"
                        />
                </CustomView>
            </>

        )
    }

    const renderEnjoyEclusiveOnBoardingSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            source={enjoyEclusiveOnBoarding}
                            resizeMode='cover'
                        />
                    </CustomView>
                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                            textAlign: "center",
                            marginTop: 60,
                            flex: 0.5
                        }}
                        text="SHOW UP AND RECEIVE YOUR
                        FREE DRINK AND ENJOY
                        EXCLUSIVE SPECIALS"
                    />
                </CustomView>
            </>

        )
    }


    //---------- main return

    return (
        <Frame>

            <CustomView
                style={{
                    height: windowHeight
                }}
            >

                <ScrollView
                    ref={scroll_ref}
                    horizontal={true}
                    scrollEnabled={false}

                >
                    <CustomView
                        style={{
                            width: windowWidth,
                        }}
                    >

                        {

                            count === 1
                                ?
                                renderFreeDrinkSection()
                                :
                                count === 2
                                    ?
                                    renderDateAndLocationSection()
                                    :
                                    count === 3
                                        ?
                                        renderBusinessProfileSection()
                                        :
                                        count === 4
                                            ?
                                            renderEnjoyEclusiveOnBoardingSection()
                                            :
                                            null

                        }
                    </CustomView>
                </ScrollView>

                <CustomView
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 20,
                    }}
                >
                    <CoustomPagination
                        activeScreenIndex={count}
                        isCenter={true}
                        dataLength={4}
                        onPress={handlePagination}
                    />
                </CustomView>
            </CustomView>
        </Frame >
    );
};

//---------- export component


export default PatronOnboarding;

