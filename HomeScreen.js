import React from 'react';
import { View, Text } from 'react-native';
import './styles.js';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
            title="ir a Detalle"
            onPress={() => navigation.navigate("Detalle")}
            />
        </View>
    );
}

export default HomeScreen;