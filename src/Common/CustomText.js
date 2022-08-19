import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { BLACK } from "../constants/Colors";

import ContextHelper from "../ContextHooks/ContextHelper";

const CustomText = (props) => {

  const { numberOfLines, text, style } = props;

  const {
    theme,
    isDarkTheme,
    appStateObject,
    appStateArray,
    changeTheme,
    storeDataInAppState,
    removeDataFromAppState
  } = ContextHelper()

  return (
    <Text numberOfLines={numberOfLines} style={[theme, style]}>
      {text}
    </Text>
  );
};

export default CustomText;
