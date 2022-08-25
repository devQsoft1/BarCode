// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import CheckBox from '@react-native-community/checkbox';

// context
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "./CustomView";
import CustomText from "./CustomText";

//---------- main component

const CustomCheckBox = ({ navigation, isChecked, onValueChange, onChange, rightText, rightTextColor, fontSize }) => {

  //---------- state, veriable, context and hooks
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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

  //---------- life cycles

  useEffect(() => {

  }, [])

  //---------- main return

  return (
    <CustomView
      style={{
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >

      <CheckBox
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}

        // borderColor={'red'}
        tintColors={{ColorValue:"#707070"}}
        tintColor={{ColorValue:"#707070"}}
        onCheckColor={{ColorValue:"#707070"}}
        onFillColor={{ColorValue:"#707070"}}
        onTintColor={{ColorValue:"#707070"}}

      // value={isChecked}
      // onValueChange={(newValue) => onValueChange(newValue)}
      // onChange={onChange}
      />

      {
        !!rightText &&
        <CustomText
          text={rightText}
          style={{
            color: rightTextColor ? rightTextColor : '#747474',
            fontSize: fontSize ? fontSize : 16
          }}
        />
      }

    </CustomView>
  );
};

//---------- export component

export default CustomCheckBox;

