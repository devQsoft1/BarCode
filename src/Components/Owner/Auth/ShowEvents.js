
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";

import { TouchableOpacity, FlatList, Dimensions } from "react-native";


// common
import DrinkDetailTile from "../../../Common/Tile/DrinkDetailTile";
import CustomView from "../../../Common/CustomView";
import Frame from "../../../Common/Frame";
import Header from "../../CommonPatronAndOwner/Header";
import ContextHelper from "../../../ContextHooks/ContextHelper";

// api constants
import { api_end_point_constants } from "../../../Utils/ApiConstants";

// constants
const windowHeight = Dimensions.get('window').height;

const ShowEvents = ({ navigation }) => {
    const [dataShowEvent, setDataShowEvent] = useState()
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

    //---------- life cycles

    useEffect(() => {
        postData({
            key: 'show_event_Detail_Poket',
            end_point: api_end_point_constants?.show_event,
            data: {
                userID: currentUser?.userID,
            }
        })
    }, [])

    // store data in state  after api response 
    useEffect(() => {

        if (appStateObject?.show_event_Detail_Poket?.response) {
            setDataShowEvent(appStateObject?.show_event_Detail_Poket?.response)
        }
    }, [appStateObject?.show_event_Detail_Poket?.response])


    //---------- render helper

    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    navigation.navigate('')
                }}
                style={{
                    height: 86,

                }}
            >
                <DrinkDetailTile navigation={navigation} item={item} />

            </TouchableOpacity>
        )
    }

    return (

        <Frame
            scrollEnabled={false}
        >

            <CustomView
                style={{
                    flex: 1,
                    height: windowHeight,
                    paddingBottom: 50,
                }}
            >
                <Header
                    isCenter={false}
                    navigation={navigation}
                    title={'YOUR EVENTS'}
                    fontWeight={"700"}
                />

                <CustomView
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

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
                        data={dataShowEvent}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </CustomView>

            </CustomView>
        </Frame>
    )
};

export default ShowEvents;


