// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from "react-native";

// third party lib
import Swiper from 'react-native-swiper'

// common
import TopContainer from "../../../Common/TopContainer";
import CustomView from "../../../Common/CustomView";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import CustomBorderButton from "../../../Common/CustomBorderButton";
import CustomTextInput from "../../../Common/CustomTextInput";
import CustomButton from "../../../Common/CustomButton";
import CustomCheckBox from "../../../Common/CustomCheckBox";
import CoustomPagination from "../../../Common/CoustomPagination";
import ContextHelper from '../../../ContextHooks/ContextHelper'

// images and icon
import { authBg, rightYellow } from "../../../constants/Images";
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";
import BorderAddIcon from "../../../Assets/Icons/BorderAddIcon";
import GallaryIconGray from "../../../Assets/Icons/GallaryIconGray";
import AddIconGray from "../../../Assets/Icons/AddIconGray";

// constants
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

//---------- main component

const BusinessDetailScreen = ({ navigation }) => {

  //---------- state, veriable, context and ref

  const [count, setCount] = useState(1)
  let scroll_ref = useRef()

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

  //---------- helper user's action

  const handlePagination = (key) => {

    if (count === 6) {

      navigation.navigate('OwnerNavigator')
    } else {

      setCount(count + 1)
      let scroll = windowWidth * count

      scroll_ref?.current?.scrollTo && scroll_ref?.current?.scrollTo(({ x: scroll, y: 0, animated: true }))
    }
  }

  //---------- render helper's

  const renderBusinessDetailSecton = () => {

    return (
      <>

        <TopContainer
          text1={"FILL IN YOUR BUSINESS DETAILS"}
          // text2={"UPLOAD A PROFILE PICTURE"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>
            <CustomTextInput
              marginTop={20}
              placeholder={"Name"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Address"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Phone"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Website"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"EIN Number"}
            />
          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderBusinessDescSecton = () => {

    return (
      <>
        <TopContainer
          textAlign={'center'}
          text1={"DISCRIBE YOUR BUSINESS"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>

            <CustomTextInput
              marginTop={20}
              placeholder={"What kind of establishment are you?"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"This is your time to shine, tell your new customers about yourself. Give a great description for customers"}
              numberOfLines={6}
              paddingHorizontal={30}
              paddingVertical={30}
            />

          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderBusinessOfferSecton = () => {

    return (
      <>

        <TopContainer
          textAlign={'center'}
          text1={"WHAT DOES YOUR BUSINESS OFFER?"}
          // text2={"UPLOAD A PROFILE PICTURE"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            {

              data.map((item, index) => {

                return renderContent({
                  item, index
                })
              })
            }
          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderUploadBusinessPhoto = () => {

    return (
      <>

        <TopContainer
          text1={"UPLOAD YOUR MENU"}
          // text2={"UPLOAD A PROFILE PICTURE"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView
            style={{
              paddingHorizontal: 20,
              // alignItems:'space-between'
            }}
          >

            <CustomView
              style={{
                borderWidth: 1,
                borderColor: '#CDCDCD',
                height: 100,
                width: 150,
                alignSelf: 'center',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',

              }}
            >
              <GallaryIconGray />

            </CustomView>

            <CustomView
              style={{
                flex: 1,
                justifyContent: 'space-between',

              }}
            >

              <CustomView
                style={{
                  marginTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    alert('in process....')
                  }}
                >
                  <GallaryIcon />
                  <CustomText
                    style={{
                      color: '#747474'
                    }}
                    text={'Gallery'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    alert('in process....')
                  }}
                >
                  <CameraIcon />
                  <CustomText
                    style={{
                      color: '#747474'
                    }}
                    text={'Camera'}
                  />
                </TouchableOpacity>

              </CustomView>


            </CustomView>

            <CustomText
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#B1B1B1',
                textAlign: "center",
                marginTop: 50,
              }}
              text="REMAINDER! AN IMAGE IS REQUIRED
            TO SUCCESSFULLY COMPLETE THE SIGN UP
            PROCESS!"
            />

          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderUploadGalleryPhoto = () => {
    return (
      <>
        <TopContainer
          text1={"UPLOAD GALLERY PHOTO’S"}
          // text2={"UPLOAD A PROFILE PICTURE"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView
            style={{
              // flex: 1,
            }}
          >
            <ScrollView
              horizontal={true}
            >
              <CustomView
                style={{
                  borderWidth: 1,
                  borderColor: '#CDCDCD',
                  height: 93,
                  width: 143,
                  alignSelf: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10
                }}
              >
                <AddIconGray />
              </CustomView>

              <CustomView
                style={{
                  borderWidth: 1,
                  borderColor: '#CDCDCD',
                  height: 93,
                  width: 143,
                  alignSelf: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10
                }}
              >
                <GallaryIconGray />
              </CustomView>

              <CustomView
                style={{
                  borderWidth: 1,
                  borderColor: '#CDCDCD',
                  height: 93,
                  width: 143,
                  alignSelf: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <GallaryIconGray />
              </CustomView>

            </ScrollView>

            <CustomView
              style={{
                flex: 1,
                justifyContent: 'space-between',

              }}
            >

              <CustomView
                style={{
                  flex: 1,
                  justifyContent: 'space-between',

                }}
              >

                <CustomView
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      alert('in process....')
                    }}
                  >
                    <GallaryIcon />
                    <CustomText
                      style={{
                        color: '#747474'
                      }}
                      text={'Gallery'}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      alert('in process....')
                    }}
                  >
                    <CameraIcon />
                    <CustomText
                      style={{
                        color: '#747474'
                      }}
                      text={'Camera'}
                    />
                  </TouchableOpacity>

                </CustomView>


              </CustomView>

              <CustomView>

                <CustomText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#B1B1B1',
                    textAlign: "center",
                    marginTop: 50,
                  }}
                  text="PLEASE UPLOAD UPTO 10 PHOTOS TO SHOW OFF
            YOUR RESTAURANT"
                />
                <CustomText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#B1B1B1',
                    textAlign: "center",
                    marginTop: 20,
                  }}
                  text="INCLUDE PICTURES OF FOOD AND ANY SPECIALITY
          YOU MAY OFFER TO GUEST!"
                />
              </CustomView>
            </CustomView>


          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderGoingOnDetailsSection = () => {
    return (
      <>
        <TopContainer
          text1={"WHAT’S GOING ON?"}
          // text2={"UPLOAD A PROFILE PICTURE"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>

            <CustomTextInput
              placeholder={"EVENT TITLE"}
              borderRadius={30}
              borderColor={"#CDCDCD"}
              placeholderTextColor={"#B1B1B1"}

            />
            <CustomTextInput
              marginTop={20}
              placeholder={"DESCRIBE YOUR EVENT"}
              numberOfLines={6}
              paddingHorizontal={20}
              paddingVertical={20}
              borderRadius={20}
              borderColor={"#CDCDCD"}
              placeholderTextColor={"#B1B1B1"}

            />
            <CustomTextInput
              marginTop={20}
              placeholder={"BARCODE MEMBER ELIGABLE DRINKS"}
              numberOfLines={6}
              paddingHorizontal={20}
              paddingVertical={20}
              borderRadius={20}
              borderColor={"#CDCDCD"}
              placeholderTextColor={"#B1B1B1"}

            />
            <CustomTextInput
              marginTop={20}
              placeholder={"START DATE"}
              borderRadius={30}
              borderColor={"#CDCDCD"}
              placeholderTextColor={"#B1B1B1"}

            />
            <CustomTextInput
              marginTop={20}
              placeholder={"END DATE"}
              borderRadius={30}
              borderColor={"#CDCDCD"}
              placeholderTextColor={"#B1B1B1"}

            />

            <CustomView
              style={{
                width: '50%',
                marginVertical: 30
              }}
            >
              <CustomCheckBox
                rightText={'RECURRING SPECIAL'}
                isChecked={false}
              />
            </CustomView>

            <CustomView
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              {
                on_going_data.map((item, index) => {
                  return (
                    <CustomView
                      style={{
                        width: '50%',
                        marginTop: 10,
                      }}
                    >
                      <CustomCheckBox
                        rightText={item?.title}
                        isChecked={false}
                      />
                    </CustomView>

                  )
                })}
            </CustomView>

            <CustomView
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 40,
                alignItems: 'center'
              }}
            >
              <BorderAddIcon />

              <CustomText
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#B1B1B1',
                  textAlign: "center",
                  marginLeft: 10
                }}
                text={'ANOTHER EVENT'}
              />
            </CustomView>
          </CustomView>
        </CustomView>
      </>
    )
  }

  const renderContent = ({ item, index }) => {

    if (item.isCheckbox) {

      return (
        <CustomView
          style={{
            width: '50%',
            marginTop: 10,
          }}
        >

          <CustomCheckBox
            rightText={item?.title}
            isChecked={false}
          />

        </CustomView>
      )

    } else {

      return (

        <CustomView
          style={{
            width: '50%',
            paddingHorizontal: 10,
            marginTop: 10

          }}
        >
          <CustomButton
            fontSize={14}
            title={item?.title}
          />
        </CustomView>
      )
    }
  }


  //---------- main return

  return (
    <Frame>

      <CustomView
        style={{
          flex: 1,
          paddingBottom: 50,
          minHeight: windowHeight + 30,
        }}
      >

        <CustomView
          style={{
            justifyContent: 'space-between',
          }}
        >
          <ScrollView
            ref={scroll_ref}
            horizontal={true}
            scrollEnabled={false}
          >

            <CustomView
              style={{
                width: windowWidth
              }}
            >
              {

                count === 1
                  ?
                  renderBusinessDetailSecton()
                  :
                  count === 2
                    ?
                    renderBusinessDescSecton()
                    :
                    count === 3
                      ?
                      renderBusinessOfferSecton()
                      :
                      count === 4
                        ?
                        renderUploadBusinessPhoto()
                        :
                        count === 5
                          ?
                          renderUploadGalleryPhoto()
                          :
                          count === 6
                            ?
                            renderGoingOnDetailsSection()
                            :
                            null

              }

            </CustomView>

          </ScrollView>

          <CustomView
            style={{
              paddingHorizontal: 20,
              marginTop: 20
            }}
          >
            <CoustomPagination
              dataLength={6}
              onPress={handlePagination}
            />
          </CustomView>
        </CustomView>

      </CustomView>

    </Frame >
  );
};

