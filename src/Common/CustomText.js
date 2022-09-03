import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { BLACK } from "../constants/Colors";

import ContextHelper from "../ContextHooks/ContextHelper";

const CustomText = (props) => {

  const { numberOfLines, text, text2, style,style2 } = props;

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
    <>
      <Text numberOfLines={numberOfLines} style={[{ color: theme?.color ? theme?.color : '#000' }, style,]}>
        {text}
      </Text>
      <Text numberOfLines={numberOfLines} style={[{ color: theme?.color ? theme?.color : '#000' }, style2]}>
        {text2}
      </Text>
    </>


  );
};

export default CustomText;
