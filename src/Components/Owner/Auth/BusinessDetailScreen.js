// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Alert } from "react-native";

// third party lib
import Swiper from 'react-native-swiper'
import { showMessage, hideMessage } from "react-native-flash-message";


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

// api constants
import { api_end_point_constants } from "../../../Utils/ApiConstants";

// images and icon
import UserIconSmall from "../../../Assets/Icons/UserIconSmall";
import GallaryIcon from "../../../Assets/Icons/GallaryIcon";
import CameraIcon from "../../../Assets/Icons/CameraIcon";
import BorderAddIcon from "../../../Assets/Icons/BorderAddIcon";
import GallaryIconGray from "../../../Assets/Icons/GallaryIconGray";
import AddIconGray from "../../../Assets/Icons/AddIconGray";
import { log } from "react-native-reanimated";

// helpers
import { handleImagePicker, handleLunchCamra } from '../../../Utils/Helper';
import { uploadImageToStorage } from "../../../Utils/Firebase";
// constants
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

//---------- main component

const BusinessDetailScreen = ({ navigation, route }) => {

  //---------- state, veriable, context , params and ref
  const { data } = route.params;
  const [count, setCount] = useState(5)
  let scroll_ref = useRef()
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

  // console.log("appStateObject----------> ::", appStateObject);

  // business Signup data
  const [business_Details, setBusiness_Details] = useState({
    business_name: '',
    address: '',
    business_phone_number: "",
    website: '',
    business_title: "",
    business_text: '',
    profile_image: "",
  })
  const [data_GoingOn, setdata_GoingOn] = useState({
    title: "",
    description: '',
    elgible_drink: '',
    start_date: '',
    end_date: "",
    recurring: '',
  })

  // handleError Hooks
  const [isError, setIsError] = useState(false)
  const [isErrorBusinessProfile, setIsErrorBusinessProfile] = useState(false)
  const [isErrorBusinessGallery, setIsErrorBusinessGallery] = useState(false)

  const [isCheckedArray, setIsCheckedArray] = useState([])
  const [imageLocalUri, setImageLocalUri] = useState()
  const [imageLocalGalleryUri, setIUmageLocalGalleryUri] = useState([])
  const [recurringCheched, setRecurringCheched] = useState(false)
  const [isDayCheckedArray, setIsDayCheckedArray] = useState([])
  const [firebaseImagesURL, setFirebaseImagesURL] = useState([])

  console.log("appstatobject???", appStateObject);
  //---------- life cycles
  useEffect(() => {
  }, [])

  // handel next Pagination business ragistration 
  useEffect(() => {

    if (appStateObject?.Business_signup_pocket?.response) {

      setLoading(false);

      handelePaginationNextPage()

    } else if (appStateObject?.Business_Gallery_pocket?.response) {

      setLoading(false);

      handelePaginationNextPage()
    }
  }, [appStateObject])

  //---------- helper user's action

  // bottom yellow btn click for manage form
  const handlePagination = (key) => {

    // all data submited to server
    if (count === 7) {

      navigation.navigate('BusinessFreeTrial')
    } else {

      if (key === 1) {

        if ((!business_Details?.address ||
          !business_Details.website || !business_Details?.business_name || !business_Details?.business_phone_number)) {

          setIsError(true)
          return;
        } else {
          handelePaginationNextPage()
        }
      }

      if (key === 2) {

        if (!business_Details?.business_title || !business_Details?.business_text) {

          setIsError(true)
          return
        } else {

          handelePaginationNextPage()
        }
      }

      if (key === 3) {

        if (isCheckedArray?.length > 0) {

          handelePaginationNextPage()
        } else {

          setIsError(true)
          return
        }
      }

      if (key === 4) {

        if (!imageLocalUri) {

          setIsErrorBusinessProfile(true)
          return
        } else {
          setLoading(true)
          upLoadBusinessProfileImage()
        }
      }

      if (key === 5) {
        handelePaginationNextPage()
        // setIsError(true)
        // return
      }

      if (key === 6) {
        if (imageLocalGalleryUri?.length) {
          setLoading(true)

          handleUploadBusinessImage(0)
        } else {

          setIsErrorBusinessGallery(true)
          return
        }
      }

      if (key === 7) {

        setIsError(true)
        return
      }
    }
  }

  // Change pagination 
  const handelePaginationNextPage = () => {
    setCount(count + 1)
    let scroll = windowWidth * count
    scroll_ref?.current?.scrollTo && scroll_ref?.current?.scrollTo(({ x: scroll, y: 0, animated: true }))

  }

  const isCheckedClick = (id, isType) => {
    if (isType === "check_day") {
      return isDayCheckedArray.includes(id);

    } else {
      return isCheckedArray.includes(id);
    }
  }

  // image selection from galary or camera
  const handleSelectedImage = (image, key) => {
    setLoading(false)

    if (key === "upload_Gallery_image") {

      setIUmageLocalGalleryUri([...imageLocalGalleryUri, image])
      setLoading(false)

    } else {

      setImageLocalUri(image)
    }
  }

  //---------- image upload to firebase for 3 component

  // 
  const upLoadBusinessProfileImage = () => {

    if (imageLocalUri) {

      let path = `BusinessProfile/${data.email}/BusinessProfileImage.jpg`

      uploadImageToStorage(path, imageLocalUri, handleSubmit)
    }
  }

  // Business Gallery images upload to firbase 
  const handleUploadBusinessImage = (index) => {

    if (imageLocalGalleryUri?.length > 0) {

      var RandomNumber = Math.floor(Math.random() * 100) + 1;

      let path = `BusinessGallery/${data.email}/BusinessGallery${RandomNumber}.jpg`

      uploadImageToStorage(path, imageLocalGalleryUri[index], manageGalaryImages)
    } else {
      // show error
      showMessage({
        message: "Please selected the gallary images!",
        type: 'danger',
      });
    }
  }



  const manageGalaryImages = (response) => {

    // console.log("responce _________ ", response);
    if (response?.status === 'success') {

      let current_image_index = imageLocalGalleryUri.findIndex(index => index === response?.imageName)

      let array = []

      array.push(response.firebase_image_url)

      // store firebase URL state
      // setFirebaseImagesURL(array)

      if (current_image_index === (imageLocalGalleryUri.length - 1)) {
        handelSubmitBusinessGallery(array)

      } else {

        handleUploadBusinessImage(current_image_index + 1)
      }

    }
  }



  //--------- server comunication

  // submit to server and Api 
  const handleSubmit = (response) => {
    console.log('image url ', response)
    if (response.status === "success") {
      postData({
        key: 'Business_signup_pocket',
        end_point: api_end_point_constants.sign_up,
        data: {
          ...data,
          ...business_Details,
          profile_image: response.firebase_image_url,
          amenity: isCheckedArray,
          role: 1,
        }
      })
    }
  }

  // submit Gallery images to server and Api 
  const handelSubmitBusinessGallery = (firebase_image_url) => {

    postData({
      key: 'Business_Gallery_pocket',
      end_point: api_end_point_constants.add_gallery,
      data: {
        image: firebase_image_url,
        userID: currentUser?.userID,
      }
    })

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
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  business_name: text,
                })
              }}
              keyboardType={'numeric'}
              marginTop={20}
              placeholder={"Name"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  address: text,
                })
              }}
              marginTop={20}
              placeholder={"Address"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  business_phone_number: text,
                })
              }}
              marginTop={20}
              keyboardType={'numeric'}
              placeholder={"Phone"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  website: text,
                })
              }}
              marginTop={20}
              placeholder={"Website"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
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
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  business_title: text,
                })
              }}
              fontSize={18}
              marginTop={10}
              placeholder={"What kind of establishment are you?"}
              paddingVertical={3}
              height={65}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setBusiness_Details({
                  ...business_Details,
                  business_text: text,
                })
              }}
              marginTop={20}
              placeholder={"This is your time to shine, tell your new customers about yourself. Give a great description for customers"}
              numberOfLines={4}
              fontSize={18}
              paddingHorizontal={30}
              height={260}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
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

              datas?.map((item, index) => {

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

              {
                imageLocalUri ?
                  <Image
                    // resizeMode="contain"
                    style={{
                      height: '100%',
                      width: '100%'
                    }}
                    source={{ uri: imageLocalUri }} />
                  :
                  <GallaryIconGray />
              }

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
                    setLoading(true)
                    setIsErrorBusinessProfile(false)
                    isMenu ? null :
                      handleImagePicker({ call_back: handleSelectedImage })
                  }}
                >
                  <GallaryIcon />
                  <CustomText
                    style={{
                      color: isDarkTheme ? "#fff" : '#747474'
                    }}
                    text={'Gallery'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    setLoading(true)
                    setIsErrorBusinessProfile(false)
                    isMenu ? null :
                      handleLunchCamra({ call_back: handleSelectedImage })
                  }}
                >
                  <CameraIcon />
                  <CustomText
                    style={{
                      color: isDarkTheme ? "#fff" : '#747474'
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
                // lineHeight: 20
              }}
              text={isMenu ? "PLEASE UPLOAD A PDF IMAGE \n  OF YOUR MENU" : "REMAINDER! AN IMAGE IS REQUIRED TO SUCCESSFULLY COMPLETE THE SIGN UP PROCESS!"}
            />

          </CustomView>
          {
            isErrorBusinessProfile && isMenu ?
              renderBusinessImageError()
              : isErrorBusinessProfile && renderBusinessImageError()
          }
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
              {
                imageLocalGalleryUri?.length < 10 &&

                <TouchableOpacity
                  onPress={() => {
                    setLoading(true)
                    setIsErrorBusinessGallery(false)
                    handleImagePicker({ call_back: handleSelectedImage, key: 'upload_Gallery_image' })
                  }}
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
                </TouchableOpacity>

              }
              {
                imageLocalGalleryUri?.length ?
                  imageLocalGalleryUri.map((Image_uri) => {
                    return (

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
                        <Image
                          // resizeMode="contain"
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                          source={{ uri: Image_uri }} />

                      </CustomView>

                    )
                  })
                  :
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

              }
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
                      setLoading(true)
                      imageLocalGalleryUri?.length === 10 ?
                        alert("NOT MORE THAN TEN IMAGES")
                        :
                        setIsErrorBusinessGallery(false)
                      handleImagePicker({ call_back: handleSelectedImage, key: 'upload_Gallery_image' })
                    }}
                  >
                    <GallaryIcon />
                    <CustomText
                      style={{
                        color: isDarkTheme ? "#fff" : '#747474'
                      }}
                      text={'Gallery'}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setLoading(true)
                      imageLocalGalleryUri?.length === 10 ?
                        alert("NOT MORE THAN TEN IMAGES")
                        :
                        setIsErrorBusinessGallery(false)

                      handleLunchCamra({ call_back: handleSelectedImage, key: 'upload_Gallery_image' })
                    }}
                  >
                    <CameraIcon />
                    <CustomText
                      style={{
                        color: isDarkTheme ? "#fff" : '#747474'
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
          {isErrorBusinessGallery && renderBusinessImageError()}

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
              onChangeText={(text) => {
                setIsError(false);
                setdata_GoingOn({
                  ...data_GoingOn,
                  title: text,
                })
              }}
              placeholder={"EVENT TITLE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              fontSize={20}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}

            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setdata_GoingOn({
                  ...data_GoingOn,
                  description: text,
                })
              }}
              marginTop={20}
              placeholder={"DESCRIBE YOUR EVENT"}
              numberOfLines={6}
              paddingVertical={15}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={162}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
              fontSize={20}
            />
            <CustomTextInput
              onChangeText={(text) => {
                setIsError(false);
                setdata_GoingOn({
                  ...data_GoingOn,
                  elgible_drink: text,
                })
              }}
              marginTop={20}
              placeholder={"BARCODE MEMBER \n ELIGABLE DRINKS"}
              numberOfLines={6}
              paddingVertical={15}
              borderRadius={20}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={170}
              fontSize={20}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
            />
            <CustomTextInput
              onChangeText={(date) => {
                setIsError(false);
                setdata_GoingOn({
                  ...data_GoingOn,
                  start_date: date,
                })
              }}
              marginTop={20}
              placeholder={"START DATE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
              fontSize={20}
            />
            <CustomTextInput
              onChangeText={(date) => {
                setIsError(false);
                setdata_GoingOn({
                  ...data_GoingOn,
                  end_date: date,
                })
              }}
              marginTop={20}
              placeholder={"END DATE"}
              borderRadius={30}
              borderColor={"#DBDBDB"}
              placeholderTextColor={isDarkTheme ? "#FFFFFF" : "#C7C7C7"}
              height={62}
              backgroundColor={isDarkTheme ? "#000" : "#fff"}
              fontSize={20}
            />

            <CustomView
              style={{
                // width: '50%',
                marginTop: 30
              }}
            >
              <CustomCheckBox
                onValueChange={isChecked => {
                  setdata_GoingOn({
                    ...data_GoingOn,
                    recurring: 1,
                  })
                  setRecurringCheched(isChecked)
                }}
                rightTextColor={isDarkTheme ? "#fff" : "#B1B1B1"}
                rightText={'RECURRING SPECIAL'}
                isChecked={recurringCheched}
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
                        onValueChange={isChecked => {
                          setIsError(false);
                          if (isChecked) {
                            setIsDayCheckedArray([item.id, ...isDayCheckedArray])
                          } else {
                            var filtered = isDayCheckedArray.filter(function (value, index, arr) {
                              return value !== item.id;
                            });
                            setIsDayCheckedArray(filtered)
                          }
                        }}
                        isChecked={isCheckedClick(item.id, "check_day")}
                        rightText={item?.title}
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
            onValueChange={isChecked => {
              setIsError(false);
              if (isChecked) {
                setIsCheckedArray([item.id, ...isCheckedArray])
              } else {
                var filtered = isCheckedArray.filter(function (value, index, arr) {
                  return value !== item.id;
                });
                setIsCheckedArray(filtered)
              }
            }}
            isChecked={isCheckedClick(item.id)}
            rightText={item?.title}
            rightTextColor={isDarkTheme ? "#fff" : "#A6A6A6"}
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

  const renderError = () => {

    return (

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
          text={'all fields required '}
        />
      </CustomView>

    )
  }

  const renderBusinessImageError = () => {

    return (
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
          text={'Please Upload Image  '}
        />
      </CustomView>

    )
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


          {
            isError &&
            renderError()
          }


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
              onPress={
                handlePagination}
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

const datas = [

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