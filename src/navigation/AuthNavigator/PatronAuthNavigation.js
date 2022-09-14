//---------- imports

// react
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//----- components
// patron
import AuthLogin from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/AuthLogin";
import AuthSignup from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/AuthSignup";
import ProfileImageAuth from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/ProfileImageAuth";
import AuthFreeTrial from "../../Components/CommonPatronAndOwner/PatronAndOwnerAuth/AuthFreeTrial";
import FAQ from '../../Components/CommonPatronAndOwner/FAQ';
import PatronOnboarding from "../../Components/Onboarding/PatronOnboarding/PatronOnboarding";

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function PatronAuthNavigation(props) {

    //---------- return main view

    console.log('==================================')
    console.log('props :', props)
    console.log('==================================')


    return (
        <Stack.Navigator
            initialRouteName={'AuthLogin'}
            options={{ headerShown: false }}
        >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="AuthLogin" component={AuthLogin} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="AuthSignup" component={AuthSignup} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="ProfileImageAuth" component={ProfileImageAuth} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="AuthFreeTrial" component={AuthFreeTrial} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="FAQ" component={FAQ} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="PatronOnboarding" component={PatronOnboarding} />

        </Stack.Navigator>
    )
}

//---------- export component

export default PatronAuthNavigation