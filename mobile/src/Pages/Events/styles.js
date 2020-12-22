import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 15
    },

    logoImg: {
        width: 150,
        height: 48,
        resizeMode: 'stretch',
    },

    title: {
        fontSize: 18,
        marginBottom: 16,
        marginTop: 0,
        color: '#13131A'
    },

    progContainer: {
        width: '100%',
        height: 173,
        elevation: 3,
        marginBottom: 15
    },

    progImage: {
        width: '100%',
    },

    progTextContainer: {
        width: 150,
        marginTop: -50,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },

    progText: {
        fontSize: 20,
        lineHeight: 22,
        padding: 6,
        color: '#FFF',
        fontWeight: 'bold',
    },

    subTitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    /*Estilização container de evento*/

    eventsList: {
        marginTop: 18
    },

    event: {
        paddingLeft: 0,
        paddingRight: 24,
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 14,
        alignItems: 'center',
        elevation: 3
    },

    imgEvent: {
        width: 105,
        height: 67
    },

    eventProperty: {
        marginLeft: 7,
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },
    eventAuthorization: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        borderRadius: 15,
        marginTop: 2,
    },
    eventPropertyAuthorization: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        padding: 3,
        width: '70%',
        textAlign: 'center',
        borderRadius: 12,
        lineHeight: 14,

        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 7,
    },
    icon: {
        
    },
    iconPendent: {
        width: 25,
        height: 25,
        marginLeft: -15
        // elevation: 5
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#F6B422',
        fontSize: 15,
        fontWeight: 'bold'
    },
});