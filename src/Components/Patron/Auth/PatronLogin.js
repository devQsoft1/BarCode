// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Dimensions } from "react-native";

// images and icon
import { patronLoginBG } from "../../../constants/Images";
import Logo from '../../../Assets/Icons/Logo';
import MessageIconWhite from '../../../Assets/Icons/MessageIconWhite'
import EyeCrossIconWhite from '../../../Assets/Icons/EyeCrossIconWhite'
import AppleIcon from "../../../Assets/Icons/AppleIcon";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon";
import FacebookIcon from "../../../Assets/Icons/FacebookIcon";

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";

// common
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";
import CustomTextInput from "../../../Common/CustomTextInput";
import CustomButton from "../../../Common/CustomButton";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronLogin = ({ navigation }) => {

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

      <CustomView
        style={{
          flex: 1,
          height: windowHeight + 20,
        }}
      >

        <ImageBackground
          source={patronLoginBG}
          resizeMode="cover"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >

          <CustomView
            style={{
              height: 300,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >

            <Logo />

            <CustomText
              text={"JOIN NOW TO START YOUR"}
              style={{
                fontSize: 24,
                fontWeight: '700',
              }}
            />

            <CustomText
              text={"FREE TRAIL!"}
              style={{
                fontSize: 24,
                fontWeight: '700',
              }}
            />
          </CustomView>

          <CustomView
            style={{
              width: '90%',
              marginTop: 30
            }}
          >

            <CustomTextInput
              placeholder={'Eamil'}
              rightIcon={<MessageIconWhite />}
              placeholderTextColor={'#FFF'}
              borderColor={'#FFF'}
            />

            <View style={{ height: 20 }} />

            <CustomTextInput
              placeholder={'Password'}
              rightIcon={<EyeCrossIconWhite />}
              placeholderTextColor={'#FFF'}
              borderColor={'#FFF'}
            />

            <CustomText
              text={"Forgot Password?"}
              style={{
                fontSize: 14,
                color: '#0066FF',
                alignSelf: 'flex-end'
              }}
            />

            <View style={{ height: 20 }} />

            <CustomButton
              onPress={() => {

                currentUser?.user_type === 'business_owner' ?
                  navigation.navigate('OwnerOnboarding')
                  :
                  navigation.navigate('PatronOnboarding')
              }}
              title={'Login'}
              paddingVertical={20}
            />


            <CustomText
              text={"OR"}
              style={{
                fontSize: 16,
                alignSelf: 'center',
                marginVertical: 30
              }}
            />

            <CustomView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10
              }}
            >

              <GoogleIcon />

              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10
                }}
              >
                <FacebookIcon />
              </CustomView>
              <AppleIcon />
            </CustomView>

            <CustomText
              text={"NEW USER?"}
              style={{
                fontSize: 16,
                alignSelf: 'center',
                marginTop: 50
              }}
            />


            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PatronSignup')
              }}
            >

              <CustomText
                text={"SIGN UP HERE!"}
                style={{
                  fontSize: 16,
                  alignSelf: 'center',
                  color: '#FFA500'
                }}
              />
            </TouchableOpacity>


          </CustomView>


        </ImageBackground>
      </CustomView>

    </Frame>
  );
};

//---------- export component

export default PatronLogin;

