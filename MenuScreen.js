import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Component/Box'

const boxes = new Array(10).fill(null).map((v, i) => i+1);

function MenuScreen({navigation}) {

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#3d5afe'}}>
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

            <View  style = {styles.containerButton}>
                <Box>
                    <Button
                        title="Atras"
                    />
                </Box>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#263238',
        
        margin: 20,
        padding: 5,

        width: 300,
        height: 100,    
    }
})

export default MenuScreen;