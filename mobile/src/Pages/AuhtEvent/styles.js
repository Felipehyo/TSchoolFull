import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    body: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
    },
    auth: {

    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16,
        marginTop: 0,
        color: '#13131a',
        padding: 12
    },
    authBox: {
        marginTop: 15,
    },
    authEvent: {
        backgroundColor: '#3DB39E',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    authEventText: {
        fontSize: 25,
        lineHeight: 28,
        paddingBottom: 5,
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#fff'
    },
});