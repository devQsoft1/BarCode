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
    const [faqData, setFaqData] = useState(undefined);

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
                    setFaqData(item)
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

        if (!!faqData) {

            return (
                <BottomModalContainer
                    faqData={faqData?.content}
                    backgroundColor={isDarkTheme ? '#000' : '#FFF'}
                    paddingBottom={faqData?.content?.isPadding ? 400 : 50}
                    navigation={navigation}
                    render_view_key={'faq'}
                    isVisible={isVisible}
                    hideModal={() => setIsVisible(!isVisible)}
                />
            )
        }
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
                            navigation.navigate('PatronTabNavigation')
                        }}
                    >
                        <Image
                            source={Cross}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>

                </CustomView>

                {
                    // renderFlatList(patron_faq_data)
                    renderFlatList(owner_faq_data)
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
            body1: "SUPPORT@IGOTMYBARCODE.COM",
            isLink: true
        }
    },
]


const owner_faq_data = [
    {
        id: 1,
        title: "WHAT CAN BRACODE DO FOR YOUR BUSINESS?",
        content: {
            title: "WHAT CAN BRACODE DO FOR YOUR BUSINESS?",
            body: "Barcode makes it easy for you to get your specials and events in front of customers that are looking for what you’re offering.",
            body1: "Our marketing app is different than posting on social media because with our app customers will find you right at the time they’re looking for what you offer. Our service is less expensive then print publications and with our proven ROI it’s one of the best investments you can make in your business."
        }
    },
    {
        id: 2,
        title: "HOW MUCH IS A MEMBERSHIP?",
        content: {
            title: "HOW MUCH IS A MEMBERSHIP?",
            body: "Monthly $19.99 or yearly $199 and one free drink of your choosing to our members.",
            body1: "You’ll receive a  promotional free trial , there are no contracts, you cancel anytime up to 24 hours before your scheduled renewal date."
        }
    },
    {
        id: 3,
        title: "WHY IS THERE A CHARGE TO USE BARCODE FOR MY BUSINESS?",
        content: {
            title: "WHY IS THERE A CHARGE TO USE BARCODE FOR MY BUSINESS?",
            body: "Barcode makes it easy for you to get your specials and events in front of customers that are looking for what you’re offering.",
            body1: "Our marketing app is different than posting on social media because with our app customers will find you right at the time they’re looking for what you offer. Our service is less expensive then print publications and with our proven ROI it’s one of the best investments you can make in your business."
        }
    },
    {
        id: 4,
        title: "WHAT KIND OF DRINKS SHOULD I OFFER?",
        content: {
            title: "WHAT KIND OF DRINKS SHOULD I OFFER?",
            body: "It’s completely up to you but we suggest a selection of house liquor, wine & beer. You may want to include a BarCode members special drink as well. You want to entice customers to come in so be creative.",
        }
    },
    {
        id: 5,
        title: "WHAT ARE BARCODE EXCLUSIVE DEALS?",
        content: {
            title: "WHAT ARE BARCODE EXCLUSIVE DEALS?",
            body: "Barcode makes it easy for you to get your specials and events in front of customers that are looking for what you’re offering.",
            body1: "Our marketing app is different than posting on social media because with our app customers will find you right at the time they’re looking for what you offer. Our service is less expensive then print publications and with our proven ROI it’s one of the best investments you can make in your business."
        }
    },
    {
        id: 6,
        title: "WHAT IS THE BEST WAY TO USE BARCODE FOR MY BUSINESS?",
        content: {
            title: "WHAT IS THE BEST WAY TO USE BARCODE FOR MY BUSINESS?",
            body: "We suggest you add, change or update often. Some things are staples (like happy hour) but you could add a special drink of the day for that week. Customers use Barcode to stay informed and to use the information you post to decide if that’s what they’re in the mood for so keep things current and be creative!",
        }
    },
    {
        id: 7,
        title: "RETURN ON INVESTMENT",
        content: {
            title: "RETURN ON INVESTMENT",
            body: "After your free trial you will be charged $19.99 per month, or $199.00 annually and offer a free drink of your choice to BarCode members. \n \n \n Here’s a simple example of your potential ROI. \n \n \n 4 customers a month that spend $20 each will give you a profit (minus your cost) of $56 a month, yearly $672, word of mouth and return of customer, over $3,000.\n \n \n  15 customers at $20 each is $300 per month and $3,600 per year, word of mouth & customer return over $18,000 \n \n \n These are VERY conservative numbers. BarCode was created by industry professionals to be an easy tool to generate a lot more income for our partners.",
        }
    },
    {
        id: 8,
        title: "HOW CAN I CONTACT BARCODE WITH QUESTION OR COMMENTS?",
        content: {
            title: "HOW CAN I CONTACT BARCODE WITH QUESTION OR COMMENTS?",
            body: "support@igotmybarcode.com",
            isPadding: true,
        }
    },
    {
        id: 9,
        title: "WILL I BE ABLE TO SEND OUT NOTIFICATIONS?",
        content: {
            title: "WILL I BE ABLE TO SEND OUT NOTIFICATIONS?",
            body: "Yes we will be adding that feature soon. Customers are now able to favorite your business so when they check their favorites list they will see all that you offer. This is why you should take at least one day a week (10 minutes we know you’re busy) to add change or update info and keep customers interested.",
        }
    },
    {
        id: 10,
        title: "WHAT ARE MY BENEFITS TO USING BARCODE INSTEAD OF SOCIAL MEDIA?",
        content: {
            title: "WHAT ARE MY BENEFITS TO USING BARCODE INSTEAD OF SOCIAL MEDIA?",
            body: "BarCode was developed by bar and Restaraunt industry people that understand what it takes to keep “cheeks in seats” and not everyone has every form of social media. Customers might see what your posting for the weekend but then forget about it or have to look up a lot of different places to see what’s going on and because of the time it takes they may just look up three places and just pick one. BarCode customers are on the app looking for what they want at the time they want it, so if you offer margaritas and that’s what they want, you’ll be right in front of them as they choose where to go.",
        }
    },
    {
        id: 11,
        title: "HOW SHOULD I PREPARE TO BECOME A BARCODE MEMBER?",
        content: {
            title: "HOW SHOULD I PREPARE TO BECOME A BARCODE MEMBER?",
            body: "Inform your staff (especially bartenders) about the drinks offered and any other BarCode member specials you want to offer. Let them know to be very welcoming so customers don’t feel awkward showing the app for their free drink. Make them feel appreciated for choosing your business.",
        }
    },
    {
        id: 12,
        title: "DOES BARCODE HAVE ANYTHING MARKET MATERIALS?",
        content: {
            title: "DOES BARCODE HAVE ANYTHING MARKET MATERIALS?",
            body: "Yes! This is your bragging page. Take advantage of letting your customers know how GREAT your business is and why they should come to your place! Showcase your business with pictures of food, drinks, and fun! Be creative and offer an exclusive deal to Barcode members, they’ll appreciate that, stay longer and spend More!",
        }
    },
    {
        id: 13,
        title: "HOW DOES BARCODE GET CUSTOMERS TO JOIN?",
        content: {
            title: "HOW DOES BARCODE GET CUSTOMERS TO JOIN?",
            body: "BarCode does online marketing, direct marketing campaigns, on-site marketing events, print and TV, and co-branding. We have a whole team working on building our client base. As we grow we will continue to add areas and features to the app, all to bring customers through your doors.",
        }
    },
    {
        id: 14,
        title: "WHERE IS BARCODE AVAILABLE?",
        content: {
            title: "WHERE IS BARCODE AVAILABLE?",
            body: "We have launched in Florida but will be available nationwide as we grow. Be the 1st in your area to offer BarCode and beat the competition!",
        }
    },
    {
        id: 15,
        title: "HOW DO I CANCEL?",
        content: {
            title: "HOW DO I CANCEL?",
            body: "There is no contract, you can simply cancel anytime 24 hours before your monthly/yearly renewal right from your App Store.",
        }
    },
]