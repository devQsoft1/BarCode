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


// api constants
import { api_end_point_constants } from "../../../Utils/ApiConstants";

// images and icon
import CameraIcon from "../../../assets/Icons/CameraIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronHome = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  const [dataShowBarDetails, setDataShowBarDetals] = useState() // state in store data Show_bar

  const {
    isDarkTheme,
    theme,
    appStateObject,
    appStateArray,
    currentUser,

    setLoading,
    postData,
    changeTheme,
    storeDataInAppState,
    removeDataFromAppState,
    storeDataInAsyncStorage,
    getDataFromAsyncStorage,
    setCurrentUser,
  } = ContextHelper()


  //---------- life cycles

  // store data for state
  useEffect(() => {
    if (appStateObject?.show_bars_Poket?.response) {

      setDataShowBarDetals(appStateObject?.show_bars_Poket?.response)
      setLoading(false)
    }

  }, [appStateObject?.show_bars_Poket?.response])

  // console.log("dataShowBarDetails >>>>", dataShowBarDetails);
  useEffect(() => {

    postData({
      key: 'show_bars_Poket',
      end_point: api_end_point_constants.show_bars,
      data: {
        userID: currentUser?.userID,
      }
    })
  }, [])


  //---------- render helper

  const renderItem = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => {

          // @temp
          navigation.navigate('BarDetail', { item: { ...item, bar_id: item?.userID } })
        }}
        style={{
          height: 225
        }}
      >
        <ClainDrinkTile item={item} />
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
          isCenter={false}
          navigation={navigation}
          title={'WHAT’S HAPPENING TODAY?'}
          fontWeight={"700"}
        />

        {isDarkTheme && <CustomView style={{ borderBottomWidth: 1, borderBottomColor: "#9A9A9A", with: "50%" }}></CustomView>}
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
          data={dataShowBarDetails}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </CustomView>

    </Frame>
  );
};

//---------- export component

export default PatronHome;
