import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
            title="ir a Menu"
            onPress={() => navigation.navigate('Menu')}
            />
        </View>
    );
}

export default HomeScreen;