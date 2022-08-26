// react
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

// common componets
import CustomText from "../Common/CustomText";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";


// styles
import { backIcon, drawerIcon } from "../constants/Images";
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";

//---------- main component

const MenuScreen = ({ navigation }) => {

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

  //---------- return

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomText
          text={"MenuScreen"}
          style={[TextStyles.textBold24Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
        />

        <CustomText
          text={"MenuScreen OF LIABILITY AND WARNING"}
          style={[{ alignSelf: "center", fontStyle: 'italic' }, TextStyles.textQuicksandBold14Black, SpaceStyles.bottom5]}
        />

        <View
          style={[AuthStyles.ContentContainer, SpaceStyles.top20, { paddingHorizontal: 10 }]}
        >


        </View>

      </ScrollView>
    </View>
  );
};

//---------- export component

export default MenuScreen;

//---------- css

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 20
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});
