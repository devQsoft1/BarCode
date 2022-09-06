// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// common
import TopContainer from "../../../Common/TopContainer";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";

// images and icon
import { rightYellow } from "../../../constants/Images";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const ProfileImageAuth = ({ navigation }) => {

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
          height: windowHeight,
        }}
      >

        <TopContainer
          text1={"LET’S SEE THAT SMILE!"}
          text2={"UPLOAD A PROFILE PICTURE"}
          lineHeightText2={22.5}
          isDarkTheme={isDarkTheme}
        />


        <CustomView
          style={{
            flex: 1,
            paddingTop: 30,
            paddingHorizontal: 20,
            // alignItems:'space-between'
          }}
        >

          <CustomView
            style={{
              borderWidth: 1,
              borderColor: isDarkTheme? "#FFFFFF": '#747474',
              height: 150,
              width: 150,
              alignSelf: 'center',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CustomView
              style={{
                borderWidth: 1,
                borderColor: isDarkTheme? "#FFFFFF": '#747474',
                height: 140,
                width: 140,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <UserIconSmall height={60} width={60}/>

            </CustomView>

          </CustomView>

          <CustomView
            style={{
              flex: 1,
              justifyContent: 'space-between',

            }}
          >

            <CustomView
              style={{
                marginTop: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: 'center'
                }}
                onPress={() => {
                  alert('in process....')
                }}
              >
                <GallaryIcon />
                <CustomText
                  style={{
                    color: isDarkTheme?"#FFFFFF":'#A6A6A6',
                    fontSize: 18,
                    fontWeight: '400'
                  }}
                  text={'Gallery'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center'
                }}
                onPress={() => {
                  alert('in process....')
                }}
              >
                <CameraIcon />
                <CustomText
                  style={{
                    color: isDarkTheme?"#FFFFFF":'#A6A6A6',
                    fontSize: 18,
                    fontWeight: '400'                  }}
                  text={'Camera'}
                />
              </TouchableOpacity>
            </CustomView>


            <CustomView
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRigth: 10,
                // marginTop: 100,
                paddingVertical: 20,
                backgroundColor: isDarkTheme ? '#000000' : '#FFFFFF'
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AuthFreeTrial')
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


        </CustomView>
      </CustomView>

    </Frame>
  );
};

//---------- export component

export default ProfileImageAuth;
