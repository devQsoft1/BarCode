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
import { authBg, rightYellow } from "../../../constants/Images";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";
import UnlockYellowIcon from "../../../Assets/Icons/UnlockYellowIcon";
import RightYellowIcon from "../../../Assets/Icons/RightYellowIcon";
import BellYellowIcon from "../../../Assets/Icons/BellYellowIcon";
import BottomModalContainer from "../../../Common/BottomModalContainer";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronFreeTrial = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  const [isVisible, setIsVisible] = useState(false);

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
          text1={"START YOUR FREE TRIAL NOW!"}
          isDarkTheme={isDarkTheme}
        />

        <CustomView
          style={{
            paddingTop: 30,
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
                color: '#747474',
                fontSize: 20,
                textAlign: 'center'
              }}
            />

            <CustomText
              text={"WHAT’S GONNA HAPPEN?"}
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                color: isDarkTheme ? '#FFF' : '#000',
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
                  fontSize: 24,
                  fontWeight: '700',
                  color: isDarkTheme ? '#FFF' : '#000',
                }}
              />

              <CustomText
                text={"Get your first FREE drink!"}
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: '#747474',
                }}
              />

              <CustomText
                text={"IN 7 DAYS"}
                style={{
                  marginTop: 60,
                  fontSize: 24,
                  fontWeight: '700',
                  color: isDarkTheme ? '#FFF' : '#000',
                }}
              />

              <CustomText
                text={"Get a reminder of "}
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: '#747474',
                }}
              />

              <CustomText
                text={"when your trail ends "}
                style={{

                  fontSize: 18,
                  color: '#747474',
                }}
              />

              <CustomText
                text={"IN 7 DAYS"}
                style={{
                  marginTop: 60,
                  fontSize: 24,
                  fontWeight: '700',
                  color: isDarkTheme ? '#FFF' : '#000',
                }}
              />

              <CustomText
                text={"Get billed, unless you cancel "}
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  color: '#747474',
                }}
              />

              <CustomText
                text={"anytime before."}
                style={{
                  fontSize: 18,
                  color: '#747474',
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
                fontSize: 16,
                fontWeight: '500',
                color: isDarkTheme ? '#FFF' : '#000',
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
                  fontSize: 14,
                  fontWeight: '600',
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

export default PatronFreeTrial;
