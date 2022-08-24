// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from "react-native";

// common
import CustomView from "../../../Common/CustomView";
import CustomText from "../../../Common/CustomText";
import Header from '../../CommonPatronAndOwner/Header'
import ContextHelper from '../../../ContextHooks/ContextHelper';
import Frame from "../../../Common/Frame";
import ClainDrinkTile from "../../../Common/Tile/ClainDrinkTile";

// images and icon
import CameraIcon from "../../../Assets/Icons/CameraIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronFavorites = ({ navigation }) => {

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

  //---------- render helper

  const renderItem = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PatronBarDetail')
        }}
        style={{
          height: 225
        }}
      >
        <ClainDrinkTile
        />
      </TouchableOpacity>
    )
  }

  //---------- main return

  return (
    <Frame
      scrollEnabled={false}
    >

      <CustomView
        style={{
          flex: 1,
          height: windowHeight,
        }}
      >
        <Header
          isCenter={true}
          navigation={navigation}
          title={'SEARCH RESULTS'}
        />

        <FlatList
          ItemSeparatorComponent={() => {
            return (
              <CustomView style={{ height: 20 }} />
            )
          }}
          ListFooterComponent={() => {
            return (
              <CustomView style={{ height: 100 }} />
            )
          }}
          style={{
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 100
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </CustomView>

    </Frame>
  );
};

//---------- export component

export default PatronFavorites;


let data = [
  {},
  {},
  {},

]