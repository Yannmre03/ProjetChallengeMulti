import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function SelectionAnnee ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Je suis en : </Text>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('NavPremAnnee')}>
                <Text style={styles.buttonText}>1ère année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>2ème année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>3ème année</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        marginVertical: 10,
    },
    button2: {
        backgroundColor: 'black',
        paddingHorizontal: 55,
        paddingVertical: 20,
        borderRadius: 5,
        marginVertical: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'center', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    title: {
        color: 'black',
        fontSize: 64,
        marginBottom: 150
    }
});

export default SelectionAnnee;
