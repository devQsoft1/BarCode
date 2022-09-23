// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// common
import TopContainer from "../../../Common/TopContainer";
import TextStyles from "../../../style/TextStyles";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import ContextHelper from '../../../ContextHooks/ContextHelper'
import CustomView from "../../../Common/CustomView";
import CustomBorderButton from "../../../Common/CustomBorderButton";

// images and icon
import { rightYellow } from "../../../constants/Images";
// import UserIconSmall from "../../../assets/Icons/UserIconSmall";
import GallaryIcon from "../../../assets/Icons/GallaryIcon";
import CameraIcon from "../../../assets/Icons/CameraIcon";
import UnlockYellowIcon from "../../../assets/Icons/UnlockYellowIcon";
import RightYellowIcon from "../../../assets/Icons/RightYellowIcon";
import BellYellowIcon from "../../../assets/Icons/BellYellowIcon";
import BottomModalContainer from "../../../Common/BottomModalContainer";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const AuthFreeTrial = ({ navigation }) => {

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

  const renderYelloCircle = (icon) => {

    return (
      <CustomView
        style={{
          borderWidth: 5,
          backgroundColor: isDarkTheme ? '#000' : '#fff',
          borderColor: '#FFA500',
          height: 60,
          width: 60,
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {
          icon
        }
      </CustomView>
    )
  }

  const renderModal = () => {

    return (
      <BottomModalContainer
        navigation={navigation}
        render_view_key={'lets_drink'}
        isVisible={isVisible}
        hideModal={() => setIsVisible(!isVisible)}
        paddingBottom={25}
      />
    )
  }

  return (
    <Frame>

      <CustomView
        style={{
          flex: 1,
          paddingBottom: isVisible ? 500 : 50
        }}
      >

        <TopContainer
          text1={`Start Your FREE TRIAL now!`}
          isDarkTheme={isDarkTheme}
        />

        <CustomView
          style={{
            paddingTop: 20,
            paddingHorizontal: 20
          }}
        >

          <CustomView
            style={{
              marginHorizontal: 30
            }}
          >
            <CustomText
              text={'You will recieve a FREE DRINK everyday during your free trial, as well as access to all premium features of BarCode members!'}
              style={{
                color: isDarkTheme?'#FFFFFF':"#747474",
                fontSize: 22,
                textAlign: 'center',
                fontWeight: '400',
              }}
            />

            <CustomText
              text={"WHAT’S GONNA HAPPEN?"}
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 23,
                fontWeight: '500',
                color: isDarkTheme ? '#FFFFFF' : '#A6A6A6',
              }}
            />

          </CustomView>

          <CustomView
            style={{
              flex: 1,
              // height:'100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 50
            }}
          >

            <CustomView
              style={{
                width: '30%',
                alignItems: 'center'
              }}
            >

              <CustomView
                style={{
                  height: '100%',
                  width: 5,
                  backgroundColor: '#FFA500',
                  paddingBottom: 50
                }}
              />

              <CustomView
                style={{
                  position: 'absolute',
                  top: 20
                }}
              >
                {
                  renderYelloCircle(<UnlockYellowIcon />)
                }
              </CustomView>

              <CustomView
                style={{
                  position: 'absolute',
                  top: 150
                }}
              >
                {
                  renderYelloCircle(<BellYellowIcon />)
                }
              </CustomView>

              <CustomView
                style={{
                  position: 'absolute',
                  top: 300
                }}
              >
                {
                  renderYelloCircle(<RightYellowIcon />)
                }
              </CustomView>

            </CustomView>

            <CustomView
              style={{
                width: '100%'
              }}
            >
              <CustomText
                text={"TODAY"}
                style={{
                  marginTop: 20,
                  fontSize: 28,
                  fontWeight: '400',
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"Get your first FREE drink!"}
                style={{
                  fontSize: 19,
                   color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"IN 7 DAYS"}
                style={{
                  marginTop: 60,
                  fontSize: 28,
                  fontWeight: '400',
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"Get a reminder of "}
                style={{
                  fontSize: 19,
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"when your trail ends "}
                style={{

                  fontSize: 19,
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"IN 14 DAYS"}
                style={{
                  marginTop: 60,
                  fontSize: 28,
                  fontWeight: '400',
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"Get billed, unless you cancel "}
                style={{
                  fontSize: 19,
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />

              <CustomText
                text={"anytime before."}
                style={{
                  fontSize: 19,
                  color: isDarkTheme ? '#FFF' : '#747474',
                }}
              />


            </CustomView>

          </CustomView>

          <CustomView
            style={{
              marginTop: 30,
              borderWidth: 1,
              borderColor: isDarkTheme ? '#FFF' : '#000',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >

            <CustomText
              text={"ALREADY SUBSCRIBED?"}
              style={{
                textAlign: 'center',
                fontSize: 13,
                fontWeight: '400',
                color: isDarkTheme ? '#FFF' : '#000000',
                marginLeft:20,
              }}
            />

            <TouchableOpacity
              onPress={() => {
                setIsVisible(true)
              }}
              style={{
                backgroundColor: '#FFA500',
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 30
              }}
            >
              <CustomText
                text={"RESTORE"}
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#FFF',
                }}
              />
            </TouchableOpacity>
          </CustomView>

        </CustomView>

      </CustomView>

      {
        renderModal()
      }

    </Frame>
  );
};

//---------- export component

export default AuthFreeTrial;
