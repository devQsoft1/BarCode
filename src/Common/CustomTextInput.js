//---------- imports

// react
import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

// style
import { BLACK, TEXTGRAY, WHITE } from '../constants/Colors'
import AuthStyles from '../style/AuthStyles'
import TextStyles from '../style/TextStyles'

// context
import ContextHelper from "../ContextHooks/ContextHelper";

//---------- main components

const CustomTextInput = ({
  style,
  placeholder,
  onChangeText,
  keyboardType,
  maxLength,
  multiline,
  secureTextEntry,
  autoCapitalize,
  value,
  defaultValue,
  placeholderTextColor,
  editable,
  numberOfLines,
  textAlignVertical,
  borderRadius,
  rightIcon,
  iconClick,
  borderColor,
  marginTop,
  leftIcon,
  padding,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  fontSize,
  height,
}) => {

  //---------- state and context

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

  //---------- main view

  return (
    <View
      style={[
        AuthStyles.textInputView,
        { borderRadius: borderRadius ? borderRadius : 30, },
        { flexDirection: 'row', alignContent: 'flex-end', height: numberOfLines > 1 ? 28 * numberOfLines : 50 },
        { borderColor: borderColor ? borderColor : isDarkTheme ? WHITE : "#DBDBDB", marginTop: marginTop ? marginTop : 0 },
        { paddingHorizontal: paddingHorizontal ? paddingHorizontal : 20 },
        { paddingVertical: paddingVertical ? paddingVertical : 0 },
        { backgroundColor: backgroundColor ? backgroundColor : "#fff" },
        {height:height}

      ]}
    >

      {
        !!leftIcon &&
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: textAlignVertical === 'top' ? 'flex-start' : numberOfLines > 1 ? 'flex-start' : 'center',
            marginTop: textAlignVertical === 'top' ? 10 : numberOfLines > 1 ? 10 : 0,
            marginRight: 10
          }}
          onPress={() => {
            iconClick && iconClick()
          }}
        >
          {
            leftIcon
          }
        </TouchableOpacity>
      }

      <TextInput
        style={[{ color: isDarkTheme ? '#fff' : '#000', flex: 1, fontWeight: '400', fontSize: fontSize ? fontSize : 24, }, style,]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor ? placeholderTextColor : isDarkTheme ? WHITE : "#C7C7C7"}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        defaultValue={defaultValue}
        editable={editable}
        // multiline={multiline}
        multiline={multiline || textAlignVertical ? true : numberOfLines > 1 ? true : false}
        numberOfLines={numberOfLines ? numberOfLines : 1}
        textAlignVertical={textAlignVertical ? textAlignVertical : numberOfLines > 1 ? 'top' : 'center'}

      />

      {
        !!rightIcon &&
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: textAlignVertical === 'top' ? 'flex-start' : numberOfLines > 1 ? 'flex-start' : 'center',
            marginTop: textAlignVertical === 'top' ? 10 : numberOfLines > 1 ? 10 : 0
          }}
          onPress={() => {
            iconClick && iconClick()
          }}
        >
          {
            rightIcon
          }
        </TouchableOpacity>
      }

    </View>
  )
}

//---------- export component

export default CustomTextInput;
