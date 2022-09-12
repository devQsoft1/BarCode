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
import UserIconSmall from "../../../assets/Icons/UserIconSmall";
import GallaryIcon from "../../../assets/Icons/GallaryIcon";
import CameraIcon from "../../../assets/Icons/CameraIcon";
import BorderAddIcon from "../../../assets/Icons/BorderAddIcon";
import GallaryIconGray from "../../../assets/Icons/GallaryIconGray";
import AddIconGray from "../../../assets/Icons/AddIconGray";

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

  //---------- helper user's action

  const handlePagination = (key) => {

    if (count === 7) {

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
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            // paddingTop: 5,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>
            <CustomTextInput
              marginTop={20}
              placeholder={"Name"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Address"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Phone"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"Website"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            {/* <CustomTextInput
              marginTop={20}
              placeholder={"EIN Number"}
            /> */}
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
          text1={"DESCRIBE YOUR BUSINESS"}
          isDarkTheme={isDarkTheme}
        />
        <CustomView
          style={{
            // paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>

            <CustomTextInput
              fontSize={18}
              marginTop={10}
              placeholder={"What kind of establishment are you?"}
              paddingVertical={3}
              height={65}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"This is your time to shine, tell your new customers about yourself. Give a great description for customers"}
              numberOfLines={4}
              fontSize={18}
              paddingHorizontal={30}
              height={260}
              backgroundColor={isDarkTheme?"#000":"#fff"}
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
          isDarkTheme={isDarkTheme}
          fontSize={20}
        />
        <CustomView
          style={{
            // paddingTop: 30,
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

  const renderUploadBusinessPhoto = (isMenu) => {

    return (
      <>

        <TopContainer
          text1={isMenu ? "UPLOAD YOUR MENU" : "UPLOAD YOUR BUSINESS PHOTO"}
          isDarkTheme={isDarkTheme}
          fontSize={21}
        />
        <CustomView
          style={{
            // paddingTop: 30,
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
                      color: isDarkTheme?"#fff":'#747474'
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
                      color: isDarkTheme?"#fff":'#747474'
                    }}
                    text={'Camera'}
                  />
                </TouchableOpacity>

              </CustomView>


            </CustomView>

            <CustomText
              style={{
                fontSize: 17,
                fontWeight: '500',
                color: isDarkTheme ? "#FFFFFF" : '#FF0000',
                textAlign: "center",
                marginTop: 30,
                lineHeight: 16
              }}
              text={isMenu ? "PLEASE UPLOAD A PDF IMAGE \n  OF YOUR MENU" : "REMAINDER! AN IMAGE IS REQUIRED TO SUCCESSFULLY COMPLETE THE SIGN UP PROCESS!"}
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
          isDarkTheme={isDarkTheme}
          fontSize={21}
        />
        <CustomView
          style={{
            // paddingTop: 30,
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
                    marginTop: 20
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
                        color: isDarkTheme?"#fff":'#747474'
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
                        color: isDarkTheme?"#fff":'#747474'
                      }}
                      text={'Camera'}
                    />
                  </TouchableOpacity>

                </CustomView>


              </CustomView>

              <CustomView>

                <CustomText
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                    color: isDarkTheme ? "#fff" : '#FF0000',
                    textAlign: "center",
                    marginTop: 35,
                    lineHeight: 16.94
                  }}
                  text={"PLEASE UPLOAD UPTO 10 PHOTOS \n  TO SHOW OFF YOUR RESTAURANT"}
                />
                <CustomText
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                    color: isDarkTheme ? "#fff" : '#FF0000',
                    textAlign: "center",
                    marginTop: 20,
                    lineHeight: 16.94
                  }}
                  text={"INCLUDE PICTURES OF FOOD AND \n ANY SPECIALITY YOU MAY \n OFFER TO GUEST!"}
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
          isDarkTheme={isDarkTheme}
          fontSize={23}
        />
        <CustomView
          style={{
            // paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <CustomView>

            <CustomTextInput
              placeholder={"EVENT TITLE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              fontSize={20}
              backgroundColor={isDarkTheme?"#000":"#fff"}

            />
            <CustomTextInput
              marginTop={20}
              placeholder={"DESCRIBE YOUR EVENT"}
              numberOfLines={6}
              paddingVertical={15}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={162}
              backgroundColor={isDarkTheme?"#000":"#fff"}
              fontSize={20}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"BARCODE MEMBER \n ELIGABLE DRINKS"}
              numberOfLines={6}
              paddingVertical={15}
              borderRadius={20}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={170}
              fontSize={20}
              backgroundColor={isDarkTheme?"#000":"#fff"}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"START DATE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
              fontSize={20}
            />
            <CustomTextInput
              marginTop={20}
              placeholder={"END DATE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              backgroundColor={isDarkTheme?"#000":"#fff"}
              fontSize={20}
            />

            <CustomView
              style={{
                // width: '50%',
                marginTop: 30
              }}
            >
              <CustomCheckBox
                rightTextColor={isDarkTheme ? "#fff" : "#B1B1B1"}
                rightText={'RECURRING SPECIAL'}
                isChecked={false}
                fontSize={20}
                fontWeight={"500"}
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
                        marginTop: 20,
                      }}
                    >
                      <CustomCheckBox
                        rightText={item?.title}
                        isChecked={false}
                        fontSize={20}
                        fontWeight={"500"}
                        rightTextColor={isDarkTheme ? "#fff" : "#B1B1B1"}
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
                  fontSize: 23,
                  fontWeight: '500',
                  color: isDarkTheme ? "#fff" : '#CECECE',
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
            rightTextColor={isDarkTheme?"#fff":"#A6A6A6"}
            fontSize={15}
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
                width: windowWidth,
                paddingBottom: 10
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
                          renderUploadBusinessPhoto(true)
                          :
                          count === 6
                            ?
                            renderUploadGalleryPhoto()
                            :
                            count === 7
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
              marginTop: 50,

            }}
          >
            <CoustomPagination
              activeScreenIndex={count}
              // isCenter={true}
              dataLength={7}
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