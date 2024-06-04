import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeComponent = () => {
    const [message, setMessage] = useState('');

    const onButtonClick = () => {
        setMessage('Bienvenue Grceegoire');
    };

    return (
        <View style={styles.container}>
            <Text>Bonjour</Text>
            <Button title="Click" onPress={onButtonClick} />
            {message !== '' && <Text>{message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default WelcomeComponent;