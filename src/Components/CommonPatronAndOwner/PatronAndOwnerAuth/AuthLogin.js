// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

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
import TopContainer from "../../../Common/TopContainer";

// images and icon
import { Apple, Facebook, Google, patronLoginBG, Twitter } from "../../../constants/Images";
import Logo from '../../../Assets/Icons/Logo';
import MessageIconWhite from '../../../Assets/Icons/MessageIconWhite'
import EyeCrossIconWhite from '../../../Assets/Icons/EyeCrossIconWhite'
import AppleIcon from "../../../Assets/Icons/AppleIcon";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon";
import FacebookIcon from "../../../Assets/Icons/FacebookIcon";
import AppleIconShadow from "../../../Assets/Icons/AppleIconShadow";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const AuthLogin = ({ navigation }) => {

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
        text1={"JOIN NOW TO START YOUR"}
        text2={"FREE TRIAL!"}
        isDarkTheme={isDarkTheme}
        fontSizetText2={35}
      />

      <CustomView
        style={{
          flex: 1,
          // height: windowHeight + 20,
          marginHorizontal: 20,
          marginTop: 20
        }}
      >


        <CustomTextInput
          placeholder={'Eamil'}
          rightIcon={<MessageIconWhite />}
          placeholderTextColor={'#B4B4B4'}
          borderColor={'#DBDBDB'}
        />

        <View style={{ height: 20 }} />

        <CustomTextInput
          placeholder={'Password'}
          rightIcon={<EyeCrossIconWhite />}
          placeholderTextColor={'#B4B4B4'}
          borderColor={'#DBDBDB'}
        />

        <CustomText
          text={"Forgot Password?"}
          style={{
            fontSize: 14,
            color: '#42AEEC',
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
          title={'LOG IN'}
          paddingVertical={10}
          fontSize={23}
          fontWeight={"500"}
          color={isDarkTheme ? "#000" : '#fff'}
        />


        <CustomText
          text={"OR"}
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginVertical: 20,
            fontWeight: '500',
            color: isDarkTheme ? "#FFFFFF" : "#A6A6A6"
          }}
        />

        {
          isDarkTheme ?
            <CustomView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,

              }}
            >
              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: isDarkTheme ? "#FFFFFF" : '#747474',
                  height: 45,
                  width: 45,
                  borderRadius: 100,
                }}>
                <GoogleIcon />
              </CustomView>

              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  borderWidth: 1,
                  borderColor: isDarkTheme ? "#FFFFFF" : '#747474',
                  height: 45,
                  width: 45,
                  borderRadius: 100,
                }}
              >
                <FacebookIcon />
              </CustomView>
              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: isDarkTheme ? "#FFFFFF" : '#747474',
                  height: 45,
                  width: 45,
                  borderRadius: 100,
                }}>
                <AppleIcon />
              </CustomView>
            </CustomView>
            :
            <CustomView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5
              }}
            >
              <Image
                style={{
                  height: 48,
                  width: 48
                }}
                source={Apple}
                resizeMode='contain'
              />
              <Image
                style={{
                  height: 48,
                  width: 48
                }}
                source={Facebook}
                resizeMode='contain'
              />
              <Image
                style={{
                  height: 48,
                  width: 48
                }}
                source={Google}
                resizeMode='contain'
              />
              <Image
                style={{
                  height: 48,
                  width: 48
                }}
                source={Twitter}
                resizeMode='contain'
              />

            </CustomView>
        }

        <CustomText
          text={"Continue as guest"}
          style={{
            fontSize: 15,
            alignSelf: 'center',
            marginTop: 10,
            fontWeight: '400',
            color: isDarkTheme ? "#FFFFFF" : "#C7C7C7"
          }}
        />
        <CustomText
          text={"NEW USER?"}
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 50,
            color: isDarkTheme ? "#FFFFFF" : "#A6A6A6"
          }}
        />


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AuthSignup')
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

    </Frame>
  );
};

//---------- export component

export default AuthLogin;

{/* <ImageBackground
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
  <CustomView 
  style={{
   flexDirection:"row"
  }}>

  <CustomText
    text={"JOIN NOW "}
    style={{
      fontSize: 24,
      fontWeight: '700',
      color:isDarkTheme?"#42AEEC":"#42AEEC"
    }}
    />
  <CustomText
    text={"TO START YOUR"}
    style={{
      fontSize: 24,
      fontWeight: '700',
      color:isDarkTheme?"#FFFFFF":"#A6A6A6"
    }}
    />

    </CustomView>
  <CustomText
    text={"FREE TRAIL!"}
    style={{
      fontSize: 33,
      fontWeight: '700',
       color:isDarkTheme?"#FFFFFF":"#A6A6A6",
    }}
  />
</CustomView>

<CustomView
  style={{
    width: '90%',
    marginTop: 10
  }}
>

  <CustomTextInput
    placeholder={'Eamil'}
    rightIcon={<MessageIconWhite />}
    placeholderTextColor={'#B4B4B4'}
    borderColor={'#DBDBDB'}
  />

  <View style={{ height: 20 }} />

  <CustomTextInput
    placeholder={'Password'}
    rightIcon={<EyeCrossIconWhite />}
    placeholderTextColor={'#B4B4B4'}
    borderColor={'#DBDBDB'}
  />

  <CustomText
    text={"Forgot Password?"}
    style={{
      fontSize: 14,
      color: '#42AEEC',
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
    title={'LOG IN'}
    paddingVertical={10}
    fontSize={23}
    fontWeight={"500"}
  />


  <CustomText
    text={"OR"}
    style={{
      fontSize: 16,
      alignSelf: 'center',
      marginVertical: 20,
      fontWeight: '500',
      color: isDarkTheme ?"#FFFFFF":"#A6A6A6"
    }}
  />

  <CustomView
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5
    }}
  >

    <AppleIcon />
    <CustomView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
      }}
    >
      <FacebookIcon />
    </CustomView>
   
    <GoogleIcon  />
    
  </CustomView>
  <CustomText
    text={"Continue as guest"}
    style={{
      fontSize: 15,
      alignSelf: 'center',
      marginTop: 6,
      fontWeight: '400',
      color: isDarkTheme ?"#FFFFFF":"#C7C7C7"
    }}
  />
  <CustomText
    text={"NEW USER?"}
    style={{
      fontSize: 16,
      alignSelf: 'center',
      marginTop: 50,
      color: isDarkTheme ?"#FFFFFF":"#A6A6A6"
    }}
  />


  <TouchableOpacity
    onPress={() => {
      navigation.navigate('AuthSignup')
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


</ImageBackground> */}