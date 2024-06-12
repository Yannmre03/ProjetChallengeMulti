import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ChoixChapPage ({route, navigation}) {
    const { Matière } = route.params;  // Récupère le nom de la matiere choisie

    if (Matière === "MA") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez la matière que vous voulez étudier</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "MA", Chap :0 })}>
                        <Text style={styles.buttonText}>Chapitre 0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "MA", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "MA",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "MA",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "MA", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Choisissez la matière que vous voulez étudier</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixChap', { Matière: "autre" })}>
                    <Text style={styles.buttonText}>Autre matière</Text>
                </TouchableOpacity>
            </View>
        );
    }
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

export default ChoixChapPage;
