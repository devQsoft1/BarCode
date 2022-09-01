//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// third party lib
import { Shadow } from 'react-native-shadow-2';


// common
import CustomText from "../../Common/CustomText";
import ContextHelper from '../../ContextHooks/ContextHelper'
import CustomView from "../../Common/CustomView";

// icon and imges
// import Logo2 from "../../Assets/Icons/Logo2";
import { Logo2 } from '../../constants/Images'
import { TextInput } from "react-native-gesture-handler";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const Header = ({ navigation, title, isCenter,fontWeight }) => {

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

    //---------- main return

    return (
        <Shadow
            style={{
                width: '100%',
            }}
        >
            <CustomView
                style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >

                <CustomView
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: isCenter ? '65%' : '75%',
                        justifyContent: isCenter ? 'space-between' : 'flex-start',

                    }}
                >
                    <Image
                        source={Logo2}
                        resizeMode='cover'
                    />


                    <CustomText

                        numberOfLine={2}
                        style={{
                            color: isDarkTheme ? '#fff' : '#000',
                            fontSize: 17,
                            fontWeight: fontWeight ? fontWeight : '400',
                            maxWidth: '70%',
                            // fontWeight: isCenter ? 'bold' : 'normal'
                        }}
                        text={title}
                    />
                </CustomView>

                <CustomView
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: 50,
                        padding: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFA500',
                        overflow: 'hidden'
                    }}
                >
                    <Image
                        source={{ uri: 'https://source.unsplash.com/user/c_v_r/100x100' }}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 50,
                        }}
                    />
                </CustomView>

            </CustomView>
        </Shadow>
    );
};



//---------- export component

export default Header;
