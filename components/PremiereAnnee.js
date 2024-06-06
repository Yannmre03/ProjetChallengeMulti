import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function PremiereAnneePage ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choisi la matière que tu veux étudier</Text>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Matière 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Matière 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Matière 3</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
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
        
        fontSize: 45,
        marginBottom: 150
    }
});

export default PremiereAnneePage;
