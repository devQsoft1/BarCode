//---------- imports

// react
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//----- components
// patron
import PatronLogin from "../../Components/Patron/Auth/PatronLogin";
import PatronSignup from '../../Components/Patron/Auth/PatronSignup';
import ProfileImagePatron from '../../Components/Patron/Auth/ProfileImagePatron';
import PatronFreeTrial from '../../Components/Patron/Auth/PatronFreeTrial';
import FAQ from '../../Components/CommonPatronAndOwner/FAQ';

// business owner
import BusinessDetailScreen from '../../Components/Owner/Auth/BusinessDetailScreen';

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function OwnerAuthNavigation(props) {

    //---------- return main view

    return (
        <Stack.Navigator
            initialRouteName={'PatronLogin'}
            options={{ headerShown: false }}
        >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="PatronLogin" component={PatronLogin} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="PatronSignup" component={PatronSignup} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="ProfileImagePatron" component={ProfileImagePatron} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="PatronFreeTrial" component={PatronFreeTrial} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="FAQ" component={FAQ} />


            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="BusinessDetailScreen" component={BusinessDetailScreen} />








        </Stack.Navigator>
    )
}

//---------- export component

export default OwnerAuthNavigation