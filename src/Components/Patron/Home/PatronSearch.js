// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { ScrollView, Dimensions, FlatList, TouchableOpacity } from "react-native";

// common
import CustomView from "../../../Common/CustomView";
import ContextHelper from '../../../ContextHooks/ContextHelper';
import Frame from "../../../Common/Frame";
import CustomTextInput from "../../../Common/CustomTextInput";
import CustomText from "../../../Common/CustomText";


// images and icon
import SearchIconSearch from "../../../assets/Icons/SearchIconSearch";
import ArrowIcon from "../../../assets/Icons/ArrowIcon";
import { Shadow } from "react-native-shadow-2";
import CrossYellow from "../../../assets/Icons/CrossYellow";
import AddFilterIcon from "../../../assets/Icons/AddFilterIcon";
import CustomCheckBox from "../../../Common/CustomCheckBox";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import ModalContainer from "../../../Common/ModalContainer";
// constants
const windowHeight = Dimensions.get('window').height;

//---------- main component

const PatronFavorites = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  const [isVisible, setIsVisible] = useState(false);

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


  //---------- life cycles

  useEffect(() => {

  }, [])

  //---------- render helper

  const renderFlatList = (data, renderFunction, isHorizontal = false, numColumns) => {

    return (
      <>

        <FlatList
          style={{
            paddingHorizontal: 20,

          }}
          horizontal={isHorizontal}
          numColumns={numColumns}
          // scrollEnabled={false}
          data={data}
          renderItem={renderFunction}
          keyExtractor={item => item.id}
        />
      </>
    )
  }
  const renderContent = ({ item, index }) => {

    return (
      <React.Fragment
        key={index}
      >
        <CustomText
          style={{
            fontSize: 23,
            fontWeight: '400',
            color: isDarkTheme ? '#FFFFFF' : '#747474',
            marginVertical: 20
          }}
          text={item?.name}
        />
        <CustomView style={{ width: '90%', height: 1, backgroundColor: isDarkTheme ? "#FFFFFF" : '#C7C7C7' }} />
      </React.Fragment>
    )
  }

  const renderRecentSerch = ({ item, index }) => {

    return (
      <>
        {
          index === 0 &&
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true)
            }}
            style={{
              marginLeft: -20,
            }}
          >
            <CrossYellow stopColor={isDarkTheme ? "#000" : "#fff"} />
          </TouchableOpacity>
        }
        <CustomText
          style={{
            fontSize: 20,
            fontWeight: '400',
            color: isDarkTheme ? '#FFFFFF' : '#747474',
            marginHorizontal: 5,
            marginVertical: 4,
            textAlign: "center",
            borderRadius: 10,
            borderColor: "#D7D7D7",
            borderWidth: 1,
            backgroundColor: isDarkTheme ? "#1F1F1F" : null,
            width: 102,
            height: 30,
            marginRight: (recent_data.length - 1) === index ? 50 : 5
          }}
          text={item.name}
        />
      </>
    )
  }

  const renderLocationAndDate = () => {
    return (
      <React.Fragment>
        <CustomView
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -11,
            alignItems: "center"
          }}>

          <CustomText
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: isDarkTheme ? '#FFFFFF' : '#747474',
              paddingHorizontal: 30,
              marginHorizontal: 10,
              borderRadius: 13,
              borderColor: "#D7D7D7",
              borderWidth: 1,
            }}
            text={"Location"}
          />
          <CustomText
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: isDarkTheme ? '#FFFFFF' : '#747474',
              paddingHorizontal: 50,
              borderRadius: 13,
              borderColor: "#D7D7D7",
              borderWidth: 1,

            }}
            text={"Date"}
          />

        </CustomView>
        <CustomView
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
            alignItems: "center"
          }}>

          <AddFilterIcon stroke={"#FFA500"} fill={"#fff"} />
          <CustomText
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: isDarkTheme ? '#FFFFFF' : '#747474',
              paddingRight: 60,
              marginHorizontal: 9
            }}
            text={"Filter"}
          />
          <CustomText
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: isDarkTheme ? '#FFFFFF' : '#747474',
              margingLeft: 70,

            }}
            text={"happening Now"}
          />

        </CustomView>
      </React.Fragment>

    )
  }

  const renderChekBox = ({ item, index }) => {
    return (

      index <= 1 ?
        <CustomView
          style={{
            // marginLeft: -20,
            alignItems: 'center',

          }}
        >
          <CustomText
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: isDarkTheme ? '#FFFFFF' : '#FFA500',
              // marginHorizontal: 30,
              alignItems: 'space-between',
              width: "100%"

            }}
            text={item.name}
          />

        </CustomView>
        :

        <CustomView
          key={index}
          style={{
            flex: 1,
            justifyContent: "space-around",
            marginVertical: 10,

          }}>


          <CustomCheckBox
            rightText={item?.name}
            rightTextColor={isDarkTheme ? "#FFFFFF" : "#747474"}
            isChecked={false}
            fontWeight={"500"}
            fontSize={15}
          />
        </CustomView>


    )
  }
  //---------- main return

  return (
    <Frame
      scrollEnabled={false}
    >
      <CustomView
        style={{
          flex: 1,
        }}
      >
        <Shadow
          style={{
            flex: 1,
            paddingVertical: 20,
          }}
        >
          <CustomView
            style={{
              flex: 1,
            }}
          >

            <CustomView
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20
              }}>

              <ArrowIcon fill={null} stroke={isDarkTheme ? "#FFFFFF" : "#747474"} />

              <CustomView style={{
                width: "100%",
                paddingHorizontal: 20
              }}>
                <CustomTextInput
                  placeholderTextColor={isDarkTheme ? "#A6A6A6" : "#747474"}
                  placeholder={'Search'}
                  borderRadius={13}
                  borderColor={isDarkTheme ? "##1F1F1F" : "#DBDBDB"}
                  backgroundColor={isDarkTheme ? "#1F1F1F" : "#fff"}
                  style={{
                    fontSize: 24,
                    fontWeight: "400"
                  }}
                  leftIcon={
                    isDarkTheme ?
                      <SearchIconSearch fill={null} stroke={"#A6A6A6"} />
                      :
                      <SearchIconSearch fill={null} stroke={"#A6A6A6"} />
                  }
                />

              </CustomView>

            </CustomView>

            <CustomView
              style={{
                height: 20
              }}
            />
            {renderLocationAndDate()}
            {renderFlatList(recent_data, renderRecentSerch, true)}

          </CustomView>
        </Shadow>

        <ScrollView
          scrollEnabled={true}
          style={{
            flex: 1
          }}
        >

          {/* {renderFlatList(CheckBox_data, renderChekBox, false, 2)} */}
          {renderFlatList(data, renderContent, false, null)}
        </ScrollView>
        <ModalContainer
          isVisible={isVisible}
          render_view_key={'affirmations'}
          content={{ title: 'Are you sure you want to clear your recent searches?', right_content: 'NO!', left_content: 'Yes!' }}
          hideModal={() => setIsVisible(!isVisible)}
        />
      </CustomView>

    </Frame>
  );
};

