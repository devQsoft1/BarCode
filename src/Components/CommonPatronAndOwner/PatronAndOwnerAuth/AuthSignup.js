// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";


// images and icon
import { rightYellow } from "../../../constants/Images";
import Logo from '../../../assets/Icons/Logo';

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import CalenderIcon from "../../../assets/Icons/CalenderIcon";
import UserIconSmall from "../../../assets/Icons/UserIconSmall";
import EyeCrossIcon from "../../../assets/Icons/EyeCrossIcon";
import CallIcon from '../../../assets/Icons/CallIcon'
import MessageIcon from '../../../assets/Icons/MessageIcon'
import RightYellowIcon from "../../../assets/Icons/RightYellowIcon";

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

  const [data, setData] = useState({
    // name: 'mohi0t',
    // dob: '06-12-1992',
    // email: 'my12@gmail.com',
    // mobile:'2133666699',
    // password: '12345',
    // confirm_password: '12345'
  })

  //---------- state, veriable, context and hooks

  const {
    isDarkTheme,
    theme,
    appStateObject,
    appStateArray,
    currentUser,

    postData,
    changeTheme,
    storeDataInAppState,
    removeDataFromAppState,
    storeDataInAsyncStorage,
    getDataFromAsyncStorage,
    setCurrentUser,
  } = ContextHelper()

  //---------- life cycles


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
          onChangeText={(text) => setData({
            name: text,
            ...data
          })}
          value={data.name}
          fontSize={20}
          marginTop={20}
          placeholder={'Name'}
          rightIcon={<UserIconSmall />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />


        <CustomTextInput
          onChangeText={(text) => setData({
            dob: text,
            ...data
          })}
          value={data.dob}

          fontSize={20}
          marginTop={20}
          placeholder={'Birthday'}
          rightIcon={<CalenderIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />

        <CustomTextInput
          onChangeText={(text) => setData({
            mobile: text,
            ...data
          })}
          value={data.mobile}

          fontSize={20}
          marginTop={20}
          placeholder={'Phone'}
          rightIcon={<CallIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />

        <CustomTextInput
          onChangeText={(text) => setData({
            email: text,
            ...data
          })}
          value={data.email}

          fontSize={20}
          marginTop={20}
          placeholder={'Email'}
          rightIcon={<MessageIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />


        <CustomTextInput
          onChangeText={(text) => setData({
            password: text,
            ...data
          })}
          value={data.password}
          fontSize={20}
          marginTop={20}
          placeholder={'Password'}
          rightIcon={<EyeCrossIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />


        <CustomTextInput
          onChangeText={(text) => setData({
            confirm_password: text,
            ...data
          })}
          value={data.confirm_password}
          fontSize={20}
          marginTop={20}
          placeholder={'Confirm Password'}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
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
              navigation.navigate('ProfileImageAuth', { data })
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

