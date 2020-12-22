import React from 'react';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoHorizontal from '../../assets/logoHorizontal.png';

/*Imagens staticas para fins de teste*/
import imgEvent from '../../assets/imgEventStatic.jpg';
import progStatic from '../../assets/progStatic.png';

export default function EventDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const message = 'Olá fulano, estamos enviando este email para confirmar a autorização do seu filho no evento "Hopi Hari" no valor de R$"120,00.\n\n'+
    'para mais informações acesse o nosso aplicativo\n\nAtenciosamente,\n Equipe Tschool';

    const event = route.params.event;

    function navigateBack() {
        navigation.goBack();
    };

    function navigateToAuthEvent(event) {
        navigation.navigate('AuthEvent', { event } );
    };

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Autorização do evento: hopi hari',
            recipients: ['felipehyo@gmail.com'],
            body: message
        });
    };

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55 11 95992-5142&text=${message}`)
    };

    const bold = { fontWeight: 'bold' }

    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
            <Image style={styles.imgEvent} source={imgEvent}></Image>
            <TouchableOpacity style={styles.backIcon} onPress={ navigateBack }>
                <Feather name="arrow-left" size={28} color="#FFF"/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={styles.event}>
                <Text style={styles.eventPropertyTitle}>{event.title}</Text>
                <View style={styles.eventView}>
                    <MaterialCommunityIcons name="map-marker-outline" size={24} color="#F6B422"/>
                    <Text style={styles.eventProperty}>{event.endereco}</Text>
                </View>
                <View style={styles.eventView}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#F6B422"/>
                    <Text style={styles.eventProperty}>{event.date}</Text>
                </View>
                <View style={styles.eventView}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="#F6B422"/>
                    <Text style={styles.eventProperty}>Das {event.hr_ini} as {event.hr_fin}</Text>
                </View>
                <View style={styles.eventView}>
                    {/* <MaterialCommunityIcons name="map-marker-outline" size={24} color="#F6B422"/> */}
                    <Text style={styles.eventProperty}><Text style={bold}>Descrição:</Text> {event.description}</Text>
                </View>
                <View style={styles.eventView}>
                    {/* <MaterialCommunityIcons name="map-marker-outline" size={24} color="#F6B422"/> */}
                    <Text style={styles.eventProperty}><Text style={bold}>Observações:</Text> {event.observation}</Text>
                </View>
                <View style={styles.eventView}>
                    <MaterialCommunityIcons name="cash-multiple" size={24} color="#F6B422"/>
                        <Text style={styles.eventProperty}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(event.value)}</Text>
                </View>
            </View>
            
            <View style={styles.authBox}>
                    <TouchableOpacity style={styles.authEvent} onPress={ () => navigateToAuthEvent(event) }>
                        <Text style={styles.authEventText}>Autorizar Evento</Text>
                    </TouchableOpacity>
            </View>

            {/* <View style={styles.contactBox}>
                <Text style={styles.contactTitle}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={ sendWhatsapp }>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={ sendEmail }>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    </ScrollView>
}