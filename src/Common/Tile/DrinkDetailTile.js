//----------imports

// react
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity, DatePickerIOS } from "react-native";
import { Shadow } from 'react-native-shadow-2'

// style
import { BLACK } from "../constants/Colors";
import { addIcon } from "../../constants/Images";

// icon
import AddIcon from '../../Assets/Icons/AddIcon'
import EditIcon from '../../Assets/Icons/EditIcon'


// context
import ContextHelper from "../../ContextHooks/ContextHelper";

// common
import CustomView from "../CustomView";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import ModalContainer from "../ModalContainer";



const windowWidth = Dimensions.get('window').width;
//---------- main components

const DrinkDetailTile = ({ props, navigation, item, isShow }) => {

    //---------- state, veriable, context and hooks
    const [isVisible, setIsVisible] = useState(false);
    const [keyType, setKetType] = useState(null);

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




    // render helper
    const renderModal = (item, start_date, end_date) => {
        return (
            <ModalContainer
                navigation={navigation}
                fontWeight={"500"}
                fontSize={25}
                rightFontSize={25}
                isVisible={isVisible}
                render_view_key={keyType}
                timeBarContant={{ ...item, startTime: start_date, endTime: end_date }}
                content={{ title: 'Do you want to add this event to your calendar? ', right_content: 'YES!', left_content: 'NO.' }}
                hideModal={() => setIsVisible(!isVisible)}
            />
        )
    }

    // hendal Date Convert
    const handelConvertDate = (isType, item) => {

        let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(parseInt(item));
        let days = date.getDay()
        let MonthName = monthsArray[days];

        if (isType === "month") {

            return MonthName?.toUpperCase();

        } else {
            return days;
        }
    }
    // handal Convert Time Format
    const formatAMPM = (item) => {
        let date = new Date(parseInt(item))
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    //---------- Main View
    return (
        <Shadow offset={[0, 5]}
            style={{
                width: '100%',

            }}>

            <TouchableOpacity
                onPress={() => {
                    setKetType("time_Bar_Details")
                    setIsVisible(true)
                }}
                style={{
                    // height: '100%',
                    width: '100%',
                    backgroundColor: '#FFA500',
                    // paddingRight: 10,
                    flexDirection: 'row',

                }}
            >

                <CustomView
                    style={{
                        // backgroundColor: '#FFA500',
                        padding: 10,
                        width: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    <CustomText
                        style={{
                            color: isDarkTheme ? "#FFFFFF" : '#FFFFFF',
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}
                        text={handelConvertDate("date", item?.start_date) + "TH"}
                    />
                    <CustomText
                        style={{
                            color: isDarkTheme ? "#FFFFFF" : '#FFFFFF',
                            fontSize: 16,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}
                        text={handelConvertDate("month", item?.start_date)}
                    />

                </CustomView>

                <CustomView
                    style={{
                        backgroundColor: isDarkTheme ? '#1F1F1F' : '#FFFFFF',
                        // paddingLeft: 14,
                        // width: '50%'
                        paddingHorizontal: 10,
                    }}
                >
                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 16,
                            fontWeight: '400',
                            // lineHeight:20
                        }}

                        text={item?.elgible_drink}
                    />

                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 14,
                            fontWeight: '400',
                        }}

                        text={`${formatAMPM(item?.start_date)}, ${formatAMPM(item?.end_date)}`}
                    />

                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 12,
                            fontWeight: '400',
                        }}

                        text={item?.title}
                    />
                    {/* <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 12,
                            fontWeight: '400',
                        }}

                        text={"BROCODE MENBERS"}
                    /> */}


                </CustomView>

                <TouchableOpacity
                    onPress={() => {
                        if (currentUser.user_type === 'patron') {

                            setKetType("Clamim_Drink")
                            setIsVisible(true)

                        } else {

                            navigation.navigate('AddEvent', { item })
                        }

                    }}
                    style={{
                        borderRightColor: isDarkTheme ? "#1F1F1F" : "#FFFFFF",
                        borderRightWidth: 12,
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isDarkTheme ? "#1F1F1F" : "#FFFFFF",

                    }}
                >


                    {!isShow || currentUser.user_type === 'patron' ?
                        currentUser.user_type === 'patron' ?
                            <AddIcon />
                            :
                            <EditIcon />
                        : null

                    }
                </TouchableOpacity>
                <CustomView style={{ width: '1.5%', height: "100%", backgroundColor: '#FFA500' }} />

            </TouchableOpacity>
            {renderModal(item, formatAMPM(item?.start_date), formatAMPM(item?.end_date))}
        </Shadow>

    );
};

//---------- export component

export default DrinkDetailTile;

