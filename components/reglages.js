import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';

function ReglagesPage ({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonRetour} onPress={() => navigation.goBack()}>
                <Text style={styles.TextRetour}>Retour</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Reglages</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonRetour: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200,
        marginBottom:40,
        width: 150
    },
    TextRetour: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        textAlign: 'flex-start',
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    title: {
        color: 'black',
        fontSize: 64,
        marginVertical: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'LuckiestGuy',
        alignItems: 'center'
    }

});

export default ReglagesPage;
