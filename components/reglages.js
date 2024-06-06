import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';

function ReglagesPage ({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavAccueil')}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Reglages</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
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
        alignItems: 'center'
    }

});

export default ReglagesPage;
