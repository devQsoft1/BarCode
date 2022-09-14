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


// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {
  console.log("StackNaviagtion >>>> props", props);
  //---------- state, redux state, veriable and hooks

  //---------- life cycle

  useEffect(() => {

  }, []);

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
