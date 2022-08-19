// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

// common componets
import CustomText from "../Common/CustomText";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";

import { backIcon, drawerIcon } from "../constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";
import Frame from "../Common/Frame";

import ContextHelper from '../ContextHooks/ContextHelper'

//---------- main component

const HomeScreen = ({ navigation }) => {

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

      <CustomText
        text={"HomeScreen"}
      />

      <TouchableOpacity

        style={{
          backgroundColor: 'green',
          width: '100%',
          height: 50
        }}
        onPress={() => {

          changeTheme()
        }}
      >
        <Text>

          change theme
        </Text>
      </TouchableOpacity>




      <TouchableOpacity

        style={{
          backgroundColor: 'green',
          width: '100%',
          height: 50
        }}
        onPress={() => {

          storeDataInAsyncStorage({
            key: 'current_user',
            value: {

              user_type: 'user'
            }
          })
        }}
      >
        <Text>

          store user
        </Text>
      </TouchableOpacity>




      <TouchableOpacity

        style={{
          backgroundColor: 'green',
          width: '100%',
          height: 50
        }}
        onPress={() => {

          storeDataInAsyncStorage({
            key: 'current_user',
            value: {
              user_type: 'admin'
            }
          })
        }}
      >
        <Text>

          store admin
        </Text>
      </TouchableOpacity>


    </Frame>
  );
};

//---------- export component

export default HomeScreen;



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
//     headerTitle: () => <HeaderTitle title={"HomeScreen"} />,
//     headerLeft: () => (
//       <HeaderLeft
//         text={""}
//         iconName={backIcon}
//         onPress={() => navigation.goBack()}
//       />
//     ),
//   });
// }, [navigation]);
