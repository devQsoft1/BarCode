// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Keyboard, TouchableWithoutFeedback } from "react-native";

// third party lib
import DatePicker from "react-native-date-picker";

// images and icon
import { rightYellow } from "../../../constants/Images";
import Logo from '../../../Assets/Icons/Logo';

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import CalenderIcon from "../../../Assets/Icons/CalenderIcon";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import EyeCrossIcon from "../../../Assets/Icons/EyeCrossIcon";
import CallIcon from '../../../Assets/Icons/CallIcon'
import MessageIcon from '../../../Assets/Icons/MessageIcon'
import RightYellowIcon from "../../../Assets/Icons/RightYellowIcon";

// common
import TopContainer from "../../../Common/TopContainer";
import CustomTextInput from "../../../Common/CustomTextInput";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import HeaderRight from "../../../Common/HeaderRight";
import HeaderTitle from "../../../Common/HeaderTitle";
import HeaderLeft from "../../../Common/HeaderLeft";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";

//---------- main component

const AuthSignup = ({ navigation }) => {
  const [data, setData] = useState({
    name: "",
    dob: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: ''
  })
  const [isError, setIsError] = useState(false)
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
  const [isPhoneLenght, setIsPhoneLenght] = useState(false)
  const [isVisible, setIsVisible] = useState(false)


  //---------- life cycles
  //---------- main return

  return (
    <Frame>

      <TopContainer
        text1={"WHO ARE YOU?"}
        isDarkTheme={isDarkTheme}
      />

      <CustomView
        style={{
          paddingHorizontal: 20,
        }}
      >
        <CustomTextInput
          onChangeText={(text) => {
            setIsError(false);
            setData({
              ...data,
              name: text,
            })
          }} fontSize={20}
          marginTop={20}
          placeholder={'Name'}
          rightIcon={<UserIconSmall />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />


        {/* <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <CustomTextInput
            onFocus={() => {
              // Keyboard.dismiss()
              setIsVisible(true)

            }}
            // onChangeText={(text) => {
            //   setIsError(false);
            //   setData({
            //     ...data,
            //     dob: text,
            //   })
            // }}
            fontSize={20}
            marginTop={20}
            placeholder={'Birthday'}
            rightIcon={<CalenderIcon />}
            placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
            backgroundColor={isDarkTheme ? "#000" : "#fff"}
          />
        </TouchableWithoutFeedback> */}

        <View style={styles.datePiker}
        >
          <CustomText
            style={{
              color: isDarkTheme ? '#fff' : "#C7C7C7",
              fontSize: 20,
              fontWeight: '400',
              paddingVertical: 10,

            }}
            text={'Birthday '}
          />

        </View>

        <DatePicker
          modal
          mode="date"
          open={isVisible}
          date={new Date()}
          onConfirm={(date) => {
            console.log("date*****", date)
            setIsVisible(false)
            // setDate(date)
          }}
          onCancel={() => {
            setIsVisible(false)
          }}
        />
        <CustomTextInput
          onChangeText={(text) => {
            if (text?.length > 10) {
              setIsPhoneLenght(true)
            } else {
              setIsPhoneLenght(false)
              setData({
                ...data,
                mobile: text,
              })
            }
            setIsError(false);
          }
          }
          fontSize={20}
          marginTop={20}
          placeholder={'Phone'}
          keyboardType={'numeric'}
          rightIcon={<CallIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />

        {isPhoneLenght &&
          <CustomView
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10
            }}>
            <CustomText
              style={{
                color: isDarkTheme ? "#FFFFFF" : 'red',
                fontSize: 16,
                fontWeight: '400',
              }}
              text={'Phone number must be at least 10 numbers '}
            />
          </CustomView>}
        <CustomTextInput
          onChangeText={(text) => {
            setIsError(false);
            setData({
              ...data,
              email: text,
            })
          }}
          fontSize={20}
          marginTop={20}
          placeholder={'Email'}
          rightIcon={<MessageIcon />}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />
        <CustomTextInput
          onChangeText={(text) => {
            setIsError(false);
            setData({
              ...data,
              password: text,
            })
          }} fontSize={20}
          marginTop={20}
          placeholder={'Password'}
          rightIcon={<EyeCrossIcon />}
          secureTextEntry={true}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
        />
        <CustomTextInput
          onChangeText={(text) => {
            setIsError(false);
            setData({
              ...data,
              confirm_password: text,
            })
          }
          }
          fontSize={20}
          marginTop={20}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          placeholderTextColor={isDarkTheme ? '#fff' : "#C7C7C7"}
          backgroundColor={isDarkTheme ? "#000" : "#fff"}
          rightIcon={<EyeCrossIcon />}
        />
        {isError &&
          <CustomView
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10
            }}>
            <CustomText
              style={{
                color: isDarkTheme ? "#FFFFFF" : 'red',
                fontSize: 16,
                fontWeight: '400',
              }}
              text={'All fields are required'}
            />
          </CustomView>
        }


        {/* <CustomBorderButton
          title={'Only for testing theme'}
          onPress={() => {
            changeTheme()
          }}
        /> */}

        <CustomView
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRigth: 10,
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: isDarkTheme ? '#000000' : '#FFFFFF'
          }}
        >
          <TouchableOpacity
          // onPress={() => {
          //   data.name && data.dob && data.email && data.password && data.confirm_password && data.confirm_password === data.password ?
          //     //  ---- navigate patrone signUp
          //     currentUser?.user_type === 'patron' ?
          //       navigation.navigate('ProfileImageAuth', {
          //         data: {
          //           name: data.name,
          //           dob: data.dob,
          //           email: data.email,
          //           mobile: data.mobile,
          //           password: data.password,
          //         }
          //       })
          //       //  ---- navigate Business signUp
          //       : navigation.navigate('BusinessDetailScreen', {
          //         data: {
          //           name: data.name,
          //           dob: data.dob,
          //           email: data.email,
          //           mobile: data.mobile,
          //           password: data.password,
          //         }
          //       })
          //     : setIsError(!isError)
          // }}
          >
            <Image
              style={{ marginRight: 10 }}
              source={rightYellow}
              resizeMode='cover'

            />
          </TouchableOpacity>
        </CustomView>
      </CustomView>

    </Frame >
  );
};

//---------- export component

export default AuthSignup;

const styles = StyleSheet.create({

  datePiker: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#707070",
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 30,
    flexDirection: 'row',
    borderColor: "#DBDBDB",
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  }

})