// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Linking, Modal } from "react-native";

// third party lib
import { Shadow } from 'react-native-shadow-2';

// common
import CustomView from "../../Common/CustomView";
import CustomText from "../../Common/CustomText";
import Header from './Header'
import ContextHelper from '../../ContextHooks/ContextHelper';
import Frame from "../../Common/Frame";
import ClainDrinkTile from "../../Common/Tile/ClainDrinkTile";
import DrinkDetailTile from "../../Common/Tile/DrinkDetailTile";
import CustomButton from "../../Common/CustomButton";
import SwiperComponent from "../../Common/SwiperComponent";

// api constants
import { api_end_point_constants } from "../../Utils/ApiConstants";

// images and icon
import { GoogleMap, AddYellow, YellowRight, Phone, LyftBlack, Lyft, Globe, } from "../../constants/Images";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import CallIconBlack from "../../Assets/Icons/CallIconBlack";
import WorldIcon from "../../Assets/Icons/WorldIcon";
import MarkRedIcon from "../../Assets/Icons/MarkRedIcon";
import CustomBorderButton from "../../Common/CustomBorderButton";
import ClaimDrinkIcon from "../../Assets/Icons/ClaimDrinkIcon";

// Modal 
import BottomModalContainer from "../../Common/BottomModalContainer";
import LeftModalContainer from "../../Common/LeftModalContainer";
import ModalContainer from "../../Common/ModalContainer";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const BarDetail = ({ navigation, route }) => {

  //---------- state, veriable, context and hooks , params


  const [isVisible, setIsVisible] = useState(false);
  const [isGallaryModal, setIsGallaryModal] = useState(false);
  const [isAddeventModal, setIsAddeventModal] = useState(false);
  const [keyType, setKetType] = useState(null);
  const [dataBarDetails, setDataBarDetals] = useState()

  const [tab, setTab] = useState('detail')  // futute_events 

  const {
    loading,
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

  let bar_id = route?.params?.item?.bar_id || currentUser?.userID;
  //---------- life cycles


  useEffect(() => {

    if (appStateObject?.bar_Detail_Poket?.response) {


      setDataBarDetals(appStateObject?.bar_Detail_Poket?.response)
      // setLoading(false)
    }

  }, [appStateObject?.bar_Detail_Poket?.response])

  useEffect(() => {

    postData({
      key: 'bar_Detail_Poket',
      end_point: api_end_point_constants.show_bar_details,
      data: {
        userID: currentUser?.userID,
        barID: bar_id
      }
    })
  }, [])


  //---------- handle user's action

  const handleTabsClick = (key) => {

    setTab(key)
  }


  //---------- render helper

  const renderItem = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('')
        }}
        style={{
          height: 86,
        }}
      >
        <DrinkDetailTile item={item} />

      </TouchableOpacity>
    )
  }

  // GalaryModal 
  const renderGalaryModal = () => {

    return (
      <BottomModalContainer
        Gallery_URL={Gallery_URL}
        // faqData={faqData?.content}
        backgroundColor={isDarkTheme ? '#000' : '#FFF'}
        navigation={navigation}
        render_view_key={'gallary'}
        isVisible={isGallaryModal}
        hideModal={() => setIsGallaryModal(!isGallaryModal)}
      />
    )
  }

  //  Add event Modal
  const renderAddEventModal = () => {

    return (
      <LeftModalContainer
        backgroundColor={isDarkTheme ? '#000' : '#FFF'}
        isVisible={isAddeventModal}
        hideModal={() => setIsAddeventModal(!isAddeventModal)}
      />
    )
  }
  //---------- main return

  return (

    <CustomView
      style={{
        flex: 1,
      }}
    >

      {
        <TouchableOpacity
          onPress={() => {
            setIsAddeventModal(true)
          }}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,

            zIndex: 100

          }}
        >
          <Image
            style={{
              height: 83,
              width: 83
            }}
            source={AddYellow}
            resizeMode='contain'
          />
        </TouchableOpacity>
      }
      <ScrollView
        style={{
          position: 'relative'
        }}
      >
        <CustomView
          style={{
            flex: 1,
            paddingBottom: 50
          }}
        >


          <Shadow
            style={{
              height: 300,
              width: '100%',
            }}
          >

            <SwiperComponent
              current_tab={tab}
              handleTabsClick={handleTabsClick}
              bar_content={route}
            />

          </Shadow>

          {
            tab === 'detail' &&
            <CustomView
              style={{
                padding: 20,
                // alignItems:'center'
              }}
            >
              <CustomView
                style={{
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <DrinkDetailTile item={dataBarDetails?.events.pop()} />
              </CustomView>
              <CustomView
                style={{
                  marginTop: 30,
                  alignItems: 'center',
                }}
              >

                {/* <Shadow
              distance={1}
              offset={[0, 1]} 
              startColor={'rgba(0, 148, 255, 0.5)'}
              > */}
                <CustomButton
                  onPress={() => {
                    setKetType("Clamim_Drink")
                    setIsVisible(true)
                  }}
                  // title={'NOT A BARCODE MEMBER'}
                  icon={<ClaimDrinkIcon />}
                />
                {/* </Shadow> */}

                {/* <CustomButton
                paddingVertical={15}
                width={'80%'}
                onPress={() => {
                  alert('in progress ...')
                }}
                title={'CLAIM DRINKS'}
              /> */}

              </CustomView>

              <CustomText
                text={'About Us '}
                style={{
                  marginTop: 30,
                  marginBottom: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: isDarkTheme ? '#fff' : '#747474'
                }}
              />

              <CustomText
                text={dataBarDetails?.business_text}
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: isDarkTheme ? '#fff' : '#A4A4A4'
                }}
              />

              <CustomView
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >

                <CustomView
                  style={{
                    width: '50%'
                  }}
                >

                  <CustomText
                    text={'Address'}
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />

                  <CustomText
                    text={dataBarDetails?.address}
                    style={{
                      marginTop: 10,
                      fontSize: 16,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#A4A4A4'
                    }}
                  />

                  <CustomText
                    text={'Hours'}
                    style={{
                      marginTop: 10,
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />

                  <CustomText
                    text={`${dataBarDetails?.opening_days} Open from ${dataBarDetails?.opening_hour}`}
                    style={{
                      marginTop: 10,
                      fontSize: 16,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#A4A4A4'
                    }}
                  />

                  <CustomText
                    text={'Categories'}
                    style={{
                      marginTop: 10,
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'

                    }}
                  />
                  <CustomView
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    {
                      dataBarDetails?.category.map((item, index) =>
                        <CustomText
                          text={item.name + " "}
                          style={{
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: '400',
                            color: isDarkTheme ? '#fff' : '#A4A4A4',
                          }}
                        />


                      )
                    }
                  </CustomView>

                </CustomView>

                <CustomView
                  style={{
                    width: '50%',
                    padding: 20
                  }}
                >
                  <Image
                    source={GoogleMap}
                    resizeMode='cover'
                  />

                </CustomView>

              </CustomView>

              <CustomView style={{ backgroundColor: '#C4C4C4', marginTop: 30, height: 1 }} />

              <CustomView
                style={{
                  padding: 20,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >

                <CustomView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <CustomText
                    text={'Phone'}
                    style={{
                      marginBottom: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />
                  {/* <CallIconBlack color={'#000'} /> */}

                  <Image
                    source={Phone}
                    resizeMode='cover'
                  />
                </CustomView>

                <CustomView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <CustomText
                    text={'Website'}
                    style={{
                      marginBottom: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />
                  {/* <WorldIcon /> */}
                  <TouchableOpacity

                    onPress={() => {
                      // Linking.openURL(dataBarDetails?.website)
                    }}>
                    <Image
                      source={Globe}
                      resizeMode='cover'
                    />
                  </TouchableOpacity>
                </CustomView>

                <CustomView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CustomText
                    text={'Directions'}
                    style={{
                      marginBottom: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />
                  <CustomView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <MarkRedIcon />

                    <Image
                      style={{
                        marginLeft: 10
                      }}
                      source={isDarkTheme ? Lyft : LyftBlack}
                      resizeMode='cover'
                    />
                  </CustomView>
                </CustomView>

              </CustomView>

              <CustomView style={{ backgroundColor: '#C4C4C4', height: 1 }} />

              <CustomView
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >

                <CustomView
                  style={{
                    width: '50%'
                  }}
                >
                  <CustomText
                    text={'Amenities'}
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />


                  {
                    dataBarDetails?.amenity.map((item, index) => {
                      return (
                        <CustomView
                          key={index}
                          style={{
                            marginTop: index === 0 ? 10 : 2,
                            flexDirection: 'row',
                            alignItems: 'center'
                          }}
                        >
                          <CustomView
                            style={{
                              marginHorizontal: 5,
                              backgroundColor: '#C4C4C4',
                              borderRadius: 5,
                              height: 5,
                              width: 5
                            }}
                          />


                          <CustomText
                            text={item.name}
                            style={{
                              fontSize: 18,
                              fontWeight: '400',
                              color: isDarkTheme ? '#fff' : '#A4A4A4'
                            }}
                          />

                        </CustomView>
                      )
                    })
                  }

                </CustomView>
                <CustomView
                  style={{
                    width: '50%'
                  }}
                >
                  <CustomText
                    text={'Dress Code'}
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />

                  <CustomView
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <CustomView
                      style={{
                        marginHorizontal: 5,
                        backgroundColor: '#C4C4C4',
                        borderRadius: 5,
                        height: 5,
                        width: 5
                      }}
                    />
                    <CustomText
                      text={'Business Casual'}
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                        color: isDarkTheme ? '#fff' : '#A4A4A4'
                      }}
                    />
                  </CustomView>

                  <CustomView
                    style={{
                      marginTop: 2,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <CustomView
                      style={{
                        marginHorizontal: 5,
                        backgroundColor: '#D9D9D9',
                        borderRadius: 5,
                        height: 5,
                        width: 5
                      }}
                    />
                    <CustomText
                      text={'Free Parking'}
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                        color: isDarkTheme ? '#fff' : '#A4A4A4'
                      }}
                    />
                  </CustomView>
                </CustomView>
              </CustomView>

              <CustomView style={{ backgroundColor: '#C4C4C4', height: 1, marginVertical: 30 }} />

              <CustomText
                text={'BarCode Member Free Drinks'}
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: isDarkTheme ? '#fff' : '#747474'
                }}
              />
              <CustomText
                text={dataBarDetails?.free_drinks}
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: isDarkTheme ? '#fff' : '#A4A4A4'
                }}
              />

              <CustomText
                text={'BarCode Member Specials'}
                style={{
                  marginTop: 30,
                  fontSize: 20,
                  fontWeight: '400',
                  color: isDarkTheme ? '#fff' : '#747474'
                }}
              />
              <CustomText
                text={dataBarDetails?.member_special}
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: isDarkTheme ? '#fff' : '#A4A4A4'
                }}
              />

            </CustomView>
          }

          {
            tab === 'futute_events' &&

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
                paddingBottom: 100,

              }}
              data={dataBarDetails?.events}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          }


          {
            currentUser.user_type === 'patron' ?

              <CustomView
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  marginTop: 15
                }}
              >
                <CustomView
                  style={{
                    marginRight: 20
                  }}>
                  <CustomText
                    text={"View Menu"}
                    style={{
                      fontSize: 24,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />

                  <CustomView style={{ height: 15 }} />

                  <TouchableOpacity
                    onPress={() => {
                      setIsGallaryModal(true)
                    }}
                  >

                    <CustomText
                      text={"View Gallery"}
                      style={{
                        fontSize: 24,
                        fontWeight: '400',
                        color: isDarkTheme ? '#fff' : '#747474'
                      }}
                    />
                  </TouchableOpacity>
                </CustomView>

              </CustomView>
              :
              null
          }
          {
            currentUser.user_type === 'business_owner' ?

              <CustomView
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  marginTop: 15
                }}
              >
                <CustomView
                  style={{
                    marginRight: 20
                  }}>
                  <CustomText
                    text={"View Menu"}
                    style={{
                      fontSize: 24,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#747474'
                    }}
                  />

                  <CustomView style={{ height: 15 }} />

                  <TouchableOpacity
                  >
                    <CustomText
                      text={"View Gallery"}
                      style={{
                        fontSize: 24,
                        fontWeight: '400',
                        color: isDarkTheme ? '#fff' : '#747474'
                      }}
                    />
                  </TouchableOpacity>
                </CustomView>

              </CustomView>
              :
              null
          }
        </CustomView>

        {renderGalaryModal()}
        {renderAddEventModal()}
      </ScrollView >
    </CustomView>
  );
};

//---------- export component

export default BarDetail;

//---------- constants data


let data = [
  {},
  {},
  {},
]


let Gallery_URL = [
  {
    id: 1,
    URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  {
    id: 2,
    URL: "https://deepplate.bauscherhepp.com/hs-fs/hubfs/Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg?width=1100&name=Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg"
  }, {
    id: 3,
    URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  {
    id: 4,
    URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  {
    id: 5,
    URL: "https://deepplate.bauscherhepp.com/hs-fs/hubfs/Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg?width=1100&name=Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg"
  },
  {
    id: 6,
    URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  //  {
  //   id: 7,
  //   URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  // },
  // {
  //   id: 8,
  //   URL: "https://deepplate.bauscherhepp.com/hs-fs/hubfs/Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg?width=1100&name=Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg"
  // }, {
  //   id: 9,
  //   URL: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  // },
  // , {
  //   id: 10,
  //   URL: "https://deepplate.bauscherhepp.com/hs-fs/hubfs/Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg?width=1100&name=Why%20the%20Future%20of%20the%20Hotel%20Lobby%20Is%20So%20Important%20to%20the%20Hospitality%20Industry.jpg"
  // },
]