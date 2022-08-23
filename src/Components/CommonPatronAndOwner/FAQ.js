//---------- imports

// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { FlatList, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";

// common
import TextStyles from "../../style/TextStyles";
import CustomText from "../../Common/CustomText";
import Frame from "../../Common/Frame";
import ContextHelper from '../../ContextHooks/ContextHelper'
import CustomView from "../../Common/CustomView";
import CustomBorderButton from "../../Common/CustomBorderButton";
import BottomModalContainer from "../../Common/BottomModalContainer";

// images and icon
import { Cross } from "../../constants/Images";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const FAQ = ({ navigation }) => {

    //---------- state, veriable, context and hooks
    const [isVisible, setIsVisible] = useState(false);

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

    //---------- render content

    const renderFlatList = (data) => {

        return (
            <FlatList
                data={data}
                renderItem={renderContent}
                keyExtractor={item => item.id}
            />
        )
    }

    const renderContent = ({ item, index }) => {

        return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    setIsVisible(true)
                }}
                style={{
                    marginTop: 30
                }}
            >
                <CustomText
                    text={item.title}
                    style={{
                        color: '#9A9A9A',
                        fontSize: 28,
                        fontWeight: '700',
                    }}
                />

                <View
                    style={{
                        marginTop: 30,
                        backgroundColor: '#B3B3B3',
                        height: 1,
                        width: '80%',
                    }}
                />

            </TouchableOpacity>
        )
    }

    const renderModal = () => {

        return (
            <BottomModalContainer
                backgroundColor={isDarkTheme ? '#000' : '#FFF'}
                navigation={navigation}
                render_view_key={'faq'}
                isVisible={isVisible}
                hideModal={() => setIsVisible(!isVisible)}
            />
        )
    }

    //---------- main return

    return (
        <Frame>

            {
                renderModal()
            }

            <CustomView
                style={{
                    flex: 1,
                    paddingBottom: 50,
                    paddingHorizontal: 20,
                    paddingTop: 20
                }}
            >
                <CustomView
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >

                    <CustomText
                        text={'FAQ'}
                        style={{
                            color: '#FFA500',
                            fontSize: 48,
                            fontWeight: '700',
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            alert('in progress...')
                        }}
                    >
                        <Image
                            source={Cross}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>

                </CustomView>

                {
                    renderFlatList(patron_faq_data)
                }

            </CustomView>

        </Frame>
    );
};

//---------- export component

export default FAQ;

//---------- contants data

const patron_faq_data = [
    {
        id: 1,
        title: "WHAT IS BARCODE?",
        content: {
            title: "WHAT IS BARCODE?",
            body: "BARCODE IS YOU GO TO APP TO FIND WHAT IS HAPPENING AROUND YOU! MEMBERS RECEIVE 1 FREE DRINK EVERYDAY AS WELL AS EXCLUSIVE SPECIALS AT PARTICIPATING BARS AND RESTAURANTS, ALL IN ONE EAZY TO FIND PLACE!"
        }
    },
    {
        id: 2,
        title: "HOW MUCH IS A MEMBERSHIP?",
        content: {
            title: "HOW MUCH IS A MEMBERSHIP?",
            body: "MONTHLY $9.99 YEARLY $99.99 (20% SAVINGS)",
            body1: "AS A BARCODE MENBER YOU’LL RECEIVE A FREE DRINK EVERYDAY AS WELL AS BARCODE MEMDER EXCLUSIVE SPECIALS FROM OUR PARTICIPATING BARCODE PARTNERS.",
        }
    },
    {
        id: 3,
        title: "HOW CAN I CANCEL?",
        content: {
            title: "HOW CAN I CANCEL?",
            body: "THERE IS NO CONTRACT, YOU CAN SIMPLY CANCEL 24 HOURS BEFORE YOUR RENEWAL THROUGH YOUR APP STORE. YOU CAN ALSO EASILY RESTORE YOU MEMBERSHIP RIGHT FROM THE BARCODE APP."
        }
    },
    {
        id: 4,
        title: "WHAT KIND OF DRINKS CAN I GET FOR FREE?",
        content: {
            title: "WHAT KIND OF DRINKS CAN I GET FOR FREE?",
            body: "OUR BARCODE PARTNERS WILL LIST WHAT DRINKS THEY CHOOSE TO OFFERS OUR MENBERS."
        }
    },
    {
        id: 5,
        title: "HOW COME THERE ARE NO PLACES NEAR ME?",
        content: {
            title: "HOW COME THERE ARE NO PLACES NEAR ME?",
            body: "WE ARE CONSTANTLY ADDING NEW BARS AND RESTAURANTS TO OUR PALTFORM EVERYDAY. PLEASE FEEL FREE TO LET MANAGEMENT KNOW YOU’D LIKE THEIR ESTABLISHMENT TO JOIN OR PLEASE LET US KNOW SO OUR TEAM CAN CONTACT THEM. THANK YOU FOR HELPING MAKE BARCODE EVEN BETTER.",
            body1: "SUPPORT@IGOTMYBARCODE.COM"
        }
    },
]
