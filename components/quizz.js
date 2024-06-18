import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import ChimieChap1 from '../assets/quiz/ChimieChap1.json';
import ChimieChap2 from '../assets/quiz/ChimieChap2.json';
import ChimieChap3 from '../assets/quiz/ChimieChap3.json';
import ChimieChap4 from '../assets/quiz/ChimieChap4.json';
import ChimieChap5 from '../assets/quiz/ChimieChap5.json';
//import ElecChap1 from '../assets/quiz/ElecChap1.json';
import ElecChap2 from '../assets/quiz/ElecChap2.json';
import ElecChap3 from '../assets/quiz/ElecChap3.json';
import ElecChap4 from '../assets/quiz/ElecChap4.json';
import MathsAbsChap0 from '../assets/quiz/MathsAbsChap0.json';
import MathsAbsChap1 from '../assets/quiz/MathsAbsChap1.json';
import MathsAbsChap2 from '../assets/quiz/MathsAbsChap2.json';
import MathsAbsChap3 from '../assets/quiz/MathsAbsChap3.json';
import MathsAbsChap4 from '../assets/quiz/MathsAbsChap4.json';
import OptiqueChap1 from '../assets/quiz/OptiqueChap1.json';
import OptiqueChap2 from '../assets/quiz/OptiqueChap2.json';
import OptiqueChap3 from '../assets/quiz/OptiqueChap3.json';
import OptiqueQuizCoursEntier from '../assets/quiz/OptiqueQuizCoursEntier.json';
import SignauxChap1 from '../assets/quiz/SignauxChap1.json';
import SignauxChap2 from '../assets/quiz/SignauxChap2.json';
import SignauxChap3 from '../assets/quiz/SignauxChap3.json';
import SignauxChap4 from '../assets/quiz/SignauxChap4.json';
import ThermoChap1 from '../assets/quiz/ThermoChap1.json';
import ThermoChap2 from '../assets/quiz/ThermoChap2.json';
import ThermoChap3 from '../assets/quiz/ThermoChap3.json';
import ThermoChap4 from '../assets/quiz/ThermoChap4.json';
import AnalyseMeca from '../assets/quiz/AnalyseMeca.json';
import Catia from '../assets/quiz/Catia.json';

