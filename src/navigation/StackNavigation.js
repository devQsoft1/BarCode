//---------- imports

// react
import React, { useEffect, useState } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import PatronAuthNavigation from "./AuthNavigator/PatronAuthNavigation";
import OwnerNavigator from "./OwnerNavigator/OwnerNavigator";
import UserTabNavigation from './UserTabNavigation/UserTabNavigation'

import SplashScreen from '../Common/SplashScreen';
import TestScreen from '../Components/TestScreen';
import RoleSelectionScreen from '../Components/RoleSelectionScreen';
import OwnerAuthNavigation from "./AuthNavigator/OwnerAuthNavigation";


// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {

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
        name="UserNavigator"
        component={UserTabNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="OwnerNavigator"
        component={OwnerNavigator}
      />


      {
        //   !isLoggedIn ? (
        //     <Stack.Screen
        //       options={{ headerShown: false }}
        //       name="Route"
        //       component={Route}
        //     />
        //   ) : (
        //     <Stack.Screen
        //       options={{ headerShown: false }}
        //       name="PatronAuthNavigator"
        //       component={AuthNavigation}
        //     />
        //   )
      }

    </Stack.Navigator>
  );
}

//---------- export component

export default StackNaviagtion;
