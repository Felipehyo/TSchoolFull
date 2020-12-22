import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    logoImg: {
        width: 150,
        height: 48,
        resizeMode: 'stretch',
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 35,
        color: '#13131a'
    },

    subTitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    //List Cotainer Events

    eventsList: {
        marginTop: 18
    },
    event: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 14
    },
    eventProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    eventAuthorization: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 15,
        marginTop: 10,
    },
    eventPropertyAuthorization: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        padding: 3,
        width: 200,
        textAlign: 'center',
        borderRadius: 12,
        backgroundColor: '#FFB92D',
        marginRight: -18,
        lineHeight: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 7,

        elevation: 3,
    },
    icon: {
        
    },
    iconPendent: {
        width: 30,
        height: 30,
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
    }
});