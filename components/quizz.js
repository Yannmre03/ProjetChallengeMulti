// Importation des dépendances nécessaires
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import quizz from '../data.json'; // Assurez-vous que le chemin vers le fichier data.json est correct

// Définition du composant QuizzPage
function QuizzPage({ navigation }){
    const { question, answers } = quizz.quiz;
    console.log(question);

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NavPremAnnee')}>
        <Text style={styles.buttonText}>{item.text}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{question}</Text>
        <FlatList
          data={answers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}  // Affichage des réponses en deux colonnes
          contentContainerStyle={styles.container}
        />
      </View>
    );
  };

// Styles utilisés dans le composant
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

// Exportation du composant pour une utilisation ailleurs dans l'application
export default QuizzPage;
