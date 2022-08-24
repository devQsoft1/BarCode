// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from "react-native";

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

// images and icon
import { GoogleMap } from "../../constants/Images";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import CallIconBlack from "../../Assets/Icons/CallIconBlack";
import WorldIcon from "../../Assets/Icons/WorldIcon";
import MarkRedIcon from "../../Assets/Icons/MarkRedIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronBarDetail = ({ navigation }) => {

  //---------- state, veriable, context and hooks

  const [tab, setTab] = useState('detail')  // futute_events 

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
          height: 86
        }}
      >
        <DrinkDetailTile />
      </TouchableOpacity>
    )
  }

  //---------- main return

  return (
    <Frame>
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
          />

        </Shadow>

        {
          tab === 'detail' &&
          <CustomView
            style={{
              padding: 20
            }}
          >

            <CustomView
              style={{
                height: 86
              }}
            >

              <DrinkDetailTile />
            </CustomView>

            <CustomView
              style={{
                marginTop: 30,
                alignItems: 'center',
              }}
            >


              <Shadow>
                <CustomButton
                  backgroundColor={'#CCCCCC'}
                  fontSize={24}
                  fontWeight={'700'}
                  borderColor={'#fff'}
                  paddingVertical={10}
                  paddingHorizontal={15}
                  width={'80%'}
                  onPress={() => {
                    alert('in progress ...')
                  }}
                  title={'NOT A BARCODE MEMBER'}
                />
              </Shadow>

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
              text={'ABOUT US'}
              style={{
                marginTop: 30,
                marginBottom: 10,
                fontSize: 14,
                fontWeight: '500',
                color: isDarkTheme ? '#fff' : '#000'
              }}
            />

            <CustomText
              text={'Great Bar, great whores, lovely family club. Family friendly restaurant with McNuggests on speed dail. Free covid testing and shots on deck.'}
              style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#747474'
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
                  text={'ADDRESS'}
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />

                <CustomText
                  text={'27th North Avenue Bridgeport, NY, 06623'}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#747474'
                  }}
                />

                <CustomText
                  text={'HOURS'}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />

                <CustomText
                  text={'Mon - Fri Open from 11 am - 4 pm'}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#747474'
                  }}
                />

                <CustomText
                  text={'CATEGORIES'}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />

                <CustomText
                  text={'American, Nightlife'}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#747474'
                  }}
                />

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

            <CustomView style={{ backgroundColor: '#696969', marginTop: 30, height: 1 }} />

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
                  text={'PHONE'}
                  style={{
                    marginBottom: 10,
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />
                <CallIconBlack color={'#000'} />
              </CustomView>

              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CustomText
                  text={'WEBSITE'}
                  style={{
                    marginBottom: 10,
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />
                <WorldIcon />
              </CustomView>

              <CustomView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CustomText
                  text={'DIRECTIONS'}
                  style={{
                    marginBottom: 10,
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
                  }}
                />
                <MarkRedIcon />
              </CustomView>

            </CustomView>

            <CustomView style={{ backgroundColor: '#696969', height: 1 }} />

            <CustomView
              style={{
                marginTop: 40,
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
                  text={'AMENITES'}
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Free Parking'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>

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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Free Parking'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>

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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Free Parking'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>

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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Free Parking'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>

              </CustomView>
              <CustomView
                style={{
                  width: '50%'
                }}
              >
                <CustomText
                  text={'DRESS CODE'}
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: isDarkTheme ? '#fff' : '#000'
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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Business Casual'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>

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
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      height: 5,
                      width: 5
                    }}
                  />
                  <CustomText
                    text={'Free Parking'}
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#747474'
                    }}
                  />
                </CustomView>
              </CustomView>
            </CustomView>

            <CustomView style={{ backgroundColor: '#696969', height: 1, marginVertical: 30 }} />

            <CustomText
              text={'BROCODE MEMBER FREE DRINKS'}
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: isDarkTheme ? '#fff' : '#000'
              }}
            />
            <CustomText
              text={'Well alcohol, beer and wine'}
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#747474'
              }}
            />

            <CustomText
              text={'BROCODE MEMBER FREE DRINKS'}
              style={{
                marginTop: 30,
                fontSize: 14,
                fontWeight: '500',
                color: isDarkTheme ? '#fff' : '#000'
              }}
            />
            <CustomText
              text={'20% off on entire entree'}
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#747474'
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
              paddingBottom: 100
            }}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        }



      </CustomView>
    </Frame >
  );
};

//---------- export component

export default PatronBarDetail;

//---------- constants data


let data = [
  {},
  {},
  {},
]
