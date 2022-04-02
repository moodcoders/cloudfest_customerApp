import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComponents = () => {

    return (
        <TouchableOpacity style={styles.button} onPress={() => console.log(' button pressed')}>
            <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
    );
}
export default ButtonComponents;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: '#c9dafa',
        width: '50%',
        marginTop: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

