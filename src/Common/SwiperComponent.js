//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from "react-native";


// api constants
import { api_end_point_constants } from "../Utils/ApiConstants";

// third party lib
import Swiper from 'react-native-swiper'
import { Shadow } from 'react-native-shadow-2';

// common
import CustomText from "./CustomText";
import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "./CustomView";

// icon and imges
import { Logo2 } from '../constants/Images'
import BackIcon from "../Assets/Icons/BackIcon";
import ArrowIcon from "../Assets/Icons/ArrowIcon";
import SaveIcon from "../Assets/Icons/SaveIcon";
import UploadArrow from "../Assets/Icons/UploadArrow";
import FeaturedRedIcon from "../Assets/Icons/FeaturedRedIcon";
import BellIcon from "../Assets/Icons/BellIcon";
// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const SwiperComponent = ({ navigation, handleTabsClick, current_tab, key, bar_content }) => {

    //---------- state, veriable, context and hooks

    const [isAddFav, setIsFav] = useState(bar_content?.params?.item) // store Data In Favorites


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

    // response Server 
    useEffect(() => {

        if (appStateObject?.add_Favorite_Poket) {
            if (isAddFav?.fav_status) {
                setIsFav({ ...isAddFav, fav_status: false })

            } else {
                setIsFav({ ...isAddFav, fav_status: true })

            }
        }
    }, [appStateObject?.add_Favorite_Poket])


    //---------- handle user's action

    const handleAddFav = () => {

        postData({
            key: 'add_Favorite_Poket',
            end_point: api_end_point_constants.add_favourite,
            data: {
                userID: currentUser?.userID,
                barID: isAddFav?.bar_id
            }
        })
    }

    //---------- render content
    const rendermapData = (data) => {

        return data.map((item, index) => {

            return renderContent({ item, index })
        })

    }

    const renderContent = ({ item, index }) => {

        return (
            <Shadow offset={[0, 5]}
                style={{
                    height: 300,
                    width: '100%',
                }}
            >

                <ImageBackground
                    key={index}
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={{
                        alignItems: 'flex-start',
                        height: '100%',

                    }}
                >
                    <CustomView
                        style={{
                            flex: 1,
                            padding: 20,
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <CustomView
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                // alignItems: 'center'

                            }}
                        >
                            <ArrowIcon fill={null} stroke={"#fff"} />

                            {
                                currentUser?.user_type === 'patron' &&

                                <CustomView
                                    style={{
                                        alignItems: 'center'
                                    }}
                                >

                                    <TouchableOpacity
                                        onPress={() => {
                                            handleAddFav()
                                        }}
                                    >
                                        {
                                            isAddFav?.fav_status ?
                                                <FeaturedRedIcon />
                                                :
                                                <SaveIcon fill={"#FFFFFF"} />
                                        }
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 10
                                        }}
                                    >

                                        <UploadArrow height={26} width={26} fill={"#FFFFFF"} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                    >

                                        <BellIcon fill={'transparent'} />
                                    </TouchableOpacity>



                                </CustomView>
                            }
                        </CustomView>


                        <CustomView>


                            <CustomText
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: isDarkTheme ? '#FFFFFF' : '#FFFFFF'
                                }}
                                text={item.title}
                            />

                            <CustomText
                                style={{
                                    fontSize: 17,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFFFFF' : '#FFFFFF'
                                }}
                                text={item.desc}
                            />

                        </CustomView>

                    </CustomView>

                    <CustomView
                        style={{
                            paddingHorizontal: 20,
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                handleTabsClick('detail')
                            }}
                            style={{
                                paddingBottom: 10,
                                borderBottomWidth: current_tab === 'detail' ? 4 : 0,
                                borderBottomColor: isDarkTheme ? '#FFFFFF' : '#FFFFFF'
                            }}
                        >
                            <CustomText
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFFFFF' : '#FFFFFF'
                                }}
                                text={'Details'}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                handleTabsClick('futute_events')
                            }}
                            style={{
                                paddingBottom: 10,
                                borderBottomWidth: current_tab === 'futute_events' ? 4 : 0,
                                borderBottomColor: isDarkTheme ? '#000' : '#fff'
                            }}
                        >
                            <CustomText
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: isDarkTheme ? '#FFFFFF' : '#FFFFFF'
                                }}
                                text={'Future Events'}
                            />
                        </TouchableOpacity>
                    </CustomView>
                </ImageBackground>
            </Shadow>
        )
    }

    //---------- main return
    return (
        <Swiper
            // style={styles.wrapper}
            showsButtons={false}
        >
            {
                rendermapData(data)
            }
        </Swiper>
    );
};



//---------- export component

export default SwiperComponent;

//---------- styles

//---------- constants

const data = [
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://i.picsum.photos/id/142/200/300.jpg?hmac=B08HyXonHhJPFpULUNgMfoCFGZqymUB3NhBxo3iWTnc",
    },
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://picsum.photos/id/237/200/300",
    },
    {
        title: "BROCODE BAR",
        desc: "27th North Avenue, Bridgeport, NY",
        image: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    }
]