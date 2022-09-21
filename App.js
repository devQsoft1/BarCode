//---------- imports

// react
import React, { useEffect, useState, useContext } from "react";
import { LogBox, SafeAreaView, StatusBar, View, Text, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/createStore";
import { PersistGate } from "redux-persist/integration/react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from "./src/navigation/StackNavigation";

// context
import { GlobalContextProvide } from './src/ContextHooks/ThemeContext'

// helper
import NavigationService from "./src/navigation/NavigationService";
import ErrorMessage from "./src/Common/Errors";
import CustomView from "./src/Common/CustomView";

//---------- context

//---------- main app / component

const App = () => {

  //---------- state

  const [loading, setLoading] = useState(false);

  //---------- life cycle

  useEffect(() => {

    // ignore logs
    LogBox.ignoreAllLogs();
  }, []);

  //---------- user's action

  const handleLoading = (isLoading) => {

    if (isLoading) {

      setLoading(true);

    } else {

      setLoading(false);
    }

  }

  //---------- return main view

  console.log('------ App.js -----------', loading);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalContextProvide>
          <NavigationContainer
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          >

            <StatusBar />
            <StackNaviagtion calll_back_for_loading={handleLoading} />
            <ErrorMessage />

            {
              loading &&
              <CustomView
                style={{
                  position: 'absolute',
                  zIndex: 10000,
                  elevation: 1000,
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',

                }}
              >
                <ActivityIndicator size={'large'} color={'#000'} />
              </CustomView>
            }

          </NavigationContainer>
        </GlobalContextProvide>
      </PersistGate>
    </Provider>
  );
};

//---------- export component

export default App;