//---------- export component

export default PatronFavorites;


let data = [
  {
    id: 1,
    name: "American "
  },
  {
    id: 2,
    name: "Asian "
  },
  {
    id: 3,
    name: "BBQ "
  },
  {
    id: 4,
    name: "Brewery "
  },
  {
    id: 5,
    name: "Brunch "
  },
  {
    id: 6,
    name: "Caribbean "
  },
  {
    id: 7,
    name: "Comedy "
  },
  {
    id: 8,
    name: "DJ "
  },
  {
    id: 9,
    name: "dog friendly "
  },
  {
    id: 10,
    name: "happy Hour "
  },
  {
    id: 11,
    name: "hookah "
  },
  {
    id: 12,
    name: "Italian "
  },
  {
    id: 13,
    name: "karaoke "
  },
  {
    id: 14,
    name: "latin   "
  },
  {
    id: 15,
    name: "Live Music "
  },
  {
    id: 16,
    name: "Margarita’s "
  },
  {
    id: 17,
    name: "Mexican "
  },
  {
    id: 18,
    name: "Salsa "
  },
  {
    id: 19,
    name: "seafood "
  },
  {
    id: 20,
    name: "Tapas "
  },
  {
    id: 21,
    name: "tex Mex "
  },

  {
    id: 22,
    name: "trivia "
  },
  {
    id: 23,
    name: "Vegetarian "
  },
  {
    id: 24,
    name: "Winery "
  },


]

let recent_data = [
  {
    id: 1,
    name: "Cuban"
  },
  {
    id: 2,
    name: "LGQBT"
  },
  {
    id: 3,
    name: "Tequila"
  },
  {
    id: 4,
    name: "karaoke"
  },
  {
    id: 5,
    name: "singles"
  },
  {
    id: 6,
    name: "trivia"
  },
]


let CheckBox_data = [
  {
    id: -1,
    name: "(Please select up to three amenities)"
  },
  {
    id: 0,
    name: ""
  },
  {
    id: 1,
    name: "MUSIC "
  },
  {
    id: 2,
    name: "ROOFTOP "
  },
  {
    id: 3,
    name: "FREE WIFI "
  },
  {
    id: 4,
    name: "BRICK OVEN "
  },
  {
    id: 5,
    name: "WATER VIEW "
  },
  {
    id: 6,
    name: "TAPAS "
  },
  {
    id: 7,
    name: "SMOKING "
  },
  {
    id: 8,
    name: "VALET PARKING "
  },
  {
    id: 9,
    name: "DANCING "
  },
  {
    id: 10,
    name: "OUTDOOR SEATING "
  },
  {
    id: 11,
    name: "PET FRIENDLY "
  },
  {
    id: 12,
    name: "WHEELCHAIR ACCESSIBLE "
  },
]