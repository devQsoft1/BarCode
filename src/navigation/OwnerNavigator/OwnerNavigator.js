//---------- imports

// react
import * as React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

// navigations
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
// import HomeIcon from "../../Assets/Icons/HomeIcon";
// import SearchIcon from "../../Assets/Icons/SearchIcon";
import UserIcon from "../../Assets/Icons/UserIcon";
import MenuIcon from "../../Assets/Icons/MenuIcon";
import SaveIcon from "../../Assets/Icons/SaveIcon";
import {
  Bookmark,
  BookmarkBlue,
  BookmarkGray,
  Home,
  HomeBlue,
  HomeGray,
  Menu,
  MenuBlue,
  MenuGray,
  Search,
  SearchBlue,
  SearchGray,
  User,
  UserBlue,
  UserGray,

} from '../../constants/Images'

// components
import FavoriteScreen from "../../Components/FavoriteScreen";
import UserScreen from "../../Components/Patron/Home/PatronProfile";
import MenuScreen from "../../Components/MenuScreen";
import HomeScreen from "../../Components/HomeScreen";
import BarDetail from "../../Components/CommonPatronAndOwner/BarDetail";

// drawer contents
import DrawerContent from "../../Common/DrawerContent";

// context
import ContextHelper from '../../ContextHooks/ContextHelper';

// global stack veriable
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//---------- main app / component

function AdminNavigator(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"BarDetail"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="BarDetail"
        component={BarDetail}
      />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AdminTabNavigation() {

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


  //---------- return main view of drawer

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: isDarkTheme ? '#1F1F1F' : "#fff", height: 78 },
        tabBarIcon: ({ focused, color, size }) => {

          let Icon
          if (route.name === 'BarDetail') {

            Icon = <Image
              source={focused ? HomeBlue : isDarkTheme ? Home : HomeGray}
              resizeMode='contain'
            />
            // Icon = <HomeIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'UserScreen') {

            Icon = <Image
              source={focused ? UserBlue : isDarkTheme ? User : UserGray}
              resizeMode='contain'
            />
            // Icon = <UserIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'MenuScreen') {

            Icon = <Image
              source={focused ? MenuBlue : isDarkTheme ? Menu : MenuGray}
              resizeMode='contain'
            />
            // Icon = <MenuIcon fill={focused ? '#42AEEC' : '#000'} />
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
        name="BarDetail"
        component={HomeNavigation}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="UserScreen"
        component={UserScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="MenuScreen"
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
      initialRouteName={"BarDetail"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="BarDetail"
        component={BarDetail}
      />

    </Stack.Navigator>
  );
}


//---------- export component

export default AdminTabNavigation;
