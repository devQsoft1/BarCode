//---------- imports

// react
import React, { useEffect, useState } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import PatronAuthNavigation from "./AuthNavigator/PatronAuthNavigation";
import OwnerNavigator from "./OwnerNavigator/OwnerNavigator";
import PatronTabNavigation from "./PatronTabNavigation/PatronTabNavigation"

import SplashScreen from '../Common/SplashScreen';
import TestScreen from '../Components/TestScreen';
import RoleSelectionScreen from '../Components/RoleSelectionScreen';
import OwnerAuthNavigation from "./AuthNavigator/OwnerAuthNavigation";
import GoogleMaps from "../Components/Google_Maps/GoogleMaps";

import ContextHelper from '../ContextHooks/ContextHelper'

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {
  //---------- state, redux state, veriable and hooks
  const {
    loading,
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
  //---------- life cycle

  console.log("isDarkTheme>>////", isDarkTheme);
  useEffect(() => {

  }, []);

  useEffect(() => {

    props?.calll_back_for_loading(loading)
  }, [loading])

  //---------- return main view   

  return (
    <Stack.Navigator initialRouteName="SplashScreen">

      <Stack.Screen
        options={{ headerShown: false }}

        name="SplashScreen"
        component={SplashScreen} />

      <Stack.Screen
        options={{ headerShown: false }}

        name="RoleSelectionScreen"
        component={RoleSelectionScreen} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronAuthNavigator"
        component={PatronAuthNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="OwnerAuthNavigator"
        component={OwnerAuthNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronTabNavigation"
        component={PatronTabNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="OwnerNavigator"
        component={OwnerNavigator}
      />

    </Stack.Navigator>
  );
}

//---------- export component

export default StackNaviagtion;
