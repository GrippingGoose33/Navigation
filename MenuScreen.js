import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Component/Box'

const boxes = new Array(10).fill(null).map((v, i) => i+1);

const task = [
    {id: 1, description: "ir de compras"},
    {id: 2, description: "ir de Chango"},
    {id: 3, description: "Ser programador"},
    {id: 4, description: "Depecion"},
    {id: 5, description: "Existir"},
    {id: 6, description: "Trabajar"}
    {id: 7, description: "Tarea"}
]

function MenuScreen({navigation}) {

    return (
        <View style = {styles.root}>
            <View>
            {
                tasks.map((task, v)=> (
                <Box key={v}>
                    Tarea#{task.id}
                    <Button
                        color="#455q64"
                        title="Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: task.id,
                        description: task.description
                        })}
                    />
                </Box>
                ))
            }
            </View>

            <View style={styles.containerNavBottom}>
            <Button
                color="#455a64"
                title="Atras"
                onPress={() => navigation.goBack()}
            />


            <Button
                color="#455a64"
                title="Home"
                onPress={() => navigation.popToTop()}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccff90'
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    containerNavBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        padding: 5,
        width:'100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
    }

})

export default MenuScreen;