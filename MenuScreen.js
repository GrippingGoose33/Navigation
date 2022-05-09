import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Component/Box'

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function MenuScreen({navigation}) {

    return (
        <View style = {styles.root}>
            <View>
            {
                boxes.map(v => (
                <Box key={v}>
                    Tarea#{v}
                    <Button
                        color="#455q64"
                        title="Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: v,
                        description: `Descripcion ${v}`
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