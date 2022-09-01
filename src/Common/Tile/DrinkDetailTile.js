//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text, Image, Dimensions } from "react-native";
import { Shadow } from 'react-native-shadow-2'

// style
import { BLACK } from "../constants/Colors";
import { addIcon } from "../../constants/Images";

// icon
import AddIcon from '../../Assets/Icons/AddIcon'

// context
import ContextHelper from "../../ContextHooks/ContextHelper";

// common
import CustomView from "../CustomView";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";


const windowWidth = Dimensions.get('window').width;
console.log('windowWidth', windowWidth)
//---------- main components

const DrinkDetailTile = (props) => {

    //---------- state, veriable, context and hooks
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

    //---------- Main View

    return (
        <Shadow offset={[0, 5]} >

            <CustomView
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
                            fontWeight: '400',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}
                        text={"13TH "}
                    />
                    <CustomText
                        style={{
                            color: isDarkTheme ? "#FFFFFF" : '#FFFFFF',
                            fontSize: 16,
                            fontWeight: '400',
                            alignSelf: 'center',
                            textAlign: "center"
                        }}
                        text={"OCTOBER"}
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
                            fontSize: 18,
                            fontWeight: '400',
                            // lineHeight:20
                        }}

                        text={"$10 DRINKS ALL DAY"}
                    />

                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 16,
                            fontWeight: '400',
                        }}

                        text={"8 AM - 2 PM"}
                    />

                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 12,
                            fontWeight: '400',
                        }}

                        text={"FREE APPETIZER FOR ALL"}
                    />
                    <CustomText
                        style={{
                            color: isDarkTheme ? "#fff" : '#CCCCCC',
                            fontSize: 12,
                            fontWeight: '400',
                        }}

                        text={"BROCODE MENBERS"}
                    />

                </CustomView>

                <CustomView
                    style={{
                        borderRightColor: "#FFA500",
                        borderRightWidth: 12,
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isDarkTheme? "#1F1F1F":"#FFFFFF"
                    }}
                >

                    <AddIcon />

                    {/* <Image
                    style={{ marginRight: 10 }}
                    source={addIcon}
                    resizeMode='cover'
                /> */}

                </CustomView>
            </CustomView>
        </Shadow>

    );
};

//---------- export component

export default DrinkDetailTile;

