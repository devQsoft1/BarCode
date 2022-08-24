//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text, Image } from "react-native";

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

        <CustomView
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#FFA500',
                paddingRight: 10,
                flexDirection: 'row',
            }}
        >

            <CustomView
                style={{
                    backgroundColor: '#FFA500',
                    padding: 10,
                    width: '30%',

                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CustomText
                    style={{
                        color: isDarkTheme ? "#fff" : '#000',
                        fontSize: 14,
                        fontWeight: '600',
                        alignSelf: 'center'
                    }}

                    text={"13TH OCTOBER"}
                />

            </CustomView>


            <CustomView
                style={{
                    backgroundColor: isDarkTheme ? '#000' : '#EAE8E8',
                    padding: 10,
                    width: '50%'
                }}
            >
                <CustomText
                    style={{
                        color: isDarkTheme ? "#fff" : '#000',

                        fontSize: 14,
                        fontWeight: '500',
                    }}

                    text={"$10 DRINKS ALL DAY"}
                />

                <CustomText
                    style={{
                        color: isDarkTheme ? "#fff" : '#000',

                        fontSize: 14,
                        fontWeight: '500',
                    }}

                    text={"8 AM - 2 PM"}
                />

                <CustomText
                    style={{
                        color: '#585858',
                        fontSize: 10,
                        fontWeight: '500',
                    }}

                    text={"FREE APPETIZER FOR ALL"}
                />
                <CustomText
                    style={{
                        color: '#585858',
                        fontSize: 10,
                        fontWeight: '500',
                    }}

                    text={"BROCODE MENBERS"}
                />

            </CustomView>

            <CustomView
                style={{
                    backgroundColor: isDarkTheme ? '#000' : '#EAE8E8',
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center'
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

    );
};

//---------- export component

export default DrinkDetailTile;

