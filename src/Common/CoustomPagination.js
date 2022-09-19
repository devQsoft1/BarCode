//---------- imports

// react

import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { BLACK } from "../constants/Colors";

// context
import ContextHelper from "../ContextHooks/ContextHelper";

// common
import CustomView from "./CustomView";

// image and icon
import { rightYellow } from '../constants/Images'

//---------- main components

const CoustomPagination = (props) => {

    //---------- state, context, hooks, props and veriables
    const { onPress, style, dataLength, isCenter, activeScreenIndex } = props;

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


    //---------- render helper

    const renderDots = () => {

        let view = []
        for (var i = 0; i < dataLength; i++) {

            view.push(<CustomView
                style={{
                    marginHorizontal: 5,
                    height: 13,
                    width: 13,
                    borderRadius: 13,
                    backgroundColor: activeScreenIndex === i + 1 ? '#919090' : '#D9D9D9'
                }}
            />
            )
        }

        return view.length > 0 && view.map((item, index) => {

            return item
        })
    }

    //---------- main return

    return (
        <CustomView
            style={[
                {
                    // flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                },
                style
            ]}
        >

            {
                isCenter &&
                <CustomView
                    style={{ width: '20%' }}
                />
            }
            <CustomView
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    // width: '70%'
                }}
            >
                {
                    renderDots()
                }
            </CustomView>

            <TouchableOpacity
                onPress={() => {
                    onPress && onPress(activeScreenIndex)
                }}
            >
                <Image
                    source={rightYellow}
                    resizeMode='cover'
                />
            </TouchableOpacity>

        </CustomView >
    );
};

//---------- export 

export default CoustomPagination;


//---------- constants data