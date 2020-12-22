import React, { useContext, useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import logoInit from '../../assets/logoInit.png';
import styles from './styles';

import AuthContext from '../../contexts/auth';

export default function SignIn() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const {signed, signIn} = useContext(AuthContext);

    //console.log(signed);

    async function handleSignIn() {
        if (email==='' || password==='') {
           return alert('Por favor preencher login e senha!');
        };
        //console.log(email, password);
        //alert(password);
        const response = await signIn(email, password);
    }

    async function handleForgetPass() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Image style={styles.img} source={logoInit}/>
                
                <TextInput style={styles.email} 
                    type="email"
                    value={email} 
                    placeholder="Email" 
                    autoCorrect={false}
                    onChangeText={ e => setEmail(e) }
                />
                <TextInput style={styles.pass} 
                    type='password'
                    textContentType="password"
                    value={password}
                    placeholder="Pass" 
                    autoCorrect={false}
                    onChangeText={ e => setPassword(e) } 
                />

                <TouchableOpacity style={styles.login} onPress={handleSignIn}>
                    <Text style={styles.logintxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgetPass}>
                    <Text style={styles.forgetpass}>Esqueci minha senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}