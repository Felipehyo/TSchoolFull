import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // paddingHorizontal: 24,
    },
    imgEvent: {
        width: '100%',
        resizeMode: 'stretch',
        height: 200,
    },
    backIcon: {
        paddingTop: Constants.statusBarHeight + 20,
        position: 'absolute',
        marginLeft: 15
    },

    body: {
        // paddingHorizontal: 15,
    },
    event: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 14,
    },
    eventView: {
        flexDirection: 'row',
        marginBottom: 15
    },
    eventPropertyTitle: {
        fontSize: 23,
        color: '#41414d',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    eventProperty: {
        fontSize: 15,
        lineHeight: 24,
        color: '#41414d',
        marginLeft: 12
    },
    authBox: {
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
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


    contactBox: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 14
    },
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#13131a',
        lineHeight: 20
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#F6B422',
        borderRadius: 8,
        height: 40,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
});