// react
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from "react-native";

// common componets
import CustomText from "../Common/CustomText";
import CustomView from "../Common/CustomView";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";
import ContextHelper from "../ContextHooks/ContextHelper";


// styles
import { backIcon, drawerIcon } from "../constants/Images";
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";



//---------- main component

const MenuScreen = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  const [FAQdata, setFAQdata] = useState()
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
  //     headerTitle: () => <HeaderTitle title={"MenuScreen"} />,
  //     headerLeft: () => (
  //       <HeaderLeft
  //         text={""}
  //         iconName={backIcon}
  //         onPress={() => navigation.goBack()}
  //       />
  //     ),
  //   });
  // }, [navigation]);


  //---------- render helper
  const renderFAQ = (item) => {
 if(item?.name==="FAQ"){
  navigation.navigate('FAQ')
 }else if(item?.name==="BUSINESS SIGN IN"){
  navigation.navigate('OwnerLogin')
 }else if(item?.name==="MANAGE SUBSCRIPTION"){
  navigation.navigate('AuthFreeTrial')
 }else{
  navigation.navigate('OwnerLogin')
 }


  }
  const renderFlatList = () => {
    return (
      <FlatList
        style={{
          paddingHorizontal: 50,
          marginVertical: 40
        }}
        data={data}
        renderItem={renderContent}
        keyExtractor={item => item.id}
      />

    )
  }
  const renderContent = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          renderFAQ(item)
        }}
        key={index}>
        <CustomText
          text={item?.name}
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: isDarkTheme ? '#fff' : '#000',
            marginVertical: 35,
          }}
        />
        {item.id !== 5 && <CustomView style={{ width: '90%', height: 1, backgroundColor: isDarkTheme ? "#fff" : '#000' }} />}
      </TouchableOpacity>
    )
  }
  //---------- return
  return (
    <CustomView
      style={{
        backgroundColor: isDarkTheme ? "#000" : "#fff",
        flex:1
      }}
    >
      {renderFlatList()}

    </CustomView>
  );
};

//---------- export component

export default MenuScreen;

//---------- css

const styles = StyleSheet.create({
  container: {
    height: '50%',
    backgroundColor: 'red',
    alignSelf: 'flex-end'
  },

});

let data = [
  {
    id: 1,
    name: "LOG OUT"
  },
  {
    id: 2,
    name: "BUSINESS SIGN IN"
  },
  {
    id: 3,
    name: "ADD  YOUR BUSINESS"
  },
  {
    id: 4,
    name: "FAQ"
  },
  {
    id: 5,
    name: "MANAGE SUBSCRIPTION"
  },

]
