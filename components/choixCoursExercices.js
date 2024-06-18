import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ChoixCoursExercicesPage ({route, navigation}) {
    const { Matière, Chap } = route.params;  // Récupère le nom de la matiere choisie et le chapitre
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button3} onPress={() => navigation.goBack()}>
                <Text style={styles.TextRetour}>BACK</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Veux-tu t'exercer ou apprendre?</Text>
            <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('NavVisualiserPdf', { Matière, Chap})}
>
    <Text style={styles.buttonText}>Cours</Text>
</TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('NavQuizz', { Mat : Matière, Chapitre : Chap})}>s'exercer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        fontFamily: 'LuckiestGuy',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 20,
        marginVertical: 10,
    },buttonRetour: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200
    },
    button2: {
        backgroundColor: 'grey',
        fontFamily: 'LuckiestGuy',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 20,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    button3: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200,
        marginBottom:40
    },
    TextRetour: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
    },
    title: {
        color: 'black',
        fontFamily: 'LuckiestGuy',
        fontSize: 45,
        textAlign: 'center',
        marginBottom: 50
    }
});

export default ChoixCoursExercicesPage;
