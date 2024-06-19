import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function FinQuizzPage({ route, navigation }) {
    const { finalScore, totalQuestions } = route.params;  // Récupérer le score final et le nombre total de questions

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button3} onPress={() => navigation.goBack()}>
                <Text style={styles.TextRetour}>Retour</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Vous avez fini les quizz pour cette matière !</Text>
            <Text style={styles.score}>Score: {finalScore}/{totalQuestions}</Text>  
            
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('NavAccueil')}>
                <Text style={styles.buttonText}>Menu principal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#EBE5DA'
    },buttonRetour: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200
    },
    score: {
        color: 'black',
        fontSize: 30,
        fontFamily:'LuckiestGuy',
        marginBottom: 50
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
        textAlign: 'center', 
    },
    TextRetour: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'LuckiestGuy',
        textAlign: 'center'
    },
    button3: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200,
        marginBottom:40,
        width: 100
    },
    title: {
        color: 'black',
        fontSize: 64,
        textAlign: 'center', 
        fontFamily: 'LuckiestGuy',
        marginBottom: 50
        
    }
});

export default FinQuizzPage;
