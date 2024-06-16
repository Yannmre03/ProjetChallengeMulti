import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function PremiereAnneePage ({navigation}) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Choisi la matière que tu veux étudier</Text>
                <TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('NavChoixChap', {Matière :"MA"})}>
                    <Text style={styles.buttonText}>Maths Abs </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière :"TH"})}>
                    <Text style={styles.buttonText}>Thermo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "EL"})}>
                    <Text style={styles.buttonText}>Elec</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "CH"})}>
                    <Text style={styles.buttonText}>Chimie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière :"SI"})}>
                    <Text style={styles.buttonText}>Signaux</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "OMI"})}>
                    <Text style={styles.buttonText}>OMI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "CAT"})}>
                    <Text style={styles.buttonText}>CATIA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "TAC"})}>
                    <Text style={styles.buttonText}>TAC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', {Matière : "OPT"})}>
                    <Text style={styles.buttonText}>Optique</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
    },
    container: {
        
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'LuckiestGuy',
        fontSize: 45,
        marginBottom: 50
    }
});

export default PremiereAnneePage;
