import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LogoTitle, Button, Image } from 'react-native';

const AppStack = createStackNavigator();

import logoHorizontal from '../assets/logoHorizontal.png';

import Teste from '../Pages/Teste';
import Events from '../Pages/Events';
import EventDetails from '../Pages/EventDetails';
import AuthEvent from '../Pages/AuhtEvent';

export default function Routes() {
    return <NavigationContainer>
        <AppStack.Navigator initialRouteName="Events"
            headerMode="screen"
            screenOptions={{
            headerShown: false,
            title: '',
            headerTintColor: '',
            headerLeft: () => (
                <Image
                    source={logoHorizontal}
                    style={{  width: 130,
                        height: 40,
                        resizeMode: 'stretch', 
                        marginLeft: 15
                    }}
                /> ),
        }}
        >
            {/* <AppStack.Screen name="Teste" component={Teste} /> */}
            <AppStack.Screen name="Events" component={Events} />
            <AppStack.Screen name="EventDetails" screenOptions={{ headerShown: true }} component={EventDetails} /> 
            <AppStack.Screen name="AuthEvent" component={AuthEvent} /> 
        </AppStack.Navigator>
    </NavigationContainer>
}