// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, ImageBackground, Dimensions } from "react-native";

// image
import { AuthBgWhite, AuthBgBlack, Logo } from "../constants/Images";
// import Logo from '../assets/Icons/Logo';

// common componets
import CustomText from "./CustomText";
import CustomView from "./CustomView";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const TopContainer = ({ text1, text2, isDarkTheme, textAlign, fontSizetText2, lineHeight, lineHeightText2 ,fontSize}) => {

    //---------- state, veriable, context and hooks

    //---------- life cycles

    //---------- main return

    return (
        <View
            style={{
                height: (windowHeight * 40) / 100
            }}
        >

            <ImageBackground
                source={isDarkTheme ? AuthBgBlack : AuthBgWhite}
                resizeMode="stretch"
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                }}
            >

                <CustomView
                    style={{
                        height: '70%',
                        justifyContent: 'flex-end'
                    }}
                >

                    {/* <Logo /> */}

                    <Image
                        style={{
                            height: 140,
                            width: 140
                        }}
                        source={Logo}
                        resizeMode='contain'
                    />
                </CustomView>

                {/* <View style={{ height: 30 }} /> */}
                <CustomView
                    style={{
                        height: '30%',
                        justifyContent: 'flex-end',
                        paddingBottom: 20,
                        alignItems: 'center'

                    }}
                >

                    {
                        !!text1 &&
                        <CustomText
                            text={text1}
                            style={{
                                fontSize: fontSize ? fontSize : 23,
                                fontWeight: '500',
                                color: isDarkTheme ? '#FFFFFF' : '#A6A6A6',
                                textAlign: textAlign,
                                lineHeight: lineHeight,
                            }}
                        />
                    }

                    {
                        !!text2 &&
                        <CustomText
                            text={text2}
                            style={{
                                fontSize: fontSizetText2 ? fontSizetText2 : 23,
                                fontWeight: '700',
                                color: isDarkTheme ? '#fff' : '#A6A6A6',
                                lineHeight: lineHeightText2
                            }}
                        />
                    }
                </CustomView>

            </ImageBackground>
        </View>
    );
};

//---------- export component

export default TopContainer;

