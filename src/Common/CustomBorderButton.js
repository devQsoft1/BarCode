//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// style
import { BLACK } from "../constants/Colors";

// context
import ContextHelper from "../ContextHooks/ContextHelper";

// common
import CustomView from "./CustomView";
import CustomText from "./CustomText";

//---------- main components

const CustomBorderButton = (props) => {

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

  //---------- Main View

  return (
    <TouchableOpacity
      onPress={() => {
        props?.onPress()
      }}
      style={{
        // paddingVertical: props?.paddingVertical ? props.paddingVertical : 8,
        paddingHorizontal: props?.paddingHorizontal ? props?.paddingHorizontal : 5,
        backgroundColor: isDarkTheme ? '#000' : '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: props?.borderColor ? props?.borderColor : isDarkTheme ? '#fff' : '#000',
        paddingVertical: props?.paddingVertical ? props.paddingVertical : 10,
      }}
    >
      <CustomText
        style={{
          color: props?.color ? props?.color : isDarkTheme ? '#fff' : '#000',
          fontSize: props?.fontSize ? props?.fontSize : 16,
          fontWeight: '400'
        }}

        text={props?.title}
      />

    </TouchableOpacity>
  );
};

//---------- export component

export default CustomBorderButton;
