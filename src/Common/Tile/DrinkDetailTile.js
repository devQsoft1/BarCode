//----------imports

// react
import React, { useContext, useState } from "react";
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { Shadow } from 'react-native-shadow-2'

// style
import { BLACK } from "../constants/Colors";
import { addIcon } from "../../constants/Images";

// icon
import AddIcon from '../../assets/Icons/AddIcon'

// context
import ContextHelper from "../../ContextHooks/ContextHelper";

// common
import CustomView from "../CustomView";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import ModalContainer from "../ModalContainer";



const windowWidth = Dimensions.get('window').width;
//---------- main components

const DrinkDetailTile = ({ props, navigation, item }) => {

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
    const renderModal = () => {

        return (
            <ModalContainer
                navigation={navigation}
                fontWeight={"500"}
                fontSize={25}
                rightFontSize={25}
                isVisible={isVisible}
                render_view_key={keyType}
                content={{ title: 'Do you want to add this event to your calendar? ', right_content: 'YES!', left_content: 'NO.' }}
                hideModal={() => setIsVisible(!isVisible)}
            />
        )
    }
    const handelConvertDate = (isType, item) => {

        let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(parseInt(item));
        let days = date.getDay()
        let MonthName = monthsArray[days];
        let StartDate = date.getDate()
        let time = date.getHours()



        if (isType === "month") {

            return MonthName.toUpperCase();

        } else if (isType === "time") {

            return time;

        } else {
            return days;
        }
    }

    //---------- Main View
    return (
        <Shadow offset={[0, 5]} >

            <TouchableOpacity
                onPress={() => {
                    setKetType("time_Bar_Details")
                    setIsVisible(true)
                }}
                style={{
                    // height: '100%',
                    // width: '100%',
                    backgroundColor: '#FFA500',
                    paddingRight: 10,
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
                        paddingLeft: 14
                        // width: '50%'
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

                        text={`${handelConvertDate("time", item?.end_date)} ${handelConvertDate("time", item?.end_date)}`}
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
                        setKetType("Clamim_Drink")
                        setIsVisible(true)
                    }}
                    style={{
                        borderRightColor: "#FFA500",
                        borderRightWidth: 12,
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isDarkTheme ? "#1F1F1F" : "#FFFFFF"
                    }}
                >

                    <AddIcon />
                </TouchableOpacity>
            </TouchableOpacity>
            {renderModal()}
        </Shadow>

    );
};

//---------- export component

export default DrinkDetailTile;

