import React, { useState, useEffect} from 'react';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoHorizontal from '../../assets/logoHorizontal.png';
import api from '../../services/api';

export default function EventDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const message = 'Olá fulano, estamos enviando este email para confirmar a autorização do seu filho no evento "Hopi Hari" no valor de R$"120,00.\n\n'+
    'para mais informações acesse o nosso aplicativo\n\nAtenciosamente,\n Equipe Tschool';

    const [ responsible , setResponsible ] = useState([]);
    const [ school, setSchool ] = useState([]);
    const [ id_event, setEvent ] = useState({});
    const [ id_student, setStudent ] = useState({});

    const event = route.params.event;

    async function loadResp(){
        const studentLogIn = JSON.parse(await AsyncStorage.getItem('@Tschool:studentLoged'));
        const schoolResponse = await api.get('/schoolbyid', { headers: { authorization: studentLogIn.id_school } });
        setResponsible(studentLogIn);
        setSchool(schoolResponse.data[0]);
        setStudent(studentLogIn.id);
    };

    async function defineStudent(){
        const studentLogIn = await AsyncStorage.getItem('@Tschool:studentLoged');
        console.log(studentLogIn);
    };

    

    async function Authorization(){
        //e.preventDefault();

        //const data = ({id_student, id_event});

        //console.log(data);

        try {
            await api.post('participants', { headers: { Authstudent: responsible.id, Authevent: event.id_event } });
            //window.location.reload();
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    useEffect( () => {
        loadResp();
        setEvent(event.id_event);
    }, [event]);

    navigation.setOptions({  
        headerShown: true,
        headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ marginLeft: 12 }} onPress={ navigateBack }>
            <Feather name="arrow-left" size={28} color="#F6B422"/>
        </TouchableOpacity>
        <Image source={logoHorizontal} style={{  width: 130, height: 40, resizeMode: 'stretch', marginLeft: 10}}/>
        </View>
        )
    });

    function navigateBack() {
        navigation.goBack();
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

    const now = new Date;
    const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    const bold = { fontWeight: 'bold' }

    return <View style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.body}>
            <View style={styles.auth}>
                <Text style={styles.text}>
                Eu <Text style={bold}>{responsible.name_res}</Text>, inscrito(a) no CPF sob o nº <Text style={bold}>{responsible.cpf}</Text>, 
                autorizo meu(minha) filho(a) <Text style={bold}>{responsible.name_student}</Text>, 
                matriculado no <Text style={bold}>{responsible.nameclass}</Text> do período da <Text style={bold}>{responsible.period}</Text> da 
                escola <Text style={bold}>{school.nameschool}</Text>, a 
                participar do passeio pedagógico ao <Text style={bold}>{event.title}</Text> a ser realizado em <Text style={bold}>{event.date}</Text>, com  
                saída às <Text style={bold}>{event.hr_ini}</Text> e retorno às <Text style={bold}>{event.hr_fin}</Text>.</Text>

                <Text style={styles.text}>(município) - (UF), {now.getDate()} de {monName [now.getMonth() ]} de {now.getFullYear()}.</Text>
            </View>
        </View>
        <View style={styles.authBox}>
            <TouchableOpacity style={styles.authEvent} onPress={ Authorization }>
                <Text style={styles.authEventText}>Autorizar Evento</Text>
            </TouchableOpacity>
        </View>

    </View>
}