import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';

function AccueilPage ({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('NavReglages')}>
                <Image
                    source={{uri: 'https://i.postimg.cc/JzMkbvtg/reglages.png'}} //require('../assets/reglages.png')
                    style={styles.image} 
                    resizeMode='contain'
                />
            </TouchableOpacity>
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
