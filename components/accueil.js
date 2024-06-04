import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AccueilPage = () => {
    const [message, setMessage] = useState('');

    const onButtonClick = () => {
        setMessage('Bienvenue Grceegoire');
    };

    return (
        <View style={styles.container}>
            <h1 style= {{color: 'green'}}>LEARN'IT.</h1>
            <Text>Bonjour</Text>
            <Button title="Click" onPress={onButtonClick} />
            {message !== '' && <Text>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
        backgroundColor: 'red',
    }
});

export default AccueilPage;