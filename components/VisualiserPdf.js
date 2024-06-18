// Importation des dépendances nécessaires
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function VisualiserPDFPage({ route, navigation }) {
    const { Matière, Chap } = route.params;
    if (Matière === "MA"){
        if (Chap === 0){
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView>
                    <Image
                    source={{uri: 'https://i.postimg.cc/Zn0YTCkj/MA0-page-0001.jpg'}} //require('../assets/reglages.png')
                    style={styles.image} 
                    resizeMode='contain'
                    />
                    <Image
                    source={{uri: 'https://i.postimg.cc/rsCpnvk2/MA0-page-0002.jpg'}} //require('../assets/reglages.png') https://i.postimg.cc/mrx0kh9V/MA0-page-0003.jpg
                    style={styles.image} 
                    resizeMode='contain'
                    />
                    <Image
                    source={{uri: 'https://i.postimg.cc/mrx0kh9V/MA0-page-0003.jpg'}} //require('../assets/reglages.png') https://i.postimg.cc/mrx0kh9V/MA0-page-0003.jpg
                    style={styles.image} 
                    resizeMode='contain'
                    />
                     <Image
                    source={{uri: 'https://i.postimg.cc/2yc5NnV0/MA0-page-0004.jpg'}} //require('../assets/reglages.png') https://i.postimg.cc/mrx0kh9V/MA0-page-0003.jpg
                    style={styles.image} 
                    resizeMode='contain'
                    />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </ScrollView>
            ); 
        } else if (Chap === 1){
            return (
            <ScrollView contentContainerStyle={styles.container}>
                <ScrollView>
            <View style={styles.container}>
            <Image
            source={{uri: 'https://i.postimg.cc/430d06Hw/MA1-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            </ScrollView>
            ); 
        }
        else if (Chap === 2){
            return (
            <ScrollView contentContainerStyle={styles.container}>
                <ScrollView>
            <Image
            source={{uri: 'https://i.postimg.cc/3xKZBvGd/MA2-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            ); 
        }
        else if (Chap === 3){
            return (
            <ScrollView contentContainerStyle={styles.container}>
                <ScrollView>
            <View style={styles.container}>
            <Image
            source={{uri: 'https://i.postimg.cc/GtnqkSry/MA3-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <Image
            source={{uri: 'https://i.postimg.cc/TwMrSLS8/MA3-page-0002.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            </ScrollView>
            ); 
            
        }
        else if (Chap === 4){
            return (
            <ScrollView contentContainerStyle={styles.container}>
                <ScrollView>
            <View style={styles.container}>
            <Image
            source={{uri: 'https://i.postimg.cc/4yrZbGy1/MA4-page-0001.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <Image
            source={{uri: 'https://i.postimg.cc/2jq1v8Xh/MA4-page-0002.jpg'}} //require('../assets/reglages.png')
            style={styles.image} 
            resizeMode='contain'
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Retour</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            </ScrollView>
            ); 
            
        }
    }else {
        
        return (
            <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text style ={styles.buttonText}>En cours de développement</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 310,  
        height: 439,
        alignItems:'flex-start',
        marginTop:50
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBE5DA',
    },
    pdf: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default VisualiserPDFPage;