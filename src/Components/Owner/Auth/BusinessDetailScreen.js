// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// common
import TopContainer from "../../../Common/TopContainer";
import TextStyles from "../../../style/TextStyles";
import CustomView from "../../../Common/CustomView";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomBorderButton from "../../../Common/CustomBorderButton";

// images and icon
import { authBg, rightYellow } from "../../../constants/Images";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const BusinessDetailScreen = ({ navigation }) => {

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







        </CustomView>
      </CustomView>

    </Frame>
  );
};

//---------- export component

export default BusinessDetailScreen;
