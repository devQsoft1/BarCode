//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from "react-native";

// third party lib
import Swiper from 'react-native-swiper'

// common
import CustomText from "./CustomText";
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "./CustomView";

// icon and imges
import { Logo2 } from '../constants/Images'
import BackIcon from "../Assets/Icons/BackIcon";
import BackIconBlack from "../Assets/Icons/BackIconBlack";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const SwiperComponent = ({ navigation, handleTabsClick, current_tab, key }) => {

    //---------- state, veriable, context and hooks

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

    //---------- render content
    const rendermapData = (data) => {

        return data.map((item, index) => {

            return renderContent({ item, index })
        })

    }

    const renderContent = ({ item, index }) => {

        return (
            <ImageBackground
                key={index}
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                    alignItems: 'flex-start',
                    height: '100%',
                }}
            >

                <CustomView
                    style={{
                        flex: 1,
                        padding: 20,
                        justifyContent: 'space-between',
                    }}
                >

                    {
                        isDarkTheme
                            ?
                            <BackIconBlack />
                            :
                            <BackIcon />
                    }

                    <CustomView>

                        <CustomText
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                color: isDarkTheme ? '#000' : '#fff'
                            }}
                            text={item.title}
                        />

                        <CustomText
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: isDarkTheme ? '#000' : '#fff'
                            }}
                            text={item.desc}
                        />

                    </CustomView>

                </CustomView>

                <CustomView
                    style={{
                        paddingHorizontal: 20,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            handleTabsClick('detail')
                        }}
                        style={{
                            paddingBottom: 10,
                            borderBottomWidth: current_tab === 'detail' ? 2 : 0,
                            borderBottomColor: isDarkTheme ? '#000' : '#fff'
                        }}
                    >
                        <CustomText
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: isDarkTheme ? '#000' : '#fff'
                            }}
                            text={'Details'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            handleTabsClick('futute_events')
                        }}
                        style={{
                            paddingBottom: 10,
                            borderBottomWidth: current_tab === 'futute_events' ? 2 : 0,
                            borderBottomColor: isDarkTheme ? '#000' : '#fff'
                        }}
                    >
                        <CustomText
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: isDarkTheme ? '#000' : '#fff'
                            }}
                            text={'Future Events'}
                        />
                    </TouchableOpacity>
                </CustomView>
            </ImageBackground>
        )
    }

    //---------- main return

    return (
        <Swiper
            // style={styles.wrapper}
            showsButtons={false}
        >
            {
                rendermapData(data)
            }
        </Swiper>
    );
};



//---------- export component

export default SwiperComponent;

//---------- styles

//---------- constants

const data = [
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://i.picsum.photos/id/142/200/300.jpg?hmac=B08HyXonHhJPFpULUNgMfoCFGZqymUB3NhBxo3iWTnc",
    },
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://picsum.photos/id/237/200/300",
    },
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    }
]