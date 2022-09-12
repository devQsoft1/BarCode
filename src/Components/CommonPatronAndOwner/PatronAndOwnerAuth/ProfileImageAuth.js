// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, } from "react-native";

// common
import TopContainer from "../../../Common/TopContainer";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";
import { handleLunchCamra, handleImagePicker } from "../../../Utils/Helper";

// images and icon
import { rightYellow } from "../../../constants/Images";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";

// api constants
import { api_end_point_constants } from "../../../Utils/ApiConstants";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const ProfileImageAuth = ({ navigation, route }) => {

  const { data } = route.params;

  console.log('data:', data)

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

  useEffect(() => {

    console.log('--------------------------')
    console.log('status', appStateObject)
    console.log('--------------------------')

  }, [appStateObject])




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
              borderColor: isDarkTheme ? "#FFFFFF" : '#747474',
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
                borderColor: isDarkTheme ? "#FFFFFF" : '#747474',
                height: 140,
                width: 140,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <UserIconSmall height={60} width={60} />

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
                  handleImagePicker()
                }}
              >
                <GallaryIcon />
                <CustomText
                  style={{
                    color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
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
                  handleLunchCamra()
                }}
              >
                <CameraIcon />
                <CustomText
                  style={{
                    color: isDarkTheme ? "#FFFFFF" : '#A6A6A6',
                    fontSize: 18,
                    fontWeight: '400'
                  }}
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
                  // postData({
                  //   key: 'signup_pocket',
                  //   end_point: api_end_point_constants.sign_up,
                  //   data: {
                  //     ...data,
                  //     role: 0,
                  //     profile_image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'

                  //   }
                  // })
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
