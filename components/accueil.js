import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function AccueilPage ({navigation}){
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>LEARN'IT.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavSelectionAnnee')}>
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5
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

export default AccueilPage;
