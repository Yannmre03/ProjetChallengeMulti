import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';

function ReglagesPage ({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reglages</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavSelectionAnnee')}>
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,  
        height: 67,
        alignItems:'flex-start',
        backgroundColor: 'red'
      },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'center', 
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    title: {
        color: 'black',
        fontSize: 64,
        marginVertical: 150,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default ReglagesPage;