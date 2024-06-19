import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';

function AccueilPage ({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.navigationButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('NavReglages')}>
                <Image
                    source={{uri: 'https://i.postimg.cc/fW0JpbLc/engrenage.png'}} //require('../assets/reglages.png')
                    style={styles.image} 
                    resizeMode='contain'
                />
                
            </TouchableOpacity>
            <Image
                    source={{uri: 'https://i.postimg.cc/Y9QNN6rf/logo.png'}} //require('../assets/reglages.png')
                    style={styles.image2} 
                    resizeMode='contain'
            />
            
            </View>
            <Text style={styles.title}>LEARN'IT</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavSelectionAnnee')}>
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,  
        height: 67,
        alignItems:'flex-start',
      },
    image2: {
        width: 100*1.2,  
        height: 67*1.2,
        alignItems:'flex-end',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'center', 
        fontFamily: 'LuckiestGuy',
    },
    buttonRetour: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'flex-start',
        marginRight: 200
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',  // Ensures space between buttons
        width: '100%',  // Full width to allow space distribution
        paddingHorizontal: 0,  // Padding on sides for aesthetic spacing
        marginBottom: 50
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EBE5DA'
    },
    title: {
        color: 'black',
        fontSize: 64,
        marginVertical: 150,  
        fontFamily: 'LuckiestGuy',  
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default AccueilPage;
