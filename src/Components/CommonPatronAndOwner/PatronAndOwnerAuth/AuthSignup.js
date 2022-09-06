// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";


// images and icon
import { rightYellow } from "../../../constants/Images";
import Logo from '../../../Assets/Icons/Logo';

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import CalenderIcon from "../../../Assets/Icons/CalenderIcon";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import EyeCrossIcon from "../../../Assets/Icons/EyeCrossIcon";
import CallIcon from '../../../Assets/Icons/CallIcon'
import MessageIcon from '../../../Assets/Icons/MessageIcon'
import RightYellowIcon from "../../../Assets/Icons/RightYellowIcon";

// common
import TopContainer from "../../../Common/TopContainer";
import CustomTextInput from "../../../Common/CustomTextInput";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import HeaderRight from "../../../Common/HeaderRight";
import HeaderTitle from "../../../Common/HeaderTitle";
import HeaderLeft from "../../../Common/HeaderLeft";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";

//---------- main component

const AuthSignup = ({ navigation }) => {

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

  //---------- life cycles

  useEffect(() => {

  }, [])

  //---------- main return

  return (
    <Frame>

      <TopContainer
        text1={"WHO ARE YOU?"}
        isDarkTheme={isDarkTheme}
      />

      <CustomView
        style={{
          paddingHorizontal: 20,
        }}
      >
        <CustomTextInput
          marginTop={20}
          placeholder={'Name'}
          rightIcon={<UserIconSmall />}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
        />


        <CustomTextInput
          marginTop={20}
          placeholder={'Birthday'}
          rightIcon={<CalenderIcon />}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
        />

        <CustomTextInput
          marginTop={20}
          placeholder={'Phone'}
          rightIcon={<CallIcon />}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
        />

        <CustomTextInput
          marginTop={20}
          placeholder={'Email'}
          rightIcon={<MessageIcon />}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
        />


        <CustomTextInput
          marginTop={20}
          placeholder={'Password'}
          rightIcon={<EyeCrossIcon />}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
        />


        <CustomTextInput
          marginTop={20}
          placeholder={'Confirm Password'}
          placeholderTextColor={"#fff"}
          backgroundColor={isDarkTheme?"#000":"#fff"}
          rightIcon={<EyeCrossIcon />}
        
        />


        {/* <CustomBorderButton
          title={'Only for testing theme'}
          onPress={() => {
            changeTheme()
          }}
        /> */}

        <CustomView
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRigth: 10,
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: isDarkTheme ? '#000000' : '#FFFFFF'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileImageAuth')
            }}
          >

            <Image
              style={{ marginRight: 10 }}
              source={rightYellow}
              resizeMode='cover'
              
            />
          </TouchableOpacity>
        </CustomView>

      </CustomView>

    </Frame >
  );
};

//---------- export component

export default AuthSignup;

