//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
    loading,
    isDarkTheme,
    theme,
    appStateObject,
    appStateArray,
    currentUser,

    setLoading,
    postData,
    changeTheme,
    storeDataInAppState,
    removeDataFromAppState,
    storeDataInAsyncStorage,
    getDataFromAsyncStorage,
    setCurrentUser,
  } = ContextHelper()


  //---------- Main View

  if (props?.icon) {

    return (
      <TouchableOpacity
        style={{

          shadowOffset: { width: -2, height: 3 },
          shadowColor: props?.shadowColor ? props?.shadowColor : '#42AEEC',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 10
        }}
        onPress={() => {
          props?.onPress && props.onPress()
        }}
        disabled={loading}
      >
        {props?.icon}
      </TouchableOpacity>
    )
  } else {

    return (
      <TouchableOpacity
        onPress={() => {
          props?.onPress && props?.onPress()
        }}
        style={{
          paddingVertical: props?.paddingVertical ? props.paddingVertical : 8,
          paddingHorizontal: props?.paddingHorizontal ? props?.paddingHorizontal : 5,
          backgroundColor: props?.backgroundColor ? props?.backgroundColor : '#42AEEC',
          borderRadius: props?.borderRadius ? props?.borderRadius : 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: props?.width ? props?.width : '100%',
          borderColor: props?.borderColor ? props?.borderColor : '#42AEEC',
          borderWidth: props?.borderColor ? 1 : 0,


          shadowOffset: { width: -2, height: 4 },
          shadowColor: props?.shadowColor ? props?.shadowColor : '#42AEEC',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 10
        }}
      >
        <CustomText
          style={{
            color: props?.color ? props?.color : '#fff',
            fontSize: props?.fontSize ? props?.fontSize : 16,
            fontWeight: props?.fontWeight ? props?.fontWeight : '400',
            textAlign: 'center',
          }}

          text={props?.title}
        />

      </TouchableOpacity>
    );
  }
};

//---------- export component

export default CustomButton;

