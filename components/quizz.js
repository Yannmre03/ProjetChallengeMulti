import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import quizz from '../data.json'; // Assurez-vous que le chemin vers le fichier data.json est correct

function QuizzPage({ navigation }) {
    const { question, reponses, bonneReponse } = quizz.quiz1;

    const handlePress = (id) => {
        const isCorrect = id === bonneReponse;
        const message = isCorrect ? "C'est la bonne réponse !" : "Réponse incorrecte.";
        Alert.alert("Résultat du quiz", message, [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(item.id)}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{question}</Text>
            <FlatList
                data={reponses}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Affichage des réponses en deux colonnes
                contentContainerStyle={styles.container}
            />
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
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 55,
        paddingVertical: 20,
        borderRadius: 50,
        marginVertical: 20,
        marginHorizontal: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'center', 
    },
    title: {
        color: 'black',
        fontSize: 64,
        marginTop: 50,
        marginBottom: 50
    }
});

export default QuizzPage;
