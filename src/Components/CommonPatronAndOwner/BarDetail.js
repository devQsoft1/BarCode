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
import ModalContainer from "../../Common/ModalContainer";

// images and icon
import { GoogleMap, AddYellow, YellowRight, Phone, LyftBlack, Lyft, Globe, } from "../../constants/Images";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import CallIconBlack from "../../Assets/Icons/CallIconBlack";
import WorldIcon from "../../Assets/Icons/WorldIcon";
import MarkRedIcon from "../../Assets/Icons/MarkRedIcon";
import CustomBorderButton from "../../Common/CustomBorderButton";
import ClaimDrinkIcon from "../../Assets/Icons/ClaimDrinkIcon";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const BarDetail = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  //---------- state, veriable, context and hooks
  const [isVisible, setIsVisible] = useState(false);
  const [keyType, setKetType] = useState(null);

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
  const renderModal = () => {

    return (
      <ModalContainer
        navigation={navigation}
        fontWeight={"500"}
        fontSize={25}
        isVisible={isVisible}
        render_view_key={keyType}
        content={{ title: 'Are you sure you want \n to claim this drink?', right_content: 'No.  I’m not ready  to party', left_content: 'Yes! let’s drink' }}
        hideModal={() => setIsVisible(!isVisible)}
      />
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
              <DrinkDetailTile />
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
                color: isDarkTheme ? '#fff' : '#CCCCCC'
              }}
            />

            <CustomText
              text={'Great Bar, great whores, lovely family club. Family friendly restaurant with McNuggests on speed dail. Free covid testing and shots on deck.'}
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
                  }}
                />

                <CustomText
                  text={'27th North Avenue Bridgeport, NY, 06623'}
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '400',
                    color: isDarkTheme ? '#fff' : '#7B7B7B'
                  }}
                />

                <CustomText
                  text={'Hours'}
                  style={{
                    marginTop: 10,
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
                  }}
                />

                <CustomText
                  text={'Mon - Fri Open from 11 am - 4 pm'}
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '400',
                    color: isDarkTheme ? '#fff' : '#7B7B7B'
                  }}
                />

                <CustomText
                  text={'Categories'}
                  style={{
                    marginTop: 10,
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: isDarkTheme ? '#fff' : '#CCCCCC'

                  }}
                />

                <CustomText
                  text={'American, Nightlife'}
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '400',
                    color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
                  }}
                />
                {/* <WorldIcon /> */}

                <Image
                  source={Globe}
                  resizeMode='cover'
                />
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
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
                    text={'Free Parking'}
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                    text={'Dog friendly'}
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                    text={'Pool'}
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                    text={'Hookah'}
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                  text={'Dress Code'}
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
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
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                      color: isDarkTheme ? '#fff' : '#7B7B7B'
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
                color: isDarkTheme ? '#fff' : '#CCCCCC'
              }}
            />
            <CustomText
              text={'Well alcohol, beer and wine'}
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: isDarkTheme ? '#fff' : '#7B7B7B'
              }}
            />

            <CustomText
              text={'BarCode Member Specials'}
              style={{
                marginTop: 30,
                fontSize: 20,
                fontWeight: '400',
                color: isDarkTheme ? '#fff' : '#CCCCCC'
              }}
            />
            <CustomText
              text={'20% off on entire entree'}
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: isDarkTheme ? '#fff' : '#7B7B7B'
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

        {
          currentUser.user_type === 'business_owner' ?

            <CustomView
              style={{
                flex: 1,
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'flex-end',
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
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
                  }}
                />


                <CustomView style={{ height: 15 }} />

                <CustomText
                  text={"View Gallery"}
                  style={{
                    fontSize: 24,
                    fontWeight: '400',
                    color: isDarkTheme ? '#fff' : '#CCCCCC'
                  }}
                />
              </CustomView>

              <CustomView
                style={{

                  // flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'flex-end',
                  // paddingHorizontal: 20
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
              </CustomView>
            </CustomView>


            :
            null
        }
      </CustomView>
      {renderModal()}
    </Frame >
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
