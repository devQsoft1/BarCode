//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

// style
import { BLACK } from "../constants/Colors";
import { darkSplash } from "../../constants/Images";


// context
import ContextHelper from "../../ContextHooks/ContextHelper";

// common
import CustomView from "../CustomView";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";

//---------- main components

const ClainDrinkTile = (props) => {

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
                borderRadius: 20,
                height: '100%',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <ImageBackground
                source={{ uri: 'https://i.picsum.photos/id/940/200/300.jpg?hmac=H13hOo0ZH4iX7fShH_p1dNg8gyZKXZIUNFfR74kIO7k' }}
                resizeMode="cover"
                style={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                }}
            >

                <CustomView
                    style={{
                        paddingTop: 27,
                        paddingLeft: 25,
                        paddingBottom: 20,
                        paddingRight: 15
                    }}
                >

                    <CustomText
                        style={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}

                        text={"$10 DRINKS ALL DAY"}

                    />

                    <CustomText
                        style={{
                            color: '#fff',
                            fontSize: 18

                        }}

                        text={"8 AM - 2 PM"}

                    />

                    <CustomText
                        style={{
                            color: '#fff',
                            marginBottom: 20,
                            fontSize: 18

                        }}

                        text={"MONDAY OCT 13"}

                    />

                    <CustomView
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >

                        <CustomView>
                            <CustomText
                                style={{
                                    color: '#fff',
                                    marginVertical: 5,
                                    fontSize: 24

                                }}

                                text={"BROCODE BAR"}

                            />
                            <CustomText
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}

                                text={"5 MILES BRIDGEPORT"}

                            />
                        </CustomView>

                        <CustomButton
                            title={'CLAIM DRINK'}
                        />

                    </CustomView>
                </CustomView>

            </ImageBackground>
        </CustomView>

    );
};

//---------- export component

export default ClainDrinkTile;

