import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function MenuScreen(navigation) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu</Text>
            {
                boxes.map(v => (
                <Box key={v}>Tarea#{v}</Box>
                ))
            }
        </View>
    );
}

export default MenuScreen;