//---------- export component

export default BusinessDetailScreen;

//---------- constants

const data = [

  {
    id: 1,
    title: 'Free Parking',
    isCheckbox: true
  },
  {
    id: 2,
    title: 'Outdoor Seating',
    isCheckbox: true
  },
  {
    id: 3,
    title: 'Live Music',
    isCheckbox: true
  },
  {
    id: 4,
    title: 'Vegetarian',
    isCheckbox: true
  },
  {
    id: 5,
    title: 'Hookah',
    isCheckbox: true
  },
  {
    id: 6,
    title: 'Kid Friendly',
    isCheckbox: true
  },
  {
    id: 7,
    title: 'Smoking',
    isCheckbox: true
  },
  {
    id: 8,
    title: 'Brunch',
    isCheckbox: true
  },
  {
    id: 9,
    title: 'Dancing',
    isCheckbox: true
  },
  {
    id: 10,
    title: 'Happy Hour',
    isCheckbox: true
  },
  {
    id: 11,
    title: 'Pet Friendly',
    isCheckbox: true
  },
  {
    id: 12,
    title: 'Tiki Bar',
    isCheckbox: true
  },
  {
    id: 13,
    title: 'DJ',
    isCheckbox: true
  },
  {
    id: 14,
    title: 'Craft Beer',
    isCheckbox: true
  },
  {
    id: 15,
    title: 'Rooftop',
    isCheckbox: true
  },
  {
    id: 16,
    title: 'Free Wifi',
    isCheckbox: true
  },
  {
    id: 17,
    title: 'Brick Oven',
    isCheckbox: true
  },
  {
    id: 18,
    title: 'Lo-cal Cocktails',
    isCheckbox: true
  },
  {
    id: 19,
    title: 'Tapas',
    isCheckbox: true
  },
  {
    id: 20,
    title: 'Craft Cocktails',
    isCheckbox: true
  },
  {
    id: 21,
    title: 'Valet Parking',
    isCheckbox: true
  },
  {
    id: 22,
    title: 'Wheelchair',
    isCheckbox: true
  },
  {
    id: 23,
    title: 'Divey',
    isCheckbox: true
  },
  {
    id: 24,
    title: 'CUSTOM AMENITY',
    isCheckbox: false
  },

]

const on_going_data = [

  {
    id: 2,
    title: 'MONDAY',
    isCheckbox: true
  },
  {
    id: 3,
    title: 'SATURDAY',
    isCheckbox: true
  },
  {
    id: 4,
    title: 'TUESDAY',
    isCheckbox: true
  },
  {
    id: 5,
    title: 'SUNDAY',
    isCheckbox: true
  },
  {
    id: 6,
    title: 'WEDNESDAY',
    isCheckbox: true
  },
  {
    id: 7,
    title: 'THURSDAY',
    isCheckbox: true
  },
  {
    id: 8,
    title: 'FRIDAY',
    isCheckbox: true
  },

]