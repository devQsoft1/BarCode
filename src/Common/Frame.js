//---------- imports

// react
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme } from "react-native";

import ContextHelper from "../ContextHooks/ContextHelper";

//---------- main app / component

const Frame = (props) => {

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
            <ScrollView>
                {
                    props.children
                }
            </ScrollView>
        </View>
    );
};

//---------- export component

export default Frame;
