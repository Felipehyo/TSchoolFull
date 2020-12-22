import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: Boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState<object | null>(null);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Tschool:user');

            //await new Promise(resolve => setTimeout(resolve, 2000));

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
                //RNSplashScreen.hide();
            }
        }

        //loadStorageData();
    });

    async function signIn(email, password) {
        //console.log(email, password)
        try {
            const response = await api.post('/signin', { email, password } );
    
            console.log(response.data);
            if (response) {
                setUser(response.data);

                await AsyncStorage.setItem('@Tschool:user', JSON.stringify(response.data));
                await AsyncStorage.setItem('@Tschool:email', JSON.stringify(response.data.name_res));
                await AsyncStorage.setItem('@Tschool:id', JSON.stringify(response.data.id_res));

                const id_res = await AsyncStorage.getItem('@Tschool:id');
                const responseStudent = await api.get(`/studentsbyres`, {
                    headers: { authorization: id_res }
                });

                //definir primeiro filho como logado
                await AsyncStorage.setItem('@Tschool:studentLoged', JSON.stringify(responseStudent.data[0]));
            }
        } catch (err){
            console.log('Usuário ou Senha Incorretos');
            alert('Usuário ou Senha Incorretos');
        } 
    };

    async function signOut() {
        AsyncStorage.clear().then( () => {
            setUser(null);
        });
    };

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;