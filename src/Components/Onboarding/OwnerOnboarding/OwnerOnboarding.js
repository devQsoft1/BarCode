//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";


// images and icon
import GoliveIcon from "../../../assets/Icons/GoLiveIcon";
import { JoinUsOnboarding, mobileOnboarding, calenderOnboarding, AddPicturesOnBoarding } from '../../../constants/Images'
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
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            source={JoinUsOnboarding}
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
                            marginTop: 60

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
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            style={{

                            }}
                            source={mobileOnboarding}
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
                            marginTop: 90,
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
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            source={calenderOnboarding}
                            resizeMode='cover'
                        />
                    </CustomView>
                    <CustomText
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                            textAlign: "center",
                            marginTop: 50,
                            flex: 0.5,
                            marginBottom: 10
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
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        <Image
                            source={AddPicturesOnBoarding}
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
                        flex: 1,
                        // paddingTop: 30,
                        paddingHorizontal: 20
                    }}
                >
                    <CustomView
                        style={{ flex: 1.5 }}>
                        {/* <Image
                            source={GoliveIcon}
                            resizeMode='cover'
                        /> */}
                        <GoliveIcon fill={"#fff"} />
                    </CustomView>
                    <CustomText
                        style={{

                            fontSize: 18,
                            fontWeight: '600',
                            color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                            textAlign: "center",
                            marginTop: 30,
                            flex: 0.5
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
                        // marginTop: 20
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

