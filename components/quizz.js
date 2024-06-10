import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import quizData from '../data.json'; // Assurez-vous que le chemin vers le fichier data.json est correct

function QuizzPage({ navigation }) {
    const [quizIndex, setQuizIndex] = useState(0);  // État pour l'index du quiz actuel
    const [selectedId, setSelectedId] = useState(null);  // État pour la réponse sélectionnée
    const [answered, setAnswered] = useState(false);     // État pour gérer si une réponse a déjà été donnée
    const [score, setScore] = useState(0);  // État pour le score

    // Accéder au quiz actuel basé sur quizIndex
    const { question, reponses, bonneReponse } = Object.values(quizData)[quizIndex];

    // Réinitialiser pour un nouveau quiz lorsque l'index change
    useEffect(() => {
        setSelectedId(null);
        setAnswered(false);
    }, [quizIndex]);

    const handlePress = (id) => {
        if (!answered) {
            setSelectedId(id);
            setAnswered(true);  // Bloquer les autres réponses une fois qu'une réponse est sélectionnée
            // Mettre à jour le score
            if (id === bonneReponse) {
                setScore(score + 1);
            }
        }
    };

    const getBackgroundColor = (id) => {
        if (!selectedId) return 'black';  // Aucune réponse sélectionnée
        if (id === bonneReponse) return 'green';  // Bonne réponse
        return id === selectedId ? 'red' : 'black';  // Mauvaise réponse sélectionnée
    };

    const handleNextQuiz = () => {
        const totalQuestions = Object.keys(quizData).length;  // Obtenir le nombre total de questions
        if (quizIndex < totalQuestions - 1) {
            setQuizIndex(quizIndex + 1);  // Passer au quiz suivant
        } else {
            // Naviguer à la page de résultats et passer le score et le nombre total de questions comme paramètres
            navigation.navigate('NavFinQuizz', { finalScore: score, totalQuestions });
        }
    };
    

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: getBackgroundColor(item.id) }]}
            onPress={() => handlePress(item.id)}
            disabled={answered}
        >
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
            <Text style={styles.title}>{question}</Text>
            <FlatList
                data={reponses}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
            <TouchableOpacity
                style={styles.buttonSuivant}
                onPress={handleNextQuiz}
                disabled={!answered}  // Activer le bouton seulement si une réponse a été donnée
            >
                <Text style={styles.buttonText}>Suivant</Text>
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
    },
    scoreContainer: {
        alignSelf: 'flex-end',  // Positionner le score en haut à droite
        marginRight: 10,
        marginTop: 10
    },
    scoreText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonSuivant: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
        marginTop: 20,
        width: 150,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 55,
        paddingVertical: 20,
        borderRadius: 50,
        marginVertical: 20,
        marginHorizontal: 5,
        width: 150,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: 32,
        marginTop: 20,
        marginBottom: 20
    }
});

export default QuizzPage;
