import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Component/Box'

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function MenuScreen({navigation}) {

    return (
        <View>
            <View style = {styles.containerBox}>
            {
                boxes.map(v => (
                <Box key={v}>
                    Tarea#{v}
                    <Button
                        title="Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: 1,
                        description: 'Descripcion'
                        })}
                    />
                </Box>
                ))
            }
            </View>

            <View  style = {styles.containerBootom}>
                <Button
                    title="Atras"
                />
            </View>

        </View>
    );
}

export default MenuScreen;