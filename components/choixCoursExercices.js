import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ChoixCoursExercicesPage ({route, navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veux-tu t'exercer ou apprendre?</Text>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>cours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('NavQuizz')}>s'exercer</Text>
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
    title: {
        color: 'black',
        fontFamily: 'LuckiestGuy',
        fontSize: 45,
        marginBottom: 150
    }
});

export default ChoixCoursExercicesPage;
