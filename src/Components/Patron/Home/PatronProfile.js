//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, FlatList, TouchableOpacity } from "react-native";

// common
import CustomView from "../../../Common/CustomView";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import BackIcon from "../../../Assets/Icons/BackIcon";
import ArrowIcon from "../../../Assets/Icons/ArrowIcon";
import ContextHelper from '../../../ContextHooks/ContextHelper';


// image & icon
import { Temp, UserImg } from "../../../constants/Images";

// constant
const windowHeight = Dimensions.get('window').height;

//---------- main components

const PatronProfile = ({ navigation }) => {


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


  //---------- render helper

  const renderGustProfile = () => {

    return (
      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >


        <Image
          source={UserImg}
          resizeMode='cover'
          style={{

          }}
        />

        <CustomText
          text={"GUEST"}
          style={{
            fontSize: 25,
            fontWeight: '700',
            textAlign: 'center',
            color: '#42AEEC',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '30%', height: 1.5, backgroundColor: '#C8C8C8', marginVertical: 10 }} />
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('AuthLogin')
        }}
        >
          <CustomText
            text={"LOG IN"}
            style={{
              fontSize: 24,
              fontWeight: '700',
              textAlign: 'center',
              color: isDarkTheme ? "#FFFFFF" : '#B1B1B1',
              marginVertical: 15
            }}
          />
        </TouchableOpacity>

        <CustomView style={{ width: '30%', height: 1.5, backgroundColor: '#C8C8C8', marginVertical: 10 }} />
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('RestorePurchases')
        }}
        >
        <CustomText
          text={"RESTORE PURCHASES"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: isDarkTheme ? "#FFFFFF" : '#B1B1B1',
            marginVertical: 15
          }}
          />
          </TouchableOpacity>

        <CustomView style={{ width: '30%', height: 1.5, backgroundColor: '#C8C8C8', marginVertical: 10 }} />
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('ContactUs')
        }}
        >
        <CustomText
          text={"CONTACT US"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: isDarkTheme ? "#FFFFFF" : '#B1B1B1',
            marginVertical: 15
          }}
          />
          </TouchableOpacity>

        <CustomView style={{ width: '30%', height: 1.5, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"Privacy Policy \nTerms & Conditions"}
          style={{
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            color: isDarkTheme ? "#FFFFFF" : '#000000',
            marginTop: 135
          }}
        />

      </CustomView>
    )
  }

  const renderUserProfile = () => {

    return (
      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <CustomView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

          <Image
            source={Temp}
            resizeMode='cover'
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              backgroundColor: '#FFA500',
              borderWidth: 2,
              borderColor: '#FFA500',
              marginVertical: 20
            }}
          />

        </CustomView>

        <CustomText
          text={"ALEX MITCHEL"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#0066FF',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"EDIT INFO"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#848484',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"RESTORE PURCHASES"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#848484',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"CONTACT US"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#848484',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"DELETE ACCOUNT"}
          style={{
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#EA1F1F',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"Privacy Policy \nTerms & Conditions"}
          style={{
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            color: '#989898',
            marginTop: 70
          }}
        />
      </CustomView>
    )
  }

  //---------- main return

  return (
    <Frame>

      <CustomView
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >

        <TouchableOpacity
          onPress={() => {
            navigation.navigate.goBack()
          }}
        >

          {
            isDarkTheme ?
              <ArrowIcon fill={"#000"} stroke={"#fff"} />
              :
              <ArrowIcon fill={"#fff"} stroke={"#000"} />
          }
        </TouchableOpacity>

        {
          renderGustProfile()
          // renderUserProfile
        }


      </CustomView>
    </Frame>
  );
};

//---------- export

export default PatronProfile;

//---------- constants
