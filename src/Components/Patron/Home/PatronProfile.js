//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, FlatList, TouchableOpacity } from "react-native";

// common
import CustomView from "../../../Common/CustomView";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import BackIcon from "../../../Assets/Icons/BackIcon";
import BackIconBlack from "../../../Assets/Icons/BackIconBlack";
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
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            color: '#0066FF',
            marginVertical: 15
          }}
        />

        <CustomView style={{ width: '70%', height: 1, backgroundColor: '#C8C8C8', marginVertical: 10 }} />

        <CustomText
          text={"LOGIN"}
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
              <BackIcon />
              :
              <BackIconBlack />
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
