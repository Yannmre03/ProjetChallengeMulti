import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ChoixChapPage ({route, navigation}) {
    const { Matière } = route.params;  // Récupère le nom de la matiere choisie

    if (Matière === "MA") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
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
    } else if(Matière === "TH") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TH", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TH",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TH",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TH", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    } else if(Matière === "EL") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "EL", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "EL",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "EL",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "EL", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "CH") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CH", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CH",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CH",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CH", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CH", Chap:5 })}>
                        <Text style={styles.buttonText}>Chapitre 5</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "SI") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "SI", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "SI",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "SI",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "SI", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "OMI") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OMI", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OMI",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OMI",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OMI", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OMI", Chap:5 })}>
                        <Text style={styles.buttonText}>Chapitre 5</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "CAT") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "CAT", Chap:1 })}>
                        <Text style={styles.buttonText}>CATIA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "AM") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "AM", Chap:1 })}>
                        <Text style={styles.buttonText}>CATIA</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        );
    }else if(Matière === "TAC") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC", Chap:4 })}>
                        <Text style={styles.buttonText}>Chapitre 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC", Chap:5 })}>
                        <Text style={styles.buttonText}>Chapitre 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "TAC", Chap:6 })}>
                        <Text style={styles.buttonText}>Chapitre 6</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }else if(Matière === "OPT") {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Choisissez le chapitre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OPT", Chap:1 })}>
                        <Text style={styles.buttonText}>Chapitre 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OPT",Chap:2 })}>
                        <Text style={styles.buttonText}>Chapitre 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavChoixCoursExercices', { Matière: "OPT",Chap:3 })}>
                        <Text style={styles.buttonText}>Chapitre 3</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