function QuizzPage({ navigation, route }) {
    const [quizIndex, setQuizIndex] = useState(0);  // État pour l'index du quiz actuel
    const [selectedId, setSelectedId] = useState(null);  // État pour la réponse sélectionnée
    const [answered, setAnswered] = useState(false);     // État pour gérer si une réponse a déjà été donnée
    const [score, setScore] = useState(0);  // État pour le score
    const { Mat, Chapitre } = route.params;
    // Accéder au quiz actuel basé sur quizIndex
    let quizData;
    if (Mat === "CH") {
        switch (Chapitre) {
            case 1: quizData = ChimieChap1; break;
            case 2: quizData = ChimieChap2; break;
            case 3: quizData = ChimieChap3; break;
            case 4: quizData = ChimieChap4; break;
            case 5: quizData = ChimieChap5; break;
            default: quizData = ChimieChap1; break;
        }
    } else if (Mat === "EL") {
        switch (Chapitre) {
            //case 1: quizData = ElecChap1; break;
            case 2: quizData = ElecChap2; break;
            case 3: quizData = ElecChap3; break;
            case 4: quizData = ElecChap4; break;
            default: quizData = ElecChap2; break;
        }
    } else if (Mat === "MA") {
        switch (Chapitre) {
            case 0: quizData = MathsAbsChap0; break;
            case 1: quizData = MathsAbsChap1; break;
            case 2: quizData = MathsAbsChap2; break;
            case 3: quizData = MathsAbsChap3; break;
            case 4: quizData = MathsAbsChap4; break;
            default: quizData = MathsAbsChap0; break;
        }
    } else if (Mat === "OPT") {
        switch (Chapitre) {
            case 1: quizData = OptiqueChap1; break;
            case 2: quizData = OptiqueChap2; break;
            case 3: quizData = OptiqueChap3; break;
            case 4: quizData = OptiqueQuizCoursEntier; break;
            default: quizData = OptiqueChap1; break;
        }
    } else if (Mat === "SI") {
        switch (Chapitre) {
            case 1: quizData = SignauxChap1; break;
            case 2: quizData = SignauxChap2; break;
            case 3: quizData = SignauxChap3; break;
            case 4: quizData = SignauxChap4; break;
            default: quizData = SignauxChap1; break;
        }
    } else if (Mat === "TH") {
        switch (Chapitre) {
            case 1: quizData = ThermoChap1; break;
            case 2: quizData = ThermoChap2; break;
            case 3: quizData = ThermoChap3; break;
            case 4: quizData = ThermoChap4; break;
            default: quizData = ThermoChap1; break;
        }
    } else if (Mat === "AM") {
        quizData = AnalyseMeca;
    } else if (Mat === "CAT") {
        quizData = Catia;
    }

    // Vérifier si quizData est défini
    if (!quizData) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Quiz data is undefined. Please check the input parameters.</Text>
            </View>
        );
    }

    // Vérifier si le quizIndex est valide
    if (!Object.values(quizData)[quizIndex]) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Quiz index is out of range. Please check the quiz data length.</Text>
            </View>
        );
    }

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
        const totalQ = Object.keys(quizData).length;  // Obtenir le nombre total de questions
        if (quizIndex < totalQ - 1) {
            setQuizIndex(quizIndex + 1);  // Passer au quiz suivant
        } else {
            // Naviguer à la page de résultats et passer le score et le nombre total de questions comme paramètres
            navigation.navigate('NavFinQuizz', { finalScore: score, totalQuestions: totalQ });
        }
    };

    const renderContent = (content) => {
        if (content.startsWith('http')) {
            return <Image source={{ uri: content }} style={styles.image} />;
        } else {
            return <Text style={styles.buttonText}>{content}</Text>;
        }
    };
    const renderQuestion = (content) => {
        if (content.startsWith('http')) {
            return <Image source={{ uri: content }} style={styles.image} />;
        } else {
            return <Text style={styles.title}>{content}</Text>;
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: getBackgroundColor(item.id) }]}
            onPress={() => handlePress(item.id)}
            disabled={answered}
        >
            {renderContent(item.text)}
        </TouchableOpacity>
    );
    function ShowFiche() {
        if (Mat === "MA" && Chapitre === 0 && selectedId !== bonneReponse && answered === true) {
            return (
                <ScrollView>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/Zn0YTCkj/MA0-page-0001.jpg' }}
                        style={styles.imageFiche}
                        resizeMode='contain'
                    />
                    <Image
                        source={{ uri: 'https://i.postimg.cc/rsCpnvk2/MA0-page-0002.jpg' }}
                        style={styles.imageFiche}
                        resizeMode='contain'
                    />
                    <Image
                        source={{ uri: 'https://i.postimg.cc/mrx0kh9V/MA0-page-0003.jpg' }}
                        style={styles.imageFiche}
                        resizeMode='contain'
                    />
                    <Image
                        source={{ uri: 'https://i.postimg.cc/2yc5NnV0/MA0-page-0004.jpg' }}
                        style={styles.imageFiche}
                        resizeMode='contain'
                    />
                </ScrollView>
            );
        }else if (Mat === "MA" && Chapitre === 1 && selectedId !== bonneReponse && answered === true){
            return (
                <ScrollView>
                    <Image
            source={{uri: 'https://i.postimg.cc/430d06Hw/MA1-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
                </ScrollView>
            );
        }else if (Mat === "MA" && Chapitre === 2 && selectedId !== bonneReponse && answered === true){
            return (
                <ScrollView>
                    <Image
            source={{uri: 'https://i.postimg.cc/3xKZBvGd/MA2-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
                </ScrollView>
            );
        }else if (Mat === "MA" && Chapitre === 3 && selectedId !== bonneReponse && answered === true){
            return (
                <ScrollView>
                   <Image
            source={{uri: 'https://i.postimg.cc/GtnqkSry/MA3-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
            <Image
            source={{uri: 'https://i.postimg.cc/TwMrSLS8/MA3-page-0002.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
                </ScrollView>
            );
        }else if (Mat === "MA" && Chapitre === 4 && selectedId !== bonneReponse && answered === true){
            return (
                <ScrollView>
                   <Image
            source={{uri: 'https://i.postimg.cc/4yrZbGy1/MA4-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
            <Image
            source={{uri: 'https://i.postimg.cc/2jq1v8Xh/MA4-page-0002.jpg'}} //require('../assets/reglages.png')
            style={styles.imageFiche} 
            resizeMode='contain'
            />
                </ScrollView>
            );
        }
        return null; // Ne rien afficher si les conditions ne sont pas remplies
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {renderQuestion(question)}
                <FlatList
                    data={reponses}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={1}
                />
                <View style={styles.navigationButtons}>
                    <TouchableOpacity
                        style={styles.buttonRetour}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonSuivant}
                        onPress={handleNextQuiz}
                        disabled={!answered}  // Activer le bouton seulement si une réponse a été donnée
                    >
                        <Text style={styles.buttonText}>Suivant</Text>
                    </TouchableOpacity>
                    
                </View>
                <ShowFiche/>
            </ScrollView>
        </View>
    );
}
    // Adjustments in styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#EBE5DA',
        },
        scoreContainer: {
            alignSelf: 'flex-end',
            marginRight: 10,
            marginTop: 10,
        },
        scoreText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
        },
        scrollContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        navigationButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',  // Ensures space between buttons
            width: '100%',  // Full width to allow space distribution
            paddingHorizontal: 0,  // Padding on sides for aesthetic spacing
            marginBottom: 50
        },
        buttonSuivant: {
            backgroundColor: 'black',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 5,
            width: 150,
            justifyContent: 'center', 
            alignItems: 'center',
        },
        buttonRetour: {
            backgroundColor: 'black',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 5,
            width: 150,
            marginRight: 20
        },
        button: {
            backgroundColor: 'black',
            paddingHorizontal: 25,
            paddingVertical: 20,
            borderRadius: 50,
            marginVertical: 20,
            marginHorizontal: 5,
            width: 300,
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
            marginBottom: 20,
            textAlign: 'center',
        },
        image: {
            width: 100,
            height: 100,
            resizeMode: 'contain',
        },
        errorText: {
            fontSize: 20,
            color: 'red',
            textAlign: 'center',
            marginTop: 20,
        },
        imageFiche: {
            width: 310,  
            height: 439,
            alignItems:'flex-start',
          }
    });
    

export default QuizzPage;
