//---------- imports

// react
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme, Dimensions, SafeAreaView } from "react-native";

// context
import ContextHelper from "../ContextHooks/ContextHelper";

// constants
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//---------- main app / component

const Frame = ({
    scrollEnabled = true,
    children
}) => {

    //---------- state, veriables and hooks

    const {
        theme,
        isDarkTheme,
        appStateObject,
        appStateArray,
        changeTheme,
        storeDataInAppState,
        removeDataFromAppState,
    } = ContextHelper();

    //---------- life cycle

    useEffect(() => {

    }, []);

    //---------- return main view 

    return (
        <View
            style={[
                {
                    flex: 1,
                },
                theme
            ]}
        >
            <ScrollView
                scrollEnabled={scrollEnabled}
                style={{
                    flex: 1,
                    paddingBottom: 30,
                }}
            >
                {
                    children
                }
            </ScrollView>
        </View >
    );
};

//---------- export component

export default Frame;
