import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import AuthContext from '../../contexts/auth';

import logoHorizontal from '../../assets/logoHorizontal.png';
import iconPendent from '../../assets/iconPendent.png';
import iconAuthorizated from '../../assets/iconAuthorized.png';

import styles from './styles';

/*Imagens staticas para fins de teste*/
import iconTest from '../../assets/museu.png';
import progStatic from '../../assets/progStatic.png';

import api from '../../services/api';

const Tab = createBottomTabNavigator();

export default function Events() {
    const navigation = useNavigation();
    const [ events , setEvents ] = useState([]);
    const [ studentLoged , setStudentLoged ] = useState();

    navigation.setOptions({  
        headerShown: true,
        headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
            <Text
                source={logoHorizontal}
                style={{  
                    marginRight: 5
                }}
            ></Text>
            <MaterialIcons name="person-outline" size={24}/>
        </View> ) 
    });

    /*---------------------------------------------------------------*/
    const {signOut} = useContext(AuthContext);

    async function handleSignOut() {
        //email, password
        signOut();
    }
    /*---------------------------------------------------------------*/

    function navigateToEventDetail(event) {
        navigation.navigate('EventDetails', { event } );
    };

    async function loadEvents(){
        
        const student = JSON.parse(await AsyncStorage.getItem('@Tschool:studentLoged'));

        const response = await api.get('/eventbystudatails', {
            headers: { authorization: student.id_res, authstud: student.id }
        });

        setEvents(response.data);
        // console.log(response.data);
        setStudentLoged(student.name_student);
    };

    useEffect( () => {
        loadEvents();
    }, []);


    function alterIcon(situation) {
        if(situation === "Autorizado") {
            return <Image style={styles.iconPendent} source={iconAuthorizated} />;
        } else {
            return <Image style={styles.iconPendent} source={iconPendent} />
        }
    }

    function background(situation) {
        if(situation === "Autorizado") {
            return { backgroundColor: "#3DB39E" };
        } else {
            return { backgroundColor: "#FFB92D" };
        }
    }

    //const teste = <Image style={styles.iconPendent} source={iconAuthorizated} />
    
    return <View style={styles.container}>
        {/* <Button title="Sign Out" onPress={handleSignOut}/> */}

        <Text style={styles.title}>Programações do Mês</Text>
        <View style={styles.progContainer}>
            <Image source={progStatic} style={styles.progImage}></Image>
            <View style={styles.progTextContainer}>
                <Text style={styles.progText}>Dia das Crianças</Text>
            </View> 
        </View>
        
        <Text style={styles.subTitle}>Selecione um dos eventos abaixo</Text>

        <FlatList data={events} keyExtractor={ event => String(event.id_event) } 
        style={styles.eventsList} showsVerticalScrollIndicator={false} renderItem={ ({ item: event }) => (
            <TouchableOpacity style={styles.event} onPress={ () => navigateToEventDetail(event) }>
                <Image source={iconTest} style={styles.imgEvent}></Image>
                <View style={styles.eventLeft}>
                    <Text style={styles.eventProperty }>{event.title}</Text>
                    <Text style={styles.eventProperty }>Data: {event.date}</Text>
                    <View style={styles.eventAuthorization}>
                        <Text style={[background(event.situation), styles.eventPropertyAuthorization]}>
                            {event.situation}
                        </Text>
                        {alterIcon(event.situation)}
                    </View>
                </View>
            </TouchableOpacity>
        )}/>
    </View>
}