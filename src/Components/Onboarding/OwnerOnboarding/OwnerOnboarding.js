//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";


// images and icon
import { authBg } from "../../../constants/Images";
import { JoinUsOnboarding, mobileOnboarding, calenderOnboarding, AddPicturesOnBoarding, goLiveOnBording } from '../../../constants/Images'
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

const OwnerOnboarding = ({ navigation }) => {

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

        if (count === 5) {

            navigation.navigate('OwnerNavigator')
        } else {

            setCount(count + 1)
            let scroll = windowWidth * count

            scroll_ref?.current?.scrollTo && scroll_ref?.current?.scrollTo(({ x: scroll, y: 0, animated: true }))
        }
    }

    //---------- render helper's
    const renderJoinUsSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        // flex: 2,
                        paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >

                    <Image
                        source={JoinUsOnboarding}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#808080',
                            textAlign: "center",
                            marginTop: 40,

                        }}
                        text="Join BarCode today for free! Watch customers old and new start coming through your doors!"
                    />
                </CustomView>
            </>

        )
    }

    const renderMobileViewSection = () => {
        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />
                <CustomView
                    style={{
                        alignItems: 'center',
                        // flex: 2,
                        paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >

                    <Image
                        style={{

                        }}
                        source={mobileOnboarding}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#808080',
                            textAlign: "center",
                            marginTop: 40,

                        }}
                        text="Fill out your business profile, we make it easy for you not to forget anything with easy to check boxes."
                    />
                </CustomView>
            </>
        )
    }

    const renderCalenderSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        // flex: 2,
                        paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >

                    <Image
                        source={calenderOnboarding}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#808080',
                            textAlign: "center",
                            marginTop: 50,

                        }}
                        text="Enter all of your events in our calender, these will show up in front of customers looking for what you have to offer; so don’t forget anything! "
                    />
                </CustomView>
            </>

        )
    }

    const renderAddPicturesOrVideosSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        // flex: 2,
                        paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >

                    <Image
                        source={AddPicturesOnBoarding}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#808080',
                            textAlign: "center",
                            marginTop: 50,

                        }}
                        text="Add pictures or videos of your food, drinks, and fun events; let your customers see what they’re missing."
                    />
                </CustomView>
            </>

        )
    }

    const renderGoLiveSection = () => {

        return (
            <>
                <TopContainer
                    isDarkTheme={isDarkTheme}
                />


                <CustomView
                    style={{
                        alignItems: 'center',
                        // flex: 2,
                        paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >

                    <Image
                        source={goLiveOnBording}
                        resizeMode='cover'
                    />

                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#808080',
                            textAlign: "center",
                            marginTop: 50,

                        }}
                        text="ENROLL & GO LIVE! Now you’re part of the BarCode team. We can’t wait to be a small part of your success."
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
                            width: windowWidth
                        }}
                    >

                        {

                            count === 1
                                ?
                                renderJoinUsSection()
                                :
                                count === 2
                                    ?
                                    renderMobileViewSection()
                                    :
                                    count === 3
                                        ?
                                        renderCalenderSection()
                                        :
                                        count === 4
                                            ?
                                            renderAddPicturesOrVideosSection()
                                            :
                                            count === 5
                                                ?
                                                renderGoLiveSection()
                                                :
                                                null

                        }
                    </CustomView>
                </ScrollView>

                <CustomView
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 20
                    }}
                >
                    <CoustomPagination
                        activeScreenIndex={count}
                        isCenter={true}
                        dataLength={5}
                        onPress={handlePagination}
                    />
                </CustomView>
            </CustomView>
        </Frame >
    );
};

//---------- export component


export default OwnerOnboarding;

