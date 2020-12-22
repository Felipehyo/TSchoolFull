import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import Events from '../Events/index';
import EventDetails from '../EventDetails/index';

function HomeScreen() {
    //import Events from '../Events/index';
    return (<Events />);
}

function eventDetails() {
    return (<EventDetails />);
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ListEvents() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
      </View>
    );
}

function Childs() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Childs!</Text>
      </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Teste({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <TouchableOpacity onPress={() => ''} style={{marginTop: 50}}><Text>Teste</Text></TouchableOpacity>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let typeIcon;
        
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        typeIcon = 'MaterialCommunityIcons';
                    } else if (route.name === 'Eventos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        typeIcon = 'MaterialCommunityIcons';
                    } else if (route.name === 'Filhos') {
                        iconName = focused ? 'person' : 'person-outline';
                        typeIcon = 'MaterialIcons';
                    } else if (route.name === 'Configurações') {
                        iconName = focused ? 'settings' : 'settings-outline';
                        typeIcon = 'MaterialCommunityIcons';
                    }
        
                    // You can return any component that you like here!
                    if (typeIcon === 'MaterialCommunityIcons') {
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    } else if (typeIcon === 'MaterialIcons') {
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    }
                    
                },
                })}
                tabBarOptions={{
                    activeTintColor: '#FFB92D',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Eventos" component={ListEvents} />
                <Tab.Screen name="Filhos" component={Childs} />
                <Tab.Screen name="Configurações" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}