//----------imports

// react
import React, { useContext } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

// style
import { BLACK } from "../constants/Colors";

// image and icon
import { darkSplash, Temp } from "../../constants/Images";
import FeaturedRedIcon from "../../Assets/Icons/FeaturedRedIcon";

// context
import ContextHelper from "../../ContextHooks/ContextHelper";

// common
import CustomView from "../CustomView";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";

//---------- main components

const ClainDrinkTile = (props) => {

    //---------- state, veriable, context and hooks
    let data = props?.item || {}
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

    //---------- Main View

    return (
        <>
            {
                props?.isFeatured &&
                <CustomView
                    style={{
                        position: 'absolute',
                        top: 23,
                        right: 10,
                        zIndex: 100
                    }}
                >

                    <FeaturedRedIcon />
                </CustomView>
            }

            <CustomView
                style={{
                    borderRadius: 20,
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    borderWidth: isDarkTheme ? 1 : 0,
                    borderColor: '#fff'
                }}
            >
                <ImageBackground
                    source={Temp}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                        justifyContent: "center"
                    }}
                >

                    <CustomView
                        style={{
                            paddingTop: 27,
                            paddingLeft: 20,
                            paddingBottom: 30,
                            paddingRight: 15,
                        }}
                    >

                        <CustomText
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: '600',
                            }}

                            text={data?.member_special}

                        />

                        <CustomText
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: '600',

                            }}

                            text={data?.opening_hour}

                        />

                        <CustomText
                            style={{
                                color: '#fff',
                                marginBottom: 23,
                                fontSize: 18,
                                fontWeight: '400',

                            }}

                            text={data?.opening_days}

                        />

                        <CustomView
                            style={{
                                // flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >

                            <CustomView>
                                <CustomText
                                    numberOfLine={1}
                                    style={{
                                        color: '#fff',
                                        // marginVertical: 6,
                                        fontSize: 20,
                                        width: '80%',
                                        fontWeight: 'bold',

                                    }}

                                    text={data?.business_title}

                                />
                                <CustomText
                                    style={{
                                        color: '#fff',
                                        fontWeight: '400',
                                        fontSize: 18,

                                    }}
                                    text={data?.business_text?.length >= 22
                                        ? `${data?.business_text.substring(0, 22)}...`
                                        :
                                        data?.business_text}

                                />
                            </CustomView>

                            <CustomView
                                style={{
                                    // width: '30%'
                                    marginLeft: 2

                                }}
                            >

                                <CustomButton
                                    paddingHorizontal={10}
                                    // borderRadius={20}
                                    title={'CLAIM DRINK'}
                                    fontWeight={"500"}
                                    fontSize={16}
                                />
                            </CustomView>

                        </CustomView>
                    </CustomView>

                </ImageBackground>
            </CustomView>
        </>

    );
};

//---------- export component

export default ClainDrinkTile;

