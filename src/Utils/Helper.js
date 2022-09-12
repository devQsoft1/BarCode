import React from "react";
import { Permission ,PermissionsAndroid } from "react-native";
import { launchCamera,launchImageLibrary } from "react-native-image-picker";

  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from galery' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


  // --------- select from gallery
 export const handleImagePicker = () => {

    launchImageLibrary(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
       console.log(res.assets[0].uri);
      }
    });
  }


   // ---------- select from Camra
 export  const handleLunchCamra = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message: "App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission given");

          launchCamera(options, (res) => {

            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
              alert(res.customButton);
            } else {
              console.log("responce=>>>>>>>>>", res.assets[0].uri)
            }
          });
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
  }