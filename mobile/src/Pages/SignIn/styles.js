import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20
    },

    form: {
        alignItems: 'center',

    },

    img: {
        marginBottom: 70
    },

    email: {
         textAlign: 'left',
         width: 250, 
         borderBottomColor: '#909090', 
         color: '#707070', 
         borderBottomWidth: 1, 
         marginBottom: 15,
         fontSize: 16
    },

    pass: {
         textAlign: 'left', 
         width: 250, 
         color: '#707070', 
         borderBottomColor: '#909090', 
         borderBottomWidth: 1,
         fontSize: 16
    },

    login: {
        marginTop: 90,
        alignItems: 'center',
        backgroundColor: '#F6B422',
        padding: 10,
        width: 250,
        elevation: 2
    },

    logintxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 20,
    },

    forgetpass: {
        marginTop: 13,
        color: '#F6B422',
        fontWeight: 'bold'
    },
    
});