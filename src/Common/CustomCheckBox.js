// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Pressable } from "react-native";
import CheckBox from '@react-native-community/checkbox';
// import CheckBox from 'react-native-check-box'
// images
import { CheckboxWhite, CheckboxBlack } from "../constants/Images";

// context
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "./CustomView";
import CustomText from "./CustomText";

//---------- main component

const CustomCheckBox = ({ navigation, isChecked, onValueChange, onChange, rightText, rightTextColor, fontSize, fontWeight }) => {

  //---------- state, veriable, context and hooks
  const [checked, setChecked] = useState(false);

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
        value={checked}
        onValueChange={(newValue) =>{
        
          console.log('asdasdfa', newValue)
          setChecked(newValue)
        }}

        tintColors={{ true: isDarkTheme ? '#fff' : '#707070', false: isDarkTheme ? '#fff' : '#707070' }}
      
      />

      {
        !!rightText &&
        <CustomText
          text={rightText}
          style={{
            color: rightTextColor ? rightTextColor : '#747474',
            fontSize: fontSize ? fontSize : 16,
            fontWeight: fontWeight ? fontWeight : '400',
          }}
        />
      }

    </CustomView>
  );
};

//---------- export component

export default CustomCheckBox;
