// react
import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Alert } from "react-native";

// images and icon

import BorderAddIcon from "../../../Assets/Icons/BorderAddIcon";

// common
import CustomCheckBox from "../../../Common/CustomCheckBox";
import CustomTextInput from "../../../Common/CustomTextInput";
import CustomView from "../../../Common/CustomView";
import TopContainer from "../../../Common/TopContainer";
import ContextHelper from "../../../ContextHooks/ContextHelper";
import CustomText from "../../../Common/CustomText";
import Frame from "../../../Common/Frame";
import { YellowRight } from "../../../constants/Images";
import RightCircleYellowIcon from "../../../Assets/Icons/RightCircleYellowIcon";


// api constants
import { api_end_point_constants } from "../../../Utils/ApiConstants";

// api constants

const Addevent = ({ navigation, route }) => {

    //---------- state, veriable, context , params and ref
    let event_Details = route?.params?.item

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


    // handleError Hooks
    const [isError, setIsError] = useState(false)

    // store data define state in 
    const [data_GoingOn, setdata_GoingOn] = useState({
        title: "",
        description: '',
        elgible_drink: '',
        start_date: '',
        end_date: "",
        recurring: '',
    })
    const [recurringCheched, setRecurringCheched] = useState(false)
    const [isDayCheckedArray, setIsDayCheckedArray] = useState([])
    const [isCheckedArray, setIsCheckedArray] = useState([])



    //---------- life cycles

    // response add update event 
    useEffect(() => {
        if (appStateObject?.add_Event_pocket?.response) {

            navigation.navigate('BarDetail')
        }

    }, [appStateObject?.add_Event_pocket?.response])


    //---------- helper user's action

    // hendal  CheckBox click
    const isCheckedClick = (id, isType) => {
        if (isType === "check_day") {
            return isDayCheckedArray.includes(id);

        } else {
            return isCheckedArray.includes(id);
        }
    }
    console.log("event_Details", event_Details);
    // submit to server Add evant 

    const handalSubmitEvent = () => {
        postData({
            key: 'add_Event_pocket',
            end_point: event_Details.eventID ? api_end_point_constants.update_event : api_end_point_constants.add_event,
            is_force_request: true,
            data: {
                ...data_GoingOn,
                day: isDayCheckedArray,
                userID: event_Details?.userID,
                eventID: event_Details?.eventID,
            }
        })
    }

    return (


        <CustomView
            style={{
                flex: 1,
            }}
        >

            {
                <TouchableOpacity
                    onPress={() => {
                        handalSubmitEvent()
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
                        source={YellowRight}
                        resizeMode='contain'
                    />

                </TouchableOpacity>

            }
            <ScrollView
                style={{
                    position: 'relative'
                }}
            >


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
                                    isChecked ?
                                        setdata_GoingOn({
                                            ...data_GoingOn,
                                            recurring: 1,
                                        })
                                        :
                                        setdata_GoingOn({
                                            ...data_GoingOn,
                                            recurring: null,
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
                            <CustomView style={{ width: 30, height: 2, backgroundColor: '#FF0000', marginVertical: 10 }} />


                            <CustomText
                                style={{
                                    fontSize: 23,
                                    fontWeight: '500',
                                    color: isDarkTheme ? "#fff" : '#CECECE',
                                    textAlign: "center",
                                    marginLeft: 10
                                }}
                                text={'delete event'}
                            />
                        </CustomView>
                    </CustomView>
                </CustomView>
            </ScrollView>
        </CustomView>
    )
}

export default Addevent;

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