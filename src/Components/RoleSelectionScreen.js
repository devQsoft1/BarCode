// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";

// common
import TopContainer from "../Common/TopContainer";
import TextStyles from "../style/TextStyles";
import CustomText from "../Common/CustomText";
import Frame from "../Common/Frame";
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "../Common/CustomView";
import CustomBorderButton from "../Common/CustomBorderButton";
import CustomCheckBox from "../Common/CustomCheckBox";


//---------- main component

const RoleSelectionScreen = ({ navigation }) => {

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

  }, [])

  //---------- main return

  return (
    <Frame
    // scrollEnabled={false}
    >

      <TopContainer
        text1={"HOW WOULD YOU LIKE \n TO JOIN?"}
        textAlign={"center"}
        // text2={"TO JOIN? "}
        isDarkTheme={isDarkTheme}
        lineHeight={22.5}
      />


      <CustomView
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 10,
          height: '100%',
        }}
      >

        <CustomBorderButton
          title={'PATRON'}
          color={"#FFA500"}
          fontSize={30}
          fontWeight={"500"}
          borderRadius={30}
          height={75}
          onPress={() => {

            setCurrentUser({
              user_type: 'patron'
            })
            navigation.navigate('PatronAuthNavigator')
          }}
        />



        {/* <CustomCheckBox
                rightTextColor={isDarkTheme ? "#fff" : "#B1B1B1"}
                rightText={'RECURRING SPECIAL'}
                isChecked={false}
                fontSize={20}
                fontWeight={"500"}
              /> */}



        <View style={{ height: 20 }} />

        <CustomBorderButton
          title={'BUSINESS OWNER'}
          color={"#42AEEC"}
          fontSize={30}
          fontWeight={"500"}
          borderRadius={30}
          lineHeight={40}
          // paddingTop={15}
          height={75}
          onPress={() => {

            setCurrentUser({
              user_type: 'business_owner'
            })
            navigation.navigate('OwnerAuthNavigator')
          }}
        />

        <View style={{ height: 50 }} />

        <CustomBorderButton
          title={'Only for testing theme'}
          color={"#42AEEC"}
          fontSize={24}
          borderRadius={30}
          fontWeight={"500"}
          onPress={() => {
            changeTheme()
          }}
        />


      </CustomView>

    </Frame>
  );
};

//---------- export component

export default RoleSelectionScreen;

