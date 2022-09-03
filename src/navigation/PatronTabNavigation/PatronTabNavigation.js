//---------- imports

// react
import * as React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

// navigations
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import HomeIcon from "../../Assets/Icons/HomeIcon";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import UserIcon from "../../Assets/Icons/UserIcon";
import MenuIcon from "../../Assets/Icons/MenuIcon";
import SaveIcon from "../../Assets/Icons/SaveIcon";

// components
import MenuScreen from "../../Components/MenuScreen";
import PatronProfile from "../../Components/Patron/Home/PatronProfile";
import PatronHome from "../../Components/Patron/Home/PatronHome";
import PatronFavorites from "../../Components/Patron/Home/PatronFavorites";
import PatronSearch from "../../Components/Patron/Home/PatronSearch";
import BarDetail from "../../Components/CommonPatronAndOwner/BarDetail";
import RestorePurchases from "../../Components/CommonPatronAndOwner/RestorePurchases";
import ContactUs from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/ContactUs";


// drawer contents
import DrawerContent from "../../Common/DrawerContent";
import BottomModalContainer from "../../Common/BottomModalContainer";
import AuthLogin from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/AuthLogin";

// context
// import ContextHelper from '../../ContextHooks/ContextHelper'

// const {
//   isDarkTheme,
//   theme,
//   appStateObject,
//   appStateArray,
//   currentUser,

//   changeTheme,
//   storeDataInAppState,
//   removeDataFromAppState,
//   storeDataInAsyncStorage,
//   getDataFromAsyncStorage,
//   setCurrentUser,
// } = ContextHelper()

// global stack veriable
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//---------- main app / component

const Tab = createBottomTabNavigator();

function PatronTabNavigation() {

  //---------- return main view of drawer

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let Icon
          if (route.name === 'PatronHome') {

            Icon = <HomeIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'PatronSearch') {

            Icon = <SearchIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'PatronFavorites') {

            Icon = <SaveIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'PatronProfile') {

            Icon = <UserIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'MenuScreen') {

            Icon = <MenuIcon fill={focused ? '#42AEEC' : '#000'} />
          }

          // You can return any component that you like here!
          return <View>
            {
              Icon
            }
          </View>

        },
        tabBarLabel: () => { return null },

      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="PatronHome"
        component={HomeNavigation}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="PatronSearch"
        component={SearchNavigation}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="PatronFavorites"
        component={FavoritesNavigation}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="PatronProfile"
        component={UserNavigation}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="MenuScreen"
        listeners={({ navigation }) => ({

          tabPress: event => {
            event.preventDefault();
            navigation.navigate('BottomModalContainer');
          }
        })}
        component={MenuScreen}
      />

    </Tab.Navigator>
  );
}

//---------- navigations

function HomeNavigation(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"PatronHome"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronHome"
        component={PatronHome}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="BarDetail"
        component={BarDetail}
      />

      <Stack.Screen
        options={{
          headerShown: false, animationEnabled: true, cardStyle: { backgroundColor: "transparent" }, mode: 'modal'
        }}
        name="BottomModalContainer"
        component={BottomModalContainer}
      />

    </Stack.Navigator>
  );
}

function SearchNavigation(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"PatronSearch"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronSearch"
        component={PatronSearch}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="BarDetail"
        component={BarDetail}
      />

    </Stack.Navigator>
  );
}

function FavoritesNavigation(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"PatronFavorites"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronFavorites"
        component={PatronFavorites}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="BarDetail"
        component={BarDetail}
      />

    </Stack.Navigator>
  );
}


function UserNavigation(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"PatronProfile"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="PatronProfile"
        component={PatronProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="AuthLogin" component={AuthLogin} />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="RestorePurchases" component={RestorePurchases} />

        
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );

}

//---------- export component

export default PatronTabNavigation;
