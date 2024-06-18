import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function SelectionAnnee({ navigation }) {
    const showDevelopmentAlert = () => {
        Alert.alert("En cours de développement", "Cette fonctionnalité sera bientôt disponible.", [{ text: "OK" }]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button3} onPress={() => navigation.goBack()}>
                <Text style={styles.TextRetour}>BACK</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Je suis en : </Text>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('NavPremAnnee')}>
                <Text style={styles.buttonText}>1ère année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showDevelopmentAlert}>
                <Text style={styles.buttonText}>2ème année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showDevelopmentAlert}>
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
    button3: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200,
        marginBottom: 40,
        width: 100
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
    },
    TextRetour: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
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
        fontFamily: 'LuckiestGuy',
        marginBottom: 50
    }
});

export default SelectionAnnee;
