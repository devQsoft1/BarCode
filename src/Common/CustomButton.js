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

const CustomButton = (props) => {

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
      onPres={() => {
        props?.onPress()
      }}
      style={{
        paddingVertical: props?.paddingVertical ? props.paddingVertical : 8,
        paddingHorizontal: props?.paddingHorizontal ? props?.paddingHorizontal : 5,
        backgroundColor: props?.backgroundColor ? props?.backgroundColor : '#0066FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width:'100%'
      }}
    >
      <CustomText
        style={{
          color: props?.color ? props?.color : '#fff',
          fontSize: props?.fontSize ? props?.fontSize : 16,
          fontWeight: '400'
        }}

        text={props?.title}
      />

    </TouchableOpacity>
  );
};

//---------- export component

export default CustomButton;
