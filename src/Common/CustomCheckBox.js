// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
// import CheckBox from '@react-native-community/checkbox';
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

      <Image
        source={isDarkTheme ? CheckboxWhite : CheckboxBlack}
        resizeMode='cover'
        style={{
          height: 24,
          width: 24,
          marginRight: 10
        }}
      />


      {/* <CheckBox
        style={{ flex: 1, padding: 10 }}
        uncheckedCheckBoxColor={'red'}
        onClick={() => {

        }}
        isChecked={isChecked}
      // checkedImage={<Image
      //   source={CheckboxWhite}
      //   resizeMode='cover'
      // />}
      // unCheckedImage={<Image
      //   source={isDarkTheme ? CheckboxWhite : checkboxBlack}
      //   resizeMode='cover'
      // />}
      /> */}
      {/* <CheckBox
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}

        // tintColors={{ ColorValue: '#fff' }}
      tintColor={{ ColorValue: '#707070' }}
      // borderColor={'red'}
      // tintColor={{ ColorValue: isDarkTheme ? '#fff' : "#707070" }}
      // tintColor={{ ColorValue: isDarkTheme ? '#fff' : "#707070" }}
      // onCheckColor={{ ColorValue: isDarkTheme ? '#fff' : "#707070" }}
      // onFillColor={{ ColorValue: isDarkTheme ? '#fff' : "#707070" }}
      // onTintColor={{ ColorValue: isDarkTheme ? '#fff' : "#707070" }}


      // value={isChecked}
      // onValueChange={(newValue) => onValueChange(newValue)}
      // onChange={onChange}
      /> */}

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

