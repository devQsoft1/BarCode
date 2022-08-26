// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";


// images and icon
import { authBg } from "../constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";

// common
import TopContainer from "../Common/TopContainer";
import TextStyles from "../style/TextStyles";
import CustomText from "../Common/CustomText";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";
import Frame from "../Common/Frame";
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "../Common/CustomView";
import CustomBorderButton from "../Common/CustomBorderButton";

//---------- main component

const RoleSelectionScreen = ({ navigation }) => {

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
        text1={"HOW WOULD YOU LIKE"}
        text2={"TO JOIN? "}
        isDarkTheme={isDarkTheme}
      />


      <CustomView
        style={{
          // flex: 2,
          paddingTop: 50,
          paddingHorizontal: 20
        }}
      >
        <CustomBorderButton
          title={'PATRON'}
          onPress={() => {

            setCurrentUser({
              user_type: 'patron'
            })
            navigation.navigate('PatronAuthNavigator')
          }}
        />

        <View style={{ height: 20 }} />

        <CustomBorderButton
          title={'BUSINESS OWNER'}
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
          onPress={() => {
            changeTheme()
          }}
        />

{/* 
        <CustomBorderButton
          title={'patrn Onboarding'}
          onPress={() => {
            navigation.navigate('')
          }}
        />

        <CustomBorderButton
          title={'owner onboarding'}
          onPress={() => {
            navigation.navigate('')

          }}
        /> */}
      </CustomView>





    </Frame>
  );
};

//---------- export component

export default RoleSelectionScreen;



// useLayoutEffect(() => {
//   navigation.setOptions({
//     headerRight: () => (
//       <HeaderRight
//         iconName1={""}
//         iconName2={""}
//         iconName3={drawerIcon}
//         onPress3={() => navigation.openDrawer()}
//       />
//     ),
//     headerTitle: () => <HeaderTitle title={"RoleSelectionScreen"} />,
//     headerLeft: () => (
//       <HeaderLeft
//         text={""}
//         iconName={backIcon}
//         onPress={() => navigation.goBack()}
//       />
//     ),
//   });
// }, [navigation]);
