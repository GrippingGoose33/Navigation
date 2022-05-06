import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Component/Box'

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function MenuScreen({navigation}) {

    return (
        <View style={styles.containerBox}>
            <Text style={styles.text}>Menu</Text>
            <View>
            {
                boxes.map(v => (
                <Box key={v}>
                    Tarea#{v}
                    <Button
                        title="Ir a Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: v,
                        description: 'Descripcion'
                        })}
                    />
                </Box>
                ))
            }
            </View>
        </View>
    );
}

export default MenuScreen;