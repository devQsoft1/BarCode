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

const PatronHome = ({ navigation }) => {

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


  const [dataFavBarDetals, setDataFavBarDetals] = useState()
  //---------- life cycles

  useEffect(() => {
    setDataFavBarDetals(appStateObject?.show_bars_Poket?.response)
  }, [])

  //---------- render helper

  const renderItem = ({ item, index }) => {

    return (
      item?.fav_status &&

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BarDetail', { item: { ...item, bar_id: item?.userID } })
        }}
        style={{
          height: 225,
        }}
      >

        <ClainDrinkTile
          item={item}
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
          title={'FAVORITES'}
        />

        <FlatList
          ItemSeparatorComponent={() => {
            return (
              <CustomView style={{
                height: 1,
              }} />
            )
          }}
          ListFooterComponent={() => {
            return (
              <CustomView style={{ height: 125 }} />
            )
          }}
          style={{
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 100
          }}
          data={dataFavBarDetals}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </CustomView>

    </Frame>
  );
};

//---------- export component

export default PatronHome;


let data = [
  {},
  {},
  {},

]