// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";

// image
import { authBg } from "../constants/Images";
import Logo from '../Assets/Icons/Logo';

// common componets
import CustomText from "./CustomText";
import CustomView from "./CustomView";

//---------- main component

const TopContainer = ({ text1, text2, isDarkTheme, textAlign }) => {

    //---------- state, veriable, context and hooks

    //---------- life cycles

    //---------- main return

    return (
        <View
            style={{
                height: 300
            }}
        >

            <ImageBackground
                source={authBg}
                resizeMode="contain"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >

                <Logo />

                <View style={{ height: 30 }} />
                {
                    !!text1 &&
                    <CustomText
                        text={text1}
                        style={{
                            fontSize: 24,
                            fontWeight: '700',
                            color: isDarkTheme ? '#fff' : '#000',
                            textAlign: textAlign
                        }}
                    />
                }

                {
                    !!text2 &&
                    <CustomText
                        text={text2}
                        style={{
                            fontSize: 24,
                            fontWeight: '700',
                            color: isDarkTheme ? '#fff' : '#000'
                        }}
                    />
                }

            </ImageBackground>
        </View>
    );
};

//---------- export component

export default TopContainer;

