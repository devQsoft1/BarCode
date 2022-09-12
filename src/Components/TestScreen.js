// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

// common componets
import CustomText from "../Common/CustomText";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "../Common/CustomView";
import CustomTextInput from "../Common/CustomTextInput";

// import { backIcon, drawerIcon } from "../constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";
import Frame from "../Common/Frame";

// icon
import UserIconSmall from "../assets/Icons/UserIconSmall";
import ModalContainer from '../Common/ModalContainer';
import ClainDrinkTile from "../Common/Tile/ClainDrinkTile";
import DrinkDetailTile from "../Common/Tile/DrinkDetailTile";


//---------- main component

const TestScreen = ({ navigation }) => {

  //---------- state, veriable, context and hooks

  const [isVisible, setIsVisible] = useState(false);

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


  //---------- life cycles

  useEffect(() => {

  }, [])

  //---------- main return

  return (
    <Frame>



      <CustomView>
        <CustomText
          text={"TestScreen"}
          style={{
            color: isDarkTheme ? '#fff' : 'gray'
          }}
        />
      </CustomView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PatronHome')
        }}
      >
        <CustomText
          text={"change theme"}
        />
      </TouchableOpacity>


      <CustomView
        style={{
          flexDirection: 'row', justifyContent: 'center', backgroundColor: isDarkTheme ? 'red' : 'green', alignSelf: 'center', padding: 10
        }}
      >

        <TouchableOpacity
          onPress={() => {
            changeTheme()
          }}
        >
          <CustomText
            text={"change theme"}
          />
        </TouchableOpacity>

      </CustomView>


      <CustomTextInput
        placeholder={'test'}
        numberOfLines={3}
        // textAlignVertical={'top'}
        icon={<UserIconSmall height={20} width={20} />}
      />


      <CustomTextInput
        placeholder={'test'}
        numberOfLines={5}
        // textAlignVertical={'top'}
        multiline={true}
        icon={<UserIconSmall height={20} width={20} />}
      />



      <CustomTextInput
        placeholder={'test'}
      />


      <CustomTextInput
        placeholder={'test'}
        multiline={true}
      />

      <ModalContainer
        isVisible={isVisible}
        render_view_key={'affirmations'}
        content={{ title: 'item.affirmations_song', right_content: 'right', left_content: 'left' }}
        hideModal={() => setIsVisible(!isVisible)}
      />


      <CustomView
        style={{
          flexDirection: 'row', justifyContent: 'center', backgroundColor: isDarkTheme ? 'red' : 'green', alignSelf: 'center', padding: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true)
          }}
        >
          <CustomText
            text={"show modsl"}
          />
        </TouchableOpacity>
      </CustomView>

      <View style={{
        flex: 5
      }}>
        <ClainDrinkTile />
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1
        }}
      >
        <DrinkDetailTile />
      </View>


    </Frame >
  );
};

//---------- export component

export default TestScreen;



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
//     headerTitle: () => <HeaderTitle title={"HomeScreen"} />,
//     headerLeft: () => (
//       <HeaderLeft
//         text={""}
//         iconName={backIcon}
//         onPress={() => navigation.goBack()}
//       />
//     ),
//   });
// }, [navigation]);
