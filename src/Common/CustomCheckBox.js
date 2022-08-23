//---------- imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

// third party lib
import CheckBox from 'react-native-check-box';

// helper
import { BLACK } from "../constants/Colors";
import ContextHelper from "../ContextHooks/ContextHelper";

//---------- main component

const CustomCheckBox = ({ isChecked, onClick, leftText, rightText, rightTextView, checkBoxColor, style }) => {

  //---------- state, context

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

  return (
    <CheckBox
      style={[
        { flex: 1, padding: 10 },
        style
      ]}
      onClick={() => {
        onClick()
      }}
      checkBoxColor={checkBoxColor}
      isChecked={isChecked}
      leftText={leftText}
      rightText={rightText}
    />
  );
};

export default CustomCheckBox;
